import { en } from "../translations/en";
import { pl } from "../translations/pl";
import { de } from "../translations/de";
import { pt } from "../translations/pt";
import { fr } from "../translations/fr";
import { es } from "../translations/es";
import { it } from "../translations/it";
import { nl } from "../translations/nl";
import type { SuuntoHass } from "./types";

export type TranslationKey = keyof typeof en;

const LANGUAGES: Record<string, Record<TranslationKey, string>> = {
  en,
  pl,
  de,
  pt,
  fr,
  es,
  it,
  nl,
};

function dictFor(hass: SuuntoHass | undefined): Record<TranslationKey, string> {
  const raw = hass?.language ?? "en";
  const base = raw.split("-")[0]?.toLowerCase();
  return LANGUAGES[base] ?? en;
}

/** Plain `{name}` substitution - no ICU plural rules, matches this card family's scope. */
export function t(
  hass: SuuntoHass | undefined,
  key: TranslationKey,
  vars?: Record<string, string | number>
): string {
  let str = dictFor(hass)[key] ?? en[key];
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      str = str.replace(`{${k}}`, String(v));
    }
  }
  return str;
}

/** Picks a `*_one` / `*_other` key pair by count - a two-way plural split. */
export function tPlural(
  hass: SuuntoHass | undefined,
  count: number,
  oneKey: TranslationKey,
  otherKey: TranslationKey,
  vars?: Record<string, string | number>
): string {
  return t(hass, count === 1 ? oneKey : otherKey, { count, ...vars });
}
