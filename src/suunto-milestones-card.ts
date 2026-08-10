import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);
const EARTH_CIRCUMFERENCE_KM = 40075;
const MARATHON_KM = 42.195;
const MOON_DISTANCE_KM = 384400;
const KCAL_PER_BURGER = 550;

/**
 * Lifetime distance/energy converted into relatable equivalents - pure
 * client-side arithmetic on data suunto-lifetime-card already shows as raw
 * km/kcal, presented as a fun fact instead of a plain unit.
 */
@customElement("suunto-milestones-card")
export class SuuntoMilestonesCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-milestones-card" };
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
    if (!distance || UNAVAILABLE_STATES.has(distance.state)) {
      return this._message("mdi:earth", t(hass, "empty.milestones.title"));
    }
    const energy = get("lifetime_energy");

    const km = Number(distance.state);
    const earthLaps = km / EARTH_CIRCUMFERENCE_KM;
    const marathons = km / MARATHON_KM;
    const moonPct = (km / MOON_DISTANCE_KM) * 100;
    const burgers = energy && !UNAVAILABLE_STATES.has(energy.state) ? Number(energy.state) / KCAL_PER_BURGER : undefined;

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:earth"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.milestones.title")}</div>
            <div class="subtitle">${t(hass, "card.milestones.subtitle")}</div>
          </div>
        </div>

        <div class="stats">
          ${this._stat(earthLaps.toFixed(2), t(hass, "stat.earth_laps"))}
          ${this._stat(marathons.toFixed(0), t(hass, "stat.marathons"))}
          ${this._stat(`${moonPct.toFixed(1)}%`, t(hass, "stat.moon_pct"))}
          ${burgers !== undefined ? this._stat(burgers.toFixed(0), t(hass, "stat.burgers")) : nothing}
        </div>
      </ha-card>
    `;
  }

  private _stat(value: string, label: string) {
    return html`
      <div class="stat">
        <div class="stat-value">${value}</div>
        <div class="stat-label">${label}</div>
      </div>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      /* 4 stats always arrive together (same lifetime snapshot) - commit to a clean 2x2. */
      .stats .stat {
        flex-basis: 45%;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-milestones-card": SuuntoMilestonesCard;
  }
}
