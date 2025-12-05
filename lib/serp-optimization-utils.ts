/**
 * SERP FEATURE OPTIMIZATION UTILITIES
 * Advanced utility functions for optimizing SERP features and rich snippets
 */

import { LocationData } from './serp-features';

/**
 * SERP Optimization Configuration
 */
export interface SERPOptimizationConfig {
  enableFeaturedSnippets: boolean;
  enableLocalPacks: boolean;
  enableKnowledgePanels: boolean;
  enableRichSnippets: boolean;
  enableGoogleMyBusiness: boolean;
  enableGooglePlaces: boolean;
  enableVoiceSearch: boolean;
  enableMobileOptimization: boolean;
  enablePageSpeed: boolean;
  enableCoreWebVitals: boolean;
}

/**
 * Default SERP optimization configuration
 */
export const DEFAULT_SERP_CONFIG: SERPOptimizationConfig = {
  enableFeaturedSnippets: true,
  enableLocalPacks: true,
  enableKnowledgePanels: true,
  enableRichSnippets: true,
  enableGoogleMyBusiness: true,
  enableGooglePlaces: true,
  enableVoiceSearch: true,
  enableMobileOptimization: true,
  enablePageSpeed: true,
  enableCoreWebVitals: true
};

/**
 * Generate optimized meta tags for SERP features
 */
export function generateOptimizedMetaTags(locationData: LocationData, config: SERPOptimizationConfig = DEFAULT_SERP_CONFIG) {
  const metaTags: Record<string, string> = {};

  // Basic meta tags
  metaTags.title = `${locationData.service} in ${locationData.city} - Web On Dev`;
  metaTags.description = `Professional ${locationData.service} services in ${locationData.city}, ${locationData.state}, ${locationData.country}. Local expertise with global standards.`;
  metaTags.keywords = `${locationData.service} ${locationData.city}, software development ${locationData.city}, IT services ${locationData.city}, web development ${locationData.city}, mobile app development ${locationData.city}`;

  // Open Graph tags
  metaTags['og:title'] = `${locationData.service} in ${locationData.city} - Web On Dev`;
  metaTags['og:description'] = `Professional ${locationData.service} services in ${locationData.city}, ${locationData.state}, ${locationData.country}`;
  metaTags['og:url'] = `${locationData.businessInfo.website}/where-we-serve/${locationData.country.toLowerCase().replace(/\s+/g, '-')}/${locationData.state.toLowerCase().replace(/\s+/g, '-')}/${locationData.city.toLowerCase().replace(/\s+/g, '-')}/${locationData.service.toLowerCase().replace(/\s+/g, '-')}`;
  metaTags['og:type'] = 'website';
  metaTags['og:image'] = `${locationData.businessInfo.website}/images/services/${locationData.service.toLowerCase().replace(/\s+/g, '-')}-${locationData.city.toLowerCase().replace(/\s+/g, '-')}.jpg`;
  metaTags['og:site_name'] = 'Web On Dev';

  // Twitter Card tags
  metaTags['twitter:card'] = 'summary_large_image';
  metaTags['twitter:title'] = `${locationData.service} in ${locationData.city} - Web On Dev`;
  metaTags['twitter:description'] = `Professional ${locationData.service} services in ${locationData.city}, ${locationData.state}, ${locationData.country}`;
  metaTags['twitter:image'] = `${locationData.businessInfo.website}/images/services/${locationData.service.toLowerCase().replace(/\s+/g, '-')}-${locationData.city.toLowerCase().replace(/\s+/g, '-')}.jpg`;

  // Local business meta tags
  if (config.enableLocalPacks) {
    metaTags['business:contact_data:street_address'] = locationData.businessInfo.address;
    metaTags['business:contact_data:locality'] = locationData.city;
    metaTags['business:contact_data:region'] = locationData.state;
    metaTags['business:contact_data:country_name'] = locationData.country;
    metaTags['business:contact_data:phone_number'] = locationData.businessInfo.phone;
    metaTags['business:contact_data:website'] = locationData.businessInfo.website;
  }

  // Geo meta tags
  if (locationData.coordinates) {
    metaTags['geo.region'] = `${locationData.country}-${locationData.state}`;
    metaTags['geo.placename'] = locationData.city;
    metaTags['geo.position'] = `${locationData.coordinates.latitude};${locationData.coordinates.longitude}`;
    metaTags['ICBM'] = `${locationData.coordinates.latitude}, ${locationData.coordinates.longitude}`;
  }

  // Voice search optimization
  if (config.enableVoiceSearch) {
    metaTags['speakable'] = 'true';
    metaTags['speakable:css-selector'] = '.speakable-content';
  }

  return metaTags;
}

/**
 * Generate structured data for featured snippets optimization
 */
export function generateFeaturedSnippetsData(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What ${locationData.service} services do you provide in ${locationData.city}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `We provide comprehensive ${locationData.service} services in ${locationData.city}, ${locationData.state}, ${locationData.country}. Our services include custom development, maintenance, and support with local expertise and global standards.`
        }
      },
      {
        '@type': 'Question',
        name: `How much does ${locationData.service} cost in ${locationData.city}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Our ${locationData.service} pricing in ${locationData.city} varies based on project scope and requirements. We offer flexible pricing models including fixed scope, time & materials, and dedicated team options. Contact us for a personalized quote.`
        }
      },
      {
        '@type': 'Question',
        name: `What is your response time for ${locationData.service} in ${locationData.city}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `We typically respond to ${locationData.service} inquiries in ${locationData.city} within 1-2 hours during business hours. Our local team ensures fast communication and quick project initiation.`
        }
      },
      {
        '@type': 'Question',
        name: `What technologies do you use for ${locationData.service} in ${locationData.city}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `We use modern technologies including Next.js, React, Node.js, Tailwind CSS, PostgreSQL, and AWS for ${locationData.service} projects in ${locationData.city}.`
        }
      },
      {
        '@type': 'Question',
        name: `Do you provide ongoing support for ${locationData.service} in ${locationData.city}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes, we provide comprehensive ongoing support and maintenance for all ${locationData.service} projects in ${locationData.city}. Our support includes 24/7 monitoring, regular updates, and technical assistance.`
        }
      }
    ]
  };
}

/**
 * Generate structured data for local packs optimization
 */
export function generateLocalPacksData(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Web On Dev',
    description: `Professional ${locationData.service} services in ${locationData.city}`,
    url: locationData.businessInfo.website,
    telephone: locationData.businessInfo.phone,
    email: locationData.businessInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: locationData.businessInfo.address,
      addressLocality: locationData.city,
      addressRegion: locationData.state,
      addressCountry: locationData.country,
      postalCode: '00000'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: locationData.coordinates?.latitude || 0,
      longitude: locationData.coordinates?.longitude || 0
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Ahmed Khan'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: `Excellent ${locationData.service} services in ${locationData.city}. Highly recommended!`
      }
    ],
    areaServed: {
      '@type': 'City',
      name: locationData.city
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${locationData.service} Services`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locationData.service,
            description: `Professional ${locationData.service} services in ${locationData.city}`
          }
        }
      ]
    }
  };
}

/**
 * Generate structured data for knowledge panels optimization
 */
export function generateKnowledgePanelsData(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Web On Dev',
    alternateName: 'Web On Dev Software Development',
    url: locationData.businessInfo.website,
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.facebook.com/photo?fbid=122100469041008326&set=a.122100468633008326'
    },
    description: `Leading software development company providing ${locationData.service} services in ${locationData.city}, ${locationData.state}, ${locationData.country}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: locationData.businessInfo.address,
      addressLocality: locationData.city,
      addressRegion: locationData.state,
      addressCountry: locationData.country
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: locationData.businessInfo.phone || '+923274811220',
      email: locationData.businessInfo.email || 'muhammadrehmanyousaf786@gmail.com',
      contactType: 'customer service',
      areaServed: locationData.city,
      availableLanguage: ['English', 'Urdu']
    },
    sameAs: [
      'https://www.youtube.com/@webondev',
      'https://x.com/webon_dev',
      'https://www.facebook.com/people/Web-On-Dev/61584774954945/',
      'https://www.instagram.com/webondev/',
      // 'https://www.tiktok.com/@webondev.com',
      // 'https://www.pinterest.com/webondev/',
      // 'https://www.linkedin.com/company/solutions-indicator/',
      // 'https://www.youtube.com/@webondevOfficial',
      // 'https://www.facebook.com/profile.php?id=61580249803527',
      // 'https://www.reddit.com/u/webondev/s/myNp9ZusS9',
      // 'https://x.com/solut_indicator?t=PDtkij5__XQG8tLz9Q7Z6Q&s=09',
      // 'https://www.instagram.com/webondevofficial?igsh=NXBrdjQweDhtemVi'
    ],
    foundingDate: '2020-01-01',
    numberOfEmployees: '50-100',
    industry: 'Software Development',
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: locationData.coordinates?.latitude || 0,
        longitude: locationData.coordinates?.longitude || 0
      },
      geoRadius: '50000'
    }
  };
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbData(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: locationData.businessInfo.website
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Where We Serve',
        item: `${locationData.businessInfo.website}/where-we-serve`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: locationData.country,
        item: `${locationData.businessInfo.website}/where-we-serve/${locationData.country.toLowerCase().replace(/\s+/g, '-')}`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: locationData.state,
        item: `${locationData.businessInfo.website}/where-we-serve/${locationData.country.toLowerCase().replace(/\s+/g, '-')}/${locationData.state.toLowerCase().replace(/\s+/g, '-')}`
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: locationData.city,
        item: `${locationData.businessInfo.website}/where-we-serve/${locationData.country.toLowerCase().replace(/\s+/g, '-')}/${locationData.state.toLowerCase().replace(/\s+/g, '-')}/${locationData.city.toLowerCase().replace(/\s+/g, '-')}`
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: locationData.service,
        item: `${locationData.businessInfo.website}/where-we-serve/${locationData.country.toLowerCase().replace(/\s+/g, '-')}/${locationData.state.toLowerCase().replace(/\s+/g, '-')}/${locationData.city.toLowerCase().replace(/\s+/g, '-')}/${locationData.service.toLowerCase().replace(/\s+/g, '-')}`
      }
    ]
  };
}

/**
 * Generate search box structured data
 */
export function generateSearchBoxData(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Web On Dev',
    url: locationData.businessInfo.website,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${locationData.businessInfo.website}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

/**
 * Generate comprehensive SERP optimization data
 */
export function generateComprehensiveSERPOptimization(locationData: LocationData, config: SERPOptimizationConfig = DEFAULT_SERP_CONFIG) {
  const optimizationData: any = {};

  // Meta tags
  optimizationData.metaTags = generateOptimizedMetaTags(locationData, config);

  // Structured data
  optimizationData.structuredData = [];

  if (config.enableFeaturedSnippets) {
    optimizationData.structuredData.push(generateFeaturedSnippetsData(locationData));
  }

  if (config.enableLocalPacks) {
    optimizationData.structuredData.push(generateLocalPacksData(locationData));
  }

  if (config.enableKnowledgePanels) {
    optimizationData.structuredData.push(generateKnowledgePanelsData(locationData));
  }

  // Always include breadcrumbs and search box
  optimizationData.structuredData.push(generateBreadcrumbData(locationData));
  optimizationData.structuredData.push(generateSearchBoxData(locationData));

  return optimizationData;
}

/**
 * Validate SERP optimization configuration
 */
export function validateSERPOptimizationConfig(config: SERPOptimizationConfig): boolean {
  return (
    typeof config.enableFeaturedSnippets === 'boolean' &&
    typeof config.enableLocalPacks === 'boolean' &&
    typeof config.enableKnowledgePanels === 'boolean' &&
    typeof config.enableRichSnippets === 'boolean' &&
    typeof config.enableGoogleMyBusiness === 'boolean' &&
    typeof config.enableGooglePlaces === 'boolean' &&
    typeof config.enableVoiceSearch === 'boolean' &&
    typeof config.enableMobileOptimization === 'boolean' &&
    typeof config.enablePageSpeed === 'boolean' &&
    typeof config.enableCoreWebVitals === 'boolean'
  );
}

/**
 * Get SERP optimization recommendations
 */
export function getSERPOptimizationRecommendations(locationData: LocationData): string[] {
  const recommendations: string[] = [];

  // Check for missing coordinates
  if (!locationData.coordinates) {
    recommendations.push('Add geographic coordinates for better local search optimization');
  }

  // Check for missing business hours
  if (!locationData.businessInfo.hours || locationData.businessInfo.hours.length === 0) {
    recommendations.push('Add business hours for better local pack optimization');
  }

  // Check for missing description
  if (!locationData.businessInfo.description || locationData.businessInfo.description.length < 100) {
    recommendations.push('Add a comprehensive business description (minimum 100 characters)');
  }

  // Check for missing phone number
  if (!locationData.businessInfo.phone) {
    recommendations.push('Add a phone number for better local search visibility');
  }

  // Check for missing email
  if (!locationData.businessInfo.email) {
    recommendations.push('Add an email address for better contact information');
  }

  return recommendations;
}

/**
 * Generate performance optimization suggestions
 */
export function getPerformanceOptimizationSuggestions(): string[] {
  return [
    'Implement lazy loading for images and videos',
    'Use WebP format for images with fallbacks',
    'Minify CSS and JavaScript files',
    'Enable GZIP compression',
    'Use a Content Delivery Network (CDN)',
    'Optimize database queries',
    'Implement caching strategies',
    'Use HTTP/2 for faster loading',
    'Optimize font loading',
    'Implement service workers for offline functionality'
  ];
}

/**
 * Generate Core Web Vitals optimization suggestions
 */
export function getCoreWebVitalsOptimizationSuggestions(): string[] {
  return [
    'Optimize Largest Contentful Paint (LCP) by optimizing images and fonts',
    'Improve First Input Delay (FID) by reducing JavaScript execution time',
    'Enhance Cumulative Layout Shift (CLS) by setting image dimensions',
    'Use responsive images with proper sizing',
    'Implement critical CSS inlining',
    'Defer non-critical JavaScript',
    'Optimize third-party scripts',
    'Use efficient image formats (WebP, AVIF)',
    'Implement proper caching headers',
    'Monitor and optimize server response times'
  ];
}
