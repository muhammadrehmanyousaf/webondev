'use client';

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";

// =============================================================================
// GLASS CARD - Premium Glassmorphism Component
// =============================================================================

export interface GlassCardProps extends Omit<HTMLMotionProps<"div">, 'children'> {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'frosted' | 'solid';
  hover?: boolean;
  glow?: boolean;
  glowColor?: 'brand' | 'teal' | 'cyan' | 'amber';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
  border?: boolean;
  blur?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  as?: 'div' | 'article' | 'section' | 'aside';
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({
    className,
    children,
    variant = 'light',
    hover = true,
    glow = false,
    glowColor = 'brand',
    padding = 'md',
    rounded = '2xl',
    border = true,
    blur = 'lg',
    as = 'div',
    ...props
  }, ref) => {
    // Variant styles
    const variantStyles = {
      light: 'bg-white/70 dark:bg-slate-900/70',
      dark: 'bg-slate-900/70 dark:bg-slate-950/80',
      frosted: 'bg-white/25 dark:bg-white/10',
      solid: 'bg-white dark:bg-slate-900',
    };

    // Padding styles
    const paddingStyles = {
      none: 'p-0',
      sm: 'p-3',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10',
    };

    // Rounded styles
    const roundedStyles = {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
      full: 'rounded-full',
    };

    // Blur styles
    const blurStyles = {
      sm: 'backdrop-blur-sm',
      md: 'backdrop-blur-md',
      lg: 'backdrop-blur-lg',
      xl: 'backdrop-blur-xl',
      '2xl': 'backdrop-blur-2xl',
    };

    // Glow color styles
    const glowStyles = {
      brand: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]',
      teal: 'hover:shadow-[0_0_30px_rgba(20,184,166,0.4)]',
      cyan: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]',
      amber: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]',
    };

    const MotionComponent = motion[as] || motion.div;

    return (
      <MotionComponent
        ref={ref}
        className={cn(
          // Base styles
          variantStyles[variant],
          blurStyles[blur],
          paddingStyles[padding],
          roundedStyles[rounded],
          'transition-all duration-300',
          // Border
          border && 'border border-white/20 dark:border-white/10',
          // Shadow
          'shadow-glass dark:shadow-glass-dark',
          // Hover effects
          hover && 'hover:shadow-glass-hover dark:hover:shadow-glass-dark-hover hover:-translate-y-1',
          // Glow effect
          glow && glowStyles[glowColor],
          className
        )}
        whileHover={hover ? { scale: 1.01 } : undefined}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  }
);
GlassCard.displayName = "GlassCard";

// =============================================================================
// GLASS CARD HEADER
// =============================================================================

interface GlassCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

const GlassCardHeader = React.forwardRef<HTMLDivElement, GlassCardHeaderProps>(
  ({ className, icon, title, description, action, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-start justify-between gap-4 mb-4", className)}
        {...props}
      >
        <div className="flex items-start gap-4">
          {icon && (
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/25 shrink-0">
              {icon}
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold text-foreground">{title}</h3>
            {description && (
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            )}
          </div>
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    );
  }
);
GlassCardHeader.displayName = "GlassCardHeader";

// =============================================================================
// GLASS CARD CONTENT
// =============================================================================

const GlassCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
GlassCardContent.displayName = "GlassCardContent";

// =============================================================================
// GLASS CARD FOOTER
// =============================================================================

const GlassCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-4 pt-4 border-t border-white/10 flex items-center gap-3", className)}
    {...props}
  />
));
GlassCardFooter.displayName = "GlassCardFooter";

// =============================================================================
// FEATURE CARD - Specialized glass card for features
// =============================================================================

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: { href: string; label: string };
  className?: string;
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ icon, title, description, link, className }, ref) => {
    return (
      <GlassCard ref={ref} className={cn("group", className)} hover glow>
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/25 mb-5 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        {link && (
          <a
            href={link.href}
            className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-semibold hover:gap-3 transition-all"
          >
            {link.label}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        )}
      </GlassCard>
    );
  }
);
FeatureCard.displayName = "FeatureCard";

// =============================================================================
// STAT CARD - Specialized glass card for statistics
// =============================================================================

interface StatCardProps {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  trend?: { value: number; label: string };
  className?: string;
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ value, label, icon, trend, className }, ref) => {
    return (
      <GlassCard ref={ref} className={cn("text-center", className)} hover>
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/50 flex items-center justify-center text-brand-600 dark:text-brand-400 mx-auto mb-4">
            {icon}
          </div>
        )}
        <div className="text-4xl font-bold gradient-text mb-2">{value}</div>
        <div className="text-muted-foreground font-medium">{label}</div>
        {trend && (
          <div className={cn(
            "mt-3 text-sm font-medium inline-flex items-center gap-1",
            trend.value >= 0 ? "text-brand-600" : "text-red-500"
          )}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={trend.value >= 0 ? "M5 10l7-7m0 0l7 7m-7-7v18" : "M19 14l-7 7m0 0l-7-7m7 7V3"}
              />
            </svg>
            {Math.abs(trend.value)}% {trend.label}
          </div>
        )}
      </GlassCard>
    );
  }
);
StatCard.displayName = "StatCard";

export {
  GlassCard,
  GlassCardHeader,
  GlassCardContent,
  GlassCardFooter,
  FeatureCard,
  StatCard,
};
