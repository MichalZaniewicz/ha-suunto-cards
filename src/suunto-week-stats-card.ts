import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { segmentedBar } from "./utils/render-helpers";
import { activityIcon } from "./utils/icons";
import { t, tPlural } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);
const TOP_N = 5;

const CATEGORY_COLORS = [
  "var(--sc-amber)",
  "var(--sc-pulse)",
  "var(--sc-good)",
  "var(--sc-sleep-rem)",
  "var(--sc-zone-4)",
  "var(--sc-sleep-deep)",
];

interface LifetimeActivity {
  activity: string;
  workouts: number;
  distance_km: number;
  time_hours: number;
}

@customElement("suunto-week-stats-card")
export class SuuntoWeekStatsCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-week-stats-card" };
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

    const weeklyDistance = get("weekly_distance");
    const weeklyTime = get("weekly_time");
    const workouts7d = get("workouts_7d");
    const workouts30d = get("workouts_30d");
    const lifetime = get("lifetime_by_activity");

    if (!weeklyDistance && !lifetime) {
      return this._message("mdi:calendar-week", t(hass, "empty.week_stats.title"));
    }

    const activities: LifetimeActivity[] = (lifetime?.attributes.activities ?? [])
      .slice()
      .sort((a: LifetimeActivity, b: LifetimeActivity) => b.distance_km - a.distance_km);
    const top = activities.slice(0, TOP_N);
    const rest = activities.length - top.length;

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:calendar-week"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.week_stats.title")}</div>
            <div class="subtitle">${t(hass, "card.week_stats.subtitle")}</div>
          </div>
        </div>

        ${weeklyDistance || weeklyTime || workouts7d
          ? html`
              <div class="stats three">
                ${weeklyDistance && !UNAVAILABLE_STATES.has(weeklyDistance.state)
                  ? this._stat(Number(weeklyDistance.state).toFixed(1), "km", t(hass, "stat.distance"))
                  : nothing}
                ${weeklyTime && !UNAVAILABLE_STATES.has(weeklyTime.state)
                  ? this._stat(Number(weeklyTime.state).toFixed(1), "h", t(hass, "stat.time"))
                  : nothing}
                ${workouts7d && !UNAVAILABLE_STATES.has(workouts7d.state)
                  ? this._stat(workouts7d.state, "", t(hass, "stat.workouts"))
                  : nothing}
              </div>
            `
          : nothing}

        ${top.length
          ? html`
              <hr />
              <div class="lifetime">
                <div class="lifetime-title">${t(hass, "card.week_stats.lifetime_title")}</div>
                ${segmentedBar(
                  top.map((a, i) => ({
                    flexGrow: a.distance_km,
                    colorVar: CATEGORY_COLORS[i % CATEGORY_COLORS.length],
                    title: a.activity,
                  }))
                )}
                <div class="rows">
                  ${top.map((a, i) => {
                    const color = CATEGORY_COLORS[i % CATEGORY_COLORS.length];
                    return html`
                      <div class="row">
                        <div
                          class="icon-badge tiny"
                          style="background:color-mix(in srgb, ${color} 18%, transparent);color:${color}"
                        >
                          <ha-icon .icon=${activityIcon(a.activity)}></ha-icon>
                        </div>
                        <span class="name">${a.activity}</span>
                        <span class="count">${a.workouts}×</span>
                        <span class="dist">${a.distance_km.toFixed(0)} km</span>
                      </div>
                    `;
                  })}
                  ${rest > 0
                    ? html`<div class="row muted">
                        ${tPlural(hass, rest, "chip.more_activity_one", "chip.more_activity_other")}
                      </div>`
                    : nothing}
                </div>
              </div>
            `
          : nothing}
        ${workouts30d && !UNAVAILABLE_STATES.has(workouts30d.state)
          ? html`<div class="footer"><span class="chip">${t(hass, "chip.workouts_30d", { count: workouts30d.state })}</span></div>`
          : nothing}
      </ha-card>
    `;
  }

  private _stat(value: string, unit: string, label: string) {
    return html`
      <div class="stat">
        <div class="stat-value">${value}${unit ? html`<span class="unit">${unit}</span>` : nothing}</div>
        <div class="stat-label">${label}</div>
      </div>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .stats.three {
        grid-template-columns: repeat(3, 1fr);
      }
      .lifetime {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .lifetime-title {
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--secondary-text-color);
      }
      .rows {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .row {
        display: grid;
        grid-template-columns: 24px 1fr auto auto;
        align-items: center;
        gap: 10px;
        font-size: 0.82rem;
      }
      .row.muted {
        display: block;
        color: var(--secondary-text-color);
        font-size: 0.76rem;
      }
      .name {
        text-transform: capitalize;
        font-weight: 500;
      }
      .count {
        color: var(--secondary-text-color);
      }
      .dist {
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        min-width: 5ch;
        text-align: right;
      }
      .footer {
        display: flex;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-week-stats-card": SuuntoWeekStatsCard;
  }
}
