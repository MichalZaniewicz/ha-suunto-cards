import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { t } from "./utils/localize";
import { formatSpeed } from "./utils/format";
import { decouplingBand } from "./utils/patterns";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);
const TREND_HEIGHT = 70;
const COUPLED_LIMIT = 5;

interface HistoryItem {
  start_time?: string;
  activity?: string;
  decoupling_pct: number;
}

/**
 * Heart-rate drift against speed in the newest workout long enough to judge,
 * from ha-suunto 1.0.32's `aerobic_decoupling` sensor: both halves side by
 * side, the drift with its band, and the recent workouts as bars against the
 * 5 % line. Speed, not power, so one value is rough on hilly or windy routes;
 * the bars are there because the trend is the useful part.
 */
@customElement("suunto-aerobic-decoupling-card")
export class SuuntoAerobicDecouplingCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-aerobic-decoupling-card" };
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
    const units = this._config.units ?? "metric";

    const entity = map["aerobic_decoupling"] ? hass.states[map["aerobic_decoupling"]] : undefined;
    if (!entity || UNAVAILABLE_STATES.has(entity.state) || !Number.isFinite(Number(entity.state))) {
      return this._message(
        "mdi:heart-flash",
        t(hass, "empty.aerobic_decoupling.title"),
        t(hass, "empty.aerobic_decoupling.subtitle")
      );
    }
    const pct = Number(entity.state);
    const band = decouplingBand(hass, pct);
    const a = entity.attributes;
    const num = (v: unknown) => (typeof v === "number" && Number.isFinite(v) ? v : undefined);
    const speed1 = num(a.first_half_speed_kmh);
    const speed2 = num(a.second_half_speed_kmh);
    const hr1 = num(a.first_half_hr);
    const hr2 = num(a.second_half_hr);
    const maxSpeed = Math.max(speed1 ?? 0, speed2 ?? 0) || 1;
    const maxHr = Math.max(hr1 ?? 0, hr2 ?? 0) || 1;

    const started = typeof a.start_time === "string" ? new Date(a.start_time) : undefined;
    const subtitle = [
      typeof a.activity === "string" ? a.activity : undefined,
      started && !Number.isNaN(started.getTime())
        ? new Intl.DateTimeFormat(hass.language, { weekday: "short", day: "numeric", month: "short" }).format(started)
        : undefined,
      num(a.analyzed_minutes) !== undefined
        ? t(hass, "aerobic_decoupling.analyzed", { minutes: Math.round(num(a.analyzed_minutes)!) })
        : undefined,
    ]
      .filter(Boolean)
      .join(" · ");

    // Oldest on the left, so the newest bar ends the row.
    const history: HistoryItem[] = (Array.isArray(a.history) ? (a.history as HistoryItem[]) : [])
      .filter((item) => item && typeof item.decoupling_pct === "number")
      .slice()
      .reverse();
    const trendMax = Math.max(12, ...history.map((item) => item.decoupling_pct + 1));

    const speedText = (v: number) => {
      const s = formatSpeed(v, units);
      return `${s.value} ${s.unit}`;
    };
    const halfRow = (label: string, v1: number | undefined, v2: number | undefined, max: number, color: string, fmt: (v: number) => string) =>
      v1 === undefined || v2 === undefined
        ? nothing
        : html`
            <span class="row-label">${label}</span>
            ${[v1, v2].map(
              (v) => html`<div class="hbar">
                <span>${fmt(v)}</span>
                <div class="track"><b style="width:${(v / max) * 100}%;background:${color}"></b></div>
              </div>`
            )}
          `;

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:heart-flash")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(t(hass, "card.aerobic_decoupling.title"))}</div>
            <div class="subtitle">${subtitle}</div>
          </div>
        </div>

        <div class="hero">
          <div class="big">${pct.toFixed(1)}<small>%</small></div>
          <span class="chip ${band.cls}">${band.label}</span>
          <span class="hint">${t(hass, "aerobic_decoupling.hint")}</span>
        </div>

        ${speed1 !== undefined || hr1 !== undefined
          ? html`
              <div class="halves">
                <span></span>
                <span class="col-head">${t(hass, "aerobic_decoupling.first_half")}</span>
                <span class="col-head">${t(hass, "aerobic_decoupling.second_half")}</span>
                ${halfRow(t(hass, "stat.avg_speed"), speed1, speed2, maxSpeed, "var(--sc-pulse)", speedText)}
                ${halfRow(t(hass, "stat.avg_hr"), hr1, hr2, maxHr, "var(--sc-amber)", (v) => `${Math.round(v)} bpm`)}
              </div>
            `
          : nothing}

        ${history.length > 1
          ? html`
              <div>
                <div class="caption">${t(hass, "aerobic_decoupling.trend", { count: history.length })}</div>
                <div class="trend">
                  ${history.map((item, i) => {
                    const value = item.decoupling_pct;
                    const height = Math.max(2, (Math.max(0, value) / trendMax) * TREND_HEIGHT);
                    const tip = [
                      item.activity,
                      item.start_time ? new Date(item.start_time).toLocaleDateString(hass.language) : undefined,
                      `${value.toFixed(1)}%`,
                    ]
                      .filter(Boolean)
                      .join(" · ");
                    return html`<b
                      title=${tip}
                      style="height:${height}px;background:${decouplingBand(hass, value).colorVar};opacity:${i ===
                      history.length - 1
                        ? 1
                        : 0.55}"
                    ></b>`;
                  })}
                  <div class="threshold" style="bottom:${(COUPLED_LIMIT / trendMax) * TREND_HEIGHT}px">
                    <span>${COUPLED_LIMIT} %</span>
                  </div>
                </div>
              </div>
            `
          : nothing}
      </ha-card>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .hero {
        display: flex;
        align-items: flex-end;
        gap: 12px;
        flex-wrap: wrap;
      }
      .big {
        font-size: 2.6rem;
        font-weight: 700;
        line-height: 1;
        font-variant-numeric: tabular-nums;
      }
      .big small {
        font-size: 1rem;
        font-weight: 500;
        color: var(--secondary-text-color);
        margin-left: 2px;
      }
      .hint {
        margin-left: auto;
        font-size: 0.7rem;
        color: var(--secondary-text-color);
      }
      .halves {
        display: grid;
        grid-template-columns: auto 1fr 1fr;
        gap: 8px 12px;
        align-items: center;
        font-size: 0.78rem;
      }
      .col-head {
        font-size: 0.68rem;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .row-label,
      .caption {
        font-size: 0.7rem;
        color: var(--secondary-text-color);
      }
      .caption {
        margin-bottom: 4px;
      }
      .hbar {
        display: flex;
        flex-direction: column;
        gap: 3px;
        min-width: 0;
      }
      .hbar .track {
        height: 8px;
        border-radius: 4px;
        background: var(--divider-color);
        overflow: hidden;
      }
      .hbar b {
        display: block;
        height: 100%;
        border-radius: 4px;
      }
      .hbar span {
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      .trend {
        position: relative;
        height: ${TREND_HEIGHT}px;
        display: flex;
        align-items: flex-end;
        gap: 5px;
      }
      .trend b {
        flex: 1;
        min-width: 0;
        border-radius: 3px 3px 0 0;
      }
      .threshold {
        position: absolute;
        left: 0;
        right: 0;
        border-top: 1.5px dashed var(--secondary-text-color);
        opacity: 0.6;
        pointer-events: none;
      }
      .threshold span {
        position: absolute;
        right: 0;
        top: -15px;
        font-size: 0.62rem;
        color: var(--secondary-text-color);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-aerobic-decoupling-card": SuuntoAerobicDecouplingCard;
  }
}
