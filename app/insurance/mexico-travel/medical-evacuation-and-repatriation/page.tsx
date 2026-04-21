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
  title: "Medical Evacuation Insurance Mexico Phoenix AZ | Medevac",
  description:
    "Medical evacuation insurance Mexico Phoenix AZ: air ambulance and repatriation for Arizona travelers in Scottsdale, Mesa, Tempe, Chandler, Gilbert, and Peoria.",
  alternates: {
    canonical: "/insurance/mexico-travel/medical-evacuation-and-repatriation",
  },
  openGraph: {
    title: "Medical Evacuation & Repatriation Insurance for Mexico Travel | Five Star Rated",
    description:
      "Medical evacuation and repatriation coverage for Phoenix-area travelers to Mexico, serving Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.",
    url: `${SITE_URL}/insurance/mexico-travel/medical-evacuation-and-repatriation`,
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
    "Marketing partner connecting Arizona travelers with Mexico medical evacuation and repatriation insurance options and licensed support through Protegrity Insurance Brokerage.",
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
  name: "Mexico medical evacuation and repatriation insurance in Phoenix, Arizona",
  serviceType: "Travel insurance",
  provider: {
    "@type": "InsuranceAgency",
    name: "Five Star Rated Insurance",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "State",
    name: "Arizona",
  },
  url: `${SITE_URL}/insurance/mexico-travel/medical-evacuation-and-repatriation`,
  description:
    "Educational resource on medical evacuation and repatriation insurance for Arizona travelers visiting Mexico destinations including Rocky Point, Cancún, Cabo San Lucas, Puerto Vallarta, Tulum, Playa del Carmen, Cozumel, Baja California, and Mexico City.",
}

export default function MexicoMedicalEvacuationPhoenixPage() {
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
              src="https://images.unsplash.com/photo-1768120699583-c10787715af2?auto=format&fit=crop&w=2000&q=80"
              alt="Red air ambulance helicopter on a hospital helipad, medical evacuation and repatriation insurance for Mexico travel from Phoenix AZ"
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
                Medical Evacuation &amp; Repatriation Insurance for Mexico Travel in Phoenix, AZ
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
                A serious illness or injury abroad can require specialized transport that
                costs far more than most families expect.{" "}
                <strong className="font-semibold text-primary-foreground">
                  Medical evacuation insurance Mexico Phoenix AZ
                </strong>{" "}
                programs arrange and pay for air ambulance and repatriation services when
                care in country is not sufficient, supporting travelers from Phoenix,
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
                    Overview: What Medical Evacuation and Repatriation Insurance Means
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Medical evacuation and repatriation insurance is a category of
                      travel coverage that arranges and pays for medically-necessary
                      transport when a traveler requires a higher level of care than the
                      nearest facility can provide, or when bringing the traveler home
                      safely requires specialized medical transportation. The coverage is
                      distinct from emergency medical insurance, which pays for treatment
                      abroad, and from trip cancellation coverage, which reimburses
                      non-refundable trip costs. Evacuation and repatriation benefits
                      focus specifically on the logistics and cost of moving a patient
                      safely, which is often the single largest out-of-country expense a
                      traveling family can face.
                    </p>
                    <p>
                      The two halves of the coverage address different needs. Medical
                      evacuation transports a traveler from the point of injury or
                      illness to the nearest adequate medical facility when local care is
                      not sufficient. Medical repatriation transports a traveler back to
                      the home country once they are stable enough to move, so they can
                      continue recovery in familiar surroundings near family and
                      established physicians. A third benefit, repatriation of remains,
                      addresses the difficult but important scenario of returning a loved
                      one to the United States after a death abroad.
                    </p>
                    <p>
                      Emergency medical treatment alone is not enough without evacuation
                      coverage, because many parts of Mexico that Arizona travelers visit
                      are hours away from a hospital equipped to handle trauma, cardiac
                      events, strokes, or complex surgical needs. A traveler stabilized
                      at a small clinic in Rocky Point, Tulum, or Baja California may
                      still require transport to Cancún, Mexico City, or back to the
                      United States to receive definitive care. Evacuation benefits
                      coordinate and fund that move.
                    </p>
                    <p>
                      The financial exposure without coverage is significant. Air
                      ambulance services from Mexico to the United States commonly cost
                      between $25,000 and $100,000 for shorter trips out of Rocky Point
                      or Baja California, and can exceed $250,000 for longer flights from
                      Cancún, Cozumel, or Tulum when a fully-equipped medical aircraft
                      with a clinical team is required. Evacuation providers typically
                      require pre-payment or a credit hold for the full estimated cost,
                      which is why U.S. State Department and CDC advisories routinely
                      recommend medical evacuation coverage for international travel.
                    </p>
                    <p>
                      Phoenix travelers have specific reasons to pay close attention to
                      this coverage. Sky Harbor connects Arizona residents to every
                      major Mexican destination, weekend travel to Puerto Peñasco is a
                      cultural norm across the Valley, and cross-border exposure is
                      concentrated enough that a serious event in Mexico is realistic
                      rather than abstract. Even with the geographic proximity that makes
                      ground evacuation feasible in some Sonoran scenarios, air transport
                      is often the only safe option for a patient in an unstable
                      condition.
                    </p>
                    <p>
                      Evacuation to the nearest adequate facility and repatriation to
                      home are separate decisions. A policy may move a stroke patient
                      from Cabo San Lucas to a Mexico City specialty hospital under the
                      evacuation benefit, and then, once stabilized, fly the patient to
                      Phoenix under the repatriation benefit for continuing care. The
                      structure is deliberate and reflects how medical teams actually
                      manage complex international cases. Repatriation of remains is
                      never anyone&apos;s preferred outcome, but its inclusion in a
                      policy protects family members from a five-figure logistical burden
                      during an already difficult time. Coverage is typically affordable
                      and is bundled into comprehensive travel plans alongside emergency
                      medical, trip cancellation, and baggage benefits.
                    </p>
                  </div>
                </section>

                {/* C. What's covered */}
                <section aria-labelledby="covered-heading">
                  <h2 id="covered-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    What&apos;s Covered: Medical Evacuation and Repatriation Insurance Building Blocks
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    Medical evacuation and repatriation coverage works alongside emergency
                    medical benefits to close the gap between point-of-injury treatment
                    and definitive care. Emergency medical benefits fund the hospital bill
                    in country, and evacuation and repatriation benefits fund the
                    medically-necessary transport that a serious case can require. The
                    major components below describe how the coverage responds when a
                    traveler actually needs to be moved.
                  </p>

                  <div className="mt-8 space-y-8">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Emergency Medical Evacuation Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Emergency medical evacuation coverage arranges and pays for
                        transport from the point of injury or illness to the nearest
                        adequate medical facility when local care is insufficient for the
                        traveler&apos;s condition. The determination of medical necessity
                        is made by the carrier&apos;s 24-hour assistance team in
                        coordination with treating physicians, not by the traveler or
                        family alone. Covered services commonly include air ambulance,
                        ground ambulance, specialty medical aircraft with critical-care
                        teams, and commercial medical escorts when the patient is stable
                        enough for scheduled flights. Benefit limits frequently start at
                        $100,000 and are available up to $500,000 or $1 million on higher
                        limit plans.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Medical Repatriation to Home Country
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Medical repatriation coverage arranges transport back to the
                        traveler&apos;s home country once they are stable enough to move,
                        so continuing care can take place near family and established
                        physicians. Repatriation is typically triggered when a longer
                        course of treatment is required than completing it abroad is
                        practical. The benefit covers medically-appropriate transport
                        modes including specialty aircraft, commercial flights with a
                        medical escort, or ground transport for shorter distances, and
                        the coordination is handled by the carrier&apos;s assistance team
                        rather than the family.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Non-Medical Evacuation (Security, Natural Disaster)
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Some comprehensive travel policies include non-medical evacuation
                        benefits that respond to security events and natural disasters
                        affecting the traveler&apos;s location. Covered scenarios can
                        include civil unrest, terrorism, mandatory government-ordered
                        evacuations, and natural disasters such as hurricanes,
                        earthquakes, or volcanic events that render an area unsafe.
                        Benefit limits are typically lower than medical evacuation limits
                        and responses are coordinated by the same 24-hour assistance
                        team that handles medical cases. Travelers visiting coastal
                        Mexico destinations during hurricane season should confirm
                        whether non-medical evacuation is included on the policy.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Repatriation of Remains Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Repatriation of remains coverage addresses the scenario of a
                        death abroad by arranging and paying for the preparation,
                        documentation, and transport of the deceased traveler back to the
                        home country. The benefit covers the legal and logistical
                        requirements that international repatriation entails, including
                        consular coordination, embalming or cremation where required by
                        local law, a compliant transport container, and aircraft
                        transportation to a designated U.S. destination. Including this
                        coverage protects family members from a complex administrative
                        burden and a potential five-figure cost during a time when
                        attention should be on grief, not logistics.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Family Member and Travel Companion Transport
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Many comprehensive plans include benefits that either bring a
                        family member to the traveler&apos;s bedside during a serious
                        hospitalization abroad or transport a traveling companion home
                        when circumstances require. The bedside-visit benefit typically
                        applies after a specified period of hospitalization, often seven
                        days, and pays for a coach-class round-trip ticket and modest
                        per-diem expenses. The return-of-children benefit arranges
                        transport home for minor children when an accompanying adult is
                        hospitalized. These provisions address the real family-logistics
                        problems that arise when a serious event occurs far from home.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        24/7 Emergency Assistance and Coordination Services
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        A dedicated 24/7 assistance line is the operational backbone of
                        medical evacuation and repatriation coverage. The assistance team
                        coordinates with treating physicians, identifies appropriate
                        receiving facilities, arranges aircraft and ground transport,
                        handles cross-border medical and customs documentation, and
                        communicates with family members back in Arizona throughout the
                        process. Calling the assistance line before arranging any
                        transport is essential because most policies require carrier
                        coordination in advance, and evacuations arranged independently
                        may be reimbursed only at reasonable and customary levels, if at
                        all.
                      </p>
                    </div>
                  </div>
                </section>

                {/* D. Who needs */}
                <section aria-labelledby="who-needs-heading">
                  <h2 id="who-needs-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Who Needs Medical Evacuation and Repatriation Coverage for Mexico?
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Phoenix-area travelers visiting remote or rural Mexican destinations
                      with limited medical infrastructure face the clearest exposure.
                      Many popular coastal and interior destinations offer excellent
                      general care at private hospitals, but advanced trauma, cardiac,
                      neurological, and oncological capabilities are concentrated in a
                      smaller number of facilities. Travelers in smaller communities along
                      Baja California, the Sonoran coast, the Riviera Nayarit, and the
                      inland regions around Mexico City may need transport to a major
                      hospital before definitive care is possible.
                    </p>
                    <p>
                      Adventure travelers engaged in scuba diving, hiking, ATV tours,
                      zip-lining, or other higher-risk activities carry a realistic
                      chance of a serious injury that requires specialty transport.
                      Cruise passengers making stops in smaller Mexican ports, where
                      on-shore medical care can be basic and at-sea evacuation adds
                      logistical complexity, also benefit from coverage scaled to the
                      actual exposure of the itinerary. Older travelers and retirees
                      with higher baseline medical risk profiles and travelers with
                      chronic conditions that may require specialized care make up a
                      significant share of real-world evacuation cases.
                    </p>
                    <p>
                      Families traveling with children or elderly relatives often benefit
                      from plans that clearly cover each member and include
                      bedside-visit, return-of-children, and companion-transport
                      provisions. Business travelers visiting less-touristed areas of
                      Mexico, spring break travelers engaging in water sports and
                      adventure activities, and snowbirds and expats spending extended
                      time in Mexican coastal communities all fit the profile that
                      comprehensive evacuation coverage was built to protect. Destination
                      wedding guests heading to remote coastal resorts and scuba divers
                      visiting Cozumel for multi-day trips tend to treat evacuation
                      coverage as a non-negotiable part of the travel package.
                    </p>
                    <p>
                      Arizona&apos;s geographic proximity to Mexico introduces a useful
                      nuance. Some ground-evacuation scenarios out of Sonora are feasible
                      when a patient is stable and the distance to a U.S. hospital is
                      short. Air evacuation remains the only safe option for unstable
                      patients and for longer distances from Cancún, Cabo San Lucas,
                      Puerto Vallarta, Playa del Carmen, Tulum, and Mexico City. Policies
                      that include both ground and air transport under the same
                      evacuation benefit give the assistance team the flexibility to
                      choose the safest option.
                    </p>
                  </div>
                </section>

                {/* E. Considerations */}
                <section aria-labelledby="az-considerations-heading">
                  <h2
                    id="az-considerations-heading"
                    className="font-heading text-2xl font-bold md:text-3xl"
                  >
                    Mexico Medical Evacuation and Repatriation Insurance Considerations
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Coverage amount selection is the most important decision on this
                      category of policy. A recommended baseline is at least $100,000 for
                      medical evacuation, with higher limits available up to $500,000 or
                      $1 million on plans designed for adventure travel, older travelers,
                      or extended stays. A separate line for repatriation of remains
                      commonly carries a limit of $25,000 to $100,000. Matching the limit
                      to the realistic transport cost from the destination in question is
                      the key: a $500,000 air ambulance limit from Tulum or Cancún is
                      often more appropriate than a minimum-limit plan designed for
                      nearby cross-border trips.
                    </p>
                    <p>
                      Medicare does not cover medical evacuation or repatriation outside
                      the United States, and most domestic health insurance plans do not
                      either. A small number of high-end employer-sponsored plans include
                      limited international evacuation support, but Phoenix travelers
                      should never assume this coverage is in place without written
                      confirmation. A dedicated Arizona Mexico medevac insurance policy
                      removes that guesswork entirely and confirms in advance exactly
                      which transport services are covered, at what limits, and through
                      which assistance network.
                    </p>
                    <p>
                      The coordinating role of a 24/7 assistance provider is central to
                      how evacuation coverage actually works. The assistance team
                      identifies the receiving facility, negotiates with providers,
                      arranges the transport mode, handles consular and customs
                      documentation, and communicates with the family back home.
                      Evacuation to the nearest adequate facility is the default standard
                      on most policies, although some plans include language allowing
                      repatriation to a preferred facility once the patient is stable.
                      Reviewing the exact language before purchase is worthwhile because
                      nearest-adequate-facility and preferred-facility clauses produce
                      different outcomes in practice.
                    </p>
                    <p>
                      Ground and air ambulance modes are used depending on distance,
                      patient stability, and terrain. A ground ambulance from Puerto
                      Peñasco to a Phoenix hospital is plausible for a stable patient
                      with a several-hour driving window, and an air ambulance is the
                      standard answer for unstable patients or longer distances from
                      Cozumel, Cabo San Lucas, or Puerto Vallarta. Security evacuation
                      coverage responds when civil unrest, terrorism, or a natural
                      disaster affects the traveler&apos;s location and evacuation is
                      required by government authorities or is clearly necessary for
                      safety. These benefits are distinct from medical evacuation and
                      carry their own limits and eligibility rules.
                    </p>
                    <p>
                      Repatriation of remains is never the first topic travelers want to
                      review, but the benefit is genuinely important when it applies. The
                      coverage arranges consular documentation, compliant transport
                      containers, embalming or cremation where local law requires, and
                      aircraft transportation to a U.S. destination chosen by the family.
                      The alternative, which families occasionally face without coverage,
                      is a five-figure cost and a set of unfamiliar legal and logistical
                      problems during a painful time. Family member transport benefits
                      address a different but related need: bringing a loved one to the
                      traveler&apos;s bedside during a serious hospitalization and, when
                      applicable, escorting minor children home if the accompanying adult
                      is hospitalized.
                    </p>
                    <p>
                      Primary and secondary coverage structures affect how evacuation
                      benefits coordinate with domestic insurance. Most Phoenix medical
                      evacuation Mexico travel plans are primary for the evacuation and
                      repatriation benefits themselves, which means the carrier pays
                      directly without requiring a claim against domestic insurance
                      first. The single most important procedural rule is also the
                      simplest: call the assistance line before arranging any transport
                      yourself. Evacuations coordinated independently may be reimbursed
                      only at reasonable-and-customary levels and sometimes not at all.
                      Adventure and extreme-sport activities may require an endorsement
                      or a specific plan that names the activity, and policy exclusions
                      generally cover non-medically-necessary transport, patient-
                      preference transport without a medical basis, and transport
                      arranged for convenience.
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
                        work with licensed professionals who actually understand Mexico
                        travel and the evacuation and assistance market rather than
                        generalists who treat every international trip the same way. Our
                        team reviews evacuation limits, repatriation language,
                        nearest-adequate-facility versus preferred-facility clauses,
                        non-medical evacuation inclusions, adventure-activity
                        endorsements, and the interaction between evacuation and
                        emergency medical benefits against your specific itinerary, then
                        translates that review into accurate submissions carriers can
                        quote efficiently.
                      </p>
                      <p>
                        We maintain access to specialty travel-insurance carriers with
                        strong evacuation assistance networks, and that matters because
                        the quality of the 24-hour assistance team is often the
                        difference between a well-managed case and a chaotic one. Mexico
                        evacuation quotes vary between carriers depending on trip length,
                        destination, traveler age, planned activities, and limit
                        selection, and comparing multiple carriers through a licensed
                        brokerage is how travelers identify the right combination of
                        limit, assistance network, and premium for their situation.
                      </p>
                      <p>
                        We serve travelers across Phoenix, Scottsdale, Mesa, Tempe,
                        Chandler, Glendale, Gilbert, and Peoria, and our 5.0-star service
                        reputation reflects consistent follow-through, responsive
                        service, and respectful communication from the first quote
                        through every policy placement and every claim.
                        Protegrity-supported processes keep required disclosures visible
                        and your questions answered so every decision rests on facts, not
                        pressure.
                      </p>
                    </div>
                  </div>
                </section>

                {/* G. FAQ */}
                <section aria-labelledby="faq-heading">
                  <h2 id="faq-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Frequently Asked Questions About Mexico Medical Evacuation and Repatriation Insurance
                  </h2>

                  <div className="mt-8 space-y-10">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is the difference between medical evacuation and repatriation?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Medical evacuation transports a traveler from the point of injury
                        or illness to the nearest adequate medical facility when local
                        care is not sufficient for the condition. Medical repatriation
                        transports the traveler back to the home country once they are
                        stable enough to move, so continuing treatment can occur near
                        family and established physicians. A third benefit, repatriation
                        of remains, addresses the return of a deceased traveler to the
                        home country. The three benefits are related but distinct, and a
                        comprehensive travel policy includes all three with clearly
                        defined limits.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How much does a medical evacuation from Mexico cost without insurance?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Air ambulance services from Mexico to the United States commonly
                        cost between $25,000 and $100,000 for shorter trips out of Rocky
                        Point or Baja California, and can exceed $250,000 for longer
                        flights from Cancún, Cozumel, Tulum, or Mexico City when a
                        fully-equipped specialty aircraft with a clinical team is
                        required. Providers typically require pre-payment or a credit
                        hold for the full estimated cost before wheels-up, which is the
                        core reason travelers without coverage often cannot access
                        evacuation at all in the critical first hours.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does my health insurance or Medicare cover medical evacuation from Mexico?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Medicare does not cover medical evacuation or repatriation
                        outside the United States, and most domestic health insurance
                        plans do not cover it either. A small number of high-end
                        employer-sponsored plans include limited international evacuation
                        support, but travelers should never assume this coverage is in
                        place without written confirmation from the plan administrator. A
                        dedicated Mexico emergency transport insurance policy removes the
                        guesswork and confirms in advance which transport services are
                        covered, at what limits, and through which assistance network.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How much medical evacuation coverage do I need for a Mexico trip?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        A recommended baseline is at least $100,000 in medical evacuation
                        coverage, with higher limits available up to $500,000 or $1
                        million for adventure travel, older travelers, extended stays,
                        and trips to more remote destinations. Repatriation of remains
                        limits commonly range from $25,000 to $100,000. Matching the
                        limit to the realistic transport cost from the specific
                        destination is the key: a longer flight from Cancún or Tulum
                        justifies a higher limit than a short cross-border scenario, and
                        a licensed broker helps confirm the right number for each
                        itinerary.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does medical evacuation insurance cover return to my home in Phoenix?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Repatriation benefits on most comprehensive policies transport
                        the traveler to a hospital near the home country residence once
                        they are stable enough to travel, which for Phoenix-area
                        travelers typically means a receiving hospital in the Valley. The
                        evacuation benefit itself generally transports the traveler to
                        the nearest adequate facility, which may be in Mexico or the
                        United States, and the repatriation benefit continues the
                        transport home once definitive care is complete or can safely
                        continue there. Policy language on nearest-adequate-facility and
                        home-country repatriation varies by carrier, and reviewing it
                        before purchase is worthwhile.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is repatriation of remains coverage?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Repatriation of remains coverage arranges and pays for the
                        preparation, documentation, and transport of a deceased traveler
                        back to the home country following a death abroad. The benefit
                        addresses consular coordination, embalming or cremation where
                        required by local law, a compliant transport container, and
                        aircraft transportation to a U.S. destination chosen by the
                        family. Including the benefit protects family members from a
                        complex set of international legal and logistical requirements
                        and from a meaningful out-of-pocket cost during a time when
                        attention should be on one another rather than on logistics.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What should I do if I need emergency medical evacuation in Mexico?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Call the 24/7 assistance number printed on the policy as soon as
                        the situation becomes serious, even before arranging any
                        transport independently. The assistance team coordinates with
                        treating physicians, identifies the appropriate receiving
                        facility, arranges the aircraft or ground transport, and handles
                        customs, consular, and medical documentation. Independent
                        arrangements made without carrier coordination may be reimbursed
                        only at reasonable-and-customary levels or declined entirely, so
                        the single most important procedural step is making the call to
                        assistance first.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Are adventure activities like scuba diving and ATV tours covered?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Recreational adventure activities are often covered on a standard
                        comprehensive plan, while certain higher-risk activities such as
                        technical diving, racing, or extreme sports may require a named
                        endorsement or a plan specifically designed for adventure travel.
                        Travelers heading to Cozumel for recreational scuba, to Rocky
                        Point for ATV tours, or to Baja California for off-road and water
                        sports should confirm in writing that planned activities are
                        included before departure. A licensed broker identifies the plan
                        structure that matches the itinerary rather than relying on
                        default assumptions about coverage.
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
                    Travelers to Mexico typically pair medical evacuation and
                    repatriation coverage with{" "}
                    <Link
                      href="/insurance/mexico-travel/emergency-medical-and-dental"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      emergency medical and dental coverage
                    </Link>{" "}
                    for hospital and clinic treatment in country, and with{" "}
                    <Link
                      href="/insurance/mexico-travel/trip-cancellation-and-interruption"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      trip cancellation and interruption coverage
                    </Link>{" "}
                    to protect non-refundable prepaid trip costs when a covered event
                    disrupts the itinerary. Baggage protection is handled through{" "}
                    <Link
                      href="/insurance/mexico-travel/lost-stolen-baggage"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      lost and stolen baggage coverage
                    </Link>
                    , rental-car exposure south of the border is addressed through{" "}
                    <Link
                      href="/insurance/mexico-travel/rental-car-coverage-in-mexico"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      rental car coverage in Mexico
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
                  Arizona travelers deserve coverage that matches the realistic cost and
                  complexity of moving a patient safely rather than a generic travel
                  benefit that disappoints when it is actually needed. A thoughtful
                  review of{" "}
                  <strong className="text-foreground">
                    medical evacuation insurance Mexico Phoenix AZ
                  </strong>{" "}
                  options, alongside repatriation limits, repatriation-of-remains
                  inclusions, non-medical evacuation provisions, and the quality of the
                  24-hour assistance network, examines nearest-adequate-facility versus
                  home-country repatriation language, adventure-activity endorsements,
                  and single-trip versus annual multi-trip structures for travelers
                  across Phoenix, Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert,
                  and Peoria. When you are ready to move from research to a quoted
                  proposal, work with a licensed Arizona brokerage that will present the
                  terms clearly and respect both your travel plans and your decision
                  timeline.
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
                    Ready to Secure Emergency Transport for Your Mexico Trip?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
                    When you are ready to evaluate medical evacuation and repatriation
                    coverage for a specific Mexico trip, Protegrity Insurance Brokerage
                    can translate these concepts into quoted options aligned with your
                    destination, trip length, traveler profile, and planned activities.
                    The next step is a structured conversation, not pressure: you set the
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
