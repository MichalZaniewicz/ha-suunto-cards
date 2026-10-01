import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { resolveSuuntoDevice, SUUNTO_PLATFORM } from "./utils/entities";
import { formatDistance } from "./utils/format";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

interface GearRow {
  name: string;
  activity?: string;
  km: number;
  interval?: number;
  /** distance / interval, uncapped (so 1.04 = 4% over); undefined without an interval. */
  ratio?: number;
}

/**
 * Every piece of gear tracked in ha-suunto 1.0.29+ (Configure -> Add gear),
 * with how far along its service interval it is. Gear sensors carry no
 * translation_key (their name is the user's own), so they are found by
 * shape: a suunto_app entity on this device with an `interval_km` attribute.
 */
@customElement("suunto-gear-card")
export class SuuntoGearCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-gear-card" };
  }

  public setConfig(config: SuuntoCardConfig): void {
    this._config = config;
    this._configuredDeviceId = config.device_id;
  }

  public getCardSize(): number {
    return 3;
  }

  private _rows(deviceId: string): GearRow[] {
    const hass = this.hass!;
    const rows: GearRow[] = [];
    for (const entry of Object.values(hass.entities ?? {})) {
      if (entry.device_id !== deviceId || entry.platform !== SUUNTO_PLATFORM || entry.translation_key) continue;
      const entity = hass.states[entry.entity_id];
      if (!entity || !("interval_km" in entity.attributes) || UNAVAILABLE_STATES.has(entity.state)) continue;
      const km = Number(entity.state);
      if (!Number.isFinite(km)) continue;
      const interval =
        typeof entity.attributes.interval_km === "number" && entity.attributes.interval_km > 0
          ? entity.attributes.interval_km
          : undefined;
      // friendly_name is "<device name> <gear name>"; the registry has no
      // plain entity name here, so strip the device prefix when it is there.
      const device = hass.devices?.[deviceId];
      const deviceName = device?.name_by_user || device?.name || "";
      const friendly = String(entity.attributes.friendly_name ?? entry.entity_id);
      rows.push({
        name: deviceName && friendly.startsWith(`${deviceName} `) ? friendly.slice(deviceName.length + 1) : friendly,
        activity: typeof entity.attributes.activity === "string" ? entity.attributes.activity : undefined,
        km,
        interval,
        ratio: interval ? km / interval : undefined,
      });
    }
    // Closest to (or furthest past) its service first; gear without an interval last.
    return rows.sort((a, b) => (b.ratio ?? -1) - (a.ratio ?? -1));
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) return nothing;
    this._syncTheme();

    const resolved = this._resolveEntities();
    if ("error" in resolved) return resolved.error;
    const hass = this.hass;
    const units = this._config.units ?? "metric";
    const rows = this._rows(resolveSuuntoDevice(hass, this._configuredDeviceId));

    if (rows.length === 0) {
      return this._message("mdi:wrench-clock", t(hass, "empty.gear.title"), t(hass, "empty.gear.subtitle"));
    }

    const dist = (km: number) => {
      const d = formatDistance(km, units, 0);
      return { value: Number(d.value).toLocaleString(hass.language), unit: d.unit };
    };

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:wrench-clock"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.gear.title")}</div>
            <div class="subtitle">${t(hass, "card.gear.subtitle")}</div>
          </div>
        </div>

        <div class="gear-list">
          ${rows.map((row) => {
            const done = dist(row.km);
            const due = row.ratio !== undefined && row.ratio >= 1;
            const colorVar =
              row.ratio === undefined
                ? ""
                : due
                  ? "var(--sc-bad)"
                  : row.ratio >= 0.75
                    ? "var(--sc-warn)"
                    : "var(--sc-good)";
            const left = row.interval !== undefined ? dist(Math.abs(row.interval - row.km)) : undefined;
            return html`
              <div class="gear">
                <div class="gear-top">
                  <div class="gear-name">
                    ${row.name}${row.activity ? html`<small>${row.activity}</small>` : nothing}
                    ${due ? html`<span class="chip bad due">${t(hass, "chip.service")}</span>` : nothing}
                  </div>
                  <div class="gear-km">
                    <strong>${done.value}</strong>${row.interval !== undefined
                      ? html` / ${dist(row.interval).value}`
                      : nothing}
                    ${done.unit}
                  </div>
                </div>
                ${row.ratio !== undefined && left
                  ? html`
                      <div class="gbar">
                        <span style="width:${Math.min(row.ratio * 100, 100)}%;background:${colorVar}"></span>
                      </div>
                      <div class="gear-foot">
                        <span
                          >${t(hass, due ? "gear.over" : "gear.remaining", {
                            km: `${left.value} ${left.unit}`,
                          })}</span
                        >
                        <span>${Math.round(row.ratio * 100)}%</span>
                      </div>
                    `
                  : nothing}
              </div>
            `;
          })}
        </div>
      </ha-card>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .gear-list {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }
      .gear {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .gear-top {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 8px;
      }
      .gear-name {
        font-size: 0.92rem;
        font-weight: 600;
        min-width: 0;
      }
      .gear-name small {
        font-weight: 400;
        color: var(--secondary-text-color);
        font-size: 0.72rem;
        margin-left: 6px;
      }
      .chip.due {
        margin-left: 8px;
        padding: 2px 8px;
      }
      .gear-km {
        font-size: 0.8rem;
        color: var(--secondary-text-color);
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      .gear-km strong {
        color: var(--primary-text-color);
      }
      .gbar {
        height: 8px;
        border-radius: 4px;
        background: var(--divider-color);
        overflow: hidden;
      }
      .gbar span {
        display: block;
        height: 100%;
        border-radius: 4px;
      }
      .gear-foot {
        display: flex;
        justify-content: space-between;
        font-size: 0.72rem;
        color: var(--secondary-text-color);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-gear-card": SuuntoGearCard;
  }
}
