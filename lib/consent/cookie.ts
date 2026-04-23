import {
  CONSENT_COOKIE_MAX_AGE_SECONDS,
  CONSENT_COOKIE_NAME,
  CONSENT_VERSION,
  DEFAULT_PREFERENCES,
  type ConsentPreferences,
  type StoredConsent,
} from "./types"

export function readConsentCookie(): StoredConsent | null {
  if (typeof document === "undefined") return null
  const raw = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${CONSENT_COOKIE_NAME}=`))
  if (!raw) return null
  const value = raw.slice(CONSENT_COOKIE_NAME.length + 1)
  try {
    const parsed = JSON.parse(decodeURIComponent(value)) as Partial<StoredConsent>
    if (
      !parsed ||
      typeof parsed !== "object" ||
      parsed.version !== CONSENT_VERSION ||
      !parsed.preferences ||
      typeof parsed.timestamp !== "string"
    ) {
      return null
    }
    const prefs = sanitizePreferences(parsed.preferences as Partial<ConsentPreferences>)
    return {
      version: CONSENT_VERSION,
      choice: parsed.choice ?? "custom",
      preferences: prefs,
      timestamp: parsed.timestamp,
      gpcAtTime: Boolean(parsed.gpcAtTime),
    }
  } catch {
    return null
  }
}

export function writeConsentCookie(value: StoredConsent): void {
  if (typeof document === "undefined") return
  const encoded = encodeURIComponent(JSON.stringify(value))
  const attrs = [
    `${CONSENT_COOKIE_NAME}=${encoded}`,
    `Max-Age=${CONSENT_COOKIE_MAX_AGE_SECONDS}`,
    "Path=/",
    "SameSite=Lax",
  ]
  if (typeof window !== "undefined" && window.location.protocol === "https:") {
    attrs.push("Secure")
  }
  document.cookie = attrs.join("; ")
}

export function clearConsentCookie(): void {
  if (typeof document === "undefined") return
  document.cookie = `${CONSENT_COOKIE_NAME}=; Max-Age=0; Path=/; SameSite=Lax`
}

export function sanitizePreferences(
  input: Partial<ConsentPreferences> | undefined,
): ConsentPreferences {
  if (!input) return { ...DEFAULT_PREFERENCES }
  return {
    necessary: true,
    functional: Boolean(input.functional),
    analytics: Boolean(input.analytics),
    advertising: Boolean(input.advertising),
  }
}

/**
 * Detect whether the browser is asserting a Global Privacy Control (GPC)
 * signal. See https://globalprivacycontrol.org/.
 */
export function detectGpcSignal(): boolean {
  if (typeof navigator === "undefined") return false
  const gpc = (navigator as Navigator & { globalPrivacyControl?: boolean })
    .globalPrivacyControl
  return gpc === true
}
