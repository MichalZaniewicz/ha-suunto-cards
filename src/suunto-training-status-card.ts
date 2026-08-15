import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { progressRing } from "./utils/render-helpers";
import { t } from "./utils/localize";
import type { SuuntoHass } from "./utils/types";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

/** Presentation-only banding for the heuristic readiness score - not a Suunto scale. */
function readinessBand(hass: SuuntoHass | undefined, pct: number): { colorVar: string; label: string } {
  if (pct >= 70) return { colorVar: "var(--sc-good)", label: t(hass, "band.readiness.great") };
  if (pct >= 40) return { colorVar: "var(--sc-warn)", label: t(hass, "band.readiness.fair") };
  return { colorVar: "var(--sc-bad)", label: t(hass, "band.readiness.low") };
}

/** Presentation-only banding for the training_suggestion ENUM - not a Suunto scale. */
function suggestionBand(hass: SuuntoHass | undefined, value: string): { colorVar: string; label: string; icon: string } {
  switch (value) {
    case "hard":
      return { colorVar: "var(--sc-good)", label: t(hass, "band.suggestion.hard"), icon: "mdi:fire" };
    case "moderate":
      return { colorVar: "var(--sc-pulse)", label: t(hass, "band.suggestion.moderate"), icon: "mdi:walk" };
    case "easy":
      return { colorVar: "var(--sc-warn)", label: t(hass, "band.suggestion.easy"), icon: "mdi:leaf" };
    default:
      return { colorVar: "var(--sc-bad)", label: t(hass, "band.suggestion.rest"), icon: "mdi:bed-clock" };
  }
}

@customElement("suunto-training-status-card")
export class SuuntoTrainingStatusCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-training-status-card" };
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

    const readiness = get("readiness");
    const suggestion = get("training_suggestion");
    const unusualRecovery = get("unusual_recovery");

    const readinessValue =
      readiness && !UNAVAILABLE_STATES.has(readiness.state) ? Number(readiness.state) : undefined;
    const suggestionValue =
      suggestion && !UNAVAILABLE_STATES.has(suggestion.state) ? suggestion.state : undefined;

    if (readinessValue === undefined && suggestionValue === undefined) {
      return this._message(
        "mdi:compass-outline",
        t(hass, "empty.training_status.title"),
        t(hass, "empty.training_status.subtitle")
      );
    }

    const readinessBandValue = readinessValue !== undefined ? readinessBand(hass, readinessValue) : undefined;
    const suggestionBandValue = suggestionValue !== undefined ? suggestionBand(hass, suggestionValue) : undefined;
    const alert = unusualRecovery?.state === "on";

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:compass-outline"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.training_status.title")}</div>
            <div class="subtitle">${suggestionBandValue?.label ?? readinessBandValue?.label ?? ""}</div>
          </div>
        </div>

        ${alert
          ? html`<div class="alert"><ha-icon icon="mdi:shield-alert-outline"></ha-icon>${t(hass, "chip.unusual_recovery")}</div>`
          : nothing}

        ${suggestionBandValue
          ? html`
              <div class="suggestion-row">
                <div class="suggestion-badge" style="background:${suggestionBandValue.colorVar}22; color:${suggestionBandValue.colorVar}">
                  <ha-icon icon="${suggestionBandValue.icon}"></ha-icon>
                </div>
                <div class="suggestion-text">
                  <div class="suggestion-label">${t(hass, "stat.training_suggestion")}</div>
                  <div class="suggestion-value" style="color:${suggestionBandValue.colorVar}">${suggestionBandValue.label}</div>
                </div>
              </div>
            `
          : nothing}

        ${readinessValue !== undefined && readinessBandValue
          ? html`
              <div class="readiness-row">
                <div class="ring-wrap">
                  ${progressRing(readinessValue, readinessBandValue.colorVar, 52, 6)}
                  <div class="ring-value" style="color:${readinessBandValue.colorVar}">${Math.round(readinessValue)}</div>
                </div>
                <div class="readiness-text">
                  <div class="readiness-label">${t(hass, "stat.readiness")}</div>
                  <div class="readiness-band" style="color:${readinessBandValue.colorVar}">${readinessBandValue.label}</div>
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
      .alert {
        display: flex;
        align-items: center;
        gap: 8px;
        background: var(--sc-bad-bg);
        color: var(--sc-bad);
        border-radius: 10px;
        padding: 8px 12px;
        font-size: 0.8rem;
        font-weight: 600;
      }
      .suggestion-row {
        display: flex;
        align-items: center;
        gap: 14px;
      }
      .suggestion-badge {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: none;
      }
      .suggestion-badge ha-icon {
        --mdc-icon-size: 22px;
      }
      .suggestion-label {
        font-size: 0.78rem;
        color: var(--secondary-text-color);
      }
      .suggestion-value {
        font-size: 1.15rem;
        font-weight: 700;
      }
      .readiness-row {
        display: flex;
        align-items: center;
        gap: 14px;
      }
      .ring-wrap {
        position: relative;
        width: 52px;
        height: 52px;
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
      .readiness-label {
        font-size: 0.78rem;
        color: var(--secondary-text-color);
      }
      .readiness-band {
        font-size: 0.95rem;
        font-weight: 600;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-training-status-card": SuuntoTrainingStatusCard;
  }
}
