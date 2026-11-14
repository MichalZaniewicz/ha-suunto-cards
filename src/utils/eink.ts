import { css } from "lit";

/**
 * E-ink mode: the `eink` option, or the `suunto-cards-eink` theme variable
 * for every card at once, puts an `.eink` class on the host
 * (SuuntoBaseCard._syncTheme), for e-paper wall screens.
 *
 * Only pure black and white: no tints, transparency, shadows or animation,
 * because on such a screen they either vanish or get dithered. Green and red
 * are nearly equally bright, so colour can't carry a meaning alone: a white
 * fill gets a black frame so it still shows, every card already names what
 * it shows (zone numbers, status words), and lists grow instead of
 * scrolling. Every rule sits under `:host(.eink)`, which outranks a card's
 * own local rule, so this one block covers all cards.
 *
 * Screens with greys or colours add a palette on top (`.eink-gray`,
 * `.eink-red`, `.eink-yellow`, `.eink-color`), with the panel's pure colours
 * so nothing gets dithered. Yellow text would vanish on white, so yellow is
 * only ever a fill behind black text.
 */
export type EinkMode = "bw" | "gray" | "red" | "yellow" | "color";

/** Modes that add a palette, each with its own host class. */
export const EINK_PALETTES: readonly EinkMode[] = ["gray", "red", "yellow", "color"];

/** The `eink` option or theme variable as a mode; undefined means off. */
export function einkMode(value: unknown): EinkMode | undefined {
  const text = String(value ?? "")
    .trim()
    .replace(/^["']|["']$/g, "")
    .toLowerCase();
  if (["", "false", "off", "0", "no", "none"].includes(text)) return undefined;
  if (text === "grey") return "gray";
  if (text === "colour") return "color";
  return (EINK_PALETTES as readonly string[]).includes(text) ? (text as EinkMode) : "bw";
}

export const suuntoEinkStyles = css`
  :host(.eink) {
    --primary-text-color: #000;
    --secondary-text-color: #000;
    --disabled-text-color: #000;
    --divider-color: #000;
    --card-background-color: #fff;
    --ha-card-background: #fff;
    --ha-card-box-shadow: none;
    --ha-card-border-radius: 0;
    --sc-track: #fff;
    --sc-amber: #000;
    --sc-amber-bg: #fff;
    --sc-pulse: #000;
    --sc-pulse-bg: #fff;
    --sc-chip-bg: #fff;
    --sc-sev-1: #fff;
    --sc-sev-2: #000;
    --sc-sev-3: #000;
    --sc-sev-4: #000;
    --sc-sev-5: #000;
    --sc-good: #000;
    --sc-good-bg: #fff;
    --sc-warn: #000;
    --sc-warn-bg: #fff;
    --sc-bad: #000;
    --sc-bad-bg: #fff;
    --sc-zone-0: #fff;
    --sc-zone-1: #fff;
    --sc-zone-2: #000;
    --sc-zone-3: #000;
    --sc-zone-4: #000;
    --sc-zone-5: #000;
    --sc-sleep-deep: #000;
    --sc-sleep-light: #fff;
    --sc-sleep-rem: #000;
    --sc-sleep-awake: #fff;
    --sc-sleep-other: #fff;
    --sc-stress-recovering: #000;
    --sc-stress-active: #000;
    --sc-stress-inactive: #fff;
    --sc-stress-stressed: #000;
    --sc-sport-1: #000;
    --sc-sport-2: #000;
    --sc-sport-3: #000;
    --sc-sport-4: #000;
    --sc-sport-5: #000;
    --sc-sport-6: #000;
    --sc-sport-7: #000;
    --sc-sport-8: #000;
    --sc-sport-9: #000;
    --sc-sport-10: #000;
    --sc-sport-11: #000;
    --sc-sport-12: #000;
    --sc-eink-sport-1: var(--sc-sport-1);
    --sc-eink-sport-2: var(--sc-sport-2);
    --sc-eink-sport-3: var(--sc-sport-3);
    --sc-eink-sport-4: var(--sc-sport-4);
    --sc-eink-sport-5: var(--sc-sport-5);
    --sc-eink-sport-6: var(--sc-sport-6);
    --sc-eink-sport-7: var(--sc-sport-7);
    --sc-eink-sport-8: var(--sc-sport-8);
    --sc-eink-sport-9: var(--sc-sport-9);
    --sc-eink-sport-10: var(--sc-sport-10);
    --sc-eink-sport-11: var(--sc-sport-11);
    --sc-eink-sport-12: var(--sc-sport-12);
  }
  :host(.eink) *,
  :host(.eink) *::before,
  :host(.eink) *::after {
    animation: none !important;
    transition: none !important;
    filter: none !important;
    text-shadow: none !important;
    box-shadow: none !important;
    scrollbar-width: none;
  }
  :host(.eink) ha-card {
    background: #fff;
    color: #000;
    border: 1.5px solid #000;
    border-radius: 0;
    cursor: default;
  }
  /* A wall screen can't be scrolled: lists grow, unless list_height says otherwise. */
  :host(.eink) .scroll-list,
  :host(.eink) .list {
    max-height: var(--sc-list-height, none);
    overflow: hidden;
  }
  :host(.eink) .icon-badge,
  :host(.eink) .icon-badge.pulse {
    background: #fff !important;
    color: #000 !important;
    border: 1.5px solid #000;
    box-sizing: border-box;
  }
  :host(.eink) .title {
    font-weight: 800;
  }
  :host(.eink) .chip,
  :host(.eink) .pill,
  :host(.eink) .sc-stale {
    background: #fff !important;
    color: #000 !important;
    border: 1.5px solid #000;
  }
  /* Fills: a white one still shows inside its frame; tracks are frames. */
  :host(.eink) .seg,
  :host(.eink) .dot,
  :host(.eink) .sw,
  :host(.eink) .legend-dot {
    outline: 1.5px solid #000;
    outline-offset: -1.5px;
  }
  /* Adjacent black segments would merge into one block: keep a gap. */
  :host(.eink) .bar {
    gap: 2px;
  }
  :host(.eink) .bar,
  :host(.eink) .goal-bar,
  :host(.eink) .track {
    background: #fff !important;
    outline: 1.5px solid #000;
    outline-offset: -1.5px;
  }
  :host(.eink) .goal-bar > span,
  :host(.eink) .track > b {
    background: #000 !important;
  }
  :host(.eink) .track > b.rest {
    background: repeating-linear-gradient(90deg, #000 0 1.5px, #fff 1.5px 5px) !important;
  }
  :host(.eink) .warning {
    background: #fff !important;
    color: #000 !important;
    border: 2px solid #000;
  }

  /* --- Palettes --- */
  :host(.eink-gray) {
    --secondary-text-color: #555;
    --sc-track: #aaa;
    --sc-sev-2: #aaa;
    --sc-sev-3: #555;
    --sc-sev-4: #555;
    --sc-zone-1: #aaa;
    --sc-zone-2: #aaa;
    --sc-zone-3: #555;
    --sc-zone-4: #555;
    --sc-sleep-light: #aaa;
    --sc-sleep-rem: #555;
    --sc-stress-recovering: #aaa;
    --sc-stress-active: #555;
    --sc-sport-2: #555;
    --sc-sport-3: #aaa;
    --sc-sport-5: #555;
    --sc-sport-6: #aaa;
    --sc-sport-8: #555;
    --sc-sport-9: #aaa;
    --sc-sport-11: #555;
    --sc-sport-12: #aaa;
  }
  /* Red only for what needs attention. */
  :host(.eink-red) {
    --sc-bad: #f00;
    --sc-sev-5: #f00;
    --sc-zone-5: #f00;
    --sc-stress-stressed: #f00;
  }
  /* Yellow only ever as a fill behind black text. */
  :host(.eink-yellow) {
    --sc-warn-bg: #ff0;
    --sc-bad-bg: #ff0;
  }
  :host(.eink-yellow) .warning {
    background: #ff0 !important;
  }
  /* Six-colour panels (black, white, red, yellow, green, blue). */
  :host(.eink-color) {
    --sc-pulse: #00f;
    --sc-good: #080;
    --sc-bad: #f00;
    --sc-warn-bg: #ff0;
    --sc-bad-bg: #ff0;
    --sc-sev-2: #00f;
    --sc-sev-3: #080;
    --sc-sev-5: #f00;
    --sc-zone-1: #00f;
    --sc-zone-2: #00f;
    --sc-zone-3: #080;
    --sc-zone-5: #f00;
    --sc-sleep-deep: #00f;
    --sc-sleep-rem: #080;
    --sc-stress-recovering: #080;
    --sc-stress-stressed: #f00;
    --sc-sport-1: #00f;
    --sc-sport-2: #f00;
    --sc-sport-3: #080;
    --sc-sport-5: #00f;
    --sc-sport-6: #f00;
    --sc-sport-7: #080;
    --sc-sport-9: #00f;
    --sc-sport-10: #f00;
    --sc-sport-11: #080;
  }
  :host(.eink-color) .warning {
    background: #ff0 !important;
  }

  /* max_lines: long text cut to a few lines (the whole text stays in the
     entity's attributes). Universal, set by SuuntoBaseCard._syncTheme. */
  :host(.max-lines) .sc-clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--sc-max-lines);
    line-clamp: var(--sc-max-lines);
    overflow: hidden;
  }
`;
