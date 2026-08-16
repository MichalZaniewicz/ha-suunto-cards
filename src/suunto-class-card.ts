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

/** Each class gets its own accent from the existing token palette - no new
 * colors invented, but distinct enough that two riders with different
 * dominant sports get visibly different cards instead of a generic skin. */
const CLASS_COLORS: Record<string, string> = {
  cycling: "var(--sc-pulse)",
  running: "var(--sc-bad)",
  trekking: "var(--sc-good)",
  walking: "var(--sc-zone-1)",
  gym: "var(--sc-zone-4)",
  swim: "var(--sc-sleep-light)",
  ski: "var(--sc-sleep-deep)",
  row: "var(--sc-sleep-rem)",
  other: "var(--sc-amber)",
};

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
    const accent = CLASS_COLORS[slug];
    const top = sorted.slice(0, 5);
    const rest = sorted.slice(5).reduce((sum, a) => sum + a.workouts, 0);

    return html`
      <ha-card class="static" style="--class-accent:${accent}">
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
                <div class="ct"><div class="cf" style="width:${pct}%;background:${i === 0 ? accent : BUILD_COLORS[i % BUILD_COLORS.length]}"></div></div>
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
        padding: 20px 18px 18px;
        border-top: 3px solid var(--class-accent);
      }
      .class-emblem {
        width: 64px;
        height: 64px;
        clip-path: polygon(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0% 50%);
        background: color-mix(in srgb, var(--class-accent) 20%, transparent);
        color: var(--class-accent);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 6px;
      }
      .class-emblem ha-icon {
        --mdc-icon-size: 30px;
      }
      .class-name {
        font-size: 1.35rem;
        font-weight: 800;
        letter-spacing: -0.01em;
      }
      .class-tag {
        font-size: 0.74rem;
        color: var(--class-accent);
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.03em;
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
