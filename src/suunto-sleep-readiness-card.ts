import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { segmentedBar, progressRing, goalBar } from "./utils/render-helpers";
import { knownGoal, formatHours } from "./utils/suunto-goals";
import { formatDuration, formatTime, formatDelta, formatShortDate, isToday } from "./utils/format";
import { t } from "./utils/localize";
import { sleepNight } from "./utils/sleep-stages";
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
    const compact = this._config.compact ?? false;

    const duration = get("sleep_duration");
    if (!duration || UNAVAILABLE_STATES.has(duration.state)) {
      return this._message(
        "mdi:sleep",
        t(hass, "empty.sleep_readiness.title"),
        t(hass, "empty.sleep_readiness.subtitle")
      );
    }

    const wake = get("wake_time");
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

    const stageSegments = sleepNight(hass, get)?.stages ?? [];

    const durationParts = formatDuration(Number(duration.state) * 60);
    const napMinutes = nap && !UNAVAILABLE_STATES.has(nap.state) ? Number(nap.state) : undefined;
    const napToday = nap?.attributes.date ? isToday(new Date(nap.attributes.date)) : false;
    const durationLabel = { duration: `${durationParts.value} ${durationParts.unit}` };
    // ha-suunto 1.0.28+: the newest night it has is no longer last night (not
    // worn, wrong watch clock, not synced). Older installs never set `stale`.
    const staleNight =
      duration.attributes.stale === true && typeof duration.attributes.night === "string"
        ? (duration.attributes.night as string)
        : undefined;
    const readinessBalanceOnly = readiness?.attributes.sleep_stale === true;
    // Last night against the sleep goal: the card's own value or the Suunto
    // app's (ha-suunto 1.0.29+). Hidden in compact mode and when no goal exists.
    const sleepHours = Number(duration.state);
    const sleepGoal =
      !compact && this._config.show_goals !== false
        ? knownGoal(hass, this._config, this._configuredDeviceId, "sleep")
        : undefined;

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

        ${staleNight
          ? html`<div class="footer">
              <span class="chip warn"
                ><ha-icon icon="mdi:alert-outline"></ha-icon>${t(hass, "chip.sleep_stale", {
                  date: formatShortDate(staleNight, hass.language),
                })}</span
              >
            </div>`
          : nothing}

        ${sleepGoal !== undefined
          ? html`
              <div class="goal-row ${staleNight ? "stale" : ""}">
                <div class="goal-top">
                  <span>${t(hass, "sleep_goal.label")}</span>
                  <span>
                    ${sleepHours >= sleepGoal
                      ? t(hass, "sleep_goal.met", { value: formatHours(sleepHours), goal: formatHours(sleepGoal) })
                      : t(hass, "sleep_goal.short", {
                          value: formatHours(sleepHours),
                          goal: formatHours(sleepGoal),
                          missing: formatHours(sleepGoal - sleepHours),
                        })}
                  </span>
                </div>
                ${goalBar(sleepHours, sleepGoal, true)}
              </div>
            `
          : nothing}

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
                  ${readinessBalanceOnly
                    ? html`<div class="readiness-note">${t(hass, "readiness.balance_only")}</div>`
                    : nothing}
                </div>
              </div>
            `
          : nothing}

        <div class="stats ${staleNight ? "stale" : ""}">
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
          ${!compact && spo2
            ? this._stat(String(Math.round(Number(spo2.state))), "%", t(hass, "stat.spo2"))
            : nothing}
          ${!compact && sleepAvgHr
            ? this._stat(String(Math.round(Number(sleepAvgHr.state))), "bpm", t(hass, "stat.sleep_avg_hr"), "hr")
            : nothing}
          ${!compact && sleepMinHr
            ? this._stat(String(Math.round(Number(sleepMinHr.state))), "bpm", t(hass, "stat.sleep_min_hr"), "hr")
            : nothing}
        </div>

        ${!compact && stageSegments.length
          ? html`
              <div class="stages ${staleNight ? "stale" : ""}">
                ${segmentedBar(stageSegments.map((s) => ({ flexGrow: s.minutes, colorVar: s.colorVar, title: s.title })))}
                <div class="stage-legend">
                  ${stageSegments.map((s) => {
                    const d = formatDuration(s.minutes);
                    return html`
                      <span class="legend-item">
                        <i class="dot" style="background:${s.colorVar}"></i>${s.title} &middot;
                        ${d.value}${d.unit === "h" ? "h" : "m"}
                      </span>
                    `;
                  })}
                </div>
              </div>
            `
          : nothing}

        ${!compact &&
        ((hrvStatus && !UNAVAILABLE_STATES.has(hrvStatus.state)) ||
          napMinutes ||
          (sleepTime && !UNAVAILABLE_STATES.has(sleepTime.state)) ||
          unusualRecovery?.state === "on")
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

  private _stat(value: string, unit: string, label: string, tone?: "good" | "bad" | "hr") {
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
      .readiness-note {
        font-size: 0.72rem;
        color: var(--secondary-text-color);
        margin-top: 2px;
      }
      /* Numbers from an out-of-date night: still shown, but not passed off as today's. */
      .stats.stale,
      .stages.stale,
      .goal-row.stale {
        opacity: 0.5;
      }
      .goal-row {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .goal-top {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 2px 8px;
        font-size: 0.78rem;
        color: var(--secondary-text-color);
        font-variant-numeric: tabular-nums;
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
