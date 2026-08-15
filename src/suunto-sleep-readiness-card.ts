import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { segmentedBar, progressRing } from "./utils/render-helpers";
import { formatDuration, formatTime, formatDelta, isToday } from "./utils/format";
import { t } from "./utils/localize";
import type { SuuntoHass } from "./utils/types";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

/** Presentation-only banding for the heuristic readiness score - not a Suunto scale. */
function readinessBand(hass: SuuntoHass | undefined, pct: number): { colorVar: string; label: string } {
  if (pct >= 70) return { colorVar: "var(--sc-good)", label: t(hass, "band.readiness.great") };
  if (pct >= 40) return { colorVar: "var(--sc-warn)", label: t(hass, "band.readiness.fair") };
  return { colorVar: "var(--sc-bad)", label: t(hass, "band.readiness.low") };
}

/**
 * "low"/"high" describe HRV relative to the user's own rolling baseline, not
 * good/bad in themselves - low usually tracks fatigue, high is often a fully
 * recovered reading, so only "low" gets a warning tone here.
 */
function hrvStatusChip(hass: SuuntoHass | undefined, status: string): { colorVar: string; label: string } {
  if (status === "low") return { colorVar: "var(--sc-warn)", label: t(hass, "band.hrv.low") };
  if (status === "high") return { colorVar: "var(--sc-pulse)", label: t(hass, "band.hrv.high") };
  return { colorVar: "var(--sc-good)", label: t(hass, "band.hrv.balanced") };
}

@customElement("suunto-sleep-readiness-card")
export class SuuntoSleepReadinessCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-sleep-readiness-card" };
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

    const duration = get("sleep_duration");
    if (!duration || UNAVAILABLE_STATES.has(duration.state)) {
      return this._message(
        "mdi:sleep",
        t(hass, "empty.sleep_readiness.title"),
        t(hass, "empty.sleep_readiness.subtitle")
      );
    }

    const wake = get("wake_time");
    const deep = get("sleep_deep");
    const light = get("sleep_light");
    const rem = get("sleep_rem");
    const quality = get("sleep_quality");
    const spo2 = get("sleep_spo2");
    const hrv = get("sleep_hrv");
    const hrvBaseline = get("hrv_baseline");
    const hrvStatus = get("hrv_status");
    const restingHr = get("resting_hr");
    const restingHrBaseline = get("resting_hr_baseline");
    const readiness = get("readiness");
    const nap = get("nap_duration");
    const sleepAvgHr = get("sleep_avg_hr");
    const sleepMinHr = get("sleep_min_hr");
    const sleepTime = get("sleep_time");
    const unusualRecovery = get("unusual_recovery");

    const readinessValue =
      readiness && !UNAVAILABLE_STATES.has(readiness.state) ? Number(readiness.state) : undefined;
    const band = readinessValue !== undefined ? readinessBand(hass, readinessValue) : undefined;

    const hrvDelta =
      hrv && hrvBaseline && !UNAVAILABLE_STATES.has(hrvBaseline.state)
        ? Number(hrv.state) - Number(hrvBaseline.state)
        : undefined;
    const rhrDelta =
      restingHr && restingHrBaseline && !UNAVAILABLE_STATES.has(restingHrBaseline.state)
        ? Number(restingHr.state) - Number(restingHrBaseline.state)
        : undefined;

    const stageSegments = [
      deep && !UNAVAILABLE_STATES.has(deep.state)
        ? { flexGrow: Number(deep.state), colorVar: "var(--sc-sleep-deep)", title: t(hass, "label.deep") }
        : undefined,
      light && !UNAVAILABLE_STATES.has(light.state)
        ? { flexGrow: Number(light.state), colorVar: "var(--sc-sleep-light)", title: t(hass, "label.light") }
        : undefined,
      rem && !UNAVAILABLE_STATES.has(rem.state)
        ? { flexGrow: Number(rem.state), colorVar: "var(--sc-sleep-rem)", title: t(hass, "label.rem") }
        : undefined,
    ].filter((s): s is NonNullable<typeof s> => s !== undefined);

    const durationParts = formatDuration(Number(duration.state) * 60);
    const napMinutes = nap && !UNAVAILABLE_STATES.has(nap.state) ? Number(nap.state) : undefined;
    const napToday = nap?.attributes.date ? isToday(new Date(nap.attributes.date)) : false;
    const durationLabel = { duration: `${durationParts.value} ${durationParts.unit}` };

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:sleep"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.sleep_readiness.title")}</div>
            <div class="subtitle">
              ${wake
                ? t(hass, "card.sleep_readiness.subtitle_with_wake", {
                    ...durationLabel,
                    time: formatTime(new Date(wake.state), hass.language),
                  })
                : t(hass, "card.sleep_readiness.subtitle_no_wake", durationLabel)}
            </div>
          </div>
        </div>

        ${readinessValue !== undefined && band
          ? html`
              <div class="readiness-row">
                <div class="ring-wrap">
                  ${progressRing(readinessValue, band.colorVar, 60, 6)}
                  <div class="ring-value" style="color:${band.colorVar}">${Math.round(readinessValue)}</div>
                </div>
                <div class="readiness-text">
                  <div class="readiness-label">${t(hass, "stat.readiness")}</div>
                  <div class="readiness-band" style="color:${band.colorVar}">${band.label}</div>
                </div>
              </div>
            `
          : nothing}

        <div class="stats">
          ${quality
            ? this._stat(String(Math.round(Number(quality.state))), "%", t(hass, "stat.quality"))
            : nothing}
          ${hrv
            ? this._stat(
                String(Math.round(Number(hrv.state))),
                "ms",
                hrvDelta !== undefined
                  ? t(hass, "stat.hrv_delta", { delta: formatDelta(hrvDelta) })
                  : t(hass, "stat.hrv"),
                hrvDelta !== undefined ? (hrvDelta >= 0 ? "good" : "bad") : undefined
              )
            : nothing}
          ${restingHr
            ? this._stat(
                String(Math.round(Number(restingHr.state))),
                "bpm",
                rhrDelta !== undefined
                  ? t(hass, "stat.resting_hr_delta", { delta: formatDelta(rhrDelta) })
                  : t(hass, "stat.resting_hr"),
                rhrDelta !== undefined ? (rhrDelta <= 0 ? "good" : "bad") : undefined
              )
            : nothing}
          ${spo2 ? this._stat(String(Math.round(Number(spo2.state))), "%", t(hass, "stat.spo2")) : nothing}
          ${sleepAvgHr
            ? this._stat(String(Math.round(Number(sleepAvgHr.state))), "bpm", t(hass, "stat.sleep_avg_hr"))
            : nothing}
          ${sleepMinHr
            ? this._stat(String(Math.round(Number(sleepMinHr.state))), "bpm", t(hass, "stat.sleep_min_hr"))
            : nothing}
        </div>

        ${stageSegments.length
          ? html`
              <div class="stages">
                ${segmentedBar(stageSegments)}
                <div class="stage-legend">
                  ${stageSegments.map((s) => {
                    const d = formatDuration(s.flexGrow);
                    return html`
                      <span class="legend-item">
                        <i class="dot" style="background:${s.colorVar}"></i>${s.title} ${d.value}${d.unit === "h" ? "h" : "m"}
                      </span>
                    `;
                  })}
                </div>
              </div>
            `
          : nothing}

        ${(hrvStatus && !UNAVAILABLE_STATES.has(hrvStatus.state)) ||
        napMinutes ||
        (sleepTime && !UNAVAILABLE_STATES.has(sleepTime.state)) ||
        unusualRecovery?.state === "on"
          ? html`
              <div class="footer">
                ${unusualRecovery?.state === "on"
                  ? html`<span class="chip bad"><ha-icon icon="mdi:shield-alert-outline"></ha-icon>${t(hass, "chip.unusual_recovery")}</span>`
                  : nothing}
                ${hrvStatus && !UNAVAILABLE_STATES.has(hrvStatus.state)
                  ? (() => {
                      const chip = hrvStatusChip(hass, hrvStatus.state);
                      return html`<span class="chip" style="color:${chip.colorVar}"
                        ><ha-icon icon="mdi:heart-flash"></ha-icon>${chip.label}</span
                      >`;
                    })()
                  : nothing}
                ${napMinutes
                  ? html`<span class="chip accent">
                      <ha-icon icon="mdi:power-sleep"></ha-icon>${napToday
                        ? t(hass, "chip.nap", { minutes: napMinutes })
                        : t(hass, "chip.nap_earlier", { minutes: napMinutes })}
                    </span>`
                  : nothing}
                ${sleepTime && !UNAVAILABLE_STATES.has(sleepTime.state)
                  ? html`<span class="chip">
                      <ha-icon icon="mdi:bed-clock"></ha-icon>${t(hass, "chip.bedtime", {
                        time: formatTime(new Date(sleepTime.state), hass.language),
                      })}
                    </span>`
                  : nothing}
              </div>
            `
          : nothing}
      </ha-card>
    `;
  }

  private _stat(value: string, unit: string, label: string, tone?: "good" | "bad") {
    return html`
      <div class="stat ${tone ?? ""}">
        <div class="stat-value">${value}<span class="unit">${unit}</span></div>
        <div class="stat-label">${label}</div>
      </div>
    `;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .readiness-row {
        display: flex;
        align-items: center;
        gap: 14px;
      }
      .ring-wrap {
        position: relative;
        width: 60px;
        height: 60px;
        flex: none;
      }
      .ring-value {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.05rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
      .readiness-label {
        font-size: 0.78rem;
        color: var(--secondary-text-color);
      }
      .readiness-band {
        font-size: 1.05rem;
        font-weight: 600;
      }

      .stages {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .stage-legend {
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
      }
      .legend-item {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.76rem;
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
    "suunto-sleep-readiness-card": SuuntoSleepReadinessCard;
  }
}
