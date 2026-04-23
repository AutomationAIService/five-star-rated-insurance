import { BrandNavyStarOverlay } from "@/components/brand/BrandNavyStarOverlay"
import { Footer, Header } from "@/components/layout"
import { QuoteAssistant } from "@/components/quote-assistant"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  ArrowRight,
  BadgeCheck,
  Heart,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

const SITE_URL = "https://www.fivestarratedinsurance.com"

const ctaButtonClassName =
  "bg-gold hover:bg-gold/90 text-navy font-bold uppercase tracking-wide text-base h-12 px-8 rounded-md shadow-lg shadow-black/20 border-0"

export const metadata: Metadata = {
  title: "About Five Star Rated Insurance | Phoenix AZ Partner",
  description:
    "Five Star Rated Insurance is the Phoenix marketing partner of Protegrity Insurance Brokerage, a 5.0-star Arizona brokerage with 30+ carriers and 466+ reviews.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Five Star Rated Insurance | Phoenix AZ Partner",
    description:
      "Authorized marketing partner of Protegrity Insurance Brokerage, a 5.0-star licensed Arizona brokerage serving Phoenix, Scottsdale, Mesa, Gilbert, and the Valley.",
    url: `${SITE_URL}/about`,
    siteName: "Five Star Rated Insurance",
    locale: "en_US",
    type: "website",
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Five Star Rated Insurance",
  url: SITE_URL,
  description:
    "Authorized marketing partner of Protegrity Insurance Brokerage, connecting Phoenix-area residents and business owners with licensed Arizona insurance professionals.",
  areaServed: [
    { "@type": "City", name: "Phoenix", containedInPlace: { "@type": "State", name: "Arizona" } },
    { "@type": "City", name: "Scottsdale", containedInPlace: { "@type": "State", name: "Arizona" } },
    { "@type": "City", name: "Mesa", containedInPlace: { "@type": "State", name: "Arizona" } },
    { "@type": "City", name: "Tempe", containedInPlace: { "@type": "State", name: "Arizona" } },
    { "@type": "City", name: "Chandler", containedInPlace: { "@type": "State", name: "Arizona" } },
    { "@type": "City", name: "Glendale", containedInPlace: { "@type": "State", name: "Arizona" } },
    { "@type": "City", name: "Gilbert", containedInPlace: { "@type": "State", name: "Arizona" } },
    { "@type": "City", name: "Peoria", containedInPlace: { "@type": "State", name: "Arizona" } },
  ],
  parentOrganization: {
    "@type": "InsuranceAgency",
    name: "Protegrity Insurance Brokerage",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2680 S Val Vista Dr Bldg 15 Ste 185",
      addressLocality: "Gilbert",
      addressRegion: "AZ",
      postalCode: "85295",
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "466",
    },
  },
}

const partnershipHighlights = [
  {
    icon: Star,
    title: "5.0 Google Rating",
    description:
      "Over 466 authentic Google reviews reflect consistent service from Protegrity's licensed Arizona team.",
  },
  {
    icon: ShieldCheck,
    title: "30+ Top Carriers",
    description:
      "Access to more than 30 top-rated insurance carriers supports competitive quoting across every major line.",
  },
  {
    icon: MapPin,
    title: "Rooted in Gilbert, AZ",
    description:
      "Protegrity's office at 2680 S Val Vista Dr in Gilbert anchors deep roots across the Phoenix Valley.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed in 40 States",
    description:
      "Protegrity writes policies across 40 states, with a strong focus on Arizona residents and business owners.",
  },
]

const productOfferings = [
  {
    title: "Auto Insurance",
    href: "/insurance/auto",
    description: "Regular coverage, classic cars, and SR-22 state filings for Arizona drivers.",
  },
  {
    title: "Home Insurance",
    href: "/insurance/home",
    description: "Primary homes, seasonal and snowbird homes, and rental property coverage.",
  },
  {
    title: "Life Insurance",
    href: "/insurance/life",
    description: "Term life, whole life, and family protection planning for Phoenix households.",
  },
  {
    title: "Commercial Auto",
    href: "/insurance/commercial-auto",
    description: "Fleet coverage, cargo protection, and business auto liability for local operators.",
  },
  {
    title: "Business Insurance",
    href: "/insurance/business",
    description: "General liability, commercial property, and workers compensation options.",
  },
  {
    title: "Specialty Insurance",
    href: "/insurance/specialty",
    description: "Motorcycle, boat and watercraft, and RV or motorhome coverage.",
  },
  {
    title: "Mexico Travel Insurance",
    href: "/insurance/mexico-travel",
    description:
      "Medical, trip cancellation, evacuation, baggage, rental car, and CFAR add-on options.",
  },
  {
    title: "Other Insurance",
    href: "/insurance/other",
    description: "Umbrella, flood and earthquake, and valuable items protection.",
  },
]

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Every quote and recommendation starts with honest advice from Protegrity's licensed experts.",
  },
  {
    icon: MapPin,
    title: "Local Focus",
    description:
      "Built for Phoenix residents by people who understand Arizona's unique insurance landscape.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description:
      "Clear, educational content that helps customers make confident insurance decisions.",
  },
  {
    icon: Heart,
    title: "Trust",
    description:
      "Backed by Protegrity's 5.0-star reputation and 466+ authentic Google reviews.",
  },
  {
    icon: MessageSquare,
    title: "Modern Experience",
    description:
      "Ava, our interactive chat assistant, replaces outdated contact forms so Phoenix customers can get connected to Protegrity's licensed team fast.",
  },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          {/* A. Hero */}
          <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy/95 text-primary-foreground">
            <BrandNavyStarOverlay />
            <div className="container relative mx-auto px-4 py-16 md:py-20 lg:py-24">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="mb-4 text-balance font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
                  About Five Star Rated Insurance
                </h1>
                <p className="mb-6 text-balance text-lg font-semibold text-gold md:text-xl">
                  Skip the Forms. Meet Ava. Get Connected Fast to Protegrity Insurance Brokerage.
                </p>
                <p className="text-base leading-relaxed text-primary-foreground/85 md:text-lg">
                  Five Star Rated Insurance is the authorized marketing partner of Protegrity
                  Insurance Brokerage, a licensed Arizona insurance brokerage with a 5.0-star
                  reputation. We serve Phoenix and the surrounding Valley communities by connecting
                  local residents and business owners with the licensed professionals who quote,
                  bind, and service their coverage. Instead of outdated contact forms, we use Ava,
                  our interactive chat assistant, to book conversations fast.
                </p>
              </div>
            </div>
          </section>

          <div className="bg-background">
            <div className="container mx-auto max-w-4xl px-4 py-14 md:py-20">
              <article className="space-y-16 text-foreground">
                {/* B. Who We Are */}
                <section aria-labelledby="who-we-are-heading">
                  <h2
                    id="who-we-are-heading"
                    className="font-heading text-2xl font-bold text-foreground md:text-3xl"
                  >
                    Who We Are
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Five Star Rated Insurance is a Phoenix-focused marketing company built around a
                      single idea: Arizona residents and business owners deserve a simpler, more
                      transparent way to connect with the right insurance professionals. We are not a
                      call center and we are not a licensed brokerage. Our role is to educate Valley
                      consumers about their Phoenix insurance options and help them reach a trusted
                      Arizona insurance brokerage that can actually place coverage.
                    </p>
                    <p>
                      To deliver on that promise, Five Star Rated Insurance works exclusively with
                      Protegrity Insurance Brokerage, a licensed Gilbert AZ insurance brokerage that
                      has built a 5.0-star reputation supported by more than 466 authentic Google
                      reviews. Every visitor who reaches out through our content is introduced to
                      Protegrity's licensed team, where real conversations, real quotes, and real
                      policy service happen under proper Arizona licensing and carrier appointments.
                    </p>
                    <p>
                      The division of responsibility is intentional and transparent. Five Star Rated
                      Insurance handles the marketing, educational content, and customer outreach
                      side of the experience. All quoting, underwriting coordination, policy binding,
                      endorsements, billing questions, and ongoing customer service are handled
                      directly by Protegrity's licensed insurance professionals. That keeps every
                      licensed activity with the licensed brokerage, and it keeps our team focused on
                      clear, honest education.
                    </p>
                    <p>
                      We serve Phoenix, Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, Peoria,
                      and the broader Valley. Our specialty is helping Arizona residents navigate the
                      local insurance landscape, including auto, home, life, business, and specialty
                      coverage. If you live or run a business in the Phoenix metro, our goal is to
                      make your next insurance decision feel informed, comfortable, and local.
                    </p>
                  </div>
                </section>

                {/* B2. Meet Ava */}
                <section aria-labelledby="meet-ava-heading">
                  <h2
                    id="meet-ava-heading"
                    className="font-heading text-2xl font-bold text-foreground md:text-3xl"
                  >
                    Meet Ava: A Smarter Way to Get Connected
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Most insurance websites still rely on old-school contact forms that drop into
                      an inbox and sit for days. Customers fill out fields, hit submit, and then
                      wait, with no clear idea when anyone will follow up. For Phoenix insurance
                      shoppers trying to compare options and make a timely decision, that kind of
                      delay is frustrating and outdated.
                    </p>
                    <p>
                      Five Star Rated Insurance takes a modern approach. Instead of static forms, we
                      use Ava, our interactive AI chat assistant, to capture each customer's needs
                      in a natural, conversational way and route those details directly to
                      Protegrity Insurance Brokerage's licensed Arizona team. The experience feels
                      more like a quick conversation and less like filling out paperwork.
                    </p>
                    <p>
                      Ava is available on our site around the clock. Customers can start a quote
                      conversation on their own schedule, whether that is late at night after the
                      kids are in bed, during a lunch break at work, or while comparing options with
                      a spouse at the kitchen table. The interactive chat assistant adapts to each
                      visitor's pace, so there is no pressure to rush through questions or wait for
                      business hours to get things moving.
                    </p>
                    <p>
                      Ava is also designed to ask the right questions upfront. By collecting the
                      basic details Protegrity's team needs to start a real quote, Ava creates a
                      clean handoff to a licensed agent. That reduces back-and-forth, shortens time
                      to quote, and helps Phoenix customers get real answers faster instead of
                      cycling through voicemails and form replies.
                    </p>
                    <p>
                      Importantly, Ava does not quote policies, bind coverage, or give licensed
                      insurance advice. That work stays with Protegrity Insurance Brokerage's
                      licensed insurance professionals, who handle all quoting, policy binding, and
                      ongoing service under proper Arizona licensing. Ava is a modern intake and
                      connection tool, not a replacement for licensed expertise.
                    </p>
                    <p>
                      The result is the best of both sides of the experience. Customers get the
                      speed and convenience of modern technology through our interactive chat
                      assistant, and the trust and expertise of a 5.0-star licensed Arizona
                      brokerage once it is time to review real Phoenix insurance quotes and tailor
                      coverage to their situation.
                    </p>
                  </div>

                  {/* Ava placeholder - matches homepage layout */}
                  <div
                    className="relative mt-10 overflow-hidden rounded-xl bg-brand-navy p-6 text-primary-foreground md:p-10"
                    aria-labelledby="hero-chat-cta-about"
                  >
                    <BrandNavyStarOverlay />
                    <div className="relative mx-auto w-full max-w-xl">
                      <p
                        id="hero-chat-cta-about"
                        className="mb-3 text-center font-heading text-base font-semibold tracking-tight text-primary-foreground md:text-lg"
                      >
                        Select Your Insurance Type Below
                      </p>
                      <div className="flex justify-center">
                        <div className="w-full max-w-xl">
                          <QuoteAssistant />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* C. Partnership */}
                <section
                  aria-labelledby="partnership-heading"
                  className="relative overflow-hidden rounded-xl bg-brand-navy p-8 text-primary-foreground md:p-12"
                >
                  <BrandNavyStarOverlay />
                  <div className="relative">
                    <h2
                      id="partnership-heading"
                      className="font-heading text-2xl font-bold md:text-3xl"
                    >
                      Our Partnership With Protegrity Insurance Brokerage
                    </h2>
                    <div className="mt-6 space-y-4 text-base leading-relaxed text-primary-foreground/90">
                      <p>
                        Protegrity Insurance Brokerage is the licensed Arizona insurance brokerage
                        behind every quote, policy, and service interaction a customer experiences
                        after connecting with us. We chose to partner exclusively with Protegrity
                        because their combination of reputation, carrier access, and Arizona roots
                        sets a standard we believe Phoenix insurance customers deserve.
                      </p>
                      <p>
                        Protegrity holds a 5.0-star Google rating supported by more than 466
                        authentic customer reviews, a level of feedback earned over years of careful,
                        consistent service. Their licensed team has access to more than 30 top-rated
                        insurance carriers, which allows them to compare competitive options across
                        auto, home, life, business, and specialty products rather than pushing a
                        single product from a single company. Protegrity is licensed to write
                        policies across 40 states, with deep roots in Arizona and its office located
                        at 2680 S Val Vista Dr Bldg 15 Ste 185 in Gilbert, AZ 85295.
                      </p>
                    </div>

                    <div className="mt-10 grid gap-5 sm:grid-cols-2">
                      {partnershipHighlights.map((item) => {
                        const Icon = item.icon
                        return (
                          <div
                            key={item.title}
                            className="rounded-lg bg-white/5 p-5 ring-1 ring-white/10"
                          >
                            <div className="flex items-center gap-3">
                              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold text-navy">
                                <Icon className="size-5" aria-hidden />
                              </span>
                              <h3 className="font-heading text-lg font-semibold text-primary-foreground">
                                {item.title}
                              </h3>
                            </div>
                            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85">
                              {item.description}
                            </p>
                          </div>
                        )
                      })}
                    </div>

                    <div className="mt-8 space-y-4 text-base leading-relaxed text-primary-foreground/90">
                      <p>
                        Protegrity's team includes licensed insurance professionals with expertise
                        across auto, home, life, business, and specialty products, including coverage
                        options designed for Arizona-specific realities like SR-22 state filings,
                        seasonal and snowbird homes, Mexico travel trips, and small business needs
                        across the Phoenix Valley.
                      </p>
                      <p>
                        For customers, this partnership means broader carrier access, competitive
                        Phoenix insurance rates, personalized service from a licensed Arizona
                        brokerage, and the reassurance of working with a team whose reputation has
                        been verified by hundreds of real clients. You get the best of both worlds:
                        modern, accessible educational marketing from Five Star Rated Insurance, and
                        licensed, personalized insurance service from Protegrity Insurance Brokerage.
                      </p>
                    </div>
                  </div>
                </section>

                {/* D. Mission */}
                <section aria-labelledby="mission-heading">
                  <h2
                    id="mission-heading"
                    className="font-heading text-2xl font-bold text-foreground md:text-3xl"
                  >
                    Our Mission
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Our mission is to help Phoenix-area individuals, families, and business owners
                      find the right insurance coverage without pressure, confusion, or the feeling
                      that they might be overpaying. Insurance should protect what matters, not add
                      another layer of stress to an already busy life in the Valley.
                    </p>
                    <p>
                      That is why we focus on clear options, honest guidance, and support from a
                      licensed brokerage team that puts customer needs first. Our educational
                      content is designed to translate industry language into plain, practical
                      information, so you walk into a conversation with Protegrity's licensed
                      professionals already knowing what to ask and what to compare.
                    </p>
                    <p>
                      We believe insurance shopping should be simple, transparent, and tailored to
                      each person's unique situation. A new driver in Peoria, a multi-vehicle
                      household in Gilbert, a small business in Tempe, and a retired couple with a
                      seasonal home in Scottsdale all have very different needs. Our job is to help
                      each of them get connected to the right licensed advisor and the right quoted
                      options, with no pressure and no runaround.
                    </p>
                  </div>
                </section>

                {/* E. What We Offer */}
                <section aria-labelledby="offer-heading">
                  <h2
                    id="offer-heading"
                    className="font-heading text-2xl font-bold text-foreground md:text-3xl"
                  >
                    What We Offer
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    Through our partnership with Protegrity Insurance Brokerage, Phoenix customers
                    can explore a full lineup of personal, commercial, and specialty insurance
                    products. Every product is quoted by licensed Protegrity brokers using
                    competitive carrier options tailored to each customer's needs, driving record,
                    property details, and household or business goals.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {productOfferings.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-lg border border-border bg-card p-5 shadow-sm"
                      >
                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          <Link
                            href={item.href}
                            className="inline-block cursor-pointer text-foreground underline-offset-4 transition-colors duration-200 hover:text-navy hover:underline focus-visible:rounded-sm focus-visible:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
                          >
                            {item.title}
                          </Link>
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                    Whether you need a straightforward Phoenix auto insurance quote, a new home
                    policy in Chandler, workers compensation for a Gilbert AZ small business, or
                    specialty coverage for a motorcycle or RV, Protegrity's licensed team compares
                    options across 30+ top-rated carriers. That structure is designed to help you
                    match the right coverage with the right price for your specific Arizona
                    situation, rather than relying on a single carrier's boxed-in options.
                  </p>
                </section>

                {/* F. Why Phoenix Chooses Us */}
                <section aria-labelledby="why-phoenix-heading">
                  <h2
                    id="why-phoenix-heading"
                    className="font-heading text-2xl font-bold text-foreground md:text-3xl"
                  >
                    Why Phoenix Chooses Us
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Phoenix is not a generic insurance market, and Valley residents deserve more
                      than a national call-center experience. Our local Arizona expertise covers
                      every major Valley community, including Phoenix, Scottsdale, Mesa, Tempe,
                      Chandler, Glendale, Gilbert, and Peoria. We understand the daily realities of
                      driving the Loop 101, the I-10, and US 60, living in HOA neighborhoods,
                      running small businesses in mixed-use corridors, and planning around Arizona's
                      unique weather patterns.
                    </p>
                    <p>
                      That local focus shapes how Protegrity's licensed professionals approach each
                      quote. Arizona-specific risks, including monsoon storms, SR-22 filing
                      requirements, extended year-round driving seasons, proximity to Mexico travel
                      routes, snowbird and seasonal home needs, and pool and outdoor lifestyle
                      liability, all influence the coverage conversations that matter most here. A
                      generic policy built for another state rarely reflects those realities the way
                      a locally informed quote can.
                    </p>
                    <p>
                      Phoenix customers also value the convenience of being connected with a trusted
                      local Arizona insurance brokerage instead of a national chain. With Protegrity
                      headquartered in Gilbert, customers get a real office, real licensed agents,
                      and a team that is familiar with the neighborhoods, carriers, and coverage
                      patterns that fit life in the Valley.
                    </p>
                  </div>
                </section>

                {/* G. Values */}
                <section aria-labelledby="values-heading">
                  <h2
                    id="values-heading"
                    className="font-heading text-2xl font-bold text-foreground md:text-3xl"
                  >
                    Our Values
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    A partnership between a marketing company and a licensed insurance brokerage
                    only works when both sides share the same priorities. These core values guide
                    how we write, how we educate, and how we introduce Phoenix customers to
                    Protegrity's licensed team.
                  </p>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    {coreValues.map((value) => {
                      const Icon = value.icon
                      return (
                        <div
                          key={value.title}
                          className="rounded-lg border border-border bg-card p-6 shadow-sm"
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-navy text-gold">
                              <Icon className="size-5" aria-hidden />
                            </span>
                            <h3 className="font-heading text-lg font-semibold text-foreground">
                              {value.title}
                            </h3>
                          </div>
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            {value.description}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </section>
              </article>

              {/* H. CTA */}
              <section
                className="relative mt-16 overflow-hidden rounded-xl bg-brand-navy p-8 text-center text-primary-foreground md:p-12"
                aria-labelledby="cta-heading"
              >
                <BrandNavyStarOverlay />
                <div className="relative mx-auto max-w-2xl">
                  <h2 id="cta-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Ready to Get Started?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
                    Connecting You to Protection With Integrity is more than a tagline. When you are
                    ready, start a conversation with Ava or call directly, and Protegrity Insurance
                    Brokerage's licensed Arizona team will quote your coverage, answer your
                    questions, and tailor options to your Phoenix-area situation.
                  </p>
                  <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                    <Button
                      type="button"
                      tabIndex={-1}
                      size="lg"
                      className={cn(
                        ctaButtonClassName,
                        "w-full cursor-default sm:w-auto sm:min-w-[200px] pointer-events-none",
                      )}
                    >
                      <span className="inline-flex items-center justify-center">
                        GET QUOTE
                        <ArrowRight className="ml-2 size-5 shrink-0 text-navy" aria-hidden />
                      </span>
                    </Button>
                    <Button
                      type="button"
                      tabIndex={-1}
                      size="lg"
                      className={cn(
                        ctaButtonClassName,
                        "w-full cursor-default sm:w-auto sm:min-w-[200px] pointer-events-none",
                      )}
                    >
                      <span className="inline-flex items-center justify-center">
                        <Phone className="mr-2 size-5 shrink-0 text-navy" aria-hidden />
                        CALL NOW
                      </span>
                    </Button>
                  </div>
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
