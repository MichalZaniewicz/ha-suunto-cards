import { html, css, nothing, type PropertyValues, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoStepsGoalCardConfig, SuuntoHass } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { barChart, type Bar, type SparklinePoint } from "./utils/render-helpers";
import { fetchStatisticsSeries, dailyTotalsFromCumulative } from "./utils/format";
import { t } from "./utils/localize";
import { DEFAULT_STEPS_GOAL } from "./suunto-steps-today-card";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);
const HISTORY_DAYS = 14;
const REFETCH_INTERVAL_MS = 10 * 60 * 1000;

/**
 * Daily steps over 14 days as a bar chart, each bar colored by whether that
 * day hit the same `goal_steps` target suunto-steps-today-card uses - reads
 * "how many days did I make it" at a glance instead of just the shape a
 * plain trend line already shows in suunto-activity-trends-card.
 */
@customElement("suunto-steps-trend-card")
export class SuuntoStepsTrendCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoStepsGoalCardConfig;
  @state() private _history: SparklinePoint[] = [];

  private _historyKey?: string;
  private _historyFetchedAt = 0;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-steps-goal-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoStepsGoalCardConfig {
    return { type: "custom:suunto-steps-trend-card", goal_steps: DEFAULT_STEPS_GOAL };
  }

  public setConfig(config: SuuntoStepsGoalCardConfig): void {
    this._config = config;
    this._configuredDeviceId = config.device_id;
  }

  public getCardSize(): number {
    return 4;
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
      this._history = dailyTotalsFromCumulative(
        await fetchStatisticsSeries(this.hass as SuuntoHass, "suunto_app:steps", HISTORY_DAYS * 24, "sum")
      );
    } catch {
      // Statistics are best-effort - the card still works, just without the chart.
      this._history = [];
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
      return this._message("mdi:chart-bar", t(hass, "empty.steps_trend.title"));
    }

    const goal = this._config.goal_steps ?? DEFAULT_STEPS_GOAL;
    const bars: Bar[] = this._history.map((p) => ({
      value: p.v,
      colorVar: p.v >= goal ? "var(--sc-good)" : "var(--sc-amber)",
      label: `${new Date(p.t).toLocaleDateString(hass.language, { month: "short", day: "numeric" })} · ${Math.round(p.v).toLocaleString(hass.language)}`,
    }));
    const daysAtGoal = this._history.filter((p) => p.v >= goal).length;
    const average = this._history.length
      ? this._history.reduce((sum, p) => sum + p.v, 0) / this._history.length
      : 0;

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:chart-bar"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.steps_trend.title")}</div>
            <div class="subtitle">${t(hass, "card.steps_trend.subtitle")}</div>
          </div>
        </div>

        ${barChart(bars, "var(--sc-amber)", 300, 80)}

        <div class="chart-legend">
          <span><i class="dot" style="background:var(--sc-good)"></i>${t(hass, "steps_trend.legend_met")}</span>
          <span><i class="dot" style="background:var(--sc-amber)"></i>${t(hass, "steps_trend.legend_below")}</span>
        </div>

        <div class="stats">
          ${this._stat(Math.round(Number(stepsEntity.state)).toLocaleString(hass.language), t(hass, "stat.steps"))}
          ${this._stat(Math.round(average).toLocaleString(hass.language), t(hass, "stat.average"))}
          ${this._stat(String(daysAtGoal), t(hass, "steps_trend.days_at_goal"))}
        </div>
      </ha-card>
    `;
  }

  private _stat(value: string, label: string) {
    return html`
      <div class="stat">
        <div class="stat-value">${value}</div>
        <div class="stat-label">${label}</div>
      </div>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .chart-legend {
        display: flex;
        align-items: center;
        gap: 14px;
        font-size: 0.68rem;
        color: var(--secondary-text-color);
      }
      .chart-legend .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        display: inline-block;
        margin-right: 4px;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-steps-trend-card": SuuntoStepsTrendCard;
  }
}
