/**
 * Retention insight component (A2-7).
 * Props are strictly typed from `@/contracts/customer-insights`.
 */
import { CircleAlert, Lightbulb } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import type { Retention, RiskLevel } from "@/contracts/customer-insights"
import { cn } from "@/lib/utils"

const riskClasses: Record<RiskLevel, string> = {
  low: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200 border-emerald-300",
  medium: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200 border-amber-300",
  high: "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-200 border-red-300",
}

export function RetentionInsight({
  retention,
  className,
}: {
  retention: Retention
  className?: string
}) {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Churn Risk:</span>
            <Badge
              variant="outline"
              className={cn("capitalize font-semibold", riskClasses[retention.churnRisk])}
            >
              {retention.churnRisk}
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">
            Score: <span className="font-semibold text-foreground">{retention.churnScore} / 100</span>
          </p>
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className={cn(
              "h-full rounded-full transition-all",
              retention.churnRisk === "high"
                ? "bg-red-500"
                : retention.churnRisk === "medium"
                  ? "bg-amber-500"
                  : "bg-emerald-500"
            )}
            style={{ width: `${Math.min(100, Math.max(0, retention.churnScore))}%` }}
          />
        </div>
      </div>

      {retention.signals.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground">Detected churn signals</p>
          <ul className="space-y-2 text-xs">
            {retention.signals.map((signal) => (
              <li
                key={signal.id}
                className="flex items-start gap-2 rounded-md border border-red-200 bg-red-50/50 p-2 dark:border-red-900 dark:bg-red-950/20"
              >
                <CircleAlert className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <div className="space-y-1 flex-1">
                  {/* Contract note: Churn signal text is rendered in red text in Retention section */}
                  <p className="text-red-700 dark:text-red-400 font-medium leading-relaxed">
                    {signal.text}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-muted-foreground">
                    <span className="capitalize rounded bg-background/80 px-1.5 py-0.5 font-mono">
                      {signal.source.replace("_", " ")}
                    </span>
                    {signal.ticketId && (
                      <span className="font-mono text-foreground/70">
                        Ticket: {signal.ticketId}
                      </span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {retention.recommendedAction && (
        <div className="rounded-md border border-amber-200 bg-amber-50/60 p-2.5 text-xs dark:border-amber-900/50 dark:bg-amber-950/20 space-y-1">
          <div className="flex items-center gap-1.5 font-medium text-amber-900 dark:text-amber-200">
            <Lightbulb className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
            <span>Recommended save action</span>
          </div>
          <p className="text-amber-800 dark:text-amber-300 pl-5 leading-relaxed">
            {retention.recommendedAction}
          </p>
        </div>
      )}
    </div>
  )
}

