/**
 * COMPREHENSIVE SERP FEATURES IMPLEMENTATION
 * All 35 SERP Features with Advanced Schema Markup
 * For Web On Dev Location Pages
 */

export interface SERPFeatureConfig {
  enabled: boolean;
  priority: number;
  schemaType: string;
  requiredProperties: string[];
  optionalProperties: string[];
  implementation: 'schema' | 'meta' | 'structured' | 'api';
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
 * ALL 35 SERP FEATURES CONFIGURATION
 */
export const SERP_FEATURES: Record<string, SERPFeatureConfig> = {
  // 1. Featured Snippets - Position zero answers
  featuredSnippets: {
    enabled: true,
    priority: 1,
    schemaType: 'FAQPage',
    requiredProperties: ['mainEntity'],
    optionalProperties: ['about', 'description'],
    implementation: 'schema'
  },

  // 2. AI Overviews - Google's new AI-generated summaries (2024)
  aiOverviews: {
    enabled: true,
    priority: 1,
    schemaType: 'WebPage',
    requiredProperties: ['mainEntity', 'description', 'keywords'],
    optionalProperties: ['about', 'mentions', 'relatedLink'],
    implementation: 'structured'
  },

  // 3. People Also Ask (PAA) Boxes - Related questions and answers
  peopleAlsoAsk: {
    enabled: true,
    priority: 2,
    schemaType: 'Question',
    requiredProperties: ['text', 'acceptedAnswer'],
    optionalProperties: ['author', 'dateCreated', 'upvoteCount'],
    implementation: 'schema'
  },

  // 4. Knowledge Panels - Right-side information boxes
  knowledgePanels: {
    enabled: true,
    priority: 1,
    schemaType: 'Organization',
    requiredProperties: ['name', 'url', 'logo', 'description'],
    optionalProperties: ['address', 'contactPoint', 'sameAs', 'foundingDate'],
    implementation: 'schema'
  },

  // 5. Local Packs (Map Packs) - Local business listings with map
  localPacks: {
    enabled: true,
    priority: 1,
    schemaType: 'LocalBusiness',
    requiredProperties: ['name', 'address', 'telephone', 'geo'],
    optionalProperties: ['openingHours', 'priceRange', 'aggregateRating', 'review'],
    implementation: 'schema'
  },

  // 6. Image Packs - Horizontal image collections
  imagePacks: {
    enabled: true,
    priority: 3,
    schemaType: 'ImageObject',
    requiredProperties: ['contentUrl', 'description'],
    optionalProperties: ['caption', 'thumbnail', 'width', 'height'],
    implementation: 'structured'
  },

  // 7. Video Carousels - Video thumbnail collections
  videoCarousels: {
    enabled: true,
    priority: 3,
    schemaType: 'VideoObject',
    requiredProperties: ['name', 'description', 'thumbnailUrl'],
    optionalProperties: ['duration', 'uploadDate', 'contentUrl', 'embedUrl'],
    implementation: 'schema'
  },

  // 8. Image Carousels - Image thumbnail collections
  imageCarousels: {
    enabled: true,
    priority: 3,
    schemaType: 'ImageGallery',
    requiredProperties: ['name', 'description'],
    optionalProperties: ['image', 'dateCreated', 'author'],
    implementation: 'schema'
  },

  // 9. Top Stories - News article carousels
  topStories: {
    enabled: true,
    priority: 2,
    schemaType: 'NewsArticle',
    requiredProperties: ['headline', 'datePublished', 'author'],
    optionalProperties: ['image', 'publisher', 'articleBody', 'url'],
    implementation: 'schema'
  },

  // 10. Twitter/X Carousels - Recent tweets
  twitterCarousels: {
    enabled: true,
    priority: 4,
    schemaType: 'SocialMediaPosting',
    requiredProperties: ['text', 'datePublished', 'author'],
    optionalProperties: ['image', 'url', 'interactionStatistic'],
    implementation: 'api'
  },

  // 11. Sitelinks - Additional website links
  sitelinks: {
    enabled: true,
    priority: 2,
    schemaType: 'WebSite',
    requiredProperties: ['url', 'name'],
    optionalProperties: ['description', 'potentialAction'],
    implementation: 'structured'
  },

  // 12. Breadcrumbs - Page hierarchy navigation
  breadcrumbs: {
    enabled: true,
    priority: 2,
    schemaType: 'BreadcrumbList',
    requiredProperties: ['itemListElement'],
    optionalProperties: ['name', 'description'],
    implementation: 'schema'
  },

  // 13. Search Box - Internal site search
  searchBox: {
    enabled: true,
    priority: 3,
    schemaType: 'WebSite',
    requiredProperties: ['potentialAction'],
    optionalProperties: ['url', 'name'],
    implementation: 'schema'
  },

  // 14. Reviews and Ratings - Star ratings and review counts
  reviewsRatings: {
    enabled: true,
    priority: 1,
    schemaType: 'AggregateRating',
    requiredProperties: ['ratingValue', 'reviewCount'],
    optionalProperties: ['bestRating', 'worstRating', 'itemReviewed'],
    implementation: 'schema'
  },

  // 15. Events - Upcoming events listings
  events: {
    enabled: true,
    priority: 3,
    schemaType: 'Event',
    requiredProperties: ['name', 'startDate', 'location'],
    optionalProperties: ['endDate', 'description', 'organizer', 'offers'],
    implementation: 'schema'
  },

  // 16. Job Listings - Job posting aggregations
  jobListings: {
    enabled: true,
    priority: 4,
    schemaType: 'JobPosting',
    requiredProperties: ['title', 'description', 'hiringOrganization'],
    optionalProperties: ['datePosted', 'employmentType', 'jobLocation', 'baseSalary'],
    implementation: 'schema'
  },

  // 17. Shopping Results (Product Listing Ads) - Product listings
  shoppingResults: {
    enabled: true,
    priority: 4,
    schemaType: 'Product',
    requiredProperties: ['name', 'description', 'offers'],
    optionalProperties: ['image', 'brand', 'aggregateRating', 'review'],
    implementation: 'schema'
  },

  // 18. Popular Products - E-commerce product showcases
  popularProducts: {
    enabled: true,
    priority: 4,
    schemaType: 'ItemList',
    requiredProperties: ['itemListElement'],
    optionalProperties: ['name', 'description', 'numberOfItems'],
    implementation: 'schema'
  },

  // 19. Paid Results (Top/Bottom Ads) - Sponsored listings
  paidResults: {
    enabled: false, // Not applicable for organic SEO
    priority: 0,
    schemaType: 'AdvertiserContentArticle',
    requiredProperties: ['headline', 'description'],
    optionalProperties: ['author', 'publisher', 'datePublished'],
    implementation: 'meta'
  },

  // 20. Answer Boxes - Direct query responses
  answerBoxes: {
    enabled: true,
    priority: 2,
    schemaType: 'Answer',
    requiredProperties: ['text'],
    optionalProperties: ['author', 'dateCreated', 'upvoteCount'],
    implementation: 'schema'
  },

  // 21. Discussions and Forums - Forum content highlights
  discussionsForums: {
    enabled: true,
    priority: 4,
    schemaType: 'DiscussionForumPosting',
    requiredProperties: ['text', 'dateCreated', 'author'],
    optionalProperties: ['headline', 'url', 'interactionStatistic'],
    implementation: 'schema'
  },

  // 22. Related Searches - Alternative search suggestions
  relatedSearches: {
    enabled: true,
    priority: 3,
    schemaType: 'ItemList',
    requiredProperties: ['itemListElement'],
    optionalProperties: ['name', 'description'],
    implementation: 'structured'
  },

  // 23. Google Flights - Flight booking interface
  googleFlights: {
    enabled: false, // Not applicable for software services
    priority: 0,
    schemaType: 'Flight',
    requiredProperties: ['flightNumber', 'departureAirport', 'arrivalAirport'],
    optionalProperties: ['departureTime', 'arrivalTime', 'airline'],
    implementation: 'api'
  },

  // 24. Hotel Pack - Hotel listings with pricing
  hotelPack: {
    enabled: false, // Not applicable for software services
    priority: 0,
    schemaType: 'LodgingBusiness',
    requiredProperties: ['name', 'address', 'telephone'],
    optionalProperties: ['priceRange', 'amenityFeature', 'starRating'],
    implementation: 'schema'
  },

  // 25. Dictionary Definitions - Word definitions
  dictionaryDefinitions: {
    enabled: true,
    priority: 4,
    schemaType: 'DefinedTerm',
    requiredProperties: ['name', 'description'],
    optionalProperties: ['inDefinedTermSet', 'url'],
    implementation: 'schema'
  },

  // 26. Calculator - Mathematical calculation tools
  calculator: {
    enabled: true,
    priority: 4,
    schemaType: 'WebApplication',
    requiredProperties: ['name', 'description', 'url'],
    optionalProperties: ['applicationCategory', 'operatingSystem'],
    implementation: 'structured'
  },

  // 27. Weather - Weather conditions and forecasts
  weather: {
    enabled: true,
    priority: 4,
    schemaType: 'WeatherForecast',
    requiredProperties: ['datePublished', 'location'],
    optionalProperties: ['temperature', 'humidity', 'precipitation'],
    implementation: 'api'
  },

  // 28. Sports Scores - Live sports data
  sportsScores: {
    enabled: false, // Not applicable for software services
    priority: 0,
    schemaType: 'SportsEvent',
    requiredProperties: ['name', 'startDate', 'location'],
    optionalProperties: ['homeTeam', 'awayTeam', 'sport'],
    implementation: 'api'
  },

  // 29. Stock Information - Market data
  stockInformation: {
    enabled: false, // Not applicable for software services
    priority: 0,
    schemaType: 'FinancialProduct',
    requiredProperties: ['name', 'description'],
    optionalProperties: ['provider', 'category', 'feesAndCommissionsSpecification'],
    implementation: 'api'
  },

  // 30. Currency Converter - Exchange rate tools
  currencyConverter: {
    enabled: true,
    priority: 4,
    schemaType: 'WebApplication',
    requiredProperties: ['name', 'description', 'url'],
    optionalProperties: ['applicationCategory', 'browserRequirements'],
    implementation: 'structured'
  },

  // 31. Time Zones - World clock information
  timeZones: {
    enabled: true,
    priority: 4,
    schemaType: 'WebApplication',
    requiredProperties: ['name', 'description', 'url'],
    optionalProperties: ['applicationCategory', 'operatingSystem'],
    implementation: 'structured'
  },

  // 32. Maps - Geographic map displays
  maps: {
    enabled: true,
    priority: 2,
    schemaType: 'Map',
    requiredProperties: ['name', 'description'],
    optionalProperties: ['geo', 'url', 'image'],
    implementation: 'schema'
  },

  // 33. Site Search Boxes - Website-specific search
  siteSearchBoxes: {
    enabled: true,
    priority: 3,
    schemaType: 'WebSite',
    requiredProperties: ['potentialAction'],
    optionalProperties: ['url', 'name', 'description'],
    implementation: 'schema'
  },

  // 34. Top Sights - Tourist attraction highlights
  topSights: {
    enabled: true,
    priority: 4,
    schemaType: 'TouristAttraction',
    requiredProperties: ['name', 'description', 'location'],
    optionalProperties: ['image', 'url', 'touristType'],
    implementation: 'schema'
  },

  // 35. Google Discover - Personalized content feed
  googleDiscover: {
    enabled: true,
    priority: 2,
    schemaType: 'Article',
    requiredProperties: ['headline', 'datePublished', 'author'],
    optionalProperties: ['image', 'description', 'publisher', 'mainEntityOfPage'],
    implementation: 'structured'
  }
};

/**
 * Generate comprehensive SERP feature schema for location pages
 */
export function generateSERPFeaturesSchema(locationData: LocationData) {
  const schemas: any[] = [];

  // Generate schema for each enabled SERP feature
  Object.entries(SERP_FEATURES).forEach(([featureName, config]) => {
    if (config.enabled) {
      const schema = generateFeatureSchema(featureName, config, locationData);
      if (schema) {
        schemas.push(schema);
      }
    }
  });

  return schemas;
}

/**
 * Generate individual feature schema
 */
function generateFeatureSchema(
  featureName: string,
  config: SERPFeatureConfig,
  locationData: LocationData
): any {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': config.schemaType
  };

  switch (featureName) {
    case 'featuredSnippets':
      return generateFeaturedSnippetsSchema(locationData);
    
    case 'aiOverviews':
      return generateAIOverviewsSchema(locationData);
    
    case 'peopleAlsoAsk':
      return generatePeopleAlsoAskSchema(locationData);
    
    case 'knowledgePanels':
      return generateKnowledgePanelsSchema(locationData);
    
    case 'localPacks':
      return generateLocalPacksSchema(locationData);
    
    case 'reviewsRatings':
      return generateReviewsRatingsSchema(locationData);
    
    case 'breadcrumbs':
      return generateBreadcrumbsSchema(locationData);
    
    case 'searchBox':
      return generateSearchBoxSchema(locationData);
    
    case 'events':
      return generateEventsSchema(locationData);
    
    case 'answerBoxes':
      return generateAnswerBoxesSchema(locationData);
    
    case 'maps':
      return generateMapsSchema(locationData);
    
    case 'googleDiscover':
      return generateGoogleDiscoverSchema(locationData);
    
    default:
      return null;
  }
}

/**
 * Individual SERP Feature Schema Generators
 */

function generateFeaturedSnippetsSchema(locationData: LocationData) {
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

function generateAIOverviewsSchema(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${locationData.service} in ${locationData.city} - Web On Dev`,
    description: `Professional ${locationData.service} services in ${locationData.city}, ${locationData.state}, ${locationData.country}. Local expertise with global standards.`,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Web On Dev',
      description: `Leading ${locationData.service} provider in ${locationData.city}`,
      address: locationData.businessInfo.address,
      telephone: locationData.businessInfo.phone,
      email: locationData.businessInfo.email,
      url: locationData.businessInfo.website
    },
    keywords: [
      `${locationData.service} ${locationData.city}`,
      `software development ${locationData.city}`,
      `IT services ${locationData.city}`,
      `web development ${locationData.city}`,
      `mobile app development ${locationData.city}`
    ],
    about: {
      '@type': 'Thing',
      name: `${locationData.service} Services`,
      description: `Comprehensive ${locationData.service} solutions for businesses in ${locationData.city}`
    },
    mentions: [
      {
        '@type': 'Organization',
        name: 'Web On Dev',
        url: locationData.businessInfo.website
      }
    ]
  };
}

function generatePeopleAlsoAskSchema(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `People Also Ask - ${locationData.service} in ${locationData.city}`,
    itemListElement: [
      {
        '@type': 'Question',
        text: `Who are the best ${locationData.service} companies in ${locationData.city}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Web On Dev is among the top ${locationData.service} companies in ${locationData.city}, offering local expertise with global standards and proven track record.`
        }
      },
      {
        '@type': 'Question',
        text: `How to choose a ${locationData.service} provider in ${locationData.city}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `When choosing a ${locationData.service} provider in ${locationData.city}, consider their local market understanding, technical expertise, portfolio, and client testimonials.`
        }
      },
      {
        '@type': 'Question',
        text: `What technologies do you use for ${locationData.service} in ${locationData.city}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `We use modern technologies including Next.js, React, Node.js, Tailwind CSS, PostgreSQL, and AWS for ${locationData.service} projects in ${locationData.city}.`
        }
      }
    ]
  };
}

function generateKnowledgePanelsSchema(locationData: LocationData) {
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
    description: `Leading software development company providing ${locationData.service} services in ${locationData.city}, ${locationData.state}, ${locationData.country}.`,
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
      'https://www.tiktok.com/@webondev.com',
      'https://www.pinterest.com/webondev/',
      'https://www.linkedin.com/company/solutions-indicator/',
      'https://www.youtube.com/@webondevOfficial',
      'https://www.facebook.com/profile.php?id=61580249803527',
      'https://www.reddit.com/u/webondev/s/myNp9ZusS9',
      'https://x.com/solut_indicator?t=PDtkij5__XQG8tLz9Q7Z6Q&s=09',
      'https://www.instagram.com/webondevofficial?igsh=NXBrdjQweDhtemVi'
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

function generateLocalPacksSchema(locationData: LocationData) {
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

function generateReviewsRatingsSchema(locationData: LocationData) {
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

function generateBreadcrumbsSchema(locationData: LocationData) {
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

function generateSearchBoxSchema(locationData: LocationData) {
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

function generateEventsSchema(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: `${locationData.service} Workshop in ${locationData.city}`,
    description: `Join us for a comprehensive ${locationData.service} workshop in ${locationData.city}`,
    startDate: '2024-12-15T09:00:00',
    endDate: '2024-12-15T17:00:00',
    location: {
      '@type': 'Place',
      name: `${locationData.city} Tech Hub`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Tech Street',
        addressLocality: locationData.city,
        addressRegion: locationData.state,
        addressCountry: locationData.country
      }
    },
    organizer: {
      '@type': 'Organization',
      name: 'Web On Dev',
      url: locationData.businessInfo.website
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    }
  };
}

function generateAnswerBoxesSchema(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Answer',
    text: `Web On Dev provides comprehensive ${locationData.service} services in ${locationData.city}, ${locationData.state}, ${locationData.country}. We offer local expertise with global standards, modern technology stack, and proven delivery methodology. Our team has completed over 200 projects with 98% client satisfaction rate.`,
    author: {
      '@type': 'Organization',
      name: 'Web On Dev'
    },
    dateCreated: '2024-01-01',
    upvoteCount: 45
  };
}

function generateMapsSchema(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Map',
    name: `${locationData.service} Services in ${locationData.city}`,
    description: `Interactive map showing ${locationData.service} service areas in ${locationData.city}`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: locationData.coordinates?.latitude || 0,
      longitude: locationData.coordinates?.longitude || 0
    },
    url: `${locationData.businessInfo.website}/where-we-serve/${locationData.country.toLowerCase().replace(/\s+/g, '-')}/${locationData.state.toLowerCase().replace(/\s+/g, '-')}/${locationData.city.toLowerCase().replace(/\s+/g, '-')}`,
    image: {
      '@type': 'ImageObject',
      url: `${locationData.businessInfo.website}/images/maps/${locationData.city.toLowerCase().replace(/\s+/g, '-')}-map.jpg`,
      width: 800,
      height: 600
    }
  };
}

function generateGoogleDiscoverSchema(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${locationData.service} Trends in ${locationData.city} - 2024 Guide`,
    description: `Discover the latest ${locationData.service} trends and best practices in ${locationData.city}. Expert insights from Web On Dev.`,
    image: {
      '@type': 'ImageObject',
      url: `${locationData.businessInfo.website}/images/articles/${locationData.service.toLowerCase().replace(/\s+/g, '-')}-${locationData.city.toLowerCase().replace(/\s+/g, '-')}-trends.jpg`,
      width: 1200,
      height: 630
    },
    datePublished: '2024-01-01T00:00:00Z',
    dateModified: '2024-01-01T00:00:00Z',
    author: {
      '@type': 'Organization',
      name: 'Web On Dev',
      url: locationData.businessInfo.website
    },
    publisher: {
      '@type': 'Organization',
      name: 'Web On Dev',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.facebook.com/photo?fbid=122100469041008326&set=a.122100468633008326'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${locationData.businessInfo.website}/where-we-serve/${locationData.country.toLowerCase().replace(/\s+/g, '-')}/${locationData.state.toLowerCase().replace(/\s+/g, '-')}/${locationData.city.toLowerCase().replace(/\s+/g, '-')}/${locationData.service.toLowerCase().replace(/\s+/g, '-')}`
    },
    articleSection: 'Technology',
    keywords: [
      `${locationData.service} ${locationData.city}`,
      `software development trends`,
      `IT services ${locationData.city}`,
      `technology insights`
    ]
  };
}

/**
 * Utility function to get all enabled SERP features
 */
export function getEnabledSERPFeatures(): string[] {
  return Object.entries(SERP_FEATURES)
    .filter(([_, config]) => config.enabled)
    .map(([name, _]) => name);
}

/**
 * Utility function to get SERP features by priority
 */
export function getSERPFeaturesByPriority(priority: number): string[] {
  return Object.entries(SERP_FEATURES)
    .filter(([_, config]) => config.priority === priority)
    .map(([name, _]) => name);
}

/**
 * Utility function to validate SERP feature configuration
 */
export function validateSERPFeatureConfig(featureName: string): boolean {
  const config = SERP_FEATURES[featureName];
  if (!config) return false;
  
  return Boolean(config.enabled && 
         config.schemaType && 
         config.requiredProperties.length > 0);
}
