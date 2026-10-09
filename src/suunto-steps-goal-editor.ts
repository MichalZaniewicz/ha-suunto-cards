import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { fireEvent } from "custom-card-helpers";
import type { SuuntoHass, SuuntoStepsGoalCardConfig } from "./utils/types";
import { DEFAULT_STEPS_GOAL } from "./suunto-steps-today-card";
import { editorStyles } from "./utils/editor-controls";
import { cardOptionFields, deviceField, lookFields, titleField } from "./utils/editor-common";
import { stepsGoalField } from "./utils/goal-field";

/**
 * Editor for suunto-steps-today-card and suunto-steps-trend-card: the daily
 * step goal, from the Suunto app or custom.
 */
@customElement("suunto-steps-goal-editor")
export class SuuntoStepsGoalEditor extends LitElement {
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
          weekly: false,
          fallback: DEFAULT_STEPS_GOAL,
          label: "editor.steps_goal_label",
          step: 500,
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
    "suunto-steps-goal-editor": SuuntoStepsGoalEditor;
  }
}
