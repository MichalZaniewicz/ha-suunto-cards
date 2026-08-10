import { html, css, nothing, type PropertyValues, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { sparkline, type SparklinePoint } from "./utils/render-helpers";
import { fetchStatisticsSeries } from "./utils/format";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);
const HISTORY_HOURS = 26;
const REFETCH_INTERVAL_MS = 10 * 60 * 1000;

/**
 * Daily 24/7 HR curve from the `suunto_app:hr` long-term statistic (hourly
 * mean, already folding in workout heartrates - see ha-suunto's
 * statistics.py). Deliberately NOT `history/period` on the live `current_hr`
 * entity: that's recorder state history, purged after ~10 days by default,
 * while external statistics persist indefinitely and are the only source
 * that actually has "today so far" reliably available.
 */
@customElement("suunto-hr-curve-card")
export class SuuntoHrCurveCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;
  @state() private _history: SparklinePoint[] = [];

  private _historyKey?: string;
  private _historyFetchedAt = 0;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-hr-curve-card" };
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
    if (!this.hass) return;
    const key = this._configuredDeviceId ?? "auto";
    const now = Date.now();
    if (key === this._historyKey && now - this._historyFetchedAt < REFETCH_INTERVAL_MS) {
      return;
    }
    this._historyKey = key;
    this._historyFetchedAt = now;

    try {
      this._history = await fetchStatisticsSeries(this.hass, "suunto_app:hr", HISTORY_HOURS, "mean");
    } catch {
      // Statistics are best-effort - the card still works from live state alone.
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

    const current = get("current_hr");
    if (!current || UNAVAILABLE_STATES.has(current.state)) {
      return this._message(
        "mdi:chart-bell-curve",
        t(hass, "empty.hr_curve.title"),
        t(hass, "empty.hr_curve.subtitle")
      );
    }

    const values = this._history.map((p) => p.v);
    const min = values.length ? Math.min(...values) : undefined;
    const max = values.length ? Math.max(...values) : undefined;

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:chart-bell-curve"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.hr_curve.title")}</div>
            <div class="subtitle">${t(hass, "card.hr_curve.subtitle")}</div>
          </div>
        </div>

        ${sparkline(this._history, "var(--sc-pulse)")}

        <div class="stats three">
          ${this._stat(String(Math.round(Number(current.state))), "bpm", t(hass, "stat.hr_now"))}
          ${min !== undefined ? this._stat(String(Math.round(min)), "bpm", t(hass, "stat.hr_min")) : nothing}
          ${max !== undefined ? this._stat(String(Math.round(max)), "bpm", t(hass, "stat.hr_max")) : nothing}
        </div>
      </ha-card>
    `;
  }

  private _stat(value: string, unit: string, label: string) {
    return html`
      <div class="stat hr">
        <div class="stat-value">${value}<span class="unit">${unit}</span></div>
        <div class="stat-label">${label}</div>
      </div>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .stats.three {
        grid-template-columns: repeat(3, 1fr);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-hr-curve-card": SuuntoHrCurveCard;
  }
}
