/**
 * DRAFT — ATTORNEY REVIEW REQUIRED BEFORE PRODUCTION USE.
 *
 * "Do Not Sell or Share My Personal Information" page for Five Star Rated
 * Insurance (fivestarratedinsurance.com), an Arizona marketing and lead
 * generation company that refers consumer leads to Protegrity Insurance
 * Brokerage. This page exists to satisfy the consumer-facing opt-out link
 * required by the California Consumer Privacy Act (CCPA) as amended by the
 * California Privacy Rights Act (CPRA), and analogous state laws.
 *
 * Unknown values are flagged inline with TODO: VERIFY comments so the
 * business owner and reviewing attorney can confirm or replace each item.
 *
 * Coordinated with: /privacy-policy (Privacy Policy) and
 * /tcpa-consent-disclosure (TCPA Consent Disclosure). Identity verification,
 * sharing categories, and non-discrimination language must remain consistent
 * across these documents.
 */

import { Footer, Header } from "@/components/layout"
import type { Metadata } from "next"
import Link from "next/link"
import { PrintButton } from "./print-button"
import { OptOutForm } from "./opt-out-form"

const SITE_URL = "https://www.fivestarratedinsurance.com"
const CANONICAL_PATH = "/do-not-sell-or-share"

const EFFECTIVE_DATE = "April 22, 2026"
const LAST_UPDATED = "April 22, 2026"

const PRIVACY_EMAIL = "privacy@fivestarratedinsurance.com"
// TODO: VERIFY - replace with production phone number for privacy inquiries
const PRIVACY_PHONE = "[INSERT PHONE]"
// TODO: VERIFY - replace with production mailing address for privacy inquiries
const MAILING_ADDRESS = "[INSERT ADDRESS]"

export const metadata: Metadata = {
  title: "Do Not Sell or Share My Personal Information | Five Star Rated Insurance",
  description:
    "California and other state residents can submit a request to opt out of the sale or sharing of their personal information by Five Star Rated Insurance.",
  alternates: {
    canonical: CANONICAL_PATH,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Do Not Sell or Share My Personal Information | Five Star Rated Insurance",
    description:
      "Submit an opt-out request under the California Consumer Privacy Act and other state privacy laws.",
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
    name: "Do Not Sell or Share My Personal Information",
    headline: "Do Not Sell or Share My Personal Information",
    url: `${SITE_URL}${CANONICAL_PATH}`,
    description:
      "Opt-out request page for the sale or sharing of personal information under the California Consumer Privacy Act (CCPA/CPRA) and analogous state privacy laws.",
    datePublished: "2026-04-22",
    dateModified: "2026-04-22",
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
      { "@type": "Thing", name: "California Consumer Privacy Act (CCPA/CPRA)" },
      { "@type": "Thing", name: "Opt-out of sale and sharing of personal information" },
      { "@type": "Thing", name: "Global Privacy Control (GPC)" },
    ],
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Do Not Sell or Share My Personal Information",
          item: `${SITE_URL}${CANONICAL_PATH}`,
        },
      ],
    },
  },
]

type TocItem = { id: string; label: string }

const tableOfContents: TocItem[] = [
  { id: "intro", label: "Overview" },
  { id: "what-we-share", label: "What We Share" },
  { id: "what-we-dont-do", label: "What We Do Not Do" },
  { id: "request-form", label: "Submit Your Request" },
  { id: "gpc", label: "Global Privacy Control (GPC)" },
  { id: "alternative-methods", label: "Alternative Ways to Submit" },
  { id: "verification", label: "Identity Verification" },
  { id: "non-discrimination", label: "Non-Discrimination" },
  { id: "response-process", label: "What Happens After You Submit" },
  { id: "other-rights", label: "Your Other Privacy Rights" },
  { id: "contact", label: "Contact for Questions" },
  { id: "related", label: "Related Documents" },
]

export default function DoNotSellOrSharePage() {
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
                Privacy Rights
              </p>
              <h1
                id="page-title"
                className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl"
              >
                Do Not Sell or Share My Personal Information
              </h1>
              <dl className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                <div className="flex flex-wrap gap-2">
                  <dt className="font-semibold text-foreground">Effective Date:</dt>
                  <dd>{EFFECTIVE_DATE}</dd>
                </div>
                <div className="flex flex-wrap gap-2">
                  <dt className="font-semibold text-foreground">Last Updated:</dt>
                  <dd>{LAST_UPDATED}</dd>
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
                <span className="ml-auto print:hidden">
                  <PrintButton />
                </span>
              </div>
            </div>
          </section>

          <div className="container mx-auto grid max-w-6xl gap-10 px-4 py-10 md:py-14 lg:grid-cols-[minmax(0,1fr)_260px]">
            <article
              aria-labelledby="page-title"
              className="order-2 space-y-12 text-base leading-relaxed text-foreground lg:order-1"
            >
              {/* Intro */}
              <section id="intro" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  Overview
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    California and several other U.S. states give residents the right to opt
                    out of the sale or sharing of their personal information. This page lets
                    you submit that request to Five Star Rated Insurance.
                  </p>
                  <p>
                    You do not need to create an account, and you will not lose access to any
                    of our services by submitting this request. We will process your request
                    within the timeframe required by applicable law.
                  </p>
                </div>
              </section>

              {/* What we share */}
              <section id="what-we-share" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  What We Share
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    Under California law, &quot;sharing&quot; includes disclosing personal
                    information to a third party for cross-context behavioral advertising —
                    that is, targeted ads based on your browsing across different sites and
                    services. You do not have to receive money for the disclosure to qualify
                    as &quot;sharing.&quot;
                  </p>
                  <p>
                    If our Site uses advertising pixels or tags — such as the Meta Pixel,
                    Google Ads remarketing tags, TikTok Pixel, or LinkedIn Insight Tag — that
                    send online identifiers to advertising platforms, that activity may be
                    considered &quot;sharing&quot; under the California Consumer Privacy Act
                    as amended by the California Privacy Rights Act (CCPA/CPRA) and analogous
                    state laws. Submitting the form below opts you out of that activity to the
                    extent it occurs.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {/* TODO: VERIFY — confirm which advertising pixels are installed on the
                    Site (Meta Pixel, Google Ads remarketing, TikTok Pixel, LinkedIn Insight
                    Tag, etc.) and update this section accordingly, or state "None currently
                    in use" if no advertising pixels are deployed. */}
                    A reviewing attorney and the business owner should confirm the specific
                    advertising pixels currently deployed before this page goes live.
                  </p>
                </div>
              </section>

              {/* What we don't do */}
              <section id="what-we-dont-do" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  What We Do Not Do
                </h2>
                <div className="mt-4 space-y-4">
                  <p className="rounded-md border border-navy/20 bg-yellow-50 p-4 font-semibold">
                    We do not sell personal information in exchange for monetary
                    consideration.
                  </p>
                  <p>
                    We refer consumer inquiries to Protegrity Insurance Brokerage, our
                    licensed referral partner, and to service providers that help us operate
                    the Site. Those disclosures are governed by written contracts and are not
                    sales of personal information. See our{" "}
                    <Link
                      href="/privacy-policy"
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      Privacy Policy
                    </Link>{" "}
                    for the full list of recipients and purposes.
                  </p>
                </div>
              </section>

              {/* Request form */}
              <section id="request-form" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  Submit Your Request
                </h2>
                <p className="mt-4">
                  Use the form below to submit your &quot;Do Not Sell or Share My Personal
                  Information&quot; request. You will receive a reference number on screen and
                  a confirmation email when your request is received.
                </p>
                <div className="mt-6">
                  <OptOutForm />
                </div>
              </section>

              {/* GPC */}
              <section id="gpc" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  Global Privacy Control (GPC)
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    We honor the Global Privacy Control (GPC) signal. GPC is a setting
                    supported by several browsers and browser extensions that tells websites
                    you want to opt out of the sale and sharing of your personal information
                    automatically, without submitting a form on each site you visit.
                  </p>
                  <p>
                    If your browser sends a GPC signal when you visit our Site, we treat it as
                    a valid opt-out of sharing for that browser and device, consistent with
                    California law. No form submission is required in that case.
                  </p>
                  <p>
                    GPC applies on a per-browser, per-device basis. If you use multiple
                    browsers or devices and want the opt-out to apply everywhere, either
                    enable GPC in each one or submit the form above.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    You can learn more about Global Privacy Control at globalprivacycontrol.org.
                  </p>
                </div>
              </section>

              {/* Alternative methods */}
              <section id="alternative-methods" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  Alternative Ways to Submit
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    If you prefer not to use the form above, you can submit your request by
                    any of the following methods:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      <strong>Email:</strong>{" "}
                      <a
                        href={`mailto:${PRIVACY_EMAIL}?subject=Do%20Not%20Sell%20or%20Share%20Request`}
                        className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                      >
                        {PRIVACY_EMAIL}
                      </a>{" "}
                      with the subject line &quot;Do Not Sell or Share Request.&quot; Please
                      include your full name, email, ZIP code, and state of residence so we
                      can verify your identity.
                    </li>
                    <li>
                      <strong>Phone:</strong>{" "}
                      <span className="font-medium text-navy">{PRIVACY_PHONE}</span>.{" "}
                      <span className="text-muted-foreground">
                        {/* TODO: VERIFY - replace with production phone number */}
                      </span>
                    </li>
                    <li>
                      <strong>Mail:</strong>{" "}
                      <span className="font-medium text-navy">{MAILING_ADDRESS}</span>, Attn:
                      Privacy and Consent Team.{" "}
                      <span className="text-muted-foreground">
                        {/* TODO: VERIFY - replace with production mailing address */}
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Identity verification */}
              <section id="verification" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  Identity Verification
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    Before we apply your opt-out, we may need to verify that the request
                    actually comes from you. This protects your personal information from
                    unauthorized opt-outs submitted by others.
                  </p>
                  <p>
                    Verification typically involves matching two or three of the data points
                    you submitted (such as your name, email, phone number, ZIP code, and
                    state) against the information in our records. If we cannot verify your
                    identity from the information you submitted, we may contact you at the
                    email address you provide and ask for additional information.
                  </p>
                  <p>
                    <strong>Authorized agents.</strong> If you are submitting on behalf of
                    another person as their authorized agent, we will also verify the
                    agent&apos;s identity and review the written authorization or power of
                    attorney you upload. We may contact the consumer directly to confirm the
                    authorization.
                  </p>
                </div>
              </section>

              {/* Non-discrimination */}
              <section id="non-discrimination" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  Non-Discrimination
                </h2>
                <div className="mt-4 space-y-4">
                  <p className="rounded-md border border-navy/20 bg-card p-4">
                    We will not discriminate against you for exercising your privacy rights.
                    You will receive the same quality of service and the same pricing whether
                    or not you exercise these rights.
                  </p>
                  <p>
                    Submitting this request will not affect your ability to request insurance
                    quotes, speak with a licensed agent at Protegrity Insurance Brokerage, or
                    use any public-facing feature of our Site.
                  </p>
                </div>
              </section>

              {/* Response process */}
              <section id="response-process" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  What Happens After You Submit
                </h2>
                <div className="mt-4 space-y-4">
                  <ol className="list-decimal space-y-2 pl-6">
                    <li>
                      Your request is logged with a unique reference number, the date and time
                      it was submitted, your IP address, and your browser user-agent for audit
                      purposes.
                    </li>
                    <li>
                      We verify your identity against our records using the information you
                      provided. If we need more information, we will email you at the address
                      you supplied.
                    </li>
                    <li>
                      Once verified, we apply your opt-out to our systems and to the
                      advertising and analytics tools we use that may qualify as
                      &quot;sharing&quot; under California law.
                    </li>
                    <li>
                      We send you a confirmation when your request is complete. We will
                      process your request within 15 business days as required by California
                      law. If we need additional time to process a complex request, we will
                      let you know by email.
                    </li>
                  </ol>
                </div>
              </section>

              {/* Other rights */}
              <section id="other-rights" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  Your Other Privacy Rights
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    California residents have additional rights beyond opting out of sale and
                    sharing, including the right to know what personal information we collect
                    about you, the right to delete that information, the right to correct
                    inaccurate information, and the right to limit the use and disclosure of
                    sensitive personal information.
                  </p>
                  <p>
                    For a full description of these rights and instructions on how to exercise
                    them, see the{" "}
                    <Link
                      href="/privacy-policy#state-rights"
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      California Privacy Rights section of our Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section id="contact" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  Contact for Questions
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    If you have questions about this page or about a request you have
                    submitted, please contact our Privacy and Consent Team:
                  </p>
                  <address className="not-italic">
                    <p className="font-semibold text-foreground">
                      Five Star Rated Insurance, Privacy and Consent Team
                    </p>
                    <p>
                      Email:{" "}
                      <a
                        href={`mailto:${PRIVACY_EMAIL}`}
                        className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                      >
                        {PRIVACY_EMAIL}
                      </a>
                    </p>
                    <p>
                      Phone:{" "}
                      <span className="font-medium text-navy">{PRIVACY_PHONE}</span>
                    </p>
                  </address>
                </div>
              </section>

              {/* Related documents */}
              <section id="related" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  Related Documents
                </h2>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      Privacy Policy
                    </Link>{" "}
                    — how we collect, use, and share information, and the full list of state
                    privacy rights.
                  </li>
                  <li>
                    <Link
                      href="/tcpa-consent-disclosure"
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      TCPA Consent Disclosure
                    </Link>{" "}
                    — how we obtain and honor consent to contact you by phone, text, and
                    email.
                  </li>
                </ul>
              </section>

              <footer className="border-t border-border pt-6 text-xs text-muted-foreground">
                <p>
                  Effective Date: {EFFECTIVE_DATE}. Last Updated: {LAST_UPDATED}.
                </p>
                <p className="mt-1">
                  This page is provided to satisfy the consumer-facing opt-out link required
                  by the California Consumer Privacy Act (CCPA) as amended by the California
                  Privacy Rights Act (CPRA), and analogous state privacy laws.
                </p>
              </footer>
            </article>

            {/* Table of contents */}
            <aside
              aria-label="Table of contents"
              className="order-1 h-fit rounded-lg border border-border bg-card p-5 text-sm lg:order-2 lg:sticky lg:top-24 print:hidden"
            >
              <h2 className="font-heading text-base font-bold text-foreground">
                On this page
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
