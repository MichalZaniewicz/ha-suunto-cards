import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { formatDistance } from "./utils/format";
import { t } from "./utils/localize";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

type Period = "year" | "month";

/** Whole-number amount in the currency Home Assistant is set to (falls back to a plain number). */
function formatMoney(value: number, locale: string | undefined, currency: string | undefined): string {
  if (currency) {
    try {
      return new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: 0 }).format(value);
    } catch {
      // Unknown currency code - fall through to the plain number.
    }
  }
  return Math.round(value).toLocaleString(locale);
}

/**
 * What commuting under your own power saved: money first, then fuel and CO2,
 * from ha-suunto 1.0.29's `commute_year` / `commute_month` sensors. `period`
 * picks which one is the headline; the other becomes the one-line footer.
 */
@customElement("suunto-commute-card")
export class SuuntoCommuteCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-commute-card" };
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
    const units = this._config.units ?? "metric";
    const main: Period = this._config.period === "month" ? "month" : "year";
    const other: Period = main === "year" ? "month" : "year";

    const read = (period: Period) => {
      const entity = map[`commute_${period}`] ? hass.states[map[`commute_${period}`]] : undefined;
      if (!entity || UNAVAILABLE_STATES.has(entity.state)) return undefined;
      const a = entity.attributes;
      const num = (v: unknown) => (typeof v === "number" ? v : undefined);
      return {
        km: Number(entity.state),
        rides: num(a.rides) ?? 0,
        days: num(a.days) ?? 0,
        avgMin: num(a.avg_duration_min),
        fuel: num(a.fuel_saved_l) ?? 0,
        money: num(a.money_saved) ?? 0,
        co2: num(a.co2_saved_kg) ?? 0,
      };
    };

    const head = read(main);
    if (!head || head.rides === 0) {
      return this._message("mdi:bike-fast", t(hass, "empty.commute.title"), t(hass, "empty.commute.subtitle"));
    }
    const foot = read(other);
    const currency = (hass.config as { currency?: string } | undefined)?.currency;
    const whole = (km: number) => {
      const d = formatDistance(km, units, 0);
      return { value: Number(d.value).toLocaleString(hass.language), unit: d.unit };
    };
    const distance = whole(head.km);

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon icon="mdi:bike-fast"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.commute.title")}</div>
            <div class="subtitle">${t(hass, `card.commute.subtitle_${main}`)}</div>
          </div>
        </div>

        <div>
          <div class="hero">
            <span class="hero-num">${formatMoney(head.money, hass.language, currency)}</span>
            <span class="hero-unit">${t(hass, "commute.saved")}</span>
          </div>
          <div class="hero-sub">
            ${t(hass, "commute.fuel_co2", {
              fuel: head.fuel.toLocaleString(hass.language, { maximumFractionDigits: 1 }),
              co2: Math.round(head.co2).toLocaleString(hass.language),
            })}
          </div>
        </div>

        <div class="stats">
          ${this._stat(distance.value, distance.unit, t(hass, "stat.distance"))}
          ${this._stat(head.rides.toLocaleString(hass.language), "", t(hass, "stat.rides"))}
          ${this._stat(head.days.toLocaleString(hass.language), "", t(hass, "stat.days"))}
          ${head.avgMin !== undefined
            ? this._stat(String(Math.round(head.avgMin)), "min", t(hass, "stat.avg_time"))
            : nothing}
        </div>

        ${foot && foot.rides > 0
          ? (() => {
              const d = whole(foot.km);
              return html`
                <div class="other-row">
                  <span>${t(hass, `commute.this_${other}`)}</span>
                  <strong>${d.value} ${d.unit}</strong>
                  <span>·</span>
                  <strong>${t(hass, "commute.rides_n", { n: foot.rides })}</strong>
                  <span>·</span>
                  <strong>${formatMoney(foot.money, hass.language, currency)}</strong>
                </div>
              `;
            })()
          : nothing}
      </ha-card>
    `;
  }

  private _stat(value: string, unit: string, label: string) {
    return html`
      <div class="stat">
        <div class="stat-value">${value}${unit ? html`<span class="unit">${unit}</span>` : nothing}</div>
        <div class="stat-label">${label}</div>
      </div>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .hero {
        display: flex;
        align-items: baseline;
        gap: 6px;
        flex-wrap: wrap;
      }
      .hero-num {
        font-size: 2rem;
        font-weight: 700;
        line-height: 1;
        font-variant-numeric: tabular-nums;
        color: var(--sc-good);
      }
      .hero-unit {
        font-size: 0.85rem;
        font-weight: 500;
        color: var(--secondary-text-color);
      }
      .hero-sub {
        font-size: 0.76rem;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }
      .other-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px 10px;
        background: var(--sc-chip-bg);
        border-radius: 9px;
        padding: 9px 12px;
        font-size: 0.78rem;
        color: var(--secondary-text-color);
      }
      .other-row strong {
        color: var(--primary-text-color);
        font-weight: 600;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-commute-card": SuuntoCommuteCard;
  }
}
