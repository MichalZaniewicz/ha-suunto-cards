import type { SuuntoHass } from "./types";
import { formatDuration, formatPace } from "./format";
import { tPlural, type TranslationKey } from "./localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

interface LifetimeActivity {
  activity: string;
  workouts: number;
}

export interface PrEntry {
  value: number;
  activity?: string;
  start_time?: string;
}

export interface Badge {
  icon: string;
  nameKey: TranslationKey;
  nameVars?: Record<string, string | number>;
  unlocked: boolean;
  current: number;
  target: number;
  format: (n: number) => string;
}

export interface BadgeGroup {
  headingKey: TranslationKey;
  badges: Badge[];
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

/**
 * The full 20-badge catalog, grouped by category - shared by
 * suunto-achievements-card (full list with progress bars) and
 * suunto-achievements-compact-card (icon grid, no progress detail), so the
 * two presentations of the same data can never drift apart.
 *
 * Every badge comes from a lifetime total or the training_records sensor
 * (both already fetched for other sensors/cards) - no per-workout scanning,
 * so nothing here is bounded by the 15-workout recent-workouts window.
 */
export function computeAchievementGroups(
  hass: SuuntoHass,
  map: Record<string, string>
): { groups: BadgeGroup[]; allBadges: Badge[]; unlockedCount: number } | null {
  const get = (key: string) => (map[key] ? hass.states[map[key]] : undefined);

  const workoutsEntity = get("lifetime_workouts");
  const distanceEntity = get("lifetime_distance");
  if (!workoutsEntity && !distanceEntity) return null;

  const timeEntity = get("lifetime_time");
  const daysEntity = get("lifetime_days");
  const energyEntity = get("lifetime_energy");
  const lifetimeEntity = get("lifetime_by_activity");
  const vo2maxEntity = get("estimated_vo2max") ?? get("vo2max");
  const recordsEntity = get("training_records");

  const fmtInt = fmtIntFor(hass.language);
  const fmtKm = fmtKmFor(hass.language);

  const num = (entity: typeof workoutsEntity): number =>
    entity && !UNAVAILABLE_STATES.has(entity.state) ? Number(entity.state) : 0;

  const activities: LifetimeActivity[] = lifetimeEntity?.attributes.activities ?? [];
  const sportsCount = activities.filter((a) => a.workouts > 0).length;
  const topActivity = [...activities].sort((a, b) => b.workouts - a.workouts)[0];
  const streak = recordsEntity && !UNAVAILABLE_STATES.has(recordsEntity.state) ? Number(recordsEntity.state) : 0;

  const workouts = num(workoutsEntity);
  const distance = num(distanceEntity);
  const time = num(timeEntity);
  const days = num(daysEntity);
  const energy = num(energyEntity);
  const vo2max = num(vo2maxEntity);

  const groups: BadgeGroup[] = [
    {
      headingKey: "achievements.category.workouts",
      badges: [
        { icon: "💯", nameKey: "achievements.badge.century_club", unlocked: workouts >= 100, current: workouts, target: 100, format: fmtInt },
        { icon: "🎖️", nameKey: "achievements.badge.workouts_250", unlocked: workouts >= 250, current: workouts, target: 250, format: fmtInt },
        { icon: "🏅", nameKey: "achievements.badge.workouts_500", unlocked: workouts >= 500, current: workouts, target: 500, format: fmtInt },
        { icon: "👑", nameKey: "achievements.badge.workouts_1000", unlocked: workouts >= 1000, current: workouts, target: 1000, format: fmtInt },
      ],
    },
    {
      headingKey: "achievements.category.distance",
      badges: [
        { icon: "🚴", nameKey: "achievements.badge.distance_1000", unlocked: distance >= 1000, current: distance, target: 1000, format: fmtKm },
        { icon: "🗺️", nameKey: "achievements.badge.distance_5000", unlocked: distance >= 5000, current: distance, target: 5000, format: fmtKm },
        { icon: "🌍", nameKey: "achievements.badge.around_globe", unlocked: distance >= 40075, current: distance, target: 40075, format: fmtKm },
      ],
    },
    {
      headingKey: "achievements.category.time",
      badges: [
        { icon: "⏱️", nameKey: "achievements.badge.hours_100", unlocked: time >= 100, current: time, target: 100, format: fmtInt },
        { icon: "⌛", nameKey: "achievements.badge.hours_500", unlocked: time >= 500, current: time, target: 500, format: fmtInt },
      ],
    },
    {
      headingKey: "achievements.category.days",
      badges: [
        { icon: "📅", nameKey: "achievements.badge.days_100", unlocked: days >= 100, current: days, target: 100, format: fmtInt },
        { icon: "🗓️", nameKey: "achievements.badge.full_year", unlocked: days >= 365, current: days, target: 365, format: fmtInt },
      ],
    },
    {
      headingKey: "achievements.category.energy",
      badges: [
        { icon: "🔥", nameKey: "achievements.badge.energy_100k", unlocked: energy >= 100000, current: energy, target: 100000, format: fmtInt },
        { icon: "☄️", nameKey: "achievements.badge.energy_1m", unlocked: energy >= 1000000, current: energy, target: 1000000, format: fmtInt },
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
        { icon: "💪", nameKey: "achievements.badge.solid_engine", unlocked: vo2max >= 40, current: vo2max, target: 40, format: fmtInt },
        { icon: "⚡", nameKey: "achievements.badge.elite_engine", unlocked: vo2max >= 55, current: vo2max, target: 55, format: fmtInt },
        { icon: "🔥", nameKey: "achievements.badge.consistency_king", unlocked: streak >= 14, current: streak, target: 14, format: fmtInt },
        { icon: "🛡️", nameKey: "achievements.badge.iron_will", unlocked: streak >= 30, current: streak, target: 30, format: fmtInt },
      ],
    },
  ];

  const allBadges = groups.flatMap((g) => g.badges);
  return { groups, allBadges, unlockedCount: allBadges.filter((b) => b.unlocked).length };
}

export interface PrRow {
  icon: string;
  labelKey: TranslationKey;
  entry?: PrEntry;
  render: (e: PrEntry) => string;
}

/** All-time personal records from training_records, reshaped for display -
 * only used by the full achievements card (the compact grid has no room). */
export function computePrRows(hass: SuuntoHass, map: Record<string, string>): PrRow[] {
  const recordsEntity = map["training_records"] ? hass.states[map["training_records"]] : undefined;
  const streak = recordsEntity && !UNAVAILABLE_STATES.has(recordsEntity.state) ? Number(recordsEntity.state) : 0;
  const prAttrs = recordsEntity?.attributes ?? {};

  return [
    {
      icon: "🔥",
      labelKey: "records.streak",
      entry: streak > 0 ? { value: streak } : undefined,
      render: (e) => tPlural(hass, e.value, "records.streak_days_one", "records.streak_days_other"),
    },
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
}
