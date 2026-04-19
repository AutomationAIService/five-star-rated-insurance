import { QuoteAssistant } from "@/components/quote-assistant"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { InsuranceProduct } from "@/src/data/insuranceProducts"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

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
        className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy/95 text-primary-foreground"
      >
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
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

          <div className="mt-10 flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gold font-semibold text-navy hover:bg-gold/90"
            >
              <Link href="#quote">
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
