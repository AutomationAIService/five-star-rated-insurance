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
  title: "Mexico Rental Car Insurance Phoenix AZ | Liability",
  description:
    "Mexico rental car insurance Phoenix AZ: Mexican liability, CDW, and supplemental coverage for Arizona travelers in Scottsdale, Mesa, Tempe, and Chandler.",
  alternates: {
    canonical: "/insurance/mexico-travel/rental-car-coverage-in-mexico",
  },
  openGraph: {
    title: "Mexico Rental Car Insurance Coverage for Phoenix AZ Travelers | Five Star Rated",
    description:
      "Mexico rental car and cross-border driving coverage for Phoenix-area travelers, serving Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.",
    url: `${SITE_URL}/insurance/mexico-travel/rental-car-coverage-in-mexico`,
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
    "Marketing partner connecting Arizona travelers with Mexico rental car and cross-border auto insurance options and licensed support through Protegrity Insurance Brokerage.",
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
  name: "Mexico rental car and cross-border auto insurance in Phoenix, Arizona",
  serviceType: "Auto insurance",
  provider: {
    "@type": "InsuranceAgency",
    name: "Five Star Rated Insurance",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "State",
    name: "Arizona",
  },
  url: `${SITE_URL}/insurance/mexico-travel/rental-car-coverage-in-mexico`,
  description:
    "Educational resource on Mexican liability, collision damage waiver, and supplemental rental car coverage for Arizona travelers visiting destinations including Rocky Point, Baja California, Ensenada, Rosarito, Cabo San Lucas, Cancún, Puerto Vallarta, Tulum, Playa del Carmen, and Mexico City.",
}

export default function MexicoRentalCarCoveragePhoenixPage() {
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
              src="https://images.unsplash.com/photo-1666410262937-6db40c7c90a3?auto=format&fit=crop&w=2000&q=80"
              alt="White car on a Baja California desert highway in Mexico, Mexico rental car insurance coverage for Phoenix AZ travelers"
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
                Mexico Rental Car Insurance Coverage for Phoenix, AZ Travelers
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
                U.S. auto insurance does not provide liability coverage south of the
                border, and Mexican law requires a Mexican-issued liability policy to
                drive legally.{" "}
                <strong className="font-semibold text-primary-foreground">
                  Mexico rental car insurance Phoenix AZ
                </strong>{" "}
                programs protect travelers from Phoenix, Scottsdale, Mesa, Tempe,
                Chandler, Glendale, Gilbert, and Peoria who rent vehicles in Mexico or
                drive their own cars across the border.
              </p>
            </div>
          </section>

          <div className="bg-background">
            <div className="container mx-auto max-w-4xl px-4 py-14 md:py-20">
              <article className="prose prose-slate max-w-none space-y-12 text-foreground">
                {/* B. Overview */}
                <section aria-labelledby="overview-heading">
                  <h2 id="overview-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Overview: What Mexico Rental Car Insurance Means
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      U.S. auto insurance policies generally do not provide liability
                      coverage in Mexico, and the coverage Mexican authorities recognize
                      at the scene of an accident must come from a Mexican-issued
                      policy. A small number of U.S. carriers extend limited physical
                      damage coverage into a narrow Baja California border zone, but
                      that limited extension does not satisfy the legal requirement for
                      Mexican liability coverage. Driving in Mexico without an active
                      Mexican liability policy carries real legal consequences,
                      regardless of how comprehensive a traveler&apos;s Arizona auto
                      insurance happens to be.
                    </p>
                    <p>
                      The distinction between Mexican auto liability insurance and the
                      rental-car coverages sold at the counter matters because they
                      solve different problems. Mexican liability is the legally
                      required third-party coverage that pays for injuries and property
                      damage the traveler causes to someone else while driving. A
                      Collision Damage Waiver (CDW) or Loss Damage Waiver (LDW) is an
                      optional contractual waiver offered by the rental-car company that
                      limits the renter&apos;s responsibility for damage to the rental
                      vehicle itself. Supplemental liability coverage raises the
                      liability limit on top of the minimum Mexican liability policy,
                      and medical payments and personal-effects coverages address
                      occupant injuries and personal property in the vehicle.
                    </p>
                    <p>
                      This structure matters to Phoenix residents more than to most
                      U.S. travelers because cross-border driving is a regular part of
                      life in the Valley. Weekend trips from Phoenix and Scottsdale to
                      Rocky Point, longer runs into Baja California for fishing and
                      surfing, and fly-and-drive itineraries that start at Cancún,
                      Cabo San Lucas, or Puerto Vallarta airports are normal, not
                      exotic. An Arizona auto policy that works perfectly from Phoenix
                      to Gilbert stops providing liability protection the moment the
                      driver crosses into Sonora, Baja California, or any other Mexican
                      state.
                    </p>
                    <p>
                      The consequences of driving without proper Mexican liability are
                      not theoretical. Mexican traffic law treats at-fault accidents as
                      a criminal matter until civil and insurance obligations are
                      settled, which means a driver without liability coverage can be
                      detained while the process plays out. Vehicles can be impounded,
                      and the traveler becomes personally responsible for the full cost
                      of third-party injuries and property damage. The risk is highest
                      when a serious accident occurs, which is also when proper coverage
                      matters most.
                    </p>
                    <p>
                      The rules differ depending on whether a traveler is renting a car
                      in Mexico or driving a personal vehicle across the border. When
                      renting a car in Mexico, Mexican liability is typically either
                      bundled into the rental agreement at a minimum level or offered
                      as a separately-priced upgrade at the counter, and many travelers
                      choose to arrange a standalone Mexican liability policy that can
                      provide higher limits at a lower cost. When driving a personal
                      vehicle into Mexico, a separate Mexican tourist auto policy is
                      required and is typically purchased in advance for the duration
                      of the trip. Both structures are addressed by the same category of
                      Mexican auto insurance carriers that specialize in cross-border
                      travelers.
                    </p>
                    <p>
                      Coverage is affordable and straightforward to arrange. Short
                      single-trip Mexican liability policies for a weekend trip to
                      Rocky Point commonly run in the low double digits per day,
                      multi-day and annual policies are available for frequent
                      travelers, and supplemental coverage for higher liability limits,
                      CDW, and medical payments adds modest additional premium. The
                      cost of coverage is a small fraction of the exposure a serious
                      accident can create.
                    </p>
                  </div>
                </section>

                {/* C. What's covered */}
                <section aria-labelledby="covered-heading">
                  <h2 id="covered-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    What&apos;s Covered: Mexico Rental Car Insurance Building Blocks
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    Mexico rental car insurance combines a legally required Mexican
                    liability policy with optional physical damage and supplemental
                    coverages that protect the rental vehicle, the traveler, and any
                    occupants. Reviewing each component clarifies what a proper program
                    looks like in practice and where travelers most commonly have gaps
                    when they rely only on a rental-counter default or a U.S. policy.
                  </p>

                  <div className="mt-8 space-y-8">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Mexican Liability Coverage (Required by Law)
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Mexican liability coverage is the legally required third-party
                        insurance that pays for bodily-injury and property-damage costs
                        the driver causes to other people and their property while
                        driving in Mexico. Coverage must be issued by a Mexican-licensed
                        carrier and proof of coverage must be carried in the vehicle at
                        all times. Mexican law does not recognize a U.S. liability
                        policy as a substitute, even when the U.S. carrier offers
                        limited extension into a border zone. Recommended liability
                        limits commonly run well above the legal minimum because actual
                        medical and legal costs after a serious accident can exceed
                        minimum-limit policies quickly.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Collision Damage Waiver (CDW) and Loss Damage Waiver (LDW)
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        A Collision Damage Waiver (CDW) or Loss Damage Waiver (LDW) is a
                        contractual agreement offered by the rental-car company that
                        limits the renter&apos;s financial responsibility for damage to
                        the rental vehicle itself, often with a deductible or a
                        per-incident cap. CDW and LDW are not technically insurance, but
                        they function like physical-damage coverage at the rental
                        counter. Many rental agencies in Mexico require at least a
                        minimum CDW or equivalent coverage before releasing the vehicle,
                        and travelers can either accept the counter product or arrange
                        equivalent protection through their Mexican auto policy or a
                        credit-card benefit that actually applies to Mexican rentals.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Supplemental Liability Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Supplemental liability coverage raises the liability limit above
                        the minimum Mexican requirement, which is an important decision
                        because minimum-limit policies are frequently inadequate for a
                        serious accident involving hospitalization or multiple vehicles.
                        Recommended supplemental limits depend on the trip, traveler
                        assets, and realistic exposure in the specific Mexican state.
                        Supplemental liability is easy to add on a Mexican auto policy
                        and closes the meaningful gap between minimum liability and the
                        settlement levels that courts and insurance authorities can
                        impose in a complex case.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Medical Payments Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Medical payments coverage on a Mexican auto policy pays for
                        medical care for the driver and occupants of the insured vehicle
                        after a covered accident, regardless of fault. The benefit
                        complements a traveler&apos;s emergency medical travel
                        insurance by covering the specific auto-accident scenario, and
                        it often responds more quickly than reimbursement-based travel
                        medical coverage because payment flows through the Mexican auto
                        claim rather than through a separate medical claim. The
                        interaction between auto medical payments and travel medical
                        benefits is worth reviewing before departure.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Personal Accident and Personal Effects Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Personal Accident Insurance (PAI) and Personal Effects Coverage
                        (PEC) are optional add-ons commonly offered on Mexican rental
                        cars. PAI provides a defined accidental-death or disability
                        benefit for the driver and passengers, and PEC reimburses
                        personal property stolen from the rental vehicle, subject to
                        policy sub-limits. Both coverages can duplicate benefits
                        available from a comprehensive travel insurance policy or a
                        traveler&apos;s existing life and homeowners coverages, so
                        reviewing them before accepting at the rental counter avoids
                        paying twice for similar benefits.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Roadside Assistance and Legal Aid in Mexico
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Mexican auto policies frequently include roadside assistance for
                        mechanical breakdowns, flat tires, and fuel delivery along with
                        bilingual legal aid services that help navigate the Mexican
                        legal process after an accident. Legal-aid benefits are
                        genuinely important because Mexican traffic accidents are
                        treated as a legal matter until settled, and having bilingual
                        legal support coordinated by the insurance carrier removes a
                        significant amount of friction for travelers unfamiliar with the
                        local process. Roadside assistance also reduces the friction of
                        ordinary driving issues in less-familiar territory.
                      </p>
                    </div>
                  </div>
                </section>

                {/* D. Who needs */}
                <section aria-labelledby="who-needs-heading">
                  <h2 id="who-needs-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Who Needs Mexico Rental Car Coverage?
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Phoenix-area travelers renting cars at Cancún, Cabo San Lucas, and
                      Puerto Vallarta airports represent the largest single group of
                      travelers who need Mexico rental car insurance. Drivers heading to
                      Rocky Point and Puerto Peñasco for weekend trips from Phoenix and
                      Scottsdale form a second large group, particularly those driving
                      personal vehicles across the Sonora border. Travelers driving
                      their own vehicles into Baja California, Ensenada, and Rosarito
                      for surfing, fishing, and wine country visits face the same
                      Mexican-liability requirement, even when a U.S. carrier offers
                      limited physical-damage extension into the Baja border zone.
                    </p>
                    <p>
                      Snowbirds spending extended time in Mexican coastal communities
                      typically purchase longer-duration or annual Mexican auto
                      policies so that every drive during the season is covered without
                      the need to renew weekly. Adventure travelers exploring Mexican
                      destinations by rental vehicle, destination-wedding guests
                      traveling between airports, resorts, and venues in Tulum,
                      Playa del Carmen, and Cozumel, and business travelers to Mexican
                      cities requiring ground transportation all rely on either a
                      rental-counter package or a standalone Mexican liability policy to
                      drive legally.
                    </p>
                    <p>
                      Cruise passengers renting cars for shore excursions in Cozumel
                      and Puerto Vallarta often overlook the Mexican liability
                      requirement because the rental period is short, but the coverage
                      requirement applies to every kilometer of driving in Mexico
                      regardless of duration. Families combining fly-and-drive
                      itineraries, where an air-arrival to Cancún or Cabo is followed
                      by a rental-car segment to nearby destinations, represent another
                      common profile where Mexico rental car insurance Phoenix AZ
                      decisions come up at the counter.
                    </p>
                    <p>
                      Arizona&apos;s cross-border driving culture is the backdrop for
                      all of this. Proximity to Sonoran Mexico makes Rocky Point a
                      weekend destination from Phoenix, Mesa, Tempe, Chandler, and
                      Gilbert, and the short drive can mask the fact that Arizona auto
                      policies do not transfer into Mexico. A deliberate Mexican
                      liability policy, whether for a single trip or a full year of
                      cross-border travel, is the straightforward solution and the one
                      most licensed Arizona brokerages can arrange within a single
                      conversation.
                    </p>
                  </div>
                </section>

                {/* E. Considerations */}
                <section aria-labelledby="az-considerations-heading">
                  <h2
                    id="az-considerations-heading"
                    className="font-heading text-2xl font-bold md:text-3xl"
                  >
                    Mexico Rental Car and Driving Insurance Considerations
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Mexican law requires liability coverage from a Mexican-issued
                      policy, and U.S. policies do not satisfy that requirement even
                      when a carrier markets limited physical-damage extension into a
                      narrow Baja border zone. Minimum Mexican liability limits vary by
                      state and are modest, with recommended limits typically running
                      substantially higher because medical and legal costs after a
                      serious accident can exceed minimum policies quickly. Selecting
                      supplemental liability above the legal minimum is the single most
                      important coverage decision for cross-border travelers.
                    </p>
                    <p>
                      Consequences of driving without proper Mexican liability include
                      vehicle impoundment, driver detention while the matter is worked
                      through the Mexican legal system, and personal liability for the
                      full cost of injuries and property damage caused to others. The
                      Mexican system treats at-fault accidents as a legal issue until
                      civil and insurance obligations are settled, which is why
                      bilingual legal-aid support on a Mexican auto policy matters as
                      much as the raw coverage limits. Proof of insurance must be
                      carried in the vehicle at all times and presented on request.
                    </p>
                    <p>
                      At the rental counter, CDW and LDW are offered as default add-ons,
                      and many Mexican agencies require at least minimum CDW or
                      equivalent coverage before releasing the vehicle. Standalone
                      Mexican liability policies often provide higher liability limits
                      at a lower premium than rental-counter defaults, and some
                      standalone products include CDW and supplemental liability
                      together at competitive rates. Comparing rental-counter pricing to
                      a standalone policy is often worthwhile, particularly for longer
                      rentals and trips involving multiple vehicles or drivers.
                    </p>
                    <p>
                      Credit-card rental-car coverage is another area where travelers
                      frequently misread their protection. Many premium cards provide a
                      rental-car damage benefit as a secondary coverage layer, but the
                      benefit generally does not satisfy the Mexican liability
                      requirement, and some card benefits exclude rentals in Mexico
                      entirely. Reviewing the specific card benefit terms for Mexican
                      rentals before departure, and treating the Mexican liability
                      policy as a separate line item regardless of card coverage, is
                      the cleanest approach.
                    </p>
                    <p>
                      Driving a personal vehicle into Mexico requires a Mexican tourist
                      auto policy rather than a rental-car policy. Tourist auto policies
                      are purchased for the duration of the trip and cover Mexican
                      liability along with optional physical-damage coverage for the
                      personal vehicle. Cross-border documentation requirements include
                      the Mexican insurance policy, the driver&apos;s U.S. license, a
                      valid passport, the vehicle registration, and, beyond the
                      permitted Free Zone, a Temporary Import Permit (TIP) and a Forma
                      Migratoria Múltiple (FMM) tourist permit. Baja California permits
                      limited entry without a TIP for tourism within the Free Zone, but
                      Mexican liability coverage is still required for any driving in
                      the peninsula.
                    </p>
                    <p>
                      Handling an accident in Mexico follows a specific sequence: call
                      the Mexican insurance carrier before moving the vehicle, secure
                      the scene, wait for the adjuster and authorities, document the
                      scene with photos, exchange information, and follow the carrier&apos;s
                      instructions on statements to local police. Moving a vehicle
                      before the adjuster arrives can complicate the claim. Free Zone
                      driving in northern Baja and the Sonora free-travel corridor to
                      Rocky Point does not require a TIP, but Mexican liability coverage
                      applies in the same way as elsewhere in the country, and this is
                      a common area of confusion for new cross-border travelers.
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
                        partner of Protegrity Insurance Brokerage, so Arizona travelers
                        work with licensed professionals who actually understand
                        cross-border driving and Mexican insurance requirements rather
                        than generalists who treat every policy the same way. Our team
                        reviews minimum Mexican liability limits by state, supplemental
                        liability recommendations, CDW and LDW structures, medical
                        payments and personal accident interactions with travel medical
                        policies, and personal-vehicle tourist-auto policy terms against
                        your specific itinerary.
                      </p>
                      <p>
                        We maintain access to specialty Mexican auto insurance carriers
                        for both rental-car and personal-vehicle scenarios, and the
                        quality of the carrier matters because bilingual claims and
                        legal-aid services at the scene of an accident can define the
                        traveler&apos;s experience. Mexico rental car insurance quotes
                        vary between carriers depending on trip length, vehicle type,
                        drivers on the policy, and selected limits, and comparing
                        multiple carriers through a licensed brokerage is how travelers
                        identify the right combination of coverage and premium.
                      </p>
                      <p>
                        We serve travelers across Phoenix, Scottsdale, Mesa, Tempe,
                        Chandler, Glendale, Gilbert, and Peoria, and our 5.0-star
                        service reputation reflects consistent follow-through,
                        responsive service, and respectful communication from the first
                        quote through every policy placement and every claim.
                        Protegrity-supported processes keep required disclosures visible
                        and your questions answered so every decision rests on facts,
                        not pressure.
                      </p>
                    </div>
                  </div>
                </section>

                {/* G. FAQ */}
                <section aria-labelledby="faq-heading">
                  <h2 id="faq-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Frequently Asked Questions About Mexico Rental Car and Driving Insurance
                  </h2>

                  <div className="mt-8 space-y-10">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does my U.S. auto insurance cover me when I rent a car in Mexico?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        U.S. auto insurance generally does not provide liability
                        coverage for driving in Mexico, and it does not satisfy the
                        Mexican legal requirement for Mexican-issued liability
                        coverage. Some U.S. carriers offer limited physical-damage
                        extension into a narrow Baja California border zone, but that
                        extension is an optional, limited benefit and is not a
                        substitute for Mexican liability. Travelers renting a car in
                        Mexico need a Mexican liability policy, whether purchased at the
                        rental counter, through a standalone Mexican auto insurer, or
                        through a licensed Arizona broker before the trip.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Is Mexican liability insurance required by law?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Yes. Mexican federal and state laws require all drivers to carry
                        Mexican-issued third-party liability insurance, and proof of
                        coverage must be carried in the vehicle at all times. Driving
                        without proper Mexican liability can result in vehicle
                        impoundment, driver detention, and personal financial
                        responsibility for the full cost of injuries and property
                        damage caused in an accident. The requirement applies equally
                        to rental vehicles driven in Mexico and to personal vehicles
                        brought across the border from Arizona.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What does Mexico rental car insurance typically cost?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Short single-trip Mexican liability policies commonly run in the
                        low double digits per day, and full rental-counter packages that
                        include liability, CDW, and supplemental coverages are
                        typically more expensive than comparable standalone policies
                        through a Mexican auto insurer. Multi-day and annual policies
                        are available at favorable per-day rates for travelers making
                        multiple trips per year. Actual pricing varies by vehicle, trip
                        length, selected limits, and driver profile, and comparing a
                        few options through a licensed broker usually identifies the
                        best value.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is the difference between CDW and Mexican liability insurance?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Mexican liability insurance is a legally required third-party
                        coverage that pays for injuries and property damage the driver
                        causes to others. Collision Damage Waiver (CDW) is a contractual
                        waiver sold by the rental-car company that limits the
                        renter&apos;s responsibility for damage to the rental vehicle
                        itself. The two coverages address completely different risks and
                        are not substitutes for each other: CDW alone does not satisfy
                        the Mexican liability requirement, and Mexican liability alone
                        does not pay for damage to the rental vehicle.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does my credit card rental car coverage work in Mexico?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Many premium credit cards offer rental-car damage coverage as a
                        secondary benefit, but that coverage generally does not satisfy
                        the Mexican liability requirement, and some card benefits
                        exclude rentals in Mexico entirely. Card benefits that do
                        respond to Mexican rentals typically cover physical damage to
                        the rental vehicle only, not third-party liability.
                        Cardholders should confirm the specific Mexican-rental terms
                        before departure and plan to carry a standalone Mexican
                        liability policy regardless.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Do I need insurance to drive my own car to Rocky Point or Baja?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Yes. Driving a personal vehicle into Mexico requires a Mexican
                        tourist auto policy that includes Mexican-issued liability
                        coverage, regardless of how comprehensive the traveler&apos;s
                        Arizona auto policy is. Tourist auto policies are purchased for
                        the duration of the trip and can include optional physical
                        damage coverage for the personal vehicle. The requirement
                        applies to weekend trips from Phoenix to Rocky Point, longer
                        runs into Baja California, and any other cross-border driving,
                        and the policy must be active before the vehicle crosses the
                        border.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What happens if I get in an accident in Mexico without insurance?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Mexican traffic law treats at-fault accidents as a legal matter
                        until civil and insurance obligations are settled, which means a
                        driver without proper Mexican liability can be detained while
                        the matter is worked through the system. Vehicles can be
                        impounded, and the driver becomes personally responsible for
                        the full cost of third-party injuries and property damage.
                        Bilingual legal-aid services included with most Mexican auto
                        policies address this exact scenario, which is one of the
                        strongest reasons to place coverage before the trip rather than
                        after an incident.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How much liability coverage do I need for driving in Mexico?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Mexican state minimums are modest, and recommended practical
                        limits are typically several multiples higher because medical
                        and legal costs after a serious accident can easily exceed
                        minimum-limit policies. A common recommendation is to select
                        supplemental liability in the range that matches Arizona auto
                        policy limits or higher, particularly for travelers with
                        meaningful assets or household liability-umbrella exposure.
                        A licensed broker helps align Mexican liability limits with
                        the traveler&apos;s overall risk profile and the specific
                        Mexican destination.
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
                    Travelers to Mexico typically pair rental car coverage with{" "}
                    <Link
                      href="/insurance/mexico-travel/emergency-medical-and-dental"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      emergency medical and dental coverage
                    </Link>{" "}
                    for occupant medical care beyond the limits of auto medical
                    payments, and with{" "}
                    <Link
                      href="/insurance/mexico-travel/trip-cancellation-and-interruption"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      trip cancellation and interruption coverage
                    </Link>{" "}
                    to protect non-refundable prepaid trip costs when a covered event
                    disrupts the itinerary. Serious medical transport is handled through{" "}
                    <Link
                      href="/insurance/mexico-travel/medical-evacuation-and-repatriation"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      medical evacuation and repatriation coverage
                    </Link>
                    , baggage protection is provided by{" "}
                    <Link
                      href="/insurance/mexico-travel/lost-stolen-baggage"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      lost and stolen baggage coverage
                    </Link>
                    , and maximum flexibility on cancellation timing is available through{" "}
                    <Link
                      href="/insurance/mexico-travel/cancel-for-any-reason-cfar"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      cancel for any reason (CFAR)
                    </Link>
                    . A coordinated program across these components closes the gaps that
                    appear when a single event affects multiple parts of a trip.
                  </p>
                </section>

                {/* Closing paragraph with primary keyword */}
                <p className="text-base leading-relaxed text-muted-foreground">
                  Arizona travelers deserve cross-border auto coverage that reflects
                  how Mexican law actually treats at-fault drivers rather than a
                  rental-counter default that only partially addresses the exposure. A
                  thoughtful review of{" "}
                  <strong className="text-foreground">
                    Mexico rental car insurance Phoenix AZ
                  </strong>{" "}
                  options, alongside personal-vehicle tourist auto policies, CDW and
                  supplemental liability structures, medical payments and legal-aid
                  coordination, and single-trip versus annual policy formats, examines
                  recommended liability limits, coverage for drivers and occupants,
                  and Mexican-carrier claims handling for travelers across Phoenix,
                  Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.
                  When you are ready to move from research to a quoted proposal, work
                  with a licensed Arizona brokerage that will present the terms clearly
                  and respect both your travel plans and your decision timeline.
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
                    Ready to Drive Safely in Mexico?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
                    When you are ready to evaluate Mexican liability, CDW, and
                    supplemental coverage for a specific rental or cross-border trip,
                    Protegrity Insurance Brokerage can translate these concepts into
                    quoted options aligned with your destination, vehicle, and
                    driver profile. The next step is a structured conversation, not
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
