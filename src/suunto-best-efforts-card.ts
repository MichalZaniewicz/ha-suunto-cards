import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { formatPace, formatRaceTime, formatRelative } from "./utils/format";
import { t, type TranslationKey } from "./utils/localize";

interface EffortEntry {
  value: number;
  activity?: string;
  start_time?: string;
}

interface DistanceDef {
  key: string;
  km: number;
  /** Plain text for 1K/5K/10K - these read the same in every language, not
   * worth a translation key. Half/full marathon DO get translated. */
  label: string | { translationKey: TranslationKey };
}

const DISTANCES: DistanceDef[] = [
  { key: "1k", km: 1, label: "1K" },
  { key: "5k", km: 5, label: "5K" },
  { key: "10k", km: 10, label: "10K" },
  { key: "half_marathon", km: 21.0975, label: { translationKey: "distance.half_marathon" } },
  { key: "marathon", km: 42.195, label: { translationKey: "distance.marathon" } },
];

/**
 * Your fastest continuous effort for 5 standard race distances - a new list
 * layout for this card family (every other "records" card uses tiles/blocks,
 * this reads better as rows since every distance shares the same 3 fields:
 * time, pace, when). A distance with no recorded best yet shows a dashed
 * placeholder row in the SAME shape as a real one (time/pace columns still
 * present, just empty) rather than a differently-laid-out message - keeps
 * the list's columns aligned instead of the row jumping around.
 */
@customElement("suunto-best-efforts-card")
export class SuuntoBestEffortsCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-best-efforts-card" };
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
    const entity = map["best_efforts"] ? hass.states[map["best_efforts"]] : undefined;

    if (!entity) {
      return this._message(
        "mdi:speedometer",
        t(hass, "empty.best_efforts.title"),
        t(hass, "empty.best_efforts.subtitle")
      );
    }

    const recorded = Number(entity.state) || 0;

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:speedometer"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.best_efforts.title")}</div>
            <div class="subtitle">
              ${t(hass, "card.best_efforts.subtitle", { count: recorded, total: DISTANCES.length })}
            </div>
          </div>
        </div>

        <div class="effort-list">
          ${DISTANCES.map((dist) => {
            const raw = entity.attributes[`${dist.key}_seconds`] as EffortEntry | undefined;
            const label = typeof dist.label === "string" ? dist.label : t(hass, dist.label.translationKey);
            if (!raw) {
              return html`
                <div class="effort-row empty">
                  <div class="effort-dist">${label}</div>
                  <div class="effort-main">
                    <div class="effort-time">&mdash;:&mdash;&mdash;</div>
                    <div class="effort-meta">${t(hass, "best_efforts.not_yet")}</div>
                  </div>
                  <div class="effort-pace">&mdash;<span class="u">/km</span></div>
                </div>
              `;
            }
            const paceMinKm = raw.value / 60 / dist.km;
            return html`
              <div class="effort-row">
                <div class="effort-dist">${label}</div>
                <div class="effort-main">
                  <div class="effort-time">${formatRaceTime(raw.value)}</div>
                  <div class="effort-meta">
                    ${raw.activity ?? ""}
                    ${raw.activity && raw.start_time ? html`<span class="sep">·</span>` : nothing}
                    ${raw.start_time ? formatRelative(new Date(raw.start_time), hass.language) : nothing}
                  </div>
                </div>
                <div class="effort-pace">${formatPace(paceMinKm)}<span class="u">/km</span></div>
              </div>
            `;
          })}
        </div>
      </ha-card>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .subtitle .sep {
        opacity: 0.45;
        margin: 0 3px;
      }
      .effort-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .effort-row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 12px;
        background: var(--divider-color);
        border-radius: 9px;
      }
      .effort-row.empty {
        opacity: 0.55;
      }
      .effort-dist {
        width: 4.6em;
        flex: none;
        font-size: 0.95rem;
        font-weight: 600;
      }
      .effort-main {
        flex: 1;
        min-width: 0;
      }
      .effort-time {
        font-variant-numeric: tabular-nums;
        font-size: 1rem;
        font-weight: 600;
      }
      .effort-meta {
        font-size: 0.7rem;
        color: var(--secondary-text-color);
        margin-top: 1px;
      }
      .effort-pace {
        font-variant-numeric: tabular-nums;
        font-size: 0.78rem;
        color: var(--sc-amber);
        flex: none;
        text-align: right;
      }
      .effort-pace .u {
        font-size: 0.62rem;
        color: var(--secondary-text-color);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-best-efforts-card": SuuntoBestEffortsCard;
  }
}
