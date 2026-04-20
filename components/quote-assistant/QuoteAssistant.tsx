"use client"

import { useRouter } from "next/navigation"
import { useState, useCallback, useRef, useEffect } from "react"
import { BrandNavyStarOverlay } from "@/components/brand/BrandNavyStarOverlay"
import { MessageBubble } from "./MessageBubble"
import { QuickReplies, type InsuranceType } from "./QuickReplies"
import { ChatInput } from "./ChatInput"
import { ProgressBar } from "./ProgressBar"
import { TCPAConsent } from "./TCPAConsent"
import Image from "next/image"

interface Message {
  id: string
  sender: "ava" | "user"
  content: string
  timestamp: Date
}

type ConversationStep =
  | "insurance_type"
  | "name"
  | "zip_code"
  | "email"
  | "phone"
  | "tcpa_consent"
  | "complete"

interface LeadData {
  insuranceType: InsuranceType | null
  zipCode: string
  name: string
  email: string
  phone: string
  tcpaConsent: boolean
}

const STEP_ORDER: ConversationStep[] = [
  "insurance_type",
  "name",
  "zip_code",
  "email",
  "phone",
  "tcpa_consent",
  "complete",
]

const AVA_MESSAGES: Record<ConversationStep, string | ((data: LeadData) => string)> = {
  insurance_type:
    "Hi! I'm Ava, your quote assistant. What type of insurance are you looking for?",
  name: "Great! What's your name?",
  zip_code: "What's your zip code?",
  email: "What's the best email to reach you?",
  phone: "And your phone number?",
  tcpa_consent: "Please review and confirm below to book your free consultation.",
  complete: (data) =>
    `Thanks, ${data.name}! Your calendar should open in a new tab to book your free consultation.`,
}

/** Order matches QuickReplies grid (2×4 mobile, 4×2 lg). Travel routes to Mexico Travel product page. */
const INSURANCE_OPTIONS: InsuranceType[] = [
  "Auto",
  "Home",
  "Life",
  "Business",
  "Commercial",
  "Specialty",
  "Travel",
  "Other",
]

function buildCalendlyUrl(data: LeadData): string {
  const base = "https://calendly.com/quotes-fivestarratedinsurance/30min"
  const params = new URLSearchParams()
  params.set("name", data.name)
  params.set("email", data.email)
  params.set("a1", data.phone)
  params.set("a2", data.insuranceType ?? "")
  params.set("a3", data.zipCode)
  return `${base}?${params.toString()}`
}

async function submitLeadForCompliance(leadData: LeadData, consentTimestamp: string) {
  const response = await fetch("/api/webhook/n8n", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...leadData,
      tcpaConsent: true,
      consentTimestamp,
      timestamp: consentTimestamp,
    }),
  })
  return response.json()
}

const validateZipCode = (zip: string): boolean => /^\d{5}$/.test(zip)
const validateEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
const validatePhone = (phone: string): boolean => /^\d{10}$/.test(phone.replace(/\D/g, ""))
const validateName = (name: string): boolean => name.trim().length >= 2

export function QuoteAssistant() {
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([])
  const [currentStep, setCurrentStep] = useState<ConversationStep>("insurance_type")
  const [leadData, setLeadData] = useState<LeadData>({
    insuranceType: null,
    zipCode: "",
    name: "",
    email: "",
    phone: "",
    tcpaConsent: false,
  })
  const [inputValue, setInputValue] = useState("")
  const [validationError, setValidationError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  useEffect(() => {
    const empty: LeadData = {
      insuranceType: null,
      zipCode: "",
      name: "",
      email: "",
      phone: "",
      tcpaConsent: false,
    }
    const m = AVA_MESSAGES.insurance_type
    const content = typeof m === "function" ? m(empty) : m
    setMessages([
      {
        id: "initial",
        sender: "ava",
        content,
        timestamp: new Date(),
      },
    ])
  }, [])

  const addMessage = useCallback((sender: "ava" | "user", content: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `${Date.now()}-${Math.random()}`,
        sender,
        content,
        timestamp: new Date(),
      },
    ])
  }, [])

  const moveToNextStep = useCallback(
    (newLeadData: LeadData) => {
      const currentIndex = STEP_ORDER.indexOf(currentStep)
      const nextStep = STEP_ORDER[currentIndex + 1]

      if (nextStep) {
        setCurrentStep(nextStep)
        const nextMessage = AVA_MESSAGES[nextStep]
        const content =
          typeof nextMessage === "function" ? nextMessage(newLeadData) : nextMessage

        setTimeout(() => {
          addMessage("ava", content)
        }, 500)
      }
    },
    [currentStep, addMessage],
  )

  const handleInsuranceSelect = useCallback(
    (type: InsuranceType) => {
      if (type === "Travel") {
        addMessage("user", "Travel")
        router.push("/insurance/mexico-travel")
        return
      }
      const newData = { ...leadData, insuranceType: type }
      setLeadData(newData)
      addMessage("user", type)
      moveToNextStep(newData)
    },
    [leadData, addMessage, moveToNextStep, router],
  )

  const handleTextSubmit = useCallback(() => {
    const value = inputValue.trim()
    setValidationError(null)

    switch (currentStep) {
      case "zip_code":
        if (!validateZipCode(value)) {
          setValidationError("Please enter a valid 5-digit ZIP code")
          return
        }
        break
      case "name":
        if (!validateName(value)) {
          setValidationError("Please enter your name")
          return
        }
        break
      case "email":
        if (!validateEmail(value)) {
          setValidationError("Please enter a valid email address")
          return
        }
        break
      case "phone":
        if (!validatePhone(value)) {
          setValidationError("Please enter a valid 10-digit phone number")
          return
        }
        break
      default:
        return
    }

    const fieldMap: Record<string, keyof LeadData> = {
      zip_code: "zipCode",
      name: "name",
      email: "email",
      phone: "phone",
    }

    const field = fieldMap[currentStep]
    if (field) {
      const newData = {
        ...leadData,
        [field]: currentStep === "phone" ? value.replace(/\D/g, "") : value,
      }
      setLeadData(newData)
      addMessage("user", value)
      setInputValue("")
      moveToNextStep(newData)
    }
  }, [inputValue, currentStep, leadData, addMessage, moveToNextStep])

  const handleBookConsultation = useCallback(async () => {
    if (!leadData.tcpaConsent) {
      setValidationError("Please accept the terms to continue")
      return
    }

    setIsSubmitting(true)
    setValidationError(null)

    const consentTimestamp = new Date().toISOString()

    try {
      const result = await submitLeadForCompliance(leadData, consentTimestamp)
      if (!result?.success) {
        throw new Error("Submit failed")
      }

      const calendlyUrl = buildCalendlyUrl(leadData)
      window.open(calendlyUrl, "_blank", "noopener,noreferrer")

      addMessage("user", "Confirmed — book my consultation")
      setCurrentStep("complete")
      const doneMsg = AVA_MESSAGES.complete
      const content =
        typeof doneMsg === "function" ? doneMsg({ ...leadData, tcpaConsent: true }) : doneMsg
      setTimeout(() => {
        addMessage("ava", content)
      }, 500)
    } catch {
      setValidationError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }, [leadData, addMessage])

  const progress = (STEP_ORDER.indexOf(currentStep) / (STEP_ORDER.length - 1)) * 100

  const showQuickReplies = currentStep === "insurance_type"
  const showTextInput = ["zip_code", "name", "email", "phone"].includes(currentStep)
  const showTCPA = currentStep === "tcpa_consent"
  const isComplete = currentStep === "complete"

  return (
    <div className="flex flex-col w-full max-w-xl bg-surface rounded-xl shadow-lg border border-border overflow-hidden">
      {/* Header */}
      <div className="relative flex items-center gap-3 overflow-hidden bg-brand-navy px-4 py-3 text-primary-foreground">
        <BrandNavyStarOverlay />
        <Image
          src="/images/shield-icon.png"
          alt="Ava, Quote Assistant"
          width={44}
          height={44}
          className="relative z-[1] h-[44px] w-[44px] flex-shrink-0 object-contain"
        />
        <div className="relative z-[1] min-w-0 flex-1">
          <h3 className="font-heading text-base font-semibold leading-tight">
            Ava, Quote Assistant
          </h3>
          <p className="mt-0.5 text-xs leading-snug text-primary-foreground/85">
            Protection With Integrity
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <ProgressBar progress={progress} />

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 max-h-80 overflow-y-auto bg-surface">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            sender={message.sender}
            content={message.content}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area — non-interactive (no navigation, submissions, or chat actions) */}
      <div className="pointer-events-none border-t border-border bg-surface p-4">
        {showQuickReplies && (
          <QuickReplies options={INSURANCE_OPTIONS} onSelect={handleInsuranceSelect} />
        )}

        {showTextInput && (
          <ChatInput
            value={inputValue}
            onChange={setInputValue}
            onSubmit={handleTextSubmit}
            placeholder={getPlaceholder(currentStep)}
            error={validationError}
            inputType={getInputType(currentStep)}
          />
        )}

        {showTCPA && (
          <TCPAConsent
            checked={leadData.tcpaConsent}
            onChange={(checked) => setLeadData({ ...leadData, tcpaConsent: checked })}
            onBook={handleBookConsultation}
            error={validationError}
            isSubmitting={isSubmitting}
          />
        )}

        {isComplete && (
          <div className="flex items-center justify-center gap-2 py-3 text-success font-medium">
            <Image
              src="/images/shield-icon.png"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 object-contain"
            />
            <span>Consultation booking started</span>
          </div>
        )}
      </div>
    </div>
  )
}

function getPlaceholder(step: ConversationStep): string {
  switch (step) {
    case "zip_code":
      return "Enter your ZIP code (e.g., 90210)"
    case "name":
      return "Enter your full name"
    case "email":
      return "Enter your email address"
    case "phone":
      return "Enter your phone number"
    default:
      return ""
  }
}

function getInputType(step: ConversationStep): "text" | "email" | "tel" {
  switch (step) {
    case "email":
      return "email"
    case "phone":
      return "tel"
    default:
      return "text"
  }
}
