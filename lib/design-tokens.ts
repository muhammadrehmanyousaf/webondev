/**
 * WORLD-CLASS DESIGN TOKENS SYSTEM
 * Web On Dev - Elite Design System Foundation
 *
 * This file contains all design tokens for consistent, scalable design.
 * Used across Tailwind, components, and runtime styling.
 */

// =============================================================================
// COLOR SYSTEM - Emerald Green Based
// =============================================================================

export const colors = {
  // Primary Brand - Emerald Green
  brand: {
    50: '#ECFDF5',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399',
    500: '#10B981', // PRIMARY
    600: '#059669',
    700: '#047857',
    800: '#065F46',
    900: '#064E3B',
    950: '#022C22',
  },

  // Secondary - Teal
  teal: {
    50: '#F0FDFA',
    100: '#CCFBF1',
    200: '#99F6E4',
    300: '#5EEAD4',
    400: '#2DD4BF',
    500: '#14B8A6',
    600: '#0D9488',
    700: '#0F766E',
    800: '#115E59',
    900: '#134E4A',
    950: '#042F2E',
  },

  // Accent - Cyan
  cyan: {
    50: '#ECFEFF',
    100: '#CFFAFE',
    200: '#A5F3FC',
    300: '#67E8F9',
    400: '#22D3EE',
    500: '#06B6D4',
    600: '#0891B2',
    700: '#0E7490',
    800: '#155E75',
    900: '#164E63',
    950: '#083344',
  },

  // Success - Lime
  lime: {
    50: '#F7FEE7',
    100: '#ECFCCB',
    200: '#D9F99D',
    300: '#BEF264',
    400: '#A3E635',
    500: '#84CC16',
    600: '#65A30D',
    700: '#4D7C0F',
    800: '#3F6212',
    900: '#365314',
    950: '#1A2E05',
  },

  // Warning - Amber
  amber: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
    950: '#451A03',
  },

  // Error - Red
  red: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
    950: '#450A0A',
  },

  // Neutral - Slate
  slate: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
    950: '#020617',
  },

  // Pure
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',

  // Glassmorphism Surfaces
  glass: {
    light: 'rgba(255, 255, 255, 0.7)',
    lightHover: 'rgba(255, 255, 255, 0.85)',
    dark: 'rgba(15, 23, 42, 0.7)',
    darkHover: 'rgba(15, 23, 42, 0.85)',
    frosted: 'rgba(255, 255, 255, 0.25)',
    darkFrosted: 'rgba(0, 0, 0, 0.25)',
    border: 'rgba(255, 255, 255, 0.2)',
    darkBorder: 'rgba(255, 255, 255, 0.1)',
  },
} as const;

// =============================================================================
// TYPOGRAPHY SYSTEM
// =============================================================================

export const typography = {
  // Font Families
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
    display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
  },

  // Font Sizes with Line Heights
  fontSize: {
    'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025em' }],
    'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.025em' }],
    'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0' }],
    'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
    'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
    '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.02em' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
    '5xl': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
    '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
    '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
    '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
    '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
  },

  // Fluid Typography (Responsive)
  fluidFontSize: {
    'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
    'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.35vw, 1rem)',
    'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
    'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
    'fluid-xl': 'clamp(1.25rem, 1rem + 1vw, 1.5rem)',
    'fluid-2xl': 'clamp(1.5rem, 1.2rem + 1.5vw, 2rem)',
    'fluid-3xl': 'clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem)',
    'fluid-4xl': 'clamp(2.25rem, 1.75rem + 2.5vw, 3rem)',
    'fluid-5xl': 'clamp(3rem, 2rem + 5vw, 4.5rem)',
    'fluid-hero': 'clamp(2.5rem, 1.5rem + 5vw, 5rem)',
  },

  // Font Weights
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
} as const;

// =============================================================================
// SPACING SYSTEM (8px Base Grid)
// =============================================================================

export const spacing = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',   // 2px
  1: '0.25rem',      // 4px
  1.5: '0.375rem',   // 6px
  2: '0.5rem',       // 8px
  2.5: '0.625rem',   // 10px
  3: '0.75rem',      // 12px
  3.5: '0.875rem',   // 14px
  4: '1rem',         // 16px
  5: '1.25rem',      // 20px
  6: '1.5rem',       // 24px
  7: '1.75rem',      // 28px
  8: '2rem',         // 32px
  9: '2.25rem',      // 36px
  10: '2.5rem',      // 40px
  11: '2.75rem',     // 44px
  12: '3rem',        // 48px
  14: '3.5rem',      // 56px
  16: '4rem',        // 64px
  20: '5rem',        // 80px
  24: '6rem',        // 96px
  28: '7rem',        // 112px
  32: '8rem',        // 128px
  36: '9rem',        // 144px
  40: '10rem',       // 160px
  44: '11rem',       // 176px
  48: '12rem',       // 192px
  52: '13rem',       // 208px
  56: '14rem',       // 224px
  60: '15rem',       // 240px
  64: '16rem',       // 256px
  72: '18rem',       // 288px
  80: '20rem',       // 320px
  96: '24rem',       // 384px
} as const;

// =============================================================================
// BORDER RADIUS
// =============================================================================

export const borderRadius = {
  none: '0',
  sm: '0.25rem',     // 4px
  DEFAULT: '0.375rem', // 6px
  md: '0.5rem',      // 8px
  lg: '0.75rem',     // 12px
  xl: '1rem',        // 16px
  '2xl': '1.5rem',   // 24px
  '3xl': '2rem',     // 32px
  '4xl': '2.5rem',   // 40px
  full: '9999px',
} as const;

// =============================================================================
// SHADOWS - Including Glassmorphism & Glow Effects
// =============================================================================

export const shadows = {
  // Standard Shadows
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  DEFAULT: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: 'none',

  // Glassmorphism Shadows
  glass: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
  glassHover: '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
  glassDark: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
  glassDarkHover: '0 8px 32px 0 rgba(0, 0, 0, 0.4)',

  // Neumorphism Shadows
  neuLight: '8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff',
  neuLightPressed: 'inset 4px 4px 8px #d1d1d1, inset -4px -4px 8px #ffffff',
  neuDark: '8px 8px 16px #0a0a0a, -8px -8px 16px #1a1a1a',
  neuDarkPressed: 'inset 4px 4px 8px #0a0a0a, inset -4px -4px 8px #1a1a1a',

  // Brand Glow Effects (Emerald)
  glow: '0 0 20px rgba(16, 185, 129, 0.3)',
  glowMd: '0 0 30px rgba(16, 185, 129, 0.4)',
  glowLg: '0 0 40px rgba(16, 185, 129, 0.5)',
  glowXl: '0 0 60px rgba(16, 185, 129, 0.6)',

  // Colored Glows
  glowTeal: '0 0 30px rgba(20, 184, 166, 0.4)',
  glowCyan: '0 0 30px rgba(6, 182, 212, 0.4)',
  glowAmber: '0 0 30px rgba(245, 158, 11, 0.4)',
  glowRed: '0 0 30px rgba(239, 68, 68, 0.4)',
} as const;

// =============================================================================
// MOTION / ANIMATION TOKENS
// =============================================================================

export const motion = {
  // Durations
  duration: {
    instant: '50ms',
    faster: '100ms',
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '500ms',
    slowest: '700ms',
    // For large animations
    entrance: '400ms',
    exit: '200ms',
    page: '500ms',
  },

  // Easing Functions
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Premium easings
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    snappy: 'cubic-bezier(0.5, 0, 0.1, 1)',
  },

  // Common Transitions
  transition: {
    none: 'none',
    all: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    colors: 'color, background-color, border-color, text-decoration-color, fill, stroke 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: 'opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    shadow: 'box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// =============================================================================
// Z-INDEX SCALE
// =============================================================================

export const zIndex = {
  behind: -1,
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
  max: 9999,
} as const;

// =============================================================================
// BREAKPOINTS
// =============================================================================

export const breakpoints = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  '3xl': '1920px',
} as const;

// =============================================================================
// GRADIENTS
// =============================================================================

export const gradients = {
  // Brand Gradients
  brand: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
  brandHover: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
  brandReverse: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
  brandRadial: 'radial-gradient(circle at center, #10B981 0%, #059669 100%)',

  // Accent Gradients
  teal: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)',
  cyan: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',

  // Multi-color
  aurora: 'linear-gradient(135deg, #10B981 0%, #14B8A6 50%, #06B6D4 100%)',
  sunset: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
  ocean: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',

  // Mesh Gradients (for backgrounds)
  meshLight: `
    radial-gradient(at 40% 20%, rgba(16, 185, 129, 0.15) 0px, transparent 50%),
    radial-gradient(at 80% 0%, rgba(20, 184, 166, 0.1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, rgba(6, 182, 212, 0.1) 0px, transparent 50%),
    radial-gradient(at 80% 50%, rgba(16, 185, 129, 0.08) 0px, transparent 50%),
    radial-gradient(at 0% 100%, rgba(20, 184, 166, 0.1) 0px, transparent 50%)
  `,
  meshDark: `
    radial-gradient(at 40% 20%, rgba(16, 185, 129, 0.08) 0px, transparent 50%),
    radial-gradient(at 80% 0%, rgba(20, 184, 166, 0.05) 0px, transparent 50%),
    radial-gradient(at 0% 50%, rgba(6, 182, 212, 0.05) 0px, transparent 50%),
    radial-gradient(at 80% 50%, rgba(16, 185, 129, 0.04) 0px, transparent 50%),
    radial-gradient(at 0% 100%, rgba(20, 184, 166, 0.05) 0px, transparent 50%)
  `,

  // Text Gradients
  textBrand: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
  textGold: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
} as const;

// =============================================================================
// BLUR VALUES
// =============================================================================

export const blur = {
  none: '0',
  sm: '4px',
  DEFAULT: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '40px',
  '3xl': '64px',
} as const;

// =============================================================================
// EXPORT COMPLETE TOKEN SYSTEM
// =============================================================================

export const tokens = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  motion,
  zIndex,
  breakpoints,
  gradients,
  blur,
} as const;

export default tokens;

// =============================================================================
// UTILITY TYPES
// =============================================================================

export type ColorScale = typeof colors.brand;
export type SpacingScale = typeof spacing;
export type ShadowScale = typeof shadows;
export type MotionDuration = typeof motion.duration;
export type MotionEasing = typeof motion.easing;
