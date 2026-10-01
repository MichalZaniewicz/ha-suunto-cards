import { LitElement, html, css, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { fireEvent } from "custom-card-helpers";
import type { SuuntoHass, SuuntoStepsGoalCardConfig } from "./utils/types";
import { findSuuntoDeviceIds } from "./utils/entities";
import { t } from "./utils/localize";
import { suuntoDailyStepsGoal } from "./utils/suunto-goals";
import { DEFAULT_WEEKLY_STEPS_GOAL } from "./suunto-weekly-steps-goal-card";

/**
 * Editor for suunto-weekly-steps-goal-card - same `goal_steps` config shape
 * as suunto-steps-goal-editor (steps-today/steps-trend), but a WEEKLY target
 * reads confusingly under that editor's "Daily goal" label, so this is its
 * own small copy with the weekly wording instead of sharing that one.
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

    const devices = findSuuntoDeviceIds(this.hass);
    const suuntoDaily = suuntoDailyStepsGoal(this.hass, this._config.device_id);
    const suuntoGoal = suuntoDaily !== undefined ? suuntoDaily * 7 : undefined;
    const custom = this._config.goal_steps !== undefined;

    return html`
      ${devices.length > 1
        ? html`
            <ha-device-picker
              .hass=${this.hass}
              .value=${this._config.device_id ?? ""}
              .label=${t(this.hass, "editor.device_label")}
              @value-changed=${this._deviceChanged}
            ></ha-device-picker>
          `
        : html`<div class="hint">${t(this.hass, "editor.auto_detect")}</div>`}

      <label class="goal-field">
        <span>${t(this.hass, "editor.goal_source_label")}</span>
        <select .value=${custom ? "custom" : "suunto"} @change=${this._sourceChanged}>
          <option value="suunto" ?selected=${!custom}>
            ${suuntoGoal !== undefined
              ? t(this.hass, "editor.source_suunto", { value: suuntoGoal.toLocaleString(this.hass.language) })
              : t(this.hass, "editor.source_suunto_default", {
                  value: DEFAULT_WEEKLY_STEPS_GOAL.toLocaleString(this.hass.language),
                })}
          </option>
          <option value="custom" ?selected=${custom}>${t(this.hass, "editor.source_custom")}</option>
        </select>
      </label>
      ${custom
        ? html`
            <label class="goal-field">
              <span>${t(this.hass, "editor.weekly_steps_goal_label")}</span>
              <input
                type="number"
                min="1"
                step="1000"
                .value=${String(this._config.goal_steps ?? DEFAULT_WEEKLY_STEPS_GOAL)}
                @change=${this._goalChanged}
              />
            </label>
          `
        : nothing}
    `;
  }

  private _deviceChanged(ev: CustomEvent<{ value: string }>): void {
    if (!this._config) return;
    const value = ev.detail.value;
    this._emit({ ...this._config, device_id: value || undefined });
  }

  private _sourceChanged(ev: Event): void {
    if (!this._config) return;
    const value = (ev.target as HTMLSelectElement).value;
    if (value !== "custom") {
      // Follow the Suunto app: stored as an absent key.
      this._emit({ ...this._config, goal_steps: undefined });
      return;
    }
    const suuntoDaily = suuntoDailyStepsGoal(this.hass, this._config.device_id);
    this._emit({ ...this._config, goal_steps: suuntoDaily !== undefined ? suuntoDaily * 7 : DEFAULT_WEEKLY_STEPS_GOAL });
  }

  private _goalChanged(ev: Event): void {
    if (!this._config) return;
    const raw = Number((ev.target as HTMLInputElement).value);
    const goal_steps = Number.isFinite(raw) && raw > 0 ? raw : undefined;
    this._emit({ ...this._config, goal_steps });
  }

  private _emit(config: SuuntoStepsGoalCardConfig): void {
    this._config = config;
    fireEvent(this, "config-changed", { config });
  }

  static styles = css`
    .hint {
      font-size: 0.85rem;
      color: var(--secondary-text-color);
      padding: 8px 2px 2px;
    }
    .goal-field {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 12px 2px 2px;
      font-size: 0.9rem;
    }
    .goal-field select {
      padding: 6px 8px;
      border-radius: 6px;
      border: 1px solid var(--divider-color, #ccc);
      background: var(--card-background-color, #fff);
      color: inherit;
      font: inherit;
      max-width: 60%;
    }
    .goal-field input {
      width: 90px;
      padding: 6px 8px;
      border-radius: 6px;
      border: 1px solid var(--divider-color, #ccc);
      background: var(--card-background-color, #fff);
      color: inherit;
      font: inherit;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-weekly-steps-goal-editor": SuuntoWeeklyStepsGoalEditor;
  }
}
