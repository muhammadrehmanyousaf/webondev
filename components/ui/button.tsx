import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// =============================================================================
// PREMIUM BUTTON VARIANTS - World-Class Design System
// =============================================================================

const buttonVariants = cva(
  // Base styles with premium transitions
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Default - Gradient with glow
        default:
          "bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/25 hover:from-brand-600 hover:to-brand-700 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5 active:scale-[0.98]",

        // Destructive
        destructive:
          "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25 hover:from-red-600 hover:to-red-700 hover:shadow-xl hover:shadow-red-500/30 hover:-translate-y-0.5 active:scale-[0.98]",

        // Outline - Border with fill on hover
        outline:
          "border-2 border-brand-500 bg-transparent text-brand-600 hover:bg-brand-50 hover:border-brand-600 dark:text-brand-400 dark:hover:bg-brand-950/50 dark:hover:text-brand-300",

        // Secondary
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:-translate-y-0.5",

        // Ghost - Minimal
        ghost:
          "hover:bg-accent hover:text-accent-foreground",

        // Link
        link:
          "text-brand-600 underline-offset-4 hover:underline dark:text-brand-400",

        // Glass - Glassmorphism effect
        glass:
          "bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-glass hover:bg-white/90 dark:hover:bg-slate-800/90 hover:shadow-glass-hover text-foreground",

        // Glow - Pulsing glow effect
        glow:
          "bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.7)] hover:-translate-y-0.5 active:scale-[0.98]",

        // Premium - Shimmer effect
        premium:
          "relative overflow-hidden bg-gradient-to-r from-brand-500 via-brand-400 to-brand-600 text-white shadow-xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700 hover:-translate-y-0.5 active:scale-[0.98]",

        // Gradient Aurora - Multi-color gradient
        aurora:
          "bg-gradient-to-r from-brand-500 via-teal-500 to-cyan-500 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] bg-[length:200%_100%] hover:bg-right transition-all duration-500",

        // Soft - Subtle background
        soft:
          "bg-brand-100 text-brand-700 hover:bg-brand-200 dark:bg-brand-900/50 dark:text-brand-300 dark:hover:bg-brand-900/70",

        // Neumorphic
        neu:
          "bg-slate-100 dark:bg-slate-800 shadow-neu-light dark:shadow-neu-dark hover:shadow-neu-light-pressed dark:hover:shadow-neu-dark-pressed text-foreground",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-12 px-8 py-3 text-base",
        xl: "h-14 px-10 py-4 text-lg rounded-2xl",
        icon: "h-10 w-10 p-0",
        "icon-sm": "h-8 w-8 p-0",
        "icon-lg": "h-12 w-12 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// =============================================================================
// BUTTON COMPONENT
// =============================================================================

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant,
    size,
    asChild = false,
    loading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...props
  }, ref) => {
    const isDisabled = disabled || loading

    // When asChild is true, Slot expects a single child element
    // Pass children directly without wrapping with icons/spinner
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Slot>
      )
    }

    // Standard button with icons and loading state
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {/* Loading Spinner */}
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {/* Left Icon */}
        {!loading && leftIcon && (
          <span className="shrink-0">{leftIcon}</span>
        )}

        {/* Button Text */}
        {children}

        {/* Right Icon */}
        {rightIcon && (
          <span className="shrink-0">{rightIcon}</span>
        )}
      </button>
    )
  }
)
Button.displayName = "Button"

// =============================================================================
// ICON BUTTON - Specialized for icon-only buttons
// =============================================================================

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof buttonVariants>, 'size'> {
  size?: 'sm' | 'default' | 'lg'
  'aria-label': string
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size = 'default', children, ...props }, ref) => {
    const sizeMap = {
      sm: 'icon-sm' as const,
      default: 'icon' as const,
      lg: 'icon-lg' as const,
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size: sizeMap[size], className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
IconButton.displayName = "IconButton"

// =============================================================================
// BUTTON GROUP
// =============================================================================

interface ButtonGroupProps {
  children: React.ReactNode
  className?: string
  orientation?: 'horizontal' | 'vertical'
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ children, className, orientation = 'horizontal' }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex",
          orientation === 'vertical' ? 'flex-col' : 'flex-row',
          "[&>button]:rounded-none",
          orientation === 'horizontal' && "[&>button:first-child]:rounded-l-xl [&>button:last-child]:rounded-r-xl",
          orientation === 'vertical' && "[&>button:first-child]:rounded-t-xl [&>button:last-child]:rounded-b-xl",
          "[&>button:not(:first-child)]:border-l-0",
          className
        )}
      >
        {children}
      </div>
    )
  }
)
ButtonGroup.displayName = "ButtonGroup"

export { Button, IconButton, ButtonGroup, buttonVariants }
