import { LitElement, html, nothing, type TemplateResult } from "lit";
import { property } from "lit/decorators.js";
import type { SuuntoCardConfig, SuuntoHass } from "./types";
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

  /** Every card keeps its config in `_config`; read it here for the universal options. */
  protected get _cardConfig(): SuuntoCardConfig | undefined {
    return (this as unknown as { _config?: SuuntoCardConfig })._config;
  }

  /** Call at the top of render(): toggles the `.dark`/`.compact`/`.hide-*` host classes used by
   * style-tokens.ts, and sets the accent color / list height custom properties. */
  protected _syncTheme(): void {
    const dark = Boolean(this.hass?.themes?.darkMode);
    this.classList.toggle("dark", dark);
    const config = this._cardConfig;
    this.classList.toggle("compact", Boolean(config?.compact));
    this.classList.toggle("hide-header", Boolean(config?.hide_header));
    this.classList.toggle("hide-icon", Boolean(config?.hide_icon));
    this.classList.toggle("hide-subtitle", Boolean(config?.hide_subtitle));
    this.classList.toggle("hide-legend", Boolean(config?.hide_legend));
    this._syncAccent(config?.accent_color, dark);
    const height = config?.list_height;
    if (height && height > 0) this.style.setProperty("--sc-list-height", `${height}px`);
    else this.style.removeProperty("--sc-list-height");
  }

  /**
   * `accent_color`: inline custom properties on the host win over the
   * `:host`/`:host(.dark)` token rules, so the amber and blue accents (and
   * their tinted backgrounds) follow the chosen color in both themes. The
   * semantic colors (zones, sleep stages, good/bad) stay. An invalid color
   * is ignored.
   */
  private _syncAccent(color: string | undefined, dark: boolean): void {
    const props = ["--sc-amber", "--sc-amber-bg", "--sc-pulse", "--sc-pulse-bg"];
    const value = color?.trim();
    if (!value || (typeof CSS !== "undefined" && !CSS.supports("color", value))) {
      for (const prop of props) this.style.removeProperty(prop);
      return;
    }
    const bg = `color-mix(in srgb, ${value} ${dark ? 18 : 14}%, transparent)`;
    this.style.setProperty("--sc-amber", value);
    this.style.setProperty("--sc-pulse", value);
    this.style.setProperty("--sc-amber-bg", bg);
    this.style.setProperty("--sc-pulse-bg", bg);
  }

  /** The header title: the `title` option when set, else the card's own. */
  protected _title(fallback: string): string {
    return this._cardConfig?.title?.trim() || fallback;
  }

  /** A list cut to the `max_items` option (no cap when unset). */
  protected _cap<T>(items: readonly T[]): T[] {
    const max = this._cardConfig?.max_items;
    return max !== undefined && max > 0 ? items.slice(0, max) : [...items];
  }

  /** The header icon: the `icon` option when set, else the card's own. */
  protected _icon(fallback: string): string {
    return this._cardConfig?.icon?.trim() || fallback;
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
