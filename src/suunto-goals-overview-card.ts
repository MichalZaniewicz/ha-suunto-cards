import { html, css, nothing, type PropertyValues, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoGoalsOverviewCardConfig, SuuntoHass } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { progressRing } from "./utils/render-helpers";
import { fetchPriorWeekStepsTotal, formatDistance } from "./utils/format";
import { t } from "./utils/localize";
import { DEFAULT_WEEKLY_GOAL_KM } from "./suunto-weekly-goal-card";
import { DEFAULT_WEEKLY_STEPS_GOAL } from "./suunto-weekly-steps-goal-card";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);
const REFETCH_INTERVAL_MS = 10 * 60 * 1000;

interface Ring {
  key: string;
  icon: string;
  label: string;
  value: number;
  goal: number;
  valueLabel: string;
}

/**
 * Both weekly goal rings (distance + steps) in one card, instead of two
 * separate suunto-weekly-goal-card / suunto-weekly-steps-goal-card
 * instances - reuses the exact same sensors and client-side weekly-steps
 * sum (fetchPriorWeekStepsTotal, shared with suunto-weekly-steps-goal-card)
 * rather than inventing a new computation. Shows whichever goal(s) have
 * live data - one ring full width if only one does, both side by side
 * otherwise.
 */
@customElement("suunto-goals-overview-card")
export class SuuntoGoalsOverviewCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoGoalsOverviewCardConfig;
  @state() private _priorDaysSteps?: number;

  private _historyKey?: string;
  private _historyFetchedAt = 0;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-goals-overview-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoGoalsOverviewCardConfig {
    return {
      type: "custom:suunto-goals-overview-card",
      goal_km: DEFAULT_WEEKLY_GOAL_KM,
      goal_steps: DEFAULT_WEEKLY_STEPS_GOAL,
    };
  }

  public setConfig(config: SuuntoGoalsOverviewCardConfig): void {
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
      this._priorDaysSteps = await fetchPriorWeekStepsTotal(this.hass as SuuntoHass);
    } catch {
      // Statistics are best-effort - the steps ring still works from today's live state alone.
      this._priorDaysSteps = undefined;
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

    const weeklyDistance = get("weekly_distance");
    const dailySteps = get("daily_steps");
    const units = this._config.units ?? "metric";

    const rings: Ring[] = [];
    if (weeklyDistance && !UNAVAILABLE_STATES.has(weeklyDistance.state)) {
      const goal = this._config.goal_km ?? DEFAULT_WEEKLY_GOAL_KM;
      const value = Number(weeklyDistance.state);
      const valueFmt = formatDistance(value, units);
      const goalFmt = formatDistance(goal, units, 0);
      rings.push({
        key: "distance",
        icon: "mdi:map-marker-distance",
        label: t(hass, "stat.distance"),
        value,
        goal,
        valueLabel: `${valueFmt.value} / ${goalFmt.value} ${goalFmt.unit}`,
      });
    }
    if (dailySteps && !UNAVAILABLE_STATES.has(dailySteps.state)) {
      const goal = this._config.goal_steps ?? DEFAULT_WEEKLY_STEPS_GOAL;
      const value = (this._priorDaysSteps ?? 0) + Number(dailySteps.state);
      rings.push({
        key: "steps",
        icon: "mdi:shoe-print",
        label: t(hass, "stat.steps"),
        value,
        goal,
        valueLabel: `${Math.round(value).toLocaleString(hass.language)} / ${goal.toLocaleString(hass.language)}`,
      });
    }

    if (!rings.length) {
      return this._message("mdi:target", t(hass, "empty.goals_overview.title"));
    }

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:target"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.goals_overview.title")}</div>
            <div class="subtitle">${t(hass, "card.goals_overview.subtitle")}</div>
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
        gap: 20px;
      }
      .goal {
        flex: 1;
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
    "suunto-goals-overview-card": SuuntoGoalsOverviewCard;
  }
}
