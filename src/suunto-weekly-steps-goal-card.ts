import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoStepsGoalCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { progressRing } from "./utils/render-helpers";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);
export const DEFAULT_WEEKLY_STEPS_GOAL = 70000;

/**
 * A rolling 7-day step total against a user-set weekly target - the steps
 * equivalent of suunto-weekly-goal-card (which reads `weekly_distance`).
 * Reads the `weekly_steps` sensor directly (ha-suunto 1.0.27+); older
 * installs without it show the empty state, same as any other
 * required-sensor card in this family.
 */
@customElement("suunto-weekly-steps-goal-card")
export class SuuntoWeeklyStepsGoalCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoStepsGoalCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-weekly-steps-goal-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoStepsGoalCardConfig {
    return { type: "custom:suunto-weekly-steps-goal-card", goal_steps: DEFAULT_WEEKLY_STEPS_GOAL };
  }

  public setConfig(config: SuuntoStepsGoalCardConfig): void {
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

    const stepsEntity = get("weekly_steps");
    if (!stepsEntity || UNAVAILABLE_STATES.has(stepsEntity.state)) {
      return this._message("mdi:target", t(hass, "empty.weekly_steps_goal.title"));
    }

    const goal = this._config.goal_steps ?? DEFAULT_WEEKLY_STEPS_GOAL;
    const value = Number(stepsEntity.state);
    const pct = goal > 0 ? (value / goal) * 100 : 0;
    const colorVar = pct >= 100 ? "var(--sc-good)" : "var(--sc-amber)";

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:target"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.weekly_steps_goal.title")}</div>
            <div class="subtitle">
              ${t(hass, "card.weekly_steps_goal.subtitle", {
                value: Math.round(value).toLocaleString(hass.language),
                goal: goal.toLocaleString(hass.language),
              })}
            </div>
          </div>
        </div>

        <div class="ring-row">
          <div class="ring-wrap">
            ${progressRing(pct, colorVar, 64, 7)}
            <div class="ring-value" style="color:${colorVar}">${Math.round(pct)}%</div>
          </div>
        </div>
      </ha-card>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .ring-row {
        display: flex;
        justify-content: center;
      }
      .ring-wrap {
        position: relative;
        width: 64px;
        height: 64px;
        flex: none;
      }
      .ring-value {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.95rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-weekly-steps-goal-card": SuuntoWeeklyStepsGoalCard;
  }
}
