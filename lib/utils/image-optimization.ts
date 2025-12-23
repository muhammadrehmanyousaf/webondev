/**
 * IMAGE OPTIMIZATION UTILITIES
 * For Core Web Vitals and performance
 */

// =============================================================================
// IMAGE SIZES CONFIGURATION
// =============================================================================

export const imageSizes = {
  // Hero images
  hero: {
    mobile: { width: 640, height: 360 },
    tablet: { width: 1024, height: 576 },
    desktop: { width: 1920, height: 1080 },
  },
  // Card thumbnails
  thumbnail: {
    small: { width: 320, height: 180 },
    medium: { width: 480, height: 270 },
    large: { width: 640, height: 360 },
  },
  // Avatar/profile images
  avatar: {
    small: { width: 40, height: 40 },
    medium: { width: 80, height: 80 },
    large: { width: 160, height: 160 },
  },
  // Blog images
  blog: {
    thumbnail: { width: 400, height: 225 },
    featured: { width: 800, height: 450 },
    full: { width: 1200, height: 675 },
  },
  // Portfolio images
  portfolio: {
    thumbnail: { width: 400, height: 300 },
    preview: { width: 800, height: 600 },
    full: { width: 1600, height: 1200 },
  },
  // OG images
  og: {
    default: { width: 1200, height: 630 },
    twitter: { width: 1200, height: 600 },
    square: { width: 1200, height: 1200 },
  },
};

// =============================================================================
// BLUR PLACEHOLDER GENERATOR
// =============================================================================

/**
 * Generate a tiny blurred placeholder for images
 * This creates a base64 encoded SVG that serves as LQIP (Low Quality Image Placeholder)
 */
export function generateBlurPlaceholder(
  width: number = 10,
  height: number = 10,
  color: string = '#1e293b'
): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      <filter id="b" color-interpolation-filters="sRGB">
        <feGaussianBlur stdDeviation="20"/>
      </filter>
      <rect width="100%" height="100%" fill="${color}"/>
      <rect width="100%" height="100%" filter="url(#b)" fill="${color}" opacity="0.5"/>
    </svg>
  `;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

// Pre-generated blur placeholders
export const blurPlaceholders = {
  dark: generateBlurPlaceholder(10, 10, '#0f172a'),
  light: generateBlurPlaceholder(10, 10, '#f8fafc'),
  emerald: generateBlurPlaceholder(10, 10, '#10b981'),
  gradient: generateBlurPlaceholder(10, 10, '#1e293b'),
};

// =============================================================================
// RESPONSIVE IMAGE SRCSET GENERATOR
// =============================================================================

export interface ImageConfig {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
}

/**
 * Generate srcset for responsive images
 */
export function generateSrcSet(
  basePath: string,
  widths: number[] = [320, 640, 960, 1280, 1920]
): string {
  return widths.map((w) => `${basePath}?w=${w} ${w}w`).join(', ');
}

/**
 * Generate sizes attribute for responsive images
 */
export function generateSizes(config: {
  mobile?: string;
  tablet?: string;
  desktop?: string;
}): string {
  const parts: string[] = [];

  if (config.mobile) {
    parts.push(`(max-width: 640px) ${config.mobile}`);
  }
  if (config.tablet) {
    parts.push(`(max-width: 1024px) ${config.tablet}`);
  }
  if (config.desktop) {
    parts.push(config.desktop);
  }

  return parts.join(', ') || '100vw';
}

// =============================================================================
// ASPECT RATIO UTILITIES
// =============================================================================

export const aspectRatios = {
  '16:9': { paddingBottom: '56.25%', ratio: 16 / 9 },
  '4:3': { paddingBottom: '75%', ratio: 4 / 3 },
  '1:1': { paddingBottom: '100%', ratio: 1 },
  '3:2': { paddingBottom: '66.67%', ratio: 3 / 2 },
  '21:9': { paddingBottom: '42.86%', ratio: 21 / 9 },
  'og': { paddingBottom: '52.5%', ratio: 1200 / 630 },
};

/**
 * Get CSS for aspect ratio container
 */
export function getAspectRatioStyle(ratio: keyof typeof aspectRatios): React.CSSProperties {
  return {
    position: 'relative',
    paddingBottom: aspectRatios[ratio].paddingBottom,
    height: 0,
    overflow: 'hidden',
  };
}

// =============================================================================
// IMAGE LOADING PRIORITIES
// =============================================================================

export const loadingPriorities = {
  // Above the fold - load immediately
  aboveFold: {
    loading: 'eager' as const,
    priority: true,
    fetchPriority: 'high' as const,
  },
  // Below the fold - lazy load
  belowFold: {
    loading: 'lazy' as const,
    priority: false,
    fetchPriority: 'auto' as const,
  },
  // Background/decorative - lowest priority
  decorative: {
    loading: 'lazy' as const,
    priority: false,
    fetchPriority: 'low' as const,
  },
};

// =============================================================================
// NEXT/IMAGE CONFIGURATION
// =============================================================================

export const nextImageConfig = {
  // Device sizes for responsive images
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  // Image sizes for srcset
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  // Supported formats
  formats: ['image/avif', 'image/webp'],
  // Minimum cache TTL
  minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  // Dangerously allow SVG
  dangerouslyAllowSVG: true,
  // Content security policy for SVG
  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
};

// =============================================================================
// PRELOAD IMAGE UTILITY
// =============================================================================

/**
 * Generate preload link tag attributes for critical images
 */
export function getPreloadAttributes(src: string, type: 'image/webp' | 'image/avif' | 'image/png' = 'image/webp') {
  return {
    rel: 'preload' as const,
    as: 'image' as const,
    href: src,
    type,
    fetchpriority: 'high' as const,
  };
}

export default {
  imageSizes,
  generateBlurPlaceholder,
  blurPlaceholders,
  generateSrcSet,
  generateSizes,
  aspectRatios,
  getAspectRatioStyle,
  loadingPriorities,
  nextImageConfig,
  getPreloadAttributes,
};
