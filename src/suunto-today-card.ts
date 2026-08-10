import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

@customElement("suunto-today-card")
export class SuuntoTodayCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-today-card" };
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
    const get = (key: string) => (map[key] ? hass.states[map[key]] : undefined);

    const steps = get("daily_steps");
    const energy = get("daily_energy");
    const currentHr = get("current_hr");
    const workoutToday = get("workout_today");
    const isRecovering = get("is_recovering");

    if (!steps && !energy && !currentHr) {
      return this._message("mdi:pulse", t(hass, "empty.today.title"));
    }

    const hrValue =
      currentHr && !UNAVAILABLE_STATES.has(currentHr.state) ? Math.round(Number(currentHr.state)) : undefined;

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:pulse"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.today.title")}</div>
            <div class="subtitle">${t(hass, "card.today.subtitle")}</div>
          </div>
        </div>

        <div class="stats">
          ${steps && !UNAVAILABLE_STATES.has(steps.state)
            ? this._stat(Number(steps.state).toLocaleString(hass.language), "", t(hass, "stat.steps"))
            : nothing}
          ${energy && !UNAVAILABLE_STATES.has(energy.state)
            ? this._stat(
                Math.round(Number(energy.state)).toLocaleString(hass.language),
                "kcal",
                t(hass, "stat.energy")
              )
            : nothing}
          ${hrValue !== undefined
            ? html`
                <div class="stat hr">
                  <div class="stat-value">
                    <span class="live-dot"></span>${hrValue}<span class="unit">bpm</span>
                  </div>
                  <div class="stat-label">${t(hass, "stat.heart_rate")}</div>
                </div>
              `
            : nothing}
        </div>

        ${workoutToday?.state === "on" || isRecovering?.state === "on"
          ? html`
              <div class="footer">
                ${workoutToday?.state === "on"
                  ? html`<span class="chip accent"><ha-icon icon="mdi:calendar-check"></ha-icon>${t(hass, "chip.workout_today")}</span>`
                  : nothing}
                ${isRecovering?.state === "on"
                  ? html`<span class="chip"><ha-icon icon="mdi:bed-clock"></ha-icon>${t(hass, "chip.recovering")}</span>`
                  : nothing}
              </div>
            `
          : nothing}
      </ha-card>
    `;
  }

  private _stat(value: string, unit: string, label: string) {
    return html`
      <div class="stat">
        <div class="stat-value">${value}${unit ? html`<span class="unit">${unit}</span>` : nothing}</div>
        <div class="stat-label">${label}</div>
      </div>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .live-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--sc-pulse);
        display: inline-block;
        margin-right: 5px;
        animation: sc-pulse 2s ease-in-out infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .live-dot {
          animation: none;
        }
      }
      @keyframes sc-pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.25; }
      }
      .footer {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-today-card": SuuntoTodayCard;
  }
}
