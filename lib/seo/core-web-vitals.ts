/**
 * CORE WEB VITALS OPTIMIZATION
 * Performance utilities for LCP, FID, CLS optimization
 */

// =============================================================================
// IMAGE OPTIMIZATION CONFIGURATIONS
// =============================================================================

export const imageOptimizationConfig = {
  // Recommended image sizes for different viewports
  sizes: {
    hero: {
      mobile: { width: 640, height: 360 },
      tablet: { width: 1024, height: 576 },
      desktop: { width: 1920, height: 1080 },
    },
    thumbnail: {
      mobile: { width: 320, height: 180 },
      tablet: { width: 480, height: 270 },
      desktop: { width: 640, height: 360 },
    },
    avatar: {
      small: { width: 40, height: 40 },
      medium: { width: 80, height: 80 },
      large: { width: 160, height: 160 },
    },
  },

  // Quality settings
  quality: {
    hero: 85,
    content: 80,
    thumbnail: 75,
  },

  // Formats
  formats: ['webp', 'avif'],

  // Loading strategies
  loading: {
    aboveFold: 'eager' as const,
    belowFold: 'lazy' as const,
  },
};

// =============================================================================
// PRELOAD HINTS FOR CRITICAL RESOURCES
// =============================================================================

export const preloadResources = [
  // Critical fonts
  {
    href: '/fonts/inter-var.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  // Hero image (LCP element)
  {
    href: '/images/hero-bg.webp',
    as: 'image',
    type: 'image/webp',
  },
];

// =============================================================================
// RESOURCE HINTS GENERATOR
// =============================================================================

export function generateResourceHints(page: string) {
  const hints: { rel: string; href: string; as?: string; type?: string; crossOrigin?: string }[] = [];

  // DNS prefetch for external domains
  const dnsPrefetchDomains = [
    'https://www.google-analytics.com',
    'https://www.googletagmanager.com',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ];

  dnsPrefetchDomains.forEach((domain) => {
    hints.push({ rel: 'dns-prefetch', href: domain });
    hints.push({ rel: 'preconnect', href: domain });
  });

  // Page-specific preloads
  switch (page) {
    case 'home':
      hints.push(
        { rel: 'preload', href: '/images/hero-bg.webp', as: 'image' },
        { rel: 'preload', href: '/images/branding/logo.png', as: 'image' }
      );
      break;
    case 'services':
      hints.push({ rel: 'preload', href: '/images/services/web-development.webp', as: 'image' });
      break;
    case 'portfolio':
      hints.push({ rel: 'preload', href: '/images/portfolio/featured.webp', as: 'image' });
      break;
  }

  return hints;
}

// =============================================================================
// SCRIPT LOADING OPTIMIZATION
// =============================================================================

export const scriptLoadingStrategy = {
  // Critical scripts - load immediately
  critical: [] as string[],

  // High priority - load after DOM
  highPriority: [
    '/scripts/analytics.js',
  ],

  // Low priority - load on idle
  lowPriority: [
    '/scripts/chat-widget.js',
    '/scripts/social-share.js',
  ],

  // Defer non-essential
  defer: [
    'https://www.googletagmanager.com/gtag/js',
  ],
};

// =============================================================================
// CLS PREVENTION UTILITIES
// =============================================================================

export const clsPrevention = {
  // Aspect ratios for common image containers
  aspectRatios: {
    hero: '16/9',
    thumbnail: '16/9',
    square: '1/1',
    portrait: '3/4',
    avatar: '1/1',
  },

  // Min-heights for dynamic content areas
  minHeights: {
    testimonialCard: '200px',
    blogCard: '320px',
    serviceCard: '280px',
    cta: '120px',
  },

  // Placeholder dimensions
  placeholders: {
    logo: { width: 150, height: 40 },
    heroImage: { width: 1920, height: 600 },
    blogImage: { width: 800, height: 450 },
  },
};

// =============================================================================
// FONT OPTIMIZATION
// =============================================================================

export const fontOptimization = {
  // Font display strategy
  display: 'swap' as const,

  // Preload critical fonts
  preload: [
    {
      family: 'Inter',
      weights: ['400', '500', '600', '700'],
      subset: 'latin',
    },
  ],

  // Font fallbacks for FOUT prevention
  fallbacks: {
    sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
  },
};

// =============================================================================
// PERFORMANCE MONITORING
// =============================================================================

export const performanceTargets = {
  // Core Web Vitals targets
  LCP: 2500, // Largest Contentful Paint (ms)
  FID: 100,  // First Input Delay (ms)
  CLS: 0.1,  // Cumulative Layout Shift
  INP: 200,  // Interaction to Next Paint (ms)

  // Additional metrics
  FCP: 1800, // First Contentful Paint (ms)
  TTFB: 800, // Time to First Byte (ms)
  TBT: 200,  // Total Blocking Time (ms)
};

/**
 * Generate performance budget
 */
export function generatePerformanceBudget() {
  return {
    resourceSizes: {
      script: 150 * 1024, // 150KB
      style: 50 * 1024,   // 50KB
      image: 200 * 1024,  // 200KB per image
      font: 100 * 1024,   // 100KB per font
      total: 1000 * 1024, // 1MB total
    },
    resourceCounts: {
      script: 10,
      style: 5,
      image: 25,
      font: 3,
    },
    timing: {
      interactive: 3000,  // Time to Interactive
      firstByte: 600,     // TTFB
      firstPaint: 1000,   // FCP
    },
  };
}

// =============================================================================
// LAZY LOADING CONFIGURATION
// =============================================================================

export const lazyLoadingConfig = {
  // Intersection observer options
  rootMargin: '200px',
  threshold: 0.1,

  // Components to lazy load
  components: [
    'TestimonialsSection',
    'BlogSection',
    'PortfolioGrid',
    'MapSection',
    'ChatWidget',
  ],

  // Images below fold
  imageTriggerPoint: 'fold', // 'fold' | 'viewport' | 'immediate'
};

export default {
  imageOptimizationConfig,
  preloadResources,
  generateResourceHints,
  scriptLoadingStrategy,
  clsPrevention,
  fontOptimization,
  performanceTargets,
  generatePerformanceBudget,
  lazyLoadingConfig,
};
