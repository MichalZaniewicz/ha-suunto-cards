import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig, SuuntoHass } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { formatRelative } from "./utils/format";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

interface HuiMapCardElement extends HTMLElement {
  hass?: SuuntoHass;
  setConfig: (config: Record<string, unknown>) => void;
}

@customElement("suunto-location-card")
export class SuuntoLocationCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  private _mapEl?: HuiMapCardElement;
  private _mapEntityId?: string;

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
    return 5;
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
    const entityId = map["last_workout_location"];

    if (!location || UNAVAILABLE_STATES.has(location.state) || lat === undefined || lon === undefined) {
      return this._message("mdi:map-marker", t(hass, "empty.location.title"), t(hass, "empty.location.subtitle"));
    }

    const activity = get("last_activity");
    const start = get("last_workout_start");
    const mapsUrl = `https://www.google.com/maps?q=${lat},${lon}`;
    const mapEl = entityId ? this._getMapElement(entityId) : undefined;

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

        ${mapEl ? html`<div class="map-wrap">${mapEl}</div>` : nothing}

        <div class="footer-row">
          <div class="coords">${Number(lat).toFixed(5)}, ${Number(lon).toFixed(5)}</div>
          <a class="chip accent link" href=${mapsUrl} target="_blank" rel="noopener noreferrer">
            <ha-icon icon="mdi:open-in-new"></ha-icon>
            ${t(hass, "location.open_in_maps")}
          </a>
        </div>
      </ha-card>
    `;
  }

  /**
   * Delegates to Home Assistant's own built-in map card (Leaflet + tiles it
   * already ships) instead of bundling a map library - `last_workout_location`
   * already exposes `latitude`/`longitude`, which is all `hui-map-card` needs.
   * Cached across renders so the underlying Leaflet map isn't torn down and
   * rebuilt on every hass update; only `.hass` is refreshed each time.
   *
   * `hui-map-card` is an internal HA element, not a documented public API -
   * only present inside a real Home Assistant frontend (not this repo's dev
   * harness), so this degrades to `undefined` there rather than throwing.
   */
  private _getMapElement(entityId: string): HuiMapCardElement | undefined {
    if (!this._mapEl || this._mapEntityId !== entityId) {
      const ctor = customElements.get("hui-map-card");
      if (!ctor) return undefined;
      try {
        const el = document.createElement("hui-map-card") as HuiMapCardElement;
        el.setConfig({ type: "map", entities: [entityId], default_zoom: 13 });
        this._mapEl = el;
        this._mapEntityId = entityId;
      } catch {
        return undefined;
      }
    }
    this._mapEl.hass = this.hass;
    return this._mapEl;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .subtitle .sep {
        opacity: 0.45;
        margin: 0 3px;
      }
      .map-wrap {
        height: 220px;
        border-radius: 10px;
        overflow: hidden;
      }
      .map-wrap > * {
        height: 100%;
      }
      .footer-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        flex-wrap: wrap;
      }
      .coords {
        font-size: 0.85rem;
        color: var(--secondary-text-color);
        font-variant-numeric: tabular-nums;
      }
      .chip.link {
        text-decoration: none;
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
