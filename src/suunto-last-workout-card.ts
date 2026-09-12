import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import { fireEvent, type LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { activityIcon, weatherIcon } from "./utils/icons";
import { formatDuration, formatDistance, formatPaceUnits, formatSpeed, formatRelative, formatTime } from "./utils/format";
import { t, tPlural } from "./utils/localize";
import type { SuuntoHass } from "./utils/types";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

function achievementLabel(hass: SuuntoHass | undefined, raw: unknown, count: number): string {
  if (Array.isArray(raw) && raw.length) {
    const first = raw[0];
    if (typeof first === "string") return first;
    if (first && typeof first === "object") {
      const obj = first as Record<string, unknown>;
      const label = obj.name ?? obj.title ?? obj.type;
      if (typeof label === "string") return label;
    }
  }
  return tPlural(hass, count, "achievement.count_one", "achievement.count_other");
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
    const units = this._config.units ?? "metric";
    const compact = this._config.compact ?? false;

    const activity = get("last_activity");
    if (!activity || UNAVAILABLE_STATES.has(activity.state)) {
      return this._message(
        "mdi:calendar-blank-outline",
        t(hass, "empty.last_workout.title"),
        t(hass, "empty.last_workout.subtitle")
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
    const cadence = get("last_cadence");
    const pctHrmax = get("last_pct_hrmax");
    const stride = get("last_stride");
    const weather = get("last_workout_weather");
    const tags = get("last_workout_tags");
    const achievements = get("last_workout_achievements");

    const distanceValue =
      distance && !UNAVAILABLE_STATES.has(distance.state) ? Number(distance.state) : undefined;
    const durationParts =
      duration && !UNAVAILABLE_STATES.has(duration.state) ? formatDuration(Number(duration.state)) : undefined;
    const paceValue = pace && !UNAVAILABLE_STATES.has(pace.state) ? Number(pace.state) : undefined;
    const speedValue = speed && !UNAVAILABLE_STATES.has(speed.state) ? Number(speed.state) : undefined;
    const hasSpeed = paceValue === undefined && speedValue !== undefined;
    const avgHrValue = avgHr && !UNAVAILABLE_STATES.has(avgHr.state) ? Number(avgHr.state) : undefined;
    const maxHrValue = maxHr && !UNAVAILABLE_STATES.has(maxHr.state) ? Number(maxHr.state) : undefined;
    const feelingValue =
      feeling && !UNAVAILABLE_STATES.has(feeling.state) ? Number(feeling.state) : undefined;
    const pteValue = pte && !UNAVAILABLE_STATES.has(pte.state) ? Number(pte.state) : undefined;
    const achievementCount =
      achievements && !UNAVAILABLE_STATES.has(achievements.state) ? Number(achievements.state) : 0;
    const strideValue =
      stride && !UNAVAILABLE_STATES.has(stride.state) ? Number(stride.state) : undefined;
    const tssValue = tss && !UNAVAILABLE_STATES.has(tss.state) ? Number(tss.state) : undefined;
    const tssMetValue =
      tss && !UNAVAILABLE_STATES.has(tss.state) && typeof tss.attributes.tss_met === "number"
        ? tss.attributes.tss_met
        : undefined;
    const manuallyAdded = tags?.attributes.is_manually_added === true;
    const epocValue = epoc && !UNAVAILABLE_STATES.has(epoc.state) ? Number(epoc.state) : undefined;
    const calPerKmValue =
      calPerKm && !UNAVAILABLE_STATES.has(calPerKm.state) ? Number(calPerKm.state) : undefined;
    const cadenceValue =
      cadence && !UNAVAILABLE_STATES.has(cadence.state) ? Number(cadence.state) : undefined;
    const pctHrmaxValue =
      pctHrmax && !UNAVAILABLE_STATES.has(pctHrmax.state) ? Number(pctHrmax.state) : undefined;

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
          ${distanceValue !== undefined
            ? (() => {
                const d = formatDistance(distanceValue / 1000, units);
                return this._stat(d.value, d.unit, t(hass, "stat.distance"));
              })()
            : nothing}
          ${durationParts
            ? this._stat(durationParts.value, durationParts.unit, t(hass, "stat.duration"))
            : nothing}
          ${paceValue !== undefined
            ? (() => {
                const p = formatPaceUnits(paceValue, units);
                return this._stat(p.value, p.unit, t(hass, "stat.avg_pace"));
              })()
            : hasSpeed
              ? (() => {
                  const s = formatSpeed(speedValue!, units);
                  return this._stat(s.value, s.unit, t(hass, "stat.avg_speed"));
                })()
              : nothing}
          ${avgHrValue !== undefined
            ? this._stat(String(Math.round(avgHrValue)), "bpm", t(hass, "stat.avg_hr"), true)
            : nothing}
          ${maxHrValue !== undefined
            ? this._stat(String(Math.round(maxHrValue)), "bpm", t(hass, "stat.max_hr"), true)
            : nothing}
          ${pteValue !== undefined
            ? html`
                <div class="stat">
                  <div class="stat-value">${pteValue.toFixed(1)}</div>
                  <div class="stat-label">${t(hass, "stat.training_effect")}</div>
                  <div class="severity">
                    ${[1, 2, 3, 4, 5].map(
                      (i) => html`<i class=${i <= Math.round(pteValue) ? `on s${i}` : ""}></i>`
                    )}
                  </div>
                </div>
              `
            : nothing}
        </div>

        ${!compact &&
        (tssValue !== undefined ||
          tssMetValue !== undefined ||
          epocValue !== undefined ||
          feelingValue !== undefined ||
          calPerKmValue !== undefined ||
          cadenceValue !== undefined ||
          pctHrmaxValue !== undefined ||
          strideValue !== undefined)
          ? html`
              <hr />
              <div class="secondary">
                ${tssValue !== undefined
                  ? this._secondary(String(Math.round(tssValue)), t(hass, "stat.tss"))
                  : nothing}
                ${tssMetValue !== undefined
                  ? this._secondary(String(Math.round(tssMetValue)), t(hass, "stat.tss_met"))
                  : nothing}
                ${epocValue !== undefined
                  ? this._secondary(epocValue.toFixed(1), t(hass, "stat.epoc"))
                  : nothing}
                ${feelingValue !== undefined
                  ? html`
                      <div class="sec-item">
                        <div class="feeling">
                          ${[1, 2, 3, 4, 5].map((i) => html`<i class=${i <= feelingValue ? "on" : ""}></i>`)}
                        </div>
                        <div class="sec-label">${t(hass, "stat.feeling")}</div>
                      </div>
                    `
                  : nothing}
                ${calPerKmValue !== undefined
                  ? this._secondary(`${Math.round(calPerKmValue)}`, t(hass, "stat.energy"), "kcal/km")
                  : nothing}
                ${cadenceValue !== undefined
                  ? this._secondary(String(Math.round(cadenceValue)), t(hass, "stat.cadence"), "rpm")
                  : nothing}
                ${pctHrmaxValue !== undefined
                  ? this._secondary(String(Math.round(pctHrmaxValue)), t(hass, "stat.pct_hrmax"), "%")
                  : nothing}
                ${strideValue !== undefined
                  ? this._secondary(strideValue.toFixed(2), t(hass, "stat.stride_length"), "m")
                  : nothing}
              </div>
            `
          : nothing}
        ${!compact && weather && !UNAVAILABLE_STATES.has(weather.state)
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
        ${!compact &&
        ((tags && !UNAVAILABLE_STATES.has(tags.state)) || achievementCount > 0 || manuallyAdded)
          ? html`
              <div class="footer">
                ${tags && !UNAVAILABLE_STATES.has(tags.state)
                  ? html`<span class="chip"><ha-icon icon="mdi:tag-outline"></ha-icon>${tags.state}</span>`
                  : nothing}
                ${manuallyAdded
                  ? html`<span class="chip"><ha-icon icon="mdi:pencil-outline"></ha-icon>${t(hass, "chip.manually_added")}</span>`
                  : nothing}
                ${achievementCount > 0
                  ? html`
                      <span
                        class="chip accent"
                        title=${achievements?.attributes.route_ranking
                          ? t(hass, "achievement.rank", { rank: achievements.attributes.route_ranking })
                          : ""}
                      >
                        <ha-icon icon="mdi:trophy"></ha-icon>
                        ${achievementLabel(hass, achievements?.attributes.achievements, achievementCount)}
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

  private _secondary(value: string, label: string, unit?: string) {
    return html`
      <div class="sec-item">
        <div class="sec-value">${value}${unit ? html` <span class="sec-unit">${unit}</span>` : nothing}</div>
        <div class="sec-label">${label}</div>
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
