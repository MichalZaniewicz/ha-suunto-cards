import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { formatDuration, formatRelative } from "./utils/format";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

@customElement("suunto-elevation-card")
export class SuuntoElevationCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-elevation-card" };
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

    const ascent = get("last_ascent");
    const descent = get("last_descent");
    if (
      (!ascent || UNAVAILABLE_STATES.has(ascent.state)) &&
      (!descent || UNAVAILABLE_STATES.has(descent.state))
    ) {
      return this._message(
        "mdi:image-filter-hdr",
        t(hass, "empty.elevation.title"),
        t(hass, "empty.elevation.subtitle")
      );
    }

    const ascentTime = get("last_ascent_time");
    const descentTime = get("last_descent_time");
    const minAlt = get("last_min_altitude");
    const maxAlt = get("last_max_altitude");
    const ascentRate = get("last_ascent_rate");
    const start = get("last_workout_start");

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:image-filter-hdr"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.elevation.title")}</div>
            <div class="subtitle">
              ${start
                ? `${t(hass, "card.hr_zones.last_workout")} · ${formatRelative(new Date(start.state), hass.language)}`
                : t(hass, "card.hr_zones.last_workout")}
            </div>
          </div>
        </div>

        <div class="stats">
          ${ascent && !UNAVAILABLE_STATES.has(ascent.state)
            ? this._stat(Math.round(Number(ascent.state)).toString(), "m", t(hass, "stat.ascent"))
            : nothing}
          ${descent && !UNAVAILABLE_STATES.has(descent.state)
            ? this._stat(Math.round(Number(descent.state)).toString(), "m", t(hass, "stat.descent"))
            : nothing}
          ${ascentTime && !UNAVAILABLE_STATES.has(ascentTime.state)
            ? (() => {
                const d = formatDuration(Number(ascentTime.state));
                return this._stat(d.value, d.unit, t(hass, "stat.ascent_time"));
              })()
            : nothing}
          ${descentTime && !UNAVAILABLE_STATES.has(descentTime.state)
            ? (() => {
                const d = formatDuration(Number(descentTime.state));
                return this._stat(d.value, d.unit, t(hass, "stat.descent_time"));
              })()
            : nothing}
          ${minAlt && !UNAVAILABLE_STATES.has(minAlt.state)
            ? this._stat(Math.round(Number(minAlt.state)).toString(), "m", t(hass, "stat.min_altitude"))
            : nothing}
          ${maxAlt && !UNAVAILABLE_STATES.has(maxAlt.state)
            ? this._stat(Math.round(Number(maxAlt.state)).toString(), "m", t(hass, "stat.max_altitude"))
            : nothing}
        </div>

        ${ascentRate && !UNAVAILABLE_STATES.has(ascentRate.state)
          ? html`
              <div class="footer">
                <span class="chip">
                  <ha-icon icon="mdi:trending-up"></ha-icon>
                  ${t(hass, "stat.ascent_rate")}: ${Math.round(Number(ascentRate.state))} m/h
                </span>
              </div>
            `
          : nothing}
      </ha-card>
    `;
  }

  private _stat(value: string, unit: string, label: string) {
    return html`
      <div class="stat">
        <div class="stat-value">${value}<span class="unit">${unit}</span></div>
        <div class="stat-label">${label}</div>
      </div>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .footer {
        display: flex;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-elevation-card": SuuntoElevationCard;
  }
}
