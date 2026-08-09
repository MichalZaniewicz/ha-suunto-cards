import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { activityIcon } from "./utils/icons";
import { formatDuration, formatRelative } from "./utils/format";
import { t } from "./utils/localize";

interface RecentWorkout {
  start: string | null;
  activity: string | null;
  distance_km: number | null;
  duration_min: number | null;
  avg_hr: number | null;
  max_hr: number | null;
  tss: number | null;
}

@customElement("suunto-recent-workouts-card")
export class SuuntoRecentWorkoutsCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-recent-workouts-card" };
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
    const entityId = map["workouts_recent"];
    const entity = entityId ? hass.states[entityId] : undefined;
    const workouts: RecentWorkout[] = entity?.attributes.workouts ?? [];

    if (!entity || workouts.length === 0) {
      return this._message("mdi:format-list-bulleted", t(hass, "empty.recent_workouts.title"));
    }

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:format-list-bulleted"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.recent_workouts.title")}</div>
          </div>
        </div>

        <div class="scroll-list">
          ${workouts.map((w) => {
            const duration = w.duration_min !== null ? formatDuration(w.duration_min) : undefined;
            return html`
              <div class="workout-row">
                <div class="icon-badge tiny"><ha-icon .icon=${activityIcon(w.activity)}></ha-icon></div>
                <div class="name-block">
                  <div class="name">${w.activity ?? "-"}</div>
                  <div class="date">
                    ${w.start ? formatRelative(new Date(w.start), hass.language) : ""}
                  </div>
                </div>
                <div class="row-stats">
                  ${w.distance_km !== null ? html`<span>${w.distance_km} km</span>` : nothing}
                  ${w.distance_km !== null && duration ? html`<span class="sep">·</span>` : nothing}
                  ${duration ? html`<span>${duration.value} ${duration.unit}</span>` : nothing}
                </div>
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
      .workout-row {
        display: grid;
        grid-template-columns: 24px 1fr auto;
        align-items: center;
        gap: 10px;
      }
      .name-block {
        min-width: 0;
      }
      .name {
        font-size: 0.85rem;
        font-weight: 500;
        text-transform: capitalize;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .date {
        font-size: 0.72rem;
        color: var(--secondary-text-color);
      }
      .row-stats {
        font-size: 0.8rem;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        color: var(--primary-text-color);
      }
      .row-stats .sep {
        opacity: 0.45;
        margin: 0 3px;
        font-weight: 400;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-recent-workouts-card": SuuntoRecentWorkoutsCard;
  }
}
