import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { activityIcon } from "./utils/icons";
import { formatDuration, formatDelta, formatRelative } from "./utils/format";
import { t } from "./utils/localize";

interface RecentWorkout {
  start: string | null;
  activity: string | null;
  distance_km: number | null;
  duration_min: number | null;
  avg_hr: number | null;
}

/** delta in decimal minutes/km -> "+0:09" / "-1:20" / "±0" per km. */
function formatPaceDelta(deltaMin: number): string {
  const totalSeconds = Math.round(deltaMin * 60);
  if (totalSeconds === 0) return "±0:00";
  const sign = totalSeconds > 0 ? "+" : "-";
  const abs = Math.abs(totalSeconds);
  const m = Math.floor(abs / 60);
  const s = abs % 60;
  return `${sign}${m}:${String(s).padStart(2, "0")}`;
}

/** Most recent workout paired with the next most recent one sharing the same activity - not just the literal first two entries, since consecutive workouts are often different sports. */
function findComparisonPair(
  workouts: RecentWorkout[]
): { current: RecentWorkout; previous: RecentWorkout } | undefined {
  const current = workouts[0];
  if (!current?.activity) return undefined;
  const previous = workouts.slice(1).find((w) => w.activity === current.activity);
  if (!previous) return undefined;
  return { current, previous };
}

@customElement("suunto-workout-comparison-card")
export class SuuntoWorkoutComparisonCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-workout-comparison-card" };
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
    const pair = entity ? findComparisonPair(workouts) : undefined;

    if (!pair) {
      return this._message(
        "mdi:compare",
        t(hass, "empty.workout_comparison.title"),
        t(hass, "empty.workout_comparison.subtitle")
      );
    }

    const { current, previous } = pair;

    const distDelta =
      current.distance_km !== null && previous.distance_km !== null
        ? current.distance_km - previous.distance_km
        : undefined;
    const durDelta =
      current.duration_min !== null && previous.duration_min !== null
        ? current.duration_min - previous.duration_min
        : undefined;
    const hrDelta =
      current.avg_hr !== null && previous.avg_hr !== null ? current.avg_hr - previous.avg_hr : undefined;

    const currentPace =
      current.distance_km && current.duration_min ? current.duration_min / current.distance_km : undefined;
    const previousPace =
      previous.distance_km && previous.duration_min ? previous.duration_min / previous.distance_km : undefined;
    const paceDelta =
      currentPace !== undefined && previousPace !== undefined ? currentPace - previousPace : undefined;

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${activityIcon(current.activity)}></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.workout_comparison.title")}</div>
            <div class="subtitle">
              <span class="activity">${current.activity}</span> ·
              ${t(hass, "card.workout_comparison.vs", {
                time: previous.start ? formatRelative(new Date(previous.start), hass.language) : "",
              })}
            </div>
          </div>
        </div>

        <div class="stats">
          ${current.distance_km !== null
            ? this._stat(
                current.distance_km.toFixed(1),
                "km",
                distDelta !== undefined
                  ? t(hass, "stat.distance_delta", { delta: formatDelta(distDelta, 1) })
                  : t(hass, "stat.distance")
              )
            : nothing}
          ${current.duration_min !== null
            ? (() => {
                const d = formatDuration(current.duration_min!);
                return this._stat(
                  d.value,
                  d.unit,
                  durDelta !== undefined
                    ? t(hass, "stat.duration_delta", { delta: formatDelta(durDelta, 0) + " min" })
                    : t(hass, "stat.duration")
                );
              })()
            : nothing}
          ${current.avg_hr !== null
            ? this._stat(
                String(Math.round(current.avg_hr)),
                "bpm",
                hrDelta !== undefined
                  ? t(hass, "stat.avg_hr_delta", { delta: formatDelta(hrDelta, 0) })
                  : t(hass, "stat.avg_hr")
              )
            : nothing}
          ${currentPace !== undefined
            ? this._stat(
                `${Math.floor(currentPace)}:${String(Math.round((currentPace % 1) * 60)).padStart(2, "0")}`,
                "/km",
                paceDelta !== undefined
                  ? t(hass, "stat.pace_delta", { delta: formatPaceDelta(paceDelta) })
                  : t(hass, "stat.avg_pace")
              )
            : nothing}
        </div>
      </ha-card>
    `;
  }

  private _stat(value: string, unit: string, label: string) {
    return html`
      <div class="stat">
        <div class="stat-value">${value}<span class="unit">${unit}</span></div>
        <div class="stat-label">${label}</div>
      </div>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .activity {
        text-transform: capitalize;
      }
      /* These 4 stats are fixed once a comparison pair exists (all derived
         from the same two records) - commit to a clean 2x2. */
      .stats .stat {
        flex-basis: 45%;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-workout-comparison-card": SuuntoWorkoutComparisonCard;
  }
}
