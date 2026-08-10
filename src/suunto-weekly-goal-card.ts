import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoGoalCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { progressRing } from "./utils/render-helpers";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);
export const DEFAULT_WEEKLY_GOAL_KM = 50;

/**
 * A user-set weekly distance target against `weekly_distance` (rolling
 * 7-day sum, already computed by ha-suunto). Deliberately scoped to WEEKLY,
 * not yearly/annual: ha-suunto exposes no year-to-date distance anywhere
 * (not a live sensor, not a long-term statistic) - that would need a new
 * sensor shipped in the integration first. weekly_distance is the closest
 * "goal vs. actual" data already available.
 */
@customElement("suunto-weekly-goal-card")
export class SuuntoWeeklyGoalCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoGoalCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-goal-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoGoalCardConfig {
    return { type: "custom:suunto-weekly-goal-card", goal_km: DEFAULT_WEEKLY_GOAL_KM };
  }

  public setConfig(config: SuuntoGoalCardConfig): void {
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
    const get = (key: string) => (map[key] ? hass.states[map[key]] : undefined);

    const distanceEntity = get("weekly_distance");
    if (!distanceEntity || UNAVAILABLE_STATES.has(distanceEntity.state)) {
      return this._message("mdi:target", t(hass, "empty.weekly_goal.title"));
    }

    const goal = this._config.goal_km ?? DEFAULT_WEEKLY_GOAL_KM;
    const value = Number(distanceEntity.state);
    const pct = goal > 0 ? (value / goal) * 100 : 0;
    const colorVar = pct >= 100 ? "var(--sc-good)" : "var(--sc-amber)";

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:target"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.weekly_goal.title")}</div>
            <div class="subtitle">
              ${t(hass, "card.weekly_goal.subtitle", { value: value.toFixed(1), goal: goal.toFixed(0) })}
            </div>
          </div>
        </div>

        <div class="ring-row">
          <div class="ring-wrap">
            ${progressRing(pct, colorVar, 64, 7)}
            <div class="ring-value" style="color:${colorVar}">${Math.round(pct)}%</div>
          </div>
        </div>
      </ha-card>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .ring-row {
        display: flex;
        justify-content: center;
      }
      .ring-wrap {
        position: relative;
        width: 64px;
        height: 64px;
        flex: none;
      }
      .ring-value {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.95rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-weekly-goal-card": SuuntoWeeklyGoalCard;
  }
}
