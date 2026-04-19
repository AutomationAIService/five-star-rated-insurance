import { NextResponse } from "next/server"

interface LeadPayload {
  insuranceType: string
  zipCode: string
  name: string
  email: string
  phone: string
  tcpaConsent: boolean
  consentTimestamp: string
  timestamp?: string
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

export async function POST(request: Request) {
  try {
    const payload: LeadPayload = await request.json()
    const clientIp = getClientIp(request)

    if (
      !payload.insuranceType ||
      !payload.zipCode ||
      !payload.name ||
      !payload.email ||
      !payload.phone ||
      !payload.tcpaConsent ||
      !payload.consentTimestamp
    ) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      )
    }

    // TODO: Replace with actual n8n webhook URL
    // const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL
    //
    // if (n8nWebhookUrl) {
    //   await fetch(n8nWebhookUrl, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ ...payload, ipAddress: clientIp }),
    //   })
    // }

    console.log("[n8n Webhook Mock] Lead received:", {
      insuranceType: payload.insuranceType,
      zipCode: payload.zipCode,
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      tcpaConsent: payload.tcpaConsent,
      consentTimestamp: payload.consentTimestamp,
      timestamp: payload.timestamp ?? payload.consentTimestamp,
      ipAddress: clientIp,
    })

    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully",
      leadId: `LEAD-${Date.now()}`,
    })
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 })
  }
}
