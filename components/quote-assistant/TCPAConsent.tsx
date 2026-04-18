"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import Link from "next/link"

interface TCPAConsentProps {
  checked: boolean
  onChange: (checked: boolean) => void
  onSubmit: () => void
  error: string | null
  isSubmitting: boolean
}

export function TCPAConsent({
  checked,
  onChange,
  onSubmit,
  error,
  isSubmitting,
}: TCPAConsentProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <Checkbox
          id="tcpa-consent"
          checked={checked}
          onCheckedChange={(val) => onChange(val === true)}
          className="mt-1 border-navy data-[state=checked]:bg-navy data-[state=checked]:text-primary-foreground"
          aria-describedby="tcpa-description"
        />
        <label
          htmlFor="tcpa-consent"
          id="tcpa-description"
          className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
        >
          By checking this box, I consent to receive calls, texts, and emails from Five Star Rated 
          Insurance and its partners at the number and email provided. I understand that my consent 
          is not required to purchase. Message and data rates may apply.{" "}
          <Link href="/tcpa-consent" className="text-navy underline hover:no-underline">
            View full TCPA disclosure
          </Link>
          {" "}|{" "}
          <Link href="/privacy-policy" className="text-navy underline hover:no-underline">
            Privacy Policy
          </Link>
        </label>
      </div>

      {error && (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}

      <Button
        onClick={onSubmit}
        disabled={isSubmitting || !checked}
        className="w-full bg-navy hover:bg-navy/90 text-primary-foreground"
      >
        {isSubmitting ? (
          <>
            <Spinner className="mr-2 h-4 w-4" />
            Submitting...
          </>
        ) : (
          "Get My Free Quote"
        )}
      </Button>
    </div>
  )
}
