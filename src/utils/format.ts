import type { SparklinePoint } from "./render-helpers";
import type { SuuntoHass } from "./types";

export interface RawHistoryPoint {
  state: string;
  last_updated?: string;
  last_changed?: string;
}

/** Turns one entity's raw `history/period` response into chart-ready points, dropping unavailable/non-numeric samples. */
export function parseHistorySeries(points: RawHistoryPoint[] | undefined): SparklinePoint[] {
  return (points ?? [])
    .map((p) => {
      const t = new Date(p.last_updated ?? p.last_changed ?? "").getTime();
      const v = Number(p.state);
      return { t, v };
    })
    .filter((p) => Number.isFinite(p.t) && Number.isFinite(p.v));
}

/** One point of a `recorder/statistics_during_period` response - `start` is epoch ms. */
export interface RawStatisticPoint {
  start: number;
  mean?: number | null;
  min?: number | null;
  max?: number | null;
  sum?: number | null;
  state?: number | null;
}

/**
 * Fetches one external long-term statistic (`suunto_app:hr`, `suunto_app:sleep_duration`, ...)
 * over the last `hours`. These are EXTERNAL statistics, not entity history - they persist
 * indefinitely (unlike recorder state history, which is purged after ~10 days by default),
 * which is exactly why they're the right source for a multi-day/multi-week trend chart.
 */
export async function fetchStatisticsSeries(
  hass: SuuntoHass,
  statisticId: string,
  hours: number,
  field: "mean" | "sum" | "state" = "mean"
): Promise<SparklinePoint[]> {
  const end = new Date();
  const start = new Date(end.getTime() - hours * 3600000);
  const result = await hass.callWS<Record<string, RawStatisticPoint[]>>({
    type: "recorder/statistics_during_period",
    start_time: start.toISOString(),
    end_time: end.toISOString(),
    statistic_ids: [statisticId],
    period: "hour",
    types: ["mean", "min", "max", "sum"],
  });
  return (result?.[statisticId] ?? [])
    .map((p) => ({ t: p.start, v: Number(p[field]) }))
    .filter((p) => Number.isFinite(p.t) && Number.isFinite(p.v));
}

/**
 * Collapses an hourly "sum"-class statistic (a running, ever-increasing
 * cumulative total, per ha-suunto's statistics.py) into one point per LOCAL
 * day - the day's actual increase. Diffs consecutive hourly cumulative
 * values rather than requesting period="day" server-side, so it reuses the
 * same hourly fetch every other trend card already uses.
 */
export function dailyTotalsFromCumulative(points: SparklinePoint[]): SparklinePoint[] {
  const sorted = [...points].sort((a, b) => a.t - b.t);
  const byDay = new Map<string, number>();
  for (let i = 1; i < sorted.length; i++) {
    const delta = sorted[i].v - sorted[i - 1].v;
    if (!Number.isFinite(delta) || delta < 0) continue;
    const day = new Date(sorted[i].t).toDateString();
    byDay.set(day, (byDay.get(day) ?? 0) + delta);
  }
  return [...byDay.entries()]
    .map(([day, v]) => ({ t: new Date(day).getTime(), v }))
    .sort((a, b) => a.t - b.t);
}

/** Collapses an hourly "mean"-class statistic into one point per LOCAL day (that day's average) - for a multi-week trend without an intraday-noisy line. */
export function dailyMeanFromHourly(points: SparklinePoint[]): SparklinePoint[] {
  const byDay = new Map<string, { sum: number; count: number }>();
  for (const p of points) {
    const day = new Date(p.t).toDateString();
    const bucket = byDay.get(day) ?? { sum: 0, count: 0 };
    bucket.sum += p.v;
    bucket.count += 1;
    byDay.set(day, bucket);
  }
  return [...byDay.entries()]
    .map(([day, { sum, count }]) => ({ t: new Date(day).getTime(), v: sum / count }))
    .sort((a, b) => a.t - b.t);
}

/** 98.4 -> "1:38 h"; 42 -> "42 min". Mirrors how the sketch reads at a glance. */
export function formatDuration(minutes: number): { value: string; unit: string } {
  if (minutes >= 60) {
    const h = Math.floor(minutes / 60);
    const m = Math.round(minutes % 60);
    return { value: `${h}:${String(m).padStart(2, "0")}`, unit: "h" };
  }
  return { value: String(Math.round(minutes)), unit: "min" };
}

/** 6.183 (decimal min/km, as sent by the backend) -> "6:11". */
export function formatPace(minutesPerKm: number): string {
  const totalSeconds = Math.round(minutesPerKm * 60);
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

/** Date -> "6:42 AM" in the user's locale. */
export function formatTime(date: Date, locale?: string): string {
  return new Intl.DateTimeFormat(locale, { hour: "numeric", minute: "2-digit" }).format(date);
}

export function isToday(date: Date): boolean {
  const now = new Date();
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  );
}

/** +4 / -6 / ±0, for showing a value against its rolling baseline. */
export function formatDelta(value: number, decimals = 0): string {
  const rounded = Number(value.toFixed(decimals));
  if (rounded === 0) return "±0";
  return rounded > 0 ? `+${rounded}` : String(rounded);
}

const RTF_UNITS: Array<[Intl.RelativeTimeFormatUnit, number]> = [
  ["year", 31536000],
  ["month", 2592000],
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
];

/** Date -> "2 h ago" / "3 days ago", falling back to "just now" under a minute. */
export function formatRelative(date: Date, locale?: string): string {
  const seconds = (date.getTime() - Date.now()) / 1000;
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  for (const [unit, secondsInUnit] of RTF_UNITS) {
    if (Math.abs(seconds) >= secondsInUnit) {
      return rtf.format(Math.round(seconds / secondsInUnit), unit);
    }
  }
  return rtf.format(Math.round(seconds / 60), "minute");
}
