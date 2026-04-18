"use client"

import { Button } from "@/components/ui/button"
import { Car, Home, Heart, Truck, Briefcase } from "lucide-react"

type InsuranceType = "Auto" | "Home" | "Life" | "Commercial Auto" | "Business"

interface QuickRepliesProps {
  options: InsuranceType[]
  onSelect: (option: InsuranceType) => void
}

const ICONS: Record<InsuranceType, React.ReactNode> = {
  Auto: <Car className="w-4 h-4" />,
  Home: <Home className="w-4 h-4" />,
  Life: <Heart className="w-4 h-4" />,
  "Commercial Auto": <Truck className="w-4 h-4" />,
  Business: <Briefcase className="w-4 h-4" />,
}

export function QuickReplies({ options, onSelect }: QuickRepliesProps) {
  return (
    <div 
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Insurance type options"
    >
      {options.map((option) => (
        <Button
          key={option}
          variant="outline"
          size="sm"
          onClick={() => onSelect(option)}
          className="flex items-center gap-2 rounded-full border-navy text-navy hover:bg-navy hover:text-primary-foreground transition-colors"
        >
          {ICONS[option]}
          <span>{option}</span>
        </Button>
      ))}
    </div>
  )
}
