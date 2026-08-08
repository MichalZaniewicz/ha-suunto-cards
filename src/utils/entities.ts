import type { SuuntoHass } from "./types";

export const SUUNTO_PLATFORM = "suunto_app";

/** Thrown for configuration problems that should render as a friendly card error, not a crash. */
export class SuuntoConfigError extends Error {}

/** All device_ids that own at least one suunto_app entity. */
export function findSuuntoDeviceIds(hass: SuuntoHass): string[] {
  const ids = new Set<string>();
  for (const entity of Object.values(hass.entities ?? {})) {
    if (entity.platform === SUUNTO_PLATFORM && entity.device_id) {
      ids.add(entity.device_id);
    }
  }
  return [...ids];
}

/**
 * Resolves which Suunto device a card instance should read from.
 * Zero-config works for the common case (one Suunto account); a second
 * account only requires `device_id` once it's actually ambiguous.
 */
export function resolveSuuntoDevice(hass: SuuntoHass, configuredDeviceId?: string): string {
  const devices = findSuuntoDeviceIds(hass);

  if (configuredDeviceId) {
    if (!devices.includes(configuredDeviceId)) {
      throw new SuuntoConfigError(
        `Configured device "${configuredDeviceId}" has no suunto_app entities.`
      );
    }
    return configuredDeviceId;
  }

  if (devices.length === 1) return devices[0];
  if (devices.length === 0) {
    throw new SuuntoConfigError("No Suunto device found - is the suunto_app integration set up?");
  }
  throw new SuuntoConfigError(
    "Multiple Suunto devices found - set \"device_id\" in the card configuration."
  );
}

/**
 * `translation_key` on this integration's sensors equals their internal key
 * (`last_distance`, `last_pte`, ...), so it doubles as a stable, language-
 * independent lookup - unlike entity_id, which is derived from the user's
 * localized friendly name.
 */
export function mapByTranslationKey(hass: SuuntoHass, deviceId: string): Record<string, string> {
  const map: Record<string, string> = {};
  for (const entity of Object.values(hass.entities ?? {})) {
    if (
      entity.device_id === deviceId &&
      entity.platform === SUUNTO_PLATFORM &&
      entity.translation_key
    ) {
      map[entity.translation_key] = entity.entity_id;
    }
  }
  return map;
}
