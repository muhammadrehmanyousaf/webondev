'use client';

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";

// =============================================================================
// BENTO GRID - Premium Bento Box Layout Component
// =============================================================================

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
}

const BentoGrid = React.forwardRef<HTMLDivElement, BentoGridProps>(
  ({ className, children, columns = 4, gap = 'md', ...props }, ref) => {
    const columnStyles = {
      2: 'lg:grid-cols-2',
      3: 'lg:grid-cols-3',
      4: 'lg:grid-cols-4',
    };

    const gapStyles = {
      sm: 'gap-3',
      md: 'gap-4',
      lg: 'gap-6',
    };

    return (
      <div
        ref={ref}
        className={cn(
          "grid grid-cols-1 md:grid-cols-2",
          columnStyles[columns],
          gapStyles[gap],
          "auto-rows-[minmax(180px,auto)]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
BentoGrid.displayName = "BentoGrid";

// =============================================================================
// BENTO ITEM - Individual Grid Item
// =============================================================================

interface BentoItemProps extends Omit<HTMLMotionProps<"div">, 'children'> {
  children?: React.ReactNode;
  colSpan?: 1 | 2;
  rowSpan?: 1 | 2;
  variant?: 'glass' | 'solid' | 'gradient' | 'outlined';
  hover?: boolean;
  glow?: boolean;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  background?: React.ReactNode;
  footer?: React.ReactNode;
}

const BentoItem = React.forwardRef<HTMLDivElement, BentoItemProps>(
  ({
    className,
    children,
    colSpan = 1,
    rowSpan = 1,
    variant = 'glass',
    hover = true,
    glow = false,
    header,
    icon,
    title,
    description,
    background,
    footer,
    ...props
  }, ref) => {
    // Span styles
    const colSpanStyles = {
      1: '',
      2: 'md:col-span-2',
    };

    const rowSpanStyles = {
      1: '',
      2: 'md:row-span-2',
    };

    // Variant styles
    const variantStyles = {
      glass: 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-glass',
      solid: 'bg-card border border-border shadow-lg',
      gradient: 'bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 border border-border shadow-lg',
      outlined: 'bg-transparent border-2 border-brand-500/30 hover:border-brand-500',
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          // Base styles
          "group relative overflow-hidden rounded-2xl p-6",
          // Span
          colSpanStyles[colSpan],
          rowSpanStyles[rowSpan],
          // Variant
          variantStyles[variant],
          // Hover
          hover && "hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
          // Glow
          glow && "hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
          className
        )}
        whileHover={hover ? { scale: 1.01 } : undefined}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        {...props}
      >
        {/* Background Element */}
        {background && (
          <div className="absolute inset-0 z-0">
            {background}
          </div>
        )}

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-600/0 group-hover:from-brand-500/5 group-hover:to-brand-600/10 transition-all duration-500 z-0" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          {header && (
            <div className="mb-4">
              {header}
            </div>
          )}

          {/* Icon */}
          {icon && (
            <div className="mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/25 group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          )}

          {/* Title */}
          {title && (
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
              {title}
            </h3>
          )}

          {/* Description */}
          {description && (
            <p className="text-muted-foreground leading-relaxed flex-grow">
              {description}
            </p>
          )}

          {/* Children */}
          {children && <div className="flex-grow">{children}</div>}

          {/* Footer */}
          {footer && (
            <div className="mt-4 pt-4 border-t border-white/10">
              {footer}
            </div>
          )}
        </div>
      </motion.div>
    );
  }
);
BentoItem.displayName = "BentoItem";

// =============================================================================
// BENTO FEATURE - Pre-styled feature item
// =============================================================================

interface BentoFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colSpan?: 1 | 2;
  rowSpan?: 1 | 2;
  link?: { href: string; label: string };
  className?: string;
}

const BentoFeature = React.forwardRef<HTMLDivElement, BentoFeatureProps>(
  ({ icon, title, description, colSpan = 1, rowSpan = 1, link, className }, ref) => {
    return (
      <BentoItem
        ref={ref}
        colSpan={colSpan}
        rowSpan={rowSpan}
        icon={icon}
        title={title}
        description={description}
        className={className}
        glow
        footer={link && (
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
      />
    );
  }
);
BentoFeature.displayName = "BentoFeature";

// =============================================================================
// BENTO STAT - Pre-styled stat item
// =============================================================================

interface BentoStatProps {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  trend?: { value: number; isPositive: boolean };
  colSpan?: 1 | 2;
  className?: string;
}

const BentoStat = React.forwardRef<HTMLDivElement, BentoStatProps>(
  ({ value, label, icon, trend, colSpan = 1, className }, ref) => {
    return (
      <BentoItem
        ref={ref}
        colSpan={colSpan}
        className={cn("text-center flex flex-col items-center justify-center", className)}
      >
        {icon && (
          <div className="w-14 h-14 rounded-2xl bg-brand-100 dark:bg-brand-900/50 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-4">
            {icon}
          </div>
        )}
        <div className="text-5xl font-bold gradient-text mb-2">{value}</div>
        <div className="text-muted-foreground font-medium text-lg">{label}</div>
        {trend && (
          <div className={cn(
            "mt-3 text-sm font-semibold inline-flex items-center gap-1 px-3 py-1 rounded-full",
            trend.isPositive
              ? "text-brand-700 bg-brand-100 dark:text-brand-300 dark:bg-brand-900/50"
              : "text-red-700 bg-red-100 dark:text-red-300 dark:bg-red-900/50"
          )}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={trend.isPositive ? "M5 10l7-7m0 0l7 7m-7-7v18" : "M19 14l-7 7m0 0l-7-7m7 7V3"}
              />
            </svg>
            {Math.abs(trend.value)}%
          </div>
        )}
      </BentoItem>
    );
  }
);
BentoStat.displayName = "BentoStat";

// =============================================================================
// BENTO IMAGE - Image showcase item
// =============================================================================

interface BentoImageProps {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  colSpan?: 1 | 2;
  rowSpan?: 1 | 2;
  overlay?: boolean;
  className?: string;
}

const BentoImage = React.forwardRef<HTMLDivElement, BentoImageProps>(
  ({ src, alt, title, description, colSpan = 1, rowSpan = 1, overlay = true, className }, ref) => {
    return (
      <BentoItem
        ref={ref}
        colSpan={colSpan}
        rowSpan={rowSpan}
        variant="solid"
        className={cn("p-0 overflow-hidden", className)}
        background={
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        }
      >
        {overlay && (title || description) && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
            {title && (
              <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            )}
            {description && (
              <p className="text-white/80 text-sm">{description}</p>
            )}
          </div>
        )}
      </BentoItem>
    );
  }
);
BentoImage.displayName = "BentoImage";

// =============================================================================
// BENTO CTA - Call to action item
// =============================================================================

interface BentoCTAProps {
  title: string;
  description?: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  colSpan?: 1 | 2;
  className?: string;
}

const BentoCTA = React.forwardRef<HTMLDivElement, BentoCTAProps>(
  ({ title, description, primaryAction, secondaryAction, colSpan = 2, className }, ref) => {
    return (
      <BentoItem
        ref={ref}
        colSpan={colSpan}
        variant="gradient"
        className={cn(
          "bg-gradient-to-r from-brand-500 to-brand-600 dark:from-brand-600 dark:to-brand-700 border-0",
          className
        )}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 h-full">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            {description && (
              <p className="text-white/80">{description}</p>
            )}
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={primaryAction.href}
              className="px-6 py-3 bg-white text-brand-600 font-semibold rounded-xl hover:bg-white/90 transition-colors shadow-lg"
            >
              {primaryAction.label}
            </a>
            {secondaryAction && (
              <a
                href={secondaryAction.href}
                className="px-6 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors border border-white/30"
              >
                {secondaryAction.label}
              </a>
            )}
          </div>
        </div>
      </BentoItem>
    );
  }
);
BentoCTA.displayName = "BentoCTA";

export {
  BentoGrid,
  BentoItem,
  BentoFeature,
  BentoStat,
  BentoImage,
  BentoCTA,
};
