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
  title: "Classic Car Insurance Phoenix AZ | Five Star Rated",
  description:
    "Classic car insurance Phoenix AZ: agreed value collector coverage, antique and vintage quotes. Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, Peoria.",
  alternates: {
    canonical: "/insurance/auto/classic-coverage",
  },
  openGraph: {
    title: "Classic Car Insurance in Phoenix, AZ | Five Star Rated",
    description:
      "Collector and antique car insurance for Arizona: agreed value, classic auto insurance Arizona options, Phoenix classic car coverage quotes across the Valley.",
    url: `${SITE_URL}/insurance/auto/classic-coverage`,
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
    "Marketing partner connecting Arizona collectors with classic car insurance Phoenix AZ options and licensed support through Protegrity Insurance Brokerage.",
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
  name: "Classic and collector car insurance in Phoenix, Arizona",
  serviceType: "Collector automobile insurance",
  provider: {
    "@type": "InsuranceAgency",
    name: "Five Star Rated Insurance",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "State",
    name: "Arizona",
  },
  url: `${SITE_URL}/insurance/auto/classic-coverage`,
  description:
    "Educational resource on collector car insurance for Phoenix AZ drivers: agreed value, liability, physical damage, and specialty protections for vintage and antique vehicles across Maricopa County.",
}

export default function ClassicCarCoveragePhoenixPage() {
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
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=2000&q=80"
              alt="Classic Chevrolet collector car on desert road, classic car insurance Phoenix AZ coverage for collector vehicles and vintage car insurance Arizona enthusiasts"
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
                Classic Car Insurance Coverage in Phoenix, AZ
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
                Collector and antique vehicles need agreed value, disciplined storage, and liability
                matched to limited pleasure use. A standard daily driver policy will only depreciate
                your restoration value.{" "}
                <strong className="font-semibold text-primary-foreground">
                  Classic car insurance Phoenix AZ
                </strong>{" "}
                programs connect owners who show and tour from Scottsdale auctions to cruise in nights
                in Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria. We match you with
                underwriting standards that reflect your documented parts, labor, and rarity. This
                ensures you get coverage consistent with how specialty carriers price collector car
                insurance in Phoenix and classic auto insurance across Arizona.
              </p>
            </div>
          </section>

          <div className="bg-background">
            <div className="container mx-auto max-w-4xl px-4 py-14 md:py-20">
              <article className="prose prose-slate max-w-none space-y-12 text-foreground">
                {/* B. Overview */}
                <section aria-labelledby="overview-heading">
                  <h2 id="overview-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Overview: What Classic Car Insurance Means in Phoenix
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Classic car insurance is a specialty personal auto program designed for
                      vehicles that carriers classify as collector, antique, or exotic, depending on
                      age, condition, and usage. Unlike a standard policy priced around actual cash
                      value and daily commuting, programs for collector car insurance in the Phoenix
                      market typically expect limited annual mileage, secure storage, and a vehicle
                      that is maintained for hobby or exhibition use rather than ordinary
                      transportation.
                      That difference matters when you file a total loss, because agreed value car
                      insurance Phoenix programs can pay a stated amount you and the carrier
                      establish up front, often after documentation and photos, instead of settling
                      on depreciated market value alone.
                    </p>
                    <p>
                      Actual cash value settlements reflect depreciation and comparable sales. Agreed
                      value coverage, where available and properly documented, locks in a
                      replacement value basis for a covered total loss subject to policy terms. The
                      distinction protects the investment you have in paint, mechanicals, and
                      documented parts for a vehicle that may not trade often enough to produce clean
                      comparable sales data. Your declarations page should list how physical damage
                      is settled, any coinsurance clauses, and the conditions you must satisfy to keep
                      the agreed amount in force at renewal.
                    </p>
                    <p>
                      Phoenix and the surrounding Valley offer strong collector and vintage car
                      culture. Dry air reduces rust risk relative to humid regions, which supports
                      long-term preservation when vehicles are stored properly. Scottsdale hosts
                      high-profile collector auctions and events such as Barrett-Jackson, which
                      draws buyers, sellers, and enthusiasts from across the country and reinforces
                      local demand for credible agreed value car insurance Phoenix agents understand.
                      Cruise-ins, club tours, and charity displays populate weekends from Mesa to
                      Tempe and Chandler, which means carriers ask how often you exhibit, how far you
                      tour, and whether you trailer or drive to events.
                    </p>
                    <p>
                      Usage restrictions and garaging requirements are central to eligibility.
                      Insurers expect a locked garage, carport with security, or another approved
                      storage arrangement when the vehicle is not in use. Pleasure use limits,
                      pleasure driving radius, and prohibition of daily commuting are common
                      conditions. Misrepresenting primary use or annual mileage can jeopardize
                      coverage after a claim, which is why disclosure to your licensed broker should
                      match your real routine between Glendale, Peoria, central Phoenix, and
                      regional shows.
                    </p>
                    <p>
                      Qualification depends on carrier guidelines, but many programs look for age
                      thresholds, collectible status, rarity, or documented restoration. Some
                      vehicles qualify as antiques under state registration categories, while others
                      qualify as modern classics with limited production. Vintage car insurance
                      Arizona filings may pair with specialty endorsements for spare engines, tools,
                      or memorabilia tied to the same collector interest. Your agent compares
                      eligibility forms so you bind coverage that aligns with how the vehicle is
                      titled and how you intend to use it.
                    </p>
                    <p>
                      The sections below outline coverage parts, who benefits in the Valley, Arizona
                      considerations for storage and mileage, and practical questions owners ask before
                      they bind. Bring your build sheet, photos, and prior appraisals to a licensed
                      appointment so Phoenix classic car coverage quotes reflect the same facts
                      underwriters will expect at claim time.
                    </p>
                  </div>
                </section>

                {/* C. What's covered */}
                <section aria-labelledby="covered-heading">
                  <h2 id="covered-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    What&apos;s Covered: Classic Auto Insurance Building Blocks
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    Classic policies combine familiar auto liability and physical damage protections
                    with features tailored to collector vehicles, such as agreed value settlements,
                    spare parts coverage, and flatbed towing. Uninsured and underinsured motorist
                    coverage remains important when you drive to shows or on public roads, because
                    injury and property damage exposures still exist even in limited-use scenarios.
                    Each endorsement carries its own limits, deductibles, and eligibility rules, which
                    is why we review the collector package as a coordinated whole rather than as
                    isolated line items.
                  </p>

                  <div className="mt-8 space-y-8">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Agreed Value Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Agreed value coverage establishes a stated amount the carrier will pay for a
                        covered total loss of the insured vehicle, subject to policy conditions and
                        any deductible. The amount is typically supported by photographs, appraisals,
                        build documentation, and periodic updates as restoration progresses or market
                        conditions shift. This structure differs from actual cash value settlements
                        that rely on depreciation schedules and broad market averages, which rarely
                        capture specialty labor and rare parts. For collector car insurance Phoenix
                        owners who invest years in mechanical and cosmetic work, agreed value
                        provides a transparent basis for recovery when a fire, theft, or severe
                        collision destroys the vehicle. Your licensed representative should confirm
                        how and when to refresh the agreed amount at renewal.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Liability Coverage (Bodily Injury and Property Damage)
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Liability coverage responds when you are legally responsible for injury to
                        others or damage to their property while operating your insured collector
                        vehicle within permitted use. Bodily injury liability pays third-party injury
                        claims up to your selected limits, and property damage liability pays to
                        repair or replace another party&apos;s vehicle or property. Even though annual
                        miles are limited, liability exposure on public roads between Scottsdale
                        venues, Tempe cruise routes, or Chandler weekend events can still produce
                        serious claims. Experienced agents recommend liability limits that align with
                        your assets and umbrella considerations, not only statutory minimums, because
                        collector vehicles often attract attention and photographs after a loss.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Physical Damage Coverage (Comprehensive and Collision)
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Physical damage coverage for classics typically pairs comprehensive and
                        collision with the agreed value settlement basis described on your policy.
                        Comprehensive addresses theft, fire, vandalism, certain weather losses, and
                        other non-collision perils described in the contract, while collision
                        addresses impact with another vehicle or object. Monsoon hail, wind-driven
                        debris, and dust storms can still damage garaged vehicles during Arizona
                        summer weather, and comprehensive claims require documentation consistent with
                        your agreed value file. Collision coverage matters when a parade route or
                        event parking lot incident causes damage despite careful handling. Selecting
                        deductibles involves balancing premium with the out-of-pocket amount you can
                        fund without disrupting your restoration budget.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Spare Parts and Memorabilia Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Many collector programs offer optional coverage for spare parts, engines,
                        transmissions, and related components stored separately from the vehicle, as
                        well as limited protection for automobilia tied to the same hobby interest,
                        subject to per-item limits and security requirements. This endorsement matters
                        in Arizona, where long restorations span multiple seasons and owners
                        accumulate rare components in home garages across Gilbert, Mesa, and Peoria.
                        Your inventory list, receipts, and photographs should match what you disclose
                        to the carrier so that a garage fire or theft does not leave a gap between
                        what you own and what the policy schedule reflects.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Roadside Assistance and Flatbed Towing
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Collector policies frequently include roadside assistance tailored to classic
                        vehicles, often emphasizing flatbed towing rather than hook-and-chain service
                        that can damage low ground clearance and vintage suspension components. When
                        you travel from Phoenix to regional shows or auction events in Scottsdale,
                        knowing whether your program covers a specified towing radius or mileage cap
                        helps you plan transport. Some owners prefer trailer coverage or commercial
                        haulers for long distances, which is a separate discussion your broker can
                        coordinate with your stated use and storage arrangements.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Uninsured and Underinsured Motorist Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Uninsured motorist coverage can respond when an at-fault driver lacks valid
                        liability insurance, and underinsured motorist coverage can respond when that
                        driver&apos;s limits are insufficient to cover your covered damages. Collector
                        owners still encounter distracted drivers on public roads around Glendale,
                        Tempe, and regional highways, and injury claims can involve significant
                        medical costs even when the vehicle itself is repaired under physical damage
                        coverage. UM and UIM limits should be coordinated with your health insurance
                        and umbrella liability strategy so that you do not duplicate benefits or leave
                        a meaningful gap after a serious collision on the way to a club event.
                      </p>
                    </div>
                  </div>
                </section>

                {/* D. Who needs */}
                <section aria-labelledby="who-needs-heading">
                  <h2 id="who-needs-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Who Needs Classic Car Coverage in the Phoenix Area?
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Owners of documented collector vehicles, whether fully restored or in progress,
                      benefit from                       specialty programs that recognize value beyond standard book
                      pricing. Restoration projects in Mesa or Chandler garages often carry
                      significant parts inventory and labor investment that a daily-driver policy does
                      not schedule correctly. Weekend drivers who attend shows, parades, and charity
                      tours need coverage that permits pleasure use within stated mileage while
                      maintaining agreed value documentation and photographs current with the build.
                    </p>
                    <p>
                      Estate and inherited vehicle situations require careful review, because
                      titling, storage, and intended use may change after probate. A licensed agent
                      can help align collector car insurance Phoenix eligibility with how the
                      vehicle will be garaged in Peoria, Glendale, or central Phoenix, and whether
                      multiple heirs share access. Arizona dry climate supports preservation, but dust
                      and heat still demand indoor storage and proper fluid maintenance for vehicles
                      that sit between events.
                    </p>
                    <p>
                      Scottsdale auction weeks and Barrett-Jackson activity bring national attention
                      to local inventory, which reinforces the importance of agreed value and
                      transportation coverage when vehicles move between warehouses, display floors,
                      and new owners. Cruise-ins from Gilbert to Tempe create community visibility
                      and low-speed exposure that still warrants liability and physical damage limits
                      matched to each vehicle&apos;s replacement cost basis. Specialty coverage is not
                      only for museum pieces; it is for any qualifying collector who wants the
                      carrier&apos;s file to match the vehicle&apos;s story.
                    </p>
                  </div>
                </section>

                {/* E. Arizona considerations */}
                <section aria-labelledby="arizona-classic-heading">
                  <h2 id="arizona-classic-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Arizona Classic Car Insurance Considerations
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Classic policies typically require secure storage when the vehicle is not in
                      use, which carriers verify through application questions and sometimes
                      photographs. A residential garage with a locking door, alarm systems, or
                      monitored storage facilities may satisfy underwriting, depending on the program.
                      Outdoor-only storage rarely meets eligibility for high-value agreed value
                      programs, which matters in Arizona neighborhoods where carports and open
                      parking still expose vehicles to sun, dust, and hail.
                    </p>
                    <p>
                      Annual mileage caps are common on collector programs, and exceeding them can
                      affect coverage or premium at renewal. Your broker should document club tours,
                      pleasure miles, and trailer transport separately so the underwriter understands
                      how you use the vehicle between Phoenix, Scottsdale, and regional events.
                      Telematics requirements vary; some programs rely on self-reported odometer
                      readings and periodic photos.
                    </p>
                    <p>
                      Arizona offers historic and classic vehicle registration options with
                      restrictions that differ from standard plates. Your insurance classification
                      should align with how the vehicle is titled and registered, because
                      misalignment can create questions after a roadside stop or claim. A licensed
                      agent familiar with antique car insurance Phoenix requirements can coordinate
                      with your motor vehicle records so policy and registration tell a consistent
                      story.
                    </p>
                    <p>
                      A standard auto policy rarely provides agreed value, spare parts schedules, and
                      flatbed towing assumptions that collector markets expect. Appraisals,
                      restoration invoices, and serial-number documentation strengthen your file and
                      support renewal adjustments when the vehicle appreciates. Vintage car
                      insurance Arizona carriers review this evidence alongside market comparables for
                      rare models, which is why organized documentation is part of risk management,
                      not paperwork for its own sake.
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
                        Protegrity Insurance Brokerage, so you work with licensed Arizona professionals
                        who place collector coverage with carriers using state-approved forms and clear
                        eligibility standards. We combine access to specialty markets with practical
                        knowledge of Valley events, storage expectations, and agreed value documentation,
                        rather than treating a collector vehicle like a generic daily driver on an
                        automated quote tool.
                      </p>
                      <p>
                        Our team invests in clear explanations, patient answers, and documentation you
                        can revisit after the call. We serve collectors and families across Phoenix,
                        Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, Peoria, and surrounding
                        communities with the same measured guidance if you begin online or speak with
                        a representative by phone.
                      </p>
                      <p>
                        The 5.0-star service reputation we hold reflects consistent follow-through and
                        respectful communication, not hype. When you are ready to move from education
                        to quoting, Protegrity-supported processes keep required disclosures visible
                        and your questions answered so you can decide with confidence.
                      </p>
                    </div>
                  </div>
                </section>

                {/* G. FAQ */}
                <section aria-labelledby="faq-heading">
                  <h2 id="faq-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Frequently Asked Questions About Classic Car Insurance
                  </h2>

                  <div className="mt-8 space-y-10">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What qualifies a vehicle for classic car insurance in Arizona?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Eligibility depends on carrier guidelines, which typically include age,
                        collectible status, condition, and limited use rather than daily commuting.
                        Some programs require a minimum age threshold, while others accept newer
                        limited-production vehicles when documentation supports collector status. Your
                        broker compares your title, odometer, storage arrangement, and intended miles
                        to program rules before binding. If the vehicle serves as primary
                        transportation, a standard personal auto policy may be the appropriate
                        solution until usage and storage align with collector underwriting.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How is agreed value different from actual cash value?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Agreed value establishes a stated settlement basis for a covered total loss,
                        subject to policy terms, supported by documentation you and the carrier
                        accept at binding and renewal. Actual cash value generally reflects
                        depreciation and market comparables at the time of loss, which can undervalue
                        specialty labor and rare parts. Read your declarations page for any
                        coinsurance or maintenance conditions that affect agreed value. Your agent
                        should explain how updates work when restoration milestones increase value.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Are there mileage restrictions on classic car policies in Phoenix?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Most collector programs include annual mileage limits or pleasure-use
                        definitions that cap how many miles you may drive for hobby events and
                        touring. Exceeding disclosed mileage can affect claim outcomes or renewal
                        eligibility. If you plan extensive touring between Scottsdale auctions, Mesa
                        club events, and regional shows, disclose the full pattern so your broker
                        can match you with a program whose limits fit your real schedule. Trailer
                        transport to distant events may count differently than road miles, depending
                        on policy language.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Does classic car insurance cover restoration projects?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Coverage during active restoration varies by carrier and endorsement. Some
                        programs insure project vehicles under collector forms once eligibility is met,
                        while others require staged documentation as work progresses. Parts stored
                        off-vehicle may need separate scheduling under spare parts coverage. Discuss
                        fire and theft exposure in your Gilbert or Tempe garage, and keep invoices
                        aligned with the agreed value file so total loss settlements reflect
                        invested material and labor where policy terms allow.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Can I drive my classic car daily on a classic policy?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Collector programs generally exclude routine commuting and primary
                        transportation use. If you drive the same vehicle to work in Phoenix or
                        Chandler five days a week, a standard personal auto policy priced for annual
                        mileage and daily use is usually the correct fit. Misrepresenting use to
                        obtain collector rates can create coverage disputes after a claim. Your
                        broker should help you choose the policy type that matches garaging,
                        odometer trends, and your stated purpose for the vehicle.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How are classic cars valued for insurance purposes?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Valuation combines agreed value schedules, appraisals, photographs, build
                        receipts, and market references for rare models. Carriers may require
                        updates every few years or after major changes. For auction-acquired vehicles
                        in Scottsdale, bill of sale and condition reports strengthen the file.
                        Consistent documentation supports renewal negotiations and helps avoid
                        disputes when a total loss occurs. Your agent explains which documentation
                        your selected carrier prefers and how inflation or market shifts affect
                        renewal value discussions.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Do I need a separate garage for classic car coverage?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Underwriters expect secure, enclosed storage in most programs, which can be
                        a private residential garage, a shared garage with adequate security, or an
                        approved storage facility depending on carrier rules. Open carports or
                        street parking rarely satisfy eligibility for high-value agreed value
                        coverage. If your housing situation in Glendale or Peoria changes, update your
                        broker before renewal so photographs and address details match the risk
                        you represent.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Are spare parts and modifications covered?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Spare parts may be covered when scheduled under an endorsement with limits
                        and security conditions. Modifications that increase value should be disclosed
                        and documented so agreed value reflects the vehicle as equipped. Performance
                        upgrades, custom interiors, and period-correct accessories may require updated
                        photos and receipts. Your policy lists which changes are included and whether
                        aftermarket parts must meet carrier specifications. Review endorsements
                        annually as the build evolves.
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
                    Daily transportation still belongs on a standard personal auto policy, which is
                    why many collectors pair{" "}
                    <Link
                      href="/insurance/auto/regular-coverage"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      regular auto coverage
                    </Link>{" "}
                    for everyday vehicles with a separate classic program for hobby cars. If the
                    state requires proof of financial responsibility after certain violations, review{" "}
                    <Link
                      href="/insurance/auto/state-filings-sr22"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      state filings and SR-22
                    </Link>{" "}
                    with a licensed broker. For motorcycles and ATVs, explore{" "}
                    <Link
                      href="/insurance/specialty/motorcycle-atv"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      specialty motorcycle and ATV coverage
                    </Link>
                    . High-net-worth households often add{" "}
                    <Link
                      href="/insurance/other/umbrella"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      umbrella insurance
                    </Link>{" "}
                    to lift liability limits above auto policies when assets and public exposure
                    warrant broader protection.
                  </p>
                </section>

                {/* Closing paragraph with primary keyword */}
                <p className="text-base leading-relaxed text-muted-foreground">
                  Your collector story may include Scottsdale auction weekends, club nights in Mesa,
                  or careful storage in Tempe, Chandler, Glendale, Gilbert, or Peoria. Align your
                  garaging, mileage, and documentation with the program you bind so underwriters see
                  the same facts you live. When you request{" "}
                  <strong className="text-foreground">classic car insurance Phoenix AZ</strong>{" "}
                  quotes and agreed value terms, work with a licensed representative who understands
                  collector underwriting, Arizona registration categories, and how to protect
                  restoration value across seasons of dry heat and monsoon weather. That is how
                  classic auto insurance Arizona coverage stays credible when you need it most.
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
                    Ready to Protect Your Classic Car?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
                    When you are ready to review collector coverage with a licensed team, Protegrity
                    Insurance Brokerage can help you translate these concepts into quoted options
                    aligned with your vehicles, storage, and financial goals. The next step is a
                    structured conversation, not pressure: you set the pace, and we provide the facts
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
