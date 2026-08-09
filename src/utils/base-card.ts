import { LitElement, html, nothing, type TemplateResult } from "lit";
import { property } from "lit/decorators.js";
import type { SuuntoHass } from "./types";
import { resolveSuuntoDevice, mapByTranslationKey, SuuntoConfigError } from "./entities";
import { t } from "./localize";

/**
 * Shared plumbing for every Suunto card: dark-mode class sync, device
 * resolution + translation_key lookup, and a consistent empty/error state.
 * Widgets extend this and only implement `render()`.
 */
export abstract class SuuntoBaseCard extends LitElement {
  @property({ attribute: false }) public hass?: SuuntoHass;

  protected _configuredDeviceId?: string;

  /** Call at the top of render(): toggles the `.dark` host class used by style-tokens.ts. */
  protected _syncTheme(): void {
    this.classList.toggle("dark", Boolean(this.hass?.themes?.darkMode));
  }

  /** Resolves the device + translation_key map, or a ready-to-return error template. */
  protected _resolveEntities(): { map: Record<string, string> } | { error: TemplateResult } {
    if (!this.hass) {
      return { error: this._message("mdi:alert-circle-outline", t(this.hass, "empty.loading")) };
    }
    try {
      const deviceId = resolveSuuntoDevice(this.hass, this._configuredDeviceId);
      return { map: mapByTranslationKey(this.hass, deviceId) };
    } catch (err) {
      return { error: this._message("mdi:alert-circle-outline", this._configErrorMessage(err)) };
    }
  }

  private _configErrorMessage(err: unknown): string {
    if (err instanceof SuuntoConfigError) {
      if (err.code === "device_missing") {
        return t(this.hass, "error.device_missing", { device: err.deviceId ?? "" });
      }
      if (err.code === "multiple_devices") return t(this.hass, "error.multiple_devices");
      return t(this.hass, "error.no_device");
    }
    return t(this.hass, "empty.generic_error");
  }

  protected _message(icon: string, title: string, subtitle?: string): TemplateResult {
    return html`
      <ha-card class="static">
        <div class="empty">
          <ha-icon .icon=${icon}></ha-icon>
          <div class="t1">${title}</div>
          ${subtitle ? html`<div class="t2">${subtitle}</div>` : nothing}
        </div>
      </ha-card>
    `;
  }
}
