import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig, SuuntoHass } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { formatRelative } from "./utils/format";
import { t, type TranslationKey } from "./utils/localize";
import { computeAchievementGroups, computePrRows, type Badge, type PrEntry } from "./utils/achievements";

function categoryHeading(hass: SuuntoHass | undefined, key: TranslationKey): TemplateResult {
  return html`<div class="cat">${t(hass, key)}</div>`;
}

@customElement("suunto-achievements-card")
export class SuuntoAchievementsCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-achievements-card" };
  }

  public setConfig(config: SuuntoCardConfig): void {
    this._config = config;
    this._configuredDeviceId = config.device_id;
  }

  public getCardSize(): number {
    return 6;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) return nothing;
    this._syncTheme();

    const resolved = this._resolveEntities();
    if ("error" in resolved) return resolved.error;
    const { map } = resolved;
    const hass = this.hass;

    const computed = computeAchievementGroups(hass, map);
    if (!computed) {
      return this._message(
        "mdi:trophy-outline",
        t(hass, "empty.achievements.title"),
        t(hass, "empty.achievements.subtitle")
      );
    }
    const { groups, allBadges, unlockedCount } = computed;
    const prRows = computePrRows(hass, map);

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:trophy-outline"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.achievements.title")}</div>
            <div class="subtitle">${t(hass, "card.achievements.subtitle", { unlocked: unlockedCount, total: allBadges.length })}</div>
          </div>
        </div>

        <div class="ach-list">
          ${groups.map((g) =>
            g.badges.length
              ? html`
                  ${categoryHeading(hass, g.headingKey)}
                  ${g.badges.map((b) => this._badgeRow(hass, b))}
                `
              : nothing
          )}
          ${prRows.some((r) => r.entry)
            ? html`
                <div class="cat">${t(hass, "achievements.category.records")}</div>
                ${prRows
                  .filter((r) => r.entry)
                  .map((r) => this._recordRow(hass, r.icon, r.labelKey, r.entry as PrEntry, r.render))}
              `
            : nothing}
        </div>
      </ha-card>
    `;
  }

  private _badgeRow(hass: SuuntoHass, b: Badge): TemplateResult {
    const pct = Math.max(0, Math.min(100, (b.current / b.target) * 100));
    return html`
      <div class="arow ${b.unlocked ? "unlocked" : "locked"}">
        <div class="ic">${b.icon}</div>
        <div class="info">
          <div class="name">${t(hass, b.nameKey, b.nameVars)}</div>
          ${!b.unlocked
            ? html`
                <div class="prog-track"><div class="prog-fill" style="width:${pct}%"></div></div>
                <div class="prog-text">${b.format(b.current)} / ${b.format(b.target)}</div>
              `
            : nothing}
        </div>
        ${b.unlocked ? html`<div class="check">✓</div>` : nothing}
      </div>
    `;
  }

  private _recordRow(
    hass: SuuntoHass,
    icon: string,
    labelKey: TranslationKey,
    entry: PrEntry,
    render: (e: PrEntry) => string
  ): TemplateResult {
    const when = entry.start_time ? formatRelative(new Date(entry.start_time), hass.language) : undefined;
    return html`
      <div class="arow record">
        <div class="ic">${icon}</div>
        <div class="info">
          <div class="name">${t(hass, labelKey)}</div>
          <div class="prog-text">
            ${entry.activity ? `${entry.activity} · ` : ""}${when ?? ""}
          </div>
        </div>
        <div class="rec-value">${render(entry)}</div>
      </div>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .ach-list {
        max-height: 480px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
      }
      .cat {
        font-size: 0.62rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--secondary-text-color);
        padding: 12px 0 6px;
        border-top: 1px solid var(--divider-color);
        margin-top: 4px;
      }
      .cat:first-child {
        border-top: none;
        margin-top: 0;
        padding-top: 0;
      }
      .arow {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 7px 0;
      }
      .arow .ic {
        width: 28px;
        height: 28px;
        border-radius: 9px;
        flex: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
      }
      .arow.unlocked .ic,
      .arow.record .ic {
        background: var(--sc-amber-bg);
      }
      .arow.locked .ic {
        background: var(--sc-chip-bg);
        filter: grayscale(1);
        opacity: 0.55;
      }
      .arow .info {
        flex: 1;
        min-width: 0;
      }
      .arow .name {
        font-size: 0.8rem;
        font-weight: 600;
      }
      .arow.locked .name {
        color: var(--secondary-text-color);
      }
      .arow .prog-track {
        height: 4px;
        border-radius: 2px;
        background: var(--divider-color);
        margin-top: 4px;
        overflow: hidden;
      }
      .arow .prog-fill {
        height: 100%;
        border-radius: 2px;
        background: linear-gradient(90deg, var(--sc-pulse), var(--sc-amber));
      }
      .arow .prog-text {
        font-size: 0.63rem;
        color: var(--secondary-text-color);
        margin-top: 2px;
        font-variant-numeric: tabular-nums;
      }
      .arow .check {
        flex: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--sc-amber);
        color: var(--card-background-color);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.7rem;
        font-weight: 800;
      }
      .arow .rec-value {
        flex: none;
        font-size: 0.82rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-achievements-card": SuuntoAchievementsCard;
  }
}
