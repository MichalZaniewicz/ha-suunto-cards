import type { SuuntoHass } from "./types";
import { t, type TranslationKey } from "./localize";
import { formatTime } from "./format";

/**
 * Shared presentation helpers for the "patterns" sensors ha-suunto 1.0.32b2
 * added (sleep_regularity, social_jetlag, aerobic_decoupling,
 * personal_insights). Used by the three pattern cards and by the chips/lines
 * Sleep Rhythm, Last Workout and Daily Brief gained for them, so a number
 * gets the same colour wherever it shows up.
 */

export interface Band {
  cls: "good" | "warn" | "bad";
  colorVar: string;
  label: string;
}

/**
 * Sleep Regularity Index bands - our own reading, not a Suunto scale. Adults
 * average around 80 in published SRI data; 80+ reads as regular, under 60 as
 * clearly irregular.
 */
export function regularityBand(hass: SuuntoHass | undefined, index: number): Band {
  if (index >= 80) return { cls: "good", colorVar: "var(--sc-good)", label: t(hass, "band.regularity.regular") };
  if (index >= 60) return { cls: "warn", colorVar: "var(--sc-warn)", label: t(hass, "band.regularity.fair") };
  return { cls: "bad", colorVar: "var(--sc-bad)", label: t(hass, "band.regularity.irregular") };
}

/** Aerobic decoupling bands (Friel): under 5 % coupled, 5-10 % moderate drift, over 10 % high drift. */
export function decouplingBand(hass: SuuntoHass | undefined, pct: number): Band {
  if (pct < 5) return { cls: "good", colorVar: "var(--sc-good)", label: t(hass, "band.decoupling.coupled") };
  if (pct <= 10) return { cls: "warn", colorVar: "var(--sc-warn)", label: t(hass, "band.decoupling.moderate") };
  return { cls: "bad", colorVar: "var(--sc-bad)", label: t(hass, "band.decoupling.high") };
}

/** "HH:MM" (24 h, as the integration writes it) -> today's Date at that time. */
export function clockToDate(hhmm: string): Date | undefined {
  const match = /^(\d{1,2}):(\d{2})$/.exec(hhmm);
  if (!match) return undefined;
  const d = new Date();
  d.setHours(Number(match[1]), Number(match[2]), 0, 0);
  return d;
}

/** "HH:MM" in the user's locale clock (12 h where that is the convention). */
export function formatClock(hhmm: unknown, locale?: string): string | undefined {
  if (typeof hhmm !== "string") return undefined;
  const d = clockToDate(hhmm);
  return d ? formatTime(d, locale) : undefined;
}

/** Signed minutes, e.g. "+48 min" / "-12 min". */
export function formatSignedMinutes(minutes: number): string {
  const rounded = Math.round(minutes);
  return `${rounded > 0 ? "+" : rounded < 0 ? "-" : ""}${Math.abs(rounded)} min`;
}

/** One finding in personal_insights' `insights` attribute. */
export interface Insight {
  condition: string;
  metric: string;
  with: number;
  without: number;
  diff_pct: number;
  favorable: boolean;
  n_with: number;
  n_without: number;
  threshold?: string;
}

export const INSIGHT_CONDITIONS = ["late_workout", "training_day", "hard_day", "early_bed", "free_night"] as const;
export const INSIGHT_METRICS = ["hrv", "resting_hr", "sleep"] as const;

const CONDITION_ICON: Record<string, string> = {
  late_workout: "mdi:weather-night",
  training_day: "mdi:dumbbell",
  hard_day: "mdi:fire",
  early_bed: "mdi:bed-clock",
  free_night: "mdi:calendar-weekend",
};

/** The integration's late-workout cut-off (patterns.LATE_WORKOUT_HOUR). */
const LATE_WORKOUT_HOUR = 20;

/** Parsed, known-shape findings from the sensor's attributes (unknown conditions/metrics dropped). */
export function readInsights(raw: unknown): Insight[] {
  if (!Array.isArray(raw)) return [];
  return raw.filter(
    (item): item is Insight =>
      !!item &&
      typeof item === "object" &&
      (INSIGHT_CONDITIONS as readonly string[]).includes((item as Insight).condition) &&
      (INSIGHT_METRICS as readonly string[]).includes((item as Insight).metric) &&
      typeof (item as Insight).with === "number" &&
      typeof (item as Insight).without === "number" &&
      typeof (item as Insight).diff_pct === "number"
  );
}

export function insightIcon(insight: Insight): string {
  return CONDITION_ICON[insight.condition] ?? "mdi:lightbulb-on-outline";
}

export function insightCondition(hass: SuuntoHass | undefined, insight: Insight): string {
  const late = clockToDate(`${LATE_WORKOUT_HOUR}:00`);
  return t(hass, `insights.cond.${insight.condition}` as TranslationKey, {
    time: late ? formatTime(late, hass?.language) : `${LATE_WORKOUT_HOUR}:00`,
    bedtime: formatClock(insight.threshold, hass?.language) ?? insight.threshold ?? "",
  });
}

export function insightMetric(hass: SuuntoHass | undefined, insight: Insight): string {
  return t(hass, `insights.metric.${insight.metric}` as TranslationKey);
}

/** A metric value with its unit: "7.6 h", "39 ms", "52 bpm". */
export function insightValue(insight: Insight, value: number): string {
  if (insight.metric === "sleep") return `${value.toFixed(1)} h`;
  return `${Math.round(value)} ${insight.metric === "hrv" ? "ms" : "bpm"}`;
}

/** "HRV +21%" style delta. */
export function insightDelta(hass: SuuntoHass | undefined, insight: Insight): string {
  const pct = Math.round(insight.diff_pct);
  return `${insightMetric(hass, insight)} ${pct > 0 ? "+" : pct < 0 ? "−" : ""}${Math.abs(pct)}%`;
}

/** One-line summary for the Daily Brief card: "<condition>: HRV -21% (39 ms vs 50 ms)". */
export function insightLine(hass: SuuntoHass | undefined, insight: Insight): string {
  return `${insightCondition(hass, insight)}: ${insightDelta(hass, insight)} (${insightValue(insight, insight.with)} vs ${insightValue(insight, insight.without)})`;
}
