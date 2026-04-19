import { Car, Home, Heart, Truck, Briefcase, Motorbike, ArrowRight, type LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

type InsuranceTypeCard = {
  icon: LucideIcon
  title: string
  description?: string
  features: string[]
  /** Keeps each bullet on one row on small screens (short labels only). */
  featuresSingleLineOnMobile?: boolean
  href: string
}

const INSURANCE_TYPES: InsuranceTypeCard[] = [
  {
    icon: Car,
    title: "Auto Insurance",
    features: ["Regular coverage", "Classic coverage", "State filings & SR-22"],
    href: "#quote",
  },
  {
    icon: Home,
    title: "Home Insurance",
    features: ["Primary home", "Seasonal home", "Rental home"],
    featuresSingleLineOnMobile: true,
    href: "#quote",
  },
  {
    icon: Heart,
    title: "Life Insurance",
    features: ["Term life options", "Whole life plans", "Family protection"],
    href: "#quote",
  },
  {
    icon: Truck,
    title: "Commercial Auto",
    features: ["Fleet coverage", "Cargo protection", "Business liability"],
    href: "#quote",
  },
  {
    icon: Briefcase,
    title: "Business Insurance",
    features: ["General liability", "Property coverage", "Workers comp"],
    href: "#quote",
  },
  {
    icon: Motorbike,
    title: "Specialty Insurance",
    description:
      "Coverage options for motorcycles, ATVs, boats, jet skis, RVs, motorhomes, and trailers.",
    features: [
      "Motorcycle and ATV coverage",
      "Boat and jet ski protection",
      "RV, motorhome, and trailer options",
    ],
    href: "#quote",
  },
]

export function InsuranceTypes() {
  return (
    <section id="insurance-types" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground mb-4 text-balance">
            Insurance Coverage for What You Drive, Own, and Protect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare coverage options for everyday insurance needs, business protection, and specialty vehicles in one simple quote request.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {INSURANCE_TYPES.map((insurance, index) => {
            const hasDescription = Boolean(insurance.description?.trim())
            return (
              <Card
                key={index}
                className={cn(
                  "group h-full hover:shadow-lg transition-shadow duration-300 border-border bg-surface",
                  !hasDescription && "gap-8 md:gap-10"
                )}
              >
                <CardHeader
                  className={cn(!hasDescription && "pb-0")}
                >
                  <div
                    className={cn(
                      "flex items-center gap-4",
                      hasDescription ? "mb-2" : "mb-0"
                    )}
                  >
                    <div className="flex items-center justify-center w-12 h-12 shrink-0 bg-navy/5 rounded-lg group-hover:bg-navy group-hover:text-primary-foreground transition-colors">
                      <insurance.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="font-heading text-xl text-foreground text-left">
                      {insurance.title}
                    </CardTitle>
                  </div>
                  {hasDescription && (
                    <CardDescription className="text-muted-foreground text-left">
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
                          "flex gap-3 text-base font-medium text-foreground leading-snug",
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
                  <Button
                    asChild
                    variant="default"
                    className={cn(
                      "mt-auto w-full shrink-0 font-semibold",
                      "border-0 border-transparent shadow-none",
                      "bg-navy text-white",
                      "hover:!bg-gold hover:!text-navy",
                      "transition-[background-color,color] duration-200 ease-out",
                      "focus-visible:border-0 focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      "[&_svg]:text-current"
                    )}
                  >
                    <Link href={insurance.href} className="flex w-full items-center justify-center gap-2">
                      Get Quote
                      <ArrowRight className="size-4 shrink-0" aria-hidden />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
