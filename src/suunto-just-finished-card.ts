import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { activityIcon } from "./utils/icons";
import { formatDuration, formatRelative } from "./utils/format";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);
const FRESH_WINDOW_MS = 6 * 3600 * 1000;

/**
 * Celebrates a workout that just arrived, then goes quiet again. "Just
 * arrived" is read declaratively from `last_workout_start`'s `last_changed`
 * (the moment THIS entity's state value last changed, i.e. the moment a new
 * workout replaced the previous one) rather than subscribing to the
 * `suunto_app_new_workout` bus event: an event fires once and is gone, so a
 * dashboard opened even a minute after it fired (the common case - people
 * check the dashboard AFTER syncing, not with it already open) would never
 * see it. Reading last_changed instead means "was this ingested recently"
 * survives page reloads and works the same on first load as on a live tick.
 */
@customElement("suunto-just-finished-card")
export class SuuntoJustFinishedCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-just-finished-card" };
  }

  public setConfig(config: SuuntoCardConfig): void {
    this._config = config;
    this._configuredDeviceId = config.device_id;
  }

  public getCardSize(): number {
    return 3;
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
    const start = get("last_workout_start");
    if (!activity || UNAVAILABLE_STATES.has(activity.state) || !start) {
      return this._message("mdi:party-popper", t(hass, "empty.just_finished.title"));
    }

    const ingestedAt = new Date(start.last_changed);
    const ageMs = Date.now() - ingestedAt.getTime();
    const isFresh = Number.isFinite(ageMs) && ageMs >= 0 && ageMs < FRESH_WINDOW_MS;

    if (!isFresh) {
      return this._message("mdi:party-popper", t(hass, "just_finished.idle.title"), t(hass, "just_finished.idle.subtitle"));
    }

    const distance = get("last_distance");
    const duration = get("last_duration");
    const avgHr = get("last_avg_hr");
    const tss = get("last_tss");

    return html`
      <ha-card class="static celebrate">
        <div class="header">
          <div class="icon-badge accent"><ha-icon icon="mdi:party-popper"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "just_finished.title")}</div>
            <div class="subtitle">
              <span class="activity">${activity.state}</span> · ${formatRelative(ingestedAt, hass.language)}
            </div>
          </div>
        </div>

        <div class="stats three">
          ${distance
            ? this._stat((Number(distance.state) / 1000).toFixed(1), "km", t(hass, "stat.distance"))
            : nothing}
          ${duration
            ? (() => {
                const d = formatDuration(Number(duration.state));
                return this._stat(d.value, d.unit, t(hass, "stat.duration"));
              })()
            : nothing}
          ${avgHr ? this._stat(String(Math.round(Number(avgHr.state))), "bpm", t(hass, "stat.avg_hr")) : nothing}
          ${tss ? this._stat(Number(tss.state).toFixed(0), "", t(hass, "stat.tss")) : nothing}
        </div>
      </ha-card>
    `;
  }

  private _stat(value: string, unit: string, label: string) {
    return html`
      <div class="stat">
        <div class="stat-value">${value}${unit ? html`<span class="unit">${unit}</span>` : nothing}</div>
        <div class="stat-label">${label}</div>
      </div>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      ha-card.celebrate {
        border: 1px solid var(--sc-amber-bg);
      }
      .icon-badge.accent {
        background: var(--sc-amber-bg);
        color: var(--sc-amber);
      }
      .activity {
        text-transform: capitalize;
        font-weight: 600;
        color: var(--primary-text-color);
      }
      .stats.three {
        grid-template-columns: repeat(3, 1fr);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-just-finished-card": SuuntoJustFinishedCard;
  }
}
