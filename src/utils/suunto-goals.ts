import type { SuuntoHass } from "./types";
import { mapByTranslationKey, resolveSuuntoDevice } from "./entities";

/**
 * The daily step target the user set in the Suunto app, exposed by ha-suunto
 * 1.0.29+ as the `goal` attribute of `daily_steps`. Undefined on older
 * versions, when the app has no goal, or when the device cannot be resolved
 * - callers then fall back to their own default.
 */
export function suuntoDailyStepsGoal(hass: SuuntoHass | undefined, deviceId?: string): number | undefined {
  if (!hass) return undefined;
  try {
    const map = mapByTranslationKey(hass, resolveSuuntoDevice(hass, deviceId));
    const goal = map["daily_steps"] ? hass.states[map["daily_steps"]]?.attributes.goal : undefined;
    return typeof goal === "number" && goal > 0 ? goal : undefined;
  } catch {
    return undefined;
  }
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
