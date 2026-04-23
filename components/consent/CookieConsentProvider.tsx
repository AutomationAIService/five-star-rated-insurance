"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import {
  detectGpcSignal,
  readConsentCookie,
  sanitizePreferences,
  writeConsentCookie,
} from "@/lib/consent/cookie"
import {
  ACCEPT_ALL_PREFERENCES,
  ADVERTISING_COOKIES_INSTALLED,
  CONSENT_VERSION,
  DEFAULT_PREFERENCES,
  type ConsentChoice,
  type ConsentPreferences,
  type StoredConsent,
} from "@/lib/consent/types"

type ConsentStatus = "loading" | "needed" | "set"

interface ConsentContextValue {
  status: ConsentStatus
  preferences: ConsentPreferences
  choice: ConsentChoice | null
  timestamp: string | null
  gpcDetected: boolean
  bannerVisible: boolean
  modalVisible: boolean
  advertisingInstalled: boolean
  acceptAll: () => void
  rejectAll: () => void
  savePreferences: (next: ConsentPreferences) => void
  openPreferences: () => void
  closePreferences: () => void
}

const ConsentContext = createContext<ConsentContextValue | null>(null)

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Push a Google Consent Mode v2 update. Safe to call even if gtag hasn't
 * loaded yet — the stub in ConsentGatedScripts buffers calls into dataLayer.
 */
function applyGoogleConsent(prefs: ConsentPreferences): void {
  if (typeof window === "undefined") return
  if (typeof window.gtag !== "function") return
  const granted = (flag: boolean) => (flag ? "granted" : "denied")
  window.gtag("consent", "update", {
    ad_storage: granted(prefs.advertising),
    ad_user_data: granted(prefs.advertising),
    ad_personalization: granted(prefs.advertising),
    analytics_storage: granted(prefs.analytics),
    functionality_storage: granted(prefs.functional),
    personalization_storage: granted(prefs.functional),
    security_storage: "granted",
  })
}

async function logConsent(record: {
  choice: ConsentChoice
  preferences: ConsentPreferences
  timestamp: string
  gpcAtTime: boolean
  bannerVersion: number
}): Promise<void> {
  try {
    await fetch("/api/consent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
      keepalive: true,
    })
  } catch {
    // Network failures should never block the UX from honoring the user's
    // choice. Server-side logging is best-effort and retried via the
    // cookie-based snapshot on the next page load.
  }
}

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [status, setStatus] = useState<ConsentStatus>("loading")
  const [preferences, setPreferences] = useState<ConsentPreferences>(DEFAULT_PREFERENCES)
  const [choice, setChoice] = useState<ConsentChoice | null>(null)
  const [timestamp, setTimestamp] = useState<string | null>(null)
  const [gpcDetected, setGpcDetected] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const hydrated = useRef(false)

  useEffect(() => {
    if (hydrated.current) return
    hydrated.current = true

    const gpc = detectGpcSignal()
    setGpcDetected(gpc)

    const existing = readConsentCookie()
    if (existing) {
      // Honor the stored choice. If GPC is currently on but wasn't recorded
      // against advertising/analytics, tighten those now.
      let effective = existing.preferences
      if (gpc && (effective.advertising || effective.analytics)) {
        effective = { ...effective, advertising: false, analytics: false }
      }
      setPreferences(effective)
      setChoice(existing.choice)
      setTimestamp(existing.timestamp)
      setStatus("set")
      applyGoogleConsent(effective)
      return
    }

    if (gpc) {
      // GPC is treated as an affirmative opt-out of sale/sharing per CPRA.
      // We apply it automatically without requiring the user to click through
      // the banner, but we still show the banner so they can opt in to
      // analytics or advertising categories if they want to.
      const gpcPrefs: ConsentPreferences = {
        necessary: true,
        functional: false,
        analytics: false,
        advertising: false,
      }
      setPreferences(gpcPrefs)
      applyGoogleConsent(gpcPrefs)
    }

    setStatus("needed")
  }, [])

  const persist = useCallback(
    (next: ConsentPreferences, nextChoice: ConsentChoice) => {
      const effective = sanitizePreferences(next)
      // If GPC is asserted, advertising and analytics cannot be re-enabled
      // for the duration of the GPC signal. The banner/modal prevent this,
      // but we defensively re-apply here as well.
      if (gpcDetected) {
        effective.advertising = false
        effective.analytics = false
      }
      const now = new Date().toISOString()
      const stored: StoredConsent = {
        version: CONSENT_VERSION,
        choice: nextChoice,
        preferences: effective,
        timestamp: now,
        gpcAtTime: gpcDetected,
      }
      writeConsentCookie(stored)
      setPreferences(effective)
      setChoice(nextChoice)
      setTimestamp(now)
      setStatus("set")
      setModalVisible(false)
      applyGoogleConsent(effective)
      void logConsent({
        choice: nextChoice,
        preferences: effective,
        timestamp: now,
        gpcAtTime: gpcDetected,
        bannerVersion: CONSENT_VERSION,
      })
    },
    [gpcDetected],
  )

  const acceptAll = useCallback(() => {
    persist({ ...ACCEPT_ALL_PREFERENCES }, "accept-all")
  }, [persist])

  const rejectAll = useCallback(() => {
    persist({ ...DEFAULT_PREFERENCES }, "reject-all")
  }, [persist])

  const savePreferences = useCallback(
    (next: ConsentPreferences) => {
      persist(next, "custom")
    },
    [persist],
  )

  const openPreferences = useCallback(() => {
    setModalVisible(true)
  }, [])

  const closePreferences = useCallback(() => {
    setModalVisible(false)
  }, [])

  const value = useMemo<ConsentContextValue>(
    () => ({
      status,
      preferences,
      choice,
      timestamp,
      gpcDetected,
      bannerVisible: status === "needed",
      modalVisible,
      advertisingInstalled: ADVERTISING_COOKIES_INSTALLED,
      acceptAll,
      rejectAll,
      savePreferences,
      openPreferences,
      closePreferences,
    }),
    [
      status,
      preferences,
      choice,
      timestamp,
      gpcDetected,
      modalVisible,
      acceptAll,
      rejectAll,
      savePreferences,
      openPreferences,
      closePreferences,
    ],
  )

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
}

export function useCookieConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext)
  if (!ctx) {
    throw new Error("useCookieConsent must be used inside <CookieConsentProvider>")
  }
  return ctx
}

/**
 * Safe variant that returns null when called outside the provider. Useful
 * for components like the footer button that may render during prerender.
 */
export function useOptionalCookieConsent(): ConsentContextValue | null {
  return useContext(ConsentContext)
}
