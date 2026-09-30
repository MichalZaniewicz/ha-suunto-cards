import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { segmentedBar, progressRing } from "./utils/render-helpers";
import { formatDuration, formatTime, formatDelta, formatShortDate, isToday } from "./utils/format";
import { t } from "./utils/localize";
import type { SuuntoHass } from "./utils/types";

const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

/** Same great/fair/low banding as suunto-sleep-readiness-card - kept in sync deliberately, not shared, since each card owns its small presentation helpers. */
function readinessBand(hass: SuuntoHass | undefined, pct: number): { colorVar: string; label: string } {
  if (pct >= 70) return { colorVar: "var(--sc-good)", label: t(hass, "band.readiness.great") };
  if (pct >= 40) return { colorVar: "var(--sc-warn)", label: t(hass, "band.readiness.fair") };
  return { colorVar: "var(--sc-bad)", label: t(hass, "band.readiness.low") };
}

/** Sleep-efficiency banding - our own heuristic (asleep / time in bed), not a Suunto scale. */
function efficiencyColorVar(pct: number): string {
  if (pct >= 90) return "var(--sc-good)";
  if (pct >= 75) return "var(--sc-warn)";
  return "var(--sc-bad)";
}

/** One-line takeaway from the deep-sleep share of total sleep - a heuristic, not a Suunto metric. */
function deepSleepInsight(hass: SuuntoHass | undefined, pct: number): string {
  const rounded = String(Math.round(pct));
  if (pct >= 20) return t(hass, "sleep_detail.insight_excellent", { pct: rounded });
  if (pct >= 12) return t(hass, "sleep_detail.insight_solid", { pct: rounded });
  return t(hass, "sleep_detail.insight_light", { pct: rounded });
}

/**
 * A single-night deep-dive, complementing the compact suunto-sleep-readiness-card:
 * time actually awake in bed (derived from wake_time - sleep_time vs. sleep_duration,
 * not a field Suunto sends directly), sleep efficiency, and every sleep vital at once.
 */
@customElement("suunto-sleep-detail-card")
export class SuuntoSleepDetailCard extends SuuntoBaseCard {
  @state() private _config?: SuuntoCardConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): SuuntoCardConfig {
    return { type: "custom:suunto-sleep-detail-card" };
  }

  public setConfig(config: SuuntoCardConfig): void {
    this._config = config;
    this._configuredDeviceId = config.device_id;
  }

  public getCardSize(): number {
    return 7;
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

    const bedtime = get("sleep_time");
    const wake = get("wake_time");
    const deep = get("sleep_deep");
    const light = get("sleep_light");
    const rem = get("sleep_rem");
    const quality = get("sleep_quality");
    const spo2 = get("sleep_spo2");
    const avgHr = get("sleep_avg_hr");
    const minHr = get("sleep_min_hr");
    const hrv = get("sleep_hrv");
    const hrvBaseline = get("hrv_baseline");
    const restingHr = get("resting_hr");
    const restingHrBaseline = get("resting_hr_baseline");
    const readiness = get("readiness");
    const nap = get("nap_duration");
    const unusualRecovery = get("unusual_recovery");

    const durationMin = Number(duration.state) * 60;
    const durationParts = formatDuration(durationMin);

    const bedMs =
      bedtime && !UNAVAILABLE_STATES.has(bedtime.state) ? new Date(bedtime.state).getTime() : undefined;
    const wakeMs = wake && !UNAVAILABLE_STATES.has(wake.state) ? new Date(wake.state).getTime() : undefined;
    const timeInBedMin =
      bedMs !== undefined && wakeMs !== undefined && wakeMs > bedMs ? (wakeMs - bedMs) / 60000 : undefined;
    const awakeMin = timeInBedMin !== undefined ? Math.max(0, timeInBedMin - durationMin) : undefined;
    const efficiencyPct =
      timeInBedMin !== undefined && timeInBedMin > 0
        ? Math.min(100, Math.max(0, (durationMin / timeInBedMin) * 100))
        : undefined;

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
      awakeMin !== undefined
        ? { flexGrow: awakeMin, colorVar: "var(--sc-sleep-awake)", title: t(hass, "label.awake") }
        : undefined,
    ].filter((s): s is NonNullable<typeof s> => s !== undefined && s.flexGrow > 0);
    const stageTotal = stageSegments.reduce((sum, s) => sum + s.flexGrow, 0) || 1;

    const deepPct = deep && !UNAVAILABLE_STATES.has(deep.state) && durationMin > 0
      ? (Number(deep.state) / durationMin) * 100
      : undefined;

    const napMinutes = nap && !UNAVAILABLE_STATES.has(nap.state) ? Number(nap.state) : undefined;
    const napToday = nap?.attributes.date ? isToday(new Date(nap.attributes.date)) : false;

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge pulse"><ha-icon icon="mdi:sleep"></ha-icon></div>
          <div class="title-block">
            <div class="title">${t(hass, "card.sleep_detail.title")}</div>
            <div class="subtitle">${t(hass, "card.sleep_detail.subtitle")}</div>
          </div>
          ${readinessValue !== undefined && band
            ? html`
                <div class="readiness-pill" title=${t(hass, "stat.readiness")}>
                  <span class="readiness-dot" style="background:${band.colorVar}"></span>
                  <span class="rv">${Math.round(readinessValue)}</span>
                  <span class="rl" style="color:${band.colorVar}">${band.label}</span>
                </div>
              `
            : nothing}
        </div>

        ${duration.attributes.stale === true && typeof duration.attributes.night === "string"
          ? html`<div style="display:flex;flex-wrap:wrap">
              <span class="chip warn"
                ><ha-icon icon="mdi:alert-outline"></ha-icon>${t(hass, "chip.sleep_stale", {
                  date: formatShortDate(duration.attributes.night as string, hass.language),
                })}</span
              >
            </div>`
          : nothing}

        <div class="hero">
          <div class="hero-value">${durationParts.value}<span class="unit">${durationParts.unit}</span></div>
          <div class="hero-label">${t(hass, "sleep_detail.total_sleep")}</div>
          ${deepPct !== undefined
            ? html`<div class="hero-insight">${deepSleepInsight(hass, deepPct)}</div>`
            : nothing}
        </div>

        ${bedMs !== undefined && wakeMs !== undefined
          ? html`
              <div class="timing">
                <div class="timing-point">
                  <div class="tp-icon"><ha-icon icon="mdi:bed-clock"></ha-icon>${t(hass, "sleep_detail.bedtime")}</div>
                  <div class="tp-time">${formatTime(new Date(bedMs), hass.language)}</div>
                </div>
                <div class="timing-line">
                  ${timeInBedMin !== undefined
                    ? (() => {
                        const p = formatDuration(timeInBedMin);
                        return html`<span class="tl-chip"
                          >${t(hass, "sleep_detail.in_bed", { duration: `${p.value} ${p.unit}` })}</span
                        >`;
                      })()
                    : nothing}
                </div>
                <div class="timing-point wake">
                  <div class="tp-icon">${t(hass, "sleep_detail.wake")}<ha-icon icon="mdi:weather-sunset-up"></ha-icon></div>
                  <div class="tp-time">${formatTime(new Date(wakeMs), hass.language)}</div>
                </div>
              </div>
            `
          : nothing}

        ${stageSegments.length
          ? html`
              <div class="stages">
                <span class="section-label">${t(hass, "sleep_detail.stages")}</span>
                ${segmentedBar(stageSegments)}
                <div class="stage-legend">
                  ${stageSegments.map((s) => {
                    const d = formatDuration(s.flexGrow);
                    const pct = Math.round((s.flexGrow / stageTotal) * 100);
                    return html`
                      <span class="legend-item">
                        <i class="dot" style="background:${s.colorVar}"></i>${s.title}
                        ${d.value}${d.unit === "h" ? "h" : "m"} &middot; ${pct}%
                      </span>
                    `;
                  })}
                </div>
              </div>
            `
          : nothing}

        ${efficiencyPct !== undefined
          ? html`
              <hr />
              <div class="efficiency-row">
                <div class="eff-ring-wrap">
                  ${progressRing(efficiencyPct, efficiencyColorVar(efficiencyPct), 58, 6)}
                  <div class="eff-ring-value">${Math.round(efficiencyPct)}%</div>
                </div>
                <div class="eff-text">
                  <div class="eff-title">${t(hass, "sleep_detail.efficiency")}</div>
                  <div class="eff-sub">${t(hass, "sleep_detail.efficiency_sub")}</div>
                </div>
              </div>
            `
          : nothing}

        <div>
          <span class="section-label">${t(hass, "sleep_detail.vitals")}</span>
          <div class="stats">
            ${quality
              ? this._stat(String(Math.round(Number(quality.state))), "%", t(hass, "stat.quality"))
              : nothing}
            ${avgHr
              ? this._stat(String(Math.round(Number(avgHr.state))), "bpm", t(hass, "stat.sleep_avg_hr"), "hr")
              : nothing}
            ${minHr
              ? this._stat(String(Math.round(Number(minHr.state))), "bpm", t(hass, "stat.sleep_min_hr"), "hr")
              : nothing}
            ${spo2 ? this._stat(String(Math.round(Number(spo2.state))), "%", t(hass, "stat.spo2")) : nothing}
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
          </div>
        </div>

        ${napMinutes || unusualRecovery?.state === "on"
          ? html`
              <div class="footer">
                ${unusualRecovery?.state === "on"
                  ? html`<span class="chip bad"><ha-icon icon="mdi:shield-alert-outline"></ha-icon>${t(hass, "chip.unusual_recovery")}</span>`
                  : nothing}
                ${napMinutes
                  ? html`<span class="chip accent">
                      <ha-icon icon="mdi:power-sleep"></ha-icon>${napToday
                        ? t(hass, "chip.nap", { minutes: napMinutes })
                        : t(hass, "chip.nap_earlier", { minutes: napMinutes })}
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
      .header {
        position: relative;
      }
      .readiness-pill {
        flex: none;
        display: flex;
        align-items: center;
        gap: 6px;
        background: var(--sc-chip-bg);
        border-radius: 999px;
        padding: 5px 10px 5px 8px;
        align-self: flex-start;
      }
      .readiness-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        flex: none;
      }
      .readiness-pill .rv {
        font-size: 0.82rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
      .readiness-pill .rl {
        font-size: 0.68rem;
        font-weight: 600;
      }

      .section-label {
        display: block;
        font-size: 0.66rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--secondary-text-color);
        margin-bottom: 8px;
      }

      .hero {
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
      .hero-value {
        font-size: 2.1rem;
        font-weight: 700;
        line-height: 1;
        font-variant-numeric: tabular-nums;
        display: flex;
        align-items: baseline;
        gap: 6px;
      }
      .hero-value .unit {
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--secondary-text-color);
      }
      .hero-label {
        font-size: 0.66rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--secondary-text-color);
      }
      .hero-insight {
        font-size: 0.84rem;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }

      .timing {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 10px;
      }
      .timing-point {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .timing-point.wake {
        text-align: right;
        align-items: flex-end;
      }
      .tp-icon {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 0.7rem;
        font-weight: 600;
        color: var(--secondary-text-color);
      }
      .tp-icon ha-icon {
        --mdc-icon-size: 14px;
      }
      .timing-point.wake .tp-icon {
        flex-direction: row-reverse;
      }
      .tp-time {
        font-size: 0.98rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
      .timing-line {
        position: relative;
        height: 2px;
        background: var(--divider-color);
        border-radius: 2px;
      }
      .tl-chip {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 999px;
        padding: 3px 9px;
        font-size: 0.64rem;
        font-weight: 600;
        color: var(--secondary-text-color);
        white-space: nowrap;
      }

      .stages {
        display: flex;
        flex-direction: column;
        gap: 9px;
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

      .efficiency-row {
        display: flex;
        align-items: center;
        gap: 14px;
      }
      .eff-ring-wrap {
        position: relative;
        width: 58px;
        height: 58px;
        flex: none;
      }
      .eff-ring-value {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.95rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
      .eff-title {
        font-size: 0.9rem;
        font-weight: 600;
      }
      .eff-sub {
        font-size: 0.72rem;
        color: var(--secondary-text-color);
        margin-top: 1px;
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
    "suunto-sleep-detail-card": SuuntoSleepDetailCard;
  }
}
