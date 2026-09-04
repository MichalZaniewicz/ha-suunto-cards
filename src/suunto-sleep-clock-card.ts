import { html, css, nothing, svg, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { formatDuration, formatTime } from "./utils/format";
import { t } from "./utils/localize";

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

interface StageSegment {
  colorVar: string;
  minutes: number;
}

/**
 * Last night's sleep as a 24h clock dial: an arc from bedtime to wake angle,
 * split into deep/light/REM proportions - the same data
 * suunto-sleep-readiness-card already shows as a linear segmented bar, but
 * anchored to the actual clock times instead of just proportions.
 *
 * The stage ORDER along the arc (deep, then light, then REM) is illustrative,
 * not measured: Suunto only reports each stage's total minutes for the
 * night, never a real timeline of when each occurred.
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

    const wake = get("wake_time");
    const duration = get("sleep_duration");
    if (!wake || UNAVAILABLE_STATES.has(wake.state) || !duration || UNAVAILABLE_STATES.has(duration.state)) {
      return this._message("mdi:sleep", t(hass, "empty.sleep_clock.title"), t(hass, "empty.sleep_clock.subtitle"));
    }

    const wakeDate = new Date(wake.state);
    const durationHours = Number(duration.state);
    if (Number.isNaN(wakeDate.getTime()) || !Number.isFinite(durationHours) || durationHours <= 0) {
      return this._message("mdi:sleep", t(hass, "empty.sleep_clock.title"), t(hass, "empty.sleep_clock.subtitle"));
    }
    const bedtime = new Date(wakeDate.getTime() - durationHours * 3600000);

    const deep = get("sleep_deep");
    const light = get("sleep_light");
    const rem = get("sleep_rem");
    const deepMin = deep && !UNAVAILABLE_STATES.has(deep.state) ? Number(deep.state) : 0;
    const lightMin = light && !UNAVAILABLE_STATES.has(light.state) ? Number(light.state) : 0;
    const remMin = rem && !UNAVAILABLE_STATES.has(rem.state) ? Number(rem.state) : 0;
    const stageTotal = deepMin + lightMin + remMin;

    const segments: StageSegment[] = stageTotal > 0
      ? [
          { colorVar: "var(--sc-sleep-deep)", minutes: deepMin },
          { colorVar: "var(--sc-sleep-light)", minutes: lightMin },
          { colorVar: "var(--sc-sleep-rem)", minutes: remMin },
        ].filter((s) => s.minutes > 0)
      : [{ colorVar: "var(--sc-sleep-light)", minutes: durationHours * 60 }];

    const startAngle = (bedtime.getHours() * 60 + bedtime.getMinutes()) / 1440 * 360;
    const spanAngle = (durationHours * 60) / 1440 * 360;
    const totalMinForShare = segments.reduce((sum, s) => sum + s.minutes, 0);

    let cursor = startAngle;
    const arcs = segments.map((seg) => {
      const segAngle = (seg.minutes / totalMinForShare) * spanAngle;
      const d = arcPath(cursor, cursor + segAngle);
      cursor += segAngle;
      return { d, colorVar: seg.colorVar };
    });

    const quality = get("sleep_quality");
    const qualityPct = quality && !UNAVAILABLE_STATES.has(quality.state) ? Math.round(Number(quality.state)) : undefined;
    const durationParts = formatDuration(durationHours * 60);

    const bedTag = polar(startAngle, LABEL_R);
    const wakeTag = polar(startAngle + spanAngle, LABEL_R);

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:sleep"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.sleep_clock.title")}</div>
            <div class="subtitle">${t(hass, "card.sleep_clock.subtitle")}</div>
          </div>
        </div>

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
            ].map(({ angle, label }) => {
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
          ${deepMin > 0 ? html`<span class="legend-item"><i class="dot" style="background:var(--sc-sleep-deep)"></i>${t(hass, "label.deep")} &middot; ${formatDuration(deepMin).value}${formatDuration(deepMin).unit}</span>` : nothing}
          ${lightMin > 0 ? html`<span class="legend-item"><i class="dot" style="background:var(--sc-sleep-light)"></i>${t(hass, "label.light")} &middot; ${formatDuration(lightMin).value}${formatDuration(lightMin).unit}</span>` : nothing}
          ${remMin > 0 ? html`<span class="legend-item"><i class="dot" style="background:var(--sc-sleep-rem)"></i>${t(hass, "label.rem")} &middot; ${formatDuration(remMin).value}${formatDuration(remMin).unit}</span>` : nothing}
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
