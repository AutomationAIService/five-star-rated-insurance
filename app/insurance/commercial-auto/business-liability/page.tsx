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
  title: "Commercial Auto Liability Insurance Phoenix AZ | Five Star",
  description:
    "Commercial auto liability insurance Phoenix AZ: bodily injury, property damage, hired and non-owned auto coverage across Scottsdale, Mesa, Tempe, Chandler, Gilbert.",
  alternates: {
    canonical: "/insurance/commercial-auto/business-liability",
  },
  openGraph: {
    title: "Commercial Auto Liability Insurance in Phoenix, AZ | Five Star Rated",
    description:
      "Business auto liability coverage for Phoenix companies: bodily injury, property damage, hired and non-owned auto protection across Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.",
    url: `${SITE_URL}/insurance/commercial-auto/business-liability`,
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
    "Marketing partner connecting Arizona businesses with Phoenix commercial auto liability insurance options and licensed support through Protegrity Insurance Brokerage.",
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
  name: "Commercial auto liability insurance in Phoenix, Arizona",
  serviceType: "Commercial auto liability insurance",
  provider: {
    "@type": "InsuranceAgency",
    name: "Five Star Rated Insurance",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "State",
    name: "Arizona",
  },
  url: `${SITE_URL}/insurance/commercial-auto/business-liability`,
  description:
    "Educational resource on Arizona commercial auto liability insurance for bodily injury, property damage, hired and non-owned auto, and business-use exposures across Maricopa County.",
}

export default function CommercialAutoLiabilityPhoenixPage() {
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
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=2000&q=80"
              alt="Commercial work truck on an Arizona highway, commercial auto liability insurance Phoenix AZ coverage for Arizona businesses"
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
                Commercial Auto Liability Insurance in Phoenix, AZ
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
                Arizona businesses that put vehicles on the road carry legal responsibility for
                every mile those vehicles travel, and the state expects financial proof that the
                business can answer for at-fault losses.{" "}
                <strong className="font-semibold text-primary-foreground">
                  Commercial auto liability insurance Phoenix AZ
                </strong>{" "}
                coverage protects companies from third-party injury and property damage claims and
                serves contractors, service operators, delivery businesses, and professional firms
                across Phoenix, Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.
              </p>
            </div>
          </section>

          <div className="bg-background">
            <div className="container mx-auto max-w-4xl px-4 py-14 md:py-20">
              <article className="prose prose-slate max-w-none space-y-12 text-foreground">
                {/* B. Overview */}
                <section aria-labelledby="overview-heading">
                  <h2 id="overview-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Overview: What Commercial Auto Liability Insurance Means in Phoenix
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Commercial auto liability insurance is the coverage that responds when a
                      business-owned or business-used vehicle injures another person or damages
                      property during the course of work. Arizona law, like every other state,
                      requires a minimum amount of liability coverage on vehicles operated on
                      public roads, and commercial use raises the stakes. A plumber driving a
                      work-loaded van from a Scottsdale residential job to a Tempe supply house is
                      operating a commercial vehicle even when traffic looks identical to the
                      family SUV in the next lane, and the rules and exposures that apply to that
                      van are materially different.
                    </p>
                    <p>
                      The core distinction between personal auto and commercial auto liability
                      comes from the intended use of the vehicle. Personal auto policies are
                      written for private household errands, commuting, and leisure trips, and
                      they contain a business-use exclusion that restricts coverage when a vehicle
                      is used in the course of employment beyond narrow commuting activities. When
                      an employee drives a company-owned pickup to a job site, or a contractor
                      uses a personal truck to haul customer materials for paid work, the personal
                      policy may deny the claim entirely because the loss facts fall outside the
                      policy&apos;s intended scope.
                    </p>
                    <p>
                      Commercial auto liability is built around those realities. Coverage responds
                      to at-fault losses arising from business-owned vehicles, business-use of
                      leased or rented vehicles, and, through hired-and-non-owned endorsements,
                      employee use of personal vehicles on company errands. Business auto
                      liability Phoenix Arizona programs pay for bodily injury and property
                      damage caused to third parties, up to the selected limits, along with legal
                      defense costs and certain supplementary expenses typically outlined on the
                      policy form.
                    </p>
                    <p>
                      Commercial auto liability has two fundamental components. Bodily injury
                      liability addresses medical costs, lost wages, pain and suffering, and
                      related damages owed to third parties injured by the at-fault vehicle.
                      Property damage liability pays to repair or replace vehicles, buildings,
                      fencing, and other property struck by the insured vehicle during covered
                      operations. Both components sit on the same declarations page, and both
                      respond when the business is legally responsible for the loss.
                    </p>
                    <p>
                      Arizona sets state-minimum liability limits for commercial vehicles that
                      satisfy the statute, but those minimums rarely reflect the exposure a
                      business actually carries. A single commercial accident on I-10 or the Loop
                      101 can produce medical and repair claims far larger than state-minimum
                      limits, and any shortfall flows directly to the business&apos;s balance
                      sheet and, in many cases, to the personal assets of an owner whose liability
                      is not fully insulated by the corporate structure. This is why most Phoenix
                      employers carry five hundred thousand to one million dollars in combined
                      single limit liability, paired with a commercial umbrella on larger
                      operations.
                    </p>
                    <p>
                      Coverage scales broadly. A single-vehicle business with one company van in
                      Gilbert can purchase a simple commercial auto policy, a growing
                      service-based company in Mesa can layer hired-and-non-owned coverage onto a
                      modest schedule, and a mid-size regional operator in west Phoenix can
                      structure a multi-vehicle commercial program with higher limits and umbrella
                      support. A licensed broker matches the structure to the business as it is
                      today and revisits it as the operation grows.
                    </p>
                  </div>
                </section>

                {/* C. What's covered */}
                <section aria-labelledby="covered-heading">
                  <h2 id="covered-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    What&apos;s Covered: Commercial Auto Liability Building Blocks
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    A commercial auto liability policy protects the business from third-party
                    claims arising out of the ownership, maintenance, or use of covered vehicles.
                    Each coverage part on the declarations page addresses a different slice of
                    that exposure, each has its own limit, and each works alongside physical
                    damage, cargo, and general liability to form a complete program. A sound
                    review looks at the parts together, because commercial claims often touch
                    several coverages at once, and gaps between coverages often become problems
                    only after a loss has already occurred.
                  </p>

                  <div className="mt-8 space-y-8">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Bodily Injury Liability
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Bodily injury liability responds when a covered vehicle causes injury to
                        another person during business operations. The coverage pays, up to the
                        selected limit, for medical expenses, rehabilitation costs, lost wages,
                        pain and suffering, and related damages the injured party claims after an
                        at-fault loss. Legal defense costs are generally paid in addition to the
                        liability limit, subject to the policy language. In commercial settings
                        across Phoenix, Scottsdale, and Mesa, bodily injury claims can escalate
                        quickly because many commercial vehicles are larger and heavier than
                        private cars, which often produces more serious injuries in at-fault
                        collisions.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Property Damage Liability
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Property damage liability pays to repair or replace property owned by
                        third parties when a covered vehicle is at fault, subject to the policy
                        limit. That property includes other vehicles, buildings, fencing, signage,
                        landscaping, and utility infrastructure struck during the course of work.
                        Contractor auto liability Arizona claims frequently involve incidents
                        inside customer property, such as backing into a client&apos;s gate in
                        Chandler or clipping a garage column during a Glendale service call, so
                        property damage exposure is not limited to traditional roadway accidents.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Combined Single Limit (CSL) vs. Split Limits
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Commercial auto policies express liability limits in one of two common
                        formats. A combined single limit, or CSL, sets a single per-accident cap
                        that can be allocated flexibly between bodily injury and property damage,
                        which is how most business auto policies are written today. Split limits
                        set separate caps per person for bodily injury, per accident for bodily
                        injury, and per accident for property damage. CSL generally provides more
                        usable capacity in serious accidents, because the entire limit is
                        available for whichever category of damages a claim actually involves, and
                        it is typically preferred on commercial programs of any meaningful size.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Hired Auto Liability
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Hired auto liability extends the policy to vehicles the business rents,
                        leases, hires, or borrows for short-term business use. The coverage
                        responds when a rented cargo van, a borrowed pickup, or a leased
                        replacement vehicle is involved in an at-fault accident during business
                        operations. Hired auto is essential for companies that supplement their
                        fleet with rentals during project surges or while a company vehicle is in
                        the shop, and it is a common requirement on commercial vehicle liability
                        insurance Phoenix programs that anticipate periodic equipment gaps.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Non-Owned Auto Liability
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Non-owned auto liability protects the business when an employee uses a
                        personal vehicle on company business and causes an at-fault accident.
                        Covered situations include running errands to pick up supplies, traveling
                        between client sites, visiting vendors, and similar work-related driving in
                        a vehicle the business does not own. Without this coverage, the business
                        itself can face liability for accidents the employee causes, and the
                        employee&apos;s personal insurer may decline coverage due to the same
                        business-use exclusions that justify a commercial program in the first
                        place.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Medical Payments and Uninsured/Underinsured Motorist
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Commercial auto policies typically include or offer medical payments
                        coverage for injuries to the driver and passengers of the covered
                        vehicle, regardless of fault, up to a defined limit. Uninsured and
                        underinsured motorist coverage responds when the at-fault driver lacks
                        adequate liability insurance to cover the harm caused. These are not
                        third-party liability coverages in the traditional sense; they are
                        first-party protections that sit alongside the liability section and help
                        close the financial gap when another driver is responsible for the loss.
                        Businesses generally align UM and UIM limits with their primary liability
                        limits so that the same level of protection applies no matter who is at
                        fault.
                      </p>
                    </div>
                  </div>
                </section>

                {/* D. Who needs */}
                <section aria-labelledby="who-needs-heading">
                  <h2 id="who-needs-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Who Needs Commercial Auto Liability in the Phoenix Area?
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Contractors running work trucks and vans across the Valley are among the
                      largest users of commercial auto liability. Plumbers, electricians, HVAC
                      technicians, roofers, and landscapers dispatching crews between residential
                      and commercial job sites in Phoenix, Mesa, Chandler, and Glendale operate
                      business-owned vehicles loaded with tools, equipment, and materials.
                      Service-based businesses such as pool service, cleaning companies, and pest
                      control operators travel similar routes on similar schedules, and every one
                      of those vehicles creates third-party liability exposure whenever it is on a
                      public road or a customer property.
                    </p>
                    <p>
                      Delivery and courier services supporting e-commerce, restaurants, retail,
                      and B2B logistics across the Phoenix metro also need dedicated commercial
                      auto liability. Sales representatives driving company-owned sedans and SUVs
                      for client visits in Scottsdale, Tempe, and Gilbert bring the same exposure
                      on a different vehicle profile. Real estate agents and property managers
                      shuttling between listings and maintenance calls in company or dedicated
                      business-use vehicles typically place coverage on commercial auto forms
                      rather than personal policies, both to clear the business-use exclusion and
                      to obtain liability limits appropriate to their asset exposure.
                    </p>
                    <p>
                      Mobile businesses occupy a growing segment in Arizona. Food trucks serving
                      events across the Valley, mobile repair services, mobile grooming, and
                      other operations where the vehicle is the workplace need commercial auto
                      liability along with tailored property and general liability programs. Small
                      businesses whose employees drive either company vehicles or personal
                      vehicles for work should evaluate hired-and-non-owned coverage even if they
                      own only one or two commercial units, because employee errands and client
                      trips generate liability exposure on personal vehicles that the business
                      typically cannot rely on personal policies to address.
                    </p>
                    <p>
                      Phoenix&apos;s economic momentum reinforces these categories. The
                      construction boom, an expanding service-based Valley economy, and continued
                      growth in mobile service businesses put more commercial vehicles on routes
                      that stretch from Peoria to Gilbert on a daily basis. Large commuting
                      distances between job sites magnify exposure, and a coordinated approach to
                      business vehicle insurance Phoenix AZ programs keeps liability limits,
                      endorsements, and driver standards aligned with how the operation actually
                      runs.
                    </p>
                  </div>
                </section>

                {/* E. Arizona considerations */}
                <section aria-labelledby="arizona-req-heading">
                  <h2 id="arizona-req-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Arizona Commercial Auto Liability Considerations
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Arizona sets state-minimum liability limits that apply to commercial
                      vehicles operated on public roads, and every business is expected to meet or
                      exceed those minimums at all times. Those figures satisfy the statute, but
                      they almost never match the exposure a commercial operation carries. Most
                      Phoenix businesses carry five hundred thousand to one million dollars in
                      combined single limit liability, because commercial claims routinely
                      generate medical and property damage costs that exceed state-minimum caps in
                      a single event, and because shippers, general contractors, landlords, and
                      municipal permits commonly require those higher limits as a condition of
                      doing business.
                    </p>
                    <p>
                      The business owner&apos;s personal exposure rises when policy limits do not
                      cover the full loss. Arizona courts handle at-fault commercial vehicle
                      accidents through standard negligence principles, and when damages exceed
                      policy limits the plaintiff can pursue the business and, in some
                      circumstances, the owner directly. Corporate structures provide meaningful
                      protection in many contexts, but they are not a substitute for adequate
                      liability insurance. An owner whose company van causes a serious accident
                      in Tempe with only state-minimum limits should expect significant
                      out-of-pocket exposure if damages escalate.
                    </p>
                    <p>
                      Underwriting classifies commercial vehicles by use: service, retail,
                      commercial, and long-haul, among others. Classification affects rating,
                      because a plumber&apos;s service van in Peoria presents different loss
                      patterns than a retail delivery truck running tight routes in central
                      Phoenix or a regional tractor working long-haul lanes. Driver eligibility
                      rules, MVR screening, and documented hiring standards directly influence
                      premium and acceptance. Carriers routinely review motor vehicle records on
                      every scheduled driver, and a single driver with a poor history can affect
                      the quote for the entire account.
                    </p>
                    <p>
                      Hired and non-owned auto liability is relevant even for businesses that do
                      not own commercial vehicles, because the moment an employee drives a personal
                      vehicle for company business the exposure exists. Hired and non-owned auto
                      liability Phoenix endorsements are inexpensive relative to the exposure they
                      address, and many commercial auto policies include modest hired-and-non-owned
                      limits by default, with the option to increase them as headcount and
                      operations grow. A commercial umbrella sits above auto liability, general
                      liability, and in many cases employers liability, providing additional
                      capacity when a single loss would exhaust primary limits.
                    </p>
                    <p>
                      Certain industries face filing requirements that go beyond the insurance
                      policy itself. DOT-regulated carriers, transportation network companies, and
                      other specialty operations may need federal filings such as Form BMC-91 for
                      liability and, where applicable, cargo filings that coordinate with the
                      underlying policy. Commercial auto liability and workers compensation
                      interact when an employee is injured in a work vehicle, because the injury
                      portion typically falls under workers compensation while third-party injury
                      to others falls under auto liability. Annual policy reviews keep limits,
                      endorsements, driver lists, and vehicle schedules aligned with the business
                      as it changes through the year.
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
                        Protegrity Insurance Brokerage, which means Arizona businesses work with
                        licensed commercial insurance professionals who place coverage with
                        carriers using state-approved forms and honest eligibility standards. Our
                        team understands Valley business operations, from the routing density of a
                        Phoenix delivery service to the project logistics of a Scottsdale general
                        contractor, and we translate that understanding into clear, accurate
                        submissions that carriers can quote efficiently.
                      </p>
                      <p>
                        We maintain access to multiple commercial auto carriers with distinct
                        appetites for contractors, service operators, delivery businesses, and
                        professional firms, which allows us to compare pricing and terms across
                        markets rather than pitching a single company&apos;s product to every
                        business. That matters on business auto insurance quotes Phoenix requires,
                        because the carrier that offers the sharpest rate on a single-vehicle
                        plumbing operation may not be the strongest market for a twenty-unit
                        delivery fleet, and the reverse is equally true.
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
                    Frequently Asked Questions About Phoenix Commercial Auto Liability
                  </h2>

                  <div className="mt-8 space-y-10">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How is commercial auto liability different from personal auto liability?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Commercial auto liability is written for business-use vehicles and covers
                        the legal responsibility a business has when a company-owned or
                        business-used vehicle causes injury or property damage to a third party.
                        Personal auto liability is written for private household use and contains
                        a business-use exclusion that restricts coverage when the vehicle is used
                        in the course of employment beyond limited commuting. Commercial policies
                        typically carry higher liability limits, include hired-and-non-owned
                        endorsements, and evaluate drivers, vehicles, and operating radius in
                        ways personal auto does not. Attempting to place work vehicles on a
                        personal policy often leads to denied claims when the facts involve
                        commercial activity.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How much commercial auto liability insurance does my Phoenix business need?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        The answer depends on the business&apos;s assets, revenue, vehicle type,
                        radius of operations, and contractual requirements. Most Phoenix
                        employers carry five hundred thousand to one million dollars in combined
                        single limit liability, with larger operations pairing the auto policy
                        with a commercial umbrella for catastrophic protection. Contracts with
                        general contractors, shippers, landlords, and municipal permits frequently
                        require at least one million dollars on auto liability, and those
                        contractual minimums often drive the limit selection in practice. A
                        licensed broker helps size limits to the real exposure the operation
                        carries rather than the statutory floor.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is hired and non-owned auto liability coverage?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Hired auto liability covers the business when it rents, leases, or borrows
                        a vehicle for work purposes, and non-owned auto liability covers the
                        business when an employee uses a personal vehicle on company business.
                        Both sit on the commercial auto policy as endorsements or separate
                        coverage parts, and they respond to the business&apos;s legal
                        responsibility when an at-fault accident arises in one of those
                        situations. Any business whose employees rent vehicles, run errands in
                        personal cars, or visit clients on company time should carry hired and
                        non-owned auto liability Phoenix coverage, because the personal insurer
                        may deny the claim due to the business-use exclusion.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Do I need commercial auto liability if I only use my personal vehicle occasionally for work?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Occasional business use of a personal vehicle is a common gap between
                        personal and commercial policies. Personal auto policies often cover
                        incidental commuting but exclude broader business use, and the moment the
                        vehicle is used for paid work, client visits, or hauling business
                        materials, the exposure shifts. Self-employed professionals, sole
                        proprietors, and small business owners in this situation usually either
                        move the vehicle onto a commercial auto policy or add specific business-use
                        endorsements. A licensed broker can review the facts of the operation and
                        recommend the right path rather than leave the business exposed on the
                        assumption that personal coverage is enough.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What happens if my employee causes an accident in a company vehicle?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        When an employee causes an at-fault accident in a company-owned vehicle
                        during the course of work, the commercial auto liability policy generally
                        responds to third-party claims for bodily injury and property damage, up
                        to the selected limit. Legal defense is typically provided by the carrier,
                        and settlement or verdict amounts up to the limit are paid on behalf of
                        the business. If the employee is injured in the accident, workers
                        compensation generally handles those injuries under a separate policy.
                        Documentation of the incident, prompt carrier notice, and cooperation with
                        the claim investigation are important steps in every scenario.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does commercial auto liability cover lawsuits from accident victims?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Yes. Commercial auto liability responds to both first-party claim notices
                        and third-party lawsuits arising from at-fault accidents, subject to the
                        policy terms. The carrier generally provides legal defense, which is often
                        paid in addition to the policy limit on commercial forms, and funds
                        settlements or verdicts up to the selected limit. When a lawsuit seeks
                        damages beyond the limit, the business may face exposure for the excess,
                        which is one reason many operations maintain a commercial umbrella above
                        primary auto liability to provide additional capacity on catastrophic
                        losses.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is combined single limit (CSL) and how does it differ from split limits?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Combined single limit, or CSL, is a single per-accident liability cap that
                        can be allocated flexibly between bodily injury and property damage up to
                        the total limit. Split limits express liability as three separate caps: a
                        per-person bodily injury limit, a per-accident bodily injury limit, and a
                        per-accident property damage limit. CSL generally provides more usable
                        capacity on serious accidents, because the entire limit is available for
                        whichever categories of damages the loss actually involves. Most
                        commercial auto policies of meaningful size are written on CSL for this
                        reason, though both formats are available depending on the carrier and
                        the account.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How do my company&apos;s driver records affect my commercial auto premium?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Driver records are one of the largest factors in commercial auto pricing.
                        Carriers review motor vehicle records on every scheduled driver and weigh
                        accidents, moving violations, license suspensions, and major infractions
                        such as DUI when setting the premium. A single driver with a poor record
                        can impact the rate for the entire policy, which is why many businesses
                        adopt formal driver qualification standards, run MVRs at hire and at
                        regular intervals, and retrain or reassign drivers whose records fall
                        below the company&apos;s written threshold. Consistent discipline over
                        multiple policy periods generally shows up in stable or improving renewal
                        pricing.
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
                    Commercial auto liability sits at the center of a broader business insurance
                    program. Operations running multiple vehicles typically structure the
                    underlying policy through{" "}
                    <Link
                      href="/insurance/commercial-auto/fleet-coverage"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      fleet coverage
                    </Link>
                    , and trucking operators add{" "}
                    <Link
                      href="/insurance/commercial-auto/cargo-protection"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      cargo protection
                    </Link>{" "}
                    for the freight they haul. Exposures outside the vehicle typically fall under{" "}
                    <Link
                      href="/insurance/business/general-liability"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      general liability
                    </Link>{" "}
                    for third-party claims at job sites and customer locations,{" "}
                    <Link
                      href="/insurance/business/property-coverage"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      property coverage
                    </Link>{" "}
                    for owned buildings, tools, and inventory, and{" "}
                    <Link
                      href="/insurance/business/workers-compensation"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      workers compensation
                    </Link>{" "}
                    for employees injured in the course of work. For catastrophic capacity above
                    the primary auto and general liability limits, review{" "}
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
                  Arizona businesses that operate vehicles for work deserve a liability program
                  built around how the operation actually runs, not a generic form written for
                  another state or an underfunded personal policy stretched past its intended
                  scope. A thorough review of{" "}
                  <strong className="text-foreground">
                    commercial auto liability insurance Phoenix AZ
                  </strong>{" "}
                  coverage examines vehicles, drivers, hired-and-non-owned exposure, contractual
                  minimums, and umbrella capacity across Phoenix, Scottsdale, Mesa, Tempe,
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
                    Ready to Protect Your Business on the Road?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
                    When your operation is ready to evaluate commercial auto liability in detail,
                    Protegrity Insurance Brokerage can translate these concepts into quoted
                    options aligned with your vehicles, drivers, and contractual requirements. The
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
