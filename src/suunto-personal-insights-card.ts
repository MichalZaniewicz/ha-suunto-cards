import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { t } from "./utils/localize";
import {
  insightCondition,
  insightDelta,
  insightIcon,
  insightValue,
  readInsights,
} from "./utils/patterns";

/**
 * "What works for you": the clearest with/without differences in HRV,
 * resting HR and sleep length from ha-suunto 1.0.32's `personal_insights`
 * sensor. The sensor's own sentence is only full in English and Polish, so
 * the card words each finding itself from the structured fields, in all 8
 * card languages.
 */
@customElement("suunto-personal-insights-card")
export class SuuntoPersonalInsightsCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-personal-insights-card" };
  }

  public setConfig(config: SuuntoCardConfig): void {
    this._config = config;
    this._configuredDeviceId = config.device_id;
  }

  public getCardSize(): number {
    return 5;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) return nothing;
    this._syncTheme();

    const resolved = this._resolveEntities();
    if ("error" in resolved) return resolved.error;
    const { map } = resolved;
    const hass = this.hass;

    const entity = map["personal_insights"] ? hass.states[map["personal_insights"]] : undefined;
    // The state is unknown when nothing clears the bar, so read the attribute.
    const insights = this._cap(readInsights(entity?.attributes.insights));
    if (!insights.length) {
      return this._message(
        "mdi:lightbulb-on-outline",
        t(hass, "empty.personal_insights.title"),
        t(hass, "empty.personal_insights.subtitle")
      );
    }
    const nights = Number(entity?.attributes.nights) || 0;

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:lightbulb-on-outline")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(t(hass, "card.personal_insights.title"))}</div>
            <div class="subtitle">${t(hass, "personal_insights.subtitle", { nights })}</div>
          </div>
        </div>

        <div class="list">
          ${insights.map((insight) => {
            const max = Math.max(insight.with, insight.without) || 1;
            const tone = insight.favorable ? "good" : "bad";
            return html`
              <div class="row">
                <div class="icon-badge tiny pulse"><ha-icon .icon=${insightIcon(insight)}></ha-icon></div>
                <div class="cond">${insightCondition(hass, insight)}</div>
                <span class="chip ${tone}">${insightDelta(hass, insight)}</span>
                <div class="vals">
                  <div class="cmp">
                    <em>${t(hass, "personal_insights.these_nights")}</em>
                    <div class="track"><b style="width:${(insight.with / max) * 100}%;background:var(--sc-${tone})"></b></div>
                    <span>${insightValue(insight, insight.with)}</span>
                  </div>
                  <div class="cmp">
                    <em>${t(hass, "personal_insights.the_rest")}</em>
                    <div class="track"><b class="rest" style="width:${(insight.without / max) * 100}%"></b></div>
                    <span>${insightValue(insight, insight.without)}</span>
                  </div>
                  <div class="count">
                    ${t(hass, "personal_insights.nights_count", { with: insight.n_with, without: insight.n_without })}
                  </div>
                </div>
              </div>
            `;
          })}
        </div>

        <div class="foot">${t(hass, "personal_insights.disclaimer")}</div>
      </ha-card>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .list {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }
      .row {
        display: grid;
        grid-template-columns: 24px 1fr auto;
        gap: 4px 10px;
        align-items: start;
      }
      .cond {
        font-size: 0.84rem;
        font-weight: 500;
        line-height: 1.3;
        min-width: 0;
      }
      .vals {
        grid-column: 2 / 4;
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
      .cmp {
        display: grid;
        grid-template-columns: 74px 1fr 52px;
        align-items: center;
        gap: 8px;
        font-size: 0.7rem;
        color: var(--secondary-text-color);
      }
      .cmp em {
        font-style: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .cmp .track {
        min-width: 0;
      }
      .cmp b {
        display: block;
        height: 6px;
        border-radius: 3px;
      }
      .cmp b.rest {
        background: var(--secondary-text-color);
        opacity: 0.45;
      }
      .cmp span {
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        text-align: right;
      }
      .count {
        font-size: 0.64rem;
        color: var(--secondary-text-color);
        opacity: 0.8;
      }
      .foot {
        font-size: 0.7rem;
        color: var(--secondary-text-color);
        border-top: 1px solid var(--divider-color);
        padding-top: 10px;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-personal-insights-card": SuuntoPersonalInsightsCard;
  }
}
