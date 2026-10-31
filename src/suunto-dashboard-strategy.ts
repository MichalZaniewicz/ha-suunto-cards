import type { SuuntoHass } from "./utils/types";
import { findSuuntoDeviceIds, mapByTranslationKey } from "./utils/entities";
import { t, type TranslationKey } from "./utils/localize";

/**
 * A ready-made training dashboard (approved mockup: variant B, one view in
 * sections). Picked as "Suunto" in Settings -> Dashboards -> Add dashboard,
 * or in YAML:
 *
 *   strategy:
 *     type: custom:suunto
 *     devices: [<device id>]   # optional: these accounts only, in this order
 *     hide: [player, class]    # optional: cards to leave out (the name in custom:suunto-<name>-card)
 *     text_size: large         # optional: passed to every card
 *     language: pl             # optional: passed to every card
 *
 * One "sections" view per Suunto account: Today, AI analysis, Sleep,
 * Recovery, Training and Progress. Built from the integration's entities
 * every time the dashboard loads, so a card for data that turns up later
 * (the AI turned on, a first run, gear added) appears by itself, and so
 * does a card added in a later version. "Take control" in the dashboard's
 * menu turns it into an ordinary dashboard to edit by hand.
 */

export interface SuuntoStrategyConfig {
  type: string;
  devices?: string[];
  hide?: string[];
  text_size?: string | number;
  language?: string;
}

interface CardConfig {
  type: string;
  [key: string]: unknown;
}

/** What a card needs to be worth showing; absent = always. */
type Need = "ai" | "ai_weekly" | "running" | "gear" | "commute";

type Entry = string | [string, Need] | [string, Need, Record<string, unknown>];

const SECTIONS: { key: string; icon: string; cards: Entry[] }[] = [
  {
    key: "today",
    icon: "mdi:calendar-today",
    cards: ["daily-brief", "sleep-readiness", "recovery", "today", "daily-goals", "last-workout"],
  },
  {
    key: "ai",
    icon: "mdi:creation",
    cards: [
      ["ai-insight", "ai"],
      ["ai-insight", "ai_weekly", { report: "weekly" }],
      "personal-insights",
    ],
  },
  {
    key: "sleep",
    icon: "mdi:power-sleep",
    cards: ["sleep-clock", "sleep-detail", "sleep-rhythm", "sleep-regularity", "sleep-trends"],
  },
  {
    key: "recovery",
    icon: "mdi:battery-heart-variant",
    cards: [
      "stress-today",
      "readiness-trend",
      "recovery-trends",
      "recovery-balance-trend",
      "heart-rate",
      "hr-curve",
    ],
  },
  {
    key: "training",
    icon: "mdi:run-fast",
    cards: [
      "training-load",
      "pmc",
      "form-forecast",
      "training-status",
      "recent-workouts",
      "route",
      "elevation",
      "lap-splits",
      "hr-zones",
      "aerobic-decoupling",
      "training-effect-trend",
      "pace-trend",
      ["running-dynamics", "running"],
      "workout-comparison",
      "training-profile",
      "athlete-profile",
      "fitness",
      "fitness-trend",
      "just-finished",
    ],
  },
  {
    key: "progress",
    icon: "mdi:trophy-outline",
    cards: [
      "week-compare",
      "weekly-volume",
      "weekly-goal",
      "goals-overview",
      "week-stats",
      "steps-today",
      "steps-trend",
      "weekly-steps-goal",
      "activity-trends",
      "best-efforts",
      "month-records",
      "year-records",
      "month-story",
      "year-story",
      "story",
      "lifetime",
      "milestones",
      "next-milestone",
      "streak",
      "activity-calendar",
      "achievements",
      "level",
      "class",
      "player",
      ["gear", "gear"],
      ["commute", "commute"],
      "location",
    ],
  },
];

/** "Suunto Michała" -> "suunto-michala" (a view path). */
function slug(text: string): string {
  const out = text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ł/g, "l")
    .replace(/Ł/g, "L")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return out || "suunto";
}

function deviceName(hass: SuuntoHass, id: string): string {
  const device = hass.devices?.[id];
  return device?.name_by_user || device?.name || "Suunto";
}

/** Which of the conditional cards this account has data for. */
function availableNeeds(hass: SuuntoHass, deviceId: string): Set<Need> {
  const map = mapByTranslationKey(hass, deviceId);
  const state = (key: string) => (map[key] ? hass.states[map[key]] : undefined);
  const needs = new Set<Need>();
  if (map["ai_insight"]) needs.add("ai");
  if (map["ai_weekly_summary"]) needs.add("ai_weekly");
  const workouts = state("workouts_recent")?.attributes?.workouts;
  if (Array.isArray(workouts) && workouts.some((w) => w && (w as { cadence_spm?: unknown }).cadence_spm != null)) {
    needs.add("running");
  }
  for (const key of ["commute_year", "commute_month"]) {
    const value = Number(state(key)?.state);
    if (Number.isFinite(value) && value > 0) needs.add("commute");
  }
  // Gear sensors have no translation_key (the user names them); they are
  // the device's sensors with an interval_km attribute, as the Gear card reads them.
  for (const entity of Object.values(hass.entities ?? {})) {
    if (entity.device_id !== deviceId) continue;
    const attrs = hass.states[entity.entity_id]?.attributes;
    if (attrs && "interval_km" in attrs) {
      needs.add("gear");
      break;
    }
  }
  return needs;
}

export class SuuntoDashboardStrategy extends HTMLElement {
  static async generate(config: SuuntoStrategyConfig, hass: SuuntoHass): Promise<Record<string, unknown>> {
    const found = findSuuntoDeviceIds(hass);
    const ids = config.devices?.length
      ? config.devices.filter((id) => found.includes(id))
      : [...found].sort((a, b) => deviceName(hass, a).localeCompare(deviceName(hass, b)));
    const title = t(hass, "strategy.title");

    if (ids.length === 0) {
      return {
        title,
        views: [
          {
            title: t(hass, "strategy.none"),
            type: "sections",
            sections: [
              {
                type: "grid",
                cards: [
                  {
                    type: "markdown",
                    content: `## ${t(hass, "strategy.none")}\n\n${t(hass, "strategy.none_text")}`,
                  },
                ],
              },
            ],
          },
        ],
      };
    }

    const hidden = new Set((config.hide ?? []).map((name) => String(name).replace(/^custom:suunto-|-card$/g, "")));
    // With one account the cards find it on their own; with several each
    // card is told which one.
    const several = ids.length > 1;
    const common: Record<string, unknown> = {};
    if (config.text_size !== undefined) common.text_size = config.text_size;
    if (config.language) common.language = config.language;

    const used = new Set<string>();
    const views = ids.map((id) => {
      const needs = availableNeeds(hass, id);
      const name = deviceName(hass, id);
      let path = slug(name);
      for (let n = 2; used.has(path); n++) path = `${slug(name)}-${n}`;
      used.add(path);
      const sections = SECTIONS.map(({ key, icon, cards }) => {
        const built: CardConfig[] = [];
        for (const entry of cards) {
          const [card, need, extra] = typeof entry === "string" ? [entry, undefined, undefined] : entry;
          if (hidden.has(card) || (need && !needs.has(need))) continue;
          built.push({
            type: `custom:suunto-${card}-card`,
            ...(several ? { device_id: id } : {}),
            ...(extra ?? {}),
            ...common,
            grid_options: { columns: 12 },
          });
        }
        if (!built.length) return undefined;
        return {
          type: "grid",
          cards: [{ type: "heading", heading: t(hass, `strategy.section.${key}` as TranslationKey), icon }, ...built],
        };
      }).filter(Boolean);
      return {
        title: several ? name : title,
        path,
        icon: "mdi:watch",
        type: "sections",
        max_columns: 3,
        sections,
      };
    });

    return { title, views };
  }
}

customElements.define("ll-strategy-dashboard-suunto", SuuntoDashboardStrategy);

// Shown as a tile in Settings -> Dashboards -> Add dashboard (HA reads
// window.customStrategies, like window.customCards for cards).
const strategiesWindow = window as unknown as {
  customStrategies?: { type: string; name?: string; description?: string; documentationURL?: string; strategyType: string }[];
};
strategiesWindow.customStrategies = strategiesWindow.customStrategies ?? [];
strategiesWindow.customStrategies.push({
  type: "suunto",
  name: "Suunto",
  description:
    "A ready-made training dashboard from the Suunto App integration: today, AI analysis, sleep, recovery, training and progress.",
  documentationURL: "https://github.com/MichalZaniewicz/ha-suunto-cards#ready-made-dashboard",
  strategyType: "dashboard",
});
