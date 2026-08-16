import { html, css, svg, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { t, type TranslationKey } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

// 1 XP per 10 kcal burned - lifetime_energy is a TOTAL_INCREASING sensor, so
// XP only ever grows, same as a real game currency.
const KCAL_PER_XP = 10;
// Classic RPG curve: XP needed for level N = XP_BASE * N^2, so each level
// costs progressively more than the last.
const XP_BASE = 500;

function xpForLevel(level: number): number {
  return XP_BASE * level * level;
}

function levelForXp(xp: number): number {
  return Math.floor(Math.sqrt(xp / XP_BASE));
}

function titleKey(workouts: number): TranslationKey {
  if (workouts >= 500) return "level.title.legend";
  if (workouts >= 200) return "level.title.veteran";
  if (workouts >= 50) return "level.title.grinder";
  return "level.title.novice";
}

@customElement("suunto-level-card")
export class SuuntoLevelCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-level-card" };
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
    const get = (key: string) => (map[key] ? hass.states[map[key]] : undefined);

    const energy = get("lifetime_energy");
    const workoutsEntity = get("lifetime_workouts");
    if (!energy || UNAVAILABLE_STATES.has(energy.state)) {
      return this._message("mdi:trophy-award", t(hass, "empty.level.title"), t(hass, "empty.level.subtitle"));
    }

    const workouts = workoutsEntity && !UNAVAILABLE_STATES.has(workoutsEntity.state) ? Number(workoutsEntity.state) : 0;
    const xp = Math.round(Number(energy.state) / KCAL_PER_XP);
    const level = levelForXp(xp);
    const xpAtLevel = xpForLevel(level);
    const xpForNext = xpForLevel(level + 1);
    const progress = Math.max(0, Math.min(1, (xp - xpAtLevel) / (xpForNext - xpAtLevel)));
    const xpToGo = xpForNext - xp;

    const r = 56;
    const circumference = 2 * Math.PI * r;
    const dashOffset = circumference * (1 - progress);

    return html`
      <ha-card class="static level-card">
        <div class="lvl-ring-wrap">
          <svg width="128" height="128" viewBox="0 0 128 128">
            ${svg`<circle cx="64" cy="64" r=${r} class="ring-track"></circle>`}
            ${svg`<circle cx="64" cy="64" r=${r} class="ring-fill" stroke-dasharray=${circumference} stroke-dashoffset=${dashOffset}></circle>`}
          </svg>
          <div class="lvl-center">
            <div class="n">${level}</div>
            <div class="l">${t(hass, "level.label")}</div>
          </div>
        </div>
        <div class="lvl-title">${t(hass, titleKey(workouts))}</div>
        <div class="lvl-sub">${t(hass, "level.subtitle")}</div>
        <div class="xp-bar-wrap">
          <div class="xp-bar-track"><div class="xp-bar-fill" style="width:${progress * 100}%"></div></div>
          <div class="xp-labels">
            <span>${t(hass, "level.xp_total", { xp: xp.toLocaleString(hass.language) })}</span>
            <span>${t(hass, "level.xp_to_next", { xp: xpToGo.toLocaleString(hass.language), level: level + 1 })}</span>
          </div>
        </div>
        <div class="lvl-source">${t(hass, "level.source", { count: workouts.toLocaleString(hass.language) })}</div>
      </ha-card>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .level-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        padding: 20px 20px 18px;
      }
      .lvl-ring-wrap {
        position: relative;
        width: 128px;
        height: 128px;
      }
      .lvl-ring-wrap svg {
        transform: rotate(-90deg);
      }
      .ring-track {
        fill: none;
        stroke: var(--divider-color);
        stroke-width: 10;
      }
      .ring-fill {
        fill: none;
        stroke: var(--sc-amber);
        stroke-width: 10;
        stroke-linecap: round;
        transition: stroke-dashoffset 0.4s ease;
      }
      .lvl-center {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .lvl-center .n {
        font-size: 2.1rem;
        font-weight: 800;
        line-height: 1;
        font-variant-numeric: tabular-nums;
      }
      .lvl-center .l {
        font-size: 0.6rem;
        letter-spacing: 0.1em;
        color: var(--secondary-text-color);
        font-weight: 700;
        margin-top: 2px;
      }
      .lvl-title {
        font-size: 1rem;
        font-weight: 700;
      }
      .lvl-sub {
        font-size: 0.76rem;
        color: var(--secondary-text-color);
        margin-top: -8px;
      }
      .xp-bar-wrap {
        width: 100%;
      }
      .xp-bar-track {
        width: 100%;
        height: 10px;
        border-radius: 5px;
        background: var(--divider-color);
        overflow: hidden;
      }
      .xp-bar-fill {
        height: 100%;
        border-radius: 5px;
        background: linear-gradient(90deg, var(--sc-pulse), var(--sc-amber));
      }
      .xp-labels {
        display: flex;
        justify-content: space-between;
        font-size: 0.68rem;
        color: var(--secondary-text-color);
        margin-top: 5px;
        font-variant-numeric: tabular-nums;
      }
      .lvl-source {
        font-size: 0.66rem;
        color: var(--secondary-text-color);
        text-align: center;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-level-card": SuuntoLevelCard;
  }
}
