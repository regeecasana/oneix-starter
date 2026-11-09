import en from "./locales/en.json"
import fil from "./locales/fil.json"
import ms from "./locales/ms.json"
import id from "./locales/id.json"
import th from "./locales/th.json"
import vi from "./locales/vi.json"
import type { LanguageCode } from "./languages"

type Messages = Record<string, string>

/** UI strings per language. Same keys as en.json; missing keys fall back to English. */
const locales: Record<LanguageCode, Messages> = { en, fil, ms, id, th, vi }

export function t(lang: LanguageCode, key: string, vars: Record<string, string> = {}): string {
  const text = locales[lang][key] || (en as Messages)[key] || key
  return text.replace(/\{(\w+)\}/g, (_, name: string) => vars[name] ?? `{${name}}`)
}
