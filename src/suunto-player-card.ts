import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { activityIcon } from "./utils/icons";
import { t, type TranslationKey } from "./utils/localize";
import { resolveSuuntoDevice } from "./utils/entities";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

interface RecentWorkout {
  activity?: string;
  tss?: number;
}

interface LifetimeActivity {
  activity: string;
  workouts: number;
}

interface StatBar {
  code: string;
  value: number;
  helpKey: TranslationKey;
}

/** Same activity -> archetype-noun mapping as suunto-athlete-profile-card's
 * personality label, reused here (already translated in all 8 languages)
 * rather than inventing a second vocabulary for the same concept. */
const ARCHETYPE_KEYS: Array<[RegExp, TranslationKey]> = [
  [/cycl|bik/i, "personality.activity.cycling"],
  [/run/i, "personality.activity.running"],
  [/trek|hik/i, "personality.activity.trekking"],
  [/walk/i, "personality.activity.walking"],
  [/gym|strength|weight/i, "personality.activity.gym"],
  [/swim/i, "personality.activity.swim"],
  [/ski/i, "personality.activity.ski"],
  [/row/i, "personality.activity.row"],
];

function archetypeKey(activity?: string): TranslationKey {
  if (activity) {
    for (const [pattern, key] of ARCHETYPE_KEYS) {
      if (pattern.test(activity)) return key;
    }
  }
  return "personality.activity.other";
}

function clamp99(value: number): number {
  return Math.max(0, Math.min(99, Math.round(value)));
}

function tierFor(overall: number): { key: TranslationKey; colorVar: string } {
  if (overall >= 85) return { key: "player.tier.legendary", colorVar: "var(--player-legendary)" };
  if (overall >= 70) return { key: "player.tier.gold", colorVar: "var(--player-gold)" };
  if (overall >= 50) return { key: "player.tier.silver", colorVar: "var(--player-silver)" };
  return { key: "player.tier.bronze", colorVar: "var(--player-bronze)" };
}

/**
 * A FIFA-Ultimate-Team-style "player card": one OVERALL rating and 6 stat
 * bars, each a heuristic 0-99 read of an already-fetched sensor - same
 * "not an official Suunto metric" caveat as suunto-training-profile-card's
 * radar axes, just presented as a trading card instead of a chart.
 */
@customElement("suunto-player-card")
export class SuuntoPlayerCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;
  @state() private _showHelp = false;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-player-card" };
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
    const get = (key: string) => (map[key] ? hass.states[map[key]] : undefined);

    const ctl = get("fitness_ctl");
    const readiness = get("readiness");
    const workouts30d = get("workouts_30d");
    const tsb = get("form_tsb");
    const vo2max = get("estimated_vo2max") ?? get("vo2max");
    const recentEntity = get("workouts_recent");
    const lifetimeEntity = get("lifetime_by_activity");

    const hasCore = [ctl, readiness, workouts30d].some((e) => e && !UNAVAILABLE_STATES.has(e.state));
    if (!hasCore) {
      return this._message("mdi:cards", t(hass, "empty.player.title"), t(hass, "empty.player.subtitle"));
    }

    const num = (entity: typeof ctl): number =>
      entity && !UNAVAILABLE_STATES.has(entity.state) ? Number(entity.state) : 0;

    const recentWorkouts: RecentWorkout[] = recentEntity?.attributes.workouts ?? [];
    const tssValues = recentWorkouts.map((w) => w.tss).filter((v): v is number => typeof v === "number");
    const avgTss = tssValues.length ? tssValues.reduce((a, b) => a + b, 0) / tssValues.length : 0;

    // Each stat is a heuristic 0-99 read of an already-fetched sensor, not an
    // official Suunto rating - same disclaimer pattern the training-profile
    // radar's axes already carry.
    const sta = clamp99((num(ctl) / 100) * 99);
    const pwr = clamp99((avgTss / 150) * 99);
    const rec = clamp99(num(readiness));
    const con = clamp99((num(workouts30d) / 20) * 99);
    const end = clamp99(((num(vo2max) - 20) / 40) * 99);
    const frm = clamp99(((num(tsb) + 30) / 50) * 99);

    const bars: StatBar[] = [
      { code: "STA", value: sta, helpKey: "player.help.sta" },
      { code: "PWR", value: pwr, helpKey: "player.help.pwr" },
      { code: "REC", value: rec, helpKey: "player.help.rec" },
      { code: "CON", value: con, helpKey: "player.help.con" },
      { code: "END", value: end, helpKey: "player.help.end" },
      { code: "FRM", value: frm, helpKey: "player.help.frm" },
    ];
    const overall = clamp99(bars.reduce((sum, b) => sum + b.value, 0) / bars.length);
    const tier = tierFor(overall);

    const lifetimeActivities: LifetimeActivity[] = lifetimeEntity?.attributes.activities ?? [];
    const topActivity = [...lifetimeActivities].sort((a, b) => b.workouts - a.workouts)[0];
    const dominantActivity = topActivity?.activity ?? recentWorkouts[0]?.activity;

    let deviceName = "";
    try {
      const deviceId = resolveSuuntoDevice(hass, this._configuredDeviceId);
      deviceName = hass.devices?.[deviceId]?.name_by_user || hass.devices?.[deviceId]?.name || "";
    } catch {
      // Already surfaced by _resolveEntities() above if this were fatal - the
      // player name is cosmetic, so just omit it rather than erroring twice.
    }

    return html`
      <ha-card class="static player-card" style="--tier-color:${tier.colorVar}">
        <div class="pc-top">
          <div class="pc-rating">
            <div class="num">${overall}</div>
            <div class="tier">${t(hass, tier.key)}</div>
          </div>
          <div class="pc-top-right">
            <button
              class="pc-help-btn"
              aria-label=${t(hass, "player.help.title")}
              @click=${() => {
                this._showHelp = !this._showHelp;
              }}
            >
              <ha-icon icon="mdi:help-circle-outline"></ha-icon>
            </button>
            <div class="pc-badge">
              <span class="dot"><ha-icon .icon=${activityIcon(dominantActivity)}></ha-icon></span>
              ${dominantActivity ?? ""}
            </div>
          </div>
        </div>

        <div class="pc-avatar-wrap">
          <div class="pc-avatar"><ha-icon .icon=${activityIcon(dominantActivity)}></ha-icon></div>
        </div>
        ${deviceName ? html`<div class="pc-name">${deviceName}</div>` : nothing}
        <div class="pc-archetype">${t(hass, "player.archetype", { activity: t(hass, archetypeKey(dominantActivity)) })}</div>

        <div class="pc-stats">
          ${bars.map(
            (b) => html`
              <div class="pc-stat">
                <span class="k">${b.code}</span>
                <div class="bar-track"><div class="bar-fill" style="width:${b.value}%"></div></div>
                <span class="v">${b.value}</span>
              </div>
            `
          )}
        </div>

        ${this._showHelp
          ? html`
              <div
                class="pc-help-overlay"
                @click=${() => {
                  this._showHelp = false;
                }}
              >
                <div class="pc-help-title">${t(hass, "player.help.title")}</div>
                ${bars.map((b) => {
                  const [code, rest] = t(hass, b.helpKey).split(" · ");
                  return html`<div class="pc-help-row"><b>${code}</b> · ${rest}</div>`;
                })}
                <div class="pc-help-disclaimer">${t(hass, "player.help.disclaimer")}</div>
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
      :host {
        --player-bronze: #b5834a;
        --player-silver: #9fabb5;
        --player-gold: #d98a1d;
        --player-legendary: #a259d9;
      }
      :host(.dark) {
        --player-bronze: #c99a63;
        --player-silver: #c3ccd3;
        --player-gold: #f5b44e;
        --player-legendary: #c084f5;
      }
      .player-card {
        padding: 18px 20px 20px;
        display: flex;
        flex-direction: column;
        gap: 4px;
        position: relative;
        overflow: hidden;
        background:
          radial-gradient(120% 90% at 50% 0%, color-mix(in srgb, var(--tier-color) 20%, transparent), transparent 60%),
          var(--ha-card-background, var(--card-background-color));
        border: 1.5px solid color-mix(in srgb, var(--tier-color) 55%, transparent);
        box-shadow: 0 0 0 1px color-mix(in srgb, var(--tier-color) 12%, transparent);
      }
      .pc-top {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }
      .pc-rating {
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 1;
      }
      .pc-rating .num {
        font-size: 2.4rem;
        font-weight: 800;
        color: var(--tier-color);
        letter-spacing: -0.02em;
        font-variant-numeric: tabular-nums;
      }
      .pc-rating .tier {
        font-size: 0.58rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--tier-color);
        margin-top: 2px;
      }
      .pc-top-right {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .pc-help-btn {
        background: none;
        border: none;
        padding: 2px;
        margin: 0;
        cursor: pointer;
        color: var(--secondary-text-color);
        display: flex;
        align-items: center;
        opacity: 0.75;
      }
      .pc-help-btn:hover {
        opacity: 1;
        color: var(--tier-color);
      }
      .pc-help-btn ha-icon {
        --mdc-icon-size: 18px;
      }
      .pc-help-overlay {
        position: absolute;
        inset: 0;
        background: rgba(10, 8, 5, 0.96);
        border-radius: 16px;
        padding: 18px 20px;
        display: flex;
        flex-direction: column;
        gap: 7px;
        cursor: pointer;
        overflow-y: auto;
      }
      .pc-help-title {
        font-size: 0.85rem;
        font-weight: 700;
        color: var(--tier-color);
        margin-bottom: 2px;
      }
      .pc-help-row {
        font-size: 0.74rem;
        color: #d8d4cc;
        line-height: 1.4;
      }
      .pc-help-row b {
        color: var(--tier-color);
        margin-right: 2px;
      }
      .pc-help-disclaimer {
        font-size: 0.64rem;
        color: #8a8478;
        margin-top: 6px;
        font-style: italic;
        line-height: 1.4;
      }
      .pc-badge {
        display: flex;
        align-items: center;
        gap: 6px;
        background: var(--sc-chip-bg);
        border-radius: 999px;
        padding: 5px 10px 5px 6px;
        font-size: 0.68rem;
        font-weight: 600;
        color: var(--secondary-text-color);
        text-transform: capitalize;
      }
      .pc-badge .dot {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: color-mix(in srgb, var(--tier-color) 22%, transparent);
        color: var(--tier-color);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .pc-badge .dot ha-icon {
        --mdc-icon-size: 13px;
      }
      .pc-avatar-wrap {
        display: flex;
        justify-content: center;
        margin: 4px 0 2px;
      }
      .pc-avatar {
        width: 92px;
        height: 92px;
        border-radius: 50%;
        background: radial-gradient(circle at 35% 30%, color-mix(in srgb, var(--tier-color) 18%, transparent), transparent 75%);
        border: 2px solid color-mix(in srgb, var(--tier-color) 50%, transparent);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--tier-color);
      }
      .pc-avatar ha-icon {
        --mdc-icon-size: 38px;
      }
      .pc-name {
        text-align: center;
        font-size: 1rem;
        font-weight: 700;
      }
      .pc-archetype {
        text-align: center;
        font-size: 0.72rem;
        color: var(--tier-color);
        font-weight: 600;
        letter-spacing: 0.02em;
        margin-bottom: 4px;
      }
      .pc-stats {
        margin-top: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px 18px;
        padding-top: 12px;
        border-top: 1px solid color-mix(in srgb, var(--tier-color) 20%, var(--divider-color));
      }
      .pc-stat {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .pc-stat .k {
        width: 30px;
        font-size: 0.7rem;
        font-weight: 700;
        color: var(--secondary-text-color);
      }
      .pc-stat .v {
        width: 22px;
        font-size: 0.78rem;
        font-weight: 700;
        text-align: right;
        font-variant-numeric: tabular-nums;
      }
      .pc-stat .bar-track {
        flex: 1;
        height: 4px;
        border-radius: 2px;
        background: var(--divider-color);
        overflow: hidden;
      }
      .pc-stat .bar-fill {
        height: 100%;
        border-radius: 2px;
        background: var(--tier-color);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-player-card": SuuntoPlayerCard;
  }
}
