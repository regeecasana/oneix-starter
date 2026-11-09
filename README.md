# ONEix starter

A small workspace for building ONEix demo pieces without the full ONEix setup.
No `.env`, no Docker, no Zendesk or Cognigy access needed.

It uses the same stack as `oneix/apps/web` (Next.js 16, React 19, Tailwind 4,
shadcn, lucide), so the code drops into ONEix unchanged.

## Setup

You need **Node 24**, **Git** and **VS Code**.

```bash
npm install
npm run dev
```

Open http://localhost:3000. The playground lets you pick a mock customer and
see each component with that customer's data.

## Folders

| Folder | What goes in it | Owner |
| --- | --- | --- |
| `contracts/` | Data types. **Don't change without review.** | Regee |
| `mock-data/` | Fake customers, segments, scenario guides |  |
| `components/insights/` | Agent-view components (CLTV, segments, CSAT, channels, retention) | |
| `components/ui/` | shadcn components copied from ONEix. Add more with `npx shadcn add <name>` | — |
| `i18n/` | Languages and translation files | |
| `app/` | The playground page | Both |

## Rules

1. Components get their data as **props** typed from `@/contracts/customer-insights`.
   They never fetch or import from `@/mock-data`. Copy the pattern in
   `components/insights/segment-label.tsx`.
2. Fixtures must match the contract. Run `npm run typecheck` before every commit.
3. Add each new component to the playground (`app/playground.tsx`) in its section.
4. One branch and one PR per ticket, with a screenshot. Regee reviews.
5. Always write "ONEix" in UI text.
6. No real customer data, credentials or client names. Everything here is fictional.

## Languages (all 6, every scenario)

Everything the customer sees must exist in all 6 languages: UI text and every
scenario guide (situation, key facts, goals, suggested questions).

- English source: `i18n/locales/en.json` (UI) and `mock-data/scenario-guides.ts` (guides).
- Translations: `i18n/locales/<lang>.json` and `i18n/guides/<lang>.json`. Don't edit these by hand.

```bash
npm run i18n:export   # creates translations.csv: upload it to Google Sheets
                      # fill the empty cells, File > Download > CSV, save as translations.csv here
npm run i18n:import   # writes the translations into i18n/
npm run i18n:check    # lists anything still missing; must pass before the demo
```

Machine translation is fine for a first pass; get a native speaker to check
Thai, Vietnamese and Indonesian if possible.

## Scenario guides

Guides tell the person playing the customer what happened and what they want.
They are **not scripts**: no dialogue, the customer talks in their own words.
The facts come from the scenario stories Regee's Cognigy flows follow, so if a
flow changes, update the guide to match.

## Tickets

Full list and schedule: the "ONEix prototype — 11/04 update tickets" doc.

**1:** A1-1 mock data, A1-2 Retail scenario, A1-3 scenario guides,
A1-4 phygital timelines, A1-5 CSAT and churn signals, A1-6 Quilr research.

**2:** A2-1 language switcher, A2-2 CLTV, A2-3 segment labels,
A2-4 CSAT stars, A2-5 channel icons, A2-7 retention block, A2-8 segment filter.

## How this moves into ONEix (Regee)

| Starter | ONEix |
| --- | --- |
| `contracts/customer-insights.ts` | `packages/contracts/src/customer-insights.ts` |
| `mock-data/` | `packages/mock-data/src/` (served by the insights API endpoint) |
| `components/insights/` | `apps/web/features/insights/` |
| `i18n/` | the customer chat app |
