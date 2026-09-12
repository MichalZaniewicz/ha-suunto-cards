import { LitElement, html, css, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { fireEvent } from "custom-card-helpers";
import type { SuuntoHass, SuuntoCardConfig } from "./utils/types";
import { findSuuntoDeviceIds } from "./utils/entities";
import { t } from "./utils/localize";

/**
 * Cards whose stats include distance/pace/speed and so support `units:
 * "metric" | "imperial"`. Keep in sync with each card's own render() -
 * this only controls whether the EDITOR shows the field; a card ignores
 * `config.units` entirely until it actually reads it.
 */
const UNITS_CARDS = new Set<string>([
  "custom:suunto-last-workout-card",
  "custom:suunto-last-workout-tile-card",
  "custom:suunto-lifetime-card",
  "custom:suunto-week-stats-card",
  "custom:suunto-week-compare-card",
]);

/** Cards with a `compact: boolean` option that collapses secondary stats. */
const COMPACT_CARDS = new Set<string>(["custom:suunto-last-workout-card", "custom:suunto-sleep-readiness-card"]);

/** Cards with a configurable `days` trend window, and each one's default. */
const DAYS_CARDS: Record<string, number> = {
  "custom:suunto-recovery-trends-card": 30,
  "custom:suunto-sleep-trends-card": 30,
};
const DAYS_OPTIONS = [14, 30, 60, 90];

/**
 * One generic visual editor shared by every Suunto card. Most cards' config
 * is just an optional `device_id`; a growing minority also opt into
 * `units`/`compact`/`days` (see the capability sets above) - rather than
 * giving each of those its own near-duplicate editor class, this one stays
 * the single shared element and looks up which extra fields apply by the
 * card's own `config.type`.
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
    const type = this._config.type;
    const showUnits = UNITS_CARDS.has(type);
    const showCompact = COMPACT_CARDS.has(type);
    const daysDefault = DAYS_CARDS[type];

    return html`
      ${devices.length > 1
        ? html`
            <ha-device-picker
              .hass=${this.hass}
              .value=${this._config.device_id ?? ""}
              .label=${t(this.hass, "editor.device_label")}
              .includeDeviceClasses=${undefined}
              @value-changed=${this._deviceChanged}
            ></ha-device-picker>
            <div class="hint">${t(this.hass, "editor.pick_device")}</div>
          `
        : html`<div class="hint">${t(this.hass, "editor.auto_detect")}</div>`}
      ${showUnits
        ? html`
            <label class="field">
              <span>${t(this.hass, "editor.units_label")}</span>
              <select .value=${this._config.units ?? "metric"} @change=${this._unitsChanged}>
                <option value="metric">${t(this.hass, "editor.units_metric")}</option>
                <option value="imperial">${t(this.hass, "editor.units_imperial")}</option>
              </select>
            </label>
          `
        : nothing}
      ${daysDefault !== undefined
        ? html`
            <label class="field">
              <span>${t(this.hass, "editor.days_label")}</span>
              <select .value=${String(this._config.days ?? daysDefault)} @change=${this._daysChanged}>
                ${DAYS_OPTIONS.map((d) => html`<option value=${d}>${d}</option>`)}
              </select>
            </label>
          `
        : nothing}
      ${showCompact
        ? html`
            <label class="field checkbox">
              <span>${t(this.hass, "editor.compact_label")}</span>
              <input
                type="checkbox"
                .checked=${this._config.compact ?? false}
                @change=${this._compactChanged}
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

  private _unitsChanged(ev: Event): void {
    if (!this._config) return;
    const value = (ev.target as HTMLSelectElement).value;
    this._emit({ ...this._config, units: value === "imperial" ? "imperial" : "metric" });
  }

  private _daysChanged(ev: Event): void {
    if (!this._config) return;
    const raw = Number((ev.target as HTMLSelectElement).value);
    this._emit({ ...this._config, days: Number.isFinite(raw) && raw > 0 ? raw : undefined });
  }

  private _compactChanged(ev: Event): void {
    if (!this._config) return;
    const checked = (ev.target as HTMLInputElement).checked;
    this._emit({ ...this._config, compact: checked || undefined });
  }

  private _emit(config: SuuntoCardConfig): void {
    this._config = config;
    fireEvent(this, "config-changed", { config });
  }

  static styles = css`
    .hint {
      font-size: 0.85rem;
      color: var(--secondary-text-color);
      padding: 8px 2px 2px;
    }
    .field {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 12px 2px 2px;
      font-size: 0.9rem;
    }
    .field.checkbox {
      justify-content: flex-start;
    }
    .field select {
      padding: 6px 8px;
      border-radius: 6px;
      border: 1px solid var(--divider-color, #ccc);
      background: var(--card-background-color, #fff);
      color: inherit;
      font: inherit;
    }
    .field.checkbox input {
      order: -1;
      margin-right: 8px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-device-editor": SuuntoDeviceEditor;
  }
}
