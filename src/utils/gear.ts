import type { SuuntoHass } from "./types";

/**
 * A gear sensor's own name ("Chain"). Its friendly_name is "<device name>
 * <gear name>" and the registry has no plain entity name for it, so the
 * device prefix is stripped when it is there. Shared by Gear and What's New.
 */
export function gearName(hass: SuuntoHass, entityId: string): string {
  const entity = hass.states[entityId];
  const deviceId = hass.entities?.[entityId]?.device_id;
  const device = deviceId ? hass.devices?.[deviceId] : undefined;
  const deviceName = device?.name_by_user || device?.name || "";
  const friendly = String(entity?.attributes.friendly_name ?? entityId);
  return deviceName && friendly.startsWith(`${deviceName} `) ? friendly.slice(deviceName.length + 1) : friendly;
}
