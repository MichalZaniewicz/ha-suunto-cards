import type { HassEntity } from "home-assistant-js-websocket";
import type { SuuntoHass } from "./types";
import { t } from "./localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

export interface SleepStage {
  minutes: number;
  colorVar: string;
  title: string;
}

export interface SleepNight {
  /** Total sleep from `sleep_duration`. */
  sleepMin: number;
  /** From `sleep_time`, when known. */
  bedMs?: number;
  /** From `wake_time`, when known. */
  wakeMs?: number;
  /** wake - bed, only when both are known and in order. */
  inBedMin?: number;
  /** Time in bed not spent asleep. */
  awakeMin?: number;
  /** Ordered deep, light, REM, other sleep, awake; zero-length stages dropped. */
  stages: SleepStage[];
}

function minutesOf(entity: HassEntity | undefined): number {
  if (!entity || UNAVAILABLE_STATES.has(entity.state)) return 0;
  const value = Number(entity.state);
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function timeOf(entity: HassEntity | undefined): number | undefined {
  if (!entity || UNAVAILABLE_STATES.has(entity.state)) return undefined;
  const ms = new Date(entity.state).getTime();
  return Number.isNaN(ms) ? undefined : ms;
}

/**
 * One breakdown of last night shared by every sleep card, so they all show the
 * same stages. Many watches report only deep sleep (light and REM never
 * arrive), so whatever part of `sleep_duration` the reported stages do not
 * cover becomes "other sleep" instead of being dropped or stretched into deep.
 * Awake is time in bed (sleep_time to wake_time) minus total sleep.
 */
export function sleepNight(
  hass: SuuntoHass | undefined,
  get: (key: string) => HassEntity | undefined
): SleepNight | undefined {
  const duration = get("sleep_duration");
  if (!duration || UNAVAILABLE_STATES.has(duration.state)) return undefined;
  const hours = Number(duration.state);
  if (!Number.isFinite(hours) || hours <= 0) return undefined;
  const sleepMin = hours * 60;

  const bedMs = timeOf(get("sleep_time"));
  const wakeMs = timeOf(get("wake_time"));
  const inBedMin =
    bedMs !== undefined && wakeMs !== undefined && wakeMs > bedMs ? (wakeMs - bedMs) / 60000 : undefined;
  const awakeMin = inBedMin !== undefined ? Math.max(0, inBedMin - sleepMin) : undefined;

  const deep = minutesOf(get("sleep_deep"));
  const light = minutesOf(get("sleep_light"));
  const rem = minutesOf(get("sleep_rem"));
  // Rounding upstream can leave a sliver of a minute; not worth a segment.
  const other = Math.max(0, sleepMin - deep - light - rem);

  const stages: SleepStage[] = [
    { minutes: deep, colorVar: "var(--sc-sleep-deep)", title: t(hass, "label.deep") },
    { minutes: light, colorVar: "var(--sc-sleep-light)", title: t(hass, "label.light") },
    { minutes: rem, colorVar: "var(--sc-sleep-rem)", title: t(hass, "label.rem") },
    { minutes: other >= 1 ? other : 0, colorVar: "var(--sc-sleep-other)", title: t(hass, "label.sleep_other") },
    { minutes: awakeMin ?? 0, colorVar: "var(--sc-sleep-awake)", title: t(hass, "label.awake") },
  ].filter((s) => s.minutes >= 1);

  return { sleepMin, bedMs, wakeMs, inBedMin, awakeMin, stages };
}
