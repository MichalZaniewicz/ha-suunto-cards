import { html, css, nothing, svg, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { formatDuration, formatShortDate, formatTime } from "./utils/format";
import { t } from "./utils/localize";
import { sleepNight } from "./utils/sleep-stages";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);
const SIZE = 208;
const CENTER = SIZE / 2;
const RADIUS = 78;
const STROKE = 15;
const TICK_R_OUTER = RADIUS + 8;
const LABEL_R = RADIUS + 18;

function polar(angleDeg: number, r: number): [number, number] {
  const rad = (angleDeg * Math.PI) / 180;
  return [CENTER + r * Math.sin(rad), CENTER - r * Math.cos(rad)];
}

/** One clockwise arc segment (0deg = top/midnight) as an SVG path `d`. */
function arcPath(startAngle: number, endAngle: number): string {
  const [x1, y1] = polar(startAngle, RADIUS);
  const [x2, y2] = polar(endAngle, RADIUS);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${RADIUS} ${RADIUS} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
}

/** Hour labels on the dial closer than this (degrees) to a time tag are hidden under it. */
const LABEL_CLEARANCE_DEG = 14;

/**
 * Last night's sleep as a 24h clock dial: an arc from bedtime to wake time,
 * split into the same stages as the other sleep cards (utils/sleep-stages):
 * deep/light/REM, other sleep and time awake in bed.
 *
 * The stage ORDER along the arc is illustrative, not measured: Suunto only
 * reports each stage's total minutes for the night, never a real timeline of
 * when each occurred.
 */
@customElement("suunto-sleep-clock-card")
export class SuuntoSleepClockCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-sleep-clock-card" };
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
    const get = (key: string) => (map[key] ? hass.states[map[key]] : undefined);

    const night = sleepNight(hass, get);
    if (!night || night.wakeMs === undefined) {
      return this._message("mdi:sleep", t(hass, "empty.sleep_clock.title"), t(hass, "empty.sleep_clock.subtitle"));
    }
    const wakeDate = new Date(night.wakeMs);
    // Real bedtime from sleep_time; without it, assume one unbroken sleep before waking.
    const spanMin = night.inBedMin ?? night.sleepMin;
    const bedtime = new Date(night.wakeMs - spanMin * 60000);

    const startAngle = ((bedtime.getHours() * 60 + bedtime.getMinutes()) / 1440) * 360;
    const spanAngle = (spanMin / 1440) * 360;
    const totalMinForShare = night.stages.reduce((sum, s) => sum + s.minutes, 0);

    let cursor = startAngle;
    const arcs = night.stages.map((seg) => {
      const segAngle = (seg.minutes / totalMinForShare) * spanAngle;
      const d = arcPath(cursor, cursor + segAngle);
      cursor += segAngle;
      return { d, colorVar: seg.colorVar };
    });

    const quality = get("sleep_quality");
    const qualityPct = quality && !UNAVAILABLE_STATES.has(quality.state) ? Math.round(Number(quality.state)) : undefined;
    const durationParts = formatDuration(night.sleepMin);
    const duration = get("sleep_duration");

    const bedTag = polar(startAngle, LABEL_R);
    const wakeTag = polar(startAngle + spanAngle, LABEL_R);
    const tagAngles = [startAngle, startAngle + spanAngle];
    const clearOfTags = (angle: number) =>
      tagAngles.every((tag) => Math.abs(((((tag - angle) % 360) + 540) % 360) - 180) >= LABEL_CLEARANCE_DEG);

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:sleep"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.sleep_clock.title")}</div>
            <div class="subtitle">${t(hass, "card.sleep_clock.subtitle")}</div>
          </div>
        </div>

        ${duration?.attributes.stale === true && typeof duration.attributes.night === "string"
          ? html`<div style="display:flex;flex-wrap:wrap">
              <span class="chip warn"
                ><ha-icon icon="mdi:alert-outline"></ha-icon>${t(hass, "chip.sleep_stale", {
                  date: formatShortDate(duration.attributes.night as string, hass.language),
                })}</span
              >
            </div>`
          : nothing}

        <div class="clock-wrap">
          <svg viewBox="0 0 ${SIZE} ${SIZE}">
            <circle cx=${CENTER} cy=${CENTER} r=${RADIUS} fill="none" stroke="var(--divider-color)" stroke-width=${STROKE} />
            ${arcs.map(
              (arc) => svg`<path d=${arc.d} fill="none" stroke=${arc.colorVar} stroke-width=${STROKE} />`
            )}
            ${[0, 90, 180, 270].map((angle) => {
              const [x1, y1] = polar(angle, RADIUS + 2);
              const [x2, y2] = polar(angle, TICK_R_OUTER);
              return svg`<line x1=${x1.toFixed(1)} y1=${y1.toFixed(1)} x2=${x2.toFixed(1)} y2=${y2.toFixed(1)} stroke="var(--secondary-text-color)" stroke-width="1.5" />`;
            })}
            ${[
              { angle: 0, label: "0" },
              { angle: 90, label: "6" },
              { angle: 180, label: "12" },
              { angle: 270, label: "18" },
            ]
              .filter(({ angle }) => clearOfTags(angle))
              .map(({ angle, label }) => {
              const [x, y] = polar(angle, LABEL_R + 4);
              return svg`<text x=${x.toFixed(1)} y=${y.toFixed(1)} text-anchor="middle" dominant-baseline="middle" font-size="10" fill="var(--secondary-text-color)">${label}</text>`;
            })}
          </svg>
          <div class="clock-center">
            <div class="big">${durationParts.value}<span class="unit">${durationParts.unit}</span></div>
            ${qualityPct !== undefined ? html`<div class="small">${t(hass, "sleep_clock.quality", { pct: qualityPct })}</div>` : nothing}
          </div>
          <div class="clock-tag" style="left:${bedTag[0].toFixed(0)}px;top:${bedTag[1].toFixed(0)}px;transform:translate(-50%,-50%)">
            ${formatTime(bedtime, hass.language)}
          </div>
          <div class="clock-tag" style="left:${wakeTag[0].toFixed(0)}px;top:${wakeTag[1].toFixed(0)}px;transform:translate(-50%,-50%)">
            ${formatTime(wakeDate, hass.language)}
          </div>
        </div>

        <div class="legend">
          ${night.stages.map((stage) => {
            const d = formatDuration(stage.minutes);
            return html`<span class="legend-item"
              ><i class="dot" style="background:${stage.colorVar}"></i>${stage.title} &middot; ${d.value}${d.unit === "h" ? "h" : "m"}</span
            >`;
          })}
        </div>
      </ha-card>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .clock-wrap {
        position: relative;
        width: ${SIZE}px;
        height: ${SIZE}px;
        margin: 0 auto;
      }
      .clock-wrap svg {
        width: ${SIZE}px;
        height: ${SIZE}px;
        display: block;
      }
      .clock-center {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 2px;
        pointer-events: none;
      }
      .clock-center .big {
        font-size: 1.3rem;
        font-weight: 700;
        line-height: 1.05;
        font-variant-numeric: tabular-nums;
        display: flex;
        align-items: baseline;
        gap: 3px;
      }
      .clock-center .unit {
        font-size: 0.7rem;
        font-weight: 500;
        color: var(--secondary-text-color);
      }
      .clock-center .small {
        font-size: 0.72rem;
        color: var(--secondary-text-color);
      }
      .clock-tag {
        position: absolute;
        font-size: 0.68rem;
        font-weight: 500;
        color: var(--secondary-text-color);
        background: var(--card-background-color);
        padding: 1px 5px;
        border-radius: 5px;
      }
      .legend {
        display: flex;
        gap: 14px;
        justify-content: center;
        flex-wrap: wrap;
      }
      .legend-item {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.74rem;
        color: var(--secondary-text-color);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-sleep-clock-card": SuuntoSleepClockCard;
  }
}
