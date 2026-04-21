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
  title: "Cancel For Any Reason Insurance Mexico Phoenix AZ | CFAR",
  description:
    "Cancel For Any Reason insurance Mexico Phoenix AZ: flexible CFAR trip cancellation for Arizona travelers in Scottsdale, Mesa, Tempe, Chandler, and Gilbert.",
  alternates: {
    canonical: "/insurance/mexico-travel/cancel-for-any-reason-cfar",
  },
  openGraph: {
    title: "Cancel For Any Reason (CFAR) Insurance for Mexico Travel | Five Star Rated",
    description:
      "Cancel For Any Reason (CFAR) coverage for Phoenix-area travelers to Mexico, serving Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.",
    url: `${SITE_URL}/insurance/mexico-travel/cancel-for-any-reason-cfar`,
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
    "Marketing partner connecting Arizona travelers with Cancel For Any Reason (CFAR) travel insurance upgrades and licensed support through Protegrity Insurance Brokerage.",
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
  name: "Cancel For Any Reason (CFAR) travel insurance for Mexico trips in Phoenix, Arizona",
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
  url: `${SITE_URL}/insurance/mexico-travel/cancel-for-any-reason-cfar`,
  description:
    "Educational resource on Cancel For Any Reason (CFAR) travel insurance for Arizona travelers visiting Mexico destinations including Rocky Point, Cancún, Cabo San Lucas, Puerto Vallarta, Tulum, Playa del Carmen, Cozumel, Baja California, and Mexico City.",
}

export default function MexicoCfarPhoenixPage() {
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
              src="https://images.unsplash.com/photo-1586441133374-ed1cb4007a47?auto=format&fit=crop&w=2000&q=80"
              alt="Passport and boarding pass resting on a travel bag, Cancel For Any Reason CFAR travel insurance for Mexico trips from Phoenix AZ"
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
                Cancel For Any Reason (CFAR) Insurance for Mexico Travel in Phoenix, AZ
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
                A standard trip cancellation policy responds only when a covered reason
                forces a cancellation.{" "}
                <strong className="font-semibold text-primary-foreground">
                  Cancel For Any Reason insurance Mexico Phoenix AZ
                </strong>{" "}
                upgrades that protection so travelers from Phoenix, Scottsdale, Mesa,
                Tempe, Chandler, Glendale, Gilbert, and Peoria keep meaningful flexibility
                to cancel expensive Mexico trips on their own terms.
              </p>
            </div>
          </section>

          <div className="bg-background">
            <div className="container mx-auto max-w-4xl px-4 py-14 md:py-20">
              <article className="prose prose-slate max-w-none space-y-12 text-foreground">
                {/* B. Overview */}
                <section aria-labelledby="overview-heading">
                  <h2 id="overview-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Overview: What Cancel For Any Reason (CFAR) Insurance Means
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Cancel For Any Reason (CFAR) coverage is an optional upgrade on a
                      comprehensive travel insurance policy that reimburses a defined
                      percentage of non-refundable, prepaid trip costs when a traveler
                      cancels for any reason not listed on the standard covered-reason
                      schedule. A standard trip cancellation policy responds only when
                      the cancellation is tied to a specific covered reason, such as
                      serious illness, injury, death in the family, jury duty,
                      involuntary job loss, or a named hurricane. CFAR expands that
                      protection by allowing cancellation for any personal reason at all,
                      subject to strict timing requirements and a partial-reimbursement
                      structure.
                    </p>
                    <p>
                      CFAR is considered the most flexible travel-insurance option
                      available because it is the only trip-protection benefit that
                      responds when a traveler simply changes their mind, grows
                      uncomfortable with evolving travel conditions, has a personal
                      schedule change that does not qualify under a standard policy, or
                      decides for any private reason to cancel the trip. For Phoenix
                      travelers who book Mexico vacations far in advance and commit
                      significant prepaid costs to resorts, flights, and excursions, the
                      ability to cancel without justifying the reason is a meaningful
                      feature.
                    </p>
                    <p>
                      The reimbursement structure on CFAR is partial rather than full.
                      Carriers commonly reimburse 50, 60, or 75 percent of the insured,
                      non-refundable trip cost when a CFAR cancellation is submitted,
                      with 75 percent being the upper end of the market and 50 to 60
                      percent being common on less expensive upgrades. The unreimbursed
                      portion (the remaining 25 to 50 percent) is the deliberate
                      trade-off that keeps CFAR priced below a full-refund product while
                      still returning most of the trip investment to the traveler.
                    </p>
                    <p>
                      CFAR is especially valuable for Phoenix-area families booking
                      expensive Mexico vacations many months before departure. All-
                      inclusive resorts in Cancún, the Riviera Maya, Cabo San Lucas, and
                      Puerto Vallarta lock in meaningful prepaid commitments long before
                      the trip date, and a change in plans after the final-payment
                      deadline typically converts into a major financial loss without
                      trip protection. Standard trip cancellation covers many, but not
                      all, of the reasons families actually cancel. CFAR fills the gap
                      for reasons that fall outside the covered-reason list, such as
                      general concerns about travel advisories, personal preference,
                      fear of flying, or simply a change of heart.
                    </p>
                    <p>
                      The critical mechanical difference between CFAR and standard trip
                      cancellation is the word &quot;any.&quot; Standard trip
                      cancellation requires a specific covered reason and reimburses up
                      to 100 percent of insured trip cost when that reason applies.
                      CFAR asks for no reason at all and reimburses a defined percentage
                      of trip cost in any scenario the traveler chooses, with the narrow
                      exception of cancellations made within 48 hours of scheduled
                      departure. The two structures serve different needs, and most
                      comprehensive plans allow the traveler to add CFAR on top of
                      standard trip cancellation rather than choose between them.
                    </p>
                    <p>
                      Purchase-window requirements are strict. CFAR must typically be
                      added to a comprehensive travel policy within 14 to 21 days of the
                      initial trip deposit, depending on the carrier, and later
                      additions are usually not permitted. CFAR is an upgrade on a
                      comprehensive plan rather than a standalone product, which means
                      the underlying policy must be in place first and the CFAR rider
                      layered on top. Understanding the timing rules at the time of
                      booking is the single most important practical step in making
                      CFAR available.
                    </p>
                  </div>
                </section>

                {/* C. What's covered */}
                <section aria-labelledby="covered-heading">
                  <h2 id="covered-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    What&apos;s Covered: Cancel For Any Reason (CFAR) Building Blocks
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    CFAR is a clearly-defined upgrade that attaches to a comprehensive
                    travel insurance policy and expands the cancellation benefit to
                    respond to any reason a traveler chooses to cancel. Reviewing the
                    major components makes it easier to understand how the coverage
                    actually works when it is time to file a claim and why the structure
                    is deliberately different from standard trip cancellation.
                  </p>

                  <div className="mt-8 space-y-8">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        How CFAR Works as an Upgrade to a Comprehensive Policy
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        CFAR is available only as an optional upgrade on a comprehensive
                        travel insurance plan that already includes standard trip
                        cancellation, trip interruption, emergency medical, and related
                        benefits. The underlying policy responds to covered reasons at
                        full reimbursement, and the CFAR rider extends that protection
                        to any non-covered reason at a defined partial-reimbursement
                        percentage. The traveler chooses the policy first and then
                        elects CFAR as an add-on at the time of placement, which is why
                        the structure is sometimes described as a safety net sitting on
                        top of standard trip cancellation.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Reimbursement Percentages (50% to 75%)
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        CFAR reimburses a defined percentage of the insured
                        non-refundable trip cost, most commonly 50, 60, or 75 percent.
                        Higher percentages carry higher premiums and are the preferred
                        structure for travelers with significant prepaid costs who want
                        the largest realistic return if they cancel. Lower percentages
                        reduce premium and may be acceptable for travelers whose
                        underlying trip cost is lower or whose primary concern is simply
                        recovering a majority of the trip value. The exact percentage is
                        fixed at the time the policy is placed and appears clearly in
                        the plan documents.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Non-Refundable Prepaid Trip Costs Covered
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        CFAR reimbursement applies to the same category of expenses as
                        standard trip cancellation: non-refundable prepaid costs the
                        traveler cannot recover directly from the airline, resort,
                        cruise line, or tour operator. Reimbursable items include
                        airfare, hotel or resort charges, cruise fares, excursion and
                        tour payments, transfers, and similar commitments, up to the
                        insured trip cost declared at the time the policy was placed.
                        Credit-card benefits, airline vouchers, and resort credits that
                        are actually received reduce the CFAR reimbursement calculation
                        so the policy does not double-pay for the same loss.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Timing Requirements: Purchase Window and Cancellation Window
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Two timing windows govern CFAR. The purchase window requires
                        adding CFAR within 14 to 21 days of the initial trip deposit
                        depending on the carrier, and late additions are generally not
                        accepted. The cancellation window requires the CFAR cancellation
                        to be submitted at least 48 hours before the scheduled departure
                        date, and cancellations made within the 48-hour window are
                        typically not eligible for CFAR reimbursement. Meeting both
                        windows is a pure calendar exercise and, once understood, is
                        straightforward to plan around.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Insured Trip Costs and Coverage Limits
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        CFAR typically requires insuring 100 percent of prepaid
                        non-refundable trip costs at the time of policy placement,
                        which means the benefit is calibrated to the entire trip
                        investment rather than a partial amount. Overall benefit limits
                        are tied to the trip-cost declaration, and travelers should
                        update the figure if additional prepaid items are added before
                        the final payment deadline. Accurate declaration of trip cost
                        keeps the reimbursement calculation clean and prevents surprises
                        if a claim is submitted late in the process.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        What CFAR Does Not Cover
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        CFAR does not pay 100 percent of the trip cost, and the
                        unreimbursed portion (the 25 to 50 percent outside the CFAR
                        percentage) is a deliberate trade-off. CFAR also does not
                        respond to cancellations made within 48 hours of scheduled
                        departure, to post-departure decisions, or to expenses that
                        were not declared as prepaid, non-refundable trip cost on the
                        original application. Known events at the time the policy was
                        purchased, intentional or illegal acts, and losses paid by
                        another party are also excluded, and the specific list varies by
                        carrier.
                      </p>
                    </div>
                  </div>
                </section>

                {/* D. Who needs */}
                <section aria-labelledby="who-needs-heading">
                  <h2 id="who-needs-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Who Needs Cancel For Any Reason Coverage for Mexico Travel?
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Phoenix-area travelers booking all-inclusive resorts in Cancún,
                      the Riviera Maya, Cabo San Lucas, and Puerto Vallarta many months
                      in advance represent the clearest audience for CFAR. Advance
                      bookings lock in significant prepaid commitments at the lowest
                      rates, and those same commitments carry the highest risk of loss
                      if plans change. Travelers concerned about evolving travel
                      advisories for specific Mexico destinations, where situations can
                      shift between booking and travel without triggering a standard
                      covered reason, often select CFAR for exactly that flexibility.
                    </p>
                    <p>
                      Families with uncertain schedules benefit disproportionately from
                      CFAR. Work commitments that are not severe enough to trigger
                      involuntary job-loss coverage, school activities that are added
                      after booking, young children whose care needs can shift, and
                      elderly parents whose health may require attention on short
                      notice all create real cancellation risk that standard
                      covered-reason policies do not fully address. Adventure travelers
                      with activity-dependent trips, where surfing conditions, fishing
                      seasons, or whale-watching timing can shape the value of the trip,
                      find CFAR useful because weather and wildlife conditions rarely
                      qualify as covered reasons on standard policies.
                    </p>
                    <p>
                      Destination-wedding guests with substantial prepaid flight and
                      resort costs, cruise passengers with complex itineraries and
                      significant prepaid expenses, and travelers booking during
                      Mexico&apos;s June through November hurricane season who want the
                      broadest possible flexibility (beyond the named-hurricane covered
                      reason on standard policies) all benefit from CFAR coverage. High-
                      value trip bookings in the five- or six-figure range often
                      justify the additional CFAR premium because losing 25 to 50
                      percent of total trip cost is still preferable to losing 100
                      percent when a standard covered reason does not apply.
                    </p>
                    <p>
                      Senior travelers and retirees who want flexibility as health
                      conditions evolve, Phoenix-area snowbirds planning longer Mexican
                      stays, and frequent travelers who build annual travel budgets
                      around Mexico vacations often make CFAR a default add-on rather
                      than a case-by-case decision. Popular Mexico resort bookings from
                      Sky Harbor, peak spring-break travel windows, and year-round
                      Valley demand for coastal and inland Mexican destinations produce
                      a steady audience for the most flexible travel insurance Mexico
                      option on the market.
                    </p>
                  </div>
                </section>

                {/* E. Considerations */}
                <section aria-labelledby="az-considerations-heading">
                  <h2
                    id="az-considerations-heading"
                    className="font-heading text-2xl font-bold md:text-3xl"
                  >
                    Mexico CFAR Travel Insurance Considerations
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      CFAR carries a meaningful additional cost on top of standard trip
                      cancellation, commonly running 40 to 50 percent more in premium
                      than the comprehensive base plan alone. The exact figure depends
                      on the carrier, the insured trip cost, the traveler&apos;s age,
                      the destination, and the selected CFAR reimbursement percentage.
                      Higher CFAR percentages (for example, 75 percent) carry higher
                      premium than lower percentages (for example, 50 percent), and the
                      choice is part of structuring the overall program rather than a
                      yes-or-no decision.
                    </p>
                    <p>
                      CFAR is available only as an upgrade to a comprehensive travel
                      insurance policy. A standalone CFAR product is not sold in the
                      United States market, which means the traveler first selects a
                      comprehensive plan that includes standard trip cancellation, trip
                      interruption, emergency medical, medical evacuation, and baggage
                      benefits, and then layers CFAR on top. The interaction between
                      CFAR and the underlying covered-reason schedule matters because a
                      claim that qualifies under a standard covered reason is typically
                      reimbursed at 100 percent, while the same situation reimbursed
                      under CFAR would return only the CFAR percentage.
                    </p>
                    <p>
                      Timing rules are strict on both ends. CFAR must typically be added
                      within 14 to 21 days of the initial trip deposit, depending on
                      the carrier, and late additions are generally not accepted. CFAR
                      cancellations typically must be submitted at least 48 hours before
                      the scheduled departure date, and cancellations made within the
                      48-hour window are typically not eligible for CFAR reimbursement.
                      Insuring 100 percent of prepaid non-refundable trip costs is a
                      common CFAR qualification requirement, which keeps the benefit
                      structure tied to the entire investment rather than a partial
                      amount.
                    </p>
                    <p>
                      Reimbursement percentages are stated clearly in the plan
                      documents. The most common options are 50, 60, and 75 percent of
                      the insured trip cost, with 75 percent representing the upper end
                      of the market and often the preferred choice for high-value Mexico
                      vacations. The unreimbursed portion of trip cost (25 to 50
                      percent, depending on the selected percentage) is the planned
                      trade-off, and events that occur within 48 hours of scheduled
                      departure are outside the CFAR window regardless of cause.
                    </p>
                    <p>
                      State availability is a practical consideration. CFAR is not
                      available to residents of a small number of states under current
                      regulations, and the list of permitted states can shift over time
                      as regulatory positions change. Arizona residents currently have
                      access to CFAR through major comprehensive travel insurance
                      carriers, and a licensed broker confirms the current state of the
                      list at the time of placement. Typical CFAR scenarios include
                      concerns about destination safety, evolving health conditions,
                      personal scheduling changes, fear of flying, changed mind, and
                      family disagreements, and the benefit pays without requiring the
                      traveler to justify the choice.
                    </p>
                    <p>
                      Hurricane-season considerations in coastal Mexico deserve attention.
                      Standard trip cancellation typically covers named hurricanes that
                      render a destination uninhabitable as a covered reason, and CFAR
                      lets travelers cancel preemptively before a hurricane is named or
                      when conditions are concerning but do not yet meet the
                      named-hurricane threshold. For trips booked during the June through
                      November season, the combination of standard trip cancellation and
                      CFAR provides the broadest realistic protection. Documentation
                      for CFAR claims is typically simpler than for standard
                      cancellation claims because no covered reason is required; the
                      traveler confirms the cancellation, and the reimbursement is
                      calculated on the insured trip cost. CFAR is often worth the cost
                      for high-value Mexico vacations, and the key practical point is to
                      know exactly which reimbursement percentage the specific policy
                      carries.
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
                        work with licensed professionals who actually understand flexible
                        travel coverage needs rather than generalists who treat every
                        trip the same way. Our team reviews comprehensive plan options,
                        CFAR reimbursement percentages, purchase-window rules, trip-cost
                        qualification requirements, state availability, and the
                        interaction between CFAR and the underlying covered-reason
                        schedule against your specific Mexico itinerary, and translates
                        that review into accurate submissions carriers can quote
                        efficiently.
                      </p>
                      <p>
                        We maintain access to specialty travel-insurance carriers that
                        offer CFAR upgrades on comprehensive plans, which matters
                        because availability, percentages, and pricing vary between
                        carriers. Phoenix travelers CFAR Mexico quotes depend on trip
                        length, destination, traveler profile, selected reimbursement
                        percentage, and overall plan structure, and comparing multiple
                        carriers through a licensed brokerage is how travelers identify
                        the right combination of comprehensive protection and CFAR
                        flexibility.
                      </p>
                      <p>
                        We serve travelers across Phoenix, Scottsdale, Mesa, Tempe,
                        Chandler, Glendale, Gilbert, and Peoria, and our 5.0-star
                        service reputation reflects consistent follow-through, responsive
                        service, and respectful communication from the first quote
                        through every policy placement and every claim. Protegrity-
                        supported processes keep required disclosures visible and your
                        questions answered so every decision rests on facts, not
                        pressure.
                      </p>
                    </div>
                  </div>
                </section>

                {/* G. FAQ */}
                <section aria-labelledby="faq-heading">
                  <h2 id="faq-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Frequently Asked Questions About Cancel For Any Reason (CFAR) Insurance
                  </h2>

                  <div className="mt-8 space-y-10">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is Cancel For Any Reason (CFAR) insurance and how does it work?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        CFAR is an optional upgrade on a comprehensive travel insurance
                        policy that reimburses a defined percentage of non-refundable,
                        prepaid trip costs when a traveler cancels for any reason not
                        listed on the standard covered-reason schedule. A standard trip
                        cancellation policy responds only when a specific covered
                        reason applies; CFAR extends that protection to any reason at
                        all, subject to strict purchase-window and cancellation-window
                        rules. Reimbursement typically equals 50, 60, or 75 percent of
                        insured trip cost, and CFAR is layered on top of the standard
                        trip cancellation benefit on the same policy.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How is CFAR different from standard trip cancellation insurance?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Standard trip cancellation responds only when the traveler
                        cancels for a reason on the policy&apos;s covered-reason
                        schedule, such as serious illness, injury, death in the family,
                        jury duty, involuntary job loss, or a named hurricane, and
                        reimburses up to 100 percent of insured trip cost when that
                        reason applies. CFAR responds when the traveler cancels for
                        any reason at all and reimburses a defined percentage (commonly
                        50 to 75 percent) of insured trip cost. The two benefits sit on
                        the same policy and serve different needs, which is why most
                        travelers who add CFAR keep standard trip cancellation as well.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        When do I have to purchase CFAR coverage?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        CFAR must typically be added to a comprehensive travel
                        insurance policy within 14 to 21 days of the initial trip
                        deposit, depending on the carrier. Later additions are
                        generally not accepted, which is why CFAR decisions are best
                        handled at the time of booking rather than weeks later when the
                        window may have closed. A licensed broker helps confirm the
                        specific purchase window for each carrier and places the
                        comprehensive plan plus CFAR upgrade together so both are
                        effective from the same start date.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What percentage of my Mexico trip is reimbursed under CFAR?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        CFAR reimbursement is a defined percentage of insured,
                        non-refundable trip cost, most commonly 50, 60, or 75 percent.
                        Higher percentages carry higher premiums and are the preferred
                        choice for high-value Mexico vacations where recovering the
                        largest realistic portion of trip cost is the priority. Lower
                        percentages reduce premium and may be acceptable for travelers
                        whose underlying trip cost is lower. The specific percentage is
                        fixed at the time the policy is placed and is spelled out in
                        the plan documents.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Can I cancel for literally any reason with CFAR coverage?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        CFAR responds to cancellations made for any reason the traveler
                        chooses, with two narrow exceptions: cancellations made within
                        48 hours of the scheduled departure date and events already
                        known at the time the policy was placed. Concerns about
                        destination safety, evolving health conditions, personal
                        scheduling changes, fear of flying, a change of heart, and
                        similar private reasons are the classic CFAR scenarios. The
                        carrier does not require the traveler to justify the reason,
                        only that the cancellation meets the timing rules and that the
                        trip cost insured on the policy matches actual prepaid costs.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How much does CFAR cost compared to standard trip cancellation?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        CFAR commonly adds 40 to 50 percent to the comprehensive plan
                        premium, and the exact figure depends on the carrier, trip cost,
                        traveler age, destination, and selected reimbursement
                        percentage. For a mid-range Mexico vacation, the incremental
                        CFAR premium is meaningful but typically modest relative to the
                        total trip investment. For high-value bookings, the premium
                        scales with trip cost and is often justified by the higher
                        dollars at risk if standard covered reasons do not apply to the
                        eventual cancellation.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Is CFAR worth the extra cost for a Mexico vacation?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        CFAR is typically worth the extra cost when the trip cost is
                        high, when plans are booked well in advance, when the traveler
                        values flexibility to cancel for personal reasons, or when the
                        trip is scheduled during hurricane season. For modest-cost
                        domestic trips, CFAR may not justify the additional premium.
                        For high-value Mexico vacations booked months in advance,
                        recovering 50 to 75 percent of trip cost through CFAR is
                        typically far better than recovering nothing when a standard
                        covered reason does not apply, which is the specific scenario
                        CFAR was designed for.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Are there any states where CFAR is not available?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Yes. CFAR is not available to residents of a small number of
                        states under current regulations, and the specific list of
                        permitted states can shift as regulatory positions change.
                        Arizona residents currently have access to CFAR through major
                        comprehensive travel insurance carriers, and a licensed broker
                        confirms the current state availability at the time of
                        placement. Travelers who split residency between Arizona and
                        another state should confirm the state of residency used on the
                        travel insurance application to ensure CFAR availability.
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
                    Travelers who add CFAR to a Mexico vacation policy typically keep
                    the underlying comprehensive benefits in place, including{" "}
                    <Link
                      href="/insurance/mexico-travel/emergency-medical-and-dental"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      emergency medical and dental coverage
                    </Link>{" "}
                    for care abroad and{" "}
                    <Link
                      href="/insurance/mexico-travel/trip-cancellation-and-interruption"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      trip cancellation and interruption coverage
                    </Link>{" "}
                    for standard covered reasons at full reimbursement. Serious medical
                    transport is handled through{" "}
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
                    , and cross-border driving exposure is addressed through{" "}
                    <Link
                      href="/insurance/mexico-travel/rental-car-coverage-in-mexico"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      rental car coverage in Mexico
                    </Link>
                    . A coordinated program across these components closes the gaps that
                    appear when a single event affects multiple parts of a trip.
                  </p>
                </section>

                {/* Closing paragraph with primary keyword */}
                <p className="text-base leading-relaxed text-muted-foreground">
                  Arizona travelers deserve cancellation flexibility that reflects how
                  real plans actually change rather than a covered-reason schedule that
                  only partially addresses the way families make decisions. A thoughtful
                  review of{" "}
                  <strong className="text-foreground">
                    Cancel For Any Reason insurance Mexico Phoenix AZ
                  </strong>{" "}
                  options, alongside the underlying comprehensive trip cancellation
                  coverage, examines CFAR reimbursement percentages, purchase-window
                  requirements, cancellation-window rules, trip-cost qualification
                  thresholds, and single-trip versus multi-trip policy structures for
                  travelers across Phoenix, Scottsdale, Mesa, Tempe, Chandler, Glendale,
                  Gilbert, and Peoria. When you are ready to move from research to a
                  quoted proposal, work with a licensed Arizona brokerage that will
                  present the terms clearly and respect both your travel plans and your
                  decision timeline.
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
                    Ready to Add Maximum Flexibility to Your Mexico Trip?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
                    When you are ready to evaluate Cancel For Any Reason (CFAR) coverage
                    for a specific Mexico trip, Protegrity Insurance Brokerage can
                    translate these concepts into quoted options aligned with your trip
                    cost, traveler profile, and preferred reimbursement percentage. The
                    next step is a structured conversation, not pressure: you set the
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
