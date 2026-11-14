import { tPlural } from "./localize";
import type { SuuntoHass } from "./types";

/**
 * A workout's route achievements as one label: Suunto's own text for the
 * first one ("Fastest time on this route"), else "2 achievements". Suunto
 * sends them raw and their shape was never confirmed live, so a string, an
 * object with name/title/type, or anything else is handled. Shared by Last
 * Workout and What's New.
 */
export function achievementLabel(hass: SuuntoHass | undefined, raw: unknown, count: number): string {
  if (Array.isArray(raw) && raw.length) {
    const first = raw[0];
    if (typeof first === "string") return first;
    if (first && typeof first === "object") {
      const obj = first as Record<string, unknown>;
      const label = obj.name ?? obj.title ?? obj.type;
      if (typeof label === "string") return label;
    }
  }
  return tPlural(hass, count, "achievement.count_one", "achievement.count_other");
}

