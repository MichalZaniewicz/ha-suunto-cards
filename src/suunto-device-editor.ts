import { LitElement, html, css, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { fireEvent } from "custom-card-helpers";
import type { SuuntoHass, SuuntoCardConfig } from "./utils/types";
import { findSuuntoDeviceIds } from "./utils/entities";
import { t } from "./utils/localize";

/**
 * One generic visual editor shared by every Suunto card - every widget's
 * config is currently just an optional `device_id`, so a single element
 * (rather than one editor class per card) keeps the family in sync.
 */
@customElement("suunto-device-editor")
export class SuuntoDeviceEditor extends LitElement {
  @property({ attribute: false }) public hass?: SuuntoHass;

  @state() private _config?: SuuntoCardConfig;

  public setConfig(config: SuuntoCardConfig): void {
    this._config = config;
  }

  protected render() {
    if (!this.hass || !this._config) return nothing;

    const devices = findSuuntoDeviceIds(this.hass);
    if (devices.length <= 1) {
      return html`<div class="hint">${t(this.hass, "editor.auto_detect")}</div>`;
    }

    return html`
      <ha-device-picker
        .hass=${this.hass}
        .value=${this._config.device_id ?? ""}
        .label=${t(this.hass, "editor.device_label")}
        .includeDeviceClasses=${undefined}
        @value-changed=${this._deviceChanged}
      ></ha-device-picker>
      <div class="hint">${t(this.hass, "editor.pick_device")}</div>
    `;
  }

  private _deviceChanged(ev: CustomEvent<{ value: string }>): void {
    if (!this._config) return;
    const value = ev.detail.value;
    const newConfig: SuuntoCardConfig = { ...this._config, device_id: value || undefined };
    fireEvent(this, "config-changed", { config: newConfig });
  }

  static styles = css`
    .hint {
      font-size: 0.85rem;
      color: var(--secondary-text-color);
      padding: 8px 2px 2px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-device-editor": SuuntoDeviceEditor;
  }
}
