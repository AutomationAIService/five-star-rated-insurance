import { Footer, Header } from "@/components/layout"
import { FAQAccordion } from "@/components/blog/FAQAccordion"
import { BrandNavyStarOverlay } from "@/components/brand/BrandNavyStarOverlay"
import { QuoteAssistant } from "@/components/quote-assistant"
import { Button } from "@/components/ui/button"
import {
  ARIZONA_INSURANCE_CITIES,
  getArizonaInsuranceCityBySlug,
} from "@/src/data/cityLandingPages"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"

const SITE_URL = "https://www.fivestarratedinsurance.com"

export const dynamicParams = false

export function generateStaticParams() {
  return ARIZONA_INSURANCE_CITIES.map(({ slug }) => ({ citySlug: slug }))
}

function cityFaqs(cityName: string) {
  return [
    {
      question: `Why compare insurance quotes in ${cityName} instead of staying with one carrier?`,
      answer:
        "Rates, discounts, and underwriting appetite change often—especially after storms, mileage shifts, or life events. Shopping multiple admitted carriers through licensed brokers helps you see side-by-side options instead of a single renewal price.",
    },
    {
      question: `What lines can I compare for ${cityName}?`,
      answer:
        "Licensed brokers routinely quote auto, home, life, business, commercial auto, specialty (motorcycles, RVs, boats), umbrella, flood, earthquake, scheduled valuables, and travel-related coverage depending on eligibility.",
    },
    {
      question: "Who prepares and binds the policies?",
      answer:
        "Five Star Rated Insurance is an authorized marketing partner of Protegrity Insurance Brokerage. Quotes and issued policies flow through licensed brokers there—not through algorithms alone.",
    },
    {
      question: `Do you help nearby communities outside ${cityName}?`,
      answer:
        "Yes—many Arizona households and businesses split time across the Valley or Tucson metro. Tell your broker where vehicles are garaged and properties sit so territories and discounts price correctly.",
    },
    {
      question: "How do I start?",
      answer:
        "Use the guided assistant below or call the broker team. Bring basic info—drivers, vehicles, property details, or payroll/class codes for commercial lines—to speed accurate quoting.",
    },
  ]
}

const SERVICE_LINES = [
  {
    title: "Auto insurance",
    bullets: ["Daily drivers & commuters", "Classic & collector vehicles", "SR-22 and state filings"],
  },
  {
    title: "Home insurance",
    bullets: ["Primary homes", "Seasonal & second homes", "Landlord / rental dwellings"],
  },
  {
    title: "Life insurance",
    bullets: ["Term protection windows", "Whole life permanence", "Family income replacement"],
  },
  {
    title: "Business & commercial",
    bullets: [
      "General liability & property",
      "Workers’ compensation",
      "Commercial auto & fleets",
    ],
  },
  {
    title: "Specialty & travel",
    bullets: ["Motorcycles & ATVs", "Boats & RVs", "Mexico travel coverage"],
  },
  {
    title: "Additional protection",
    bullets: ["Umbrella liability", "Flood & earthquake", "Scheduled valuables"],
  },
]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ citySlug: string }>
}): Promise<Metadata> {
  const { citySlug } = await params
  const city = getArizonaInsuranceCityBySlug(citySlug)
  if (!city) {
    return { title: "Insurance | Five Star Rated Insurance" }
  }
  const title = `Insurance Agency in ${city.name}, AZ | Auto, Home, Life & Business Insurance Quotes`
  const description = `Compare insurance quotes in ${city.name}, AZ for auto, home, life, business, commercial auto, and specialty insurance through licensed brokers backed by 465+ Google reviews.`
  return {
    title,
    description,
    alternates: {
      canonical: `/${city.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${city.slug}`,
      siteName: "Five Star Rated Insurance",
      locale: "en_US",
      type: "website",
    },
  }
}

export default async function ArizonaCityInsurancePage({
  params,
}: {
  params: Promise<{ citySlug: string }>
}) {
  const { citySlug } = await params
  const city = getArizonaInsuranceCityBySlug(citySlug)
  if (!city) notFound()

  const faqs = cityFaqs(city.name)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section
            id="quote"
            className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy/95 text-primary-foreground"
          >
            <BrandNavyStarOverlay />
            <div className="container relative mx-auto px-4 py-12 md:py-16 lg:py-20">
              <div className="mx-auto max-w-3xl text-center md:mb-10">
                <h1 className="mb-4 text-balance font-heading text-2xl font-bold md:text-3xl lg:text-4xl">
                  Insurance Agency in {city.name}, AZ
                </h1>
                <p className="text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
                  Compare auto, home, life, business, commercial auto, and specialty insurance
                  quotes in {city.name} through licensed brokers backed by 465+ Google reviews.
                </p>
              </div>
              <div className="mt-10 flex justify-center">
                <div className="w-full max-w-md">
                  <QuoteAssistant />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-background py-14 md:py-20">
            <div className="container mx-auto max-w-5xl px-4">
              <h2 className="text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
                Coverage Lines We Help You Compare
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground md:text-lg">
                Every household and business is different. Below is a snapshot of common lines{" "}
                {city.name} residents request—your broker narrows carriers and endorsements once
                they understand your goals.
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {SERVICE_LINES.map((block) => (
                  <div
                    key={block.title}
                    className="rounded-xl border border-border bg-surface p-6 shadow-sm"
                  >
                    <h3 className="font-heading text-lg font-semibold text-navy">{block.title}</h3>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground md:text-base">
                      {block.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t border-border bg-muted/25 py-14 md:py-20">
            <div className="container mx-auto max-w-3xl px-4 text-center md:text-left">
              <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                Independent Comparisons for {city.name} Residents
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                Five Star Rated Insurance connects your details with Protegrity Insurance
                Brokerage—licensed professionals who quote multiple carriers instead of pushing a
                single product. Whether you are new to {city.name}, scaling a business, or simply
                re-shopping before renewal, you get transparent explanations of limits, deductibles,
                and optional endorsements.
              </p>
            </div>
          </section>

          <section
            className="bg-background py-14 md:py-20"
            aria-labelledby={`${city.slug}-faq-heading`}
          >
            <div className="container mx-auto max-w-3xl px-4">
              <h2
                id={`${city.slug}-faq-heading`}
                className="text-center font-heading text-2xl font-bold md:text-3xl"
              >
                Frequently Asked Questions
              </h2>
              <p className="mb-10 mt-4 text-center text-muted-foreground md:text-lg">
                Quick answers about quoting in {city.name} and across Arizona.
              </p>
              <FAQAccordion items={faqs} />
            </div>
          </section>

          <section className="relative overflow-hidden bg-brand-navy py-14 text-primary-foreground md:py-16">
            <BrandNavyStarOverlay />
            <div className="container relative mx-auto max-w-2xl px-4 text-center">
              <h2 className="font-heading text-2xl font-bold md:text-3xl">
                Compare Quotes for {city.name} Today
              </h2>
              <p className="mt-4 text-base text-primary-foreground/85 md:text-lg">
                Start with the assistant above or jump back anytime—licensed brokers respond with
                options aligned to Arizona rules and carrier eligibility.
              </p>
              <div className="mt-8 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className={cn(
                    "bg-gold font-bold uppercase tracking-wide text-navy hover:bg-gold/90",
                    "h-12 px-8 shadow-lg shadow-black/20",
                  )}
                >
                  <Link href="#quote" className="inline-flex items-center gap-2">
                    Get Your Free Quote
                    <ArrowRight className="size-5" aria-hidden />
                  </Link>
                </Button>
              </div>
              <p className="mt-4 text-sm text-primary-foreground/70">
                Quoted by Protegrity Insurance Brokerage · 465+ five-star Google reviews
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
