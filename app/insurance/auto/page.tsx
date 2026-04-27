import { Footer, Header } from "@/components/layout"
import { BrandNavyStarOverlay } from "@/components/brand/BrandNavyStarOverlay"
import { QuoteAssistant } from "@/components/quote-assistant"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import Link from "next/link"

const SITE_URL = "https://www.fivestarratedinsurance.com"

const PHONE_DISPLAY = "(480) XXX-XXXX"
const PHONE_TEL = "tel:+1480XXXXXXX"

const ctaButtonClassName =
  "bg-gold hover:bg-gold/90 text-navy font-bold uppercase tracking-wide text-base h-12 px-8 rounded-md shadow-lg shadow-black/20 border-0"

export const metadata: Metadata = {
  title: "Auto Insurance in Phoenix, AZ | Five Star Rated Insurance",
  description:
    "Compare auto insurance in Phoenix, AZ from top-rated carriers. Liability, collision, SR-22, and classic car coverage. Free quote from licensed Arizona agents.",
  alternates: {
    canonical: "/insurance/auto",
  },
  openGraph: {
    title: "Auto Insurance in Phoenix, AZ | Five Star Rated Insurance",
    description:
      "Compare auto insurance in Phoenix, AZ from top-rated carriers. Liability, collision, SR-22, and classic car coverage. Free quote from licensed Arizona agents.",
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

export default function AutoInsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessInsuranceAgencySchema),
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
                  Auto Insurance in Phoenix, AZ
                </h1>
                <h2 className="mb-6 text-balance font-heading text-xl font-semibold text-primary-foreground/95 md:text-2xl">
                  Experts in Your Peace of Mind - Top-Rated Car Insurance for Every Driver in the
                  Valley
                </h2>
                <p className="text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
                  Finding the right auto insurance in Phoenix shouldn&apos;t feel like a second job.
                  Whether you commute daily on the I-10, own a classic car you take out on weekends,
                  or need an SR-22 to stay compliant, we give you access to coverage from multiple
                  top-rated carriers so you can compare real options and choose what fits your life
                  and your budget. Licensed Arizona agents, honest guidance, no pressure.
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
                    Coverage for Every Driver in Phoenix, Scottsdale, Mesa, Gilbert, and the
                    Surrounding Valley
                  </h2>
                  <div className="mt-6 space-y-6 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Not every driver on the road has the same needs, and not every policy is the
                      same. Arizona requires liability coverage for every driver, but the minimum
                      limits rarely tell the whole story. A serious accident on the Loop 101 can push
                      costs well beyond what state-minimum coverage pays. We help you understand what
                      you&apos;re actually buying before you sign anything.
                    </p>
                    <ul className="list-none space-y-6 pl-0">
                      <li>
                        <p>
                          <strong className="text-foreground">Regular Coverage - </strong>
                          Liability, collision, comprehensive, uninsured motorist, and MedPay for
                          daily drivers across the Phoenix metro.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong className="text-foreground">Classic Car Coverage - </strong>
                          Agreed-value policies for collector and vintage vehicles that deserve more
                          than a depreciated standard payout.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong className="text-foreground">SR-22 and State Filings - </strong>
                          Certificate of financial responsibility handled correctly and monitored so
                          your compliance stays continuous.
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
                    Why Phoenix Drivers Choose Five Star Rated Insurance
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    We don&apos;t work for one insurance company - we work for you. That means
                    comparing auto insurance quotes from dozens of admitted Arizona carriers and
                    showing you the options that actually match your situation. Our Gilbert-based
                    team answers questions in plain English and stays with you if you ever need to
                    file a claim.
                  </p>
                </section>
              </article>

              {/* CTA */}
              <section
                className="relative mt-14 overflow-hidden rounded-xl bg-brand-navy p-8 text-center text-primary-foreground md:p-12"
                aria-label="Phone and free quote"
              >
                <BrandNavyStarOverlay />
                <div className="relative mx-auto max-w-2xl">
                  <p className="text-base leading-relaxed text-primary-foreground/90">
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
                    Quoted by Protegrity Insurance Brokerage
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
