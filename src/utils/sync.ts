import { html, nothing, type TemplateResult } from "lit";
import type { HassEntity } from "home-assistant-js-websocket";
import { t } from "./localize";
import { formatTime } from "./format";
import type { SuuntoHass } from "./types";

/** ha-suunto's own threshold for its "watch has not synced" Repairs notice. */
const STALE_HOURS = 24;

export interface SyncStatus {
  at: Date;
  hoursAgo: number;
  stale: boolean;
}

/**
 * The `last_sync` sensor (ha-suunto 1.0.37+): when the newest data from the
 * watch arrived. Hours are counted from now rather than read from the
 * `hours_ago` attribute, which only moves with the hourly update. Shared by
 * Today and Sleep & Readiness so both say the same thing.
 */
export function readSync(entity: HassEntity | undefined): SyncStatus | undefined {
  if (!entity) return undefined;
  const at = new Date(entity.state);
  if (Number.isNaN(at.getTime())) return undefined;
  const hoursAgo = Math.max(0, (Date.now() - at.getTime()) / 3_600_000);
  return { at, hoursAgo, stale: hoursAgo > STALE_HOURS };
}

/** "synced 11:00" / "synced yesterday 09:12" / "synced 17.10 09:12". */
export function syncLabel(hass: SuuntoHass | undefined, sync: SyncStatus): string {
  const locale = hass?.language;
  const time = formatTime(sync.at, locale);
  const today = new Date();
  const yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
  if (sync.at.toDateString() === today.toDateString()) return t(hass, "sync.at", { time });
  if (sync.at.toDateString() === yesterday.toDateString()) return t(hass, "sync.yesterday", { time });
  const day = new Intl.DateTimeFormat(locale, { day: "numeric", month: "numeric" }).format(sync.at);
  return t(hass, "sync.at", { time: `${day} ${time}` });
}

/** The amber "watch not synced for 26 h" chip, only while the data is stale. */
export function syncChip(hass: SuuntoHass | undefined, sync: SyncStatus | undefined): TemplateResult | typeof nothing {
  if (!sync?.stale) return nothing;
  return html`<span class="chip warn"
    ><ha-icon icon="mdi:watch-import"></ha-icon>${t(hass, "chip.not_synced", { hours: Math.floor(sync.hoursAgo) })}</span
  >`;
}
