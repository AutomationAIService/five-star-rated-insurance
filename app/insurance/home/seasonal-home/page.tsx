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
  title: "Seasonal Home Insurance Phoenix AZ | Five Star Rated",
  description:
    "Seasonal home insurance Phoenix AZ: snowbird, second home, and vacant property coverage across Scottsdale, Mesa, Tempe, Chandler, Gilbert, and Peoria.",
  alternates: {
    canonical: "/insurance/home/seasonal-home",
  },
  openGraph: {
    title: "Seasonal Home Insurance in Phoenix, AZ | Five Star Rated",
    description:
      "Coverage for Phoenix snowbirds and second-home owners: dwelling, liability, and vacancy endorsements across Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.",
    url: `${SITE_URL}/insurance/home/seasonal-home`,
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
    "Marketing partner connecting Arizona snowbirds and second-home owners with Phoenix seasonal home insurance options and licensed support through Protegrity Insurance Brokerage.",
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
  name: "Seasonal home insurance in Phoenix, Arizona",
  serviceType: "Seasonal and second-home insurance",
  provider: {
    "@type": "InsuranceAgency",
    name: "Five Star Rated Insurance",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "State",
    name: "Arizona",
  },
  url: `${SITE_URL}/insurance/home/seasonal-home`,
  description:
    "Educational resource on Arizona seasonal property coverage for snowbirds, second-home owners, and part-year residents across Maricopa County.",
}

export default function SeasonalHomeInsurancePhoenixPage() {
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
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2000&q=80"
              alt="Upscale Arizona desert vacation home with pool and landscaped courtyard, seasonal home insurance Phoenix AZ coverage for snowbirds and second homes"
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
                Seasonal Home Insurance Coverage in Phoenix, AZ
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
                A second residence in the Valley deserves coverage that reflects how it is
                actually used, not a generic policy designed for a full-time household. For
                part-year owners and winter visitors,{" "}
                <strong className="font-semibold text-primary-foreground">
                  seasonal home insurance Phoenix AZ
                </strong>{" "}
                coverage addresses dwelling protection, liability, and vacancy considerations for
                homes across Phoenix, Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and
                Peoria.
              </p>
            </div>
          </section>

          <div className="bg-background">
            <div className="container mx-auto max-w-4xl px-4 py-14 md:py-20">
              <article className="prose prose-slate max-w-none space-y-12 text-foreground">
                {/* B. Overview */}
                <section aria-labelledby="overview-heading">
                  <h2 id="overview-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Overview: What Seasonal Home Insurance Means in Phoenix
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Seasonal home insurance is coverage built around a residence that is not
                      occupied as your primary home. In Arizona, this typically refers to a second
                      property used part of the year, a winter retreat for snowbirds from the
                      Midwest, Northern states, or Canada, or a vacation home that stands empty
                      during the summer months. The policy structure borrows heavily from a
                      standard homeowners form, yet it adjusts for the realities of non-primary
                      residence use, including vacancy patterns, reduced supervision, and
                      different personal property exposures than an owner would keep in their
                      everyday residence.
                    </p>
                    <p>
                      Phoenix plays an outsized role in the national snowbird market. Every year,
                      thousands of part-year residents travel to Scottsdale, Paradise Valley, Mesa,
                      Chandler, Sun City, and surrounding communities to escape northern winters,
                      typically arriving in October or November and returning home in March or
                      April. Many of these owners have held their Valley property for years, and
                      they split time between a northern primary residence and the Arizona home
                      where they spend four to six months of the year. The insurance conversation
                      for that lifestyle differs from a full-time homeowner in several meaningful
                      ways, and the details deserve attention before a claim tests the policy.
                    </p>
                    <p>
                      Vacancy and reduced occupancy are the core underwriting concerns that
                      distinguish seasonal policies from primary home insurance. Most standard
                      homeowners contracts contain a vacancy clause that limits or excludes certain
                      losses, commonly vandalism, glass breakage, and water damage, when the home
                      has been continuously vacant for a defined period, often thirty or sixty
                      days. For owners who leave the Valley for the summer or return north for
                      half the year, that clause can quietly narrow protection unless the policy
                      is structured to account for the absence through endorsements or a different
                      form altogether.
                    </p>
                    <p>
                      Several policy forms can fit seasonal ownership, and the right choice depends
                      on how the home is used. A traditional HO-3 form with a seasonal or
                      secondary-residence designation works for many owners who occupy the home
                      for part of the year and leave it closed up at other times. A DP-3 dwelling
                      fire policy is often appropriate for properties with extended vacancy,
                      limited personal property, or rental activity that falls outside standard
                      homeowners eligibility. Landlord policies enter the conversation if the home
                      is rented on a seasonal or short-term basis when the owner is away, because
                      short-term rental exposure is handled differently from either standard
                      homeowners or dwelling fire treatment.
                    </p>
                    <p>
                      The reason standard primary home policies do not always fit seasonal use
                      comes down to how the contract defines the insured residence, how long
                      vacancy periods are tolerated, and what the carrier expects in the way of
                      routine supervision. Writing a second home on a primary homeowners form
                      without disclosing the use pattern can create a misalignment that surfaces
                      at claim time rather than at binding, which is exactly the wrong moment to
                      discover a coverage gap.
                    </p>
                    <p>
                      The good news is that seasonal home insurance in the Phoenix market can be
                      tailored to a wide range of ownership styles. Winter-only residents, summer
                      visitors who escape northern heat, family members who use the home as a
                      retreat, and investors holding a property between long-term tenants each
                      have a workable path through the admitted carrier market. A licensed
                      Arizona broker can match your occupancy pattern to a form that responds to
                      how you actually use the home.
                    </p>
                    <p>
                      The sections that follow explain each major coverage part in plain language
                      and outline the conversations most seasonal owners benefit from having with
                      a licensed representative. They supplement, rather than replace, your
                      specific policy contract, declarations page, and state-approved
                      endorsements, and they are written to support a structured quoting
                      conversation.
                    </p>
                  </div>
                </section>

                {/* C. What's covered */}
                <section aria-labelledby="covered-heading">
                  <h2 id="covered-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    What&apos;s Covered: Seasonal Home Insurance Building Blocks
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    Seasonal home policies adapt the familiar homeowners coverage parts to
                    non-primary residence use. The same general categories apply, including
                    dwelling, other structures, personal property, loss of use, and liability, but
                    several sub-limits, endorsements, and vacancy rules behave differently than
                    they would on a full-time occupied home. Understanding how each coverage
                    responds when the home is empty is the practical difference between a policy
                    that performs as expected and one that creates disputes during a claim across
                    Phoenix, Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.
                  </p>

                  <div className="mt-8 space-y-8">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Dwelling Coverage (Coverage A) for Seasonal Use
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Dwelling coverage protects the physical structure of the seasonal home on
                        the same general basis as a primary residence, including framing, roof,
                        interior finishes, built-in systems, and attached structures. The limit
                        should reflect the current cost to rebuild in the local Phoenix market,
                        not market value, purchase price, or tax assessment. On seasonal policies,
                        carriers may apply specific roof settlement provisions, wind-and-hail
                        deductibles, and eligibility rules based on the age and condition of the
                        home, so a licensed Arizona agent typically reviews the roof, HVAC, and
                        plumbing condition during quoting. Accurate disclosure of how many months
                        the home is occupied and how it is supervised during absence helps the
                        underwriter place the policy on an appropriate form.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Other Structures Coverage (Coverage B)
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Other structures coverage extends to improvements not attached to the main
                        dwelling, including detached casitas, perimeter walls, pool cages,
                        freestanding ramadas, and storage structures common on Valley properties.
                        Coverage B is usually set as a percentage of Coverage A, although that
                        default may understate the value of detached structures on larger
                        Scottsdale, Paradise Valley, or North Peoria lots. Seasonal owners should
                        confirm whether a guest casita is scheduled under Coverage B or separately
                        insured, especially when family members or occasional guests use the
                        detached space while the main home is closed. Perimeter walls, automated
                        gates, and outdoor kitchens can also carry meaningful replacement costs
                        that deserve a deliberate limit rather than a default percentage.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Personal Property Coverage (Coverage C) and Seasonal Limits
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Personal property coverage insures the contents kept at the seasonal home,
                        including furniture, seasonal wardrobes, kitchen items, and electronics
                        that stay on site year-round. On seasonal and dwelling fire forms, the
                        personal property limit is often lower than a primary homeowners default
                        because the contents at a second residence are typically narrower in
                        scope. Theft of personal property from an unoccupied residence is a common
                        exposure that some carriers address with endorsements or specific limits,
                        and certain categories such as jewelry or firearms may carry reduced
                        internal sublimits when kept at a non-primary residence. Discuss which
                        items are stored at the seasonal home, which travel with you, and whether
                        valuable items are better scheduled on a policy at your primary residence.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Loss of Use Coverage (Coverage D)
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Loss of use coverage responds when a covered loss makes the seasonal home
                        temporarily uninhabitable during a period when you intended to occupy it.
                        It can help pay for reasonable increases in living expenses, including
                        temporary rental housing in the Phoenix area, meals beyond your usual
                        budget, and other costs required to maintain your stay while repairs
                        proceed. Seasonal policies often scale Coverage D to reflect the shorter
                        occupancy window, so the limit may differ from what you would see on a
                        primary home policy. For snowbirds whose winter schedule is disrupted by a
                        claim, this coverage can be the difference between an orderly displacement
                        and a financial strain during peak Valley travel season when short-term
                        housing prices are elevated.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Personal Liability Coverage (Coverage E)
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Personal liability coverage responds when you or a covered household
                        member is legally responsible for bodily injury or property damage to
                        others at the seasonal home, subject to the limit and exclusions in your
                        policy. Common Valley liability exposures at a second residence include
                        pool-related injuries, slip-and-fall incidents on desert landscaping or
                        pavers, and damage arising from guest use of the property. Owners who let
                        family and friends use the home when they are away should confirm how the
                        policy treats permissive use and whether any rental activity, even
                        limited, has been disclosed. Seasonal homeowners with higher-value asset
                        profiles frequently pair Coverage E with a personal umbrella policy to
                        reach meaningful excess liability limits across both their primary and
                        secondary residences.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Vacancy Considerations and Endorsements
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Vacancy provisions are where seasonal home insurance diverges most clearly
                        from primary home insurance. Many standard contracts apply a vacancy
                        clause after thirty or sixty continuous days of non-occupancy, reducing or
                        excluding coverage for perils such as vandalism, glass breakage, theft,
                        and certain water damage. Carriers address this exposure through specific
                        seasonal endorsements, dwelling fire forms designed for non-owner-occupied
                        or part-year use, and in some cases vacancy permits that extend coverage
                        for a defined period with documented precautions such as water shut-offs
                        and monitored alarm systems. Ask your licensed broker which vacancy terms
                        apply to your form, how the carrier defines occupancy, and what steps the
                        contract expects during your absence from the Valley.
                      </p>
                    </div>
                  </div>
                </section>

                {/* D. Who needs */}
                <section aria-labelledby="who-needs-heading">
                  <h2 id="who-needs-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Who Needs Seasonal Home Coverage in the Phoenix Area?
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Snowbirds traveling south from the Midwest, the Northeast, the Pacific
                      Northwest, and Canada make up the largest group of seasonal homeowners in
                      the Phoenix metro. Many arrive in October or November and return home after
                      Easter, leaving the Arizona residence unoccupied for the summer months when
                      Valley temperatures are highest. These owners need coverage written around
                      their actual occupancy pattern rather than a standard full-time policy that
                      may quietly restrict protection once the home has been vacant past a defined
                      threshold.
                    </p>
                    <p>
                      Out-of-state owners of vacation properties in Paradise Valley, North
                      Scottsdale, Carefree, and other desirable Valley submarkets have similar
                      concerns on a different schedule. A family that visits several times a year
                      for a few weeks at a time, or a household that uses the Phoenix home for
                      holidays and spring training travel, leaves the residence empty for long
                      stretches between visits. Part-year residents who split time among multiple
                      homes, including owners who rotate among Phoenix, a coastal property, and a
                      primary residence elsewhere, face a layered coverage question that benefits
                      from coordinated policies rather than three unrelated quotes.
                    </p>
                    <p>
                      Extended family scenarios also drive seasonal coverage needs. A home used as
                      a retreat by adult children, a property shared among siblings for family
                      gatherings, or a residence where elderly parents stay part of the year
                      introduce permissive use and supervision questions. Investors holding a
                      property that is not yet rented, or a home sitting empty between long-term
                      tenants, may fit better on a dwelling fire form than on either a landlord or
                      homeowners policy, and the Valley winter-visitor season from October through
                      April concentrates many of these situations into a predictable annual rhythm
                      across Mesa, Tempe, Chandler, Gilbert, Glendale, and Peoria.
                    </p>
                  </div>
                </section>

                {/* E. Arizona seasonal considerations */}
                <section aria-labelledby="arizona-req-heading">
                  <h2 id="arizona-req-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Arizona Seasonal Home Insurance Considerations
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Vacancy permits and vacancy exclusions are the provisions seasonal
                      homeowners should understand most clearly. Standard homeowners contracts
                      commonly reduce or exclude coverage for specific perils once the home has
                      been vacant for a defined period, often thirty or sixty days, and not every
                      period of absence is treated the same way. Some carriers distinguish between
                      vacancy, which generally refers to a home empty of personal property, and
                      unoccupancy, which refers to a furnished home without people present.
                      Seasonal forms and vacancy permits can extend or modify these provisions
                      when occupancy patterns are disclosed and reasonable precautions are
                      documented.
                    </p>
                    <p>
                      Water damage during extended absence is the most common seasonal claim in
                      the Phoenix market. Burst supply lines, failed water heaters, slow leaks
                      behind cabinets, and HVAC condensate overflow can run for days or weeks in a
                      home nobody visits, producing damage that can exceed the cost of the
                      original plumbing issue many times over. Pool systems add another layer of
                      exposure, because pool equipment failures and auto-fill valve problems have
                      flooded properties while owners were out of state. Insurers increasingly
                      encourage or require mitigation steps such as smart-home water sensors,
                      whole-house automatic shut-off valves, monitored leak detection, and
                      periodic in-person inspections by a trusted contact.
                    </p>
                    <p>
                      Monsoon and wind exposure on unoccupied properties creates a different kind
                      of risk. Storms between July and September can produce wind-driven debris,
                      hail, and intense microbursts that damage roofs and windows, and nobody may
                      notice the damage for weeks. Prompt reporting is often a policy requirement,
                      so owners who are away should have a local contact or property manager
                      authorized to inspect after significant storms and begin temporary repairs.
                      Security and theft considerations follow the same logic, because a visibly
                      unoccupied home with uncollected mail, dark windows, and no vehicle in the
                      driveway signals absence to potential intruders.
                    </p>
                    <p>
                      HOA-managed communities add coordination questions to seasonal coverage.
                      Master policies at condominium and planned communities often insure the
                      building exterior or common structures, while the unit owner is responsible
                      for interior coverage, personal property, and liability. Understanding where
                      the master policy stops and your individual policy begins avoids duplicate
                      coverage and, more importantly, uncovered gaps. Property management
                      relationships, caretaker arrangements, and documented maintenance schedules
                      give underwriters confidence that the home is supervised during your
                      absence, which can influence both eligibility and pricing across Phoenix,
                      Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.
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
                        professionals who understand snowbird and seasonal ownership patterns and
                        place coverage with carriers using state-approved forms and honest
                        eligibility standards. Seasonal policies turn on occupancy details that
                        national call centers often overlook, and working with a local team that
                        recognizes those details makes the difference at both quoting and claim
                        time.
                      </p>
                      <p>
                        Our team serves seasonal homeowners across Phoenix, Scottsdale, Mesa,
                        Tempe, Chandler, Glendale, Gilbert, Peoria, and surrounding communities
                        with the same measured guidance if you begin online or speak with a
                        representative by phone. We explain coverage in plain language, document
                        our recommendations, and leave room for you to ask questions before you
                        commit to anything.
                      </p>
                      <p>
                        The 5.0-star service reputation we hold reflects consistent follow-through
                        and respectful communication, not hype. When you are ready to move from
                        education to quoting, Protegrity-supported processes keep required
                        disclosures visible and your questions answered so you can decide with
                        confidence about how to protect a Valley residence that you do not occupy
                        year-round.
                      </p>
                    </div>
                  </div>
                </section>

                {/* G. FAQ */}
                <section aria-labelledby="faq-heading">
                  <h2 id="faq-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Frequently Asked Questions About Phoenix Seasonal Home Insurance
                  </h2>

                  <div className="mt-8 space-y-10">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Do I need a different policy for my Phoenix seasonal home?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        In most cases, a Valley second residence is written on a different form or
                        with different endorsements than a primary home. Standard homeowners
                        contracts are designed for year-round occupancy, and they often contain
                        vacancy clauses that narrow coverage once the home has been empty for a
                        defined period. Seasonal, secondary-residence, or dwelling fire forms are
                        built around the realities of part-year use, and a licensed Arizona agent
                        can match your occupancy pattern to the right structure so the policy
                        behaves as expected when you file a claim.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What happens if my seasonal home is vacant for more than 30 days?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Many standard homeowners contracts reduce or exclude coverage for specific
                        perils after a defined continuous vacancy period, often thirty or sixty
                        days, which can include vandalism, glass breakage, theft, and certain
                        water damage. On a properly placed seasonal or dwelling fire form, the
                        vacancy provisions are adapted to part-year use, sometimes with specific
                        endorsements or vacancy permits that extend coverage with documented
                        precautions. Clarifying the exact vacancy language in your contract before
                        you leave the Valley is more productive than discovering the provisions
                        during a claim.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does seasonal home insurance cover water damage from burst pipes?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Sudden and accidental water damage from a burst supply line is generally
                        covered under a well-written seasonal home policy, subject to the policy
                        conditions and your deductible. Gradual leaks, long-term seepage, and
                        damage attributed to deferred maintenance are typically excluded, and
                        carriers pay close attention to how long the home was unoccupied before
                        the damage was discovered. Smart-home water shut-off valves, monitored
                        leak sensors, and documented periodic inspections by a trusted contact
                        help demonstrate that the home was being supervised, which supports both
                        the claim and the longer-term insurability of the property.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Can I rent out my seasonal home when I am not there?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Renting a seasonal home when you are away changes the coverage
                        conversation in important ways. Short-term vacation rentals, long-term
                        tenants, and occasional family use are each handled differently by
                        carriers, and undisclosed rental activity can void coverage or narrow it
                        significantly at claim time. Owners who intend to rent the Valley home
                        during the summer or between visits should disclose that activity to their
                        licensed broker so the policy is placed on an appropriate landlord or
                        combined form that contemplates tenant occupancy and liability.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does my Phoenix home insurance work if I live out of state most of the year?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        The Phoenix property can be insured on an Arizona-based policy regardless
                        of where you hold your primary residence, but the form matters. If you
                        live out of state most of the year, the Valley home is usually written as
                        a secondary, seasonal, or dwelling fire residence rather than as a primary
                        home, because your primary home coverage is tied to the address where you
                        actually live full-time. Coordinating the Phoenix seasonal policy with
                        your primary homeowners and auto coverage keeps limits aligned and avoids
                        duplicate or missing protection across both residences.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is a dwelling fire (DP-3) policy and when is it used?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        A dwelling fire policy, commonly written on a DP-3 form, provides property
                        coverage for a residential structure that does not fit standard homeowners
                        eligibility. DP-3 forms are often used for rental properties, seasonal
                        homes with extended vacancy, and residences where personal property
                        coverage is minimal because the owner does not keep significant contents
                        on site. The dwelling is typically insured on an open-peril basis with
                        options for liability and limited contents, and the form is well suited
                        for Phoenix-area properties with irregular occupancy patterns that fall
                        outside standard homeowners guidelines.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Are snowbird homes treated differently by Arizona insurers?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Arizona carriers are very familiar with snowbird ownership and have filed
                        forms and endorsements designed around that pattern. Seasonal occupancy
                        alone does not disqualify a home from admitted-market coverage, but
                        underwriters pay attention to how the absence is supervised, whether the
                        roof and major systems are in good condition, and whether the home has
                        reasonable protective devices. Owners who provide clear information about
                        their annual schedule, property management relationships, and mitigation
                        steps typically find workable coverage options without excessive friction.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How do I keep my seasonal home insured during monsoon season when I am away?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Coverage does not stop when you leave the Valley for the summer, but
                        policy provisions often expect reasonable supervision during the monsoon
                        months. Arrange for a trusted contact, family member, or property manager
                        to inspect the home after significant storms, photograph any visible
                        damage, and begin temporary repairs to prevent further loss. Document the
                        schedule in writing, keep your licensed broker informed of any material
                        changes, and consider monitored alarm and water shut-off systems that help
                        demonstrate ongoing supervision of the residence.
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
                    Seasonal home coverage often sits alongside other residential policies in a
                    coordinated program. If the Phoenix home is part of a broader real estate
                    picture, review{" "}
                    <Link
                      href="/insurance/home/primary-home"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      primary home coverage
                    </Link>{" "}
                    for the residence where you live full-time,{" "}
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
                    for perils excluded from standard forms,{" "}
                    <Link
                      href="/insurance/other/umbrella"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      umbrella insurance
                    </Link>{" "}
                    for excess liability across multiple residences, and{" "}
                    <Link
                      href="/insurance/other/valuable-items"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      valuable items protection
                    </Link>{" "}
                    for jewelry, fine art, and other scheduled property that moves between homes.
                  </p>
                </section>

                {/* Closing paragraph with primary keyword */}
                <p className="text-base leading-relaxed text-muted-foreground">
                  A second residence in the Valley is an investment in the lifestyle and routine
                  you have built across Phoenix, Scottsdale, Mesa, Tempe, Chandler, Glendale,
                  Gilbert, or Peoria. A thoughtful seasonal program uses the right form for your
                  occupancy pattern, disclosed vacancy terms, appropriate liability limits, and
                  documented mitigation steps rather than a standard homeowners contract that
                  assumes full-time residency. For a thorough review of{" "}
                  <strong className="text-foreground">seasonal home insurance Phoenix AZ</strong>{" "}
                  options compared with Arizona market conditions and the endorsements most
                  snowbirds and second-home owners add alongside their northern primary coverage,
                  work with a licensed representative who understands vacancy provisions, monsoon
                  and water exposure, HOA and property management coordination, and how a Valley
                  winter-visitor schedule interacts with the coverage you select.
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
                    Ready to Protect Your Seasonal Home?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
                    When you are ready to review coverage with a licensed team, Protegrity
                    Insurance Brokerage can help you translate these concepts into quoted options
                    aligned with your second residence, occupancy pattern, and broader financial
                    goals. The next step is a structured conversation, not pressure: you set the
                    pace, and we provide the facts you need to decide with confidence.
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
