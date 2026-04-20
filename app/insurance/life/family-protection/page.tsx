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
  title: "Family Life Insurance Phoenix AZ | Five Star Rated",
  description:
    "Family life insurance Phoenix AZ: layered term and whole life protection, child and spouse riders across Scottsdale, Mesa, Tempe, Chandler, Gilbert, and Peoria.",
  alternates: {
    canonical: "/insurance/life/family-protection",
  },
  openGraph: {
    title: "Family Life Insurance Protection in Phoenix, AZ | Five Star Rated",
    description:
      "Comprehensive family life insurance for Phoenix households: income replacement, stay-at-home parent coverage, child and spouse riders across Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.",
    url: `${SITE_URL}/insurance/life/family-protection`,
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
    "Marketing partner connecting Arizona families with Phoenix family life insurance protection options and licensed support through Protegrity Insurance Brokerage.",
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
  name: "Family life insurance protection in Phoenix, Arizona",
  serviceType: "Family life insurance planning",
  provider: {
    "@type": "InsuranceAgency",
    name: "Five Star Rated Insurance",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "State",
    name: "Arizona",
  },
  url: `${SITE_URL}/insurance/life/family-protection`,
  description:
    "Educational resource on Arizona family life insurance protection for income replacement, stay-at-home parents, child riders, and layered coverage across Maricopa County.",
}

export default function FamilyLifeInsurancePhoenixPage() {
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
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=2000&q=80"
              alt="Arizona parent holding a young child together, family life insurance Phoenix AZ coverage for Arizona families planning income replacement and long-term protection"
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
                Family Life Insurance Protection in Phoenix, AZ
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
                A thoughtful family protection plan surrounds the people who depend on your income,
                your caregiving, and your everyday presence with coordinated coverage. For Valley
                households,{" "}
                <strong className="font-semibold text-primary-foreground">
                  family life insurance Phoenix AZ
                </strong>{" "}
                planning layers term and permanent policies, adds spouse and child riders, and
                supports families across Phoenix, Scottsdale, Mesa, Tempe, Chandler, Glendale,
                Gilbert, and Peoria.
              </p>
            </div>
          </section>

          <div className="bg-background">
            <div className="container mx-auto max-w-4xl px-4 py-14 md:py-20">
              <article className="prose prose-slate max-w-none space-y-12 text-foreground">
                {/* B. Overview */}
                <section aria-labelledby="overview-heading">
                  <h2 id="overview-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Overview: What Family Life Insurance Protection Means in Phoenix
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Family life insurance protection is a planning concept rather than a single
                      product. It refers to the combination of policies and riders used to protect
                      a household&apos;s financial footing if a parent, spouse, or primary
                      caregiver passes away. The goal is continuity: preserving the family&apos;s
                      standard of living, keeping children on their expected path, maintaining the
                      home, and giving a surviving partner time to grieve and plan without the
                      added pressure of financial strain. Across the Phoenix metro area, a
                      well-built family protection plan typically blends more than one policy and
                      uses carefully chosen riders to extend coverage to every member of the
                      household who matters to the family&apos;s financial picture.
                    </p>
                    <p>
                      The financial realities families face after losing a primary earner or
                      caregiver are often more layered than a single income-replacement number
                      suggests. A surviving spouse may face an immediate drop in household income,
                      the ongoing cost of a mortgage on a Phoenix, Scottsdale, or Gilbert home,
                      childcare needs that were previously handled at home, educational
                      commitments for the children, and the practical costs of settling an estate.
                      Layered family protection exists precisely so no single obligation sits
                      uncovered while the family adjusts to a new chapter.
                    </p>
                    <p>
                      Family protection planning works best when both working parents and
                      stay-at-home parents are considered. The economic value of a working
                      parent&apos;s income is usually visible, so the conversation begins there
                      and turns on coverage amounts tied to income, obligations, and long-term
                      goals. The economic value of a stay-at-home parent&apos;s contribution is
                      less visible but just as meaningful. Childcare, household management,
                      transportation, cooking, tutoring, and the coordination work that keeps a
                      household functioning each carry a real cost if they need to be replaced.
                      Coverage for a stay-at-home parent funds those services and protects the
                      surviving spouse&apos;s ability to keep working without having to rebuild
                      every support system alone.
                    </p>
                    <p>
                      Term and permanent life insurance can work together in ways that match most
                      Valley households better than either product alone. Term life provides
                      substantial, affordable coverage during the years when obligations are
                      largest, such as the working years when children are still at home and a
                      mortgage is active. Permanent coverage, typically whole life, sits
                      underneath the term layer to provide lifetime protection for objectives
                      that extend beyond a defined term: final-expense certainty, legacy funding,
                      estate liquidity, and policies intended to remain in force for the rest of
                      the insured&apos;s life. A coordinated family protection plan layers these
                      two structures deliberately rather than leaving the household with a single
                      policy sized for only one obligation.
                    </p>
                    <p>
                      Riders add the third dimension to a family plan. A child rider adds modest
                      coverage for each child under a parent&apos;s policy, often with the
                      ability to convert to permanent coverage later without new underwriting. A
                      spouse rider provides term coverage on a spouse under the primary
                      insured&apos;s policy when a separate policy is not practical. An
                      accelerated-death-benefit rider, commonly included at little or no
                      additional cost, allows a portion of the death benefit to be accessed
                      during a qualifying terminal or chronic illness. Waiver-of-premium riders,
                      child-conversion privileges, and return-of-premium options can be evaluated
                      alongside the base policies to match a family&apos;s specific situation.
                    </p>
                    <p>
                      Affordable family protection options exist for most households across a
                      wide range of budgets and life stages. Young parents in Chandler and Gilbert,
                      dual-income professionals in Scottsdale, single-parent households across
                      Mesa and Glendale, blended families balancing stepchildren and shared
                      custody, multi-generational households under one roof, and families caring
                      for aging parents each have workable paths through the admitted carrier
                      market. A licensed Arizona broker can model several combinations of term
                      length, face amount, permanent layer, and riders so the plan fits the
                      family rather than a generic template. The sections that follow explain
                      each major building block in plain language and support a structured
                      conversation with a licensed representative.
                    </p>
                  </div>
                </section>

                {/* C. What's covered */}
                <section aria-labelledby="covered-heading">
                  <h2 id="covered-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    What&apos;s Covered: Family Protection Building Blocks
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    A family life insurance plan combines several coverage elements into one
                    coordinated structure. The base layer is usually substantial term coverage on
                    the income earners, paired with permanent coverage for lifelong objectives and
                    riders that extend protection to other members of the household. Each element
                    serves a specific purpose, and the right combination depends on the
                    family&apos;s ages, income, obligations, and long-term goals. Understanding
                    how the pieces fit together supports a clear conversation about family
                    coverage across Phoenix, Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert,
                    and Peoria.
                  </p>

                  <div className="mt-8 space-y-8">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Income Replacement Coverage for Primary Earners
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Income-replacement coverage on the primary earner or earners is the
                        cornerstone of most family plans. Coverage amounts are typically sized to
                        replace several years of income, pay off or keep current on the mortgage,
                        fund children&apos;s education, and cover outstanding debts. A level-premium
                        term policy, commonly twenty or thirty years, is the most efficient tool
                        for this role because it delivers a large death benefit at an affordable
                        premium during the working years. Dual-income Valley households frequently
                        insure both earners, because the loss of either income would materially
                        affect the family&apos;s financial footing during the remaining working
                        years.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Coverage for Stay-at-Home Parents
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        A stay-at-home parent provides significant economic value through
                        childcare, household management, transportation, education support, and
                        the coordination that keeps a family&apos;s daily life running. If that
                        parent is no longer present, the surviving spouse generally needs to pay
                        for services that were previously handled at home, adjust work schedules,
                        or in some cases reduce income in order to manage the household directly.
                        A term policy on a stay-at-home parent funds these adjustments and can
                        preserve the surviving spouse&apos;s long-term earning capacity. Coverage
                        amounts are typically guided by the cost of replacement services and the
                        number of years until children are financially independent, and many
                        Phoenix families find that meaningful coverage on a stay-at-home parent
                        fits comfortably inside the household budget.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Child Life Insurance Riders
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        A child rider adds modest life insurance coverage on each of the
                        insured&apos;s children under a single endorsement to a parent&apos;s
                        policy, typically at a flat cost that covers all children in the household
                        regardless of number. The primary purpose is to provide funds for final
                        expenses and to give parents space to grieve without immediate financial
                        pressure during an already difficult time. A valuable secondary feature on
                        many child riders is the conversion privilege, which allows the coverage
                        to be converted to a permanent policy in the child&apos;s name without
                        medical underwriting once they reach a specified age. That conversion
                        option locks in future insurability regardless of how the child&apos;s
                        health may change over the years.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Spouse Life Insurance Riders
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        A spouse rider provides term life insurance coverage on the primary
                        insured&apos;s spouse under the same policy, usually up to a defined face
                        amount and subject to the carrier&apos;s eligibility rules. It can be an
                        efficient way to add coverage on a spouse when a separate stand-alone
                        policy is not practical, and it simplifies administration by consolidating
                        coverage under one contract. For many Valley households, a separate term
                        policy on each spouse provides greater flexibility and often a better
                        long-term cost-to-coverage ratio than a rider alone, so a licensed
                        Arizona representative can model both structures and help the family
                        select the combination that fits their situation most completely.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Survivorship and Joint Life Insurance
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Survivorship life insurance, often called second-to-die coverage, insures
                        two lives under one contract and pays the death benefit after both
                        insureds have passed away. It is used most often in estate-planning and
                        legacy work, because it provides a larger death benefit at a lower
                        combined premium than two separate policies of equal face amount. Joint
                        life or first-to-die coverage, which pays after the first of two insureds
                        passes away, is less common and serves different planning goals. Both
                        structures fit specific family and estate situations rather than general
                        income replacement, and they are typically considered after the core
                        term-and-permanent family layers are in place.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Final Expense Insurance for Older Family Members
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Final-expense insurance is a smaller permanent policy designed to cover
                        end-of-life costs such as funeral services, medical bills not paid by
                        other coverage, and small outstanding obligations. It is often purchased
                        by retirees or older adults who want to make certain these expenses do
                        not fall to adult children or a surviving spouse. Final-expense policies
                        are typically simplified-issue or guaranteed-issue, so they are
                        accessible to applicants who may not qualify for fully underwritten
                        coverage. Including final-expense coverage for older family members, such
                        as a parent living with or near the family, is a thoughtful addition to a
                        broader family protection plan.
                      </p>
                    </div>
                  </div>
                </section>

                {/* D. Who needs */}
                <section aria-labelledby="who-needs-heading">
                  <h2 id="who-needs-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Who Needs Family Life Insurance Protection in the Phoenix Area?
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Young families with dependent children are the primary audience for family
                      life insurance across the Valley. Households in Chandler, Gilbert, and Mesa
                      with small children at home typically face their highest financial
                      obligations during the years when a family plan matters most, including an
                      active mortgage, daily living expenses, and the first phases of educational
                      saving. Dual-income households in Scottsdale, Tempe, and the surrounding
                      communities often insure both parents, because the loss of either income
                      would require meaningful adjustment to the family&apos;s plan. Single-parent
                      households have a particularly important reason to carry substantial
                      coverage, because the household typically depends on one earner to meet all
                      obligations.
                    </p>
                    <p>
                      Blended families face additional planning considerations. Stepchildren,
                      shared custody arrangements, prior support obligations, and children from
                      more than one relationship all influence coverage amounts, beneficiary
                      designations, and the ownership structure of the policies. The sandwich
                      generation, which refers to families caring for aging parents while still
                      raising children, often needs layered protection that addresses two
                      simultaneous obligations. Multi-generational households under one roof,
                      which are a growing share of Phoenix-area families, introduce their own
                      coordination work because several adults may share financial responsibility
                      for the household, including grandparents who contribute to housing,
                      childcare, or daily expenses.
                    </p>
                    <p>
                      Families with special-needs children require especially thoughtful planning,
                      because care may extend across a lifetime and benefit coordination can be
                      complex. A combination of term coverage during the parents&apos; working
                      years and permanent coverage to support a supplemental-needs trust often
                      fits these families better than a single policy, and the ownership and
                      beneficiary structure is typically reviewed with an attorney experienced in
                      special-needs planning. Phoenix-area homeowners with rising Valley home
                      values also depend on family life insurance to keep a surviving spouse in
                      the family home without financial strain. Across all of these situations,
                      the common thread is that a family&apos;s financial plan is stronger when
                      life insurance is built deliberately around specific obligations rather
                      than assumed to be adequate based on employer group coverage alone.
                    </p>
                  </div>
                </section>

                {/* E. Arizona family protection considerations */}
                <section aria-labelledby="arizona-req-heading">
                  <h2 id="arizona-req-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Arizona Family Protection Insurance Considerations
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Calculating the right amount of coverage for a family deserves careful
                      attention. Income multiplier methods provide a useful starting point,
                      frequently suggesting ten to fifteen times the insured&apos;s annual income,
                      though the right figure depends on the family&apos;s specific obligations.
                      The DIME analysis, which totals Debt, Income replacement, Mortgage balance,
                      and Education funding, produces a more deliberate estimate. Phoenix-area
                      families with significant mortgages, multiple children, elderly dependents,
                      or co-signed business debt often arrive at larger coverage amounts than a
                      simple multiplier would suggest, and the premium difference between, for
                      example, five hundred thousand dollars and one million dollars of term
                      coverage is frequently smaller than households expect.
                    </p>
                    <p>
                      Coordinating policies across family members is the step that transforms a
                      collection of policies into a family plan. Each working parent typically
                      carries substantial term coverage sized to their income and obligations,
                      the stay-at-home parent carries coverage sized to the cost of replacement
                      services, children are covered through a rider or a small stand-alone
                      policy for final expense and future insurability, and a permanent layer
                      sits underneath the term structure for lifetime goals. Riders add flexibility
                      and cost-efficiency where they fit, and an accelerated-death-benefit rider
                      is commonly included at little or no extra cost to provide access to a
                      portion of the death benefit during a qualifying terminal or chronic
                      illness.
                    </p>
                    <p>
                      Waiver-of-premium riders protect coverage if the insured becomes totally
                      disabled as defined by the contract, keeping the policy in force without
                      premium payments during that period. This rider can be particularly
                      valuable for a family whose plan depends on maintaining coverage through
                      the full term, and it is typically added when the insured has sufficient
                      disability-income coverage to support the household but needs certainty
                      that life insurance will remain in force. Child riders generally cover all
                      children in the household under a flat cost, and many include conversion
                      privileges that allow the coverage to move into a permanent policy in the
                      child&apos;s name without new underwriting at a specified age, which locks
                      in the child&apos;s future insurability regardless of health changes.
                    </p>
                    <p>
                      Stay-at-home-parent coverage deserves a specific mention, because it is
                      frequently underestimated. The cost of childcare, household management,
                      tutoring, transportation, and the coordination work that keeps a household
                      functioning adds up to a substantial annual figure when those services have
                      to be purchased. Coverage on a stay-at-home parent funds those services,
                      preserves the surviving spouse&apos;s capacity to keep earning, and often
                      fits comfortably inside the family budget because premiums for a healthy
                      applicant at typical parenting ages are modest. Estate-planning considerations
                      and beneficiary designations matter for every policy in the plan, and
                      listing primary and contingent beneficiaries with clear identifying
                      information helps the death benefit pass outside probate when the policy is
                      properly structured.
                    </p>
                    <p>
                      Family coverage should be reviewed after major life events, including
                      marriage, divorce, the birth or adoption of a child, a significant income
                      change, the purchase or refinance of a home, the launch or sale of a
                      business, or the loss of a family member. Arizona is a community property
                      state, which can influence how life insurance premiums, policy ownership,
                      and death benefits are treated in divorce or estate contexts, particularly
                      when policies are purchased with community funds during the marriage.
                      Reviewing beneficiaries after a divorce is especially important, because an
                      outdated designation can direct the death benefit in ways that no longer
                      reflect the family&apos;s situation. A licensed Arizona representative can
                      walk the family through these considerations in coordination with an
                      estate-planning attorney when appropriate.
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
                        Protegrity Insurance Brokerage, so you work with licensed Arizona life
                        insurance professionals who specialize in family planning and understand
                        how term, permanent, and rider coverage fit together across the
                        household. Family protection decisions turn on details such as coverage
                        amounts, term lengths, rider selections, and beneficiary designations
                        that national call centers often move past quickly, and working with a
                        local team that takes the time to explain those details makes the
                        difference at both application and policy-delivery stages.
                      </p>
                      <p>
                        Our team provides access to multiple carriers so layered coverage
                        strategies can be compared on price, underwriting approach, and contract
                        features rather than sold from a single product shelf. We serve families
                        across Phoenix, Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert,
                        Peoria, and surrounding communities with the same measured guidance if
                        you begin online or speak with a representative by phone. Coverage is
                        explained in plain language, recommendations are documented, and you are
                        given the space to ask questions before committing to anything.
                      </p>
                      <p>
                        The 5.0-star service reputation we hold reflects consistent follow-through
                        and respectful communication, not hype. When you are ready to move from
                        education to application, Protegrity-supported processes keep required
                        disclosures visible, underwriting expectations clear, and your questions
                        answered so you can decide with confidence about how to build a
                        coordinated protection plan for your family.
                      </p>
                    </div>
                  </div>
                </section>

                {/* G. FAQ */}
                <section aria-labelledby="faq-heading">
                  <h2 id="faq-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Frequently Asked Questions About Phoenix Family Life Insurance Protection
                  </h2>

                  <div className="mt-8 space-y-10">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How much life insurance does my family need?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        The appropriate total depends on specific family obligations rather than
                        a single formula. Common starting points include ten to fifteen times
                        annual income or the DIME method, which totals Debt, Income replacement,
                        Mortgage balance, and Education funding. Phoenix-area families with
                        substantial mortgages, multiple children, or dependent relatives frequently
                        arrive at higher figures than a simple multiplier would suggest. A
                        licensed Arizona representative can model coverage amounts against your
                        actual obligations, including separate calculations for each working
                        parent and for a stay-at-home parent, so the decision reflects your
                        household rather than a general guideline.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Should both parents have life insurance in Phoenix?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        In most cases, yes. Dual-income households typically insure both parents
                        because the loss of either income would require meaningful financial
                        adjustment. Single-income households also benefit from insuring both the
                        working parent and the stay-at-home parent, because the non-working parent
                        provides significant economic value through childcare and household
                        management that would need to be purchased if that parent were no longer
                        present. Coverage amounts differ for each parent based on their role and
                        contributions, and a licensed Arizona agent can size them appropriately
                        inside a coordinated plan.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Why do stay-at-home parents need life insurance?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        A stay-at-home parent provides real economic value to the household
                        through childcare, cooking, cleaning, transportation, education support,
                        and the coordination that keeps family life running. If that parent were
                        no longer present, the surviving spouse would typically need to pay for
                        services that were previously handled at home, adjust work schedules, or
                        in some cases reduce income to manage the household directly. Term
                        coverage on a stay-at-home parent funds those adjustments and preserves
                        the surviving spouse&apos;s earning capacity, and premiums for a healthy
                        applicant at typical parenting ages are generally very affordable inside
                        a Phoenix-area family budget.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is a child rider and is it worth adding to my policy?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        A child rider adds modest life insurance coverage on each of the
                        insured&apos;s children under a single endorsement to a parent&apos;s
                        policy, usually at a flat cost regardless of the number of children.
                        Primary purposes include funding final expenses and providing parents
                        space to grieve without immediate financial pressure during an already
                        difficult time. The most valuable feature on many child riders is the
                        conversion privilege, which allows the rider to be converted to a
                        permanent policy in the child&apos;s name without medical underwriting at
                        a specified age, locking in future insurability regardless of how health
                        may change. A licensed Arizona representative can explain whether the
                        conversion terms on a specific rider justify the modest added premium.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Can I combine term and whole life insurance for family protection?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Yes, and combining the two is a common approach for Phoenix-area families
                        who want both substantial coverage during the working years and a
                        permanent layer that does not expire. Term life delivers a large death
                        benefit at an affordable premium for a defined period, which fits the
                        years when obligations are highest. Whole life provides lifetime coverage,
                        builds cash value inside the contract, and supports long-term goals such
                        as final-expense certainty, legacy planning, and estate liquidity. Layering
                        the two structures deliberately, rather than choosing between them,
                        frequently produces a stronger family plan than either product alone.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is survivorship life insurance and when is it useful?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Survivorship life insurance, often called second-to-die coverage, insures
                        two lives under a single policy and pays the death benefit after both
                        insureds have passed away. It is used primarily in estate planning and
                        legacy work, because it delivers a larger death benefit at a lower
                        combined premium than two separate policies of equal face amount. The
                        structure fits couples focused on wealth transfer, estate-liquidity
                        funding, or providing for heirs after both spouses are gone, and it is
                        usually considered after the core term and permanent family layers are
                        already in place. A licensed Arizona representative can illustrate
                        whether survivorship coverage fits a specific household&apos;s long-term
                        planning goals.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How often should I review my family life insurance plan?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        A full review every two to three years is a practical cadence, and an
                        additional review after any major life event makes sense. Events that
                        typically warrant a review include marriage, divorce, the birth or
                        adoption of a child, a meaningful income change, the purchase or
                        refinance of a home, the launch or sale of a business, a significant
                        change in health, or the loss of a family member. The goal is to confirm
                        that coverage amounts still reflect current obligations, beneficiary
                        designations remain accurate, riders continue to fit the household, and
                        the overall structure still serves the family&apos;s plan.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What happens to my life insurance if I get divorced in Arizona?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Arizona is a community property state, which can influence how life
                        insurance premiums, policy ownership, and death benefits are treated in
                        divorce, particularly when policies were purchased with community funds
                        during the marriage. A divorce decree may require one or both spouses to
                        maintain life insurance for the benefit of children or an ex-spouse, and
                        ownership and beneficiary structures often need to be updated to reflect
                        the new arrangement. Reviewing all existing policies with a licensed
                        Arizona agent alongside a family-law attorney after a divorce helps
                        confirm that beneficiaries are correct, ownership structures match the
                        decree, and coverage still reflects the new household configuration.
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
                    Family life insurance protection often sits alongside other policies in a
                    coordinated family plan. If your planning extends beyond the core life
                    layer, review{" "}
                    <Link
                      href="/insurance/life/term-life-options"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      term life options
                    </Link>{" "}
                    for income-replacement coverage during the working years,{" "}
                    <Link
                      href="/insurance/life/whole-life-plans"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      whole life plans
                    </Link>{" "}
                    for permanent coverage with cash-value growth,{" "}
                    <Link
                      href="/insurance/other/umbrella"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      umbrella insurance
                    </Link>{" "}
                    for excess liability protection that complements the life layer,{" "}
                    <Link
                      href="/insurance/home/primary-home"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      primary home coverage
                    </Link>{" "}
                    for the residence the death benefit is often designed to protect, and{" "}
                    <Link
                      href="/insurance/other/valuable-items"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      valuable items protection
                    </Link>{" "}
                    for jewelry, fine art, and heirloom property that belongs to the family&apos;s
                    broader financial picture.
                  </p>
                </section>

                {/* Closing paragraph with primary keyword */}
                <p className="text-base leading-relaxed text-muted-foreground">
                  A coordinated family protection plan is ultimately about the people who count on
                  you across Phoenix, Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, or
                  Peoria. A thoughtful program uses the right mix of term and permanent coverage,
                  appropriate amounts on each working parent and on a stay-at-home parent,
                  carefully selected riders, and beneficiary designations that reflect the
                  family&apos;s current situation rather than an outdated snapshot. For a
                  thorough review of{" "}
                  <strong className="text-foreground">family life insurance Phoenix AZ</strong>{" "}
                  options compared across multiple carriers, along with the riders, conversion
                  provisions, and policy coordination most Valley households weigh before making
                  a decision, work with a licensed representative who understands income-replacement
                  sizing, stay-at-home-parent coverage, child and spouse rider structures, and
                  how your family plan fits alongside the rest of your household&apos;s financial
                  picture.
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
                    Ready to Protect What Matters Most?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
                    When you are ready to review coverage with a licensed team, Protegrity
                    Insurance Brokerage can help you translate these concepts into quoted options
                    aligned with your family, your obligations, and your long-term goals. The
                    next step is a structured conversation, not pressure: you set the pace, and
                    we provide the facts you need to decide with confidence.
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
