import type { CustomerInsights } from "@/contracts/customer-insights"

// ---------------------------------------------------------------------------
// Customers
// ---------------------------------------------------------------------------

export const customers: CustomerInsights[] = [
  // ---- Banking · Fraud (inbound) — full phygital example ------------------
  {
    customerId: "cus_maya_chen",
    name: "Maya Chen",
    industry: "banking",
    scenarioId: "fraud",
    brand: "NorthStar Bank",
    location: "Boston, US",
    customerSince: "2017-03-14",
    preferredLanguage: "en",
    preferredChannel: "mobile_app",
    segments: ["vip", "loyal"],
    phygital: true,
    cltv: {
      value: 186400,
      currency: "USD",
      score: 92,
      tier: "platinum",
      percentile: 4,
      drivers: ["Priority Banking client", "Mortgage + 2 credit cards", "9 years tenure"],
    },
    retention: {
      churnRisk: "medium",
      churnScore: 48,
      signals: [
        { id: "cs_m1", text: "Said she is \"thinking of moving to another bank\" if the refund takes too long", severity: "high", source: "post_conversation", ticketId: "FR-982741", detectedAt: "2026-11-09T10:42:00+08:00" },
        { id: "cs_m2", text: "Second fraud-related contact in 6 months", severity: "medium", source: "ticket", detectedAt: "2026-11-09T10:31:00+08:00" },
      ],
      recommendedAction: "Fast-track provisional credit and waive card replacement fee.",
    },
    csatHistory: [
      { ticketId: "NS-77120", subject: "Card replacement delivery", channel: "web_chat", rating: 4, solvedAt: "2026-06-02T15:10:00+08:00" },
      { ticketId: "NS-70418", subject: "Phishing SMS report", channel: "voice", rating: 3, comment: "Took a while to reach someone.", solvedAt: "2026-05-11T11:24:00+08:00" },
      { ticketId: "NS-61207", subject: "Mortgage rate review", channel: "mobile_app", rating: 5, solvedAt: "2025-12-03T16:45:00+08:00" },
    ],
    timeline: [
      { id: "t_m1", realm: "digital", type: "support_contact", title: "Reported unauthorized transactions", channel: "mobile_app", occurredAt: "2026-11-09T10:30:00+08:00" },
      { id: "t_m2", realm: "digital", type: "online_payment", title: "LUXEMARKET.COM", detail: "Card-not-present, new device", location: "Online", amount: 1284.67, currency: "USD", occurredAt: "2026-11-09T02:17:00+08:00", flag: "suspicious" },
      { id: "t_m3", realm: "physical", type: "atm_withdrawal", title: "ATM cash withdrawal", detail: "Debit card ••••1842", location: "ATM · Worcester, MA", amount: 600, currency: "USD", occurredAt: "2026-11-09T01:52:00+08:00", flag: "suspicious" },
      { id: "t_m4", realm: "digital", type: "app_login", title: "Login from new device", detail: "Android · IP geolocated to Worcester, MA", channel: "mobile_app", occurredAt: "2026-11-09T01:40:00+08:00", flag: "suspicious" },
      { id: "t_m5", realm: "physical", type: "card_tap", title: "MetroRide fare", location: "Back Bay station", amount: 2.4, currency: "USD", occurredAt: "2026-11-08T19:05:00+08:00" },
      { id: "t_m6", realm: "physical", type: "pos_purchase", title: "Grocery purchase", location: "Corner Market · Back Bay", amount: 84.3, currency: "USD", occurredAt: "2026-11-08T18:40:00+08:00" },
      { id: "t_m7", realm: "digital", type: "phone_call", title: "Call from someone claiming to be NorthStar", detail: "Customer read out a one-time code", channel: "voice", occurredAt: "2026-11-08T17:30:00+08:00", flag: "issue" },
      { id: "t_m8", realm: "physical", type: "branch_visit", title: "Priority Banking appointment", location: "NorthStar · Boylston Street", occurredAt: "2026-10-22T14:00:00+08:00" },
    ],
  },

  // ---- Banking · Collections (outbound) -----------------------------------
  {
    customerId: "cus_daniel_brooks",
    name: "Daniel Brooks",
    industry: "banking",
    scenarioId: "collections",
    brand: "NorthStar Bank",
    location: "Boston, US",
    customerSince: "2022-08-01",
    preferredLanguage: "en",
    preferredChannel: "mobile_app",
    segments: ["price_sensitive", "at_risk"],
    phygital: false,
    cltv: { value: 21800, currency: "USD", score: 41, tier: "silver", percentile: 46, drivers: ["Personal loan", "1 credit card", "Salary credited monthly"] },
    retention: {
      churnRisk: "high",
      churnScore: 74,
      signals: [
        { id: "cs_d1", text: "Rewards card ending 4821 is 17 days past due ($286.40)", severity: "high", source: "behavioral", detectedAt: "2026-11-05T09:00:00+08:00" },
        { id: "cs_d2", text: "Automatic payment bounced after a layoff", severity: "medium", source: "post_conversation", detectedAt: "2026-11-09T10:50:00+08:00" },
      ],
      recommendedAction: "Route to Payment Assistance for a hardship plan: $100 on 18 Sep, rest after 2 Oct.",
    },
    csatHistory: [
      { ticketId: "NS-74011", subject: "Late fee dispute", channel: "whatsapp", rating: 2, comment: "Fee was not waived.", solvedAt: "2026-09-18T13:00:00+08:00" },
      { ticketId: "NS-65530", subject: "Credit limit increase", channel: "mobile_app", rating: 4, solvedAt: "2026-02-04T10:30:00+08:00" },
    ],
    timeline: [],
  },

  // ---- Travel · Refund & Rebooking (inbound) ------------------------------
  {
    customerId: "cus_mei_lin_tan",
    name: "Mei Lin Tan",
    industry: "travel",
    scenarioId: "rebooking",
    brand: "Orchid Air",
    location: "Singapore",
    customerSince: "2019-05-20",
    preferredLanguage: "en",
    preferredChannel: "web_chat",
    segments: ["high_value", "loyal"],
    phygital: false,
    cltv: { value: 38200, currency: "SGD", score: 78, tier: "gold", percentile: 12, drivers: ["Orchid Gold member", "14 flights this year", "Frequent business routes"] },
    retention: {
      churnRisk: "medium",
      churnScore: 39,
      signals: [{ id: "cs_t1", text: "Second cancellation on the same route this quarter", severity: "medium", source: "ticket", ticketId: "OA826", detectedAt: "2026-11-09T09:10:00+08:00" }],
      recommendedAction: "Rebook the family together on OA826 and protect the miles redemption.",
    },
    csatHistory: [
      { ticketId: "OA-55102", subject: "Seat upgrade request", channel: "mobile_app", rating: 5, solvedAt: "2026-08-14T08:20:00+08:00" },
      { ticketId: "OA-49017", subject: "Baggage delay", channel: "voice", rating: 3, solvedAt: "2026-04-02T19:45:00+08:00" },
    ],
    timeline: [],
  },

  // ---- Travel · Flight Disruption (outbound) ------------------------------
  {
    customerId: "cus_daniel_lim",
    name: "Daniel Lim",
    industry: "travel",
    scenarioId: "disruption",
    brand: "Orchid Air",
    location: "Singapore",
    customerSince: "2024-01-09",
    preferredLanguage: "en",
    preferredChannel: "mobile_app",
    segments: ["growth"],
    phygital: false,
    cltv: { value: 9600, currency: "SGD", score: 55, tier: "silver", percentile: 33, drivers: ["Spend up 40% YoY", "Started booking business class"] },
    retention: { churnRisk: "low", churnScore: 18, signals: [] },
    csatHistory: [{ ticketId: "OA-58830", subject: "Meal preference change", channel: "web_chat", rating: 5, solvedAt: "2026-10-01T12:00:00+08:00" }],
    timeline: [],
  },

  // ---- Education · Admissions (inbound) -----------------------------------
  {
    customerId: "cus_priya_nair",
    name: "Priya Nair",
    industry: "education",
    scenarioId: "admissions",
    brand: "Meridian Institute",
    location: "Singapore",
    customerSince: "2026-09-02",
    preferredLanguage: "en",
    preferredChannel: "web_chat",
    segments: ["new"],
    phygital: false,
    cltv: { value: 64000, currency: "SGD", score: 70, tier: "gold", percentile: 20, drivers: ["Applying to a 3-year degree", "Scholarship-eligible"] },
    retention: {
      churnRisk: "medium",
      churnScore: 42,
      signals: [{ id: "cs_e1", text: "Asked about application deadlines at two other institutes", severity: "medium", source: "post_conversation", detectedAt: "2026-11-09T11:05:00+08:00" }],
      recommendedAction: "Confirm eligibility in-session and book a campus tour.",
    },
    csatHistory: [],
    timeline: [],
  },

  // ---- Education · Enrolment (outbound) -----------------------------------
  {
    customerId: "cus_muhammad_irfan",
    name: "Muhammad Irfan",
    industry: "education",
    scenarioId: "enrolment",
    brand: "Meridian Institute",
    location: "Singapore",
    customerSince: "2026-07-15",
    preferredLanguage: "en",
    preferredChannel: "whatsapp",
    segments: ["new", "at_risk"],
    phygital: false,
    cltv: { value: 58000, currency: "SGD", score: 66, tier: "gold", percentile: 24, drivers: ["Accepted to Bachelor of Computing"] },
    retention: {
      churnRisk: "high",
      churnScore: 68,
      signals: [
        { id: "cs_i1", text: "Offer expires in 5 days, before a deferment review can finish", severity: "high", source: "behavioral", detectedAt: "2026-11-06T08:00:00+08:00" },
        { id: "cs_i2", text: "Visited the deposit and deferment pages without finishing", severity: "medium", source: "behavioral", detectedAt: "2026-11-08T08:00:00+08:00" },
      ],
      recommendedAction: "Place a temporary hold on the offer while the January 2028 deferment is reviewed.",
    },
    csatHistory: [{ ticketId: "MI-2210", subject: "Document upload error", channel: "web_chat", rating: 3, solvedAt: "2026-10-12T14:30:00+08:00" }],
    timeline: [],
  },

  // ---- Healthcare · Appointment / Pre-visit — phygital ---------------------
  {
    customerId: "cus_lim_hoon",
    name: "Madam Lim Hoon",
    industry: "healthcare",
    scenarioId: "appointment",
    brand: "WellSG Health",
    location: "Singapore",
    customerSince: "2015-11-03",
    preferredLanguage: "en",
    preferredChannel: "voice",
    segments: ["loyal", "high_value"],
    phygital: true,
    cltv: { value: 42500, currency: "SGD", score: 81, tier: "gold", percentile: 9, drivers: ["Chronic care programme", "Family plan (3 members)", "11 years with clinic"] },
    retention: {
      churnRisk: "low",
      churnScore: 22,
      signals: [{ id: "cs_h1", text: "Missed last follow-up appointment", severity: "low", source: "behavioral", detectedAt: "2026-10-28T09:00:00+08:00" }],
      recommendedAction: "Offer a nearer clinic slot and transport reminder.",
    },
    csatHistory: [
      { ticketId: "WS-3301", subject: "Prescription refill", channel: "voice", rating: 5, solvedAt: "2026-09-21T10:15:00+08:00" },
      { ticketId: "WS-2987", subject: "Billing query", channel: "email", rating: 4, solvedAt: "2026-07-08T16:00:00+08:00" },
    ],
    timeline: [
      { id: "t_h1", realm: "digital", type: "support_contact", title: "Called to reschedule cardiology appointment", channel: "voice", occurredAt: "2026-11-09T09:20:00+08:00" },
      { id: "t_h2", realm: "digital", type: "app_login", title: "Viewed lab results", channel: "mobile_app", occurredAt: "2026-11-06T20:10:00+08:00" },
      { id: "t_h3", realm: "physical", type: "pharmacy_pickup", title: "Collected monthly medication", location: "WellSG Pharmacy · Toa Payoh", occurredAt: "2026-11-02T11:30:00+08:00" },
      { id: "t_h4", realm: "physical", type: "clinic_checkin", title: "Follow-up appointment — no show", location: "WellSG Heart Centre", occurredAt: "2026-10-28T14:40:00+08:00", flag: "issue" },
      { id: "t_h5", realm: "physical", type: "clinic_checkin", title: "Blood test", location: "WellSG Clinic · Toa Payoh", occurredAt: "2026-10-14T08:15:00+08:00" },
    ],
  },

  // ---- Retail · Order issue & store exchange (new) — phygital --------------
  {
    customerId: "cus_ana_reyes",
    name: "Ana Reyes",
    industry: "retail",
    scenarioId: "order-exchange",
    brand: "Habi Home & Living",
    location: "Quezon City, PH",
    customerSince: "2021-04-10",
    preferredLanguage: "fil",
    preferredChannel: "messenger",
    segments: ["high_value", "growth"],
    phygital: true,
    cltv: { value: 312000, currency: "PHP", score: 84, tier: "gold", percentile: 8, drivers: ["Habi Rewards Gold", "Buys online and in-store", "Basket size up 35% YoY"] },
    retention: {
      churnRisk: "medium",
      churnScore: 45,
      signals: [
        { id: "cs_r1", text: "Second damaged delivery in 2 months", severity: "high", source: "ticket", ticketId: "HB-10982", detectedAt: "2026-11-09T10:05:00+08:00" },
        { id: "cs_r2", text: "Said a competitor offers free same-day exchange", severity: "medium", source: "post_conversation", detectedAt: "2026-11-09T10:20:00+08:00" },
      ],
      recommendedAction: "Approve in-store exchange today and add 500 reward points.",
    },
    csatHistory: [
      { ticketId: "HB-09874", subject: "Late delivery — dining chairs", channel: "messenger", rating: 2, comment: "Delivery was rescheduled twice.", solvedAt: "2026-09-15T17:30:00+08:00" },
      { ticketId: "HB-08120", subject: "Rewards points not credited", channel: "web_chat", rating: 5, solvedAt: "2026-06-03T12:10:00+08:00" },
    ],
    timeline: [
      { id: "t_r1", realm: "digital", type: "social_message", title: "Messaged about cracked lamp base", detail: "Sent photo of damage", channel: "messenger", occurredAt: "2026-11-09T10:00:00+08:00" },
      { id: "t_r2", realm: "physical", type: "store_visit", title: "Visited store, checked stock of lamp", detail: "Scanned rewards QR at entrance", location: "Habi · SM North EDSA", occurredAt: "2026-11-08T16:20:00+08:00" },
      { id: "t_r3", realm: "digital", type: "online_order", title: "Order delivered — Rattan floor lamp", detail: "Order #HB-2026-55031", location: "habi.ph", amount: 6490, currency: "PHP", occurredAt: "2026-11-07T14:05:00+08:00", flag: "issue" },
      { id: "t_r4", realm: "digital", type: "cart_abandoned", title: "Left matching side table in cart", location: "Habi app", amount: 4990, currency: "PHP", occurredAt: "2026-11-03T22:40:00+08:00" },
      { id: "t_r5", realm: "physical", type: "pos_purchase", title: "In-store purchase — linen set, cushions", detail: "POS terminal 04", location: "Habi · SM North EDSA", amount: 3870, currency: "PHP", occurredAt: "2026-10-19T15:10:00+08:00" },
      { id: "t_r6", realm: "digital", type: "email_opened", title: "Opened \"11.11 Home Sale\" campaign", channel: "email", occurredAt: "2026-10-18T09:00:00+08:00" },
    ],
  },
]
