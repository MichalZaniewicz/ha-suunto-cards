import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { activityIcon } from "./utils/icons";
import { sparkline, type SparklinePoint } from "./utils/render-helpers";
import { formatPace } from "./utils/format";
import { t } from "./utils/localize";

interface RecentWorkout {
  start: string | null;
  activity: string | null;
  distance_km: number | null;
  duration_min: number | null;
}

interface PaceTrend {
  activity: string;
  points: SparklinePoint[];
  latestPace: number;
  direction: "faster" | "slower" | "steady";
}

/**
 * Pace (duration/distance) across every recent workout of the SAME activity
 * as the most recent one, oldest to newest. Direction compares the average
 * of the first half of the window to the second half - a 3% band around
 * equal is "steady" so noise doesn't flip the label workout to workout.
 */
function computeTrend(workouts: RecentWorkout[]): PaceTrend | undefined {
  const activity = workouts[0]?.activity;
  if (!activity) return undefined;

  const matches = workouts
    .filter((w) => w.activity === activity && w.start && w.distance_km && w.duration_min)
    .map((w) => ({ t: new Date(w.start!).getTime(), v: w.duration_min! / w.distance_km! }))
    .sort((a, b) => a.t - b.t);

  if (matches.length < 2) return undefined;

  const mid = Math.ceil(matches.length / 2);
  const firstHalf = matches.slice(0, mid);
  const secondHalf = matches.slice(mid).length ? matches.slice(mid) : matches.slice(-1);
  const avg = (pts: SparklinePoint[]) => pts.reduce((sum, p) => sum + p.v, 0) / pts.length;
  const firstAvg = avg(firstHalf);
  const secondAvg = avg(secondHalf);
  const relChange = (secondAvg - firstAvg) / firstAvg;

  const direction = relChange < -0.03 ? "faster" : relChange > 0.03 ? "slower" : "steady";

  return { activity, points: matches, latestPace: matches[matches.length - 1].v, direction };
}

@customElement("suunto-pace-trend-card")
export class SuuntoPaceTrendCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-pace-trend-card" };
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
        "mdi:speedometer",
        t(hass, "empty.pace_trend.title"),
        t(hass, "empty.pace_trend.subtitle")
      );
    }

    const band =
      trend.direction === "faster"
        ? { colorVar: "var(--sc-good)", label: t(hass, "pace_trend.faster") }
        : trend.direction === "slower"
          ? { colorVar: "var(--sc-warn)", label: t(hass, "pace_trend.slower") }
          : { colorVar: "var(--sc-pulse)", label: t(hass, "pace_trend.steady") };

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${activityIcon(trend.activity)}></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.pace_trend.title")}</div>
            <div class="subtitle">
              ${t(hass, "card.pace_trend.subtitle", { activity: trend.activity, count: trend.points.length })}
            </div>
          </div>
        </div>

        ${sparkline(trend.points, band.colorVar)}

        <div class="footer">
          <div class="stat">
            <div class="stat-value">${formatPace(trend.latestPace)}<span class="unit">/km</span></div>
            <div class="stat-label">${t(hass, "stat.avg_pace")}</div>
          </div>
          <span class="chip" style="color:${band.colorVar}">${band.label}</span>
        </div>
      </ha-card>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-pace-trend-card": SuuntoPaceTrendCard;
  }
}
