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
  title: "General Liability Insurance Phoenix AZ | Five Star Rated",
  description:
    "General liability insurance Phoenix AZ: CGL coverage for third-party bodily injury, property damage, and advertising claims across Scottsdale, Mesa, Tempe, Chandler.",
  alternates: {
    canonical: "/insurance/business/general-liability",
  },
  openGraph: {
    title: "General Liability Insurance in Phoenix, AZ | Five Star Rated",
    description:
      "Commercial general liability coverage for Phoenix businesses: third-party bodily injury, property damage, advertising injury, and products-completed operations across Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.",
    url: `${SITE_URL}/insurance/business/general-liability`,
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
    "Marketing partner connecting Arizona businesses with Phoenix general liability insurance options and licensed support through Protegrity Insurance Brokerage.",
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
  name: "General liability insurance in Phoenix, Arizona",
  serviceType: "Commercial general liability insurance",
  provider: {
    "@type": "InsuranceAgency",
    name: "Five Star Rated Insurance",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "State",
    name: "Arizona",
  },
  url: `${SITE_URL}/insurance/business/general-liability`,
  description:
    "Educational resource on Arizona commercial general liability insurance for bodily injury, property damage, personal and advertising injury, and products-completed operations across Maricopa County.",
}

export default function GeneralLiabilityInsurancePhoenixPage() {
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
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2000&q=80"
              alt="Professional team meeting in a modern Phoenix office, general liability insurance Phoenix AZ coverage for Arizona businesses"
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
                General Liability Insurance in Phoenix, AZ
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
                Every Arizona business faces daily exposure to third-party claims from customers,
                vendors, and visitors, and a single accident or allegation can threaten years of
                careful work.{" "}
                <strong className="font-semibold text-primary-foreground">
                  General liability insurance Phoenix AZ
                </strong>{" "}
                coverage is the foundation of a sound business insurance program and serves
                contractors, retailers, restaurants, and professional firms across Phoenix,
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
                    Overview: What General Liability Insurance Means in Phoenix
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Commercial general liability, frequently shortened to CGL, is the policy
                      that responds when a business is legally responsible for third-party bodily
                      injury, property damage, or personal and advertising injury arising out of
                      its operations, premises, or completed work. It is widely considered the
                      foundation of a small business insurance program, because it addresses the
                      everyday risks that almost every company faces when customers, vendors, and
                      visitors interact with its operations. A customer who slips on a wet floor
                      in a Tempe storefront, a contractor who accidentally damages a client&apos;s
                      fixtures during a Gilbert remodel, or a business whose marketing materials
                      draw an infringement complaint all fall within the types of claims general
                      liability was built to handle.
                    </p>
                    <p>
                      General liability addresses three main categories of claim. Third-party
                      bodily injury covers medical expenses, legal damages, and associated costs
                      when a non-employee is injured on the business&apos;s premises or by its
                      operations. Third-party property damage covers repair or replacement costs
                      when the business damages property belonging to others during the course of
                      work. Personal and advertising injury covers specific non-bodily offenses
                      such as libel, slander, copyright infringement in advertising, and wrongful
                      eviction. Together, these coverages form a broad layer of defense against
                      the kinds of allegations that can arise in any customer-facing or
                      project-based operation.
                    </p>
                    <p>
                      Almost every Phoenix business needs general liability, regardless of size or
                      industry. A sole proprietor selling at craft fairs, a home-based consultant
                      meeting clients by video, a family-owned restaurant in central Phoenix, and
                      a forty-employee construction subcontractor in Glendale all carry third-party
                      exposure in different forms. The question for most operations is not whether
                      general liability is appropriate, but how the limits, endorsements, and
                      additional coverages fit the specific activities the business conducts.
                    </p>
                    <p>
                      General liability stands apart from a Business Owner&apos;s Policy, or BOP,
                      though the two products overlap significantly for small businesses. A
                      standalone CGL policy covers only liability exposures. A BOP bundles general
                      liability with commercial property insurance, and often business income
                      coverage, into a single small-business package that is typically less
                      expensive than buying each coverage separately. Many Valley retailers,
                      offices, and light service operations fit cleanly into a BOP. Contractors,
                      higher-risk trades, and operations with unusual exposures often build the
                      program around a standalone CGL with tailored endorsements instead.
                    </p>
                    <p>
                      Landlords, clients, and contract counterparties frequently require proof of
                      general liability coverage before a business can sign a commercial lease,
                      onboard with a major customer, or register as a vendor. Certificates of
                      insurance listing specific limits, additional-insured status, and policy
                      dates are a routine part of doing business in Phoenix, Scottsdale, and the
                      surrounding metro, and inability to produce one often delays or disqualifies
                      the engagement altogether. Carrying adequate general liability is both a
                      risk-management decision and a commercial-readiness requirement.
                    </p>
                    <p>
                      Coverage scales across the full range of Arizona operations. Single-member
                      consulting practices, sole-proprietor contractors, restaurants, service-based
                      companies, and mid-sized firms all have paths into general liability that
                      fit their revenue, industry, and contractual obligations. A licensed broker
                      matches the form, limits, and endorsements to the business as it operates
                      today and revisits the structure as revenue and services change.
                    </p>
                  </div>
                </section>

                {/* C. What's covered */}
                <section aria-labelledby="covered-heading">
                  <h2 id="covered-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    What&apos;s Covered: General Liability Insurance Building Blocks
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    A commercial general liability policy protects the business from a broad
                    range of third-party claims arising out of its operations, premises, and
                    completed work. Each coverage part on the declarations page addresses a
                    specific category of loss, each has its own limit or sublimit, and each works
                    alongside commercial property, workers compensation, and commercial auto to
                    form a complete program. Reviewing the parts together rather than in
                    isolation keeps limits, endorsements, and additional-insured requirements
                    aligned with the customer and vendor contracts the business actually signs.
                  </p>

                  <div className="mt-8 space-y-8">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Bodily Injury Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Bodily injury coverage responds when a third party is physically injured
                        on the business&apos;s premises or by its operations. The policy pays for
                        medical expenses, associated legal damages, and settlement or verdict
                        amounts owed to the injured party, up to the per-occurrence limit and
                        subject to the aggregate limit. Common examples include slip-and-fall
                        incidents in retail locations, a customer struck by falling inventory in a
                        warehouse, or a visitor injured at a job site during construction. In
                        Phoenix, premises-liability exposure grows with foot traffic and customer
                        interaction, which is why storefronts, restaurants, and service locations
                        rely heavily on this coverage.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Property Damage Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Property damage coverage pays to repair or replace property belonging to
                        others when the business is legally responsible for the loss. Examples
                        include a contractor damaging a client&apos;s drywall while installing
                        equipment in Chandler, a cleaning crew knocking over expensive electronics
                        in a Scottsdale office, or an HVAC technician causing a leak that damages
                        finished flooring in Mesa. The coverage responds to repair costs,
                        replacement costs, and associated damages, subject to the policy limit
                        and exclusions. It is a core protection for any contractor general
                        liability Phoenix program and for service-based businesses that routinely
                        work inside customer spaces.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Personal and Advertising Injury Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Personal and advertising injury covers a defined list of non-bodily
                        offenses, including libel, slander, defamation, false arrest, malicious
                        prosecution, wrongful eviction, copyright infringement in advertising, and
                        certain misuse of another party&apos;s advertising ideas or style. These
                        claims arise in ordinary marketing and communication activities as well as
                        in dealings with customers, vendors, and competitors. A small Phoenix
                        business that publishes a comparison ad, uses customer testimonials on a
                        website, or has a social dispute escalate into legal action may find this
                        coverage directly relevant. The policy language defines the specific
                        offenses covered, so the details matter.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Products-Completed Operations Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Products-completed operations coverage responds to bodily injury or
                        property damage caused by products the business sells or by work the
                        business has finished. A restaurant whose food causes a customer to
                        become ill, a retailer whose product fails and injures the user, or a
                        contractor whose completed installation leaks weeks after the job ends all
                        fall within this coverage part. Products-completed operations limits are
                        tracked against a separate aggregate on most CGL forms, which means they
                        can be exhausted independently of the general aggregate. Contractors,
                        restaurants, and retailers in Scottsdale, Tempe, and across the Valley
                        rely on this coverage well after a project or sale is finished.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Medical Payments Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Medical payments coverage on a general liability policy provides a small
                        no-fault benefit for minor injuries to non-employees on the
                        business&apos;s premises or at its operations. The coverage allows the
                        business to pay reasonable medical expenses quickly, regardless of fault,
                        which can resolve minor incidents before they escalate into larger claims
                        or lawsuits. Typical limits are modest compared with the bodily-injury
                        coverage, and the benefit sits alongside rather than inside the main
                        liability limit. Retailers, restaurants, and service locations across
                        Phoenix frequently use this benefit on routine incidents without ever
                        triggering the broader liability coverage.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Defense Costs and Legal Expenses
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        General liability policies generally provide legal defense for claims and
                        lawsuits alleging covered offenses, with defense costs typically paid in
                        addition to the policy limit on the standard CGL form. The carrier
                        appoints counsel, manages discovery, and pays attorney fees and court
                        costs associated with the defense. Defense is often the most valuable
                        part of the coverage for small businesses, because legal expenses can run
                        well into five figures even on claims that ultimately do not result in a
                        paid settlement. The duty to defend typically applies to any claim that
                        could potentially fall within coverage, which is a broader standard than
                        the duty to pay damages.
                      </p>
                    </div>
                  </div>
                </section>

                {/* D. Who needs */}
                <section aria-labelledby="who-needs-heading">
                  <h2 id="who-needs-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Who Needs General Liability Coverage in the Phoenix Area?
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Contractors and construction trades are among the largest users of
                      commercial general liability in the Valley. Plumbers, electricians, HVAC
                      technicians, roofers, framers, and finishers carrying general liability
                      across Phoenix, Mesa, Chandler, and Glendale face routine property damage
                      exposure inside customer homes and commercial buildings, along with
                      premises-liability exposure whenever clients and visitors access an active
                      job site. Retail and storefront businesses in Scottsdale, Gilbert, and
                      central Phoenix carry parallel exposure from foot traffic, and restaurants,
                      cafes, and food-service operations add the distinct exposure of food-borne
                      illness and slip-and-fall incidents in customer seating areas.
                    </p>
                    <p>
                      Professional services also benefit from general liability, even when the
                      day-to-day work is desk-based. Consultants meeting clients in leased
                      offices, marketing firms hosting events, real estate agents showing
                      properties, and mortgage brokers receiving visitors in their branches all
                      face premises and advertising-injury exposure that standalone professional
                      liability policies do not address. Service-based businesses such as
                      cleaning, landscaping, pool service, and pest control operators visiting
                      customer homes and commercial sites carry similar property damage and
                      premises-liability exposure across Tempe, Peoria, and the broader Valley.
                    </p>
                    <p>
                      Event organizers and mobile businesses fit naturally into general liability
                      coverage because their operations move across locations and involve
                      customer interaction in settings the business does not control. Home-based
                      businesses are often underinsured because owners assume their homeowners
                      policy addresses business activity. Most homeowners policies specifically
                      exclude business-related claims, which means a client injured during a home
                      visit or a product sold from a home office leaves the business exposed
                      without a separate CGL policy. Commercial tenants leasing space in Phoenix
                      and the surrounding metro frequently face contractual CGL requirements in
                      the lease itself, with specific limits and additional-insured status for
                      the landlord.
                    </p>
                    <p>
                      Phoenix&apos;s economic climate reinforces the need. A strong construction
                      sector, a deep service economy, a growing restaurant and retail base, and
                      Arizona&apos;s broadly pro-business environment all increase the frequency
                      and variety of third-party interactions small businesses have with their
                      customers and communities. Arizona small business liability insurance
                      programs are built to match that reality, with limits, endorsements, and
                      pricing that reflect the specific activities the business performs rather
                      than a generic national profile.
                    </p>
                  </div>
                </section>

                {/* E. Arizona considerations */}
                <section aria-labelledby="arizona-req-heading">
                  <h2 id="arizona-req-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Arizona General Liability Insurance Considerations
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      General liability limits are typically expressed as a per-occurrence limit
                      and an aggregate limit. The per-occurrence limit caps the amount the carrier
                      will pay for any single claim or related group of claims. The aggregate
                      limit caps the total the carrier will pay across all covered claims during
                      the policy period. A common small-business structure is one million dollars
                      per occurrence and two million dollars aggregate, with a separate aggregate
                      that applies to products-completed operations on many forms. Larger
                      operations, higher-risk trades, and contractually required limits often move
                      the structure to two million per occurrence or higher, with umbrella
                      coverage layered above.
                    </p>
                    <p>
                      Industry and operations directly influence premium. Low-risk professional
                      services such as consulting and accounting generally pay modest premiums
                      relative to revenue, while high-risk trades such as roofing, tree work, and
                      certain construction operations pay significantly more. Underwriters rely
                      on accurate descriptions of the business&apos;s activities, annual revenue,
                      payroll, subcontractor usage, and geographic footprint to price the account.
                      Listing every activity accurately on the application matters, because a
                      claim arising from an undisclosed operation can face coverage challenges at
                      the exact moment the business needs the policy to respond.
                    </p>
                    <p>
                      Additional-insured endorsements are a routine part of commercial general
                      liability Phoenix programs. They extend specific coverages to a named third
                      party, usually a landlord, a general contractor, a customer, or a vendor,
                      and are commonly required by contract. Certificate of insurance forms,
                      abbreviated as COI, memorialize the coverage, limits, and additional-insured
                      status for the certificate holder. Requirements vary by industry,
                      construction contracts typically specify the most detailed provisions, and
                      brokers familiar with Arizona commercial practice keep these requirements
                      straight at binding and at renewal.
                    </p>
                    <p>
                      General liability interacts with other business policies at predictable
                      points. Commercial property insurance handles damage to the business&apos;s
                      own building, tools, and inventory. Workers compensation handles
                      employee-injury exposure that CGL specifically excludes. Commercial auto
                      handles vehicle-related liability that general liability excludes for owned
                      vehicles. A Business Owner&apos;s Policy can combine CGL and commercial
                      property into a cost-effective package for many small retailers, offices,
                      and light service operations, while larger or more complex businesses
                      typically build the program from standalone CGL and property policies
                      instead.
                    </p>
                    <p>
                      Annual policy reviews keep limits aligned with the business as it grows.
                      Revenue changes, new service lines, added locations, and new contractual
                      requirements all affect the program, and the best time to discover a gap is
                      at renewal rather than after a claim. Umbrella insurance sits above general
                      liability, commercial auto liability, and in many cases employers liability,
                      providing additional capacity for catastrophic losses that would otherwise
                      exceed primary policy limits. For growing Phoenix business liability quotes
                      reviews, umbrella is frequently the most cost-effective way to add
                      meaningful protection without substantially raising primary-policy premiums.
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
                        understands how Valley small and mid-sized businesses actually operate,
                        from storefronts and restaurants in central Phoenix to contractors and
                        service companies working across Scottsdale, Mesa, and Chandler, and we
                        translate that understanding into clear, accurate submissions that
                        carriers can quote efficiently.
                      </p>
                      <p>
                        We maintain access to multiple commercial carriers with distinct
                        appetites for retailers, professional services, contractors, and
                        higher-risk trades, which allows us to compare pricing and terms across
                        markets rather than pitching a single company&apos;s product to every
                        business. That matters on general liability, because the carrier that
                        offers the sharpest rate for a consulting practice in Gilbert may not be
                        the strongest market for a roofing contractor in Glendale, and the reverse
                        is equally true. Matching the market to the risk profile is where
                        experienced brokerage support earns its keep.
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
                    Frequently Asked Questions About Phoenix General Liability Insurance
                  </h2>

                  <div className="mt-8 space-y-10">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What does general liability insurance cover for my Phoenix business?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        General liability covers third-party bodily injury, third-party property
                        damage, and personal and advertising injury arising out of the
                        business&apos;s operations, premises, or completed work. Common examples
                        include a customer slip-and-fall at a Tempe storefront, a contractor
                        damaging a client&apos;s flooring in Gilbert, or an advertising claim
                        alleging copyright infringement. The policy pays for medical expenses,
                        repair or replacement of damaged property, legal defense, and settlement
                        or verdict amounts up to the selected limit. It does not cover employee
                        injuries, which fall under workers compensation, or vehicle-related
                        liability on owned commercial vehicles, which falls under commercial auto.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How much general liability insurance do I need in Arizona?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        A common baseline for small businesses is one million dollars per
                        occurrence with a two million dollar aggregate, which aligns with the
                        limits most landlords, clients, and vendors require. Higher-risk trades
                        and operations with substantial contractual exposure frequently carry two
                        million per occurrence or more, often paired with a commercial umbrella
                        for catastrophic protection. The right limit depends on the business&apos;s
                        industry, revenue, physical presence, and contractual commitments. A
                        licensed broker reviews the lease agreements, customer contracts, and
                        vendor requirements already in place before recommending a limit that fits
                        both the exposure and the obligations the business has already accepted.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is the difference between general liability and a Business Owner&apos;s
                        Policy (BOP)?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        A standalone general liability policy covers only liability exposures. A
                        Business Owner&apos;s Policy bundles general liability with commercial
                        property insurance, and often business income coverage, into a single
                        package typically priced lower than buying each line separately. BOPs are
                        generally available for small retailers, offices, restaurants, and light
                        service operations with modest size and risk profiles. Contractors,
                        higher-risk trades, and operations with unusual exposures typically build
                        the program around standalone CGL and property policies with tailored
                        endorsements instead. A broker can evaluate which structure fits the
                        business&apos;s industry, size, and risk profile.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Do I need general liability insurance for my home-based business in Phoenix?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Yes, in almost every case. Most homeowners policies specifically exclude
                        business-related claims, which leaves a home-based operator exposed when a
                        client is injured during a home visit, when a product sold from the home
                        office causes harm, or when a client or vendor alleges an advertising
                        offense. General liability is available for home-based businesses at
                        modest premiums relative to the protection provided, and the policy can
                        extend to meetings, events, and services performed at customer locations.
                        Consultants, designers, e-commerce operators, and service professionals
                        working from home in Scottsdale, Mesa, or Peoria commonly carry CGL for
                        exactly these reasons.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is an additional insured endorsement and when do I need one?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        An additional-insured endorsement extends certain coverages of the
                        business&apos;s general liability policy to a named third party, usually a
                        landlord, a general contractor, a customer, or a vendor. It is commonly
                        required by commercial leases, construction contracts, and vendor
                        agreements, and is memorialized on a certificate of insurance issued to
                        the certificate holder. The endorsement does not expand the overall
                        limits; it extends the same protection to the designated party for claims
                        arising out of the business&apos;s work. Requests for additional-insured
                        status are a routine part of commercial operations in Phoenix and should
                        be reviewed before the underlying contract is signed.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How much does general liability insurance cost for a small business in Arizona?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Premium varies widely with industry, revenue, payroll, claims history,
                        and specific operations. Low-risk professional services can see annual
                        premiums in the mid-hundreds of dollars for one million dollar limits,
                        while higher-risk trades such as roofing or general contracting can see
                        significantly higher premiums tied to payroll and revenue. Accurate
                        disclosure of operations, consistent claim history, and appropriate
                        deductible selection all influence the quote. Comparing pricing across
                        multiple carriers through a licensed brokerage typically produces a
                        cleaner benchmark than any single quote, because carrier appetites for
                        specific industries vary and the sharpest rate is rarely with the same
                        company across industries.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does general liability cover employee injuries?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        No. General liability specifically excludes bodily injury to employees
                        arising out of and in the course of employment, because that exposure is
                        handled through workers compensation under Arizona law. Arizona requires
                        workers compensation for most employers with one or more employees, and
                        the policy responds to medical expenses, lost wages, and related benefits
                        for employees injured on the job. General liability remains available for
                        non-employee injuries, such as customers and visitors, and the two
                        policies work together to form a complete liability program. Businesses
                        with employees should not rely on general liability alone.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is products-completed operations coverage and do I need it?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Products-completed operations responds to bodily injury or property
                        damage caused by products the business has sold or by work the business
                        has finished. A restaurant facing a food-borne illness claim, a retailer
                        dealing with a product defect, or a contractor handling a post-completion
                        leak at a Chandler job all rely on this coverage. It is included on most
                        standard CGL forms and typically runs against its own aggregate limit.
                        Nearly every product seller, restaurant, and contractor needs it in force,
                        and operations whose work carries long-term risk, such as construction
                        trades, may negotiate longer tail coverage or additional limits based on
                        contractual requirements.
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
                    General liability works best as part of a broader business insurance program.
                    Operations that own or lease buildings, equipment, or inventory add{" "}
                    <Link
                      href="/insurance/business/property-coverage"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      property coverage
                    </Link>{" "}
                    for physical assets, and operations with employees carry{" "}
                    <Link
                      href="/insurance/business/workers-compensation"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      workers compensation
                    </Link>{" "}
                    to handle employee-injury exposure that CGL excludes. Businesses running
                    vehicles for work extend the program through{" "}
                    <Link
                      href="/insurance/commercial-auto/fleet-coverage"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      fleet coverage
                    </Link>{" "}
                    for multi-vehicle operations or{" "}
                    <Link
                      href="/insurance/commercial-auto/business-liability"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      business liability auto
                    </Link>{" "}
                    for the underlying commercial auto liability structure. For catastrophic
                    capacity above primary general liability and auto liability limits, review{" "}
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
                  Arizona businesses that interact with customers, work on client property, or
                  lease commercial space deserve a liability program built around the activities
                  they actually perform rather than a generic form written for another state. A
                  thorough review of{" "}
                  <strong className="text-foreground">general liability insurance Phoenix AZ</strong>{" "}
                  coverage examines operations, revenue, contractual requirements, and
                  additional-insured obligations across Phoenix, Scottsdale, Mesa, Tempe,
                  Chandler, Glendale, Gilbert, and Peoria. When you are ready to move from
                  research to a quoted proposal, work with a licensed Arizona brokerage that will
                  present the terms clearly and keep your leadership team informed at every step.
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
                    Ready to Protect Your Business?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
                    When your operation is ready to evaluate general liability in detail,
                    Protegrity Insurance Brokerage can translate these concepts into quoted
                    options aligned with your industry, revenue, and contractual requirements. The
                    next step is a structured conversation, not pressure: you set the pace, and we
                    provide the facts you need to decide with confidence.
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
