import type { HomeAssistant, LovelaceCardConfig } from "custom-card-helpers";

// custom-card-helpers' Themes type predates `darkMode`, which the real
// frontend has sent for years - augment rather than casting at every call site.
declare module "custom-card-helpers" {
  interface Themes {
    darkMode?: boolean;
  }
}

/** Every widget in this repo currently takes the same, minimal config. */
export interface SuuntoCardConfig extends LovelaceCardConfig {
  device_id?: string;
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
