import { html, css, nothing, type PropertyValues, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { barChart, type Bar, type SparklinePoint } from "./utils/render-helpers";
import { parseHistorySeries, type RawHistoryPoint } from "./utils/format";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);
const WEEKS = 12;
const HISTORY_DAYS = WEEKS * 7;
const REFETCH_INTERVAL_MS = 10 * 60 * 1000;

interface WeekBucket {
  value: number;
  weekEndMs: number;
}

/**
 * `weekly_distance` is a rolling 7-day sum, sampled here once per 7-day
 * window - not a true disjoint calendar-week total, but consecutive 7-day
 * samples approximate one closely enough for a trend bar chart. A missing
 * window (no sample in range, e.g. before the sensor existed) shows as 0.
 */
function bucketWeeks(points: SparklinePoint[], weeks: number): WeekBucket[] {
  const sorted = [...points].sort((a, b) => a.t - b.t);
  const now = Date.now();
  const buckets: WeekBucket[] = [];
  for (let w = weeks - 1; w >= 0; w--) {
    const weekEndMs = now - w * 7 * 86400000;
    const weekStartMs = weekEndMs - 7 * 86400000;
    const inBucket = sorted.filter((p) => p.t > weekStartMs && p.t <= weekEndMs);
    const last = inBucket[inBucket.length - 1];
    buckets.push({ value: last ? last.v : 0, weekEndMs });
  }
  return buckets;
}

@customElement("suunto-weekly-volume-card")
export class SuuntoWeeklyVolumeCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;
  @state() private _history: SparklinePoint[] = [];

  private _historyEntityId?: string;
  private _historyFetchedAt = 0;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-weekly-volume-card" };
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
    const entityId = resolved.map["weekly_distance"];
    if (!entityId) return;

    const now = Date.now();
    if (entityId === this._historyEntityId && now - this._historyFetchedAt < REFETCH_INTERVAL_MS) {
      return;
    }
    this._historyEntityId = entityId;
    this._historyFetchedAt = now;

    try {
      const start = new Date(now - HISTORY_DAYS * 86400000).toISOString();
      const result = await this.hass.callApi<RawHistoryPoint[][]>(
        "GET",
        `history/period/${start}?filter_entity_id=${entityId}&no_attributes`
      );
      this._history = parseHistorySeries(result?.[0]);
    } catch {
      // History API is best-effort - the card still works from live state alone.
      this._history = [];
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

    const current = get("weekly_distance");
    if (!current || UNAVAILABLE_STATES.has(current.state)) {
      return this._message("mdi:chart-bar", t(hass, "empty.weekly_volume.title"));
    }

    const buckets = bucketWeeks(this._history, WEEKS);
    const bars: Bar[] = buckets.map((b) => ({
      value: b.value,
      label: `${new Date(b.weekEndMs).toLocaleDateString(hass.language, { month: "short", day: "numeric" })} · ${b.value.toFixed(1)} km`,
    }));
    const total = buckets.reduce((sum, b) => sum + b.value, 0);
    const average = total / WEEKS;

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:chart-bar"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.weekly_volume.title")}</div>
            <div class="subtitle">${t(hass, "card.weekly_volume.subtitle")}</div>
          </div>
        </div>

        ${barChart(bars, "var(--sc-amber)", 300, 80)}

        <div class="stats">
          ${this._stat(Number(current.state).toFixed(1), "km", t(hass, "stat.distance"))}
          ${this._stat(average.toFixed(1), "km", t(hass, "stat.average"))}
          ${this._stat(total.toFixed(0), "km", t(hass, "stat.total"))}
        </div>
      </ha-card>
    `;
  }

  private _stat(value: string, unit: string, label: string) {
    return html`
      <div class="stat">
        <div class="stat-value">${value}<span class="unit">${unit}</span></div>
        <div class="stat-label">${label}</div>
      </div>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-weekly-volume-card": SuuntoWeeklyVolumeCard;
  }
}
