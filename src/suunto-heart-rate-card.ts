import { html, css, svg, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

// One stylised ECG cycle (flat baseline, a small P wave, a QRS spike, a small
// T wave) as explicit (x,y) offsets from the start of the period - NOT bezier
// curves. A hand-fitted curve is not exactly periodic, which leaves a visible
// seam where a scrolling copy meets itself; repeating the SAME point list
// every `PERIOD` units is periodic by construction; verified frame-by-frame
// in a throwaway sketch before this card was written.
const PERIOD = 100;
const CYCLE_POINTS: Array<[number, number]> = [
  [0, 0], [26, 0], [32, -3], [38, 0], [44, 0],
  [47, 5], [50, -22], [53, 8], [56, -2], [60, 0],
  [66, 0], [70, -5], [74, 0], [100, 0],
];
const STRIP_WIDTH = 300;
const STRIP_HEIGHT = 64;
const STRIP_MID = 32;
const GRID_STEP = 10;

function tracePath(): string {
  // Drift is exactly one PERIOD, so the drawn range only needs to cover the
  // strip width plus one period of slack on each side - see the liquid-gauge
  // /ECG design note in this repo's history for why this specific margin.
  const minX = -PERIOD;
  const maxX = STRIP_WIDTH + PERIOD;
  const pts: string[] = [];
  for (let start = Math.floor(minX / PERIOD) * PERIOD; start <= maxX; start += PERIOD) {
    for (const [ox, oy] of CYCLE_POINTS) {
      pts.push(`${start + ox},${STRIP_MID + oy}`);
    }
  }
  return "M" + pts.join(" L");
}

@customElement("suunto-heart-rate-card")
export class SuuntoHeartRateCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-heart-rate-card" };
  }

  public setConfig(config: SuuntoCardConfig): void {
    this._config = config;
    this._configuredDeviceId = config.device_id;
  }

  public getCardSize(): number {
    return 2;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) return nothing;
    this._syncTheme();

    const resolved = this._resolveEntities();
    if ("error" in resolved) return resolved.error;
    const { map } = resolved;
    const hass = this.hass;
    const currentHr = map["current_hr"] ? hass.states[map["current_hr"]] : undefined;

    if (!currentHr || UNAVAILABLE_STATES.has(currentHr.state)) {
      return this._message("mdi:heart-pulse", t(hass, "empty.heart_rate.title"));
    }

    const bpm = Math.round(Number(currentHr.state));
    // The badge beats and the trace scrolls at this exact interval - the
    // rhythm itself is the reading, the same way a pulse oximeter's blink
    // rate is, not decoration laid over a static number.
    const beatSeconds = 60 / bpm;

    const gridLines = [];
    for (let gx = 0; gx <= STRIP_WIDTH; gx += GRID_STEP) {
      gridLines.push(
        svg`<line class="hr-grid-line ${gx % 50 === 0 ? "major" : ""}" x1=${gx} y1="0" x2=${gx} y2=${STRIP_HEIGHT}></line>`
      );
    }
    for (let gy = 0; gy <= STRIP_HEIGHT; gy += GRID_STEP) {
      gridLines.push(
        svg`<line class="hr-grid-line ${gy % 50 === 0 ? "major" : ""}" x1="0" y1=${gy} x2=${STRIP_WIDTH} y2=${gy}></line>`
      );
    }

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge hr-icon-badge">
            <ha-icon class="hr-beat" style="animation-duration:${beatSeconds}s" icon="mdi:heart"></ha-icon>
          </div>
          <div class="title-block">
            <div class="title">${t(hass, "card.heart_rate.title")}</div>
          </div>
        </div>

        <div class="hr-strip-wrap">
          <svg class="hr-strip" viewBox="0 0 ${STRIP_WIDTH} ${STRIP_HEIGHT}" preserveAspectRatio="none">
            ${gridLines}
            <path
              class="hr-trace hr-scroll"
              d=${tracePath()}
              style="animation-duration:${beatSeconds}s; --drift-distance:-${PERIOD}px"
            ></path>
            <text class="hr-corner-value" x="6" y="58">${bpm} bpm</text>
          </svg>
        </div>
      </ha-card>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .hr-icon-badge {
        background: var(--sc-pulse-bg);
        color: var(--sc-pulse);
      }
      .hr-beat {
        transform-origin: center;
        animation-name: sc-heartbeat;
        animation-timing-function: ease-out;
        animation-iteration-count: infinite;
      }
      @keyframes sc-heartbeat {
        0% { transform: scale(1); }
        14% { transform: scale(1.16); }
        28% { transform: scale(1); }
        42% { transform: scale(1.09); }
        56% { transform: scale(1); }
        100% { transform: scale(1); }
      }
      /*
       * A real hospital monitor screen, not a chart on the card's own
       * surface - deliberately NOT theme-reactive (stays this dark
       * regardless of light/dark mode), the same way an embedded device
       * screenshot would be.
       */
      .hr-strip-wrap {
        width: 100%;
        height: 72px;
        overflow: hidden;
        border-radius: 6px;
        background: #071a12;
        padding: 3px;
        box-shadow:
          inset 0 0 0 1px rgba(255, 255, 255, 0.06),
          inset 0 1px 6px rgba(0, 0, 0, 0.5);
      }
      .hr-strip {
        width: 100%;
        height: 100%;
        display: block;
      }
      .hr-grid-line {
        stroke: #16382a;
        stroke-width: 0.6;
      }
      .hr-grid-line.major {
        stroke: #1e4a37;
        stroke-width: 0.9;
      }
      .hr-trace {
        fill: none;
        stroke: #3cf28a;
        stroke-width: 1.6;
        stroke-linecap: round;
        stroke-linejoin: round;
        filter: drop-shadow(0 0 2.5px #3cf28a) drop-shadow(0 0 6px rgba(60, 242, 138, 0.55));
      }
      .hr-corner-value {
        font-size: 8px;
        font-weight: 700;
        letter-spacing: 0.03em;
        fill: #3cf28a;
        opacity: 0.85;
      }
      .hr-scroll {
        animation-name: sc-hr-scroll;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
      @keyframes sc-hr-scroll {
        from { transform: translateX(0); }
        to { transform: translateX(var(--drift-distance, -100px)); }
      }
      @media (prefers-reduced-motion: reduce) {
        .hr-beat, .hr-scroll { animation: none !important; }
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-heart-rate-card": SuuntoHeartRateCard;
  }
}
