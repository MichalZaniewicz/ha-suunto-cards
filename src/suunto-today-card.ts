import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { t, tPlural } from "./utils/localize";
import type { SuuntoHass } from "./utils/types";
import { goalBar } from "./utils/render-helpers";
import { knownGoal, formatGoal } from "./utils/suunto-goals";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

/** Presentation-only banding for the training_suggestion ENUM - not a Suunto scale. */
function suggestionBand(hass: SuuntoHass | undefined, value: string): { colorVar: string; label: string; icon: string } {
  switch (value) {
    case "hard":
      return { colorVar: "var(--sc-good)", label: t(hass, "band.suggestion.hard"), icon: "mdi:fire" };
    case "moderate":
      return { colorVar: "var(--sc-pulse)", label: t(hass, "band.suggestion.moderate"), icon: "mdi:walk" };
    case "easy":
      return { colorVar: "var(--sc-warn)", label: t(hass, "band.suggestion.easy"), icon: "mdi:leaf" };
    default:
      return { colorVar: "var(--sc-bad)", label: t(hass, "band.suggestion.rest"), icon: "mdi:bed-clock" };
  }
}

@customElement("suunto-today-card")
export class SuuntoTodayCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-today-card" };
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
    const get = (key: string) => (map[key] ? hass.states[map[key]] : undefined);

    const steps = get("daily_steps");
    const energy = get("daily_energy");
    // ha-suunto 1.0.28+: active + BMR accrued today, the app's "calories".
    const totalEnergy = get("daily_total_energy");
    const totalEnergyValue =
      totalEnergy && !UNAVAILABLE_STATES.has(totalEnergy.state) ? Number(totalEnergy.state) : undefined;
    const currentHr = get("current_hr");
    const workoutToday = get("workout_today");
    const isRecovering = get("is_recovering");
    const suggestion = get("training_suggestion");
    const daysSince = get("days_since_last_workout");

    if (!steps && !energy && !currentHr) {
      return this._message("mdi:pulse", t(hass, "empty.today.title"));
    }

    const stepsValue = steps && !UNAVAILABLE_STATES.has(steps.state) ? Number(steps.state) : undefined;
    const activeValue = energy && !UNAVAILABLE_STATES.has(energy.state) ? Number(energy.state) : undefined;
    // Goals appear only when one is actually known (typed into the card or set
    // in the Suunto app, ha-suunto 1.0.29+) - no invented default on this card.
    const showGoals = this._config.show_goals !== false;
    const stepsGoal = showGoals ? knownGoal(hass, this._config, this._configuredDeviceId, "steps") : undefined;
    const energyGoal = showGoals ? knownGoal(hass, this._config, this._configuredDeviceId, "energy") : undefined;

    const hrValue =
      currentHr && !UNAVAILABLE_STATES.has(currentHr.state) ? Math.round(Number(currentHr.state)) : undefined;

    const suggestionValue =
      suggestion && !UNAVAILABLE_STATES.has(suggestion.state) ? suggestion.state : undefined;
    const suggestionBandValue = suggestionValue ? suggestionBand(hass, suggestionValue) : undefined;
    const daysSinceValue =
      daysSince && !UNAVAILABLE_STATES.has(daysSince.state) ? Number(daysSince.state) : undefined;

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:pulse"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.today.title")}</div>
            <div class="subtitle">${t(hass, "card.today.subtitle")}</div>
          </div>
        </div>

        <div class="stats">
          ${stepsValue !== undefined
            ? html`
                <div class="stat">
                  <div class="stat-value">${stepsValue.toLocaleString(hass.language)}</div>
                  <div class="stat-label">${t(hass, "stat.steps")}</div>
                  ${stepsGoal !== undefined
                    ? html`
                        <div class="goal-sub">${t(hass, "goal.of", { goal: formatGoal(hass, "steps", stepsGoal) })}</div>
                        ${goalBar(stepsValue, stepsGoal)}
                      `
                    : nothing}
                </div>
              `
            : nothing}
          ${totalEnergyValue !== undefined
            ? html`
                <div class="stat">
                  <div class="stat-value">
                    ${Math.round(totalEnergyValue).toLocaleString(hass.language)}<span class="unit">kcal</span>
                  </div>
                  <div class="stat-label">${t(hass, "stat.energy")}</div>
                  ${activeValue !== undefined
                    ? html`<div class="stat-sub">
                        ${energyGoal !== undefined
                          ? t(hass, "goal.energy_active_of", {
                              kcal: Math.round(activeValue).toLocaleString(hass.language),
                              goal: energyGoal.toLocaleString(hass.language),
                            })
                          : t(hass, "stat.energy_active_sub", {
                              kcal: Math.round(activeValue).toLocaleString(hass.language),
                            })}
                      </div>`
                    : nothing}
                  ${activeValue !== undefined && energyGoal !== undefined ? goalBar(activeValue, energyGoal) : nothing}
                </div>
              `
            : activeValue !== undefined
            ? html`
                <div class="stat">
                  <div class="stat-value">
                    ${Math.round(activeValue).toLocaleString(hass.language)}<span class="unit">kcal</span>
                  </div>
                  <div class="stat-label">${t(hass, "stat.energy")}</div>
                  ${energyGoal !== undefined
                    ? html`
                        <div class="goal-sub">${t(hass, "goal.of", { goal: formatGoal(hass, "energy", energyGoal) })}</div>
                        ${goalBar(activeValue, energyGoal)}
                      `
                    : nothing}
                </div>
              `
            : nothing}
          ${hrValue !== undefined
            ? html`
                <div class="stat hr">
                  <div class="stat-value">
                    <span class="live-dot"></span>${hrValue}<span class="unit">bpm</span>
                  </div>
                  <div class="stat-label">${t(hass, "stat.heart_rate")}</div>
                </div>
              `
            : nothing}
        </div>

        ${workoutToday?.state === "on" ||
        isRecovering?.state === "on" ||
        suggestionBandValue ||
        (daysSinceValue !== undefined && daysSinceValue > 0)
          ? html`
              <div class="footer">
                ${workoutToday?.state === "on"
                  ? html`<span class="chip accent"><ha-icon icon="mdi:calendar-check"></ha-icon>${t(hass, "chip.workout_today")}</span>`
                  : nothing}
                ${isRecovering?.state === "on"
                  ? html`<span class="chip"><ha-icon icon="mdi:bed-clock"></ha-icon>${t(hass, "chip.recovering")}</span>`
                  : nothing}
                ${suggestionBandValue
                  ? html`<span class="chip" style="color:${suggestionBandValue.colorVar}"
                      ><ha-icon icon="${suggestionBandValue.icon}"></ha-icon>${suggestionBandValue.label}</span
                    >`
                  : nothing}
                ${daysSinceValue !== undefined && daysSinceValue > 0
                  ? html`<span class="chip"
                      ><ha-icon icon="mdi:calendar-clock-outline"></ha-icon>${tPlural(
                        hass,
                        daysSinceValue,
                        "chip.days_since_one",
                        "chip.days_since_other"
                      )}</span
                    >`
                  : nothing}
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
      .live-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--sc-pulse);
        display: inline-block;
        margin-right: 5px;
        animation: sc-pulse 2s ease-in-out infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .live-dot {
          animation: none;
        }
      }
      @keyframes sc-pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.25; }
      }
      .footer {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
      .stat-sub {
        font-size: 0.68rem;
        color: var(--secondary-text-color);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-today-card": SuuntoTodayCard;
  }
}
