import { NextResponse } from "next/server"
import { randomBytes } from "node:crypto"

/**
 * Consent audit-log endpoint.
 *
 * Called by CookieConsentProvider whenever a visitor Accepts All, Rejects
 * Non-Essential, or saves custom preferences. Stores the choice, category
 * state, timestamp, IP, user-agent, and banner version for compliance
 * recordkeeping.
 *
 * TODO: VERIFY - wire this up to durable storage (database, CRM, or audit
 * log sink) with at least a 2-year retention per CCPA/GDPR guidance.
 * The current implementation writes a structured log line so the flow is
 * end-to-end testable without credentials.
 */

export const runtime = "nodejs"

const VALID_CHOICES = new Set(["accept-all", "reject-all", "custom", "gpc"])

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
  const random = randomBytes(3).toString("hex").toUpperCase()
  return `CONSENT-${year}${month}${day}-${random}`
}

interface ConsentPayload {
  choice?: unknown
  preferences?: {
    necessary?: unknown
    functional?: unknown
    analytics?: unknown
    advertising?: unknown
  }
  timestamp?: unknown
  gpcAtTime?: unknown
  bannerVersion?: unknown
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ConsentPayload

    const choice = typeof body.choice === "string" ? body.choice : ""
    if (!VALID_CHOICES.has(choice)) {
      return NextResponse.json(
        { success: false, error: "Invalid choice." },
        { status: 400 },
      )
    }

    const preferences = {
      necessary: true,
      functional: Boolean(body.preferences?.functional),
      analytics: Boolean(body.preferences?.analytics),
      advertising: Boolean(body.preferences?.advertising),
    }

    const record = {
      referenceNumber: generateReferenceNumber(),
      receivedAt: new Date().toISOString(),
      choice,
      preferences,
      timestamp:
        typeof body.timestamp === "string"
          ? body.timestamp
          : new Date().toISOString(),
      gpcAtTime: Boolean(body.gpcAtTime),
      gpcHeader: request.headers.get("sec-gpc"),
      bannerVersion:
        typeof body.bannerVersion === "number" ? body.bannerVersion : null,
      ipAddress: getClientIp(request),
      userAgent: request.headers.get("user-agent") ?? "unknown",
    }

    // TODO: VERIFY - persist `record` to durable storage with 2-year retention.
    console.log("[consent log]", JSON.stringify(record))

    return NextResponse.json({
      success: true,
      referenceNumber: record.referenceNumber,
    })
  } catch (err) {
    console.error("[consent log] Unexpected error:", err)
    return NextResponse.json(
      { success: false, error: "Invalid request." },
      { status: 400 },
    )
  }
}
