import { html, css, nothing, type PropertyValues, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { multiLineChart, type ChartSeries, type SparklinePoint } from "./utils/render-helpers";
import { fetchStatisticsSeries, formatDuration } from "./utils/format";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);
const HISTORY_DAYS = 30;
const REFETCH_INTERVAL_MS = 10 * 60 * 1000;

/**
 * Sleep duration + quality over 30 days, from the `suunto_app:sleep_duration`
 * / `suunto_app:sleep_quality` daily long-term statistics - persist
 * indefinitely, unlike the ~10-day-purged recorder state history that
 * suunto-recovery-trends-card reads from (a different, live-entity source).
 * Different units (hours vs %), so each line is normalized to its own range.
 */
@customElement("suunto-sleep-trends-card")
export class SuuntoSleepTrendsCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;
  @state() private _durationHistory: SparklinePoint[] = [];
  @state() private _qualityHistory: SparklinePoint[] = [];

  private _historyKey?: string;
  private _historyFetchedAt = 0;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-sleep-trends-card" };
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
      const [duration, quality] = await Promise.all([
        fetchStatisticsSeries(this.hass, "suunto_app:sleep_duration", hours, "mean"),
        fetchStatisticsSeries(this.hass, "suunto_app:sleep_quality", hours, "mean"),
      ]);
      this._durationHistory = duration;
      this._qualityHistory = quality;
    } catch {
      // Statistics are best-effort - the card still works from live state alone.
      this._durationHistory = [];
      this._qualityHistory = [];
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

    const duration = get("sleep_duration");
    if (!duration || UNAVAILABLE_STATES.has(duration.state)) {
      return this._message("mdi:power-sleep", t(hass, "empty.sleep_trends.title"));
    }
    const quality = get("sleep_quality");

    const series: ChartSeries[] = [];
    if (this._durationHistory.length) series.push({ points: this._durationHistory, colorVar: "var(--sc-pulse)" });
    if (this._qualityHistory.length) series.push({ points: this._qualityHistory, colorVar: "var(--sc-amber)" });

    const durationParts = formatDuration(Number(duration.state) * 60);

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:power-sleep"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.sleep_trends.title")}</div>
            <div class="subtitle">${t(hass, "card.sleep_trends.subtitle")}</div>
          </div>
        </div>

        ${multiLineChart(series, 300, 80, false)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${t(hass, "stat.duration")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${t(hass, "stat.quality")}</span>
        </div>

        <div class="stats two">
          ${this._stat(`${durationParts.value} ${durationParts.unit}`, t(hass, "stat.duration"))}
          ${quality && !UNAVAILABLE_STATES.has(quality.state)
            ? this._stat(`${Math.round(Number(quality.state))}%`, t(hass, "stat.quality"))
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
    "suunto-sleep-trends-card": SuuntoSleepTrendsCard;
  }
}
