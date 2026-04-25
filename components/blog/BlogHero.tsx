import { BrandNavyStarOverlay } from "@/components/brand/BrandNavyStarOverlay"
import { CalendarDays, Clock, User } from "lucide-react"

type BlogHeroProps = {
  title: string
  category: string
  authorName: string
  displayDate: string
  readTime: string
}

/**
 * Top-of-post hero. Navy gradient + star pattern matches `HeroSection` /
 * `InsuranceProductPageContent`. Renders the single H1, category pill, and
 * a byline with author + date + read time.
 */
export function BlogHero({
  title,
  category,
  authorName,
  displayDate,
  readTime,
}: BlogHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy/95 text-primary-foreground">
      <BrandNavyStarOverlay />
      <div className="container relative mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center justify-center rounded-full bg-gold/95 px-4 py-1 text-xs font-bold uppercase tracking-wider text-navy">
            {category}
          </p>
          <h1 className="mb-6 text-balance font-heading text-2xl font-bold leading-tight text-primary-foreground md:text-3xl lg:text-[2.5rem] lg:leading-[1.15]">
            {title}
          </h1>
          <div className="flex flex-col items-center justify-center gap-y-2 text-sm text-primary-foreground/85 sm:flex-row sm:flex-wrap sm:gap-x-5">
            <span className="inline-flex items-center gap-1.5">
              <User className="size-4 shrink-0" aria-hidden />
              <span>By {authorName}</span>
            </span>
            <span className="hidden text-primary-foreground/40 sm:inline" aria-hidden>
              ·
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-4 shrink-0" aria-hidden />
              <span>{displayDate}</span>
            </span>
            <span className="hidden text-primary-foreground/40 sm:inline" aria-hidden>
              ·
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4 shrink-0" aria-hidden />
              <span>{readTime}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
