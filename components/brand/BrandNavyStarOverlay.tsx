import { BRAND_NAVY_STAR_PATTERN_URL } from "@/lib/brandNavyTexture"
import { cn } from "@/lib/utils"

type BrandNavyStarOverlayProps = {
  className?: string
  /** Match hero: full layer at 5% opacity (default). */
  opacityClassName?: string
}

export function BrandNavyStarOverlay({
  className,
  opacityClassName = "opacity-5",
}: BrandNavyStarOverlayProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 bg-repeat",
        opacityClassName,
        className,
      )}
      style={{ backgroundImage: BRAND_NAVY_STAR_PATTERN_URL }}
    />
  )
}
