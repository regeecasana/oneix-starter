/**
 * EXAMPLE COMPONENT — copy this pattern for every insights component:
 *  - data comes in as typed props from `@/contracts/customer-insights`
 *  - no fetching, no importing from `@/mock-data`
 *  - styling with Tailwind and the shadcn components in `@/components/ui`
 */
import { Badge } from "@/components/ui/badge"
import type { Segment } from "@/contracts/customer-insights"
import { cn } from "@/lib/utils"

const toneClasses: Record<Segment["tone"], string> = {
  violet: "bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-200",
  amber: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200",
  emerald: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200",
  sky: "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-200",
  slate: "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200",
  orange: "bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-200",
  red: "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-200",
  zinc: "bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300",
}

export function SegmentLabel({ segment, className }: { segment: Segment; className?: string }) {
  return (
    <Badge className={cn(toneClasses[segment.tone], className)} title={segment.description}>
      {segment.label}
    </Badge>
  )
}
