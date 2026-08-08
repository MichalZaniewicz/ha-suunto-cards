import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import { fireEvent, type LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { activityIcon, weatherIcon } from "./utils/icons";
import { formatDuration, formatPace, formatRelative, formatTime } from "./utils/format";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

function achievementLabel(raw: unknown, count: number): string {
  if (Array.isArray(raw) && raw.length) {
    const first = raw[0];
    if (typeof first === "string") return first;
    if (first && typeof first === "object") {
      const obj = first as Record<string, unknown>;
      const label = obj.name ?? obj.title ?? obj.type;
      if (typeof label === "string") return label;
    }
  }
  return `${count} achievement${count === 1 ? "" : "s"}`;
}

@customElement("suunto-last-workout-card")
export class SuuntoLastWorkoutCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-last-workout-card" };
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

    const activity = get("last_activity");
    if (!activity || UNAVAILABLE_STATES.has(activity.state)) {
      return this._message(
        "mdi:calendar-blank-outline",
        "No recent workout",
        "Sync your watch with the Suunto app to see it here."
      );
    }

    const start = get("last_workout_start");
    const distance = get("last_distance");
    const duration = get("last_duration");
    const avgHr = get("last_avg_hr");
    const maxHr = get("last_max_hr");
    const pace = get("last_avg_pace");
    const speed = get("last_avg_speed");
    const pte = get("last_pte");
    const epoc = get("last_epoc");
    const feeling = get("last_feeling");
    const tss = get("last_tss");
    const calPerKm = get("last_cal_per_km");
    const weather = get("last_workout_weather");
    const tags = get("last_workout_tags");
    const achievements = get("last_workout_achievements");

    const durationParts = duration ? formatDuration(Number(duration.state)) : undefined;
    const hasSpeed = pace === undefined && speed !== undefined;
    const feelingValue =
      feeling && !UNAVAILABLE_STATES.has(feeling.state) ? Number(feeling.state) : undefined;
    const pteValue = pte && !UNAVAILABLE_STATES.has(pte.state) ? Number(pte.state) : undefined;
    const achievementCount = achievements ? Number(achievements.state) : 0;

    return html`
      <ha-card @click=${() => this._openMoreInfo(map["last_activity"])}>
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${activityIcon(activity.state)}></ha-icon></div>
          <div class="title-block">
            <div class="title activity">${activity.state}</div>
            <div class="subtitle">
              ${start
                ? html`${formatRelative(new Date(start.state), hass.language)} ·
                  ${formatTime(new Date(start.state), hass.language)}`
                : ""}
            </div>
          </div>
          <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
        </div>

        <div class="stats">
          ${distance
            ? this._stat((Number(distance.state) / 1000).toFixed(1), "km", "Distance")
            : nothing}
          ${durationParts ? this._stat(durationParts.value, durationParts.unit, "Duration") : nothing}
          ${pace
            ? this._stat(formatPace(Number(pace.state)), "/km", "Avg pace")
            : hasSpeed
              ? this._stat(Number(speed!.state).toFixed(1), "km/h", "Avg speed")
              : nothing}
          ${avgHr ? this._stat(String(Math.round(Number(avgHr.state))), "bpm", "Avg HR", true) : nothing}
          ${maxHr ? this._stat(String(Math.round(Number(maxHr.state))), "bpm", "Max HR", true) : nothing}
          ${pteValue !== undefined
            ? html`
                <div class="stat">
                  <div class="stat-value">${pteValue.toFixed(1)}</div>
                  <div class="stat-label">Training effect</div>
                  <div class="severity">
                    ${[1, 2, 3, 4, 5].map(
                      (i) => html`<i class=${i <= Math.round(pteValue) ? `on s${i}` : ""}></i>`
                    )}
                  </div>
                </div>
              `
            : nothing}
        </div>

        ${tss || epoc || feelingValue !== undefined || calPerKm
          ? html`
              <hr />
              <div class="secondary">
                ${tss ? this._secondary(String(Math.round(Number(tss.state))), "TSS") : nothing}
                ${epoc ? this._secondary(Number(epoc.state).toFixed(1), "EPOC") : nothing}
                ${feelingValue !== undefined
                  ? html`
                      <div class="sec-item">
                        <div class="feeling">
                          ${[1, 2, 3, 4, 5].map((i) => html`<i class=${i <= feelingValue ? "on" : ""}></i>`)}
                        </div>
                        <div class="sec-label">Feeling</div>
                      </div>
                    `
                  : nothing}
                ${calPerKm
                  ? this._secondary(`${Math.round(Number(calPerKm.state))}`, "kcal/km", "Energy")
                  : nothing}
              </div>
            `
          : nothing}
        ${weather && !UNAVAILABLE_STATES.has(weather.state)
          ? html`
              <div class="weather">
                <ha-icon .icon=${weatherIcon(weather.attributes.icon_code)}></ha-icon>
                <strong>${weather.state}°C</strong>
                ${weather.attributes.condition
                  ? html`<span class="sep">·</span><span class="cond">${weather.attributes.condition}</span>`
                  : nothing}
                ${weather.attributes.wind_speed_kmh !== undefined
                  ? html`
                      <span class="sep">·</span>
                      <ha-icon icon="mdi:weather-windy"></ha-icon>
                      <span class="cond">${Math.round(weather.attributes.wind_speed_kmh)} km/h</span>
                    `
                  : nothing}
              </div>
            `
          : nothing}
        ${(tags && !UNAVAILABLE_STATES.has(tags.state)) || achievementCount > 0
          ? html`
              <div class="footer">
                ${tags && !UNAVAILABLE_STATES.has(tags.state)
                  ? html`<span class="chip"><ha-icon icon="mdi:tag-outline"></ha-icon>${tags.state}</span>`
                  : nothing}
                ${achievementCount > 0
                  ? html`
                      <span
                        class="chip accent"
                        title=${achievements?.attributes.route_ranking
                          ? `Rank #${achievements.attributes.route_ranking} on this route`
                          : ""}
                      >
                        <ha-icon icon="mdi:trophy"></ha-icon>
                        ${achievementLabel(achievements?.attributes.achievements, achievementCount)}
                      </span>
                    `
                  : nothing}
              </div>
            `
          : nothing}
      </ha-card>
    `;
  }

  private _stat(value: string, unit: string, label: string, hr = false) {
    return html`
      <div class="stat ${hr ? "hr" : ""}">
        <div class="stat-value">${value}<span class="unit">${unit}</span></div>
        <div class="stat-label">${label}</div>
      </div>
    `;
  }

  private _secondary(value: string, unit: string, label?: string) {
    return html`
      <div class="sec-item">
        <div class="sec-value">${value}${label ? nothing : html`<span class="sec-unit">${unit}</span>`}</div>
        <div class="sec-label">${label ?? unit}</div>
      </div>
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
      .activity {
        text-transform: capitalize;
      }

      .severity {
        display: flex;
        gap: 3px;
        margin-top: 3px;
      }
      .severity i {
        display: block;
        width: 13px;
        height: 5px;
        border-radius: 2px;
        background: var(--divider-color);
      }
      .severity i.s1 {
        background: var(--sc-sev-1);
      }
      .severity i.s2 {
        background: var(--sc-sev-2);
      }
      .severity i.s3 {
        background: var(--sc-sev-3);
      }
      .severity i.s4 {
        background: var(--sc-sev-4);
      }
      .severity i.s5 {
        background: var(--sc-sev-5);
      }

      .feeling {
        display: flex;
        gap: 3px;
        align-items: center;
        height: 18px;
      }
      .feeling i {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--divider-color);
        display: block;
      }
      .feeling i.on {
        background: var(--sc-amber);
      }

      .weather {
        display: flex;
        align-items: center;
        gap: 8px;
        background: var(--sc-chip-bg);
        color: var(--sc-pulse);
        border-radius: 9px;
        padding: 8px 10px;
        font-size: 0.8rem;
      }
      .weather ha-icon {
        --mdc-icon-size: 18px;
        flex: none;
      }
      .weather strong {
        font-size: 0.88rem;
      }
      .weather .sep {
        opacity: 0.45;
      }
      .weather .cond {
        color: var(--secondary-text-color);
      }

      .footer {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-last-workout-card": SuuntoLastWorkoutCard;
  }
}
