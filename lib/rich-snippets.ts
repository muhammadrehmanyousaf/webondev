/**
 * COMPREHENSIVE RICH SNIPPETS IMPLEMENTATION
 * All 48 Rich Snippet Types with Advanced Schema Markup
 * For Solutions Indicator Location Pages
 */

import {
  generateReviewSnippetsSchema,
  generateProductSnippetsSchema,
  generateEventSnippetsSchema,
  generateVideoSnippetsSchema,
  generateOrganizationSnippetsSchema,
  generateFAQSnippetsSchema,
  generateHowToSnippetsSchema,
  generateBreadcrumbSnippetsSchema,
  generateAuthorSnippetsSchema,
  generatePersonSnippetsSchema,
  generatePlaceSnippetsSchema,
  generateQASnippetsSchema,
  generateJobPostingSnippetsSchema,
  generateFactCheckSnippetsSchema,
  generateCourseSnippetsSchema,
  generateSoftwareApplicationSnippetsSchema,
  generateDatasetSnippetsSchema,
  generateSpeakableSnippetsSchema,
  generateDiscussionForumSnippetsSchema,
  generateEducationalSnippetsSchema,
  generateLegalSnippetsSchema,
  generateScienceSnippetsSchema,
  generateTechnologySnippetsSchema,
  generateTravelSnippetsSchema,
  generateWeatherSnippetsSchema,
  generateFinancialSnippetsSchema,
  generateGovernmentSnippetsSchema,
  generateNonProfitSnippetsSchema,
  generateRetailSnippetsSchema,
  generateServiceSnippetsSchema,
  generateTransportationSnippetsSchema,
  generateAttractionSnippetsSchema
} from './rich-snippets-generators';

export interface RichSnippetConfig {
  enabled: boolean;
  priority: number;
  schemaType: string;
  requiredProperties: string[];
  optionalProperties: string[];
  implementation: 'schema' | 'meta' | 'structured' | 'microdata';
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
 * ALL 48 RICH SNIPPETS CONFIGURATION
 */
export const RICH_SNIPPETS: Record<string, RichSnippetConfig> = {
  // 1. Review Snippets - Star ratings and reviews
  reviewSnippets: {
    enabled: true,
    priority: 1,
    schemaType: 'Review',
    requiredProperties: ['reviewRating', 'author', 'reviewBody'],
    optionalProperties: ['datePublished', 'itemReviewed', 'publisher'],
    implementation: 'schema'
  },

  // 2. Recipe Snippets - Cooking instructions and ingredients
  recipeSnippets: {
    enabled: false, // Not applicable for software services
    priority: 0,
    schemaType: 'Recipe',
    requiredProperties: ['name', 'description', 'ingredients'],
    optionalProperties: ['cookTime', 'prepTime', 'totalTime', 'recipeYield'],
    implementation: 'schema'
  },

  // 3. Product Snippets - Product details, prices, availability
  productSnippets: {
    enabled: true,
    priority: 2,
    schemaType: 'Product',
    requiredProperties: ['name', 'description', 'offers'],
    optionalProperties: ['image', 'brand', 'aggregateRating', 'review'],
    implementation: 'schema'
  },

  // 4. Event Snippets - Event dates, times, locations
  eventSnippets: {
    enabled: true,
    priority: 3,
    schemaType: 'Event',
    requiredProperties: ['name', 'startDate', 'location'],
    optionalProperties: ['endDate', 'description', 'organizer', 'offers'],
    implementation: 'schema'
  },

  // 5. Music Snippets - Songs, albums, artists
  musicSnippets: {
    enabled: false, // Not applicable for software services
    priority: 0,
    schemaType: 'MusicRecording',
    requiredProperties: ['name', 'byArtist'],
    optionalProperties: ['duration', 'inAlbum', 'genre'],
    implementation: 'schema'
  },

  // 6. Video Snippets - Video thumbnails and descriptions
  videoSnippets: {
    enabled: true,
    priority: 3,
    schemaType: 'VideoObject',
    requiredProperties: ['name', 'description', 'thumbnailUrl'],
    optionalProperties: ['duration', 'uploadDate', 'contentUrl', 'embedUrl'],
    implementation: 'schema'
  },

  // 7. Organization Snippets - Company logos and contact info
  organizationSnippets: {
    enabled: true,
    priority: 1,
    schemaType: 'Organization',
    requiredProperties: ['name', 'url', 'logo'],
    optionalProperties: ['address', 'contactPoint', 'sameAs', 'foundingDate'],
    implementation: 'schema'
  },

  // 8. FAQ Snippets - Frequently asked questions
  faqSnippets: {
    enabled: true,
    priority: 1,
    schemaType: 'FAQPage',
    requiredProperties: ['mainEntity'],
    optionalProperties: ['about', 'description'],
    implementation: 'schema'
  },

  // 9. How-To Snippets - Step-by-step instructions
  howToSnippets: {
    enabled: true,
    priority: 2,
    schemaType: 'HowTo',
    requiredProperties: ['name', 'description', 'step'],
    optionalProperties: ['image', 'totalTime', 'estimatedCost'],
    implementation: 'schema'
  },

  // 10. Breadcrumb Snippets - Page hierarchy display
  breadcrumbSnippets: {
    enabled: true,
    priority: 2,
    schemaType: 'BreadcrumbList',
    requiredProperties: ['itemListElement'],
    optionalProperties: ['name', 'description'],
    implementation: 'schema'
  },

  // 11. Sitelink Snippets - Additional website links
  sitelinkSnippets: {
    enabled: true,
    priority: 2,
    schemaType: 'WebSite',
    requiredProperties: ['url', 'name'],
    optionalProperties: ['description', 'potentialAction'],
    implementation: 'structured'
  },

  // 12. Author Snippets - Author information
  authorSnippets: {
    enabled: true,
    priority: 3,
    schemaType: 'Person',
    requiredProperties: ['name'],
    optionalProperties: ['jobTitle', 'worksFor', 'sameAs', 'image'],
    implementation: 'schema'
  },

  // 13. Person Snippets - Individual profiles
  personSnippets: {
    enabled: true,
    priority: 3,
    schemaType: 'Person',
    requiredProperties: ['name'],
    optionalProperties: ['jobTitle', 'worksFor', 'sameAs', 'image', 'description'],
    implementation: 'schema'
  },

  // 14. Place Snippets - Location details and maps
  placeSnippets: {
    enabled: true,
    priority: 2,
    schemaType: 'Place',
    requiredProperties: ['name', 'address'],
    optionalProperties: ['geo', 'telephone', 'url', 'image'],
    implementation: 'schema'
  },

  // 15. TV & Movie Snippets - Entertainment content
  tvMovieSnippets: {
    enabled: false, // Not applicable for software services
    priority: 0,
    schemaType: 'Movie',
    requiredProperties: ['name', 'description'],
    optionalProperties: ['director', 'actor', 'datePublished', 'genre'],
    implementation: 'schema'
  },

  // 16. Medical Condition Snippets - Health information
  medicalConditionSnippets: {
    enabled: false, // Not applicable for software services
    priority: 0,
    schemaType: 'MedicalCondition',
    requiredProperties: ['name', 'description'],
    optionalProperties: ['cause', 'symptom', 'treatment'],
    implementation: 'schema'
  },

  // 17. Q&A Snippets - Question and answer format
  qaSnippets: {
    enabled: true,
    priority: 2,
    schemaType: 'Question',
    requiredProperties: ['text', 'acceptedAnswer'],
    optionalProperties: ['author', 'dateCreated', 'upvoteCount'],
    implementation: 'schema'
  },

  // 18. Job Posting Snippets - Employment listings
  jobPostingSnippets: {
    enabled: true,
    priority: 4,
    schemaType: 'JobPosting',
    requiredProperties: ['title', 'description', 'hiringOrganization'],
    optionalProperties: ['datePosted', 'employmentType', 'jobLocation', 'baseSalary'],
    implementation: 'schema'
  },

  // 19. Flight Snippets - Travel information
  flightSnippets: {
    enabled: false, // Not applicable for software services
    priority: 0,
    schemaType: 'Flight',
    requiredProperties: ['flightNumber', 'departureAirport', 'arrivalAirport'],
    optionalProperties: ['departureTime', 'arrivalTime', 'airline'],
    implementation: 'schema'
  },

  // 20. Fact Check Snippets - Claim verification
  factCheckSnippets: {
    enabled: true,
    priority: 4,
    schemaType: 'ClaimReview',
    requiredProperties: ['claimReviewed', 'reviewRating'],
    optionalProperties: ['author', 'datePublished', 'url'],
    implementation: 'schema'
  },

  // 21. Course Snippets - Educational content
  courseSnippets: {
    enabled: true,
    priority: 3,
    schemaType: 'Course',
    requiredProperties: ['name', 'description', 'provider'],
    optionalProperties: ['courseCode', 'educationalLevel', 'timeRequired'],
    implementation: 'schema'
  },

  // 22. Software Application Snippets - App details and ratings
  softwareApplicationSnippets: {
    enabled: true,
    priority: 1,
    schemaType: 'SoftwareApplication',
    requiredProperties: ['name', 'description', 'applicationCategory'],
    optionalProperties: ['operatingSystem', 'offers', 'aggregateRating', 'review'],
    implementation: 'schema'
  },

  // 23. Book Snippets - Publication information
  bookSnippets: {
    enabled: false, // Not applicable for software services
    priority: 0,
    schemaType: 'Book',
    requiredProperties: ['name', 'author'],
    optionalProperties: ['datePublished', 'publisher', 'isbn', 'numberOfPages'],
    implementation: 'schema'
  },

  // 24. Movie Snippets - Film details and showtimes
  movieSnippets: {
    enabled: false, // Not applicable for software services
    priority: 0,
    schemaType: 'Movie',
    requiredProperties: ['name', 'description'],
    optionalProperties: ['director', 'actor', 'datePublished', 'genre'],
    implementation: 'schema'
  },

  // 25. TV Episode Snippets - Television content
  tvEpisodeSnippets: {
    enabled: false, // Not applicable for software services
    priority: 0,
    schemaType: 'TVEpisode',
    requiredProperties: ['name', 'description'],
    optionalProperties: ['episodeNumber', 'seasonNumber', 'partOfSeries'],
    implementation: 'schema'
  },

  // 26. Game Snippets - Gaming information
  gameSnippets: {
    enabled: false, // Not applicable for software services
    priority: 0,
    schemaType: 'VideoGame',
    requiredProperties: ['name', 'description'],
    optionalProperties: ['genre', 'gamePlatform', 'publisher', 'datePublished'],
    implementation: 'schema'
  },

  // 27. Drug Snippets - Medication details
  drugSnippets: {
    enabled: false, // Not applicable for software services
    priority: 0,
    schemaType: 'Drug',
    requiredProperties: ['name', 'description'],
    optionalProperties: ['activeIngredient', 'dosageForm', 'manufacturer'],
    implementation: 'schema'
  },

  // 28. Dataset Snippets - Data collection information
  datasetSnippets: {
    enabled: true,
    priority: 4,
    schemaType: 'Dataset',
    requiredProperties: ['name', 'description'],
    optionalProperties: ['url', 'keywords', 'license', 'creator'],
    implementation: 'schema'
  },

  // 29. Speakable Snippets - Voice search optimization
  speakableSnippets: {
    enabled: true,
    priority: 3,
    schemaType: 'SpeakableSpecification',
    requiredProperties: ['cssSelector'],
    optionalProperties: ['xpath'],
    implementation: 'structured'
  },

  // 30. Discussion Forum Snippets - Community content
  discussionForumSnippets: {
    enabled: true,
    priority: 4,
    schemaType: 'DiscussionForumPosting',
    requiredProperties: ['text', 'dateCreated', 'author'],
    optionalProperties: ['headline', 'url', 'interactionStatistic'],
    implementation: 'schema'
  },

  // 31. Educational Snippets - Learning materials
  educationalSnippets: {
    enabled: true,
    priority: 3,
    schemaType: 'EducationalOccupationalProgram',
    requiredProperties: ['name', 'description'],
    optionalProperties: ['provider', 'educationalLevel', 'timeRequired'],
    implementation: 'schema'
  },

  // 32. Health and Medical Snippets - Medical information
  healthMedicalSnippets: {
    enabled: false, // Not applicable for software services
    priority: 0,
    schemaType: 'MedicalWebPage',
    requiredProperties: ['name', 'description'],
    optionalProperties: ['about', 'audience', 'specialty'],
    implementation: 'schema'
  },

  // 33. Legal Snippets - Legal information
  legalSnippets: {
    enabled: true,
    priority: 4,
    schemaType: 'LegalService',
    requiredProperties: ['name', 'description'],
    optionalProperties: ['areaServed', 'serviceType', 'provider'],
    implementation: 'schema'
  },

  // 34. Science Snippets - Scientific data
  scienceSnippets: {
    enabled: true,
    priority: 4,
    schemaType: 'ScholarlyArticle',
    requiredProperties: ['headline', 'author', 'datePublished'],
    optionalProperties: ['abstract', 'keywords', 'publisher'],
    implementation: 'schema'
  },

  // 35. Sports Snippets - Athletic information
  sportsSnippets: {
    enabled: false, // Not applicable for software services
    priority: 0,
    schemaType: 'SportsEvent',
    requiredProperties: ['name', 'startDate', 'location'],
    optionalProperties: ['homeTeam', 'awayTeam', 'sport'],
    implementation: 'schema'
  },

  // 36. Technology Snippets - Tech-related content
  technologySnippets: {
    enabled: true,
    priority: 1,
    schemaType: 'TechArticle',
    requiredProperties: ['headline', 'author', 'datePublished'],
    optionalProperties: ['abstract', 'keywords', 'publisher'],
    implementation: 'schema'
  },

  // 37. Travel Snippets - Tourism information
  travelSnippets: {
    enabled: true,
    priority: 4,
    schemaType: 'TouristDestination',
    requiredProperties: ['name', 'description'],
    optionalProperties: ['geo', 'image', 'touristType'],
    implementation: 'schema'
  },

  // 38. Weather Snippets - Meteorological data
  weatherSnippets: {
    enabled: true,
    priority: 4,
    schemaType: 'WeatherForecast',
    requiredProperties: ['datePublished', 'location'],
    optionalProperties: ['temperature', 'humidity', 'precipitation'],
    implementation: 'schema'
  },

  // 39. Financial Snippets - Economic information
  financialSnippets: {
    enabled: true,
    priority: 4,
    schemaType: 'FinancialProduct',
    requiredProperties: ['name', 'description'],
    optionalProperties: ['provider', 'category', 'feesAndCommissionsSpecification'],
    implementation: 'schema'
  },

  // 40. Government Snippets - Official information
  governmentSnippets: {
    enabled: true,
    priority: 4,
    schemaType: 'GovernmentOrganization',
    requiredProperties: ['name', 'description'],
    optionalProperties: ['address', 'url', 'contactPoint'],
    implementation: 'schema'
  },

  // 41. Non-Profit Snippets - Charitable organization data
  nonProfitSnippets: {
    enabled: true,
    priority: 4,
    schemaType: 'NGO',
    requiredProperties: ['name', 'description'],
    optionalProperties: ['address', 'url', 'contactPoint', 'foundingDate'],
    implementation: 'schema'
  },

  // 42. Real Estate Snippets - Property listings
  realEstateSnippets: {
    enabled: false, // Not applicable for software services
    priority: 0,
    schemaType: 'RealEstateAgent',
    requiredProperties: ['name', 'description'],
    optionalProperties: ['address', 'telephone', 'url'],
    implementation: 'schema'
  },

  // 43. Restaurant Snippets - Dining information
  restaurantSnippets: {
    enabled: false, // Not applicable for software services
    priority: 0,
    schemaType: 'Restaurant',
    requiredProperties: ['name', 'description'],
    optionalProperties: ['address', 'telephone', 'servesCuisine', 'priceRange'],
    implementation: 'schema'
  },

  // 44. Retail Snippets - Shopping content
  retailSnippets: {
    enabled: true,
    priority: 4,
    schemaType: 'Store',
    requiredProperties: ['name', 'description'],
    optionalProperties: ['address', 'telephone', 'url', 'priceRange'],
    implementation: 'schema'
  },

  // 45. Service Snippets - Service provider details
  serviceSnippets: {
    enabled: true,
    priority: 1,
    schemaType: 'Service',
    requiredProperties: ['name', 'description', 'provider'],
    optionalProperties: ['areaServed', 'serviceType', 'offers'],
    implementation: 'schema'
  },

  // 46. Transportation Snippets - Travel options
  transportationSnippets: {
    enabled: true,
    priority: 4,
    schemaType: 'TransportationService',
    requiredProperties: ['name', 'description'],
    optionalProperties: ['areaServed', 'serviceType', 'provider'],
    implementation: 'schema'
  },

  // 47. Accommodation Snippets - Lodging information
  accommodationSnippets: {
    enabled: false, // Not applicable for software services
    priority: 0,
    schemaType: 'LodgingBusiness',
    requiredProperties: ['name', 'address', 'telephone'],
    optionalProperties: ['priceRange', 'amenityFeature', 'starRating'],
    implementation: 'schema'
  },

  // 48. Attraction Snippets - Tourist destination data
  attractionSnippets: {
    enabled: true,
    priority: 4,
    schemaType: 'TouristAttraction',
    requiredProperties: ['name', 'description', 'location'],
    optionalProperties: ['image', 'url', 'touristType'],
    implementation: 'schema'
  }
};

/**
 * Generate comprehensive rich snippets schema for location pages
 */
export function generateRichSnippetsSchema(locationData: LocationData) {
  const schemas: any[] = [];

  // Generate schema for each enabled rich snippet
  Object.entries(RICH_SNIPPETS).forEach(([snippetName, config]) => {
    if (config.enabled) {
      const schema = generateSnippetSchema(snippetName, config, locationData);
      if (schema) {
        schemas.push(schema);
      }
    }
  });

  return schemas;
}

/**
 * Generate individual rich snippet schema
 */
function generateSnippetSchema(
  snippetName: string,
  config: RichSnippetConfig,
  locationData: LocationData
): any {
  switch (snippetName) {
    case 'reviewSnippets':
      return generateReviewSnippetsSchema(locationData);
    
    case 'productSnippets':
      return generateProductSnippetsSchema(locationData);
    
    case 'eventSnippets':
      return generateEventSnippetsSchema(locationData);
    
    case 'videoSnippets':
      return generateVideoSnippetsSchema(locationData);
    
    case 'organizationSnippets':
      return generateOrganizationSnippetsSchema(locationData);
    
    case 'faqSnippets':
      return generateFAQSnippetsSchema(locationData);
    
    case 'howToSnippets':
      return generateHowToSnippetsSchema(locationData);
    
    case 'breadcrumbSnippets':
      return generateBreadcrumbSnippetsSchema(locationData);
    
    case 'authorSnippets':
      return generateAuthorSnippetsSchema(locationData);
    
    case 'personSnippets':
      return generatePersonSnippetsSchema(locationData);
    
    case 'placeSnippets':
      return generatePlaceSnippetsSchema(locationData);
    
    case 'qaSnippets':
      return generateQASnippetsSchema(locationData);
    
    case 'jobPostingSnippets':
      return generateJobPostingSnippetsSchema(locationData);
    
    case 'factCheckSnippets':
      return generateFactCheckSnippetsSchema(locationData);
    
    case 'courseSnippets':
      return generateCourseSnippetsSchema(locationData);
    
    case 'softwareApplicationSnippets':
      return generateSoftwareApplicationSnippetsSchema(locationData);
    
    case 'datasetSnippets':
      return generateDatasetSnippetsSchema(locationData);
    
    case 'speakableSnippets':
      return generateSpeakableSnippetsSchema(locationData);
    
    case 'discussionForumSnippets':
      return generateDiscussionForumSnippetsSchema(locationData);
    
    case 'educationalSnippets':
      return generateEducationalSnippetsSchema(locationData);
    
    case 'legalSnippets':
      return generateLegalSnippetsSchema(locationData);
    
    case 'scienceSnippets':
      return generateScienceSnippetsSchema(locationData);
    
    case 'technologySnippets':
      return generateTechnologySnippetsSchema(locationData);
    
    case 'travelSnippets':
      return generateTravelSnippetsSchema(locationData);
    
    case 'weatherSnippets':
      return generateWeatherSnippetsSchema(locationData);
    
    case 'financialSnippets':
      return generateFinancialSnippetsSchema(locationData);
    
    case 'governmentSnippets':
      return generateGovernmentSnippetsSchema(locationData);
    
    case 'nonProfitSnippets':
      return generateNonProfitSnippetsSchema(locationData);
    
    case 'retailSnippets':
      return generateRetailSnippetsSchema(locationData);
    
    case 'serviceSnippets':
      return generateServiceSnippetsSchema(locationData);
    
    case 'transportationSnippets':
      return generateTransportationSnippetsSchema(locationData);
    
    case 'attractionSnippets':
      return generateAttractionSnippetsSchema(locationData);
    
    default:
      return null;
  }
}

/**
 * Utility function to get all enabled rich snippets
 */
export function getEnabledRichSnippets(): string[] {
  return Object.entries(RICH_SNIPPETS)
    .filter(([_, config]) => config.enabled)
    .map(([name, _]) => name);
}

/**
 * Utility function to get rich snippets by priority
 */
export function getRichSnippetsByPriority(priority: number): string[] {
  return Object.entries(RICH_SNIPPETS)
    .filter(([_, config]) => config.priority === priority)
    .map(([name, _]) => name);
}

/**
 * Utility function to validate rich snippet configuration
 */
export function validateRichSnippetConfig(snippetName: string): boolean {
  const config = RICH_SNIPPETS[snippetName];
  if (!config) return false;
  
  return Boolean(config.enabled && 
         config.schemaType && 
         config.requiredProperties.length > 0);
}
