import type { HassEntity } from "home-assistant-js-websocket";
import { t, type TranslationKey } from "./localize";
import type { SuuntoHass } from "./types";

/**
 * The watch's four stress states, sampled every 30 minutes (ha-suunto 1.0.37
 * `stress_state` / `stress_today`). Same order and meaning as the Suunto
 * app's "Resources" chart: 1 recovering, 2 active, 3 inactive, 4 stressed.
 * Shared by Stress & Recovery, Recovery and Recovery Balance Trend so the
 * same state always has the same name and color.
 */
export const STRESS_STATES = ["recovering", "active", "inactive", "stressed"] as const;
export type StressState = (typeof STRESS_STATES)[number];

const BY_NUMBER: Record<string, StressState> = {
  "1": "recovering",
  "2": "active",
  "3": "inactive",
  "4": "stressed",
};

export function stressColor(state: StressState): string {
  return `var(--sc-stress-${state})`;
}

export function stressLabel(hass: SuuntoHass | undefined, state: StressState): string {
  return t(hass, `stress.state.${state}` as TranslationKey);
}

/** The state of a `stress_state` entity: its `state_name` (1.0.37+), else the number mapped. */
export function readStressState(entity: HassEntity | undefined): StressState | undefined {
  if (!entity) return undefined;
  const name = entity.attributes.state_name;
  if (typeof name === "string" && (STRESS_STATES as readonly string[]).includes(name)) {
    return name as StressState;
  }
  return BY_NUMBER[String(Math.round(Number(entity.state)))];
}

/** One day of `stress_today`: minutes per state plus its date and sample count. */
export interface StressDay {
  date?: string;
  samples: number;
  minutes: Record<StressState, number>;
}

/** Parses `stress_today`'s attributes (today) or its `yesterday` attribute. */
export function readStressDay(raw: unknown): StressDay | undefined {
  if (!raw || typeof raw !== "object") return undefined;
  const values = raw as Record<string, unknown>;
  const minutes = {} as Record<StressState, number>;
  let total = 0;
  for (const state of STRESS_STATES) {
    const value = Number(values[`${state}_minutes`]);
    minutes[state] = Number.isFinite(value) && value > 0 ? value : 0;
    total += minutes[state];
  }
  if (!total) return undefined;
  return {
    date: typeof values.date === "string" ? values.date : undefined,
    samples: Number(values.samples) || 0,
    minutes,
  };
}
