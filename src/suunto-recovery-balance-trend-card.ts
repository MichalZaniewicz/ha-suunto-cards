import { html, css, nothing, type PropertyValues, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { multiLineChart, type ChartSeries, type SparklinePoint } from "./utils/render-helpers";
import { fetchStatisticsSeries, dailyMeanFromHourly } from "./utils/format";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);
const HISTORY_DAYS = 14;
const REFETCH_INTERVAL_MS = 10 * 60 * 1000;

/**
 * Recovery balance + stress level over 14 days, from the
 * `suunto_app:recovery_balance` / `suunto_app:stress` external statistics
 * (30-min cadence, imported hourly). Distinct from suunto-recovery-card
 * (today's live snapshot) and suunto-recovery-trends-card (resting HR/HRV
 * baseline) - this is the day-to-day recovery-balance/stress signal, which
 * had no trend view anywhere before. Collapsed to one point per day (via
 * dailyMeanFromHourly) so 14 days of real 30-min samples don't render as an
 * overly noisy intraday line.
 */
@customElement("suunto-recovery-balance-trend-card")
export class SuuntoRecoveryBalanceTrendCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;
  @state() private _balanceHistory: SparklinePoint[] = [];
  @state() private _stressHistory: SparklinePoint[] = [];

  private _historyKey?: string;
  private _historyFetchedAt = 0;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-recovery-balance-trend-card" };
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
      const [balance, stress] = await Promise.all([
        fetchStatisticsSeries(this.hass, "suunto_app:recovery_balance", hours, "mean"),
        fetchStatisticsSeries(this.hass, "suunto_app:stress", hours, "mean"),
      ]);
      this._balanceHistory = dailyMeanFromHourly(balance);
      this._stressHistory = dailyMeanFromHourly(stress);
    } catch {
      // Statistics are best-effort - the card still works from live state alone.
      this._balanceHistory = [];
      this._stressHistory = [];
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

    const balance = get("recovery_balance");
    if (!balance || UNAVAILABLE_STATES.has(balance.state)) {
      return this._message("mdi:heart-flash", t(hass, "empty.recovery_balance_trend.title"));
    }
    const stress = get("stress_state");

    const series: ChartSeries[] = [];
    if (this._balanceHistory.length) series.push({ points: this._balanceHistory, colorVar: "var(--sc-pulse)" });
    if (this._stressHistory.length) series.push({ points: this._stressHistory, colorVar: "var(--sc-amber)" });

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:heart-flash"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.recovery_balance_trend.title")}</div>
            <div class="subtitle">${t(hass, "card.recovery_balance_trend.subtitle")}</div>
          </div>
        </div>

        ${multiLineChart(series, 300, 80, false)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${t(hass, "stat.recovery_balance")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${t(hass, "stat.stress_level")}</span>
        </div>

        <div class="stats">
          ${this._stat(`${Math.round(Number(balance.state))}%`, t(hass, "stat.recovery_balance"))}
          ${stress && !UNAVAILABLE_STATES.has(stress.state)
            ? this._stat(stress.state, t(hass, "stat.stress_level"))
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
    "suunto-recovery-balance-trend-card": SuuntoRecoveryBalanceTrendCard;
  }
}
