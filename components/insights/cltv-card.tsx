/**
 * CLTV badge and gauge component (A2-2).
 * Props are strictly typed from `@/contracts/customer-insights`.
 */
import { Badge } from "@/components/ui/badge"
import type { Cltv, CltvTier } from "@/contracts/customer-insights"
import { cn } from "@/lib/utils"

const tierClasses: Record<CltvTier, string> = {
  platinum: "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-200 border-purple-300",
  gold: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200 border-amber-300",
  silver: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border-slate-300",
  bronze: "bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-200 border-orange-300",
}

export function CltvBadge({ tier, className }: { tier: CltvTier; className?: string }) {
  return (
    <Badge variant="outline" className={cn("capitalize font-semibold", tierClasses[tier], className)}>
      {tier}
    </Badge>
  )
}

export function CltvCard({ cltv, className }: { cltv: Cltv; className?: string }) {
  const formattedValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: cltv.currency,
    maximumFractionDigits: 0,
  }).format(cltv.value)

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold tracking-tight">{formattedValue}</div>
          <p className="text-xs text-muted-foreground">Top {cltv.percentile}% of customers</p>
        </div>
        <CltvBadge tier={cltv.tier} />
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">CLTV score</span>
          <span className="font-semibold">{cltv.score} / 100</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${Math.min(100, Math.max(0, cltv.score))}%` }}
          />
        </div>
      </div>

      {cltv.drivers.length > 0 && (
        <div className="space-y-1">
          <p className="text-xs font-medium text-muted-foreground">Value drivers</p>
          <ul className="space-y-1 text-xs">
            {cltv.drivers.map((driver, idx) => (
              <li key={idx} className="flex items-center gap-1.5 text-foreground/80">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                <span>{driver}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

