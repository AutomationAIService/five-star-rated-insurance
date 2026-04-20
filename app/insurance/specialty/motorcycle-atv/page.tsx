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
  title: "Motorcycle Insurance Phoenix AZ | ATV & UTV Coverage",
  description:
    "Motorcycle insurance Phoenix AZ plus ATV and UTV coverage for Arizona riders across Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.",
  alternates: {
    canonical: "/insurance/specialty/motorcycle-atv",
  },
  openGraph: {
    title: "Motorcycle and ATV Insurance in Phoenix, AZ | Five Star Rated",
    description:
      "Arizona motorcycle and ATV coverage for street riders, off-road enthusiasts, and collectors across Phoenix, Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.",
    url: `${SITE_URL}/insurance/specialty/motorcycle-atv`,
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
    "Marketing partner connecting Arizona riders with Phoenix motorcycle, ATV, and UTV insurance options and licensed support through Protegrity Insurance Brokerage.",
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
  name: "Motorcycle and ATV insurance in Phoenix, Arizona",
  serviceType: "Motorcycle, ATV, and UTV insurance",
  provider: {
    "@type": "InsuranceAgency",
    name: "Five Star Rated Insurance",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "State",
    name: "Arizona",
  },
  url: `${SITE_URL}/insurance/specialty/motorcycle-atv`,
  description:
    "Educational resource on Arizona motorcycle, ATV, and UTV insurance covering liability, collision, comprehensive, custom parts, and rider gear across Maricopa County.",
}

export default function MotorcycleAtvInsurancePhoenixPage() {
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
              alt="Motorcycle riders on an Arizona desert highway, motorcycle and ATV insurance Phoenix AZ coverage for Arizona riders"
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
                Motorcycle and ATV Insurance in Phoenix, AZ
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
                Arizona&apos;s year-round riding weather, long desert highways, and extensive
                trail systems make the Valley one of the best places in the country to own a
                bike or a side-by-side.{" "}
                <strong className="font-semibold text-primary-foreground">
                  Motorcycle insurance Phoenix AZ
                </strong>{" "}
                coverage, along with dedicated ATV and UTV policies, protects daily riders,
                weekend enthusiasts, and collectors across Phoenix, Scottsdale, Mesa, Tempe,
                Chandler, Glendale, Gilbert, and Peoria.
              </p>
            </div>
          </section>

          <div className="bg-background">
            <div className="container mx-auto max-w-4xl px-4 py-14 md:py-20">
              <article className="prose prose-slate max-w-none space-y-12 text-foreground">
                {/* B. Overview */}
                <section aria-labelledby="overview-heading">
                  <h2 id="overview-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Overview: What Motorcycle and ATV Insurance Means in Phoenix
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Motorcycle and ATV insurance is a family of specialty auto policies
                      designed around the realities of two-wheeled and off-road riding rather
                      than the standard four-wheel passenger auto model. A street motorcycle
                      policy in Arizona carries the same core parts as a regular auto policy,
                      including liability, collision, comprehensive, and uninsured motorist
                      coverage, but it is priced and endorsed for the riding profile of a
                      motorcycle rather than a car. ATV and UTV policies are structured even
                      differently because they are generally non-street-legal vehicles used on
                      private land, trails, and designated OHV areas rather than public roads.
                    </p>
                    <p>
                      The vehicles typically covered span the full range of what Arizona riders
                      own. Street motorcycles include cruisers, touring bikes, sport bikes,
                      standards, and dual-sport models that are street-legal and ridden on
                      public highways. ATVs, commonly called quads, are four-wheeled off-road
                      machines used on trails and open desert. UTVs, also known as
                      side-by-sides, carry two or more riders in a seated configuration with a
                      roll cage and are used for recreation, ranch work, and group riding. Dirt
                      bikes, adventure bikes, scooters, and mopeds each occupy their own niche
                      within the broader specialty market.
                    </p>
                    <p>
                      Arizona law requires liability insurance for street-legal motorcycles at
                      the same statutory minimums that apply to passenger autos, with specific
                      per-person and per-accident limits for bodily injury and a separate limit
                      for property damage. Riding without compliant liability exposes the rider
                      to citations, license and registration consequences, and direct financial
                      responsibility for injuries or damage caused in an at-fault event. Most
                      riders carry limits above the statutory minimum because motorcycle
                      accidents frequently produce medical costs that exceed those minimums
                      quickly.
                    </p>
                    <p>
                      ATVs and other off-road vehicles generally carry a different coverage
                      structure because they are not operated on public highways and are not
                      subject to the same state liability mandate as street-legal motorcycles.
                      Coverage is still available and broadly recommended: a liability-only
                      policy responds if an ATV or UTV causes injury or damage on private
                      property or at a trailhead staging area, and optional physical damage
                      coverage responds to theft, collision, rollover, or fire losses on the
                      vehicle itself. Many owners also pair the policy with trailering and
                      equipment endorsements to cover transport to and from the trails.
                    </p>
                    <p>
                      Arizona remains one of the most rider-friendly states in the country.
                      Year-round riding weather lets commuters and touring riders use their
                      motorcycles most weeks of the year, and long stretches of open highway
                      around the Valley, scenic routes like the Apache Trail and Oak Creek
                      Canyon, and extensive OHV areas in the Tonto National Forest draw riders
                      from every corner of Maricopa County. The culture supports daily riders
                      going to work in Tempe and Chandler, weekend groups heading north out of
                      Scottsdale and Mesa, and collectors storing polished cruisers or vintage
                      bikes in Gilbert, Glendale, and Peoria garages.
                    </p>
                    <p>
                      Coverage scales to match the rider. Daily commuters typically carry full
                      coverage with higher liability limits, weekend enthusiasts often add
                      accessory and gear endorsements to match how they actually ride, and
                      collectors frequently use agreed-value structures to protect restored or
                      high-value machines against appreciation gaps. A licensed broker helps
                      match the policy to the vehicle and to the way the bike or ATV is
                      actually used rather than applying a generic structure to every submission.
                    </p>
                  </div>
                </section>

                {/* C. What's covered */}
                <section aria-labelledby="covered-heading">
                  <h2 id="covered-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    What&apos;s Covered: Motorcycle and ATV Insurance Building Blocks
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    Motorcycle and ATV policies combine the required liability protections that
                    respond when the rider is at fault with optional coverage for the vehicle
                    itself, after-market parts, and the rider&apos;s safety gear. The exact
                    structure varies by carrier and by whether the vehicle is a street-legal
                    motorcycle or an off-road ATV or UTV, but the core parts follow a
                    consistent framework. Reviewing the pieces together clarifies where the
                    policy responds when a loss actually happens.
                  </p>

                  <div className="mt-8 space-y-8">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Liability Coverage (Bodily Injury and Property Damage)
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Liability coverage responds when the rider is legally responsible for
                        injuring another person or damaging property in a covered accident.
                        Bodily injury liability pays for medical expenses, lost wages, and pain
                        and suffering claims brought by injured third parties, while property
                        damage liability pays to repair or replace damaged vehicles, fences,
                        guardrails, and structures. Arizona requires liability on every
                        street-legal motorcycle at the statutory minimum, and most riders
                        select limits well above that minimum because medical costs from
                        motorcycle accidents can escalate quickly. Liability also pays for the
                        legal defense of covered claims.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Collision Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Collision coverage pays to repair or replace the insured motorcycle or
                        ATV when it is damaged in a crash, regardless of fault, subject to the
                        deductible chosen on the policy. The coverage applies to contact with
                        other vehicles, roadway objects, trail obstacles, or the ground itself
                        after a low-side or high-side fall. Collision is particularly important
                        for newer, financed, or high-value bikes where out-of-pocket repair
                        costs would be meaningful. Deductible selection affects premium
                        directly, and riders can balance the monthly cost against the amount
                        they would comfortably pay after a loss.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Comprehensive Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Comprehensive coverage responds to losses that are not caused by a
                        collision, including theft, vandalism, fire, flood, falling objects,
                        and damage from animals. Phoenix-area riders frequently rely on
                        comprehensive after storage-area theft events, parking-lot vandalism,
                        and monsoon-season flood and hail losses. Comprehensive is typically
                        paired with collision on full-coverage policies, and the two coverages
                        together protect the value of the vehicle against most realistic loss
                        scenarios. Deductibles apply, and agreed-value structures are often
                        appropriate for vintage and custom machines.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Uninsured and Underinsured Motorist Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Uninsured motorist coverage responds when the rider is injured by a
                        driver who carries no liability insurance, and underinsured motorist
                        coverage responds when the at-fault driver carries limits that are too
                        low to cover the full injury cost. Arizona riders often select UM and
                        UIM limits equal to the liability limits they carry on themselves, and
                        the coverage is particularly important for motorcyclists because the
                        injury severity in any given crash is typically higher than in a
                        passenger auto collision. UM and UIM can apply to medical expenses,
                        lost wages, and pain and suffering depending on policy form.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Custom Parts and Accessories Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Most motorcycles leave the dealership as factory-standard machines,
                        but many owners add after-market exhaust systems, saddlebags,
                        windshields, seats, audio, lighting, and chrome over time. Custom parts
                        and accessories coverage raises the policy limit for non-factory
                        upgrades so repair after a loss is not capped at a low built-in limit
                        that many carriers include by default. Documentation matters: retaining
                        receipts, photographs, and installation records supports accurate
                        valuation at claim time. Harley Davidson owners, custom cruiser
                        enthusiasts, and sport-bike riders with performance modifications
                        typically benefit from scheduling this coverage at higher limits.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Safety Apparel and Gear Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Motorcycle gear is genuinely expensive, and a full kit of helmet,
                        jacket, pants, boots, gloves, and communication equipment can cost
                        several thousand dollars. Safety apparel and gear coverage pays to
                        replace this equipment when it is damaged in a covered accident,
                        stolen, or destroyed by fire. The coverage typically applies to the
                        gear worn during the covered loss and, depending on the endorsement, to
                        gear stored with the bike. Riders who routinely wear premium helmets,
                        armored jackets, and Bluetooth communication systems should confirm the
                        limit aligns with the actual replacement cost of what they ride in.
                      </p>
                    </div>
                  </div>
                </section>

                {/* D. Who needs */}
                <section aria-labelledby="who-needs-heading">
                  <h2 id="who-needs-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Who Needs Motorcycle and ATV Coverage in the Phoenix Area?
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Daily motorcycle commuters across the Valley form a meaningful segment of
                      the rider population. Professionals in Phoenix, Scottsdale, Tempe, and
                      Chandler use their motorcycles for primary transportation throughout the
                      year, relying on Arizona&apos;s mild winters and dry riding weather.
                      Commuter policies typically carry higher liability limits, full physical
                      damage coverage, and accessory endorsements sized to how the bike is
                      actually equipped, because daily exposure to traffic, parking structures,
                      and roadway debris raises the likelihood of a claim over time.
                    </p>
                    <p>
                      Weekend touring riders build a significant share of the Arizona
                      motorcycle community. Groups regularly head out of the Valley on the
                      Apache Trail, the Beeline Highway toward Payson, the Catalina Highway
                      outside Tucson, and Oak Creek Canyon toward Sedona and Flagstaff. Touring
                      riders look for coverage that matches long-distance riding, including
                      roadside-assistance endorsements, trip-interruption coverage, and gear
                      limits that accommodate full touring kits. Collectors of vintage and
                      custom motorcycles, many of them storing polished machines in Gilbert,
                      Peoria, and Glendale garages, frequently use agreed-value structures to
                      protect investment-grade bikes against appreciation gaps.
                    </p>
                    <p>
                      Off-road enthusiasts and families with ATVs and UTVs make up the other
                      half of the Arizona specialty vehicle community. Desert trails around
                      Phoenix, OHV areas within the Tonto National Forest, BLM land north and
                      west of the Valley, and designated riding areas near Florence and Table
                      Mesa all draw riders from Mesa, Chandler, and Scottsdale throughout the
                      cooler months. Desert racing participants, adventure riders on
                      dual-sport motorcycles, and snowbirds who trailer their bikes and ATVs to
                      the Valley for winter season riding each require tailored coverage
                      structures.
                    </p>
                    <p>
                      Arizona&apos;s backdrop reinforces the need. Year-round riding weather,
                      an active motorcycle and off-road culture, and proximity to scenic roads
                      and extensive trail systems keep riders on the road and in the dirt more
                      weeks of the year than almost any other state. Off-road vehicle insurance
                      Arizona options extend the protection that street motorcycle policies
                      provide into the environments where ATVs and UTVs actually operate, and
                      matching the policy to the way the vehicle is used produces the cleanest
                      claim experience when a loss occurs.
                    </p>
                  </div>
                </section>

                {/* E. Arizona considerations */}
                <section aria-labelledby="az-considerations-heading">
                  <h2
                    id="az-considerations-heading"
                    className="font-heading text-2xl font-bold md:text-3xl"
                  >
                    Arizona Motorcycle and ATV Insurance Considerations
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Arizona requires liability insurance on every street-legal motorcycle at
                      the state statutory minimum, which includes per-person and per-accident
                      bodily injury limits and a separate property damage limit. Most riders
                      purchase coverage above the minimum because medical costs from motorcycle
                      accidents frequently exceed the lowest tier of protection in the first
                      hospital admission. ATVs and UTVs operating on state land, Arizona State
                      Trust Land, and federal OHV areas are subject to the state
                      off-highway-vehicle registration and decal program administered by the
                      Arizona Department of Transportation, and riders are expected to carry
                      current OHV decals where required in addition to any insurance coverage
                      on the machine.
                    </p>
                    <p>
                      ATVs often require separate specialty policies from street motorcycles
                      because the exposure profile, use location, and vehicle design differ
                      substantially. Many carriers that write street motorcycles will also
                      write ATVs and UTVs on companion off-road policies, and bundling both
                      vehicles under one household program can simplify billing and produce
                      multi-vehicle discounts. Arizona helmet law applies to riders and
                      passengers under eighteen on street-legal motorcycles, and while adults
                      are not required to wear helmets, adjusters and claims teams routinely
                      consider protective gear choices when evaluating injury claims.
                    </p>
                    <p>
                      Passenger liability deserves specific attention for riders who regularly
                      carry a passenger. Some carriers offer automatic guest passenger
                      liability, while others require a specific endorsement to cover injuries
                      to a passenger on the back of the bike. Trailering coverage matters when
                      transporting motorcycles or ATVs on a trailer behind a truck, because
                      damage to the motorcycle during transport is handled under the
                      motorcycle policy rather than the auto policy in most claim scenarios.
                      Garaging location, anti-theft devices, and secured-storage practices
                      influence premium, and Phoenix-area theft patterns make these details
                      worth discussing at application.
                    </p>
                    <p>
                      Seasonal and lay-up policies help riders who store machines for part of
                      the year by maintaining comprehensive coverage for theft and storage
                      damage while pausing or reducing the collision and liability components
                      during non-riding months. After-market parts, custom paint, performance
                      modifications, and professional engine work require documentation such as
                      receipts, shop invoices, and photographs so the carrier can value the
                      vehicle accurately at claim time. Gear endorsements covering helmets,
                      jackets, boots, gloves, and Bluetooth communication equipment round out
                      the coverage for riders with a serious kit.
                    </p>
                    <p>
                      Coordinating a motorcycle or ATV policy with the rider&apos;s auto, home,
                      and umbrella coverage produces the cleanest overall program. Umbrella
                      policies typically require a minimum underlying motorcycle liability
                      limit before scheduling the bike as a covered vehicle, and reviewing that
                      requirement before binding avoids last-minute surprises. Rider training
                      courses, including Motorcycle Safety Foundation programs, frequently
                      qualify for carrier discounts and produce tangible improvements in
                      real-world riding safety. A licensed broker walks through each of these
                      considerations before placing the policy so the final structure reflects
                      the way the vehicle is actually used.
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
                        Five Star Rated Insurance operates as an authorized marketing partner
                        of Protegrity Insurance Brokerage, so Arizona riders work with licensed
                        insurance professionals who actually understand the motorcycle and
                        off-road vehicle markets. Our team reviews street motorcycle policies,
                        ATV and UTV specialty programs, accessory and gear endorsements, and
                        agreed-value structures against the specific bike or machine you ride,
                        and we translate what we learn into accurate submissions that
                        carriers can quote efficiently.
                      </p>
                      <p>
                        We maintain access to specialty carriers with distinct appetites for
                        cruisers, touring bikes, sport bikes, dual-sport motorcycles, dirt
                        bikes, ATVs, UTVs, and vintage machines, which lets us compare pricing
                        and terms across markets rather than presenting a single program to
                        every rider. Motorcycle insurance quotes Phoenix riders receive can
                        vary meaningfully between carriers depending on vehicle type, rider
                        experience, training history, and storage profile, and evaluating
                        options through a licensed brokerage is how riders identify the best
                        combination of price and coverage.
                      </p>
                      <p>
                        We serve riders across Phoenix, Scottsdale, Mesa, Tempe, Chandler,
                        Glendale, Gilbert, and Peoria, and our 5.0-star service reputation
                        reflects consistent follow-through, responsive service, and respectful
                        communication from the first quote through every mid-term endorsement
                        and every renewal. Protegrity-supported processes keep required
                        disclosures visible and your questions answered so every decision
                        rests on facts, not pressure.
                      </p>
                    </div>
                  </div>
                </section>

                {/* G. FAQ */}
                <section aria-labelledby="faq-heading">
                  <h2 id="faq-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Frequently Asked Questions About Phoenix Motorcycle and ATV Insurance
                  </h2>

                  <div className="mt-8 space-y-10">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Is motorcycle insurance required in Arizona?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Yes. Arizona requires liability insurance on every street-legal
                        motorcycle at the statutory minimum limits for bodily injury and
                        property damage. Operating a registered motorcycle on public roads
                        without compliant liability exposes the rider to citations, registration
                        consequences, and direct financial responsibility for injuries or
                        damage caused in an at-fault event. Most riders carry limits above the
                        statutory minimum because motorcycle accident injury costs frequently
                        exceed those minimums on the first hospital admission alone. A licensed
                        broker helps match limits to the rider&apos;s asset profile and
                        riding pattern.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does my motorcycle insurance cover passengers?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Passenger coverage depends on the specific carrier and the endorsements
                        on the policy. Some carriers include guest passenger liability
                        automatically, while others require a specific endorsement for injuries
                        to a passenger riding on the back of the motorcycle. Riders who
                        regularly carry a partner or friend should confirm the passenger
                        liability structure at quote so the exposure is not left to chance.
                        Medical payments coverage, where offered, can also respond to passenger
                        injuries regardless of fault up to the selected limit.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Do I need insurance for my ATV or UTV in Arizona?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Arizona does not mandate insurance on ATVs and UTVs used exclusively
                        off-road the same way it mandates coverage for street-legal
                        motorcycles, but coverage is strongly recommended and is often required
                        by trailhead operators, event organizers, and private land owners. A
                        liability-only policy responds if the ATV or UTV causes injury or
                        damage in a covered incident, and optional physical damage coverage
                        responds to theft, rollover, collision, or fire losses on the machine
                        itself. Side-by-side insurance Phoenix families rely on protects
                        substantial vehicle values and keeps recreational use on a stable
                        financial footing.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Are custom parts and accessories covered on my motorcycle policy?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Many carriers include a small built-in limit for custom parts and
                        accessories, but that base limit often falls short of the actual
                        after-market investment on a fully accessorized motorcycle. Custom
                        parts and accessories coverage raises that limit to reflect what you
                        have actually added to the bike, including exhaust systems, saddlebags,
                        seats, windshields, lighting, audio, and chrome. Documentation such as
                        receipts, invoices, and photographs supports accurate valuation at claim
                        time, and owners of customized Harley Davidson cruisers, sport-bikes
                        with performance modifications, and heavily accessorized touring
                        machines typically schedule higher limits.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Is my motorcycle gear and safety apparel covered?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Safety apparel and gear coverage pays to replace helmets, jackets,
                        pants, boots, gloves, and communication equipment when that gear is
                        damaged in a covered accident, stolen, or destroyed by fire. A full
                        kit of premium gear can cost several thousand dollars, and selecting a
                        limit aligned with the actual replacement cost keeps the coverage
                        meaningful when it is needed. Riders with high-quality armored jackets,
                        modular or full-face helmets, and Bluetooth communication systems
                        should confirm the gear limit with the broker at the time the policy is
                        placed.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does motorcycle insurance cover me on off-road trails?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        A standard street motorcycle policy is written for on-road use of a
                        street-legal motorcycle and typically does not extend full coverage to
                        off-road riding in OHV areas or on private trails. Dual-sport and
                        adventure motorcycles ridden partly off-road benefit from endorsements
                        that align the coverage with actual use, and dedicated off-road bikes
                        such as dirt-bikes require separate off-road policies. ATVs and UTVs
                        should always be insured under off-road vehicle insurance Arizona
                        policies rather than assumed to fall under a street motorcycle
                        program.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How much does motorcycle insurance cost in Phoenix?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Premium depends on vehicle type, engine size and class, rider age and
                        experience, training history, claims record, storage location,
                        anti-theft devices, selected coverages, and deductibles. A seasoned
                        rider on a mid-size cruiser carrying full coverage with moderate
                        liability limits and a clean record typically pays a different premium
                        than a newer rider on a sport-bike with higher performance ratings and
                        a shorter track record. Comparing Arizona motorcycle coverage across
                        multiple carriers through a licensed brokerage is how most riders
                        identify the best combination of price and protection without
                        compromising on coverage.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Can I suspend my motorcycle insurance when I&apos;m not riding?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Many carriers offer lay-up or seasonal coverage that keeps
                        comprehensive protection active for theft, fire, and storage damage
                        while pausing or reducing the collision and liability components during
                        non-riding months. This arrangement is particularly useful for riders
                        who store bikes for extended periods, for collectors who move vintage
                        machines out of rotation, and for snowbirds who trailer their
                        motorcycles between Arizona and their home state. Fully canceling
                        coverage is typically not recommended because it creates a lapse that
                        carriers can consider at future renewals.
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
                    Riders who enjoy Arizona&apos;s outdoor lifestyle often pair motorcycle and
                    ATV coverage with{" "}
                    <Link
                      href="/insurance/specialty/boat-watercraft"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      boat, jet ski, and watercraft protection
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/insurance/specialty/rv-motorhome"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      RV, motorhome, and trailer options
                    </Link>{" "}
                    to round out the recreational fleet. Everyday transportation is protected
                    through{" "}
                    <Link
                      href="/insurance/auto/regular-coverage"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      regular auto coverage
                    </Link>
                    , and catastrophic liability capacity above the primary auto and
                    motorcycle limits is added through{" "}
                    <Link
                      href="/insurance/other/umbrella"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      umbrella insurance
                    </Link>
                    . Higher-value gear, jewelry, and collectibles are scheduled under{" "}
                    <Link
                      href="/insurance/other/valuable-items"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      valuable items protection
                    </Link>
                    , and a coordinated program across these lines closes the gaps that appear
                    when policies are placed with separate brokers on different timelines.
                  </p>
                </section>

                {/* Closing paragraph with primary keyword */}
                <p className="text-base leading-relaxed text-muted-foreground">
                  Arizona riders deserve coverage that reflects how their bikes and off-road
                  machines are actually used rather than a generic structure that creates
                  surprises at claim time. A thorough review of{" "}
                  <strong className="text-foreground">motorcycle insurance Phoenix AZ</strong>{" "}
                  options, alongside ATV, UTV, and dirt-bike policies, examines limits,
                  deductibles, accessory and gear endorsements, agreed-value protection, and
                  trailering coverage across Phoenix, Scottsdale, Mesa, Tempe, Chandler,
                  Glendale, Gilbert, and Peoria. When you are ready to move from research to a
                  quoted proposal, work with a licensed Arizona brokerage that will present
                  the terms clearly and respect both your riding lifestyle and your decision
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
                    Ready to Ride with Confidence?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
                    When you are ready to evaluate motorcycle or ATV coverage in detail,
                    Protegrity Insurance Brokerage can translate these concepts into quoted
                    options aligned with your bike, your riding profile, and the gear you
                    actually wear. The next step is a structured conversation, not pressure:
                    you set the pace, and we provide the facts you need to decide with
                    confidence.
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
