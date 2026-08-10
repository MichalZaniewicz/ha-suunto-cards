import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { activityIcon } from "./utils/icons";
import { t, type TranslationKey } from "./utils/localize";

interface LifetimeActivity {
  activity: string;
  workouts: number;
}

interface RecentWorkout {
  start: string | null;
}

/** Same activity-name matching as utils/icons.ts activityIcon, mapped to a personality label instead of a glyph. */
const ACTIVITY_LABELS: Array<[RegExp, TranslationKey]> = [
  [/cycl|bik/i, "personality.activity.cycling"],
  [/run/i, "personality.activity.running"],
  [/trek|hik/i, "personality.activity.trekking"],
  [/walk/i, "personality.activity.walking"],
  [/gym|strength|weight/i, "personality.activity.gym"],
  [/swim/i, "personality.activity.swim"],
  [/ski/i, "personality.activity.ski"],
  [/row/i, "personality.activity.row"],
];

function activityLabel(activity: string): TranslationKey {
  for (const [pattern, key] of ACTIVITY_LABELS) {
    if (pattern.test(activity)) return key;
  }
  return "personality.activity.other";
}

function scheduleLabel(workouts: RecentWorkout[]): TranslationKey {
  const withDates = workouts.filter((w): w is RecentWorkout & { start: string } => Boolean(w.start));
  const weekendCount = withDates.filter((w) => {
    const dow = new Date(w.start).getDay();
    return dow === 0 || dow === 6;
  }).length;
  const pct = weekendCount / withDates.length;
  if (pct >= 0.6) return "personality.schedule.weekend";
  if (pct <= 0.25) return "personality.schedule.weekday";
  return "personality.schedule.balanced";
}

function timeOfDayInfo(workouts: RecentWorkout[]): { key: TranslationKey; icon: string } {
  const buckets = { morning: 0, afternoon: 0, evening: 0, night: 0 };
  for (const w of workouts) {
    if (!w.start) continue;
    const hour = new Date(w.start).getHours();
    if (hour >= 5 && hour < 12) buckets.morning++;
    else if (hour >= 12 && hour < 18) buckets.afternoon++;
    else if (hour >= 18 && hour < 23) buckets.evening++;
    else buckets.night++;
  }
  const top = (Object.entries(buckets) as Array<[keyof typeof buckets, number]>).sort((a, b) => b[1] - a[1])[0][0];
  const info: Record<keyof typeof buckets, { key: TranslationKey; icon: string }> = {
    morning: { key: "personality.time.morning", icon: "mdi:weather-sunset-up" },
    afternoon: { key: "personality.time.afternoon", icon: "mdi:weather-sunny" },
    evening: { key: "personality.time.evening", icon: "mdi:weather-sunset" },
    night: { key: "personality.time.night", icon: "mdi:weather-night" },
  };
  return info[top];
}

@customElement("suunto-athlete-profile-card")
export class SuuntoAthleteProfileCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-athlete-profile-card" };
  }

  public setConfig(config: SuuntoCardConfig): void {
    this._config = config;
    this._configuredDeviceId = config.device_id;
  }

  public getCardSize(): number {
    return 2;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) return nothing;
    this._syncTheme();

    const resolved = this._resolveEntities();
    if ("error" in resolved) return resolved.error;
    const { map } = resolved;
    const hass = this.hass;

    const lifetimeId = map["lifetime_by_activity"];
    const lifetimeEntity = lifetimeId ? hass.states[lifetimeId] : undefined;
    const activities: LifetimeActivity[] = lifetimeEntity?.attributes.activities ?? [];

    const recentId = map["workouts_recent"];
    const recentEntity = recentId ? hass.states[recentId] : undefined;
    const recent: RecentWorkout[] = recentEntity?.attributes.workouts ?? [];

    if (activities.length === 0 || recent.length === 0) {
      return this._message("mdi:account-star", t(hass, "empty.athlete_profile.title"));
    }

    const topActivity = [...activities].sort((a, b) => b.workouts - a.workouts)[0].activity;
    const actKey = activityLabel(topActivity);
    const schedKey = scheduleLabel(recent);
    const time = timeOfDayInfo(recent);

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:account-star"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.athlete_profile.title")}</div>
            <div class="subtitle">
              ${t(hass, actKey)} · ${t(hass, schedKey)} · ${t(hass, time.key)}
            </div>
          </div>
        </div>

        <div class="traits">
          <span class="chip accent"><ha-icon .icon=${activityIcon(topActivity)}></ha-icon>${t(hass, actKey)}</span>
          <span class="chip accent"><ha-icon icon="mdi:calendar-weekend"></ha-icon>${t(hass, schedKey)}</span>
          <span class="chip accent"><ha-icon .icon=${time.icon}></ha-icon>${t(hass, time.key)}</span>
        </div>
      </ha-card>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .traits {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-athlete-profile-card": SuuntoAthleteProfileCard;
  }
}
