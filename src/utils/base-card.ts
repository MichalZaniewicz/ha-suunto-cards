import { LitElement, html, nothing, type PropertyValues, type TemplateResult } from "lit";
import { property } from "lit/decorators.js";
import type { SuuntoCardConfig, SuuntoHass } from "./types";
import { resolveSuuntoDevice, mapByTranslationKey, SuuntoConfigError } from "./entities";
import { t } from "./localize";
import { readSync, syncLabel } from "./sync";

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

type ResolvedEntities = { map: Record<string, string> } | { error: TemplateResult };

/**
 * Shared plumbing for every Suunto card: dark-mode class sync, device
 * resolution + translation_key lookup, and a consistent empty/error state.
 * Widgets extend this and only implement `render()`.
 */
export abstract class SuuntoBaseCard extends LitElement {
  private _rawHass?: SuuntoHass;
  // The last `hass` handed out with the card's own language - see the getter.
  private _languageView?: { raw: SuuntoHass; language: string; view: SuuntoHass };
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
    if (raw.locale) view.locale = { ...raw.locale, language };
    this._languageView = { raw, language, view };
    return view;
  }

  public set hass(value: SuuntoHass | undefined) {
    this._rawHass = value;
  }

  protected _configuredDeviceId?: string;

  /** Every card keeps its config in `_config`; read it here for the universal options. */
  protected get _cardConfig(): SuuntoCardConfig | undefined {
    return (this as unknown as { _config?: SuuntoCardConfig })._config;
  }

  /** Call at the top of render(): toggles the `.dark`/`.compact`/`.hide-*` host classes used by
   * style-tokens.ts, and sets the accent color / list height custom properties. */
  protected _syncTheme(): void {
    const dark = Boolean(this.hass?.themes?.darkMode);
    this.classList.toggle("dark", dark);
    const config = this._cardConfig;
    this.classList.toggle("compact", Boolean(config?.compact));
    this.classList.toggle("hide-header", Boolean(config?.hide_header));
    this.classList.toggle("hide-icon", Boolean(config?.hide_icon));
    this.classList.toggle("hide-subtitle", Boolean(config?.hide_subtitle));
    this.classList.toggle("hide-legend", Boolean(config?.hide_legend));
    this._syncAccent(config?.accent_color, dark);
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
      result = { map: mapByTranslationKey(hass, deviceId) };
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
