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
  title: "Commercial Fleet Insurance Phoenix AZ | Five Star Rated",
  description:
    "Commercial fleet insurance Phoenix AZ: business auto liability, physical damage, and HNOA coverage for fleets across Scottsdale, Mesa, Tempe, Chandler, Gilbert.",
  alternates: {
    canonical: "/insurance/commercial-auto/fleet-coverage",
  },
  openGraph: {
    title: "Commercial Fleet Insurance in Phoenix, AZ | Five Star Rated",
    description:
      "Business fleet insurance for Phoenix companies: commercial auto liability, physical damage, hired and non-owned coverage across Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.",
    url: `${SITE_URL}/insurance/commercial-auto/fleet-coverage`,
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
    "Marketing partner connecting Arizona businesses with Phoenix commercial fleet insurance options and licensed support through Protegrity Insurance Brokerage.",
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
  name: "Commercial fleet insurance in Phoenix, Arizona",
  serviceType: "Commercial fleet auto insurance",
  provider: {
    "@type": "InsuranceAgency",
    name: "Five Star Rated Insurance",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "State",
    name: "Arizona",
  },
  url: `${SITE_URL}/insurance/commercial-auto/fleet-coverage`,
  description:
    "Educational resource on Arizona commercial fleet insurance for business auto liability, physical damage, hired and non-owned auto, and fleet safety across Maricopa County.",
}

export default function CommercialFleetInsurancePhoenixPage() {
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
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2000&q=80"
              alt="Commercial work trucks and delivery vans lined up at a business facility, commercial fleet insurance Phoenix AZ coverage for Arizona businesses"
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
                Commercial Fleet Insurance Coverage in Phoenix, AZ
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
                Phoenix businesses depend on dependable vehicles, trained drivers, and protection
                that scales as the fleet grows.{" "}
                <strong className="font-semibold text-primary-foreground">
                  Commercial fleet insurance Phoenix AZ
                </strong>{" "}
                coverage consolidates liability, physical damage, and specialty protections into a
                single contract that serves contractors, service companies, and logistics operators
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
                    Overview: What Commercial Fleet Insurance Means in Phoenix
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      In commercial insurance, a fleet policy is a structured business auto contract
                      that covers multiple company-owned vehicles under one set of coverage parts
                      and a single renewal cycle, rather than separate policies for each unit. Where
                      a personal auto policy lists one or two vehicles used for private errands and
                      commuting, a fleet policy is built around commercial use: deliveries, service
                      calls, job-site travel, sales territories, and other work-related driving that
                      a household policy excludes. That distinction matters at claim time, because
                      the endorsements, exclusions, and liability structures inside a commercial
                      contract align with how Phoenix businesses actually operate.
                    </p>
                    <p>
                      Most carriers recognize fleet status once a business garages approximately
                      five or more vehicles at the same time, though the threshold varies by company
                      and can be lower for certain industries. Below that count, carriers typically
                      write individual commercial auto policies per vehicle. Above it, fleet rating
                      applies, which generally produces more efficient pricing per unit,
                      consolidated billing, simpler vehicle additions and deletions during the
                      policy term, and a single declarations page your operations manager can
                      reference for every truck, van, and passenger vehicle in service across the
                      Valley.
                    </p>
                    <p>
                      Fleet insurance Phoenix Arizona coverage supports a wide range of operators,
                      including contracting companies with service trucks on residential and
                      commercial projects, HVAC and plumbing firms dispatching technicians across
                      the Valley, landscaping and pool service businesses running daily route
                      schedules, delivery and courier operations moving goods between Phoenix metro
                      warehouses and customer addresses, property management companies with
                      maintenance crews, sales organizations whose representatives drive
                      company-owned cars among regional clients, and mobile food and service
                      operators whose vehicles are central to revenue.
                    </p>
                    <p>
                      Personal auto policies contain a business-use exclusion that restricts
                      coverage when a vehicle is used in the course of employment beyond limited
                      activities such as ordinary commuting. If an employee drives a company-owned
                      pickup to a job site, or a contractor uses a personal truck to haul tools and
                      customer materials for paid work, the personal policy may deny the claim
                      entirely. Commercial coverage, including hired-and-non-owned protection where
                      appropriate, is designed to respond to those facts without the coverage
                      disputes that commonly surface on personal contracts written for private use.
                    </p>
                    <p>
                      Arizona&apos;s commercial auto market evaluates fleet accounts on driver
                      records, vehicle classifications, radius of operations, cargo carried, prior
                      loss history, safety programs, and the business&apos;s years of experience in
                      its industry. Underwriters frequently request motor vehicle record checks on
                      every scheduled driver, copies of the fleet safety manual where one exists,
                      and evidence of telematics or GPS-tracked monitoring when the business uses
                      those tools. Submissions that include organized driver lists, clean equipment
                      schedules, and supportive narrative context generally receive sharper quotes
                      than accounts submitted with incomplete data.
                    </p>
                    <p>
                      Fleet programs scale across a broad range of operations, from a small
                      service-based company garaging five vans in Mesa or Gilbert to larger
                      regional operators running dozens of trucks out of distribution facilities in
                      west Phoenix or Glendale. A licensed broker can match the business with
                      carriers whose appetite fits the vehicle classes, drivers, and revenue
                      profile involved, and can structure deductibles and limits that reflect what
                      leadership is prepared to retain versus transfer. The result is a program
                      that grows with the business, with endorsements and equipment schedules
                      updated throughout the year rather than locked to a renewal date.
                    </p>
                  </div>
                </section>

                {/* C. What's covered */}
                <section aria-labelledby="covered-heading">
                  <h2 id="covered-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    What&apos;s Covered: Commercial Fleet Insurance Building Blocks
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    Fleet policies bundle several commercial auto coverage parts into a single
                    declarations page. Each part responds to a different set of facts at claim time,
                    and each one carries its own limits, deductibles, and conditions. A sound
                    business fleet insurance Arizona program reviews every component together,
                    because liability protects third parties, physical damage protects your
                    vehicles, and additional coverages close gaps that the primary liability and
                    physical damage sections leave open by design.
                  </p>

                  <div className="mt-8 space-y-8">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Commercial Auto Liability Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Commercial auto liability responds when a scheduled fleet vehicle causes
                        bodily injury or property damage to a third party during covered business
                        operations. Bodily injury liability addresses medical costs, lost wages, and
                        related damages that injured parties claim after an at-fault loss, up to the
                        selected per-accident and per-person limits. Property damage liability pays
                        to repair or replace vehicles, buildings, fencing, and other property your
                        crews strike while operating a covered truck or van. Because commercial
                        accidents often involve higher-severity claims than personal auto losses,
                        most carriers recommend combined single limits of at least several hundred
                        thousand dollars, with many Phoenix-area businesses carrying one million
                        dollars per accident and pairing the policy with a commercial umbrella for
                        catastrophic protection.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Physical Damage Coverage (Collision and Comprehensive)
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Physical damage coverage on a fleet policy is composed of collision and
                        comprehensive, each carrying its own deductible. Collision responds when a
                        covered vehicle strikes another vehicle or object, whether on customer
                        property in Scottsdale, a construction site in Chandler, or a warehouse yard
                        in Phoenix. Comprehensive addresses non-collision losses such as theft,
                        vandalism, fire, falling objects, certain weather-related damage, and
                        monsoon hail that carriers in Arizona handle routinely during summer storm
                        cycles. Businesses financing their fleet through equipment lenders are
                        typically required to carry collision and comprehensive on the
                        lender&apos;s schedule, and most operators purchase physical damage on any
                        vehicle they could not replace promptly from cash reserves.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Uninsured and Underinsured Motorist Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Uninsured motorist coverage responds when an at-fault driver has no
                        applicable liability insurance, and underinsured motorist coverage responds
                        when the at-fault driver&apos;s limits are insufficient to cover the injury
                        and property damages your driver or passengers incur. Across Phoenix, Mesa,
                        Tempe, and the broader Valley, a meaningful share of passenger vehicles on
                        the road carry only state-minimum limits or no coverage at all, which
                        leaves commercial drivers exposed after not-at-fault collisions if the
                        fleet policy lacks adequate UM and UIM protection. Many Arizona fleet
                        coverage programs align UM and UIM limits with their primary liability
                        limits so that a driver injured by an uninsured motorist is not left with
                        medical bills beyond what the business and its carrier can reasonably
                        address.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Hired and Non-Owned Auto Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Hired and non-owned auto coverage, often called HNOA, is one of the most
                        important additions on a commercial fleet program. Hired auto coverage
                        applies when the business rents or leases a vehicle short-term for work
                        purposes, such as a temporary cargo van during a project surge or a
                        replacement pickup while a company truck is in the shop. Non-owned auto
                        coverage applies when an employee drives their personal vehicle in the
                        course of business, including errands to pick up materials, client visits,
                        or route coverage when a company vehicle is out of service. Without HNOA,
                        claims arising from those situations often fall back on the employee&apos;s
                        personal policy, which may deny coverage due to the same business-use
                        exclusions that justify a commercial program in the first place.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Medical Payments Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Medical payments coverage, commonly referred to as MedPay, can reimburse
                        reasonable medical expenses for the fleet driver and passengers following a
                        covered accident, regardless of fault, up to the limit stated in the
                        policy. MedPay is not a substitute for workers compensation, which responds
                        to work-related injuries to employees on a separate statutory framework,
                        but it can help stabilize early medical expenses when fault and
                        coordination take time to resolve. On busy Valley corridors such as I-10,
                        Loop 202, and the Loop 101 interchange system near Scottsdale, early
                        medical costs can accumulate quickly even before liability investigations
                        are complete, and a defined MedPay limit provides an immediately available
                        benefit inside the auto contract.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Roadside Assistance and Towing for Commercial Vehicles
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Roadside assistance and towing endorsements on a commercial fleet policy
                        differ from the consumer versions found on a personal auto contract.
                        Commercial towing services are equipped to move heavier vehicles, including
                        light and medium-duty trucks, cargo vans, and service bodies carrying tools
                        and inventory. The endorsement typically covers mechanical breakdowns, flat
                        tires, fuel delivery, jump starts, and tows to a repair facility, subject
                        to the limits and service radius specified in the contract. For Phoenix
                        commercial vehicle insurance clients operating on long-haul or route-based
                        assignments, pairing this endorsement with a clear down-vehicle protocol
                        keeps crews moving and customer commitments on schedule when a unit goes
                        out of service.
                      </p>
                    </div>
                  </div>
                </section>

                {/* D. Who needs */}
                <section aria-labelledby="who-needs-heading">
                  <h2 id="who-needs-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Who Needs Commercial Fleet Coverage in the Phoenix Area?
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Commercial fleet coverage is relevant to any Phoenix-area business that
                      operates multiple vehicles in the course of its work. Construction and
                      contracting companies running pickup trucks, flatbeds, and work vans between
                      job sites in Phoenix, Mesa, Chandler, and Glendale typically place liability
                      and physical damage on every unit once the schedule reaches fleet size. HVAC,
                      plumbing, electrical, landscaping, and pool service companies dispatching
                      service-based crews across the Valley benefit from the simplified
                      administration of a contractor fleet insurance Phoenix program, since
                      vehicles enter and exit the active schedule as crews expand, equipment is
                      replaced, and service areas grow.
                    </p>
                    <p>
                      Delivery and logistics operations moving freight and parcels between
                      distribution hubs in west Phoenix, Glendale, and surrounding submarkets are
                      classic fleet accounts, as are courier companies serving the metro on
                      same-day routes. Delivery fleet insurance Arizona programs also support
                      rideshare and transportation service operators with multiple driver-assigned
                      vehicles, property management companies running maintenance fleets across
                      apartment communities, and sales organizations whose field representatives
                      drive company-owned sedans or SUVs. Food trucks and mobile service
                      operations, where the vehicle itself is a revenue-generating asset, commonly
                      pair fleet coverage with additional inland marine or equipment endorsements
                      to protect the installed gear.
                    </p>
                    <p>
                      The Valley economy continues to expand, with construction, distribution, and
                      service industries leading hiring and capital investment across Maricopa
                      County. That growth drives sustained demand for reliable commercial
                      transportation, and the businesses winning contracts in Scottsdale, Tempe,
                      Gilbert, and Peoria need policies that keep pace with changing vehicle counts
                      and driver rosters. Distribution hubs in Glendale and Phoenix, paired with
                      the ongoing construction boom across the metro, mean fleet insurance has
                      become a central operating expense for employers who want administration to
                      match the pace of their field operations rather than slow it down.
                    </p>
                  </div>
                </section>

                {/* E. Arizona requirements */}
                <section aria-labelledby="arizona-req-heading">
                  <h2 id="arizona-req-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Arizona Commercial Fleet Insurance Considerations
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Arizona commercial auto law requires liability insurance on vehicles operated
                      for business purposes, and the statute sets minimum bodily injury and
                      property damage liability limits that apply broadly to vehicles on public
                      roads. In commercial practice, those minimums are almost never sufficient,
                      because business accidents produce larger medical, wage, and property damage
                      claims than typical personal auto losses. Most Phoenix fleet programs carry
                      combined single limits of five hundred thousand to one million dollars per
                      accident, with higher limits or a commercial umbrella on larger fleets and
                      operations involving heavy-duty vehicles.
                    </p>
                    <p>
                      Driver screening directly affects both underwriting acceptance and premium.
                      Carriers routinely request motor vehicle records on every scheduled driver,
                      and recurring accidents, moving violations, or DUI history on a single driver
                      can materially impact the quote for the entire fleet. Businesses that run MVR
                      monitoring at hire and at regular intervals through the year, maintain
                      documented safety training, and publish written driver eligibility standards
                      tend to attract more favorable terms than those operating without formal
                      controls.
                    </p>
                    <p>
                      Certain vehicle types and operations fall under DOT-regulated requirements
                      administered at the federal level, including interstate operations, vehicles
                      above specified weight thresholds, and operations carrying certain cargo
                      classes. Commercial vehicles are commonly categorized as light-duty,
                      medium-duty, or heavy-duty based on gross vehicle weight rating, and that
                      classification affects coverage options, rating, and which endorsements are
                      available. A licensed broker helps confirm which regulations apply to the
                      fleet and ensures the policy structure aligns with the business&apos;s
                      operating authority.
                    </p>
                    <p>
                      Hired and non-owned auto coverage is essential when employees occasionally
                      use personal vehicles for business errands, even for brief trips. GPS and
                      telematics programs, which monitor harsh braking, speeding, and hours behind
                      the wheel, influence fleet underwriting because carriers view verified
                      driving behavior as a predictor of loss frequency. Many programs offer
                      premium credits tied to telematics participation, and the same data supports
                      management&apos;s safety coaching and dispatch decisions across Phoenix,
                      Mesa, and the East Valley.
                    </p>
                    <p>
                      A written fleet safety manual, documented driver policies, and coordinated
                      coverage across general liability, workers compensation, and commercial auto
                      form the backbone of a mature risk management program. Seasonal
                      considerations matter as well. Monsoon storms create comprehensive and
                      collision exposure for Phoenix fleets during summer, and extreme heat
                      accelerates tire and component wear on vehicles running long routes through
                      Chandler, Gilbert, and outlying areas. Businesses that align safety practices
                      with seasonal realities and industry-specific exposures generally see more
                      stable pricing at renewal and fewer disputed claims through the year.
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
                        Protegrity Insurance Brokerage, which means you work with licensed Arizona
                        commercial insurance professionals who place coverage with carriers using
                        state-approved forms and honest eligibility standards. Our team understands
                        Valley business operations, from the job-site logistics of a Scottsdale
                        general contractor to the route density of a Phoenix delivery operator, and
                        we translate that understanding into clear, accurate submissions that
                        carriers can quote efficiently.
                      </p>
                      <p>
                        We maintain access to multiple commercial carriers with distinct appetites
                        for contractor fleets, service-based operators, and logistics accounts,
                        which allows us to compare pricing and terms across markets rather than
                        pitching a single company&apos;s product to every business. Fleet programs
                        are rarely identical, and the carrier that offers the sharpest rate for a
                        five-vehicle HVAC fleet in Gilbert may not be the strongest market for a
                        twenty-unit delivery fleet running out of Glendale. Evaluating options
                        across carriers is how business owners identify meaningful savings without
                        sacrificing the coverage they actually need.
                      </p>
                      <p>
                        We serve commercial clients across Phoenix, Scottsdale, Mesa, Tempe,
                        Chandler, Glendale, Gilbert, and Peoria, and our 5.0-star service
                        reputation reflects consistent follow-through, responsive service, and
                        respectful communication from the first quote through every mid-term
                        endorsement. Protegrity-supported processes keep required disclosures
                        visible and your questions answered so that decisions rest on facts, not
                        pressure.
                      </p>
                    </div>
                  </div>
                </section>

                {/* G. FAQ */}
                <section aria-labelledby="faq-heading">
                  <h2 id="faq-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Frequently Asked Questions About Phoenix Commercial Fleet Insurance
                  </h2>

                  <div className="mt-8 space-y-10">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How many vehicles do I need to qualify for a commercial fleet policy?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Most carriers recognize fleet status at approximately five commercial
                        vehicles garaged under the same business, though the threshold varies by
                        company, industry, and prior loss experience. Some markets will write fleet
                        programs with as few as three vehicles for certain classes of operators,
                        while others require a larger count before fleet rating applies. Below the
                        threshold, the business typically holds individual commercial auto policies
                        per vehicle, and above it a single fleet contract consolidates schedules,
                        billing, and endorsements. A licensed broker can confirm which carriers
                        best match your vehicle count today and which will continue to fit as the
                        fleet grows.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How is commercial fleet insurance different from personal auto insurance?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Personal auto policies are written for private household use and
                        specifically exclude most business operations through a business-use
                        exclusion. Commercial auto insurance Phoenix programs are written for
                        business operations and include endorsements and coverage parts, such as
                        hired and non-owned auto, that do not appear on a personal contract.
                        Commercial liability limits are typically much higher, reflecting the
                        severity of business-related claims, and underwriting evaluates drivers,
                        vehicles, cargo, and operating radius in ways personal auto does not.
                        Attempting to place work vehicles on a personal policy often leads to
                        denied claims when the loss facts involve commercial activity.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is hired and non-owned auto coverage and do I need it?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Hired and non-owned auto coverage, or HNOA, protects the business when an
                        employee rents a vehicle for work or uses a personal vehicle on company
                        business. Hired auto coverage responds to liability arising from rented or
                        leased vehicles the business uses short-term, and non-owned auto coverage
                        responds to liability arising from personal vehicles driven on company
                        errands or client visits. Any business whose employees occasionally pick up
                        supplies, visit clients, or cover routes in their own cars should carry
                        HNOA on the fleet program. Without it, the business can face liability
                        exposure that the employee&apos;s personal insurer will decline to cover.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How much does commercial fleet insurance cost in Phoenix?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Work truck insurance Phoenix pricing varies with vehicle types, driver
                        records, annual mileage, radius of operations, cargo carried, prior claims
                        history, selected limits and deductibles, and the industry&apos;s overall
                        loss profile. A five-vehicle service fleet operating locally in Gilbert
                        with clean driving records and experienced operators typically pays
                        substantially less per unit than a long-haul delivery fleet with mixed
                        MVRs. Many businesses see improved pricing after two or three clean policy
                        periods, strong driver screening, and telematics adoption. Comparing quotes
                        through a licensed brokerage with access to multiple commercial carriers
                        remains the most reliable way to benchmark cost against the coverage
                        provided.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does fleet insurance cover employees driving their personal vehicles for work?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Personal vehicles used for business are typically protected through the
                        non-owned auto portion of HNOA on the fleet policy, which provides
                        liability coverage to the business when an employee drives their personal
                        car on company work. This protection is for the business entity; it does
                        not replace the employee&apos;s personal auto insurance on their own
                        vehicle, and it generally does not pay physical damage to the
                        employee&apos;s car. Employees who routinely drive personal vehicles for
                        work should maintain robust personal auto coverage, and the business
                        should verify that those employees carry valid insurance through a
                        documented driver policy.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What happens if one of my commercial drivers has an accident?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        When a fleet driver is involved in an accident, the business should follow
                        a written incident protocol that includes scene documentation, photographs,
                        witness information, a police report where appropriate, medical attention
                        for anyone injured, and prompt notice to the carrier or broker. Commercial
                        claims often involve more moving parts than personal claims, with potential
                        workers compensation exposure if the driver is injured, cargo claims if
                        goods are damaged, and general liability exposure if the accident affects
                        customer property. Early carrier notification and complete documentation
                        support faster resolution and reduce the risk of coverage disputes later.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Can I add and remove vehicles from my fleet policy throughout the year?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Fleet policies are designed to accommodate vehicle additions and deletions
                        throughout the policy term. When the business purchases a new truck or
                        retires an older van, the broker submits an endorsement to update the
                        schedule, and premium adjusts on a pro-rated basis for the remainder of the
                        term. Many carriers provide automatic coverage for newly acquired vehicles
                        for a specified number of days, which gives the business time to formally
                        add the unit to the policy. Keeping the schedule accurate in near-real time
                        protects the business from gaps if a recently acquired vehicle is involved
                        in a loss before the endorsement is processed.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How do driver records affect my fleet insurance premium?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Driver records are one of the largest factors in commercial fleet
                        underwriting and pricing. Carriers review motor vehicle records on every
                        scheduled driver and weigh accidents, moving violations, license
                        suspensions, and major infractions such as DUI when setting the premium
                        for the fleet. A single driver with a poor record can impact the rate for
                        the entire policy, which is why many businesses adopt formal driver
                        qualification standards, run MVRs at hire and at regular intervals, and
                        retrain or reassign drivers whose records fall below the fleet&apos;s
                        written threshold. Businesses that maintain strong driver standards over
                        multiple policy periods generally see that discipline reflected in stable
                        or improving renewal pricing.
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
                    A commercial fleet policy is often the starting point for a broader business
                    insurance program. If your operations carry customer goods or transport your
                    own equipment, review{" "}
                    <Link
                      href="/insurance/commercial-auto/cargo-protection"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      cargo protection
                    </Link>{" "}
                    for the loss-of-goods exposure that standard auto physical damage does not
                    address. For operators evaluating higher-limit liability structures and
                    commercial umbrella options, read{" "}
                    <Link
                      href="/insurance/commercial-auto/business-liability"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      business liability auto
                    </Link>
                    . Once the auto program is stable, the remaining exposures typically fall
                    under{" "}
                    <Link
                      href="/insurance/business/general-liability"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      general liability
                    </Link>{" "}
                    for third-party claims,{" "}
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
                    for employee injuries sustained in the course of work. A coordinated program
                    across these policies reduces gaps that often appear when each line is placed
                    with a different broker on its own timeline.
                  </p>
                </section>

                {/* Closing paragraph with primary keyword */}
                <p className="text-base leading-relaxed text-muted-foreground">
                  Phoenix businesses that operate multiple work vehicles deserve a program designed
                  for commercial exposure, not a patchwork of personal policies or a single
                  commercial auto contract stretched past its natural size. A structured review of{" "}
                  <strong className="text-foreground">commercial fleet insurance Phoenix AZ</strong>{" "}
                  coverage examines drivers, vehicles, routes, cargo, and growth plans across
                  Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria, and compares
                  quoted options across multiple admitted commercial carriers. When you are ready
                  to move from research to a quoted proposal, work with a licensed Arizona
                  brokerage that will present the terms clearly and keep your operations manager
                  informed at every step.
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
                    Ready to Protect Your Fleet?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
                    When your operations are ready to evaluate fleet coverage in detail, Protegrity
                    Insurance Brokerage can translate these concepts into quoted options aligned
                    with your vehicles, drivers, and business goals. The next step is a structured
                    conversation, not pressure: you set the pace, and we provide the facts you need
                    to decide with confidence.
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
