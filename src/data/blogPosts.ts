/**
 * Blog post data structures for Five Star Rated Insurance.
 *
 * Adding a new blog post is a data-only operation:
 *   1. Append a new `BlogPost` object to `blogPosts`.
 *   2. Every post must include a required `image` (`src`, `alt`, `width`,
 *      `height`). Missing or invalid `image` throws at module load.
 *   3. The dynamic route at `/app/blog/[slug]/page.tsx` and the
 *      `/app/blog/page.tsx` index read from this file automatically.
 */

/* -------------------------------------------------------------------------- */
/*  Rich text runs                                                            */
/* -------------------------------------------------------------------------- */

/**
 * A single inline run inside a paragraph or table cell.
 * Strings render as plain text. Objects represent a citation marker
 * (rendered as a superscript anchor) or an inline link (internal or
 * external — externals get `rel="noopener noreferrer" target="_blank"`).
 */
export type RichTextRun =
  | string
  | { citation: number }
  | { link: string; text: string; external?: boolean }

export type RichText = string | RichTextRun[]

/* -------------------------------------------------------------------------- */
/*  Content blocks                                                            */
/* -------------------------------------------------------------------------- */

export type FaqItem = { question: string; answer: RichText }

export type ContentBlock =
  | { type: "h2"; text: string; id?: string }
  | { type: "p"; lead?: string; text: RichText }
  | { type: "softCta"; text: RichText }
  | { type: "midCta"; intro: string; phoneLabel: string; phoneHref: string; tail?: string }
  | {
      type: "table"
      caption: string
      columns: string[]
      rows: string[][]
      sourceLine?: RichText
    }
  | { type: "faq"; intro?: string; items: FaqItem[] }

/* -------------------------------------------------------------------------- */
/*  Post-level types                                                          */
/* -------------------------------------------------------------------------- */

export type BlogReference = {
  /** Display label, e.g. "Policygenius — Phoenix homeowners insurance data". */
  label: string
  url: string
}

export type BlogAuthor = {
  name: string
  /** Short headline shown in the byline, e.g. "Licensed Arizona Insurance Agent". */
  title: string
  /** Multi-paragraph bio shown in the AuthorBio card. */
  bio: string
  /** Public/relative path to a square headshot image. */
  avatarSrc?: string
  /** Optional structured credentials/license info (e.g. "License #AZ-8821043"). */
  credential?: string
  /** City/region for schema and bylines. */
  location?: string
  /** Profile URL for schema (e.g. LinkedIn, /about/team/...). */
  url?: string
}

export type BlogFinalCta = {
  intro: string
  /** H2 heading shown above the CTA block. */
  headline: string
  body: string
  phoneLabel: string
  phoneHref: string
  quoteHref: string
  trustLine: string
}

export type BlogKeyTakeaways = {
  /** Defaults to "Key Takeaways" when omitted. */
  title?: string
  items: RichText[]
}

/** Featured image for index card, article hero, Open Graph, and JSON-LD. */
export type BlogPostImage = {
  /** Image URL (`https://...`) or site path (`/blog/...`). */
  src: string
  alt: string
  /** Intrinsic width in pixels (e.g. 1920 for a 16:9 hero). */
  width: number
  /** Intrinsic height in pixels (e.g. 1080 for a 16:9 hero). */
  height: number
  /** Photographer name (e.g. Unsplash credit). */
  photographer?: string
  /** Photographer profile URL (e.g. `https://unsplash.com/@handle`). */
  photographerUrl?: string
}

export type BlogPost = {
  slug: string
  /** H1 / og:title heading. */
  title: string
  /** Short excerpt used on the index card and meta description fallback. */
  excerpt: string
  /** SEO meta title (defaults to `title` if omitted). */
  metaTitle?: string
  /** SEO meta description. */
  metaDescription: string
  /** Canonical category tag (e.g. "Home Insurance"). */
  category: string
  /** Estimated read time, e.g. "8 min read". */
  readTime: string
  /** Display date for the byline (e.g. "April 2026"). */
  displayDate: string
  /** ISO 8601 published date for schema and OG. */
  publishedISO: string
  /** ISO 8601 modified date for schema and OG. */
  modifiedISO: string
  author: BlogAuthor
  /** Required: index card, in-article hero, OG/Twitter, BlogPosting schema. */
  image: BlogPostImage
  keyTakeaways: BlogKeyTakeaways
  /** Ordered content blocks; renderer maps each block to its component. */
  content: ContentBlock[]
  finalCta: BlogFinalCta
  /** External references; each is rendered as a numbered citation. */
  references: BlogReference[]
  /** Footer block shown below author bio (small print). */
  footer: {
    lastUpdated: string
    copyright: string
  }
  /** Optional flag for posts not yet ready (excluded from generateStaticParams). */
  draft?: boolean
}

/* -------------------------------------------------------------------------- */
/*  Helpers (rich-text builders)                                              */
/* -------------------------------------------------------------------------- */

/** Citation marker run helper. */
export const cite = (n: number): RichTextRun => ({ citation: n })

/** External link helper (opens in new tab with safe rel). */
export const ext = (text: string, link: string): RichTextRun => ({
  link,
  text,
  external: true,
})

/** Internal link helper (same-tab navigation). */
export const intl = (text: string, link: string): RichTextRun => ({
  link,
  text,
  external: false,
})

/* -------------------------------------------------------------------------- */
/*  Posts                                                                     */
/* -------------------------------------------------------------------------- */

const phoenixHomePost: BlogPost = {
  slug: "how-to-compare-home-insurance-phoenix",
  title: "How to Compare Home Insurance Options in Phoenix, AZ (2026 Guide)",
  excerpt:
    "Phoenix home insurance averages $1,781 per year, but rates vary by over $5,000 between carriers for the same home. Here is how to compare and save.",
  metaTitle: "Compare Home Insurance in Phoenix, AZ | 2026 Guide",
  metaDescription:
    "Compare Phoenix home insurance options. See average rates, top carriers, ZIP-code pricing, and how an independent broker saves you money in 2026.",
  category: "Home Insurance",
  readTime: "8 min read",
  displayDate: "April 2026",
  publishedISO: "2026-04-25",
  modifiedISO: "2026-04-25",
  author: {
    name: "James Harlow",
    title: "Licensed Arizona Insurance Agent",
    credential: "License #AZ-8821043",
    location: "Phoenix, AZ",
    bio: "James has spent 12 years helping Phoenix-area residents protect their homes with the right insurance coverage. He is based in Phoenix, AZ, licensed with the Arizona Department of Insurance and Financial Institutions (DIFI), and specializes in homeowners, seasonal property, and landlord insurance across the Valley with deep experience in Phoenix-area hail, monsoon, and wildfire coverage.",
    // TODO: replace with real headshot at /public/images/blog/authors/james-harlow.jpg
    avatarSrc: undefined,
  },
  image: {
    src: "https://images.unsplash.com/photo-1750806267476-bc6b7216e69b",
    alt: "Modern Phoenix-area home with desert landscaping representing typical Arizona homeowner insurance properties",
    width: 1920,
    height: 1080,
    photographer: "JC Cervantes",
    photographerUrl: "https://unsplash.com/@jcnonstop87",
  },
  keyTakeaways: {
    items: [
      [
        "Phoenix home insurance averages $1,781 per year, 7% above the Arizona statewide average of $1,667 (Policygenius, 2024)",
        cite(1),
        ".",
      ],
      [
        "Identical Phoenix homes can see annual premiums ranging from $725 (Armed Forces Insurance) to over $6,700 (Travelers) depending on the carrier (MoneyGeek, 2026)",
        cite(2),
        ".",
      ],
      "Three coverage areas matter most: dwelling replacement cost, liability limits, and personal property protection.",
      [
        "Bundling home and auto with the same carrier saves an average of 20% with Farmers and similar discounts at most major carriers (Policygenius, 2024)",
        cite(1),
        ".",
      ],
    ],
  },
  content: [
    { type: "h2", text: "The Short Answer: Comparing Home Insurance in Phoenix" },
    {
      type: "p",
      text: [
        "Phoenix homeowners can compare home insurance by collecting quotes from at least three to five carriers and reviewing dwelling coverage, deductibles, and exclusions side by side. The average Phoenix home insurance policy costs $1,781 per year, but identical homes see premium variations exceeding $5,000 annually depending on the carrier (Policygenius, 2024)",
        cite(1),
        ". This guide walks Phoenix-area homeowners through what to compare, which carriers serve the Valley, and how to save.",
      ],
    },

    { type: "h2", text: "Why Home Insurance Rates Vary So Much in Phoenix" },
    {
      type: "p",
      text: [
        "The average annual home insurance premium in Phoenix is $1,781, compared to the Arizona statewide average of $1,667 and the national average of $1,754 (Policygenius, 2024)",
        cite(1),
        ". Phoenix rates run 7% above the state average due to the metro area's higher home values, monsoon storm exposure, and proximity to wildfire-risk foothill communities.",
      ],
    },
    {
      type: "p",
      text:
        "Maricopa County's average home value is $460,311 as of early 2026 (Zillow Home Value Index, March 2026). Higher home values directly increase the dwelling coverage limit needed and the premium that follows. Maricopa County also has a moderate wildfire risk profile, with 62% of properties carrying some wildfire exposure over the next 30 years (First Street, 2025).",
    },
    {
      type: "p",
      text:
        "Each insurance carrier uses its own underwriting model. The Arizona Department of Insurance and Financial Institutions (DIFI) allows carriers to file independent rate structures, which is why two homeowners on the same Scottsdale street can receive quotes that differ by hundreds of dollars annually from the same carrier — and the gap between carriers is often dramatically wider.",
    },

    {
      type: "softCta",
      text: [
        "If you want to skip the comparison work, our licensed Arizona team can shop 30+ carriers for your home in under 24 hours — ",
        intl("start your quote here", "/#quote"),
        ".",
      ],
    },

    { type: "h2", text: "Phoenix Home Insurance Rates by Carrier (2026)" },
    {
      type: "p",
      text:
        "Carrier rates vary by more than $5,000 per year for identical Phoenix homes. The table below shows verified average annual premiums in the Phoenix and Arizona markets.",
    },
    {
      type: "table",
      caption: "Phoenix Home Insurance by Carrier",
      columns: [
        "Carrier",
        "AM Best Rating",
        "Avg. Annual Premium (Phoenix)",
        "Best For",
      ],
      rows: [
        ["Armed Forces Insurance", "A-", "$725", "Active and former military"],
        ["USAA", "A++", "$1,019", "Military families and veterans"],
        ["American Family", "A", "$1,247", "Lowest non-military rates"],
        ["State Farm", "A++", "$1,414", "Customer service, agent network"],
        ["Farmers", "A", "$1,729", "Bundling auto + home (avg. 20% savings)"],
        ["Travelers", "A++", "$6,714", "Higher-value homes, broad endorsements"],
      ],
      sourceLine: [
        "Sources: Policygenius (2024)",
        cite(1),
        ", MoneyGeek (2026)",
        cite(2),
        ", AM Best (2025)",
        cite(4),
        ".",
      ],
    },
    {
      type: "p",
      text: [
        "State Farm averages $1,414 per year in Phoenix, slightly above the carrier's Arizona average of $1,362 (Policygenius, 2024)",
        cite(1),
        ". American Family is 45% cheaper than the Arizona state average and currently offers the lowest non-military rates among major carriers serving the Phoenix market. The $5,989 spread between Armed Forces Insurance and Travelers for comparable coverage shows why getting only one quote leaves significant savings on the table.",
      ],
    },

    { type: "h2", text: "What to Look For When Comparing Policies" },
    {
      type: "p",
      text:
        "Before comparing prices, confirm you are comparing equivalent coverage levels. The five items that matter most:",
    },
    {
      type: "p",
      lead: "Dwelling coverage.",
      text: [
        "The amount your insurer will pay to rebuild your home. Set this to your home's replacement cost (current construction prices), not its market value. Phoenix replacement costs average $200–$250 per square foot for standard construction (Policygenius, 2024)",
        cite(1),
        ", making typical Phoenix dwelling coverage limits $300,000–$500,000.",
      ],
    },
    {
      type: "p",
      lead: "Personal property coverage.",
      text:
        "Pays for belongings inside the home. Verify whether the policy is replacement cost (pays the cost of a new equivalent item) or actual cash value (pays depreciated value). Replacement cost runs about 10% more in premium and pays significantly more at claim time.",
    },
    {
      type: "p",
      lead: "Liability coverage.",
      text:
        "Pays legal costs if someone is injured on your property. Standard policies start at $100,000. Most Phoenix homeowners with assets to protect should carry $300,000 or higher. The premium difference between $100K and $300K liability is typically under $50 per year.",
    },
    {
      type: "p",
      lead: "Deductible.",
      text:
        "The amount you pay out-of-pocket before insurance covers a claim. Raising the deductible from $1,000 to $2,500 reduces premium by an average of 11% (Bankrate, 2024). Arizona policies in wildfire-prone or hail-exposed areas may include a separate, higher deductible for those specific perils.",
    },
    {
      type: "p",
      lead: "Exclusions.",
      text: [
        "Standard Arizona home insurance excludes flood damage. Phoenix-area homes near washes, retention basins, or FEMA-designated flood zones in Tempe, Glendale, and Peoria need separate flood insurance through the National Flood Insurance Program (NFIP)",
        cite(5),
        " or a private flood carrier. Earthquake coverage is also excluded by default and is generally unnecessary in Phoenix given the region's low seismic risk (FEMA, 2024).",
      ],
    },

    { type: "h2", text: "How Does Single-Carrier vs. Brokerage Shopping Compare?" },
    {
      type: "p",
      text: "Getting one quote is faster, but it rarely produces the lowest price. The data comparison:",
    },
    {
      type: "table",
      caption: "Single Carrier vs. Independent Brokerage",
      columns: ["Factor", "Single Carrier", "Independent Brokerage"],
      rows: [
        ["Quotes received", "1", "5–30+"],
        [
          "Time required",
          "15–30 min",
          "15–30 min (broker shops on your behalf)",
        ],
        [
          "Pricing leverage",
          "None — you take the carrier's number",
          "Carriers compete for your business",
        ],
        [
          "Non-standard risks (prior claims, older roof)",
          "Often declined",
          "Access to specialty markets",
        ],
        [
          "Best for",
          "Existing loyal customer",
          "Most homeowners — especially new buyers",
        ],
      ],
    },
    {
      type: "p",
      text:
        "The single biggest financial mistake Phoenix homeowners make is not collecting at least three quotes. The verified $5,989 spread between the cheapest and most expensive carriers in the Phoenix market is real money — and it does not require sacrificing coverage quality.",
    },

    { type: "h2", text: "Phoenix Climate and Property Risks That Affect Your Premium" },
    {
      type: "p",
      text: [
        "Phoenix's official monsoon season runs June 15 through September 30 (National Weather Service, NOAA)",
        cite(6),
        ". Average monsoon rainfall is 2.43 inches, but localized hail and damaging wind events occur within thunderstorms and can cause significant property damage. Phoenix recorded the costliest hail event in U.S. history on October 5, 2010, generating nearly $3 billion in damages (NOAA / Arizona State University, 2023)",
        cite(6),
        ".",
      ],
    },
    {
      type: "p",
      text: [
        "Wildfire risk affects Phoenix-area foothill communities including Cave Creek, Carefree, Anthem, and parts of north Scottsdale. The Arizona DIFI maintains a Public Protection Classification (PPC) database identifying 38 Arizona communities classified 8B or worse for wildfire risk (DIFI, 2024)",
        cite(3),
        ". Homeowners in these communities pay materially higher premiums and may face non-renewal in some markets.",
      ],
    },
    {
      type: "p",
      text: [
        "Phoenix records an average of 111 days per year above 100°F and 21 days above 110°F (NOAA 30-year normals, 1991–2020)",
        cite(6),
        ". Extreme heat accelerates roof deterioration, HVAC failure, and pool equipment damage — all of which factor into how carriers price Phoenix policies. Roof age is one of the strongest pricing variables in the Phoenix market: roofs over 15 years old often trigger surcharges or coverage restrictions.",
      ],
    },

    {
      type: "midCta",
      intro:
        "Phoenix-area home with an older roof, prior claim, or wildfire exposure?",
      phoneLabel: "(602) 555-0190",
      phoneHref: "tel:+16025550190",
      tail: "to speak with a licensed Arizona broker.",
    },

    { type: "h2", text: "Common Mistakes Phoenix Homeowners Make When Comparing Insurance" },
    {
      type: "p",
      text:
        'Comparing on price alone is the single most common mistake. A policy that looks $300 cheaper per year may carry a $5,000 higher deductible or exclude roof replacement after hail. The next sentence to ask: "What is the same-coverage premium difference between these two carriers?"',
    },
    { type: "p", text: "Other frequent errors:" },
    {
      type: "p",
      lead: "Underinsuring the dwelling.",
      text:
        "Phoenix homeowners often confuse market value with replacement cost. Market value includes land, location, and demand. Replacement cost is what it would take to rebuild from the ground up. The two numbers are usually different by 20–40% in Phoenix.",
    },
    {
      type: "p",
      lead: "Skipping liability review.",
      text:
        "Most policies default to $100,000 in personal liability. Raising to $300,000 typically costs $30–$50 per year and significantly reduces personal financial exposure if someone is injured on your property.",
    },
    {
      type: "p",
      lead: "Not asking about discounts.",
      text:
        "Common Arizona discounts include security system installation, monitored alarms, newer roof age (under 10 years), claims-free history, and bundling auto and home. Stacking discounts often reduces a $1,800 annual premium by $300–$500 per year.",
    },
    {
      type: "p",
      lead: "Not reviewing the policy after major changes.",
      text:
        "Renovations, pool installation, ADU construction, or a change in occupants (renters, adult children moving back, home-based business) all change your coverage needs. Annual policy reviews catch these gaps.",
    },

    { type: "h2", text: "When Should I Speak With an Insurance Professional?" },
    {
      type: "p",
      text:
        "Speak with a licensed agent if any of the following apply: your home is over 20 years old, you have a flat or tile roof common in Scottsdale and Ahwatukee, you live in a high-wildfire-risk foothill community, you have had a claim in the past three years, your current carrier has non-renewed you, or you are buying your first home in the Phoenix metro.",
    },
    {
      type: "p",
      text:
        "Working with an independent broker like Protegrity Insurance gives you access to carriers that write non-standard risks at fair rates rather than spending hours being declined or quoted high by direct-to-consumer carriers. Phoenix homeowners with prior claims often save $400–$1,200 per year compared to direct quotes by using a broker who knows which carriers welcome their risk profile.",
    },
    {
      type: "p",
      text: [
        "If you are comparing home insurance options in Phoenix, visit our ",
        intl("Home Insurance page", "/insurance/home"),
        " to review coverage options and get connected with licensed Arizona agents through Protegrity Insurance.",
      ],
    },

    { type: "h2", text: "Frequently Asked Questions: Comparing Home Insurance in Phoenix" },
    {
      type: "faq",
      items: [
        {
          question: "How much does home insurance cost in Phoenix, AZ?",
          answer: [
            "Phoenix home insurance costs an average of $1,781 per year, or about $148 per month, according to Policygenius 2024 data",
            cite(1),
            ". Rates vary significantly by ZIP code, home size, roof age, and carrier — Phoenix premiums for identical homes range from $725 to $6,714 annually. The Arizona state average is $1,667 per year, putting Phoenix 7% above the state baseline.",
          ],
        },
        {
          question: "Does Arizona home insurance cover monsoon or wind damage?",
          answer:
            "Standard Arizona HO-3 home insurance policies cover wind and storm damage from monsoons, including roof damage, broken windows, and water intrusion from wind-driven rain. Some carriers apply a separate wind or hail deductible in higher-risk areas. Phoenix's costliest hail event on record caused nearly $3 billion in damage (October 5, 2010), making wind and hail coverage essential for Valley homeowners.",
        },
        {
          question: "Is flood damage covered by home insurance in Arizona?",
          answer: [
            "Flood damage is excluded from standard home insurance policies in Arizona, including all HO-3 policies. Separate flood insurance is available through the National Flood Insurance Program (NFIP)",
            cite(5),
            " or private carriers starting around $400 per year for Phoenix-area homes outside high-risk flood zones. Homes in FEMA-designated Special Flood Hazard Areas in Tempe, Glendale, or Peoria require flood coverage if mortgaged.",
          ],
        },
        {
          question: "How many home insurance quotes should I get in Phoenix?",
          answer: [
            "Get at least three to five home insurance quotes before making a decision. Phoenix data shows premiums for the same home range from $725 to over $6,700 between carriers — a $5,989 spread (Policygenius, 2024",
            cite(1),
            "; MoneyGeek, 2026",
            cite(2),
            "). An independent brokerage like Protegrity Insurance compares 30 or more carriers in one process, eliminating the need to request quotes individually.",
          ],
        },
        {
          question: "What discounts are available on Arizona home insurance?",
          answer:
            "Arizona homeowners qualify for bundling discounts (averaging 20% with Farmers when combining home and auto), newer roof discounts (typically 15–20% for roofs under 10 years), monitored security system discounts (5–15%), claims-free history discounts (5–10%), and protective device discounts (smoke detectors, deadbolts). Stacking available discounts can reduce a $1,800 annual premium by $300–$500 per year.",
        },
        {
          question: "What is the Arizona DIFI and how does it protect homeowners?",
          answer: [
            "The Arizona Department of Insurance and Financial Institutions (DIFI)",
            cite(3),
            " regulates insurance carriers operating in Arizona. DIFI reviews carrier rate filings, requires premiums to be based on Arizona-specific loss experience, handles consumer complaints, and monitors carrier financial solvency. Phoenix homeowners can verify a carrier's license, file complaints, or review carrier complaint indexes at ",
            ext("difi.az.gov", "https://difi.az.gov"),
            ".",
          ],
        },
        {
          question: "Can I get home insurance in Phoenix with a prior claim?",
          answer:
            "Yes, Phoenix homeowners with prior claims can obtain home insurance, though options narrow with a recent claim history. Some carriers specialize in non-standard risks and will write policies after recent claims at fair rates. Working with an independent broker increases approval odds significantly compared to applying directly with a single carrier, where homeowners with two or more recent claims are commonly declined outright.",
        },
      ],
    },
  ],
  finalCta: {
    headline: "Get Your Free Phoenix Home Insurance Quote Today",
    intro:
      "Five Star Rated Insurance simplifies the process by connecting you with licensed Arizona agents through Protegrity Insurance. Instead of getting one quote, compare multiple carriers at once to find the best combination of price and coverage for your Phoenix-area home.",
    body: "",
    phoneLabel: "(602) 555-0190",
    phoneHref: "tel:+16025550190",
    quoteHref: "/#quote",
    trustLine:
      "5-star rated · 30+ top-rated carriers · Licensed Arizona agents · Monsoon and hail claim specialists",
  },
  references: [
    {
      label: "Policygenius — Phoenix homeowners insurance data",
      url: "https://www.policygenius.com/homeowners-insurance/arizona/phoenix/",
    },
    {
      label: "MoneyGeek — Average cost of home insurance in Arizona",
      url: "https://www.moneygeek.com/insurance/homeowners/average-cost-home-insurance-arizona/",
    },
    {
      label: "Arizona Department of Insurance and Financial Institutions (DIFI)",
      url: "https://difi.az.gov",
    },
    {
      label: "National Association of Insurance Commissioners (NAIC)",
      url: "https://content.naic.org",
    },
    {
      label: "National Flood Insurance Program (NFIP)",
      url: "https://www.floodsmart.gov",
    },
    {
      label: "NOAA National Weather Service — Phoenix forecast office",
      url: "https://www.weather.gov/psr/",
    },
  ],
  footer: {
    lastUpdated: "Last updated: April 2026",
    copyright:
      "© 2026 Five Star Rated Insurance. All rights reserved. Five Star Rated Insurance is an authorized marketing partner of Protegrity Insurance Brokerage.",
  },
}

/* -------------------------------------------------------------------------- */
/*  Public exports                                                            */
/* -------------------------------------------------------------------------- */

export const blogPosts: BlogPost[] = [phoenixHomePost]

function assertBlogPostsHaveRequiredImages(posts: readonly BlogPost[]): void {
  for (const post of posts) {
    if (!post.image) {
      throw new Error(`Blog post "${post.slug}": required field "image" is missing.`)
    }
    if (!post.image.src?.trim()) {
      throw new Error(`Blog post "${post.slug}": image.src is required.`)
    }
    if (!post.image.alt?.trim()) {
      throw new Error(`Blog post "${post.slug}": image.alt is required.`)
    }
    if (
      !Number.isFinite(post.image.width) ||
      post.image.width < 1 ||
      !Number.isFinite(post.image.height) ||
      post.image.height < 1
    ) {
      throw new Error(
        `Blog post "${post.slug}": image.width and image.height must be positive numbers.`,
      )
    }
  }
}

assertBlogPostsHaveRequiredImages(blogPosts)

/** All non-draft posts, newest first by `publishedISO`. */
export const publishedBlogPosts: BlogPost[] = blogPosts
  .filter((post) => !post.draft)
  .slice()
  .sort((a, b) => b.publishedISO.localeCompare(a.publishedISO))

/** Lookup by slug; returns `undefined` if no post matches. */
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug && !post.draft)
}

/** All published slugs (used by `generateStaticParams`). */
export function getAllBlogSlugs(): string[] {
  return publishedBlogPosts.map((post) => post.slug)
}
