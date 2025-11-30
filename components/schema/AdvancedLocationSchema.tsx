/**
 * ADVANCED SCHEMA COMPONENTS FOR ALL LOCATION PAGES
 * Comprehensive schema integration for Solutions Indicator location pages
 */

import React from 'react';
import { LocationData } from '@/lib/serp-features';
import { generateSERPFeaturesSchema } from '@/lib/serp-features';
import { generateRichSnippetsSchema } from '@/lib/rich-snippets';
import { generateLocalBusinessSchema } from '@/lib/local-business-schema';
import { generateGoogleMyBusinessFeatures } from '@/lib/google-my-business';
import { generateGooglePlacesAPIFeatures } from '@/lib/google-places-api';

interface AdvancedLocationSchemaProps {
  locationData: LocationData;
  pageType: 'country' | 'state' | 'city' | 'service';
  additionalSchemas?: any[];
}

export default function AdvancedLocationSchema({ 
  locationData, 
  pageType, 
  additionalSchemas = [] 
}: AdvancedLocationSchemaProps) {
  // Generate all schema types
  const serpFeaturesSchemas = generateSERPFeaturesSchema(locationData);
  const richSnippetsSchemas = generateRichSnippetsSchema(locationData);
  const localBusinessSchemas = generateLocalBusinessSchema(locationData);
  const googleMyBusinessSchemas = generateGoogleMyBusinessFeatures(locationData);
  const googlePlacesAPISchemas = generateGooglePlacesAPIFeatures(locationData);

  // Combine all schemas
  const allSchemas = [
    ...serpFeaturesSchemas,
    ...richSnippetsSchemas,
    ...localBusinessSchemas,
    ...googleMyBusinessSchemas,
    ...googlePlacesAPISchemas,
    ...additionalSchemas
  ];

  return (
    <>
      {allSchemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 2)
          }}
        />
      ))}
    </>
  );
}

/**
 * Country Page Schema Component
 */
export function CountryPageSchema({ locationData }: { locationData: LocationData }) {
  const countrySchema = {
    '@context': 'https://schema.org',
    '@type': 'Country',
    name: locationData.country,
    description: `Software development services in ${locationData.country}`,
    url: `${locationData.businessInfo.website}/where-we-serve/${locationData.country.toLowerCase().replace(/\s+/g, '-')}`,
    hasPart: [],
    containsPlace: {
      '@type': 'City',
      name: locationData.city,
      description: `Software development services in ${locationData.city}, ${locationData.state}, ${locationData.country}`
    }
  };

  return (
    <AdvancedLocationSchema
      locationData={locationData}
      pageType="country"
      additionalSchemas={[countrySchema]}
    />
  );
}

/**
 * State Page Schema Component
 */
export function StatePageSchema({ locationData }: { locationData: LocationData }) {
  const stateSchema = {
    '@context': 'https://schema.org',
    '@type': 'AdministrativeArea',
    name: locationData.state,
    description: `Software development services in ${locationData.state}, ${locationData.country}`,
    url: `${locationData.businessInfo.website}/where-we-serve/${locationData.country.toLowerCase().replace(/\s+/g, '-')}/${locationData.state.toLowerCase().replace(/\s+/g, '-')}`,
    containedInPlace: {
      '@type': 'Country',
      name: locationData.country
    },
    hasPart: [
      {
        '@type': 'City',
        name: locationData.city,
        description: `Software development services in ${locationData.city}, ${locationData.state}, ${locationData.country}`
      }
    ]
  };

  return (
    <AdvancedLocationSchema
      locationData={locationData}
      pageType="state"
      additionalSchemas={[stateSchema]}
    />
  );
}

/**
 * City Page Schema Component
 */
export function CityPageSchema({ locationData }: { locationData: LocationData }) {
  const citySchema = {
    '@context': 'https://schema.org',
    '@type': 'City',
    name: locationData.city,
    description: `Software development services in ${locationData.city}, ${locationData.state}, ${locationData.country}`,
    url: `${locationData.businessInfo.website}/where-we-serve/${locationData.country.toLowerCase().replace(/\s+/g, '-')}/${locationData.state.toLowerCase().replace(/\s+/g, '-')}/${locationData.city.toLowerCase().replace(/\s+/g, '-')}`,
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: locationData.state,
      containedInPlace: {
        '@type': 'Country',
        name: locationData.country
      }
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: locationData.coordinates?.latitude || 0,
      longitude: locationData.coordinates?.longitude || 0
    }
  };

  return (
    <AdvancedLocationSchema
      locationData={locationData}
      pageType="city"
      additionalSchemas={[citySchema]}
    />
  );
}

/**
 * Service Page Schema Component
 */
export function ServicePageSchema({ locationData }: { locationData: LocationData }) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: locationData.service,
    description: `Professional ${locationData.service} services in ${locationData.city}, ${locationData.state}, ${locationData.country}`,
    url: `${locationData.businessInfo.website}/where-we-serve/${locationData.country.toLowerCase().replace(/\s+/g, '-')}/${locationData.state.toLowerCase().replace(/\s+/g, '-')}/${locationData.city.toLowerCase().replace(/\s+/g, '-')}/${locationData.service.toLowerCase().replace(/\s+/g, '-')}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Solutions Indicator',
      address: {
        '@type': 'PostalAddress',
        streetAddress: locationData.businessInfo.address,
        addressLocality: locationData.city,
        addressRegion: locationData.state,
        addressCountry: locationData.country
      },
      telephone: locationData.businessInfo.phone,
      email: locationData.businessInfo.email,
      url: locationData.businessInfo.website
    },
    areaServed: {
      '@type': 'City',
      name: locationData.city,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: locationData.state,
        containedInPlace: {
          '@type': 'Country',
          name: locationData.country
        }
      }
    },
    serviceType: locationData.service,
    offers: {
      '@type': 'Offer',
      price: '5000',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Solutions Indicator'
      }
    }
  };

  return (
    <AdvancedLocationSchema
      locationData={locationData}
      pageType="service"
      additionalSchemas={[serviceSchema]}
    />
  );
}

/**
 * Comprehensive Location Schema Component
 * This component includes all possible schema types for maximum SERP coverage
 */
export function ComprehensiveLocationSchema({ locationData }: { locationData: LocationData }) {
  // Additional comprehensive schemas
  const comprehensiveSchemas = [
    // WebPage Schema
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: `${locationData.service} in ${locationData.city} - Solutions Indicator`,
      description: `Professional ${locationData.service} services in ${locationData.city}, ${locationData.state}, ${locationData.country}`,
      url: `${locationData.businessInfo.website}/where-we-serve/${locationData.country.toLowerCase().replace(/\s+/g, '-')}/${locationData.state.toLowerCase().replace(/\s+/g, '-')}/${locationData.city.toLowerCase().replace(/\s+/g, '-')}/${locationData.service.toLowerCase().replace(/\s+/g, '-')}`,
      mainEntity: {
        '@type': 'LocalBusiness',
        name: 'Solutions Indicator',
        description: `${locationData.service} services in ${locationData.city}`
      },
      breadcrumb: {
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
      }
    },
    // WebSite Schema
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Solutions Indicator',
      url: locationData.businessInfo.website,
      description: `Leading software development company providing ${locationData.service} services in ${locationData.city}`,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${locationData.businessInfo.website}/search?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Solutions Indicator',
        logo: {
          '@type': 'ImageObject',
          url: `${locationData.businessInfo.website}/logo.png`,
          width: 300,
          height: 100
        }
      }
    },
    // ItemList Schema for Services
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `Solutions Indicator ${locationData.city} Services`,
      description: `Our ${locationData.service} service offerings in ${locationData.city}`,
      itemListElement: [
        {
          '@type': 'Service',
          name: locationData.service,
          description: `Professional ${locationData.service} services in ${locationData.city}`,
          provider: {
            '@type': 'Organization',
            name: 'Solutions Indicator'
          },
          areaServed: {
            '@type': 'City',
            name: locationData.city
          }
        },
        {
          '@type': 'Service',
          name: 'Custom Software Development',
          description: `Custom software development services in ${locationData.city}`,
          provider: {
            '@type': 'Organization',
            name: 'Solutions Indicator'
          },
          areaServed: {
            '@type': 'City',
            name: locationData.city
          }
        },
        {
          '@type': 'Service',
          name: 'Web Development',
          description: `Web development services in ${locationData.city}`,
          provider: {
            '@type': 'Organization',
            name: 'Solutions Indicator'
          },
          areaServed: {
            '@type': 'City',
            name: locationData.city
          }
        },
        {
          '@type': 'Service',
          name: 'Mobile App Development',
          description: `Mobile app development services in ${locationData.city}`,
          provider: {
            '@type': 'Organization',
            name: 'Solutions Indicator'
          },
          areaServed: {
            '@type': 'City',
            name: locationData.city
          }
        }
      ]
    }
  ];

  return (
    <AdvancedLocationSchema
      locationData={locationData}
      pageType="service"
      additionalSchemas={comprehensiveSchemas}
    />
  );
}
