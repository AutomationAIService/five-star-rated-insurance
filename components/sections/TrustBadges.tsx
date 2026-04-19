import Image from "next/image"
import {
  BadgeCheck,
  Hourglass,
  MessageCircle,
  Network,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

const TRUST_STATS: {
  value: string
  label: string
  icon: LucideIcon
  verified?: boolean
}[] = [
  { value: "5.0", label: "Rating", icon: Star, verified: true },
  { value: "250+", label: "Reviews", icon: MessageCircle, verified: true },
  { value: "1,000+", label: "Customers", icon: Users },
  { value: "10+", label: "Years", icon: Hourglass },
  { value: "30+", label: "Carriers", icon: Network },
]

const CARRIER_LOGOS: { src: string; alt: string; width: number; height: number }[] = [
  { src: "/images/carriers/progressive.svg", alt: "Progressive", width: 200, height: 32 },
  { src: "/images/carriers/geico.svg", alt: "Geico", width: 120, height: 32 },
  { src: "/images/carriers/safeco.svg", alt: "Safeco", width: 150, height: 32 },
  { src: "/images/carriers/farmers.svg", alt: "Farmers", width: 170, height: 32 },
  { src: "/images/carriers/national-general.svg", alt: "National General", width: 280, height: 36 },
]

function StatParticles() {
  return (
    <div
      className="pointer-events-none absolute -bottom-2 left-1/2 z-0 flex -translate-x-1/2 gap-1.5"
      aria-hidden
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className="size-1 rounded-full bg-sky-400/50 shadow-[0_0_10px_rgba(56,189,248,0.75)] blur-[0.5px]"
          style={{ animationDelay: `${i * 120}ms` }}
        />
      ))}
    </div>
  )
}

export function TrustBadges() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl border bg-white",
            "border-sky-300/70 shadow-[0_22px_56px_-14px_rgba(10,42,94,0.22),0_0_0_1px_rgba(125,211,252,0.55),0_0_28px_rgba(125,211,252,0.28)]"
          )}
        >
          {/* Geometric network texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{
              backgroundImage: `
                linear-gradient(135deg, rgba(10, 42, 94, 0.04) 0%, transparent 50%),
                linear-gradient(rgba(56, 189, 248, 0.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(56, 189, 248, 0.07) 1px, transparent 1px),
                radial-gradient(circle at 1px 1px, rgba(10, 42, 94, 0.06) 1px, transparent 0)
              `,
              backgroundSize: "100% 100%, 28px 28px, 28px 28px, 22px 22px",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            aria-hidden
          >
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <defs>
                <pattern id="trust-mesh" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path
                    d="M0 24h48M24 0v48M0 0l48 48M48 0L0 48"
                    className="stroke-sky-400/90"
                    strokeWidth="0.35"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#trust-mesh)" />
            </svg>
          </div>

          <div className="relative z-10 px-5 py-10 md:px-10 md:py-12">
            <div
              className="mx-auto mb-10 grid max-w-6xl grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 md:mb-12 md:grid-cols-5 md:gap-6"
              aria-label="Trust metrics"
            >
              {TRUST_STATS.map((stat, index) => (
                <div
                  key={stat.label}
                  className={cn(
                    "flex flex-col items-center text-center",
                    index === TRUST_STATS.length - 1 && "col-span-2 md:col-span-1"
                  )}
                >
                  <div
                    className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-b from-navy/8 to-navy/15 text-navy shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_4px_12px_rgba(10,42,94,0.12)] md:h-12 md:w-12"
                    aria-hidden
                  >
                    <stat.icon className="size-6 md:size-7" strokeWidth={1.75} />
                  </div>

                  <div className="group/stat relative inline-flex min-h-[3.25rem] flex-col items-center justify-end">
                    <div
                      className={cn(
                        "relative z-[1] rounded-2xl px-3 py-1.5 transition-[box-shadow] duration-300",
                        "hover:[animation:trust-stat-ring_2.2s_ease-in-out_infinite]"
                      )}
                    >
                      <StatParticles />
                      <span
                        className={cn(
                          "relative z-[2] block font-heading text-4xl font-bold leading-none tracking-tight sm:text-5xl md:text-5xl lg:text-6xl",
                          "bg-gradient-to-b from-[#5b8fd4] via-[#0A2A5E] to-[#0c2f6e] bg-clip-text text-transparent",
                          "[-webkit-background-clip:text]",
                          "drop-shadow-[0_2px_4px_rgba(10,42,94,0.25)]",
                          "[filter:drop-shadow(0_1px_0_rgba(255,255,255,0.35))]"
                        )}
                      >
                        {stat.value}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex max-w-[9rem] flex-col items-center gap-1.5 sm:max-w-none">
                    <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-0.5">
                      <span className="font-heading text-sm font-bold tracking-tight text-[#062454] md:text-base">
                        {stat.label}
                      </span>
                      {stat.verified && (
                        <span className="inline-flex items-center gap-0.5 rounded-full border border-sky-300/50 bg-sky-50/90 px-1.5 py-0.5 text-[9px] font-bold uppercase leading-none tracking-wide text-sky-700 shadow-[0_0_12px_rgba(56,189,248,0.35)]">
                          <BadgeCheck
                            className="size-3 shrink-0 text-sky-500"
                            strokeWidth={2.5}
                            aria-hidden
                          />
                          VERIFIED
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mx-auto max-w-5xl">
              <div
                className="rounded-xl border border-slate-200/90 bg-slate-50/50 px-4 py-7 shadow-inner md:px-8 md:py-8"
                aria-label="Partner carriers"
              >
                <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-7 md:gap-x-10 lg:gap-x-12">
                  {CARRIER_LOGOS.map((logo) => (
                    <div
                      key={logo.alt}
                      className="group/logo flex shrink-0 items-center justify-center rounded-lg px-2 py-1 transition-all duration-200 ease-out hover:scale-105 hover:shadow-[0_0_0_1px_rgba(125,211,252,0.6),0_0_22px_rgba(56,189,248,0.35)]"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="h-7 w-auto max-w-[min(100%,11rem)] object-contain object-center md:h-9 lg:h-10"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
