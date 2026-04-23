/**
 * THIS DOCUMENT IS A DRAFT. REVIEW BY A QUALIFIED PRIVACY/DATA PROTECTION
 * ATTORNEY IS REQUIRED BEFORE PRODUCTION USE.
 *
 * Source document: Privacy Policy for Five Star Rated Insurance
 * (fivestarratedinsurance.com), an Arizona marketing and lead generation
 * company that refers consumer leads to Protegrity Insurance Brokerage
 * (a separate, licensed Arizona insurance brokerage).
 *
 * Unknowns are flagged inline with /* TODO: VERIFY *\/ comments so the
 * business owner and reviewing attorney can confirm or replace each item.
 *
 * Coordinated with: /tcpa-consent-disclosure (TCPA Consent Disclosure),
 * /terms-of-service (Terms of Service), /cookie-policy (Cookie Policy,
 * if published). Dispute resolution, data retention, and sharing terms
 * must remain consistent across these documents.
 */

import { Footer, Header } from "@/components/layout"
import type { Metadata } from "next"
import Link from "next/link"
import { PrintButton } from "./print-button"

const SITE_URL = "https://www.fivestarratedinsurance.com"
const CANONICAL_PATH = "/privacy-policy"

const EFFECTIVE_DATE = "April 18, 2026"
const LAST_UPDATED = "April 18, 2026"
const POLICY_VERSION = "v1.0"

const PRIVACY_EMAIL = "privacy@fivestarratedinsurance.com"
// TODO: VERIFY - replace with production phone number for privacy inquiries
const PRIVACY_PHONE = "[INSERT PHONE]"
// TODO: VERIFY - replace with production mailing address for privacy inquiries
const MAILING_ADDRESS = "[INSERT ADDRESS]"

export const metadata: Metadata = {
  title: "Privacy Policy | Five Star Rated Insurance",
  description:
    "Privacy policy for Five Star Rated Insurance, an Arizona marketing and lead generation company that refers leads to Protegrity Insurance Brokerage. Includes CCPA/CPRA and multi-state privacy rights.",
  alternates: {
    canonical: CANONICAL_PATH,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | Five Star Rated Insurance",
    description:
      "How Five Star Rated Insurance collects, uses, and shares information, and how you can exercise your privacy rights.",
    url: `${SITE_URL}${CANONICAL_PATH}`,
    siteName: "Five Star Rated Insurance",
    locale: "en_US",
    type: "article",
  },
}

// Note: Schema.org does not define a formal "PrivacyPolicy" type in its core
// vocabulary. We use WebPage with privacy-relevant properties
// (datePublished, dateModified, about, publisher, breadcrumb) to meet the
// spirit of the request.
const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    headline: "Five Star Rated Insurance Privacy Policy",
    url: `${SITE_URL}${CANONICAL_PATH}`,
    description:
      "How Five Star Rated Insurance, an Arizona marketing and lead generation company, collects, uses, shares, and protects your information, including CCPA/CPRA and multi-state privacy rights.",
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
      { "@type": "Thing", name: "Consumer privacy rights" },
      { "@type": "Thing", name: "Data collection, use, and sharing" },
      { "@type": "Thing", name: "CCPA, CPRA, and multi-state privacy laws" },
    ],
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Privacy Policy",
          item: `${SITE_URL}${CANONICAL_PATH}`,
        },
      ],
    },
  },
]

type TocItem = { id: string; label: string }

const tableOfContents: TocItem[] = [
  { id: "summary", label: "Summary at a Glance" },
  { id: "identity", label: "1. Company Identity and Scope" },
  { id: "collect", label: "2. Information We Collect" },
  { id: "use", label: "3. How We Use Information" },
  { id: "share", label: "4. How We Share Information" },
  { id: "cookies", label: "5. Cookies and Tracking Technologies" },
  { id: "chatbot", label: "6. Chatbot and AI Disclosure" },
  { id: "retention", label: "7. Data Retention" },
  { id: "security", label: "8. Data Security" },
  { id: "breach", label: "9. Data Breach Notification" },
  { id: "state-rights", label: "10. Your Privacy Rights by State" },
  { id: "exercise", label: "11. How to Exercise Your Rights" },
  { id: "children", label: "12. Children's Privacy" },
  { id: "glba", label: "13. Financial Information and GLBA" },
  { id: "international", label: "14. International Visitors" },
  { id: "third-party", label: "15. Third-Party Links and Services" },
  { id: "changes", label: "16. Changes to This Policy" },
  { id: "disputes", label: "17. Dispute Resolution" },
  { id: "accessibility", label: "18. Accessibility" },
  { id: "contact", label: "19. Contact Information" },
  { id: "acknowledgment", label: "20. Acknowledgment" },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1 bg-background">
          {/* Page header */}
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
                Privacy Policy
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
                  href="/tcpa-consent-disclosure"
                  className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                >
                  TCPA Consent Disclosure
                </Link>
                <span aria-hidden className="text-muted-foreground">
                  /
                </span>
                <Link
                  href="/terms-of-service"
                  className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                >
                  Terms of Service
                </Link>
                <span className="ml-auto print:hidden">
                  <PrintButton />
                </span>
              </div>
              <p className="mt-4 text-xs text-muted-foreground print:hidden">
                You may save a copy of this page by choosing &quot;Save as PDF&quot; in your
                browser print dialog.
                {/* TODO: VERIFY - replace with link to generated PDF version if hosted separately */}
              </p>
            </div>
          </section>

          <div className="container mx-auto grid max-w-6xl gap-10 px-4 py-10 md:py-14 lg:grid-cols-[minmax(0,1fr)_260px]">
            {/* Main article */}
            <article
              aria-labelledby="page-title"
              className="order-2 space-y-12 text-base leading-relaxed text-foreground lg:order-1"
            >
              {/* Summary at a glance */}
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
                  <p className="mb-3 font-semibold text-foreground">
                    Plain-English summary for consumers. This summary does not replace the full
                    policy below.
                  </p>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>
                      Five Star Rated Insurance is a marketing and lead generation company. We are
                      not a licensed insurance agency, brokerage, or insurer.
                    </li>
                    <li>
                      We collect contact information you provide (name, email, phone, ZIP,
                      insurance interest), your chat conversations with Ava, and basic site-usage
                      data like IP address and cookie identifiers.
                    </li>
                    <li>
                      We use that information to connect you with Protegrity Insurance Brokerage,
                      our licensed referral partner, for insurance quotes and service.
                    </li>
                    <li>
                      We share your information with Protegrity and with service providers that
                      help us run the site (hosting, analytics, CRM, email/SMS, chatbot). We do
                      not sell your personal information for monetary consideration.
                    </li>
                    <li>
                      You have rights to access, delete, correct, and, in some states, opt out of
                      certain sharing. See the state-specific rights section below.
                    </li>
                    <li>
                      Questions or requests? Email {PRIVACY_EMAIL} or call {PRIVACY_PHONE}. For
                      phone, text, and email consent specifics, see our{" "}
                      <Link
                        href="/tcpa-consent-disclosure"
                        className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                      >
                        TCPA Consent Disclosure
                      </Link>
                      .
                    </li>
                  </ul>
                </div>
              </section>

              {/* 1. Identity and Scope */}
              <section id="identity" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  1. Company Identity and Scope
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    This Privacy Policy (this &quot;Policy&quot;) describes how Five Star Rated
                    Insurance (&quot;Five Star Rated Insurance,&quot; &quot;we,&quot;
                    &quot;us,&quot; or &quot;our&quot;) collects, uses, shares, and protects
                    information when you visit the website at fivestarratedinsurance.com (the
                    &quot;Site&quot;), submit a form on the Site, or interact with our chat
                    assistant (&quot;Ava&quot;). &quot;You&quot; means the individual visiting
                    the Site or providing information to us.
                  </p>
                  <p>
                    Five Star Rated Insurance is a marketing and lead generation company. We are
                    not a licensed insurance agency, brokerage, insurer, or producer. We do not
                    sell insurance, bind coverage, or transact insurance business.
                  </p>
                  <p>
                    Five Star Rated Insurance refers consumer inquiries to Protegrity Insurance
                    Brokerage (&quot;Protegrity&quot;), a separate legal entity that is a
                    licensed Arizona insurance brokerage. Protegrity and its licensed agents
                    provide insurance quotes, bind coverage, and deliver ongoing policy service.
                    Protegrity maintains its own privacy notice that governs how it handles your
                    information after we refer you. You can find Protegrity&apos;s privacy notice
                    at{" "}
                    <span className="text-muted-foreground">
                      /* TODO: VERIFY - insert Protegrity privacy notice URL */
                    </span>
                    .
                  </p>
                  <p>
                    This Policy applies to the Site. It does not apply to any third-party site,
                    service, or platform, including Protegrity&apos;s own website and quoting
                    tools.
                  </p>
                </div>
              </section>

              {/* 2. Information We Collect */}
              <section id="collect" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  2. Information We Collect
                </h2>
                <p className="mt-4">
                  We collect the following categories of personal information, organized
                  consistent with the categories used in the California Consumer Privacy Act, as
                  amended by the California Privacy Rights Act (together, &quot;CCPA/CPRA&quot;).
                  For each category we identify the typical examples, the sources of the
                  information, the business and commercial purposes for collection, and the
                  categories of recipients.
                </p>

                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      2.1 Identifiers
                    </h3>
                    <ul className="mt-3 list-disc space-y-2 pl-6">
                      <li>
                        <strong>Examples:</strong> name, email address, telephone number, ZIP or
                        postal code, IP address, online identifiers and cookie identifiers, and
                        device or user identifiers set by advertising and analytics services.
                      </li>
                      <li>
                        <strong>Sources:</strong> directly from you when you fill out a form or
                        chat with Ava; automatically through cookies, server logs, and similar
                        technologies.
                      </li>
                      <li>
                        <strong>Purposes:</strong> to connect you with Protegrity, to send
                        service and transactional communications, to authenticate and secure the
                        Site, and to measure marketing performance.
                      </li>
                      <li>
                        <strong>Recipients:</strong> Protegrity; service providers acting on our
                        behalf; legal or regulatory authorities where required by law.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      2.2 Customer Records
                    </h3>
                    <ul className="mt-3 list-disc space-y-2 pl-6">
                      <li>
                        <strong>Examples:</strong> contact information you submit on a form or
                        provide to Ava, including name, phone, email, and postal code.
                      </li>
                      <li>
                        <strong>Sources:</strong> directly from you.
                      </li>
                      <li>
                        <strong>Purposes:</strong> to create a lead record, to route you to
                        Protegrity, and to maintain records of your interactions with us.
                      </li>
                      <li>
                        <strong>Recipients:</strong> Protegrity; service providers acting on our
                        behalf.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      2.3 Commercial Information
                    </h3>
                    <ul className="mt-3 list-disc space-y-2 pl-6">
                      <li>
                        <strong>Examples:</strong> the type of insurance you indicate interest
                        in (for example, auto, home, life, business, specialty, commercial auto,
                        Mexico travel, or other) and the fact that you requested a quote.
                      </li>
                      <li>
                        <strong>Sources:</strong> directly from you.
                      </li>
                      <li>
                        <strong>Purposes:</strong> to route your inquiry to the correct
                        Protegrity team and to measure overall program performance.
                      </li>
                      <li>
                        <strong>Recipients:</strong> Protegrity; service providers acting on our
                        behalf.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      2.4 Internet or Other Electronic Network Activity
                    </h3>
                    <ul className="mt-3 list-disc space-y-2 pl-6">
                      <li>
                        <strong>Examples:</strong> pages you visit, clicks, referral URLs, search
                        terms that brought you to the Site, and content of your chat with Ava,
                        including the messages you send and the options you select.
                      </li>
                      <li>
                        <strong>Sources:</strong> automatically through cookies, server logs,
                        tag managers, analytics tools, and our chatbot platform.
                      </li>
                      <li>
                        <strong>Purposes:</strong> to operate and secure the Site, to measure
                        traffic and engagement, to debug and improve features, and to train and
                        improve Ava under appropriate vendor contracts.
                      </li>
                      <li>
                        <strong>Recipients:</strong> service providers acting on our behalf,
                        including our hosting, analytics, CRM, and chatbot vendors.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      2.5 Geolocation
                    </h3>
                    <ul className="mt-3 list-disc space-y-2 pl-6">
                      <li>
                        <strong>Examples:</strong> approximate geolocation derived from your IP
                        address and the ZIP code you provide. We do not collect precise
                        geolocation from mobile device sensors.
                      </li>
                      <li>
                        <strong>Sources:</strong> directly from you (ZIP), and automatically (IP
                        geolocation).
                      </li>
                      <li>
                        <strong>Purposes:</strong> to confirm service areas, to comply with
                        state-specific legal requirements, and to measure region-level
                        performance.
                      </li>
                      <li>
                        <strong>Recipients:</strong> Protegrity; service providers acting on our
                        behalf.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      2.6 Inferences
                    </h3>
                    <ul className="mt-3 list-disc space-y-2 pl-6">
                      <li>
                        <strong>Examples:</strong> general interest categories (for example,
                        &quot;auto insurance lead&quot; or &quot;home insurance lead&quot;) used
                        to route your inquiry to the correct Protegrity team.
                      </li>
                      <li>
                        <strong>Sources:</strong> derived from the information you provide and
                        from your interactions with the Site and Ava.
                      </li>
                      <li>
                        <strong>Purposes:</strong> to route and prioritize your inquiry and to
                        measure program performance. We do not use inferences for profile-based
                        decisions that produce legal or similarly significant effects on you.
                      </li>
                      <li>
                        <strong>Recipients:</strong> Protegrity; service providers acting on our
                        behalf.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      2.7 Sensitive Personal Information
                    </h3>
                    <div className="mt-3 space-y-3">
                      <p>
                        We do not intentionally collect Sensitive Personal Information, as that
                        term is defined under CCPA/CPRA, at the top of the insurance inquiry
                        funnel. In particular, we do not collect Social Security numbers, driver
                        license numbers, state identification card numbers, passport numbers,
                        financial account numbers (with or without security codes or credentials),
                        precise geolocation, racial or ethnic origin, religious or philosophical
                        beliefs, union membership, the contents of your mail or non-public
                        communications, genetic data, biometric data used for unique
                        identification, health information, or information about your sex life or
                        sexual orientation.
                      </p>
                      <p>
                        If Protegrity collects any of the above later in the insurance quoting
                        process, that collection is governed by Protegrity&apos;s own privacy
                        notice and applicable insurance and financial privacy laws, including the
                        Gramm-Leach-Bliley Act (GLBA).
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. How We Use Information */}
              <section id="use" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  3. How We Use Information
                </h2>
                <p className="mt-4">We use the information described above for the following specific purposes:</p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>
                    <strong>Lead routing.</strong> To connect you with Protegrity and its
                    licensed insurance professionals for insurance quotes, coverage options, and
                    ongoing service.
                  </li>
                  <li>
                    <strong>Service and transactional communications.</strong> To respond to
                    your inquiry, confirm appointments, follow up on incomplete forms, and
                    provide information you request.
                  </li>
                  <li>
                    <strong>Marketing communications where consent has been given.</strong> To
                    send you promotional messages by phone, text, and email about insurance
                    quotes, coverage options, and related topics, consistent with the{" "}
                    <Link
                      href="/tcpa-consent-disclosure"
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      TCPA Consent Disclosure
                    </Link>
                    .
                  </li>
                  <li>
                    <strong>Site operation, security, and fraud prevention.</strong> To host,
                    maintain, and secure the Site; to detect and prevent abuse, fraud, and
                    unauthorized access; and to debug technical issues.
                  </li>
                  <li>
                    <strong>Analytics and measurement.</strong> To measure how visitors use the
                    Site and Ava, to evaluate marketing channels, and to improve site usability.
                  </li>
                  <li>
                    <strong>Legal compliance and dispute resolution.</strong> To comply with
                    applicable laws and regulatory requirements, to respond to subpoenas and
                    lawful requests, and to establish, exercise, or defend legal claims.
                  </li>
                  <li>
                    <strong>Improving services.</strong> To improve our Site, forms, and
                    chatbot, including under appropriate vendor contracts that restrict vendor
                    use of your information to providing services to us.
                  </li>
                </ul>
              </section>

              {/* 4. How We Share Information */}
              <section id="share" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  4. How We Share Information
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    <strong>We do not sell your personal information for monetary
                    consideration.</strong>
                  </p>
                  <p>We share your personal information only with the following categories of recipients:</p>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      4.1 Protegrity Insurance Brokerage (Primary Sharing Relationship)
                    </h3>
                    <p className="mt-3">
                      Protegrity is our licensed referral partner and is the primary recipient of
                      your inquiry. Protegrity uses the information we share to provide insurance
                      quotes, bind coverage, and service policies in accordance with
                      Protegrity&apos;s own privacy notice and applicable law.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      4.2 Service Providers and Processors
                    </h3>
                    <p className="mt-3">
                      We share information with service providers that help us operate the Site
                      and deliver our services, including hosting, CRM, email and SMS delivery,
                      analytics, advertising measurement, chatbot platform, and similar vendors.
                      Service providers are bound by written contracts that limit their use of
                      your personal information to providing services to us, and require
                      appropriate security and confidentiality safeguards.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      4.3 Advertising Partners and Cross-Context Behavioral Advertising
                    </h3>
                    <p className="mt-3">
                      {/* TODO: VERIFY - confirm whether site runs Meta Pixel, Google Ads remarketing, TikTok Pixel, LinkedIn Insight Tag, or similar. If yes, this constitutes "sharing" under CCPA/CPRA and the text below applies; if no, revise to state we do not share for cross-context behavioral advertising. */}
                      To the extent we use advertising pixels or tags that share online
                      identifiers with advertising platforms for purposes of cross-context
                      behavioral advertising (as defined under California law), that activity
                      may be considered &quot;sharing&quot; under CCPA/CPRA and analogous
                      state statutes. California and other qualifying state residents may opt
                      out of this activity as described in Section 10 (Your Privacy Rights by
                      State) and by using our &quot;Do Not Sell or Share My Personal
                      Information&quot; mechanism.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      4.4 Legal and Regulatory Disclosures
                    </h3>
                    <p className="mt-3">
                      We may share information when required by law, subpoena, court order, or
                      regulatory process; when necessary to protect the rights, property, or
                      safety of Five Star Rated Insurance, our users, or others; or to
                      establish, exercise, or defend legal claims.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      4.5 Business Transfers
                    </h3>
                    <p className="mt-3">
                      If Five Star Rated Insurance is involved in a merger, acquisition, asset
                      sale, financing, bankruptcy, or similar transaction, your information may
                      be transferred as part of that transaction. We will take reasonable steps
                      to require the successor to honor this Policy with respect to your
                      information.
                    </p>
                  </div>
                </div>
              </section>

              {/* 5. Cookies */}
              <section id="cookies" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  5. Cookies and Tracking Technologies
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    We use cookies, tags, pixels, SDKs, and similar technologies
                    (together, &quot;Tracking Technologies&quot;) to operate the Site, remember
                    your preferences, measure traffic and engagement, and, where applicable, to
                    support advertising measurement. We organize Tracking Technologies into the
                    following categories:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      <strong>Strictly necessary.</strong> Required for session management,
                      security, fraud prevention, and core Site functions. These cannot be
                      disabled without breaking the Site.
                    </li>
                    <li>
                      <strong>Functional.</strong> Used to remember preferences such as language
                      or UI state. These are used to improve your experience on the Site.
                    </li>
                    <li>
                      <strong>Analytics.</strong> Used to measure how visitors use the Site. We
                      use Google Analytics 4 and{" "}
                      <span className="text-muted-foreground">
                        /* TODO: VERIFY - list any additional analytics tools (Hotjar, Microsoft Clarity, etc.) */
                      </span>
                      .
                    </li>
                    <li>
                      <strong>Advertising.</strong>{" "}
                      <span className="text-muted-foreground">
                        /* TODO: VERIFY - list specific advertising pixels (Meta Pixel, Google Ads, TikTok, LinkedIn Insight) or state &quot;None currently in use&quot;. */
                      </span>
                    </li>
                  </ul>
                  <p>
                    You may manage cookies through your browser settings, through our consent
                    banner (where available), and by using opt-out links provided by individual
                    analytics and advertising vendors. Blocking cookies may affect some Site
                    features.
                  </p>
                  <p>
                    <strong>Global Privacy Control (GPC).</strong> We recognize the Global
                    Privacy Control signal as a valid opt-out of sale and sharing for residents
                    of states whose laws require GPC recognition, including California and
                    Colorado. When we detect a GPC signal from your browser, we treat it as a
                    request to opt out of sale and sharing for that browser and device.
                  </p>
                  <p>
                    For additional information about the categories of cookies we use and how to
                    manage them, please see our Cookie Policy{" "}
                    <span className="text-muted-foreground">
                      /* TODO: VERIFY - link to /cookie-policy if published */
                    </span>
                    .
                  </p>
                </div>
              </section>

              {/* 6. Chatbot */}
              <section id="chatbot" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  6. Chatbot and AI Disclosure
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    Our chat assistant &quot;Ava&quot; uses artificial intelligence (AI) to
                    understand your messages, qualify your inquiry, and route you to the
                    appropriate licensed Protegrity team. Your conversations with Ava are
                    recorded and retained for the period described in Section 7 (Data
                    Retention).
                  </p>
                  <p>
                    Ava is not a licensed insurance agent and does not provide licensed
                    insurance advice. Ava does not quote policies, bind coverage, or make final
                    eligibility or pricing decisions. All licensed insurance activities,
                    including quotes, coverage recommendations, and policy placement, are
                    handled by licensed professionals at Protegrity. Ava is an intake and
                    connection tool that complements, and does not replace, licensed expertise.
                  </p>
                  <p>
                    Where applicable under state law (for example, the Colorado Privacy Act and
                    the Virginia Consumer Data Protection Act), residents may have the right to
                    opt out of certain forms of profiling for decisions that produce legal or
                    similarly significant effects. We do not use Ava for that purpose. See
                    Section 10 (Your Privacy Rights by State) for more information.
                  </p>
                </div>
              </section>

              {/* 7. Data Retention */}
              <section id="retention" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  7. Data Retention
                </h2>
                <div className="mt-4 space-y-4">
                  <p>We retain personal information for the periods set out below:</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      <strong>Lead data</strong> (name, contact information, insurance
                      interest, and related records): 5 years from your last interaction with
                      us.
                    </li>
                    <li>
                      <strong>Consent records</strong> (TCPA and privacy-related consent,
                      including the records described in the{" "}
                      <Link
                        href="/tcpa-consent-disclosure"
                        className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                      >
                        TCPA Consent Disclosure
                      </Link>
                      ): at least 5 years after revocation of consent.
                    </li>
                    <li>
                      <strong>Analytics data</strong> (Google Analytics 4 and similar): 26
                      months, which is the default retention period for GA4.
                    </li>
                    <li>
                      <strong>Chatbot transcripts</strong> (Ava conversations): 2 years from the
                      date of the conversation.
                    </li>
                    <li>
                      <strong>Marketing engagement data</strong> (email opens, clicks,
                      unsubscribe events, and similar): 3 years from the event.
                    </li>
                  </ul>
                  <p>
                    We may retain information longer where required by law, where reasonably
                    necessary for the defense of legal claims or to respond to regulatory
                    inquiries, or where the information is in secure, archived backups that
                    cannot be selectively deleted. At the end of the applicable period we
                    delete, de-identify, or aggregate the information consistent with our
                    records schedule.
                  </p>
                </div>
              </section>

              {/* 8. Data Security */}
              <section id="security" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  8. Data Security
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    We maintain reasonable administrative, technical, and organizational
                    safeguards designed to protect personal information from loss, misuse, and
                    unauthorized access, disclosure, alteration, and destruction. These
                    safeguards include, where appropriate, encryption of personal information in
                    transit, access controls, role-based permissions, vendor due diligence,
                    written contracts with service providers, and incident response procedures.
                  </p>
                  <p>
                    No method of transmission over the Internet or storage is 100% secure. While
                    we strive to protect your information, we cannot guarantee its absolute
                    security. You are responsible for keeping your account credentials (if any)
                    and any codes or links we send you confidential.
                  </p>
                </div>
              </section>

              {/* 9. Breach Notification */}
              <section id="breach" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  9. Data Breach Notification
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    In the event of a data breach that involves unauthorized acquisition of
                    personal information, we will investigate the incident and, where required,
                    notify affected individuals and regulators in accordance with applicable
                    law, including Arizona Revised Statutes section 18-552 and comparable state
                    breach notification statutes. Notifications will include the information
                    required by the applicable statute.
                  </p>
                </div>
              </section>

              {/* 10. State Rights */}
              <section id="state-rights" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  10. Your Privacy Rights by State
                </h2>
                <p className="mt-4">
                  Certain state laws grant residents specific rights regarding their personal
                  information. This section describes those rights by state, subject to the
                  exceptions and limitations in each law. For instructions on how to exercise
                  any right described below, see Section 11 (How to Exercise Your Rights).
                </p>

                <div className="mt-6 space-y-8">
                  {/* California */}
                  <div className="rounded-lg border border-border bg-card p-5 md:p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      10.1 California Residents (CCPA and CPRA)
                    </h3>
                    <p className="mt-3">
                      If you are a California resident, you have the following rights under the
                      California Consumer Privacy Act and the California Privacy Rights Act
                      (together, &quot;CCPA/CPRA&quot;), codified at Cal. Civ. Code section
                      1798.100 et seq., subject to exceptions and limitations in those laws:
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-6">
                      <li>
                        Right to know what personal information we collect, use, disclose, sell,
                        and share.
                      </li>
                      <li>
                        Right to delete personal information we have collected about you, subject
                        to legal exceptions.
                      </li>
                      <li>Right to correct inaccurate personal information.</li>
                      <li>
                        Right to opt out of the sale or sharing of personal information.
                      </li>
                      <li>
                        Right to limit the use and disclosure of Sensitive Personal Information.
                      </li>
                      <li>Right to non-discrimination for exercising any of these rights.</li>
                    </ul>
                    <div className="mt-4 space-y-3">
                      <p>
                        <strong>How to submit a request.</strong> You may submit a CCPA/CPRA
                        rights request by email to {PRIVACY_EMAIL}, by phone at {PRIVACY_PHONE},
                        or through our privacy-rights webform at{" "}
                        <span className="text-muted-foreground">
                          /* TODO: VERIFY - insert webform URL when live */
                        </span>
                        .
                      </p>
                      <p>
                        <strong>Identity verification.</strong> To protect your information, we
                        will verify your identity before responding. Verification typically
                        requires matching two or three data points you previously provided (for
                        example, name, email, and phone number) against our records.
                      </p>
                      <p>
                        <strong>Response timeframe.</strong> We respond within 45 days of
                        receiving a verifiable request. When reasonably necessary, we may extend
                        the response period by an additional 45 days and will notify you of the
                        extension.
                      </p>
                      <p>
                        <strong>Authorized agents.</strong> You may designate an authorized
                        agent to submit a request on your behalf. We will require written
                        authorization signed by you (or proof of a power of attorney) and will
                        verify the agent&apos;s identity.
                      </p>
                      <p>
                        <strong>Global Privacy Control.</strong> We recognize the Global
                        Privacy Control (GPC) signal as a valid opt-out of sale and sharing for
                        California residents.
                      </p>
                      <p>
                        <strong>Do Not Sell or Share My Personal Information.</strong> To opt
                        out of the sale or sharing of your personal information, use our
                        &quot;Do Not Sell or Share My Personal Information&quot; link at{" "}
                        <span className="text-muted-foreground">
                          /* TODO: VERIFY - insert DNSMPI page or form URL; also add matching link to site footer */
                        </span>
                        .
                      </p>
                      <p>
                        <strong>Shine the Light.</strong> California Civil Code section 1798.83
                        permits California residents to request a list of personal information
                        we disclosed to third parties for their direct marketing purposes in the
                        preceding calendar year. We do not disclose personal information to
                        third parties for their direct marketing purposes, so no such list
                        applies. If this practice changes, we will update this Policy.
                      </p>
                      <p>
                        <strong>Financial incentives.</strong> We do not offer financial
                        incentives in exchange for the collection, sale, sharing, or retention
                        of personal information.
                      </p>
                    </div>
                  </div>

                  {/* Colorado */}
                  <div className="rounded-lg border border-border bg-card p-5 md:p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      10.2 Colorado Residents (Colorado Privacy Act)
                    </h3>
                    <p className="mt-3">
                      If you are a Colorado resident, you generally have the following rights
                      under the Colorado Privacy Act (CPA), subject to exceptions:
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-6">
                      <li>Right to access the personal data we process about you.</li>
                      <li>Right to correct inaccuracies in your personal data.</li>
                      <li>Right to delete personal data.</li>
                      <li>Right to data portability.</li>
                      <li>
                        Right to opt out of sale, targeted advertising, and certain profiling.
                      </li>
                    </ul>
                    <p className="mt-3">
                      <strong>Appeal process.</strong> If we decline your request, you may
                      appeal our decision by replying to our response with the word
                      &quot;Appeal&quot; in the subject line or by emailing {PRIVACY_EMAIL}. We
                      will review the appeal and respond within the time frame required by
                      Colorado law.
                    </p>
                    <p className="mt-3">
                      <strong>Universal opt-out mechanism.</strong> We recognize the Global
                      Privacy Control signal as a valid universal opt-out of sale and targeted
                      advertising for Colorado residents.
                    </p>
                  </div>

                  {/* Virginia */}
                  <div className="rounded-lg border border-border bg-card p-5 md:p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      10.3 Virginia Residents (VCDPA)
                    </h3>
                    <p className="mt-3">
                      If you are a Virginia resident, you generally have the following rights
                      under the Virginia Consumer Data Protection Act (VCDPA):
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-6">
                      <li>Right to confirm processing and to access your personal data.</li>
                      <li>Right to correct inaccuracies in your personal data.</li>
                      <li>Right to delete personal data.</li>
                      <li>Right to portability.</li>
                      <li>
                        Right to opt out of sale, targeted advertising, and certain profiling.
                      </li>
                    </ul>
                    <p className="mt-3">
                      <strong>Appeal process.</strong> If we decline your request, you may
                      appeal by replying to our response with the word &quot;Appeal&quot; in
                      the subject line or by emailing {PRIVACY_EMAIL}. We will respond within
                      the time frame required by Virginia law.
                    </p>
                  </div>

                  {/* Connecticut */}
                  <div className="rounded-lg border border-border bg-card p-5 md:p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      10.4 Connecticut Residents (CTDPA)
                    </h3>
                    <p className="mt-3">
                      If you are a Connecticut resident, you generally have the following rights
                      under the Connecticut Data Privacy Act (CTDPA), subject to exceptions:
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-6">
                      <li>Right to confirm processing and to access your personal data.</li>
                      <li>Right to correct inaccuracies in your personal data.</li>
                      <li>Right to delete personal data.</li>
                      <li>Right to portability.</li>
                      <li>
                        Right to opt out of sale, targeted advertising, and certain profiling.
                      </li>
                    </ul>
                    <p className="mt-3">
                      <strong>Universal opt-out mechanism.</strong> We recognize the Global
                      Privacy Control signal as a valid universal opt-out for Connecticut
                      residents consistent with CTDPA.
                    </p>
                  </div>

                  {/* Utah */}
                  <div className="rounded-lg border border-border bg-card p-5 md:p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      10.5 Utah Residents (UCPA)
                    </h3>
                    <p className="mt-3">
                      If you are a Utah resident, you generally have the following rights under
                      the Utah Consumer Privacy Act (UCPA):
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-6">
                      <li>Right to access the personal data we process about you.</li>
                      <li>Right to delete personal data.</li>
                      <li>Right to portability.</li>
                      <li>Right to opt out of targeted advertising and the sale of personal data.</li>
                    </ul>
                  </div>

                  {/* Texas */}
                  <div className="rounded-lg border border-border bg-card p-5 md:p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      10.6 Texas Residents (TDPSA)
                    </h3>
                    <p className="mt-3">
                      If you are a Texas resident, you generally have the following rights under
                      the Texas Data Privacy and Security Act (TDPSA):
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-6">
                      <li>Right to confirm processing and to access your personal data.</li>
                      <li>Right to correct inaccuracies in your personal data.</li>
                      <li>Right to delete personal data.</li>
                      <li>Right to portability.</li>
                      <li>Right to opt out of sale, targeted advertising, and certain profiling.</li>
                    </ul>
                  </div>

                  {/* Oregon / Montana */}
                  <div className="rounded-lg border border-border bg-card p-5 md:p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      10.7 Oregon and Montana Residents
                    </h3>
                    <p className="mt-3">
                      If you are an Oregon resident, you have corresponding rights under the
                      Oregon Consumer Privacy Act (OCPA), including rights to access, correct,
                      delete, and port your personal data and to opt out of sale, targeted
                      advertising, and certain profiling, subject to exceptions.
                    </p>
                    <p className="mt-3">
                      If you are a Montana resident, you have corresponding rights under the
                      Montana Consumer Data Privacy Act (MCDPA), including rights to access,
                      correct, delete, and port your personal data and to opt out of sale,
                      targeted advertising, and certain profiling, subject to exceptions.
                    </p>
                  </div>

                  {/* Arizona */}
                  <div className="rounded-lg border border-border bg-card p-5 md:p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      10.8 Arizona Residents
                    </h3>
                    <p className="mt-3">
                      If you are an Arizona resident, you may have rights under Arizona consumer
                      protection statutes, including Arizona Revised Statutes Title 44 and, as
                      applicable to the insurance marketing activities we conduct, Arizona
                      Revised Statutes Title 20. To exercise any applicable Arizona rights,
                      email {PRIVACY_EMAIL} or call {PRIVACY_PHONE}.
                    </p>
                  </div>

                  {/* All other */}
                  <div className="rounded-lg border border-border bg-card p-5 md:p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      10.9 Residents of Other States
                    </h3>
                    <p className="mt-3">
                      If you reside in a state not listed above, you may still contact us at{" "}
                      {PRIVACY_EMAIL} to exercise any privacy rights that may apply under your
                      state&apos;s laws or under this Policy. We will respond to reasonable
                      requests consistent with applicable law.
                    </p>
                  </div>
                </div>
              </section>

              {/* 11. Exercise */}
              <section id="exercise" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  11. How to Exercise Your Rights
                </h2>
                <div className="mt-4 space-y-4">
                  <p>You can submit a privacy rights request in any of the following ways:</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      <strong>Email:</strong>{" "}
                      <span className="font-medium text-navy">{PRIVACY_EMAIL}</span> with the
                      subject line &quot;Privacy Rights Request.&quot;
                    </li>
                    <li>
                      <strong>Phone:</strong>{" "}
                      <span className="font-medium text-navy">{PRIVACY_PHONE}</span>.
                    </li>
                    <li>
                      <strong>Webform:</strong>{" "}
                      <span className="text-muted-foreground">
                        /* TODO: VERIFY - insert webform URL when live */
                      </span>
                      .
                    </li>
                    <li>
                      <strong>Mail:</strong>{" "}
                      <span className="font-medium text-navy">{MAILING_ADDRESS}</span>, Attn:
                      Privacy and Consent Team.
                    </li>
                  </ul>
                  <p>
                    <strong>Identity verification.</strong> Before fulfilling a rights request,
                    we will take reasonable steps to verify your identity. Verification
                    typically requires matching two or three data points you previously
                    provided (for example, name, email, phone number, and ZIP code) against our
                    records. For sensitive requests or requests from authorized agents, we may
                    require additional verification consistent with applicable law.
                  </p>
                  <p>
                    <strong>Authorized agents.</strong> You may designate an authorized agent
                    to submit a request on your behalf. We will require written authorization
                    signed by you or proof of power of attorney.
                  </p>
                  <p>
                    <strong>Response timeframes.</strong> We respond within the timeframes
                    required by the applicable state law. For California, we respond within 45
                    days, extendable by 45 days where reasonably necessary. For Colorado,
                    Virginia, Connecticut, Utah, Texas, Oregon, and Montana, we respond within
                    the timeframe required by each state&apos;s statute. For all other states
                    and jurisdictions, we aim to respond within 45 days.
                  </p>
                  <p>
                    <strong>Appeals.</strong> For states that provide an appeal right (such as
                    Colorado, Virginia, and Connecticut), you may appeal a denial by replying
                    to our response with the word &quot;Appeal&quot; in the subject line, or by
                    emailing {PRIVACY_EMAIL}. We will respond to appeals within the time frame
                    required by the applicable state law.
                  </p>
                  <p>
                    <strong>No retaliation.</strong> We will not discriminate or retaliate
                    against you for exercising any privacy right described in this Policy,
                    including by denying services, charging different prices, or providing a
                    different level or quality of services, except as permitted by applicable
                    law.
                  </p>
                </div>
              </section>

              {/* 12. Children */}
              <section id="children" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  12. Children&apos;s Privacy
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    The Site is not directed to children or individuals under 18 years of age,
                    and we do not knowingly collect personal information from, or accept
                    consent from, individuals under 18. We do not knowingly collect information
                    from children under 13 in a manner that would be subject to the
                    Children&apos;s Online Privacy Protection Act (COPPA). If we learn that we
                    have collected information from an individual under 18, we will delete it
                    promptly. Parents or guardians who believe that a minor has provided us
                    with personal information should contact {PRIVACY_EMAIL}.
                  </p>
                </div>
              </section>

              {/* 13. GLBA */}
              <section id="glba" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  13. Financial Information and GLBA
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    To the extent any nonpublic personal information subject to the
                    Gramm-Leach-Bliley Act (GLBA), 15 U.S.C. section 6801 et seq., is collected
                    by us or transmitted through our Site, we strive to handle that information
                    consistent with GLBA safeguarding requirements. We share GLBA-covered
                    information only with Protegrity and with authorized service providers for
                    permissible purposes under GLBA.
                  </p>
                  <p>
                    Protegrity provides its own GLBA privacy notice covering the nonpublic
                    personal information it collects, uses, and shares in the course of
                    quoting, binding, and servicing insurance policies. Please refer to
                    Protegrity&apos;s privacy notice at{" "}
                    <span className="text-muted-foreground">
                      /* TODO: VERIFY - insert Protegrity privacy notice URL */
                    </span>{" "}
                    for details.
                  </p>
                </div>
              </section>

              {/* 14. International */}
              <section id="international" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  14. International Visitors
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    The Site is operated from the United States. Personal information collected
                    through the Site is stored and processed in the United States. If you
                    access the Site from outside the United States, you acknowledge that your
                    information will be transferred to and processed in the United States and
                    that the data protection laws of the United States may differ from the laws
                    of your country of residence.
                  </p>
                  <p>
                    <strong>EU and UK residents.</strong> Where the EU General Data Protection
                    Regulation (GDPR) or the UK GDPR applies, we process personal information
                    on the lawful bases of your consent, our legitimate interests in operating
                    and improving the Site, and compliance with legal obligations. You have
                    the right to access, correct, delete, restrict, or object to our
                    processing, and the right to data portability, subject to the exceptions in
                    those laws. You also have the right to lodge a complaint with a supervisory
                    authority in your country of residence. To exercise these rights, email{" "}
                    {PRIVACY_EMAIL}.
                  </p>
                </div>
              </section>

              {/* 15. Third party links */}
              <section id="third-party" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  15. Third-Party Links and Services
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    The Site may contain links to third-party websites, services, or resources,
                    including Protegrity&apos;s own website and quoting tools. Those third
                    parties have their own privacy policies and terms of service, and we are
                    not responsible for their practices. Please review the privacy policies of
                    any third-party site you visit.
                  </p>
                </div>
              </section>

              {/* 16. Changes */}
              <section id="changes" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  16. Changes to This Policy
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    We may update this Policy from time to time. When we make material changes,
                    we will prominently post the updated document on this page and update the
                    &quot;Effective Date&quot;, &quot;Last Updated&quot;, and version number at
                    the top. Where required by applicable law, we will seek affirmative consent
                    or provide advance notice before the changes take effect, rather than
                    relying on your continued use of the Site as the sole mechanism of
                    acceptance for material changes.
                  </p>
                  <p>
                    We maintain version history of this Policy internally.{" "}
                    <span className="text-muted-foreground">
                      /* TODO: VERIFY - decide whether to publish a version history log and link to it */
                    </span>
                  </p>
                </div>
              </section>

              {/* 17. Disputes */}
              <section id="disputes" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  17. Dispute Resolution
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    Disputes arising out of or relating to this Policy are governed by the
                    dispute resolution terms in our{" "}
                    <Link
                      href="/tcpa-consent-disclosure"
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      TCPA Consent Disclosure
                    </Link>
                    , including binding individual arbitration administered by AAA or JAMS, a
                    class action waiver and jury trial waiver, a 30-day right to opt out of
                    arbitration, a small claims carve-out, and Arizona governing law and
                    Maricopa County venue. Those terms are incorporated by reference into this
                    Policy.
                  </p>
                  <p>
                    Nothing in this Policy or in the TCPA Consent Disclosure is intended to
                    waive any non-waivable right under applicable law. For example, California
                    residents retain their statutory private right of action for certain data
                    breaches under the CCPA. Where applicable law makes a right non-waivable,
                    that right is not waived.
                  </p>
                </div>
              </section>

              {/* 18. Accessibility */}
              <section id="accessibility" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  18. Accessibility
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    We strive to make the Site accessible and usable for visitors with
                    disabilities. If you experience an accessibility issue or need this Policy
                    in an alternative format, please email {PRIVACY_EMAIL} or call{" "}
                    {PRIVACY_PHONE} and we will work with you to provide the information in a
                    reasonably accessible format.
                  </p>
                </div>
              </section>

              {/* 19. Contact */}
              <section id="contact" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  19. Contact Information
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    For questions, complaints, or requests related to this Policy or your
                    personal information, please contact:
                  </p>
                  <address className="not-italic">
                    <p className="font-semibold text-foreground">
                      Five Star Rated Insurance, Privacy and Consent Team
                    </p>
                    <p>
                      Email:{" "}
                      <span className="font-medium text-navy">{PRIVACY_EMAIL}</span>
                    </p>
                    <p>
                      Phone:{" "}
                      <span className="font-medium text-navy">{PRIVACY_PHONE}</span>
                    </p>
                    <p>
                      Mailing Address:{" "}
                      <span className="font-medium text-navy">{MAILING_ADDRESS}</span>
                    </p>
                  </address>
                  <p className="text-sm text-muted-foreground">
                    {/* TODO: VERIFY - if a designated Data Protection Officer or Privacy Lead is named, list their title and contact method here. */}
                    A designated Privacy Lead is responsible for coordinating responses to
                    privacy-rights requests and privacy incidents. Contact the Privacy Lead via
                    the email address above.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    For insurance-specific questions about a quote, policy, coverage, billing,
                    claim, or other licensed activities, please contact Protegrity Insurance
                    Brokerage directly. Licensed insurance activities are handled by Protegrity
                    and not by Five Star Rated Insurance.
                  </p>
                </div>
              </section>

              {/* 20. Acknowledgment */}
              <section id="acknowledgment" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  20. Acknowledgment
                </h2>
                <div className="mt-4 rounded-lg border border-navy/20 bg-card p-5 text-sm leading-relaxed md:text-base">
                  <p>
                    By using the Site, submitting a form, or interacting with Ava, you
                    acknowledge that you have read and understood this Policy and the related
                    disclosures referenced here, including the{" "}
                    <Link
                      href="/tcpa-consent-disclosure"
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      TCPA Consent Disclosure
                    </Link>{" "}
                    and the{" "}
                    <Link
                      href="/terms-of-service"
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      Terms of Service
                    </Link>
                    . This acknowledgment does not waive any right you cannot waive as a matter
                    of law.
                  </p>
                </div>
              </section>

              <footer className="border-t border-border pt-6 text-xs text-muted-foreground">
                <p>
                  Effective Date: {EFFECTIVE_DATE}. Last Updated: {LAST_UPDATED}. Version{" "}
                  {POLICY_VERSION}.
                </p>
                <p className="mt-1">
                  Five Star Rated Insurance strives to comply with applicable laws, including
                  the California Consumer Privacy Act, the California Privacy Rights Act, the
                  Colorado Privacy Act, the Virginia Consumer Data Protection Act, the
                  Connecticut Data Privacy Act, the Utah Consumer Privacy Act, the Texas Data
                  Privacy and Security Act, the Oregon Consumer Privacy Act, the Montana
                  Consumer Data Privacy Act, the Gramm-Leach-Bliley Act, the Children&apos;s
                  Online Privacy Protection Act, the CAN-SPAM Act, the Telephone Consumer
                  Protection Act, and Arizona Revised Statutes Title 20 and section 18-552.
                </p>
              </footer>
            </article>

            {/* Table of contents - sidebar on desktop, collapsed top on mobile */}
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
 * [ ] Replace PRIVACY_PHONE placeholder "[INSERT PHONE]" with the production
 *     phone number used for privacy inquiries.
 * [ ] Replace MAILING_ADDRESS placeholder "[INSERT ADDRESS]" with the
 *     production mailing address for privacy inquiries.
 * [ ] Confirm cookie consent banner (Cookiebot, Osano, Termly, or custom) is
 *     live on the Site and that categories/vendors disclosed in Section 5
 *     match the banner's actual behavior.
 * [ ] Confirm Global Privacy Control (GPC) signal recognition is implemented
 *     on the Site for at least California and Colorado residents, and that
 *     the opt-out persists across sessions for the browser/device.
 * [ ] Stand up the "Do Not Sell or Share My Personal Information" page or
 *     form and its backend, and add a matching link to the site footer on
 *     every page. Replace the TODO in Section 4.3 and Section 10.1 with the
 *     live URL.
 * [ ] Build and publish a CCPA/state-rights webform (or email-only intake
 *     workflow with a documented process) and replace the TODO URLs in
 *     Sections 10.1 and 11.
 * [ ] Document the identity verification process for rights requests,
 *     including required data points, agent verification, and denial
 *     criteria. Retain a log of requests and outcomes.
 * [ ] Confirm that retention periods disclosed in Section 7 are actually
 *     enforced in the backend (lead DB purge job, GA4 retention setting at
 *     26 months, chatbot transcript purge at 2 years, marketing-engagement
 *     retention at 3 years, consent-records retention at 5+ years).
 * [ ] Confirm that written service provider / processor contracts (with
 *     confidentiality and purpose-limitation terms) are in place with all
 *     vendors listed in Section 4.2, including hosting, CRM, email, SMS,
 *     analytics, advertising measurement, and chatbot providers.
 * [ ] Confirm Protegrity Insurance Brokerage's current privacy notice URL
 *     and replace the TODO references in Sections 1 and 13.
 * [ ] Execute a data processing agreement (DPA) or equivalent written
 *     agreement with Protegrity covering the categories of information
 *     shared, purposes, and Protegrity's handling obligations.
 * [ ] Decide whether to publish a version-history log. If yes, link from
 *     Section 16; if no, remove or update the TODO.
 * [ ] Publish a dedicated Cookie Policy at /cookie-policy (or confirm that
 *     this Policy covers all cookie detail needed), and update the TODO in
 *     Section 5.
 * [ ] Confirm Terms of Service at /terms-of-service is aligned with this
 *     Policy and the TCPA Consent Disclosure (arbitration terms, governing
 *     law, venue, and dispute-resolution language).
 * [ ] Confirm whether advertising pixels (Meta Pixel, Google Ads
 *     remarketing, TikTok Pixel, LinkedIn Insight Tag, etc.) are deployed
 *     and update Sections 4.3 and 5 accordingly.
 * [ ] Confirm whether a generated PDF version of this Policy is hosted and
 *     update the TODO in the header note.
 * [ ] Route this draft through a qualified privacy / data protection
 *     attorney for final review before go-live. Arizona bar membership is
 *     recommended given the Arizona governing-law provisions and the
 *     coordination required with the TCPA Consent Disclosure.
 */
