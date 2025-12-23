'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

// =============================================================================
// TYPES
// =============================================================================

type Theme = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

// =============================================================================
// CONTEXT
// =============================================================================

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// =============================================================================
// THEME PROVIDER COMPONENT
// =============================================================================

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'webondev-theme',
  enableSystem = true,
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light');
  const [mounted, setMounted] = useState(false);

  // Get system preference
  const getSystemTheme = useCallback((): ResolvedTheme => {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }, []);

  // Apply theme to document
  const applyTheme = useCallback((newResolvedTheme: ResolvedTheme) => {
    const root = document.documentElement;

    if (disableTransitionOnChange) {
      // Disable transitions temporarily
      const css = document.createElement('style');
      css.appendChild(
        document.createTextNode(
          `*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
        )
      );
      document.head.appendChild(css);

      // Force reflow
      (() => window.getComputedStyle(document.body))();

      // Re-enable transitions
      setTimeout(() => {
        document.head.removeChild(css);
      }, 1);
    }

    root.classList.remove('light', 'dark');
    root.classList.add(newResolvedTheme);
    root.style.colorScheme = newResolvedTheme;
    setResolvedTheme(newResolvedTheme);
  }, [disableTransitionOnChange]);

  // Initialize theme on mount
  useEffect(() => {
    const stored = localStorage.getItem(storageKey) as Theme | null;
    if (stored && ['light', 'dark', 'system'].includes(stored)) {
      setThemeState(stored);
    }
    setMounted(true);
  }, [storageKey]);

  // Apply theme when theme state changes
  useEffect(() => {
    if (!mounted) return;

    const resolved: ResolvedTheme = theme === 'system'
      ? (enableSystem ? getSystemTheme() : 'light')
      : theme;

    applyTheme(resolved);
  }, [theme, mounted, enableSystem, getSystemTheme, applyTheme]);

  // Listen for system theme changes
  useEffect(() => {
    if (!enableSystem || theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      applyTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, enableSystem, applyTheme]);

  // Set theme and persist
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem(storageKey, newTheme);
  }, [storageKey]);

  // Toggle between light and dark
  const toggleTheme = useCallback(() => {
    const newTheme: Theme = resolvedTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }, [resolvedTheme, setTheme]);

  // Prevent flash of wrong theme
  const value: ThemeContextType = {
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// =============================================================================
// HOOK
// =============================================================================

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}

// =============================================================================
// THEME TOGGLE BUTTON COMPONENT
// =============================================================================

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function ThemeToggle({ className = '', size = 'md' }: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Size mappings
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className={`${sizes[size]} rounded-xl glass flex items-center justify-center ${className}`}
        aria-label="Toggle theme"
        disabled
      >
        <span className={`${iconSizes[size]} bg-muted rounded animate-pulse`} />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        ${sizes[size]} rounded-xl glass flex items-center justify-center
        transition-all duration-300 hover:scale-105 hover:shadow-glow
        focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2
        ${className}
      `}
      aria-label={`Switch to ${resolvedTheme === 'light' ? 'dark' : 'light'} mode`}
    >
      {resolvedTheme === 'light' ? (
        // Moon icon for switching to dark
        <svg
          className={`${iconSizes[size]} text-slate-700 transition-transform duration-300`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        // Sun icon for switching to light
        <svg
          className={`${iconSizes[size]} text-yellow-400 transition-transform duration-300`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </button>
  );
}

// =============================================================================
// THEME SCRIPT (For preventing flash)
// =============================================================================

export function ThemeScript({ storageKey = 'webondev-theme' }: { storageKey?: string }) {
  const script = `
    (function() {
      try {
        var theme = localStorage.getItem('${storageKey}');
        var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var resolved = theme === 'dark' || (theme === 'system' && systemDark) || (!theme && systemDark) ? 'dark' : 'light';
        document.documentElement.classList.add(resolved);
        document.documentElement.style.colorScheme = resolved;
      } catch (e) {}
    })();
  `.trim();

  return (
    <script
      dangerouslySetInnerHTML={{ __html: script }}
      suppressHydrationWarning
    />
  );
}

export default ThemeProvider;
