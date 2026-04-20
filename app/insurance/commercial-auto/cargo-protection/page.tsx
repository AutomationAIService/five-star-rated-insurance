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
  title: "Motor Truck Cargo Insurance Phoenix AZ | Five Star Rated",
  description:
    "Motor truck cargo insurance Phoenix AZ: freight protection, Carmack liability, reefer breakdown for carriers across Scottsdale, Mesa, Tempe, Chandler, Gilbert.",
  alternates: {
    canonical: "/insurance/commercial-auto/cargo-protection",
  },
  openGraph: {
    title: "Motor Truck Cargo Insurance in Phoenix, AZ | Five Star Rated",
    description:
      "Cargo protection for Arizona trucking operations: freight in transit, Carmack liability, reefer breakdown, and theft coverage across Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.",
    url: `${SITE_URL}/insurance/commercial-auto/cargo-protection`,
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
    "Marketing partner connecting Arizona carriers with Phoenix motor truck cargo insurance options and licensed support through Protegrity Insurance Brokerage.",
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
  name: "Motor truck cargo insurance in Phoenix, Arizona",
  serviceType: "Motor truck cargo insurance",
  provider: {
    "@type": "InsuranceAgency",
    name: "Five Star Rated Insurance",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "State",
    name: "Arizona",
  },
  url: `${SITE_URL}/insurance/commercial-auto/cargo-protection`,
  description:
    "Educational resource on Arizona motor truck cargo insurance covering freight in transit, Carmack liability, refrigerated breakdown, and theft protection across Maricopa County.",
}

export default function MotorTruckCargoInsurancePhoenixPage() {
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
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
              alt="Semi-trailer loaded with freight at a Phoenix logistics facility, motor truck cargo insurance Phoenix AZ coverage for Arizona carriers"
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
                Motor Truck Cargo Insurance in Phoenix, AZ
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
                Arizona carriers move freight through one of the busiest logistics corridors in the
                Southwest, and shippers expect proof of coverage before a load leaves the dock.{" "}
                <strong className="font-semibold text-primary-foreground">
                  Motor truck cargo insurance Phoenix AZ
                </strong>{" "}
                coverage protects the goods in your trailer against loss or damage during transit
                and serves owner-operators, for-hire carriers, and fleet operations across Phoenix,
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
                    Overview: What Motor Truck Cargo Insurance Means in Phoenix
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Motor truck cargo insurance is a specialty commercial policy that protects
                      the freight a carrier hauls against loss or damage while it is in transit or
                      temporarily stored in connection with a shipment. The coverage responds when
                      goods in the trailer are destroyed, damaged, stolen, or lost due to a covered
                      cause, and it pays up to the selected limit after the deductible is applied.
                      It is separate from commercial auto liability, which covers bodily injury and
                      property damage the truck causes to others, and from physical damage
                      coverage, which pays to repair the tractor and trailer themselves.
                    </p>
                    <p>
                      The distinction is important because shippers, brokers, and consignees think
                      about risk differently than trucking operators sometimes do. A shipper
                      tendering a load in Phoenix expects the motor carrier to be responsible for
                      the freight from the moment the Bill of Lading is signed until delivery is
                      completed. Cargo insurance is how a carrier turns that legal responsibility
                      into a backed financial promise, because liability limits on the policy are
                      what a shipper relies on if a load is destroyed in an accident, stolen from a
                      yard, or damaged by a temperature excursion.
                    </p>
                    <p>
                      Most shippers and freight brokers will not dispatch a load without a valid
                      cargo certificate on file, and many contracts and broker-carrier agreements
                      specify minimum limits, acceptable deductibles, and required commodity
                      coverage before a carrier is added to an approved list. Cargo insurance
                      Phoenix Arizona requirements from national shippers routinely mirror the
                      long-standing one hundred thousand dollar baseline used across the industry,
                      with higher limits common on high-value, temperature-controlled, or
                      time-sensitive shipments.
                    </p>
                    <p>
                      Federal law shapes carrier liability through the Carmack Amendment, which
                      makes interstate motor carriers responsible for the actual loss or damage to
                      property they transport, subject to lawful limitations in tariffs, contracts,
                      or Bills of Lading. Cargo insurance responds to that carrier liability,
                      though the policy itself contains its own definitions, exclusions, and
                      conditions that do not always match Carmack dollar for dollar. A licensed
                      broker helps align the policy language with how the business actually
                      contracts with shippers so there are fewer surprises at claim time.
                    </p>
                    <p>
                      Coverage varies by commodity. Standard motor truck cargo policies cover a
                      broad range of general freight, while certain goods require specific
                      endorsements or dedicated programs. Refrigerated loads need reefer breakdown
                      coverage. High-value electronics, pharmaceuticals, tobacco, alcohol, and
                      precious metals typically face commodity sublimits or outright exclusions.
                      Hazardous materials require carriers to confirm authority, training, and
                      insurance alignment before tendering those loads, and live animals, fine
                      art, and certain machinery may require specialty forms outside the standard
                      policy.
                    </p>
                    <p>
                      Phoenix sits at the intersection of several national freight corridors. The
                      I-10 route connects West Coast ports in Los Angeles and Long Beach to Texas
                      and the Southeast, I-17 moves freight north toward Flagstaff and I-40, and
                      the regional network supports cross-border trade with Mexico through Nogales.
                      That position makes Arizona motor truck cargo coverage a daily operational
                      tool for carriers based in the Valley, with programs that scale from a
                      single-truck owner-operator picking up loads in Mesa to regional fleets
                      dispatching out of Glendale and south Phoenix distribution centers.
                    </p>
                  </div>
                </section>

                {/* C. What's covered */}
                <section aria-labelledby="covered-heading">
                  <h2 id="covered-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    What&apos;s Covered: Motor Truck Cargo Insurance Building Blocks
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    A cargo policy protects freight against loss or damage during loading, transit,
                    and related stops that are part of the shipment. Each coverage part on the
                    declarations page addresses a different type of loss, each has its own limit
                    and deductible, and each works alongside the commercial auto liability policy
                    to form a complete trucking insurance program. Reviewing the sections together
                    rather than in isolation keeps the program aligned with the types of freight
                    the business actually hauls and the contracts it signs with shippers and
                    brokers.
                  </p>

                  <div className="mt-8 space-y-8">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Standard Motor Truck Cargo Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        The core coverage pays for direct physical loss or damage to covered
                        property while in the care, custody, and control of the motor carrier.
                        Covered causes typically include collision, overturn, fire, lightning,
                        explosion, windstorm, collapse of a bridge or structure, and similar
                        transit-related perils described in the contract. The policy limit
                        represents the maximum amount the carrier pays in a single occurrence,
                        subject to the deductible. Common-carrier operations moving general freight
                        out of Phoenix, Scottsdale, and Mesa typically start with limits that match
                        the minimum figures requested by national brokers and step up from there
                        based on the average and peak load values carried on each trip.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Refrigerated Cargo (Reefer) Breakdown Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Carriers hauling temperature-controlled freight need a reefer breakdown
                        endorsement, because standard motor truck cargo policies usually exclude
                        spoilage caused by mechanical failure of the refrigeration unit. The
                        endorsement responds when the reefer fails and a covered temperature
                        excursion damages perishable goods, subject to conditions such as
                        continuous operation, documented pre-trip inspections, and working
                        temperature-recording devices. Arizona summer heat amplifies this exposure,
                        because a failed unit on I-10 between Phoenix and the California line can
                        ruin a load within a few hours. Reefer rules in the endorsement require
                        attention to detail, and the claim record depends on whether the carrier
                        can document reasonable care before the loss.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Cargo Theft and Hijacking Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Cargo policies generally include theft, though carriers should read the
                        unattended-vehicle provisions closely. Many policies require that the
                        tractor and trailer be parked in a secured location, that the unit be
                        locked and monitored, or that the driver follow specific anti-theft
                        protocols during stops. High-theft commodities such as electronics, tools,
                        alcohol, and designer goods frequently carry sublimits or specific
                        warranties. Hijacking coverage responds to freight taken by force or threat
                        of force, and the endorsement language should match the routes and
                        stopping patterns the carrier actually runs, whether that is local
                        Phoenix-area deliveries or long-haul lanes into California, Texas, and the
                        Southeast.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Debris Removal and Pollution Cleanup
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Many cargo policies provide a sublimit for debris removal after a covered
                        loss, which pays to clear damaged freight from the accident scene so the
                        roadway can be reopened. A separate sublimit frequently applies to
                        pollution cleanup when a covered incident releases fluids, chemicals, or
                        other regulated substances from the cargo itself. These sublimits are
                        sometimes modest on a base policy, so carriers hauling liquids, industrial
                        products, or anything with cleanup exposure should review whether the
                        limits reflect what Arizona and federal environmental authorities would
                        reasonably bill after a spill on I-10, US 60, or the regional highway
                        network.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Loading and Unloading Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Cargo policies generally respond to loss or damage that occurs during
                        loading onto the trailer, while the freight is in transit, and during
                        unloading at the consignee. Some contracts limit coverage to movement under
                        the carrier&apos;s own personnel, while others extend to shipper or
                        consignee-assisted loading subject to conditions. Carriers running
                        dock-to-dock general freight out of distribution hubs in Glendale and west
                        Phoenix should verify that the loading and unloading language matches the
                        realities of the shipper docks they service, because claims during these
                        phases are common and the facts can affect coverage applicability.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Excluded Commodities and Optional Endorsements
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Standard cargo policies exclude or sublimit several commodity categories,
                        including precious metals, currency, securities, fine art, live animals,
                        jewelry, furs, tobacco, alcohol, and in many cases pharmaceuticals and
                        certain electronics. Hazardous materials usually require specific
                        endorsements and the motor carrier&apos;s DOT-regulated authority to
                        tender those loads. Optional endorsements and schedule changes can restore
                        coverage for selected commodities at appropriate limits, and carriers
                        specializing in high-value or regulated freight should work with a broker
                        to match the policy schedule to the loads they actually book rather than
                        rely on a generic form.
                      </p>
                    </div>
                  </div>
                </section>

                {/* D. Who needs */}
                <section aria-labelledby="who-needs-heading">
                  <h2 id="who-needs-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Who Needs Motor Truck Cargo Coverage in the Phoenix Area?
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Owner-operators running for-hire trucking operations out of Phoenix, Mesa,
                      Chandler, and surrounding communities are the core audience for motor truck
                      cargo coverage. An owner-operator cargo insurance Phoenix program usually
                      begins with one hundred thousand dollars in cargo limits, the deductible the
                      operator can comfortably retain, and specific commodity endorsements that
                      match the freight tendered by the shippers and brokers on the operator&apos;s
                      preferred lanes. Small trucking companies and growing fleets based in the
                      Valley extend the same foundation across multiple units and drivers.
                    </p>
                    <p>
                      Long-haul carriers running interstate routes through Phoenix on I-10, I-17,
                      and I-40 face different theft, exposure, and weather patterns than
                      short-haul and local delivery operators who stay inside the Valley on routes
                      from Glendale to Gilbert. Refrigerated carriers hauling temperature-sensitive
                      produce, meat, dairy, and pharmaceuticals add reefer breakdown and close
                      attention to pre-trip documentation. Flatbed operators moving building
                      materials, machinery, and oversized loads often require tarp coverage and
                      securement endorsements, and tanker operators face commodity-specific
                      pollution exposure.
                    </p>
                    <p>
                      Box truck and hotshot carriers supporting construction, e-commerce, and
                      expedited freight represent a fast-growing segment in Arizona, and their
                      cargo needs mirror larger truckload operators on a smaller equipment scale.
                      Freight brokers arranging motor-carrier capacity for shippers should review
                      contingent cargo coverage, which responds when the contracted carrier&apos;s
                      primary cargo policy fails to pay a covered loss and leaves the broker
                      facing an uncovered claim from the shipper.
                    </p>
                    <p>
                      Phoenix&apos;s strategic position drives demand across all of these
                      categories. Freight originating at Southern California ports routinely moves
                      east through the I-10 corridor, Mexican imports and exports cross at Nogales
                      and connect to Phoenix distribution hubs, Southwest regional freight runs
                      between Las Vegas, Salt Lake City, Albuquerque, and the Valley, and local
                      freight supports the growing retail, construction, and e-commerce base
                      across Maricopa County. For-hire trucking insurance Arizona programs are
                      built for this reality, not for generic profiles written in another state.
                    </p>
                  </div>
                </section>

                {/* E. Arizona requirements */}
                <section aria-labelledby="arizona-req-heading">
                  <h2 id="arizona-req-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Arizona Motor Truck Cargo Insurance Considerations
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      The Federal Motor Carrier Safety Administration sets baseline requirements
                      for interstate-transport carriers, including minimum liability insurance
                      levels that vary with the commodity and vehicle configuration. Although
                      federal law does not require cargo insurance for every motor carrier,
                      shippers and freight brokers almost universally demand it as a contractual
                      precondition to dispatch. The common-carrier marketplace treats a minimum of
                      one hundred thousand dollars in cargo coverage as a baseline expectation on
                      general freight, and higher-value loads often require two hundred fifty
                      thousand, five hundred thousand, or greater limits.
                    </p>
                    <p>
                      The Carmack Amendment is the federal statute that governs a carrier&apos;s
                      liability for loss or damage to goods shipped in interstate transit. Under
                      Carmack, a motor carrier is presumptively liable for the actual value of
                      lost or damaged goods, subject to lawful limits expressed in the
                      carrier&apos;s tariff, contract, or Bill of Lading. Cargo insurance responds
                      to that Carmack liability, though the policy has its own definitions,
                      exclusions, and required cooperation obligations that may not match Carmack
                      one for one. A structured program uses the policy to back the liability the
                      carrier actually accepts under its shipping contracts.
                    </p>
                    <p>
                      Carrier cargo coverage is distinct from shipper&apos;s interest coverage, a
                      first-party policy that a shipper buys for its own goods. The carrier&apos;s
                      policy protects the carrier&apos;s legal liability to the shipper, not the
                      shipper&apos;s full economic interest in the goods. Sophisticated shippers
                      understand the distinction and often buy their own coverage for high-value
                      loads rather than rely solely on the carrier&apos;s policy, which is one
                      reason claims paperwork on significant losses commonly involves both policies
                      and multiple adjusters.
                    </p>
                    <p>
                      Refrigerated carriers operating in Arizona should plan for seasonal heat.
                      Reefer breakdown endorsements usually require functioning
                      temperature-recording devices, documented pre-trip inspections, and
                      continuous unit operation during loaded transit. Commodity exclusions cover
                      familiar categories such as money, securities, fine art, live animals, and
                      tobacco, along with selective exclusions for pharmaceuticals and some
                      high-value electronics on many forms. Carriers should match the policy
                      schedule to what they actually haul instead of assuming a standard form
                      covers everything a shipper might tender.
                    </p>
                    <p>
                      Deductibles, per-occurrence limits, and catastrophic loss provisions
                      structure how the carrier shares risk with the insurer. Driver screening,
                      vehicle security, and route planning directly affect underwriting, because
                      carriers with documented hiring standards, functioning GPS on trucks and
                      trailers, and thoughtful routing receive better terms over time. Interstate
                      authority and filings such as Form BMC-91 for liability and, where
                      applicable, cargo filings coordinate with the insurance program, and a
                      licensed Arizona broker helps confirm that authority, filings, and policy
                      schedules all move together at renewal.
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
                        Protegrity Insurance Brokerage, so Arizona carriers work with licensed
                        commercial insurance professionals who understand trucking operations and
                        place coverage with carriers using state-approved forms and honest
                        eligibility standards. We know the difference between a five-truck
                        owner-operated produce hauler and a regional flatbed operation, and we
                        structure submissions that reflect the equipment, drivers, and lanes
                        actually at work.
                      </p>
                      <p>
                        Our team maintains access to specialty trucking and transportation
                        carriers with dedicated cargo appetite, so we can compare pricing and
                        terms across multiple commercial cargo protection Phoenix markets rather
                        than quoting a single company&apos;s form. That matters on cargo because
                        commodity endorsements, reefer rules, theft warranties, and per-conveyance
                        limits vary meaningfully between carriers, and the right match depends on
                        what the business actually moves.
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
                    Frequently Asked Questions About Phoenix Motor Truck Cargo Insurance
                  </h2>

                  <div className="mt-8 space-y-10">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What does motor truck cargo insurance cover?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Motor truck cargo insurance covers direct physical loss or damage to
                        freight while it is in the care, custody, and control of the motor carrier,
                        subject to the policy&apos;s covered causes, exclusions, and deductible.
                        Typical covered perils include collision, overturn, fire, theft, and
                        certain weather events, and coverage generally extends to loading, transit,
                        and unloading phases. The policy pays up to the selected limit per
                        occurrence and works alongside commercial auto liability and physical
                        damage coverage on the tractor and trailer. Specific commodities, reefer
                        breakdown, and high-theft items may require endorsements, so coverage
                        detail depends on the form and schedule in force.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How much cargo insurance do I need as an owner-operator in Arizona?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Most for-hire owner-operators begin at one hundred thousand dollars in
                        cargo limits, which is the baseline expected by a large share of shippers
                        and freight brokers. Operators carrying high-value, temperature-controlled,
                        or time-sensitive freight often select two hundred fifty thousand or more,
                        depending on the average and peak load value they handle. The right limit
                        reflects the commodities the operator books, the broker-carrier agreements
                        on file, and the catastrophic exposure on a single trip. A licensed Arizona
                        broker reviews load profiles and broker contracts to recommend a limit that
                        fits both the book of business and the shipper expectations on the
                        operator&apos;s lanes.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is the difference between cargo insurance and commercial auto liability?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Commercial auto liability covers bodily injury and property damage the
                        truck causes to third parties, such as another driver or a building struck
                        during a delivery. Motor truck cargo insurance covers the freight inside
                        the trailer and responds when that cargo is lost, damaged, or stolen
                        during transit. They are separate policies that address separate
                        exposures, and both are needed on a for-hire trucking operation. Auto
                        physical damage coverage adds a third layer by protecting the tractor and
                        trailer themselves, which is why a complete cargo liability insurance
                        Phoenix program reviews all three components together.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does cargo insurance cover refrigerated freight breakdowns?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        A standard cargo policy typically excludes spoilage caused by mechanical
                        breakdown of the refrigeration unit. Reefer breakdown coverage is added as
                        an endorsement and responds when the unit fails and temperature-sensitive
                        goods are damaged, subject to conditions such as continuous operation,
                        documented pre-trip inspections, and working temperature recorders.
                        Arizona heat makes this exposure acute during summer, because a unit that
                        fails on I-10 between Phoenix and the California line can lose a load
                        within hours. Carriers hauling produce, meat, dairy, or pharmaceuticals
                        should confirm the endorsement language and keep complete records to
                        support claim cooperation.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What commodities are typically excluded from cargo insurance?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Standard cargo forms usually exclude or sublimit money, securities, bullion
                        and precious metals, fine art, live animals, jewelry, furs, tobacco,
                        alcohol, and in many cases pharmaceuticals and certain high-value
                        electronics. Hazardous materials require specific endorsements and the
                        carrier&apos;s DOT-regulated authority. Optional endorsements and commodity
                        schedule updates can restore coverage for selected items at appropriate
                        limits, and carriers specializing in high-value or regulated freight
                        should review the schedule with a broker before accepting loads that fall
                        outside the base form.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does my cargo policy cover theft and hijacking?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Most cargo policies include theft, but the conditions matter. Many forms
                        contain unattended-vehicle provisions that require the unit to be in a
                        secured location, locked, and sometimes monitored during stops. High-theft
                        commodities often carry sublimits or specific warranties. Hijacking, which
                        is the taking of freight by force or threat of force, is commonly included
                        or added by endorsement on over-the-road operations. Carriers should read
                        the theft and unattended-vehicle language carefully and align driver
                        protocols, parking standards, and stop patterns with what the policy
                        requires.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is the Carmack Amendment and how does it affect my liability?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        The Carmack Amendment is the federal statute that governs a motor
                        carrier&apos;s liability for loss or damage to property transported in
                        interstate commerce. Under Carmack, the carrier is presumptively liable
                        for the actual loss or damage to the goods, subject to lawful limitations
                        stated in the tariff, contract, or Bill of Lading. Cargo insurance
                        responds to that liability, though the policy has its own definitions,
                        exclusions, and conditions. Working with a broker who reads the
                        broker-carrier agreements and the Bill of Lading language helps ensure the
                        policy actually backs the liability the carrier accepts in practice.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How do shippers and brokers verify my cargo coverage?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Shippers and freight brokers verify cargo coverage through certificates of
                        insurance issued by the carrier&apos;s broker and, in most cases, through
                        monitoring services that pull real-time policy data from the insurer. A
                        certificate lists the named insured, policy numbers, effective dates,
                        limits, deductibles, and commodity scope, and it often includes the broker
                        or shipper as a certificate holder for notice of cancellation. Many
                        brokers also require contractual provisions on limits, authorized
                        commodities, and subcontracting. Keeping the certificate current, accurate,
                        and aligned with the carrier&apos;s active authority is essential to staying
                        on approved lists and avoiding load disruptions.
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
                    Cargo coverage works best as part of a broader trucking insurance program. If
                    your operation runs multiple vehicles, review{" "}
                    <Link
                      href="/insurance/commercial-auto/fleet-coverage"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      fleet coverage
                    </Link>{" "}
                    for the commercial auto structure that sits alongside your cargo policy. For
                    higher-limit liability options and umbrella structures, read{" "}
                    <Link
                      href="/insurance/commercial-auto/business-liability"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      business liability auto
                    </Link>
                    . The remaining exposures on a trucking operation typically fall under{" "}
                    <Link
                      href="/insurance/business/general-liability"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      general liability
                    </Link>{" "}
                    for third-party claims at terminals and customer sites,{" "}
                    <Link
                      href="/insurance/business/property-coverage"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      property coverage
                    </Link>{" "}
                    for owned terminals, tools, and parts inventory, and{" "}
                    <Link
                      href="/insurance/business/workers-compensation"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      workers compensation
                    </Link>{" "}
                    for drivers and shop staff injured in the course of work. A coordinated program
                    reduces the gaps that often appear when lines are placed with separate brokers
                    on different timelines.
                  </p>
                </section>

                {/* Closing paragraph with primary keyword */}
                <p className="text-base leading-relaxed text-muted-foreground">
                  Arizona carriers moving freight through Phoenix, Scottsdale, Mesa, Tempe,
                  Chandler, Glendale, Gilbert, and Peoria deserve a program structured around how
                  they actually haul, not a generic form written for another state. A thorough
                  review of{" "}
                  <strong className="text-foreground">motor truck cargo insurance Phoenix AZ</strong>{" "}
                  coverage examines commodities, limits, deductibles, reefer and theft
                  endorsements, broker-carrier requirements, and the Carmack exposure the business
                  accepts under its Bills of Lading. When you are ready to move from research to a
                  quoted proposal, work with a licensed Arizona brokerage that will present the
                  terms clearly and keep your dispatch team informed at every step.
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
                    Ready to Protect Your Cargo?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
                    When your operation is ready to evaluate cargo coverage in detail, Protegrity
                    Insurance Brokerage can translate these concepts into quoted options aligned
                    with your commodities, lanes, and broker-carrier contracts. The next step is a
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
