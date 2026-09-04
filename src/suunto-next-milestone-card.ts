import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { progressRing } from "./utils/render-helpers";
import { t, tPlural } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

/**
 * Next round-number lifetime-distance threshold, from a ladder rather than a
 * fixed step: every 1000 km up to 10 000, then every 5000 beyond - close
 * milestones early on, sparser ones once the account has real history.
 * Always strictly ahead of `km` (never returns `km` itself even when it is
 * already exactly on a rung), so a freshly-crossed milestone doesn't stall.
 */
function nextDistanceMilestone(km: number): number {
  const step = km < 10000 ? 1000 : 5000;
  return (Math.floor(km / step) + 1) * step;
}

/** Same ladder idea for workout count: every 50 up to 500, then every 100. */
function nextWorkoutMilestone(count: number): number {
  const step = count < 500 ? 50 : 100;
  return (Math.floor(count / step) + 1) * step;
}

/**
 * Countdown to your next round-number lifetime distance, plus a workout-count
 * sub-milestone and a pace-based ETA - a different angle from
 * suunto-milestones-card's "fun equivalents" (Earth laps, marathons), this
 * one counts down to a concrete, reachable target instead.
 */
@customElement("suunto-next-milestone-card")
export class SuuntoNextMilestoneCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-next-milestone-card" };
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
    const get = (key: string) => (map[key] ? hass.states[map[key]] : undefined);

    const distance = get("lifetime_distance");
    if (!distance || UNAVAILABLE_STATES.has(distance.state)) {
      return this._message("mdi:flag-checkered", t(hass, "empty.next_milestone.title"));
    }

    const km = Number(distance.state);
    const target = nextDistanceMilestone(km);
    const remaining = target - km;
    const pct = (km / target) * 100;

    const workouts = get("lifetime_workouts");
    const workoutsKnown = workouts && !UNAVAILABLE_STATES.has(workouts.state);
    const workoutCount = workoutsKnown ? Number(workouts!.state) : undefined;
    const workoutTarget = workoutCount !== undefined ? nextWorkoutMilestone(workoutCount) : undefined;
    const workoutsRemaining = workoutCount !== undefined && workoutTarget !== undefined ? workoutTarget - workoutCount : undefined;

    const weekly = get("weekly_distance");
    const weeklyKmPerWeek = weekly && !UNAVAILABLE_STATES.has(weekly.state) ? Number(weekly.state) : undefined;
    const etaWeeks =
      weeklyKmPerWeek && weeklyKmPerWeek > 0 ? Math.max(1, Math.ceil(remaining / weeklyKmPerWeek)) : undefined;

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:flag-checkered"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.next_milestone.title")}</div>
            <div class="subtitle">${t(hass, "card.next_milestone.subtitle")}</div>
          </div>
        </div>

        <div class="milestone-row">
          <div class="ring-wrap">
            ${progressRing(pct, "var(--sc-amber)", 96, 9)}
            <div class="ring-center">
              <div class="big">${Math.round(remaining).toLocaleString(hass.language)}<span class="unit">km</span></div>
              <div class="small">${t(hass, "next_milestone.remaining_label")}</div>
            </div>
          </div>
          <div class="milestone-side">
            <div class="milestone-target">
              ${t(hass, "next_milestone.target", { target: target.toLocaleString(hass.language), pct: pct.toFixed(0) })}
            </div>
            ${workoutsRemaining !== undefined && workoutTarget !== undefined
              ? html`
                  <div class="sub-milestone">
                    <ha-icon icon="mdi:trophy-outline"></ha-icon>
                    <div class="txt">
                      ${tPlural(hass, workoutsRemaining, "next_milestone.workouts_one", "next_milestone.workouts_other", {
                        target: workoutTarget,
                      })}
                    </div>
                  </div>
                `
              : nothing}
            ${etaWeeks !== undefined && weeklyKmPerWeek !== undefined
              ? html`
                  <div class="chip accent">
                    <ha-icon icon="mdi:trending-up"></ha-icon>
                    ${tPlural(hass, etaWeeks, "next_milestone.eta_one", "next_milestone.eta_other", {
                      pace: weeklyKmPerWeek.toFixed(0),
                      weeks: etaWeeks,
                    })}
                  </div>
                `
              : nothing}
          </div>
        </div>
      </ha-card>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .milestone-row {
        display: flex;
        gap: 18px;
        align-items: center;
      }
      .ring-wrap {
        position: relative;
        flex: none;
        width: 96px;
        height: 96px;
      }
      .ring-wrap svg {
        transform: rotate(-90deg);
      }
      .ring-center {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 1px;
      }
      .ring-center .big {
        font-size: 1.1rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        line-height: 1.05;
        display: flex;
        align-items: baseline;
        gap: 2px;
      }
      .ring-center .big .unit {
        font-size: 0.62rem;
        font-weight: 500;
        color: var(--secondary-text-color);
      }
      .ring-center .small {
        font-size: 0.64rem;
        color: var(--secondary-text-color);
      }
      .milestone-side {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 10px;
        min-width: 0;
      }
      .milestone-target {
        font-size: 0.82rem;
        color: var(--secondary-text-color);
      }
      .sub-milestone {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        background: var(--divider-color);
        border-radius: 9px;
      }
      .sub-milestone ha-icon {
        color: var(--sc-amber);
        flex: none;
        --mdc-icon-size: 16px;
      }
      .sub-milestone .txt {
        font-size: 0.78rem;
        line-height: 1.3;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-next-milestone-card": SuuntoNextMilestoneCard;
  }
}
