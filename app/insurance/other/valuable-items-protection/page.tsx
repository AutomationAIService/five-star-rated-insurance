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
  title: "Valuable Items Insurance Phoenix AZ | Scheduled Property",
  description:
    "Valuable items insurance Phoenix AZ: scheduled personal property for Arizona residents in Scottsdale, Paradise Valley, Mesa, Tempe, Chandler, and Gilbert.",
  alternates: {
    canonical: "/insurance/other/valuable-items-protection",
  },
  openGraph: {
    title: "Valuable Items Insurance in Phoenix, AZ | Five Star Rated",
    description:
      "Scheduled personal property insurance for Phoenix-area residents, serving Scottsdale, Paradise Valley, Arcadia, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.",
    url: `${SITE_URL}/insurance/other/valuable-items-protection`,
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
    "Marketing partner connecting Arizona residents with scheduled personal property insurance for jewelry, fine art, firearms, musical instruments, collectibles, and high-value personal property, supported by Protegrity Insurance Brokerage.",
  logo: `${SITE_URL}/images/5%20Star%20Logo%20-%20Header_Footer.png`,
  areaServed: [
    { "@type": "City", name: "Phoenix", containedInPlace: { "@type": "State", name: "Arizona" } },
    { "@type": "City", name: "Scottsdale", containedInPlace: { "@type": "State", name: "Arizona" } },
    { "@type": "City", name: "Paradise Valley", containedInPlace: { "@type": "State", name: "Arizona" } },
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
  name: "Valuable items insurance and scheduled personal property in Phoenix, Arizona",
  serviceType: "Scheduled personal property insurance",
  provider: {
    "@type": "InsuranceAgency",
    name: "Five Star Rated Insurance",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "State",
    name: "Arizona",
  },
  url: `${SITE_URL}/insurance/other/valuable-items-protection`,
  description:
    "Educational resource on scheduled personal property coverage for Arizona residents, including personal articles floaters and inland marine policies for jewelry, fine art, firearms, musical instruments, and collectibles across Phoenix, Scottsdale, Paradise Valley, Arcadia, North Scottsdale, the Biltmore area, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.",
}

export default function ValuableItemsInsurancePhoenixPage() {
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
              src="https://images.unsplash.com/photo-1774110101478-bb066db7ccf0?auto=format&fit=crop&w=2000&q=80"
              alt="Fine jewelry displayed in a well-lit showcase, valuable items insurance Phoenix AZ scheduled personal property coverage for Arizona residents"
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
                Valuable Items Insurance in Phoenix, AZ
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
                Standard homeowners policies carry internal sub-limits on jewelry,
                firearms, fine art, and similar categories that rarely reflect the
                actual value of the items.{" "}
                <strong className="font-semibold text-primary-foreground">
                  Valuable items insurance Phoenix AZ
                </strong>{" "}
                schedules those items at agreed value for residents across Phoenix,
                Scottsdale, Paradise Valley, Arcadia, the Biltmore area, Mesa, Tempe,
                Chandler, Glendale, Gilbert, and Peoria who want accurate, broader
                protection on the pieces that matter most.
              </p>
            </div>
          </section>

          <div className="bg-background">
            <div className="container mx-auto max-w-4xl px-4 py-14 md:py-20">
              <article className="prose prose-slate max-w-none space-y-12 text-foreground">
                {/* B. Overview */}
                <section aria-labelledby="overview-heading">
                  <h2 id="overview-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Overview: What Valuable Items Insurance Means
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Valuable items insurance (commonly called scheduled personal
                      property, personal articles floater coverage, or inland marine
                      coverage in this context) is a specialized program that covers
                      specific high-value belongings at agreed value, with broader
                      perils and higher limits than the personal property section of a
                      standard homeowners policy. Items are listed individually (or in
                      some cases under a blanket-coverage arrangement) and protected
                      by a dedicated coverage form that is designed around the way
                      those items are used, stored, and occasionally moved.
                    </p>
                    <p>
                      Standard homeowners policies cover personal property, but they
                      apply internal sub-limits to several categories that commonly
                      exceed those limits quickly. Jewelry sub-limits commonly fall
                      between $1,500 and $2,500 on a typical homeowners form, firearms
                      are often capped near $2,500, silverware and goldware carry
                      separate per-category limits, and electronics, cameras, and
                      certain collectibles are subject to per-item or category
                      restrictions. A single engagement ring, a fine watch, a modest
                      art piece, or a firearm collection can reach or exceed those
                      limits before a homeowner realizes the coverage gap exists.
                    </p>
                    <p>
                      The advantages of scheduled personal property Phoenix Arizona
                      coverage are structural. Scheduled coverage is typically written
                      at agreed value (the figure set at scheduling, supported by an
                      appraisal or receipt), carries broader perils that commonly
                      include mysterious-disappearance losses, extends worldwide for
                      covered events, and frequently applies on a first-dollar basis
                      with no deductible on scheduled items. Those features are
                      meaningful because the events that most often produce a
                      valuable-item loss (a lost ring at the pool, a stolen watch during
                      travel, accidental damage to a piece of art) are exactly the
                      events narrowly covered, or excluded, under a standard homeowners
                      form.
                    </p>
                    <p>
                      A personal articles floater or inland marine policy is the
                      traditional vehicle for this coverage. The policy can be placed
                      as a stand-alone program with a specialty carrier or as an
                      endorsement on the existing homeowners policy, depending on
                      carrier appetite and household preference. In both cases, the
                      coverage is structured around individually-scheduled items and,
                      when appropriate, blanket-coverage categories for groups of
                      smaller items that do not warrant per-item listing.
                    </p>
                    <p>
                      Common valuable items that benefit from scheduling include
                      engagement rings, wedding sets, and other fine jewelry; luxury
                      watches from well-known Swiss and European makers; fine art,
                      sculpture, and antiques; silverware and specialty tableware;
                      musical instruments used professionally or as valuable
                      heirlooms; firearms and collectible weapons; collectibles such
                      as coins, stamps, sports memorabilia, and wine; cameras and
                      specialized equipment; and furs. Scheduling is accessible for
                      most households, not just the ultra-wealthy, because the
                      structure responds well to any single item above the standard
                      homeowners sub-limit or any collection that has quietly grown
                      past the default category caps. The practical measure is
                      accurate coverage rather than asset size.
                    </p>
                  </div>
                </section>

                {/* C. What's covered */}
                <section aria-labelledby="covered-heading">
                  <h2 id="covered-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    What&apos;s Covered: Valuable Items Insurance Building Blocks
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    A scheduled personal property policy provides specialized coverage
                    above and beyond the personal property section of a standard
                    homeowners form. Reviewing the major categories makes it easier to
                    understand which belongings are commonly scheduled, what appraisal
                    and documentation each category typically requires, and how the
                    coverage responds when an item is lost, stolen, or damaged.
                  </p>

                  <div className="mt-8 space-y-8">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Jewelry and Fine Watches
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Engagement rings, wedding sets, heirloom pieces, luxury
                        watches, and high-value jewelry are the most commonly scheduled
                        items on a personal articles floater. Coverage is typically
                        written at agreed value based on a current professional
                        appraisal, includes mysterious-disappearance protection, and
                        applies worldwide while the item is in use, in transit, or at
                        a jeweler for service. Jewelry insurance Phoenix placements
                        often pair per-item scheduling for higher-value pieces with a
                        smaller blanket category for lower-value items that would not
                        justify individual listing.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Fine Art, Sculpture, and Antiques
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Paintings, prints, sculpture, antiques, and decorative arts
                        are scheduled with appraisals from qualified art appraisers
                        who document medium, dimensions, artist, provenance where
                        known, and current fair-market value. Fine art insurance
                        Arizona policies commonly include coverage for accidental
                        breakage, transit damage, and theft, subject to policy terms
                        and exclusions documented in the coverage form. Loans to
                        galleries or museums, display at shows, and movement between
                        residences are typically addressed in the policy language and
                        confirmed at placement.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Firearms and Collectible Weapons
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Firearms, collectible weapons, and associated accessories are
                        scheduled with serial numbers, make, model, caliber, and
                        current replacement or fair-market value based on a qualified
                        appraisal or documented purchase history. Scheduled firearm
                        coverage generally includes theft, accidental loss, and
                        certain categories of damage, subject to policy language and
                        any storage requirements specified by the carrier. Homeowners
                        with meaningful firearm collections commonly structure the
                        coverage with a combination of per-item scheduling on higher-
                        value pieces and blanket coverage on the balance of the
                        collection.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Musical Instruments
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Professional-grade and valuable musical instruments are
                        commonly scheduled with make, model, serial number where
                        applicable, provenance notes, and current appraised value.
                        Coverage typically includes theft, accidental damage, transit
                        damage, and specific categories of loss that would not be
                        fully addressed under a standard homeowners form. Musicians
                        who perform regularly, students with professional-grade
                        instruments, and collectors of fine stringed or wind
                        instruments are the most common audience for this category of
                        scheduling.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Collectibles (Coins, Stamps, Sports Memorabilia, Wine)
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Coins, stamps, sports memorabilia, autographs, rare books, and
                        fine wine collections are scheduled with category-appropriate
                        documentation (for example, grading certificates for coins and
                        sports cards, cellar inventory and appraisal reports for wine).
                        Collectibles insurance Arizona programs typically include
                        theft, accidental damage, and loss in transit, and higher-
                        value collections often carry additional underwriting around
                        storage environment, climate control for wine cellars, and
                        security measures for coin and sports memorabilia collections.
                        Periodic updates to appraisals and inventory records keep the
                        policy aligned with the evolving value of the collection.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Cameras, Electronics, and Specialized Equipment
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Photography equipment, professional cameras, lenses, drones,
                        and specialized electronics are scheduled when the value of
                        the equipment exceeds the standard homeowners limit or when
                        worldwide use requires broader protection than a homeowners
                        policy provides. Scheduling typically includes theft,
                        accidental damage, and in-transit loss, and professional users
                        often add equipment-breakdown or business-use endorsements
                        where appropriate. Hobbyist photographers with high-value
                        setups benefit from the same structural features (agreed
                        value, worldwide coverage, broader perils) that professional
                        users rely on.
                      </p>
                    </div>
                  </div>
                </section>

                {/* D. Who needs */}
                <section aria-labelledby="who-needs-heading">
                  <h2 id="who-needs-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Who Needs Valuable Items Coverage in the Phoenix Area?
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Owners of engagement rings, wedding sets, and fine jewelry above
                      the homeowners sub-limit are the largest category of scheduled-
                      personal-property placements. A single ring above the standard
                      $1,500 to $2,500 jewelry cap is enough on its own to justify a
                      personal articles floater Phoenix placement, and most households
                      that add scheduling for a ring quickly add additional pieces once
                      they understand the broader terms scheduled coverage provides.
                      Luxury watch collectors in Scottsdale, Paradise Valley, North
                      Scottsdale, and surrounding upscale communities are another
                      clear audience, particularly given how quickly individual watch
                      values can move past the default homeowners limit.
                    </p>
                    <p>
                      Art collectors and interior designers with valuable pieces in
                      their residences place fine art insurance Arizona coverage to
                      protect paintings, sculpture, and antiques at agreed value.
                      Firearms enthusiasts and collectors with significant inventories
                      schedule their collections for accurate limits and broader
                      perils. Musicians with professional-grade instruments, coin
                      collectors, stamp collectors, sports memorabilia collectors, and
                      wine collectors with substantial cellars all benefit from the
                      same structural features: agreed value, worldwide coverage, and
                      broader perils than a standard homeowners form provides.
                    </p>
                    <p>
                      Photography professionals and hobbyists with high-value camera
                      and lens setups are a growing audience because equipment values
                      have increased alongside the rise of serious content creation.
                      Anyone who has received valuable gifts, inherited jewelry, or
                      acquired collectibles over time is a natural candidate for
                      scheduling, because the cumulative value of items acquired over
                      years frequently exceeds what the homeowner has reviewed against
                      the current homeowners sub-limits. Inland marine insurance
                      Arizona coverage is the traditional structural answer for that
                      situation, and a short scheduling review is the cleanest way to
                      confirm exposures and close coverage gaps.
                    </p>
                    <p>
                      High-value neighborhoods across the Valley (Paradise Valley,
                      Arcadia, North Scottsdale, the Biltmore area in Phoenix, parts
                      of Scottsdale proper, Troon, DC Ranch, Silverleaf, and similar
                      communities) produce a sustained market for Phoenix valuable
                      items coverage. The active art and collecting community in
                      Scottsdale, the region&apos;s role as a luxury destination for
                      winter residents, and a significant concentration of jewelers,
                      art galleries, and auction houses combine to create a natural
                      audience for scheduled-personal-property work. The common thread
                      across these clients is not net worth alone; it is ownership of
                      items whose accurate coverage requires structure beyond the
                      default homeowners form.
                    </p>
                  </div>
                </section>

                {/* E. Considerations */}
                <section aria-labelledby="az-considerations-heading">
                  <h2
                    id="az-considerations-heading"
                    className="font-heading text-2xl font-bold md:text-3xl"
                  >
                    Arizona Valuable Items Insurance Considerations
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Standard homeowners internal sub-limits are the first practical
                      consideration. Typical sub-limits include $1,500 to $2,500 for
                      jewelry, roughly $2,500 for firearms, category limits for
                      silverware and goldware, and per-item or category limits for
                      electronics, cameras, and specific collectibles. Those limits
                      apply in aggregate and per incident, which means a single theft
                      of multiple items can exhaust the category limit quickly.
                      Scheduling moves each listed item to its own agreed value outside
                      of the homeowners category cap, which produces accurate coverage
                      rather than a partial response to a larger loss.
                    </p>
                    <p>
                      Mysterious disappearance (the category that covers items that
                      are simply unaccounted for without a clearly identifiable cause)
                      is commonly excluded from standard homeowners coverage and
                      commonly included on scheduled coverage. That difference is the
                      reason many jewelry losses, particularly lost rings at a pool,
                      at a beach, or during travel, are paid on scheduled policies but
                      not on homeowners policies. The appraisal process is
                      straightforward: professional appraisals should include item
                      description, dimensions, materials, identifying marks or serial
                      numbers, gemological grading where applicable, and the appraiser&apos;s
                      credentials. Appraisals are typically updated every two to five
                      years, depending on item category and market movement.
                    </p>
                    <p>
                      Agreed value is the preferred settlement basis on scheduled
                      coverage. Agreed value means the amount listed on the policy is
                      what the carrier pays for a covered total loss, without a later
                      debate about depreciation, market conditions, or comparable
                      sales. Actual cash value, which applies on some policies or
                      categories, reduces the settlement for depreciation, which is
                      rarely what a household expects for a high-value piece. Blanket
                      coverage makes sense for collections of smaller items (a
                      costume-jewelry collection, a working-silver set, a modest coin
                      collection) that would not justify individual listing, while
                      per-item scheduling is the correct approach for higher-value
                      pieces.
                    </p>
                    <p>
                      Documentation matters at placement and at claim time. Photos,
                      original receipts, certificates of authenticity, gemological
                      reports, grading certificates, and current appraisals together
                      form the record that supports a claim and a renewal review.
                      Worldwide coverage applies on most scheduled policies, which
                      means items are protected during travel within the United
                      States, into Mexico for Phoenix-area travelers, and on
                      international trips. Storage considerations are part of
                      underwriting: a home safe, a bank safe-deposit box, a
                      professionally-monitored alarm system, and specific security
                      measures can affect available terms and, in some cases, premium.
                    </p>
                    <p>
                      Coverage while items are in transit, at jewelers for repair, on
                      loan to museums, or at shows is generally included on scheduled
                      policies but is worth confirming in policy language. The
                      interaction between scheduled personal property and the primary
                      homeowners policy is deliberately layered: scheduled items are
                      handled under the floater, and the homeowners policy continues
                      to handle non-scheduled contents as usual. Umbrella insurance
                      coordinates with valuable items coverage for liability exposure
                      that may arise from an item (for example, a guest injured by a
                      falling piece of art) rather than for damage to the item itself.
                      Periodic reviews keep the program aligned with market movement,
                      growth in the collection, and changes in storage or use, and the
                      appraisal cycle is the natural trigger for those reviews.
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
                        partner of Protegrity Insurance Brokerage, so Arizona residents
                        work with licensed professionals who actually understand
                        scheduled-personal-property markets rather than generalists who
                        treat valuable items as a side note on the homeowners policy.
                        Our team reviews appraisals, item categories, storage profiles,
                        and use patterns against the residence and travel pattern, and
                        translates that review into accurate submissions carriers can
                        quote efficiently.
                      </p>
                      <p>
                        We maintain access to specialty carriers for jewelry, fine
                        art, collectibles, firearms, and broader high-value personal
                        property, which matters because category appetite, appraisal
                        standards, and available terms vary meaningfully between
                        carriers. Arizona scheduled property insurance quotes depend on
                        item category, appraised value, storage profile, geographic
                        concentration, and how the coverage interacts with the
                        primary homeowners program, and comparing multiple carriers
                        through a licensed brokerage is how households identify the
                        right fit.
                      </p>
                      <p>
                        We serve residents across Phoenix, Scottsdale, Paradise Valley,
                        Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria, with
                        particular experience across higher-value communities such as
                        Arcadia, the Biltmore area, North Scottsdale, Troon, and DC
                        Ranch. Our 5.0-star service reputation reflects consistent
                        follow-through, responsive service, and respectful communication
                        from the first quote through every policy placement and every
                        claim. Protegrity-supported processes keep required disclosures
                        visible and your questions answered so every decision rests on
                        facts, not pressure.
                      </p>
                    </div>
                  </div>
                </section>

                {/* G. FAQ */}
                <section aria-labelledby="faq-heading">
                  <h2 id="faq-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Frequently Asked Questions About Valuable Items Insurance
                  </h2>

                  <div className="mt-8 space-y-10">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does my homeowners insurance cover my engagement ring?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Standard homeowners insurance covers jewelry up to an internal
                        sub-limit, commonly $1,500 to $2,500, which is often below the
                        value of a single engagement ring or wedding set. Homeowners
                        coverage also typically excludes mysterious-disappearance
                        losses, which is the category that describes a ring that is
                        simply missing without a clearly identifiable event. Scheduling
                        the ring on a personal articles floater or an equivalent
                        endorsement moves the coverage to agreed value, includes
                        mysterious disappearance, and applies worldwide.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is scheduled personal property and how does it work?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Scheduled personal property is a coverage structure that lists
                        specific valuable items individually (or as defined blanket
                        categories) on a personal articles floater or an equivalent
                        endorsement on the homeowners policy. Each scheduled item is
                        covered at agreed value based on a current appraisal or
                        receipt, typically without a deductible on scheduled items,
                        and under a broader set of perils than standard homeowners
                        contents coverage provides. Scheduled personal property is the
                        structural answer when standard homeowners sub-limits do not
                        reflect the actual value or exposure of the items.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Do I need an appraisal to schedule my valuable items?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        An appraisal is generally required for higher-value items and
                        for items that would be difficult to value at claim time. A
                        professional appraisal from a qualified appraiser provides the
                        description, specifications, materials, identifying marks, and
                        current fair-market or replacement value that the carrier
                        uses to set agreed value. For lower-value items, a detailed
                        receipt, certificate of authenticity, or documented purchase
                        history can be sufficient. Appraisals are typically updated
                        every two to five years, with the exact schedule depending on
                        item category and market movement.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is mysterious disappearance and why does it matter?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Mysterious disappearance is the category of loss that covers
                        an item that is unaccounted for without a clearly identifiable
                        event (for example, a ring that slips off at a pool and is
                        never found, or a watch that is missing from a dresser after a
                        trip). Standard homeowners policies commonly exclude
                        mysterious-disappearance losses, which is why jewelry and
                        watch claims are often denied on homeowners policies but paid
                        on scheduled-personal-property policies. For items that are
                        worn in daily life and travel, mysterious-disappearance
                        coverage is one of the most important features of scheduling.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Is valuable items insurance worth the extra premium?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Valuable items insurance is typically worth the extra premium
                        when the item value exceeds the homeowners sub-limit, when
                        the item is worn or used regularly, when the item travels
                        with the owner, or when the owner wants agreed-value
                        settlement rather than actual-cash-value settlement. Premium
                        for scheduled coverage is priced against agreed value and
                        item category, and the incremental cost is generally modest
                        relative to the gap between scheduled agreed value and
                        homeowners sub-limit. A written quote produces a precise
                        answer for a specific schedule of items.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Are my items covered while I travel outside Arizona?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Scheduled personal property policies typically provide
                        worldwide coverage for covered losses, which means items are
                        protected during travel within the United States, into Mexico
                        for Phoenix-area travelers, and on international trips. The
                        same agreed-value settlement, broader perils, and
                        mysterious-disappearance protection apply in most cases,
                        subject to policy terms. Certain high-risk destinations or
                        specific item categories may carry endorsement requirements,
                        and the cleanest step is to confirm travel coverage with the
                        carrier before the trip.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How often should I update my appraisals?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Appraisals are typically updated every two to five years,
                        with the specific cycle depending on the item category and
                        market movement. Jewelry and fine watches commonly update on
                        a three-to-five-year cycle because precious-metal and diamond
                        markets move over time. Fine art and antique collections
                        often update on a three-to-five-year cycle as well. Firearms,
                        collectibles, and specialized equipment follow similar
                        cycles, and a growing collection benefits from more frequent
                        reviews to keep scheduled values aligned with current market
                        value.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Can I schedule firearms and collectibles separately from jewelry?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Yes. Firearms, fine art, musical instruments, wine,
                        collectibles, and jewelry are each their own category on a
                        scheduled personal property program, and carriers are
                        comfortable writing multiple categories on a single
                        consolidated policy or across category-specific arrangements
                        when appetite varies. The structure allows each category to be
                        priced against its own appraisal, storage profile, and use
                        pattern rather than being lumped together under a generic
                        limit. A licensed broker reviews the total collection and
                        places each category with the carrier whose terms fit best.
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
                    Valuable items coverage works alongside the household&apos;s
                    primary insurance program, so reviewing it typically makes the
                    most sense with a current{" "}
                    <Link
                      href="/insurance/home/primary-home"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      primary home coverage
                    </Link>{" "}
                    policy in place. Liability exposure above underlying policies is
                    handled through{" "}
                    <Link
                      href="/insurance/other/umbrella-insurance"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      umbrella insurance
                    </Link>
                    , flood and earth-movement perils are addressed through{" "}
                    <Link
                      href="/insurance/other/flood-and-earthquake-coverage"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      flood and earthquake coverage
                    </Link>
                    , households with a second residence place{" "}
                    <Link
                      href="/insurance/home/seasonal-home"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      seasonal home coverage
                    </Link>
                    , and longer-term planning for heirs and beneficiaries is supported
                    through{" "}
                    <Link
                      href="/insurance/life/family-protection"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      family protection
                    </Link>{" "}
                    life insurance. A coordinated program across these components
                    closes the gaps that appear when a single event affects more than
                    one part of the household&apos;s insurance structure.
                  </p>
                </section>

                {/* Closing paragraph with primary keyword */}
                <p className="text-base leading-relaxed text-muted-foreground">
                  Arizona residents with meaningful jewelry, fine art, firearms,
                  instruments, or collectibles deserve a coverage structure that
                  reflects accurate values and appropriate perils rather than the
                  sub-limits of a standard homeowners form. A thoughtful review of{" "}
                  <strong className="text-foreground">
                    valuable items insurance Phoenix AZ
                  </strong>{" "}
                  options, alongside the underlying homeowners policy, examines
                  scheduled-property endorsements, personal articles floaters, agreed-
                  value settlement terms, worldwide coverage, and appraisal cycles for
                  households across Phoenix, Scottsdale, Paradise Valley, Arcadia, the
                  Biltmore area, North Scottsdale, Mesa, Tempe, Chandler, Glendale,
                  Gilbert, and Peoria. When you are ready to move from research to a
                  quoted proposal, work with a licensed Arizona brokerage that will
                  present the terms clearly and respect both your collection and your
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
                    Ready to Protect What You&apos;ve Collected?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
                    When you are ready to evaluate scheduled-personal-property
                    coverage for your jewelry, fine art, firearms, instruments, or
                    collectibles, Protegrity Insurance Brokerage can translate these
                    concepts into quoted options aligned with your appraisals, storage
                    profile, and the primary homeowners program already in place. The
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
