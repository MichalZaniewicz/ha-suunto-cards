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
const HISTORY_DAYS = 90;
const REFETCH_INTERVAL_MS = 10 * 60 * 1000;

/**
 * Performance Management Chart: CTL/ATL/TSB plotted together on one shared
 * scale, since all three are TSS-derived (same unit). Mirrors the classic
 * TrainingPeaks PMC layout - fitness (blue), fatigue (red), form (gold).
 */
@customElement("suunto-pmc-card")
export class SuuntoPmcCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;
  @state() private _ctlHistory: SparklinePoint[] = [];
  @state() private _atlHistory: SparklinePoint[] = [];
  @state() private _tsbHistory: SparklinePoint[] = [];

  private _historyKey?: string;
  private _historyFetchedAt = 0;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-pmc-card" };
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
    const ctlId = map["fitness_ctl"];
    if (!ctlId) return;
    const atlId = map["fatigue_atl"];
    const tsbId = map["form_tsb"];

    const ids = [ctlId, atlId, tsbId].filter((id): id is string => Boolean(id));
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
      this._ctlHistory = parseHistorySeries(result?.[i++]);
      this._atlHistory = atlId ? parseHistorySeries(result?.[i++]) : [];
      this._tsbHistory = tsbId ? parseHistorySeries(result?.[i++]) : [];
    } catch {
      // History API is best-effort - the card still works from live state alone.
      this._ctlHistory = [];
      this._atlHistory = [];
      this._tsbHistory = [];
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

    const ctl = get("fitness_ctl");
    if (!ctl || UNAVAILABLE_STATES.has(ctl.state)) {
      return this._message(
        "mdi:chart-timeline-variant",
        t(hass, "empty.training_load.title"),
        t(hass, "empty.training_load.subtitle")
      );
    }

    const atl = get("fatigue_atl");
    const tsb = get("form_tsb");

    const series: ChartSeries[] = [{ points: this._ctlHistory, colorVar: "var(--sc-pulse)" }];
    if (this._atlHistory.length) series.push({ points: this._atlHistory, colorVar: "var(--sc-bad)" });
    if (this._tsbHistory.length) series.push({ points: this._tsbHistory, colorVar: "var(--sc-amber)" });

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:chart-timeline-variant"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.pmc.title")}</div>
            <div class="subtitle">${t(hass, "card.pmc.subtitle")}</div>
          </div>
        </div>

        ${multiLineChart(series, 300, 80)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${t(hass, "stat.ctl")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-bad)"></i>${t(hass, "stat.atl")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${t(hass, "stat.tsb")}</span>
        </div>

        <div class="stats">
          ${this._stat(Number(ctl.state).toFixed(0), t(hass, "stat.ctl"))}
          ${atl && !UNAVAILABLE_STATES.has(atl.state) ? this._stat(Number(atl.state).toFixed(0), t(hass, "stat.atl")) : nothing}
          ${tsb && !UNAVAILABLE_STATES.has(tsb.state)
            ? this._stat(formatDelta(Number(tsb.state), 1), t(hass, "stat.tsb"))
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
    "suunto-pmc-card": SuuntoPmcCard;
  }
}
