"use client"

import type { ComponentType } from "react"
import { Button } from "@/components/ui/button"
import {
  Briefcase,
  Car,
  Heart,
  House,
  MoreHorizontal,
  Motorbike,
  Palmtree,
  Truck,
} from "lucide-react"
import { cn } from "@/lib/utils"

export type InsuranceType =
  | "Auto"
  | "Home"
  | "Life"
  | "Business"
  | "Commercial"
  | "Specialty"
  | "Travel"
  | "Other"

const ICON_MAP: Record<InsuranceType, ComponentType<{ className?: string }>> = {
  Auto: Car,
  Home: House,
  Life: Heart,
  Business: Briefcase,
  Commercial: Truck,
  Specialty: Motorbike,
  Travel: Palmtree,
  Other: MoreHorizontal,
}

interface QuickRepliesProps {
  options: InsuranceType[]
  onSelect: (option: InsuranceType) => void
}

function OptionButton({
  option,
  onSelect,
  className,
}: {
  option: InsuranceType
  onSelect: (option: InsuranceType) => void
  className?: string
}) {
  const Icon = ICON_MAP[option]
  return (
    <Button
      type="button"
      variant="outline"
      onClick={() => onSelect(option)}
      className={cn(
        "group h-auto min-h-[4.5rem] w-full flex-col gap-2.5 rounded-xl border-2 border-navy/20 bg-white px-4 py-4 text-navy shadow-sm",
        "transition-all duration-200 ease-out",
        "hover:-translate-y-0.5 hover:border-gold hover:bg-gradient-to-b hover:from-white hover:to-navy/[0.04] hover:shadow-md",
        "focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2",
        "active:translate-y-0 active:scale-[0.99]",
        className
      )}
    >
      <Icon
        className="size-5 shrink-0 text-navy transition-colors group-hover:text-gold"
        strokeWidth={2}
        aria-hidden
      />
      <span className="text-center font-heading text-sm font-semibold leading-tight tracking-tight">
        {option}
      </span>
    </Button>
  )
}

export function QuickReplies({ options, onSelect }: QuickRepliesProps) {
  return (
    <div className="space-y-3" role="group" aria-label="Insurance type options">
      <div className="grid grid-cols-2 gap-3 sm:gap-3.5 lg:grid-cols-4 lg:gap-4">
        {options.map((option) => (
          <OptionButton key={option} option={option} onSelect={onSelect} />
        ))}
      </div>
    </div>
  )
}
