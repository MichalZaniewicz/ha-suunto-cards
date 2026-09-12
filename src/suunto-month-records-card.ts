import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig, SuuntoHass } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { formatRelative } from "./utils/format";
import { t, type TranslationKey } from "./utils/localize";
import { computePrRows, type PrEntry } from "./utils/achievements";

/**
 * This month's personal bests - same 6-row shape (streak + pace/climb/
 * workout/distance/session) as the all-time records inside
 * suunto-achievements-card, just scoped to training_records_month, which
 * carries the identical attribute set. A dedicated card because the sibling
 * suunto-month-story-card only surfaces the streak count, leaving the actual
 * record VALUES for this month (fastest pace, biggest climb, ...) with
 * nowhere to show - no new sensor needed, the data was already there.
 */
@customElement("suunto-month-records-card")
export class SuuntoMonthRecordsCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-month-records-card" };
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

    const rows = computePrRows(hass, map, "training_records_month").filter((r) => r.entry);

    if (!rows.length) {
      return this._message(
        "mdi:medal-outline",
        t(hass, "empty.month_records.title"),
        t(hass, "empty.month_records.subtitle")
      );
    }

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:medal-outline"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.month_records.title")}</div>
            <div class="subtitle">
              ${t(hass, "card.month_records.subtitle", { count: rows.length, total: 6 })}
            </div>
          </div>
        </div>

        <div class="rec-list">
          ${rows.map((r) => this._recordRow(hass, r.icon, r.labelKey, r.entry as PrEntry, r.render))}
        </div>
      </ha-card>
    `;
  }

  private _recordRow(
    hass: SuuntoHass,
    icon: string,
    labelKey: TranslationKey,
    entry: PrEntry,
    render: (e: PrEntry) => string
  ): TemplateResult {
    const when = entry.start_time ? formatRelative(new Date(entry.start_time), hass.language) : undefined;
    return html`
      <div class="rrow">
        <div class="ic">${icon}</div>
        <div class="info">
          <div class="name">${t(hass, labelKey)}</div>
          <div class="meta">${entry.activity ? `${entry.activity} · ` : ""}${when ?? ""}</div>
        </div>
        <div class="rec-value">${render(entry)}</div>
      </div>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .rec-list {
        display: flex;
        flex-direction: column;
      }
      .rrow {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 7px 0;
      }
      .rrow .ic {
        width: 28px;
        height: 28px;
        border-radius: 9px;
        flex: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
        background: var(--sc-amber-bg);
      }
      .rrow .info {
        flex: 1;
        min-width: 0;
      }
      .rrow .name {
        font-size: 0.8rem;
        font-weight: 600;
      }
      .rrow .meta {
        font-size: 0.63rem;
        color: var(--secondary-text-color);
        margin-top: 2px;
      }
      .rrow .rec-value {
        flex: none;
        font-size: 0.82rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-month-records-card": SuuntoMonthRecordsCard;
  }
}
