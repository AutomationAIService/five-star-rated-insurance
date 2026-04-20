"use client"

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
          By submitting, I agree to be contacted by Protegrity Insurance Brokerage and its
          licensed agents at the number provided, including via automated calls and texts. I
          consent to my information being shared with Protegrity Insurance Brokerage for
          insurance quote purposes. Consent is not required to purchase. Msg & data rates may
          apply. I agree to the{" "}
          <span className="text-navy underline">Privacy Policy</span>,{" "}
          <span className="text-navy underline">Terms of Service</span>, and{" "}
          <span className="text-navy underline">TCPA Consent Disclosure</span>.
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
