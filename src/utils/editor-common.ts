import { html, nothing, type TemplateResult } from "lit";
import type { SuuntoCardConfig, SuuntoHass } from "./types";
import { t, type TranslationKey } from "./localize";
import { findSuuntoDeviceIds } from "./entities";
import { haInput, haSelect, haSwitch } from "./editor-controls";

/**
 * The editor fields every card editor shares: the title (first, right after
 * the device picker), the per-group options (legend, list size, trend window)
 * and the "Appearance" section. The options are honored generically by
 * `SuuntoBaseCard`, so a new card gets them without touching the editors -
 * only the sets below say which cards have a header, a subtitle, a legend or
 * a list.
 */

const card = (name: string): string => `custom:suunto-${name}-card`;

/** No header row at all (an emblem/character layout), so no title or header options. */
const NO_HEADER_CARDS = new Set(["class", "level", "player"].map(card));

/** A header without a subtitle line. */
const NO_SUBTITLE_CARDS = new Set(["recent-workouts"].map(card));

/** Cards with a colour legend under the chart. */
const LEGEND_CARDS = new Set(
  [
    "activity-trends", "fitness-trend", "pmc", "recovery-balance-trend", "recovery-trends", "route",
    "running-dynamics", "sleep-clock", "sleep-detail", "sleep-readiness", "sleep-regularity",
    "sleep-rhythm", "sleep-trends", "steps-trend", "training-effect-trend", "week-compare",
  ].map(card)
);

/** Lists the `max_items` option cuts (no cap by default). */
const MAX_ITEMS_CARDS = new Set(["recent-workouts", "personal-insights", "gear"].map(card));

/** Scrolling lists (default height 320 px; Achievements 480 px). */
const LIST_HEIGHT_CARDS = new Set(["recent-workouts", "lap-splits", "achievements"].map(card));

/** Trend cards with a `days` window, and each one's default. */
export const DAYS_CARDS: Record<string, number> = {
  [card("activity-trends")]: 14,
  [card("fitness-trend")]: 90,
  [card("pmc")]: 90,
  [card("readiness-trend")]: 30,
  [card("recovery-balance-trend")]: 14,
  [card("recovery-trends")]: 30,
  [card("sleep-trends")]: 30,
  [card("steps-trend")]: 14,
  [card("training-effect-trend")]: 30,
  [card("training-load")]: 30,
};
const DAYS_OPTIONS = [7, 14, 30, 60, 90, 180];

type Emit<C> = (config: C) => void;

/** `config` with `patch` applied; a key set to `undefined` is removed (back to the default). */
export function patchConfig<C extends SuuntoCardConfig>(config: C, patch: Partial<SuuntoCardConfig>): C {
  const next: Record<string, unknown> = { ...config, ...patch };
  for (const [key, value] of Object.entries(patch)) if (value === undefined) delete next[key];
  return next as C;
}

function numberField<C extends SuuntoCardConfig>(
  hass: SuuntoHass,
  config: C,
  emit: Emit<C>,
  key: "max_items" | "list_height",
  label: string,
  min: number,
  max: number
): TemplateResult {
  return haInput(
    label,
    config[key] !== undefined ? String(config[key]) : "",
    (raw) => {
      const parsed = Number.parseInt(raw, 10);
      const value = Number.isNaN(parsed) ? undefined : Math.min(max, Math.max(min, parsed));
      if (value !== config[key]) emit(patchConfig(config, { [key]: value }));
    },
    { type: "number", min, max, step: 1 }
  );
}

/** The device picker when there is more than one Suunto device, else a note that none is needed. */
export function deviceField<C extends SuuntoCardConfig>(hass: SuuntoHass, config: C, emit: Emit<C>): TemplateResult {
  if (findSuuntoDeviceIds(hass).length <= 1) {
    return html`<div class="hint">${t(hass, "editor.auto_detect")}</div>`;
  }
  return html`
    <ha-device-picker
      .hass=${hass}
      .value=${config.device_id ?? ""}
      .label=${t(hass, "editor.device_label")}
      @value-changed=${(ev: CustomEvent<{ value: string }>) =>
        emit(patchConfig(config, { device_id: ev.detail.value || undefined }))}
    ></ha-device-picker>
    <div class="hint">${t(hass, "editor.pick_device")}</div>
  `;
}

/** Metric / imperial, for the cards with distance, pace or speed. */
export function unitsField<C extends SuuntoCardConfig>(hass: SuuntoHass, config: C, emit: Emit<C>): TemplateResult {
  return haSelect(
    t(hass, "editor.units_label"),
    config.units ?? "metric",
    [
      { value: "metric", label: t(hass, "editor.units_metric") },
      { value: "imperial", label: t(hass, "editor.units_imperial") },
    ],
    (value) => emit(patchConfig(config, { units: value === "imperial" ? "imperial" : "metric" }))
  );
}

/** The title override, for every card with a header. */
export function titleField<C extends SuuntoCardConfig>(hass: SuuntoHass, config: C, emit: Emit<C>): TemplateResult | typeof nothing {
  if (NO_HEADER_CARDS.has(config.type)) return nothing;
  return haInput(t(hass, "editor.title"), config.title ?? "", (value) =>
    emit(patchConfig(config, { title: value.trim() || undefined }))
  );
}

/** Legend, list and trend-window options for the cards that have them. */
export function cardOptionFields<C extends SuuntoCardConfig>(hass: SuuntoHass, config: C, emit: Emit<C>): TemplateResult {
  const type = config.type;
  const days = DAYS_CARDS[type];
  const dayOptions = days !== undefined ? [...new Set([...DAYS_OPTIONS, days])].sort((a, b) => a - b) : [];
  return html`
    ${days !== undefined
      ? haSelect(
          t(hass, "editor.days_label"),
          String(config.days ?? days),
          dayOptions.map((d) => ({ value: String(d), label: String(d) })),
          (value) => {
            const picked = Number(value);
            // The card's own default is stored as an absent key.
            emit(patchConfig(config, { days: picked === days ? undefined : picked }));
          }
        )
      : nothing}
    ${MAX_ITEMS_CARDS.has(type)
      ? numberField(hass, config, emit, "max_items", t(hass, "editor.max_items"), 1, 50)
      : nothing}
    ${LIST_HEIGHT_CARDS.has(type)
      ? numberField(hass, config, emit, "list_height", t(hass, "editor.list_height"), 120, 1200)
      : nothing}
    ${LEGEND_CARDS.has(type)
      ? haSwitch(t(hass, "editor.hide_legend"), Boolean(config.hide_legend), (on) =>
          emit(patchConfig(config, { hide_legend: on || undefined }))
        )
      : nothing}
  `;
}

/** Ready-made accent colors under the color field. The first one is the
 * cards' own amber - picking it clears `accent_color`. */
const ACCENT_SWATCHES: { color: string; label: TranslationKey }[] = [
  { color: "#d98a1d", label: "editor.accent_default" },
  { color: "#e91e63", label: "editor.accent_pink" },
  { color: "#7e57c2", label: "editor.accent_purple" },
  { color: "#009688", label: "editor.accent_teal" },
  { color: "#43a047", label: "editor.accent_green" },
  { color: "#1e88e5", label: "editor.accent_blue" },
];

/** The accent color: a text field with a preview dot, and the swatches under it. */
function accentField<C extends SuuntoCardConfig>(hass: SuuntoHass, config: C, emit: Emit<C>): TemplateResult {
  const current = config.accent_color ?? "";
  const valid = current !== "" && typeof CSS !== "undefined" && CSS.supports("color", current);
  return html`
    <div class="color-field">
      ${haInput(
        t(hass, "editor.accent_color"),
        current,
        (value) => emit(patchConfig(config, { accent_color: value.trim() || undefined })),
        {},
        html`<span class="preview ${valid ? "" : "none"}" style=${valid ? `background:${current}` : ""}></span>`
      )}
      <div class="swatches">
        ${ACCENT_SWATCHES.map((swatch, i) => {
          const selected = i === 0 ? !current : current.toLowerCase() === swatch.color;
          return html`<button
            type="button"
            class="swatch ${selected ? "selected" : ""}"
            style="background:${swatch.color}"
            title=${t(hass, swatch.label)}
            aria-label=${t(hass, swatch.label)}
            @click=${() => emit(patchConfig(config, { accent_color: i === 0 ? undefined : swatch.color }))}
          ></button>`;
        })}
      </div>
      <div class="hint">${t(hass, "editor.accent_hint")}</div>
    </div>
  `;
}

/** The "Appearance" section, appended at the end of every editor. */
export function lookFields<C extends SuuntoCardConfig>(hass: SuuntoHass, config: C, emit: Emit<C>): TemplateResult {
  const type = config.type;
  const header = !NO_HEADER_CARDS.has(type);
  const toggle = (key: "hide_header" | "hide_icon" | "hide_subtitle" | "compact", label: string) =>
    haSwitch(label, Boolean(config[key]), (on) => emit(patchConfig(config, { [key]: on || undefined })));
  return html`
    <hr class="sep" />
    <div class="group-label">${t(hass, "editor.look_section")}</div>
    ${header
      ? haInput(t(hass, "editor.icon"), config.icon ?? "", (value) =>
          emit(patchConfig(config, { icon: value.trim() || undefined }))
        )
      : nothing}
    ${accentField(hass, config, emit)}
    ${header ? toggle("hide_header", t(hass, "editor.hide_header")) : nothing}
    ${header ? toggle("hide_icon", t(hass, "editor.hide_icon")) : nothing}
    ${header && !NO_SUBTITLE_CARDS.has(type) ? toggle("hide_subtitle", t(hass, "editor.hide_subtitle")) : nothing}
    ${header ? toggle("compact", t(hass, "editor.compact_label")) : nothing}
  `;
}
