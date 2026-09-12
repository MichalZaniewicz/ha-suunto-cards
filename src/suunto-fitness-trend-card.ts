import { html, css, nothing, type PropertyValues, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { multiLineChart, type ChartSeries, type SparklinePoint } from "./utils/render-helpers";
import { fetchStatisticsSeries } from "./utils/format";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);
const HISTORY_DAYS = 90;
const REFETCH_INTERVAL_MS = 10 * 60 * 1000;

/**
 * VO2max / estimated VO2max over 90 days, from the `suunto_app:vo2max` /
 * `suunto_app:estimated_vo2max` daily external statistics (ha-suunto
 * 1.0.27+). A 90-day window rather than the 30 days
 * suunto-training-effect-trend-card uses: Suunto only computes VO2max from
 * running/walking workouts, so a shorter window can easily hold zero or one
 * point on a cycling-heavy account. Both series share one y-scale
 * (`sharedScale: true`) since they're the same unit and usually close
 * together, unlike PTE/EPOC's deliberately separate scales.
 */
@customElement("suunto-fitness-trend-card")
export class SuuntoFitnessTrendCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;
  @state() private _vo2maxHistory: SparklinePoint[] = [];
  @state() private _estimatedHistory: SparklinePoint[] = [];

  private _historyKey?: string;
  private _historyFetchedAt = 0;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-fitness-trend-card" };
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
      const [vo2max, estimated] = await Promise.all([
        fetchStatisticsSeries(this.hass, "suunto_app:vo2max", hours, "mean"),
        fetchStatisticsSeries(this.hass, "suunto_app:estimated_vo2max", hours, "mean"),
      ]);
      this._vo2maxHistory = vo2max;
      this._estimatedHistory = estimated;
    } catch {
      // Statistics are best-effort - the card still works from live state alone.
      this._vo2maxHistory = [];
      this._estimatedHistory = [];
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

    const vo2max = get("vo2max");
    if (!vo2max || UNAVAILABLE_STATES.has(vo2max.state)) {
      return this._message(
        "mdi:lungs",
        t(hass, "empty.fitness_trend.title"),
        t(hass, "empty.fitness_trend.subtitle")
      );
    }
    const estimatedVo2max = get("estimated_vo2max");
    const fitnessAge = get("fitness_age");

    const series: ChartSeries[] = [];
    if (this._vo2maxHistory.length) series.push({ points: this._vo2maxHistory, colorVar: "var(--sc-pulse)" });
    if (this._estimatedHistory.length) series.push({ points: this._estimatedHistory, colorVar: "var(--sc-amber)" });

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:lungs"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.fitness_trend.title")}</div>
            <div class="subtitle">${t(hass, "card.pmc.subtitle")}</div>
          </div>
        </div>

        ${multiLineChart(series, 300, 80, true)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${t(hass, "stat.vo2max")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${t(hass, "stat.estimated_vo2max")}</span>
        </div>

        <hr />
        <div class="stats">
          ${this._stat(Number(vo2max.state).toFixed(1), "ml/kg/min", t(hass, "stat.vo2max"))}
          ${estimatedVo2max && !UNAVAILABLE_STATES.has(estimatedVo2max.state)
            ? this._stat(Number(estimatedVo2max.state).toFixed(1), "ml/kg/min", t(hass, "stat.estimated_vo2max"))
            : nothing}
          ${fitnessAge && !UNAVAILABLE_STATES.has(fitnessAge.state)
            ? this._stat(String(Math.round(Number(fitnessAge.state))), "", t(hass, "stat.fitness_age"))
            : nothing}
        </div>
      </ha-card>
    `;
  }

  private _stat(value: string, unit: string, label: string) {
    return html`
      <div class="stat">
        <div class="stat-value">${value}${unit ? html`<span class="unit">${unit}</span>` : nothing}</div>
        <div class="stat-label">${label}</div>
      </div>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
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
    "suunto-fitness-trend-card": SuuntoFitnessTrendCard;
  }
}
