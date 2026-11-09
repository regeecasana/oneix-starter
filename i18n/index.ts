import en from "./locales/en.json"
import type { LanguageCode } from "./languages"

type Messages = Record<string, string>

/**
 * Add one JSON file per language with the same keys as en.json, then register it
 * here. Missing keys fall back to English.
 */
const locales: Partial<Record<LanguageCode, Messages>> = { en }

export function t(lang: LanguageCode, key: string, vars: Record<string, string> = {}): string {
  const text = locales[lang]?.[key] ?? (en as Messages)[key] ?? key
  return text.replace(/\{(\w+)\}/g, (_, name: string) => vars[name] ?? `{${name}}`)
}
