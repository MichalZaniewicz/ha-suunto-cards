import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { formatRelative } from "./utils/format";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

@customElement("suunto-location-card")
export class SuuntoLocationCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-location-card" };
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

    const location = get("last_workout_location");
    const lat = location?.attributes.latitude;
    const lon = location?.attributes.longitude;

    if (!location || UNAVAILABLE_STATES.has(location.state) || lat === undefined || lon === undefined) {
      return this._message("mdi:map-marker", t(hass, "empty.location.title"), t(hass, "empty.location.subtitle"));
    }

    const activity = get("last_activity");
    const start = get("last_workout_start");
    const mapsUrl = `https://www.google.com/maps?q=${lat},${lon}`;

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:map-marker"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.location.title")}</div>
            <div class="subtitle">
              ${activity ? html`${activity.state}` : nothing}
              ${activity && start ? html`<span class="sep">·</span>` : nothing}
              ${start ? formatRelative(new Date(start.state), hass.language) : nothing}
            </div>
          </div>
        </div>

        <div class="coords">${Number(lat).toFixed(5)}, ${Number(lon).toFixed(5)}</div>

        <a class="chip accent link" href=${mapsUrl} target="_blank" rel="noopener noreferrer">
          <ha-icon icon="mdi:open-in-new"></ha-icon>
          ${t(hass, "location.open_in_maps")}
        </a>
      </ha-card>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .subtitle .sep {
        opacity: 0.45;
        margin: 0 3px;
      }
      .coords {
        font-size: 1.05rem;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
      }
      .chip.link {
        text-decoration: none;
        align-self: flex-start;
        cursor: pointer;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-location-card": SuuntoLocationCard;
  }
}
