import { html, css, svg, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { formatDelta } from "./utils/format";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

const W = 320;
const H = 120;
const PAD = { left: 28, right: 8, top: 12, bottom: 20 };

/**
 * Form (TSB) over the next four weeks if you rest from today, from ha-suunto
 * 1.0.29's `form_forecast` sensor. A what-if, not a prediction: the subtitle
 * says so, and the peak marker answers "when would I be freshest".
 */
@customElement("suunto-form-forecast-card")
export class SuuntoFormForecastCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-form-forecast-card" };
  }

  public setConfig(config: SuuntoCardConfig): void {
    this._config = config;
    this._configuredDeviceId = config.device_id;
  }

  public getCardSize(): number {
    return 4;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) return nothing;
    this._syncTheme();

    const resolved = this._resolveEntities();
    if ("error" in resolved) return resolved.error;
    const { map } = resolved;
    const hass = this.hass;
    const forecast = map["form_forecast"] ? hass.states[map["form_forecast"]] : undefined;
    const series: number[] = Array.isArray(forecast?.attributes.series)
      ? (forecast!.attributes.series as Array<{ tsb?: unknown }>)
          .map((point) => point?.tsb)
          .filter((v): v is number => typeof v === "number")
      : [];

    if (!forecast || UNAVAILABLE_STATES.has(forecast.state) || series.length < 2) {
      return this._message("mdi:chart-timeline-variant-shimmer", t(hass, "empty.form_forecast.title"));
    }

    const tomorrow = Number(forecast.state);
    const peak = typeof forecast.attributes.peak_tsb === "number" ? forecast.attributes.peak_tsb : Math.max(...series);
    const peakIndex = series.indexOf(Math.max(...series));
    const daysToPeak =
      typeof forecast.attributes.days_to_peak === "number" ? forecast.attributes.days_to_peak : peakIndex + 1;
    const maintenance =
      typeof forecast.attributes.maintenance_tss_week === "number"
        ? forecast.attributes.maintenance_tss_week
        : undefined;

    // Positive form reads "fresh", negative "still tired" - colour the line by
    // where the curve spends its peak, matching the PMC card's convention.
    const colorVar = peak >= 0 ? "var(--sc-good)" : "var(--sc-warn)";
    const colorBg = peak >= 0 ? "var(--sc-good-bg)" : "var(--sc-warn-bg)";

    // Round the scale out to tens so the three gridlines carry clean labels.
    const lo = Math.floor(Math.min(...series, 0) / 10) * 10;
    const hi = Math.max(Math.ceil(Math.max(...series, 0) / 10) * 10, lo + 10);
    const x = (i: number) => PAD.left + (i / (series.length - 1)) * (W - PAD.left - PAD.right);
    const y = (v: number) => PAD.top + ((hi - v) / (hi - lo)) * (H - PAD.top - PAD.bottom);
    const line = series.map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");
    const baseY = y(Math.max(lo, 0));
    const area = `${line} L${x(series.length - 1).toFixed(1)} ${baseY.toFixed(1)} L${x(0).toFixed(1)} ${baseY.toFixed(1)} Z`;
    const ticks = [lo, (lo + hi) / 2, hi];
    const xLabels = [0, 7, 14, 21, series.length - 1].filter((i, pos, all) => i < series.length && all.indexOf(i) === pos);

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon .icon=${this._icon("mdi:chart-timeline-variant-shimmer")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(t(hass, "card.form_forecast.title"))}</div>
            <div class="subtitle">${t(hass, "card.form_forecast.subtitle")}</div>
          </div>
        </div>

        <svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label=${t(hass, "card.form_forecast.title")}>
          ${ticks.map(
            (v) => svg`
              <line class="grid" x1=${PAD.left} x2=${W - PAD.right} y1=${y(v)} y2=${y(v)}></line>
              <text class="axis" x=${PAD.left - 5} y=${y(v) + 3} text-anchor="end">${formatDelta(v)}</text>
            `
          )}
          <path d=${area} fill=${colorBg} stroke="none"></path>
          <path d=${line} fill="none" stroke=${colorVar} stroke-width="2" stroke-linejoin="round"></path>
          <line
            x1=${x(peakIndex)}
            x2=${x(peakIndex)}
            y1=${y(series[peakIndex])}
            y2=${H - PAD.bottom}
            stroke=${colorVar}
            stroke-width="1"
            stroke-dasharray="3 3"
          ></line>
          <circle cx=${x(peakIndex)} cy=${y(series[peakIndex])} r="4" fill=${colorVar}></circle>
          <circle class="start" cx=${x(0)} cy=${y(series[0])} r="3" stroke=${colorVar} stroke-width="2"></circle>
          ${xLabels.map(
            (i) =>
              svg`<text class="axis" x=${x(i)} y=${H - 5} text-anchor=${i === series.length - 1 ? "end" : i === 0 ? "start" : "middle"}>+${i + 1} d</text>`
          )}
        </svg>

        <div class="stats">
          <div class="stat ${tomorrow >= 0 ? "good" : "bad"}">
            <div class="stat-value">${formatDelta(tomorrow)}</div>
            <div class="stat-label">${t(hass, "stat.tomorrow")}</div>
          </div>
          <div class="stat ${peak >= 0 ? "good" : "bad"}">
            <div class="stat-value">${formatDelta(peak)}</div>
            <div class="stat-label">${t(hass, "stat.peak_in", { days: daysToPeak })}</div>
          </div>
          ${maintenance !== undefined
            ? html`
                <div class="stat">
                  <div class="stat-value">
                    ${Math.round(maintenance).toLocaleString(hass.language)}<span class="unit">TSS</span>
                  </div>
                  <div class="stat-label">${t(hass, "stat.maintenance")}</div>
                </div>
              `
            : nothing}
        </div>
      </ha-card>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .chart {
        width: 100%;
        height: auto;
        display: block;
      }
      .chart .grid {
        stroke: var(--divider-color);
        stroke-width: 1;
      }
      .chart .axis {
        font-size: 10px;
        fill: var(--secondary-text-color);
      }
      .chart .start {
        fill: var(--ha-card-background, var(--card-background-color, #fff));
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-form-forecast-card": SuuntoFormForecastCard;
  }
}
