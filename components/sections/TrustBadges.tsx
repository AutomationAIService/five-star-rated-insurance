import { cn } from "@/lib/utils"

const TRUST_STATS: { value: string; label: string }[] = [
  { value: "5.0", label: "Rating" },
  { value: "250+", label: "Reviews" },
  { value: "1,000+", label: "Customers" },
  { value: "10+", label: "Years" },
  { value: "30+", label: "Carriers" },
]

const CARRIERS: { name: string; hoverTextClass: string }[] = [
  { name: "Progressive", hoverTextClass: "group-hover:text-[#0066CC]" },
  { name: "Geico", hoverTextClass: "group-hover:text-[#0066B2]" },
  { name: "Safeco", hoverTextClass: "group-hover:text-[#C41230]" },
  { name: "Farmers", hoverTextClass: "group-hover:text-[#0072BC]" },
  { name: "National General", hoverTextClass: "group-hover:text-[#003087]" },
]

export function TrustBadges() {
  return (
    <section className="py-12 md:py-16 bg-surface border-y border-border">
      <div className="container mx-auto px-4">
        <div
          className="mx-auto mb-12 grid max-w-5xl grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-5 md:gap-8"
          aria-label="Trust metrics"
        >
          {TRUST_STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "text-center",
                index === TRUST_STATS.length - 1 && "col-span-2 md:col-span-1"
              )}
            >
              <div className="font-heading font-bold text-3xl leading-none text-navy sm:text-4xl md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium text-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-6 sm:gap-x-10 md:gap-x-12"
          aria-label="Insurance carriers"
        >
          {CARRIERS.map((carrier) => (
            <div
              key={carrier.name}
              className={cn(
                "group flex min-h-[2.75rem] cursor-default items-center justify-center px-3 py-2 transition-[filter,color] duration-200 ease-out",
                "grayscale opacity-60 hover:grayscale-0 hover:opacity-100"
              )}
            >
              <span
                className={cn(
                  "text-center font-heading text-base font-semibold tracking-tight text-muted-foreground transition-colors duration-200 sm:text-lg",
                  carrier.hoverTextClass
                )}
              >
                {carrier.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
