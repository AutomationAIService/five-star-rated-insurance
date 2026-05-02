export type InsuranceProductId =
  | "auto"
  | "home"
  | "life"
  | "commercial-auto"
  | "business"
  | "specialty"
  | "mexico-travel"
  | "other"

/** Lucide React icon component name (PascalCase), e.g. resolve via a small registry in UI code. */
export type InsuranceProductIconName =
  | "Car"
  | "Home"
  | "Heart"
  | "Truck"
  | "Briefcase"
  | "Bike"
  | "Palmtree"
  | "Umbrella"

export type CoverageItem = {
  name: string
  description: string
}

export type InsuranceFaq = {
  question: string
  answer: string
}

export type InsuranceProduct = {
  id: InsuranceProductId
  /** Short label for menus and cards where a compact title is needed. */
  title: string
  /** Visible page `<h1>` for product landing pages. */
  pageH1: string
  /** Browser `<title>` / Open Graph title (full string). */
  seoTitle: string
  /** Meta description (`description` tag / OG). */
  seoDescription: string
  /** Lucide icon name (PascalCase); resolve to a component in UI. */
  icon: InsuranceProductIconName
  heroDescription: string
  coverageItems: CoverageItem[]
  faqs: InsuranceFaq[]
  pageRoute: string
}

export const insuranceProducts: InsuranceProduct[] = [
  {
    id: "auto",
    title: "Auto Insurance",
    pageH1: "Auto Insurance in Phoenix, AZ",
    seoTitle: "Auto Insurance in Phoenix, AZ | Compare Car Insurance Quotes",
    seoDescription:
      "Compare auto insurance quotes in Phoenix, AZ for daily drivers, classic cars, SR-22 filings, liability, collision, comprehensive, uninsured motorist, and MedPay coverage.",
    icon: "Car",
    heroDescription:
      "Compare auto insurance quotes in Phoenix for daily drivers, collector vehicles, and SR-22 filings. Licensed brokers help you weigh liability, collision, comprehensive, uninsured motorist, and MedPay options side by side.",
    coverageItems: [
      {
        name: "Regular coverage",
        description:
          "Policies built for daily drivers: liability, collision, comprehensive, uninsured/underinsured motorist, and medical payments (MedPay)—quoted across multiple carriers so you see real choices for Phoenix-area roads.",
      },
      {
        name: "Classic coverage",
        description:
          "Agreed-value and specialty programs for classic and collector cars—mileage and usage tailored to weekend drives and shows instead of a one-size-fits-all commuter policy.",
      },
      {
        name: "State filings & SR-22",
        description:
          "SR-22 and certificate-of-financial-responsibility filings when required, handled correctly so you stay compliant without guessing which carriers will file on your behalf.",
      },
    ],
    faqs: [
      {
        question: "What auto coverage should Phoenix drivers carry beyond state minimums?",
        answer:
          "Arizona requires liability at mandated limits, but serious accidents on busy corridors can exhaust minimum limits quickly. Many drivers add collision and comprehensive for financed vehicles, uninsured motorist coverage for hit-and-run or uninsured exposure, and MedPay for quicker medical expense payments after an accident.",
      },
      {
        question: "How do collision and comprehensive differ?",
        answer:
          "Collision pays for damage to your vehicle from collisions with other vehicles or objects. Comprehensive covers theft, vandalism, weather, fire, and animal strikes. Lenders often require both until the loan is satisfied.",
      },
      {
        question: "Do I need full coverage on an older vehicle?",
        answer:
          "It depends on value and how you would pay for repairs or replacement out of pocket. If premiums plus deductible approach the vehicle’s market value, liability-only may make sense—we walk through the trade-offs before you decide.",
      },
      {
        question: "How does an SR-22 filing work?",
        answer:
          "An SR-22 is proof filed with the state that you maintain required insurance after certain violations. Not every insurer offers SR-22—we match you with carriers that can file and monitor compliance.",
      },
      {
        question: "Can I insure a classic or modified vehicle?",
        answer:
          "Yes. Classics often benefit from agreed-value coverage and usage guidelines designed for hobby vehicles rather than daily commuting. Documented value and photos help carriers price coverage accurately.",
      },
    ],
    pageRoute: "/insurance/auto",
  },
  {
    id: "home",
    title: "Home Insurance",
    pageH1: "Home Insurance in Phoenix, AZ",
    seoTitle: "Home Insurance in Phoenix, AZ | Compare Homeowners Insurance Quotes",
    seoDescription:
      "Compare home insurance quotes in Phoenix, AZ for primary homes, seasonal homes, rental properties, liability, personal property, replacement cost, and optional endorsements.",
    icon: "Home",
    heroDescription:
      "Compare homeowners insurance in Phoenix for primary residences, seasonal homes, and rentals. Understand dwelling limits, replacement cost, personal property, liability, and optional endorsements with licensed brokers.",
    coverageItems: [
      {
        name: "Primary home",
        description:
          "HO-style coverage for where you live full time: dwelling, other structures, personal property, liability, and loss of use—with replacement cost options when available.",
      },
      {
        name: "Seasonal home",
        description:
          "Second homes and vacation properties with occupancy and vacancy considerations, plus endorsements for the months the home sits unoccupied.",
      },
      {
        name: "Rental home",
        description:
          "Landlord-focused protection for dwellings you lease out, including liability for tenant and guest injuries and options such as loss of rents after a covered claim.",
      },
    ],
    faqs: [
      {
        question: "What does a typical Phoenix homeowners policy cover?",
        answer:
          "Most policies cover the dwelling, other structures, personal property, loss of use, personal liability, and guest medical payments—subject to limits, deductibles, and exclusions such as flood or earthquake unless added separately.",
      },
      {
        question: "How is replacement cost determined?",
        answer:
          "Carriers estimate rebuild cost using construction type, square footage, and local labor and materials—not market value or Zestimates. We help you align dwelling limits with realistic rebuild scenarios after a major loss.",
      },
      {
        question: "Do I need scheduled coverage for jewelry or electronics?",
        answer:
          "Base policies often cap unscheduled theft of high-value items. Scheduling jewelry, collectibles, or expensive gear can lift sub-limits and reduce claim disputes with documentation.",
      },
      {
        question: "Is flood damage included?",
        answer:
          "Standard home policies exclude flood. Separate flood coverage through the NFIP or private markets may be required—especially where lenders mandate it or properties sit in high-hazard zones.",
      },
      {
        question: "Does a seasonal home need different coverage?",
        answer:
          "Often yes. Vacancy periods, remote maintenance, and short-term rental use can affect eligibility and optional endorsements. We place coverage that matches how often you occupy the home and whether it is rented.",
      },
    ],
    pageRoute: "/insurance/home",
  },
  {
    id: "life",
    title: "Life Insurance",
    pageH1: "Life Insurance in Phoenix, AZ",
    seoTitle: "Life Insurance in Phoenix, AZ | Term & Whole Life Insurance Quotes",
    seoDescription:
      "Compare life insurance quotes in Phoenix, AZ for term life, whole life, family protection, income replacement, mortgage protection, and long-term financial security.",
    icon: "Heart",
    heroDescription:
      "Compare term and whole life quotes in Phoenix for income replacement, mortgage protection, and long-term family security. Licensed brokers explain beneficiary designations and realistic face amounts for your budget.",
    coverageItems: [
      {
        name: "Term life options",
        description:
          "Level-premium term coverage for a defined period—often used to cover mortgages, replace income during working years, and fund education goals.",
      },
      {
        name: "Whole life plans",
        description:
          "Permanent insurance with a guaranteed death benefit and scheduled cash-value growth—suited when coverage needs extend for a lifetime, not just a term window.",
      },
      {
        name: "Family protection",
        description:
          "Strategies covering spouses and dependents, including coordination with workplace life benefits and riders for children or additional insureds where available.",
      },
    ],
    faqs: [
      {
        question: "How much life insurance do I need?",
        answer:
          "Many families start with income replacement, debts, final expenses, and education goals. We stress-test scenarios so the death benefit aligns with ongoing expenses—not a generic rule-of-thumb-only number.",
      },
      {
        question: "Term vs. whole life—how do I choose?",
        answer:
          "Term offers the most coverage per premium dollar for temporary needs (e.g., until the mortgage is paid). Whole life lasts a lifetime with cash-value mechanics and higher premiums. The right fit depends on duration of need and budget.",
      },
      {
        question: "Can I qualify with health conditions?",
        answer:
          "Underwriting varies by carrier and product. Some risks fit standard markets; others may use modified or graded offerings. We set expectations early so quotes reflect likely outcomes.",
      },
      {
        question: "Should policies be owned by a trust?",
        answer:
          "Beneficiary designations often pass outside probate, but trusts, estates, and blended families add complexity. Attorneys should guide large estates; we coordinate on face amounts and ownership details as needed.",
      },
      {
        question: "Can I update beneficiaries later?",
        answer:
          "Yes—insurers typically allow beneficiary changes by form. Keeping designations current after marriage, divorce, or new children avoids unintended payouts.",
      },
    ],
    pageRoute: "/insurance/life",
  },
  {
    id: "commercial-auto",
    title: "Commercial Auto",
    pageH1: "Commercial Auto Insurance in Phoenix, AZ",
    seoTitle: "Commercial Auto Insurance in Phoenix, AZ | Business Vehicle Quotes",
    seoDescription:
      "Compare commercial auto insurance quotes in Phoenix, AZ for work trucks, business vehicles, fleets, cargo protection, liability, and contractor vehicle coverage.",
    icon: "Truck",
    heroDescription:
      "Protect work trucks, contractor vehicles, and fleets operating from Phoenix with liability and physical damage tailored to commercial use—including cargo needs and filings where applicable.",
    coverageItems: [
      {
        name: "Fleet coverage",
        description:
          "Scheduled vehicles rated together for businesses running multiple units—often with fleet pricing and underwriting aligned to DOT or Arizona filing requirements.",
      },
      {
        name: "Cargo protection",
        description:
          "Motor truck cargo and related coverages for goods you haul, with limits shaped by commodity type, radius, and contract obligations.",
      },
      {
        name: "Business liability",
        description:
          "Auto liability arising from business use—bodily injury and property damage tied to owned, hired, or non-owned vehicles in your operations.",
      },
    ],
    faqs: [
      {
        question: "When is commercial auto required instead of personal auto?",
        answer:
          "If vehicles are titled to a business, used to haul tools or materials for pay, transport passengers for hire, or exceed personal policy allowances, commercial coverage is typically required. Misclassified use can jeopardize claims.",
      },
      {
        question: "What is hired and non-owned auto?",
        answer:
          "HNOA responds when employees rent vehicles or use personal cars for your business. Even businesses without owned vehicles can have meaningful driving exposure.",
      },
      {
        question: "Do interstate operations need special filings?",
        answer:
          "Interstate carriers often need FMCSA authority, USDOT numbers, and evidenced liability limits matching operations. Requirements vary by weight, cargo, and radius—we align filings with how you actually run.",
      },
      {
        question: "How are premiums calculated?",
        answer:
          "Underwriters weigh vehicle classes, garaging ZIP codes, radius, driver histories, limits, cargo type, and loss experience. Safety programs and telematics can influence pricing over time.",
      },
      {
        question: "Are tools inside the vehicle covered automatically?",
        answer:
          "Inland marine or contractor equipment schedules often supplement auto physical damage. We clarify what the auto policy pays versus what should be insured separately.",
      },
    ],
    pageRoute: "/insurance/commercial-auto",
  },
  {
    id: "business",
    title: "Business Insurance",
    pageH1: "Business Insurance in Phoenix, AZ",
    seoTitle: "Business Insurance in Phoenix, AZ | Compare Small Business Insurance Quotes",
    seoDescription:
      "Compare business insurance quotes in Phoenix, AZ for general liability, property coverage, workers' compensation, professional liability, and commercial risk protection.",
    icon: "Briefcase",
    heroDescription:
      "Shield Phoenix-area businesses with general liability, commercial property, workers’ compensation, and professional liability matched to your industry—from storefronts to contractors.",
    coverageItems: [
      {
        name: "General liability",
        description:
          "Third-party bodily injury, property damage, and personal and advertising injury stemming from day-to-day operations and premises exposures.",
      },
      {
        name: "Property coverage",
        description:
          "Buildings, tenant improvements, inventory, and equipment against covered perils—with business income extensions where selected.",
      },
      {
        name: "Workers comp",
        description:
          "Statutory benefits for employee injuries on the job, structured to Arizona compliance and class-code pricing.",
      },
    ],
    faqs: [
      {
        question: "What is a business owners policy (BOP)?",
        answer:
          "A BOP typically bundles general liability and property for eligible small businesses at a packaged rate. Eligibility depends on operations, size, and risk class.",
      },
      {
        question: "Is professional liability the same as general liability?",
        answer:
          "No. General liability covers bodily injury and property damage from operations. Professional liability (E&O) covers financial harm from errors or omissions in professional services.",
      },
      {
        question: "Who needs workers’ compensation in Arizona?",
        answer:
          "Most employers with employees must carry workers’ comp; thresholds and exemptions vary for sole proprietors and certain classifications. Noncompliance carries stiff penalties—we verify requirements for your entity.",
      },
      {
        question: "How do I insure home-based business property?",
        answer:
          "Homeowners policies often cap business personal property and exclude many business liabilities. Endorsements or standalone commercial policies may be needed for gear, inventory, and client-related claims.",
      },
      {
        question: "Can one policy cover multiple locations?",
        answer:
          "Many programs schedule multiple premises or offer blanket property. As you add locations or revenue, we revisit limits and layering so growth does not outpace coverage.",
      },
    ],
    pageRoute: "/insurance/business",
  },
  {
    id: "specialty",
    title: "Specialty Insurance",
    pageH1: "Specialty Insurance in Arizona",
    seoTitle: "Specialty Insurance in Arizona | Motorcycle, RV, Boat & ATV Coverage",
    seoDescription:
      "Compare specialty insurance quotes in Arizona for motorcycles, ATVs, boats, jet skis, RVs, motorhomes, trailers, and recreational vehicles.",
    icon: "Bike",
    heroDescription:
      "Coverage built for Arizona recreation—motorcycles, ATVs, boats, jet skis, RVs, motorhomes, and trailers—with accessory and agreed-value options where available.",
    coverageItems: [
      {
        name: "Motorcycle & ATV",
        description:
          "Liability, collision, comprehensive, and accessory coverage for street bikes and off-road machines—including gear endorsements when offered.",
      },
      {
        name: "Boats & jet skis",
        description:
          "Hull and liability protection for personal watercraft and boats with navigational territories and towing limits aligned to how you use Arizona lakes and rivers.",
      },
      {
        name: "RVs & motorhomes",
        description:
          "Coverage for drivable and towable units—from weekend campers to seasonal snowbirds—with options for personal effects and emergency expense benefits.",
      },
    ],
    faqs: [
      {
        question: "Is my motorcycle covered under my auto policy?",
        answer:
          "Typically no—motorcycles usually require a standalone motorcycle policy. Mixing vehicle types incorrectly can leave liability and physical damage gaps.",
      },
      {
        question: "Agreed value vs. actual cash value?",
        answer:
          "Agreed value locks in a payout for total losses when documented upfront. Actual cash value depreciates the settlement—fine for some risks, insufficient for specialty builds.",
      },
      {
        question: "Does boat insurance cover every waterway?",
        answer:
          "Policies specify navigational limits and may exclude racing or paid charters. Match territory and seasonal lay-up periods to real usage.",
      },
      {
        question: "Do seasonal RVs still need coverage off-season?",
        answer:
          "You generally still want comprehensive in storage for theft or storm damage and liability whenever the unit moves under its own power or is towed on public roads.",
      },
      {
        question: "Are trailers and accessories automatic?",
        answer:
          "Trailers and bolt-on accessories may need scheduling or increased accessory limits. We coordinate trailer VINs and stated accessory values so upgrades are reflected.",
      },
    ],
    pageRoute: "/insurance/specialty",
  },
  {
    id: "mexico-travel",
    title: "Mexico Travel Insurance",
    pageH1: "Mexico Travel Insurance for Arizona Travelers",
    seoTitle: "Mexico Travel Insurance from Arizona | Compare Travel Coverage Options",
    seoDescription:
      "Compare Mexico travel insurance options for Arizona travelers, including rental car coverage, emergency medical, trip interruption, evacuation, baggage, and CFAR coverage.",
    icon: "Palmtree",
    heroDescription:
      "Heading south from Arizona? Compare Mexico travel insurance that can bundle rental car protection, emergency medical and evacuation, trip interruption, baggage benefits, and optional cancel-for-any-reason upgrades.",
    coverageItems: [
      {
        name: "Rental car coverage in Mexico",
        description:
          "Liability and physical damage aligned with Mexican legal requirements and rental contracts—critical because many U.S. auto policies do not satisfy liability south of the border.",
      },
      {
        name: "Trip cancellation and interruption",
        description:
          "Benefits when covered events force you to cancel before departure or end a trip early—subject to the plan’s named perils and documentation rules.",
      },
      {
        name: "Emergency medical and dental",
        description:
          "Access to urgent treatment while in Mexico when domestic health plans offer little or no cross-border coverage—especially for emergencies and urgent care visits.",
      },
    ],
    faqs: [
      {
        question: "Do Arizona drivers need separate coverage to rent or drive in Mexico?",
        answer:
          "Mexican law generally requires liability through a Mexico-authorized insurer. U.S. policies often do not meet that requirement at the border. Rental and travel plans can bundle liability and physical damage appropriate for your route and vehicle.",
      },
      {
        question: "Will my U.S. health plan cover me in Mexico?",
        answer:
          "Many plans reimburse little abroad or require upfront payment. Travel medical coverage can bridge emergency and urgent-care costs while you are outside the United States.",
      },
      {
        question: "What is the difference between trip cancellation and interruption?",
        answer:
          "Cancellation reimburses forfeited prepaid costs if you cannot depart for a covered reason. Interruption covers extra costs or unused portions of the trip if a covered event occurs after you have left.",
      },
      {
        question: "When should I buy travel insurance?",
        answer:
          "Buy soon after major prepaid bookings if you want cancellation protection (subject to timing rules in the policy). Align effective dates with the entire time you are in Mexico for medical and rental benefits.",
      },
      {
        question: "How do I get a quote through Five Star Rated Insurance?",
        answer:
          "Start a quote request online to connect with licensed brokers at Protegrity Insurance Brokerage. They review your itinerary and match you to options that fit your travel and coverage priorities.",
      },
    ],
    pageRoute: "/insurance/mexico-travel",
  },
  {
    id: "other",
    title: "Other Insurance",
    pageH1: "Umbrella, Flood, Earthquake, and Valuable Items Insurance in Arizona",
    seoTitle: "Umbrella, Flood, Earthquake & Valuable Items Insurance in Arizona",
    seoDescription:
      "Compare other insurance coverage options in Arizona, including umbrella insurance, flood insurance, earthquake insurance, and valuable items protection.",
    icon: "Umbrella",
    heroDescription:
      "Close common coverage gaps with umbrella liability, standalone or endorsed flood and earthquake protection, and scheduled valuable items backed by documented appraisals.",
    coverageItems: [
      {
        name: "Umbrella insurance",
        description:
          "Extra liability limits that follow your underlying auto and home policies—important when lawsuits threaten assets and future earnings beyond base policy caps.",
      },
      {
        name: "Flood and earthquake coverage",
        description:
          "Protection for perils typically excluded from standard homeowners policies—structured for Arizona’s monsoon flood exposure and seismic risk pockets.",
      },
      {
        name: "Valuable items protection",
        description:
          "Scheduled jewelry, art, and collectibles with agreed or stated values so high-value items are not capped by homeowners sub-limits.",
      },
    ],
    faqs: [
      {
        question: "Why add an umbrella policy?",
        answer:
          "Serious liability verdicts can exceed auto and home liability limits. Umbrellas add millions in extra protection for a comparatively modest premium when you qualify.",
      },
      {
        question: "Does homeowners insurance cover flood or earthquake?",
        answer:
          "Usually not. Flood typically needs a dedicated flood policy; earthquake is usually a separate endorsement or policy. We review mapping, deductibles, and rebuild values for your address.",
      },
      {
        question: "How are valuables scheduled?",
        answer:
          "Appraisals, invoices, or photos support agreed values listed on the policy. Scheduling reduces conflicts at claim time versus relying on generic personal property limits.",
      },
      {
        question: "Does umbrella extend to rentals?",
        answer:
          "Often, when underlying landlord policies are properly listed and limits meet carrier requirements. We coordinate named insureds and underlying liability so the umbrella responds as intended.",
      },
      {
        question: "Can I bundle multiple specialty lines?",
        answer:
          "Yes—we review assets, exposures, and existing policies to layer umbrella, flood, earthquake, and scheduled valuables with carriers suited to your profile.",
      },
    ],
    pageRoute: "/insurance/other",
  },
]

export const insuranceProductById: Record<InsuranceProductId, InsuranceProduct> =
  Object.fromEntries(insuranceProducts.map((p) => [p.id, p])) as Record<
    InsuranceProductId,
    InsuranceProduct
  >
