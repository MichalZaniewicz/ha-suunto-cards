import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { fireEvent } from "custom-card-helpers";
import type { SuuntoHass, SuuntoCardConfig } from "./utils/types";
import { t } from "./utils/localize";
import { suuntoFuelFigures, type GoalKind } from "./utils/suunto-goals";
import { goalSourceField } from "./utils/goal-field";
import { DEFAULT_FUEL_L_PER_100KM, DEFAULT_FUEL_PRICE } from "./suunto-commute-card";
import { AI_SECTIONS } from "./suunto-ai-insight-card";
import { editorStyles, haInput, haSelect, haSwitch } from "./utils/editor-controls";
import { cardOptionFields, deviceField, lookFields, patchConfig, titleField, unitsField } from "./utils/editor-common";

/**
 * Cards whose stats include distance/pace/speed and so support `units:
 * "metric" | "imperial"`. Keep in sync with each card's own render() -
 * this only controls whether the EDITOR shows the field; a card ignores
 * `config.units` entirely until it actually reads it.
 */
const UNITS_CARDS = new Set<string>([
  "custom:suunto-last-workout-card",
  "custom:suunto-last-workout-tile-card",
  "custom:suunto-lifetime-card",
  "custom:suunto-week-stats-card",
  "custom:suunto-week-compare-card",
  "custom:suunto-commute-card",
  "custom:suunto-gear-card",
  "custom:suunto-aerobic-decoupling-card",
]);

/** Cards with a `period: "year" | "month"` option picking which window is the headline. */
const PERIOD_CARDS = new Set<string>(["custom:suunto-commute-card"]);

/**
 * Cards that show progress toward a goal, and which goals. `fallback`: the
 * card draws a goal even when the Suunto app has none (so the editor names
 * the built-in default); `toggle`: the goal is an add-on to a card that
 * existed without it, so it can be switched off (`show_goals: false`).
 */
const GOAL_CARDS: Record<string, { kinds: GoalKind[]; fallback?: boolean; toggle?: boolean }> = {
  "custom:suunto-daily-goals-card": { kinds: ["steps", "energy", "sleep"], fallback: true },
  "custom:suunto-today-card": { kinds: ["steps", "energy"], toggle: true },
  "custom:suunto-sleep-readiness-card": { kinds: ["sleep"], toggle: true },
  "custom:suunto-sleep-trends-card": { kinds: ["sleep"] },
  "custom:suunto-week-stats-card": { kinds: ["training"], toggle: true },
};

/**
 * One generic visual editor shared by every Suunto card except the goal
 * cards with their own small editors. The device picker, then the title,
 * the card's own fields (looked up by `config.type` in the capability sets
 * above), the shared legend/list/trend-window options, and the
 * "Appearance" section - see utils/editor-common.ts.
 */
@customElement("suunto-device-editor")
export class SuuntoDeviceEditor extends LitElement {
  @property({ attribute: false }) public hass?: SuuntoHass;

  @state() private _config?: SuuntoCardConfig;

  public setConfig(config: SuuntoCardConfig): void {
    this._config = config;
  }

  protected render() {
    if (!this.hass || !this._config) return nothing;
    const hass = this.hass;
    const config = this._config;
    const type = config.type;
    const emit = (next: SuuntoCardConfig): void => this._emit(next);
    const patch = (p: Partial<SuuntoCardConfig>): void => this._emit(patchConfig(config, p));
    const goals = GOAL_CARDS[type];

    return html`
      <div class="form">
        ${deviceField(hass, config, emit)}
        ${titleField(hass, config, emit)}
        ${PERIOD_CARDS.has(type)
          ? haSelect(
              t(hass, "editor.period_label"),
              config.period === "month" ? "month" : "year",
              [
                { value: "year", label: t(hass, "editor.period_year") },
                { value: "month", label: t(hass, "editor.period_month") },
              ],
              // "year" is the default, so it is stored as an absent key.
              (value) => patch({ period: value === "month" ? "month" : undefined })
            )
          : nothing}
        ${PERIOD_CARDS.has(type) ? this._fuelFields(hass, config) : nothing}
        ${goals
          ? html`
              ${goals.toggle
                ? haSwitch(t(hass, "editor.show_goals_label"), config.show_goals !== false, (on) =>
                    // Shown is the default, so it is stored as an absent key.
                    patch({ show_goals: on ? undefined : false })
                  )
                : nothing}
              ${config.show_goals !== false || !goals.toggle
                ? goals.kinds.map((kind) => goalSourceField(hass, config, kind, goals.fallback ?? false, emit))
                : nothing}
            `
          : nothing}
        ${UNITS_CARDS.has(type) ? unitsField(hass, config, emit) : nothing}
        ${type === "custom:suunto-ai-insight-card"
          ? html`
              ${haSelect(
                t(hass, "editor.ai_section_label"),
                String(config.section ?? "sleep"),
                AI_SECTIONS.map((key) => ({ value: key, label: t(hass, `ai_insight.section_full.${key}`) })),
                // "sleep" is the default, so it is stored as an absent key.
                (value) => patch({ section: value === "sleep" ? undefined : value })
              )}
              ${haSwitch(t(hass, "editor.ai_single_label"), config.single_section === true, (on) =>
                patch({ single_section: on || undefined })
              )}
            `
          : nothing}
        ${type === "custom:suunto-daily-brief-card"
          ? haSwitch(t(hass, "editor.show_insight_label"), config.show_insight === true, (on) =>
              // Off is the default, so it is stored as an absent key.
              patch({ show_insight: on || undefined })
            )
          : nothing}
        ${cardOptionFields(hass, config, emit)}
        ${lookFields(hass, config, emit)}
      </div>
    `;
  }

  /** Commutes: fuel figures come from the integration unless typed in here. */
  private _fuelFields(hass: SuuntoHass, config: SuuntoCardConfig) {
    const base = suuntoFuelFigures(hass, config.device_id);
    const own = config.fuel_l_per_100km !== undefined || config.fuel_price !== undefined;
    return html`
      ${haSelect(
        t(hass, "editor.fuel_source_label"),
        own ? "custom" : "suunto",
        [
          {
            value: "suunto",
            label: base
              ? t(hass, "editor.source_integration", {
                  litres: base.litres.toLocaleString(hass.language),
                  price: base.price.toLocaleString(hass.language),
                })
              : t(hass, "editor.source_integration_unknown"),
          },
          { value: "custom", label: t(hass, "editor.source_custom") },
        ],
        (value) =>
          this._emit(
            value === "custom"
              ? // Start the override from whatever the integration is using right now.
                {
                  ...config,
                  fuel_l_per_100km: base?.litres ?? DEFAULT_FUEL_L_PER_100KM,
                  fuel_price: base?.price ?? DEFAULT_FUEL_PRICE,
                }
              : patchConfig(config, { fuel_l_per_100km: undefined, fuel_price: undefined })
          )
      )}
      ${own
        ? html`
            ${haInput(
              t(hass, "editor.fuel_consumption_label"),
              String(config.fuel_l_per_100km ?? base?.litres ?? DEFAULT_FUEL_L_PER_100KM),
              (raw) => {
                const value = Number(raw);
                if (Number.isFinite(value) && value > 0) this._emit({ ...config, fuel_l_per_100km: value });
              },
              { type: "number", min: 0.1, step: 0.1 }
            )}
            ${haInput(
              t(hass, "editor.fuel_price_label"),
              String(config.fuel_price ?? base?.price ?? DEFAULT_FUEL_PRICE),
              (raw) => {
                const value = Number(raw);
                if (Number.isFinite(value) && value >= 0) this._emit({ ...config, fuel_price: value });
              },
              { type: "number", min: 0, step: 0.01 }
            )}
          `
        : html`<div class="hint">${t(hass, "editor.fuel_hint")}</div>`}
    `;
  }

  private _emit(config: SuuntoCardConfig): void {
    this._config = config;
    fireEvent(this, "config-changed", { config });
  }

  static styles = editorStyles;
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-device-editor": SuuntoDeviceEditor;
  }
}
