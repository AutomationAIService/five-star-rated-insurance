import { BrandNavyStarOverlay } from "@/components/brand/BrandNavyStarOverlay"
import { QuoteAssistant } from "@/components/quote-assistant"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { InsuranceProduct } from "@/src/data/insuranceProducts"
import { ArrowRight } from "lucide-react"

type InsuranceProductPageContentProps = {
  product: InsuranceProduct
}

export function InsuranceProductPageContent({
  product,
}: InsuranceProductPageContentProps) {
  return (
    <>
      <section
        id="quote"
        className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy/95 text-primary-foreground"
      >
        <BrandNavyStarOverlay />
        <div className="container relative mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
            <h1 className="mb-4 text-balance font-heading text-2xl font-bold md:text-3xl lg:text-4xl">
              {product.title}
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
              {product.heroDescription}
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <QuoteAssistant />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-balance font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
              What's Included
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Every policy is tailored to your situation, with clear options and
              straightforward guidance on the coverage that matters most.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {product.coverageItems.map((coverage) => (
              <Card key={coverage.name} className="border-border bg-surface">
                <CardHeader className="pb-3">
                  <CardTitle className="font-heading text-xl text-foreground">
                    {coverage.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {coverage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center">
            <Button
              type="button"
              tabIndex={-1}
              size="lg"
              className="w-full max-w-md cursor-default bg-brand-navy font-semibold text-white hover:bg-brand-navy/90 pointer-events-none sm:w-auto sm:min-w-[280px]"
            >
              <span className="flex items-center justify-center">
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Button>
            <p className="mt-3 text-center text-sm text-gray-500">
              Quoted by Protegrity Insurance Brokerage
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
