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
const HISTORY_DAYS = 30;
const REFETCH_INTERVAL_MS = 10 * 60 * 1000;

/**
 * Peak Training Effect + peak EPOC over 30 days, from the `suunto_app:pte` /
 * `suunto_app:epoc` daily external statistics - one point per day that had a
 * workout (a day with more than one uses that day's max, per ha-suunto's own
 * statistics.py). Different scales (PTE is 0-5, EPOC is tens-to-hundreds of
 * ml/kg), so `sharedScale: false` - same reasoning as
 * suunto-recovery-balance-trend-card.
 */
@customElement("suunto-training-effect-trend-card")
export class SuuntoTrainingEffectTrendCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;
  @state() private _pteHistory: SparklinePoint[] = [];
  @state() private _epocHistory: SparklinePoint[] = [];

  private _historyKey?: string;
  private _historyFetchedAt = 0;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-training-effect-trend-card" };
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
      const [pte, epoc] = await Promise.all([
        fetchStatisticsSeries(this.hass, "suunto_app:pte", hours, "mean"),
        fetchStatisticsSeries(this.hass, "suunto_app:epoc", hours, "mean"),
      ]);
      this._pteHistory = pte;
      this._epocHistory = epoc;
    } catch {
      // Statistics are best-effort - the card still works from live state alone.
      this._pteHistory = [];
      this._epocHistory = [];
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

    const pte = get("last_pte");
    if (!pte || UNAVAILABLE_STATES.has(pte.state)) {
      return this._message("mdi:lightning-bolt", t(hass, "empty.training_effect_trend.title"));
    }
    const epoc = get("last_epoc");

    const series: ChartSeries[] = [];
    if (this._pteHistory.length) series.push({ points: this._pteHistory, colorVar: "var(--sc-pulse)" });
    if (this._epocHistory.length) series.push({ points: this._epocHistory, colorVar: "var(--sc-amber)" });

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:lightning-bolt"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.training_effect_trend.title")}</div>
            <div class="subtitle">${t(hass, "card.readiness_trend.subtitle")}</div>
          </div>
        </div>

        ${multiLineChart(series, 300, 80, false)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${t(hass, "stat.training_effect")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${t(hass, "stat.epoc")}</span>
        </div>

        <div class="stats">
          ${this._stat(Number(pte.state).toFixed(1), t(hass, "stat.training_effect"))}
          ${epoc && !UNAVAILABLE_STATES.has(epoc.state)
            ? this._stat(Number(epoc.state).toFixed(0), t(hass, "stat.epoc"), "ml/kg")
            : nothing}
        </div>
      </ha-card>
    `;
  }

  private _stat(value: string, label: string, unit?: string) {
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
    "suunto-training-effect-trend-card": SuuntoTrainingEffectTrendCard;
  }
}
