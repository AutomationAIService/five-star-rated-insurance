import { Shield, Star, Clock, Users } from "lucide-react"

const TRUST_STATS = [
  {
    icon: Star,
    value: "{{AVG_RATING}}",
    label: "Customer Rating",
    sublabel: "{{REVIEW_COUNT_PLACEHOLDER}} reviews",
  },
  {
    icon: Users,
    value: "{{CUSTOMERS_SERVED_PLACEHOLDER}}",
    label: "Customers Served",
    sublabel: "and counting",
  },
  {
    icon: Clock,
    value: "{{YEARS_IN_BUSINESS_PLACEHOLDER}}",
    label: "Years in Business",
    sublabel: "of trusted service",
  },
  {
    icon: Shield,
    value: "{{CARRIERS_COUNT_PLACEHOLDER}}",
    label: "Insurance Carriers",
    sublabel: "top-rated partners",
  },
]

const CARRIER_PLACEHOLDERS = [
  "Carrier Logo 1",
  "Carrier Logo 2",
  "Carrier Logo 3",
  "Carrier Logo 4",
  "Carrier Logo 5",
  "Carrier Logo 6",
]

export function TrustBadges() {
  return (
    <section className="py-12 md:py-16 bg-surface border-y border-border">
      <div className="container mx-auto px-4">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          {TRUST_STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-navy/5 rounded-full mb-3">
                <stat.icon className="w-6 h-6 text-navy" />
              </div>
              <div className="font-heading font-bold text-2xl md:text-3xl text-navy mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Carrier Logos */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6">Trusted by leading insurance carriers</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {CARRIER_PLACEHOLDERS.map((placeholder, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-24 h-12 bg-muted rounded text-xs text-muted-foreground"
                aria-label={placeholder}
              >
                {placeholder}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
