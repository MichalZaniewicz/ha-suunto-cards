import { html, nothing, type TemplateResult } from "lit";
import type { SuuntoCardConfig, SuuntoHass } from "./types";
import { t, type TranslationKey } from "./localize";
import { haInput, haSelect } from "./editor-controls";
import { GOAL_SPECS, formatGoal, suuntoDailyStepsGoal, suuntoGoal, type GoalKind } from "./suunto-goals";

/**
 * One "goal from: Suunto app / Custom" editor row (plus the number input when
 * Custom is picked), shared by every card editor that offers a goal. Following
 * Suunto is stored as an ABSENT config key, so a goal changed in the app
 * reaches the card without touching its config.
 *
 * `withFallback`: the card shows a goal even when Suunto has none (a ring
 * needs one), so the Suunto option names the built-in default it will use.
 */
export function goalSourceField<C extends SuuntoCardConfig>(
  hass: SuuntoHass,
  config: C,
  kind: GoalKind,
  withFallback: boolean,
  emit: (config: C) => void
): TemplateResult {
  const spec = GOAL_SPECS[kind];
  const fromSuunto = suuntoGoal(hass, config.device_id, kind);
  const own = config[spec.configKey];
  const custom = own !== undefined;

  const suuntoLabel =
    fromSuunto !== undefined
      ? t(hass, "editor.source_suunto", { value: formatGoal(hass, kind, fromSuunto) })
      : withFallback
      ? t(hass, "editor.source_suunto_default", { value: formatGoal(hass, kind, spec.fallback) })
      : t(hass, "editor.source_suunto_none");

  return html`
    ${haSelect(
      t(hass, spec.sourceLabel),
      custom ? "custom" : "suunto",
      [
        { value: "suunto", label: suuntoLabel },
        { value: "custom", label: t(hass, "editor.source_custom") },
      ],
      // Start a custom value from whatever the card is showing right now.
      (value) => emit({ ...config, [spec.configKey]: value === "custom" ? fromSuunto ?? spec.fallback : undefined })
    )}
    ${custom
      ? haInput(
          t(hass, spec.customLabel),
          String(own),
          (raw) => {
            const value = Number(raw);
            if (Number.isFinite(value) && value > 0) emit({ ...config, [spec.configKey]: value });
          },
          { type: "number", min: spec.step, step: spec.step }
        )
      : nothing}
  `;
}

/**
 * The step goal of the step cards: "from the Suunto app" (the daily goal,
 * x7 on the weekly cards; absent key) or a custom number. Unlike
 * `goalSourceField` these cards always draw a goal, so the Suunto option
 * names `fallback` when the app has none.
 */
export function stepsGoalField<C extends SuuntoCardConfig>(
  hass: SuuntoHass,
  config: C,
  emit: (config: C) => void,
  opts: { weekly: boolean; fallback: number; label: TranslationKey; step: number }
): TemplateResult {
  const daily = suuntoDailyStepsGoal(hass, config.device_id);
  const fromSuunto = daily !== undefined ? (opts.weekly ? daily * 7 : daily) : undefined;
  const custom = config.goal_steps !== undefined;
  return html`
    ${haSelect(
      t(hass, "editor.goal_source_label"),
      custom ? "custom" : "suunto",
      [
        {
          value: "suunto",
          label:
            fromSuunto !== undefined
              ? t(hass, "editor.source_suunto", { value: fromSuunto.toLocaleString(hass.language) })
              : t(hass, "editor.source_suunto_default", { value: opts.fallback.toLocaleString(hass.language) }),
        },
        { value: "custom", label: t(hass, "editor.source_custom") },
      ],
      // Following the Suunto app is stored as an absent key.
      (value) => emit({ ...config, goal_steps: value === "custom" ? fromSuunto ?? opts.fallback : undefined })
    )}
    ${custom
      ? haInput(
          t(hass, opts.label),
          String(config.goal_steps),
          (raw) => {
            const value = Number(raw);
            if (Number.isFinite(value) && value > 0) emit({ ...config, goal_steps: value });
          },
          { type: "number", min: 1, step: opts.step }
        )
      : nothing}
  `;
}
