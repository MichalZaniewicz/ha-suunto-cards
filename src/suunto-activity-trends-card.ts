import { html, css, nothing, type PropertyValues, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { multiLineChart, type ChartSeries, type SparklinePoint } from "./utils/render-helpers";
import { fetchStatisticsSeries, dailyTotalsFromCumulative } from "./utils/format";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);
const HISTORY_DAYS = 14;
const REFETCH_INTERVAL_MS = 10 * 60 * 1000;

/**
 * Daily steps + energy over 14 days, from the `suunto_app:steps` /
 * `suunto_app:energy` external statistics. Both are "sum"-class (an
 * ever-increasing cumulative, not a per-hour value), so the fetched hourly
 * points are diffed into daily totals client-side via
 * `dailyTotalsFromCumulative` rather than read directly.
 */
@customElement("suunto-activity-trends-card")
export class SuuntoActivityTrendsCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;
  @state() private _stepsHistory: SparklinePoint[] = [];
  @state() private _energyHistory: SparklinePoint[] = [];

  private _historyKey?: string;
  private _historyFetchedAt = 0;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-activity-trends-card" };
  }

  public setConfig(config: SuuntoCardConfig): void {
    this._config = config;
    this._configuredDeviceId = config.device_id;
  }

  public getCardSize(): number {
    return 4;
  }

  protected willUpdate(changed: PropertyValues): void {
    if (changed.has("hass") && this.hass && this._config) {
      void this._maybeFetchHistory();
    }
  }

  private async _maybeFetchHistory(): Promise<void> {
    if (!this.hass) return;
    const key = this._configuredDeviceId ?? "auto";
    const now = Date.now();
    if (key === this._historyKey && now - this._historyFetchedAt < REFETCH_INTERVAL_MS) {
      return;
    }
    this._historyKey = key;
    this._historyFetchedAt = now;

    const hours = HISTORY_DAYS * 24;
    try {
      const [steps, energy] = await Promise.all([
        fetchStatisticsSeries(this.hass, "suunto_app:steps", hours, "sum"),
        fetchStatisticsSeries(this.hass, "suunto_app:energy", hours, "sum"),
      ]);
      this._stepsHistory = dailyTotalsFromCumulative(steps);
      this._energyHistory = dailyTotalsFromCumulative(energy);
    } catch {
      // Statistics are best-effort - the card still works from live state alone.
      this._stepsHistory = [];
      this._energyHistory = [];
    }
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) return nothing;
    this._syncTheme();

    const resolved = this._resolveEntities();
    if ("error" in resolved) return resolved.error;
    const { map } = resolved;
    const hass = this.hass;
    const get = (key: string) => (map[key] ? hass.states[map[key]] : undefined);

    const steps = get("daily_steps");
    if (!steps || UNAVAILABLE_STATES.has(steps.state)) {
      return this._message("mdi:shoe-print", t(hass, "empty.activity_trends.title"));
    }
    const energy = get("daily_energy");

    const series: ChartSeries[] = [];
    if (this._stepsHistory.length) series.push({ points: this._stepsHistory, colorVar: "var(--sc-pulse)" });
    if (this._energyHistory.length) series.push({ points: this._energyHistory, colorVar: "var(--sc-amber)" });

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:shoe-print"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.activity_trends.title")}</div>
            <div class="subtitle">${t(hass, "card.activity_trends.subtitle")}</div>
          </div>
        </div>

        ${multiLineChart(series, 300, 80, false)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${t(hass, "stat.steps")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${t(hass, "stat.energy")}</span>
        </div>

        <div class="stats two">
          ${this._stat(Math.round(Number(steps.state)).toLocaleString(hass.language), t(hass, "stat.steps"))}
          ${energy && !UNAVAILABLE_STATES.has(energy.state)
            ? this._stat(`${Math.round(Number(energy.state))} kcal`, t(hass, "stat.energy"))
            : nothing}
        </div>
      </ha-card>
    `;
  }

  private _stat(value: string, label: string) {
    return html`
      <div class="stat">
        <div class="stat-value">${value}</div>
        <div class="stat-label">${label}</div>
      </div>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .stats.two {
        grid-template-columns: repeat(2, 1fr);
      }
      .chart-legend {
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
      }
      .legend-item {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.76rem;
        color: var(--secondary-text-color);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-activity-trends-card": SuuntoActivityTrendsCard;
  }
}
