import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { progressRing } from "./utils/render-helpers";
import { formatDuration } from "./utils/format";
import { t } from "./utils/localize";
import type { SuuntoHass } from "./utils/types";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

/** Presentation-only banding for the 0-100% recovery balance. */
function balanceBand(hass: SuuntoHass | undefined, pct: number): { colorVar: string; label: string } {
  if (pct >= 60) return { colorVar: "var(--sc-good)", label: t(hass, "band.recovery.well") };
  if (pct >= 30) return { colorVar: "var(--sc-warn)", label: t(hass, "band.recovery.partial") };
  return { colorVar: "var(--sc-bad)", label: t(hass, "band.recovery.low") };
}

@customElement("suunto-recovery-card")
export class SuuntoRecoveryCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-recovery-card" };
  }

  public setConfig(config: SuuntoCardConfig): void {
    this._config = config;
    this._configuredDeviceId = config.device_id;
  }

  public getCardSize(): number {
    return 3;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) return nothing;
    this._syncTheme();

    const resolved = this._resolveEntities();
    if ("error" in resolved) return resolved.error;
    const { map } = resolved;
    const hass = this.hass;
    const get = (key: string) => (map[key] ? hass.states[map[key]] : undefined);

    const balance = get("recovery_balance");
    if (!balance || UNAVAILABLE_STATES.has(balance.state)) {
      return this._message("mdi:battery-heart-variant", t(hass, "empty.recovery.title"));
    }

    const isRecovering = get("is_recovering");
    const recoveryUntil = get("recovery_until");
    const recoveryTime = get("recovery_time");
    const stressState = get("stress_state");
    const workoutToday = get("workout_today");

    const balanceValue = Number(balance.state);
    const band = balanceBand(hass, balanceValue);

    const recovering = isRecovering?.state === "on";
    let statusText = t(hass, "band.recovery.fully");
    if (recovering && recoveryUntil && !UNAVAILABLE_STATES.has(recoveryUntil.state)) {
      const remainingMs = new Date(recoveryUntil.state).getTime() - Date.now();
      if (remainingMs > 0) {
        const d = formatDuration(remainingMs / 60000);
        statusText = t(hass, "band.recovery.recovering", { time: `${d.value} ${d.unit}` });
      }
    }

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:battery-heart-variant"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.recovery.title")}</div>
            <div class="subtitle">${statusText}</div>
          </div>
        </div>

        <div class="readiness-row">
          <div class="ring-wrap">
            ${progressRing(balanceValue, band.colorVar, 60, 6)}
            <div class="ring-value" style="color:${band.colorVar}">${Math.round(balanceValue)}</div>
          </div>
          <div class="readiness-text">
            <div class="readiness-label">${t(hass, "stat.recovery_balance")}</div>
            <div class="readiness-band" style="color:${band.colorVar}">${band.label}</div>
          </div>
        </div>

        ${stressState || recoveryTime
          ? html`
              <div class="stats">
                ${stressState && !UNAVAILABLE_STATES.has(stressState.state)
                  ? this._stat(stressState.state, "", t(hass, "stat.stress_level"))
                  : nothing}
                ${recoveryTime && !UNAVAILABLE_STATES.has(recoveryTime.state)
                  ? this._stat(Number(recoveryTime.state).toFixed(1), "h", t(hass, "stat.recovery_window"))
                  : nothing}
              </div>
            `
          : nothing}
        ${workoutToday?.state === "on"
          ? html`<div class="footer"><span class="chip accent"><ha-icon icon="mdi:calendar-check"></ha-icon>${t(hass, "chip.workout_logged_today")}</span></div>`
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
      .readiness-row {
        display: flex;
        align-items: center;
        gap: 14px;
      }
      .ring-wrap {
        position: relative;
        width: 60px;
        height: 60px;
        flex: none;
      }
      .ring-value {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.05rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
      .readiness-label {
        font-size: 0.78rem;
        color: var(--secondary-text-color);
      }
      .readiness-band {
        font-size: 1.05rem;
        font-weight: 600;
      }
      .footer {
        display: flex;
        gap: 8px;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-recovery-card": SuuntoRecoveryCard;
  }
}
