/**
 * COMPREHENSIVE LOCAL BUSINESS SCHEMA IMPLEMENTATION
 * All 20 Local Business Schema Types with Advanced Features
 * For Web On Dev Location Pages
 */

export interface LocalBusinessConfig {
  enabled: boolean;
  priority: number;
  schemaType: string;
  requiredProperties: string[];
  optionalProperties: string[];
  implementation: 'schema' | 'microdata' | 'json-ld';
}

export interface LocationData {
  country: string;
  state: string;
  city: string;
  service: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  businessInfo: {
    name: string;
    address: string;
    phone: string;
    email: string;
    website: string;
    hours: string[];
    description: string;
  };
}

/**
 * ALL 20 LOCAL BUSINESS SCHEMA TYPES CONFIGURATION
 */
export const LOCAL_BUSINESS_SCHEMAS: Record<string, LocalBusinessConfig> = {
  // 1. LocalBusiness - Base local business schema
  localBusiness: {
    enabled: true,
    priority: 1,
    schemaType: 'LocalBusiness',
    requiredProperties: ['name', 'address', 'telephone'],
    optionalProperties: ['geo', 'openingHours', 'priceRange', 'aggregateRating'],
    implementation: 'schema'
  },

  // 2. ProfessionalService - Professional services
  professionalService: {
    enabled: true,
    priority: 1,
    schemaType: 'ProfessionalService',
    requiredProperties: ['name', 'description', 'provider'],
    optionalProperties: ['areaServed', 'serviceType', 'hasOfferCatalog'],
    implementation: 'schema'
  },

  // 3. SoftwareApplication - Software development services
  softwareApplication: {
    enabled: true,
    priority: 1,
    schemaType: 'SoftwareApplication',
    requiredProperties: ['name', 'description', 'applicationCategory'],
    optionalProperties: ['operatingSystem', 'offers', 'aggregateRating'],
    implementation: 'schema'
  },

  // 4. Organization - Company information
  organization: {
    enabled: true,
    priority: 1,
    schemaType: 'Organization',
    requiredProperties: ['name', 'url', 'logo'],
    optionalProperties: ['address', 'contactPoint', 'sameAs', 'foundingDate'],
    implementation: 'schema'
  },

  // 5. Corporation - Corporate entity
  corporation: {
    enabled: true,
    priority: 2,
    schemaType: 'Corporation',
    requiredProperties: ['name', 'url'],
    optionalProperties: ['address', 'contactPoint', 'foundingDate', 'numberOfEmployees'],
    implementation: 'schema'
  },

  // 6. Service - Service provider
  service: {
    enabled: true,
    priority: 1,
    schemaType: 'Service',
    requiredProperties: ['name', 'description', 'provider'],
    optionalProperties: ['areaServed', 'serviceType', 'offers'],
    implementation: 'schema'
  },

  // 7. Place - Physical location
  place: {
    enabled: true,
    priority: 2,
    schemaType: 'Place',
    requiredProperties: ['name', 'address'],
    optionalProperties: ['geo', 'telephone', 'url', 'image'],
    implementation: 'schema'
  },

  // 8. PostalAddress - Address information
  postalAddress: {
    enabled: true,
    priority: 2,
    schemaType: 'PostalAddress',
    requiredProperties: ['streetAddress', 'addressLocality', 'addressRegion'],
    optionalProperties: ['addressCountry', 'postalCode'],
    implementation: 'schema'
  },

  // 9. ContactPoint - Contact details
  contactPoint: {
    enabled: true,
    priority: 2,
    schemaType: 'ContactPoint',
    requiredProperties: ['telephone', 'contactType'],
    optionalProperties: ['email', 'areaServed', 'availableLanguage'],
    implementation: 'schema'
  },

  // 10. OpeningHoursSpecification - Business hours
  openingHoursSpecification: {
    enabled: true,
    priority: 2,
    schemaType: 'OpeningHoursSpecification',
    requiredProperties: ['dayOfWeek', 'opens', 'closes'],
    optionalProperties: ['validFrom', 'validThrough'],
    implementation: 'schema'
  },

  // 11. PriceRange - Service pricing
  priceRange: {
    enabled: true,
    priority: 3,
    schemaType: 'PriceSpecification',
    requiredProperties: ['price', 'priceCurrency'],
    optionalProperties: ['minPrice', 'maxPrice', 'validFrom', 'validThrough'],
    implementation: 'schema'
  },

  // 12. AggregateRating - Review aggregations
  aggregateRating: {
    enabled: true,
    priority: 1,
    schemaType: 'AggregateRating',
    requiredProperties: ['ratingValue', 'reviewCount'],
    optionalProperties: ['bestRating', 'worstRating', 'itemReviewed'],
    implementation: 'schema'
  },

  // 13. Review - Customer reviews
  review: {
    enabled: true,
    priority: 1,
    schemaType: 'Review',
    requiredProperties: ['reviewRating', 'author', 'reviewBody'],
    optionalProperties: ['datePublished', 'itemReviewed', 'publisher'],
    implementation: 'schema'
  },

  // 14. ImageObject - Business images
  imageObject: {
    enabled: true,
    priority: 3,
    schemaType: 'ImageObject',
    requiredProperties: ['contentUrl', 'description'],
    optionalProperties: ['caption', 'thumbnail', 'width', 'height'],
    implementation: 'schema'
  },

  // 15. VideoObject - Business videos
  videoObject: {
    enabled: true,
    priority: 3,
    schemaType: 'VideoObject',
    requiredProperties: ['name', 'description', 'thumbnailUrl'],
    optionalProperties: ['duration', 'uploadDate', 'contentUrl', 'embedUrl'],
    implementation: 'schema'
  },

  // 16. GeoCoordinates - Geographic coordinates
  geoCoordinates: {
    enabled: true,
    priority: 2,
    schemaType: 'GeoCoordinates',
    requiredProperties: ['latitude', 'longitude'],
    optionalProperties: ['elevation'],
    implementation: 'schema'
  },

  // 17. BreadcrumbList - Navigation breadcrumbs
  breadcrumbList: {
    enabled: true,
    priority: 2,
    schemaType: 'BreadcrumbList',
    requiredProperties: ['itemListElement'],
    optionalProperties: ['name', 'description'],
    implementation: 'schema'
  },

  // 18. FAQPage - Frequently asked questions
  faqPage: {
    enabled: true,
    priority: 2,
    schemaType: 'FAQPage',
    requiredProperties: ['mainEntity'],
    optionalProperties: ['about', 'description'],
    implementation: 'schema'
  },

  // 19. WebPage - Page information
  webPage: {
    enabled: true,
    priority: 2,
    schemaType: 'WebPage',
    requiredProperties: ['name', 'description'],
    optionalProperties: ['url', 'mainEntity', 'breadcrumb'],
    implementation: 'schema'
  },

  // 20. WebSite - Website details
  webSite: {
    enabled: true,
    priority: 2,
    schemaType: 'WebSite',
    requiredProperties: ['name', 'url'],
    optionalProperties: ['description', 'potentialAction', 'publisher'],
    implementation: 'schema'
  }
};

/**
 * Generate comprehensive local business schema for location pages
 */
export function generateLocalBusinessSchema(locationData: LocationData) {
  const schemas: any[] = [];

  // Generate schema for each enabled local business type
  Object.entries(LOCAL_BUSINESS_SCHEMAS).forEach(([schemaName, config]) => {
    if (config.enabled) {
      const schema = generateSchemaType(schemaName, config, locationData);
      if (schema) {
        schemas.push(schema);
      }
    }
  });

  return schemas;
}

/**
 * Generate individual local business schema type
 */
function generateSchemaType(
  schemaName: string,
  config: LocalBusinessConfig,
  locationData: LocationData
): any {
  switch (schemaName) {
    case 'localBusiness':
      return generateLocalBusinessSchemaType(locationData);
    
    case 'professionalService':
      return generateProfessionalServiceSchema(locationData);
    
    case 'softwareApplication':
      return generateSoftwareApplicationSchema(locationData);
    
    case 'organization':
      return generateOrganizationSchema(locationData);
    
    case 'corporation':
      return generateCorporationSchema(locationData);
    
    case 'service':
      return generateServiceSchema(locationData);
    
    case 'place':
      return generatePlaceSchema(locationData);
    
    case 'postalAddress':
      return generatePostalAddressSchema(locationData);
    
    case 'contactPoint':
      return generateContactPointSchema(locationData);
    
    case 'openingHoursSpecification':
      return generateOpeningHoursSpecificationSchema(locationData);
    
    case 'priceRange':
      return generatePriceRangeSchema(locationData);
    
    case 'aggregateRating':
      return generateAggregateRatingSchema(locationData);
    
    case 'review':
      return generateReviewSchema(locationData);
    
    case 'imageObject':
      return generateImageObjectSchema(locationData);
    
    case 'videoObject':
      return generateVideoObjectSchema(locationData);
    
    case 'geoCoordinates':
      return generateGeoCoordinatesSchema(locationData);
    
    case 'breadcrumbList':
      return generateBreadcrumbListSchema(locationData);
    
    case 'faqPage':
      return generateFAQPageSchema(locationData);
    
    case 'webPage':
      return generateWebPageSchema(locationData);
    
    case 'webSite':
      return generateWebSiteSchema(locationData);
    
    default:
      return null;
  }
}

/**
 * Individual Local Business Schema Generators
 */

function generateLocalBusinessSchemaType(locationData: LocationData) {
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
      postalCode: '54660'
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

function generateProfessionalServiceSchema(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `Web On Dev ${locationData.service} Services`,
    description: `Professional ${locationData.service} services in ${locationData.city}, ${locationData.state}, ${locationData.country}`,
    provider: {
      '@type': 'Organization',
      name: 'Web On Dev',
      url: locationData.businessInfo.website
    },
    areaServed: {
      '@type': 'City',
      name: locationData.city
    },
    serviceType: locationData.service,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${locationData.service} Service Packages`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Basic Package',
            description: `Basic ${locationData.service} services for small businesses in ${locationData.city}`
          },
          price: '2000',
          priceCurrency: 'USD'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Professional Package',
            description: `Professional ${locationData.service} services for medium businesses in ${locationData.city}`
          },
          price: '5000',
          priceCurrency: 'USD'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Enterprise Package',
            description: `Enterprise ${locationData.service} services for large businesses in ${locationData.city}`
          },
          price: '10000',
          priceCurrency: 'USD'
        }
      ]
    }
  };
}

function generateSoftwareApplicationSchema(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `${locationData.service} Management System`,
    description: `Professional ${locationData.service} management system for businesses in ${locationData.city}`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: ['Windows', 'macOS', 'Linux'],
    offers: {
      '@type': 'Offer',
      price: '99',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Web On Dev'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '89',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Business Owner'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: `Excellent ${locationData.service} management system. Highly recommended for ${locationData.city} businesses.`
      }
    ]
  };
}

function generateOrganizationSchema(locationData: LocationData) {
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
    industry: 'Software Development'
  };
}

function generateCorporationSchema(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: 'Web On Dev Corporation',
    url: locationData.businessInfo.website,
    address: {
      '@type': 'PostalAddress',
      streetAddress: locationData.businessInfo.address,
      addressLocality: locationData.city,
      addressRegion: locationData.state,
      addressCountry: locationData.country
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: locationData.businessInfo.phone,
      email: locationData.businessInfo.email,
      contactType: 'corporate headquarters'
    },
    foundingDate: '2020-01-01',
    numberOfEmployees: '50-100',
    industry: 'Software Development',
    description: `Leading software development corporation providing ${locationData.service} services in ${locationData.city}`
  };
}

function generateServiceSchema(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: locationData.service,
    description: `Professional ${locationData.service} services in ${locationData.city}, ${locationData.state}, ${locationData.country}`,
    provider: {
      '@type': 'Organization',
      name: 'Web On Dev',
      url: locationData.businessInfo.website
    },
    areaServed: {
      '@type': 'City',
      name: locationData.city
    },
    serviceType: locationData.service,
    offers: {
      '@type': 'Offer',
      price: '5000',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Web On Dev'
      }
    }
  };
}

function generatePlaceSchema(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: `Web On Dev ${locationData.city} Office`,
    description: `Our ${locationData.service} service center in ${locationData.city}`,
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
    telephone: locationData.businessInfo.phone,
    url: `${locationData.businessInfo.website}/where-we-serve/${locationData.country.toLowerCase().replace(/\s+/g, '-')}/${locationData.state.toLowerCase().replace(/\s+/g, '-')}/${locationData.city.toLowerCase().replace(/\s+/g, '-')}`,
    image: `${locationData.businessInfo.website}/images/offices/${locationData.city.toLowerCase().replace(/\s+/g, '-')}-office.jpg`
  };
}

function generatePostalAddressSchema(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'PostalAddress',
    streetAddress: locationData.businessInfo.address,
    addressLocality: locationData.city,
    addressRegion: locationData.state,
    addressCountry: locationData.country,
    postalCode: '00000'
  };
}

function generateContactPointSchema(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    telephone: locationData.businessInfo.phone,
    email: locationData.businessInfo.email,
    contactType: 'customer service',
    areaServed: {
      '@type': 'City',
      name: locationData.city
    },
    availableLanguage: ['English', 'Urdu']
  };
}

function generateOpeningHoursSpecificationSchema(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
    validFrom: '2024-01-01',
    validThrough: '2024-12-31'
  };
}

function generatePriceRangeSchema(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'PriceSpecification',
    price: '5000',
    priceCurrency: 'USD',
    minPrice: '2000',
    maxPrice: '10000',
    validFrom: '2024-01-01',
    validThrough: '2024-12-31'
  };
}

function generateAggregateRatingSchema(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: 'Web On Dev',
      description: `${locationData.service} services in ${locationData.city}`
    }
  };
}

function generateReviewSchema(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1'
    },
    author: {
      '@type': 'Person',
      name: 'Ahmed Khan'
    },
    reviewBody: `Excellent ${locationData.service} services in ${locationData.city}. Web On Dev delivered exactly what we needed with professional quality and timely delivery.`,
    datePublished: '2024-01-15',
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: 'Web On Dev',
      description: `${locationData.service} services in ${locationData.city}`
    },
    publisher: {
      '@type': 'Organization',
      name: 'Web On Dev'
    }
  };
}

function generateImageObjectSchema(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: `${locationData.businessInfo.website}/images/services/${locationData.service.toLowerCase().replace(/\s+/g, '-')}-service.jpg`,
    description: `${locationData.service} services in ${locationData.city} by Web On Dev`,
    caption: `Professional ${locationData.service} services in ${locationData.city}`,
    thumbnail: `${locationData.businessInfo.website}/images/services/thumbnails/${locationData.service.toLowerCase().replace(/\s+/g, '-')}-service-thumb.jpg`,
    width: 800,
    height: 600
  };
}

function generateVideoObjectSchema(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: `${locationData.service} Services in ${locationData.city} - Web On Dev`,
    description: `Learn about our comprehensive ${locationData.service} services in ${locationData.city}`,
    thumbnailUrl: `${locationData.businessInfo.website}/images/videos/${locationData.service.toLowerCase().replace(/\s+/g, '-')}-${locationData.city.toLowerCase().replace(/\s+/g, '-')}-thumbnail.jpg`,
    duration: 'PT3M30S',
    uploadDate: '2024-01-01T00:00:00Z',
    contentUrl: `${locationData.businessInfo.website}/videos/${locationData.service.toLowerCase().replace(/\s+/g, '-')}-${locationData.city.toLowerCase().replace(/\s+/g, '-')}.mp4`,
    embedUrl: `${locationData.businessInfo.website}/videos/embed/${locationData.service.toLowerCase().replace(/\s+/g, '-')}-${locationData.city.toLowerCase().replace(/\s+/g, '-')}`,
    publisher: {
      '@type': 'Organization',
      name: 'Web On Dev',
      logo: {
        '@type': 'ImageObject',
        url: `${locationData.businessInfo.website}/logo.png`
      }
    }
  };
}

function generateGeoCoordinatesSchema(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeoCoordinates',
    latitude: locationData.coordinates?.latitude || 0,
    longitude: locationData.coordinates?.longitude || 0,
    elevation: 0
  };
}

function generateBreadcrumbListSchema(locationData: LocationData) {
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

function generateFAQPageSchema(locationData: LocationData) {
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
      }
    ]
  };
}

function generateWebPageSchema(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${locationData.service} in ${locationData.city} - Web On Dev`,
    description: `Professional ${locationData.service} services in ${locationData.city}, ${locationData.state}, ${locationData.country}`,
    url: `${locationData.businessInfo.website}/where-we-serve/${locationData.country.toLowerCase().replace(/\s+/g, '-')}/${locationData.state.toLowerCase().replace(/\s+/g, '-')}/${locationData.city.toLowerCase().replace(/\s+/g, '-')}/${locationData.service.toLowerCase().replace(/\s+/g, '-')}`,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Web On Dev',
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
  };
}

function generateWebSiteSchema(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Web On Dev',
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
      name: 'Web On Dev',
      logo: {
        '@type': 'ImageObject',
        url: `${locationData.businessInfo.website}/logo.png`
      }
    }
  };
}

/**
 * Utility function to get all enabled local business schemas
 */
export function getEnabledLocalBusinessSchemas(): string[] {
  return Object.entries(LOCAL_BUSINESS_SCHEMAS)
    .filter(([_, config]) => config.enabled)
    .map(([name, _]) => name);
}

/**
 * Utility function to get local business schemas by priority
 */
export function getLocalBusinessSchemasByPriority(priority: number): string[] {
  return Object.entries(LOCAL_BUSINESS_SCHEMAS)
    .filter(([_, config]) => config.priority === priority)
    .map(([name, _]) => name);
}

/**
 * Utility function to validate local business schema configuration
 */
export function validateLocalBusinessSchemaConfig(schemaName: string): boolean {
  const config = LOCAL_BUSINESS_SCHEMAS[schemaName];
  if (!config) return false;
  
  return Boolean(config.enabled && 
         config.schemaType && 
         config.requiredProperties.length > 0);
}
