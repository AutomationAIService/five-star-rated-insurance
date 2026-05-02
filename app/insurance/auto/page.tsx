import { Footer, Header } from "@/components/layout"
import { FAQAccordion } from "@/components/blog/FAQAccordion"
import { BrandNavyStarOverlay } from "@/components/brand/BrandNavyStarOverlay"
import { QuoteAssistant } from "@/components/quote-assistant"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { insuranceProductById } from "@/src/data/insuranceProducts"
import type { Metadata } from "next"
import Link from "next/link"

const SITE_URL = "https://www.fivestarratedinsurance.com"

const product = insuranceProductById.auto

const PHONE_DISPLAY = "(480) XXX-XXXX"
const PHONE_TEL = "tel:+1480XXXXXXX"

const ctaButtonClassName =
  "bg-gold hover:bg-gold/90 text-navy font-bold uppercase tracking-wide text-base h-12 px-8 rounded-md shadow-lg shadow-black/20 border-0"

export const metadata: Metadata = {
  title: product.seoTitle,
  description: product.seoDescription,
  alternates: {
    canonical: "/insurance/auto",
  },
  openGraph: {
    title: product.seoTitle,
    description: product.seoDescription,
    url: `${SITE_URL}/insurance/auto`,
    siteName: "Five Star Rated Insurance",
    locale: "en_US",
    type: "website",
  },
}

const localBusinessInsuranceAgencySchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "InsuranceAgency"],
  name: "Five Star Rated Insurance",
  url: SITE_URL,
  logo: `${SITE_URL}/images/5%20Star%20Logo%20-%20Header_Footer.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gilbert",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  telephone: PHONE_TEL.replace("tel:", ""),
  areaServed: {
    "@type": "Place",
    name: "Phoenix metro area",
  },
  priceRange: "$$",
  description:
    "Independent insurance marketing connecting Arizona drivers with auto coverage options from multiple admitted carriers, with licensed support through Protegrity Insurance Brokerage.",
}

const autoFaqSchema = {
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

const faqAccordionItems = product.faqs.map((f) => ({
  question: f.question,
  answer: f.answer,
}))

export default function AutoInsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessInsuranceAgencySchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(autoFaqSchema),
        }}
      />

      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero + quote */}
          <section
            id="quote"
            className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy/95 text-primary-foreground"
          >
            <BrandNavyStarOverlay />
            <div className="container relative mx-auto px-4 py-12 md:py-16 lg:py-20">
              <div className="mx-auto max-w-3xl text-center md:mb-10">
                <h1 className="mb-4 text-balance font-heading text-2xl font-bold md:text-3xl lg:text-4xl">
                  {product.pageH1}
                </h1>
                <p className="text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
                  {product.heroDescription}
                </p>
              </div>
              <div className="mt-10 flex justify-center">
                <div className="w-full max-w-md">
                  <QuoteAssistant />
                </div>
              </div>
            </div>
          </section>

          {/* Body */}
          <div className="bg-background">
            <div className="container mx-auto max-w-4xl px-4 py-14 md:py-20">
              <article className="space-y-12 text-foreground">
                <section aria-labelledby="coverage-drivers-heading">
                  <h2
                    id="coverage-drivers-heading"
                    className="font-heading text-2xl font-bold md:text-3xl"
                  >
                    Coverage Options for Phoenix-Area Drivers
                  </h2>
                  <div className="mt-6 space-y-6 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Arizona sets minimum liability requirements, but valley traffic,
                      freeway speeds, and uninsured-driver exposure mean minimum limits
                      rarely reflect real-world losses. Whether you commute daily or keep
                      a weekend collector car garaged in Phoenix, licensed brokers compare
                      liability, collision, comprehensive, uninsured motorist, and MedPay
                      across carriers so you understand what each quote includes before you
                      bind.
                    </p>
                    <ul className="list-none space-y-6 pl-0">
                      <li>
                        <p>
                          <strong className="text-foreground">Regular coverage — </strong>
                          {product.coverageItems[0]?.description}
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong className="text-foreground">Classic coverage — </strong>
                          {product.coverageItems[1]?.description}
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong className="text-foreground">
                            SR-22 and state filings —{" "}
                          </strong>
                          {product.coverageItems[2]?.description}
                        </p>
                      </li>
                    </ul>
                  </div>
                </section>

                <section aria-labelledby="why-choose-heading">
                  <h2
                    id="why-choose-heading"
                    className="font-heading text-2xl font-bold md:text-3xl"
                  >
                    Why Drivers Compare Quotes With Five Star Rated Insurance
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    Five Star Rated Insurance is an authorized marketing partner of
                    Protegrity Insurance Brokerage—your request routes to licensed brokers
                    backed by 465+ Google reviews. Instead of a single-carrier pitch, you
                    see multiple admitted-market options explained in plain language with
                    guidance on deductibles, discounts, and filings such as SR-22 when they
                    apply.
                  </p>
                </section>
              </article>

              <section
                className="mt-14 border-t border-border pt-14"
                aria-labelledby="auto-faq-heading"
              >
                <h2
                  id="auto-faq-heading"
                  className="font-heading text-2xl font-bold text-foreground md:text-3xl"
                >
                  Frequently Asked Questions
                </h2>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Common questions Arizona drivers ask before switching or adding coverage.
                </p>
                <div className="mt-8">
                  <FAQAccordion items={faqAccordionItems} />
                </div>
              </section>

              {/* CTA */}
              <section
                className="relative mt-14 overflow-hidden rounded-xl bg-brand-navy p-8 text-center text-primary-foreground md:p-12"
                aria-label="Phone and free quote"
              >
                <BrandNavyStarOverlay />
                <div className="relative mx-auto max-w-2xl">
                  <p className="text-base font-medium leading-relaxed text-primary-foreground/95 md:text-lg">
                    Ready to compare car insurance quotes in Phoenix? Start above or call —
                    brokers quote through Protegrity Insurance Brokerage.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
                    Phone:{" "}
                    <a
                      href={PHONE_TEL}
                      className="font-semibold text-gold underline decoration-gold/80 underline-offset-4 transition-colors hover:text-gold/90"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </p>
                  <div className="mt-8 flex flex-col items-center justify-center sm:flex-row">
                    <Button
                      asChild
                      size="lg"
                      className={cn(
                        ctaButtonClassName,
                        "w-full min-h-[48px] normal-case sm:min-w-[240px] sm:w-auto",
                      )}
                    >
                      <Link href="#quote" className="inline-flex items-center justify-center">
                        Get Your Free Quote
                      </Link>
                    </Button>
                  </div>
                  <p className="mt-4 text-sm text-primary-foreground/70">
                    Licensed brokers at Protegrity Insurance Brokerage—no obligation to
                    purchase.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
