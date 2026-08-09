import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { segmentedBar } from "./utils/render-helpers";
import { formatDuration, formatRelative } from "./utils/format";
import { t } from "./utils/localize";

const ZONE_COUNT = 5;
const ZONE_COLOR = (n: number) => `var(--sc-zone-${n})`;

interface ZoneRow {
  n: number;
  minutes: number;
  lower?: number;
  upper?: number;
}

function bpmRange(lower?: number, upper?: number): string {
  if (lower !== undefined && upper !== undefined) return `${lower}-${upper} bpm`;
  if (lower !== undefined) return `${lower}+ bpm`;
  if (upper !== undefined) return `<${upper} bpm`;
  return "";
}

@customElement("suunto-hr-zones-card")
export class SuuntoHrZonesCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-hr-zones-card" };
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

    const zones: ZoneRow[] = [];
    for (let n = 1; n <= ZONE_COUNT; n++) {
      const entityId = map[`last_zone${n}`];
      const st = entityId ? hass.states[entityId] : undefined;
      if (!st || Number.isNaN(Number(st.state))) continue;
      zones.push({
        n,
        minutes: Number(st.state),
        lower: st.attributes.lower_limit_bpm,
        upper: st.attributes.upper_limit_bpm,
      });
    }

    const total = zones.reduce((sum, z) => sum + z.minutes, 0);
    if (zones.length === 0 || total <= 0) {
      return this._message(
        "mdi:heart-pulse",
        t(hass, "empty.hr_zones.title"),
        t(hass, "empty.hr_zones.subtitle")
      );
    }

    const startEntity = map["last_workout_start"];
    const start = startEntity ? hass.states[startEntity] : undefined;
    const lastWorkout = t(hass, "card.hr_zones.last_workout");

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:heart-pulse"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.hr_zones.title")}</div>
            <div class="subtitle">
              ${start ? `${lastWorkout} · ${formatRelative(new Date(start.state), hass.language)}` : lastWorkout}
            </div>
          </div>
        </div>

        ${segmentedBar(
          zones.map((z) => ({
            flexGrow: z.minutes,
            colorVar: ZONE_COLOR(z.n),
            title: t(hass, "label.zone", { n: z.n }),
          }))
        )}

        <div class="rows">
          ${zones.map((z) => {
            const d = formatDuration(z.minutes);
            const pct = Math.round((z.minutes / total) * 100);
            return html`
              <div class="row">
                <i class="dot" style="background:${ZONE_COLOR(z.n)}"></i>
                <span class="zone-label">${t(hass, "label.zone", { n: z.n })}</span>
                <span class="bpm">${bpmRange(z.lower, z.upper)}</span>
                <span class="time">${d.value} ${d.unit}</span>
                <span class="pct">${pct}%</span>
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
      .rows {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .row {
        display: grid;
        grid-template-columns: 10px 52px 1fr auto auto;
        align-items: center;
        gap: 10px;
        font-size: 0.82rem;
      }
      .zone-label {
        font-weight: 600;
      }
      .bpm {
        color: var(--secondary-text-color);
        font-variant-numeric: tabular-nums;
      }
      .time {
        font-weight: 600;
        font-variant-numeric: tabular-nums;
      }
      .pct {
        color: var(--secondary-text-color);
        font-variant-numeric: tabular-nums;
        min-width: 3ch;
        text-align: right;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-hr-zones-card": SuuntoHrZonesCard;
  }
}
