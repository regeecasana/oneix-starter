"use client"

/**
 * Component playground. Pick a mock customer and see every insights component
 * render with that customer's data. Add your component to the matching section
 * as soon as it renders, so Regee can review it on the Fri 13 checkpoint.
 */
import { useState } from "react"

import { ChannelBadge, allChannels } from "@/components/insights/channel-icon"
import { CltvCard } from "@/components/insights/cltv-card"
import { TicketCsatList } from "@/components/insights/csat-stars"
import { LanguageSwitcher } from "@/components/insights/language-switcher"
import { RetentionInsight } from "@/components/insights/retention-insight"
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
        <Section ticket="A2-2" title="CLTV badge and gauge">
          <CltvCard cltv={customer.cltv} />
        </Section>
        <Section ticket="A2-4" title="Per-ticket CSAT stars">
          <TicketCsatList history={customer.csatHistory} />
        </Section>
        <Section ticket="A2-5" title="Channel icons">
          <div className="space-y-3">
            <div>
              <span className="text-xs text-muted-foreground block mb-1.5">
                Preferred channel ({customer.name}):
              </span>
              <ChannelBadge channel={customer.preferredChannel} />
            </div>
            <div className="border-t pt-2.5">
              <span className="text-xs text-muted-foreground block mb-2">
                Available channels (static showcase):
              </span>
              <div className="flex flex-wrap gap-2">
                {allChannels.map((ch) => (
                  <ChannelBadge key={ch} channel={ch} />
                ))}
              </div>
            </div>
          </div>
        </Section>
        <Section ticket="A2-7" title="Retention insight (P2)">
          <RetentionInsight retention={customer.retention} />
        </Section>
        <Section ticket="A2-1" title="Language switcher">
          <LanguageSwitcher currentLanguage={lang} onLanguageChange={setLang} />
        </Section>
      </div>

      <Section ticket="A1-3" title="Scenario guide data">
        {guide ? (
          <pre className="overflow-x-auto text-xs">{JSON.stringify(guide, null, 2)}</pre>
        ) : (
          <p className="text-muted-foreground">No guide for this scenario yet.</p>
        )}
      </Section>
    </main>
  )
}
