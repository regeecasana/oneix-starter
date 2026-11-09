/**
 * The 6 customer-interface languages (A2-1). Confirm the list with Regee.
 *
 * `country` is the ISO code for the flag. Use SVG flag files in /public/flags
 * (e.g. /public/flags/ph.svg), not emoji: Windows does not render flag emoji.
 */
import type { LanguageCode } from "@/contracts/customer-insights"

export const languages: { code: LanguageCode; label: string; country: string }[] = [
  { code: "en", label: "English", country: "sg" },
  { code: "fil", label: "Filipino", country: "ph" },
  { code: "ms", label: "Bahasa Melayu", country: "my" },
  { code: "id", label: "Bahasa Indonesia", country: "id" },
  { code: "th", label: "ไทย", country: "th" },
  { code: "vi", label: "Tiếng Việt", country: "vn" },
]

export type { LanguageCode }
