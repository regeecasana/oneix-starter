/**
 * Per-ticket CSAT stars (A2-4).
 * Props are strictly typed from `@/contracts/customer-insights`.
 */
import { Star } from "lucide-react"

import { ChannelBadge } from "@/components/insights/channel-icon"
import type { TicketCsat } from "@/contracts/customer-insights"
import { cn } from "@/lib/utils"

export function CsatStars({
  rating,
  className,
  size = 14,
}: {
  rating: number
  className?: string
  size?: number
}) {
  return (
    <div className={cn("inline-flex items-center gap-0.5", className)} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= rating
        return (
          <Star
            key={star}
            size={size}
            className={cn(
              isFilled
                ? "fill-amber-400 text-amber-400"
                : "fill-muted text-muted-foreground/30"
            )}
          />
        )
      })}
    </div>
  )
}

export function TicketCsatList({
  history,
  className,
}: {
  history: TicketCsat[]
  className?: string
}) {
  if (history.length === 0) {
    return (
      <p className={cn("text-xs text-muted-foreground", className)}>
        No CSAT ratings recorded yet.
      </p>
    )
  }

  return (
    <div className={cn("space-y-3", className)}>
      {history.map((ticket) => (
        <div
          key={ticket.ticketId}
          className="rounded-md border bg-card p-2.5 text-xs shadow-xs space-y-1.5"
        >
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-muted-foreground font-medium">
              {ticket.ticketId}
            </span>
            <div className="flex items-center gap-2">
              <ChannelBadge channel={ticket.channel} className="text-[10px] py-0 px-1.5" />
              <CsatStars rating={ticket.rating} />
            </div>
          </div>

          <div className="font-medium text-foreground">{ticket.subject}</div>

          {ticket.comment && (
            <p className="italic text-muted-foreground bg-muted/50 rounded px-2 py-1">
              &ldquo;{ticket.comment}&rdquo;
            </p>
          )}

          <div className="text-[10px] text-muted-foreground text-right">
            Solved {new Date(ticket.solvedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

