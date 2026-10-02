import { html, nothing, type TemplateResult } from "lit";
import type { SuuntoCardConfig, SuuntoHass } from "./types";
import { t } from "./localize";
import { GOAL_SPECS, formatGoal, suuntoGoal, type GoalKind } from "./suunto-goals";

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
  emit: (config: C) => void,
  fieldClass = "field"
): TemplateResult {
  const spec = GOAL_SPECS[kind];
  const fromSuunto = suuntoGoal(hass, config.device_id, kind);
  const own = config[spec.configKey];
  const custom = own !== undefined;

  const sourceChanged = (ev: Event) => {
    const value = (ev.target as HTMLSelectElement).value;
    // Start a custom value from whatever the card is showing right now.
    emit({ ...config, [spec.configKey]: value === "custom" ? fromSuunto ?? spec.fallback : undefined });
  };
  const valueChanged = (ev: Event) => {
    const raw = Number((ev.target as HTMLInputElement).value);
    if (Number.isFinite(raw) && raw > 0) emit({ ...config, [spec.configKey]: raw });
  };

  return html`
    <label class=${fieldClass}>
      <span>${t(hass, spec.sourceLabel)}</span>
      <select .value=${custom ? "custom" : "suunto"} @change=${sourceChanged}>
        <option value="suunto" ?selected=${!custom}>
          ${fromSuunto !== undefined
            ? t(hass, "editor.source_suunto", { value: formatGoal(hass, kind, fromSuunto) })
            : withFallback
            ? t(hass, "editor.source_suunto_default", { value: formatGoal(hass, kind, spec.fallback) })
            : t(hass, "editor.source_suunto_none")}
        </option>
        <option value="custom" ?selected=${custom}>${t(hass, "editor.source_custom")}</option>
      </select>
    </label>
    ${custom
      ? html`
          <label class=${fieldClass}>
            <span>${t(hass, spec.customLabel)}</span>
            <input type="number" min=${spec.step} step=${spec.step} .value=${String(own)} @change=${valueChanged} />
          </label>
        `
      : nothing}
  `;
}
