/**
 * DRAFT — ATTORNEY REVIEW REQUIRED BEFORE PRODUCTION USE.
 *
 * Source document: Terms of Service for Five Star Rated Insurance
 * (fivestarratedinsurance.com), an Arizona marketing and lead generation
 * company that refers consumer leads to Protegrity Insurance Brokerage
 * (a separate, licensed Arizona insurance brokerage).
 *
 * Unknowns are flagged inline with TODO: VERIFY comments so the business
 * owner and reviewing attorney can confirm or replace each item.
 *
 * Coordinated with: /tcpa-consent-disclosure (TCPA Consent Disclosure) and
 * /privacy-policy (Privacy Policy) and /do-not-sell-or-share (CCPA opt-out).
 * Arbitration, governing law, venue, consent scope, and data handling terms
 * must remain consistent across these documents. Where this document and the
 * TCPA Consent Disclosure or Privacy Policy address the same topic, the more
 * specific document controls.
 */

import { Footer, Header } from "@/components/layout"
import type { Metadata } from "next"
import Link from "next/link"
import { PrintButton } from "./print-button"

const SITE_URL = "https://www.fivestarratedinsurance.com"
const CANONICAL_PATH = "/terms-of-service"

const EFFECTIVE_DATE = "April 18, 2026"
const LAST_UPDATED = "April 18, 2026"
const TERMS_VERSION = "v1.0"

// TODO: VERIFY - confirm legal@ email address is provisioned and monitored
const LEGAL_EMAIL = "legal@fivestarratedinsurance.com"
const SUPPORT_EMAIL = "support@fivestarratedinsurance.com"
const PRIVACY_EMAIL = "privacy@fivestarratedinsurance.com"
// TODO: VERIFY - replace with production mailing address for legal notices
const MAILING_ADDRESS = "[INSERT ADDRESS]"
// TODO: VERIFY - designate and publish DMCA copyright agent per 17 U.S.C. §512(c)
const DMCA_AGENT_NAME = "[INSERT DMCA AGENT NAME / TITLE]"
const DMCA_EMAIL = "legal@fivestarratedinsurance.com"

export const metadata: Metadata = {
  title: "Terms of Service | Five Star Rated Insurance",
  description:
    "Terms of Service for Five Star Rated Insurance, an Arizona marketing and lead generation company that refers consumer leads to Protegrity Insurance Brokerage. Includes arbitration, class action waiver, and limitation of liability.",
  alternates: {
    canonical: CANONICAL_PATH,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Service | Five Star Rated Insurance",
    description:
      "The Terms of Service governing your use of the Five Star Rated Insurance website, including dispute resolution, intellectual property, and acceptable use.",
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
    name: "Terms of Service",
    headline: "Five Star Rated Insurance Terms of Service",
    url: `${SITE_URL}${CANONICAL_PATH}`,
    description:
      "Terms of Service describing how visitors may use the Five Star Rated Insurance website, including acceptable use, intellectual property, disclaimers, limitation of liability, arbitration, and class action waiver.",
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    version: TERMS_VERSION,
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
      { "@type": "Thing", name: "Website terms of service" },
      { "@type": "Thing", name: "Binding arbitration and class action waiver" },
      { "@type": "Thing", name: "Intellectual property and acceptable use" },
    ],
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Terms of Service",
          item: `${SITE_URL}${CANONICAL_PATH}`,
        },
      ],
    },
  },
]

type TocItem = { id: string; label: string }

const tableOfContents: TocItem[] = [
  { id: "summary", label: "Summary at a Glance" },
  { id: "acceptance", label: "1. Acceptance of Terms" },
  { id: "identity", label: "2. Company Identity" },
  { id: "affiliate", label: "3. Affiliate Disclosure and Licensed Partner" },
  { id: "no-advice", label: "4. No Insurance, Legal, Tax, or Financial Advice" },
  { id: "ftc", label: "5. FTC Affiliate Disclosure" },
  { id: "user-reps", label: "6. User Representations and Warranties" },
  { id: "acceptable-use", label: "7. Acceptable Use Policy" },
  { id: "chatbot", label: "8. Chatbot and AI Services Disclosure" },
  { id: "tcpa", label: "9. TCPA and Communications Consent" },
  { id: "privacy", label: "10. Privacy" },
  { id: "ip", label: "11. Intellectual Property" },
  { id: "third-party", label: "12. Third-Party Links and Services" },
  { id: "disclaimers", label: "13. Disclaimers of Warranties" },
  { id: "liability", label: "14. Limitation of Liability" },
  { id: "indemnification", label: "15. Indemnification" },
  { id: "arbitration", label: "16. Dispute Resolution, Arbitration, and Class Action Waiver" },
  { id: "termination", label: "17. Termination" },
  { id: "changes", label: "18. Changes to These Terms" },
  { id: "force-majeure", label: "19. Force Majeure" },
  { id: "assignment", label: "20. Assignment" },
  { id: "severability", label: "21. Severability" },
  { id: "waiver", label: "22. Waiver" },
  { id: "entire-agreement", label: "23. Entire Agreement" },
  { id: "electronic-comms", label: "24. Electronic Communications Consent" },
  { id: "notices", label: "25. Notices" },
  { id: "contact", label: "26. Contact" },
]

export default function TermsOfServicePage() {
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
                Legal Agreement
              </p>
              <h1
                id="page-title"
                className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl"
              >
                Terms of Service
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
                  <dd>{TERMS_VERSION}</dd>
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
              <p className="mt-4 text-xs text-muted-foreground print:hidden">
                You may save a copy of this page by choosing &quot;Save as PDF&quot; in your
                browser print dialog.
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
                  <p className="mb-3 font-semibold">
                    Plain-English summary for visitors. This summary does not replace the full
                    Terms below.
                  </p>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>
                      <strong>Who we are.</strong> Five Star Rated Insurance is an Arizona
                      marketing and lead generation company. We are not a licensed insurance
                      agency, brokerage, insurer, or producer.
                    </li>
                    <li>
                      <strong>What the Site is for.</strong> Our Site (fivestarratedinsurance.com)
                      provides general insurance information and refers interested visitors to
                      Protegrity Insurance Brokerage for licensed insurance services.
                    </li>
                    <li>
                      <strong>Insurance services come from Protegrity.</strong> Quotes, coverage
                      recommendations, binding, and policy service are provided by Protegrity
                      Insurance Brokerage and applicable carriers — not by us.
                    </li>
                    <li>
                      <strong>Dispute resolution.</strong> Most disputes must be resolved by
                      individual, binding arbitration and not in court. You and we each waive
                      the right to a jury trial and the right to participate in a class action.
                      You have 30 days after you first submit information to opt out of
                      arbitration (see Section 16).
                    </li>
                    <li>
                      <strong>Privacy and consent.</strong> How we handle information is
                      described in our{" "}
                      <Link
                        href="/privacy-policy"
                        className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                      >
                        Privacy Policy
                      </Link>
                      . How we obtain and honor phone, text, and email consent is described in
                      our{" "}
                      <Link
                        href="/tcpa-consent-disclosure"
                        className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                      >
                        TCPA Consent Disclosure
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>Contact.</strong> Legal notices:{" "}
                      <a
                        href={`mailto:${LEGAL_EMAIL}`}
                        className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                      >
                        {LEGAL_EMAIL}
                      </a>
                      . General questions:{" "}
                      <a
                        href={`mailto:${SUPPORT_EMAIL}`}
                        className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                      >
                        {SUPPORT_EMAIL}
                      </a>
                      .
                    </li>
                  </ul>
                </div>
              </section>

              {/* 1. Acceptance of Terms */}
              <section id="acceptance" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  1. Acceptance of Terms
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    These Terms of Service (the &quot;Terms&quot;) are a binding legal agreement
                    between you and Five Star Rated Insurance (&quot;Five Star Rated
                    Insurance,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
                    governing your access to and use of the website at
                    fivestarratedinsurance.com (the &quot;Site&quot;) and any related features,
                    forms, or chatbot interactions (together, the &quot;Services&quot;).
                  </p>
                  <p>
                    By accessing or using the Site or the Services, you represent that you have
                    read, understood, and agree to be bound by these Terms and by the documents
                    incorporated by reference, including our{" "}
                    <Link
                      href="/privacy-policy"
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/tcpa-consent-disclosure"
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      TCPA Consent Disclosure
                    </Link>
                    . <strong>You must be at least 18 years old</strong> and have the legal
                    capacity to enter into a binding contract to use the Site.{" "}
                    <strong>
                      If you do not agree to these Terms, you must not access or use the Site.
                    </strong>
                  </p>
                </div>
              </section>

              {/* 2. Company Identity */}
              <section id="identity" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  2. Company Identity
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    <strong>Five Star Rated Insurance</strong> is a marketing and lead
                    generation company. We are <strong>not</strong> a licensed insurance
                    agency, insurance brokerage, insurer, or producer. We do not sell
                    insurance, bind coverage, or transact insurance business. Any insurance
                    products, quotes, or services are provided solely by appropriately licensed
                    third parties as described in Section 3.
                  </p>
                </div>
              </section>

              {/* 3. Affiliate disclosure and licensed partner */}
              <section id="affiliate" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  3. Affiliate Disclosure and Licensed Partner
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    Five Star Rated Insurance operates as an authorized marketing partner of{" "}
                    <strong>Protegrity Insurance Brokerage</strong>
                    {" "}(&quot;Protegrity&quot;). Protegrity holds the insurance licenses
                    required to offer, solicit, and place insurance and is responsible for
                    obtaining and providing all quotes, policy options, and insurance-related
                    services made available through our marketing channels. Your relationship
                    for insurance transactions is with Protegrity and the applicable carriers,
                    not with Five Star Rated Insurance as an agency or brokerage. Protegrity
                    maintains its own privacy notice and terms that govern your insurance
                    transactions with Protegrity.
                  </p>
                </div>
              </section>

              {/* 4. No advice */}
              <section id="no-advice" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  4. No Insurance, Legal, Tax, or Financial Advice
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    Information on the Site and in our communications is provided for general
                    informational and marketing purposes only. It does <strong>not</strong>{" "}
                    constitute insurance, legal, tax, or financial advice and should not be
                    relied upon as such. You should consult a qualified, licensed professional
                    about your specific situation before making any insurance, legal, tax, or
                    financial decision. We make no representation that any particular coverage,
                    carrier, or product is suitable for you.
                  </p>
                </div>
              </section>

              {/* 5. FTC Affiliate Disclosure */}
              <section id="ftc" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  5. FTC Affiliate Disclosure
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    Five Star Rated Insurance may receive compensation when you interact with
                    the Site, submit a request for information, or obtain a quote or policy
                    through our marketing relationship with Protegrity or other partners. This
                    material connection may affect how products or services are presented. We
                    aim to describe our relationships clearly. If you have questions about how
                    we are compensated, contact us at{" "}
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      {SUPPORT_EMAIL}
                    </a>
                    .
                  </p>
                </div>
              </section>

              {/* 6. User Representations */}
              <section id="user-reps" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  6. User Representations and Warranties
                </h2>
                <p className="mt-4">By using the Site, you represent and warrant that:</p>
                <ul className="mt-3 list-disc space-y-2 pl-6">
                  <li>
                    You are at least 18 years of age and have the legal capacity to enter into
                    a binding contract in your jurisdiction.
                  </li>
                  <li>
                    The information you provide through any form, chatbot interaction, or other
                    means is true, accurate, current, and complete, and you will keep it
                    updated.
                  </li>
                  <li>
                    Any telephone number, email address, or other contact information you
                    submit belongs to you, or you have the actual authority from the owner of
                    that contact information to submit it and to consent, on that owner&apos;s
                    behalf, to the communications described in our{" "}
                    <Link
                      href="/tcpa-consent-disclosure"
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      TCPA Consent Disclosure
                    </Link>
                    .
                  </li>
                  <li>
                    You will not use the Site for any unlawful purpose or in any manner that
                    could damage, disable, overburden, or impair the Site.
                  </li>
                  <li>
                    You will comply with all applicable laws, including federal, state, and
                    local telemarketing, consumer protection, and insurance laws.
                  </li>
                </ul>
              </section>

              {/* 7. Acceptable Use */}
              <section id="acceptable-use" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  7. Acceptable Use Policy
                </h2>
                <p className="mt-4">
                  You agree that you will not, and will not permit any third party to, do any
                  of the following on or through the Site:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-6">
                  <li>
                    Scrape, crawl, harvest, data-mine, or otherwise collect information from
                    the Site using automated means, except for public search-engine indexing
                    that respects our robots.txt file.
                  </li>
                  <li>
                    Reverse engineer, decompile, disassemble, or otherwise attempt to derive
                    the source code or underlying ideas of the Site, except to the extent this
                    restriction is prohibited by applicable law.
                  </li>
                  <li>
                    Use any bot, spider, scraper, or other automated means to access or
                    interact with the Site, submit forms, or interact with our chatbot.
                  </li>
                  <li>
                    Collect personal information about any other person or submit false,
                    misleading, or impersonating information.
                  </li>
                  <li>
                    Attempt to gain unauthorized access to the Site, to any account, computer
                    system, or network connected to the Site, or to any non-public area of the
                    Site.
                  </li>
                  <li>
                    Interfere with or disrupt the operation of the Site, the servers or
                    networks used to make the Site available, or bypass any measures we use to
                    restrict access.
                  </li>
                  <li>
                    Impersonate any person or entity, or misrepresent your affiliation with any
                    person or entity.
                  </li>
                  <li>
                    Upload, post, or transmit any viruses, worms, Trojan horses, spyware, or
                    other malicious code.
                  </li>
                  <li>
                    Use the Site to send unsolicited communications, chain letters, pyramid
                    schemes, spam, or any other form of duplicative or unsolicited message.
                  </li>
                  <li>Use the Site in any manner that violates applicable law.</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to investigate suspected violations and to suspend or
                  terminate your access to the Site, with or without notice, for any conduct
                  that we reasonably believe violates these Terms or applicable law, or that
                  harms other visitors, us, or third parties.
                </p>
              </section>

              {/* 8. Chatbot / AI */}
              <section id="chatbot" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  8. Chatbot and AI Services Disclosure
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    The Site uses an AI-powered chat assistant (&quot;Ava&quot;) to help with
                    initial lead intake and qualification. Ava is an automated tool. Ava is{" "}
                    <strong>not</strong> a licensed insurance professional and does not provide
                    insurance, legal, tax, or financial advice. Ava&apos;s responses are
                    generated algorithmically, may be incomplete or out of date, and may
                    contain errors. You should verify any material information with a licensed
                    agent at Protegrity before relying on it for an insurance decision.
                  </p>
                  <p>
                    Your conversations with Ava are logged and retained as described in our{" "}
                    <Link
                      href="/privacy-policy"
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      Privacy Policy
                    </Link>
                    . By using Ava, you acknowledge and agree to that logging and to the use of
                    AI as described here.
                  </p>
                </div>
              </section>

              {/* 9. TCPA */}
              <section id="tcpa" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  9. TCPA and Communications Consent
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    The scope of your consent to receive communications by phone, text, and
                    email, the methods by which you may opt out, revocation of consent,
                    message frequency, and related terms are governed exclusively by our{" "}
                    <Link
                      href="/tcpa-consent-disclosure"
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      TCPA Consent Disclosure
                    </Link>
                    , which is incorporated into these Terms by reference.
                  </p>
                  <p>
                    To the extent these Terms and the TCPA Consent Disclosure address the same
                    subject matter, the TCPA Consent Disclosure controls. These Terms do not
                    limit, modify, or replace any right you have under the TCPA Consent
                    Disclosure, and your acceptance of these Terms does not, by itself,
                    constitute consent to receive marketing phone calls or text messages.
                  </p>
                </div>
              </section>

              {/* 10. Privacy */}
              <section id="privacy" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  10. Privacy
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    How we collect, use, share, retain, and protect personal information, and
                    the privacy rights available to residents of California and other states
                    (including the right to opt out of the sale or sharing of personal
                    information), are described in our{" "}
                    <Link
                      href="/privacy-policy"
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      Privacy Policy
                    </Link>
                    . California residents may submit opt-out requests through our{" "}
                    <Link
                      href="/do-not-sell-or-share"
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      Do Not Sell or Share My Personal Information
                    </Link>{" "}
                    page. The Privacy Policy is incorporated into these Terms by reference. To
                    the extent these Terms and the Privacy Policy address the same subject
                    matter, the Privacy Policy controls.
                  </p>
                </div>
              </section>

              {/* 11. Intellectual Property */}
              <section id="ip" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  11. Intellectual Property
                </h2>
                <div className="mt-4 space-y-6">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      11.1 Ownership
                    </h3>
                    <p className="mt-3">
                      All content on the Site — including text, graphics, illustrations, logos,
                      icons, images, photographs, audio, video, page layout, site design, code,
                      and the compilation of the foregoing (together, the &quot;Site
                      Content&quot;) — is owned by Five Star Rated Insurance or its licensors
                      and is protected by United States and international copyright, trademark,
                      trade dress, and other intellectual property laws.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      11.2 Trademarks
                    </h3>
                    <p className="mt-3">
                      &quot;Five Star Rated Insurance,&quot; the Five Star Rated Insurance
                      logo, and related names, logos, product and service names, designs, and
                      slogans are trademarks of Five Star Rated Insurance or its affiliates.
                      You may not use any such mark without our prior written permission. All
                      other names, logos, product and service names, designs, and slogans on
                      the Site are the trademarks of their respective owners.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      11.3 Limited License to Users
                    </h3>
                    <p className="mt-3">
                      Subject to your compliance with these Terms, we grant you a limited,
                      non-exclusive, non-transferable, non-sublicensable, revocable license to
                      access and display the Site Content for your personal, non-commercial use
                      only. This license does not include any right to resell, exploit, or make
                      commercial use of the Site Content; to modify, adapt, translate, reverse
                      engineer, or create derivative works based on the Site Content; or to use
                      any data mining, robots, or similar data gathering or extraction methods.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      11.4 No Scraping or Unauthorized Reproduction
                    </h3>
                    <p className="mt-3">
                      You may not copy, reproduce, publish, display, upload, post, transmit,
                      distribute, sell, license, rent, or create derivative works from any
                      Site Content without our prior written permission. Cached or temporary
                      copies stored by your browser for ordinary viewing are permitted.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      11.5 User-Submitted Content
                    </h3>
                    <p className="mt-3">
                      When you submit content to us through a form, a chatbot interaction, or
                      any other means (&quot;User Content&quot;), you grant Five Star Rated
                      Insurance a worldwide, non-exclusive, royalty-free, sublicensable (to our
                      service providers and to Protegrity) license to use, reproduce, modify,
                      create derivative works from, transmit, store, and display that User
                      Content to provide the Services, route your inquiry to Protegrity,
                      operate and improve the Site, and comply with applicable law, as further
                      described in our{" "}
                      <Link
                        href="/privacy-policy"
                        className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                      >
                        Privacy Policy
                      </Link>
                      . You represent that you own or have all necessary rights to the User
                      Content you submit and that the User Content does not infringe any
                      third-party right or violate any law.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      11.6 DMCA Copyright Infringement Notice
                    </h3>
                    <p className="mt-3">
                      We respect the intellectual property rights of others. If you believe
                      that material on the Site infringes your copyright, please send a notice
                      to our designated copyright agent that includes the information required
                      by the Digital Millennium Copyright Act, 17 U.S.C. § 512(c)(3):
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-6">
                      <li>
                        A physical or electronic signature of the owner or a person authorized
                        to act on behalf of the owner of the copyright.
                      </li>
                      <li>
                        Identification of the copyrighted work claimed to have been infringed.
                      </li>
                      <li>
                        Identification of the allegedly infringing material and information
                        reasonably sufficient to permit us to locate it on the Site.
                      </li>
                      <li>
                        Your name, address, telephone number, and email address.
                      </li>
                      <li>
                        A statement that you have a good-faith belief that use of the material
                        in the manner complained of is not authorized by the copyright owner,
                        its agent, or the law.
                      </li>
                      <li>
                        A statement, made under penalty of perjury, that the information in the
                        notice is accurate and that you are the owner of the copyright or
                        authorized to act on behalf of the owner.
                      </li>
                    </ul>
                    <address className="mt-4 not-italic">
                      <p className="font-semibold text-foreground">Designated Copyright Agent</p>
                      <p>
                        Name: <span className="font-medium text-navy">{DMCA_AGENT_NAME}</span>{" "}
                        {/* TODO: VERIFY - designate and register DMCA agent with the U.S. Copyright Office */}
                      </p>
                      <p>
                        Email:{" "}
                        <a
                          href={`mailto:${DMCA_EMAIL}`}
                          className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                        >
                          {DMCA_EMAIL}
                        </a>
                      </p>
                      <p>
                        Mail:{" "}
                        <span className="font-medium text-navy">{MAILING_ADDRESS}</span>, Attn:
                        DMCA Copyright Agent.
                      </p>
                    </address>
                    <p className="mt-3">
                      We may terminate the access of users who are determined to be repeat
                      infringers in appropriate circumstances.
                    </p>
                  </div>
                </div>
              </section>

              {/* 12. Third-party links */}
              <section id="third-party" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  12. Third-Party Links and Services
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    The Site may contain links to third-party websites, services, or resources,
                    including Protegrity&apos;s own website and quoting tools. Those third
                    parties are not controlled by us, and we are not responsible for the
                    content, practices, or availability of any third-party site or service, or
                    for the goods or services offered through them. The inclusion of a link
                    does not imply endorsement. You access third-party sites at your own risk,
                    and your use of those sites is subject to the terms and privacy policies of
                    those third parties.
                  </p>
                </div>
              </section>

              {/* 13. Disclaimers */}
              <section id="disclaimers" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  13. Disclaimers of Warranties
                </h2>
                <div className="mt-4 space-y-4">
                  <p className="rounded-md border border-navy/20 bg-background p-4 text-sm uppercase leading-relaxed tracking-wide text-foreground md:text-[15px]">
                    <strong>
                      The Site and the Services are provided on an &quot;as is&quot; and
                      &quot;as available&quot; basis, without warranties of any kind, either
                      express or implied.
                    </strong>
                  </p>
                  <p>
                    To the fullest extent permitted by applicable law, Five Star Rated
                    Insurance, its owners, employees, contractors, agents, suppliers, and
                    licensors disclaim all warranties, express or implied, including the
                    implied warranties of merchantability, fitness for a particular purpose,
                    title, and non-infringement. We do not warrant that the Site will be
                    uninterrupted, timely, secure, or error-free; that defects will be
                    corrected; that the Site or the servers that make it available are free of
                    viruses or other harmful components; or that the Site Content is accurate,
                    complete, reliable, current, or suitable for any particular purpose.
                  </p>
                  <p>
                    Some jurisdictions do not allow the exclusion of certain warranties, so some
                    of the exclusions above may not apply to you. In those jurisdictions, our
                    warranties are limited to the minimum extent permitted by law.
                  </p>
                </div>
              </section>

              {/* 14. Limitation of Liability */}
              <section id="liability" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  14. Limitation of Liability
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    <strong>
                      To the fullest extent permitted by applicable law, Five Star Rated
                      Insurance and its owners, employees, contractors, agents, suppliers, and
                      licensors (together, the &quot;Covered Parties&quot;) will not be liable
                      for any indirect, incidental, special, consequential, exemplary, or
                      punitive damages
                    </strong>
                    , or for any loss of profits, revenue, data, goodwill, or other intangible
                    losses, arising out of or relating to your use of, or inability to use, the
                    Site or the Services, even if a Covered Party has been advised of the
                    possibility of such damages and regardless of the theory of liability
                    (contract, tort, strict liability, or otherwise).
                  </p>
                  <p>
                    <strong>
                      The total aggregate liability of the Covered Parties for any and all
                      claims arising out of or relating to these Terms, the Site, or the
                      Services will not exceed the greater of (a) the total amount you paid us,
                      if any, in the twelve (12) months immediately preceding the event giving
                      rise to the claim, or (b) one hundred U.S. dollars ($100).
                    </strong>
                  </p>
                  <div className="rounded-md border border-navy/20 bg-card p-4">
                    <p className="font-semibold text-foreground">
                      Carve-outs (limitations do not apply):
                    </p>
                    <p className="mt-2">
                      The limitations and exclusions in this Section 14 do{" "}
                      <strong>not</strong> apply to, and nothing in these Terms limits liability
                      for:
                    </p>
                    <ul className="mt-2 list-disc space-y-2 pl-6">
                      <li>gross negligence;</li>
                      <li>willful misconduct;</li>
                      <li>fraud or fraudulent misrepresentation;</li>
                      <li>
                        bodily injury caused by our negligence, to the extent the limitation
                        would not be enforceable under applicable law;
                      </li>
                      <li>
                        any other liability that cannot be limited or excluded as a matter of
                        applicable law, including non-waivable consumer-protection rights under
                        California law (such as the CCPA statutory private right of action for
                        certain data breaches), the New Jersey Consumer Fraud Act, and
                        comparable statutes in other states.
                      </li>
                    </ul>
                  </div>
                  <p>
                    Some jurisdictions do not allow the exclusion or limitation of incidental or
                    consequential damages, so some of the limitations above may not apply to
                    you. In those jurisdictions, liability is limited to the minimum extent
                    permitted by law.
                  </p>
                </div>
              </section>

              {/* 15. Indemnification */}
              <section id="indemnification" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  15. Indemnification
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    You agree to indemnify, defend, and hold harmless Five Star Rated
                    Insurance and its owners, officers, directors, employees, contractors,
                    agents, successors, and assigns (the &quot;Indemnified Parties&quot;) from
                    and against any and all third-party claims, demands, actions, proceedings,
                    losses, damages, liabilities, costs, and expenses (including reasonable
                    attorneys&apos; fees) arising out of or relating to:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>your breach of these Terms or of any document incorporated by reference;</li>
                    <li>your violation of any applicable law or regulation;</li>
                    <li>
                      your use or misuse of the Site or the Services, including any submission
                      of false, inaccurate, or unauthorized information;
                    </li>
                    <li>your infringement or misappropriation of any third-party right; or</li>
                    <li>any User Content you submit.</li>
                  </ul>
                  <p>
                    We reserve the right, at our own expense, to assume the exclusive defense
                    and control of any matter otherwise subject to indemnification by you, in
                    which event you will cooperate with us in asserting any available defenses.
                    You will not settle any claim that imposes any liability or obligation on
                    any Indemnified Party without our prior written consent.
                  </p>
                </div>
              </section>

              {/* 16. Arbitration */}
              <section id="arbitration" className="scroll-mt-24">
                <div
                  role="region"
                  aria-labelledby="arbitration-heading"
                  className="rounded-lg border-2 border-red-700 bg-red-50 p-6 text-red-950 md:p-8 print:border print:bg-white print:text-black"
                >
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-red-800 print:text-black">
                    Important Notice. Please Read Carefully.
                  </p>
                  <h2
                    id="arbitration-heading"
                    className="font-heading text-2xl font-extrabold uppercase tracking-wide text-red-900 md:text-3xl print:text-black"
                  >
                    16. Dispute Resolution, Arbitration, and Class Action Waiver
                  </h2>
                  <div className="mt-5 space-y-4 text-[15px] leading-relaxed md:text-base">
                    <p>
                      <strong>16.1 Informal Dispute Resolution First.</strong> Before filing a
                      claim against the other party, you and Five Star Rated Insurance agree
                      to try in good faith to resolve the dispute informally for at least
                      sixty (60) days. The informal process begins when one party sends a
                      written &quot;Notice of Dispute&quot; to the other that describes the
                      claim and the relief sought. You must send your Notice of Dispute to{" "}
                      <a
                        href={`mailto:${LEGAL_EMAIL}`}
                        className="font-medium text-red-900 underline underline-offset-4 print:text-black"
                      >
                        {LEGAL_EMAIL}
                      </a>{" "}
                      and to {MAILING_ADDRESS}, Attn: Legal Notices. We will send any Notice
                      of Dispute to the email and mailing address you provided. If the dispute
                      is not resolved within 60 days after the Notice of Dispute is received,
                      you or we may initiate arbitration.
                    </p>
                    <p>
                      <strong>16.2 Binding Individual Arbitration.</strong> Except as
                      described in Section 16.6 (Carve-Outs and Non-Waivable Rights), Section
                      16.7 (Small Claims), and Section 16.8 (Injunctive Relief for IP), you
                      and Five Star Rated Insurance agree that any dispute, claim, or
                      controversy arising out of or relating to these Terms, the Site, the
                      Services, any content on the Site, or our marketing activities will be
                      resolved by <strong>binding individual arbitration</strong>, and{" "}
                      <strong>not in court</strong>.
                    </p>
                    <p>
                      <strong>16.3 Arbitration Provider and Rules.</strong> Arbitration will
                      be administered by either the American Arbitration Association (AAA)
                      under its Consumer Arbitration Rules, or JAMS under its Streamlined
                      Arbitration Rules and Procedures, at your election. Arbitration will be
                      conducted by a single neutral arbitrator. The arbitrator may award any
                      relief that would be available in court under applicable law, but only
                      on an individual basis. The arbitrator&apos;s decision will be final and
                      binding, and judgment on the award may be entered in any court of
                      competent jurisdiction.{" "}
                      {/* TODO: VERIFY - optionally commit to one arbitration provider (AAA or JAMS) if preferred */}
                    </p>
                    <p>
                      <strong>16.4 Class Action Waiver and Jury Trial Waiver.</strong>{" "}
                      <strong>
                        You and Five Star Rated Insurance each waive any right to a jury trial
                        and waive any right to bring or participate in a class action,
                        collective action, mass action, or representative proceeding.
                      </strong>{" "}
                      The arbitrator may not consolidate claims and may not preside over any
                      form of representative or class proceeding. If a decisionmaker determines
                      that the class-action waiver is unenforceable as to a particular claim,
                      only that claim may proceed in court on an individual basis, and all
                      other claims between the parties must still be resolved by individual
                      arbitration under this Section 16. In no event may the parties proceed
                      with a class, collective, or representative action, whether in
                      arbitration or court.
                    </p>
                    <p>
                      <strong>16.5 30-Day Right to Opt Out of Arbitration.</strong> You may opt
                      out of the arbitration agreement in this Section 16 by sending written
                      notice to{" "}
                      <a
                        href={`mailto:${LEGAL_EMAIL}`}
                        className="font-medium text-red-900 underline underline-offset-4 print:text-black"
                      >
                        {LEGAL_EMAIL}
                      </a>{" "}
                      within thirty (30) days after you first submit a form or otherwise
                      provide information to us through the Site. Your opt-out notice must
                      include your full name, the email address and phone number (if any) you
                      submitted, and a clear statement that you are opting out of arbitration
                      with Five Star Rated Insurance. A timely opt-out from arbitration will
                      not affect any other part of these Terms, and will not affect any separate
                      arbitration agreement you may have (including the one in the{" "}
                      <Link
                        href="/tcpa-consent-disclosure"
                        className="font-medium text-red-900 underline underline-offset-4 print:text-black"
                      >
                        TCPA Consent Disclosure
                      </Link>
                      , which has its own opt-out process).
                    </p>
                    <p>
                      <strong>16.6 Carve-Outs and Non-Waivable Rights.</strong> This Section 16
                      does not require you to waive any right that you cannot waive as a matter
                      of law. Nothing in this Section 16 prevents you from exercising any
                      non-waivable statutory right, including any non-waivable right to bring a
                      private action under the California Consumer Privacy Act for a data
                      breach that meets the CCPA&apos;s statutory requirements. If a particular
                      right cannot be resolved in arbitration under applicable law, that right
                      may be pursued in court, but all remaining disputes must still be
                      resolved by individual arbitration as described above.
                    </p>
                    <p>
                      <strong>16.7 Small Claims.</strong> Either party may bring an individual
                      action in a small claims court of competent jurisdiction for any claim
                      that qualifies for small claims court, so long as the action remains
                      individual and is not consolidated with any other proceeding.
                    </p>
                    <p>
                      <strong>16.8 Injunctive Relief for Intellectual Property.</strong>{" "}
                      Notwithstanding this Section 16, either party may bring an action in a
                      court of competent jurisdiction for temporary or permanent injunctive or
                      other equitable relief to protect its intellectual property rights
                      (including trademarks, trade secrets, copyrights, or patents).
                    </p>
                    <p>
                      <strong>16.9 Severability.</strong> If any part of this Section 16 (other
                      than the class-action waiver in Section 16.4, which is addressed
                      separately above) is held to be invalid or unenforceable, the remainder
                      of this Section 16 will remain in effect.
                    </p>
                    <p>
                      <strong>16.10 Governing Law and Venue for Non-Arbitrable Claims.</strong>{" "}
                      These Terms and any dispute arising out of or relating to them are
                      governed by the laws of the State of Arizona, without regard to its
                      conflict-of-law principles. To the extent a dispute is not subject to
                      arbitration under this Section 16, the state and federal courts located
                      in Maricopa County, Arizona have exclusive jurisdiction and venue, and
                      you consent to personal jurisdiction there.
                    </p>
                  </div>
                </div>
              </section>

              {/* 17. Termination */}
              <section id="termination" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  17. Termination
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    We may suspend, restrict, or terminate your access to the Site or the
                    Services at any time, with or without notice, for any reason, including if
                    we believe you have violated these Terms, engaged in unlawful use of the
                    Site, or created risk or legal exposure for us. We may also discontinue the
                    Site or any feature of it at any time.
                  </p>
                  <p>
                    Upon termination, your right to access and use the Site and the Services
                    ceases immediately. The following sections, by their nature, survive
                    termination: Section 6 (User Representations and Warranties), Section 11
                    (Intellectual Property), Section 13 (Disclaimers of Warranties), Section 14
                    (Limitation of Liability), Section 15 (Indemnification), Section 16
                    (Dispute Resolution, Arbitration, and Class Action Waiver), Section 21
                    (Severability), Section 23 (Entire Agreement), and any other provision that
                    by its nature should survive.
                  </p>
                </div>
              </section>

              {/* 18. Changes */}
              <section id="changes" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  18. Changes to These Terms
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    We may update these Terms from time to time. When we do, we will post the
                    updated Terms on this page and revise the &quot;Effective Date&quot; and
                    &quot;Last Updated&quot; at the top. Non-material changes (such as
                    clarifications, typographical corrections, or updates to contact
                    information) become effective upon posting.
                  </p>
                  <p>
                    For <strong>material changes</strong>, we will provide prominent notice
                    before the changes take effect. Where required by applicable law, or for
                    material changes to the arbitration agreement in Section 16, we will seek
                    your affirmative consent or provide advance notice, and continued use of
                    the Site alone will not be treated as acceptance of those changes. If you
                    do not agree to a material change, you must stop using the Site and may
                    contact {LEGAL_EMAIL} to discuss the effect on any prior interactions.
                  </p>
                  <p>
                    We maintain version history of these Terms internally.{" "}
                    {/* TODO: VERIFY - decide whether to publish a public version history */}
                  </p>
                </div>
              </section>

              {/* 19. Force Majeure */}
              <section id="force-majeure" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  19. Force Majeure
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    Neither party will be liable for any delay or failure to perform under
                    these Terms to the extent the delay or failure is caused by events beyond
                    that party&apos;s reasonable control, including acts of God, natural
                    disasters, fire, flood, earthquake, severe weather, pandemic, epidemic,
                    war, terrorism, civil disturbance, riot, labor disputes or strikes,
                    government actions or orders, changes in law, utility or
                    telecommunications failures, internet or cloud-service outages, denial-of-
                    service or other cyberattacks, or supplier failures. The affected party
                    will use commercially reasonable efforts to resume performance as soon as
                    practicable.
                  </p>
                </div>
              </section>

              {/* 20. Assignment */}
              <section id="assignment" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  20. Assignment
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    You may not assign, transfer, or delegate these Terms or any of your
                    rights or obligations under them, in whole or in part, without our prior
                    written consent. Any attempted assignment without our consent is void. We
                    may assign these Terms, in whole or in part, without notice and without
                    restriction, including in connection with a merger, acquisition,
                    reorganization, sale of assets, financing, or by operation of law. Where
                    practicable, we will provide notice of a material assignment by posting an
                    update on the Site or by email.
                  </p>
                </div>
              </section>

              {/* 21. Severability */}
              <section id="severability" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  21. Severability
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    If any provision of these Terms is held to be invalid, illegal, or
                    unenforceable by a court or arbitrator of competent jurisdiction, the
                    provision will be modified to the minimum extent necessary to make it
                    valid, legal, and enforceable, or if it cannot be modified, it will be
                    severed. The remaining provisions of these Terms will remain in full force
                    and effect.
                  </p>
                </div>
              </section>

              {/* 22. Waiver */}
              <section id="waiver" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  22. Waiver
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    No waiver of any term or condition of these Terms will be effective unless
                    it is in writing and signed by an authorized representative of Five Star
                    Rated Insurance. Our failure to enforce any provision of these Terms, or
                    any delay in doing so, will not be treated as a waiver of that provision
                    or of our right to enforce it later.
                  </p>
                </div>
              </section>

              {/* 23. Entire Agreement */}
              <section id="entire-agreement" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  23. Entire Agreement
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    These Terms, together with the{" "}
                    <Link
                      href="/privacy-policy"
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      Privacy Policy
                    </Link>
                    , the{" "}
                    <Link
                      href="/tcpa-consent-disclosure"
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      TCPA Consent Disclosure
                    </Link>
                    , and the Cookie Policy (once published), constitute the entire agreement
                    between you and Five Star Rated Insurance regarding your use of the Site
                    and the Services, and supersede all prior or contemporaneous agreements,
                    communications, and understandings, whether written or oral, regarding
                    that subject matter.{" "}
                    {/* TODO: VERIFY - confirm Cookie Policy URL when published */}
                  </p>
                </div>
              </section>

              {/* 24. Electronic Communications */}
              <section id="electronic-comms" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  24. Electronic Communications Consent
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    You consent to receive communications from us electronically, including
                    by email, by SMS or other messaging services (as governed by our{" "}
                    <Link
                      href="/tcpa-consent-disclosure"
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      TCPA Consent Disclosure
                    </Link>
                    ), and through notices posted on the Site. You agree that all
                    communications, notices, disclosures, agreements, and other records that we
                    provide to you electronically satisfy any legal requirement that such
                    records be in writing. This Section 24 does not, by itself, establish
                    consent to marketing phone calls or text messages; such consent is governed
                    by the TCPA Consent Disclosure.
                  </p>
                </div>
              </section>

              {/* 25. Notices */}
              <section id="notices" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  25. Notices
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    <strong>Notices from us to you.</strong> We may provide notices to you by
                    email to the address you have provided, by SMS (where the notice relates to
                    messaging you have consented to receive), or by posting a notice on the
                    Site. Notices posted on the Site are effective when posted; notices sent by
                    email are effective when sent.
                  </p>
                  <p>
                    <strong>Legal notices from you to us.</strong> All legal notices to Five
                    Star Rated Insurance, including any Notice of Dispute described in Section
                    16.1, any arbitration opt-out described in Section 16.5, and any DMCA
                    notice described in Section 11.6, must be sent by email to{" "}
                    <a
                      href={`mailto:${LEGAL_EMAIL}`}
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      {LEGAL_EMAIL}
                    </a>{" "}
                    and by postal mail to{" "}
                    <span className="font-medium text-navy">{MAILING_ADDRESS}</span>, Attn:
                    Legal Notices. Non-legal questions should be sent to{" "}
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      {SUPPORT_EMAIL}
                    </a>
                    . Privacy-rights requests should be directed as described in the Privacy
                    Policy (for example, to{" "}
                    <a
                      href={`mailto:${PRIVACY_EMAIL}`}
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      {PRIVACY_EMAIL}
                    </a>
                    ).
                  </p>
                </div>
              </section>

              {/* 26. Contact */}
              <section id="contact" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  26. Contact
                </h2>
                <div className="mt-4 space-y-4">
                  <address className="not-italic">
                    <p className="font-semibold text-foreground">Five Star Rated Insurance</p>
                    <p>
                      Legal notices:{" "}
                      <a
                        href={`mailto:${LEGAL_EMAIL}`}
                        className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                      >
                        {LEGAL_EMAIL}
                      </a>
                    </p>
                    <p>
                      General support:{" "}
                      <a
                        href={`mailto:${SUPPORT_EMAIL}`}
                        className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                      >
                        {SUPPORT_EMAIL}
                      </a>
                    </p>
                    <p>
                      Privacy:{" "}
                      <a
                        href={`mailto:${PRIVACY_EMAIL}`}
                        className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                      >
                        {PRIVACY_EMAIL}
                      </a>
                    </p>
                    <p>
                      Mailing address (legal notices):{" "}
                      <span className="font-medium text-navy">{MAILING_ADDRESS}</span>, Attn:
                      Legal Notices.
                    </p>
                  </address>
                </div>
              </section>

              <footer className="border-t border-border pt-6 text-xs text-muted-foreground">
                <p>
                  Effective Date: {EFFECTIVE_DATE}. Last Updated: {LAST_UPDATED}. Version{" "}
                  {TERMS_VERSION}.
                </p>
                <p className="mt-1">
                  These Terms are governed by the laws of the State of Arizona and are
                  coordinated with the Privacy Policy, the TCPA Consent Disclosure, and the
                  Do Not Sell or Share My Personal Information page.
                </p>
              </footer>
            </article>

            {/* Table of contents */}
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
 * [ ] Provision and monitor the legal@fivestarratedinsurance.com mailbox. It
 *     must be actively monitored because Section 16.1 (Notice of Dispute) and
 *     Section 16.5 (30-day arbitration opt-out) rely on it, and missed emails
 *     may prevent the company from relying on the arbitration agreement.
 * [ ] Designate a DMCA copyright agent (Section 11.6) and register the agent
 *     with the U.S. Copyright Office Designated Agent Directory. Replace
 *     DMCA_AGENT_NAME with the registered name/title.
 * [ ] Document an arbitration opt-out intake process: how legal@ tickets are
 *     labeled, who reviews them, how opt-out records are retained, and how
 *     the opt-out list is shared with dispute-resolution counsel. Retain
 *     opt-out notices for the length of the applicable limitations period.
 * [ ] Replace MAILING_ADDRESS "[INSERT ADDRESS]" with the production mailing
 *     address for legal notices. This address is referenced in Section 11.6
 *     (DMCA), Section 16.1 (Notice of Dispute), and Section 25 (Notices).
 * [ ] Consistency check with the TCPA Consent Disclosure at
 *     /tcpa-consent-disclosure: arbitration provider, class-action waiver,
 *     jury trial waiver, small-claims carve-out, 30-day opt-out window,
 *     Arizona governing law, and Maricopa County venue must all remain
 *     aligned. Note that the TCPA Disclosure sends arbitration opt-outs to
 *     privacy@ while these Terms send them to legal@ — confirm with counsel
 *     whether to consolidate to a single mailbox.
 * [ ] Consistency check with the Privacy Policy at /privacy-policy: incorporation
 *     by reference, contact addresses, and data-handling descriptions must be
 *     consistent. If the Privacy Policy is updated, review Section 10 of these
 *     Terms for any needed changes.
 * [ ] Consistency check with /do-not-sell-or-share: non-discrimination
 *     language and the California opt-out flow must be aligned.
 * [ ] Decide whether to commit to a single arbitration provider (AAA or JAMS)
 *     in Section 16.3 or keep the consumer-election language. If you commit
 *     to one, update both this page and the TCPA Consent Disclosure.
 * [ ] Confirm that any carrier or Protegrity-facing agreements do not conflict
 *     with the indemnification (Section 15), liability cap (Section 14), or
 *     arbitration (Section 16) provisions of these Terms.
 * [ ] Decide whether to publish a public version history of these Terms.
 *     Update the TODO in Section 18 accordingly.
 * [ ] Route this draft through a qualified attorney (Arizona bar membership
 *     recommended given Arizona governing-law and Maricopa County venue) for
 *     final review before go-live.
 */
