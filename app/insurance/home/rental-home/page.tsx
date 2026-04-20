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
  title: "Rental Home Insurance Phoenix AZ | Five Star Rated",
  description:
    "Rental home insurance Phoenix AZ: DP-3 landlord coverage, loss of rents, and liability across Scottsdale, Mesa, Tempe, Chandler, Gilbert, and Peoria.",
  alternates: {
    canonical: "/insurance/home/rental-home",
  },
  openGraph: {
    title: "Rental Home Insurance in Phoenix, AZ | Five Star Rated",
    description:
      "Landlord coverage for Phoenix rental properties: dwelling, fair rental value, and premises liability across Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.",
    url: `${SITE_URL}/insurance/home/rental-home`,
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
    "Marketing partner connecting Arizona landlords and rental property owners with Phoenix rental home insurance options and licensed support through Protegrity Insurance Brokerage.",
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
  name: "Rental home insurance in Phoenix, Arizona",
  serviceType: "Landlord and rental property insurance",
  provider: {
    "@type": "InsuranceAgency",
    name: "Five Star Rated Insurance",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "State",
    name: "Arizona",
  },
  url: `${SITE_URL}/insurance/home/rental-home`,
  description:
    "Educational resource on Arizona landlord insurance for single-family rentals, multi-unit properties, and short-term rentals across Maricopa County.",
}

export default function RentalHomeInsurancePhoenixPage() {
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
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2000&q=80"
              alt="Single-family rental home with Southwestern architecture in Phoenix, rental home insurance Phoenix AZ landlord coverage for Arizona rental properties"
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
                Rental Home Insurance Coverage in Phoenix, AZ
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
                A tenant-occupied property is an investment with a different risk profile than the
                home where you live, and it deserves a policy built around that distinction. For
                Valley investors and landlords,{" "}
                <strong className="font-semibold text-primary-foreground">
                  rental home insurance Phoenix AZ
                </strong>{" "}
                coverage addresses dwelling protection, loss of rents, and premises liability for
                rental properties across Phoenix, Scottsdale, Mesa, Tempe, Chandler, Glendale,
                Gilbert, and Peoria.
              </p>
            </div>
          </section>

          <div className="bg-background">
            <div className="container mx-auto max-w-4xl px-4 py-14 md:py-20">
              <article className="prose prose-slate max-w-none space-y-12 text-foreground">
                {/* B. Overview */}
                <section aria-labelledby="overview-heading">
                  <h2 id="overview-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Overview: What Rental Home Insurance Means in Phoenix
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Rental home insurance, commonly called landlord insurance, is coverage built
                      around a residential property that you own but do not occupy as your primary
                      home. In Arizona, that typically refers to a single-family house, a
                      condominium, a townhouse, a duplex, or a small multi-family building leased
                      to long-term tenants, as well as properties used for short-term stays
                      through platforms like Airbnb and VRBO. The policy structure borrows from a
                      standard homeowners form, yet it adjusts for the realities of tenant
                      occupancy, which include different liability exposures, the loss of rental
                      income during a covered disruption, and the absence of the owner from
                      day-to-day supervision of the property.
                    </p>
                    <p>
                      Phoenix has become one of the strongest rental markets in the country, and
                      the Valley has seen a significant rise in single-family rental properties
                      over the past decade. Owners range from individual investors with a single
                      rental in Gilbert or Chandler to institutional portfolios and out-of-state
                      buyers holding dozens of homes across Mesa, Glendale, and the West Valley.
                      Build-to-rent communities, college-area rentals near Arizona State University
                      in Tempe, and winter-visitor housing in Scottsdale and Peoria all reinforce
                      the same point: the Phoenix metro area supports a wide spectrum of rental
                      strategies, and each strategy calls for a policy that reflects how the
                      property is actually used.
                    </p>
                    <p>
                      The most important distinction to understand early is the difference between
                      a landlord policy, typically written on a DP-3 dwelling fire form, and a
                      standard homeowners policy, typically written on an HO-3 form. An HO-3 is
                      designed for owner-occupied residences and assumes that the homeowner lives
                      in the home and keeps personal property there. A DP-3 landlord policy
                      insures the dwelling, other structures, and landlord-owned contents on an
                      open-peril basis while adapting liability and loss-of-income provisions to
                      tenant use. Writing a rental property on a standard HO-3 form without
                      disclosing the tenant occupancy can create a coverage misalignment that
                      surfaces at claim time rather than at binding.
                    </p>
                    <p>
                      Not all rentals are treated alike. Long-term tenant rentals, in which an
                      occupant signs a lease for six or twelve months, are the most common scenario
                      and generally fit a traditional landlord DP-3 policy. Short-term rentals,
                      which include nightly and weekly stays booked through Airbnb, VRBO, or
                      similar platforms, introduce hospitality-style exposures that many standard
                      landlord forms either exclude or limit. Carriers increasingly offer dedicated
                      short-term rental endorsements or specialty programs for these properties,
                      and the right placement depends on how frequently the home is rented, how
                      long each stay lasts, and whether any portion of the property is owner
                      occupied.
                    </p>
                    <p>
                      It is also worth underlining what landlord insurance does not do. A landlord
                      policy covers the dwelling and the owner-owned items used to service the
                      property, but it does not cover a tenant&apos;s personal belongings or a
                      tenant&apos;s personal liability. That gap is the reason prudent landlords
                      require their tenants to carry a separate renters insurance policy, which
                      protects the tenant&apos;s furniture, electronics, clothing, and personal
                      liability at a modest annual cost. Coordinating the landlord policy with
                      tenant-carried renters insurance is one of the simplest and most effective
                      ways to reduce disputes and financial exposure when something goes wrong at
                      the property.
                    </p>
                    <p>
                      The good news for Phoenix-area owners is that coverage can be tailored with
                      real precision. Single-property investors, portfolio landlords, accidental
                      landlords who ended up leasing a former primary residence, and short-term
                      rental hosts each have workable paths through the admitted carrier market.
                      A licensed Arizona broker can match your rental strategy to the right form,
                      set appropriate limits for Phoenix rebuild costs, and document how you are
                      using the property so the policy responds as expected when a claim is filed.
                    </p>
                    <p>
                      The sections that follow explain each major coverage part in plain language
                      and outline the conversations most Valley landlords benefit from having with
                      a licensed representative. They supplement, rather than replace, your
                      specific policy contract, declarations page, and state-approved endorsements,
                      and they are written to support a structured quoting conversation.
                    </p>
                  </div>
                </section>

                {/* C. What's covered */}
                <section aria-labelledby="covered-heading">
                  <h2 id="covered-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    What&apos;s Covered: Rental Home Insurance Building Blocks
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    Landlord policies adapt the familiar property coverage parts to tenant-occupied
                    use. The same general categories apply, including dwelling, other structures,
                    landlord-owned personal property, and liability, but several sub-limits,
                    endorsements, and occupancy rules behave differently than they would on a
                    full-time owner-occupied home. The single biggest addition unique to rental
                    coverage is fair rental value or loss-of-rents protection, which replaces the
                    income stream that stops when a covered loss makes the property unrentable.
                    Understanding how each coverage responds under a tenant arrangement is the
                    practical difference between a policy that performs as expected and one that
                    creates disputes during a claim across Phoenix, Scottsdale, Mesa, Tempe,
                    Chandler, Glendale, Gilbert, and Peoria.
                  </p>

                  <div className="mt-8 space-y-8">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Dwelling Coverage (Coverage A) for Rental Properties
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Dwelling coverage protects the physical structure of the rental home on
                        an open-peril basis under a DP-3 form, including framing, roof, interior
                        finishes, built-in systems, and attached structures such as covered
                        patios. The limit should reflect the current cost to rebuild the property
                        in the local Phoenix market rather than its market value, purchase price,
                        or tax assessment, because labor and materials in the Valley have shifted
                        substantially over recent years. On non-owner-occupied risks, carriers
                        often apply specific roof settlement provisions, wind-and-hail deductibles,
                        and eligibility rules based on the age and condition of the home, so a
                        licensed Arizona agent typically reviews the roof, HVAC, and plumbing
                        condition during quoting to confirm the property is rent-ready and
                        insurable on admitted forms.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Other Structures Coverage (Coverage B)
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Other structures coverage extends to improvements not attached to the main
                        dwelling, including detached garages, casitas, perimeter walls, pool
                        fencing, freestanding ramadas, and storage sheds that are common on Valley
                        properties. Coverage B is typically set as a percentage of Coverage A, yet
                        that default can understate the value of detached structures on larger
                        Scottsdale, Mesa, or North Peoria lots, especially when a rental includes
                        a casita leased separately or a workshop used by the tenant. Landlords
                        should confirm whether detached structures are scheduled explicitly or
                        insured under the default percentage, and whether any structure used for
                        business or additional rental income requires separate treatment. Pool
                        equipment, automated gates, and perimeter walls can carry meaningful
                        replacement costs that deserve a deliberate limit.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Fair Rental Value and Loss of Rents Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Fair rental value coverage, often called loss-of-rents coverage, is the
                        coverage part that most clearly separates a landlord policy from a
                        standard homeowners form. When a covered loss makes the rental property
                        uninhabitable, this coverage replaces the rental income you would have
                        received during the period of restoration, subject to your limit and the
                        policy conditions. For a Phoenix landlord whose mortgage, property taxes,
                        HOA dues, and management fees continue during a rebuild, fair-rental-value
                        coverage is the difference between a manageable claim and a meaningful
                        financial strain. Limits are often set as a percentage of Coverage A or as
                        a stated dollar amount, and the right limit depends on the monthly rent,
                        the expected time to repair the property, and how long tenants in your
                        market typically take to re-lease a comparable home.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Personal Property Coverage for Landlord-Owned Items
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Personal property coverage on a landlord policy is narrower than on a
                        homeowners policy because most contents in a rental belong to the tenant,
                        not the owner. Coverage for landlord-owned items generally applies to
                        appliances that stay with the property, maintenance tools and equipment
                        kept on site, landscaping supplies stored in a shed, and any furniture
                        left in a furnished rental or short-term rental. The policy will not cover
                        a tenant&apos;s belongings under any circumstances, which is why tenant
                        renters insurance is a standard lease requirement among experienced
                        landlords. Owners of furnished short-term rentals in Scottsdale, Old Town,
                        or downtown Phoenix should confirm the landlord contents limit matches the
                        value of the furniture, electronics, kitchenware, and decor they have
                        placed in the home for guest use.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Premises Liability Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Premises liability coverage responds when the landlord is legally
                        responsible for bodily injury or property damage that occurs on the rental
                        property, subject to the limit and exclusions in the policy. Common Valley
                        liability exposures at a rental include pool-related injuries, slip-and-fall
                        incidents on desert landscaping or pavers, dog bites involving tenant or
                        guest pets, and damages alleged to arise from inadequate maintenance or
                        security. Because a landlord faces exposures that an owner-occupant never
                        encounters, including claims brought by tenants and their invited guests,
                        limits on a landlord policy are frequently paired with a personal umbrella
                        or landlord umbrella policy to reach meaningful excess liability protection
                        across a portfolio. Documenting routine inspections, maintenance schedules,
                        and tenant communications supports both the underwriter at renewal and the
                        defense of any future claim.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Optional Endorsements (Vandalism, Building Code, Ordinance or Law)
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Several endorsements are worth discussing on a rental policy. Vandalism
                        and malicious mischief coverage can be structured to address tenant-caused
                        vandalism or damage by non-tenants at vacant properties, and availability
                        varies by carrier and form. Building-code upgrade or ordinance-or-law
                        coverage pays the additional cost of rebuilding to current code after a
                        covered loss, which matters in older Phoenix neighborhoods where code
                        requirements have evolved since the original construction. Water backup,
                        equipment breakdown, and short-term rental endorsements are also common
                        conversations on Valley rentals, and each adapts the base contract to a
                        specific exposure. A licensed Arizona agent can explain which endorsements
                        are available with which carriers and how each option changes the premium
                        and the protection.
                      </p>
                    </div>
                  </div>
                </section>

                {/* D. Who needs */}
                <section aria-labelledby="who-needs-heading">
                  <h2 id="who-needs-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Who Needs Rental Home Coverage in the Phoenix Area?
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Individual investors with a single Phoenix-area rental property make up the
                      largest group of landlord policyholders in the Valley. Whether the home was
                      purchased specifically as an investment, inherited from a family member, or
                      converted from a former primary residence, the moment it becomes
                      non-owner-occupied the coverage conversation changes. Portfolio landlords
                      with several rentals across Mesa, Gilbert, Chandler, and the West Valley
                      face the same fundamentals on a larger scale, and they often benefit from
                      consistent forms, coordinated limits, and a single umbrella structure that
                      sits above the scheduled rental properties.
                    </p>
                    <p>
                      Accidental landlords deserve a specific mention because they are a large
                      category in the Phoenix market. Owners who relocated for work, could not sell
                      during a soft patch, or inherited a property from a parent frequently find
                      themselves leasing a home they never intended to rent. A standard homeowners
                      policy will not follow the property into tenant occupancy, and carriers
                      expect prompt disclosure once the home is rented. Short-term rental hosts
                      operating in tourist-friendly areas such as Scottsdale, Old Town Scottsdale,
                      Paradise Valley, and the entertainment district of downtown Phoenix face a
                      different set of questions entirely, because nightly and weekly stays bring
                      hospitality-style exposures that many standard landlord forms do not fully
                      address.
                    </p>
                    <p>
                      Owners of duplexes, triplexes, and small multi-family properties near ASU in
                      Tempe, along light-rail corridors in Phoenix, and in established Glendale and
                      Peoria neighborhoods need policies that account for multiple tenants under
                      one roof, higher foot traffic, and sometimes commercial-flavored liability
                      exposures. Out-of-state investors owning Phoenix-area rentals introduce
                      remote-management logistics, and they often rely on property-management
                      companies to coordinate inspections, documentation, and loss reporting.
                      Phoenix&apos;s strong rental demand, winter-visitor rentals in Mesa and Sun
                      City, college rentals near ASU, and build-to-rent communities across the
                      Valley all create year-round demand for properly placed landlord coverage.
                    </p>
                  </div>
                </section>

                {/* E. Arizona landlord considerations */}
                <section aria-labelledby="arizona-req-heading">
                  <h2 id="arizona-req-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Arizona Landlord Insurance Considerations
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Arizona landlord-tenant law sets the baseline for how insurance interacts
                      with the lease agreement. The Arizona Residential Landlord and Tenant Act
                      governs most long-term residential rentals in the state and defines the
                      duties each party owes the other, including habitability standards, repair
                      timelines, and notice requirements. A well-drafted lease typically allocates
                      responsibility for maintenance, utilities, and conduct on the premises, and
                      it frequently requires the tenant to carry renters insurance and to name
                      the landlord as an additional interest on that policy. Requiring tenant
                      renters insurance is one of the most important steps a Phoenix landlord can
                      take, because it addresses the tenant&apos;s personal property and personal
                      liability at a modest cost and reduces the likelihood of disputes when
                      something goes wrong.
                    </p>
                    <p>
                      Short-term rental coverage deserves careful attention. Many standard
                      landlord policies either exclude short-term rental activity or sharply limit
                      coverage when the property is used for nightly or weekly stays booked
                      through Airbnb, VRBO, or similar platforms. Dedicated short-term rental
                      endorsements or specialty programs address the hospitality exposure more
                      completely, and some carriers treat mixed-use scenarios, such as a property
                      that switches between long-term and short-term rental strategies, as a
                      higher-risk class that requires specific disclosure. Listing the property on
                      a booking platform without informing the carrier can create a coverage
                      dispute at the worst possible moment, and the cleaner path is always to
                      disclose the rental strategy and confirm the endorsements in writing.
                    </p>
                    <p>
                      Liability concerns at Valley rentals tend to cluster around a handful of
                      exposures. Pool-related injuries are the most significant single category in
                      the Phoenix market, and rentals with pools often require higher liability
                      limits, specific fencing and gate standards, and sometimes surcharged
                      premiums. Tenant-invited guests can bring claims against the landlord for
                      injuries sustained on the property, dog-bite incidents involving tenant pets
                      raise questions about landlord responsibility and lease provisions, and slip
                      and fall incidents on desert landscaping or pavers come up regularly. A
                      landlord policy provides the first layer of defense, and a personal or
                      landlord umbrella policy layers excess limits on top for high-severity
                      scenarios.
                    </p>
                    <p>
                      Vacancy between tenants changes the coverage picture, sometimes in ways
                      landlords do not anticipate. Many landlord contracts apply specific vacancy
                      provisions after thirty or sixty continuous days without a tenant, which can
                      reduce or exclude coverage for perils such as vandalism, glass breakage,
                      theft, and certain water damage during the vacancy period. Carriers address
                      this exposure through vacancy permits, specific endorsements, or dwelling
                      fire forms designed for extended non-occupancy, and the right answer depends
                      on how long the property is expected to sit between tenants. Coverage for
                      tenant-caused damage also has boundaries. Policies generally exclude ordinary
                      wear and tear and intentional damage caused by the named insured, and the
                      practical recovery path for tenant damage often combines the landlord&apos;s
                      insurance, the security deposit, and in some cases the tenant&apos;s renters
                      liability coverage.
                    </p>
                    <p>
                      HOA-managed rental properties and condominium units introduce coordination
                      questions that deserve a deliberate answer. Master policies at condominium
                      and planned communities often insure the building exterior or common
                      structures on a specified basis, while the unit owner is responsible for
                      interior coverage, landlord personal property, fair-rental-value protection,
                      and liability. Understanding where the master policy stops and the
                      landlord&apos;s individual policy begins avoids duplicate coverage and, more
                      importantly, uncovered gaps. Building-code upgrade and ordinance-or-law
                      endorsements matter in older Phoenix and Glendale neighborhoods where code
                      requirements have evolved since original construction, and coordinating the
                      landlord policy with a personal or commercial umbrella program keeps
                      liability limits aligned across a growing portfolio.
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
                        professionals who understand the Valley rental market and place coverage
                        with carriers using state-approved forms and honest eligibility standards.
                        Landlord policies turn on occupancy details, rental-strategy disclosures,
                        and endorsement selections that national call centers often overlook, and
                        working with a local team that recognizes those details makes the
                        difference at both quoting and claim time.
                      </p>
                      <p>
                        Our team serves rental property owners across Phoenix, Scottsdale, Mesa,
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
                        confidence about how to protect a Valley rental property, a small
                        portfolio, or a growing investment strategy.
                      </p>
                    </div>
                  </div>
                </section>

                {/* G. FAQ */}
                <section aria-labelledby="faq-heading">
                  <h2 id="faq-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Frequently Asked Questions About Phoenix Rental Home Insurance
                  </h2>

                  <div className="mt-8 space-y-10">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Do I need a special insurance policy for my Phoenix rental property?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        In most cases, a Phoenix-area rental property is written on a landlord
                        policy, typically a DP-3 dwelling fire form, rather than on a standard
                        homeowners HO-3 form. Homeowners policies are designed for owner-occupied
                        residences and assume that the named insured lives in the home, which does
                        not match a tenant-occupied rental. A licensed Arizona agent can place the
                        property on an appropriate landlord form, set the dwelling limit to local
                        Phoenix rebuild costs, and add fair-rental-value coverage so the policy
                        behaves as expected when you file a claim.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is the difference between landlord insurance and homeowners insurance?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        A homeowners policy insures an owner-occupied residence, including the
                        dwelling, the owner&apos;s personal property, loss of use for the family
                        living in the home, and personal liability for the household. A landlord
                        policy insures the dwelling, other structures, landlord-owned items used
                        to service the rental, loss of rents when the property becomes
                        uninhabitable, and premises liability for incidents on the property. The
                        landlord policy does not cover the tenant&apos;s personal belongings or
                        the tenant&apos;s personal liability, which is the reason requiring tenant
                        renters insurance is a standard best practice.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Should I require my tenants to carry renters insurance?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Yes, and experienced Phoenix landlords almost uniformly do. A tenant
                        renters policy covers the tenant&apos;s personal property and personal
                        liability at a modest annual cost, and it reduces disputes between the
                        landlord and the tenant when a loss affects both parties. Requiring
                        renters insurance in the lease, asking the tenant to name the landlord as
                        an additional interest, and verifying the policy at move-in and at each
                        renewal are simple steps that protect everyone involved. Some landlord
                        insurance programs also offer pricing benefits when all tenants carry
                        renters coverage.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does landlord insurance cover short-term rentals like Airbnb in Phoenix?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Standard landlord policies vary significantly in how they treat short-term
                        rental activity. Some carriers exclude short-term rentals entirely, some
                        limit coverage for nightly or weekly stays, and some offer dedicated
                        short-term rental endorsements or specialty programs designed for the
                        hospitality exposure. Phoenix and Scottsdale hosts operating through Airbnb,
                        VRBO, or similar platforms should disclose the rental strategy to their
                        licensed broker, confirm the applicable endorsements in writing, and
                        consider pairing the policy with a commercial general liability layer if
                        the frequency of stays suggests a more business-like operation.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is loss of rents or fair rental value coverage?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Loss-of-rents coverage, also called fair-rental-value coverage, replaces
                        the rental income you would have received while the property is
                        uninhabitable after a covered loss, subject to the policy limit and the
                        period of restoration. For a Phoenix landlord whose mortgage, taxes, HOA
                        dues, and management fees continue during the rebuild, this coverage is
                        the difference between a manageable claim and a serious financial strain.
                        Limits are often expressed as a percentage of the dwelling limit or as a
                        stated dollar amount per month, and a licensed Arizona agent can help
                        calibrate the limit to your actual rent and expected repair timelines.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does landlord insurance cover damage caused by tenants?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Coverage for tenant-caused damage depends on the nature of the damage and
                        the specific policy language. Sudden and accidental damage, such as a
                        kitchen fire or an overflowed bathtub, is generally covered under a
                        well-written landlord policy, subject to the deductible and conditions.
                        Ordinary wear and tear is excluded by every form, and intentional damage
                        by the named insured is excluded as well. Some policies offer a vandalism
                        or malicious mischief endorsement that addresses tenant-caused vandalism
                        specifically, and the practical recovery path often combines the
                        landlord&apos;s insurance, the security deposit, and the tenant&apos;s
                        renters liability coverage.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How much liability coverage do I need as a Phoenix landlord?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Appropriate liability limits depend on the property, the tenant profile,
                        and the owner&apos;s overall asset picture. Many Phoenix landlords begin
                        with liability limits of at least three hundred thousand dollars on the
                        underlying landlord policy, increase that to five hundred thousand or one
                        million dollars when a pool, trampoline, or multi-family configuration is
                        involved, and then layer a personal or landlord umbrella policy on top to
                        reach one, two, or five million dollars of excess protection. A licensed
                        Arizona representative can help match the liability structure to your
                        portfolio size, risk tolerance, and underlying auto and home coverage so
                        the full program is coordinated rather than assembled piece by piece.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Can I insure multiple rental properties on one policy?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Many carriers can schedule several rental properties on a single landlord
                        package policy, which simplifies billing, renewal, and overall portfolio
                        management. Each location is underwritten on its own merits, including age,
                        construction, occupancy, and prior losses, and the policy schedule lists
                        the dwelling limit, fair-rental-value limit, and applicable endorsements
                        for every property. Portfolio landlords with properties across Phoenix,
                        Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria often
                        benefit from this structure, particularly when paired with a landlord or
                        commercial umbrella policy that sits above the scheduled locations and
                        provides coordinated excess liability across the book.
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
                    Rental home coverage often sits alongside other policies in a coordinated
                    program. If your real estate holdings and business interests extend beyond a
                    single rental, review{" "}
                    <Link
                      href="/insurance/home/primary-home"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      primary home coverage
                    </Link>{" "}
                    for the residence where you live full-time,{" "}
                    <Link
                      href="/insurance/home/seasonal-home"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      seasonal home coverage
                    </Link>{" "}
                    for a part-year or snowbird property,{" "}
                    <Link
                      href="/insurance/business/general-liability"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      business insurance
                    </Link>{" "}
                    for owners whose rental activity has grown into a formal property-management
                    operation,{" "}
                    <Link
                      href="/insurance/other/umbrella"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      umbrella insurance
                    </Link>{" "}
                    for excess liability across multiple properties, and{" "}
                    <Link
                      href="/insurance/other/flood-earthquake"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      flood and earthquake coverage
                    </Link>{" "}
                    for perils that are excluded from standard landlord forms.
                  </p>
                </section>

                {/* Closing paragraph with primary keyword */}
                <p className="text-base leading-relaxed text-muted-foreground">
                  A rental property in the Valley is an investment in long-term income, equity,
                  and a growing footprint across Phoenix, Scottsdale, Mesa, Tempe, Chandler,
                  Glendale, Gilbert, or Peoria. A thoughtful landlord program uses the right form
                  for your rental strategy, an accurate dwelling limit, appropriate fair-rental-value
                  coverage, disclosed short-term rental activity, and coordinated liability limits
                  rather than a repurposed homeowners contract. For a thorough review of{" "}
                  <strong className="text-foreground">rental home insurance Phoenix AZ</strong>{" "}
                  options compared with Arizona market conditions and the endorsements most Valley
                  investors add alongside their underlying coverage, work with a licensed
                  representative who understands DP-3 landlord forms, short-term rental
                  endorsements, HOA and property-management coordination, and how Arizona
                  landlord-tenant law interacts with the policy you select.
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
                    Ready to Protect Your Rental Property?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
                    When you are ready to review coverage with a licensed team, Protegrity
                    Insurance Brokerage can help you translate these concepts into quoted options
                    aligned with your rental strategy, portfolio size, and broader financial goals.
                    The next step is a structured conversation, not pressure: you set the pace, and
                    we provide the facts you need to decide with confidence.
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
