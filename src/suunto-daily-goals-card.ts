import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { progressRing } from "./utils/render-helpers";
import { t } from "./utils/localize";
import { resolveGoal, formatGoal, formatHours } from "./utils/suunto-goals";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

interface Ring {
  key: string;
  icon: string;
  label: string;
  value: number;
  goal: number;
  valueLabel: string;
}

/**
 * Today's three goals as rings: steps, active calories and last night's
 * sleep - the daily counterpart of the weekly suunto-goals-overview-card.
 * Each goal follows the one set in the Suunto app (ha-suunto 1.0.29+) unless
 * the card has its own value, and falls back to a built-in default when
 * neither exists. A ring with no live data is left out.
 */
@customElement("suunto-daily-goals-card")
export class SuuntoDailyGoalsCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-daily-goals-card" };
  }

  public setConfig(config: SuuntoCardConfig): void {
    this._config = config;
    this._configuredDeviceId = config.device_id;
  }

  public getCardSize(): number {
    return 2;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) return nothing;
    this._syncTheme();

    const resolved = this._resolveEntities();
    if ("error" in resolved) return resolved.error;
    const { map } = resolved;
    const hass = this.hass;
    const config = this._config;
    const deviceId = this._configuredDeviceId;
    const num = (key: string): number | undefined => {
      const entity = map[key] ? hass.states[map[key]] : undefined;
      return entity && !UNAVAILABLE_STATES.has(entity.state) ? Number(entity.state) : undefined;
    };

    const rings: Ring[] = [];
    const steps = num("daily_steps");
    if (steps !== undefined) {
      const goal = resolveGoal(hass, config, deviceId, "steps");
      rings.push({
        key: "steps",
        icon: "mdi:shoe-print",
        label: t(hass, "stat.steps"),
        value: steps,
        goal,
        valueLabel: `${Math.round(steps).toLocaleString(hass.language)} / ${formatGoal(hass, "steps", goal)}`,
      });
    }
    // Active calories, not the day's total: that is what the app's goal means.
    const energy = num("daily_energy");
    if (energy !== undefined) {
      const goal = resolveGoal(hass, config, deviceId, "energy");
      rings.push({
        key: "energy",
        icon: "mdi:fire",
        label: t(hass, "stat.active_kcal"),
        value: energy,
        goal,
        valueLabel: `${Math.round(energy).toLocaleString(hass.language)} / ${goal.toLocaleString(hass.language)}`,
      });
    }
    const sleep = num("sleep_duration");
    if (sleep !== undefined) {
      const goal = resolveGoal(hass, config, deviceId, "sleep");
      rings.push({
        key: "sleep",
        icon: "mdi:sleep",
        label: t(hass, "stat.sleep"),
        value: sleep,
        goal,
        valueLabel: `${formatHours(sleep)} / ${formatHours(goal)}`,
      });
    }

    if (!rings.length) {
      return this._message("mdi:target", t(hass, "empty.daily_goals.title"));
    }

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:target"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.daily_goals.title")}</div>
            <div class="subtitle">${t(hass, "card.daily_goals.subtitle")}</div>
          </div>
        </div>

        <div class="goals-row">
          ${rings.map((r) => {
            const pct = r.goal > 0 ? (r.value / r.goal) * 100 : 0;
            const colorVar = pct >= 100 ? "var(--sc-good)" : "var(--sc-amber)";
            return html`
              <div class="goal">
                <div class="ring-wrap">
                  ${progressRing(pct, colorVar, 84, 8)}
                  <div class="ring-pct" style="color:${colorVar}">${Math.round(pct)}%</div>
                </div>
                <div class="goal-label"><ha-icon icon=${r.icon}></ha-icon>${r.label}</div>
                <div class="goal-value">${r.valueLabel}</div>
              </div>
            `;
          })}
        </div>
      </ha-card>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .goals-row {
        display: flex;
        gap: 12px;
      }
      .goal {
        flex: 1;
        min-width: 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
      }
      .ring-wrap {
        position: relative;
        width: 84px;
        height: 84px;
        flex: none;
      }
      .ring-pct {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.05rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
      .goal-label {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 0.78rem;
        color: var(--secondary-text-color);
      }
      .goal-label ha-icon {
        --mdc-icon-size: 15px;
      }
      .goal-value {
        font-size: 0.8rem;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-daily-goals-card": SuuntoDailyGoalsCard;
  }
}
