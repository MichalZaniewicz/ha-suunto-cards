import { html, css, nothing, type PropertyValues, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { sparkline, type SparklinePoint } from "./utils/render-helpers";
import { fetchStatisticsSeries } from "./utils/format";
import { t } from "./utils/localize";
import type { SuuntoHass } from "./utils/types";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);
const HISTORY_DAYS = 30;
const REFETCH_INTERVAL_MS = 10 * 60 * 1000;

/** Same thresholds as suunto-sleep-readiness-card's readiness ring - duplicated (not imported) to keep cards independent of each other. */
function readinessBand(hass: SuuntoHass | undefined, pct: number): { colorVar: string; label: string } {
  if (pct >= 70) return { colorVar: "var(--sc-good)", label: t(hass, "band.readiness.great") };
  if (pct >= 40) return { colorVar: "var(--sc-warn)", label: t(hass, "band.readiness.fair") };
  return { colorVar: "var(--sc-bad)", label: t(hass, "band.readiness.low") };
}

/**
 * 30-day readiness trend from the `suunto_app:readiness` daily statistic.
 * Today's readiness is already the headline of suunto-sleep-readiness-card;
 * this shows the shape of it over a month, which a single day's number
 * can't. One point per day, same as suunto-sleep-trends-card.
 */
@customElement("suunto-readiness-trend-card")
export class SuuntoReadinessTrendCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;
  @state() private _history: SparklinePoint[] = [];

  private _historyKey?: string;
  private _historyFetchedAt = 0;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-readiness-trend-card" };
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
    if (!this.hass) return;
    const key = this._configuredDeviceId ?? "auto";
    const now = Date.now();
    if (key === this._historyKey && now - this._historyFetchedAt < REFETCH_INTERVAL_MS) {
      return;
    }
    this._historyKey = key;
    this._historyFetchedAt = now;

    try {
      this._history = await fetchStatisticsSeries(this.hass, "suunto_app:readiness", HISTORY_DAYS * 24, "mean");
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

    const readiness = get("readiness");
    if (!readiness || UNAVAILABLE_STATES.has(readiness.state)) {
      return this._message("mdi:gauge", t(hass, "empty.readiness_trend.title"));
    }

    const value = Number(readiness.state);
    const band = readinessBand(hass, value);

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:gauge"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.readiness_trend.title")}</div>
            <div class="subtitle">${t(hass, "card.readiness_trend.subtitle")}</div>
          </div>
        </div>

        ${sparkline(this._history, band.colorVar)}

        <div class="stats one">
          <div class="stat">
            <div class="stat-value" style="color:${band.colorVar}">${Math.round(value)}</div>
            <div class="stat-label">${band.label}</div>
          </div>
        </div>
      </ha-card>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .stats.one {
        grid-template-columns: 1fr;
      }
      .stat-value {
        font-size: 1.4rem;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-readiness-trend-card": SuuntoReadinessTrendCard;
  }
}
