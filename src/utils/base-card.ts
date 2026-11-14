import { LitElement, html, nothing, type PropertyValues, type TemplateResult } from "lit";
import { property } from "lit/decorators.js";
import type { SuuntoCardConfig, SuuntoHass } from "./types";
import { resolveSuuntoDevice, mapByTranslationKey, SuuntoConfigError, SUUNTO_PLATFORM } from "./entities";
import { t } from "./localize";
import { readSync, syncLabel } from "./sync";
import { EINK_PALETTES, einkMode, type EinkMode } from "./eink";

/** `text_size` choices in the editor; YAML also takes a plain number. */
export const TEXT_SIZES: Record<string, number> = { normal: 1, large: 1.15, larger: 1.3, largest: 1.5 };

/** The zoom factor for `text_size`, or undefined to leave the default (the
 * `suunto-cards-scale` theme variable, else 1). Numbers are kept to 0.75-2. */
export function textScale(value: string | number | undefined): number | undefined {
  if (value === undefined || value === "") return undefined;
  const scale = typeof value === "number" ? value : TEXT_SIZES[value] ?? Number.parseFloat(value);
  if (!Number.isFinite(scale) || scale <= 0) return undefined;
  return Math.min(2, Math.max(0.75, scale));
}

/** The `language` option as a language code, or undefined for "Home Assistant's". */
export function cardLanguage(value: string | undefined): string | undefined {
  const code = (value ?? "").trim().toLowerCase();
  if (!code || code === "auto") return undefined;
  return /^[a-z]{2,3}(-[a-z0-9]+)*$/.test(code) ? code : undefined;
}

/** Cards that already show the "not synced" chip in their own header. */
const OWN_SYNC_CHIP = new Set(["custom:suunto-today-card", "custom:suunto-sleep-readiness-card"]);

/** `ids`: every Suunto entity of the card's device, for shouldUpdate(). */
type ResolvedEntities = { map: Record<string, string>; ids: string[] } | { error: TemplateResult };

/** A card re-renders at least this often on a `hass` change, so a "2 h ago"
 * or a statistics refetch that waits for the next render never goes stale. */
const HEARTBEAT_MS = 60_000;

/** Every entity of the Suunto integration, whatever the device. */
function allSuuntoEntityIds(hass: SuuntoHass): string[] {
  return Object.values(hass.entities ?? {})
    .filter((entity) => entity.platform === SUUNTO_PLATFORM)
    .map((entity) => entity.entity_id);
}

/**
 * Shared plumbing for every Suunto card: dark-mode class sync, device
 * resolution + translation_key lookup, and a consistent empty/error state.
 * Widgets extend this and only implement `render()`.
 */
export abstract class SuuntoBaseCard extends LitElement {
  private _rawHass?: SuuntoHass;
  // The last `hass` handed out with the card's own language - see the getter.
  private _languageView?: { raw: SuuntoHass; language: string; view: SuuntoHass };
  // The overridden `locale` handed out with it - see the getter.
  private _localeView?: {
    raw: NonNullable<SuuntoHass["locale"]>;
    language: string;
    value: SuuntoHass["locale"];
  };
  private _resolvedCache?: {
    entities: unknown;
    devices: unknown;
    deviceId?: string;
    result: ResolvedEntities;
  };

  /**
   * `hass`, as the card sees it. With the `language` option set, a copy of
   * Home Assistant's object whose `language` / `locale.language` say that
   * language instead, so every `t(this.hass, ...)` and number or
   * date format in every card follows it without touching the cards. The
   * copy shares everything else (states, registries, callWS...) with the
   * real object, and is rebuilt only when that object or the language changes.
   */
  @property({ attribute: false })
  public get hass(): SuuntoHass | undefined {
    const raw = this._rawHass;
    const language = cardLanguage(this._cardConfig?.language);
    if (!raw || !language || language === raw.language) return raw;
    const cached = this._languageView;
    if (cached && cached.raw === raw && cached.language === language) return cached.view;
    // A shallow copy (not a prototype view), so code that spreads `hass`
    // keeps the states and registries.
    const view = { ...raw, language } as SuuntoHass;
    if (raw.locale) {
      // The same overridden object for as long as Home Assistant's own locale
      // object and the language stay: `raw` is new on every state change
      // anywhere, and a new locale here would make shouldUpdate() render.
      let overridden = this._localeView;
      if (!overridden || overridden.raw !== raw.locale || overridden.language !== language) {
        overridden = { raw: raw.locale, language, value: { ...raw.locale, language } };
        this._localeView = overridden;
      }
      view.locale = overridden.value;
    }
    this._languageView = { raw, language, view };
    return view;
  }

  public set hass(value: SuuntoHass | undefined) {
    this._rawHass = value;
  }

  // What the last render saw of `hass`, and when it ran - see shouldUpdate().
  private _lastHass?: {
    entities: unknown;
    devices: unknown;
    states: SuuntoHass["states"];
    language: string | undefined;
    locale: unknown;
    themes: unknown;
    darkMode: boolean;
  };
  private _lastRenderAt = 0;
  // The e-ink mode the last render applied: an e-paper screen redraws only
  // when the data changes, not on the minute heartbeat.
  private _eink?: EinkMode;

  /**
   * Render only when something this card shows can have changed. Home
   * Assistant hands every card a new `hass` on ANY state change in the whole
   * instance (a light, a power meter ticking every second), and every card
   * used to re-render for each of them. Now a `hass` change alone renders
   * only when the registries, language, locale or theme changed, when one of
   * this card's own Suunto entities changed (any Suunto entity while no
   * device is resolved), or when the last render is more than a minute old.
   * Config/@state changes and a plain `requestUpdate()` always render. The
   * snapshot is taken here, not in willUpdate(), because cards override
   * willUpdate() without calling super.
   */
  protected shouldUpdate(changed: PropertyValues): boolean {
    const render = this._needsRender(changed);
    if (render) {
      // A snapshot, not the object: a `hass` changed in place (as the dev
      // harness does) must still compare as changed next time.
      const hass = this.hass;
      this._lastHass = hass && {
        entities: hass.entities,
        devices: hass.devices,
        states: hass.states,
        language: hass.language,
        locale: hass.locale,
        themes: hass.themes,
        darkMode: Boolean(hass.themes?.darkMode),
      };
      this._lastRenderAt = Date.now();
    }
    return render;
  }

  private _needsRender(changed: PropertyValues): boolean {
    if (changed.size === 0) return true; // requestUpdate() from a timer
    for (const key of changed.keys()) if (key !== "hass") return true;
    const prev = this._lastHass;
    const hass = this.hass;
    if (!prev || !hass) return true;
    if (
      prev.entities !== hass.entities ||
      prev.devices !== hass.devices ||
      prev.language !== hass.language ||
      prev.locale !== hass.locale ||
      prev.themes !== hass.themes ||
      prev.darkMode !== Boolean(hass.themes?.darkMode)
    ) {
      return true;
    }
    if (!this._eink && Date.now() - this._lastRenderAt >= HEARTBEAT_MS) return true;
    if (prev.states === hass.states) return false;
    const resolved = this._resolveEntities();
    const ids = "error" in resolved ? allSuuntoEntityIds(hass) : resolved.ids;
    return ids.some((id) => prev.states[id] !== hass.states[id]);
  }

  protected _configuredDeviceId?: string;

  /** Every card keeps its config in `_config`; read it here for the universal options. */
  protected get _cardConfig(): SuuntoCardConfig | undefined {
    return (this as unknown as { _config?: SuuntoCardConfig })._config;
  }

  /** Call at the top of render(): toggles the `.dark`/`.compact`/`.hide-*` host classes used by
   * style-tokens.ts, and sets the accent color / list height custom properties. */
  protected _syncTheme(): void {
    const config = this._cardConfig;
    const eink = this._einkMode(config);
    this._eink = eink;
    const dark = Boolean(this.hass?.themes?.darkMode) && !eink;
    this.classList.toggle("dark", dark);
    this.classList.toggle("eink", Boolean(eink));
    for (const palette of EINK_PALETTES) this.classList.toggle(`eink-${palette}`, eink === palette);
    const maxLines = config?.max_lines;
    const clamp = typeof maxLines === "number" && maxLines > 0;
    this.classList.toggle("max-lines", clamp);
    if (clamp) this.style.setProperty("--sc-max-lines", String(Math.round(maxLines)));
    else this.style.removeProperty("--sc-max-lines");
    this.classList.toggle("compact", Boolean(config?.compact));
    this.classList.toggle("hide-header", Boolean(config?.hide_header));
    this.classList.toggle("hide-icon", Boolean(config?.hide_icon));
    this.classList.toggle("hide-subtitle", Boolean(config?.hide_subtitle));
    this.classList.toggle("hide-legend", Boolean(config?.hide_legend));
    this._syncAccent(eink ? undefined : config?.accent_color, dark);
    const height = config?.list_height;
    if (height && height > 0) this.style.setProperty("--sc-list-height", `${height}px`);
    else this.style.removeProperty("--sc-list-height");
    const scale = textScale(config?.text_size);
    if (scale) this.style.setProperty("--sc-scale", String(scale));
    else this.style.removeProperty("--sc-scale");
  }

  protected updated(changed: PropertyValues): void {
    super.updated(changed);
    this._syncStaleStrip();
  }

  /**
   * "Watch not synced for 26 h · synced 17.10 09:12" strip right under the
   * header while the integration's `last_sync` says the data is over a day
   * old, so no card passes old numbers off as today's. Inserted after render,
   * in one place instead of every card's template. Cards without a
   * `.header` get none (it would crowd them), nor do Today and Sleep &
   * Readiness, which show the same as a chip. Off with `hide_sync_warning`.
   */
  private _syncStaleStrip(): void {
    const root = this.renderRoot;
    const existing = root.querySelector<HTMLElement>(".sc-stale");
    const text = this._staleText();
    const header = root.querySelector(".header");
    if (!text || !header) {
      existing?.remove();
      return;
    }
    const strip = existing ?? document.createElement("div");
    if (!existing) {
      strip.className = "sc-stale";
      strip.setAttribute("role", "status");
    }
    if (strip.dataset.text !== text.join("|")) {
      strip.dataset.text = text.join("|");
      const icon = document.createElement("ha-icon");
      icon.setAttribute("icon", "mdi:watch-import");
      const title = document.createElement("b");
      title.textContent = text[0];
      const detail = document.createElement("span");
      detail.textContent = ` · ${text[1]}`;
      strip.replaceChildren(icon, title, detail);
    }
    if (strip.previousElementSibling !== header) header.after(strip);
  }

  private _staleText(): [string, string] | null {
    const config = this._cardConfig;
    if (!this.hass || !config || config.hide_sync_warning || OWN_SYNC_CHIP.has(config.type)) return null;
    const resolved = this._resolveEntities();
    if ("error" in resolved) return null;
    const id = resolved.map["last_sync"];
    const sync = readSync(id ? this.hass.states[id] : undefined);
    if (!sync?.stale) return null;
    return [
      t(this.hass, "chip.not_synced", { hours: Math.floor(sync.hoursAgo) }),
      syncLabel(this.hass, sync),
    ];
  }

  /**
   * `accent_color`: inline custom properties on the host win over the
   * `:host`/`:host(.dark)` token rules, so the amber and blue accents (and
   * their tinted backgrounds) follow the chosen color in both themes. The
   * semantic colors (zones, sleep stages, good/bad) stay. An invalid color
   * is ignored.
   */
  private _syncAccent(color: string | undefined, dark: boolean): void {
    const props = ["--sc-amber", "--sc-amber-bg", "--sc-pulse", "--sc-pulse-bg"];
    const value = color?.trim();
    if (!value || (typeof CSS !== "undefined" && !CSS.supports("color", value))) {
      for (const prop of props) this.style.removeProperty(prop);
      return;
    }
    const bg = `color-mix(in srgb, ${value} ${dark ? 18 : 14}%, transparent)`;
    this.style.setProperty("--sc-amber", value);
    this.style.setProperty("--sc-pulse", value);
    this.style.setProperty("--sc-amber-bg", bg);
    this.style.setProperty("--sc-pulse-bg", bg);
  }

  /** E-ink mode (eink.ts): the card's `eink` option, else the
   * `suunto-cards-eink` theme variable, which turns it on for every card. */
  private _einkMode(config: SuuntoCardConfig | undefined): EinkMode | undefined {
    if (config?.eink !== undefined) return einkMode(config.eink);
    return einkMode(getComputedStyle(this).getPropertyValue("--suunto-cards-eink"));
  }

  /** The header title: the `title` option when set, else the card's own. */
  protected _title(fallback: string): string {
    return this._cardConfig?.title?.trim() || fallback;
  }

  /** A list cut to the `max_items` option (no cap when unset). */
  protected _cap<T>(items: readonly T[]): T[] {
    const max = this._cardConfig?.max_items;
    return max !== undefined && max > 0 ? items.slice(0, max) : [...items];
  }

  /** The header icon: the `icon` option when set, else the card's own. */
  protected _icon(fallback: string): string {
    return this._cardConfig?.icon?.trim() || fallback;
  }

  /** Resolves the device + translation_key map, or a ready-to-return error template.
   * Cached until the entity or device registry (or the picked device) changes. */
  protected _resolveEntities(): ResolvedEntities {
    const hass = this.hass;
    if (!hass) {
      return { error: this._message("mdi:alert-circle-outline", t(hass, "empty.loading")) };
    }
    const cached = this._resolvedCache;
    if (
      cached &&
      cached.entities === hass.entities &&
      cached.devices === hass.devices &&
      cached.deviceId === this._configuredDeviceId &&
      "map" in cached.result
    ) {
      return cached.result;
    }
    let result: ResolvedEntities;
    try {
      const deviceId = resolveSuuntoDevice(hass, this._configuredDeviceId);
      const ids = Object.values(hass.entities ?? {})
        .filter((entity) => entity.device_id === deviceId && entity.platform === SUUNTO_PLATFORM)
        .map((entity) => entity.entity_id);
      result = { map: mapByTranslationKey(hass, deviceId), ids };
    } catch (err) {
      // Not cached: the error template is in the language of this render.
      return { error: this._message("mdi:alert-circle-outline", this._configErrorMessage(err)) };
    }
    this._resolvedCache = {
      entities: hass.entities,
      devices: hass.devices,
      deviceId: this._configuredDeviceId,
      result,
    };
    return result;
  }

  private _configErrorMessage(err: unknown): string {
    if (err instanceof SuuntoConfigError) {
      if (err.code === "device_missing") {
        return t(this.hass, "error.device_missing", { device: err.deviceId ?? "" });
      }
      if (err.code === "multiple_devices") return t(this.hass, "error.multiple_devices");
      return t(this.hass, "error.no_device");
    }
    return t(this.hass, "empty.generic_error");
  }

  protected _message(icon: string, title: string, subtitle?: string): TemplateResult {
    return html`
      <ha-card class="static">
        <div class="empty">
          <ha-icon .icon=${icon}></ha-icon>
          <div class="t1">${title}</div>
          ${subtitle ? html`<div class="t2">${subtitle}</div>` : nothing}
        </div>
      </ha-card>
    `;
  }
}
