import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { t } from "./utils/localize";
import { insightLine, readInsights } from "./utils/patterns";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

/** Same colours the Today card's suggestion chip uses, so the two agree. */
const SUGGESTION_COLOR: Record<string, string> = {
  hard: "var(--sc-good)",
  moderate: "var(--sc-pulse)",
  easy: "var(--sc-warn)",
  rest: "var(--sc-bad)",
};

/**
 * The one-sentence summary from ha-suunto 1.0.29's `daily_brief` sensor. The
 * integration writes it as "<facts>: <advice>.", so the advice after the last
 * colon is picked out in the colour of today's training suggestion.
 */
@customElement("suunto-daily-brief-card")
export class SuuntoDailyBriefCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-daily-brief-card" };
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
    const brief = map["daily_brief"] ? hass.states[map["daily_brief"]] : undefined;
    if (!brief || UNAVAILABLE_STATES.has(brief.state)) {
      return this._message("mdi:text-box-check-outline", t(hass, "empty.daily_brief.title"));
    }

    const suggestion = map["training_suggestion"] ? hass.states[map["training_suggestion"]]?.state : undefined;
    const colorVar = suggestion ? SUGGESTION_COLOR[suggestion] : undefined;
    const split = brief.state.lastIndexOf(": ");
    const facts = split > 0 ? brief.state.slice(0, split + 1) : brief.state;
    const advice = split > 0 ? brief.state.slice(split + 2) : "";
    // Optional (show_insight): the strongest personal_insights finding.
    const insight =
      this._config.show_insight && map["personal_insights"]
        ? readInsights(hass.states[map["personal_insights"]]?.attributes.insights)[0]
        : undefined;

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:text-box-check-outline"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.daily_brief.title")}</div>
            <div class="subtitle">
              ${new Intl.DateTimeFormat(hass.language, { weekday: "long", day: "numeric", month: "long" }).format(
                new Date()
              )}
            </div>
          </div>
        </div>
        <div class="brief">
          ${facts}
          ${advice ? html`<span class="advice" style=${colorVar ? `color:${colorVar}` : ""}>${advice}</span>` : nothing}
        </div>
        ${insight
          ? html`
              <div class="pattern">
                <ha-icon icon="mdi:lightbulb-on-outline"></ha-icon>
                <div>
                  <div class="pattern-label">${t(hass, "daily_brief.your_pattern")}</div>
                  <div>${insightLine(hass, insight)}</div>
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
      .brief {
        font-size: 1.05rem;
        line-height: 1.45;
        font-weight: 500;
        text-wrap: pretty;
      }
      .advice {
        font-weight: 700;
      }
      .pattern {
        display: flex;
        gap: 8px;
        align-items: flex-start;
        font-size: 0.82rem;
        line-height: 1.4;
        color: var(--secondary-text-color);
        border-top: 1px solid var(--divider-color);
        padding-top: 10px;
      }
      .pattern ha-icon {
        --mdc-icon-size: 18px;
        color: var(--sc-amber);
        flex: none;
      }
      .pattern-label {
        font-size: 0.7rem;
        font-weight: 600;
        color: var(--sc-amber);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-daily-brief-card": SuuntoDailyBriefCard;
  }
}
