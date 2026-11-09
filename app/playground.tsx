"use client"

/**
 * Component playground. Pick a mock customer and see every insights component
 * render with that customer's data. Add your component to the matching section
 * as soon as it renders, so Regee can review it on the Fri 13 checkpoint.
 */
import { useState } from "react"

import { SegmentLabel } from "@/components/insights/segment-label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { localizeGuide } from "@/i18n/guides"
import { languages, type LanguageCode } from "@/i18n/languages"
import { customers, getScenarioGuide, segments } from "@/mock-data"

function Section({ ticket, title, children }: { ticket: string; title: string; children?: React.ReactNode }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">{ticket}</span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        {children ?? <p className="text-muted-foreground">Not built yet.</p>}
      </CardContent>
    </Card>
  )
}

export function Playground() {
  const [customerId, setCustomerId] = useState(customers[0].customerId)
  const customer = customers.find((c) => c.customerId === customerId)!
  const [lang, setLang] = useState<LanguageCode>("en")
  const rawGuide = getScenarioGuide(customer.scenarioId)
  const guide = rawGuide && localizeGuide(rawGuide, lang)

  return (
    <main className="mx-auto max-w-5xl space-y-6 p-8">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">ONEix starter</h1>
          <p className="text-sm text-muted-foreground">Component playground with mock data</p>
        </div>
        <select
          className="rounded-md border bg-background px-3 py-2 text-sm"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
        >
          {customers.map((c) => (
            <option key={c.customerId} value={c.customerId}>
              {c.name} — {c.industry} / {c.scenarioId}
            </option>
          ))}
        </select>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <Section ticket="A2-3" title="Segment labels (example)">
          <div className="flex flex-wrap gap-2">
            {customer.segments.map((id) => (
              <SegmentLabel key={id} segment={segments[id]} />
            ))}
          </div>
        </Section>
        <Section ticket="A2-2" title="CLTV badge and gauge" />
        <Section ticket="A2-4" title="Per-ticket CSAT stars" />
        <Section ticket="A2-5" title="Channel icons" />
        <Section ticket="A2-7" title="Retention insight (P2)" />
        <Section ticket="A2-1" title="Language switcher" />
      </div>

      <Section ticket="A1-3" title="Scenario guide data (temporary language picker until A2-1 is done)">
        <select
          className="mb-3 rounded-md border bg-background px-2 py-1 text-xs"
          value={lang}
          onChange={(e) => setLang(e.target.value as LanguageCode)}
        >
          {languages.map((l) => (
            <option key={l.code} value={l.code}>
              {l.label}
            </option>
          ))}
        </select>
        {guide ? (
          <pre className="overflow-x-auto text-xs">{JSON.stringify(guide, null, 2)}</pre>
        ) : (
          <p className="text-muted-foreground">No guide for this scenario yet.</p>
        )}
      </Section>
    </main>
  )
}
