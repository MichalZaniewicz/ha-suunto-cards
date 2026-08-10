import { LitElement, html, css, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { fireEvent } from "custom-card-helpers";
import type { SuuntoHass, SuuntoGoalCardConfig } from "./utils/types";
import { findSuuntoDeviceIds } from "./utils/entities";
import { t } from "./utils/localize";
import { DEFAULT_WEEKLY_GOAL_KM } from "./suunto-weekly-goal-card";

/**
 * Editor for suunto-weekly-goal-card - the first card in this family whose
 * config is more than just device_id, so it gets its own small editor
 * rather than reusing suunto-device-editor.
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
          @change=${this._goalChanged}
        />
      </label>
    `;
  }

  private _deviceChanged(ev: CustomEvent<{ value: string }>): void {
    if (!this._config) return;
    const value = ev.detail.value;
    this._emit({ ...this._config, device_id: value || undefined });
  }

  private _goalChanged(ev: Event): void {
    if (!this._config) return;
    const raw = Number((ev.target as HTMLInputElement).value);
    const goal_km = Number.isFinite(raw) && raw > 0 ? raw : undefined;
    this._emit({ ...this._config, goal_km });
  }

  private _emit(config: SuuntoGoalCardConfig): void {
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
    "suunto-goal-editor": SuuntoGoalEditor;
  }
}
