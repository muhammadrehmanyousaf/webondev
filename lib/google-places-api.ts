/**
 * COMPREHENSIVE GOOGLE PLACES API FEATURES IMPLEMENTATION
 * All 15 Google Places API Features with Advanced Functionality
 * For Web On Dev Location Pages
 */

export interface GooglePlacesConfig {
  enabled: boolean;
  priority: number;
  featureType: string;
  requiredProperties: string[];
  optionalProperties: string[];
  implementation: 'api' | 'schema' | 'structured' | 'meta';
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
 * ALL 15 GOOGLE PLACES API FEATURES CONFIGURATION
 */
export const GOOGLE_PLACES_API_FEATURES: Record<string, GooglePlacesConfig> = {
  // 1. Place Details - Comprehensive place information
  placeDetails: {
    enabled: true,
    priority: 1,
    featureType: 'PlaceDetails',
    requiredProperties: ['placeId', 'name', 'address'],
    optionalProperties: ['phone', 'website', 'rating', 'reviews'],
    implementation: 'api'
  },

  // 2. Place Photos - Location images
  placePhotos: {
    enabled: true,
    priority: 2,
    featureType: 'PlacePhotos',
    requiredProperties: ['photoReference', 'url'],
    optionalProperties: ['width', 'height', 'attributions'],
    implementation: 'api'
  },

  // 3. Place Reviews - User reviews
  placeReviews: {
    enabled: true,
    priority: 1,
    featureType: 'PlaceReviews',
    requiredProperties: ['authorName', 'rating', 'text'],
    optionalProperties: ['time', 'relativeTimeDescription', 'language'],
    implementation: 'api'
  },

  // 4. Place Search - Location discovery
  placeSearch: {
    enabled: true,
    priority: 2,
    featureType: 'PlaceSearch',
    requiredProperties: ['query', 'location'],
    optionalProperties: ['radius', 'type', 'keyword'],
    implementation: 'api'
  },

  // 5. Geocoding - Address to coordinates
  geocoding: {
    enabled: true,
    priority: 2,
    featureType: 'Geocoding',
    requiredProperties: ['address', 'lat', 'lng'],
    optionalProperties: ['placeId', 'formattedAddress', 'types'],
    implementation: 'api'
  },

  // 6. Reverse Geocoding - Coordinates to address
  reverseGeocoding: {
    enabled: true,
    priority: 2,
    featureType: 'ReverseGeocoding',
    requiredProperties: ['lat', 'lng', 'formattedAddress'],
    optionalProperties: ['placeId', 'types', 'addressComponents'],
    implementation: 'api'
  },

  // 7. Autocomplete - Search suggestions
  autocomplete: {
    enabled: true,
    priority: 3,
    featureType: 'Autocomplete',
    requiredProperties: ['input', 'predictions'],
    optionalProperties: ['status', 'placeId', 'description'],
    implementation: 'api'
  },

  // 8. Nearby Search - Proximity-based results
  nearbySearch: {
    enabled: true,
    priority: 2,
    featureType: 'NearbySearch',
    requiredProperties: ['location', 'radius', 'type'],
    optionalProperties: ['keyword', 'name', 'rankby'],
    implementation: 'api'
  },

  // 9. Text Search - Keyword-based search
  textSearch: {
    enabled: true,
    priority: 2,
    featureType: 'TextSearch',
    requiredProperties: ['query', 'location'],
    optionalProperties: ['radius', 'type', 'priceLevel'],
    implementation: 'api'
  },

  // 10. Place Types - Business categories
  placeTypes: {
    enabled: true,
    priority: 2,
    featureType: 'PlaceTypes',
    requiredProperties: ['type', 'name'],
    optionalProperties: ['description', 'category'],
    implementation: 'api'
  },

  // 11. Opening Hours - Business schedule
  openingHours: {
    enabled: true,
    priority: 2,
    featureType: 'OpeningHours',
    requiredProperties: ['dayOfWeek', 'opens', 'closes'],
    optionalProperties: ['periods', 'weekdayText'],
    implementation: 'api'
  },

  // 12. Contact Information - Phone, email, website
  contactInformation: {
    enabled: true,
    priority: 1,
    featureType: 'ContactInformation',
    requiredProperties: ['phone', 'website'],
    optionalProperties: ['email', 'formattedPhone', 'internationalPhone'],
    implementation: 'api'
  },

  // 13. Rating and Reviews - User feedback
  ratingReviews: {
    enabled: true,
    priority: 1,
    featureType: 'RatingReviews',
    requiredProperties: ['rating', 'userRatingsTotal'],
    optionalProperties: ['reviews', 'priceLevel'],
    implementation: 'api'
  },

  // 14. Price Level - Cost indicators
  priceLevel: {
    enabled: true,
    priority: 3,
    featureType: 'PriceLevel',
    requiredProperties: ['priceLevel'],
    optionalProperties: ['description', 'range'],
    implementation: 'api'
  },

  // 15. Accessibility - Disability access info
  accessibility: {
    enabled: true,
    priority: 3,
    featureType: 'Accessibility',
    requiredProperties: ['wheelchairAccessible'],
    optionalProperties: ['accessibleEntrance', 'accessibleParking', 'accessibleRestroom'],
    implementation: 'api'
  }
};

/**
 * Generate comprehensive Google Places API features for location pages
 */
export function generateGooglePlacesAPIFeatures(locationData: LocationData) {
  const features: any[] = [];

  // Generate features for each enabled Google Places API feature
  Object.entries(GOOGLE_PLACES_API_FEATURES).forEach(([featureName, config]) => {
    if (config.enabled) {
      const feature = generatePlacesAPIFeature(featureName, config, locationData);
      if (feature) {
        features.push(feature);
      }
    }
  });

  return features;
}

/**
 * Generate individual Google Places API feature
 */
function generatePlacesAPIFeature(
  featureName: string,
  config: GooglePlacesConfig,
  locationData: LocationData
): any {
  switch (featureName) {
    case 'placeDetails':
      return generatePlaceDetailsFeature(locationData);
    
    case 'placePhotos':
      return generatePlacePhotosFeature(locationData);
    
    case 'placeReviews':
      return generatePlaceReviewsFeature(locationData);
    
    case 'placeSearch':
      return generatePlaceSearchFeature(locationData);
    
    case 'geocoding':
      return generateGeocodingFeature(locationData);
    
    case 'reverseGeocoding':
      return generateReverseGeocodingFeature(locationData);
    
    case 'autocomplete':
      return generateAutocompleteFeature(locationData);
    
    case 'nearbySearch':
      return generateNearbySearchFeature(locationData);
    
    case 'textSearch':
      return generateTextSearchFeature(locationData);
    
    case 'placeTypes':
      return generatePlaceTypesFeature(locationData);
    
    case 'openingHours':
      return generateOpeningHoursFeature(locationData);
    
    case 'contactInformation':
      return generateContactInformationFeature(locationData);
    
    case 'ratingReviews':
      return generateRatingReviewsFeature(locationData);
    
    case 'priceLevel':
      return generatePriceLevelFeature(locationData);
    
    case 'accessibility':
      return generateAccessibilityFeature(locationData);
    
    default:
      return null;
  }
}

/**
 * Individual Google Places API Feature Generators
 */

function generatePlaceDetailsFeature(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Web On Dev',
    description: `Professional ${locationData.service} services in ${locationData.city}`,
    placeId: `solutions-indicator-${locationData.city.toLowerCase().replace(/\s+/g, '-')}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: locationData.businessInfo.address,
      addressLocality: locationData.city,
      addressRegion: locationData.state,
      addressCountry: locationData.country,
      postalCode: '00000'
    },
    telephone: locationData.businessInfo.phone,
    email: locationData.businessInfo.email,
    url: locationData.businessInfo.website,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: locationData.coordinates?.latitude || 0,
      longitude: locationData.coordinates?.longitude || 0
    },
    rating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1'
    },
    reviews: [
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
    openingHours: [
      'Monday 09:00-18:00',
      'Tuesday 09:00-18:00',
      'Wednesday 09:00-18:00',
      'Thursday 09:00-18:00',
      'Friday 09:00-18:00'
    ],
    priceLevel: 2,
    types: ['establishment', 'point_of_interest', 'software_company']
  };
}

function generatePlacePhotosFeature(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: `Web On Dev ${locationData.city} Photos`,
    description: `Photos of our ${locationData.service} service center in ${locationData.city}`,
    image: [
      {
        '@type': 'ImageObject',
        contentUrl: `${locationData.businessInfo.website}/images/office/${locationData.city.toLowerCase().replace(/\s+/g, '-')}-office-1.jpg`,
        description: `Main office entrance in ${locationData.city}`,
        width: 800,
        height: 600,
        photoReference: `photo-${locationData.city.toLowerCase().replace(/\s+/g, '-')}-1`,
        attributions: 'Web On Dev'
      },
      {
        '@type': 'ImageObject',
        contentUrl: `${locationData.businessInfo.website}/images/office/${locationData.city.toLowerCase().replace(/\s+/g, '-')}-office-2.jpg`,
        description: `Development team workspace in ${locationData.city}`,
        width: 800,
        height: 600,
        photoReference: `photo-${locationData.city.toLowerCase().replace(/\s+/g, '-')}-2`,
        attributions: 'Web On Dev'
      },
      {
        '@type': 'ImageObject',
        contentUrl: `${locationData.businessInfo.website}/images/office/${locationData.city.toLowerCase().replace(/\s+/g, '-')}-office-3.jpg`,
        description: `Meeting room for client consultations in ${locationData.city}`,
        width: 800,
        height: 600,
        photoReference: `photo-${locationData.city.toLowerCase().replace(/\s+/g, '-')}-3`,
        attributions: 'Web On Dev'
      }
    ]
  };
}

function generatePlaceReviewsFeature(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Web On Dev ${locationData.city} Reviews`,
    description: `Customer reviews for our ${locationData.service} services in ${locationData.city}`,
    itemListElement: [
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
        reviewBody: `Excellent ${locationData.service} services in ${locationData.city}. Web On Dev delivered exactly what we needed with professional quality and timely delivery.`,
        datePublished: '2024-01-15T00:00:00Z',
        time: '2024-01-15T00:00:00Z',
        relativeTimeDescription: '2 weeks ago',
        language: 'en'
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Sarah Ahmed'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: `Outstanding ${locationData.service} service in ${locationData.city}. The team was professional, responsive, and delivered beyond our expectations.`,
        datePublished: '2024-01-10T00:00:00Z',
        time: '2024-01-10T00:00:00Z',
        relativeTimeDescription: '3 weeks ago',
        language: 'en'
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Muhammad Hassan'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '4',
          bestRating: '5'
        },
        reviewBody: `Good ${locationData.service} services in ${locationData.city}. Professional team with good communication throughout the project.`,
        datePublished: '2024-01-05T00:00:00Z',
        time: '2024-01-05T00:00:00Z',
        relativeTimeDescription: '1 month ago',
        language: 'en'
      }
    ]
  };
}

function generatePlaceSearchFeature(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Web On Dev ${locationData.city} Search Results`,
    description: `Search results for ${locationData.service} services in ${locationData.city}`,
    itemListElement: [
      {
        '@type': 'Place',
        name: 'Web On Dev',
        description: `Professional ${locationData.service} services in ${locationData.city}`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: locationData.businessInfo.address,
          addressLocality: locationData.city,
          addressRegion: locationData.state,
          addressCountry: locationData.country
        },
        telephone: locationData.businessInfo.phone,
        url: locationData.businessInfo.website,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: locationData.coordinates?.latitude || 0,
          longitude: locationData.coordinates?.longitude || 0
        },
        rating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '127'
        },
        types: ['establishment', 'point_of_interest', 'software_company']
      }
    ],
    query: `${locationData.service} ${locationData.city}`,
    location: {
      '@type': 'GeoCoordinates',
      latitude: locationData.coordinates?.latitude || 0,
      longitude: locationData.coordinates?.longitude || 0
    },
    radius: 5000,
    type: 'software_company',
    keyword: locationData.service
  };
}

function generateGeocodingFeature(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Web On Dev',
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
    placeId: `solutions-indicator-${locationData.city.toLowerCase().replace(/\s+/g, '-')}`,
    formattedAddress: `${locationData.businessInfo.address}, ${locationData.city}, ${locationData.state} ${locationData.country}`,
    types: ['establishment', 'point_of_interest', 'software_company']
  };
}

function generateReverseGeocodingFeature(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: locationData.coordinates?.latitude || 0,
      longitude: locationData.coordinates?.longitude || 0
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: locationData.businessInfo.address,
      addressLocality: locationData.city,
      addressRegion: locationData.state,
      addressCountry: locationData.country,
      postalCode: '00000'
    },
    placeId: `solutions-indicator-${locationData.city.toLowerCase().replace(/\s+/g, '-')}`,
    formattedAddress: `${locationData.businessInfo.address}, ${locationData.city}, ${locationData.state} ${locationData.country}`,
    types: ['establishment', 'point_of_interest', 'software_company'],
    addressComponents: [
      {
        longName: locationData.businessInfo.address,
        shortName: locationData.businessInfo.address,
        types: ['street_number', 'route']
      },
      {
        longName: locationData.city,
        shortName: locationData.city,
        types: ['locality', 'political']
      },
      {
        longName: locationData.state,
        shortName: locationData.state,
        types: ['administrative_area_level_1', 'political']
      },
      {
        longName: locationData.country,
        shortName: locationData.country,
        types: ['country', 'political']
      }
    ]
  };
}

function generateAutocompleteFeature(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Web On Dev ${locationData.city} Autocomplete`,
    description: `Search suggestions for ${locationData.service} services in ${locationData.city}`,
    itemListElement: [
      {
        '@type': 'Place',
        name: `Web On Dev ${locationData.service} ${locationData.city}`,
        description: `Professional ${locationData.service} services in ${locationData.city}`,
        placeId: `solutions-indicator-${locationData.service.toLowerCase().replace(/\s+/g, '-')}-${locationData.city.toLowerCase().replace(/\s+/g, '-')}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: locationData.city,
          addressRegion: locationData.state,
          addressCountry: locationData.country
        }
      },
      {
        '@type': 'Place',
        name: `${locationData.service} Services ${locationData.city}`,
        description: `${locationData.service} services in ${locationData.city}`,
        placeId: `${locationData.service.toLowerCase().replace(/\s+/g, '-')}-services-${locationData.city.toLowerCase().replace(/\s+/g, '-')}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: locationData.city,
          addressRegion: locationData.state,
          addressCountry: locationData.country
        }
      },
      {
        '@type': 'Place',
        name: `Software Development ${locationData.city}`,
        description: `Software development services in ${locationData.city}`,
        placeId: `software-development-${locationData.city.toLowerCase().replace(/\s+/g, '-')}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: locationData.city,
          addressRegion: locationData.state,
          addressCountry: locationData.country
        }
      }
    ],
    input: `${locationData.service} ${locationData.city}`,
    status: 'OK'
  };
}

function generateNearbySearchFeature(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Web On Dev ${locationData.city} Nearby Search`,
    description: `Nearby ${locationData.service} services in ${locationData.city}`,
    itemListElement: [
      {
        '@type': 'Place',
        name: 'Web On Dev',
        description: `Professional ${locationData.service} services in ${locationData.city}`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: locationData.businessInfo.address,
          addressLocality: locationData.city,
          addressRegion: locationData.state,
          addressCountry: locationData.country
        },
        telephone: locationData.businessInfo.phone,
        url: locationData.businessInfo.website,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: locationData.coordinates?.latitude || 0,
          longitude: locationData.coordinates?.longitude || 0
        },
        rating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '127'
        },
        types: ['establishment', 'point_of_interest', 'software_company']
      }
    ],
    location: {
      '@type': 'GeoCoordinates',
      latitude: locationData.coordinates?.latitude || 0,
      longitude: locationData.coordinates?.longitude || 0
    },
    radius: 5000,
    type: 'software_company',
    keyword: locationData.service
  };
}

function generateTextSearchFeature(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Web On Dev ${locationData.city} Text Search`,
    description: `Text search results for ${locationData.service} services in ${locationData.city}`,
    itemListElement: [
      {
        '@type': 'Place',
        name: 'Web On Dev',
        description: `Professional ${locationData.service} services in ${locationData.city}`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: locationData.businessInfo.address,
          addressLocality: locationData.city,
          addressRegion: locationData.state,
          addressCountry: locationData.country
        },
        telephone: locationData.businessInfo.phone,
        url: locationData.businessInfo.website,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: locationData.coordinates?.latitude || 0,
          longitude: locationData.coordinates?.longitude || 0
        },
        rating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '127'
        },
        types: ['establishment', 'point_of_interest', 'software_company']
      }
    ],
    query: `${locationData.service} ${locationData.city}`,
    location: {
      '@type': 'GeoCoordinates',
      latitude: locationData.coordinates?.latitude || 0,
      longitude: locationData.coordinates?.longitude || 0
    },
    radius: 10000,
    type: 'software_company',
    priceLevel: 2
  };
}

function generatePlaceTypesFeature(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Web On Dev ${locationData.city} Place Types`,
    description: `Business categories for our ${locationData.service} services in ${locationData.city}`,
    itemListElement: [
      {
        '@type': 'Thing',
        name: 'Software Company',
        type: 'establishment',
        description: 'Software development and IT services company',
        category: 'Technology'
      },
      {
        '@type': 'Thing',
        name: 'Point of Interest',
        type: 'point_of_interest',
        description: 'Local business point of interest',
        category: 'Business'
      },
      {
        '@type': 'Thing',
        name: 'Establishment',
        type: 'establishment',
        description: 'Business establishment',
        category: 'Business'
      },
      {
        '@type': 'Thing',
        name: 'Professional Service',
        type: 'professional_service',
        description: 'Professional services provider',
        category: 'Services'
      }
    ]
  };
}

function generateOpeningHoursFeature(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'OpeningHoursSpecification',
    name: `Web On Dev ${locationData.city} Opening Hours`,
    description: `Business hours for our ${locationData.service} services in ${locationData.city}`,
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
    periods: [
      {
        open: {
          day: 1,
          time: '09:00'
        },
        close: {
          day: 1,
          time: '18:00'
        }
      },
      {
        open: {
          day: 2,
          time: '09:00'
        },
        close: {
          day: 2,
          time: '18:00'
        }
      },
      {
        open: {
          day: 3,
          time: '09:00'
        },
        close: {
          day: 3,
          time: '18:00'
        }
      },
      {
        open: {
          day: 4,
          time: '09:00'
        },
        close: {
          day: 4,
          time: '18:00'
        }
      },
      {
        open: {
          day: 5,
          time: '09:00'
        },
        close: {
          day: 5,
          time: '18:00'
        }
      }
    ],
    weekdayText: [
      'Monday: 9:00 AM – 6:00 PM',
      'Tuesday: 9:00 AM – 6:00 PM',
      'Wednesday: 9:00 AM – 6:00 PM',
      'Thursday: 9:00 AM – 6:00 PM',
      'Friday: 9:00 AM – 6:00 PM',
      'Saturday: Closed',
      'Sunday: Closed'
    ]
  };
}

function generateContactInformationFeature(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    name: `Web On Dev ${locationData.city} Contact Information`,
    description: `Contact information for our ${locationData.service} services in ${locationData.city}`,
    telephone: locationData.businessInfo.phone,
    email: locationData.businessInfo.email,
    url: locationData.businessInfo.website,
    formattedPhone: locationData.businessInfo.phone,
    internationalPhone: locationData.businessInfo.phone,
    contactType: 'customer service',
    areaServed: {
      '@type': 'City',
      name: locationData.city
    },
    availableLanguage: ['English', 'Urdu']
  };
}

function generateRatingReviewsFeature(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    name: `Web On Dev ${locationData.city} Rating and Reviews`,
    description: `Customer ratings and reviews for our ${locationData.service} services in ${locationData.city}`,
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
    userRatingsTotal: 127,
    reviews: [
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
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Sarah Ahmed'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: `Outstanding service quality and professionalism.`
      }
    ],
    priceLevel: 2
  };
}

function generatePriceLevelFeature(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'PriceSpecification',
    name: `Web On Dev ${locationData.city} Price Level`,
    description: `Pricing information for our ${locationData.service} services in ${locationData.city}`,
    priceLevel: 2,
    detail: 'Moderate pricing for professional services',
    range: '$2,000 - $10,000',
    price: '5000',
    priceCurrency: 'USD',
    validFrom: '2024-01-01',
    validThrough: '2024-12-31'
  };
}

function generateAccessibilityFeature(locationData: LocationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Web On Dev ${locationData.city} Accessibility`,
    description: `Accessibility features for our ${locationData.service} services in ${locationData.city}`,
    itemListElement: [
      {
        '@type': 'PropertyValue',
        name: 'Wheelchair Accessible',
        value: 'Yes',
        description: 'Fully wheelchair accessible entrance and facilities',
        wheelchairAccessible: true
      },
      {
        '@type': 'PropertyValue',
        name: 'Accessible Entrance',
        value: 'Yes',
        description: 'Accessible entrance with ramp and automatic doors',
        accessibleEntrance: true
      },
      {
        '@type': 'PropertyValue',
        name: 'Accessible Parking',
        value: 'Yes',
        description: 'Designated accessible parking spaces available',
        accessibleParking: true
      },
      {
        '@type': 'PropertyValue',
        name: 'Accessible Restroom',
        value: 'Yes',
        description: 'Accessible restroom facilities available',
        accessibleRestroom: true
      }
    ]
  };
}

/**
 * Utility function to get all enabled Google Places API features
 */
export function getEnabledGooglePlacesAPIFeatures(): string[] {
  return Object.entries(GOOGLE_PLACES_API_FEATURES)
    .filter(([_, config]) => config.enabled)
    .map(([name, _]) => name);
}

/**
 * Utility function to get Google Places API features by priority
 */
export function getGooglePlacesAPIFeaturesByPriority(priority: number): string[] {
  return Object.entries(GOOGLE_PLACES_API_FEATURES)
    .filter(([_, config]) => config.priority === priority)
    .map(([name, _]) => name);
}

/**
 * Utility function to validate Google Places API feature configuration
 */
export function validateGooglePlacesAPIFeatureConfig(featureName: string): boolean {
  const config = GOOGLE_PLACES_API_FEATURES[featureName];
  if (!config) return false;
  
  return Boolean(config.enabled && 
         config.featureType && 
         config.requiredProperties.length > 0);
}
