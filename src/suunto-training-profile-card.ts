import { html, css, svg, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { t } from "./utils/localize";
import type { SuuntoHass } from "./utils/types";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

interface Axis {
  label: string;
  value: number;
}

interface RecentWorkout {
  activity?: string;
}

function clampPct(value: number): number {
  return Math.max(0, Math.min(100, value));
}

function polar(cx: number, cy: number, r: number, angleDeg: number): [number, number] {
  const a = ((angleDeg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}

@customElement("suunto-training-profile-card")
export class SuuntoTrainingProfileCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-training-profile-card" };
  }

  public setConfig(config: SuuntoCardConfig): void {
    this._config = config;
    this._configuredDeviceId = config.device_id;
  }

  public getCardSize(): number {
    return 3;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) return nothing;
    this._syncTheme();

    const resolved = this._resolveEntities();
    if ("error" in resolved) return resolved.error;
    const { map } = resolved;
    const hass = this.hass as SuuntoHass;
    const get = (key: string) => (map[key] ? hass.states[map[key]] : undefined);

    const weeklyDistance = get("weekly_distance");
    const lifetimeDistance = get("lifetime_distance");
    const lifetimeDays = get("lifetime_days");
    const acwr = get("acwr");
    const workouts7d = get("workouts_7d");
    const readiness = get("readiness");
    const recentEntity = get("workouts_recent");
    const recentWorkouts: RecentWorkout[] = recentEntity?.attributes.workouts ?? [];

    const hasCore = [weeklyDistance, acwr, workouts7d, readiness].some(
      (e) => e && !UNAVAILABLE_STATES.has(e.state)
    );
    if (!hasCore && recentWorkouts.length === 0) {
      return this._message(
        "mdi:radar",
        t(hass, "empty.training_profile.title"),
        t(hass, "empty.training_profile.subtitle")
      );
    }

    const num = (entity: typeof weeklyDistance): number =>
      entity && !UNAVAILABLE_STATES.has(entity.state) ? Number(entity.state) : 0;

    // Each axis is a heuristic 0-100 read of already-fetched sensors, not an
    // official Suunto metric - documented here since nothing upstream defines
    // these bands:
    // - Volume: this week's distance against your own historical average
    //   week (lifetime distance / lifetime days * 7), so it self-calibrates
    //   per athlete instead of assuming a fixed target. 1.4x the average
    //   week reads as 100%.
    // - Intensity: ACWR against 1.5, the same elevated-injury-risk ceiling
    //   the suunto_app acwr sensor's own documentation already uses.
    // - Consistency: workouts in the last 7 days against a daily streak (7).
    // - Recovery: the readiness sensor is already 0-100, used as-is.
    // - Variety: distinct activity types in the recent-workouts window
    //   against 5 - covers "does everything" without over-rewarding beyond
    //   a genuinely varied week.
    const lifeKm = num(lifetimeDistance);
    const lifeDays = num(lifetimeDays);
    const typicalWeeklyKm = lifeDays > 0 ? (lifeKm / lifeDays) * 7 : 0;
    const volumePct = typicalWeeklyKm > 0 ? clampPct((num(weeklyDistance) / (typicalWeeklyKm * 1.4)) * 100) : 0;
    const intensityPct = clampPct((num(acwr) / 1.5) * 100);
    const consistencyPct = clampPct((num(workouts7d) / 7) * 100);
    const recoveryPct = clampPct(num(readiness));
    const distinctActivities = new Set(recentWorkouts.map((w) => w.activity).filter(Boolean)).size;
    const varietyPct = clampPct((distinctActivities / 5) * 100);

    const axes: Axis[] = [
      { label: t(hass, "stat.volume"), value: volumePct },
      { label: t(hass, "stat.intensity"), value: intensityPct },
      { label: t(hass, "stat.consistency"), value: consistencyPct },
      { label: t(hass, "stat.recovery"), value: recoveryPct },
      { label: t(hass, "stat.variety"), value: varietyPct },
    ];
    const strongest = [...axes].sort((a, b) => b.value - a.value)[0];
    const lightest = [...axes].sort((a, b) => a.value - b.value)[0];

    const cx = 130,
      cy = 128,
      R = 84;
    const n = axes.length;
    const step = 360 / n;

    // Grid rings + spokes must use `svg`, not `html`, for the same reason
    // multiLineChart/barChart do (see utils/render-helpers.ts): a nested
    // `html` fragment spliced into an outer `html`-templated <svg> creates
    // its elements in the wrong namespace and silently fails to paint.
    const gridRings = [0.25, 0.5, 0.75, 1].map((k) => {
      const pts = axes.map((_, i) => polar(cx, cy, R * k, step * i).join(",")).join(" ");
      return svg`<polygon class="radar-grid" points=${pts}></polygon>`;
    });
    const spokes = axes.map((_, i) => {
      const [x, y] = polar(cx, cy, R, step * i);
      return svg`<line class="radar-axis" x1=${cx} y1=${cy} x2=${x} y2=${y}></line>`;
    });
    const dataPts = axes.map((a, i) => polar(cx, cy, (R * a.value) / 100, step * i));
    const dataPolygon = svg`<polygon class="radar-fill" points=${dataPts.map((p) => p.join(",")).join(" ")}></polygon>`;
    const vertices = dataPts.map(([x, y]) => svg`<circle class="radar-vertex" cx=${x} cy=${y} r="3.2"></circle>`);
    const labels = axes.map((a, i) => {
      const angle = step * i;
      const [lx, ly] = polar(cx, cy, R * 1.24, angle);
      let anchor = "middle";
      if (angle > 10 && angle < 170) anchor = "start";
      if (angle > 190 && angle < 350) anchor = "end";
      return svg`
        <text class="radar-label" x=${lx} y=${ly - 5} text-anchor=${anchor}>${a.label}</text>
        <text class="radar-value" x=${lx} y=${ly + 7} text-anchor=${anchor}>${Math.round(a.value)}</text>
      `;
    });

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:radar"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.training_profile.title")}</div>
            <div class="subtitle">${t(hass, "card.training_profile.subtitle")}</div>
          </div>
        </div>

        <div class="radar-wrap">
          <svg class="radar-svg" viewBox="0 0 260 260">
            ${gridRings}${spokes}${dataPolygon}${vertices}${labels}
          </svg>
        </div>

        <div class="radar-summary">
          ${t(hass, "profile.summary", { strong: strongest.label, light: lightest.label })}
        </div>
      </ha-card>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .radar-wrap {
        display: flex;
        justify-content: center;
        padding: 4px 0 0;
      }
      .radar-svg {
        width: 100%;
        max-width: 260px;
        height: auto;
        overflow: visible;
      }
      .radar-grid {
        fill: none;
        stroke: var(--divider-color);
        stroke-width: 1;
      }
      .radar-axis {
        stroke: var(--divider-color);
        stroke-width: 1;
      }
      .radar-fill {
        fill: var(--sc-amber);
        fill-opacity: 0.22;
        stroke: var(--sc-amber);
        stroke-width: 2;
        stroke-linejoin: round;
      }
      .radar-vertex {
        fill: var(--sc-amber);
        stroke: var(--card-background-color);
        stroke-width: 2;
      }
      .radar-label {
        font-size: 8px;
        fill: var(--secondary-text-color);
      }
      .radar-value {
        font-size: 8.5px;
        font-weight: 700;
        fill: var(--primary-text-color);
      }
      .radar-summary {
        text-align: center;
        font-size: 0.78rem;
        color: var(--secondary-text-color);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-training-profile-card": SuuntoTrainingProfileCard;
  }
}
