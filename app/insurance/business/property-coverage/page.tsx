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
  title: "Commercial Property Insurance Phoenix AZ | Five Star Rated",
  description:
    "Commercial property insurance Phoenix AZ: building, business personal property, and income coverage for companies across Scottsdale, Mesa, Tempe, Chandler, Gilbert.",
  alternates: {
    canonical: "/insurance/business/property-coverage",
  },
  openGraph: {
    title: "Commercial Property Insurance in Phoenix, AZ | Five Star Rated",
    description:
      "Commercial property coverage for Arizona businesses: buildings, equipment, inventory, and business income protection across Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.",
    url: `${SITE_URL}/insurance/business/property-coverage`,
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
    "Marketing partner connecting Arizona businesses with Phoenix commercial property insurance options and licensed support through Protegrity Insurance Brokerage.",
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
  name: "Commercial property insurance in Phoenix, Arizona",
  serviceType: "Commercial property insurance",
  provider: {
    "@type": "InsuranceAgency",
    name: "Five Star Rated Insurance",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "State",
    name: "Arizona",
  },
  url: `${SITE_URL}/insurance/business/property-coverage`,
  description:
    "Educational resource on Arizona commercial property insurance covering buildings, business personal property, business income, and monsoon exposure across Maricopa County.",
}

export default function CommercialPropertyInsurancePhoenixPage() {
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
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
              alt="Modern Phoenix commercial office interior with equipment and furnishings, commercial property insurance Phoenix AZ coverage for Arizona businesses"
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
                Commercial Property Insurance in Phoenix, AZ
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
                Arizona businesses invest heavily in the physical assets that make daily
                operations possible, and a single fire, storm, or theft can interrupt revenue for
                weeks.{" "}
                <strong className="font-semibold text-primary-foreground">
                  Commercial property insurance Phoenix AZ
                </strong>{" "}
                coverage protects buildings, inventory, equipment, and business income for
                retailers, restaurants, contractors, and professional firms across Phoenix,
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
                    Overview: What Commercial Property Insurance Means in Phoenix
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Commercial property insurance is the policy that protects the physical
                      assets a business owns or is legally responsible for, including the
                      building itself, the contents inside that building, and the property of
                      others held in the business&apos;s care. Policies respond when a covered
                      peril, such as fire, theft, vandalism, wind, or hail, damages or destroys
                      insured property, paying the business up to the selected limits and subject
                      to the deductible. It is one of the core components of a complete business
                      insurance program, alongside general liability and workers compensation, and
                      it is what stands between an operational setback and a catastrophic financial
                      loss when a major incident occurs.
                    </p>
                    <p>
                      Commercial property policies insure three broad categories of assets. The
                      building-and-personal-property form identifies building coverage for the
                      physical structure, business personal property coverage for the
                      business-owned contents such as furniture, equipment, supplies, and
                      inventory, and personal property of others coverage for customer or vendor
                      items temporarily in the business&apos;s care, custody, or control. Each
                      category carries its own limit on the declarations page, and each responds
                      to the perils described in the selected coverage form.
                    </p>
                    <p>
                      The relationship between the policy and the building varies with the
                      operating structure. Building owners who lease commercial space to tenants
                      typically insure the structure itself and carry a lease-based allocation of
                      responsibility for improvements, utilities, and common areas. Tenants
                      leasing commercial space typically insure their own business personal
                      property, tenant-owned improvements, and business income even when the
                      landlord insures the building. Landlords and tenants often both need
                      dedicated policies that reflect the exact boundaries of their respective
                      responsibilities in the lease.
                    </p>
                    <p>
                      A homeowners or renters policy does not cover business property. Most
                      personal lines policies specifically exclude or sharply sublimit property
                      used in the course of business, which means a laptop used for consulting, a
                      workshop of contractor tools, or a home office full of inventory remains
                      exposed if a fire, theft, or water loss occurs. Home-based operators in
                      Scottsdale, Tempe, and the surrounding metro frequently assume their home
                      policy addresses business activity and discover otherwise only when a claim
                      is filed. A separate commercial property policy, or an in-home business
                      endorsement, is the correct answer.
                    </p>
                    <p>
                      Arizona presents a specific mix of commercial perils. Fire, theft, and
                      vandalism occur throughout the year. Monsoon season drives wind-related
                      roof damage, hail, wind-driven rain entering through compromised openings,
                      and dust-storm events that abrade exterior finishes and roof components.
                      Interior water damage from plumbing failures, HVAC condensate leaks, and
                      sprinkler discharges is a persistent source of claims across the Valley.
                      Arizona commercial property quotes should reflect those realities rather
                      than assume a generic national profile, because monsoon exposure and the
                      age of the building directly influence premium and coverage detail.
                    </p>
                    <p>
                      Accurate valuation is the backbone of an effective program. Building limits
                      need to reflect the actual cost to rebuild with current labor and materials
                      in Phoenix pricing, not the market value at which the property could be
                      sold. Business personal property limits need to reflect the real current
                      cost of replacing equipment, furniture, supplies, and peak inventory.
                      Coverage scales broadly, from a small home-based operation carrying a
                      modest BPP limit to a mid-size retailer in Gilbert with layered building,
                      BPP, and business income limits, and up to multi-location operators
                      insuring a portfolio of properties across the Valley.
                    </p>
                  </div>
                </section>

                {/* C. What's covered */}
                <section aria-labelledby="covered-heading">
                  <h2 id="covered-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    What&apos;s Covered: Commercial Property Insurance Building Blocks
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    A commercial property policy bundles several coverage parts onto a single
                    declarations page. Each part addresses a different asset category, each
                    carries its own limit and deductible, and each responds to the perils
                    described in the selected coverage form. Reviewing the parts together rather
                    than in isolation keeps the program aligned with the building, contents,
                    income, and equipment exposures the business actually carries, and it
                    surfaces the optional endorsements that close gaps left by the standard form.
                  </p>

                  <div className="mt-8 space-y-8">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Building Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Building coverage applies to the physical structure of the insured
                        premises, including permanently installed fixtures, machinery and
                        equipment used to service the building, outdoor fixtures, and in many
                        cases additions and improvements completed by the insured. The limit
                        selected should reflect the cost to rebuild using current Phoenix labor
                        and materials pricing, not the market value of the real estate. Arizona
                        building owners commonly insure single-tenant and multi-tenant buildings
                        across Phoenix, Scottsdale, and Mesa under this coverage part, with lease
                        documents establishing which party is responsible for which portions of
                        the structure. Accurate square footage, construction class, roof age, and
                        protective features directly affect both premium and claim outcomes.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Business Personal Property (BPP) Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Business personal property coverage applies to the business-owned contents
                        inside the insured premises, including furniture, fixtures not covered as
                        building, machinery and equipment not permanently installed, stock and
                        inventory, office supplies, and in many cases tenant-owned improvements
                        and betterments. The BPP limit should reflect the current replacement
                        cost of all contents at peak inventory levels rather than a historical
                        book value. Retailers, restaurants, medical offices, and contractors
                        carrying business personal property insurance Phoenix programs routinely
                        overlook BPP limit drift, and annual reviews catch the gap before a loss
                        exposes it. Coverage extensions commonly add limited off-premises coverage
                        for property temporarily away from the insured location.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Personal Property of Others Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Personal property of others coverage protects items belonging to customers,
                        vendors, or other third parties while in the business&apos;s care,
                        custody, or control at the insured location. Dry cleaners, auto repair
                        shops, computer repair providers, storage operators, and other bailees
                        frequently hold significant third-party property on site, and the policy
                        limit selected should reflect the reasonable maximum value on premises at
                        any one time. The coverage may pay the business first, then be subrogated,
                        or respond directly to the owner of the damaged property, depending on
                        claim handling. Matching the limit to real exposure avoids awkward
                        conversations with customers after a loss.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Business Income and Extra Expense Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Business income, sometimes called business-interruption coverage, pays for
                        lost net income and continuing operating expenses when a covered property
                        loss forces the business to suspend operations. The coverage typically
                        applies during a defined restoration period following the direct physical
                        damage event. Extra expense coverage pays for additional costs incurred to
                        reduce the length or severity of the interruption, such as temporary
                        relocation, rented equipment, or expedited repair work. Many Arizona
                        operations underestimate how long restoration actually takes after a
                        serious loss, and business income insurance Arizona programs routinely
                        benefit from a longer period of indemnity than the twelve-month default
                        to reflect the realities of permit timing, contractor scheduling, and
                        supply-chain delays.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Equipment Breakdown Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Equipment breakdown coverage responds to sudden and accidental mechanical
                        or electrical failure of insured equipment, which standard commercial
                        property forms typically exclude. Covered equipment commonly includes
                        HVAC systems, refrigeration units, boilers and pressure vessels,
                        production machinery, computer systems, and telecommunications equipment.
                        Arizona heat makes HVAC and refrigeration failures particularly disruptive
                        during summer, and restaurants, medical practices, and data-dependent
                        offices across Tempe, Chandler, and the Valley routinely carry equipment
                        breakdown alongside the standard property form. The coverage pays for
                        repair or replacement along with limited business-income extensions tied
                        to the breakdown event.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Optional Endorsements (Ordinance or Law, Utility Services, Outdoor Property)
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Optional endorsements close predictable gaps in the standard coverage
                        form. Ordinance or law coverage pays the increased cost to bring a damaged
                        building into compliance with current building codes during repair, an
                        exposure that grows with building age. Utility services coverage responds
                        to direct damage and business income loss arising from interruption of
                        utility services such as power or water away from the insured location.
                        Outdoor property endorsements schedule specific items such as signs,
                        fences, antennas, and landscaping that the base form limits sharply.
                        Carriers structure these endorsements differently, so the details of each
                        form should be reviewed against the realities of the building and the
                        operation.
                      </p>
                    </div>
                  </div>
                </section>

                {/* D. Who needs */}
                <section aria-labelledby="who-needs-heading">
                  <h2 id="who-needs-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Who Needs Commercial Property Coverage in the Phoenix Area?
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Building owners who lease commercial space to tenants are core users of
                      commercial property insurance. Landlord-owned buildings housing retail
                      tenants in Scottsdale, small office tenants in central Phoenix, and
                      industrial tenants in west Phoenix or Glendale all require building
                      coverage sized to current replacement cost, with loss of rents coverage to
                      protect the rental income stream during restoration after a covered loss.
                      Tenants leasing commercial space typically insure their own business
                      personal property, tenant-owned improvements and betterments, and business
                      income, and the lease agreement defines which coverages each party is
                      expected to maintain.
                    </p>
                    <p>
                      Retail and storefront businesses, restaurants and food-service operations
                      with substantial kitchen equipment, and specialty retailers carrying
                      significant inventory all carry meaningful business personal property
                      exposure. Manufacturers and warehouses with inventory and production
                      machinery in Mesa, Chandler, and the broader Valley face the same exposure
                      at larger scale, along with equipment breakdown and business income
                      dependencies tied to production schedules. Professional offices with
                      computers, furniture, and client records need coverage sized to real
                      replacement costs rather than depreciated book value.
                    </p>
                    <p>
                      Home-based businesses in Gilbert, Peoria, and across the Valley often
                      carry more business property than owners realize, particularly consultants
                      with professional equipment, online retailers with inventory, and service
                      professionals with workshop tools. Medical and dental practices add highly
                      specialized equipment with significant replacement cost, and small loss
                      events can carry surprisingly large dollar implications. Phoenix
                      commercial building insurance programs support all of these categories,
                      from a single-location retailer to a multi-building portfolio owner.
                    </p>
                    <p>
                      Phoenix&apos;s commercial real estate market and growing retail,
                      industrial, and service sectors keep demand high. Monsoon exposure across
                      the Valley makes building-and-personal-property reviews a recurring
                      priority for property owners and tenants, because a single severe storm can
                      produce wind, hail, and water-entry losses across multiple properties in
                      the same week. Coordinating building, BPP, and business income limits at
                      annual reviews keeps the program aligned with what the business actually
                      owns and operates rather than what it carried at the last binding.
                    </p>
                  </div>
                </section>

                {/* E. Arizona considerations */}
                <section aria-labelledby="arizona-req-heading">
                  <h2 id="arizona-req-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Arizona Commercial Property Insurance Considerations
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Valuation is the foundation of every commercial property program.
                      Replacement cost valuation pays the cost to replace damaged property with
                      new property of like kind and quality, without deduction for depreciation,
                      subject to the policy limit and the coinsurance clause. Actual-cash-value
                      valuation pays replacement cost less depreciation and commonly leaves a
                      gap between the check the insurer sends and the actual cost to restore the
                      property. Most business owners prefer replacement-cost settlement for
                      buildings and BPP, because it aligns the claim payment with the real cost
                      of resuming operations after a loss.
                    </p>
                    <p>
                      Coverage forms differ by scope. Basic-form coverage responds to a narrow
                      list of named perils. Broad-form coverage adds additional named perils
                      beyond the basic list. Special-form coverage, often called open-peril
                      coverage, covers all direct physical loss except those specifically
                      excluded, which provides the broadest protection for both buildings and
                      business personal property. Most Arizona commercial programs are written
                      on special form, because the broader trigger better reflects how real
                      losses arise and reduces the chance of a coverage dispute at claim time.
                    </p>
                    <p>
                      Common exclusions apply to every commercial property form. Flood and
                      earthquake are excluded and require separate policies or endorsements for
                      coverage. Wear and tear, gradual deterioration, and certain types of mold
                      are excluded because they reflect maintenance issues rather than sudden
                      accidental loss. Arizona monsoon and wind exposure is a core underwriting
                      consideration, because wind-driven rain, hail, and dust-storm damage
                      generate significant commercial claims across the Valley during summer.
                      Roof age, roof type, and building maintenance records all influence both
                      acceptance and pricing.
                    </p>
                    <p>
                      Business income coverage requires a real calculation, not a guess.
                      Carriers typically ask for a completed business-income worksheet that
                      projects net income, continuing expenses, and the realistic restoration
                      period. Operations with long lead times on specialized equipment, building
                      permits, or supply-chain dependencies frequently need periods of indemnity
                      longer than the default twelve months. Inventory fluctuations should be
                      addressed with peak-season endorsements so that BPP limits reflect stock
                      levels during the business&apos;s busiest periods, not the off-season
                      average.
                    </p>
                    <p>
                      Coinsurance clauses commonly appear on commercial property policies and
                      penalize underinsurance by reducing the claim payment when the selected
                      limit falls below a specified percentage of replacement cost. Ordinance or
                      law coverage pays the increased cost of rebuilding a damaged structure to
                      current code, which matters for older buildings across Phoenix, Mesa, and
                      Glendale where code updates could meaningfully raise repair costs after a
                      loss. Commercial property and general liability are commonly bundled into
                      a Business Owner&apos;s Policy for cost savings on smaller accounts, while
                      larger operations typically place standalone property and liability
                      policies tailored to their specific exposures. Annual reviews keep
                      building values, BPP limits, business income figures, and endorsement
                      selections aligned with the business as it grows and changes.
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
                        Protegrity Insurance Brokerage, so Arizona businesses work with licensed
                        commercial insurance professionals who place coverage with carriers using
                        state-approved forms and honest eligibility standards. Our team
                        understands how property exposure actually shows up on Phoenix-area
                        buildings, from roof age and monsoon wind history to specialty-equipment
                        replacement costs and the realities of post-loss contractor availability
                        across the Valley.
                      </p>
                      <p>
                        We maintain access to multiple commercial carriers with distinct
                        appetites for retailers, offices, restaurants, industrial buildings, and
                        mixed-use properties, which allows us to compare pricing and terms across
                        markets rather than pitching a single company&apos;s product to every
                        business. Business property coverage Phoenix quotes are driven by
                        building details, protective features, occupancy, and claim history, and
                        matching the risk to the right carrier is where experienced brokerage
                        support earns its keep.
                      </p>
                      <p>
                        We serve commercial clients across Phoenix, Scottsdale, Mesa, Tempe,
                        Chandler, Glendale, Gilbert, and Peoria, and our 5.0-star service
                        reputation reflects consistent follow-through, responsive service, and
                        respectful communication from the first quote through every mid-term
                        endorsement. Protegrity-supported processes keep required disclosures
                        visible and your questions answered so decisions rest on facts, not
                        pressure.
                      </p>
                    </div>
                  </div>
                </section>

                {/* G. FAQ */}
                <section aria-labelledby="faq-heading">
                  <h2 id="faq-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Frequently Asked Questions About Phoenix Commercial Property Insurance
                  </h2>

                  <div className="mt-8 space-y-10">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What does commercial property insurance cover for my Phoenix business?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Commercial property insurance covers direct physical loss or damage to
                        insured property, including buildings, business personal property, and
                        property of others in the business&apos;s care, subject to the coverage
                        form and exclusions. Covered perils on a special-form policy typically
                        include fire, theft, vandalism, wind, hail, certain water damage, and
                        other causes not specifically excluded. The policy pays repair or
                        replacement costs up to the selected limit, and it can be extended with
                        business income, equipment breakdown, and other endorsements. It does not
                        cover employee injuries, vehicle liability, or flood and earthquake
                        losses, which are handled through separate policies.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Do I need commercial property insurance if I lease my business space?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Yes. Even when the landlord insures the building, a commercial tenant
                        typically owns the inventory, equipment, furnishings, tenant-owned
                        improvements, and business income associated with the operation. A
                        commercial property policy covers those tenant assets and responds when a
                        covered loss interrupts operations. Most commercial leases require
                        tenants to maintain specified property and liability coverage as a
                        condition of the lease, and landlords request certificates of insurance
                        to confirm compliance. A licensed broker reviews the lease provisions and
                        tailors the tenant&apos;s policy to those requirements and to the
                        business&apos;s actual exposure.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is the difference between replacement cost and actual cash value?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Replacement-cost valuation pays the cost to replace damaged property with
                        new property of like kind and quality, without deduction for depreciation,
                        subject to the limit and coinsurance clause. Actual-cash-value valuation
                        pays replacement cost less depreciation, which can leave a meaningful gap
                        between the claim check and the true cost to restore the property. Most
                        business owners choose replacement cost for buildings and business
                        personal property so the policy aligns with the actual cost of resuming
                        operations. The decision deserves a careful conversation, because
                        actual-cash-value valuation is sometimes selected intentionally to manage
                        premium on older buildings with limited rebuild intent.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does commercial property insurance cover monsoon damage in Phoenix?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Most commercial property policies cover wind, hail, and wind-driven rain
                        entering through damaged roofs and openings, all of which are common
                        monsoon losses across the Valley. The policy language defines how
                        wind-driven rain and water intrusion are treated, and roof age and
                        condition directly influence acceptance, pricing, and claim outcomes.
                        Flood damage from rising water or hydrostatic pressure is excluded and
                        requires a separate flood policy. Businesses in low-lying areas, near
                        washes, or in neighborhoods with a history of flooding should review flood
                        coverage separately, because monsoon storms can produce localized
                        flooding that a commercial property policy alone does not address.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is business income coverage and why is it important?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Business income coverage, sometimes called business-interruption coverage,
                        pays for lost net income and continuing operating expenses when a covered
                        property loss forces the business to suspend operations. The coverage
                        applies during a defined restoration period following direct physical
                        damage. Without this coverage, a fire, storm, or other covered loss can
                        deliver a second financial blow weeks after the physical damage has been
                        repaired, because revenue stops while rent, payroll, loan payments, and
                        vendor obligations continue. Phoenix operations should size limits to
                        realistic restoration periods rather than rely on default twelve-month
                        caps.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Is flood damage covered under a commercial property policy?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        No. Commercial property policies exclude flood, which is typically defined
                        as rising water, overflow of inland or tidal waters, or mudflows from
                        surface water accumulation. Coverage for flood damage requires a separate
                        flood-insurance policy, available through the National Flood Insurance
                        Program and through private flood carriers. Businesses in or near
                        low-lying areas, washes, or flood-prone corridors in the Valley should
                        evaluate flood coverage as a distinct purchase. Water damage from
                        plumbing failures inside the building, a different cause of loss, is
                        commonly covered by the standard commercial property policy subject to
                        policy conditions.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does commercial property insurance cover theft and vandalism?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Yes, subject to the coverage form. Special-form commercial property
                        policies typically cover theft, burglary, and vandalism of insured
                        property, with certain exclusions and sublimits for specific categories
                        such as money, securities, and some high-theft commodities. Protective
                        features such as alarm systems, central-station monitoring, and secured
                        storage for inventory influence both eligibility and pricing. Businesses
                        in Phoenix retail areas, storage-heavy industrial zones, and
                        high-traffic commercial corridors routinely rely on this coverage and
                        should document security measures at binding and during renewal reviews.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How much commercial property insurance does my Arizona business need?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Limit selection starts with valuation. Building limits should reflect
                        current replacement cost based on actual Phoenix construction pricing,
                        not the market value or the original purchase price. Business personal
                        property limits should reflect the current replacement cost of contents
                        at peak inventory levels, not historical book value. Business income
                        limits should reflect realistic net income, continuing expenses, and a
                        restoration period that accounts for permit timing, contractor
                        availability, and supply-chain lead times. A licensed broker helps the
                        business complete valuation worksheets and review the numbers annually so
                        the program keeps pace with operations.
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
                    Commercial property sits alongside several other core business policies.
                    Exposures involving customers, vendors, and visitors fall under{" "}
                    <Link
                      href="/insurance/business/general-liability"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      general liability
                    </Link>
                    , and employee-injury exposure is handled through{" "}
                    <Link
                      href="/insurance/business/workers-compensation"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      workers compensation
                    </Link>
                    . Operations running multiple vehicles extend the program through{" "}
                    <Link
                      href="/insurance/commercial-auto/fleet-coverage"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      fleet coverage
                    </Link>
                    . Commercial property policies specifically exclude flood and earthquake, so
                    review{" "}
                    <Link
                      href="/insurance/other/flood-earthquake"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      flood and earthquake coverage
                    </Link>{" "}
                    when the building location warrants. For catastrophic capacity above primary
                    general liability and auto liability limits, review{" "}
                    <Link
                      href="/insurance/other/umbrella"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      umbrella insurance
                    </Link>
                    . A coordinated program across these policies reduces the gaps that appear
                    when lines are placed with separate brokers on different timelines.
                  </p>
                </section>

                {/* Closing paragraph with primary keyword */}
                <p className="text-base leading-relaxed text-muted-foreground">
                  Arizona businesses that own buildings, lease commercial space, or rely on
                  specialized equipment and inventory deserve a property program structured
                  around how the operation actually runs rather than a generic form written for
                  another state. A thorough review of{" "}
                  <strong className="text-foreground">
                    commercial property insurance Phoenix AZ
                  </strong>{" "}
                  coverage examines building values, business personal property limits, business
                  income calculations, equipment breakdown, and endorsement selections across
                  Phoenix, Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria. When
                  you are ready to move from research to a quoted proposal, work with a licensed
                  Arizona brokerage that will present the terms clearly and keep your leadership
                  team informed at every step.
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
                    Ready to Protect Your Business Property?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
                    When your operation is ready to evaluate commercial property coverage in
                    detail, Protegrity Insurance Brokerage can translate these concepts into
                    quoted options aligned with your buildings, contents, and business income
                    exposure. The next step is a structured conversation, not pressure: you set
                    the pace, and we provide the facts you need to decide with confidence.
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
