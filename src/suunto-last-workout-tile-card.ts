import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import { fireEvent, type LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { activityIcon } from "./utils/icons";
import { formatDuration, formatPace, formatRelative } from "./utils/format";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

/** Compact single-row variant of suunto-last-workout-card, for denser dashboards. */
@customElement("suunto-last-workout-tile-card")
export class SuuntoLastWorkoutTileCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-last-workout-tile-card" };
  }

  public setConfig(config: SuuntoCardConfig): void {
    this._config = config;
    this._configuredDeviceId = config.device_id;
  }

  public getCardSize(): number {
    return 1;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) return nothing;
    this._syncTheme();

    const resolved = this._resolveEntities();
    if ("error" in resolved) return resolved.error;
    const { map } = resolved;
    const hass = this.hass;
    const get = (key: string) => (map[key] ? hass.states[map[key]] : undefined);

    const activity = get("last_activity");
    if (!activity || UNAVAILABLE_STATES.has(activity.state)) {
      return this._message("mdi:calendar-blank-outline", t(hass, "empty.last_workout.title"));
    }

    const start = get("last_workout_start");
    const distance = get("last_distance");
    const duration = get("last_duration");
    const avgHr = get("last_avg_hr");
    const pace = get("last_avg_pace");
    const speed = get("last_avg_speed");

    const parts: TemplateResult[] = [];
    if (distance) parts.push(html`${(Number(distance.state) / 1000).toFixed(1)} km`);
    if (duration) {
      const d = formatDuration(Number(duration.state));
      parts.push(html`${d.value} ${d.unit}`);
    }
    if (pace) parts.push(html`${formatPace(Number(pace.state))}/km`);
    else if (speed) parts.push(html`${Number(speed.state).toFixed(1)} km/h`);
    if (avgHr) parts.push(html`${Math.round(Number(avgHr.state))} bpm`);

    return html`
      <ha-card @click=${() => this._openMoreInfo(map["last_activity"])}>
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${activityIcon(activity.state)}></ha-icon></div>
          <div class="title-block">
            <div class="title activity">${activity.state}</div>
            <div class="subtitle">${start ? formatRelative(new Date(start.state), hass.language) : ""}</div>
          </div>
          <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
        </div>
        ${parts.length
          ? html`
              <div class="compact-stats">
                ${parts.map((p, i) => html`${i > 0 ? html`<span class="sep">·</span>` : nothing}${p}`)}
              </div>
            `
          : nothing}
      </ha-card>
    `;
  }

  private _openMoreInfo(entityId?: string): void {
    if (!entityId) return;
    fireEvent(this, "hass-more-info", { entityId });
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      ha-card {
        gap: 8px;
      }
      .activity {
        text-transform: capitalize;
      }
      .compact-stats {
        font-size: 0.85rem;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
      }
      .compact-stats .sep {
        opacity: 0.45;
        font-weight: 400;
        margin: 0 6px;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-last-workout-tile-card": SuuntoLastWorkoutTileCard;
  }
}
