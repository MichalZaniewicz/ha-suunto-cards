import { html, css, nothing, type PropertyValues, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { multiLineChart, type ChartSeries, type SparklinePoint } from "./utils/render-helpers";
import { formatDelta, parseHistorySeries, type RawHistoryPoint } from "./utils/format";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);
const HISTORY_DAYS = 30;
const REFETCH_INTERVAL_MS = 10 * 60 * 1000;

/**
 * Resting HR and HRV trend lines side by side. Different units (bpm vs ms),
 * so each line is normalized to its OWN range (`sharedScale: false`) - the
 * chart shows the SHAPE of each trend, not a shared magnitude.
 */
@customElement("suunto-recovery-trends-card")
export class SuuntoRecoveryTrendsCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;
  @state() private _rhrHistory: SparklinePoint[] = [];
  @state() private _hrvHistory: SparklinePoint[] = [];

  private _historyKey?: string;
  private _historyFetchedAt = 0;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-recovery-trends-card" };
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
    const resolved = this._resolveEntities();
    if ("error" in resolved || !this.hass) return;
    const { map } = resolved;
    const rhrId = map["resting_hr"];
    const hrvId = map["sleep_hrv"];
    if (!rhrId && !hrvId) return;

    const ids = [rhrId, hrvId].filter((id): id is string => Boolean(id));
    const key = ids.join(",");
    const now = Date.now();
    if (key === this._historyKey && now - this._historyFetchedAt < REFETCH_INTERVAL_MS) {
      return;
    }
    this._historyKey = key;
    this._historyFetchedAt = now;

    try {
      const start = new Date(now - HISTORY_DAYS * 86400000).toISOString();
      const result = await this.hass.callApi<RawHistoryPoint[][]>(
        "GET",
        `history/period/${start}?filter_entity_id=${ids.join(",")}&no_attributes`
      );
      let i = 0;
      this._rhrHistory = rhrId ? parseHistorySeries(result?.[i++]) : [];
      this._hrvHistory = hrvId ? parseHistorySeries(result?.[i++]) : [];
    } catch {
      // History API is best-effort - the card still works from live state alone.
      this._rhrHistory = [];
      this._hrvHistory = [];
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

    const rhr = get("resting_hr");
    const hrv = get("sleep_hrv");
    const rhrKnown = rhr && !UNAVAILABLE_STATES.has(rhr.state);
    const hrvKnown = hrv && !UNAVAILABLE_STATES.has(hrv.state);
    if (!rhrKnown && !hrvKnown) {
      return this._message("mdi:heart-pulse", t(hass, "empty.recovery_trends.title"));
    }

    const rhrBaseline = get("resting_hr_baseline");
    const hrvBaseline = get("hrv_baseline");
    const rhrDelta =
      rhrKnown && rhrBaseline && !UNAVAILABLE_STATES.has(rhrBaseline.state)
        ? Number(rhr!.state) - Number(rhrBaseline.state)
        : undefined;
    const hrvDelta =
      hrvKnown && hrvBaseline && !UNAVAILABLE_STATES.has(hrvBaseline.state)
        ? Number(hrv!.state) - Number(hrvBaseline.state)
        : undefined;

    const series: ChartSeries[] = [];
    if (this._rhrHistory.length) series.push({ points: this._rhrHistory, colorVar: "var(--sc-pulse)" });
    if (this._hrvHistory.length) series.push({ points: this._hrvHistory, colorVar: "var(--sc-amber)" });

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:heart-pulse"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.recovery_trends.title")}</div>
            <div class="subtitle">${t(hass, "card.recovery_trends.subtitle")}</div>
          </div>
        </div>

        ${multiLineChart(series, 300, 80, false)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${t(hass, "stat.resting_hr")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${t(hass, "stat.hrv")}</span>
        </div>

        <div class="stats">
          ${rhrKnown
            ? this._stat(
                String(Math.round(Number(rhr!.state))),
                "bpm",
                rhrDelta !== undefined
                  ? t(hass, "stat.resting_hr_delta", { delta: formatDelta(rhrDelta) })
                  : t(hass, "stat.resting_hr"),
                rhrDelta !== undefined ? (rhrDelta <= 0 ? "good" : "bad") : undefined
              )
            : nothing}
          ${hrvKnown
            ? this._stat(
                String(Math.round(Number(hrv!.state))),
                "ms",
                hrvDelta !== undefined
                  ? t(hass, "stat.hrv_delta", { delta: formatDelta(hrvDelta) })
                  : t(hass, "stat.hrv"),
                hrvDelta !== undefined ? (hrvDelta >= 0 ? "good" : "bad") : undefined
              )
            : nothing}
        </div>
      </ha-card>
    `;
  }

  private _stat(value: string, unit: string, label: string, tone?: "good" | "bad") {
    return html`
      <div class="stat ${tone ?? ""}">
        <div class="stat-value">${value}<span class="unit">${unit}</span></div>
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
    "suunto-recovery-trends-card": SuuntoRecoveryTrendsCard;
  }
}
