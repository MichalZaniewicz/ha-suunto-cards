import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { activityIcon } from "./utils/icons";
import { multiLineChart, type ChartSeries, type SparklinePoint } from "./utils/render-helpers";
import { t } from "./utils/localize";

interface RecentWorkout {
  start: string | null;
  activity: string | null;
  cadence_spm: number | null;
  stride_length_m: number | null;
}

interface DynamicsTrend {
  activity: string;
  cadencePoints: SparklinePoint[];
  stridePoints: SparklinePoint[];
  latestCadence: number;
  latestStride: number;
}

/**
 * Cadence (steps/min) and stride length across recent same-activity
 * workouts - same "oldest to newest, same activity as the latest workout"
 * shape as suunto-pace-trend-card, just two series instead of one. Needs
 * `cadence_spm`/`stride_length_m` on the workouts_recent sensor's attribute
 * list (ha-suunto 1.0.26+) - both are foot-based-activity only (running,
 * walking, trekking), same gating `last_stride`/`last_cadence`'s own
 * `cadence_spm` attribute already uses, so a cycling-only account simply
 * never has enough points and the card shows its empty state.
 */
function computeTrend(workouts: RecentWorkout[]): DynamicsTrend | undefined {
  const activity = workouts[0]?.activity;
  if (!activity) return undefined;

  const matches = workouts
    .filter((w) => w.activity === activity && w.start && w.cadence_spm != null && w.stride_length_m != null)
    .map((w) => ({ t: new Date(w.start!).getTime(), cadence: w.cadence_spm!, stride: w.stride_length_m! }))
    .sort((a, b) => a.t - b.t);

  if (matches.length < 2) return undefined;

  return {
    activity,
    cadencePoints: matches.map((m) => ({ t: m.t, v: m.cadence })),
    stridePoints: matches.map((m) => ({ t: m.t, v: m.stride })),
    latestCadence: matches[matches.length - 1].cadence,
    latestStride: matches[matches.length - 1].stride,
  };
}

@customElement("suunto-running-dynamics-card")
export class SuuntoRunningDynamicsCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-running-dynamics-card" };
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
    const hass = this.hass;
    const entityId = map["workouts_recent"];
    const entity = entityId ? hass.states[entityId] : undefined;
    const workouts: RecentWorkout[] = entity?.attributes.workouts ?? [];
    const trend = entity ? computeTrend(workouts) : undefined;

    if (!trend) {
      return this._message(
        "mdi:run",
        t(hass, "empty.running_dynamics.title"),
        t(hass, "empty.running_dynamics.subtitle")
      );
    }

    const series: ChartSeries[] = [
      { points: trend.cadencePoints, colorVar: "var(--sc-pulse)" },
      { points: trend.stridePoints, colorVar: "var(--sc-amber)" },
    ];

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${activityIcon(trend.activity)}></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.running_dynamics.title")}</div>
            <div class="subtitle">
              ${t(hass, "card.running_dynamics.subtitle", { activity: trend.activity, count: trend.cadencePoints.length })}
            </div>
          </div>
        </div>

        ${multiLineChart(series, 300, 80, false)}

        <div class="chart-legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${t(hass, "stat.cadence")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${t(hass, "stat.stride_length")}</span>
        </div>

        <div class="stats">
          <div class="stat">
            <div class="stat-value">${Math.round(trend.latestCadence)}<span class="unit">spm</span></div>
            <div class="stat-label">${t(hass, "stat.cadence")}</div>
          </div>
          <div class="stat">
            <div class="stat-value">${trend.latestStride.toFixed(2)}<span class="unit">m</span></div>
            <div class="stat-label">${t(hass, "stat.stride_length")}</div>
          </div>
        </div>
      </ha-card>
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
    "suunto-running-dynamics-card": SuuntoRunningDynamicsCard;
  }
}
