import { html, css, nothing, type PropertyValues, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { sparkline, type SparklinePoint } from "./utils/render-helpers";
import { formatDelta } from "./utils/format";
import { t } from "./utils/localize";
import type { SuuntoHass } from "./utils/types";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);
const HISTORY_DAYS = 30;
const REFETCH_INTERVAL_MS = 10 * 60 * 1000;

interface RawHistoryPoint {
  state: string;
  last_updated?: string;
  last_changed?: string;
}

/** Presentation-only banding for Training Stress Balance (form). */
function formBand(hass: SuuntoHass | undefined, tsb: number): { colorVar: string; label: string } {
  if (tsb > 5) return { colorVar: "var(--sc-good)", label: t(hass, "band.form.fresh") };
  if (tsb < -20) return { colorVar: "var(--sc-bad)", label: t(hass, "band.form.very_fatigued") };
  if (tsb < -5) return { colorVar: "var(--sc-warn)", label: t(hass, "band.form.fatigued") };
  return { colorVar: "var(--sc-pulse)", label: t(hass, "band.form.neutral") };
}

/** ACWR safe zone (~0.8-1.3) mirrors the thresholds the integration itself uses. */
function acwrBand(hass: SuuntoHass | undefined, acwr: number): { colorVar: string; label: string } {
  if (acwr > 1.3) return { colorVar: "var(--sc-bad)", label: t(hass, "band.acwr.high") };
  if (acwr < 0.8) return { colorVar: "var(--sc-warn)", label: t(hass, "band.acwr.low") };
  return { colorVar: "var(--sc-good)", label: t(hass, "band.acwr.safe") };
}

@customElement("suunto-training-load-card")
export class SuuntoTrainingLoadCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;
  @state() private _history: SparklinePoint[] = [];

  private _historyEntityId?: string;
  private _historyFetchedAt = 0;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-training-load-card" };
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
    const entityId = resolved.map["fitness_ctl"];
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
      const series = (result?.[0] ?? [])
        .map((p) => {
          const t = new Date(p.last_updated ?? p.last_changed ?? "").getTime();
          const v = Number(p.state);
          return { t, v };
        })
        .filter((p) => Number.isFinite(p.t) && Number.isFinite(p.v));
      this._history = series;
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

    const ctl = get("fitness_ctl");
    if (!ctl || UNAVAILABLE_STATES.has(ctl.state)) {
      return this._message(
        "mdi:arm-flex",
        t(hass, "empty.training_load.title"),
        t(hass, "empty.training_load.subtitle")
      );
    }

    const atl = get("fatigue_atl");
    const tsb = get("form_tsb");
    const acwr = get("acwr");

    const tsbValue = tsb && !UNAVAILABLE_STATES.has(tsb.state) ? Number(tsb.state) : undefined;
    const band = tsbValue !== undefined ? formBand(hass, tsbValue) : undefined;
    const acwrValue = acwr && !UNAVAILABLE_STATES.has(acwr.state) ? Number(acwr.state) : undefined;
    const acwrInfo = acwrValue !== undefined ? acwrBand(hass, acwrValue) : undefined;

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:arm-flex"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.training_load.title")}</div>
            <div class="subtitle">${band ? band.label : t(hass, "card.training_load.subtitle_fallback")}</div>
          </div>
        </div>

        ${sparkline(this._history, "var(--sc-amber)")}

        <div class="stats three">
          ${this._stat(Number(ctl.state).toFixed(0), t(hass, "stat.ctl"))}
          ${atl ? this._stat(Number(atl.state).toFixed(0), t(hass, "stat.atl")) : nothing}
          ${tsbValue !== undefined
            ? this._stat(formatDelta(tsbValue, 1), t(hass, "stat.tsb"), band?.colorVar)
            : nothing}
        </div>

        ${acwrValue !== undefined && acwrInfo
          ? html`
              <div class="footer">
                <span class="chip" style="color:${acwrInfo.colorVar}">
                  <ha-icon icon="mdi:scale-balance"></ha-icon>
                  ${t(hass, "chip.acwr", { value: acwrValue.toFixed(2), label: acwrInfo.label })}
                </span>
              </div>
            `
          : nothing}
      </ha-card>
    `;
  }

  private _stat(value: string, label: string, colorVar?: string) {
    return html`
      <div class="stat">
        <div class="stat-value" style=${colorVar ? `color:${colorVar}` : ""}>${value}</div>
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
      .footer {
        display: flex;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-training-load-card": SuuntoTrainingLoadCard;
  }
}
