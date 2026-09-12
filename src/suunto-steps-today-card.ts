import { html, css, nothing, type PropertyValues, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoStepsGoalCardConfig, SuuntoHass } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { progressRing } from "./utils/render-helpers";
import { fetchStatisticsSeries, dailyTotalsFromCumulative } from "./utils/format";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);
export const DEFAULT_STEPS_GOAL = 10000;
const REFETCH_INTERVAL_MS = 10 * 60 * 1000;

/**
 * Today's steps against a user-set daily goal - same ring pattern as
 * suunto-weekly-goal-card, plus a "vs your own 7-day average" comparison
 * (the average deliberately excludes today's own still-accumulating
 * total, or it would always read as "behind" until the day is over).
 */
@customElement("suunto-steps-today-card")
export class SuuntoStepsTodayCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoStepsGoalCardConfig;
  @state() private _weekAverage?: number;

  private _historyKey?: string;
  private _historyFetchedAt = 0;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-steps-goal-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoStepsGoalCardConfig {
    return { type: "custom:suunto-steps-today-card", goal_steps: DEFAULT_STEPS_GOAL };
  }

  public setConfig(config: SuuntoStepsGoalCardConfig): void {
    this._config = config;
    this._configuredDeviceId = config.device_id;
  }

  public getCardSize(): number {
    return 3;
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
      const points = dailyTotalsFromCumulative(
        await fetchStatisticsSeries(this.hass as SuuntoHass, "suunto_app:steps", 8 * 24, "sum")
      );
      const todayKey = new Date().toDateString();
      const priorDays = points.filter((p) => new Date(p.t).toDateString() !== todayKey);
      const last7 = priorDays.slice(-7);
      this._weekAverage = last7.length ? last7.reduce((sum, p) => sum + p.v, 0) / last7.length : undefined;
    } catch {
      // Statistics are best-effort - the card still works from live state alone.
      this._weekAverage = undefined;
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
      return this._message("mdi:shoe-print", t(hass, "empty.steps_today.title"));
    }

    const goal = this._config.goal_steps ?? DEFAULT_STEPS_GOAL;
    const value = Number(stepsEntity.state);
    const pct = goal > 0 ? (value / goal) * 100 : 0;
    const colorVar = pct >= 100 ? "var(--sc-good)" : "var(--sc-amber)";

    const delta =
      this._weekAverage && this._weekAverage > 0 ? ((value - this._weekAverage) / this._weekAverage) * 100 : undefined;

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:shoe-print"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.steps_today.title")}</div>
            <div class="subtitle">${t(hass, "card.steps_today.subtitle", { goal: goal.toLocaleString(hass.language) })}</div>
          </div>
        </div>

        <div class="hero-row">
          <div>
            <div class="hero-num">
              ${Math.round(value).toLocaleString(hass.language)}<span class="unit">${t(hass, "stat.steps")}</span>
            </div>
            <div class="hero-sub">${t(hass, "steps_today.goal_pct", { pct: Math.round(pct) })}</div>
          </div>
          <div class="ring-wrap">
            ${progressRing(pct, colorVar, 76, 7)}
            <div class="ring-value" style="color:${colorVar}">${Math.round(pct)}%</div>
          </div>
        </div>

        ${delta !== undefined
          ? html`
              <div class="avg-chip ${delta >= 0 ? "up" : ""}">
                <ha-icon icon=${delta >= 0 ? "mdi:trending-up" : "mdi:trending-down"}></ha-icon>
                <span>
                  ${t(hass, delta >= 0 ? "steps_today.vs_avg_up" : "steps_today.vs_avg_down", {
                    pct: Math.abs(Math.round(delta)),
                    avg: Math.round(this._weekAverage ?? 0).toLocaleString(hass.language),
                  })}
                </span>
              </div>
            `
          : nothing}
      </ha-card>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .hero-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
      }
      .hero-num {
        font-size: 1.9rem;
        font-weight: 700;
        line-height: 1;
        font-variant-numeric: tabular-nums;
        display: flex;
        align-items: baseline;
        gap: 5px;
      }
      .hero-num .unit {
        font-size: 0.75rem;
        font-weight: 500;
        color: var(--secondary-text-color);
      }
      .hero-sub {
        font-size: 0.76rem;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }
      .ring-wrap {
        position: relative;
        width: 76px;
        height: 76px;
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
      .avg-chip {
        display: flex;
        align-items: center;
        gap: 6px;
        background: var(--divider-color);
        border-radius: 9px;
        padding: 9px 12px;
        font-size: 0.78rem;
        color: var(--secondary-text-color);
      }
      .avg-chip ha-icon {
        --mdc-icon-size: 14px;
        flex: none;
      }
      .avg-chip.up {
        color: var(--sc-good);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-steps-today-card": SuuntoStepsTodayCard;
  }
}
