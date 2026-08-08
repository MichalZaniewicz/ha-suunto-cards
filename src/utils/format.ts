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
