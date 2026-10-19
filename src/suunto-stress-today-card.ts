import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { formatDuration, formatTime } from "./utils/format";
import { t } from "./utils/localize";
import {
  STRESS_STATES,
  readStressDay,
  stressColor,
  stressLabel,
  type StressDay,
} from "./utils/stress";

const MINUTES_PER_DAY = 1440;

/**
 * Stress & Recovery: minutes recovering / active / inactive / stressed today
 * and yesterday, from ha-suunto 1.0.37's `stress_today` sensor - the four
 * states of the Suunto app's "Resources" chart. Today's bar runs on a
 * 24-hour scale, so the part of the day not synced yet stays grey.
 */
@customElement("suunto-stress-today-card")
export class SuuntoStressTodayCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-stress-today-card" };
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

    const entity = map["stress_today"] ? hass.states[map["stress_today"]] : undefined;
    const today = readStressDay(entity?.attributes);
    const yesterday = readStressDay(entity?.attributes.yesterday);
    if (!today && !yesterday) {
      return this._message(
        "mdi:chart-donut",
        t(hass, "empty.stress_today.title"),
        t(hass, "empty.stress_today.subtitle")
      );
    }

    // Today's samples cover midnight up to the newest one, so that is "until".
    const until = today ? this._until(today) : undefined;
    const subtitle = today
      ? t(hass, "stress_today.subtitle_today", { time: until ? formatTime(until, hass.language) : "" })
      : t(hass, "stress_today.subtitle_waiting");
    const main = today ?? yesterday!;

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon .icon=${this._icon("mdi:chart-donut")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(t(hass, "card.stress_today.title"))}</div>
            <div class="subtitle">${subtitle}</div>
          </div>
        </div>

        ${this._bar(main)}
        <div class="legend">
          ${STRESS_STATES.map((s) => {
            const d = formatDuration(main.minutes[s]);
            return html`
              <div class="lg">
                <span class="dot" style="background:${stressColor(s)}"></span>
                <div class="lg-text">
                  <span class="stat-value">${d.value}<span class="unit">${d.unit}</span></span>
                  <span class="stat-label">${stressLabel(hass, s)}</span>
                </div>
              </div>
            `;
          })}
        </div>

        ${today && yesterday
          ? html`
              <hr />
              <div class="yday">
                <span>${t(hass, "stress_today.yesterday")}</span>
                ${this._bar(yesterday, true)}
                <span class="txt">${this._summary(yesterday)}</span>
              </div>
            `
          : nothing}
      </ha-card>
    `;
  }

  /** The end of today's last 30-minute sample: midnight + all counted minutes. */
  private _until(day: StressDay): Date | undefined {
    if (!day.date) return undefined;
    const [y, m, d] = day.date.split("-").map(Number);
    if (!y || !m || !d) return undefined;
    const total = STRESS_STATES.reduce((sum, s) => sum + day.minutes[s], 0);
    return new Date(y, m - 1, d, 0, total);
  }

  private _bar(day: StressDay, thin = false): TemplateResult {
    const used = STRESS_STATES.reduce((sum, s) => sum + day.minutes[s], 0);
    return html`
      <div class="bar day ${thin ? "thin" : ""}">
        ${STRESS_STATES.filter((s) => day.minutes[s] > 0).map(
          (s) => html`<div class="seg" style="flex:${day.minutes[s]} 0 0;background:${stressColor(s)}"></div>`
        )}
        ${used < MINUTES_PER_DAY ? html`<div style="flex:${MINUTES_PER_DAY - used} 0 0"></div>` : nothing}
      </div>
    `;
  }

  /** "Stressed 0 min · recovering 6:30 h · active 7:30 h". */
  private _summary(day: StressDay): string {
    const hass = this.hass;
    return (["stressed", "recovering", "active"] as const)
      .map((s) => {
        const d = formatDuration(day.minutes[s]);
        return `${stressLabel(hass, s)} ${d.value} ${d.unit}`;
      })
      .join(" · ");
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .bar.day {
        gap: 2px;
      }
      .bar.thin {
        height: 6px;
        border-radius: 3px;
      }
      .legend {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
        gap: 10px 14px;
      }
      .lg {
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
      }
      .lg-text {
        display: flex;
        flex-direction: column;
        min-width: 0;
      }
      .yday {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 6px 10px;
        align-items: center;
        font-size: 0.72rem;
        color: var(--secondary-text-color);
      }
      .yday .txt {
        grid-column: 2;
        font-variant-numeric: tabular-nums;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-stress-today-card": SuuntoStressTodayCard;
  }
}
