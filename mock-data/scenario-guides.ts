import type { ScenarioGuide } from "@/contracts/customer-insights"

// ---------------------------------------------------------------------------
// Scenario guides (example — replicate per scenario)
// ---------------------------------------------------------------------------

export const scenarioGuides: ScenarioGuide[] = [
  {
    scenarioId: "fraud",
    customerId: "cus_maya_chen",
    situation:
      "You are Maya. You woke up to two transactions on your NorthStar card that you did not make. Last night you clicked a link in an email that looked like it came from the bank.",
    keyFacts: [
      "Maya did NOT make the S$1,284.67 LUXEMARKET.COM purchase.",
      "Maya did NOT withdraw S$600 from an ATM in Johor Bahru — she was home in Singapore.",
      "The S$2.10 MetroRide fare and S$84.30 FairPrice purchase ARE hers.",
      "She opened a \"Verify your account\" email on 7 Nov and entered her login details.",
    ],
    goals: ["Stop further charges", "Get her money back", "Secure her online banking"],
    suggestedQuestions: [
      "There are charges on my card I didn't make",
      "Can you freeze my card?",
      "I think I clicked a phishing link",
      "When will I get my money back?",
      "Can I speak to a person?",
    ],
  },
  {
    scenarioId: "order-exchange",
    customerId: "cus_ana_reyes",
    situation:
      "You are Ana. The rattan floor lamp you ordered online arrived with a cracked base. You already went to the SM North EDSA store yesterday and saw they have it in stock.",
    keyFacts: [
      "Order #HB-2026-55031, delivered 7 Nov, ₱6,490.",
      "The base was cracked on arrival — you have a photo.",
      "The store at SM North EDSA has the same lamp in stock.",
      "This is your second damaged delivery in two months.",
    ],
    goals: ["Exchange the lamp in-store today", "Avoid another delivery", "Get something for the trouble"],
    suggestedQuestions: [
      "My lamp arrived broken",
      "Can I exchange it at the SM North store?",
      "Do I need to bring the box?",
      "This keeps happening — can you do something?",
      "Pwede bang mag-Tagalog?",
    ],
  },
]
