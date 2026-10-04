import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { t, type TranslationKey } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

export const AI_SECTIONS = ["sleep", "recovery", "training", "activity"] as const;
export type AiSection = (typeof AI_SECTIONS)[number];

const SECTION_ICON: Record<AiSection, string> = {
  sleep: "mdi:power-sleep",
  recovery: "mdi:heart-pulse",
  training: "mdi:chart-line",
  activity: "mdi:walk",
};

/** Same semantic colours the rest of the family uses for good / neutral / warn / bad. */
const STATUS_COLOR: Record<string, { fg: string; bg: string }> = {
  good: { fg: "var(--sc-good)", bg: "var(--sc-good-bg)" },
  ok: { fg: "var(--sc-pulse)", bg: "var(--sc-pulse-bg)" },
  caution: { fg: "var(--sc-warn)", bg: "var(--sc-warn-bg)" },
  rest: { fg: "var(--sc-bad)", bg: "var(--sc-bad-bg)" },
};
const NO_STATUS = { fg: "var(--secondary-text-color)", bg: "var(--sc-chip-bg)" };

interface AiSectionData {
  status?: string | null;
  text?: string;
}

export interface SuuntoAiInsightCardConfig extends SuuntoCardConfig {
  /** Tab shown first. Default: "sleep". */
  section?: AiSection;
  /** Show only `section`, without the tab bar. Default: false. */
  single_section?: boolean;
}

/**
 * The daily AI review from ha-suunto 1.0.30's `ai_insight` sensor: headline
 * and overall status on top, then one tab per section (sleep, recovery,
 * training, activity), each with its own status dot, then the advice. Tabs
 * keep the card at a predictable height in a sections grid while every
 * section's status stays visible at a glance.
 */
@customElement("suunto-ai-insight-card")
export class SuuntoAiInsightCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoAiInsightCardConfig;
  @state() private _tab?: AiSection;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoAiInsightCardConfig {
    return { type: "custom:suunto-ai-insight-card" };
  }

  public setConfig(config: SuuntoAiInsightCardConfig): void {
    this._config = config;
    this._configuredDeviceId = config.device_id;
    this._tab = AI_SECTIONS.includes(config.section as AiSection) ? config.section : "sleep";
  }

  public getCardSize(): number {
    return 7;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) return nothing;
    this._syncTheme();

    const resolved = this._resolveEntities();
    if ("error" in resolved) return resolved.error;
    const hass = this.hass;
    const entityId = resolved.map["ai_insight"];
    const entity = entityId ? hass.states[entityId] : undefined;
    if (!entity) {
      return this._message("mdi:creation", t(hass, "empty.ai_insight.title"), t(hass, "empty.ai_insight.subtitle"));
    }
    const attrs = entity.attributes as Record<string, unknown>;
    const headline = UNAVAILABLE_STATES.has(entity.state) ? undefined : entity.state;
    if (!headline) {
      return this._message(
        "mdi:creation",
        t(hass, attrs.generating ? "ai_insight.generating" : "empty.ai_insight.waiting"),
        attrs.error ? String(attrs.error) : undefined
      );
    }

    const status = typeof attrs.status === "string" ? attrs.status : undefined;
    const sections = (attrs.sections ?? {}) as Partial<Record<AiSection, AiSectionData>>;
    const advice = Array.isArray(attrs.advice) ? (attrs.advice as string[]) : [];
    const warning = typeof attrs.warning === "string" && attrs.warning ? attrs.warning : undefined;
    const summary = typeof attrs.summary === "string" && attrs.summary ? attrs.summary : undefined;
    const hasSections = Object.keys(sections).length > 0;
    const single = this._config.single_section === true;
    const tab = this._tab ?? "sleep";
    const overall = (status && STATUS_COLOR[status]) || undefined;

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon=${single ? SECTION_ICON[tab] : "mdi:creation"}></ha-icon></div>
          <div class="title-block">
            <div class="title">
              ${single
                ? t(hass, `ai_insight.section_full.${tab}` as TranslationKey)
                : t(hass, "card.ai_insight.title")}
            </div>
            <div class="subtitle">${this._subtitle(attrs)}</div>
          </div>
          ${!single && overall
            ? html`<span class="pill" style="color:${overall.fg};background:${overall.bg}"
                >${t(hass, `ai_insight.status.${status}` as TranslationKey)}</span
              >`
            : nothing}
        </div>
        ${single ? nothing : html`<div class="headline">${headline}</div>`}
        ${warning && !single
          ? html`<div class="warning"><ha-icon icon="mdi:alert"></ha-icon><div>${warning}</div></div>`
          : nothing}
        ${hasSections
          ? html`
              ${single ? nothing : this._tabs(sections, tab)}
              ${this._panel(tab, sections[tab], single)}
            `
          : summary
            ? html`<div class="prose">${this._paragraphs(summary)}</div>`
            : nothing}
        ${advice.length && !single
          ? html`
              <div class="advice">
                <div class="label">${t(hass, "ai_insight.advice")}</div>
                <ol>
                  ${advice.map((item) => html`<li>${item}</li>`)}
                </ol>
              </div>
            `
          : nothing}
        <div class="foot">
          <span>${attrs.generating ? t(hass, "ai_insight.generating") : ""}</span>
          <span>${t(hass, "ai_insight.disclaimer")}</span>
        </div>
      </ha-card>
    `;
  }

  private _subtitle(attrs: Record<string, unknown>): string {
    const hass = this.hass!;
    const parts: string[] = [];
    const generated = typeof attrs.generated_at === "string" ? new Date(attrs.generated_at) : undefined;
    if (generated && !Number.isNaN(generated.getTime())) {
      const sameDay = generated.toDateString() === new Date().toDateString();
      parts.push(
        new Intl.DateTimeFormat(hass.language, {
          ...(sameDay ? {} : { day: "numeric", month: "short" }),
          hour: "2-digit",
          minute: "2-digit",
        }).format(generated)
      );
    }
    if (typeof attrs.sleep_night === "string" && !attrs.sleep_stale) {
      const night = new Date(`${attrs.sleep_night}T12:00:00`);
      if (!Number.isNaN(night.getTime())) {
        const next = new Date(night.getTime() + 86_400_000);
        const fmt = new Intl.DateTimeFormat(hass.language, { day: "numeric", month: "numeric" });
        parts.push(t(hass, "ai_insight.night", { night: `${fmt.format(night)}-${fmt.format(next)}` }));
      }
    } else if (attrs.sleep_stale) {
      parts.push(t(hass, "ai_insight.no_night"));
    }
    return parts.join(" · ");
  }

  private _tabs(sections: Partial<Record<AiSection, AiSectionData>>, active: AiSection): TemplateResult {
    const hass = this.hass!;
    return html`
      <div class="tabs" role="tablist">
        ${AI_SECTIONS.map((key) => {
          const color = (sections[key]?.status && STATUS_COLOR[sections[key]!.status!]) || NO_STATUS;
          return html`
            <button
              class="tab"
              type="button"
              role="tab"
              aria-selected=${key === active ? "true" : "false"}
              @click=${() => (this._tab = key)}
            >
              <span class="dot" style="background:${color.fg}"></span>
              <span class="tab-label">${t(hass, `ai_insight.section.${key}` as TranslationKey)}</span>
            </button>
          `;
        })}
      </div>
    `;
  }

  private _panel(key: AiSection, data: AiSectionData | undefined, single: boolean): TemplateResult {
    const hass = this.hass!;
    if (!data?.text) {
      return html`<div class="panel"><div class="empty">${t(hass, "ai_insight.no_section")}</div></div>`;
    }
    const color = (data.status && STATUS_COLOR[data.status]) || NO_STATUS;
    return html`
      <div class="panel" role="tabpanel">
        <div class="sec-head">
          ${single
            ? nothing
            : html`<div class="sec-icon" style="color:${color.fg};background:${color.bg}">
                <ha-icon icon=${SECTION_ICON[key]}></ha-icon>
              </div>`}
          <span class="sec-name">${single ? "" : t(hass, `ai_insight.section_full.${key}` as TranslationKey)}</span>
          ${data.status
            ? html`<span class="sec-status" style="color:${color.fg}"
                >${t(hass, `ai_insight.status.${data.status}` as TranslationKey)}</span
              >`
            : nothing}
        </div>
        <div class="prose">${this._paragraphs(data.text)}</div>
      </div>
    `;
  }

  private _paragraphs(text: string): TemplateResult[] {
    return text
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean)
      .map((p) => html`<p>${p}</p>`);
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .pill {
        font-size: 0.74rem;
        font-weight: 700;
        padding: 3px 10px;
        border-radius: 999px;
        white-space: nowrap;
      }
      .headline {
        font-size: 1.05rem;
        line-height: 1.45;
        font-weight: 500;
        text-wrap: pretty;
      }
      .warning {
        display: flex;
        gap: 10px;
        align-items: flex-start;
        background: var(--sc-bad-bg);
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 0.88rem;
        line-height: 1.45;
      }
      .warning ha-icon {
        color: var(--sc-bad);
        --mdc-icon-size: 18px;
        flex: none;
      }
      .tabs {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 4px;
        background: var(--sc-chip-bg);
        border-radius: 10px;
        padding: 4px;
      }
      .tab {
        font: inherit;
        font-size: 0.8rem;
        font-weight: 500;
        color: var(--secondary-text-color);
        background: none;
        border: 0;
        border-radius: 7px;
        padding: 7px 4px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        min-width: 0;
      }
      .tab:focus-visible {
        outline: 2px solid var(--sc-pulse);
        outline-offset: 1px;
      }
      .tab[aria-selected="true"] {
        background: var(--card-background-color, var(--ha-card-background, #fff));
        color: var(--primary-text-color);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
      }
      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }
      .tab-label {
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .panel {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .sec-head {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .sec-icon {
        width: 28px;
        height: 28px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: none;
      }
      .sec-icon ha-icon {
        --mdc-icon-size: 16px;
      }
      .sec-name {
        flex: 1;
        font-weight: 600;
        font-size: 0.92rem;
      }
      .sec-status {
        font-size: 0.74rem;
        font-weight: 700;
      }
      .prose {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .prose p {
        margin: 0;
        font-size: 0.88rem;
        line-height: 1.55;
        text-wrap: pretty;
      }
      .empty {
        font-size: 0.88rem;
        color: var(--secondary-text-color);
      }
      .advice .label {
        font-size: 0.74rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--secondary-text-color);
        font-weight: 700;
        margin-bottom: 6px;
      }
      .advice ol {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 6px;
        counter-reset: advice;
      }
      .advice li {
        counter-increment: advice;
        display: flex;
        gap: 10px;
        font-size: 0.88rem;
        line-height: 1.45;
      }
      .advice li::before {
        content: counter(advice);
        flex: none;
        width: 20px;
        height: 20px;
        border-radius: 6px;
        background: var(--sc-amber-bg);
        color: var(--sc-amber);
        font-size: 0.72rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1px;
      }
      .foot {
        font-size: 0.74rem;
        color: var(--secondary-text-color);
        border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        padding-top: 10px;
        display: flex;
        justify-content: space-between;
        gap: 8px;
        flex-wrap: wrap;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-ai-insight-card": SuuntoAiInsightCard;
  }
}
