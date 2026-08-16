import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig, SuuntoHass } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { formatDuration, formatPace, formatRelative } from "./utils/format";
import { t, tPlural, type TranslationKey } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

interface LifetimeActivity {
  activity: string;
  workouts: number;
}

interface PrEntry {
  value: number;
  activity?: string;
  start_time?: string;
}

interface Badge {
  icon: string;
  nameKey: TranslationKey;
  nameVars?: Record<string, string | number>;
  unlocked: boolean;
  current: number;
  target: number;
  format: (n: number) => string;
}

/** `toLocaleString()` with no locale argument follows the browser/OS default,
 * not the HA-selected language - on an English dashboard running under a
 * non-English OS locale that silently mis-formats these numbers. Explicit
 * locale, same fix format.ts's formatTime/formatRelative already apply. */
function fmtIntFor(locale?: string): (n: number) => string {
  return (n: number) => Math.round(n).toLocaleString(locale);
}
function fmtKmFor(locale?: string): (n: number) => string {
  return (n: number) => `${Math.round(n).toLocaleString(locale)} km`;
}

function categoryHeading(hass: SuuntoHass | undefined, key: TranslationKey): TemplateResult {
  return html`<div class="cat">${t(hass, key)}</div>`;
}

@customElement("suunto-achievements-card")
export class SuuntoAchievementsCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-achievements-card" };
  }

  public setConfig(config: SuuntoCardConfig): void {
    this._config = config;
    this._configuredDeviceId = config.device_id;
  }

  public getCardSize(): number {
    return 6;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) return nothing;
    this._syncTheme();

    const resolved = this._resolveEntities();
    if ("error" in resolved) return resolved.error;
    const { map } = resolved;
    const hass = this.hass;
    const get = (key: string) => (map[key] ? hass.states[map[key]] : undefined);

    const workouts = get("lifetime_workouts");
    const distance = get("lifetime_distance");
    const time = get("lifetime_time");
    const days = get("lifetime_days");
    const energy = get("lifetime_energy");
    const lifetimeEntity = get("lifetime_by_activity");
    const vo2max = get("estimated_vo2max") ?? get("vo2max");
    const records = get("training_records");

    if (!workouts && !distance) {
      return this._message(
        "mdi:trophy-outline",
        t(hass, "empty.achievements.title"),
        t(hass, "empty.achievements.subtitle")
      );
    }

    const fmtInt = fmtIntFor(hass.language);
    const fmtKm = fmtKmFor(hass.language);

    const num = (entity: typeof workouts): number =>
      entity && !UNAVAILABLE_STATES.has(entity.state) ? Number(entity.state) : 0;

    const activities: LifetimeActivity[] = lifetimeEntity?.attributes.activities ?? [];
    const sportsCount = activities.filter((a) => a.workouts > 0).length;
    const topActivity = [...activities].sort((a, b) => b.workouts - a.workouts)[0];
    const streak = records && !UNAVAILABLE_STATES.has(records.state) ? Number(records.state) : 0;

    const groups: Array<{ headingKey: TranslationKey; badges: Badge[] }> = [
      {
        headingKey: "achievements.category.workouts",
        badges: [
          { icon: "💯", nameKey: "achievements.badge.century_club", unlocked: num(workouts) >= 100, current: num(workouts), target: 100, format: fmtInt },
          { icon: "🎖️", nameKey: "achievements.badge.workouts_250", unlocked: num(workouts) >= 250, current: num(workouts), target: 250, format: fmtInt },
          { icon: "🏅", nameKey: "achievements.badge.workouts_500", unlocked: num(workouts) >= 500, current: num(workouts), target: 500, format: fmtInt },
          { icon: "👑", nameKey: "achievements.badge.workouts_1000", unlocked: num(workouts) >= 1000, current: num(workouts), target: 1000, format: fmtInt },
        ],
      },
      {
        headingKey: "achievements.category.distance",
        badges: [
          { icon: "🚴", nameKey: "achievements.badge.distance_1000", unlocked: num(distance) >= 1000, current: num(distance), target: 1000, format: fmtKm },
          { icon: "🗺️", nameKey: "achievements.badge.distance_5000", unlocked: num(distance) >= 5000, current: num(distance), target: 5000, format: fmtKm },
          { icon: "🌍", nameKey: "achievements.badge.around_globe", unlocked: num(distance) >= 40075, current: num(distance), target: 40075, format: fmtKm },
        ],
      },
      {
        headingKey: "achievements.category.time",
        badges: [
          { icon: "⏱️", nameKey: "achievements.badge.hours_100", unlocked: num(time) >= 100, current: num(time), target: 100, format: fmtInt },
          { icon: "⌛", nameKey: "achievements.badge.hours_500", unlocked: num(time) >= 500, current: num(time), target: 500, format: fmtInt },
        ],
      },
      {
        headingKey: "achievements.category.days",
        badges: [
          { icon: "📅", nameKey: "achievements.badge.days_100", unlocked: num(days) >= 100, current: num(days), target: 100, format: fmtInt },
          { icon: "🗓️", nameKey: "achievements.badge.full_year", unlocked: num(days) >= 365, current: num(days), target: 365, format: fmtInt },
        ],
      },
      {
        headingKey: "achievements.category.energy",
        badges: [
          { icon: "🔥", nameKey: "achievements.badge.energy_100k", unlocked: num(energy) >= 100000, current: num(energy), target: 100000, format: fmtInt },
          { icon: "☄️", nameKey: "achievements.badge.energy_1m", unlocked: num(energy) >= 1000000, current: num(energy), target: 1000000, format: fmtInt },
        ],
      },
      {
        headingKey: "achievements.category.variety",
        badges: [
          { icon: "🎽", nameKey: "achievements.badge.multi_sport", unlocked: sportsCount >= 3, current: sportsCount, target: 3, format: fmtInt },
          { icon: "🧭", nameKey: "achievements.badge.jack_of_all_trades", unlocked: sportsCount >= 5, current: sportsCount, target: 5, format: fmtInt },
          ...(topActivity
            ? [
                {
                  icon: "⭐",
                  nameKey: "achievements.badge.specialist" as TranslationKey,
                  nameVars: { activity: topActivity.activity },
                  unlocked: topActivity.workouts >= 100,
                  current: topActivity.workouts,
                  target: 100,
                  format: fmtInt,
                },
              ]
            : []),
        ],
      },
      {
        headingKey: "achievements.category.fitness",
        badges: [
          { icon: "💪", nameKey: "achievements.badge.solid_engine", unlocked: num(vo2max) >= 40, current: num(vo2max), target: 40, format: fmtInt },
          { icon: "⚡", nameKey: "achievements.badge.elite_engine", unlocked: num(vo2max) >= 55, current: num(vo2max), target: 55, format: fmtInt },
          { icon: "🔥", nameKey: "achievements.badge.consistency_king", unlocked: streak >= 14, current: streak, target: 14, format: fmtInt },
        ],
      },
    ];

    const allBadges = groups.flatMap((g) => g.badges);
    const unlockedCount = allBadges.filter((b) => b.unlocked).length;

    const prAttrs = records?.attributes ?? {};
    const prRows: Array<{ icon: string; labelKey: TranslationKey; entry?: PrEntry; render: (e: PrEntry) => string }> = [
      { icon: "🔥", labelKey: "records.streak", entry: streak > 0 ? { value: streak } : undefined, render: (e) => tPlural(hass, e.value, "records.streak_days_one", "records.streak_days_other") },
      { icon: "⚡", labelKey: "records.pace", entry: prAttrs.fastest_pace_min_km, render: (e) => `${formatPace(e.value)} /km` },
      { icon: "🏔️", labelKey: "records.climb", entry: prAttrs.biggest_climb_m, render: (e) => `${Math.round(e.value)} m` },
      {
        icon: "⏳",
        labelKey: "records.workout",
        entry: prAttrs.longest_workout_min,
        render: (e) => {
          const d = formatDuration(e.value);
          return `${d.value} ${d.unit}`;
        },
      },
      { icon: "📏", labelKey: "records.distance", entry: prAttrs.farthest_workout_km, render: (e) => `${e.value} km` },
      { icon: "🥵", labelKey: "records.session", entry: prAttrs.hardest_workout_tss, render: (e) => `${e.value} TSS` },
    ];

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:trophy-outline"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.achievements.title")}</div>
            <div class="subtitle">${t(hass, "card.achievements.subtitle", { unlocked: unlockedCount, total: allBadges.length })}</div>
          </div>
        </div>

        <div class="ach-list">
          ${groups.map((g) =>
            g.badges.length
              ? html`
                  ${categoryHeading(hass, g.headingKey)}
                  ${g.badges.map((b) => this._badgeRow(hass, b))}
                `
              : nothing
          )}
          ${prRows.some((r) => r.entry)
            ? html`
                <div class="cat">${t(hass, "achievements.category.records")}</div>
                ${prRows
                  .filter((r) => r.entry)
                  .map((r) => this._recordRow(hass, r.icon, r.labelKey, r.entry as PrEntry, r.render))}
              `
            : nothing}
        </div>
      </ha-card>
    `;
  }

  private _badgeRow(hass: SuuntoHass, b: Badge): TemplateResult {
    const pct = Math.max(0, Math.min(100, (b.current / b.target) * 100));
    return html`
      <div class="arow ${b.unlocked ? "unlocked" : "locked"}">
        <div class="ic">${b.icon}</div>
        <div class="info">
          <div class="name">${t(hass, b.nameKey, b.nameVars)}</div>
          ${!b.unlocked
            ? html`
                <div class="prog-track"><div class="prog-fill" style="width:${pct}%"></div></div>
                <div class="prog-text">${b.format(b.current)} / ${b.format(b.target)}</div>
              `
            : nothing}
        </div>
        ${b.unlocked ? html`<div class="check">✓</div>` : nothing}
      </div>
    `;
  }

  private _recordRow(
    hass: SuuntoHass,
    icon: string,
    labelKey: TranslationKey,
    entry: PrEntry,
    render: (e: PrEntry) => string
  ): TemplateResult {
    const when = entry.start_time ? formatRelative(new Date(entry.start_time), hass.language) : undefined;
    return html`
      <div class="arow record">
        <div class="ic">${icon}</div>
        <div class="info">
          <div class="name">${t(hass, labelKey)}</div>
          <div class="prog-text">
            ${entry.activity ? `${entry.activity} · ` : ""}${when ?? ""}
          </div>
        </div>
        <div class="rec-value">${render(entry)}</div>
      </div>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .ach-list {
        max-height: 480px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
      }
      .cat {
        font-size: 0.62rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--secondary-text-color);
        padding: 12px 0 6px;
        border-top: 1px solid var(--divider-color);
        margin-top: 4px;
      }
      .cat:first-child {
        border-top: none;
        margin-top: 0;
        padding-top: 0;
      }
      .arow {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 7px 0;
      }
      .arow .ic {
        width: 28px;
        height: 28px;
        border-radius: 9px;
        flex: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
      }
      .arow.unlocked .ic,
      .arow.record .ic {
        background: var(--sc-amber-bg);
      }
      .arow.locked .ic {
        background: var(--sc-chip-bg);
        filter: grayscale(1);
        opacity: 0.55;
      }
      .arow .info {
        flex: 1;
        min-width: 0;
      }
      .arow .name {
        font-size: 0.8rem;
        font-weight: 600;
      }
      .arow.locked .name {
        color: var(--secondary-text-color);
      }
      .arow .prog-track {
        height: 4px;
        border-radius: 2px;
        background: var(--divider-color);
        margin-top: 4px;
        overflow: hidden;
      }
      .arow .prog-fill {
        height: 100%;
        border-radius: 2px;
        background: linear-gradient(90deg, var(--sc-pulse), var(--sc-amber));
      }
      .arow .prog-text {
        font-size: 0.63rem;
        color: var(--secondary-text-color);
        margin-top: 2px;
        font-variant-numeric: tabular-nums;
      }
      .arow .check {
        flex: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--sc-amber);
        color: var(--card-background-color);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.7rem;
        font-weight: 800;
      }
      .arow .rec-value {
        flex: none;
        font-size: 0.82rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-achievements-card": SuuntoAchievementsCard;
  }
}
