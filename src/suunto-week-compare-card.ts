import { html, css, nothing, type PropertyValues, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig, SuuntoHass } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { fetchEntityHistory, formatDistance, type HistoryPoint } from "./utils/format";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);
const HISTORY_DAYS = 9;
const COMPARE_WINDOW_MS = 7 * 86400000;
const REFETCH_INTERVAL_MS = 30 * 60 * 1000;

interface CompareRow {
  key: string;
  label: string;
  now: number;
  prev: number;
  formatNow: string;
  formatPrev: string;
  formatDelta: string;
}

/** The numeric state in effect at `targetMs` - the last point at or before it, skipping unavailable states. Undefined if history doesn't reach back that far. */
function valueAtOrBefore(points: HistoryPoint[], targetMs: number): number | undefined {
  let best: HistoryPoint | undefined;
  for (const p of points) {
    if (UNAVAILABLE_STATES.has(p.state) || p.lastChanged > targetMs) continue;
    if (!best || p.lastChanged > best.lastChanged) best = p;
  }
  return best ? Number(best.state) : undefined;
}

/**
 * This week's rolling 7-day totals against LAST week's - read entirely from
 * the same live entities' own short-term recorder history (no new
 * ha-suunto sensor): `weekly_distance`/`weekly_time`/`workouts_7d` are
 * already rolling 7-day sums, so each entity's OWN state exactly 7 days ago
 * is the adjacent, non-overlapping PRIOR 7-day window's total - the same
 * "read the entity's recent history" trick suunto-sleep-rhythm-card already
 * uses for wake_time. A ~10-day recorder retention comfortably covers the
 * 7-day lookback plus margin.
 */
@customElement("suunto-week-compare-card")
export class SuuntoWeekCompareCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;
  @state() private _prevDistance?: number;
  @state() private _prevTime?: number;
  @state() private _prevWorkouts?: number;

  private _historyKey?: string;
  private _historyFetchedAt = 0;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-week-compare-card" };
  }

  public setConfig(config: SuuntoCardConfig): void {
    this._config = config;
    this._configuredDeviceId = config.device_id;
  }

  public getCardSize(): number {
    return 3;
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
    const distanceId = map["weekly_distance"];
    const timeId = map["weekly_time"];
    const workoutsId = map["workouts_7d"];
    if (!distanceId && !timeId && !workoutsId) return;

    const ids = [distanceId, timeId, workoutsId].filter((id): id is string => Boolean(id));
    const key = ids.join(",");
    const now = Date.now();
    if (key === this._historyKey && now - this._historyFetchedAt < REFETCH_INTERVAL_MS) {
      return;
    }
    this._historyKey = key;
    this._historyFetchedAt = now;

    try {
      const hass = this.hass as SuuntoHass;
      const history = await fetchEntityHistory(hass, ids, HISTORY_DAYS);
      const target = now - COMPARE_WINDOW_MS;
      this._prevDistance = distanceId ? valueAtOrBefore(history[distanceId] ?? [], target) : undefined;
      this._prevTime = timeId ? valueAtOrBefore(history[timeId] ?? [], target) : undefined;
      this._prevWorkouts = workoutsId ? valueAtOrBefore(history[workoutsId] ?? [], target) : undefined;
    } catch {
      // Best-effort - the card falls back to its empty state below.
      this._prevDistance = undefined;
      this._prevTime = undefined;
      this._prevWorkouts = undefined;
    }
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) return nothing;
    this._syncTheme();

    const resolved = this._resolveEntities();
    if ("error" in resolved) return resolved.error;
    const { map } = resolved;
    const hass = this.hass;
    const get = (key: string) => (map[key] ? hass.states[map[key]] : undefined);

    const distance = get("weekly_distance");
    const time = get("weekly_time");
    const workouts = get("workouts_7d");

    const units = this._config.units ?? "metric";
    const rows: CompareRow[] = [];
    if (distance && !UNAVAILABLE_STATES.has(distance.state) && this._prevDistance !== undefined) {
      const now = Number(distance.state);
      const nowFmt = formatDistance(now, units);
      const prevFmt = formatDistance(this._prevDistance, units);
      rows.push({
        key: "distance",
        label: t(hass, "stat.distance"),
        now,
        prev: this._prevDistance,
        formatNow: `${nowFmt.value} ${nowFmt.unit}`,
        formatPrev: `${prevFmt.value} ${prevFmt.unit}`,
        formatDelta: this._pctDelta(now, this._prevDistance),
      });
    }
    if (time && !UNAVAILABLE_STATES.has(time.state) && this._prevTime !== undefined) {
      const now = Number(time.state);
      rows.push({
        key: "time",
        label: t(hass, "stat.time"),
        now,
        prev: this._prevTime,
        formatNow: `${now.toFixed(1)} h`,
        formatPrev: `${this._prevTime.toFixed(1)} h`,
        formatDelta: this._pctDelta(now, this._prevTime),
      });
    }
    if (workouts && !UNAVAILABLE_STATES.has(workouts.state) && this._prevWorkouts !== undefined) {
      const now = Number(workouts.state);
      rows.push({
        key: "workouts",
        label: t(hass, "stat.workouts"),
        now,
        prev: this._prevWorkouts,
        formatNow: String(now),
        formatPrev: String(this._prevWorkouts),
        formatDelta: this._absDelta(now, this._prevWorkouts),
      });
    }

    if (!rows.length) {
      return this._message(
        "mdi:calendar-sync",
        t(hass, "empty.week_compare.title"),
        t(hass, "empty.week_compare.subtitle")
      );
    }

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:calendar-sync"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.week_compare.title")}</div>
            <div class="subtitle">${t(hass, "card.week_compare.subtitle")}</div>
          </div>
        </div>

        <div class="rows">
          ${rows.map((r) => {
            const max = Math.max(r.now, r.prev, 0.0001);
            const nowPct = (r.now / max) * 100;
            const prevPct = (r.prev / max) * 100;
            const tone = r.now > r.prev ? "good" : r.now < r.prev ? "bad" : "";
            return html`
              <div class="row">
                <div class="row-label">${r.label}</div>
                <div class="bars">
                  <div class="track"><div class="fill now" style="width:${nowPct}%"></div></div>
                  <div class="track"><div class="fill prev" style="width:${prevPct}%"></div></div>
                  <div class="vals"><span>${r.formatNow}</span><span>${r.formatPrev}</span></div>
                </div>
                <div class="delta ${tone}">${r.formatDelta}</div>
              </div>
            `;
          })}
        </div>

        <div class="legend">
          <span class="legend-item"><i class="dot" style="background:var(--sc-pulse)"></i>${t(hass, "week_compare.legend_now")}</span>
          <span class="legend-item"><i class="dot muted"></i>${t(hass, "week_compare.legend_prev")}</span>
        </div>
      </ha-card>
    `;
  }

  private _pctDelta(now: number, prev: number): string {
    if (prev <= 0) return now > 0 ? "+100%" : "±0%";
    const pct = Math.round(((now - prev) / prev) * 100);
    if (pct === 0) return "±0%";
    return pct > 0 ? `+${pct}%` : `${pct}%`;
  }

  private _absDelta(now: number, prev: number): string {
    const delta = Math.round(now - prev);
    if (delta === 0) return "±0";
    return delta > 0 ? `+${delta}` : String(delta);
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .rows {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .row {
        display: grid;
        grid-template-columns: 70px 1fr auto;
        align-items: center;
        gap: 10px;
      }
      .row-label {
        font-size: 0.82rem;
        color: var(--secondary-text-color);
      }
      .bars {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .track {
        height: 6px;
        border-radius: 4px;
        background: var(--divider-color);
        overflow: hidden;
      }
      .fill {
        height: 100%;
        border-radius: 4px;
      }
      .fill.now {
        background: var(--sc-pulse);
      }
      .fill.prev {
        background: var(--secondary-text-color);
        opacity: 0.45;
      }
      .vals {
        display: flex;
        justify-content: space-between;
        font-size: 0.68rem;
        color: var(--secondary-text-color);
        font-variant-numeric: tabular-nums;
      }
      .delta {
        font-size: 0.82rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        min-width: 52px;
        text-align: right;
      }
      .delta.good {
        color: var(--sc-good);
      }
      .delta.bad {
        color: var(--sc-bad);
      }
      .legend {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
        padding-top: 6px;
        border-top: 1px solid var(--divider-color);
        font-size: 0.72rem;
        color: var(--secondary-text-color);
      }
      .legend-item {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        display: inline-block;
      }
      .dot.muted {
        background: var(--secondary-text-color);
        opacity: 0.45;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-week-compare-card": SuuntoWeekCompareCard;
  }
}
