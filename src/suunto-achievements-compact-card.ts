import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig, SuuntoHass } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { t } from "./utils/localize";
import { computeAchievementGroups, type Badge } from "./utils/achievements";
import type { TranslationKey } from "./utils/localize";

/** Short grid-tile labels - fixed, not translated, same precedent as the
 * Player Card's STA/PWR/REC abbreviations. The full name is always one
 * hover/tap away via the tile's title attribute, so these only need to be
 * a quick visual scan aid, not a complete description. */
const SHORT_LABELS: Partial<Record<TranslationKey, string>> = {
  "achievements.badge.century_club": "100",
  "achievements.badge.workouts_250": "250",
  "achievements.badge.workouts_500": "500",
  "achievements.badge.workouts_1000": "1000",
  "achievements.badge.distance_1000": "1000 km",
  "achievements.badge.distance_5000": "5000 km",
  "achievements.badge.around_globe": "Globe",
  "achievements.badge.hours_100": "100 h",
  "achievements.badge.hours_500": "500 h",
  "achievements.badge.days_100": "100 d",
  "achievements.badge.full_year": "365 d",
  "achievements.badge.energy_100k": "100k",
  "achievements.badge.energy_1m": "1M",
  "achievements.badge.multi_sport": "3+",
  "achievements.badge.jack_of_all_trades": "5+",
  "achievements.badge.specialist": "100+",
  "achievements.badge.solid_engine": "VO2 40+",
  "achievements.badge.elite_engine": "VO2 55+",
  "achievements.badge.consistency_king": "14d",
  "achievements.badge.iron_will": "30d",
};

/**
 * Compact alternative to suunto-achievements-card: the same 20-badge catalog
 * (see utils/achievements.ts - one source of truth for both cards), shown as
 * a dense icon grid instead of a scrollable category list. Trades away
 * progress bars, category headers and the personal-records section for a
 * card that fits without scrolling.
 */
@customElement("suunto-achievements-compact-card")
export class SuuntoAchievementsCompactCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-achievements-compact-card" };
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

    const computed = computeAchievementGroups(hass, map);
    if (!computed) {
      return this._message(
        "mdi:trophy-outline",
        t(hass, "empty.achievements.title"),
        t(hass, "empty.achievements.subtitle")
      );
    }
    const { allBadges, unlockedCount } = computed;
    const pct = allBadges.length ? Math.round((unlockedCount / allBadges.length) * 100) : 0;

    // "Newest unlock" would need history this integration doesn't track (a
    // badge is recomputed fresh from current totals every render, not
    // stamped with when it first crossed the threshold) - showing the
    // closest LOCKED badge instead is honest and just as motivating.
    const next = [...allBadges]
      .filter((b) => !b.unlocked)
      .sort((a, b) => b.current / b.target - a.current / a.target)[0];

    const r = 16;
    const circumference = 2 * Math.PI * r;
    const dashOffset = circumference * (1 - pct / 100);

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:trophy-outline"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.achievements.title")}</div>
            <div class="subtitle">${t(hass, "card.achievements.subtitle", { unlocked: unlockedCount, total: allBadges.length })}</div>
          </div>
          <div class="ring-wrap">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r=${r} class="ring-track"></circle>
              <circle cx="20" cy="20" r=${r} class="ring-fill" stroke-dasharray=${circumference} stroke-dashoffset=${dashOffset}></circle>
            </svg>
            <div class="ring-pct">${pct}%</div>
          </div>
        </div>

        <div class="badge-grid">${allBadges.map((b) => this._badge(hass, b))}</div>

        ${next
          ? html`
              <div class="footer">
                <span class="chip">
                  <span class="bi">${next.icon}</span>
                  ${t(hass, "achievements.next", { name: t(hass, next.nameKey, next.nameVars), pct: Math.round((next.current / next.target) * 100) })}
                </span>
              </div>
            `
          : nothing}
      </ha-card>
    `;
  }

  private _badge(hass: SuuntoHass, b: Badge): TemplateResult {
    return html`
      <div class="badge ${b.unlocked ? "unlocked" : "locked"}" title=${t(hass, b.nameKey, b.nameVars)}>
        ${!b.unlocked ? html`<span class="lock-pin">🔒</span>` : nothing}
        <span class="bi">${b.icon}</span>
        <span class="bl">${SHORT_LABELS[b.nameKey] ?? t(hass, b.nameKey, b.nameVars)}</span>
      </div>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .header {
        align-items: center;
      }
      .ring-wrap {
        position: relative;
        width: 40px;
        height: 40px;
        flex: none;
        margin-left: auto;
      }
      .ring-wrap svg {
        transform: rotate(-90deg);
      }
      .ring-track {
        fill: none;
        stroke: var(--divider-color);
        stroke-width: 5;
      }
      .ring-fill {
        fill: none;
        stroke: var(--sc-amber);
        stroke-width: 5;
        stroke-linecap: round;
      }
      .ring-pct {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.66rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
      .badge-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;
      }
      .badge {
        aspect-ratio: 1;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3px;
        position: relative;
        text-align: center;
        padding: 4px 3px;
      }
      .badge.unlocked {
        background: var(--sc-amber-bg);
        border: 1px solid color-mix(in srgb, var(--sc-amber) 40%, transparent);
      }
      .badge.locked {
        background: var(--sc-chip-bg);
        border: 1px solid var(--divider-color);
      }
      .badge .bi {
        font-size: 1.15rem;
      }
      .badge.locked .bi {
        opacity: 0.3;
        filter: grayscale(1);
      }
      .badge .bl {
        font-size: 0.56rem;
        font-weight: 600;
        line-height: 1.1;
      }
      .badge.locked .bl {
        color: var(--secondary-text-color);
      }
      .badge .lock-pin {
        position: absolute;
        top: 3px;
        right: 3px;
        font-size: 0.55rem;
        opacity: 0.6;
      }
      .footer {
        display: flex;
      }
      .footer .bi {
        font-size: 0.9rem;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-achievements-compact-card": SuuntoAchievementsCompactCard;
  }
}
