"use client"

import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

interface TCPAConsentProps {
  checked: boolean
  onChange: (checked: boolean) => void
  onBook: () => void
  error: string | null
  isSubmitting: boolean
}

export function TCPAConsent({
  checked,
  onChange,
  onBook,
  error,
  isSubmitting,
}: TCPAConsentProps) {
  return (
    <div className="pointer-events-auto space-y-4">
      <div className="flex items-start gap-3">
        <Checkbox
          id="tcpa-consent"
          checked={checked}
          onCheckedChange={(val) => onChange(val === true)}
          required
          aria-required="true"
          className="mt-1 border-navy data-[state=checked]:bg-navy data-[state=checked]:text-primary-foreground"
          aria-describedby="tcpa-description"
        />
        <label
          htmlFor="tcpa-consent"
          id="tcpa-description"
          className="text-sm text-foreground leading-relaxed cursor-pointer"
        >
          By checking this box and clicking Submit, I agree to the Five Star Rated Insurance{" "}
          <Link
            href="/tcpa-consent-disclosure"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-navy underline underline-offset-2 hover:text-navy/80"
          >
            TCPA Consent Disclosure
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-navy underline underline-offset-2 hover:text-navy/80"
          >
            Privacy Policy
          </Link>{" "}
          and consent to be contacted by Five Star Rated Insurance and Protegrity Insurance
          Brokerage by phone, text, and email using automated technology, even if my number
          is on a Do Not Call list. I understand consent is not required to purchase. Message
          and data rates may apply.
        </label>
      </div>

      {error && (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}

      <Button
        type="button"
        onClick={onBook}
        disabled={isSubmitting || !checked}
        className="w-full bg-navy hover:bg-navy/90 text-primary-foreground"
      >
        {isSubmitting ? (
          <>
            <Spinner className="mr-2 h-4 w-4" />
            Submitting...
          </>
        ) : (
          "Book Your Free Consultation"
        )}
      </Button>
    </div>
  )
}
