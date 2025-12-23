/**
 * PERFORMANCE OPTIMIZER COMPONENT
 * Critical CSS, preloading, and Core Web Vitals optimizations
 */

import React from 'react';

interface ResourceHint {
  rel: 'preload' | 'prefetch' | 'preconnect' | 'dns-prefetch';
  href: string;
  as?: 'script' | 'style' | 'image' | 'font' | 'document';
  type?: string;
  crossOrigin?: '' | 'anonymous' | 'use-credentials';
}

// =============================================================================
// RESOURCE HINTS FOR PERFORMANCE
// =============================================================================

export const criticalResources: ResourceHint[] = [
  // Preconnect to critical third-party origins
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
  { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
];

// =============================================================================
// CRITICAL CSS FOR ABOVE THE FOLD
// =============================================================================

export const criticalCSS = `
/* Critical CSS for above-the-fold content */
*,*::before,*::after{box-sizing:border-box}
html{font-family:system-ui,-apple-system,sans-serif;line-height:1.5;-webkit-text-size-adjust:100%}
body{margin:0;background:#0f172a;color:#fff}
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
.container{width:100%;margin:0 auto;padding:0 1rem}
@media(min-width:640px){.container{max-width:640px}}
@media(min-width:768px){.container{max-width:768px}}
@media(min-width:1024px){.container{max-width:1024px}}
@media(min-width:1280px){.container{max-width:1280px}}
/* Prevent layout shift for images */
img{max-width:100%;height:auto;display:block}
/* Prevent FOIT (Flash of Invisible Text) */
.font-loading body{font-family:system-ui,-apple-system,sans-serif}
`;

// =============================================================================
// RESOURCE HINT COMPONENT
// =============================================================================

interface ResourceHintsProps {
  resources?: ResourceHint[];
}

export function ResourceHints({ resources = criticalResources }: ResourceHintsProps) {
  return (
    <>
      {resources.map((resource, index) => (
        <link
          key={`${resource.rel}-${resource.href}-${index}`}
          rel={resource.rel}
          href={resource.href}
          {...(resource.as && { as: resource.as })}
          {...(resource.type && { type: resource.type })}
          {...(resource.crossOrigin && { crossOrigin: resource.crossOrigin })}
        />
      ))}
    </>
  );
}

// =============================================================================
// PRELOAD CRITICAL IMAGES
// =============================================================================

interface PreloadImageProps {
  src: string;
  as?: 'image';
  type?: string;
  media?: string;
  fetchPriority?: 'high' | 'low' | 'auto';
}

export function PreloadImage({
  src,
  as = 'image',
  type,
  media,
  fetchPriority = 'high',
}: PreloadImageProps) {
  return (
    <link
      rel="preload"
      href={src}
      as={as}
      {...(type && { type })}
      {...(media && { media })}
      // @ts-ignore - fetchPriority is valid but not in types yet
      fetchpriority={fetchPriority}
    />
  );
}

// =============================================================================
// FONT PRELOAD
// =============================================================================

interface PreloadFontProps {
  href: string;
  type?: string;
}

export function PreloadFont({ href, type = 'font/woff2' }: PreloadFontProps) {
  return (
    <link
      rel="preload"
      href={href}
      as="font"
      type={type}
      crossOrigin="anonymous"
    />
  );
}

// =============================================================================
// INLINE CRITICAL CSS
// =============================================================================

interface CriticalCSSProps {
  css?: string;
}

export function InlineCriticalCSS({ css = criticalCSS }: CriticalCSSProps) {
  return (
    <style
      dangerouslySetInnerHTML={{ __html: css }}
      // @ts-ignore
      precedence="critical"
    />
  );
}

// =============================================================================
// WEB VITALS MONITORING SCRIPT
// =============================================================================

export const webVitalsScript = `
(function() {
  // Simple Web Vitals monitoring
  if ('web-vital' in window) return;
  window['web-vital'] = true;

  // Observe LCP
  new PerformanceObserver(function(list) {
    var entries = list.getEntries();
    var lastEntry = entries[entries.length - 1];
    console.log('LCP:', lastEntry.startTime);
  }).observe({type: 'largest-contentful-paint', buffered: true});

  // Observe FID
  new PerformanceObserver(function(list) {
    var entries = list.getEntries();
    entries.forEach(function(entry) {
      console.log('FID:', entry.processingStart - entry.startTime);
    });
  }).observe({type: 'first-input', buffered: true});

  // Observe CLS
  var clsValue = 0;
  new PerformanceObserver(function(list) {
    var entries = list.getEntries();
    entries.forEach(function(entry) {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
        console.log('CLS:', clsValue);
      }
    });
  }).observe({type: 'layout-shift', buffered: true});
})();
`;

export function WebVitalsMonitor() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: webVitalsScript }}
      // @ts-ignore
      strategy="afterInteractive"
    />
  );
}

// =============================================================================
// COMBINED PERFORMANCE HEAD COMPONENT
// =============================================================================

interface PerformanceHeadProps {
  preloadImages?: string[];
  preloadFonts?: string[];
  additionalResources?: ResourceHint[];
}

export function PerformanceHead({
  preloadImages = [],
  preloadFonts = [],
  additionalResources = [],
}: PerformanceHeadProps) {
  const allResources = [...criticalResources, ...additionalResources];

  return (
    <>
      <ResourceHints resources={allResources} />
      {preloadImages.map((src, index) => (
        <PreloadImage key={`img-${index}`} src={src} />
      ))}
      {preloadFonts.map((href, index) => (
        <PreloadFont key={`font-${index}`} href={href} />
      ))}
      <InlineCriticalCSS />
    </>
  );
}

export default {
  ResourceHints,
  PreloadImage,
  PreloadFont,
  InlineCriticalCSS,
  WebVitalsMonitor,
  PerformanceHead,
  criticalResources,
  criticalCSS,
  webVitalsScript,
};
