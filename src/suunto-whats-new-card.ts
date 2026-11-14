import { html, css, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LovelaceCardEditor } from "custom-card-helpers";
import type { SuuntoCardConfig, SuuntoHass } from "./utils/types";
import { SuuntoBaseCard } from "./utils/base-card";
import { suuntoTokens, suuntoSharedStyles } from "./utils/style-tokens";
import { readSportColors, sportBadgeStyle, sportColor, type SportColors } from "./utils/sports";
import { activityIcon } from "./utils/icons";
import { computePrRows } from "./utils/achievements";
import { achievementLabel } from "./utils/route-achievements";
import { gearName } from "./utils/gear";
import { formatDuration, formatRaceTime, formatTime } from "./utils/format";
import { t, type TranslationKey } from "./utils/localize";

/** What the timeline can show; the `show` option picks some (all by default). */
export const WHATS_NEW_KINDS = ["workouts", "records", "achievements", "ai", "gear"] as const;
export type WhatsNewKind = (typeof WHATS_NEW_KINDS)[number];

const DEFAULT_DAYS = 14;
const UNAVAILABLE_STATES = new Set(["unknown", "unavailable", ""]);

interface WhatsNewConfig extends SuuntoCardConfig {
  days?: number;
  show?: WhatsNewKind[];
}

interface RecentWorkout {
  start: string | null;
  activity: string | null;
  distance_km: number | null;
  duration_min: number | null;
  tss: number | null;
  pte?: number | null;
  achievements?: unknown;
  route_ranking?: number | null;
}

type Tone = "sport" | "record" | "ai" | "alert";

interface Item {
  /** null: pinned on top (gear due now, no date of its own). */
  time: Date | null;
  kind: WhatsNewKind;
  icon: string;
  tone: Tone;
  color?: string;
  title: string;
  detail?: string;
  /** Opened on tap: the entity the item comes from. */
  entityId?: string;
}

/** Best-effort distances, as the Best Efforts card names them. */
const EFFORTS: { key: string; label: string | TranslationKey }[] = [
  { key: "1k", label: "1K" },
  { key: "5k", label: "5K" },
  { key: "10k", label: "10K" },
  { key: "half_marathon", label: "distance.half_marathon" },
  { key: "marathon", label: "distance.marathon" },
];

function validDate(value: unknown): Date | null {
  if (typeof value !== "string" || !value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

/**
 * "What's new": one timeline of what happened lately - workouts, records
 * (all-time, this year, this month), best efforts, route achievements, the
 * AI reports and gear that is due for a service. Built from attributes the
 * sensors already carry, so it needs nothing new from the integration
 * except the PTE and route achievements on the recent-workouts list (1.0.40).
 */
@customElement("suunto-whats-new-card")
export class SuuntoWhatsNewCard extends SuuntoBaseCard {
  @state() private _config?: WhatsNewConfig;

  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement("suunto-device-editor") as LovelaceCardEditor;
  }

  public static getStubConfig(): WhatsNewConfig {
    return { type: "custom:suunto-whats-new-card" };
  }

  public setConfig(config: WhatsNewConfig): void {
    this._config = config;
    this._configuredDeviceId = config.device_id;
  }

  public getCardSize(): number {
    return 6;
  }

  private _shown(kind: WhatsNewKind): boolean {
    const show = this._config?.show;
    return !Array.isArray(show) || show.length === 0 || show.includes(kind);
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) return nothing;
    this._syncTheme();

    const resolved = this._resolveEntities();
    if ("error" in resolved) return resolved.error;
    const { map, ids } = resolved;
    const hass = this.hass;
    const days = this._config.days && this._config.days > 0 ? this._config.days : DEFAULT_DAYS;
    const since = new Date();
    since.setHours(0, 0, 0, 0);
    since.setDate(since.getDate() - (days - 1));

    const items = this._cap(
      this._items(hass, map, ids, readSportColors(hass, map))
        .filter((item) => item.time === null || item.time >= since)
        .sort((a, b) => (b.time?.getTime() ?? Infinity) - (a.time?.getTime() ?? Infinity))
    );

    return html`
      <ha-card class="static">
        <div class="header">
          <div class="icon-badge"><ha-icon .icon=${this._icon("mdi:timeline-clock-outline")}></ha-icon></div>
          <div class="title-block">
            <div class="title">${this._title(t(hass, "card.whats_new.title"))}</div>
            <div class="subtitle">${t(hass, "card.whats_new.subtitle", { days })}</div>
          </div>
        </div>
        ${items.length
          ? html`<div class="scroll-list timeline">${this._rows(hass, items)}</div>`
          : html`<div class="none">${t(hass, "whats_new.empty", { days })}</div>`}
      </ha-card>
    `;
  }

  private _rows(hass: SuuntoHass, items: Item[]): TemplateResult[] {
    const out: TemplateResult[] = [];
    let lastDay: string | undefined;
    for (const item of items) {
      const day = this._dayLabel(hass, item.time);
      if (day !== lastDay) {
        out.push(html`<div class="day">${day}</div>`);
        lastDay = day;
      }
      const badge =
        item.tone === "sport" && item.color
          ? sportBadgeStyle(item.color)
          : "";
      out.push(html`
        <div
          class="item ${item.entityId ? "link" : ""}"
          role=${item.entityId ? "button" : "listitem"}
          tabindex=${item.entityId ? "0" : "-1"}
          @click=${() => this._open(item.entityId)}
          @keydown=${(ev: KeyboardEvent) => {
            if (ev.key === "Enter" || ev.key === " ") this._open(item.entityId);
          }}
        >
          <div class="icon-badge tiny ${item.tone}" style=${badge}><ha-icon .icon=${item.icon}></ha-icon></div>
          <div class="text">
            <div class="what">${item.title}</div>
            ${item.detail ? html`<div class="detail">${item.detail}</div>` : nothing}
          </div>
          <div class="when">${item.time ? formatTime(item.time, hass.language) : ""}</div>
        </div>
      `);
    }
    return out;
  }

  private _open(entityId: string | undefined): void {
    if (!entityId) return;
    this.dispatchEvent(
      new CustomEvent("hass-more-info", { detail: { entityId }, bubbles: true, composed: true })
    );
  }

  /** "Today", "Yesterday", else the weekday and date in the card's language. */
  private _dayLabel(hass: SuuntoHass, time: Date | null): string {
    if (!time) return t(hass, "whats_new.now");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const day = new Date(time);
    day.setHours(0, 0, 0, 0);
    const diff = Math.round((today.getTime() - day.getTime()) / 86_400_000);
    if (diff === 0) return t(hass, "whats_new.today");
    if (diff === 1) return t(hass, "whats_new.yesterday");
    return time.toLocaleDateString(hass.language, { weekday: "long", day: "numeric", month: "long" });
  }

  private _items(
    hass: SuuntoHass,
    map: Record<string, string>,
    ids: string[],
    sports: SportColors
  ): Item[] {
    const items: Item[] = [];

    // Workouts and the route achievements earned in them.
    const recentId = map["workouts_recent"];
    const workouts: RecentWorkout[] = (recentId ? hass.states[recentId]?.attributes.workouts : undefined) ?? [];
    for (const w of workouts) {
      const time = validDate(w.start);
      if (!time) continue;
      if (this._shown("workouts")) {
        const parts: string[] = [];
        if (w.duration_min) {
          const d = formatDuration(w.duration_min);
          parts.push(`${d.value} ${d.unit}`);
        }
        if (w.tss) parts.push(`TSS ${Math.round(w.tss)}`);
        if (w.pte) parts.push(`PTE ${w.pte}`);
        items.push({
          time,
          kind: "workouts",
          icon: activityIcon(w.activity),
          tone: "sport",
          color: sportColor(sports, w.activity),
          title: [w.activity ?? "-", w.distance_km ? `${w.distance_km} km` : ""].filter(Boolean).join(", "),
          detail: parts.join(" · ") || undefined,
          entityId: recentId,
        });
      }
      const achievements = Array.isArray(w.achievements) ? w.achievements : [];
      if (this._shown("achievements") && achievements.length) {
        items.push({
          time,
          kind: "achievements",
          icon: "mdi:trophy",
          tone: "record",
          title: achievementLabel(hass, achievements, achievements.length),
          detail: [
            w.activity,
            w.route_ranking ? t(hass, "achievement.rank", { rank: w.route_ranking }) : undefined,
          ]
            .filter(Boolean)
            .join(" · "),
          entityId: recentId,
        });
      }
    }

    if (this._shown("records")) {
      // The same record can stand in all three lists; the widest one wins.
      const seen = new Set<string>();
      const scopes: [string, TranslationKey][] = [
        ["training_records", "whats_new.record"],
        ["training_records_year", "whats_new.record_year"],
        ["training_records_month", "whats_new.record_month"],
      ];
      for (const [sensorKey, titleKey] of scopes) {
        for (const row of computePrRows(hass, map, sensorKey)) {
          const time = validDate(row.entry?.start_time);
          if (!row.entry || !time) continue;
          const id = `${row.labelKey}|${row.entry.start_time}`;
          if (seen.has(id)) continue;
          seen.add(id);
          items.push({
            time,
            kind: "records",
            icon: "mdi:trophy-outline",
            tone: "record",
            title: t(hass, titleKey, { label: t(hass, row.labelKey), value: row.render(row.entry) }),
            detail: row.entry.activity,
            entityId: map[sensorKey],
          });
        }
      }
      const effortsId = map["best_efforts"];
      const efforts = effortsId ? hass.states[effortsId]?.attributes : undefined;
      for (const effort of EFFORTS) {
        const entry = efforts?.[`${effort.key}_seconds`] as { value?: number; start_time?: string; activity?: string } | undefined;
        const time = validDate(entry?.start_time);
        if (!entry?.value || !time) continue;
        const label = effort.label.includes(".") ? t(hass, effort.label as TranslationKey) : effort.label;
        items.push({
          time,
          kind: "records",
          icon: "mdi:speedometer",
          tone: "record",
          title: t(hass, "whats_new.best_effort", { distance: label, time: formatRaceTime(entry.value) }),
          detail: entry.activity,
          entityId: effortsId,
        });
      }
    }

    if (this._shown("ai")) {
      for (const [key, titleKey] of [
        ["ai_insight", "whats_new.ai_daily"],
        ["ai_weekly_summary", "whats_new.ai_weekly"],
      ] as [string, TranslationKey][]) {
        const id = map[key];
        const entity = id ? hass.states[id] : undefined;
        const time = validDate(entity?.attributes.generated_at);
        if (!entity || !time || UNAVAILABLE_STATES.has(entity.state)) continue;
        items.push({
          time,
          kind: "ai",
          icon: "mdi:creation",
          tone: "ai",
          title: t(hass, titleKey),
          detail: entity.state,
          entityId: id,
        });
      }
    }

    if (this._shown("gear")) {
      for (const id of ids) {
        const entity = hass.states[id];
        if (!entity || entity.attributes.service_due !== true) continue;
        items.push({
          time: null,
          kind: "gear",
          icon: "mdi:wrench-clock",
          tone: "alert",
          title: t(hass, "whats_new.gear_due", { name: gearName(hass, id) }),
          detail: `${Math.round(Number(entity.state))} km`,
          entityId: id,
        });
      }
    }
    return items;
  }

  static styles = [
    suuntoTokens,
    suuntoSharedStyles,
    css`
      .timeline {
        gap: 2px;
      }
      .day {
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--secondary-text-color);
        margin-top: 8px;
      }
      .day:first-child {
        margin-top: 0;
      }
      .item {
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 10px;
        align-items: center;
        padding: 6px 0;
        border-bottom: 1px solid var(--divider-color);
      }
      .item:last-child {
        border-bottom: 0;
      }
      .item.link {
        cursor: pointer;
      }
      .item.link:focus-visible {
        outline: 2px solid var(--sc-pulse);
        outline-offset: 2px;
      }
      .icon-badge.record {
        background: var(--sc-amber-bg);
        color: var(--sc-amber);
      }
      .icon-badge.ai {
        background: var(--sc-pulse-bg);
        color: var(--sc-pulse);
      }
      .icon-badge.alert {
        background: var(--sc-bad-bg);
        color: var(--sc-bad);
      }
      .text {
        min-width: 0;
      }
      .what {
        font-size: 0.88rem;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .detail {
        font-size: 0.75rem;
        color: var(--secondary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .when {
        font-size: 0.75rem;
        color: var(--secondary-text-color);
        font-variant-numeric: tabular-nums;
      }
      .none {
        font-size: 0.85rem;
        color: var(--secondary-text-color);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "suunto-whats-new-card": SuuntoWhatsNewCard;
  }
}
