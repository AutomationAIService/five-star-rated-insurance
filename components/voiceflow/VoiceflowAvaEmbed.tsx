"use client"

import { useEffect } from "react"

const EMBED_ID = "ava-voiceflow-embed"
const SCRIPT_SRC = "https://cdn.voiceflow.com/widget-next/bundle.mjs"

declare global {
  interface Window {
    voiceflow?: {
      chat: {
        load: (config: Record<string, unknown>) => void
        destroy: () => void
      }
    }
  }
}

let scriptLoadPromise: Promise<void> | null = null

function ensureVoiceflowScript(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve()
  }
  if (window.voiceflow?.chat) {
    return Promise.resolve()
  }
  if (scriptLoadPromise) {
    return scriptLoadPromise
  }
  scriptLoadPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-voiceflow-ava-embed="1"]',
    )
    if (existing) {
      const done = () => resolve()
      if (window.voiceflow?.chat) {
        done()
        return
      }
      existing.addEventListener("load", done, { once: true })
      existing.addEventListener("error", () => reject(new Error("Voiceflow script failed")), {
        once: true,
      })
      return
    }
    const script = document.createElement("script")
    script.src = SCRIPT_SRC
    script.type = "text/javascript"
    script.async = true
    script.dataset.voiceflowAvaEmbed = "1"
    script.onload = () => resolve()
    script.onerror = () => reject(new Error("Voiceflow script failed"))
    document.body.appendChild(script)
  })
  return scriptLoadPromise
}

export function VoiceflowAvaEmbed() {
  useEffect(() => {
    let cancelled = false
    let didLoad = false

    const run = async () => {
      try {
        await ensureVoiceflowScript()
      } catch {
        return
      }
      if (cancelled) return

      if (!document.getElementById(EMBED_ID) || !window.voiceflow?.chat) return

      window.voiceflow.chat.load({
        verify: { projectID: "69ed99dc767e1d39e62bb861" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        voice: {
          url: "https://runtime-api.voiceflow.com",
        },
        // Embedded mode defaults autostart to false (overlay defaults true); without this
        // the widget shows "Start new chat" instead of opening the intake flow.
        autostart: true,
        assistant: {
          persistence: "memory",
          stylesheet: `${window.location.origin}/voiceflow-ava-mobile.css`,
        },
        render: {
          mode: "embedded",
          target: document.getElementById(EMBED_ID),
        },
      })

      if (cancelled) {
        try {
          window.voiceflow.chat.destroy()
        } catch {
          /* noop */
        }
        return
      }
      didLoad = true
    }

    void run()

    return () => {
      cancelled = true
      if (didLoad && window.voiceflow?.chat) {
        try {
          window.voiceflow.chat.destroy()
        } catch {
          /* noop */
        }
      }
    }
  }, [])

  return (
    <div className="w-full max-md:relative max-md:z-[70] max-md:mx-auto max-md:w-[min(100%,calc(100vw-24px))] max-md:max-w-[calc(100vw-24px)]">
      <div id={EMBED_ID} className="w-full" />
    </div>
  )
}
