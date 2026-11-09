import type { ScenarioGuide } from "@/contracts/customer-insights"

/**
 * Scenario guides — what the person playing the customer needs to know.
 * NOT a script: no dialogue, only the situation, facts and goals.
 *
 * Source of truth for the facts: the scenario stories in oneix-demo
 * (`lib/oneix/cases.ts`), which Regee's Cognigy flows follow. If a flow changes,
 * update the facts here to match.
 *
 * Written in English only. The other 5 languages live in
 * `i18n/guides/<lang>.json` and are filled through the translation sheet
 * (`npm run i18n:export` / `npm run i18n:import`). Every guide must exist in all
 * 6 languages before the demo — `npm run i18n:check` lists anything missing.
 */
export const scenarioGuides: ScenarioGuide[] = [
  // ---- Banking -------------------------------------------------------------
  {
    scenarioId: "fraud",
    customerId: "cus_maya_chen",
    situation: "You are Maya Chen, a NorthStar Bank customer in Boston. This morning you saw transactions on your debit card ending 1842 that you did not make. Yesterday someone called saying they were from the bank, and you read them a one-time code.",
    keyFacts: [
      "You did NOT make the $1,284.67 LUXEMARKET.COM purchase.",
      "You did NOT make the $600 ATM withdrawal.",
      "The MetroRide fare IS yours.",
      "Yesterday you read a one-time code to a caller who said they were from the bank. Mention it when it feels natural.",
    ],
    goals: [
      "Stop anyone else using your card.",
      "Get your money back.",
      "Make sure nobody can get into your online banking.",
    ],
    suggestedQuestions: [
      "There are charges on my card I didn't make",
      "Can you freeze my card?",
      "Someone called me yesterday and I gave them a code",
      "When will I get my money back?",
      "Can I talk to a person?",
    ],
  },
  {
    scenarioId: "collections",
    customerId: "cus_daniel_brooks",
    situation: "You are Daniel Brooks. NorthStar Bank has messaged you about your Rewards card ending 4821. You were laid off, your automatic payment bounced, and now you are behind on payments.",
    keyFacts: [
      "You are 17 days past due on $286.40.",
      "You can pay $100 on 18 September.",
      "Your next income arrives around 2 October.",
      "You want the bank to contact you through the app only, not your former work number.",
    ],
    goals: [
      "Agree a payment plan that fits your dates.",
      "Avoid more fees or damage to your credit.",
      "Stop the bank contacting your former work number.",
    ],
    suggestedQuestions: [
      "I lost my job and can't pay the full amount",
      "Can I pay $100 now and the rest later?",
      "Please don't call my old work number",
      "Will this affect my credit score?",
      "Can I speak to someone?",
    ],
  },

  // ---- Travel --------------------------------------------------------------
  {
    scenarioId: "rebooking",
    customerId: "cus_mei_lin_tan",
    situation: "You are Mei Lin Tan. Your Orchid Air flight from Singapore to Tokyo Haneda was cancelled. You are travelling with your husband Wei Ming and your daughter Chloe, who is 6.",
    keyFacts: [
      "All three of you need to get to Tokyo as soon as possible.",
      "Landing at Narita instead of Haneda is fine if the flight is earlier.",
      "Chloe needs a child meal and must sit with you.",
      "Wei Ming's ticket was booked with miles (a companion redemption).",
    ],
    goals: [
      "Rebook the whole family on the same flight.",
      "Keep your seats together and Chloe's meal.",
      "Don't lose the miles used for Wei Ming's ticket.",
    ],
    suggestedQuestions: [
      "My flight to Tokyo was cancelled",
      "What other flights are there?",
      "We need to sit together with my daughter",
      "My husband's ticket was booked with miles",
      "Can I talk to an agent?",
    ],
  },
  {
    scenarioId: "disruption",
    customerId: "cus_daniel_lim",
    situation: "You are Daniel Lim, a regional sales director. Orchid Air has messaged you: your flight OA720 to Tokyo Haneda tomorrow is delayed by 3 hours 30 minutes. You have a 5 PM meeting in Tokyo.",
    keyFacts: [
      "With the delay you will miss your 5 PM meeting.",
      "An earlier flight works for you, even one at 7:05 AM.",
      "You want to keep your aisle seat, 18C, and your checked bag.",
      "You paid S$48 for extra legroom on the original flight.",
    ],
    goals: [
      "Get to Tokyo in time for your meeting.",
      "Keep your seat and baggage.",
      "Get the S$48 extra-legroom charge refunded.",
    ],
    suggestedQuestions: [
      "I have a 5 PM meeting — can I get there earlier?",
      "Can I keep my aisle seat?",
      "What happens to my checked bag?",
      "Can I get my extra-legroom fee back?",
      "Can I talk to an agent?",
    ],
  },

  // ---- Education -----------------------------------------------------------
  {
    scenarioId: "admissions",
    customerId: "cus_priya_nair",
    situation: "You are Priya Nair, a Singapore PR. You started applying for the Bachelor of Computing (Applied AI) at Meridian Institute and your application is about 80% done.",
    keyFacts: [
      "You have a Diploma in Information Technology.",
      "You have 4 years of data analytics work experience.",
      "Your saved application is about 80% complete.",
    ],
    goals: [
      "Finish your application.",
      "Find out if your diploma and work experience can shorten the degree.",
      "Speak to an admissions adviser if the assistant can't answer.",
    ],
    suggestedQuestions: [
      "I want to continue my application",
      "Can my diploma count towards the degree?",
      "Does my work experience shorten the course?",
      "What do I still need to submit?",
      "Can I talk to an admissions adviser?",
    ],
  },
  {
    scenarioId: "enrolment",
    customerId: "cus_muhammad_irfan",
    situation: "You are Muhammad Irfan. Meridian Institute has messaged you because you haven't finished enrolling in the Bachelor of Computing. You are serving National Service until August next year.",
    keyFacts: [
      "You accepted the offer but can't start until National Service ends in August next year.",
      "You want to start in the January 2028 intake instead.",
      "Your offer expires in five days.",
    ],
    goals: [
      "Keep your place.",
      "Defer your start to January 2028.",
      "Make sure the offer doesn't expire while the deferment is reviewed.",
    ],
    suggestedQuestions: [
      "I'm still serving National Service",
      "Can I defer to January 2028?",
      "Will I lose my offer if I wait?",
      "Do I need to pay the deposit now?",
      "Can I speak to admissions?",
    ],
  },

  // ---- Healthcare ----------------------------------------------------------
  {
    scenarioId: "appointment",
    customerId: "cus_lim_hoon",
    situation: "You are Madam Lim Hoon, 68. You want to move your cardiology follow-up next Thursday at 10:20 AM, because your daughter Karen can't take leave to bring you.",
    keyFacts: [
      "Your appointment is cardiology, next Thursday at 10:20 AM.",
      "Your daughter Karen usually brings you and can't take leave that day.",
      "This week you have felt more breathless than usual when walking. Say so if the assistant asks how you are.",
    ],
    goals: [
      "Move the appointment to a day Karen can come.",
      "Find out what to do about feeling breathless.",
    ],
    suggestedQuestions: [
      "I need to change my appointment",
      "My daughter can't take leave that day",
      "Is there a later date?",
      "I've been more breathless this week",
      "Can I speak to a nurse?",
    ],
  },
  {
    scenarioId: "pre-visit",
    customerId: "cus_lim_hoon",
    situation: "You are Madam Lim Hoon. WellSG Health has sent you a reminder about your cardiology appointment on Tuesday at 2:40 PM at the Cardiology Clinic, Level 3.",
    keyFacts: [
      "You will attend the appointment on Tuesday at 2:40 PM.",
      "You want to know how to prepare for the visit.",
      "You take daily heart medicine and aren't sure whether to stop it before the visit.",
    ],
    goals: [
      "Confirm the appointment.",
      "Know what to bring and how to prepare.",
      "Get a clear answer about your medicine from the care team.",
    ],
    suggestedQuestions: [
      "Yes, I'll be there",
      "What should I bring?",
      "Do I need to fast?",
      "Should I stop my medicine before the visit?",
      "Can I speak to a nurse?",
    ],
  },

  // ---- Retail --------------------------------------------------------------
  {
    scenarioId: "order-exchange",
    customerId: "cus_ana_reyes",
    situation: "You are Ana Reyes. The rattan floor lamp you ordered online from Habi arrived with a cracked base. Yesterday you visited the Habi store at SM North EDSA and saw the same lamp in stock.",
    keyFacts: [
      "Order #HB-2026-55031, delivered 7 November, ₱6,490.",
      "The base was cracked when it arrived. You have a photo.",
      "The SM North EDSA store has the same lamp in stock.",
      "This is your second damaged delivery in two months.",
    ],
    goals: [
      "Exchange the lamp in store today.",
      "Avoid another delivery.",
      "Get something for the trouble.",
    ],
    suggestedQuestions: [
      "My lamp arrived broken",
      "Can I exchange it at the SM North store?",
      "Do I need to bring the box?",
      "This keeps happening — can you do something?",
      "Can I talk to a person?",
    ],
  },
  {
    // DRAFT — the Retail outbound scenario is not confirmed yet (see Open decisions).
    scenarioId: "cart-pickup",
    customerId: "cus_ana_reyes",
    situation: "You are Ana Reyes, a Habi Rewards Gold member. Habi has messaged you that the rattan side table you left in your cart is now on 11.11 sale and in stock at SM North EDSA.",
    keyFacts: [
      "The side table was ₱4,990 when you left it in your cart.",
      "You'd rather pick it up at SM North EDSA than wait for a delivery.",
      "You want to use your rewards points on top of the sale price.",
    ],
    goals: [
      "Buy the side table at the sale price.",
      "Pick it up in store this weekend.",
      "Use your rewards points.",
    ],
    suggestedQuestions: [
      "Is the side table still on sale?",
      "Can I pick it up at SM North?",
      "Can I use my rewards points?",
      "I don't want another delivery — the last one arrived broken",
      "Can I talk to a person?",
    ],
  },
]
