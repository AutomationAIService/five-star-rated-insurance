import { BrandNavyStarOverlay } from "@/components/brand/BrandNavyStarOverlay"
import { FAQAccordion } from "@/components/blog/FAQAccordion"
import { QuoteAssistant } from "@/components/quote-assistant"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type {
  InsuranceProduct,
  InsuranceProductId,
} from "@/src/data/insuranceProducts"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

type InsuranceProductPageContentProps = {
  product: InsuranceProduct
}

/**
 * Maps each main-category overview page's coverage-item `name` (as defined in
 * `src/data/insuranceProducts.ts`) to its dedicated subcategory page URL.
 * Used below to turn every card title into a `next/link` Link on the 8 main
 * category overview pages. Keys must match `CoverageItem.name` exactly.
 */
const COVERAGE_ITEM_HREFS: Record<
  InsuranceProductId,
  Record<string, string>
> = {
  auto: {
    "Regular coverage": "/insurance/auto/regular-coverage",
    "Classic coverage": "/insurance/auto/classic-coverage",
    "State filings & SR-22": "/insurance/auto/state-filings-sr-22",
  },
  home: {
    "Primary home": "/insurance/home/primary-home",
    "Seasonal home": "/insurance/home/seasonal-home",
    "Rental home": "/insurance/home/rental-home",
  },
  life: {
    "Term life options": "/insurance/life/term-life-options",
    "Whole life plans": "/insurance/life/whole-life-plans",
    "Family protection": "/insurance/life/family-protection",
  },
  "commercial-auto": {
    "Fleet coverage": "/insurance/commercial-auto/fleet-coverage",
    "Cargo protection": "/insurance/commercial-auto/cargo-protection",
    "Business liability": "/insurance/commercial-auto/business-liability",
  },
  business: {
    "General liability": "/insurance/business/general-liability",
    "Property coverage": "/insurance/business/property-coverage",
    "Workers comp": "/insurance/business/workers-compensation",
  },
  specialty: {
    "Motorcycle & ATV": "/insurance/specialty/motorcycle-and-atv-coverage",
    "Boats & jet skis": "/insurance/specialty/boat-and-watercraft-coverage",
    "RVs & motorhomes":
      "/insurance/specialty/rv-motorhome-and-trailer-options",
  },
  "mexico-travel": {
    "Rental car coverage in Mexico":
      "/insurance/mexico-travel/rental-car-coverage-in-mexico",
    "Trip cancellation and interruption":
      "/insurance/mexico-travel/trip-cancellation-and-interruption",
    "Emergency medical and dental":
      "/insurance/mexico-travel/emergency-medical-and-dental",
    "Medical evacuation and repatriation":
      "/insurance/mexico-travel/medical-evacuation-and-repatriation",
    "Lost/stolen baggage": "/insurance/mexico-travel/lost-stolen-baggage",
    "Cancel for any reason (CFAR)":
      "/insurance/mexico-travel/cancel-for-any-reason-cfar",
  },
  other: {
    "Umbrella insurance": "/insurance/other/umbrella-insurance",
    "Flood and earthquake coverage":
      "/insurance/other/flood-and-earthquake-coverage",
    "Valuable items protection": "/insurance/other/valuable-items-protection",
  },
}

export function InsuranceProductPageContent({
  product,
}: InsuranceProductPageContentProps) {
  const titleHrefs = COVERAGE_ITEM_HREFS[product.id] ?? {}

  const faqSchema =
    product.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: product.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null

  const faqAccordionItems = product.faqs.map((f) => ({
    question: f.question,
    answer: f.answer,
  }))

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
              {product.pageH1}
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
              Coverage Highlights
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Explore common coverage buckets below—your broker tailors quotes,
              limits, and deductibles to your situation once you connect.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {product.coverageItems.map((coverage) => {
              const href = titleHrefs[coverage.name]

              return (
                <Card key={coverage.name} className="border-border bg-surface">
                  <CardHeader className="pb-3">
                    <CardTitle className="font-heading text-xl text-foreground">
                      {href ? (
                        <Link
                          href={href}
                          className="inline-block cursor-pointer text-foreground underline-offset-4 transition-colors duration-200 hover:text-navy hover:underline focus-visible:rounded-sm focus-visible:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
                        >
                          {coverage.name}
                        </Link>
                      ) : (
                        coverage.name
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {coverage.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-10 flex flex-col items-center">
            <Button
              type="button"
              tabIndex={-1}
              size="lg"
              className="w-full max-w-md cursor-default bg-yellow-400 font-bold text-blue-900 hover:bg-yellow-500 pointer-events-none sm:w-auto sm:min-w-[280px]"
            >
              <span className="flex items-center justify-center">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Button>
            <p className="mt-3 text-center text-sm text-gray-500">
              Licensed brokers at Protegrity Insurance Brokerage compare options
              with you—no obligation.
            </p>
          </div>
        </div>
      </section>

      {product.faqs.length > 0 ? (
        <section
          className="border-t border-border bg-muted/30 py-16 md:py-20"
          aria-labelledby="product-faq-heading"
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2
                id="product-faq-heading"
                className="mb-4 text-balance font-heading text-2xl font-bold text-foreground md:text-3xl"
              >
                Frequently Asked Questions
              </h2>
              <p className="mb-10 text-muted-foreground md:text-lg">
                Straightforward answers about how quotes work and what to expect.
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <FAQAccordion items={faqAccordionItems} />
            </div>
          </div>
        </section>
      ) : null}

      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
    </>
  )
}
