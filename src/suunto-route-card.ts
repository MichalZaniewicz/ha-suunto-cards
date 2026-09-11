import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state, query } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { HassEntity } from "home-assistant-js-websocket";
import type * as L from "leaflet";
import type { SuuntoCardConfig, SuuntoHass } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { paceColorVar, paceRoute, type RoutePoint } from "./utils/render-helpers";
import { formatRelative, formatDuration, formatPace } from "./utils/format";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

const LEAFLET_VERSION = "1.9.4";
const LEAFLET_JS = `https://cdn.jsdelivr.net/npm/leaflet@${LEAFLET_VERSION}/dist/leaflet.js`;
const LEAFLET_CSS_URL = `https://cdn.jsdelivr.net/npm/leaflet@${LEAFLET_VERSION}/dist/leaflet.css`;

declare global {
  interface Window {
    L?: typeof L;
  }
}

/**
 * Loads Leaflet's JS from a CDN on first use, cached across every card
 * instance on the page - the default (collapsed) view never triggers this,
 * only opening the map dialog does, so a dashboard that never opens one
 * fetches nothing extra. A page that already has `window.L` (e.g. another
 * custom card loaded it first) reuses it instead of loading a second copy.
 */
let leafletJsPromise: Promise<typeof L> | undefined;
function ensureLeafletJs(): Promise<typeof L> {
  if (window.L) return Promise.resolve(window.L);
  if (!leafletJsPromise) {
    leafletJsPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = LEAFLET_JS;
      script.onload = () => (window.L ? resolve(window.L) : reject(new Error("Leaflet did not attach to window.L")));
      script.onerror = () => reject(new Error("Failed to load Leaflet from CDN"));
      document.head.appendChild(script);
    });
  }
  return leafletJsPromise;
}

/**
 * Leaflet's CSS can't come from a normal `<link>` in `document.head` - this
 * card renders inside a shadow root, which document-level stylesheets don't
 * penetrate, so Leaflet's tiles/controls/markers would all mis-position
 * without it. Fetched once (as text) and cached, then injected as a
 * `<style>` inside each card instance's own shadow root the first time its
 * dialog opens.
 */
let leafletCssPromise: Promise<string> | undefined;
function fetchLeafletCss(): Promise<string> {
  if (!leafletCssPromise) {
    leafletCssPromise = fetch(LEAFLET_CSS_URL).then((r) => r.text());
  }
  return leafletCssPromise;
}

/**
 * Standard OpenStreetMap tiles - genuinely free, no API key, no usage tier to
 * silently break (CARTO's free "basemaps.cartocdn.com" tier was tried first
 * here and turned out to now stamp "API KEY REQUIRED" across every tile,
 * caught only by actually opening the dialog in a real browser - not
 * something a typecheck or a build could have caught). There is no
 * matching free-and-keyless dark OSM style, so dark mode reuses these same
 * light tiles under a CSS `invert()` filter on Leaflet's tile pane only
 * (see the `.dark .map-area` rule below) - the exact technique Home
 * Assistant's own native map card uses for dark mode.
 */
const TILE_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const TILE_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors';

@customElement("suunto-route-card")
export class SuuntoRouteCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;
  @state() private _open = false;
  @state() private _mapReady = false;

  @query(".map-area") private _mapContainer?: HTMLDivElement;

  private _map?: L.Map;
  private _cssInjected = false;
  private _routeKey?: string;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-route-card" };
  }

  public setConfig(config: SuuntoCardConfig): void {
    this._config = config;
    this._configuredDeviceId = config.device_id;
  }

  public getCardSize(): number {
    return 4;
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    this._destroyMap();
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
    const rawRoute = location?.attributes.route as [number, number, number][] | undefined;
    const points: RoutePoint[] = (rawRoute ?? []).map(([lat, lon, speedKmh]) => ({ lat, lon, speedKmh }));

    if (!location || UNAVAILABLE_STATES.has(location.state) || points.length < 2) {
      return this._message(
        "mdi:map-marker-path",
        t(hass, "empty.route.title"),
        t(hass, "empty.route.subtitle")
      );
    }

    const routeKey = `${map["last_workout_location"]}:${points.length}`;
    if (this._routeKey && this._routeKey !== routeKey) {
      // A newer workout replaced the one the open dialog was showing.
      this._destroyMap();
      this._open = false;
    }
    this._routeKey = routeKey;

    const activity = get("last_activity");
    const start = get("last_workout_start");
    const distance = get("last_distance");
    const duration = get("last_duration");
    const pace = get("last_avg_pace");

    return html`
      <ha-card @click=${this._openDialog}>
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:map-marker-path"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.route.title")}</div>
            <div class="subtitle">
              ${activity ? html`${activity.state}` : nothing}
              ${activity && start ? html`<span class="sep">·</span>` : nothing}
              ${start ? formatRelative(new Date(start.state), hass.language) : nothing}
            </div>
          </div>
          <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
        </div>

        <div class="route-frame">
          ${paceRoute(points)}
          <div class="tap-hint">
            <ha-icon icon="mdi:arrow-expand"></ha-icon>
            ${t(hass, "route.tap_hint")}
          </div>
        </div>

        <div class="pace-legend">
          <span class="end-label">${t(hass, "route.pace_slower")}</span>
          <span class="bar"></span>
          <span class="end-label">${t(hass, "route.pace_faster")}</span>
        </div>

        <div class="stats">
          ${distance
            ? html`<div class="stat">
                <div class="stat-label">${t(hass, "stat.distance")}</div>
                <div class="stat-value">${(Number(distance.state) / 1000).toFixed(1)}<span class="unit">km</span></div>
              </div>`
            : nothing}
          ${duration
            ? (() => {
                const d = formatDuration(Number(duration.state));
                return html`<div class="stat">
                  <div class="stat-label">${t(hass, "stat.duration")}</div>
                  <div class="stat-value">${d.value}<span class="unit">${d.unit}</span></div>
                </div>`;
              })()
            : nothing}
          ${pace
            ? html`<div class="stat">
                <div class="stat-label">${t(hass, "stat.avg_pace")}</div>
                <div class="stat-value">${formatPace(Number(pace.state))}<span class="unit">/km</span></div>
              </div>`
            : nothing}
        </div>
      </ha-card>

      ${this._open ? this._renderDialog(hass, activity, start) : nothing}
    `;
  }

  private _renderDialog(
    hass: SuuntoHass,
    activity: HassEntity | undefined,
    start: HassEntity | undefined
  ): TemplateResult {
    return html`
      <div class="dialog-veil open" @click=${this._onVeilClick}>
        <div class="dialog">
          <div class="dialog-top">
            <div class="dialog-title">
              ${activity ? html`${activity.state}` : nothing}
              ${activity && start ? html`<span class="sep">·</span>` : nothing}
              ${start ? formatRelative(new Date(start.state), hass.language) : nothing}
            </div>
            <button class="dialog-close" @click=${this._closeDialog} aria-label=${t(hass, "route.close")}>
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          </div>
          <div class="map-area"></div>
        </div>
      </div>
    `;
  }

  private _openDialog(): void {
    this._open = true;
  }

  private _onVeilClick(e: Event): void {
    if (e.target === e.currentTarget) this._closeDialog();
  }

  private _closeDialog(): void {
    this._open = false;
    this._destroyMap();
  }

  protected updated(): void {
    if (this._open && !this._map) void this._initMap();
  }

  private _destroyMap(): void {
    this._map?.remove();
    this._map = undefined;
  }

  /**
   * Builds the real Leaflet map on demand - never on initial card render.
   * A fresh map is created every time the dialog opens (rather than kept
   * alive hidden) so there's no stale-container-size class of bug to guard
   * against; Leaflet is cheap enough to re-init for an on-demand dialog.
   */
  private async _initMap(): Promise<void> {
    if (!this.hass) return;
    const hass = this.hass;
    const resolved = this._resolveEntities();
    if ("error" in resolved) return;
    const location = hass.states[resolved.map["last_workout_location"]];
    const rawRoute = (location?.attributes.route as [number, number, number][] | undefined) ?? [];
    if (rawRoute.length < 2) return;

    if (!this._cssInjected) {
      this._cssInjected = true;
      try {
        const cssText = await fetchLeafletCss();
        const style = document.createElement("style");
        style.textContent = cssText;
        this.renderRoot.appendChild(style);
      } catch {
        this._cssInjected = false; // allow a retry on the next open
      }
    }

    let L: typeof window.L;
    try {
      L = await ensureLeafletJs();
    } catch {
      return; // stays on the collapsed schematic - no crash, no partial map
    }
    if (!L || !this._open || !this._mapContainer) return;

    const points: RoutePoint[] = rawRoute.map(([lat, lon, speedKmh]) => ({ lat, lon, speedKmh }));
    const speeds = points.map((p) => p.speedKmh);
    const minSpeed = Math.min(...speeds);
    const maxSpeed = Math.max(...speeds);

    const map = L.map(this._mapContainer, { zoomControl: true, attributionControl: true });
    this._map = map;
    L.tileLayer(TILE_URL, { attribution: TILE_ATTRIBUTION, maxZoom: 19 }).addTo(map);

    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const cur = points[i];
      L.polyline(
        [
          [prev.lat, prev.lon],
          [cur.lat, cur.lon],
        ],
        { color: paceColorVar(cur.speedKmh, minSpeed, maxSpeed), weight: 5, lineCap: "round" }
      ).addTo(map);
    }

    const markerStyle = { radius: 7, weight: 2, color: "var(--card-background-color)", fillOpacity: 1 };
    L.circleMarker([points[0].lat, points[0].lon], { ...markerStyle, fillColor: "var(--sc-good)" }).addTo(map);
    L.circleMarker([points[points.length - 1].lat, points[points.length - 1].lon], {
      ...markerStyle,
      fillColor: "var(--sc-bad)",
    }).addTo(map);

    const bounds = L.latLngBounds(points.map((p) => [p.lat, p.lon] as [number, number]));
    map.fitBounds(bounds, { padding: [28, 28] });
    // The container had zero layout size at the instant L.map() ran (Lit
    // hadn't painted the dialog yet) - one invalidateSize() after the browser
    // actually lays it out fixes Leaflet's cached size/tile grid.
    requestAnimationFrame(() => map.invalidateSize());
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .subtitle .sep,
      .dialog-title .sep {
        opacity: 0.45;
        margin: 0 3px;
      }

      .route-frame {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: 10px;
        background: var(--sc-amber-bg);
        overflow: hidden;
      }
      :host(.dark) .route-frame {
        background: rgba(245, 180, 78, 0.08);
      }
      .route-frame .route-schematic {
        width: 100%;
        height: 100%;
        display: block;
      }
      .route-frame .tap-hint {
        position: absolute;
        right: 8px;
        bottom: 8px;
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 0.64rem;
        font-weight: 600;
        color: var(--sc-amber);
        background: var(--card-background-color);
        padding: 3px 8px 3px 6px;
        border-radius: 999px;
        opacity: 0.92;
      }
      .route-frame .tap-hint ha-icon {
        --mdc-icon-size: 12px;
      }

      .pace-legend {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .pace-legend .bar {
        flex: 1;
        height: 5px;
        border-radius: 999px;
        background: linear-gradient(
          90deg,
          var(--sc-sev-1) 0%,
          var(--sc-sev-2) 25%,
          var(--sc-sev-3) 50%,
          var(--sc-sev-4) 75%,
          var(--sc-sev-5) 100%
        );
      }
      .pace-legend .end-label {
        font-size: 0.62rem;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.04em;
        flex: none;
      }

      .dialog-veil {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.55);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        z-index: 10;
      }
      .dialog {
        width: 100%;
        max-width: 480px;
        max-height: min(640px, 90vh);
        background: var(--card-background-color);
        color: var(--primary-text-color);
        border-radius: 16px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }
      .dialog-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 8px 10px 14px;
        border-bottom: 1px solid var(--divider-color);
      }
      .dialog-title {
        font-size: 1rem;
        font-weight: 600;
      }
      .dialog-close {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: none;
        background: var(--divider-color);
        color: var(--primary-text-color);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: none;
      }
      .map-area {
        flex: 1;
        min-height: 320px;
      }
      /* Dark mode: OSM only ships one (light) tile style, no free keyless dark
         variant exists - invert just the tile pane, the same technique Home
         Assistant's own native map card uses, so our route/markers on the
         panes above it keep their real, un-inverted colors. */
      :host(.dark) .map-area .leaflet-tile-pane {
        filter: invert(1) hue-rotate(180deg) brightness(0.95) contrast(0.9);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-route-card": SuuntoRouteCard;
  }
}
