import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { fireEvent } from "custom-card-helpers";
import type { SuuntoHass, SuuntoGoalCardConfig } from "./utils/types";
import { t } from "./utils/localize";
import { DEFAULT_WEEKLY_GOAL_KM } from "./suunto-weekly-goal-card";
import { editorStyles, haInput } from "./utils/editor-controls";
import { cardOptionFields, deviceField, lookFields, titleField } from "./utils/editor-common";

/**
 * Editor for suunto-weekly-goal-card: a weekly distance goal (the Suunto app
 * has none, so it is always the card's own number).
 */
@customElement("suunto-goal-editor")
export class SuuntoGoalEditor extends LitElement {
  @property({ attribute: false }) public hass?: SuuntoHass;

  @state() private _config?: SuuntoGoalCardConfig;

  public setConfig(config: SuuntoGoalCardConfig): void {
    this._config = config;
  }

  protected render() {
    if (!this.hass || !this._config) return nothing;
    const hass = this.hass;
    const config = this._config;
    const emit = (next: SuuntoGoalCardConfig): void => this._emit(next);

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
        ${cardOptionFields(hass, config, emit)}
        ${lookFields(hass, config, emit)}
      </div>
    `;
  }

  private _emit(config: SuuntoGoalCardConfig): void {
    this._config = config;
    fireEvent(this, "config-changed", { config });
  }

  static styles = editorStyles;
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-goal-editor": SuuntoGoalEditor;
  }
}
