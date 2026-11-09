/**
 * ONEix customer-insights contract.
 *
 * Do not change these types without Regee's review: they are copied into
 * `oneix/packages/contracts` as-is, so every component and fixture must match them.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** The 6 customer-interface languages. */
export type LanguageCode = "en" | "fil" | "ms" | "id" | "th" | "vi"

export type IndustryId = "banking" | "travel" | "education" | "healthcare" | "retail"

export type Currency = "SGD" | "PHP" | "MYR" | "USD"

/** Mirrors what a marketing platform / CDP would push. */
export type SegmentId =
  | "vip"
  | "high_value"
  | "loyal"
  | "growth"
  | "new"
  | "price_sensitive"
  | "at_risk"
  | "dormant"

export interface Segment {
  id: SegmentId
  label: string
  /** Tailwind-ish token the UI maps to a badge colour. */
  tone: "violet" | "amber" | "emerald" | "sky" | "slate" | "orange" | "red" | "zinc"
  description: string
}

export type CltvTier = "platinum" | "gold" | "silver" | "bronze"

export interface Cltv {
  /** Projected lifetime value to the brand. */
  value: number
  currency: Currency
  /** 0–100, used for the gauge in the agent view. */
  score: number
  tier: CltvTier
  /** "Top 4% of customers" */
  percentile: number
  /** Short reasons shown under the number. */
  drivers: string[]
}

export type RiskLevel = "low" | "medium" | "high"

export interface ChurnSignal {
  id: string
  /** Rendered in red text in the Retention insight section. */
  text: string
  severity: RiskLevel
  /** Where the signal came from. `post_conversation` = generated after the chat/call ends. */
  source: "ticket" | "post_conversation" | "behavioral" | "survey"
  ticketId?: string
  detectedAt: string
}

export interface Retention {
  churnRisk: RiskLevel
  /** 0–100 */
  churnScore: number
  signals: ChurnSignal[]
  /** One-line suggested save action for the agent. */
  recommendedAction?: string
}

export interface TicketCsat {
  ticketId: string
  subject: string
  channel: Channel
  /** 1–5 stars, per ticket (not an agent-wide average). */
  rating: 1 | 2 | 3 | 4 | 5
  comment?: string
  solvedAt: string
}

export type Channel =
  | "web_chat"
  | "voice"
  | "mobile_app"
  | "whatsapp"
  | "messenger"
  | "instagram"
  | "tiktok"
  | "email"
  | "sms"

export type TimelineEventType =
  // physical
  | "store_visit"
  | "pos_purchase"
  | "branch_visit"
  | "atm_withdrawal"
  | "card_tap"
  | "clinic_checkin"
  | "pharmacy_pickup"
  | "airport_checkin"
  | "campus_visit"
  // digital
  | "online_order"
  | "online_payment"
  | "app_login"
  | "web_browse"
  | "cart_abandoned"
  | "email_opened"
  | "social_message"
  | "phone_call"
  | "support_contact"

export interface TimelineEvent {
  id: string
  /** Drives the physical/digital badge — the point of the phygital view. */
  realm: "physical" | "digital"
  type: TimelineEventType
  title: string
  detail?: string
  /** Store, branch, clinic, terminal, or app/site name. */
  location?: string
  channel?: Channel
  amount?: number
  currency?: Currency
  occurredAt: string
  /** Highlights the event in the timeline (e.g. a disputed transaction). */
  flag?: "suspicious" | "disputed" | "issue" | "milestone"
}

export interface CustomerInsights {
  customerId: string
  name: string
  industry: IndustryId
  scenarioId: string
  brand: string
  location: string
  customerSince: string
  preferredLanguage: LanguageCode
  preferredChannel: Channel
  segments: SegmentId[]
  cltv: Cltv
  retention: Retention
  csatHistory: TicketCsat[]
  /** Newest first. Only shown in the UI for phygital-enabled scenarios. */
  timeline: TimelineEvent[]
  phygital: boolean
}

/**
 * The guide shown to the person playing the customer in the demo.
 * It is NOT a script: it tells them what happened and what they want, and they
 * talk to the AI in their own words. Authored in English; translated per language
 * (see `i18n/guides.ts`).
 */
export interface ScenarioGuide {
  scenarioId: string
  customerId: string
  /** What happened, from the customer's point of view ("You are Maya…"). */
  situation: string
  /** Facts the customer can use ("You did NOT make the LUXEMARKET purchase"). */
  keyFacts: string[]
  /** What the customer wants out of the conversation. */
  goals: string[]
  /** Suggested-question chips. Tapping one sends it; free text is always allowed. */
  suggestedQuestions: string[]
}
