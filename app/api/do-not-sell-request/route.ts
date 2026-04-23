import { NextResponse } from "next/server"
import { randomBytes } from "node:crypto"

// TODO: VERIFY - wire up a transactional email provider (e.g. Resend, Postmark,
// SendGrid, or AWS SES) to actually deliver the user confirmation and the
// internal notification emails. This handler currently logs the outgoing
// messages so the request flow is end-to-end testable without credentials.
// TODO: VERIFY - wire up durable storage (database, CRM, or audit log sink)
// for the request record so it survives server restarts.

export const runtime = "nodejs"

const PRIVACY_EMAIL = "privacy@fivestarratedinsurance.com"
// TODO: VERIFY - replace with production phone number for privacy inquiries
const PRIVACY_PHONE = "[INSERT PHONE]"
// TODO: VERIFY - replace with production mailing address for privacy inquiries
const MAILING_ADDRESS = "[INSERT ADDRESS]"

const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024 // 10 MB

const REQUEST_TYPE_LABELS: Record<string, string> = {
  "opt-out-sale": "Opt out of sale of my personal information",
  "opt-out-sharing": "Opt out of sharing for cross-context behavioral advertising",
  "opt-out-both": "Both sale and sharing opt-out",
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown"
  }
  const realIp = request.headers.get("x-real-ip")
  if (realIp) return realIp.trim()
  return "unknown"
}

function generateReferenceNumber(): string {
  const now = new Date()
  const year = now.getUTCFullYear()
  const month = String(now.getUTCMonth() + 1).padStart(2, "0")
  const day = String(now.getUTCDate()).padStart(2, "0")
  const random = randomBytes(4).toString("hex").toUpperCase()
  return `DNS-${year}${month}${day}-${random}`
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

function isValidZip(value: string): boolean {
  return /^\d{5}(-\d{4})?$/.test(value.trim())
}

interface RequestRecord {
  referenceNumber: string
  submittedAt: string
  ipAddress: string
  userAgent: string
  gpcSignal: string | null
  form: {
    fullName: string
    email: string
    phone: string
    zip: string
    stateCode: string
    requestType: string
    requestTypeLabel: string
    isAuthorizedAgent: boolean
    agentName?: string
    agentEmail?: string
    proofOfAuthorization?: {
      filename: string
      contentType: string
      sizeBytes: number
    }
    certification: boolean
  }
}

function buildUserConfirmationEmail(record: RequestRecord): {
  to: string
  subject: string
  text: string
} {
  const lines = [
    `Hello ${record.form.fullName},`,
    "",
    `Thank you for submitting a "Do Not Sell or Share My Personal Information" request to Five Star Rated Insurance. This email confirms that we have received your request.`,
    "",
    `Reference number: ${record.referenceNumber}`,
    `Submitted: ${record.submittedAt}`,
    `Request type: ${record.form.requestTypeLabel}`,
    "",
    `What happens next:`,
    `  1. We will verify your identity against the information you provided (name, email, ZIP, and state of residence).`,
    `  2. We will apply your opt-out to our records and to the advertising and analytics systems we use that qualify as "sharing" under California law.`,
    `  3. We will email you when your request is complete.`,
    "",
    `We will process your request within 15 business days as required by California law. If we need additional information to verify your identity, we will contact you at this email address.`,
    "",
    `If you did not submit this request, please reply to this email or contact ${PRIVACY_EMAIL} immediately.`,
    "",
    `Questions? Email ${PRIVACY_EMAIL} or call ${PRIVACY_PHONE}.`,
    "",
    `— Five Star Rated Insurance Privacy Team`,
  ]
  return {
    to: record.form.email,
    subject: `Your Do Not Sell or Share request (Ref ${record.referenceNumber})`,
    text: lines.join("\n"),
  }
}

function buildInternalNotificationEmail(record: RequestRecord): {
  to: string
  subject: string
  text: string
} {
  const lines = [
    `New "Do Not Sell or Share My Personal Information" request received.`,
    "",
    `Reference number: ${record.referenceNumber}`,
    `Submitted: ${record.submittedAt}`,
    `IP address: ${record.ipAddress}`,
    `User-Agent: ${record.userAgent}`,
    `GPC signal: ${record.gpcSignal ?? "not sent"}`,
    "",
    `Requester:`,
    `  Full name: ${record.form.fullName}`,
    `  Email: ${record.form.email}`,
    `  Phone: ${record.form.phone || "(not provided)"}`,
    `  ZIP: ${record.form.zip}`,
    `  State: ${record.form.stateCode}`,
    `  Request type: ${record.form.requestTypeLabel} (${record.form.requestType})`,
    `  Certification: ${record.form.certification ? "Yes" : "No"}`,
    "",
    `Authorized agent: ${record.form.isAuthorizedAgent ? "Yes" : "No"}`,
  ]
  if (record.form.isAuthorizedAgent) {
    lines.push(
      `  Agent name: ${record.form.agentName ?? "(missing)"}`,
      `  Agent email: ${record.form.agentEmail ?? "(missing)"}`,
      `  Proof of authorization: ${
        record.form.proofOfAuthorization
          ? `${record.form.proofOfAuthorization.filename} (${record.form.proofOfAuthorization.contentType}, ${record.form.proofOfAuthorization.sizeBytes} bytes)`
          : "(missing)"
      }`,
    )
  }
  lines.push(
    "",
    `Action required: verify the requester's identity and apply the opt-out within 15 business days.`,
    `Mailing address (for reference): ${MAILING_ADDRESS}`,
  )
  return {
    to: PRIVACY_EMAIL,
    subject: `[DNSMPI] New opt-out request ${record.referenceNumber}`,
    text: lines.join("\n"),
  }
}

async function deliverEmail(message: {
  to: string
  subject: string
  text: string
}): Promise<void> {
  // TODO: VERIFY - replace with real transactional email provider call.
  // Example (Resend):
  //   await resend.emails.send({
  //     from: "privacy@fivestarratedinsurance.com",
  //     to: message.to,
  //     subject: message.subject,
  //     text: message.text,
  //   })
  console.log("[DNSMPI email]", {
    to: message.to,
    subject: message.subject,
    bodyPreview: message.text.slice(0, 200),
  })
}

async function persistRecord(record: RequestRecord): Promise<void> {
  // TODO: VERIFY - persist the request to durable storage (DB, CRM, or audit
  // log sink) for compliance recordkeeping. For now we log a structured event.
  console.log("[DNSMPI request log]", JSON.stringify(record))
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? ""
    if (!contentType.includes("multipart/form-data") && !contentType.includes("form")) {
      return NextResponse.json(
        { success: false, error: "Unsupported content type." },
        { status: 415 },
      )
    }

    const formData = await request.formData()

    const fullName = String(formData.get("fullName") ?? "").trim()
    const email = String(formData.get("email") ?? "").trim()
    const phone = String(formData.get("phone") ?? "").trim()
    const zip = String(formData.get("zip") ?? "").trim()
    const stateCode = String(formData.get("stateCode") ?? "").trim()
    const requestType = String(formData.get("requestType") ?? "").trim()
    const isAuthorizedAgent = formData.get("isAuthorizedAgent") === "on"
    const agentName = String(formData.get("agentName") ?? "").trim() || undefined
    const agentEmail = String(formData.get("agentEmail") ?? "").trim() || undefined
    const certification = formData.get("certification") != null
    const proofFile = formData.get("proofOfAuthorization")

    const errors: string[] = []
    if (!fullName) errors.push("fullName is required")
    if (!email) errors.push("email is required")
    else if (!isValidEmail(email)) errors.push("email is invalid")
    if (!zip) errors.push("zip is required")
    else if (!isValidZip(zip)) errors.push("zip is invalid")
    if (!stateCode) errors.push("stateCode is required")
    if (!requestType || !REQUEST_TYPE_LABELS[requestType])
      errors.push("requestType is required and must be a valid option")
    if (!certification) errors.push("certification is required")
    if (isAuthorizedAgent) {
      if (!agentName) errors.push("agentName is required when acting as an authorized agent")
      if (!agentEmail)
        errors.push("agentEmail is required when acting as an authorized agent")
      else if (!isValidEmail(agentEmail)) errors.push("agentEmail is invalid")
      if (!(proofFile instanceof File) || proofFile.size === 0)
        errors.push("proofOfAuthorization file is required when acting as an authorized agent")
      else if (proofFile.size > MAX_FILE_SIZE_BYTES)
        errors.push("proofOfAuthorization file is too large (max 10 MB)")
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, error: errors.join("; ") },
        { status: 400 },
      )
    }

    const referenceNumber = generateReferenceNumber()
    const submittedAt = new Date().toISOString()

    const record: RequestRecord = {
      referenceNumber,
      submittedAt,
      ipAddress: getClientIp(request),
      userAgent: request.headers.get("user-agent") ?? "unknown",
      gpcSignal: request.headers.get("sec-gpc"),
      form: {
        fullName,
        email,
        phone,
        zip,
        stateCode,
        requestType,
        requestTypeLabel: REQUEST_TYPE_LABELS[requestType] ?? requestType,
        isAuthorizedAgent,
        agentName,
        agentEmail,
        proofOfAuthorization:
          proofFile instanceof File && proofFile.size > 0
            ? {
                filename: proofFile.name,
                contentType: proofFile.type || "application/octet-stream",
                sizeBytes: proofFile.size,
              }
            : undefined,
        certification,
      },
    }

    await persistRecord(record)
    await deliverEmail(buildUserConfirmationEmail(record))
    await deliverEmail(buildInternalNotificationEmail(record))

    return NextResponse.json({
      success: true,
      referenceNumber,
      submittedAt,
      message:
        "Your request has been received. We will process it within 15 business days as required by California law.",
    })
  } catch (err) {
    console.error("[DNSMPI request] Unexpected error:", err)
    return NextResponse.json(
      {
        success: false,
        error:
          "We could not process your request due to an unexpected error. Please email privacy@fivestarratedinsurance.com.",
      },
      { status: 500 },
    )
  }
}
