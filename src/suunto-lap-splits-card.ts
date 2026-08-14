import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { barChart, type Bar } from "./utils/render-helpers";
import { formatDuration, formatPace, formatRelative } from "./utils/format";
import { t } from "./utils/localize";

interface Lap {
  lap: number;
  duration_minutes: number;
  distance_km: number | null;
  pace_min_km: number | null;
}

/** The lap with the best pace, or (when no lap has distance data, e.g. a gym interval session) the shortest one. */
function fastestLapIndex(laps: Lap[]): number {
  const withPace = laps
    .map((l, i) => ({ i, pace: l.pace_min_km }))
    .filter((l): l is { i: number; pace: number } => l.pace !== null && l.pace > 0);
  if (withPace.length > 0) {
    return withPace.reduce((best, cur) => (cur.pace < best.pace ? cur : best)).i;
  }
  return laps.reduce((best, cur, i) => (cur.duration_minutes < laps[best].duration_minutes ? i : best), 0);
}

@customElement("suunto-lap-splits-card")
export class SuuntoLapSplitsCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-lap-splits-card" };
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

    const entityId = map["last_workout_laps"];
    const entity = entityId ? hass.states[entityId] : undefined;
    const laps: Lap[] = entity?.attributes.laps ?? [];

    if (!entity || laps.length === 0) {
      return this._message(
        "mdi:flag-checkered",
        t(hass, "empty.lap_splits.title"),
        t(hass, "empty.lap_splits.subtitle")
      );
    }

    const fastest = fastestLapIndex(laps);
    const hasPace = laps[fastest].pace_min_km !== null && laps[fastest].pace_min_km! > 0;
    const fastestValue = hasPace
      ? `${formatPace(laps[fastest].pace_min_km!)}/km`
      : (() => {
          const d = formatDuration(laps[fastest].duration_minutes);
          return `${d.value} ${d.unit}`;
        })();

    const bars: Bar[] = laps.map((l, i) => {
      const d = formatDuration(l.duration_minutes);
      const label = t(hass, "label.lap", { n: l.lap });
      return {
        value: l.duration_minutes,
        label:
          l.pace_min_km && l.pace_min_km > 0
            ? `${label} · ${formatPace(l.pace_min_km)}/km`
            : `${label} · ${d.value}${d.unit}`,
        colorVar: i === fastest ? "var(--sc-good)" : undefined,
      };
    });

    const startEntity = map["last_workout_start"];
    const start = startEntity ? hass.states[startEntity] : undefined;
    const lastWorkout = t(hass, "card.hr_zones.last_workout");

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:flag-checkered"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.lap_splits.title")}</div>
            <div class="subtitle">
              ${start ? `${lastWorkout} · ${formatRelative(new Date(start.state), hass.language)}` : lastWorkout}
            </div>
          </div>
        </div>

        ${barChart(bars, "var(--sc-pulse)", 300, 70)}

        <div class="stats">
          <div class="stat">
            <div class="stat-value">${laps.length}</div>
            <div class="stat-label">${t(hass, "stat.laps")}</div>
          </div>
          <div class="stat good">
            <div class="stat-value">${fastestValue}</div>
            <div class="stat-label">${t(hass, "stat.fastest_lap")}</div>
          </div>
        </div>

        <div class="scroll-list">
          ${laps.map((l, i) => {
            const d = formatDuration(l.duration_minutes);
            const isFastest = i === fastest;
            return html`
              <div class="lap-row">
                <div class="lap-number ${isFastest ? "fastest" : ""}">${l.lap}</div>
                <div class="lap-meta">
                  ${l.distance_km !== null ? html`<span>${l.distance_km.toFixed(2)} km</span><span class="sep">·</span>` : nothing}
                  <span>${d.value} ${d.unit}</span>
                </div>
                <div class="lap-value">
                  ${l.pace_min_km !== null && l.pace_min_km > 0 ? html`${formatPace(l.pace_min_km)}<span class="unit">/km</span>` : html`${d.value}<span class="unit">${d.unit}</span>`}
                </div>
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
      .lap-row {
        display: grid;
        grid-template-columns: 22px 1fr auto;
        align-items: center;
        gap: 10px;
      }
      .lap-number {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: var(--sc-chip-bg);
        color: var(--secondary-text-color);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.68rem;
        font-weight: 700;
        flex: none;
      }
      .lap-number.fastest {
        background: var(--sc-good-bg);
        color: var(--sc-good);
      }
      .lap-meta {
        font-size: 0.76rem;
        color: var(--secondary-text-color);
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .lap-meta .sep {
        opacity: 0.45;
        margin: 0 4px;
      }
      .lap-value {
        font-size: 0.85rem;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      .lap-value .unit {
        font-size: 0.68rem;
        font-weight: 500;
        color: var(--secondary-text-color);
        margin-left: 1px;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-lap-splits-card": SuuntoLapSplitsCard;
  }
}
