/**
 * Language switcher component (A2-1).
 * Allows toggling across the 6 customer languages.
 */
import { Button } from "@/components/ui/button"
import type { LanguageCode } from "@/contracts/customer-insights"
import { languages } from "@/i18n/languages"
import { cn } from "@/lib/utils"

export function LanguageSwitcher({
  currentLanguage,
  onLanguageChange,
  className,
}: {
  currentLanguage: LanguageCode
  onLanguageChange: (lang: LanguageCode) => void
  className?: string
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex flex-wrap gap-1.5">
        {languages.map((l) => {
          const isActive = l.code === currentLanguage
          return (
            <Button
              key={l.code}
              type="button"
              variant={isActive ? "default" : "outline"}
              size="sm"
              className={cn(
                "h-7 px-2.5 text-xs font-normal",
                isActive ? "font-medium" : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => onLanguageChange(l.code)}
            >
              <span className="font-mono text-[10px] uppercase mr-1 text-muted-foreground/80">
                {l.country}
              </span>
              <span>{l.label}</span>
            </Button>
          )
        })}
      </div>
      <p className="text-[11px] text-muted-foreground">
        Active language: <span className="font-medium text-foreground">{languages.find((l) => l.code === currentLanguage)?.label}</span> ({currentLanguage})
      </p>
    </div>
  )
}

