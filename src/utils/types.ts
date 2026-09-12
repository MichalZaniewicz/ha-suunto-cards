import type { HomeAssistant, LovelaceCardConfig } from "custom-card-helpers";
import type { UnitSystem } from "./format";

// custom-card-helpers' Themes type predates `darkMode`, which the real
// frontend has sent for years - augment rather than casting at every call site.
declare module "custom-card-helpers" {
  interface Themes {
    darkMode?: boolean;
  }
}

/**
 * Every widget in this repo takes at least this. `units`/`compact`/`days`
 * are cross-cutting opt-in fields a card can ignore entirely if it has no
 * distance/pace/altitude content, no dense secondary stats to collapse, or
 * no trend window to resize - each card that DOES support one reads it
 * with its own sensible default, so an old saved config without the field
 * behaves exactly as before.
 */
export interface SuuntoCardConfig extends LovelaceCardConfig {
  device_id?: string;
  /** Display unit system for distance/pace/speed/altitude stats. Default: "metric". */
  units?: UnitSystem;
  /** Collapses secondary/detail stats to keep the card short. Default: false. */
  compact?: boolean;
  /** Trend window length in days, for cards with a rolling chart. Each such card defines its own default and offered choices. */
  days?: number;
}

/** suunto-weekly-goal-card's config: same device selection, plus a user-set target. */
export interface SuuntoGoalCardConfig extends SuuntoCardConfig {
  goal_km?: number;
}

/** suunto-steps-today-card / suunto-steps-trend-card's config: a daily step target. */
export interface SuuntoStepsGoalCardConfig extends SuuntoCardConfig {
  goal_steps?: number;
}

/** suunto-goals-overview-card's config: both goal targets it can show a ring for. */
export interface SuuntoGoalsOverviewCardConfig extends SuuntoCardConfig {
  goal_km?: number;
  goal_steps?: number;
}

/** Entity registry entry shape available on `hass.entities` (HA 2024.8+). */
export interface EntityRegistryEntry {
  entity_id: string;
  device_id?: string;
  platform?: string;
  translation_key?: string;
  hidden?: boolean;
  disabled_by?: string | null;
}

export interface DeviceRegistryEntry {
  id: string;
  name?: string;
  name_by_user?: string | null;
}

/**
 * `custom-card-helpers`'s HomeAssistant type predates the entity/device
 * registry dictionaries the frontend now exposes - extend it locally
 * rather than widening every call site to `any`.
 */
export interface SuuntoHass extends HomeAssistant {
  entities: Record<string, EntityRegistryEntry>;
  devices: Record<string, DeviceRegistryEntry>;
}
