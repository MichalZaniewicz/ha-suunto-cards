import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import { readSportColors, sportColor } from "./utils/sports";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { tPlural, t } from "./utils/localize";

interface RecentWorkout {
  start: string | null;
  activity?: string | null;
  duration_min?: number | null;
}

const WEEKS = 6;
const DAYS = WEEKS * 7;

/**
 * GitHub-contributions-style heatmap of the last 6 weeks, computed
 * client-side from `workouts_recent` (up to 15 workouts - there's no full-
 * history feed, same honesty constraint as suunto-streak-card). Weeks as
 * rows (Monday-start), so it reads as an actual small calendar rather than
 * GitHub's sideways layout - simpler to build as a plain CSS grid too.
 * Intensity buckets by workout COUNT per day, not duration/TSS, to keep the
 * scale simple and comparable across very different activity types.
 */
/** Per local day, the sport of that day's longest workout. */
function mainSportByDay(workouts: RecentWorkout[]): Map<string, string> {
  const best = new Map<string, { sport: string; minutes: number }>();
  for (const w of workouts) {
    if (!w.start || !w.activity) continue;
    const day = new Date(w.start).toDateString();
    const minutes = w.duration_min ?? 0;
    const current = best.get(day);
    if (!current || minutes > current.minutes) best.set(day, { sport: w.activity, minutes });
  }
  return new Map([...best].map(([day, item]) => [day, item.sport]));
}

function dayCounts(workouts: RecentWorkout[]): Map<string, number> {
  const counts = new Map<string, number>();
  for (const w of workouts) {
    if (!w.start) continue;
    const key = new Date(w.start).toDateString();
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return counts;
}

function intensityLevel(count: number): number {
  if (count <= 0) return 0;
  if (count === 1) return 1;
  if (count === 2) return 2;
  return 3;
}

@customElement("suunto-activity-calendar-card")
export class SuuntoActivityCalendarCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-activity-calendar-card" };
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
    const entityId = map["workouts_recent"];
    const entity = entityId ? hass.states[entityId] : undefined;
    const workouts: RecentWorkout[] = entity?.attributes.workouts ?? [];

    if (!entity || workouts.length === 0) {
      return this._message("mdi:calendar-month", t(hass, "empty.activity_calendar.title"));
    }

    const counts = dayCounts(workouts);
    const sports = readSportColors(hass, map);
    const mainSport = mainSportByDay(workouts);

    // Grid starts on the Monday that begins the current week, minus 5 more
    // weeks - always a whole number of Monday-to-Sunday rows.
    const today = new Date();
    const todayDow = (today.getDay() + 6) % 7; // 0=Mon .. 6=Sun
    const gridStart = new Date(today);
    gridStart.setDate(today.getDate() - todayDow - (WEEKS - 1) * 7);

    let activeDays = 0;
    const cells: TemplateResult[] = [];
    const cursor = new Date(gridStart);
    for (let i = 0; i < DAYS; i++) {
      const count = counts.get(cursor.toDateString()) ?? 0;
      if (count > 0) activeDays++;
      const level = intensityLevel(count);
      const sport = mainSport.get(cursor.toDateString());
      cells.push(
        html`<span
          class="cell level-${level}"
          title=${sport ? `${cursor.toLocaleDateString(hass.language)}, ${sport}` : cursor.toLocaleDateString(hass.language)}
          >${sport
            ? html`<i class="sport-dot" style="background:${sportColor(sports, sport)}"></i>`
            : nothing}</span
        >`
      );
      cursor.setDate(cursor.getDate() + 1);
    }

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:calendar-month")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(t(hass, "card.activity_calendar.title"))}</div>
            <div class="subtitle">${t(hass, "card.activity_calendar.subtitle")}</div>
          </div>
        </div>

        <div class="cal-grid">${cells}</div>

        <div class="footer">
          <span class="chip">
            <ha-icon icon="mdi:calendar-check"></ha-icon>
            ${tPlural(hass, activeDays, "activity_calendar.active_days_one", "activity_calendar.active_days_other")}
          </span>
        </div>
      </ha-card>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .cal-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 4px;
      }
      .cell {
        position: relative;
        aspect-ratio: 1;
        border-radius: 3px;
        background: var(--sc-track, var(--divider-color));
        display: block;
      }
      /* The day's main sport (its longest workout), in the sport's own colour. */
      .sport-dot {
        position: absolute;
        left: 50%;
        bottom: 18%;
        width: 26%;
        aspect-ratio: 1;
        transform: translateX(-50%);
        border-radius: 50%;
        box-shadow: 0 0 0 1.5px var(--card-background-color, #fff);
      }
      :host(.eink) .sport-dot {
        display: none;
      }
      :host(.eink) .cell.level-0 {
        outline: 1px solid #000;
        outline-offset: -1px;
      }
      .cell.level-1 {
        background: color-mix(in srgb, var(--sc-amber) 35%, var(--sc-track, var(--divider-color)));
      }
      .cell.level-2 {
        background: color-mix(in srgb, var(--sc-amber) 65%, var(--sc-track, var(--divider-color)));
      }
      .cell.level-3 {
        background: var(--sc-amber);
      }
      .footer {
        display: flex;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-activity-calendar-card": SuuntoActivityCalendarCard;
  }
}
