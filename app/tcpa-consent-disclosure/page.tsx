/**
 * THIS DOCUMENT IS A DRAFT. REVIEW BY A QUALIFIED TCPA/PRIVACY ATTORNEY
 * LICENSED IN ARIZONA IS REQUIRED BEFORE PRODUCTION USE.
 *
 * Source document: TCPA, SMS, and consumer-contact consent disclosure for
 * Five Star Rated Insurance (fivestarratedinsurance.com), an Arizona
 * independent insurance review and lead referral site that refers
 * consumer leads to Protegrity Insurance Brokerage (licensed).
 *
 * Unknowns are flagged inline with /* TODO: VERIFY *\/ comments so the
 * business owner and reviewing attorney can confirm or replace each item.
 */

import { Footer, Header } from "@/components/layout"
import type { Metadata } from "next"
import Link from "next/link"
import { PrintButton } from "./print-button"

const SITE_URL = "https://www.fivestarratedinsurance.com"
const CANONICAL_PATH = "/tcpa-consent-disclosure"

const EFFECTIVE_DATE = "April 18, 2026"
const LAST_UPDATED = "April 22, 2026"

// TODO: VERIFY - replace with production phone number for privacy/consent inquiries
const PRIVACY_PHONE = "[INSERT PHONE]"
// TODO: VERIFY - replace with production mailing address for privacy/consent inquiries
const MAILING_ADDRESS = "[INSERT ADDRESS]"
const PRIVACY_EMAIL = "privacy@fivestarratedinsurance.com"

export const metadata: Metadata = {
  title: "TCPA Consent Disclosure | Five Star Rated Insurance",
  description:
    "TCPA, SMS, and consumer contact consent disclosure for Five Star Rated Insurance, an Arizona insurance lead referral site that partners with Protegrity Insurance Brokerage.",
  alternates: {
    canonical: CANONICAL_PATH,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "TCPA Consent Disclosure | Five Star Rated Insurance",
    description:
      "Consumer consent, SMS opt-out, and privacy disclosures for visitors who submit forms or interact with Ava, our chat assistant.",
    url: `${SITE_URL}${CANONICAL_PATH}`,
    siteName: "Five Star Rated Insurance",
    locale: "en_US",
    type: "article",
  },
}

// Note: Schema.org does not define a formal "PrivacyPolicy" type in its core
// vocabulary. We use WebPage with privacy-relevant properties (datePublished,
// dateModified, about, publisher) to meet the spirit of the request.
const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "TCPA Consent Disclosure",
    headline: "TCPA, SMS, and Consumer Contact Consent Disclosure",
    url: `${SITE_URL}${CANONICAL_PATH}`,
    description:
      "Disclosure of how Five Star Rated Insurance collects consent to contact consumers by phone, text, and email, including TCPA compliance, SMS opt-out procedures, and state privacy rights.",
    datePublished: "2026-04-18",
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
      { "@type": "Thing", name: "Telephone Consumer Protection Act (TCPA)" },
      { "@type": "Thing", name: "SMS opt-out and messaging consent" },
      { "@type": "Thing", name: "Consumer privacy rights" },
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
          name: "TCPA Consent Disclosure",
          item: `${SITE_URL}${CANONICAL_PATH}`,
        },
      ],
    },
  },
]

type TocItem = { id: string; label: string }

const tableOfContents: TocItem[] = [
  { id: "summary", label: "Summary at a Glance" },
  { id: "scope", label: "1. Scope of Consent" },
  { id: "methods", label: "2. Methods of Contact Covered by Consent" },
  { id: "logical-relationship", label: "3. Logical Relationship Statement" },
  { id: "not-a-condition", label: "4. Consent Is Not a Condition of Purchase" },
  { id: "frequency", label: "5. Message Frequency and Rates" },
  { id: "duration", label: "6. Consent Duration and Revocation" },
  { id: "opt-out", label: "7. Opt-Out Instructions by Channel" },
  { id: "sharing", label: "8. Information Sharing Specifics" },
  { id: "records", label: "9. Record of Consent" },
  { id: "cookies", label: "10. Cookies and Tracking Technologies" },
  { id: "state-rights", label: "11. State-Specific Rights" },
  { id: "glba", label: "12. GLBA Notice" },
  { id: "minors", label: "13. Minors" },
  { id: "arbitration", label: "14. Dispute Resolution, Arbitration, and Class Action Waiver" },
  { id: "changes", label: "15. Changes to This Disclosure" },
  { id: "contact", label: "16. Contact Information for Consent and Privacy Questions" },
  { id: "acknowledgment", label: "17. Acknowledgment Statement" },
]

export default function TcpaConsentDisclosurePage() {
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
                TCPA, SMS, and Consumer Contact Consent Disclosure
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
              <section aria-labelledby="summary" id="summary" className="scroll-mt-24">
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
                    document below.
                  </p>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>
                      When you submit a form or complete a conversation with Ava, our chat
                      assistant, you agree that Five Star Rated Insurance and Protegrity Insurance
                      Brokerage (our licensed referral partner) may contact you by phone, text, and
                      email about insurance quotes and coverage options.
                    </li>
                    <li>
                      Consent is NOT a condition of getting an insurance quote. You can request a
                      quote by calling us directly at {PRIVACY_PHONE} or by emailing{" "}
                      {PRIVACY_EMAIL}.
                    </li>
                    <li>
                      To stop text messages, reply STOP to any text. To unsubscribe from email,
                      click the unsubscribe link in any message. To stop phone calls, ask to be
                      removed during any call or email {PRIVACY_EMAIL}.
                    </li>
                    <li>
                      We do not sell your personal information to unaffiliated third parties for
                      their own marketing purposes.
                    </li>
                    <li>
                      Questions? Email {PRIVACY_EMAIL} or call {PRIVACY_PHONE}.
                    </li>
                  </ul>
                </div>
              </section>

              {/* 1. Scope of Consent */}
              <section id="scope" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  1. Scope of Consent
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    This TCPA Consent Disclosure (this &quot;Disclosure&quot;) describes the terms
                    on which you provide prior express written consent to be contacted when you
                    submit a form on this website or when you interact with our chat assistant
                    (&quot;Ava&quot;) in a way that results in the submission of your contact
                    information. &quot;You&quot; means the individual submitting the form or
                    interacting with Ava. &quot;We,&quot; &quot;us,&quot; and &quot;our&quot;
                    refer to Five Star Rated Insurance, an Arizona independent insurance review
                    and lead referral service operating the website at fivestarratedinsurance.com.
                    Five Star Rated Insurance is a referral service and is not a licensed
                    insurance brokerage, insurer, or producer.
                  </p>
                  <p>
                    By submitting a lead form or interacting with Ava in a manner that results in
                    the submission of your contact information, you provide prior express written
                    consent under the Telephone Consumer Protection Act (TCPA), 47 U.S.C. section
                    227, and its implementing Federal Communications Commission (FCC) rules, to be
                    contacted by the two identified parties named in this Disclosure.
                  </p>
                  <p>
                    <strong>Identified Seller.</strong> The identified seller receiving your
                    consent is Five Star Rated Insurance.
                  </p>
                  <p>
                    <strong>Named Sharing Partner.</strong> The named sharing partner authorized to
                    contact you under this Disclosure is Protegrity Insurance Brokerage, a
                    licensed Arizona insurance brokerage, together with its licensed agents acting
                    on its behalf. Insurance products, quotes, policy binding, and ongoing policy
                    service are provided by Protegrity Insurance Brokerage, not by Five Star Rated
                    Insurance.
                  </p>
                  <p>
                    <strong>One-to-One Consent.</strong> Consistent with the FCC&apos;s
                    one-to-one consent rule adopted in 2024, you are providing consent only to
                    Five Star Rated Insurance and to Protegrity Insurance Brokerage (together with
                    its licensed agents). You are not providing consent to any unnamed third
                    party, marketing network, or aggregator. We do not transfer your consent to
                    any party not named in this Disclosure.
                  </p>
                </div>
              </section>

              {/* 2. Methods of Contact */}
              <section id="methods" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  2. Methods of Contact Covered by Consent
                </h2>
                <div className="mt-4 space-y-4">
                  <p>Your consent covers the following methods of contact:</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      <strong>Telephone calls</strong>, including live operator calls and calls
                      placed using an automatic telephone dialing system, an artificial voice, or
                      a prerecorded or pre-recorded message.
                    </li>
                    <li>
                      <strong>SMS and MMS text messages</strong>, including automated text
                      messages sent from short codes, long codes, or toll-free numbers.
                    </li>
                    <li>
                      <strong>Email</strong>, including transactional, informational, and
                      marketing email.
                    </li>
                  </ul>
                  <p>
                    Your consent covers both marketing communications (for example, promotional
                    messages about insurance products and quotes) and informational
                    communications (for example, follow-up on an incomplete form, confirmation of
                    a scheduled call, or status updates on your referral to Protegrity Insurance
                    Brokerage).
                  </p>
                  <p>
                    Your consent authorizes contact even if your telephone number is listed on the
                    National Do Not Call Registry or any state do-not-call list, so long as your
                    consent remains in effect. Consent may be revoked at any time using the
                    methods described in Section 7 (Opt-Out Instructions by Channel).
                  </p>
                </div>
              </section>

              {/* 3. Logical Relationship */}
              <section id="logical-relationship" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  3. Logical Relationship Statement
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    The communications you will receive under this Disclosure are logically and
                    topically related to the content of this website, which is focused on
                    insurance education, insurance quote requests, and referrals to a licensed
                    insurance brokerage. Specifically, communications will relate to:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Insurance quotes for the lines of insurance offered on this website,
                      including auto, home, life, commercial auto, business, specialty, Mexico
                      travel, and other insurance products;</li>
                    <li>Coverage options, carrier selection, and policy design;</li>
                    <li>Follow-up regarding your insurance needs, including scheduling,
                      document collection, and connection to a licensed agent at Protegrity
                      Insurance Brokerage; and</li>
                    <li>Information about your existing or prior insurance inquiry with us or
                      Protegrity Insurance Brokerage.</li>
                  </ul>
                  <p>
                    We will not use your consent to send you communications that are unrelated to
                    insurance (for example, offers for unrelated retail products).
                  </p>
                </div>
              </section>

              {/* 4. Consent Is Not a Condition of Purchase */}
              <section id="not-a-condition" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  4. Consent Is Not a Condition of Purchase
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    <strong>
                      Your consent to receive automated marketing calls or text messages is not a
                      condition of obtaining an insurance quote or purchasing any insurance
                      product.
                    </strong>
                  </p>
                  <p>
                    If you do not wish to provide consent to automated contact, you may still
                    request a quote or speak with a licensed insurance professional at Protegrity
                    Insurance Brokerage by contacting us directly:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      Phone:{" "}
                      <span className="font-medium text-navy">{PRIVACY_PHONE}</span>
                    </li>
                    <li>
                      Email:{" "}
                      <span className="font-medium text-navy">{PRIVACY_EMAIL}</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* 5. Message Frequency and Rates */}
              <section id="frequency" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  5. Message Frequency and Rates
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    Message frequency varies based on user interaction. Message and data rates
                    may apply. Check with your wireless carrier for details on your messaging and
                    data plan.
                  </p>
                </div>
              </section>

              {/* 6. Consent Duration and Revocation */}
              <section id="duration" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  6. Consent Duration and Revocation
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    Your consent remains in effect until you revoke it. You may revoke consent at
                    any time using any of the opt-out methods described in Section 7 (Opt-Out
                    Instructions by Channel).
                  </p>
                  <p>
                    Revocation of consent does not affect the legality of communications made
                    before the revocation took effect. After you revoke consent for a particular
                    channel, we will process the revocation in accordance with the timelines
                    described in Section 7.
                  </p>
                </div>
              </section>

              {/* 7. Opt-Out by Channel */}
              <section id="opt-out" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  7. Opt-Out Instructions by Channel
                </h2>

                <div className="mt-4 space-y-6">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      7.1 SMS and MMS Text Messages
                    </h3>
                    <div className="mt-3 space-y-3">
                      <p>
                        To stop text messages, reply <strong>STOP</strong>,{" "}
                        <strong>UNSUBSCRIBE</strong>, <strong>CANCEL</strong>,{" "}
                        <strong>END</strong>, or <strong>QUIT</strong> to any message you receive
                        from us. Opt-out is honored immediately and automatically by our SMS
                        provider.
                      </p>
                      <p>
                        After you send a stop keyword, you will receive a one-time confirmation
                        message in substantially the following form: &quot;You have been
                        unsubscribed from Five Star Rated Insurance messages. No further messages
                        will be sent. Reply HELP for help.&quot;
                      </p>
                      <p>
                        For help, reply <strong>HELP</strong> to any message. You will receive
                        contact information for support, including a link or reference to this
                        page.
                      </p>
                      <p>
                        Standard message and data rates may apply. Supported carriers include all
                        major United States wireless carriers.{" "}
                        {/* TODO: VERIFY exact carrier list with your SMS provider */}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      7.2 Phone Calls
                    </h3>
                    <div className="mt-3 space-y-3">
                      <p>
                        To stop telephone calls, you may (a) request removal from our call list
                        during any live call, (b) email {PRIVACY_EMAIL} with a request to be
                        placed on our internal do-not-call list, or (c) call {PRIVACY_PHONE}. We
                        will honor your request as soon as reasonably practicable and in any
                        event within 30 days, consistent with FCC Do-Not-Call requirements. In
                        practice, removal is typically faster.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      7.3 Email
                    </h3>
                    <div className="mt-3 space-y-3">
                      <p>
                        To stop marketing email, click the unsubscribe link in any marketing
                        email we send, or reply to the email with the word &quot;Unsubscribe&quot;
                        in the subject line. Consistent with the CAN-SPAM Act (15 U.S.C. section
                        7701 et seq.), we will process unsubscribe requests within 10 business
                        days. Transactional messages necessary to respond to your specific
                        request (for example, a quote you asked us to send) may still be sent.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      7.4 Revoking All Forms of Consent
                    </h3>
                    <div className="mt-3 space-y-3">
                      <p>
                        You may email {PRIVACY_EMAIL} at any time to revoke all forms of consent
                        across all channels. Please include the name, email address, and phone
                        number associated with your request so that we can identify your records.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 8. Information Sharing */}
              <section id="sharing" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  8. Information Sharing Specifics
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    <strong>
                      We do not sell your personal information to unaffiliated third parties for
                      their own marketing purposes.
                    </strong>
                  </p>
                  <p>We share your personal information only with the following categories of
                    recipients:</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      <strong>Protegrity Insurance Brokerage and its licensed agents</strong>,
                      who provide insurance quotes and related services in response to your
                      inquiry.
                    </li>
                    <li>
                      <strong>Service providers acting on our behalf</strong>, including
                      website hosting, analytics, customer relationship management (CRM), SMS
                      providers, email service providers, call tracking, and lead management
                      vendors. Service providers are bound by written contracts that include
                      confidentiality obligations and limit their use of your information to
                      providing services to us.
                    </li>
                    <li>
                      <strong>Required disclosures</strong>, including disclosures required by
                      subpoena, court order, regulatory request, or applicable law, and
                      disclosures necessary to establish, exercise, or defend legal claims.
                    </li>
                  </ul>
                  <p>
                    If we ever plan to share your information with a category of recipient not
                    listed above, we will update this Disclosure first and, where required by
                    law, obtain additional consent.
                  </p>
                </div>
              </section>

              {/* 9. Record of Consent */}
              <section id="records" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  9. Record of Consent
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    When you provide consent through a form on this website or through an
                    interaction with Ava, we create and retain a record of that consent. The
                    record typically includes:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>The date and time (timestamp) of your submission;</li>
                    <li>The IP address from which the submission was made;</li>
                    <li>The user-agent string (browser and device information) associated
                      with the submission;</li>
                    <li>The URL of the form or page on which the consent was given;</li>
                    <li>The exact text of the consent disclosure and consent checkbox label
                      displayed at the time of submission; and</li>
                    <li>The contents of the form submission (for example, the fields you
                      completed, such as name, email, phone, and insurance type).</li>
                  </ul>
                  <p>
                    We retain consent records for a minimum of five (5) years, or longer where
                    required by applicable law or where reasonably necessary to respond to legal
                    claims, regulatory inquiries, or disputes. Records are stored using access
                    controls intended to preserve their integrity.
                  </p>
                </div>
              </section>

              {/* 10. Cookies */}
              <section id="cookies" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  10. Cookies and Tracking Technologies
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    This website uses cookies and similar tracking technologies for purposes that
                    include recording your consent (including consent-banner selections),
                    analytics, site functionality, and attribution of marketing activity. For
                    more information about cookies, the categories we use, and how to manage
                    your preferences, please see our{" "}
                    <Link
                      href="/privacy-policy"
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      Privacy Policy
                    </Link>
                    .{/* TODO: VERIFY - replace with dedicated cookie policy link if one is published */}
                  </p>
                </div>
              </section>

              {/* 11. State rights */}
              <section id="state-rights" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  11. State-Specific Rights
                </h2>

                <div className="mt-4 space-y-6">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      11.1 California Residents (CCPA and CPRA)
                    </h3>
                    <div className="mt-3 space-y-3">
                      <p>
                        If you are a California resident, you have the following rights under the
                        California Consumer Privacy Act and the California Privacy Rights Act
                        (together, &quot;CCPA/CPRA&quot;), subject to exceptions and limitations
                        in those laws:
                      </p>
                      <ul className="list-disc space-y-2 pl-6">
                        <li>Right to know what personal information we collect, use, disclose,
                          and share;</li>
                        <li>Right to delete personal information we have collected about you;</li>
                        <li>Right to correct inaccurate personal information;</li>
                        <li>Right to opt out of the sale or sharing of personal information;</li>
                        <li>Right to limit use and disclosure of sensitive personal
                          information; and</li>
                        <li>Right to be free from discrimination for exercising these rights.</li>
                      </ul>
                      <p>
                        <strong>Do Not Sell or Share My Personal Information.</strong> We do not
                        sell personal information to unaffiliated third parties for their own
                        marketing purposes. To submit a &quot;Do Not Sell or Share&quot; request,
                        or to exercise any other CCPA/CPRA right, email {PRIVACY_EMAIL} or call{" "}
                        {PRIVACY_PHONE}. We will verify your request consistent with CCPA/CPRA
                        requirements.{" "}
                        {/* TODO: VERIFY - implement CCPA "Do Not Sell or Share My Personal Information" link/mechanism and link here once live */}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      11.2 Colorado, Connecticut, Virginia, and Utah Residents
                    </h3>
                    <div className="mt-3 space-y-3">
                      <p>
                        If you reside in Colorado (Colorado Privacy Act), Connecticut (Connecticut
                        Data Privacy Act), Virginia (Virginia Consumer Data Protection Act), or
                        Utah (Utah Consumer Privacy Act), you generally have the following
                        rights, subject to exceptions and limitations in those laws:
                      </p>
                      <ul className="list-disc space-y-2 pl-6">
                        <li>Right to confirm whether we process your personal data and to
                          access that data;</li>
                        <li>Right to correct inaccuracies in your personal data;</li>
                        <li>Right to delete your personal data;</li>
                        <li>Right to obtain a portable copy of your personal data; and</li>
                        <li>Right to opt out of targeted advertising, the sale of personal
                          data, and certain forms of profiling.</li>
                      </ul>
                      <p>
                        To exercise any of these rights, email {PRIVACY_EMAIL}. If we deny your
                        request, you may appeal our decision by replying to our response with the
                        word &quot;Appeal&quot; in the subject line.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      11.3 Arizona Residents
                    </h3>
                    <div className="mt-3 space-y-3">
                      <p>
                        If you are an Arizona resident, you may have rights under Arizona
                        consumer protection statutes, including Arizona Revised Statutes (A.R.S.)
                        Title 44. To exercise any applicable rights or to ask questions about how
                        we handle your personal information in Arizona, email {PRIVACY_EMAIL} or
                        call {PRIVACY_PHONE}.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      11.4 How to Exercise State Rights
                    </h3>
                    <div className="mt-3 space-y-3">
                      <p>
                        To exercise any state privacy right described above, email{" "}
                        {PRIVACY_EMAIL} with the subject line &quot;Privacy Rights Request&quot;
                        and include the state in which you reside, the right you want to
                        exercise, and enough information for us to verify your identity (for
                        example, the name, email, and phone number you previously submitted). We
                        respond within the timeframes required by the applicable state law.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 12. GLBA */}
              <section id="glba" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  12. GLBA Notice
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    To the extent Five Star Rated Insurance handles nonpublic personal financial
                    information about insurance consumers, we strive to handle that information
                    consistent with the Gramm-Leach-Bliley Act (GLBA) and its implementing
                    regulations. Protegrity Insurance Brokerage, as the licensed insurance
                    brokerage that receives referrals, independently handles GLBA-covered
                    information when it quotes and places policies. For additional details,
                    please see our{" "}
                    <Link
                      href="/privacy-policy"
                      className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* 13. Minors */}
              <section id="minors" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  13. Minors
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    This website is not directed to children or individuals under 18 years of
                    age. We do not knowingly collect personal information from, or accept consent
                    from, individuals under 18. If you believe that a minor has provided us with
                    personal information, please contact {PRIVACY_EMAIL} so that we can delete
                    the information and, where appropriate, terminate any account.
                  </p>
                </div>
              </section>

              {/* 14. Arbitration - visually distinct */}
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
                    14. Dispute Resolution, Arbitration, and Class Action Waiver
                  </h2>
                  <div className="mt-5 space-y-4 text-[15px] leading-relaxed md:text-base">
                    <p>
                      <strong>14.1 Binding Individual Arbitration.</strong> Except as described
                      in Section 14.4 (Carve-Outs and Non-Waivable Rights) and Section 14.5
                      (Small Claims), you and Five Star Rated Insurance agree that any dispute,
                      claim, or controversy arising out of or relating to this Disclosure, your
                      use of this website, any communications you receive from us, or the
                      collection or processing of your information, will be resolved by
                      <strong> binding individual arbitration</strong>, and not in court.
                    </p>
                    <p>
                      <strong>14.2 Arbitration Provider and Rules.</strong> Arbitration will be
                      administered by either the American Arbitration Association (AAA) under its
                      Consumer Arbitration Rules, or JAMS under its Streamlined Arbitration Rules
                      and Procedures, at your election. Arbitration will be conducted by a single
                      neutral arbitrator.{" "}
                      {/* TODO: VERIFY - select and commit to one arbitration provider if preferred */}
                    </p>
                    <p>
                      <strong>14.3 Class Action Waiver and Jury Trial Waiver.</strong>{" "}
                      <strong>
                        You and Five Star Rated Insurance each waive any right to a jury trial
                        and waive any right to bring or participate in a class action, collective
                        action, mass action, or representative proceeding.
                      </strong>{" "}
                      The arbitrator may not consolidate claims or preside over any form of
                      representative or class proceeding.
                    </p>
                    <p>
                      <strong>14.4 Carve-Outs and Non-Waivable Rights.</strong> This Section 14
                      does not require you to waive any right that you cannot waive as a matter
                      of law. For example, nothing in this Section 14 prevents you from
                      exercising any non-waivable statutory right, including any non-waivable
                      right to bring a private action under the California Consumer Privacy Act
                      for a data breach that meets the CCPA&apos;s statutory requirements. If a
                      particular right cannot be resolved in arbitration under applicable law,
                      that right may be pursued in court, but all remaining disputes must still
                      be resolved by individual arbitration as described above.
                    </p>
                    <p>
                      <strong>14.5 Small Claims.</strong> Either party may bring an individual
                      action in a small claims court of competent jurisdiction for any claim
                      that qualifies for small claims court, so long as the action remains
                      individual and is not consolidated with any other proceeding.
                    </p>
                    <p>
                      <strong>14.6 30-Day Right to Opt Out of Arbitration.</strong> You may opt
                      out of the arbitration agreement in this Section 14 by sending written
                      notice to {PRIVACY_EMAIL} within 30 days after you first submit a form or
                      interact with Ava in a manner that results in the submission of your
                      information. Your opt-out notice must include your full name, the email
                      address and phone number you submitted, and a clear statement that you are
                      opting out of arbitration with Five Star Rated Insurance. A timely opt-out
                      will not affect any other part of this Disclosure, including any prior
                      consent you provided.
                    </p>
                    <p>
                      <strong>14.7 Governing Law and Venue.</strong> This Disclosure and any
                      dispute arising out of or relating to it are governed by the laws of the
                      State of Arizona, without regard to its conflict-of-law principles. To the
                      extent a dispute is not subject to arbitration under this Section 14, the
                      state and federal courts located in Maricopa County, Arizona shall have
                      exclusive jurisdiction and venue, and you consent to personal jurisdiction
                      there.
                    </p>
                  </div>
                </div>
              </section>

              {/* 15. Changes */}
              <section id="changes" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  15. Changes to This Disclosure
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    We may update this Disclosure from time to time. When we make material
                    changes, we will post the updated document on this page with a revised
                    &quot;Effective Date&quot; and &quot;Last Updated&quot; date at the top. For
                    material changes to the consent terms, and where practicable, we will
                    additionally notify affected users by email using the email address on file.
                    Your continued use of this website after the revised Effective Date
                    constitutes your acceptance of the updated Disclosure. If you do not agree
                    to the updated Disclosure, you should stop using the website and may contact
                    {" "}
                    {PRIVACY_EMAIL} to revoke consent.
                  </p>
                </div>
              </section>

              {/* 16. Contact */}
              <section id="contact" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  16. Contact Information for Consent and Privacy Questions
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    For questions, complaints, consent revocations, or privacy-rights requests
                    related to this Disclosure, please contact:
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
                    For insurance-specific questions about a quote, policy, coverage, billing,
                    claim, or other licensed activities, please contact Protegrity Insurance
                    Brokerage directly. Insurance-licensed activities are handled by Protegrity
                    Insurance Brokerage and not by Five Star Rated Insurance.
                  </p>
                </div>
              </section>

              {/* 17. Acknowledgment */}
              <section id="acknowledgment" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  17. Acknowledgment Statement
                </h2>
                <div className="mt-4 rounded-lg border border-navy/20 bg-card p-5 text-sm leading-relaxed md:text-base">
                  <p>
                    By submitting any form on this website or by completing an interaction with
                    Ava that results in the submission of your contact information, you
                    acknowledge that you have read, understood, and agreed to this Disclosure,
                    including the arbitration agreement and class action waiver in Section 14
                    (subject to your right to opt out of arbitration within 30 days as described
                    in Section 14.6). You further acknowledge that you are at least 18 years old
                    and that the contact information you provide is your own or that you are
                    authorized to provide it.
                  </p>
                </div>
              </section>

              <footer className="border-t border-border pt-6 text-xs text-muted-foreground">
                <p>
                  Effective Date: {EFFECTIVE_DATE}. Last Updated: {LAST_UPDATED}.
                </p>
                <p className="mt-1">
                  Five Star Rated Insurance strives to comply with applicable laws, including the
                  Telephone Consumer Protection Act, the CAN-SPAM Act, the Gramm-Leach-Bliley
                  Act, and applicable state consumer privacy statutes.
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
 *     phone number used for privacy and consent inquiries.
 * [ ] Replace MAILING_ADDRESS placeholder "[INSERT ADDRESS]" with the
 *     production mailing address for privacy and consent inquiries.
 * [ ] Confirm Five Star Rated Insurance's registered agent on file with the
 *     Arizona Corporation Commission (or equivalent) matches the business
 *     information referenced in this page and in privacy/consent email
 *     responses.
 * [ ] Confirm the SMS messaging provider supports the STOP/UNSUBSCRIBE/
 *     CANCEL/END/QUIT and HELP keywords with automatic handling, and that
 *     the opt-out confirmation message in Section 7.1 matches what is
 *     actually sent by the provider.
 * [ ] Commit to a specific arbitration provider (AAA or JAMS) in Section 14.2,
 *     or confirm the consumer-choice language remains acceptable.
 * [ ] Confirm consent-logging backend captures timestamp, IP address,
 *     user-agent string, URL of form, exact consent text displayed, and
 *     form contents, stored in tamper-evident storage for at least 5 years.
 * [ ] Implement the CCPA/CPRA "Do Not Sell or Share My Personal Information"
 *     mechanism (dedicated link, form, or intake workflow) and update
 *     Section 11.1 to reference it.
 * [ ] Integrate a consent/cookie banner that records cookie-category
 *     selections, and either publish a standalone cookie policy or confirm
 *     that the Privacy Policy includes a full cookie notice referenced by
 *     Section 10.
 * [ ] Verify every lead form on the site (and the Ava chatbot completion
 *     flow) renders a required, unchecked-by-default consent checkbox with
 *     the exact language described in the form integration requirements,
 *     and that submission fails without it.
 * [ ] Coordinate with Protegrity Insurance Brokerage to confirm they accept
 *     being named as the sole sharing partner in Section 1, and to align
 *     their own licensed-agent privacy notices with this Disclosure.
 * [ ] Route this draft through a qualified TCPA/privacy attorney licensed
 *     in Arizona for final review before go-live.
 */
