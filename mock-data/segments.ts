import type { Segment, SegmentId } from "@/contracts/customer-insights"

// ---------------------------------------------------------------------------
// Segment catalogue (mock marketing platform)
// ---------------------------------------------------------------------------

export const segments: Record<SegmentId, Segment> = {
  vip: { id: "vip", label: "VIP", tone: "violet", description: "Top 5% by lifetime value; priority handling." },
  high_value: { id: "high_value", label: "High Value", tone: "amber", description: "Above-average spend and product holding." },
  loyal: { id: "loyal", label: "Loyal", tone: "emerald", description: "5+ years or consistent repeat activity." },
  growth: { id: "growth", label: "Growth", tone: "sky", description: "Spend trending up; cross-sell candidate." },
  new: { id: "new", label: "New", tone: "slate", description: "Customer for less than 6 months." },
  price_sensitive: { id: "price_sensitive", label: "Price Sensitive", tone: "orange", description: "Responds mainly to promos and fee waivers." },
  at_risk: { id: "at_risk", label: "At Risk", tone: "red", description: "Engagement or sentiment dropping." },
  dormant: { id: "dormant", label: "Dormant", tone: "zinc", description: "No meaningful activity in 90+ days." },
}
