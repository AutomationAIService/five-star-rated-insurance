"use client"

import Script from "next/script"

import { useCookieConsent } from "./CookieConsentProvider"

/**
 * Loads analytics and advertising tags only after the user grants the
 * corresponding consent. Uses Google Consent Mode v2: we initialize gtag
 * with all advertising/analytics/personalization storage denied *before*
 * any tag loads, then rely on the provider to push a `consent update` call
 * once the user chooses.
 *
 * TODO: VERIFY - set NEXT_PUBLIC_GA_MEASUREMENT_ID in your environment once
 * the GA4 property is provisioned. When the env var is empty (as it is in
 * the default development build), no analytics script is rendered and
 * Consent Mode still gates any late-added tags.
 *
 * TODO: VERIFY - if Meta Pixel, Google Ads, TikTok Pixel, or LinkedIn
 * Insight Tag are installed later, wire them up here and gate them on
 * `preferences.advertising === true`. Prefer Google Tag Manager with
 * consent-based triggers for any non-trivial tag stack.
 */
export function ConsentGatedScripts() {
  const { preferences } = useCookieConsent()
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <>
      {/*
        Consent Mode v2 bootstrap. Runs before any tag script so that gtag is
        defined globally and defaults to "denied" for every non-essential
        storage type. The provider calls gtag('consent', 'update', ...) once
        the user makes a choice, which Google's tags honor automatically.
      */}
      <Script id="consent-mode-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            functionality_storage: 'denied',
            personalization_storage: 'denied',
            security_storage: 'granted',
            wait_for_update: 500
          });
          gtag('set', 'ads_data_redaction', true);
        `}
      </Script>

      {gaMeasurementId && preferences.analytics ? (
        <>
          <Script
            id="ga4-loader"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              gtag('js', new Date());
              gtag('config', '${gaMeasurementId}', {
                anonymize_ip: true
              });
            `}
          </Script>
        </>
      ) : null}

      {/*
        Advertising tags go here, gated on preferences.advertising === true.
        Example (only uncomment after verifying the pixel is actually
        installed and approved by counsel):

        {preferences.advertising ? (
          <Script id="meta-pixel" strategy="afterInteractive">{`
            !function(f,b,e,v,n,t,s){...}
            fbq('init', '<PIXEL_ID>');
            fbq('track', 'PageView');
          `}</Script>
        ) : null}
      */}
    </>
  )
}
