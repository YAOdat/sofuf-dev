import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline"
}

const variantClasses = {
  default: "bg-blue-600 text-white",
  outline: "border border-blue-600 text-blue-600 bg-transparent",
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full font-medium text-xs transition-colors duration-200",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  )
} 