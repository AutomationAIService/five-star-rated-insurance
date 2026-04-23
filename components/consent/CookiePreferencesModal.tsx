"use client"

import { useEffect, useId, useState } from "react"
import Link from "next/link"
import { Info, Lock } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { useCookieConsent } from "./CookieConsentProvider"
import type { ConsentPreferences } from "@/lib/consent/types"

/**
 * Per-category consent preferences modal. Opened from the banner's
 * "Customize" button or the footer's "Cookie Preferences" link.
 *
 * Design requirements:
 *  - Strictly Necessary is locked ON with a lock icon and explanation.
 *  - Functional / Analytics / Advertising default to OFF on first visit.
 *    When the modal is reopened later, toggles reflect the current saved
 *    state so users can tighten or loosen preferences from the same UI.
 *  - Advertising toggle is hidden when no advertising pixels are installed
 *    (driven by ADVERTISING_COOKIES_INSTALLED in lib/consent/types.ts).
 *  - GPC users see a locked advertising/analytics toggle with an explanation.
 *  - The footer offers three equally prominent actions: Reject Non-Essential,
 *    Accept All, and Save Preferences.
 */
export function CookiePreferencesModal() {
  const {
    modalVisible,
    closePreferences,
    preferences,
    acceptAll,
    rejectAll,
    savePreferences,
    gpcDetected,
    advertisingInstalled,
  } = useCookieConsent()

  const [draft, setDraft] = useState<ConsentPreferences>(preferences)
  const functionalId = useId()
  const analyticsId = useId()
  const advertisingId = useId()

  useEffect(() => {
    if (modalVisible) {
      setDraft(preferences)
    }
  }, [modalVisible, preferences])

  const handleSave = () => {
    savePreferences(draft)
  }

  return (
    <Dialog
      open={modalVisible}
      onOpenChange={(open) => {
        if (!open) closePreferences()
      }}
    >
      <DialogContent
        className="max-h-[90vh] overflow-y-auto sm:max-w-2xl"
        aria-describedby="cookie-preferences-description"
      >
        <DialogHeader>
          <DialogTitle className="font-heading text-xl font-bold text-foreground md:text-2xl">
            Cookie preferences
          </DialogTitle>
          <DialogDescription id="cookie-preferences-description">
            Choose which categories of cookies you want to allow on this device.
            Your choice will be saved for 12 months. You can change it anytime
            from the &quot;Cookie Preferences&quot; link in the footer.
          </DialogDescription>
        </DialogHeader>

        {gpcDetected ? (
          <p
            role="note"
            className="flex items-start gap-2 rounded-md border border-green-300 bg-green-50 p-3 text-sm text-green-900"
          >
            <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            <span>
              Your browser is sending a Global Privacy Control (GPC) signal. We
              honor that signal as an opt-out of analytics and advertising
              cookies, so those toggles are locked off while GPC is active.
            </span>
          </p>
        ) : null}

        <div className="space-y-3">
          <CategoryRow
            title="Strictly Necessary"
            description="Required for core site functions like session management, security, fraud prevention, load balancing, form submission, and storing your cookie choices. These cookies cannot be disabled."
            checked
            disabled
            locked
          />

          <CategoryRow
            id={functionalId}
            title="Functional"
            description="Remember your preferences (such as region or interface state) and keep chatbot sessions running smoothly. Disabling this will not break core site use."
            checked={draft.functional}
            onChange={(v) => setDraft((d) => ({ ...d, functional: v }))}
          />

          <CategoryRow
            id={analyticsId}
            title="Analytics"
            description="Help us understand how visitors use the site so we can improve it. Data is aggregated where practical. Analytics is provided by Google Analytics 4."
            checked={draft.analytics && !gpcDetected}
            disabled={gpcDetected}
            locked={gpcDetected}
            onChange={(v) => setDraft((d) => ({ ...d, analytics: v }))}
            note={
              gpcDetected
                ? "Locked off because Global Privacy Control is active."
                : undefined
            }
          />

          {advertisingInstalled ? (
            <CategoryRow
              id={advertisingId}
              title="Advertising"
              description="Used by advertising partners (such as Meta, Google Ads, TikTok, or LinkedIn) to show you relevant ads and measure campaign performance. Under California law, enabling these may qualify as 'sharing' your personal information."
              checked={draft.advertising && !gpcDetected}
              disabled={gpcDetected}
              locked={gpcDetected}
              onChange={(v) => setDraft((d) => ({ ...d, advertising: v }))}
              note={
                gpcDetected
                  ? "Locked off because Global Privacy Control is active."
                  : undefined
              }
            />
          ) : (
            <div className="rounded-md border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Advertising.</strong> We do
                not currently use advertising or targeting cookies. If this
                changes, we will update the policy and request consent before
                any advertising cookie fires.
              </p>
            </div>
          )}
        </div>

        <p className="text-xs text-muted-foreground">
          For the full list of cookies and how to manage them, see our{" "}
          <Link
            href="/cookie-policy"
            className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
          >
            Cookie Policy
          </Link>
          .
        </p>

        <div className="flex flex-col gap-2 border-t border-border pt-4 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={rejectAll}
            className="inline-flex min-w-[10rem] items-center justify-center rounded-md border-2 border-navy bg-white px-4 py-2.5 text-sm font-semibold text-navy shadow-sm transition-colors hover:bg-navy/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
          >
            Reject Non-Essential
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="inline-flex min-w-[10rem] items-center justify-center rounded-md border-2 border-navy bg-white px-4 py-2.5 text-sm font-semibold text-navy shadow-sm transition-colors hover:bg-navy/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex min-w-[10rem] items-center justify-center rounded-md border-2 border-navy bg-navy px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
          >
            Save Preferences
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function CategoryRow({
  id,
  title,
  description,
  checked,
  disabled,
  locked,
  note,
  onChange,
}: {
  id?: string
  title: string
  description: string
  checked: boolean
  disabled?: boolean
  locked?: boolean
  note?: string
  onChange?: (value: boolean) => void
}) {
  const inputId = id ?? `cookie-cat-${title.replace(/\s+/g, "-").toLowerCase()}`
  return (
    <div className="flex items-start justify-between gap-4 rounded-md border border-border bg-card p-4">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <label htmlFor={inputId} className="font-semibold text-foreground">
            {title}
          </label>
          {locked ? (
            <Lock
              className="h-3.5 w-3.5 text-muted-foreground"
              aria-label="locked"
            />
          ) : null}
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        {note ? <p className="mt-1 text-xs text-navy">{note}</p> : null}
      </div>
      <label
        htmlFor={inputId}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors ${
          checked ? "bg-navy" : "bg-muted-foreground/40"
        } ${disabled ? "cursor-not-allowed opacity-80" : ""}`}
      >
        <span className="sr-only">{`Toggle ${title} cookies`}</span>
        <input
          id={inputId}
          type="checkbox"
          role="switch"
          aria-checked={checked}
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          className="peer sr-only"
        />
        <span
          aria-hidden
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </label>
    </div>
  )
}
