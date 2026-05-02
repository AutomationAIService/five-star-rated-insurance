import Image from "next/image"
import { BrandNavyStarOverlay } from "@/components/brand/BrandNavyStarOverlay"
import { Check, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import protegrityLogo from "@/5 Star Insurance Logos/Protegrity Logo Updated BG Removed Cropped.png"

const GOLD_STAR = "#FFD700"

const SCAN_ITEMS: string[] = [
  "Licensed brokers quoting multiple carriers",
  "Serving Arizona families and businesses statewide",
  "Connecting you to protection with integrity",
]

const CARRIER_LOGOS: { src: string; alt: string; width: number; height: number }[] = [
  { src: "/images/carriers/progressive.svg", alt: "Progressive", width: 200, height: 32 },
  { src: "/images/carriers/geico.svg", alt: "GEICO", width: 120, height: 32 },
  { src: "/images/carriers/safeco.svg", alt: "Safeco", width: 150, height: 32 },
  { src: "/images/carriers/farmers.svg", alt: "Farmers", width: 170, height: 32 },
]

function GoldStarsRow({
  className,
  starClassName,
}: {
  className?: string
  starClassName?: string
}) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn("shrink-0", starClassName ?? "size-7 md:size-8")}
          fill={GOLD_STAR}
          stroke={GOLD_STAR}
          strokeWidth={1}
        />
      ))}
    </div>
  )
}

export function TrustBadges() {
  return (
    <section className="bg-background py-16 md:py-24" aria-labelledby="trust-section-heading">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="trust-section-heading"
            className="font-heading text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]"
          >
            Service-First Brokerage Support
          </h2>
          <p className="mt-3 text-base text-muted-foreground md:text-lg">
            Five Star Rated Insurance routes every request to Protegrity Insurance Brokerage, where
            licensed producers compare carriers instead of pitching a single quota.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-10 lg:mt-12 lg:flex-row lg:items-start lg:justify-center lg:gap-12 lg:gap-14">
          {/* Google style rating card */}
          <div className="mx-auto h-auto w-full max-w-md shrink-0 self-center lg:mx-0 lg:self-start">
            <div
              className={cn(
                "rounded-2xl border border-slate-200/90 bg-white px-6 py-7 shadow-lg md:px-8 md:py-8",
                "ring-1 ring-black/[0.04]",
                "transition-shadow duration-200 hover:shadow-lg"
              )}
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={protegrityLogo}
                  alt="Protegrity Insurance"
                  className="h-auto w-44 object-contain md:w-52"
                  priority
                />

                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.28em] text-navy">
                  PROTECTION WITH INTEGRITY
                </p>

                <div
                  className="mt-6 flex items-center justify-center gap-2"
                  aria-label="Rating 5.0 out of 5"
                >
                  <span className="font-heading text-lg font-bold leading-none text-slate-950">
                    5.0
                  </span>
                  <GoldStarsRow starClassName="size-5 md:size-6" />
                </div>

                <p className="mt-1 text-sm text-slate-700">Insurance Broker</p>

                <p className="mt-4 max-w-[20rem] text-sm leading-snug text-slate-600 md:text-base">
                  Based on 465+ authentic Google reviews
                </p>
              </div>
            </div>
          </div>

          {/* Scannable list */}
          <div className="mx-auto w-full max-w-lg flex-1 lg:pt-1">
            <ul className="space-y-4 text-left" role="list">
              {SCAN_ITEMS.map((line) => (
                <li key={line} className="flex gap-3">
                  <span
                    className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy"
                    aria-hidden
                  >
                    <Check className="size-4 stroke-[2.5]" />
                  </span>
                  <span className="text-lg font-semibold leading-snug text-foreground md:text-xl">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xl font-semibold leading-relaxed text-foreground md:mt-12 md:text-2xl">
          Compare auto, home, life, business, commercial auto, specialty, umbrella, flood,
          earthquake, and scheduled valuables coverage through one Phoenix-based partner.
        </p>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs text-muted-foreground sm:text-sm">
          Coverage availability, eligibility, pricing, policy terms, and carrier options vary by
          state, carrier, coverage type, and individual circumstances.
        </p>
      </div>

      {/* Insurance carriers — full-width navy / white / navy bands */}
      <div className="mt-12 w-full lg:mt-14">
        {/* Band 1 — headline + subheadline */}
        <div className="relative w-full overflow-hidden bg-brand-navy text-white">
          <BrandNavyStarOverlay />
          <div className="relative mx-auto max-w-7xl px-4 py-8 text-center md:px-6 md:py-12">
            <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">
              Insurance Carriers Protegrity Works With
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-gray-200">
              Compare quote options from recognized insurance carriers through Protegrity Insurance
              Brokerage.
            </p>
          </div>
        </div>

        {/* Band 2 — carrier logos (mobile: column; desktop: unchanged row) */}
        <div className="w-full bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-12">
            <div
              className="rounded-xl border border-border bg-muted/30 px-4 py-8 md:px-8 md:py-8"
              aria-label="Representative insurance carriers"
            >
              <div className="flex w-full justify-center">
                <div className="inline-flex flex-col items-start gap-5 pl-28 md:flex md:w-full md:pl-0 md:flex-row md:flex-nowrap md:items-center md:justify-center md:gap-x-12 md:gap-y-0">
                  {CARRIER_LOGOS.map((logo) => (
                    <div
                      key={logo.alt}
                      className="flex shrink-0 items-start justify-start md:items-center"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="h-10 w-auto max-w-[min(100%,11rem)] object-contain object-left md:h-9 md:object-center"
                        unoptimized
                      />
                    </div>
                  ))}
                  <span className="text-base font-medium text-muted-foreground md:self-auto md:text-sm">
                    And more
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Band 3 — disclaimer */}
        <div className="relative w-full overflow-hidden bg-brand-navy text-white/80">
          <BrandNavyStarOverlay />
          <div className="relative mx-auto max-w-4xl px-4 py-6 text-center text-sm md:px-6 md:py-8">
            Carrier logos are shown for informational purposes only. Availability, pricing, and
            coverage options vary by location, carrier, coverage type, and eligibility.
          </div>
        </div>
      </div>
    </section>
  )
}
