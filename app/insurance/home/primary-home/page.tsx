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
  title: "Primary Home Insurance Phoenix AZ | Five Star Rated",
  description:
    "Primary home insurance Phoenix AZ: HO-3 homeowners coverage, Arizona quotes, monsoon and dwelling protection across Scottsdale, Mesa, Tempe, and Gilbert.",
  alternates: {
    canonical: "/insurance/home/primary-home",
  },
  openGraph: {
    title: "Primary Home Insurance in Phoenix, AZ | Five Star Rated",
    description:
      "HO-3 homeowners coverage for Phoenix and the Valley: dwelling, personal property, and liability across Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.",
    url: `${SITE_URL}/insurance/home/primary-home`,
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
    "Marketing partner connecting Arizona homeowners with Phoenix home insurance options and licensed support through Protegrity Insurance Brokerage.",
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
  name: "Primary home insurance in Phoenix, Arizona",
  serviceType: "Homeowners insurance",
  provider: {
    "@type": "InsuranceAgency",
    name: "Five Star Rated Insurance",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "State",
    name: "Arizona",
  },
  url: `${SITE_URL}/insurance/home/primary-home`,
  description:
    "Educational resource on Arizona homeowners coverage for dwelling, personal property, liability, and Phoenix-area perils across Maricopa County.",
}

export default function PrimaryHomeInsurancePhoenixPage() {
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
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
              alt="Southwestern stucco home with tile roof in Phoenix, primary home insurance Phoenix AZ homeowners coverage for Arizona families"
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
                Primary Home Insurance Coverage in Phoenix, AZ
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
                A well-built homeowners policy protects the place where your family lives, sleeps,
                and stores the assets you have worked to acquire. For Valley households,{" "}
                <strong className="font-semibold text-primary-foreground">
                  primary home insurance Phoenix AZ
                </strong>{" "}
                coverage combines dwelling protection, personal property limits, and personal
                liability into a single structured policy that serves homeowners across Phoenix,
                Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.
              </p>
            </div>
          </section>

          <div className="bg-background">
            <div className="container mx-auto max-w-4xl px-4 py-14 md:py-20">
              <article className="prose prose-slate max-w-none space-y-12 text-foreground">
                {/* B. Overview */}
                <section aria-labelledby="overview-heading">
                  <h2 id="overview-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Overview: What Primary Home Insurance Means in Phoenix
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      In common usage, &quot;primary home insurance&quot; refers to the standard
                      homeowners policy that covers the residence you occupy as your main dwelling.
                      In Arizona, that policy is most often written on an HO-3 form, which insures
                      the structure on an open-peril basis and personal property on a named-peril
                      basis, subject to the exclusions and conditions in your contract. The HO-3
                      form remains the workhorse of residential coverage for homeowners in Phoenix,
                      Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria because it
                      balances broad structural protection with defined personal property limits.
                    </p>
                    <p>
                      A primary home policy is organized around several coverage parts that share a
                      single declarations page. Coverage A protects the dwelling, Coverage B
                      addresses other structures on the property, Coverage C insures personal
                      belongings, Coverage D responds when the home is temporarily uninhabitable,
                      Coverage E provides personal liability, and Coverage F funds medical payments
                      to guests injured on your premises. Each coverage interacts with the others
                      at claim time, which is why we review them together rather than in isolation.
                    </p>
                    <p>
                      Valley homes face a combination of perils that a thoughtful policy should
                      reflect. Monsoon season delivers microbursts, hail, and wind-driven debris
                      from July through September, and dust storms can abrade exterior finishes,
                      HVAC condensers, and landscaping. Year-round heat stresses roofing, sealants,
                      and plumbing, while theft and property damage claims follow typical urban
                      patterns across Phoenix and the surrounding cities. A sound policy does not
                      prevent these events, but it organizes how the financial consequences are
                      handled after a loss.
                    </p>
                    <p>
                      The single most important underwriting decision on a homeowners policy is the
                      dwelling valuation. Coverage A should reflect the cost to rebuild your home
                      using current local labor and materials, not the price you paid, the Zillow
                      estimate, or the county assessor&apos;s valuation. Rebuilding costs across
                      the Valley have moved meaningfully over the past several years as framing,
                      roofing, stucco, and electrical pricing has shifted, which is why licensed
                      agents revisit Coverage A at each renewal rather than setting it once and
                      forgetting it.
                    </p>
                    <p>
                      Claim settlements typically occur on one of two bases. Replacement cost pays
                      to repair or replace damaged property with materials of like kind and
                      quality, without deducting for depreciation, subject to your limit and any
                      endorsement-specific conditions. Actual cash value pays the replacement cost
                      minus depreciation, which can leave a meaningful gap between your payment and
                      the out-of-pocket cost of actually rebuilding or replacing a damaged item.
                      Most carriers default dwelling coverage to replacement cost, but personal
                      property may settle as ACV unless you add a replacement-cost contents
                      endorsement, and roofs are increasingly subject to specific ACV or scheduled
                      settlement provisions depending on age and carrier.
                    </p>
                    <p>
                      A primary home policy can be tailored to the wide range of Valley housing.
                      Newer master-planned homes in Gilbert, Chandler, and Peoria, established
                      ranch-style properties in central Phoenix and Scottsdale, and larger estates
                      with guest houses and casitas each call for slightly different coverage
                      choices. Dwelling limits, deductibles, and endorsements should reflect the
                      home you actually own, the risks you are willing to retain, and the financial
                      obligations tied to any mortgage on the property.
                    </p>
                    <p>
                      The sections that follow explain each major coverage part in plain language
                      and outline the conversations most homeowners benefit from having with a
                      licensed representative. They supplement, rather than replace, your specific
                      policy contract, declarations page, and state-approved endorsements, and they
                      are written to support a structured quoting conversation, not to answer every
                      individual coverage question you may have.
                    </p>
                  </div>
                </section>

                {/* C. What's covered */}
                <section aria-labelledby="covered-heading">
                  <h2 id="covered-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    What&apos;s Covered: Primary Home Insurance Building Blocks
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    A homeowners policy bundles several coverage categories under a single
                    contract, each with its own limit, deductible rules, and claim treatment.
                    Dwelling coverage protects the structure itself, other structures coverage
                    extends to detached improvements, personal property coverage insures your
                    belongings, loss of use coverage supports you when the home becomes
                    uninhabitable, and liability and medical payments coverages address harm to
                    others. Understanding how these pieces fit together makes it easier to
                    right-size limits across Phoenix, Scottsdale, Mesa, Tempe, Chandler, Glendale,
                    Gilbert, and Peoria rather than relying on a single default recommendation.
                  </p>

                  <div className="mt-8 space-y-8">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Dwelling Coverage (Coverage A)
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Dwelling coverage applies to the physical structure of your home, including
                        the foundation, framing, roof, interior finishes, built-in cabinetry,
                        plumbing, electrical, and attached structures such as an attached garage or
                        covered patio. Coverage A is expressed as a dollar limit on your
                        declarations page, and it should reflect current replacement cost in the
                        local market rather than market value, purchase price, or tax assessment.
                        Under an HO-3 form, the dwelling is typically insured on an open-peril
                        basis, which means covered losses include any cause of loss not
                        specifically excluded, subject to policy conditions. A licensed Arizona
                        agent can review your square footage, construction type, roofing material,
                        and finish level to help you select a limit that withstands a total loss
                        rather than a partial one.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Other Structures Coverage (Coverage B)
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Other structures coverage extends to improvements on your property that are
                        not attached to the main dwelling. Detached garages, storage sheds, guest
                        casitas, perimeter walls, pool cages, gazebos, and freestanding pergolas
                        commonly fall into this category. Coverage B is usually set as a percentage
                        of Coverage A, often around ten percent, although that default may not
                        reflect the true value of detached structures on larger Scottsdale or North
                        Phoenix properties. When you own a substantial casita, a detached workshop,
                        or extensive perimeter walls, ask your broker to confirm that Coverage B is
                        sized to rebuild the actual structures on the lot, not just whatever the
                        standard percentage produces.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Personal Property Coverage (Coverage C)
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Personal property coverage insures the contents of your home, including
                        furniture, clothing, electronics, appliances that are not built in, and
                        other belongings you own or use. Coverage C is typically set as a
                        percentage of Coverage A, often between fifty and seventy percent depending
                        on carrier and form, and it usually responds on a named-peril basis unless
                        you add broader endorsements. Certain categories of property such as
                        jewelry, firearms, fine art, collectibles, and cash carry internal
                        sublimits that may not reflect what you actually own, which is why
                        scheduled personal property or valuable items endorsements exist.
                        Homeowners in Paradise Valley, Arcadia, and other higher-value
                        neighborhoods frequently review scheduled items alongside their Coverage C
                        limit.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Loss of Use Coverage (Coverage D)
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Loss of use coverage, also called additional living expense, responds when
                        a covered loss makes your home temporarily uninhabitable. It can help pay
                        for reasonable increases in living expenses, including temporary rental
                        housing, meals beyond your normal grocery budget, laundry, boarding for
                        pets, and other costs required to maintain your household while the home is
                        being repaired. Coverage D is usually expressed as a percentage of Coverage
                        A and may be subject to a time limit. After a serious monsoon event or
                        kitchen fire in Mesa, Tempe, or Chandler, this coverage is often the
                        difference between an orderly displacement and a financial strain, because
                        Phoenix-area short-term rental and hotel pricing can move quickly during
                        peak travel seasons.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Personal Liability Coverage (Coverage E)
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Personal liability coverage responds when you or a covered household member
                        is legally responsible for bodily injury or property damage to others,
                        subject to the limit and exclusions in your policy. It applies to many
                        everyday situations, not just injuries on your property, and it generally
                        includes defense costs in covered suits. Common Valley liability exposures
                        include pool-related injuries, dog bites, trip-and-fall incidents on uneven
                        pavers or desert landscaping, and damage caused by household members while
                        away from the home. Liability limits commonly range from the default to
                        several hundred thousand dollars, and households with higher asset profiles
                        frequently pair Coverage E with a separate personal umbrella policy to
                        reach meaningful excess limits.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Medical Payments to Others (Coverage F)
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Medical payments coverage reimburses reasonable medical expenses incurred
                        by a guest who is injured on your premises, or by certain persons injured
                        off your premises in specified circumstances, without requiring proof of
                        negligence. The limit is typically modest, often one thousand to five
                        thousand dollars per person, and it is designed to handle smaller injury
                        claims quickly without the friction of a formal liability proceeding. For
                        homeowners who regularly host family gatherings, birthday parties, or
                        neighborhood events in Gilbert, Peoria, or Glendale, this coverage can
                        address minor medical costs from a slip on a pool deck or an unexpected
                        fall before those situations escalate. Coverage F is not intended to
                        replace personal liability coverage for serious injuries, which remain the
                        domain of Coverage E and any umbrella policy you maintain.
                      </p>
                    </div>
                  </div>
                </section>

                {/* D. Who needs */}
                <section aria-labelledby="who-needs-heading">
                  <h2 id="who-needs-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Who Needs Primary Home Coverage in the Phoenix Area?
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      First-time homebuyers across the Valley almost always need a primary home
                      policy before they can close, because mortgage lenders require evidence of
                      hazard insurance at an adequate dwelling limit as a condition of funding.
                      Buyers moving into new developments in Gilbert, Chandler, and Peoria benefit
                      from reviewing coverage while the construction details are fresh, including
                      upgraded finishes, solar systems, and pool packages, so the initial policy
                      reflects the home you actually close on rather than a builder base plan.
                      Long-term homeowners in established Phoenix and Scottsdale neighborhoods have
                      a different set of concerns, because dwelling valuations, roof conditions,
                      and personal property inventories tend to drift over time if the policy is
                      not reviewed annually.
                    </p>
                    <p>
                      Multi-generational households that are increasingly common across Mesa,
                      Tempe, and Glendale introduce additional coverage considerations. When adult
                      children, parents, or extended family members live under one roof, personal
                      property limits and liability exposures expand, and household composition can
                      affect eligibility for certain policy provisions. Accurate disclosure of who
                      lives in the home, which vehicles are garaged on the property, and how
                      detached structures are used keeps the underwriting file aligned with
                      reality.
                    </p>
                    <p>
                      Mortgage-holders have a specific reason to carry a sound primary home policy
                      beyond protecting their own balance sheet. Lenders require evidence of
                      coverage throughout the life of the loan, and a lapse can trigger
                      force-placed insurance at significantly higher cost with narrower protection.
                      Homeowners with pools, desert landscaping, casitas, or gated community
                      obligations should discuss liability limits, pool safety requirements, and
                      any applicable HOA coverage coordination with a licensed agent rather than
                      assuming default limits address every Valley-specific exposure.
                    </p>
                  </div>
                </section>

                {/* E. Arizona requirements */}
                <section aria-labelledby="arizona-req-heading">
                  <h2 id="arizona-req-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Arizona Homeowners Insurance Considerations
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Arizona does not impose a statutory requirement to carry homeowners insurance
                      the way it requires auto liability, but mortgage lenders do, and the real
                      financial exposure of owning a Valley home makes coverage a practical
                      necessity regardless of loan status. The perils that drive local claim
                      activity include monsoon hail, microburst wind, wind-driven debris, dust
                      storm abrasion, and occasional wildfire risk in outlying areas such as the
                      Superstition corridor east of Mesa or brush-adjacent neighborhoods in North
                      Scottsdale. Standard HO-3 policies respond to these perils subject to
                      exclusions and deductibles, and many Arizona carriers apply separate or
                      percentage-based wind and hail deductibles that deserve attention before you
                      bind coverage.
                    </p>
                    <p>
                      Flood damage is a common point of confusion for Phoenix homeowners. Standard
                      homeowners policies typically exclude flood, which is defined as surface
                      water entering the dwelling from outside, including flash flooding along
                      Valley washes and in low-lying portions of Mesa, Chandler, and northern
                      Peoria. Flood coverage is generally purchased as a separate policy through
                      the National Flood Insurance Program or a private flood market. Interior
                      water damage from a burst supply line or a sudden plumbing leak usually falls
                      under the homeowners policy, but water backup from drains and sewers is often
                      a distinct endorsement. Clarifying which water losses are covered and which
                      are not avoids unpleasant surprises at claim time.
                    </p>
                    <p>
                      Earthquake coverage is another endorsement most standard policies exclude.
                      Arizona has several fault systems, although the day-to-day risk is modest
                      compared with California. Homeowners who want coverage for earth movement can
                      generally add an earthquake endorsement or a separate earthquake policy,
                      often with its own deductible structure. Your licensed broker can explain the
                      cost and scope so you can make an informed decision rather than defaulting in
                      either direction.
                    </p>
                    <p>
                      Valley-specific concerns extend beyond named perils. Pool liability, diving
                      board and slide exclusions, trampoline restrictions, and certain dog breed
                      limitations influence underwriting and premium. Guest houses and casitas that
                      generate rental income may require endorsement or a separate policy form.
                      Rooftop solar systems, increasingly common across Phoenix, Gilbert, and
                      Chandler, raise questions about whether the panels are included under
                      Coverage A or require separate treatment, especially when they are leased
                      rather than owned. Annual policy reviews are the practical way to keep
                      dwelling limits, endorsements, and scheduled items aligned as home values,
                      renovations, and household composition evolve.
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
                        Five Star Rated Insurance operates as an authorized marketing partner of
                        Protegrity Insurance Brokerage, so you work with licensed Arizona
                        professionals who place coverage with carriers using state-approved forms
                        and honest eligibility standards. We combine national carrier access with
                        attention to local realities, from monsoon-related dwelling claims to pool
                        and solar considerations, rather than treating every household like a
                        generic national profile.
                      </p>
                      <p>
                        Our team serves homeowners across Phoenix, Scottsdale, Mesa, Tempe,
                        Chandler, Glendale, Gilbert, Peoria, and surrounding communities with the
                        same measured guidance if you begin online or speak with a representative
                        by phone. We explain coverage in plain language, document our
                        recommendations, and leave room for you to ask questions before you commit
                        to anything.
                      </p>
                      <p>
                        The 5.0-star service reputation we hold reflects consistent follow-through
                        and respectful communication, not hype. When you are ready to move from
                        education to quoting, Protegrity-supported processes keep required
                        disclosures visible and your questions answered so you can decide with
                        confidence about how to protect the home your family relies on.
                      </p>
                    </div>
                  </div>
                </section>

                {/* G. FAQ */}
                <section aria-labelledby="faq-heading">
                  <h2 id="faq-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Frequently Asked Questions About Phoenix Home Insurance
                  </h2>

                  <div className="mt-8 space-y-10">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How much home insurance do I need in Phoenix?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        The right amount of coverage starts with an accurate dwelling valuation
                        that reflects the local cost to rebuild your specific home, including
                        framing, roofing, stucco, interior finishes, and any upgraded features such
                        as custom cabinetry or solar. From there, personal property limits should
                        mirror what you actually own, and liability limits should reflect your
                        assets and income. Phoenix homeowners quotes that look inexpensive
                        sometimes rest on thin dwelling limits or low liability; a structured
                        review with a licensed agent clarifies whether the premium you are seeing
                        reflects meaningful protection or cost-cutting that may hurt you at claim
                        time.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What does primary home insurance typically cover in Arizona?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        A standard Arizona homeowners policy, most commonly an HO-3, covers the
                        dwelling, other structures on the property, personal property, loss of use,
                        personal liability, and medical payments to others, each subject to the
                        limits, deductibles, and exclusions in your contract. Covered perils
                        typically include fire, lightning, windstorm, hail, certain types of water
                        damage from plumbing, theft, and other perils listed in the policy form.
                        Standard exclusions usually include flood, earth movement, routine
                        maintenance issues, and certain high-value items that may require
                        scheduled endorsements.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does homeowners insurance cover monsoon damage in Phoenix?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Wind, hail, and wind-driven debris from monsoon storms are generally
                        covered perils under a standard HO-3 policy, subject to your deductible and
                        any separate wind and hail deductible the carrier applies. Roof damage,
                        broken windows, and interior water intrusion caused by wind-driven rain
                        through a storm-created opening typically fall within coverage, while
                        gradual wear, deferred maintenance, and certain flood-type losses do not.
                        After a major monsoon event across Phoenix, Scottsdale, or Mesa, document
                        damage with photos before temporary repairs, and contact your licensed
                        agent to start the claim process promptly.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Is flood insurance included in standard home insurance?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Flood coverage is generally excluded from standard homeowners policies and
                        is purchased separately, either through the National Flood Insurance
                        Program or a private flood market. Phoenix sits in a desert environment,
                        but monsoon flash flooding, wash overflow, and localized urban flooding
                        still produce claims every year, especially in low-lying portions of Mesa,
                        Chandler, and northern Peoria. If your property is near a wash, in a
                        historical flood zone, or simply at the low point of a neighborhood,
                        discussing a separate flood policy with a licensed representative is a
                        sensible step.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does my home insurance cover my pool and pool-related liability?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        In most cases the pool itself is treated as part of the dwelling or as an
                        other structure, depending on construction, while pool-related liability is
                        handled under Coverage E. Carriers may apply specific underwriting rules
                        for diving boards, slides, fencing, and safety features, and some
                        properties may require a separate pool endorsement. Liability limits
                        deserve special attention for Valley homeowners, because pool-related
                        injuries are one of the more financially consequential residential claims.
                        A higher Coverage E limit paired with a personal umbrella policy is a
                        common approach for households in Gilbert, Chandler, and Scottsdale with
                        frequent pool use.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is the difference between replacement cost and actual cash value?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Replacement cost settles a covered loss based on what it costs today to
                        repair or replace the damaged property with materials of like kind and
                        quality, without deducting for depreciation, subject to your limit. Actual
                        cash value subtracts depreciation, paying the replacement cost minus the
                        estimated loss in value due to age and wear. Roofs and contents are the two
                        places this distinction matters most, because aging roofs and older
                        furniture can lose significant value on paper even when they still function
                        in the home. Confirming how each coverage part settles before you bind the
                        policy is one of the most important conversations to have with a licensed
                        agent.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Are solar panels covered by homeowners insurance in Phoenix?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Owned rooftop solar systems are often covered under the dwelling limit when
                        they are permanently attached to the home, but treatment varies by carrier
                        and installation type. Ground-mounted systems may fall under other
                        structures, and leased systems frequently remain the property of the solar
                        company, which affects how damage and replacement are handled. Given the
                        high adoption of rooftop solar across Phoenix, Gilbert, and Chandler, a
                        licensed broker can confirm how your system is scheduled, whether the
                        dwelling limit is sufficient after installation, and what documentation the
                        carrier requires after a storm-related claim.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How often should I review my Phoenix home insurance policy?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        A yearly review aligned with renewal is a practical baseline for most
                        households. Beyond renewal, meaningful life changes justify an additional
                        review, including renovations, major purchases, a new pool, the addition of
                        solar, a change in household composition, or a refinance that alters the
                        mortgage balance. Rebuilding costs across the Valley have moved over recent
                        years, and a dwelling limit that made sense a few years ago may understate
                        current replacement cost. An annual rhythm keeps coverage aligned with the
                        home and household you actually have.
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
                    A primary home policy is the anchor of most residential coverage plans in the
                    Valley. If your situation extends past a single owner-occupied residence,
                    review{" "}
                    <Link
                      href="/insurance/home/seasonal-home"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      seasonal home coverage
                    </Link>{" "}
                    for second residences,{" "}
                    <Link
                      href="/insurance/home/rental-home"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      rental home coverage
                    </Link>{" "}
                    for properties you lease to tenants,{" "}
                    <Link
                      href="/insurance/other/flood-earthquake"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      flood and earthquake coverage
                    </Link>{" "}
                    for perils excluded from standard HO-3 policies,{" "}
                    <Link
                      href="/insurance/other/umbrella"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      umbrella insurance
                    </Link>{" "}
                    for excess liability above your home and auto limits, and{" "}
                    <Link
                      href="/insurance/other/valuable-items"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      valuable items protection
                    </Link>{" "}
                    for jewelry, fine art, and other scheduled property that exceeds standard
                    internal limits.
                  </p>
                </section>

                {/* Closing paragraph with primary keyword */}
                <p className="text-base leading-relaxed text-muted-foreground">
                  Your home anchors your family&apos;s routine, your retirement plan, and the
                  neighborhood you choose to invest in across Phoenix, Scottsdale, Mesa, Tempe,
                  Chandler, Glendale, Gilbert, or Peoria. A sound residential program sets dwelling
                  limits at current replacement cost, aligns personal property and liability with
                  what you actually own and earn, and uses endorsements to address Valley-specific
                  perils rather than defaulting to national averages. For a thorough review of{" "}
                  <strong className="text-foreground">primary home insurance Phoenix AZ</strong>{" "}
                  options compared with Arizona market conditions and the endorsements most Valley
                  homeowners add alongside a standard HO-3, work with a licensed representative who
                  understands local rebuilding costs, monsoon and wind underwriting, pool and solar
                  considerations, and how mortgage-driven lender requirements interact with the
                  coverage you select.
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
                    Ready to Protect Your Home?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
                    When you are ready to review coverage with a licensed team, Protegrity
                    Insurance Brokerage can help you translate these concepts into quoted options
                    aligned with your dwelling, household, and financial goals. The next step is a
                    structured conversation, not pressure: you set the pace, and we provide the
                    facts you need to decide with confidence.
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
