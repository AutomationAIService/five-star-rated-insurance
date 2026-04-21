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
  title: "Boat Insurance Phoenix AZ | Jet Ski & Watercraft Coverage",
  description:
    "Boat insurance Phoenix AZ plus jet ski and watercraft coverage for Arizona lake owners across Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.",
  alternates: {
    canonical: "/insurance/specialty/boat-and-watercraft-coverage",
  },
  openGraph: {
    title: "Boat and Jet Ski Insurance in Phoenix, AZ | Five Star Rated",
    description:
      "Arizona boat and watercraft coverage for Lake Pleasant, Lake Havasu, Saguaro Lake, and Colorado River boating across Phoenix, Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.",
    url: `${SITE_URL}/insurance/specialty/boat-and-watercraft-coverage`,
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
    "Marketing partner connecting Arizona boaters with Phoenix boat, jet ski, and watercraft insurance options and licensed support through Protegrity Insurance Brokerage.",
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
  name: "Boat, jet ski, and watercraft insurance in Phoenix, Arizona",
  serviceType: "Boat and personal watercraft insurance",
  provider: {
    "@type": "InsuranceAgency",
    name: "Five Star Rated Insurance",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "State",
    name: "Arizona",
  },
  url: `${SITE_URL}/insurance/specialty/boat-and-watercraft-coverage`,
  description:
    "Educational resource on Arizona boat, jet ski, and watercraft insurance covering liability, hull, uninsured boater, fuel spill, and on-board equipment across Maricopa County lakes and the Colorado River.",
}

export default function BoatWatercraftInsurancePhoenixPage() {
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
              src="https://images.unsplash.com/photo-1468581264429-2548ef9eb732?auto=format&fit=crop&w=2000&q=80"
              alt="Boat on scenic Arizona desert lake, boat and jet ski insurance Phoenix AZ coverage for Arizona watercraft owners"
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
                Boat and Jet Ski Insurance in Phoenix, AZ
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
                Arizona&apos;s year-round boating weather, accessible desert lakes, and strong
                Colorado River tradition make the Valley a natural home for recreational
                watercraft owners.{" "}
                <strong className="font-semibold text-primary-foreground">
                  Boat insurance Phoenix AZ
                </strong>{" "}
                programs, along with dedicated jet ski and personal-watercraft coverage,
                protect weekend boaters, fishing enthusiasts, and families across Phoenix,
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
                    Overview: What Boat and Watercraft Insurance Means in Phoenix
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Boat and watercraft insurance is a family of specialty policies built
                      around the realities of operating a vessel on Arizona lakes and rivers
                      rather than the standard road-vehicle model used by auto insurance or
                      the property-centric model used by homeowners insurance. A dedicated
                      boat policy combines liability for injuries or damage the operator
                      causes on the water with hull coverage for the vessel itself,
                      uninsured-boater protection, medical payments, fuel-spill liability,
                      and on-board equipment coverage. Personal watercraft, commonly called
                      jet skis, are written on similar but distinct policy forms that reflect
                      the unique exposure of stand-up and sit-down personal-watercraft use.
                    </p>
                    <p>
                      Arizona has one of the most active inland boating cultures in the
                      country, supported by a ring of year-round reservoirs within easy
                      driving distance of the Valley. Lake Pleasant sits just north of
                      Peoria and handles heavy recreational traffic each weekend. Saguaro
                      Lake, Canyon Lake, Apache Lake, and Roosevelt Lake along the Salt River
                      chain draw boaters from Mesa, Gilbert, and Chandler. Bartlett Lake
                      northeast of Scottsdale serves the East Valley, and Lake Havasu on the
                      Colorado River remains the signature summer destination for Phoenix
                      boat owners who trailer their vessels west every season.
                    </p>
                    <p>
                      Homeowners insurance typically provides very limited coverage for
                      small, low-horsepower watercraft, such as canoes, kayaks, paddle boats,
                      and some small-engine boats below a narrow horsepower threshold, and
                      even that limited coverage often excludes liability on the water or
                      caps hull protection at a figure well below the vessel&apos;s true
                      value. Larger boats, performance boats, pontoons with meaningful
                      engines, and personal watercraft fall entirely outside the scope of a
                      standard homeowners policy and require a dedicated specialty product.
                      Relying on a homeowners policy for coverage of a trailered boat or a
                      jet ski is one of the most common and costly gaps seen at claim time.
                    </p>
                    <p>
                      The distinction between personal watercraft and traditional boats
                      matters at the underwriting stage. Jet skis and similar stand-up or
                      sit-down personal-watercraft vessels are typically rated on a separate
                      policy form with navigation and horsepower characteristics that differ
                      from pontoons, ski boats, or cabin cruisers. Many carriers allow
                      multiple personal watercraft and a traditional boat to be packaged
                      under a single household program, which simplifies billing and often
                      produces multi-vehicle credits, but each vessel is still individually
                      rated against its own risk profile.
                    </p>
                    <p>
                      The vessels typically covered span the full range of what Arizona
                      households actually own. Pontoon boats dominate family use on Lake
                      Pleasant and Bartlett Lake. Fishing boats target bass, catfish, and
                      trout on Roosevelt Lake, Canyon Lake, and Saguaro Lake. Ski boats,
                      wake boats, and bass boats support wake-boarding, wake-surfing, water
                      skiing, and tournament fishing. Personal watercraft carry riders
                      across every reservoir and along the Colorado River channel. Sailboats
                      operate on the larger reservoirs, and small cabin cruisers are used
                      seasonally on Lake Havasu and Lake Mead.
                    </p>
                    <p>
                      Coverage is readily available for small inland boats, high-performance
                      watercraft, and everything in between. A licensed broker matches the
                      policy to the vessel and to the way the boat is actually used rather
                      than applying a generic structure to every submission. That matching
                      process is particularly important in Arizona because navigation
                      patterns, storage arrangements, and lake-specific risk profiles differ
                      meaningfully from the coastal and Great Lakes markets that dominate
                      national carrier data.
                    </p>
                  </div>
                </section>

                {/* C. What's covered */}
                <section aria-labelledby="covered-heading">
                  <h2 id="covered-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    What&apos;s Covered: Boat and Jet Ski Insurance Building Blocks
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    Watercraft policies combine the liability protections that respond when
                    the operator causes injury or property damage on the water with optional
                    hull coverage for the vessel itself, injury-related coverages for
                    passengers, and protection for on-board equipment and personal effects.
                    The exact structure varies by carrier and by whether the vessel is a
                    traditional boat, a personal watercraft, or a sailboat, but the core
                    parts follow a consistent framework. Reviewing the pieces together
                    clarifies where the policy responds when a loss actually occurs.
                  </p>

                  <div className="mt-8 space-y-8">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Liability Coverage (Bodily Injury and Property Damage)
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Liability coverage responds when the operator is legally responsible
                        for injuring another person or damaging another vessel, a dock, or
                        other property in a covered incident on the water. Bodily injury
                        liability pays for medical expenses, lost wages, and pain and
                        suffering claims brought by injured third parties, and property
                        damage liability pays to repair or replace damaged vessels, docks,
                        buoys, and shoreline structures. Most Arizona watercraft policies
                        carry liability limits well above what a homeowners policy would
                        extend to a small boat, because on-the-water injury claims can reach
                        significant totals quickly. Liability also pays the legal defense of
                        covered claims.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Hull and Physical Damage Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Hull coverage pays to repair or replace the insured vessel after a
                        covered loss, including collision with another boat or with a
                        submerged obstacle, grounding, fire, theft, vandalism, and sinking,
                        subject to the deductible stated on the policy. Carriers settle hull
                        claims on either an agreed-value or actual-cash-value basis
                        depending on the policy form selected, and the choice between those
                        two settlement methods has meaningful consequences at claim time.
                        Hull coverage applies to traditional boats, personal watercraft, and
                        trailer-mounted vessels, and the deductible selection affects
                        premium directly. High-value boats and restored vintage vessels are
                        commonly written on agreed-value forms to avoid depreciation
                        disputes.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Uninsured and Underinsured Boater Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Uninsured-boater coverage responds when the operator or a passenger
                        is injured by another boater who carries no liability insurance, and
                        underinsured-boater coverage responds when the at-fault operator
                        carries limits too low to cover the full injury cost. Arizona does
                        not currently require liability insurance on recreational watercraft,
                        which means a meaningful share of boats on the water carry no
                        coverage at all, and uninsured-boater protection becomes one of the
                        most important coverages on the policy. Limits typically match the
                        liability limits elected on the same policy so that the operator and
                        passengers have symmetric protection regardless of who is at fault.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Medical Payments Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Medical payments coverage reimburses reasonable medical expenses for
                        the operator and passengers after a covered boating accident, up to
                        the limit stated on the policy and regardless of fault. The coverage
                        is particularly useful on boats that carry groups of family members
                        and friends because it responds quickly to immediate treatment costs
                        without waiting for a full liability investigation. Medical payments
                        is not a substitute for health insurance, but it can help cover
                        cost-sharing under a health plan, transport costs after an on-water
                        injury, and initial care at a lakeside clinic or emergency
                        department.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Fuel Spill Liability
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Federal and state regulations impose meaningful cleanup
                        responsibilities on boat owners when fuel or oil leaks from the
                        vessel into the water, and the cost of mitigating a spill can reach
                        substantial totals even on a recreational boat. Fuel spill liability
                        pays for the required cleanup, containment, and reporting costs
                        associated with a covered spill, as well as third-party property
                        damage tied to the spill. This coverage is standard on most modern
                        watercraft policy forms, but limits and conditions vary, and owners
                        of fueled inboard or outboard vessels on Arizona lakes should
                        confirm the structure at the time the policy is placed.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Personal Effects and On-Board Equipment Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Boats carry meaningful amounts of equipment that is not part of the
                        vessel itself, including fishing electronics, rods and reels,
                        tackle, wakeboards, water skis, audio systems, coolers, and personal
                        items stored on board. Personal effects and on-board equipment
                        coverage pays to repair or replace this property when it is damaged,
                        stolen, or destroyed in a covered loss. Limits vary widely between
                        carriers, and owners of high-value fishing electronics, wake towers,
                        upgraded stereo systems, and scheduled safety equipment should
                        confirm the limit aligns with actual replacement cost. Documentation
                        such as receipts, photographs, and installation records supports
                        accurate valuation at claim time.
                      </p>
                    </div>
                  </div>
                </section>

                {/* D. Who needs */}
                <section aria-labelledby="who-needs-heading">
                  <h2 id="who-needs-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Who Needs Boat and Jet Ski Coverage in the Phoenix Area?
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Boat owners launching at Lake Pleasant, Saguaro Lake, Canyon Lake, and
                      Bartlett Lake form the largest segment of Arizona watercraft policy
                      holders. Families in Phoenix, Scottsdale, Peoria, and Glendale rely on
                      Lake Pleasant for close-to-home weekends, while Mesa, Gilbert, and
                      Chandler households favor the Salt River chain for launch access and
                      scenic cruising. Pontoon owners, bass-boat anglers, and ski-boat
                      operators each face distinct on-water exposure patterns, and
                      liability, hull, and equipment limits are sized to match how the boat
                      is actually used.
                    </p>
                    <p>
                      Jet ski and personal-watercraft owners across the Valley represent a
                      growing share of the specialty market. Personal-watercraft insurance
                      Phoenix families purchase covers stand-up and sit-down models used on
                      Lake Pleasant, Bartlett Lake, and the Colorado River channel, and the
                      coverage structure addresses the higher-speed, shorter-duration
                      exposure profile that personal watercraft present. Households with
                      multiple jet skis frequently package them under a single policy with
                      aggregated liability limits and individually scheduled hull values.
                    </p>
                    <p>
                      Weekend travelers to Lake Havasu and Colorado River destinations
                      include a significant number of Phoenix-area boat owners who trailer
                      their vessels west each summer. Lake Havasu boat insurance needs
                      differ from inland-lake-only policies because navigation limits,
                      storage arrangements at marinas or launch ramps, and the density of
                      on-water traffic on peak holiday weekends all increase exposure. Boat
                      owners who regularly visit Lake Havasu should confirm that their
                      navigation limits actually include the lake and the main Colorado
                      River channel rather than assuming any Arizona-issued policy
                      automatically covers every reservoir in the state.
                    </p>
                    <p>
                      Fishing boat owners targeting bass on Roosevelt Lake, catfish on
                      Bartlett Lake, and trout on Canyon Lake benefit from equipment
                      schedules that cover fish finders, trolling motors, rod storage
                      systems, and live-well electronics. Pontoon owners using the boat for
                      family gatherings often prioritize higher liability limits and medical
                      payments because they routinely carry larger groups. Sailboat owners
                      on Arizona&apos;s larger reservoirs, ski-boat and wake-boat owners who
                      tow water skiers, wake-boarders, and wake-surfers, and out-of-state
                      snowbirds who trailer boats to Arizona lakes seasonally each need
                      coverage structures aligned with their specific activity.
                    </p>
                    <p>
                      Arizona&apos;s backdrop reinforces the demand. Year-round boating
                      weather, strong lake and river access within an hour of central
                      Phoenix, and a high level of recreational boating activity keep
                      watercraft on the water more weeks of the year than in most other
                      states. Matching the policy to actual use, storage, and navigation
                      patterns produces the cleanest claim experience when a loss occurs.
                    </p>
                  </div>
                </section>

                {/* E. Arizona considerations */}
                <section aria-labelledby="az-considerations-heading">
                  <h2
                    id="az-considerations-heading"
                    className="font-heading text-2xl font-bold md:text-3xl"
                  >
                    Arizona Boat and Watercraft Insurance Considerations
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Arizona requires motorized watercraft used on public waterways to be
                      registered with the Arizona Game and Fish Department, and current
                      registration decals must be displayed on the vessel while in use.
                      Registration is tied to the length and propulsion type of the boat,
                      and fees support the state&apos;s lake watercraft programs, boating
                      safety education, and access improvements. Nonresidents who use a
                      watercraft on Arizona waters for more than a short period are also
                      subject to state registration requirements, which matters for
                      snowbirds who bring boats from other states and leave them in Arizona
                      storage facilities for extended stays.
                    </p>
                    <p>
                      Boating education and operator licensing considerations affect younger
                      operators in particular. Arizona requires operators below a specific
                      age threshold to complete a state-approved boating safety course
                      before operating a motorized watercraft on public waters without
                      direct adult supervision, and carriers commonly extend premium credits
                      to households that document completion of approved courses.
                      Verifiable course completion often improves both coverage availability
                      and premium on policies that list younger operators by name.
                    </p>
                    <p>
                      Liability limits on dedicated watercraft policies typically exceed
                      what a homeowners policy provides for a small boat, because on-water
                      injury claims can escalate quickly and personal-watercraft incidents
                      in particular have a history of producing significant bodily injury
                      claims. Agreed-value and actual-cash-value settlement options for the
                      hull represent a separate and important choice. Agreed-value policies
                      pay the stated value at total loss without depreciation adjustment,
                      which benefits owners of high-value, restored, or uniquely-equipped
                      boats. Actual-cash-value policies pay the depreciated market value at
                      the time of loss, which reduces premium but may produce meaningful
                      settlement gaps on older vessels.
                    </p>
                    <p>
                      Navigation limits on watercraft policies define where the coverage
                      actually applies. Many Arizona-issued policies cover inland lakes and
                      the Colorado River by default, while some require specific
                      endorsements for Lake Havasu boat insurance or for trips to Lake Mead,
                      coastal waters in California, or Sea of Cortez travel in Mexico.
                      Storage considerations, including in-water slip storage at a marina,
                      dry storage at a facility, and trailer storage at home, affect
                      premium, eligibility, and how certain losses are handled. Each storage
                      arrangement creates a distinct exposure profile, and the policy
                      structure should reflect the real arrangement rather than a default
                      assumption.
                    </p>
                    <p>
                      Trailer coverage is handled differently by different carriers. Some
                      policies include the boat trailer as a scheduled asset with its own
                      limit, while others require a separate trailer endorsement or rely on
                      the towing vehicle&apos;s auto policy for the trailer itself.
                      Protective equipment including life jackets, throwable devices, fire
                      extinguishers, and signaling equipment affects claim outcomes because
                      adjusters and investigators routinely review safety gear compliance
                      after any reported injury. After-market additions such as wake towers,
                      upgraded audio systems, fishing electronics, and scheduled safety
                      gear are covered most reliably when documented and scheduled at
                      binding rather than assumed at claim time.
                    </p>
                    <p>
                      Lay-up periods and reduced-premium options during months the vessel is
                      not used provide meaningful savings for boats stored through the
                      coldest weeks or during seasonal trips out of state. Lay-up structures
                      keep hull and theft coverage active while pausing or reducing the
                      liability components during periods the boat is not in the water.
                      Coordinating the watercraft policy with the household&apos;s home,
                      auto, and umbrella coverage produces the cleanest overall program.
                      Umbrella policies typically require a minimum underlying watercraft
                      liability limit before scheduling the boat as a covered vessel, and
                      reviewing that requirement before binding avoids last-minute
                      surprises. Boater-safety-course completion frequently qualifies for
                      carrier discounts and supports real-world safety on the water, which
                      is why a licensed broker walks through each of these considerations
                      before placing the policy.
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
                        partner of Protegrity Insurance Brokerage, so Arizona boat and
                        jet ski owners work with licensed professionals who understand the
                        specialty watercraft markets rather than generalists who default to
                        a homeowners policy for anything that floats. Our team reviews
                        liability limits, agreed-value and actual-cash-value settlement
                        choices, navigation territories, storage arrangements, and
                        equipment schedules against the specific vessel you own, and we
                        translate that review into accurate submissions carriers can quote
                        efficiently.
                      </p>
                      <p>
                        We maintain access to carriers with genuine experience on Arizona
                        lakes and the Colorado River, which matters because navigation
                        patterns on Lake Pleasant, Bartlett Lake, and Lake Havasu differ
                        meaningfully from the coastal and Great Lakes markets that dominate
                        national carrier data. Arizona boat insurance quotes vary
                        meaningfully between markets depending on vessel type, horsepower,
                        operator experience, storage location, and navigation territory,
                        and evaluating multiple carriers through a licensed brokerage is
                        how boat owners identify the best combination of price and
                        coverage.
                      </p>
                      <p>
                        We serve boat and personal-watercraft owners across Phoenix,
                        Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria,
                        and our 5.0-star service reputation reflects consistent
                        follow-through, responsive service, and respectful communication
                        from the first quote through every mid-term endorsement and every
                        renewal. Protegrity-supported processes keep required disclosures
                        visible and your questions answered so every decision rests on
                        facts, not pressure.
                      </p>
                    </div>
                  </div>
                </section>

                {/* G. FAQ */}
                <section aria-labelledby="faq-heading">
                  <h2 id="faq-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Frequently Asked Questions About Phoenix Boat and Jet Ski Insurance
                  </h2>

                  <div className="mt-8 space-y-10">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Is boat insurance required in Arizona?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Arizona does not currently mandate liability insurance on
                        recreational watercraft the same way it mandates coverage on
                        street-legal motor vehicles, but coverage is strongly recommended
                        and is often required by marinas, slip operators, lender agreements
                        on financed boats, and event organizers. Operating a boat or
                        personal watercraft without liability coverage leaves the owner
                        directly responsible for injury and property damage caused in an
                        at-fault on-water incident, and those totals can be substantial.
                        Most Arizona boat owners carry a dedicated watercraft policy with
                        meaningful liability limits regardless of whether any specific
                        mandate applies.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does my homeowners insurance cover my boat or jet ski?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Homeowners insurance typically provides only very limited coverage
                        for small, low-horsepower watercraft such as canoes, kayaks, paddle
                        boats, and certain small-engine boats below a narrow threshold, and
                        the built-in hull limit is commonly a few thousand dollars at most.
                        Larger boats, performance boats, pontoons with meaningful engines,
                        and personal watercraft including jet skis fall entirely outside
                        homeowners coverage. Relying on a homeowners policy for a trailered
                        boat or a jet ski is a common gap that surfaces painfully at claim
                        time, and a dedicated watercraft policy is the correct structure
                        for nearly every Arizona boat owner.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is the difference between agreed value and actual cash value for a boat?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Agreed-value and actual-cash-value settlement methods define how
                        the insurer pays a total loss on the hull. An agreed-value policy
                        pays the stated value on the declarations page without adjustment
                        for depreciation, which benefits owners of high-value, restored, or
                        heavily equipped boats because the settlement reflects the figure
                        the owner and carrier agreed to at binding. An actual-cash-value
                        policy pays the depreciated market value at the time of loss, which
                        reduces premium but may produce a meaningful settlement gap on
                        older boats. Choosing between the two structures is a significant
                        decision that should be discussed with a licensed broker before the
                        policy is placed.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does boat insurance cover my jet ski or do I need a separate policy?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Jet skis and other personal watercraft are typically written on
                        personal-watercraft policy forms that are distinct from traditional
                        boat policies, even when the same carrier issues both. Many
                        carriers allow multiple jet skis and a traditional boat to be
                        packaged under a single household program with multi-vehicle
                        credits, but each vessel is individually rated against its own risk
                        profile. Assuming that a jet ski is automatically covered on a
                        boat policy is a common and costly mistake, and confirming the
                        specific coverage form for each personal watercraft on the policy
                        avoids surprises at claim time.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Am I covered if I trailer my boat to Lake Havasu or the Colorado River?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Most Arizona-issued watercraft policies include inland lakes and
                        the Colorado River within the default navigation territory, but
                        some carriers require specific endorsements for Lake Havasu,
                        Lake Mead, or extended river travel, and a few restrict coverage
                        to named lakes only. Trailer coverage while the boat is being towed
                        between home and the lake is handled differently by different
                        carriers, and the boat trailer itself may be scheduled on the
                        watercraft policy or covered under the towing vehicle&apos;s auto
                        policy. Confirming both the navigation territory and the trailering
                        structure before the first trip avoids a preventable coverage gap.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does boat insurance cover water skiers and wake surfers being towed?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Coverage for water skiers, wake-boarders, and wake-surfers being
                        towed behind the insured boat depends on the policy form and the
                        specific endorsements selected. Many watercraft policies include
                        water-sports liability by default, while others require a
                        water-sports endorsement to extend liability and medical payments
                        to towed participants. Ski-boat and wake-boat owners who routinely
                        pull skiers and wake-surfers should confirm the structure at quote
                        so the exposure is not left to chance, and medical payments limits
                        are often increased on policies that cover active water-sports
                        households.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How much does boat insurance cost in Phoenix?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Premium depends on vessel type, length, horsepower, age, hull
                        value, operator experience, boater-safety-course history, storage
                        location, navigation territory, selected coverages, and
                        deductibles. A seasoned operator with a pontoon boat stored at home
                        on a trailer and used primarily on Lake Pleasant typically pays a
                        different premium than a newer operator with a high-horsepower
                        wake boat stored at a marina on Lake Havasu. Comparing Arizona
                        boat insurance quotes across multiple carriers through a licensed
                        brokerage is how most boat owners identify the best combination of
                        price and protection without compromising on coverage.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Can I reduce my premium during months I&apos;m not using my boat?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Many watercraft carriers offer lay-up periods or reduced-premium
                        options during the months the vessel is stored and not in use.
                        Lay-up structures keep hull, theft, and storage-related coverage
                        active while pausing or reducing the liability components during
                        non-boating months, which produces meaningful annual savings for
                        boats stored through the coldest weeks or during extended trips out
                        of state. Fully canceling coverage during the off-season is
                        typically not recommended because theft and storage losses remain a
                        real exposure, and a lapse can affect eligibility and rating at
                        future renewals.
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
                    Boat and watercraft owners often pair on-the-water coverage with{" "}
                    <Link
                      href="/insurance/specialty/motorcycle-atv"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      motorcycle and ATV coverage
                    </Link>{" "}
                    for the other recreational machines in the garage and{" "}
                    <Link
                      href="/insurance/specialty/rv-motorhome"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      RV, motorhome, and trailer options
                    </Link>{" "}
                    for the vehicles that support long weekends at the lake. Everyday
                    transportation is protected through{" "}
                    <Link
                      href="/insurance/auto/regular-coverage"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      regular auto coverage
                    </Link>
                    , and catastrophic liability capacity above the primary boat, auto, and
                    home limits is added through{" "}
                    <Link
                      href="/insurance/other/umbrella"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      umbrella insurance
                    </Link>
                    . Higher-value fishing electronics, scheduled safety equipment, and
                    collectibles are covered under{" "}
                    <Link
                      href="/insurance/other/valuable-items"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      valuable items protection
                    </Link>
                    , and a coordinated program across these lines closes the gaps that
                    appear when policies are placed with separate brokers on different
                    timelines.
                  </p>
                </section>

                {/* Closing paragraph with primary keyword */}
                <p className="text-base leading-relaxed text-muted-foreground">
                  Arizona boat owners deserve coverage that reflects how their vessels are
                  actually used rather than a generic structure that creates surprises at
                  claim time. A thorough review of{" "}
                  <strong className="text-foreground">boat insurance Phoenix AZ</strong>{" "}
                  options, alongside jet ski, pontoon, fishing-boat, and personal-watercraft
                  policies, examines liability limits, agreed-value and actual-cash-value
                  hull settlement, navigation territory for Lake Pleasant, Lake Havasu,
                  Saguaro Lake, Canyon Lake, Roosevelt Lake, and Bartlett Lake, trailer
                  coverage, and on-board equipment schedules across Phoenix, Scottsdale,
                  Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria. When you are ready to
                  move from research to a quoted proposal, work with a licensed Arizona
                  brokerage that will present the terms clearly and respect both your time
                  on the water and your decision timeline.
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
                    Ready to Protect Your Time on the Water?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
                    When you are ready to evaluate boat or jet ski coverage in detail,
                    Protegrity Insurance Brokerage can translate these concepts into quoted
                    options aligned with your vessel, your lakes of choice, and the
                    equipment you actually carry on board. The next step is a structured
                    conversation, not pressure: you set the pace, and we provide the facts
                    you need to decide with confidence.
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
