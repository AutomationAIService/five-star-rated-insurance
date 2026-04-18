import { cn } from "@/lib/utils"
import Image from "next/image"

interface MessageBubbleProps {
  sender: "ava" | "user"
  content: string
}

export function MessageBubble({ sender, content }: MessageBubbleProps) {
  const isAva = sender === "ava"

  return (
    <div
      className={cn(
        "flex items-start gap-2",
        isAva ? "justify-start" : "justify-end"
      )}
      role="article"
      aria-label={isAva ? "Ava says" : "You said"}
    >
      {isAva && (
        <Image
          src="/images/shield-icon.png"
          alt="Ava"
          width={36}
          height={36}
          className="w-[36px] h-[36px] object-contain flex-shrink-0"
        />
      )}
      <div
        className={cn(
          "max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed",
          isAva
            ? "bg-muted text-foreground rounded-tl-none"
            : "bg-navy text-primary-foreground rounded-tr-none"
        )}
      >
        {content}
      </div>
    </div>
  )
}
