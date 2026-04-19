export type InsuranceProductId =
  | "auto"
  | "home"
  | "life"
  | "commercial-auto"
  | "business"
  | "specialty"

/** Lucide React icon component name (PascalCase), e.g. resolve via a small registry in UI code. */
export type InsuranceProductIconName =
  | "Car"
  | "Home"
  | "Heart"
  | "Truck"
  | "Briefcase"
  | "Motorbike"

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
  title: string
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
    icon: "Car",
    heroDescription:
      "Compare liability, collision, and comprehensive options from multiple carriers in one place. We help you balance protection and premium so you are not paying for coverage you do not need.",
    coverageItems: [
      {
        name: "Regular coverage",
        description:
          "Standard auto policies for daily drivers, including liability, uninsured motorist, and optional physical damage for your vehicle.",
      },
      {
        name: "Classic coverage",
        description:
          "Agreed-value and specialty options for collector and classic cars, with mileage and usage tailored to how you actually drive.",
      },
      {
        name: "State filings & SR-22",
        description:
          "Certificate of financial responsibility filings when required by your state, handled correctly so you stay compliant and insured.",
      },
    ],
    faqs: [
      {
        question: "What auto coverage is required in my state?",
        answer:
          "Most states require liability insurance at minimum limits, and some require uninsured motorist coverage. We review your state rules and recommend limits that meet legal requirements and protect your assets.",
      },
      {
        question: "What is the difference between collision and comprehensive?",
        answer:
          "Collision pays for damage to your car from accidents with other vehicles or objects. Comprehensive covers theft, vandalism, weather, and animal strikes. Many lenders require both if you finance or lease.",
      },
      {
        question: "Do I need full coverage on an older car?",
        answer:
          "It depends on the car’s value and your comfort with out-of-pocket repairs. If premiums plus deductible approach the car’s value, you might choose liability only—but we will walk through the numbers with you.",
      },
      {
        question: "How does an SR-22 filing work?",
        answer:
          "An SR-22 is a form your insurer files with the state to prove you carry required insurance after certain violations. Not every carrier offers SR-22, so we match you with insurers that can file on your behalf.",
      },
      {
        question: "Can I insure a classic or modified vehicle?",
        answer:
          "Yes. Classic and modified cars often need agreed-value coverage and usage limits different from a daily driver. We help you document value and choose a policy designed for collector vehicles.",
      },
    ],
    pageRoute: "/insurance/auto",
  },
  {
    id: "home",
    title: "Home Insurance",
    icon: "Home",
    heroDescription:
      "Protect your dwelling, belongings, and liability with a policy built around how you use the property. From primary residences to rentals, we help you understand replacement cost, deductibles, and optional endorsements.",
    coverageItems: [
      {
        name: "Primary home",
        description:
          "HO-3 and similar policies for your main residence, covering the structure, personal property, and liability where you live every day.",
      },
      {
        name: "Seasonal home",
        description:
          "Coverage for vacation or second homes, including occupancy considerations and options for when the home is unoccupied part of the year.",
      },
      {
        name: "Rental home",
        description:
          "Landlord or dwelling policies for properties you lease to tenants, with liability and loss-of-rents options suited to rental exposure.",
      },
    ],
    faqs: [
      {
        question: "What does a standard homeowners policy cover?",
        answer:
          "It typically covers your dwelling, other structures, personal property, loss of use, personal liability, and medical payments to others—subject to limits, deductibles, and exclusions like flood or earthquake unless added.",
      },
      {
        question: "How is my home’s replacement cost determined?",
        answer:
          "Carriers estimate rebuild cost using construction details, local labor and materials, and square footage—not market value. We help you review the dwelling limit so you are not underinsured after a major loss.",
      },
      {
        question: "Do I need extra coverage for jewelry or electronics?",
        answer:
          "High-value items may have sub-limits in a base policy. Scheduled personal property or endorsements can cover jewelry, art, and electronics to their full value with appropriate documentation.",
      },
      {
        question: "Is flood damage covered by home insurance?",
        answer:
          "Standard home policies exclude flood. Separate flood insurance through the NFIP or private markets may be required, especially in flood-prone areas or when your lender mandates it.",
      },
      {
        question: "Does a seasonal or second home need a different policy?",
        answer:
          "Often yes. Occupancy, location, and maintenance when vacant can affect eligibility and coverage. We place coverage that matches how often you use the home and whether it is rented or guest-occupied.",
      },
    ],
    pageRoute: "/insurance/home",
  },
  {
    id: "life",
    title: "Life Insurance",
    icon: "Heart",
    heroDescription:
      "Give your family financial breathing room if something happens to you. We explain term versus permanent coverage, beneficiary designations, and how much protection fits your budget and goals.",
    coverageItems: [
      {
        name: "Term life options",
        description:
          "Fixed-period coverage with level premiums for a chosen term, often used to cover mortgages, income replacement, and education costs.",
      },
      {
        name: "Whole life plans",
        description:
          "Permanent insurance with a guaranteed death benefit and cash value component that grows on a schedule defined by the policy.",
      },
      {
        name: "Family protection",
        description:
          "Strategies to cover spouses and dependents, including rider options and coordination with workplace coverage you may already have.",
      },
    ],
    faqs: [
      {
        question: "How much life insurance do I need?",
        answer:
          "A common approach is multiplying income by years of support needed, then adding debts and goals like college. We help you stress-test scenarios so the amount matches your family’s actual expenses.",
      },
      {
        question: "What is the difference between term and whole life?",
        answer:
          "Term provides coverage for a set period at a lower initial cost. Whole life lasts your lifetime and builds cash value but has higher premiums. The right choice depends on duration of need and budget.",
      },
      {
        question: "Can I get coverage if I have health issues?",
        answer:
          "Many people can. Underwriting varies by carrier and product; some policies have simplified issue or graded benefits. We discuss options honestly so expectations match likely offers.",
      },
      {
        question: "Should my policy go through my estate?",
        answer:
          "Beneficiary designations usually pass outside probate, but estate taxes and trusts can complicate planning. We recommend coordinating with your attorney for large estates or blended families.",
      },
      {
        question: "Can I change beneficiaries later?",
        answer:
          "Yes, in most cases you can update beneficiaries with a form from the insurer. Keeping designations current after marriage, divorce, or new children is essential to avoid unintended outcomes.",
      },
    ],
    pageRoute: "/insurance/life",
  },
  {
    id: "commercial-auto",
    title: "Commercial Auto",
    icon: "Truck",
    heroDescription:
      "Keep your business vehicles, drivers, and cargo protected with commercial auto coverage suited to your operations. We help you navigate filings, hired and non-owned auto, and fleet-rated programs when you scale.",
    coverageItems: [
      {
        name: "Fleet coverage",
        description:
          "Scheduled vehicle coverage for multiple units, often with fleet pricing and driver eligibility rules aligned with DOT or state requirements.",
      },
      {
        name: "Cargo protection",
        description:
          "Motor truck cargo and related coverages for goods you haul, with limits and deductibles matched to commodity type and contract terms.",
      },
      {
        name: "Business liability",
        description:
          "Liability for bodily injury and property damage arising from your use of covered autos in the course of business.",
      },
    ],
    faqs: [
      {
        question: "When do I need commercial auto instead of personal auto?",
        answer:
          "If vehicles are titled to a business, used to carry passengers for hire, haul tools or cargo for work, or exceed personal policy allowances, you likely need commercial coverage. Misclassifying use can void a claim.",
      },
      {
        question: "What is hired and non-owned auto coverage?",
        answer:
          "HNOA covers liability when employees use rented vehicles or their personal cars for your business. It is important for companies that do not own vehicles but still have driving exposure.",
      },
      {
        question: "Do I need special filings for interstate commerce?",
        answer:
          "Interstate carriers often need FMCSA authority, USDOT numbers, and appropriate insurance filings. Requirements depend on weight, cargo, and radius—we align coverage with how you operate.",
      },
      {
        question: "How are commercial auto premiums calculated?",
        answer:
          "Carriers weigh vehicle types, radius, driver records, garaging location, coverage limits, and loss history. Safety programs and telematics can sometimes improve pricing over time.",
      },
      {
        question: "Does commercial auto cover tools and equipment in the vehicle?",
        answer:
          "Cargo and equipment may need inland marine or tool coverage beyond the auto policy. We review what is included under physical damage and what should be scheduled separately.",
      },
    ],
    pageRoute: "/insurance/commercial-auto",
  },
  {
    id: "business",
    title: "Business Insurance",
    icon: "Briefcase",
    heroDescription:
      "Shield your company from lawsuits, property loss, and workplace injuries with coverage tailored to your industry. We bundle general liability, property, and workers compensation when it makes sense for your risk profile.",
    coverageItems: [
      {
        name: "General liability",
        description:
          "Protection against third-party claims for bodily injury, property damage, and personal and advertising injury tied to your operations.",
      },
      {
        name: "Property coverage",
        description:
          "Coverage for buildings, tenant improvements, inventory, and equipment against perils named in the policy, plus business income where selected.",
      },
      {
        name: "Workers comp",
        description:
          "Statutory benefits for employees injured on the job, including medical care and wage replacement per state law.",
      },
    ],
    faqs: [
      {
        question: "What does a business owners policy (BOP) include?",
        answer:
          "A BOP typically bundles general liability and property coverage for small to midsize businesses at a packaged rate. Eligibility depends on operations, size, and risk class.",
      },
      {
        question: "Is professional liability the same as general liability?",
        answer:
          "No. General liability covers bodily injury and property damage from your premises or operations. Professional liability (errors and omissions) covers financial loss from mistakes in professional services.",
      },
      {
        question: "Who needs workers compensation?",
        answer:
          "Most states require it once you have employees, with thresholds varying by state. Sole proprietors may elect coverage. Penalties for noncompliance can be severe, so we confirm rules for your location.",
      },
      {
        question: "How do I insure home-based business equipment?",
        answer:
          "Homeowners policies often limit business property and exclude certain business liability. A small commercial policy or endorsement may be needed for inventory, gear, and client-related claims.",
      },
      {
        question: "Can one policy cover multiple locations?",
        answer:
          "Often yes—schedules can list multiple premises and blanket property limits. Complex operations may need layered programs; we structure coverage to match how you grow.",
      },
    ],
    pageRoute: "/insurance/business",
  },
  {
    id: "specialty",
    title: "Specialty Insurance",
    icon: "Motorbike",
    heroDescription:
      "Cover motorcycles, watercraft, and recreational vehicles with policies designed for how and where you ride. We help you choose agreed value, accessory coverage, and seasonal options that fit your lifestyle.",
    coverageItems: [
      {
        name: "Motorcycle & ATV",
        description:
          "Liability, collision, comprehensive, and accessory coverage for bikes and off-road vehicles, including gear and custom parts when endorsed.",
      },
      {
        name: "Boats & jet skis",
        description:
          "Hull, liability, and towing coverage for personal watercraft and boats, with navigational limits and agreed hull values where applicable.",
      },
      {
        name: "RVs & motorhomes",
        description:
          "Full-timer and recreational use options for Class A, B, and C units, including personal effects and emergency expense coverage.",
      },
    ],
    faqs: [
      {
        question: "Is my motorcycle covered under my auto policy?",
        answer:
          "Usually no—motorcycles typically need a separate motorcycle policy. Using the wrong policy type can leave gaps in liability and physical damage.",
      },
      {
        question: "What is agreed value versus actual cash value?",
        answer:
          "Agreed value pays a set amount for a total loss if defined upfront. Actual cash value depreciates the payout. Collector bikes and many specialty vehicles benefit from agreed value when available.",
      },
      {
        question: "Does boat insurance cover me in all waters?",
        answer:
          "Policies specify navigational territories and may exclude racing or commercial use. We match territory and lay-up periods to how you actually use the vessel.",
      },
      {
        question: "Do I need RV insurance if I only use it seasonally?",
        answer:
          "You still need liability when on the road and comprehensive when stored. Seasonal or storage-only adjustments can reduce cost while keeping theft and storm damage in force.",
      },
      {
        question: "Are accessories and trailers covered automatically?",
        answer:
          "Base limits may cap accessories and trailers. We review trailer scheduling, accessory endorsements, and tow vehicle coordination so nothing important is left uninsured.",
      },
    ],
    pageRoute: "/insurance/specialty",
  },
]

export const insuranceProductById: Record<InsuranceProductId, InsuranceProduct> =
  Object.fromEntries(insuranceProducts.map((p) => [p.id, p])) as Record<
    InsuranceProductId,
    InsuranceProduct
  >
