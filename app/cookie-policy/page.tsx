/**
 * DRAFT — ATTORNEY REVIEW REQUIRED BEFORE PRODUCTION USE.
 *
 * Source document: Cookie Policy for Five Star Rated Insurance
 * (fivestarratedinsurance.com), an Arizona marketing and lead generation
 * company that refers consumer leads to Protegrity Insurance Brokerage.
 *
 * Unknowns are flagged inline with TODO: VERIFY comments so the business
 * owner and reviewing attorney can confirm or replace each item.
 *
 * Coordinated with: /privacy-policy (Privacy Policy),
 * /tcpa-consent-disclosure (TCPA Consent Disclosure), /terms-of-service
 * (Terms of Service), and /do-not-sell-or-share (CCPA opt-out). Category
 * definitions and retention periods must remain consistent across these
 * documents and the cookie consent banner/modal.
 */

import type { Metadata } from "next"
import Link from "next/link"

import { Footer, Header } from "@/components/layout"
import { PrintButton } from "./print-button"
import { ManageCookiesButton } from "./manage-cookies-button"

const SITE_URL = "https://www.fivestarratedinsurance.com"
const CANONICAL_PATH = "/cookie-policy"

const EFFECTIVE_DATE = "April 18, 2026"
const LAST_UPDATED = "April 18, 2026"
const POLICY_VERSION = "v1.0"

const PRIVACY_EMAIL = "privacy@fivestarratedinsurance.com"

export const metadata: Metadata = {
  title: "Cookie Policy | Five Star Rated Insurance",
  description:
    "Cookie Policy for Five Star Rated Insurance describing the cookies and similar tracking technologies we use, how to manage them, and how we honor Global Privacy Control signals.",
  alternates: {
    canonical: CANONICAL_PATH,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Cookie Policy | Five Star Rated Insurance",
    description:
      "How Five Star Rated Insurance uses cookies, which categories require consent, and how you can manage your preferences.",
    url: `${SITE_URL}${CANONICAL_PATH}`,
    siteName: "Five Star Rated Insurance",
    locale: "en_US",
    type: "article",
  },
}

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cookie Policy",
    headline: "Five Star Rated Insurance Cookie Policy",
    url: `${SITE_URL}${CANONICAL_PATH}`,
    description:
      "Describes the cookies and similar tracking technologies used on fivestarratedinsurance.com, how the site honors Global Privacy Control signals, and how users can manage their cookie preferences.",
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    version: POLICY_VERSION,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "Five Star Rated Insurance",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Five Star Rated Insurance",
      url: SITE_URL,
    },
    about: [
      { "@type": "Thing", name: "Cookies and tracking technologies" },
      { "@type": "Thing", name: "Global Privacy Control (GPC)" },
      { "@type": "Thing", name: "California Consumer Privacy Act (CCPA/CPRA)" },
    ],
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Cookie Policy",
          item: `${SITE_URL}${CANONICAL_PATH}`,
        },
      ],
    },
  },
]

type TocItem = { id: string; label: string }

const tableOfContents: TocItem[] = [
  { id: "summary", label: "Summary at a Glance" },
  { id: "what-are-cookies", label: "1. What Are Cookies?" },
  { id: "categories", label: "2. Types of Cookies We Use" },
  { id: "inventory", label: "3. Cookie Inventory" },
  { id: "third-party", label: "4. Third-Party Cookies" },
  { id: "manage", label: "5. How to Manage Cookies" },
  { id: "consequences", label: "6. Consequences of Disabling Cookies" },
  { id: "dnt", label: "7. Do Not Track Signals" },
  { id: "california", label: "8. California Residents" },
  { id: "changes", label: "9. Changes to This Policy" },
  { id: "contact", label: "10. Contact" },
  { id: "related", label: "11. Related Documents" },
]

type CookieRow = {
  name: string
  provider: string
  category: string
  purpose: string
  duration: string
  note?: string
}

const cookieInventory: CookieRow[] = [
  {
    name: "fsri_consent",
    provider: "First-party (Five Star Rated Insurance)",
    category: "Strictly Necessary",
    purpose:
      "Stores your cookie consent choices (which categories you accepted or rejected) so we can honor them on future visits.",
    duration: "12 months",
  },
  {
    name: "_ga",
    provider: "Google",
    category: "Analytics",
    purpose:
      "Distinguishes unique visitors so Google Analytics 4 can report aggregate site usage.",
    duration: "2 years",
  },
  {
    name: "_ga_<container-id>",
    provider: "Google",
    category: "Analytics",
    purpose:
      "Persists session state for Google Analytics 4 so page views within a session are correctly attributed.",
    duration: "2 years",
    note: "The suffix varies per GA4 property.",
  },
  {
    name: "next-* / __next_*",
    provider: "First-party (Next.js framework)",
    category: "Strictly Necessary",
    purpose:
      "Supports core site behavior such as routing, prefetching, and middleware. Set by the Next.js framework.",
    duration: "Session or short-lived",
  },
  // TODO: VERIFY - add chatbot session cookie(s) once the exact names are
  // confirmed. Likely candidates: a first-party session id for the Ava
  // conversation and any vendor identifier set by the chatbot platform.
  {
    name: "ava_session",
    provider: "First-party (Ava chatbot)",
    category: "Functional",
    purpose:
      "Keeps your chat assistant (Ava) conversation stitched together across page loads and short breaks in the session.",
    duration: "30 days",
    note: "TODO: VERIFY - confirm the cookie name and duration with the chatbot vendor.",
  },
]

/**
 * TODO: VERIFY - once the ad-pixel audit is complete, append the relevant
 * rows below (examples shown for convenience; do not enable until counsel
 * and the business owner confirm each pixel is live):
 *
 *  - { name: "_fbp", provider: "Meta", category: "Advertising", purpose: "Meta Pixel visitor identification", duration: "3 months" }
 *  - { name: "_gcl_au", provider: "Google", category: "Advertising", purpose: "Google Ads conversion linker", duration: "3 months" }
 *  - { name: "_ttp", provider: "TikTok", category: "Advertising", purpose: "TikTok Pixel visitor identification", duration: "13 months" }
 *  - { name: "li_sugr", provider: "LinkedIn", category: "Advertising", purpose: "LinkedIn Insight Tag", duration: "3 months" }
 */

export default function CookiePolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1 bg-background">
          <section
            aria-labelledby="page-title"
            className="border-b border-border bg-white print:border-b-0"
          >
            <div className="container mx-auto max-w-4xl px-4 py-10 md:py-14">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-navy/70">
                Legal Disclosure
              </p>
              <h1
                id="page-title"
                className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl"
              >
                Cookie Policy
              </h1>
              <dl className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-3">
                <div className="flex flex-wrap gap-2">
                  <dt className="font-semibold text-foreground">Effective Date:</dt>
                  <dd>{EFFECTIVE_DATE}</dd>
                </div>
                <div className="flex flex-wrap gap-2">
                  <dt className="font-semibold text-foreground">Last Updated:</dt>
                  <dd>{LAST_UPDATED}</dd>
                </div>
                <div className="flex flex-wrap gap-2">
                  <dt className="font-semibold text-foreground">Version:</dt>
                  <dd>{POLICY_VERSION}</dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                <Link
                  href="/privacy-policy"
                  className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                >
                  Privacy Policy
                </Link>
                <span aria-hidden className="text-muted-foreground">
                  /
                </span>
                <Link
                  href="/tcpa-consent-disclosure"
                  className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                >
                  TCPA Consent Disclosure
                </Link>
                <span aria-hidden className="text-muted-foreground">
                  /
                </span>
                <Link
                  href="/do-not-sell-or-share"
                  className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                >
                  Do Not Sell or Share
                </Link>
                <span className="ml-auto print:hidden">
                  <PrintButton />
                </span>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3 print:hidden">
                <ManageCookiesButton />
                <p className="text-xs text-muted-foreground">
                  You can change your cookie choices at any time.
                </p>
              </div>
            </div>
          </section>

          <div className="container mx-auto grid max-w-6xl gap-10 px-4 py-10 md:py-14 lg:grid-cols-[minmax(0,1fr)_260px]">
            <article
              aria-labelledby="page-title"
              className="order-2 space-y-12 text-base leading-relaxed text-foreground lg:order-1"
            >
              {/* Summary */}
              <section id="summary" className="scroll-mt-24">
                <h2
                  id="summary-heading"
                  className="font-heading text-2xl font-bold text-foreground md:text-3xl"
                >
                  Summary at a Glance
                </h2>
                <div
                  role="note"
                  aria-labelledby="summary-heading"
                  className="mt-4 rounded-lg border border-navy/20 bg-yellow-50 p-5 text-sm leading-relaxed text-foreground md:text-base"
                >
                  <ul className="list-disc space-y-2 pl-5">
                    <li>
                      <strong>What cookies are.</strong> Small files that
                      websites save on your device to remember settings, keep
                      you signed in, measure site usage, or support advertising.
                    </li>
                    <li>
                      <strong>Why we use them.</strong> To keep the site
                      working, remember your preferences, measure performance,
                      and, where we have your consent, support any advertising
                      we may run.
                    </li>
                    <li>
                      <strong>How to control them.</strong> Use the on-site
                      preference center (see the &quot;Manage cookie
                      preferences&quot; control near the top of this page or
                      in the footer) to open the preferences modal. You can
                      also use your browser settings and industry opt-out
                      tools — see Section 5.
                    </li>
                    <li>
                      <strong>GPC.</strong> We recognize the Global Privacy
                      Control signal. If your browser sends GPC, we
                      automatically treat it as an opt-out of analytics and
                      advertising cookies.
                    </li>
                  </ul>
                </div>
              </section>

              {/* 1. What are cookies */}
              <section id="what-are-cookies" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  1. What Are Cookies?
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    &quot;Cookies&quot; are small text files that a website saves
                    in your browser so it can recognize your device on future
                    visits. Cookies can be set by the site you are visiting
                    (first-party cookies) or by a third-party service embedded
                    in that site (third-party cookies), such as Google Analytics.
                  </p>
                  <p>
                    In this policy we use &quot;cookies&quot; as shorthand for a
                    family of related tracking technologies, including:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      <strong>HTTP cookies.</strong> Standard cookies stored by
                      your browser.
                    </li>
                    <li>
                      <strong>Pixels and beacons.</strong> Tiny images or
                      scripts loaded from third parties that let those parties
                      detect a page view. Common examples include the Meta
                      Pixel and the Google Ads tag.
                    </li>
                    <li>
                      <strong>Local storage and session storage.</strong>{" "}
                      Browser storage APIs similar to cookies but scoped to a
                      specific site. We use these for short-lived UI state.
                    </li>
                    <li>
                      <strong>Software development kits (SDKs).</strong> Code
                      we embed from third parties (such as our chatbot
                      platform) that may set its own identifiers.
                    </li>
                  </ul>
                </div>
              </section>

              {/* 2. Categories */}
              <section id="categories" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  2. Types of Cookies We Use
                </h2>
                <div className="mt-4 space-y-8">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      2.1 Strictly Necessary (always on)
                    </h3>
                    <p className="mt-3">
                      Strictly Necessary cookies are required for the site to
                      function. You cannot turn these off through the
                      preferences modal; disabling them in your browser will
                      break core features. These cookies are exempt from
                      consent requirements under most laws.
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-6">
                      <li>Session management and page routing.</li>
                      <li>Security and fraud prevention.</li>
                      <li>Load balancing and basic performance.</li>
                      <li>Storage of your cookie consent preferences.</li>
                      <li>Form submission integrity and CSRF protection.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      2.2 Functional (optional)
                    </h3>
                    <p className="mt-3">
                      Functional cookies let the site remember choices you make
                      so your experience is smoother on return visits. They do
                      not track you across other sites. You can turn these off
                      without breaking core functionality.
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-6">
                      <li>User interface preferences (e.g. collapsed panels).</li>
                      <li>Chatbot session persistence for Ava.</li>
                      <li>Language or regional preferences.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      2.3 Analytics (optional, require consent)
                    </h3>
                    <p className="mt-3">
                      Analytics cookies help us understand how visitors find
                      and use the site so we can improve it. Aggregated
                      analytics data is not used to identify you as an
                      individual. We use:
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-6">
                      <li>
                        <strong>Google Analytics 4.</strong> Measures page
                        views, traffic sources, session engagement, and
                        conversion events. IP addresses are anonymized before
                        storage.
                      </li>
                      {/* TODO: VERIFY - list any additional analytics tools (Hotjar, Microsoft Clarity, Mixpanel, etc.) once confirmed. */}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      2.4 Advertising and Targeting (optional, require consent)
                    </h3>
                    <div className="mt-3 space-y-3">
                      <p className="rounded-md border border-navy/20 bg-card p-4 text-sm">
                        <strong>Current status:</strong> We do not currently
                        use advertising or targeting cookies. If this changes,
                        we will update this policy and request consent before
                        any advertising cookie fires.{" "}
                        {/* TODO: VERIFY - confirm the ad pixel audit (Meta, Google Ads, TikTok, LinkedIn) with engineering and marketing; update this section and the cookie inventory when new pixels are added. */}
                      </p>
                      <p>
                        If we add advertising or targeting cookies in the
                        future, they may include platforms such as the Meta
                        Pixel, Google Ads remarketing tags, TikTok Pixel, or
                        LinkedIn Insight Tag. Those cookies would support:
                      </p>
                      <ul className="list-disc space-y-2 pl-6">
                        <li>Showing you relevant ads on other sites.</li>
                        <li>Measuring ad campaign performance.</li>
                        <li>Retargeting visitors who did not complete a form.</li>
                      </ul>
                      <p>
                        Under the California Consumer Privacy Act (as amended
                        by the California Privacy Rights Act), allowing these
                        cookies may constitute &quot;sharing&quot; of your
                        personal information for cross-context behavioral
                        advertising. California residents can opt out at any
                        time via the{" "}
                        <Link
                          href="/do-not-sell-or-share"
                          className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                        >
                          Do Not Sell or Share My Personal Information
                        </Link>{" "}
                        page or by enabling Global Privacy Control in their
                        browser.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. Inventory */}
              <section id="inventory" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  3. Cookie Inventory
                </h2>
                <p className="mt-4">
                  The table below lists the cookies currently set by or through
                  the Site. Cookie names, providers, and durations can change
                  as vendors update their products. If you notice a cookie we
                  have not listed, please contact us at {PRIVACY_EMAIL} so we
                  can update this inventory.
                </p>
                <div className="mt-4 overflow-x-auto rounded-lg border border-border">
                  <table className="min-w-full divide-y divide-border text-left text-sm">
                    <caption className="sr-only">
                      Cookies set by or through fivestarratedinsurance.com,
                      with provider, category, purpose, and duration.
                    </caption>
                    <thead className="bg-muted/50 text-foreground">
                      <tr>
                        <th scope="col" className="px-4 py-3 font-semibold">
                          Cookie name
                        </th>
                        <th scope="col" className="px-4 py-3 font-semibold">
                          Provider
                        </th>
                        <th scope="col" className="px-4 py-3 font-semibold">
                          Category
                        </th>
                        <th scope="col" className="px-4 py-3 font-semibold">
                          Purpose
                        </th>
                        <th scope="col" className="px-4 py-3 font-semibold">
                          Duration
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-white">
                      {cookieInventory.map((row) => (
                        <tr key={`${row.name}-${row.provider}`} className="align-top">
                          <td className="px-4 py-3 font-mono text-xs text-foreground">
                            {row.name}
                          </td>
                          <td className="px-4 py-3 text-foreground">{row.provider}</td>
                          <td className="px-4 py-3 text-foreground">{row.category}</td>
                          <td className="px-4 py-3 text-foreground">
                            {row.purpose}
                            {row.note ? (
                              <span className="mt-1 block text-xs text-muted-foreground">
                                {row.note}
                              </span>
                            ) : null}
                          </td>
                          <td className="px-4 py-3 text-foreground">{row.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  {/* TODO: VERIFY - complete a full technical audit (for
                  example, using a browser dev-tools recording and Cookie
                  Database sync) and expand this table to cover every cookie
                  actually set on the production site. */}
                  This inventory is maintained by Five Star Rated Insurance and
                  updated when new services are added or removed.
                </p>
              </section>

              {/* 4. Third-party */}
              <section id="third-party" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  4. Third-Party Cookies
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    Some cookies are set by third-party services embedded in
                    the Site. Those third parties process information under
                    their own privacy policies, which we link below. We
                    recommend reviewing them if you want full detail on how
                    those parties use cookies.
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      <strong>Google</strong> (Google Analytics 4, and Google
                      Ads if enabled):{" "}
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                      >
                        policies.google.com/privacy
                      </a>
                      .
                    </li>
                    {/*
                      TODO: VERIFY - only uncomment the vendor rows below
                      after confirming the corresponding pixel is installed
                      in production and approved by counsel:

                      <li>
                        <strong>Meta</strong> (Meta Pixel):{" "}
                        <a href="https://www.facebook.com/privacy/policy" ...>
                          facebook.com/privacy/policy
                        </a>.
                      </li>
                      <li>
                        <strong>TikTok</strong> (TikTok Pixel):{" "}
                        <a href="https://www.tiktok.com/legal/privacy-policy" ...>
                          tiktok.com/legal/privacy-policy
                        </a>.
                      </li>
                      <li>
                        <strong>LinkedIn</strong> (LinkedIn Insight Tag):{" "}
                        <a href="https://www.linkedin.com/legal/privacy-policy" ...>
                          linkedin.com/legal/privacy-policy
                        </a>.
                      </li>
                    */}
                  </ul>
                </div>
              </section>

              {/* 5. Manage */}
              <section id="manage" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  5. How to Manage Cookies
                </h2>
                <div className="mt-4 space-y-6">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      5.1 On-site preferences
                    </h3>
                    <p className="mt-3">
                      Use our on-site preference center to accept or reject
                      categories of cookies at any time:
                    </p>
                    <div className="mt-3">
                      <ManageCookiesButton />
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      The same &quot;Cookie Preferences&quot; link is available
                      in the site footer on every page.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      5.2 Browser controls
                    </h3>
                    <p className="mt-3">
                      Most browsers let you view, block, or delete cookies in
                      their settings. The steps vary by browser and version;
                      the vendor documentation links below are a good starting
                      point:
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-6">
                      <li>
                        <strong>Google Chrome:</strong>{" "}
                        <a
                          href="https://support.google.com/chrome/answer/95647"
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                        >
                          support.google.com/chrome/answer/95647
                        </a>
                      </li>
                      <li>
                        <strong>Apple Safari:</strong>{" "}
                        <a
                          href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                        >
                          support.apple.com/guide/safari
                        </a>
                      </li>
                      <li>
                        <strong>Mozilla Firefox:</strong>{" "}
                        <a
                          href="https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer"
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                        >
                          support.mozilla.org/kb/cookies
                        </a>
                      </li>
                      <li>
                        <strong>Microsoft Edge:</strong>{" "}
                        <a
                          href="https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                        >
                          support.microsoft.com/microsoft-edge
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      5.3 Industry opt-out tools
                    </h3>
                    <ul className="mt-3 list-disc space-y-2 pl-6">
                      <li>
                        <strong>Network Advertising Initiative:</strong>{" "}
                        <a
                          href="https://optout.networkadvertising.org/"
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                        >
                          optout.networkadvertising.org
                        </a>
                      </li>
                      <li>
                        <strong>Digital Advertising Alliance:</strong>{" "}
                        <a
                          href="https://optout.aboutads.info/"
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                        >
                          optout.aboutads.info
                        </a>
                      </li>
                      <li>
                        <strong>Your Online Choices (EU):</strong>{" "}
                        <a
                          href="https://www.youronlinechoices.eu/"
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                        >
                          youronlinechoices.eu
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      5.4 Global Privacy Control (GPC)
                    </h3>
                    <p className="mt-3">
                      We recognize the Global Privacy Control (GPC) signal. If
                      your browser sends GPC, we treat it as an opt-out of
                      analytics and advertising cookies for that browser and
                      device. You do not need to interact with our banner to
                      have GPC honored. Learn more at{" "}
                      <a
                        href="https://globalprivacycontrol.org/"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                      >
                        globalprivacycontrol.org
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </section>

              {/* 6. Consequences */}
              <section id="consequences" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  6. Consequences of Disabling Cookies
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    Blocking or deleting <strong>Strictly Necessary</strong>{" "}
                    cookies in your browser may break core functionality on the
                    Site, including form submissions, session persistence, and
                    the cookie preferences you have saved.
                  </p>
                  <p>
                    Disabling <strong>Functional</strong>,{" "}
                    <strong>Analytics</strong>, or <strong>Advertising</strong>{" "}
                    cookies will not affect basic Site use. You can continue
                    browsing, submit forms, and chat with Ava. Some features
                    that rely on remembering your preferences (such as a saved
                    chat session) may reset each time you visit.
                  </p>
                </div>
              </section>

              {/* 7. DNT */}
              <section id="dnt" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  7. Do Not Track Signals
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    Some browsers offer a &quot;Do Not Track&quot; (DNT)
                    setting. Because DNT has no consistent industry standard,
                    the Site <strong>does not currently respond</strong> to DNT
                    signals. We do, however, respond to Global Privacy Control
                    signals as described above.
                  </p>
                </div>
              </section>

              {/* 8. California */}
              <section id="california" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  8. California Residents
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    The California Consumer Privacy Act, as amended by the
                    California Privacy Rights Act (CCPA/CPRA), treats certain
                    cookie-based tracking as &quot;sale&quot; or
                    &quot;sharing&quot; of personal information. California
                    residents may opt out at any time by:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      Using the on-site preferences control (set Advertising
                      and Analytics to off).
                    </li>
                    <li>
                      Submitting a request through the{" "}
                      <Link
                        href="/do-not-sell-or-share"
                        className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                      >
                        Do Not Sell or Share My Personal Information
                      </Link>{" "}
                      page.
                    </li>
                    <li>
                      Enabling Global Privacy Control in a supported browser or
                      extension.
                    </li>
                  </ul>
                  <p>
                    For a full description of California privacy rights
                    (including access, deletion, correction, and limitation of
                    sensitive personal information), see the California section
                    of our{" "}
                    <Link
                      href="/privacy-policy#state-rights"
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* 9. Changes */}
              <section id="changes" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  9. Changes to This Policy
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    We may update this Cookie Policy from time to time. When we
                    make material changes, we will post the updated document on
                    this page and revise the &quot;Effective Date&quot; and
                    &quot;Last Updated&quot; at the top. For material changes
                    that add new categories of tracking or new third-party
                    recipients, we will re-surface the consent banner so you
                    can review and update your choices.
                  </p>
                </div>
              </section>

              {/* 10. Contact */}
              <section id="contact" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  10. Contact
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    Questions about cookies or this policy? Contact our Privacy
                    Team at{" "}
                    <a
                      href={`mailto:${PRIVACY_EMAIL}`}
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      {PRIVACY_EMAIL}
                    </a>
                    .
                  </p>
                </div>
              </section>

              {/* 11. Related */}
              <section id="related" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  11. Related Documents
                </h2>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      Privacy Policy
                    </Link>{" "}
                    — full description of how we collect, use, and share
                    information, and the privacy rights available to residents
                    of California and other states.
                  </li>
                  <li>
                    <Link
                      href="/tcpa-consent-disclosure"
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      TCPA Consent Disclosure
                    </Link>{" "}
                    — how we obtain and honor consent to contact you by phone,
                    text, and email.
                  </li>
                  <li>
                    <Link
                      href="/do-not-sell-or-share"
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      Do Not Sell or Share My Personal Information
                    </Link>{" "}
                    — California opt-out form for sale and sharing of personal
                    information.
                  </li>
                  <li>
                    <Link
                      href="/terms-of-service"
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      Terms of Service
                    </Link>{" "}
                    — the overall legal agreement governing use of the Site.
                  </li>
                </ul>
              </section>

              <footer className="border-t border-border pt-6 text-xs text-muted-foreground">
                <p>
                  Effective Date: {EFFECTIVE_DATE}. Last Updated: {LAST_UPDATED}.
                  Version {POLICY_VERSION}.
                </p>
              </footer>
            </article>

            <aside
              aria-label="Table of contents"
              className="order-1 h-fit rounded-lg border border-border bg-card p-5 text-sm lg:order-2 lg:sticky lg:top-24 print:hidden"
            >
              <h2 className="font-heading text-base font-bold text-foreground">
                Table of Contents
              </h2>
              <nav aria-label="On this page" className="mt-3">
                <ol className="space-y-2">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block rounded-sm text-navy underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

/**
 * PRE-PUBLICATION CHECKLIST (business owner must verify before production):
 *
 * [ ] Full cookie audit completed. Enumerate every cookie, pixel, local-
 *     storage key, and SDK identifier actually set on production. Update
 *     the `cookieInventory` constant above to match.
 * [ ] Google Analytics 4 Consent Mode v2 configured. Confirm GA4 property
 *     ID in NEXT_PUBLIC_GA_MEASUREMENT_ID and verify in dev tools that
 *     analytics_storage is denied by default and granted only after
 *     Analytics consent is given.
 * [ ] Advertising pixels audited. If Meta Pixel, Google Ads, TikTok Pixel,
 *     or LinkedIn Insight Tag are installed, add rows to `cookieInventory`,
 *     flip ADVERTISING_COOKIES_INSTALLED to true in lib/consent/types.ts,
 *     and wire the tag scripts into components/consent/ConsentGatedScripts.tsx.
 * [ ] GPC detection tested. With a GPC-enabled browser (Brave, DuckDuckGo,
 *     or the GPC extension), verify the banner shows the GPC notice and
 *     analytics/advertising toggles are locked off.
 * [ ] Consent logging connected to backend. Replace the console.log in
 *     app/api/consent/route.ts with a real write to durable storage with
 *     at least 2-year retention.
 * [ ] Re-open mechanism tested. Confirm that the footer "Cookie
 *     Preferences" link and the in-page "Manage cookie preferences" button
 *     both reopen the modal and that saved choices persist.
 * [ ] 12-month persistence verified. Write a consent cookie, fast-forward
 *     the clock (or shorten the max-age for testing), and confirm the
 *     banner reappears after expiration.
 * [ ] Cross-doc consistency check with /privacy-policy Section 5 (Cookies
 *     and Tracking Technologies), /tcpa-consent-disclosure Section 10, and
 *     /do-not-sell-or-share.
 * [ ] Route this draft through a qualified privacy attorney for final
 *     review before go-live.
 */
