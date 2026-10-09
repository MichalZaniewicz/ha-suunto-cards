import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { t } from "./utils/localize";
import { formatClock, formatSignedMinutes, regularityBand } from "./utils/patterns";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);
/** Same night axis as suunto-sleep-rhythm-card: 20:00 to 12:00 next day. */
const AXIS_START_MIN = 20 * 60;
const AXIS_SPAN_MIN = 16 * 60;

/** Position (0-100 %) of an "HH:MM" clock time on the 20:00-12:00 night axis. */
function axisPct(hhmm: unknown): number | undefined {
  if (typeof hhmm !== "string") return undefined;
  const match = /^(\d{1,2}):(\d{2})$/.exec(hhmm);
  if (!match) return undefined;
  let minutes = Number(match[1]) * 60 + Number(match[2]) - AXIS_START_MIN;
  if (minutes < 0) minutes += 1440;
  return Math.min(100, Math.max(0, (minutes / AXIS_SPAN_MIN) * 100));
}

const clampPct = (value: number) => Math.min(100, Math.max(0, value));

/**
 * How steady the sleep schedule is, from ha-suunto 1.0.32's
 * `sleep_regularity` (Sleep Regularity Index over four weeks, with average
 * bed/wake times and their spread) and `social_jetlag` (mid-sleep shift on
 * Friday/Saturday nights). One card for both because they answer the same
 * question; the jetlag parts simply drop out when that sensor has no value.
 */
@customElement("suunto-sleep-regularity-card")
export class SuuntoSleepRegularityCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-sleep-regularity-card" };
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

    const regularity = map["sleep_regularity"] ? hass.states[map["sleep_regularity"]] : undefined;
    if (!regularity || UNAVAILABLE_STATES.has(regularity.state) || !Number.isFinite(Number(regularity.state))) {
      return this._message(
        "mdi:bed-clock",
        t(hass, "empty.sleep_regularity.title"),
        t(hass, "empty.sleep_regularity.subtitle")
      );
    }
    const index = Math.round(Number(regularity.state));
    const band = regularityBand(hass, index);
    const attrs = regularity.attributes;

    const jetlag = map["social_jetlag"] ? hass.states[map["social_jetlag"]] : undefined;
    const jetlagMin =
      jetlag && !UNAVAILABLE_STATES.has(jetlag.state) && Number.isFinite(Number(jetlag.state))
        ? Number(jetlag.state)
        : undefined;
    const workMid = jetlagMin !== undefined ? axisPct(jetlag?.attributes.work_midpoint) : undefined;
    const freeMid = jetlagMin !== undefined ? axisPct(jetlag?.attributes.free_midpoint) : undefined;

    const bed = axisPct(attrs.avg_bedtime);
    const wake = axisPct(attrs.avg_wake_time);
    const bedSd = typeof attrs.bedtime_sd_min === "number" ? attrs.bedtime_sd_min : undefined;
    const wakeSd = typeof attrs.wake_time_sd_min === "number" ? attrs.wake_time_sd_min : undefined;
    const sdPct = (sd: number) => (sd / AXIS_SPAN_MIN) * 100;
    const lang = hass.language;

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon .icon=${this._icon("mdi:bed-clock")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(t(hass, "card.sleep_regularity.title"))}</div>
            <div class="subtitle">
              ${t(hass, "sleep_regularity.subtitle", { nights: Number(attrs.nights) || 0 })}
            </div>
          </div>
        </div>

        <div class="hero">
          <div class="big">${index}</div>
          <span class="chip ${band.cls}">${band.label}</span>
        </div>

        <div class="scale-wrap">
          <div class="scale">
            <i style="width:60%;background:var(--sc-bad-bg)"></i>
            <i style="width:20%;background:var(--sc-warn-bg)"></i>
            <i style="width:20%;background:var(--sc-good-bg)"></i>
          </div>
          <div class="marker" style="left:${clampPct(index)}%"></div>
          <div class="ticks">
            <span style="left:0;transform:none">0</span>
            <span style="left:60%">60</span>
            <span style="left:80%">80</span>
            <span style="left:100%;transform:translateX(-100%)">100</span>
          </div>
        </div>

        ${bed !== undefined && wake !== undefined && wake > bed
          ? html`
              <div>
                <div class="timeline">
                  <div class="track"></div>
                  <!-- Spread (1 SD) is drawn only outside the sleep bar, so it never shows through it. -->
                  <div class="sleep" style="left:${bed}%;width:${wake - bed}%"></div>
                  ${bedSd !== undefined
                    ? html`<div
                        class="whisker"
                        style="left:${clampPct(bed - sdPct(bedSd))}%;width:${bed - clampPct(bed - sdPct(bedSd))}%"
                      ></div>`
                    : nothing}
                  ${wakeSd !== undefined
                    ? html`<div
                        class="whisker"
                        style="left:${wake}%;width:${clampPct(wake + sdPct(wakeSd)) - wake}%"
                      ></div>`
                    : nothing}
                  ${workMid !== undefined && freeMid !== undefined
                    ? html`
                        <div
                          class="gap"
                          style="left:${Math.min(workMid, freeMid)}%;width:${Math.abs(freeMid - workMid)}%"
                        ></div>
                        <div class="mid work" style="left:${workMid}%"></div>
                        <div class="mid free" style="left:${freeMid}%"></div>
                      `
                    : nothing}
                </div>
                <div class="axis">
                  ${Array.from({ length: AXIS_SPAN_MIN / 120 + 1 }, (_, i) => i * 2).map(
                    (h) =>
                      html`<span style="left:${((h * 60) / AXIS_SPAN_MIN) * 100}%"
                        >${String((AXIS_START_MIN / 60 + h) % 24).padStart(2, "0")}</span
                      >`
                  )}
                </div>
              </div>
            `
          : nothing}

        <div class="chips">
          ${attrs.avg_bedtime
            ? html`<span class="chip"
                >${t(hass, "sleep_regularity.bed", { time: formatClock(attrs.avg_bedtime, lang) ?? "" })}${bedSd !==
                undefined
                  ? html` ±${bedSd} min`
                  : nothing}</span
              >`
            : nothing}
          ${attrs.avg_wake_time
            ? html`<span class="chip"
                >${t(hass, "sleep_regularity.wake", { time: formatClock(attrs.avg_wake_time, lang) ?? "" })}${wakeSd !==
                undefined
                  ? html` ±${wakeSd} min`
                  : nothing}</span
              >`
            : nothing}
          ${jetlagMin !== undefined
            ? html`<span class="chip accent"
                >${t(hass, "chip.social_jetlag", { value: formatSignedMinutes(jetlagMin) })}</span
              >`
            : nothing}
        </div>

        ${workMid !== undefined && freeMid !== undefined
          ? html`
              <div class="legend">
                <span
                  ><i style="background:var(--sc-sleep-deep)"></i>${t(hass, "sleep_regularity.mid_work", {
                    time: formatClock(jetlag?.attributes.work_midpoint, lang) ?? "",
                  })}</span
                >
                <span
                  ><i style="background:var(--sc-amber)"></i>${t(hass, "sleep_regularity.mid_free", {
                    time: formatClock(jetlag?.attributes.free_midpoint, lang) ?? "",
                  })}</span
                >
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
      .scale-wrap {
        position: relative;
        padding-top: 12px;
      }
      .scale {
        display: flex;
        height: 8px;
        border-radius: 4px;
        overflow: hidden;
      }
      .scale i {
        display: block;
        height: 100%;
      }
      .marker {
        position: absolute;
        top: 0;
        width: 2px;
        height: 22px;
        border-radius: 1px;
        background: var(--primary-text-color);
        transform: translateX(-1px);
      }
      .ticks,
      .axis {
        position: relative;
        height: 14px;
        margin-top: 4px;
        font-size: 0.64rem;
        color: var(--secondary-text-color);
      }
      .ticks span,
      .axis span {
        position: absolute;
        transform: translateX(-50%);
      }
      .axis span:first-child {
        transform: none;
      }
      .axis span:last-child {
        transform: translateX(-100%);
      }
      .timeline {
        position: relative;
        height: 54px;
      }
      .track,
      .sleep {
        position: absolute;
        top: 18px;
        height: 16px;
        border-radius: 4px;
      }
      .track {
        left: 0;
        right: 0;
        background: var(--divider-color);
      }
      .sleep {
        background: var(--sc-sleep-light);
      }
      .whisker {
        position: absolute;
        top: 24px;
        height: 4px;
        border-radius: 2px;
        background: var(--sc-sleep-light);
        opacity: 0.45;
      }
      .mid {
        position: absolute;
        top: 10px;
        width: 3px;
        height: 32px;
        border-radius: 2px;
        transform: translateX(-1.5px);
      }
      .mid.work {
        background: var(--sc-sleep-deep);
      }
      .mid.free {
        background: var(--sc-amber);
      }
      .gap {
        position: absolute;
        top: 0;
        height: 8px;
        border: 1.5px solid var(--sc-amber);
        border-bottom: none;
        border-radius: 3px 3px 0 0;
        box-sizing: border-box;
      }
      .chips {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .legend {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        font-size: 0.7rem;
        color: var(--secondary-text-color);
      }
      .legend i {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 2px;
        margin-right: 5px;
        vertical-align: -1px;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-sleep-regularity-card": SuuntoSleepRegularityCard;
  }
}
