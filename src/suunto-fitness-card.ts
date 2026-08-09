import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { formatRelative } from "./utils/format";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

@customElement("suunto-fitness-card")
export class SuuntoFitnessCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-fitness-card" };
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

    const vo2max = get("vo2max");
    if (!vo2max || UNAVAILABLE_STATES.has(vo2max.state)) {
      return this._message("mdi:lungs", t(hass, "empty.fitness.title"), t(hass, "empty.fitness.subtitle"));
    }

    const estimatedVo2max = get("estimated_vo2max");
    const fitnessAge = get("fitness_age");
    const measuredAt = vo2max.attributes.measured_at;
    const measuredFrom = vo2max.attributes.measured_from;

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:lungs"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.fitness.title")}</div>
            <div class="subtitle">
              ${measuredAt
                ? t(hass, "fitness.measured", {
                    time: formatRelative(new Date(measuredAt), hass.language),
                    activity: measuredFrom ?? "",
                  })
                : nothing}
            </div>
          </div>
        </div>

        <div class="stats three">
          ${this._stat(Number(vo2max.state).toFixed(1), "ml/kg/min", t(hass, "stat.vo2max"))}
          ${estimatedVo2max && !UNAVAILABLE_STATES.has(estimatedVo2max.state)
            ? this._stat(Number(estimatedVo2max.state).toFixed(1), "ml/kg/min", t(hass, "stat.estimated_vo2max"))
            : nothing}
          ${fitnessAge && !UNAVAILABLE_STATES.has(fitnessAge.state)
            ? this._stat(String(Math.round(Number(fitnessAge.state))), "", t(hass, "stat.fitness_age"))
            : nothing}
        </div>
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
      .stats.three {
        grid-template-columns: repeat(3, 1fr);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-fitness-card": SuuntoFitnessCard;
  }
}
