import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig, SuuntoHass } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { activityIcon } from "./utils/icons";
import { formatRelative } from "./utils/format";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

interface HuiMapCardElement extends HTMLElement {
  hass?: SuuntoHass;
  setConfig: (config: Record<string, unknown>) => void;
}

interface CardHelpers {
  createCardElement: (config: Record<string, unknown>) => HuiMapCardElement;
}

declare global {
  interface Window {
    // Documented HA frontend API for embedding a native Lovelace card inside
    // a custom one - unlike a plain customElements.get() check, this actually
    // triggers the (code-split, lazy-loaded) card module to load if it hasn't
    // been already. Dashboards that never otherwise use `type: map` never
    // trigger that load on their own, which is exactly the gap that made the
    // embedded map work in the card editor preview (already warm) but not
    // after a fresh page load.
    loadCardHelpers?: () => Promise<CardHelpers>;
  }
}

@customElement("suunto-location-card")
export class SuuntoLocationCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;
  @state() private _mapEl?: HuiMapCardElement;

  private _mapKey?: string;
  private _mapLoading = false;

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
    const markerIcon = activityIcon(activity?.state);

    if (entityId) void this._ensureMapElement(entityId, markerIcon);
    if (this._mapEl) this._mapEl.hass = hass;

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

        ${this._mapEl && this._mapKey === `${entityId}:${markerIcon}`
          ? html`<div class="map-wrap">${this._mapEl}</div>`
          : nothing}

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
   * already exposes `latitude`/`longitude`, which is all the map card needs.
   *
   * Goes through `window.loadCardHelpers()` rather than a bare
   * `document.createElement("hui-map-card")`: that only works if the map
   * card's module happens to already be loaded elsewhere (e.g. the card
   * editor's picker, which is why it worked there but not after a fresh
   * dashboard load with no other `type: map` card on the page).
   * `loadCardHelpers()` guarantees the module loads and returns a fully
   * configured element - no separate `setConfig()` call needed.
   *
   * The element is cached across renders (`_mapEl`/`_mapKey`) so the
   * underlying Leaflet map isn't destroyed and rebuilt on every hass update -
   * only `.hass` is refreshed (done in `render()`). `auto_fit` centers the
   * map tightly on the marker instead of leaving it off-center; the entity's
   * `icon` override shows the workout's activity glyph on the map instead of
   * the sensor's own generic pin icon.
   */
  private async _ensureMapElement(entityId: string, markerIcon: string): Promise<void> {
    const key = `${entityId}:${markerIcon}`;
    if ((this._mapEl && this._mapKey === key) || this._mapLoading) return;

    const config = {
      type: "map",
      auto_fit: true,
      default_zoom: 14,
      aspect_ratio: "16:9",
      entities: [{ entity: entityId, icon: markerIcon }],
    };

    const loadHelpers = window.loadCardHelpers;
    if (!loadHelpers) {
      // Very old frontend without the helper API - fall back to a direct
      // check; only works if something else already loaded the module.
      const ctor = customElements.get("hui-map-card");
      if (!ctor) return;
      try {
        const el = document.createElement("hui-map-card") as HuiMapCardElement;
        el.setConfig(config);
        this._mapKey = key;
        this._mapEl = el;
      } catch {
        /* leave unset - footer coordinates + link still work */
      }
      return;
    }

    this._mapLoading = true;
    try {
      const helpers = await loadHelpers();
      const el = helpers.createCardElement(config);
      this._mapKey = key;
      this._mapEl = el;
    } catch {
      /* leave unset - footer coordinates + link still work */
    } finally {
      this._mapLoading = false;
    }
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .subtitle .sep {
        opacity: 0.45;
        margin: 0 3px;
      }
      /* No explicit height here on purpose: forcing one from outside fought
         hui-map-card's own sizing (it rendered taller than the box we gave
         it, and overflow:hidden silently cropped it, pushing the marker -
         correctly centered within its OWN full height - out of the visible
         window). aspect_ratio in the card config now sizes it predictably
         instead, so this wrapper just clips the corners, not the content. */
      .map-wrap {
        border-radius: 10px;
        overflow: hidden;
      }
      .map-wrap > * {
        display: block;
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
