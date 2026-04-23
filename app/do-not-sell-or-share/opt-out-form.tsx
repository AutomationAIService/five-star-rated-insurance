"use client"

import { useId, useRef, useState } from "react"
import Link from "next/link"
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

const US_STATES: { code: string; name: string }[] = [
  { code: "AL", name: "Alabama" },
  { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" },
  { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" },
  { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" },
  { code: "DE", name: "Delaware" },
  { code: "DC", name: "District of Columbia" },
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" },
  { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" },
  { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" },
  { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" },
  { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" },
  { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" },
  { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" },
  { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" },
  { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" },
  { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" },
  { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" },
  { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" },
  { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" },
  { code: "PA", name: "Pennsylvania" },
  { code: "PR", name: "Puerto Rico" },
  { code: "RI", name: "Rhode Island" },
  { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" },
  { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" },
  { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" },
  { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" },
  { code: "WY", name: "Wyoming" },
]

const REQUEST_TYPES = [
  { value: "opt-out-sale", label: "Opt out of sale of my personal information" },
  {
    value: "opt-out-sharing",
    label: "Opt out of sharing for cross-context behavioral advertising",
  },
  { value: "opt-out-both", label: "Both" },
]

type FormErrors = Partial<Record<string, string>>

type SubmissionResult = {
  referenceNumber: string
  submittedAt: string
  email: string
}

function validateEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

function validateZip(value: string): boolean {
  return /^\d{5}(-\d{4})?$/.test(value.trim())
}

export function OptOutForm() {
  const formId = useId()
  const formRef = useRef<HTMLFormElement>(null)
  const [isAuthorizedAgent, setIsAuthorizedAgent] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [result, setResult] = useState<SubmissionResult | null>(null)

  function validate(formData: FormData): FormErrors {
    const next: FormErrors = {}
    const fullName = String(formData.get("fullName") ?? "").trim()
    const email = String(formData.get("email") ?? "").trim()
    const zip = String(formData.get("zip") ?? "").trim()
    const stateCode = String(formData.get("stateCode") ?? "").trim()
    const requestType = String(formData.get("requestType") ?? "").trim()
    const certification = formData.get("certification")

    if (!fullName) next.fullName = "Please enter your full name."
    if (!email) next.email = "Please enter your email address."
    else if (!validateEmail(email)) next.email = "Please enter a valid email address."
    if (!zip) next.zip = "Please enter your ZIP code."
    else if (!validateZip(zip)) next.zip = "Please enter a valid 5-digit ZIP code."
    if (!stateCode) next.stateCode = "Please select your state of residence."
    if (!requestType) next.requestType = "Please select the type of request."
    if (!certification) next.certification = "You must certify the statement to submit."

    if (isAuthorizedAgent) {
      const agentName = String(formData.get("agentName") ?? "").trim()
      const agentEmail = String(formData.get("agentEmail") ?? "").trim()
      const proofFile = formData.get("proofOfAuthorization") as File | null
      if (!agentName) next.agentName = "Please enter the authorized agent's name."
      if (!agentEmail) next.agentEmail = "Please enter the authorized agent's email."
      else if (!validateEmail(agentEmail))
        next.agentEmail = "Please enter a valid email address."
      if (!proofFile || proofFile.size === 0)
        next.proofOfAuthorization = "Please upload proof of authorization."
    }

    return next
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting) return
    setSubmitError(null)

    const formData = new FormData(event.currentTarget)
    const nextErrors = validate(formData)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0]
      const el = document.getElementById(`${formId}-${firstKey}`)
      el?.focus()
      return
    }

    setSubmitting(true)
    try {
      const response = await fetch("/api/do-not-sell-request", {
        method: "POST",
        body: formData,
      })
      const json = (await response.json()) as {
        success: boolean
        referenceNumber?: string
        submittedAt?: string
        error?: string
      }
      if (!response.ok || !json.success || !json.referenceNumber) {
        throw new Error(json.error ?? "Submission failed")
      }
      setResult({
        referenceNumber: json.referenceNumber,
        submittedAt: json.submittedAt ?? new Date().toISOString(),
        email: String(formData.get("email") ?? ""),
      })
      formRef.current?.reset()
      setIsAuthorizedAgent(false)
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "We could not submit your request. Please try again or email privacy@fivestarratedinsurance.com.",
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (result) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-lg border border-green-300 bg-green-50 p-6 text-foreground"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-green-700" aria-hidden />
          <div className="space-y-3">
            <h3 className="font-heading text-xl font-bold text-foreground">
              Request received
            </h3>
            <p>
              Thank you. Your &quot;Do Not Sell or Share My Personal Information&quot; request
              has been logged. Please keep the reference number below for your records.
            </p>
            <dl className="grid gap-2 text-sm md:grid-cols-2">
              <div className="flex flex-wrap gap-2">
                <dt className="font-semibold text-foreground">Reference number:</dt>
                <dd className="font-mono text-navy">{result.referenceNumber}</dd>
              </div>
              <div className="flex flex-wrap gap-2">
                <dt className="font-semibold text-foreground">Submitted:</dt>
                <dd>{new Date(result.submittedAt).toLocaleString()}</dd>
              </div>
              <div className="flex flex-wrap gap-2 md:col-span-2">
                <dt className="font-semibold text-foreground">Confirmation sent to:</dt>
                <dd className="break-all">{result.email}</dd>
              </div>
            </dl>
            <p>
              <strong>Expected response timeframe:</strong> We will process your request within
              15 business days as required by California law. If we need more time or
              additional information to verify your identity, we will let you know by email.
            </p>
            <p className="text-sm text-muted-foreground">
              If you do not receive a confirmation email within a few minutes, please check
              your spam folder or contact{" "}
              <a
                href="mailto:privacy@fivestarratedinsurance.com?subject=Do%20Not%20Sell%20or%20Share%20Request"
                className="font-medium text-navy underline underline-offset-4 hover:text-navy/80"
              >
                privacy@fivestarratedinsurance.com
              </a>
              .
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="button"
                onClick={() => setResult(null)}
                className="inline-flex items-center rounded-md border border-navy/30 bg-white px-4 py-2 text-sm font-semibold text-navy shadow-sm transition-colors hover:bg-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
              >
                Submit another request
              </button>
              <Link
                href="/privacy-policy"
                className="inline-flex items-center rounded-md bg-navy px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
              >
                Back to Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby="opt-out-form-heading"
      className="space-y-6 rounded-lg border border-border bg-card p-5 md:p-6"
    >
      <div>
        <h3
          id="opt-out-form-heading"
          className="font-heading text-xl font-semibold text-foreground"
        >
          Submit your opt-out request
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Required fields are marked with an asterisk (<span aria-hidden>*</span>).
        </p>
      </div>

      {submitError ? (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-md border border-red-300 bg-red-50 p-4 text-sm text-red-900"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-700" aria-hidden />
          <p>{submitError}</p>
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field
          id={`${formId}-fullName`}
          label="Full name"
          required
          error={errors.fullName}
        >
          <input
            type="text"
            id={`${formId}-fullName`}
            name="fullName"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? `${formId}-fullName-error` : undefined}
            className="w-full rounded-md border border-input bg-white px-3 py-2 text-base text-foreground shadow-sm focus-visible:border-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
          />
        </Field>

        <Field
          id={`${formId}-email`}
          label="Email address"
          required
          error={errors.email}
        >
          <input
            type="email"
            id={`${formId}-email`}
            name="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            className="w-full rounded-md border border-input bg-white px-3 py-2 text-base text-foreground shadow-sm focus-visible:border-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
          />
        </Field>

        <Field
          id={`${formId}-phone`}
          label="Phone number"
          error={errors.phone}
          hint="Optional"
        >
          <input
            type="tel"
            id={`${formId}-phone`}
            name="phone"
            autoComplete="tel"
            className="w-full rounded-md border border-input bg-white px-3 py-2 text-base text-foreground shadow-sm focus-visible:border-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
          />
        </Field>

        <Field
          id={`${formId}-zip`}
          label="ZIP code"
          required
          error={errors.zip}
          hint="Used to verify your identity"
        >
          <input
            type="text"
            id={`${formId}-zip`}
            name="zip"
            inputMode="numeric"
            autoComplete="postal-code"
            pattern="\d{5}(-\d{4})?"
            maxLength={10}
            required
            aria-invalid={Boolean(errors.zip)}
            aria-describedby={errors.zip ? `${formId}-zip-error` : undefined}
            className="w-full rounded-md border border-input bg-white px-3 py-2 text-base text-foreground shadow-sm focus-visible:border-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
          />
        </Field>

        <Field
          id={`${formId}-stateCode`}
          label="State of residence"
          required
          error={errors.stateCode}
        >
          <select
            id={`${formId}-stateCode`}
            name="stateCode"
            required
            defaultValue=""
            aria-invalid={Boolean(errors.stateCode)}
            aria-describedby={errors.stateCode ? `${formId}-stateCode-error` : undefined}
            className="w-full rounded-md border border-input bg-white px-3 py-2 text-base text-foreground shadow-sm focus-visible:border-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
          >
            <option value="" disabled>
              Select a state
            </option>
            {US_STATES.map((s) => (
              <option key={s.code} value={s.code}>
                {s.name}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id={`${formId}-requestType`}
          label="Type of request"
          required
          error={errors.requestType}
        >
          <select
            id={`${formId}-requestType`}
            name="requestType"
            required
            defaultValue=""
            aria-invalid={Boolean(errors.requestType)}
            aria-describedby={errors.requestType ? `${formId}-requestType-error` : undefined}
            className="w-full rounded-md border border-input bg-white px-3 py-2 text-base text-foreground shadow-sm focus-visible:border-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
          >
            <option value="" disabled>
              Select a request type
            </option>
            {REQUEST_TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset className="space-y-4 rounded-md border border-border bg-background p-4">
        <legend className="px-1 text-sm font-semibold text-foreground">
          Authorized agent
        </legend>
        <label className="flex items-start gap-3 text-sm">
          <input
            type="checkbox"
            name="isAuthorizedAgent"
            checked={isAuthorizedAgent}
            onChange={(e) => setIsAuthorizedAgent(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-input text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
          />
          <span>
            I am submitting this request on behalf of someone else as their authorized agent.
          </span>
        </label>

        {isAuthorizedAgent ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field
              id={`${formId}-agentName`}
              label="Agent name"
              required
              error={errors.agentName}
            >
              <input
                type="text"
                id={`${formId}-agentName`}
                name="agentName"
                autoComplete="name"
                required
                aria-invalid={Boolean(errors.agentName)}
                aria-describedby={
                  errors.agentName ? `${formId}-agentName-error` : undefined
                }
                className="w-full rounded-md border border-input bg-white px-3 py-2 text-base text-foreground shadow-sm focus-visible:border-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
              />
            </Field>
            <Field
              id={`${formId}-agentEmail`}
              label="Agent email"
              required
              error={errors.agentEmail}
            >
              <input
                type="email"
                id={`${formId}-agentEmail`}
                name="agentEmail"
                autoComplete="email"
                required
                aria-invalid={Boolean(errors.agentEmail)}
                aria-describedby={
                  errors.agentEmail ? `${formId}-agentEmail-error` : undefined
                }
                className="w-full rounded-md border border-input bg-white px-3 py-2 text-base text-foreground shadow-sm focus-visible:border-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
              />
            </Field>
            <div className="md:col-span-2">
              <Field
                id={`${formId}-proofOfAuthorization`}
                label="Proof of authorization"
                required
                error={errors.proofOfAuthorization}
                hint="Upload a signed authorization letter or power of attorney (PDF, JPG, or PNG, up to 10 MB)"
              >
                <input
                  type="file"
                  id={`${formId}-proofOfAuthorization`}
                  name="proofOfAuthorization"
                  accept=".pdf,.jpg,.jpeg,.png"
                  required
                  aria-invalid={Boolean(errors.proofOfAuthorization)}
                  aria-describedby={
                    errors.proofOfAuthorization
                      ? `${formId}-proofOfAuthorization-error`
                      : undefined
                  }
                  className="block w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-foreground file:mr-3 file:rounded file:border-0 file:bg-navy file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-white hover:file:bg-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                />
              </Field>
            </div>
          </div>
        ) : null}
      </fieldset>

      <div
        className={`rounded-md border p-4 ${
          errors.certification
            ? "border-red-300 bg-red-50"
            : "border-border bg-background"
        }`}
      >
        <label className="flex items-start gap-3 text-sm">
          <input
            type="checkbox"
            id={`${formId}-certification`}
            name="certification"
            required
            aria-invalid={Boolean(errors.certification)}
            aria-describedby={
              errors.certification ? `${formId}-certification-error` : undefined
            }
            className="mt-1 h-4 w-4 rounded border-input text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
          />
          <span className="text-foreground">
            <span className="font-semibold">Certification:</span> I certify the information
            provided is accurate and I am authorized to make this request.{" "}
            <span className="text-red-600" aria-hidden>
              *
            </span>
          </span>
        </label>
        {errors.certification ? (
          <p
            id={`${formId}-certification-error`}
            className="mt-2 pl-7 text-sm text-red-700"
          >
            {errors.certification}
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center gap-2 rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Submitting...
            </>
          ) : (
            "Submit request"
          )}
        </button>
        <p className="text-xs text-muted-foreground">
          By submitting, you confirm the statements above. We will email a confirmation to the
          address you provide.
        </p>
      </div>
    </form>
  )
}

function Field({
  id,
  label,
  required,
  hint,
  error,
  children,
}: {
  id: string
  label: string
  required?: boolean
  hint?: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-semibold text-foreground">
        {label}
        {required ? (
          <span className="ml-1 text-red-600" aria-hidden>
            *
          </span>
        ) : null}
        {required ? <span className="sr-only"> (required)</span> : null}
      </label>
      {children}
      {hint && !error ? (
        <p className="text-xs text-muted-foreground">{hint}</p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  )
}
