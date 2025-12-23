/**
 * HREFLANG CONFIGURATION FOR INTERNATIONAL SEO
 * Helps search engines serve the right language/region content
 */

import { getBaseUrl } from '@/lib/site-config';

// =============================================================================
// SUPPORTED LANGUAGES/REGIONS
// =============================================================================

export interface HreflangConfig {
  code: string;        // ISO 639-1 language code + optional region
  language: string;    // Full language name
  region?: string;     // Target region
  urlPrefix?: string;  // URL prefix for this locale (if any)
}

export const hreflangConfigs: HreflangConfig[] = [
  { code: 'en', language: 'English', region: 'Global' },
  { code: 'en-US', language: 'English', region: 'United States' },
  { code: 'en-GB', language: 'English', region: 'United Kingdom' },
  { code: 'en-CA', language: 'English', region: 'Canada' },
  { code: 'en-AU', language: 'English', region: 'Australia' },
  { code: 'en-IN', language: 'English', region: 'India' },
  { code: 'en-AE', language: 'English', region: 'United Arab Emirates' },
  { code: 'en-SG', language: 'English', region: 'Singapore' },
  { code: 'de-DE', language: 'German', region: 'Germany' },
  { code: 'x-default', language: 'Default', region: 'International' },
];

// =============================================================================
// LOCATION PAGE HREFLANG MAPPING
// =============================================================================

export const locationHreflangMap: Record<string, string> = {
  '/where-we-serve/united-states/': 'en-US',
  '/where-we-serve/united-kingdom/': 'en-GB',
  '/where-we-serve/canada/': 'en-CA',
  '/where-we-serve/australia/': 'en-AU',
  '/where-we-serve/india/': 'en-IN',
  '/where-we-serve/germany/': 'de-DE',
  '/where-we-serve/united-arab-emirates/': 'en-AE',
  '/where-we-serve/singapore/': 'en-SG',
};

// =============================================================================
// HREFLANG GENERATOR FUNCTIONS
// =============================================================================

/**
 * Generate hreflang tags for a page
 */
export function generateHreflangTags(currentPath: string): { hrefLang: string; href: string }[] {
  const siteUrl = getBaseUrl();
  const tags: { hrefLang: string; href: string }[] = [];

  // For location pages, use specific hreflang
  const locationHreflang = locationHreflangMap[currentPath];

  if (locationHreflang) {
    // Add specific region
    tags.push({
      hrefLang: locationHreflang,
      href: `${siteUrl}${currentPath}`,
    });

    // Add x-default pointing to main page
    tags.push({
      hrefLang: 'x-default',
      href: `${siteUrl}/where-we-serve/`,
    });

    // Add en as fallback
    tags.push({
      hrefLang: 'en',
      href: `${siteUrl}${currentPath}`,
    });
  } else {
    // For non-location pages, use default hreflang setup
    tags.push({
      hrefLang: 'en',
      href: `${siteUrl}${currentPath}`,
    });
    tags.push({
      hrefLang: 'x-default',
      href: `${siteUrl}${currentPath}`,
    });
  }

  return tags;
}

/**
 * Generate link elements for head
 */
export function generateHreflangLinks(currentPath: string): string {
  const tags = generateHreflangTags(currentPath);

  return tags
    .map(
      (tag) =>
        `<link rel="alternate" hreflang="${tag.hrefLang}" href="${tag.href}" />`
    )
    .join('\n');
}

/**
 * Get hreflang metadata for Next.js alternates
 */
export function getHreflangAlternates(currentPath: string): Record<string, string> {
  const siteUrl = getBaseUrl();
  const alternates: Record<string, string> = {};

  // Base English version
  alternates['en'] = `${siteUrl}${currentPath}`;
  alternates['x-default'] = `${siteUrl}${currentPath}`;

  // Add location-specific alternates
  const locationHreflang = locationHreflangMap[currentPath];
  if (locationHreflang) {
    alternates[locationHreflang] = `${siteUrl}${currentPath}`;
  }

  return alternates;
}

// =============================================================================
// GEO TARGETING CONFIGURATION
// =============================================================================

export interface GeoTarget {
  country: string;
  countryCode: string;
  languages: string[];
  currency: string;
  targetUrl: string;
}

export const geoTargets: GeoTarget[] = [
  {
    country: 'United States',
    countryCode: 'US',
    languages: ['en-US'],
    currency: 'USD',
    targetUrl: '/where-we-serve/united-states/',
  },
  {
    country: 'United Kingdom',
    countryCode: 'GB',
    languages: ['en-GB'],
    currency: 'GBP',
    targetUrl: '/where-we-serve/united-kingdom/',
  },
  {
    country: 'Canada',
    countryCode: 'CA',
    languages: ['en-CA', 'fr-CA'],
    currency: 'CAD',
    targetUrl: '/where-we-serve/canada/',
  },
  {
    country: 'Australia',
    countryCode: 'AU',
    languages: ['en-AU'],
    currency: 'AUD',
    targetUrl: '/where-we-serve/australia/',
  },
  {
    country: 'Germany',
    countryCode: 'DE',
    languages: ['de-DE', 'en'],
    currency: 'EUR',
    targetUrl: '/where-we-serve/germany/',
  },
  {
    country: 'India',
    countryCode: 'IN',
    languages: ['en-IN', 'hi'],
    currency: 'INR',
    targetUrl: '/where-we-serve/india/',
  },
  {
    country: 'United Arab Emirates',
    countryCode: 'AE',
    languages: ['en-AE', 'ar'],
    currency: 'AED',
    targetUrl: '/where-we-serve/united-arab-emirates/',
  },
];

export default {
  hreflangConfigs,
  generateHreflangTags,
  generateHreflangLinks,
  getHreflangAlternates,
  geoTargets,
};
