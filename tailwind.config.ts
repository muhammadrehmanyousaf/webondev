import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // =======================================================================
      // COLORS - Emerald Green Based Design System
      // =======================================================================
      colors: {
        // Brand Colors - Emerald Scale
        brand: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          950: '#022C22',
        },
        // Semantic Colors from CSS Variables
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        // Chart Colors
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        // Glass Colors
        glass: {
          light: 'rgba(255, 255, 255, 0.7)',
          dark: 'rgba(15, 23, 42, 0.7)',
          border: 'rgba(255, 255, 255, 0.2)',
        },
      },

      // =======================================================================
      // TYPOGRAPHY
      // =======================================================================
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      fontSize: {
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

      // =======================================================================
      // SPACING
      // =======================================================================
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
        '54': '13.5rem',
        '58': '14.5rem',
        '62': '15.5rem',
        '66': '16.5rem',
        '70': '17.5rem',
        '74': '18.5rem',
        '78': '19.5rem',
        '82': '20.5rem',
        '86': '21.5rem',
        '90': '22.5rem',
        '100': '25rem',
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
      },

      // =======================================================================
      // BORDER RADIUS
      // =======================================================================
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '4xl': '2.5rem',
        '5xl': '3rem',
      },

      // =======================================================================
      // BOX SHADOWS - Including Glassmorphism & Glow
      // =======================================================================
      boxShadow: {
        // Glassmorphism
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glass-hover': '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        'glass-dark-hover': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
        // Neumorphism
        'neu-light': '8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff',
        'neu-light-pressed': 'inset 4px 4px 8px #d1d1d1, inset -4px -4px 8px #ffffff',
        'neu-dark': '8px 8px 16px #0a0a0a, -8px -8px 16px #1a1a1a',
        'neu-dark-pressed': 'inset 4px 4px 8px #0a0a0a, inset -4px -4px 8px #1a1a1a',
        // Brand Glow (Emerald)
        'glow': '0 0 20px rgba(16, 185, 129, 0.3)',
        'glow-md': '0 0 30px rgba(16, 185, 129, 0.4)',
        'glow-lg': '0 0 40px rgba(16, 185, 129, 0.5)',
        'glow-xl': '0 0 60px rgba(16, 185, 129, 0.6)',
        // Colored Glows
        'glow-teal': '0 0 30px rgba(20, 184, 166, 0.4)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.4)',
        'glow-amber': '0 0 30px rgba(245, 158, 11, 0.4)',
        'glow-red': '0 0 30px rgba(239, 68, 68, 0.4)',
        // Elevation
        'elevation-1': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        'elevation-2': '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)',
        'elevation-3': '0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)',
        'elevation-4': '0 15px 25px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.05)',
        'elevation-5': '0 20px 40px rgba(0,0,0,0.2)',
      },

      // =======================================================================
      // BACKDROP BLUR
      // =======================================================================
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
        '4xl': '72px',
        '5xl': '96px',
      },

      // =======================================================================
      // BACKGROUND IMAGES & GRADIENTS
      // =======================================================================
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // Brand Gradients
        'gradient-brand': 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        'gradient-brand-hover': 'linear-gradient(135deg, #059669 0%, #047857 100%)',
        'gradient-brand-reverse': 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
        // Accent Gradients
        'gradient-teal': 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
        // Multi-color
        'gradient-aurora': 'linear-gradient(135deg, #10B981 0%, #14B8A6 50%, #06B6D4 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
        // Mesh Gradients
        'mesh-light': `
          radial-gradient(at 40% 20%, rgba(16, 185, 129, 0.15) 0px, transparent 50%),
          radial-gradient(at 80% 0%, rgba(20, 184, 166, 0.1) 0px, transparent 50%),
          radial-gradient(at 0% 50%, rgba(6, 182, 212, 0.1) 0px, transparent 50%),
          radial-gradient(at 80% 50%, rgba(16, 185, 129, 0.08) 0px, transparent 50%),
          radial-gradient(at 0% 100%, rgba(20, 184, 166, 0.1) 0px, transparent 50%)
        `,
        'mesh-dark': `
          radial-gradient(at 40% 20%, rgba(16, 185, 129, 0.08) 0px, transparent 50%),
          radial-gradient(at 80% 0%, rgba(20, 184, 166, 0.05) 0px, transparent 50%),
          radial-gradient(at 0% 50%, rgba(6, 182, 212, 0.05) 0px, transparent 50%),
          radial-gradient(at 80% 50%, rgba(16, 185, 129, 0.04) 0px, transparent 50%),
          radial-gradient(at 0% 100%, rgba(20, 184, 166, 0.05) 0px, transparent 50%)
        `,
        // Noise texture
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },

      // =======================================================================
      // ANIMATIONS & KEYFRAMES
      // =======================================================================
      keyframes: {
        // Accordion (shadcn)
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        // Fade animations
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        // Scale animations
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'scale-out': {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.95)' },
        },
        // Slide animations
        'slide-in-from-top': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-in-from-bottom': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-in-from-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-from-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        // Float animations
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        // Pulse animations
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(16, 185, 129, 0.6)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        // Gradient flow
        'gradient-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 0%' },
        },
        // Shimmer
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        // Spin slow
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        // Bounce subtle
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        // Wiggle
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        // Blob morph
        'blob': {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        // Text reveal
        'text-reveal': {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        // Marquee
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        // Counter
        'count-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        // Accordion
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        // Fade
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-out': 'fade-out 0.3s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-left': 'fade-in-left 0.5s ease-out',
        'fade-in-right': 'fade-in-right 0.5s ease-out',
        // Scale
        'scale-in': 'scale-in 0.2s ease-out',
        'scale-out': 'scale-out 0.2s ease-out',
        // Slide
        'slide-in-from-top': 'slide-in-from-top 0.3s ease-out',
        'slide-in-from-bottom': 'slide-in-from-bottom 0.3s ease-out',
        'slide-in-from-left': 'slide-in-from-left 0.3s ease-out',
        'slide-in-from-right': 'slide-in-from-right 0.3s ease-out',
        // Float
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        // Pulse
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 1.5s ease-out infinite',
        // Gradient
        'gradient-flow': 'gradient-flow 3s ease infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
        // Others
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'wiggle': 'wiggle 0.3s ease-in-out',
        'blob': 'blob 7s ease-in-out infinite',
        'text-reveal': 'text-reveal 0.8s ease-out forwards',
        'marquee': 'marquee 25s linear infinite',
        'count-up': 'count-up 0.6s ease-out forwards',
      },

      // =======================================================================
      // TRANSITION
      // =======================================================================
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
        '1200': '1200ms',
        '1500': '1500ms',
        '2000': '2000ms',
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'snappy': 'cubic-bezier(0.5, 0, 0.1, 1)',
      },

      // =======================================================================
      // Z-INDEX
      // =======================================================================
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        'dropdown': '1000',
        'sticky': '1100',
        'banner': '1200',
        'overlay': '1300',
        'modal': '1400',
        'popover': '1500',
        'tooltip': '1800',
        'toast': '1700',
        'max': '9999',
      },

      // =======================================================================
      // ASPECT RATIO
      // =======================================================================
      aspectRatio: {
        'portrait': '3/4',
        'landscape': '4/3',
        'ultrawide': '21/9',
        'golden': '1.618/1',
      },

      // =======================================================================
      // SCREENS (Breakpoints)
      // =======================================================================
      screens: {
        'xs': '475px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
