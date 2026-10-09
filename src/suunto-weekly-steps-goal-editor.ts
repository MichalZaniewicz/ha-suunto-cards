import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { fireEvent } from "custom-card-helpers";
import type { SuuntoHass, SuuntoStepsGoalCardConfig } from "./utils/types";
import { DEFAULT_WEEKLY_STEPS_GOAL } from "./suunto-weekly-steps-goal-card";
import { editorStyles } from "./utils/editor-controls";
import { cardOptionFields, deviceField, lookFields, titleField } from "./utils/editor-common";
import { stepsGoalField } from "./utils/goal-field";

/**
 * Editor for suunto-weekly-steps-goal-card: a WEEKLY step goal (the Suunto
 * app's daily goal x7, or custom), with the weekly wording.
 */
@customElement("suunto-weekly-steps-goal-editor")
export class SuuntoWeeklyStepsGoalEditor extends LitElement {
  @property({ attribute: false }) public hass?: SuuntoHass;

  @state() private _config?: SuuntoStepsGoalCardConfig;

  public setConfig(config: SuuntoStepsGoalCardConfig): void {
    this._config = config;
  }

  protected render() {
    if (!this.hass || !this._config) return nothing;
    const hass = this.hass;
    const config = this._config;
    const emit = (next: SuuntoStepsGoalCardConfig): void => this._emit(next);

    return html`
      <div class="form">
        ${deviceField(hass, config, emit)}
        ${titleField(hass, config, emit)}
        ${stepsGoalField(hass, config, emit, {
          weekly: true,
          fallback: DEFAULT_WEEKLY_STEPS_GOAL,
          label: "editor.weekly_steps_goal_label",
          step: 1000,
        })}
        ${cardOptionFields(hass, config, emit)}
        ${lookFields(hass, config, emit)}
      </div>
    `;
  }

  private _emit(config: SuuntoStepsGoalCardConfig): void {
    this._config = config;
    fireEvent(this, "config-changed", { config });
  }

  static styles = editorStyles;
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-weekly-steps-goal-editor": SuuntoWeeklyStepsGoalEditor;
  }
}
