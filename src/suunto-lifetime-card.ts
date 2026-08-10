import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

@customElement("suunto-lifetime-card")
export class SuuntoLifetimeCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-lifetime-card" };
  }

  public setConfig(config: SuuntoCardConfig): void {
    this._config = config;
    this._configuredDeviceId = config.device_id;
  }

  public getCardSize(): number {
    return 3;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) return nothing;
    this._syncTheme();

    const resolved = this._resolveEntities();
    if ("error" in resolved) return resolved.error;
    const { map } = resolved;
    const hass = this.hass;
    const get = (key: string) => (map[key] ? hass.states[map[key]] : undefined);

    const distance = get("lifetime_distance");
    const time = get("lifetime_time");
    const energy = get("lifetime_energy");
    const workouts = get("lifetime_workouts");
    const days = get("lifetime_days");

    if (!distance || UNAVAILABLE_STATES.has(distance.state)) {
      return this._message("mdi:trophy-variant", t(hass, "empty.lifetime.title"));
    }

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:trophy-variant"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.lifetime.title")}</div>
            <div class="subtitle">${t(hass, "card.lifetime.subtitle")}</div>
          </div>
        </div>

        <div class="stats">
          ${this._stat(Number(distance.state).toFixed(0), "km", t(hass, "stat.distance"))}
          ${time ? this._stat(Number(time.state).toFixed(0), "h", t(hass, "stat.time")) : nothing}
          ${energy
            ? this._stat(Math.round(Number(energy.state)).toLocaleString(hass.language), "kcal", t(hass, "stat.energy"))
            : nothing}
          ${workouts ? this._stat(workouts.state, "", t(hass, "stat.workouts")) : nothing}
          ${days ? this._stat(days.state, "", t(hass, "stat.active_days")) : nothing}
        </div>
      </ha-card>
    `;
  }

  private _stat(value: string, unit: string, label: string) {
    return html`
      <div class="stat">
        <div class="stat-value">${value}${unit ? html`<span class="unit">${unit}</span>` : nothing}</div>
        <div class="stat-label">${label}</div>
      </div>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-lifetime-card": SuuntoLifetimeCard;
  }
}
