"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import { MessageBubble } from "./MessageBubble"
import { QuickReplies } from "./QuickReplies"
import { ChatInput } from "./ChatInput"
import { ProgressBar } from "./ProgressBar"
import { TCPAConsent } from "./TCPAConsent"
import { Star } from "lucide-react"
import Image from "next/image"

type InsuranceType = "Auto" | "Home" | "Life" | "Commercial Auto" | "Business"

interface Message {
  id: string
  sender: "ava" | "user"
  content: string
  timestamp: Date
}

type ConversationStep = 
  | "insurance_type"
  | "zip_code"
  | "name"
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
  "zip_code",
  "name",
  "email",
  "phone",
  "tcpa_consent",
  "complete"
]

const AVA_MESSAGES: Record<ConversationStep, string | ((data: LeadData) => string)> = {
  insurance_type: "Hi, I'm Ava, your Quote Assistant. What type of coverage do you need today?",
  zip_code: (data) => `${data.insuranceType} coverage - great choice! What's your ZIP code?`,
  name: "Almost done! What's your name?",
  email: "And your email address?",
  phone: "Last step - your phone number for your personalized quote.",
  tcpa_consent: "Please review and accept the terms to receive your quote.",
  complete: (data) => `Thanks, ${data.name}! A licensed agent will contact you shortly with your personalized ${data.insuranceType?.toLowerCase()} insurance quotes.`
}

const INSURANCE_OPTIONS: InsuranceType[] = ["Auto", "Home", "Life", "Commercial Auto", "Business"]

// Mock API function - will be replaced with actual n8n webhook
async function submitLeadToWebhook(leadData: LeadData): Promise<{ success: boolean }> {
  const response = await fetch("/api/webhook/n8n", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...leadData,
      timestamp: new Date().toISOString(),
    }),
  })
  return response.json()
}

// Validation helpers
const validateZipCode = (zip: string): boolean => /^\d{5}$/.test(zip)
const validateEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
const validatePhone = (phone: string): boolean => /^\d{10}$/.test(phone.replace(/\D/g, ""))
const validateName = (name: string): boolean => name.trim().length >= 2

export function QuoteAssistant() {
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

  // Initialize with first Ava message
  useEffect(() => {
    const initialMessage = AVA_MESSAGES.insurance_type
    const content = typeof initialMessage === "function" ? initialMessage(leadData) : initialMessage
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

  const moveToNextStep = useCallback((newLeadData: LeadData) => {
    const currentIndex = STEP_ORDER.indexOf(currentStep)
    const nextStep = STEP_ORDER[currentIndex + 1]
    
    if (nextStep) {
      setCurrentStep(nextStep)
      const nextMessage = AVA_MESSAGES[nextStep]
      const content = typeof nextMessage === "function" ? nextMessage(newLeadData) : nextMessage
      
      setTimeout(() => {
        addMessage("ava", content)
      }, 500)
    }
  }, [currentStep, addMessage])

  const handleInsuranceSelect = useCallback((type: InsuranceType) => {
    const newData = { ...leadData, insuranceType: type }
    setLeadData(newData)
    addMessage("user", type)
    moveToNextStep(newData)
  }, [leadData, addMessage, moveToNextStep])

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
      const newData = { ...leadData, [field]: currentStep === "phone" ? value.replace(/\D/g, "") : value }
      setLeadData(newData)
      addMessage("user", value)
      setInputValue("")
      moveToNextStep(newData)
    }
  }, [inputValue, currentStep, leadData, addMessage, moveToNextStep])

  const handleTCPASubmit = useCallback(async () => {
    if (!leadData.tcpaConsent) {
      setValidationError("Please accept the terms to continue")
      return
    }

    setIsSubmitting(true)
    setValidationError(null)

    try {
      await submitLeadToWebhook(leadData)
      addMessage("user", "I agree to the terms")
      moveToNextStep(leadData)
    } catch {
      setValidationError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }, [leadData, addMessage, moveToNextStep])

  const progress = (STEP_ORDER.indexOf(currentStep) / (STEP_ORDER.length - 1)) * 100

  const showQuickReplies = currentStep === "insurance_type"
  const showTextInput = ["zip_code", "name", "email", "phone"].includes(currentStep)
  const showTCPA = currentStep === "tcpa_consent"
  const isComplete = currentStep === "complete"

  return (
    <div className="flex flex-col w-full max-w-md bg-surface rounded-xl shadow-lg border border-border overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-navy text-primary-foreground">
        <Image
          src="/images/shield-icon.png"
          alt="Ava - Quote Assistant"
          width={44}
          height={44}
          className="w-[44px] h-[44px] object-contain flex-shrink-0"
        />
        <div className="flex-1">
          <h3 className="font-heading font-semibold text-base">Ava - Quote Assistant</h3>
          <div className="flex items-center gap-1 text-xs text-primary-foreground/80">
            <Star className="w-3 h-3 fill-gold text-gold" />
            <span>{"{{AVG_RATING}}"} rated service</span>
          </div>
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

      {/* Input Area */}
      <div className="p-4 border-t border-border bg-surface">
        {showQuickReplies && (
          <QuickReplies
            options={INSURANCE_OPTIONS}
            onSelect={handleInsuranceSelect}
          />
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
            onSubmit={handleTCPASubmit}
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
            <span>Quote request submitted successfully</span>
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
