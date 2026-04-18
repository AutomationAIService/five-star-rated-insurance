"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  placeholder: string
  error: string | null
  inputType?: "text" | "email" | "tel"
}

export function ChatInput({
  value,
  onChange,
  onSubmit,
  placeholder,
  error,
  inputType = "text",
}: ChatInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      onSubmit()
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Input
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1 rounded-full border-border focus-visible:ring-navy"
          aria-invalid={!!error}
          aria-describedby={error ? "input-error" : undefined}
        />
        <Button
          onClick={onSubmit}
          size="icon"
          className="rounded-full bg-gold hover:bg-gold/90 text-navy flex-shrink-0"
          aria-label="Send message"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
      {error && (
        <p id="input-error" className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
