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

/** Scroll Voiceflow dialog when DOM updates (shadow DOM only — no iframe/document piercing). */
function attachVoiceflowDialogAutoScroll(
  embedEl: HTMLElement,
  isCancelled: () => boolean,
): () => void {
  let dialogObserver: MutationObserver | undefined
  let embedObserver: MutationObserver | undefined
  let pollId: ReturnType<typeof setInterval> | undefined

  const scrollDialogToBottom = (dialog: HTMLElement) => {
    if (isCancelled()) return
    requestAnimationFrame(() => {
      if (isCancelled()) return
      dialog.scrollTop = dialog.scrollHeight
    })
  }

  const queryChatDialog = (rootEl: HTMLElement): HTMLElement | null => {
    const queue: Element[] = [rootEl]
    const seen = new Set<Element>()
    while (queue.length) {
      const el = queue.shift()!
      if (seen.has(el)) continue
      seen.add(el)
      const shadow = el.shadowRoot
      if (shadow) {
        const dialog = shadow.querySelector(".vfrc-chat--dialog")
        if (dialog instanceof HTMLElement) return dialog
        queue.push(...Array.from(shadow.children))
      }
      queue.push(...Array.from(el.children))
    }
    return null
  }

  const tryAttach = (): boolean => {
    if (isCancelled()) return false
    const dialog = queryChatDialog(embedEl)
    if (!dialog) return false

    scrollDialogToBottom(dialog)
    dialogObserver?.disconnect()
    dialogObserver = new MutationObserver(() => scrollDialogToBottom(dialog))
    dialogObserver.observe(dialog, { childList: true, subtree: true })
    embedObserver?.disconnect()
    embedObserver = undefined
    if (pollId !== undefined) {
      clearInterval(pollId)
      pollId = undefined
    }
    return true
  }

  if (tryAttach()) {
    return () => {
      dialogObserver?.disconnect()
      embedObserver?.disconnect()
      if (pollId !== undefined) clearInterval(pollId)
    }
  }

  embedObserver = new MutationObserver(() => {
    tryAttach()
  })
  embedObserver.observe(embedEl, { childList: true, subtree: true })

  let ticks = 0
  pollId = setInterval(() => {
    ticks += 1
    if (isCancelled() || ticks > 150) {
      if (pollId !== undefined) clearInterval(pollId)
      pollId = undefined
      return
    }
    tryAttach()
  }, 100)

  return () => {
    dialogObserver?.disconnect()
    embedObserver?.disconnect()
    if (pollId !== undefined) clearInterval(pollId)
  }
}

export function VoiceflowAvaEmbed() {
  useEffect(() => {
    let cancelled = false
    let didLoad = false
    let detachAutoScroll: (() => void) | undefined

    const run = async () => {
      try {
        await ensureVoiceflowScript()
      } catch {
        return
      }
      if (cancelled) return

      const target = document.getElementById(EMBED_ID)
      if (!target || !window.voiceflow?.chat) return

      let makeConfig: (userID: string) => Record<string, unknown>

      const performFullSessionReload = async () => {
        if (cancelled || !window.voiceflow?.chat) return
        detachAutoScroll?.()
        detachAutoScroll = undefined
        try {
          window.voiceflow.chat.destroy()
        } catch {
          /* noop */
        }
        if (cancelled) return
        const nextUserId = `user_${Date.now()}`
        window.voiceflow.chat.load(makeConfig(nextUserId))
        await new Promise<void>((resolve) => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => resolve())
          })
        })
        if (!cancelled) {
          const el = document.getElementById(EMBED_ID)
          if (el) detachAutoScroll = attachVoiceflowDialogAutoScroll(el, () => cancelled)
        }
      }

      makeConfig = (userID: string) => ({
        verify: { projectID: "69ed99dc767e1d39e62bb861" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        voice: {
          url: "https://runtime-api.voiceflow.com",
        },
        userID,
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
        // Widget-next: replaces default restart / "new chat" so we can rotate userID
        // and get a fresh Voiceflow session instead of restoring state.
        onRestartChatOverride: performFullSessionReload,
        onStartNewChatOverride: performFullSessionReload,
      })

      window.voiceflow.chat.load(makeConfig(`user_${Date.now()}`))

      if (cancelled) {
        try {
          window.voiceflow.chat.destroy()
        } catch {
          /* noop */
        }
        return
      }
      didLoad = true

      requestAnimationFrame(() => {
        const el = document.getElementById(EMBED_ID)
        if (!el || cancelled) return
        detachAutoScroll = attachVoiceflowDialogAutoScroll(el, () => cancelled)
      })
    }

    void run()

    return () => {
      cancelled = true
      detachAutoScroll?.()
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
    <div
      className="flex w-full min-h-0 flex-col overflow-hidden max-md:relative max-md:z-[70] max-md:mx-auto max-md:w-[min(100%,calc(100vw-24px))] max-md:max-w-[calc(100vw-24px)] max-md:max-h-[min(640px,calc(100dvh-18rem))] max-md:h-[min(640px,calc(100dvh-18rem))] md:max-h-[min(720px,calc(100vh-14rem))] md:h-[min(720px,calc(100vh-14rem))]"
      style={{ minHeight: "280px" }}
    >
      <div id={EMBED_ID} className="min-h-0 w-full flex-1 overflow-hidden" />
    </div>
  )
}
