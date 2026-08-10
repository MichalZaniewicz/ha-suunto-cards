import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { tPlural } from "./utils/localize";
import { t } from "./utils/localize";

interface RecentWorkout {
  start: string | null;
}

const DOTS = 14;

/**
 * Consecutive-days-active streak, computed client-side from
 * `workouts_recent` (up to the last 15 workouts - there's no full-history
 * feed available). A gap in that list undercounts a genuinely longer streak
 * rather than over-counting, so this stays honest even though it's capped.
 */
function computeStreak(workouts: RecentWorkout[]): { streak: number; activeDates: Set<string> } {
  const activeDates = new Set(
    workouts
      .map((w) => w.start)
      .filter((s): s is string => Boolean(s))
      .map((s) => new Date(s).toDateString())
  );

  const cursor = new Date();
  if (!activeDates.has(cursor.toDateString())) {
    cursor.setDate(cursor.getDate() - 1);
  }
  let streak = 0;
  while (activeDates.has(cursor.toDateString())) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return { streak, activeDates };
}

@customElement("suunto-streak-card")
export class SuuntoStreakCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-streak-card" };
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
    const entityId = map["workouts_recent"];
    const entity = entityId ? hass.states[entityId] : undefined;
    const workouts: RecentWorkout[] = entity?.attributes.workouts ?? [];

    if (!entity || workouts.length === 0) {
      return this._message("mdi:fire", t(hass, "empty.streak.title"));
    }

    const { streak, activeDates } = computeStreak(workouts);

    const dots: TemplateResult[] = [];
    let windowCount = 0;
    const cursor = new Date();
    cursor.setDate(cursor.getDate() - (DOTS - 1));
    for (let i = 0; i < DOTS; i++) {
      const active = activeDates.has(cursor.toDateString());
      if (active) windowCount++;
      dots.push(
        html`<span
          class="dot"
          style="background:${active ? "var(--sc-amber)" : "var(--divider-color)"}"
        ></span>`
      );
      cursor.setDate(cursor.getDate() + 1);
    }

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:fire"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.streak.title")}</div>
            <div class="subtitle">${t(hass, "card.streak.subtitle")}</div>
          </div>
        </div>

        <div class="streak-row">
          <div class="streak-value">${streak}</div>
          <div class="streak-label">
            ${streak > 0
              ? tPlural(hass, streak, "streak.days_one", "streak.days_other")
              : t(hass, "streak.none")}
          </div>
        </div>

        <div class="week-dots">${dots}</div>

        <div class="footer">
          <span class="chip">
            <ha-icon icon="mdi:calendar-check"></ha-icon>
            ${tPlural(hass, windowCount, "streak.window_count_one", "streak.window_count_other")}
          </span>
        </div>
      </ha-card>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .streak-row {
        display: flex;
        align-items: baseline;
        gap: 10px;
      }
      .streak-value {
        font-size: 2.1rem;
        font-weight: 700;
        line-height: 1;
        color: var(--sc-amber);
        font-variant-numeric: tabular-nums;
      }
      .streak-label {
        font-size: 0.85rem;
        color: var(--secondary-text-color);
      }
      .week-dots {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        display: block;
      }
      .footer {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-streak-card": SuuntoStreakCard;
  }
}
