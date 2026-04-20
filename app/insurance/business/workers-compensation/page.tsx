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
  title: "Workers Compensation Insurance Phoenix AZ | Five Star",
  description:
    "Workers compensation insurance Phoenix AZ: Arizona workers comp coverage, medical benefits, and lost wages for employees across Scottsdale, Mesa, Tempe, Chandler.",
  alternates: {
    canonical: "/insurance/business/workers-compensation",
  },
  openGraph: {
    title: "Workers Compensation Insurance in Phoenix, AZ | Five Star Rated",
    description:
      "Arizona workers compensation coverage for Phoenix employers: medical benefits, wage replacement, and employer's liability protection across Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.",
    url: `${SITE_URL}/insurance/business/workers-compensation`,
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
    "Marketing partner connecting Arizona employers with Phoenix workers compensation insurance options and licensed support through Protegrity Insurance Brokerage.",
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
  name: "Workers compensation insurance in Phoenix, Arizona",
  serviceType: "Workers compensation insurance",
  provider: {
    "@type": "InsuranceAgency",
    name: "Five Star Rated Insurance",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "State",
    name: "Arizona",
  },
  url: `${SITE_URL}/insurance/business/workers-compensation`,
  description:
    "Educational resource on Arizona workers compensation insurance covering medical benefits, wage replacement, disability, and employer's liability across Maricopa County.",
}

export default function WorkersCompensationInsurancePhoenixPage() {
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
              src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=2000&q=80"
              alt="Team of construction and trade employees at a Phoenix job site, workers compensation insurance Phoenix AZ coverage for Arizona employees"
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
                Workers Compensation Insurance in Phoenix, AZ
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
                Arizona employers are responsible for the people who show up to work each day,
                and state law requires a structured insurance program to cover on-the-job
                injuries.{" "}
                <strong className="font-semibold text-primary-foreground">
                  Workers compensation insurance Phoenix AZ
                </strong>{" "}
                coverage protects employees with medical care and wage replacement after a
                work-related injury and protects employers from direct injury lawsuits across
                Phoenix, Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria.
              </p>
            </div>
          </section>

          <div className="bg-background">
            <div className="container mx-auto max-w-4xl px-4 py-14 md:py-20">
              <article className="prose prose-slate max-w-none space-y-12 text-foreground">
                {/* B. Overview */}
                <section aria-labelledby="overview-heading">
                  <h2 id="overview-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Overview: What Workers Compensation Insurance Means in Phoenix
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Workers compensation insurance is a state-mandated, no-fault system that
                      provides statutory benefits to employees who sustain work-related injuries
                      or illnesses and, in return, generally shields the employer from direct
                      injury lawsuits brought by those employees. Arizona law treats workers
                      compensation as the primary remedy for most on-the-job injuries, meaning
                      the employee accepts defined benefits rather than pursuing the employer in
                      court, while the employer accepts responsibility for covered injuries
                      without requiring the employee to prove fault. The arrangement is a
                      compromise between employees and employers that has been in place for more
                      than a century, and it remains the foundation of on-the-job injury
                      protection across the state.
                    </p>
                    <p>
                      Arizona law requires workers compensation insurance for virtually every
                      employer with one or more employees, with narrow exceptions that a licensed
                      broker can review against the specifics of the business. Coverage must be
                      in force continuously while employees are on payroll, and operating without
                      required coverage creates meaningful compliance and financial exposure. The
                      practical effect is that almost every Phoenix business with any payroll
                      falls within the mandate, whether the operation is a single office in
                      Scottsdale, a contractor crew working across Mesa and Chandler, or a
                      retail operation with seasonal staff in Glendale and Peoria.
                    </p>
                    <p>
                      The system serves two purposes at the same time. The first is to protect
                      employees by guaranteeing medical care, wage replacement, disability
                      benefits, rehabilitation support, and, in the most serious cases, death
                      benefits paid to surviving dependents. The second is to protect employers
                      from the unpredictability of civil litigation by channeling most injury
                      claims into the defined benefit structure instead of the courthouse.
                      Employers who carry compliant coverage avoid the exposure of defending
                      injury claims with unlimited damages, while employees receive faster,
                      more predictable relief than the civil court system typically delivers.
                    </p>
                    <p>
                      Benefits under an Arizona workers compensation policy fall into several
                      categories. Medical benefits cover reasonable and necessary treatment for
                      covered injuries and occupational illnesses, from initial emergency care
                      through ongoing rehabilitation. Lost wage benefits replace a defined
                      percentage of the employee&apos;s wages during periods of temporary
                      disability, and permanent partial or total disability benefits apply when
                      the injury results in lasting impairment. Vocational rehabilitation and
                      return-to-work services help injured workers reenter the workforce, and
                      death benefits provide financial support to dependents after a fatal
                      workplace injury.
                    </p>
                    <p>
                      Workers compensation stands apart from general liability and health
                      insurance, though business owners sometimes assume one of those coverages
                      fills the same role. General liability covers third parties injured on the
                      business&apos;s premises or by its operations, but it specifically excludes
                      employees injured in the course of employment. Group health insurance pays
                      for non-occupational medical expenses but does not provide wage
                      replacement, disability, or rehabilitation benefits tied to a workplace
                      injury. Workers compensation is a distinct coverage designed for a
                      distinct statutory framework, and it is not substitutable.
                    </p>
                    <p>
                      Coverage scales across every size of operation. A single-employee
                      professional practice in Tempe, a growing contractor with a twenty-person
                      crew in west Phoenix, a mid-size manufacturer in Chandler, and a
                      multi-location retailer in the East Valley each follow the same basic
                      framework with premiums and endorsements matched to industry class codes,
                      payroll, and claims history. A licensed broker helps employers select the
                      right carrier, confirm classification accuracy, and maintain compliance as
                      the payroll and operating profile change through the year.
                    </p>
                  </div>
                </section>

                {/* C. What's covered */}
                <section aria-labelledby="covered-heading">
                  <h2 id="covered-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    What&apos;s Covered: Workers Compensation Insurance Building Blocks
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    Workers compensation policies deliver statutory benefits to employees
                    injured in the course of employment while protecting employers from direct
                    injury suits through the exclusive remedy principle. Each coverage
                    component on the policy addresses a different part of the recovery process,
                    and each is defined by Arizona statute and regulation rather than chosen as
                    an optional endorsement. Reviewing the parts together rather than in
                    isolation helps employers understand how medical, wage, disability, and
                    employer&apos;s liability coverages work alongside one another when a claim
                    arises.
                  </p>

                  <div className="mt-8 space-y-8">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Medical Benefits for Work-Related Injuries and Illnesses
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Medical benefits cover reasonable and necessary treatment for injuries
                        and occupational illnesses that arise out of and in the course of
                        employment. Covered services typically include emergency care,
                        hospitalization, physician visits, prescription medications, physical
                        therapy, diagnostic imaging, surgery, and other treatment prescribed by
                        the authorized treating provider. The employee generally pays nothing
                        out of pocket for approved medical care tied to the covered injury. For
                        medical-only claims, where no lost time occurs, the policy responds
                        directly to the medical provider and the case is often resolved quickly
                        without lasting impact on the employer&apos;s claim profile.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Lost Wage Replacement (Temporary and Permanent Disability)
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Lost-time benefits replace a defined percentage of the employee&apos;s
                        wages during periods when the work-related injury prevents the employee
                        from working. Temporary total disability applies when the injury fully
                        prevents work for a limited period, and temporary partial disability
                        applies when the employee can work on reduced or modified duty at lower
                        earnings. Permanent partial and permanent total disability apply when
                        the injury results in lasting impairment after the medical condition has
                        stabilized. Benefit amounts, waiting periods, and maximum durations are
                        set by Arizona statute, and the Industrial Commission of Arizona provides
                        the framework that insurers follow when calculating each category.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Vocational Rehabilitation and Return-to-Work Programs
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Vocational rehabilitation services help injured employees regain work
                        capacity and transition back into productive employment. Services can
                        include physical therapy, job retraining, assistive-technology
                        evaluations, and coordinated return-to-work planning with the treating
                        provider and the employer. Modified-duty assignments that align with
                        medical restrictions allow employees to return to work in a reduced
                        capacity while they continue to recover, which reduces both claim costs
                        and the length of time the employee is away from the workforce. Phoenix
                        employers with structured return-to-work programs generally see stronger
                        claim outcomes and more stable experience modification factors over
                        time.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Death Benefits for Surviving Dependents
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Death benefits provide financial support to surviving dependents when a
                        covered workplace injury or occupational illness results in death. The
                        policy generally covers funeral expenses up to a statutory limit and
                        pays ongoing benefits to the qualifying spouse and children based on a
                        percentage of the deceased employee&apos;s wages. Eligibility rules,
                        benefit durations, and amounts are set by Arizona statute, and the
                        Industrial Commission administers claims within that framework. While
                        fatal workplace injuries are uncommon relative to other claim
                        categories, they are among the most serious events a business can
                        experience, and the benefit structure provides essential support for
                        surviving families.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Employer&apos;s Liability Coverage
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Employer&apos;s liability, sometimes referred to as Part B of the workers
                        compensation policy, responds to a narrow category of injury-related
                        claims that fall outside the statutory workers compensation benefit
                        structure. Examples include certain third-party-over actions, loss of
                        consortium claims, dual-capacity allegations, and consequential injury
                        claims brought by family members of an injured employee. The coverage
                        pays defense costs and settlements or verdicts up to the selected limit.
                        Most Arizona policies carry standard employer&apos;s liability limits,
                        and employers with greater exposure can request higher limits or pair
                        the program with a commercial umbrella that schedules employer&apos;s
                        liability as an underlying policy.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        Exclusions and Intentional Acts Limitations
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Workers compensation does not cover every workplace incident. Injuries
                        caused by the employee&apos;s intoxication, intentional self-inflicted
                        harm, or willful misconduct fall outside coverage in most cases, as do
                        injuries that do not arise out of and in the course of employment. Some
                        categories of workers, such as certain independent contractors properly
                        classified under Arizona rules, do not fall within the statutory
                        coverage population. Intentional acts by the employer against an
                        employee remove the exclusive remedy protection and expose the business
                        to civil suits outside the workers compensation framework. A licensed
                        broker helps employers understand where the policy responds and where
                        separate risk-management practices are needed.
                      </p>
                    </div>
                  </div>
                </section>

                {/* D. Who needs */}
                <section aria-labelledby="who-needs-heading">
                  <h2 id="who-needs-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Who Needs Workers Compensation Coverage in the Phoenix Area?
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Construction and contracting companies are among the most visible users of
                      workers compensation coverage because of higher injury frequency in the
                      trades. Plumbers, electricians, HVAC technicians, roofers, framers, and
                      general contractors running crews across Phoenix, Mesa, Chandler, and
                      Glendale all carry contractor workers comp Arizona programs sized to their
                      class codes, payroll, and claims history. Manufacturers, warehouses, and
                      logistics operations add mechanical, ergonomic, and lifting exposure, and
                      restaurants, retail, and hospitality businesses face slip-and-fall and
                      burn-related claim patterns that make consistent workers compensation
                      coverage essential.
                    </p>
                    <p>
                      Healthcare and medical practices, including physician groups, dental
                      offices, and physical therapy clinics, carry workers compensation even
                      though injury frequency is lower than in the trades. Needle-stick
                      incidents, patient-handling injuries, and slip-and-fall events still
                      produce claims that rely on the policy. Professional service firms with
                      employees, including accounting, legal, consulting, and marketing
                      practices, carry coverage both to comply with Arizona law and to respond
                      to office-related injuries that occur more often than many employers
                      anticipate.
                    </p>
                    <p>
                      Landscapers, pool service companies, pest control operators, and other
                      outdoor trades navigate a mix of heat-related illness, equipment-related
                      injury, and motor-vehicle exposure that makes workers compensation a core
                      program. Home-based businesses with any employees still fall within
                      Arizona&apos;s coverage mandate, and nonprofit organizations employing
                      staff follow the same framework as for-profit businesses even though
                      their missions differ. Small business workers compensation Phoenix
                      programs cover every one of these categories, and the premium follows
                      class codes, payroll, and claims history rather than business size alone.
                    </p>
                    <p>
                      Phoenix&apos;s economic backdrop reinforces the need. A strong
                      construction sector, a growing service and hospitality economy, and a
                      deep small-business community across Maricopa County put more workers on
                      the job each year, which in turn puts more employers within the scope of
                      Arizona workers compensation. Employers who build structured safety
                      programs, document training, and maintain consistent return-to-work
                      practices typically see stable or improving experience modification
                      factors over time and benefit from the compounding effect on renewal
                      pricing.
                    </p>
                  </div>
                </section>

                {/* E. Arizona requirements */}
                <section aria-labelledby="arizona-req-heading">
                  <h2 id="arizona-req-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Arizona Workers Compensation Requirements and Considerations
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Arizona workers compensation requirements apply to virtually every employer
                      with one or more employees, with narrow exceptions for specific
                      relationships and certain categories of workers. Coverage must be in force
                      continuously, and employers are expected to maintain active policies while
                      any employee is on payroll. Operating without required coverage exposes
                      the business to significant penalties, including fines, liability for
                      employee medical and wage losses that the policy would have covered, and
                      potential stop-work actions. The Industrial Commission of Arizona, or ICA,
                      administers workers compensation claims and oversees employer compliance
                      under the state framework.
                    </p>
                    <p>
                      Premium is driven by three primary factors: classification code, payroll,
                      and experience. Classification codes categorize each employee&apos;s
                      duties by industry risk, and higher-risk trades such as roofing and
                      framing carry materially higher rates than clerical codes. Payroll is
                      reported by code, and premium is calculated as a rate per one hundred
                      dollars of reported payroll within each code. The experience modification
                      factor, commonly called the ex-mod, adjusts premium based on the
                      employer&apos;s three-year claims history relative to the average for the
                      industry. An employer whose claims are better than average sees an ex-mod
                      below one, reducing premium, and one whose claims are worse than average
                      sees an ex-mod above one, increasing premium.
                    </p>
                    <p>
                      Payroll audits occur after the policy term ends. The carrier reviews actual
                      payroll and classification data for the completed term and adjusts final
                      premium to reflect reality. Under-reporting or misclassification can
                      produce sizable audit bills, while honest and accurate reporting leaves
                      the employer with no surprises. Independent contractors versus employees
                      is a persistent compliance question, and Arizona examines control, method
                      of payment, and other factors to determine status. Misclassifying an
                      employee as a 1099-contractor does not remove workers compensation
                      obligations if the working relationship actually constitutes employment.
                    </p>
                    <p>
                      Sole proprietors, partners, and corporate officers occupy a specific
                      place in the workers compensation structure. In many cases they can elect
                      to be included in or excluded from coverage, and the choice has both
                      premium and protection implications. Including owners in coverage provides
                      the same medical, wage replacement, and disability benefits that apply to
                      employees, while excluding owners reduces premium but leaves the
                      individual to rely on personal health and disability insurance after an
                      injury. A licensed broker walks owners through the tradeoff before the
                      policy binds.
                    </p>
                    <p>
                      Return-to-work and modified-duty programs help reduce claim costs and
                      shorten disability durations, which supports stable ex-mod performance
                      over time. Workers compensation coordinates with group health insurance,
                      disability insurance, and general liability at predictable seams, and it
                      is typically part of a coordinated business insurance package alongside
                      commercial property and commercial auto. Accurate classification, honest
                      payroll reporting, structured safety practices, and prompt claim reporting
                      after an injury are the core operational habits that keep workers
                      compensation coverage Phoenix programs aligned with both compliance and
                      long-term cost.
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
                        Protegrity Insurance Brokerage, so Arizona employers work with licensed
                        commercial insurance professionals who understand workers compensation
                        compliance and place coverage with carriers using state-approved forms
                        and honest eligibility standards. Our team knows how Arizona class codes,
                        payroll reporting, and experience modification factors actually interact,
                        and we translate that understanding into clear, accurate submissions that
                        carriers can quote efficiently.
                      </p>
                      <p>
                        We maintain access to multiple commercial carriers with distinct
                        appetites for contractors, service operations, healthcare practices, and
                        office-based businesses, which allows us to compare pricing and terms
                        across markets rather than pitching a single company&apos;s product to
                        every employer. Business workers comp insurance Arizona quotes vary
                        meaningfully between carriers depending on industry appetite, safety
                        program credits, and claim history, and evaluating options through a
                        licensed brokerage is how employers identify meaningful savings without
                        compromising compliance.
                      </p>
                      <p>
                        We serve commercial clients across Phoenix, Scottsdale, Mesa, Tempe,
                        Chandler, Glendale, Gilbert, and Peoria, and our 5.0-star service
                        reputation reflects consistent follow-through, responsive service, and
                        respectful communication from the first quote through every mid-term
                        endorsement and every annual audit. Protegrity-supported processes keep
                        required disclosures visible and your questions answered so decisions
                        rest on facts, not pressure.
                      </p>
                    </div>
                  </div>
                </section>

                {/* G. FAQ */}
                <section aria-labelledby="faq-heading">
                  <h2 id="faq-heading" className="font-heading text-2xl font-bold md:text-3xl">
                    Frequently Asked Questions About Phoenix Workers Compensation Insurance
                  </h2>

                  <div className="mt-8 space-y-10">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Is workers compensation insurance required for my business in Arizona?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Arizona law requires workers compensation for virtually every employer
                        with one or more employees, with narrow exceptions that a licensed
                        broker can review against the specifics of the business. Coverage must
                        be in force continuously while employees are on payroll, and operating
                        without required coverage exposes the business to penalties, direct
                        liability for employee losses, and potential stop-work actions. Most
                        Phoenix, Scottsdale, Mesa, and surrounding-area employers fall within
                        the mandate regardless of size or industry. Sole proprietors and
                        single-owner operations with no employees are outside the mandate but
                        often carry voluntary coverage for their own protection.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What does workers compensation insurance cover?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Workers compensation covers medical treatment, wage replacement during
                        periods of temporary or permanent disability, vocational rehabilitation,
                        and death benefits for surviving dependents when a work-related injury
                        or occupational illness occurs. Benefits follow the statutory framework
                        administered by the Industrial Commission of Arizona, and they are paid
                        regardless of fault, subject to specific exclusions. The policy also
                        provides employer&apos;s liability coverage for a narrow category of
                        related claims that fall outside the statutory benefit structure.
                        General liability and group health insurance do not replace workers
                        compensation for on-the-job injuries.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How much does workers compensation insurance cost in Phoenix?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Premium depends primarily on class code, payroll, and experience
                        modification factor. Lower-risk clerical and professional codes are
                        priced at modest rates per one hundred dollars of payroll, while
                        higher-risk trades such as roofing and framing are priced at
                        substantially higher rates. Employers with strong claims history and
                        structured safety programs typically see below-average ex-mod factors
                        that reduce premium, while employers with poor claims history see ex-mod
                        factors above one that increase premium. Comparing quotes through a
                        licensed brokerage with access to multiple carriers provides a clean
                        benchmark and identifies carriers whose appetite fits the
                        business&apos;s industry.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Do I need workers comp if I only have independent contractors?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        It depends on whether the individuals are genuinely independent
                        contractors under Arizona rules. The state examines control, method of
                        payment, independence of the working relationship, and other factors to
                        determine status. Workers classified as 1099-contractors on paper but
                        who function as W-2 employees in practice remain within the workers
                        compensation mandate, and misclassification exposes the business to
                        audit adjustments, back premium, penalties, and potential liability for
                        uncovered injuries. Businesses engaging true independent contractors
                        should also confirm that those contractors carry their own workers
                        compensation coverage where required, because uncovered subcontractors
                        can flow back to the hiring business at audit.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What is an experience modification factor (ex-mod)?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        The experience modification factor, commonly called the ex-mod, is a
                        number that adjusts workers compensation premium based on the
                        employer&apos;s three-year claims history relative to the industry
                        average. An ex-mod of one represents average claim performance. An
                        ex-mod below one reflects better-than-average claims history and reduces
                        premium, and an ex-mod above one reflects worse-than-average claims
                        history and increases premium. Structured safety programs, prompt claim
                        reporting, modified-duty assignments, and return-to-work planning all
                        influence the claims that feed the ex-mod, and the compounding effect
                        over multiple years can be significant.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        What happens if my employee is injured on the job in Arizona?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        When an employee is injured at work, the employer should provide
                        immediate medical care, document the incident, and report the claim
                        promptly to the workers compensation carrier or broker. Prompt reporting
                        is important because delays often correlate with higher claim costs and
                        longer disability durations. The carrier manages authorized medical
                        treatment, calculates wage replacement benefits according to the
                        statutory formula, and coordinates with the Industrial Commission of
                        Arizona as needed. Employers who support authorized treatment,
                        communicate consistently with the injured employee, and offer modified
                        duty when appropriate typically see better claim outcomes.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        Are sole proprietors and business owners required to carry workers comp?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Sole proprietors, partners, and corporate officers can often elect to be
                        included in or excluded from workers compensation coverage under Arizona
                        rules. Electing inclusion provides medical, wage replacement, and
                        disability benefits for the owner in the event of an on-the-job injury,
                        with corresponding premium impact. Electing exclusion reduces premium
                        but leaves the owner to rely on personal health and disability insurance.
                        The choice is meaningful, and a licensed broker walks owners through the
                        premium impact and benefit implications before the policy binds.
                        Situations vary by entity type and by whether the owner is actively
                        engaged in covered operations.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        How do payroll audits work for workers compensation insurance?
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Workers compensation policies are typically issued on an estimated
                        payroll basis, and the carrier conducts an audit after the policy term
                        ends to compare estimated payroll with actual payroll. The audit
                        reviews payroll records, classification assignments, subcontractor
                        documentation, and certificates of insurance from any subcontractors.
                        Final premium is adjusted up or down based on actual payroll and proper
                        classification, and unpaid subcontractor insurance gaps can flow to the
                        hiring business as additional premium. Maintaining clean payroll
                        records, confirming that every subcontractor carries its own active
                        coverage, and classifying employees accurately throughout the term
                        prevents surprises at audit.
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
                    Workers compensation is one of three core business policies that most
                    employers maintain alongside{" "}
                    <Link
                      href="/insurance/business/general-liability"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      general liability
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/insurance/business/property-coverage"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      property coverage
                    </Link>
                    . Operations running multiple vehicles extend the program with{" "}
                    <Link
                      href="/insurance/commercial-auto/fleet-coverage"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      fleet coverage
                    </Link>{" "}
                    and the underlying liability structure through{" "}
                    <Link
                      href="/insurance/commercial-auto/business-liability"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      business liability auto
                    </Link>
                    . For catastrophic capacity above primary auto and general liability limits,
                    review{" "}
                    <Link
                      href="/insurance/other/umbrella"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      umbrella insurance
                    </Link>
                    . A coordinated program across these policies reduces the gaps that appear
                    when lines are placed with separate brokers on different timelines.
                  </p>
                </section>

                {/* Closing paragraph with primary keyword */}
                <p className="text-base leading-relaxed text-muted-foreground">
                  Arizona employers with employees on payroll deserve a workers compensation
                  program that matches how the business actually operates rather than a generic
                  structure that creates surprises at audit. A thorough review of{" "}
                  <strong className="text-foreground">
                    workers compensation insurance Phoenix AZ
                  </strong>{" "}
                  coverage examines class codes, payroll, experience modification, owner
                  inclusion elections, and subcontractor documentation across Phoenix,
                  Scottsdale, Mesa, Tempe, Chandler, Glendale, Gilbert, and Peoria. When you are
                  ready to move from research to a quoted proposal, work with a licensed
                  Arizona brokerage that will present the terms clearly and keep your HR and
                  finance teams informed at every step.
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
                    Ready to Protect Your Employees and Your Business?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
                    When your operation is ready to evaluate workers compensation coverage in
                    detail, Protegrity Insurance Brokerage can translate these concepts into
                    quoted options aligned with your class codes, payroll, and claims history.
                    The next step is a structured conversation, not pressure: you set the pace,
                    and we provide the facts you need to decide with confidence.
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
