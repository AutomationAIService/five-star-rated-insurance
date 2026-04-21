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
  title: "Flood Insurance Phoenix AZ | Earthquake Coverage Arizona",
  description:
    "Flood insurance Phoenix AZ: NFIP and private flood plus earthquake coverage for Arizona homeowners in Scottsdale, Mesa, Tempe, Chandler, Gilbert, and Peoria.",
  alternates: {
    canonical: "/insurance/other/flood-and-earthquake-coverage",
  },
  openGraph: {
    title: "Flood and Earthquake Insurance in Phoenix, AZ | Five Star Rated",
    description:
      "Flood and earthquake insurance for Phoenix-area homeowners, serving Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria with NFIP and private-market options.",
    url: `${SITE_URL}/insurance/other/flood-and-earthquake-coverage`,
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
    "Marketing partner connecting Arizona homeowners with flood insurance and earthquake coverage options through both the NFIP and private markets, supported by Protegrity Insurance Brokerage.",
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
  name: "Flood and earthquake insurance in Phoenix, Arizona",
  serviceType: "Flood and earthquake insurance",
  provider: {
    "@type": "InsuranceAgency",
    name: "Five Star Rated Insurance",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "State",
    name: "Arizona",
  },
  url: `${SITE_URL}/insurance/other/flood-and-earthquake-coverage`,
  description:
    "Educational resource on flood insurance and earthquake coverage for Arizona homeowners, including NFIP flood policies, private flood options, earthquake endorsements, and stand-alone earthquake policies across Phoenix, Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.",
}

export default function FloodAndEarthquakePhoenixPage() {
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
              src="https://images.unsplash.com/photo-1756312853497-1af3172ce02f?auto=format&fit=crop&w=2000&q=80"
              alt="Storm clouds gathering over a rugged Arizona desert landscape, flood and earthquake insurance Phoenix AZ coverage for Arizona homeowners"
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
                Flood and Earthquake Insurance in Phoenix, AZ
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
                Standard homeowners policies exclude flood and most earth-movement
                damage, so homeowners who want protection from those perils place
                separate coverage designed for them.{" "}
                <strong className="font-semibold text-primary-foreground">
                  Flood insurance Phoenix AZ
                </strong>{" "}
                and earthquake coverage are built as their own structures for
                homeowners in Phoenix, Scottsdale, Mesa, Tempe, Chandler, Glendale,
                Gilbert, and Peoria who want a deliberate answer to monsoon flooding
                and Arizona fault activity rather than a coverage gap.
              </p>
            </div>
          </section>

          <div className="bg-background">
            <div className="container mx-auto max-w-4xl px-4 py-14 md:py-20">
              <article className="prose prose-slate max-w-none space-y-12 text-foreground">
                {/* B. Overview */}
                <section aria-labelledby="overview-heading">
                  <h2 id="overview-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Overview: What Flood and Earthquake Coverage Mean in Arizona
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Flood and earthquake losses are excluded from nearly every
                      standard homeowners policy in the United States, including
                      policies written for homes in Phoenix, Scottsdale, Mesa, Tempe,
                      Chandler, Glendale, Gilbert, and Peoria. The exclusions are
                      structural rather than accidental: the two perils produce
                      catastrophic, correlated losses that standard homeowners forms are
                      not priced or reserved to absorb. Homeowners who want protection
                      from those perils place it on a dedicated flood policy, an
                      earthquake endorsement, or a stand-alone earthquake policy.
                    </p>
                    <p>
                      Flood insurance is most commonly placed through the National
                      Flood Insurance Program (NFIP), a federally-backed program
                      administered by FEMA that writes flood policies in participating
                      communities across the country. Private flood insurance markets
                      also write coverage in Arizona and often offer higher limits,
                      broader terms, and faster underwriting than NFIP. Private flood
                      insurance Arizona options are particularly useful for higher-value
                      homes where NFIP limits are too low to replace the structure and
                      contents.
                    </p>
                    <p>
                      Earthquake coverage in Arizona is typically added as an
                      endorsement on the homeowners policy or purchased as a stand-
                      alone earthquake policy. The endorsement approach keeps the
                      coverage integrated with the existing homeowners program, and the
                      stand-alone approach is used when the homeowners carrier does not
                      offer an endorsement or when a stand-alone policy offers better
                      terms. Arizona earthquake endorsements are available through
                      several carriers, and deductibles on the coverage are generally
                      percentage-based rather than flat-dollar, which is a structural
                      difference from standard homeowners perils.
                    </p>
                    <p>
                      Common misconceptions shape how many Arizona homeowners think
                      about these two coverages. The first is that Phoenix does not
                      flood; the reality is that monsoon-driven flash floods, wash
                      overflow, urban drainage failures, and saturated-ground events
                      cause meaningful flood losses in the Valley every year, and many
                      of those losses occur outside FEMA-designated high-risk flood
                      zones. The second misconception is that Arizona has no
                      earthquakes; Arizona has several documented active fault systems,
                      a lower frequency of significant events than California, and a
                      nonzero long-term exposure that homeowners routinely underweight.
                      The third misconception is that only high-risk zone homeowners
                      should carry the coverage; in practice, the majority of NFIP flood
                      claims nationwide are paid on properties outside the highest-risk
                      zones.
                    </p>
                    <p>
                      Flood insurance Phoenix AZ and earthquake coverage are accessible
                      and, for most Phoenix homeowners, priced reasonably relative to
                      the size of the exposure. Flood zone Phoenix designations, flood-
                      map changes, and fault-system research inform the conversation,
                      but the practical question is simple: if a flood or earthquake
                      produced a total loss of the residence, would the household
                      prefer a policy to respond or absorb the loss without one. The
                      answer is a household decision that a licensed broker can support
                      with quoted numbers rather than generalities.
                    </p>
                  </div>
                </section>

                {/* C. What's covered */}
                <section aria-labelledby="covered-heading">
                  <h2 id="covered-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    What&apos;s Covered: Flood and Earthquake Insurance Building Blocks
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    Flood and earthquake policies address specific perils excluded from
                    the standard homeowners form, and each one has its own structure,
                    limits, and deductibles. Reviewing the major components makes it
                    easier to understand what the coverage actually does, where the
                    programs differ from standard policies, and how to place the right
                    combination for a specific Arizona property.
                  </p>

                  <div className="mt-8 space-y-8">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        NFIP Flood Insurance (Federal Program)
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        NFIP flood insurance Phoenix policies are written through the
                        federally-backed National Flood Insurance Program and provide
                        up to $250,000 of building coverage and up to $100,000 of
                        contents coverage on a residential policy. NFIP terms are
                        standardized across participating communities, and pricing
                        reflects flood-zone classification, property characteristics,
                        and program rating factors. NFIP policies typically carry a
                        30-day waiting period from application to effective date for
                        most new policies, which is why flood placement is best handled
                        well before a storm event rather than during one.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Private Flood Insurance
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Private flood insurance Arizona markets have expanded in recent
                        years and offer higher limits, broader terms, and faster
                        binding than the NFIP in many cases. Privately-written flood
                        policies can provide coverage above the NFIP building and
                        contents caps, optional additions such as loss-of-use and
                        replacement-cost contents, and, in some cases, shorter waiting
                        periods than NFIP. The underwriting appetite varies by carrier,
                        and not every property qualifies for private-market coverage,
                        so the first step is a quote comparison across NFIP and
                        eligible private options.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Flood Insurance Building Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Flood-policy building coverage pays for physical damage to the
                        insured structure caused by flood, subject to the selected
                        building limit and policy deductible. Covered components
                        typically include the foundation, electrical and plumbing
                        systems, installed carpeting, built-in appliances, and similar
                        structural elements. Building coverage on NFIP policies is
                        generally settled on an actual-cash-value basis for non-primary
                        residences and on a replacement-cost basis for owner-occupied
                        primary homes, and the policy form specifies the exact
                        settlement basis.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Flood Insurance Contents Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Flood-policy contents coverage pays for damage to personal
                        property caused by flood, subject to the selected contents
                        limit and a separate contents deductible. Contents coverage is
                        elected independently from building coverage on NFIP policies,
                        which means a renter can purchase contents-only flood coverage
                        without building coverage, and a landlord can purchase building-
                        only coverage on a rental property. Limits on basement and
                        below-ground-level contents are narrower than limits on main-
                        level contents, so property profile matters when setting the
                        contents amount.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Earthquake Endorsements on Homeowners Policies
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Arizona earthquake endorsements extend the homeowners policy to
                        cover direct physical loss caused by earthquake, subject to a
                        percentage-based deductible that is typically 10, 15, 20, or 25
                        percent of the dwelling limit. The endorsement sits on the
                        existing homeowners policy and renews with it, which keeps the
                        coverage integrated with the household&apos;s primary program.
                        Exclusions on the endorsement commonly include flood (covered
                        separately by a flood policy), landslide, settling, sinkhole,
                        and other categories of earth movement that are not
                        earthquake-driven.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Stand-Alone Earthquake Policies
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        When the homeowners carrier does not offer an earthquake
                        endorsement, or when a stand-alone product offers better terms,
                        earthquake coverage can be placed on a separate policy that
                        dedicates its limits and deductibles specifically to
                        earthquake loss. Stand-alone policies are typically written by
                        specialty carriers, and the underwriting is shaped by property
                        construction, foundation type, roof age, and distance to known
                        fault systems. For higher-value homes and for homeowners who
                        want specific earthquake features, a stand-alone policy can be
                        the right structure.
                      </p>
                    </div>
                  </div>
                </section>

                {/* D. Who needs */}
                <section aria-labelledby="who-needs-heading">
                  <h2 id="who-needs-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Who Needs Flood and Earthquake Coverage in the Phoenix Area?
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Homeowners with properties in or near FEMA-designated flood zones
                      (Zone A, Zone AE, and similar high-risk classifications) are the
                      primary audience for flood insurance, and lenders typically
                      require flood coverage as a condition of the mortgage on a home
                      in a designated high-risk flood zone. Properties near washes,
                      drainage channels, and storm-water paths across the Valley carry
                      real monsoon-flood exposure even when the property sits technically
                      outside a designated high-risk zone, and homeowners on those
                      properties often place flood coverage voluntarily once they
                      understand the profile.
                    </p>
                    <p>
                      Homes in low-lying areas of Mesa, Chandler, northern Peoria, and
                      similar neighborhoods with documented drainage concerns face
                      monsoon flood insurance Arizona exposure that is independent of
                      mortgage-required flood zones. New construction in areas where
                      flood maps have been updated or are expected to update can also
                      justify flood coverage, because the map in effect at the time of
                      placement may not reflect the actual exposure on the ground.
                      Homeowners with mortgages on properties in designated flood zones
                      generally must carry flood insurance while the loan is
                      outstanding, and the policy is typically placed as part of the
                      closing process.
                    </p>
                    <p>
                      On the earthquake side, higher-value Phoenix homes where a
                      significant event would produce a financially meaningful loss are
                      the clearest audience for earthquake coverage. Homeowners with
                      underground infrastructure vulnerable to earth movement,
                      including pools, pool equipment, foundation systems, and
                      underground pipes, face specific exposure that an earthquake
                      endorsement or stand-alone policy is designed to address.
                      Landlords and rental property owners concerned about tenant
                      displacement during a disaster also weigh earthquake coverage
                      because the operational impact of a rental property becoming
                      uninhabitable after an event is meaningful.
                    </p>
                    <p>
                      Arizona flood insurance quotes and Phoenix earthquake coverage
                      quotes reflect a Valley profile that includes monsoon-driven
                      flash flooding, wash-adjacent properties in every major
                      municipality, and several active fault systems in the state. The
                      underinsured-population reality is that most Valley homeowners
                      currently carry neither flood nor earthquake coverage, which is
                      usually a decision the homeowner did not actively make but rather
                      inherited from the default structure of the standard homeowners
                      policy. A reviewed quote at least makes the decision explicit
                      rather than implicit.
                    </p>
                  </div>
                </section>

                {/* E. Considerations */}
                <section aria-labelledby="az-considerations-heading">
                  <h2
                    id="az-considerations-heading"
                    className="font-heading text-2xl font-bold md:text-3xl"
                  >
                    Arizona Flood and Earthquake Insurance Considerations
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      FEMA flood-zone designations shape flood insurance pricing and
                      the mortgage-lender requirement. Zone A and Zone AE are high-risk
                      designations where flood insurance is typically required by
                      lenders, Zone X is a lower-risk designation where flood insurance
                      is generally optional, and additional classifications exist for
                      coastal areas and specific flood profiles. Flood maps are updated
                      periodically, and a property outside a high-risk designation can
                      still flood because flood maps describe modeled probability
                      rather than absolute risk. Phoenix-area flood history includes
                      significant losses on properties that were not in a designated
                      high-risk zone at the time of the event.
                    </p>
                    <p>
                      The 30-day waiting period for most new NFIP flood policies is a
                      structural feature of the program and means flood coverage cannot
                      be placed on an emergency basis when a storm is already visible
                      on the forecast. Certain exceptions apply (for example, flood
                      coverage added in connection with a new mortgage closing or
                      after a flood-map change), and private flood insurance Arizona
                      markets sometimes offer shorter waiting periods that can be
                      useful for property owners who want faster binding. The practical
                      point is that flood coverage is best placed well before monsoon
                      season rather than during it.
                    </p>
                    <p>
                      Private flood insurance advantages extend beyond waiting-period
                      differences. Private carriers often write higher limits than the
                      NFIP caps of $250,000 building and $100,000 contents, offer
                      optional additions such as loss-of-use and replacement-cost
                      contents, and sometimes include coverage for features (for
                      example, outbuildings, swimming pools in specific circumstances,
                      or certain basement contents) that NFIP handles narrowly. Flood
                      insurance coverage structure separates building and contents
                      coverage, each with its own limit and deductible, and homeowners
                      elect each independently based on the exposure.
                    </p>
                    <p>
                      Earthquake insurance deductibles are higher than most homeowners
                      are used to because they are percentage-based rather than flat-
                      dollar. A 10 percent deductible on a $500,000 dwelling limit is
                      $50,000, which reflects the reality that earthquake losses are
                      typically either minor (handled by the homeowner) or severe
                      (handled by the policy with a substantial deductible absorbed
                      first). Arizona&apos;s active fault zones include the Hurricane
                      Fault, structures associated with the Wasatch Fault system at
                      northern Utah proximity, and fault systems across northern
                      Arizona, and the relative risk varies by property location and
                      construction type.
                    </p>
                    <p>
                      The difference between covered earth movement (earthquakes) and
                      excluded earth movement (landslides, settling, and sinkholes in
                      some cases) matters because earthquake endorsements and stand-
                      alone earthquake policies typically cover only earthquake-driven
                      earth movement. A loss that is caused by gradual settling or a
                      landslide independent of an earthquake is usually outside both
                      the earthquake form and the standard homeowners form. Evaluating
                      whether flood or earthquake coverage is worth the premium for a
                      specific property is a straightforward exercise: compare the
                      annual premium against the probable dollar impact of a
                      significant event on the property, then place the coverage that
                      makes that comparison favorable. Coordination with the primary
                      homeowners policy and an annual review (as flood maps update,
                      fault research evolves, and property values change) keeps the
                      program aligned with the property&apos;s actual exposure.
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
                        partner of Protegrity Insurance Brokerage, so Arizona homeowners
                        work with licensed professionals who actually understand flood
                        and earthquake markets rather than generalists who treat both
                        coverages as afterthoughts. Our team reviews FEMA flood-zone
                        designations, property elevation and drainage characteristics,
                        dwelling limits, construction type, and fault-proximity factors
                        against the specific Phoenix-area property, and translates that
                        review into accurate submissions carriers can quote efficiently.
                      </p>
                      <p>
                        We maintain access to both NFIP and private flood markets for
                        competitive flood quoting, which matters because pricing,
                        waiting periods, limits, and optional coverages vary between
                        the federal program and the growing private market. Arizona
                        flood insurance quotes depend on flood zone, elevation,
                        property type, building and contents limits, and deductibles,
                        and comparing NFIP against eligible private-market options is
                        how homeowners identify the right combination of limit and
                        premium.
                      </p>
                      <p>
                        We serve homeowners across Phoenix, Scottsdale, Mesa, Tempe,
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
                    Frequently Asked Questions About Flood and Earthquake Insurance
                  </h2>

                  <div className="mt-8 space-y-10">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does my Phoenix homeowners insurance cover flood damage?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Standard homeowners policies exclude flood damage, including
                        damage caused by rising water, surface-water runoff, wash
                        overflow, storm-surge-style events, and groundwater intrusion.
                        The exclusion applies regardless of how the flood originated
                        and covers virtually every category of flood loss that matters
                        in the Phoenix area. Flood coverage must be placed on a
                        separate flood insurance policy through the NFIP or a private
                        flood carrier, and a licensed broker confirms the specific
                        carrier, coverage, and pricing options available for the
                        property.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Do I need flood insurance if I&apos;m not in a high-risk flood zone?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Flood insurance is worth considering even for properties
                        outside designated high-risk flood zones because a substantial
                        share of NFIP flood claims nationwide are paid on properties in
                        lower-risk classifications. Monsoon-driven flash flooding, wash
                        overflow, and urban drainage failures affect Phoenix-area
                        properties independently of FEMA zone classification, and
                        coverage on a lower-risk property is generally priced lower
                        than coverage on a high-risk property. Placing a quoted flood
                        policy is the cleanest way to decide whether the premium is
                        worth the protection given the property&apos;s actual exposure.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How much does flood insurance cost in Phoenix?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Flood insurance premium varies significantly by property and
                        depends on flood-zone designation, elevation, property type,
                        building and contents limits, selected deductibles, and
                        foundation characteristics. Properties in lower-risk zones can
                        be written at more modest premium levels, and high-risk zone
                        properties carry higher premium that reflects the elevated
                        exposure. A written quote on both NFIP and eligible private-
                        market options produces a precise answer for a specific
                        property, and Arizona flood insurance quotes are straightforward
                        for a licensed broker to run.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is the difference between NFIP flood insurance and private flood insurance?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        NFIP flood insurance is a federally-backed program with
                        standardized terms and limits of $250,000 building and
                        $100,000 contents on residential policies. Private flood
                        insurance is written by private carriers and often offers
                        higher limits, broader terms, faster binding, and optional
                        features such as loss-of-use and replacement-cost contents that
                        NFIP handles narrowly. Underwriting appetite varies by carrier,
                        and the cleanest approach is to quote both options for the
                        specific property and compare the programs side by side.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does Arizona have earthquakes and do I need earthquake insurance?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Arizona has several documented active fault systems and a
                        recorded history of earthquake activity, including events in
                        northern Arizona and along fault systems that extend into the
                        state from neighboring regions. The frequency of significant
                        events is lower than in California, but the exposure is not
                        zero, and the practical question is whether the homeowner wants
                        the residence protected against an event that is possible but
                        not expected in any given year. Higher-value homes, homes with
                        underground infrastructure, and homeowners who want a complete
                        program often place earthquake coverage even at relatively
                        modest Arizona event-frequency numbers.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How does earthquake insurance deductible work?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Earthquake insurance deductibles are typically percentage-based
                        and set at 10, 15, 20, or 25 percent of the dwelling limit,
                        rather than a flat-dollar amount. A 10 percent deductible on a
                        $500,000 dwelling limit is $50,000, which reflects the reality
                        that earthquake losses are generally either minor (absorbed by
                        the homeowner) or severe (handled by the policy with a
                        substantial deductible absorbed first). Homeowners choose the
                        deductible based on the trade-off between premium and the
                        out-of-pocket amount they are comfortable accepting in a
                        significant event.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How long does it take for a new flood insurance policy to take effect?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Most new NFIP flood insurance policies carry a 30-day waiting
                        period from application to effective date, which means coverage
                        placed today typically does not respond to a storm that arrives
                        within the next month. Certain exceptions apply, including
                        policies placed in connection with a new mortgage closing and
                        policies added after a flood-map change that places the
                        property in a higher-risk zone. Private flood insurance Arizona
                        options sometimes offer shorter waiting periods, which is one
                        reason to compare NFIP and private markets when time sensitivity
                        matters.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Are monsoon-related flash floods covered by flood insurance?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Yes, flash-flood events caused by monsoon rainfall are covered
                        under both NFIP and private flood insurance policies when the
                        water meets the policy definition of a flood, which generally
                        requires inundation of normally dry land from surface-water
                        flow, overflow of inland or tidal waters, or rapid accumulation
                        of runoff. Monsoon flash floods in Phoenix commonly fit that
                        definition, and the flood policy responds subject to the
                        building and contents limits, deductibles, and specific terms
                        of the policy. Seasonal timing matters because the policy must
                        already be in force at the time of the loss.
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
                    Flood and earthquake coverage work alongside the household&apos;s
                    primary homeowners program, so reviewing them typically makes the
                    most sense with a current{" "}
                    <Link
                      href="/insurance/home/primary-home"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      primary home coverage
                    </Link>{" "}
                    policy in place. Households with secondary or vacation residences
                    place{" "}
                    <Link
                      href="/insurance/home/seasonal-home"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      seasonal home coverage
                    </Link>
                    , landlords address tenant-occupied properties through{" "}
                    <Link
                      href="/insurance/home/rental-home"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      rental home coverage
                    </Link>
                    , asset-protection strategies extend through{" "}
                    <Link
                      href="/insurance/other/umbrella-insurance"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      umbrella insurance
                    </Link>
                    , and higher-value personal property is handled through{" "}
                    <Link
                      href="/insurance/other/valuable-items-protection"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      valuable items protection
                    </Link>
                    . A coordinated program across these components closes the gaps
                    that appear when a single event affects more than one part of the
                    household&apos;s insurance structure.
                  </p>
                </section>

                {/* Closing paragraph with primary keyword */}
                <p className="text-base leading-relaxed text-muted-foreground">
                  Arizona homeowners deserve a deliberate answer to flood and
                  earthquake exposure rather than an inherited gap in the standard
                  homeowners form. A thoughtful review of{" "}
                  <strong className="text-foreground">flood insurance Phoenix AZ</strong>{" "}
                  options and Arizona earthquake endorsement or stand-alone policy
                  choices examines flood-zone designation, NFIP and private-market
                  programs, earthquake deductible structures, and coordination with
                  the underlying homeowners policy for households across Phoenix,
                  Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.
                  When you are ready to move from research to a quoted proposal, work
                  with a licensed Arizona brokerage that will present the terms clearly
                  and respect both your property and your decision timeline.
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
                    Ready to Cover the Perils Your Homeowners Policy Doesn&apos;t?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
                    When you are ready to evaluate flood and earthquake coverage for
                    your property, Protegrity Insurance Brokerage can translate these
                    concepts into quoted options across NFIP, private flood markets,
                    and earthquake endorsement or stand-alone programs aligned with the
                    specific property. The next step is a structured conversation, not
                    pressure: you set the pace, and we provide the facts you need to
                    decide with confidence.
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
