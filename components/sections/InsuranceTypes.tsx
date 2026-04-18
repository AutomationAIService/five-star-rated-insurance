import { Car, Home, Heart, Truck, Briefcase, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const INSURANCE_TYPES = [
  {
    icon: Car,
    title: "Auto Insurance",
    description: "{{AUTO_INSURANCE_DESCRIPTION_PLACEHOLDER}}",
    features: ["Liability coverage", "Collision protection", "Comprehensive plans"],
    href: "#quote",
  },
  {
    icon: Home,
    title: "Home Insurance",
    description: "{{HOME_INSURANCE_DESCRIPTION_PLACEHOLDER}}",
    features: ["Dwelling coverage", "Personal property", "Liability protection"],
    href: "#quote",
  },
  {
    icon: Heart,
    title: "Life Insurance",
    description: "{{LIFE_INSURANCE_DESCRIPTION_PLACEHOLDER}}",
    features: ["Term life options", "Whole life plans", "Family protection"],
    href: "#quote",
  },
  {
    icon: Truck,
    title: "Commercial Auto",
    description: "{{COMMERCIAL_AUTO_DESCRIPTION_PLACEHOLDER}}",
    features: ["Fleet coverage", "Cargo protection", "Business liability"],
    href: "#quote",
  },
  {
    icon: Briefcase,
    title: "Business Insurance",
    description: "{{BUSINESS_INSURANCE_DESCRIPTION_PLACEHOLDER}}",
    features: ["General liability", "Property coverage", "Workers comp"],
    href: "#quote",
  },
]

export function InsuranceTypes() {
  return (
    <section id="insurance-types" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground mb-4 text-balance">
            {"{{INSURANCE_SECTION_HEADLINE_PLACEHOLDER}}"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {"{{INSURANCE_SECTION_SUBHEADLINE_PLACEHOLDER}}"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSURANCE_TYPES.map((insurance, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-shadow duration-300 border-border bg-surface"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center justify-center w-12 h-12 bg-navy/5 rounded-lg group-hover:bg-navy group-hover:text-primary-foreground transition-colors">
                    <insurance.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-heading text-xl">{insurance.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  {insurance.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {insurance.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full group-hover:bg-navy group-hover:text-primary-foreground group-hover:border-navy transition-colors"
                >
                  <Link href={insurance.href}>
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
