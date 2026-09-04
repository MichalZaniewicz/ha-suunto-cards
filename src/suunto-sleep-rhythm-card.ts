import { html, css, nothing, type PropertyValues, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig, SuuntoHass } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { fetchEntityHistory, formatTime, type HistoryPoint } from "./utils/format";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);
const HISTORY_DAYS = 9;
const NIGHTS_SHOWN = 7;
const REFETCH_INTERVAL_MS = 30 * 60 * 1000;
const AXIS_START_HOUR = 20;
const AXIS_SPAN_MIN = 16 * 60;
const OUTLIER_THRESHOLD_MIN = 30;

interface Night {
  bedtime: Date;
  wake: Date;
}

function localDayKey(d: Date): string {
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

/** Latest point per local calendar day - a sensor updates once per cycle, so the last write of a given day is that day's final value. */
function latestPerDay(points: HistoryPoint[]): Map<string, HistoryPoint> {
  const byDay = new Map<string, HistoryPoint>();
  for (const p of points) {
    if (UNAVAILABLE_STATES.has(p.state)) continue;
    const key = localDayKey(new Date(p.lastChanged));
    const existing = byDay.get(key);
    if (!existing || p.lastChanged > existing.lastChanged) byDay.set(key, p);
  }
  return byDay;
}

/** Minutes after AXIS_START_HOUR, wrapping past midnight - for placing a bar on the shared 20:00-12:00 axis. */
function axisMinutes(d: Date): number {
  const raw = (d.getHours() - AXIS_START_HOUR) * 60 + d.getMinutes();
  return raw < 0 ? raw + 1440 : raw;
}

/**
 * Bedtime/wake regularity over the last 7 nights - a different angle from
 * suunto-sleep-trends-card's 30-day duration/quality LINE chart: this shows
 * WHEN you actually sleep, not how long or how well.
 *
 * Needs raw entity STATE history (not long-term statistics): `wake_time` is
 * a timestamp sensor with no state_class, so HA never generates a long-term
 * statistic for it at any window length - the only way to see more than
 * "today's" reading is the recorder's short-term history, which is why this
 * card is deliberately a 7-night window (comfortably inside the ~10-day
 * default retention) rather than a longer one.
 */
@customElement("suunto-sleep-rhythm-card")
export class SuuntoSleepRhythmCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;
  @state() private _nights: Night[] = [];

  private _historyKey?: string;
  private _historyFetchedAt = 0;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-sleep-rhythm-card" };
  }

  public setConfig(config: SuuntoCardConfig): void {
    this._config = config;
    this._configuredDeviceId = config.device_id;
  }

  public getCardSize(): number {
    return 4;
  }

  protected willUpdate(changed: PropertyValues): void {
    if (changed.has("hass") && this.hass && this._config) {
      void this._maybeFetchHistory();
    }
  }

  private async _maybeFetchHistory(): Promise<void> {
    const resolved = this._resolveEntities();
    if ("error" in resolved || !this.hass) return;
    const { map } = resolved;
    const wakeId = map["wake_time"];
    const durationId = map["sleep_duration"];
    if (!wakeId || !durationId) return;

    const key = `${wakeId},${durationId}`;
    const now = Date.now();
    if (key === this._historyKey && now - this._historyFetchedAt < REFETCH_INTERVAL_MS) {
      return;
    }
    this._historyKey = key;
    this._historyFetchedAt = now;

    try {
      const hass = this.hass as SuuntoHass;
      const history = await fetchEntityHistory(hass, [wakeId, durationId], HISTORY_DAYS);
      this._nights = this._buildNights(history[wakeId] ?? [], history[durationId] ?? []);
    } catch {
      // Best-effort - the card falls back to its empty state below.
      this._nights = [];
    }
  }

  private _buildNights(wakePoints: HistoryPoint[], durationPoints: HistoryPoint[]): Night[] {
    const wakeByDay = latestPerDay(wakePoints);
    const durByDay = latestPerDay(durationPoints);

    const nights: Night[] = [];
    for (const [dayKey, wakePoint] of wakeByDay) {
      const durPoint = durByDay.get(dayKey);
      if (!durPoint) continue;
      const wake = new Date(wakePoint.state);
      const hours = Number(durPoint.state);
      if (Number.isNaN(wake.getTime()) || !Number.isFinite(hours) || hours <= 0) continue;
      nights.push({ wake, bedtime: new Date(wake.getTime() - hours * 3600000) });
    }
    nights.sort((a, b) => a.bedtime.getTime() - b.bedtime.getTime());
    return nights.slice(-NIGHTS_SHOWN);
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) return nothing;
    this._syncTheme();

    const resolved = this._resolveEntities();
    if ("error" in resolved) return resolved.error;
    const hass = this.hass;

    if (this._nights.length < 2) {
      return this._message(
        "mdi:chart-timeline-variant",
        t(hass, "empty.sleep_rhythm.title"),
        t(hass, "empty.sleep_rhythm.subtitle")
      );
    }

    const bedtimeMinutes = this._nights.map((n) => axisMinutes(n.bedtime));
    const avgBedtimeAxisMin = bedtimeMinutes.reduce((a, b) => a + b, 0) / bedtimeMinutes.length;
    const variance =
      bedtimeMinutes.reduce((sum, m) => sum + (m - avgBedtimeAxisMin) ** 2, 0) / bedtimeMinutes.length;
    const spreadMin = Math.round(Math.sqrt(variance));

    const avgWakeMinOfDay =
      this._nights.reduce((sum, n) => sum + (n.wake.getHours() * 60 + n.wake.getMinutes()), 0) / this._nights.length;
    const avgBedtimeMinOfDay = (AXIS_START_HOUR * 60 + avgBedtimeAxisMin) % 1440;

    const toClockDate = (minutesAfterMidnight: number): Date => {
      const d = new Date();
      d.setHours(0, 0, 0, 0);
      d.setMinutes(Math.round(minutesAfterMidnight));
      return d;
    };

    const dayLabel = (d: Date) => new Intl.DateTimeFormat(hass.language, { weekday: "short" }).format(d);

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:chart-timeline-variant"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.sleep_rhythm.title")}</div>
            <div class="subtitle">${t(hass, "card.sleep_rhythm.subtitle")}</div>
          </div>
        </div>

        <div class="rhythm-chart">
          ${this._nights.map((n) => {
            const bedAxisMin = axisMinutes(n.bedtime);
            const rawSpan = axisMinutes(n.wake) - bedAxisMin;
            const spanMin = rawSpan < 0 ? rawSpan + 1440 : rawSpan;
            const leftPct = (bedAxisMin / AXIS_SPAN_MIN) * 100;
            const widthPct = (spanMin / AXIS_SPAN_MIN) * 100;
            const isLate = Math.abs(bedAxisMin - avgBedtimeAxisMin) > OUTLIER_THRESHOLD_MIN;
            return html`
              <div class="rhythm-row">
                <div class="rhythm-day">${dayLabel(n.bedtime)}</div>
                <div class="rhythm-track">
                  <div class="rhythm-avgline" style="left:${(avgBedtimeAxisMin / AXIS_SPAN_MIN) * 100}%"></div>
                  <div class="rhythm-bar ${isLate ? "late" : ""}" style="left:${leftPct}%;width:${widthPct}%"></div>
                </div>
              </div>
            `;
          })}
          <div class="rhythm-axis">
            ${Array.from({ length: AXIS_SPAN_MIN / 120 + 1 }, (_, i) => i * 2).map(
              (h) => html`<span style="left:${((h * 60) / AXIS_SPAN_MIN) * 100}%">${(AXIS_START_HOUR + h) % 24}</span>`
            )}
          </div>
        </div>

        <div class="rhythm-stats">
          <span class="chip">${t(hass, "sleep_rhythm.avg_bedtime", { time: formatTime(toClockDate(avgBedtimeMinOfDay), hass.language) })}</span>
          <span class="chip">${t(hass, "sleep_rhythm.avg_wake", { time: formatTime(toClockDate(avgWakeMinOfDay), hass.language) })}</span>
          <span class="chip accent">${t(hass, "sleep_rhythm.spread", { minutes: spreadMin })}</span>
        </div>

        <div class="legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${t(hass, "sleep_rhythm.legend_normal")}</span>
          <span class="legend-item"><i class="dot" style="background:var(--sc-amber)"></i>${t(hass, "sleep_rhythm.legend_outlier", { minutes: OUTLIER_THRESHOLD_MIN })}</span>
        </div>
      </ha-card>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .rhythm-chart {
        display: flex;
        flex-direction: column;
        gap: 7px;
      }
      .rhythm-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .rhythm-day {
        width: 30px;
        flex: none;
        font-size: 0.68rem;
        color: var(--secondary-text-color);
      }
      .rhythm-track {
        position: relative;
        flex: 1;
        height: 14px;
        background: var(--divider-color);
        border-radius: 4px;
      }
      .rhythm-bar {
        position: absolute;
        top: 0;
        bottom: 0;
        border-radius: 4px;
        background: var(--sc-pulse);
      }
      .rhythm-bar.late {
        background: var(--sc-amber);
      }
      .rhythm-avgline {
        position: absolute;
        top: -3px;
        bottom: -3px;
        width: 0;
        border-left: 1.5px dashed var(--secondary-text-color);
        opacity: 0.55;
      }
      .rhythm-axis {
        display: flex;
        position: relative;
        height: 14px;
        margin-left: 38px;
      }
      .rhythm-axis span {
        position: absolute;
        transform: translateX(-50%);
        font-size: 0.62rem;
        color: var(--secondary-text-color);
      }
      .rhythm-stats {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }
      .legend {
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
      }
      .legend-item {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.74rem;
        color: var(--secondary-text-color);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-sleep-rhythm-card": SuuntoSleepRhythmCard;
  }
}
