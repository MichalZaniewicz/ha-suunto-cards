import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { activityIcon } from "./utils/icons";
import { t, type TranslationKey } from "./utils/localize";

interface LifetimeActivity {
  activity: string;
  workouts: number;
}

/** Same dominant-activity matching as the Player/Athlete-Profile cards, mapped
 * to an RPG class name + flavor line instead of a plain personality label. */
const CLASS_KEYS: Array<[RegExp, string]> = [
  [/cycl|bik/i, "cycling"],
  [/run/i, "running"],
  [/trek|hik/i, "trekking"],
  [/walk/i, "walking"],
  [/gym|strength|weight/i, "gym"],
  [/swim/i, "swim"],
  [/ski/i, "ski"],
  [/row/i, "row"],
];

function classSlug(activity?: string): string {
  if (activity) {
    for (const [pattern, slug] of CLASS_KEYS) {
      if (pattern.test(activity)) return slug;
    }
  }
  return "other";
}

const BUILD_COLORS = [
  "var(--sc-pulse)",
  "var(--sc-amber)",
  "var(--sc-good)",
  "var(--sc-sleep-rem)",
  "var(--sc-zone-4)",
  "var(--sc-sleep-deep)",
];

@customElement("suunto-class-card")
export class SuuntoClassCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-class-card" };
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

    const lifetimeEntity = get("lifetime_by_activity");
    const activities: LifetimeActivity[] = lifetimeEntity?.attributes.activities ?? [];
    const totalWorkouts = activities.reduce((sum, a) => sum + a.workouts, 0);

    if (!lifetimeEntity || totalWorkouts === 0) {
      return this._message("mdi:sword-cross", t(hass, "empty.class.title"), t(hass, "empty.class.subtitle"));
    }

    const sorted = [...activities].sort((a, b) => b.workouts - a.workouts).filter((a) => a.workouts > 0);
    const dominant = sorted[0];
    const slug = classSlug(dominant?.activity);
    const top = sorted.slice(0, 5);
    const rest = sorted.slice(5).reduce((sum, a) => sum + a.workouts, 0);

    return html`
      <ha-card class="static">
        <div class="class-emblem"><ha-icon .icon=${activityIcon(dominant?.activity)}></ha-icon></div>
        <div class="class-name">${t(hass, `class.name.${slug}` as TranslationKey)}</div>
        <div class="class-tag">${t(hass, "class.tag", { activity: dominant?.activity ?? "" })}</div>
        <div class="class-flavor">${t(hass, `class.flavor.${slug}` as TranslationKey)}</div>
        <div class="class-build">
          ${top.map((a, i) => {
            const pct = Math.round((a.workouts / totalWorkouts) * 100);
            return html`
              <div class="cb-row">
                <span class="cn">${a.activity}</span>
                <div class="ct"><div class="cf" style="width:${pct}%;background:${BUILD_COLORS[i % BUILD_COLORS.length]}"></div></div>
                <span class="cp">${pct}%</span>
              </div>
            `;
          })}
          ${rest > 0
            ? html`<div class="cb-rest">${t(hass, "class.rest", { pct: Math.round((rest / totalWorkouts) * 100) })}</div>`
            : nothing}
        </div>
      </ha-card>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      ha-card.static {
        padding: 18px;
        position: relative;
        overflow: hidden;
      }
      ha-card.static::after {
        content: "";
        position: absolute;
        right: -40px;
        top: -40px;
        width: 160px;
        height: 160px;
        background: radial-gradient(circle, var(--sc-pulse-bg), transparent 70%);
        pointer-events: none;
      }
      .class-emblem {
        width: 52px;
        height: 52px;
        border-radius: 14px;
        background: var(--sc-pulse-bg);
        color: var(--sc-pulse);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 4px;
      }
      .class-emblem ha-icon {
        --mdc-icon-size: 26px;
      }
      .class-name {
        font-size: 1.1rem;
        font-weight: 800;
      }
      .class-tag {
        font-size: 0.72rem;
        color: var(--sc-pulse);
        font-weight: 600;
        text-transform: capitalize;
      }
      .class-flavor {
        font-size: 0.78rem;
        color: var(--secondary-text-color);
        line-height: 1.4;
      }
      .class-build {
        display: flex;
        flex-direction: column;
        gap: 7px;
      }
      .cb-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .cb-row .cn {
        width: 76px;
        flex: none;
        font-size: 0.68rem;
        color: var(--secondary-text-color);
        text-transform: capitalize;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .cb-row .ct {
        flex: 1;
        height: 6px;
        border-radius: 3px;
        background: var(--divider-color);
        overflow: hidden;
      }
      .cb-row .cf {
        height: 100%;
        border-radius: 3px;
      }
      .cb-row .cp {
        width: 32px;
        flex: none;
        text-align: right;
        font-size: 0.68rem;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
      }
      .cb-rest {
        font-size: 0.68rem;
        color: var(--secondary-text-color);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-class-card": SuuntoClassCard;
  }
}
