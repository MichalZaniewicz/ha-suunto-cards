import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { t, tPlural } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

/**
 * A "year in review" narrative card - same layout as the lifetime
 * suunto-story-card and its suunto-month-story-card sibling, reading
 * year_* sensors instead. See suunto-month-story-card's own comment for
 * why this is a separate card rather than one with a period toggle.
 */
@customElement("suunto-year-story-card")
export class SuuntoYearStoryCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-year-story-card" };
  }

  public setConfig(config: SuuntoCardConfig): void {
    this._config = config;
    this._configuredDeviceId = config.device_id;
  }

  public getCardSize(): number {
    return 4;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) return nothing;
    this._syncTheme();

    const resolved = this._resolveEntities();
    if ("error" in resolved) return resolved.error;
    const { map } = resolved;
    const hass = this.hass;
    const get = (key: string) => (map[key] ? hass.states[map[key]] : undefined);

    const distance = get("year_distance");
    if (!distance || UNAVAILABLE_STATES.has(distance.state)) {
      return this._message("mdi:calendar-star", t(hass, "empty.year_story.title"));
    }

    const time = get("year_time");
    const energy = get("year_energy");
    const workouts = get("year_workouts");
    const days = get("year_active_days");

    const mainActivity = workouts?.attributes.main_activity as string | undefined;
    const mainActivityWorkouts = workouts?.attributes.main_activity_workouts as number | undefined;
    const mainActivityPct = workouts?.attributes.main_activity_pct as number | undefined;

    const totalWorkouts = workouts && !UNAVAILABLE_STATES.has(workouts.state) ? Number(workouts.state) : undefined;

    const records = get("training_records_year");
    const streakDays =
      records && !UNAVAILABLE_STATES.has(records.state) ? Number(records.state) : undefined;

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:calendar-star"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.year_story.title")}</div>
            <div class="subtitle">${new Date().toLocaleDateString(hass.language, { year: "numeric" })}</div>
          </div>
        </div>

        <div class="story-tiles">
          <div class="story-tile">
            <div class="num">${Number(distance.state).toLocaleString(hass.language)}<span class="unit">km</span></div>
            <div class="lab">${t(hass, "stat.distance")}</div>
          </div>
          ${time && !UNAVAILABLE_STATES.has(time.state)
            ? html`
                <div class="story-tile">
                  <div class="num">${Math.round(Number(time.state)).toLocaleString(hass.language)}<span class="unit">h</span></div>
                  <div class="lab">${t(hass, "stat.time")}</div>
                </div>
              `
            : nothing}
          ${energy && !UNAVAILABLE_STATES.has(energy.state)
            ? html`
                <div class="story-tile">
                  <div class="num">${Math.round(Number(energy.state)).toLocaleString(hass.language)}<span class="unit">kcal</span></div>
                  <div class="lab">${t(hass, "stat.energy")}</div>
                </div>
              `
            : nothing}
          ${totalWorkouts !== undefined
            ? html`
                <div class="story-tile">
                  <div class="num">${totalWorkouts.toLocaleString(hass.language)}</div>
                  <div class="lab">${t(hass, "stat.workouts")}</div>
                </div>
              `
            : nothing}
          ${days && !UNAVAILABLE_STATES.has(days.state)
            ? html`
                <div class="story-tile">
                  <div class="num">${Number(days.state).toLocaleString(hass.language)}</div>
                  <div class="lab">${t(hass, "stat.active_days")}</div>
                </div>
              `
            : nothing}
        </div>

        ${mainActivity
          ? html`
              <div class="story-block">
                <ha-icon icon="mdi:share-variant"></ha-icon>
                <div>
                  <div class="t1">${t(hass, "story.top_activity", { activity: mainActivity })}</div>
                  <div class="t2">
                    ${mainActivityWorkouts !== undefined && mainActivityPct !== undefined
                      ? t(hass, "story.share_year", { count: mainActivityWorkouts, pct: mainActivityPct })
                      : nothing}
                  </div>
                </div>
              </div>
            `
          : nothing}
        ${streakDays !== undefined
          ? html`
              <div class="story-block">
                <ha-icon icon="mdi:trophy-variant"></ha-icon>
                <div>
                  <div class="t1">
                    ${t(hass, "records.streak")}:
                    ${tPlural(hass, streakDays, "records.streak_days_one", "records.streak_days_other", {
                      count: streakDays,
                    })}
                  </div>
                  <div class="t2">${t(hass, "story.record_subtitle_year")}</div>
                </div>
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
      .story-tiles {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
      /* A tile count that renders odd (some tiles hide when a sensor is
         unavailable) would otherwise leave a lone tile in its own half-empty
         row - span it full-width instead, whichever tile ends up last. */
      .story-tile:nth-last-child(1):nth-child(odd) {
        grid-column: 1 / -1;
      }
      .story-tile {
        background: var(--divider-color);
        border-radius: 10px;
        padding: 12px 14px;
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
      .story-tile .num {
        font-size: 1.4rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        line-height: 1;
        display: flex;
        align-items: baseline;
        gap: 3px;
      }
      .story-tile .unit {
        font-size: 0.68rem;
        font-weight: 500;
        color: var(--secondary-text-color);
      }
      .story-tile .lab {
        font-size: 0.66rem;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }
      .story-block {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        background: var(--divider-color);
        border-radius: 9px;
      }
      .story-block ha-icon {
        color: var(--sc-amber);
        flex: none;
        --mdc-icon-size: 18px;
      }
      .story-block .t1 {
        font-size: 0.82rem;
        font-weight: 600;
      }
      .story-block .t2 {
        font-size: 0.72rem;
        color: var(--secondary-text-color);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-year-story-card": SuuntoYearStoryCard;
  }
}
