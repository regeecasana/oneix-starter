/**
 * Scenario guides in the customer's chosen language.
 *
 * Guides are written in English in `mock-data/scenario-guides.ts`. Translations
 * live in `i18n/guides/<lang>.json`, keyed like:
 *   "fraud.situation", "fraud.keyFacts.0", "fraud.goals.1", "fraud.suggestedQuestions.3"
 * Missing translations fall back to English, so `npm run i18n:check` must be
 * clean before the demo.
 */
import type { LanguageCode, ScenarioGuide } from "@/contracts/customer-insights"
import fil from "./guides/fil.json"
import ms from "./guides/ms.json"
import id from "./guides/id.json"
import th from "./guides/th.json"
import vi from "./guides/vi.json"

type Messages = Record<string, string>

const translations: Record<Exclude<LanguageCode, "en">, Messages> = { fil, ms, id, th, vi }

export function localizeGuide(guide: ScenarioGuide, lang: LanguageCode): ScenarioGuide {
  if (lang === "en") return guide
  const dict = translations[lang]
  const tr = (key: string, fallback: string) => dict[`${guide.scenarioId}.${key}`] || fallback
  const list = (field: "keyFacts" | "goals" | "suggestedQuestions") =>
    guide[field].map((text, i) => tr(`${field}.${i}`, text))

  return {
    ...guide,
    situation: tr("situation", guide.situation),
    keyFacts: list("keyFacts"),
    goals: list("goals"),
    suggestedQuestions: list("suggestedQuestions"),
  }
}
