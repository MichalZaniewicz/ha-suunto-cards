import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { fireEvent } from "custom-card-helpers";
import type { SuuntoHass, SuuntoGoalsOverviewCardConfig } from "./utils/types";
import { t } from "./utils/localize";
import { DEFAULT_WEEKLY_GOAL_KM } from "./suunto-weekly-goal-card";
import { DEFAULT_WEEKLY_STEPS_GOAL } from "./suunto-weekly-steps-goal-card";
import { editorStyles, haInput } from "./utils/editor-controls";
import { cardOptionFields, deviceField, lookFields, titleField, unitsField } from "./utils/editor-common";
import { goalSourceField, stepsGoalField } from "./utils/goal-field";

/**
 * Editor for suunto-goals-overview-card: weekly distance, weekly steps and
 * weekly training time goals, plus units.
 */
@customElement("suunto-goals-overview-editor")
export class SuuntoGoalsOverviewEditor extends LitElement {
  @property({ attribute: false }) public hass?: SuuntoHass;

  @state() private _config?: SuuntoGoalsOverviewCardConfig;

  public setConfig(config: SuuntoGoalsOverviewCardConfig): void {
    this._config = config;
  }

  protected render() {
    if (!this.hass || !this._config) return nothing;
    const hass = this.hass;
    const config = this._config;
    const emit = (next: SuuntoGoalsOverviewCardConfig): void => this._emit(next);

    return html`
      <div class="form">
        ${deviceField(hass, config, emit)}
        ${titleField(hass, config, emit)}
        ${haInput(
          t(hass, "editor.goal_label"),
          String(config.goal_km ?? DEFAULT_WEEKLY_GOAL_KM),
          (raw) => {
            const value = Number(raw);
            emit({ ...config, goal_km: Number.isFinite(value) && value > 0 ? value : undefined });
          },
          { type: "number", min: 1, step: 1 }
        )}
        <div class="hint">${t(hass, "editor.distance_goal_hint")}</div>
        ${stepsGoalField(hass, config, emit, {
          weekly: true,
          fallback: DEFAULT_WEEKLY_STEPS_GOAL,
          label: "editor.weekly_steps_goal_label",
          step: 1000,
        })}
        ${goalSourceField(hass, config, "training", false, emit)}
        ${unitsField(hass, config, emit)}
        ${cardOptionFields(hass, config, emit)}
        ${lookFields(hass, config, emit)}
      </div>
    `;
  }

  private _emit(config: SuuntoGoalsOverviewCardConfig): void {
    this._config = config;
    fireEvent(this, "config-changed", { config });
  }

  static styles = editorStyles;
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-goals-overview-editor": SuuntoGoalsOverviewEditor;
  }
}
