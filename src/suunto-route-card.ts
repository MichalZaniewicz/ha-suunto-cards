import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { paceRoute, type RoutePoint } from "./utils/render-helpers";
import { formatRelative, formatDuration, formatPace } from "./utils/format";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

@customElement("suunto-route-card")
export class SuuntoRouteCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

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

    const activity = get("last_activity");
    const start = get("last_workout_start");
    const distance = get("last_distance");
    const duration = get("last_duration");
    const pace = get("last_avg_pace");

    return html`
      <ha-card class="static">
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
        </div>

        <div class="route-frame">${paceRoute(points)}</div>

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
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-route-card": SuuntoRouteCard;
  }
}
