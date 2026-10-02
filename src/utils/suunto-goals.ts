import type { SuuntoCardConfig, SuuntoHass } from "./types";
import { mapByTranslationKey, resolveSuuntoDevice } from "./entities";
import type { TranslationKey } from "./localize";

/** The four targets a user can set in the Suunto app (ha-suunto 1.0.29+). */
export type GoalKind = "steps" | "energy" | "sleep" | "training";

type GoalConfigKey = "goal_steps" | "goal_energy_kcal" | "goal_sleep_hours" | "goal_training_hours";

interface GoalSpec {
  /** Card config key holding the user's own value; absent = follow Suunto. */
  configKey: GoalConfigKey;
  /** ha-suunto sensor (translation key) and attribute the app's goal rides on. */
  sensor: string;
  attribute: string;
  /** Built-in value for cards that need a goal even when Suunto has none. */
  fallback: number;
  /** Number input step in the editor. */
  step: number;
  unit: string;
  sourceLabel: TranslationKey;
  customLabel: TranslationKey;
}

export const GOAL_SPECS: Record<GoalKind, GoalSpec> = {
  steps: {
    configKey: "goal_steps",
    sensor: "daily_steps",
    attribute: "goal",
    fallback: 10000,
    step: 500,
    unit: "",
    sourceLabel: "editor.goal_source_label",
    customLabel: "editor.steps_goal_label",
  },
  // The app's calorie goal is ACTIVE calories (it sits on daily_energy, not
  // on daily_total_energy), so cards compare it against active kcal.
  energy: {
    configKey: "goal_energy_kcal",
    sensor: "daily_energy",
    attribute: "goal",
    fallback: 500,
    step: 50,
    unit: "kcal",
    sourceLabel: "editor.energy_goal_source_label",
    customLabel: "editor.energy_goal_label",
  },
  sleep: {
    configKey: "goal_sleep_hours",
    sensor: "bmr",
    attribute: "goal_sleep_hours",
    fallback: 8,
    step: 0.5,
    unit: "h",
    sourceLabel: "editor.sleep_goal_source_label",
    customLabel: "editor.sleep_goal_label",
  },
  training: {
    configKey: "goal_training_hours",
    sensor: "bmr",
    attribute: "goal_weekly_training_hours",
    fallback: 5,
    step: 0.5,
    unit: "h",
    sourceLabel: "editor.training_goal_source_label",
    customLabel: "editor.training_goal_label",
  },
};

export const DEFAULT_STEPS_GOAL = GOAL_SPECS.steps.fallback;

/**
 * A goal the user set in the Suunto app, read from the attribute ha-suunto
 * 1.0.29+ exposes it on. Undefined on older versions, when the app has no
 * such goal, or when the device cannot be resolved.
 */
export function suuntoGoal(hass: SuuntoHass | undefined, deviceId: string | undefined, kind: GoalKind): number | undefined {
  if (!hass) return undefined;
  try {
    const spec = GOAL_SPECS[kind];
    const map = mapByTranslationKey(hass, resolveSuuntoDevice(hass, deviceId));
    const goal = map[spec.sensor] ? hass.states[map[spec.sensor]]?.attributes[spec.attribute] : undefined;
    return typeof goal === "number" && goal > 0 ? goal : undefined;
  } catch {
    return undefined;
  }
}

/** The card's own value if one is typed in, else the Suunto app's. Undefined when neither exists. */
export function knownGoal(
  hass: SuuntoHass | undefined,
  config: SuuntoCardConfig,
  deviceId: string | undefined,
  kind: GoalKind
): number | undefined {
  const own = config[GOAL_SPECS[kind].configKey];
  if (typeof own === "number" && own > 0) return own;
  return suuntoGoal(hass, deviceId, kind);
}

/** Same as knownGoal, but never undefined: falls back to the built-in default. */
export function resolveGoal(
  hass: SuuntoHass | undefined,
  config: SuuntoCardConfig,
  deviceId: string | undefined,
  kind: GoalKind
): number {
  return knownGoal(hass, config, deviceId, kind) ?? GOAL_SPECS[kind].fallback;
}

/** 8000 -> "8,000"; 1000 kcal -> "1,000 kcal"; 7.5 h -> "7.5 h". */
export function formatGoal(hass: SuuntoHass, kind: GoalKind, value: number): string {
  const unit = GOAL_SPECS[kind].unit;
  const num = value.toLocaleString(hass.language, { maximumFractionDigits: 1 });
  return unit ? `${num} ${unit}` : num;
}

/** Decimal hours -> "5:23 h" / "8 h" - a whole-hour goal reads without ":00". */
export function formatHours(hours: number): string {
  const totalMin = Math.round(hours * 60);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  return m === 0 ? `${h} h` : `${h}:${String(m).padStart(2, "0")} h`;
}

/**
 * The daily step target the user set in the Suunto app, exposed by ha-suunto
 * 1.0.29+ as the `goal` attribute of `daily_steps`. Undefined on older
 * versions, when the app has no goal, or when the device cannot be resolved
 * - callers then fall back to their own default.
 */
export function suuntoDailyStepsGoal(hass: SuuntoHass | undefined, deviceId?: string): number | undefined {
  return suuntoGoal(hass, deviceId, "steps");
}

/**
 * Fuel consumption (l/100 km) and price per litre the integration computed
 * its commute savings with (ha-suunto 1.0.29b2+ attributes on the commute
 * sensors). Undefined when not available.
 */
export function suuntoFuelFigures(
  hass: SuuntoHass | undefined,
  deviceId?: string
): { litres: number; price: number } | undefined {
  if (!hass) return undefined;
  try {
    const map = mapByTranslationKey(hass, resolveSuuntoDevice(hass, deviceId));
    for (const key of ["commute_year", "commute_month"]) {
      const attrs = map[key] ? hass.states[map[key]]?.attributes : undefined;
      if (attrs && typeof attrs.fuel_l_per_100km === "number" && typeof attrs.fuel_price_per_litre === "number") {
        return { litres: attrs.fuel_l_per_100km, price: attrs.fuel_price_per_litre };
      }
    }
  } catch {
    // fall through
  }
  return undefined;
}
