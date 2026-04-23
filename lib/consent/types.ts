/**
 * Shared types and constants for the native Cookie Consent flow.
 *
 * Keep in sync with:
 *  - components/consent/CookieConsentProvider.tsx (state machine)
 *  - components/consent/CookieConsentBanner.tsx (first-visit banner)
 *  - components/consent/CookiePreferencesModal.tsx (per-category toggles)
 *  - app/api/consent/route.ts (audit logging endpoint)
 *  - app/cookie-policy/page.tsx (user-facing policy)
 */

export type ConsentCategory = "necessary" | "functional" | "analytics" | "advertising"

export type ConsentChoice = "accept-all" | "reject-all" | "custom" | "gpc"

export interface ConsentPreferences {
  /** Always true. Strictly necessary cookies cannot be disabled. */
  necessary: true
  functional: boolean
  analytics: boolean
  advertising: boolean
}

export interface StoredConsent {
  /** Banner/policy version, bumped when consent surface materially changes. */
  version: number
  choice: ConsentChoice
  preferences: ConsentPreferences
  /** ISO-8601 timestamp of last user choice. */
  timestamp: string
  /** Whether a Global Privacy Control signal was present at the time of choice. */
  gpcAtTime: boolean
}

export const CONSENT_VERSION = 1

/** First-party cookie name where the user's choices are persisted. */
export const CONSENT_COOKIE_NAME = "fsri_consent"

/** 12 months in seconds. After this the banner reappears. */
export const CONSENT_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365

/**
 * Feature flag for whether any advertising/targeting pixels are currently
 * installed. When false the Advertising category is hidden from the UI and
 * the policy reflects "We do not currently use advertising or targeting
 * cookies." When true, the Advertising toggle is shown and defaults to OFF.
 *
 * TODO: VERIFY - set to true after the Meta Pixel / Google Ads / TikTok /
 * LinkedIn audit is completed and the relevant pixels are actually wired up.
 */
export const ADVERTISING_COOKIES_INSTALLED = false

export const DEFAULT_PREFERENCES: ConsentPreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  advertising: false,
}

export const ACCEPT_ALL_PREFERENCES: ConsentPreferences = {
  necessary: true,
  functional: true,
  analytics: true,
  advertising: ADVERTISING_COOKIES_INSTALLED,
}
