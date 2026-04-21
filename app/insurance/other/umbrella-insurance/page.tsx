import { Footer, Header } from "@/components/layout"
import { BrandNavyStarOverlay } from "@/components/brand/BrandNavyStarOverlay"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import Link from "next/link"
import { Phone } from "lucide-react"

const SITE_URL = "https://www.fivestarratedinsurance.com"

const ctaButtonClassName =
  "bg-gold hover:bg-gold/90 text-navy font-bold uppercase tracking-wide text-base h-12 px-8 rounded-md shadow-lg shadow-black/20 border-0"

export const metadata: Metadata = {
  title: "Umbrella Insurance Phoenix AZ | Excess Liability Coverage",
  description:
    "Personal umbrella insurance Phoenix AZ: excess liability coverage for Arizona households in Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.",
  alternates: {
    canonical: "/insurance/other/umbrella-insurance",
  },
  openGraph: {
    title: "Umbrella Insurance Coverage in Phoenix, AZ | Five Star Rated",
    description:
      "Personal umbrella insurance for Phoenix-area households, serving Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria with excess liability protection.",
    url: `${SITE_URL}/insurance/other/umbrella-insurance`,
    siteName: "Five Star Rated Insurance",
    locale: "en_US",
    type: "website",
  },
}

const insuranceAgencySchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Five Star Rated Insurance",
  url: SITE_URL,
  description:
    "Marketing partner connecting Arizona households with personal umbrella insurance options and licensed support through Protegrity Insurance Brokerage.",
  logo: `${SITE_URL}/images/5%20Star%20Logo%20-%20Header_Footer.png`,
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
    "@type": "Organization",
    name: "Protegrity Insurance Brokerage",
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Personal umbrella insurance in Phoenix, Arizona",
  serviceType: "Personal umbrella insurance",
  provider: {
    "@type": "InsuranceAgency",
    name: "Five Star Rated Insurance",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "State",
    name: "Arizona",
  },
  url: `${SITE_URL}/insurance/other/umbrella-insurance`,
  description:
    "Educational resource on personal umbrella insurance for Arizona households, covering how excess liability coverage layers above auto, home, rental property, and watercraft policies in Phoenix, Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.",
}

export default function UmbrellaInsurancePhoenixPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([insuranceAgencySchema, serviceSchema]),
        }}
      />

      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          {/* A. Hero */}
          <section className="relative flex min-h-[380px] items-end md:min-h-[440px]">
            <img
              src="https://images.unsplash.com/photo-1760633549227-901e0c3cf9d3?auto=format&fit=crop&w=2000&q=80"
              alt="Family with two young children outdoors at sunset, umbrella insurance Phoenix AZ excess liability coverage for Arizona families"
              width={2000}
              height={1333}
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-brand-navy/45"
              aria-hidden
            />
            <div className="container relative mx-auto px-4 pb-12 pt-28 text-primary-foreground md:pb-16 md:pt-32">
              <h1 className="mb-4 max-w-4xl font-heading text-3xl font-bold leading-tight text-balance md:text-4xl lg:text-5xl">
                Umbrella Insurance Coverage in Phoenix, AZ
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
                Auto and home policies carry fixed liability limits that a serious claim
                can exceed quickly.{" "}
                <strong className="font-semibold text-primary-foreground">
                  Umbrella insurance Phoenix AZ
                </strong>{" "}
                adds excess liability protection above those underlying policies for
                households in Phoenix, Scottsdale, Mesa, Tempe, Chandler, Glendale,
                Gilbert, and Peoria who want a structured layer of asset protection
                without rebuilding their program from scratch.
              </p>
            </div>
          </section>

          <div className="bg-background">
            <div className="container mx-auto max-w-4xl px-4 py-14 md:py-20">
              <article className="prose prose-slate max-w-none space-y-12 text-foreground">
                {/* B. Overview */}
                <section aria-labelledby="overview-heading">
                  <h2 id="overview-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Overview: What Personal Umbrella Insurance Means
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      A personal umbrella insurance policy provides excess liability
                      protection that sits above the liability limits carried on an
                      underlying auto policy, home policy, rental property policy, or
                      recreational vehicle policy. When a covered liability claim reaches
                      the full limit on one of the underlying policies, the umbrella
                      responds for additional damages and legal costs up to the umbrella
                      limit. The structure is deliberately layered: underlying policies
                      pay first, and the umbrella is the next layer of protection rather
                      than a replacement for the coverage already in place.
                    </p>
                    <p>
                      Common umbrella coverage amounts in the Arizona market start at
                      $1 million and scale through $2 million, $3 million, and $5
                      million, with limits of $10 million or more available for
                      households with larger asset profiles. The coverage amount is
                      generally priced relative to the amount of underlying liability
                      already in place, the number of drivers and vehicles, the number of
                      insured properties, household composition, and a short list of
                      risk factors the carrier reviews during placement. Umbrella
                      policies typically cost a fraction of what the same amount of
                      liability would cost if added directly to each underlying policy,
                      which is one of the reasons they remain a practical asset-protection
                      tool for a wide range of households.
                    </p>
                    <p>
                      Serious auto accidents with significant bodily-injury claims,
                      lawsuits involving pool accidents at a residence, dog-bite claims,
                      slip-and-fall events during an event hosted at the home, and
                      personal-injury claims involving libel, slander, or defamation are
                      the categories of events that most commonly exceed the liability
                      limits on underlying policies. An umbrella policy is designed to
                      respond exactly when those claims move past the underlying limit,
                      and the combination of broader coverage and additional limit is
                      what distinguishes an umbrella from a simple increase in primary
                      liability limits.
                    </p>
                    <p>
                      Umbrella coverage is often associated with high-net-worth
                      households, but the practical math applies to middle-income
                      families as well. The assets most Arizona households need to
                      protect include home equity, retirement accounts, investment
                      accounts, savings, and future wage-earner income, all of which can
                      be exposed in a liability claim that exceeds underlying limits.
                      Families in Phoenix, Scottsdale, Mesa, Tempe, Chandler, Glendale,
                      Gilbert, and Peoria frequently carry exposures (multiple drivers,
                      pools, boats, rental properties, dogs) that make an umbrella policy
                      a rational addition to the program rather than a luxury.
                    </p>
                    <p>
                      Personal umbrella insurance Phoenix Arizona policies are written on
                      an annual basis and renew automatically with the underlying
                      policies, which keeps the overall structure simple to manage.
                      Carriers require the underlying policies to carry minimum
                      liability limits (commonly $250,000 or $500,000 auto liability and
                      $300,000 or $500,000 home liability) before the umbrella attaches,
                      and the licensed broker verifies those limits at the time of
                      placement. The intent is not to replace primary coverage; it is to
                      build a deliberate layer above it so a single large claim does not
                      expose personal assets that have been accumulated over years of
                      disciplined work and planning.
                    </p>
                  </div>
                </section>

                {/* C. What's covered */}
                <section aria-labelledby="covered-heading">
                  <h2 id="covered-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    What&apos;s Covered: Umbrella Insurance Building Blocks
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    An umbrella policy extends the liability protections on existing
                    personal policies and, in many cases, adds categories of coverage
                    that primary policies do not include. Reviewing the major components
                    makes it easier to understand how the coverage actually responds
                    when a covered claim exceeds the underlying limit and why the
                    structure is described as excess-liability insurance rather than a
                    first-dollar product.
                  </p>

                  <div className="mt-8 space-y-8">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Excess Liability Above Auto Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        The umbrella responds above the bodily-injury and
                        property-damage liability limits on the auto policy after the
                        underlying limit is exhausted on a covered claim. This is the
                        coverage that most commonly responds on real umbrella claims
                        because automobile losses are the largest category of serious
                        personal-liability events in Arizona. The umbrella continues to
                        pay defense costs and damages up to the umbrella limit, which
                        protects wage-earner income and long-term savings from a single
                        at-fault accident that pierces primary limits.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Excess Liability Above Home Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        The umbrella extends above the personal-liability limit on the
                        homeowners or renters policy, which matters for events that
                        occur on the property (slip-and-fall injuries, pool and
                        trampoline incidents, guest injuries) and for certain events off
                        the property for which the household is responsible. The
                        structure applies whether the claim involves a single injured
                        party or multiple claimants, and it follows the underlying
                        coverage form on the primary policy when the excess limit
                        attaches. This is a common coverage for Phoenix-area homeowners
                        who host frequently, own pools, or keep dogs in the household.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Excess Liability Above Watercraft and Specialty Vehicle Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        For households that own boats, jet skis, motorcycles, ATVs, RVs,
                        or other specialty vehicles, the umbrella can extend above the
                        underlying policies that cover those vehicles when eligibility
                        requirements are met. Carriers typically list the scheduled
                        vehicles and the required underlying limits on each, and the
                        umbrella attaches only when those underlying limits are in
                        place. This is an area where accurate disclosure of all vehicles
                        matters during the application, because a vehicle that is not
                        scheduled is typically not covered by the umbrella if a claim
                        occurs.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Personal Injury Coverage (Libel, Slander, Defamation, False Arrest)
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Many umbrella policies include personal-injury coverage for
                        categories that standard homeowners liability policies do not
                        address, including libel, slander, defamation, invasion of
                        privacy, and false arrest claims. These exposures are
                        increasingly relevant in an era of social media posts,
                        neighborhood communication platforms, and online reviews, where
                        a single statement can escalate into a civil claim. The umbrella
                        is often the only place in the personal-insurance program where
                        this category of liability is addressed, which is one of the
                        reasons the coverage is valuable beyond simple limit
                        enhancement.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Legal Defense Costs
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Umbrella policies include legal defense costs for covered
                        claims, which are typically paid in addition to the umbrella
                        limit rather than against it. Defense costs can move quickly
                        into six figures on a contested claim, and having a dedicated
                        legal-defense provision keeps those costs from eroding the
                        policy limit available to pay damages. The carrier assigns
                        counsel or coordinates with counsel assigned on the underlying
                        policy, and the insured participates in the defense rather than
                        managing it alone.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Worldwide Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Personal umbrella policies typically provide worldwide coverage
                        for covered liability claims, which means the protection follows
                        the insured household on travel outside the United States.
                        Coverage applies to personal activities abroad within the scope
                        of the umbrella policy language, which is useful for families
                        that travel to Mexico, Canada, Europe, or other destinations
                        during the year. The underlying-policy structure still applies,
                        and the umbrella attaches only when the relevant underlying
                        coverage is in place and has responded to the point of its
                        limit.
                      </p>
                    </div>
                  </div>
                </section>

                {/* D. Who needs */}
                <section aria-labelledby="who-needs-heading">
                  <h2 id="who-needs-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Who Needs Umbrella Coverage in the Phoenix Area?
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Homeowners with substantial equity in their primary residence,
                      households with valuable investment and retirement accounts, and
                      families with strong current and projected wage-earner income form
                      the clearest audience for a personal umbrella policy. Families
                      with teen drivers are another core audience because young drivers
                      statistically produce higher accident frequency during the first
                      several years of licensed driving, and a single at-fault serious
                      accident can produce a claim that exceeds primary auto liability
                      limits. Pool owners and households that frequently host guests at
                      the residence face elevated premises-liability exposure, and an
                      umbrella policy is the practical response when the home policy
                      alone does not provide enough liability limit for the exposure.
                    </p>
                    <p>
                      Dog owners, particularly owners of breeds that carriers rate
                      higher for liability frequency, often place umbrella coverage to
                      respond above the homeowners liability limit on a dog-bite claim.
                      Landlords and rental property investors benefit from umbrella
                      coverage because rental exposure adds a category of liability that
                      the primary residence policy does not address, and the umbrella
                      can extend above the landlord policy on each scheduled property.
                      Business owners who want to protect personal assets separate from
                      business coverage structures often place a personal umbrella to
                      address the personal side of the asset-protection picture, while
                      keeping commercial liability programs dedicated to business
                      operations.
                    </p>
                    <p>
                      Boat and recreational-vehicle owners, including owners of jet
                      skis, travel trailers, motorhomes, and side-by-side vehicles, face
                      activity-specific liability exposure that an umbrella policy is
                      designed to address when the underlying scheduled-vehicle limits
                      are in place. Professionals with public visibility, board
                      members, volunteer leaders, and individuals with social-media
                      presence face exposure in the personal-injury category (libel,
                      slander, defamation) that homeowners liability does not cover,
                      which is one of the strongest reasons to place an umbrella even
                      when the dollar exposure on auto and home is moderate.
                    </p>
                    <p>
                      Households with meaningful savings, retirement balances, or future
                      income they intend to protect are good candidates for umbrella
                      coverage regardless of how their net-worth statement reads today.
                      Arizona umbrella policy quotes reflect a Valley profile of high
                      home values in areas such as Scottsdale and Paradise Valley, an
                      active outdoor lifestyle, high pool-ownership density, growing
                      family wealth across Gilbert and Chandler, and established
                      communities in Peoria, Glendale, Mesa, and Tempe that combine to
                      create a meaningful umbrella market. The common thread is asset
                      exposure relative to primary liability limits, and the umbrella is
                      the structured response when exposure exceeds what primary
                      policies comfortably cover.
                    </p>
                  </div>
                </section>

                {/* E. Considerations */}
                <section aria-labelledby="az-considerations-heading">
                  <h2
                    id="az-considerations-heading"
                    className="font-heading text-2xl font-bold md:text-3xl"
                  >
                    Arizona Umbrella Insurance Considerations
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Underlying limit requirements are the first practical consideration
                      on any umbrella placement. Carriers typically require auto liability
                      limits of $250,000 per person and $500,000 per occurrence (or
                      combined single limits of $300,000 or $500,000) and home-policy
                      liability limits of $300,000 or $500,000 before the umbrella
                      attaches. Households with lower primary limits typically increase
                      primary limits at the time of umbrella placement, which is a
                      standard step and produces a program where every layer is sized
                      appropriately. Recreational-vehicle and watercraft policies also
                      carry scheduled underlying-limit requirements when those exposures
                      are included.
                    </p>
                    <p>
                      Umbrella policies coordinate across multiple underlying policies
                      on the same program, which is one of the reasons they are
                      structurally efficient. A single umbrella can sit above the auto
                      policy, home policy, rental-property policies, boat policy, and
                      RV policy at the same time, provided each of those underlying
                      policies carries the required underlying limit. Arizona community
                      property laws affect household liability exposure for married
                      couples because shared assets can be reached in a liability
                      judgment against either spouse, which is a reason couples often
                      choose umbrella limits that reflect the combined household net
                      worth rather than individual exposure.
                    </p>
                    <p>
                      The affordability of umbrella coverage relative to the protection
                      it provides is a frequently underestimated feature. Carriers
                      typically price additional layers of umbrella limit at a lower
                      incremental premium per million of coverage beyond the first
                      million, which means moving from $1 million to $2 million is
                      usually far less expensive than the first million of coverage. A
                      general planning rule for coverage amount is enough umbrella limit
                      to cover current net worth plus a meaningful projection of future
                      wage-earner income, though the exact figure is a household
                      decision that balances premium against protection.
                    </p>
                    <p>
                      Circumstances where umbrella coverage is especially valuable
                      include households with multiple licensed drivers, households with
                      a pool or trampoline on the property, households that host
                      frequent events at the residence, households with public
                      visibility through work or volunteer roles, and households that
                      own rental properties. Excluded risks that the umbrella typically
                      does not cover include business activities (which require a
                      separate commercial-liability program), intentional or criminal
                      acts, and in some states punitive damages, which are handled
                      differently by state law and by carrier. The specific exclusion
                      list appears in the policy documents and should be reviewed at
                      placement.
                    </p>
                    <p>
                      Accurate disclosure of all drivers, vehicles, properties, and
                      watercraft during the application is critical because an
                      undisclosed exposure is typically not covered when a claim
                      occurs. Umbrella policies interact with uninsured and
                      underinsured motorist coverage in carrier-specific ways; some
                      carriers include an excess UM/UIM feature on the umbrella for an
                      additional premium, while others require UM/UIM to be handled
                      entirely on the auto policy. Annual reviews matter because asset
                      profiles, household composition (new drivers, new properties, new
                      watercraft), and risk exposure shift over time, and the umbrella
                      structure should be recalibrated when those changes occur. Even
                      middle-income families can benefit from umbrella coverage despite
                      the common assumption that only high-net-worth households need it;
                      the practical measure is exposure relative to primary limits, not
                      net worth alone.
                    </p>
                  </div>
                </section>

                {/* F. Why choose */}
                <section className="relative overflow-hidden rounded-xl bg-brand-navy p-8 text-primary-foreground md:p-10">
                  <BrandNavyStarOverlay />
                  <div className="relative">
                    <h2 className="font-heading text-2xl font-bold md:text-3xl">
                      Why Choose Five Star Rated Insurance?
                    </h2>
                    <div className="mt-6 space-y-4 text-base leading-relaxed text-primary-foreground/90">
                      <p>
                        Five Star Rated Insurance operates as an authorized marketing
                        partner of Protegrity Insurance Brokerage, so Arizona households
                        work with licensed professionals who understand layered coverage
                        strategies rather than generalists who treat umbrella insurance
                        as a simple limit increase. Our team reviews underlying auto,
                        home, rental, and specialty vehicle liability limits against the
                        household&apos;s asset profile, driver roster, property
                        portfolio, and risk exposure, and translates that review into
                        accurate submissions carriers can quote efficiently.
                      </p>
                      <p>
                        We maintain access to multiple carriers for competitive umbrella
                        quoting, which matters because pricing, underwriting appetite,
                        and underlying-limit requirements vary meaningfully by company.
                        Additional liability insurance Phoenix quotes depend on the
                        number of scheduled vehicles and properties, household
                        composition, desired umbrella limit, and the liability limits
                        already in place, and comparing multiple carriers through a
                        licensed brokerage is how households identify the right
                        combination of excess-liability protection and premium.
                      </p>
                      <p>
                        We serve households across Phoenix, Scottsdale, Mesa, Tempe,
                        Chandler, Glendale, Gilbert, and Peoria, and our 5.0-star
                        service reputation reflects consistent follow-through, responsive
                        service, and respectful communication from the first quote
                        through every policy placement and every claim. Protegrity-
                        supported processes keep required disclosures visible and your
                        questions answered so every decision rests on facts, not
                        pressure.
                      </p>
                    </div>
                  </div>
                </section>

                {/* G. FAQ */}
                <section aria-labelledby="faq-heading">
                  <h2 id="faq-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Frequently Asked Questions About Umbrella Insurance
                  </h2>

                  <div className="mt-8 space-y-10">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is personal umbrella insurance and how does it work?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Personal umbrella insurance is an excess-liability policy that
                        provides additional liability limit above the underlying auto,
                        home, rental property, and specialty vehicle policies already
                        in place. When a covered liability claim exceeds the limit on
                        the primary policy, the umbrella responds for additional
                        damages and defense costs up to the umbrella limit. The
                        coverage is layered by design, which means underlying policies
                        must reach their limits first before the umbrella pays, and
                        carriers require specific minimum underlying limits before the
                        umbrella can attach.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How much umbrella insurance do I need in Phoenix?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        A common planning rule is an umbrella limit at least equal to
                        current household net worth plus a meaningful projection of
                        future wage-earner income, which reflects the practical measure
                        of what a serious liability judgment could reach. Most Phoenix
                        households start at $1 million or $2 million and scale through
                        $5 million as the asset profile grows. High-net-worth
                        households frequently carry $5 million or more, and the
                        incremental cost per million beyond the first million is
                        typically lower, which makes higher limits a reasonable choice
                        for households with meaningful assets to protect.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Who should consider buying an umbrella policy?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Households with teen drivers, pool or trampoline exposure, dog
                        ownership, rental properties, boat or RV ownership, frequent
                        entertaining, or public visibility are the categories most
                        commonly recommended for umbrella coverage. Asset-rich
                        households with substantial home equity, retirement balances,
                        or investment accounts also benefit because exposure is
                        measured against what a liability judgment could reach. Middle-
                        income families with meaningful wage-earner income and typical
                        suburban exposures are often good candidates as well, because
                        the combination of reasonable premium and significant
                        additional limit fits a wide range of Valley households.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What are the underlying coverage requirements for an umbrella policy in Arizona?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Carriers typically require auto liability limits of $250,000
                        per person and $500,000 per occurrence (or combined single
                        limits of $300,000 or $500,000) and home-policy liability
                        limits of $300,000 or $500,000 before the umbrella attaches.
                        Recreational-vehicle, watercraft, and rental-property policies
                        carry their own scheduled underlying-limit requirements when
                        those exposures are included under the umbrella. The licensed
                        broker verifies underlying limits at placement, and primary
                        policies are frequently increased to meet umbrella requirements
                        at the same time the umbrella is added.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does umbrella insurance cover my rental properties?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Yes, when the rental property is disclosed on the umbrella
                        application and the underlying landlord or dwelling-fire policy
                        carries the required underlying liability limit. The umbrella
                        extends above the landlord policy on each scheduled rental
                        property, which matters because tenant injuries, guest
                        injuries, and dog-bite claims on rental properties can produce
                        liability claims that exceed primary limits. Undisclosed rental
                        properties are typically not covered, so accurate disclosure at
                        application (and at each annual renewal) is important.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Is umbrella insurance expensive?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Umbrella insurance is generally considered affordable relative
                        to the protection it provides, particularly beyond the first
                        million of limit. Premium varies by carrier, underlying-policy
                        structure, number of drivers and vehicles, number of
                        properties, pool or dog exposure, and selected umbrella limit,
                        so the best reference point is a written quote rather than a
                        generic price range. High-net-worth umbrella insurance Phoenix
                        quotes typically reflect larger limits, a larger schedule of
                        underlying policies, and more detailed underwriting, but remain
                        cost-efficient on a per-million basis.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does umbrella insurance cover business-related claims?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Personal umbrella insurance does not cover business-related
                        claims. Business-liability exposure belongs on a commercial
                        general-liability policy or a business-owners policy, with its
                        own dedicated limits and its own excess-liability program where
                        appropriate. The personal umbrella is designed to sit above
                        personal policies only, and business activities are a standard
                        exclusion on the personal form. Households that operate a
                        business from home, own an investment entity, or hold
                        professional licenses typically place the commercial side of
                        the program separately from the personal umbrella.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How is umbrella insurance different from excess liability on my home or auto policy?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        An umbrella is broader and more efficient than simply raising
                        liability limits on a single underlying policy. The umbrella
                        sits above multiple underlying policies at once (auto, home,
                        rental property, watercraft, specialty vehicle) with a single
                        layer of coverage, often adds personal-injury categories that
                        primary policies exclude, and is generally priced more
                        efficiently per million of limit than the same limit added
                        directly to each primary policy. For households with multiple
                        underlying exposures, the umbrella is typically the better
                        structural answer.
                      </p>
                    </div>
                  </div>
                </section>

                {/* H. Related */}
                <section aria-labelledby="related-heading">
                  <h2 id="related-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Related Coverage Options to Explore Next
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    Umbrella coverage is layered above the household&apos;s underlying
                    program, so it tends to make the most sense alongside a reviewed
                    and properly limited{" "}
                    <Link
                      href="/insurance/auto/regular-coverage"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      regular auto coverage
                    </Link>{" "}
                    and a current{" "}
                    <Link
                      href="/insurance/home/primary-home"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      primary home coverage
                    </Link>{" "}
                    policy. Landlord exposure is handled through{" "}
                    <Link
                      href="/insurance/home/rental-home"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      rental home coverage
                    </Link>
                    , specific catastrophe exposures are addressed through{" "}
                    <Link
                      href="/insurance/other/flood-and-earthquake-coverage"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      flood and earthquake coverage
                    </Link>
                    , and higher-value personal property is protected through{" "}
                    <Link
                      href="/insurance/other/valuable-items-protection"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      valuable items protection
                    </Link>
                    . A coordinated program across these components closes the gaps that
                    appear when a single event reaches more than one part of the
                    household&apos;s insurance structure.
                  </p>
                </section>

                {/* Closing paragraph with primary keyword */}
                <p className="text-base leading-relaxed text-muted-foreground">
                  Arizona households deserve an asset-protection layer that reflects the
                  exposures they actually carry rather than a one-size-fits-all
                  approach. A thoughtful review of{" "}
                  <strong className="text-foreground">umbrella insurance Phoenix AZ</strong>{" "}
                  options, alongside the underlying auto, home, rental, and specialty
                  vehicle policies, examines required underlying limits, appropriate
                  umbrella limits, personal-injury coverage categories, and
                  excess-liability pricing for households across Phoenix, Scottsdale,
                  Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria. When you are
                  ready to move from research to a quoted proposal, work with a licensed
                  Arizona brokerage that will present the terms clearly and respect both
                  your household and your decision timeline.
                </p>
              </article>

              {/* I. CTA */}
              <section
                className="relative mt-14 overflow-hidden rounded-xl bg-brand-navy p-8 text-center text-primary-foreground md:p-12"
                aria-labelledby="cta-heading"
              >
                <BrandNavyStarOverlay />
                <div className="relative mx-auto max-w-2xl">
                  <h2
                    id="cta-heading"
                    className="font-heading text-2xl font-bold md:text-3xl"
                  >
                    Ready to Add a Layer of Protection?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
                    When you are ready to evaluate a personal umbrella policy for your
                    household, Protegrity Insurance Brokerage can translate these
                    concepts into quoted options aligned with your underlying auto,
                    home, and specialty policies and with the asset profile you want to
                    protect. The next step is a structured conversation, not pressure:
                    you set the pace, and we provide the facts you need to decide with
                    confidence.
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
                      GET QUOTE
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
