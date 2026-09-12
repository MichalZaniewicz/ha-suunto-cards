import { html, css, nothing, type PropertyValues, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoStepsGoalCardConfig, SuuntoHass } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { progressRing } from "./utils/render-helpers";
import { fetchPriorWeekStepsTotal } from "./utils/format";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);
export const DEFAULT_WEEKLY_STEPS_GOAL = 70000;
const REFETCH_INTERVAL_MS = 10 * 60 * 1000;

/**
 * A rolling 7-day step total against a user-set weekly target - the steps
 * equivalent of suunto-weekly-goal-card (which reads the `weekly_distance`
 * sensor), but ha-suunto has no `weekly_steps` sensor, so this sums it
 * client-side: the last 6 FULL days from the `suunto_app:steps` statistic
 * (already fetched the same way suunto-steps-today-card computes its 7-day
 * average) plus today's own live `daily_steps` state, matching how
 * `weekly_distance` itself is a rolling window that includes today so far.
 */
@customElement("suunto-weekly-steps-goal-card")
export class SuuntoWeeklyStepsGoalCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoStepsGoalCardConfig;
  @state() private _priorDaysTotal?: number;

  private _historyKey?: string;
  private _historyFetchedAt = 0;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-weekly-steps-goal-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoStepsGoalCardConfig {
    return { type: "custom:suunto-weekly-steps-goal-card", goal_steps: DEFAULT_WEEKLY_STEPS_GOAL };
  }

  public setConfig(config: SuuntoStepsGoalCardConfig): void {
    this._config = config;
    this._configuredDeviceId = config.device_id;
  }

  public getCardSize(): number {
    return 2;
  }

  protected willUpdate(changed: PropertyValues): void {
    if (changed.has("hass") && this.hass && this._config) {
      void this._maybeFetchHistory();
    }
  }

  private async _maybeFetchHistory(): Promise<void> {
    if (!this.hass) return;
    const key = this._configuredDeviceId ?? "auto";
    const now = Date.now();
    if (key === this._historyKey && now - this._historyFetchedAt < REFETCH_INTERVAL_MS) {
      return;
    }
    this._historyKey = key;
    this._historyFetchedAt = now;

    try {
      this._priorDaysTotal = await fetchPriorWeekStepsTotal(this.hass as SuuntoHass);
    } catch {
      // Statistics are best-effort - the ring still works from today's live state alone.
      this._priorDaysTotal = undefined;
    }
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) return nothing;
    this._syncTheme();

    const resolved = this._resolveEntities();
    if ("error" in resolved) return resolved.error;
    const { map } = resolved;
    const hass = this.hass;
    const get = (key: string) => (map[key] ? hass.states[map[key]] : undefined);

    const stepsEntity = get("daily_steps");
    if (!stepsEntity || UNAVAILABLE_STATES.has(stepsEntity.state)) {
      return this._message("mdi:target", t(hass, "empty.weekly_steps_goal.title"));
    }

    const goal = this._config.goal_steps ?? DEFAULT_WEEKLY_STEPS_GOAL;
    const value = (this._priorDaysTotal ?? 0) + Number(stepsEntity.state);
    const pct = goal > 0 ? (value / goal) * 100 : 0;
    const colorVar = pct >= 100 ? "var(--sc-good)" : "var(--sc-amber)";

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:target"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.weekly_steps_goal.title")}</div>
            <div class="subtitle">
              ${t(hass, "card.weekly_steps_goal.subtitle", {
                value: Math.round(value).toLocaleString(hass.language),
                goal: goal.toLocaleString(hass.language),
              })}
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
    "suunto-weekly-steps-goal-card": SuuntoWeeklyStepsGoalCard;
  }
}
