import Image from "next/image"
import { Check, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const GOLD_STAR = "#FFD700"

const SCAN_ITEMS: string[] = [
  "Access to 30+ insurance carriers",
  "Licensed to serve in 40 states",
  "Protection with integrity",
]

const CARRIER_LOGOS: { src: string; alt: string; width: number; height: number }[] = [
  { src: "/images/carriers/progressive.svg", alt: "Progressive", width: 200, height: 32 },
  { src: "/images/carriers/geico.svg", alt: "GEICO", width: 120, height: 32 },
  { src: "/images/carriers/safeco.svg", alt: "Safeco", width: 150, height: 32 },
  { src: "/images/carriers/farmers.svg", alt: "Farmers", width: 170, height: 32 },
]

function GoldStarsRow({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex items-center justify-center gap-0.5", className)}
      aria-hidden
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="size-7 shrink-0 md:size-8"
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
            {"It's The Service That Counts"}
          </h2>
          <p className="mt-3 text-base text-muted-foreground md:text-lg">
            Five Star Rated Insurance connects your quote request with Protegrity Insurance
            Brokerage.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-10 lg:mt-12 lg:flex-row lg:items-start lg:justify-center lg:gap-12 lg:gap-14">
          {/* Google style rating card */}
          <div className="mx-auto w-full max-w-md shrink-0 lg:mx-0">
            <div
              className={cn(
                "rounded-2xl border border-slate-200/90 bg-white p-6 shadow-md md:p-8",
                "ring-1 ring-black/[0.04]",
                "transition-shadow duration-200 hover:shadow-lg"
              )}
            >
              <div className="flex flex-col items-center text-center">
                <p
                  className="font-heading text-6xl font-bold leading-none tracking-tight text-[#202124] md:text-7xl"
                  aria-label="Rating 5.0 out of 5"
                >
                  5.0
                </p>
                <GoldStarsRow className="mt-3" />
                <p className="mt-4 max-w-[20rem] text-sm leading-snug text-[#5f6368] md:text-base">
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
          Compare auto home life and business insurance through one trusted partner.
        </p>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs text-muted-foreground sm:text-sm">
          Carrier availability, quote options, and coverage eligibility vary by state, coverage
          type, carrier, and individual circumstances.
        </p>

        <div className="mx-auto mt-12 max-w-5xl border-t border-border pt-12 lg:mt-14 lg:pt-14">
          <h3 className="text-center font-heading text-xl font-bold text-foreground md:text-2xl">
            Insurance Carriers Protegrity Works With
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Compare quote options from recognized insurance carriers through Protegrity Insurance
            Brokerage.
          </p>

          <div
            className="mt-8 rounded-xl border border-border bg-muted/30 px-4 py-8 md:px-8"
            aria-label="Representative insurance carriers"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-12">
              {CARRIER_LOGOS.map((logo) => (
                <div key={logo.alt} className="flex shrink-0 items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="h-7 w-auto max-w-[min(100%,11rem)] object-contain object-center md:h-9"
                    unoptimized
                  />
                </div>
              ))}
              <span className="text-sm font-medium text-muted-foreground">And more</span>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-4xl border-t border-border pt-8 text-center text-xs text-muted-foreground">
          Carrier logos are shown for informational purposes only. Availability, pricing, and
          coverage options vary by location, carrier, coverage type, and eligibility.
        </p>
      </div>
    </section>
  )
}
