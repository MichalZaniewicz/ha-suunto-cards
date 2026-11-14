import type { SuuntoHass } from "./types";

/** Size of the sport palette: --sc-sport-1 .. --sc-sport-12 (style-tokens.ts). */
export const SPORT_PALETTE_SIZE = 12;

export interface SportColors {
  /** sport -> slot 1-12, given by the integration once and kept. */
  palette: Record<string, number>;
  /** sport -> your own colour from Configure > General settings > Sport colours. */
  colors: Record<string, string>;
}

const EMPTY: SportColors = { palette: {}, colors: {} };

/** The sports' colours from the Lifetime by sport sensor (integration 1.0.40+). */
export function readSportColors(hass: SuuntoHass | undefined, map: Record<string, string>): SportColors {
  const id = map["lifetime_by_activity"];
  const attrs = id ? hass?.states[id]?.attributes : undefined;
  if (!attrs) return EMPTY;
  const palette = attrs.sport_palette;
  const colors = attrs.sport_colors;
  return {
    palette: palette && typeof palette === "object" ? (palette as Record<string, number>) : {},
    colors: colors && typeof colors === "object" ? (colors as Record<string, string>) : {},
  };
}

/** A stable slot for a sport the integration has not given one (older
 * integration, or a sport seen for the first time this minute). */
function hashSlot(sport: string): number {
  let hash = 0;
  for (const char of sport) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return (hash % SPORT_PALETTE_SIZE) + 1;
}

function validColor(value: string | undefined): value is string {
  return Boolean(value) && (typeof CSS === "undefined" || CSS.supports("color", value as string));
}

/**
 * The CSS colour of a sport, the same in every card. Your own colour wins;
 * in e-ink mode `--sc-eink-sport-N` (defined only there) puts the palette
 * slot back, so a custom colour never breaks a black-and-white screen.
 */
export function sportColor(colors: SportColors, sport: string | null | undefined): string {
  const name = sport ?? "";
  const given = colors.palette[name];
  const slot =
    typeof given === "number" && given >= 1 && given <= SPORT_PALETTE_SIZE ? given : hashSlot(name);
  const custom = colors.colors[name];
  return validColor(custom)
    ? `var(--sc-eink-sport-${slot}, ${custom})`
    : `var(--sc-sport-${slot})`;
}

/** Inline style for an icon badge in a sport's colour (tinted background). */
export function sportBadgeStyle(color: string): string {
  return `color:${color};background:color-mix(in srgb, ${color} 18%, transparent)`;
}
