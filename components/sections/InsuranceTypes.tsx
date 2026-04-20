import {
  Bike,
  Briefcase,
  Car,
  Heart,
  Home,
  Palmtree,
  Truck,
  Umbrella,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const quoteAttribution = (
  <p className="mt-3 text-center text-sm text-gray-500">
    Quoted by Protegrity Insurance Brokerage
  </p>
)

type InsuranceTypeCard = {
  icon: LucideIcon
  title: string
  description?: string
  features: string[]
  /** Keeps each bullet on one row on small screens (short labels only). */
  featuresSingleLineOnMobile?: boolean
}

const INSURANCE_TYPES: InsuranceTypeCard[] = [
  {
    icon: Car,
    title: "Auto Insurance",
    features: ["Regular coverage", "Classic coverage", "State filings & SR-22"],
  },
  {
    icon: Home,
    title: "Home Insurance",
    features: ["Primary home", "Seasonal home", "Rental home"],
    featuresSingleLineOnMobile: true,
  },
  {
    icon: Heart,
    title: "Life Insurance",
    features: ["Term life options", "Whole life plans", "Family protection"],
  },
  {
    icon: Truck,
    title: "Commercial Auto",
    features: ["Fleet coverage", "Cargo protection", "Business liability"],
  },
  {
    icon: Briefcase,
    title: "Business Insurance",
    features: ["General liability", "Property coverage", "Workers compensation"],
  },
  {
    icon: Bike,
    title: "Specialty Insurance",
    description:
      "Coverage options for motorcycles, ATVs, boats, jet skis, RVs, motorhomes, and trailers.",
    features: [
      "Motorcycle and ATV coverage",
      "Boat and jet ski protection",
      "RV, motorhome, and trailer options",
    ],
  },
  {
    icon: Palmtree,
    title: "Mexico Travel Insurance",
    description: "Coverage for travelers heading to Mexico.",
    features: [
      "Rental car coverage in Mexico",
      "Trip cancellation and interruption",
      "Emergency medical and dental",
    ],
  },
  {
    icon: Umbrella,
    title: "Other Insurance",
    description: "Additional coverage options for comprehensive protection.",
    features: [
      "Umbrella insurance",
      "Flood and earthquake coverage",
      "Valuable items protection",
    ],
  },
]

const titleClassName =
  "mb-4 text-balance font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl"

type InsuranceTypesProps = {
  /** Use `h1` on the dedicated `/insurance` listing page; default `h2` on the homepage. */
  headingLevel?: "h1" | "h2"
}

export function InsuranceTypes({ headingLevel = "h2" }: InsuranceTypesProps) {
  const HeadingTag = headingLevel

  return (
    <section id="insurance-types" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <HeadingTag className={titleClassName}>
            Insurance Coverage for What You Drive, Own, and Protect
          </HeadingTag>
          <p className="text-xl font-medium text-foreground md:text-2xl">
            Powered by Protegrity Insurance Brokerage
          </p>
          <p className="mt-2 text-base text-muted-foreground md:text-lg">
            Licensed insurance broker with 465+ five-star reviews
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Compare coverage options for everyday insurance needs, business protection, and specialty
            vehicles in one simple quote request.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INSURANCE_TYPES.map((insurance) => {
            const hasDescription = Boolean(insurance.description?.trim())
            return (
              <Card
                key={insurance.title}
                className={cn(
                  "group h-full border-border bg-surface transition-shadow duration-300 hover:shadow-lg",
                  !hasDescription && "gap-8 md:gap-10"
                )}
              >
                <CardHeader className={cn(!hasDescription && "pb-0")}>
                  <div
                    className={cn(
                      "flex items-center gap-4",
                      hasDescription ? "mb-2" : "mb-0"
                    )}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy/5 transition-colors group-hover:bg-navy group-hover:text-primary-foreground">
                      <insurance.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-left font-heading text-xl text-foreground">
                      {insurance.title}
                    </CardTitle>
                  </div>
                  {hasDescription && (
                    <CardDescription className="text-left text-muted-foreground">
                      {insurance.description}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-6 pt-0">
                  <ul className="space-y-3 text-left">
                    {insurance.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={cn(
                          "flex gap-3 text-base font-medium leading-snug text-foreground",
                          "items-start",
                          insurance.featuresSingleLineOnMobile &&
                            "max-md:items-center max-md:whitespace-nowrap"
                        )}
                      >
                        <div
                          className={cn(
                            "size-1.5 shrink-0 rounded-full bg-gold",
                            insurance.featuresSingleLineOnMobile
                              ? "mt-1.5 max-md:mt-0"
                              : "mt-1.5"
                          )}
                          aria-hidden
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto w-full shrink-0">
                    <Button
                      type="button"
                      tabIndex={-1}
                      variant="default"
                      className={cn(
                        "w-full cursor-default font-semibold shadow-none pointer-events-none",
                        "border-0 border-transparent",
                        "bg-blue-900 text-white",
                        "hover:bg-blue-800 hover:text-white",
                        "transition-[background-color,color] duration-200 ease-out",
                        "focus-visible:border-0 focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        "[&_svg]:text-current"
                      )}
                    >
                      <span className="flex w-full items-center justify-center gap-2">
                        Get Quote
                        <ArrowRight className="size-4 shrink-0" aria-hidden />
                      </span>
                    </Button>
                    {quoteAttribution}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
