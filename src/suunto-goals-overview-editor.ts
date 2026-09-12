import { LitElement, html, css, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { fireEvent } from "custom-card-helpers";
import type { SuuntoHass, SuuntoGoalsOverviewCardConfig } from "./utils/types";
import { findSuuntoDeviceIds } from "./utils/entities";
import { t } from "./utils/localize";
import { DEFAULT_WEEKLY_GOAL_KM } from "./suunto-weekly-goal-card";
import { DEFAULT_WEEKLY_STEPS_GOAL } from "./suunto-weekly-steps-goal-card";

/**
 * Editor for suunto-goals-overview-card - two goal fields (distance + steps)
 * rather than the single-field shape suunto-goal-editor/
 * suunto-weekly-steps-goal-editor each handle, so it gets its own small
 * editor instead of reusing either.
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

    const devices = findSuuntoDeviceIds(this.hass);

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
        <span>${t(this.hass, "editor.goal_label")}</span>
        <input
          type="number"
          min="1"
          step="1"
          .value=${String(this._config.goal_km ?? DEFAULT_WEEKLY_GOAL_KM)}
          @change=${this._distanceGoalChanged}
        />
      </label>
      <label class="goal-field">
        <span>${t(this.hass, "editor.weekly_steps_goal_label")}</span>
        <input
          type="number"
          min="1"
          step="1000"
          .value=${String(this._config.goal_steps ?? DEFAULT_WEEKLY_STEPS_GOAL)}
          @change=${this._stepsGoalChanged}
        />
      </label>
      <label class="goal-field">
        <span>${t(this.hass, "editor.units_label")}</span>
        <select .value=${this._config.units ?? "metric"} @change=${this._unitsChanged}>
          <option value="metric">${t(this.hass, "editor.units_metric")}</option>
          <option value="imperial">${t(this.hass, "editor.units_imperial")}</option>
        </select>
      </label>
    `;
  }

  private _unitsChanged(ev: Event): void {
    if (!this._config) return;
    const value = (ev.target as HTMLSelectElement).value;
    this._emit({ ...this._config, units: value === "imperial" ? "imperial" : "metric" });
  }

  private _deviceChanged(ev: CustomEvent<{ value: string }>): void {
    if (!this._config) return;
    const value = ev.detail.value;
    this._emit({ ...this._config, device_id: value || undefined });
  }

  private _distanceGoalChanged(ev: Event): void {
    if (!this._config) return;
    const raw = Number((ev.target as HTMLInputElement).value);
    const goal_km = Number.isFinite(raw) && raw > 0 ? raw : undefined;
    this._emit({ ...this._config, goal_km });
  }

  private _stepsGoalChanged(ev: Event): void {
    if (!this._config) return;
    const raw = Number((ev.target as HTMLInputElement).value);
    const goal_steps = Number.isFinite(raw) && raw > 0 ? raw : undefined;
    this._emit({ ...this._config, goal_steps });
  }

  private _emit(config: SuuntoGoalsOverviewCardConfig): void {
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
    .goal-field input,
    .goal-field select {
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
    "suunto-goals-overview-editor": SuuntoGoalsOverviewEditor;
  }
}
