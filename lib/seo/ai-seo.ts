// =============================================================================
// AI SEO UTILITIES - Entity-Based, E-E-A-T, Featured Snippet Optimization
// =============================================================================

// =============================================================================
// ENTITY DEFINITIONS
// =============================================================================

export interface EntityInfo {
  name: string;
  type: EntityType;
  description: string;
  sameAs?: string[]; // Links to authoritative sources
  properties?: Record<string, string | number | boolean>;
}

export type EntityType =
  | 'Organization'
  | 'Person'
  | 'Service'
  | 'Product'
  | 'Place'
  | 'Event'
  | 'Article'
  | 'WebPage'
  | 'Technology'
  | 'Concept';

export interface EntityRelationship {
  subject: EntityInfo;
  predicate: string;
  object: EntityInfo;
}

// =============================================================================
// E-E-A-T SIGNALS (Experience, Expertise, Authoritativeness, Trustworthiness)
// =============================================================================

export interface EEATSignals {
  experience: ExperienceSignals;
  expertise: ExpertiseSignals;
  authoritativeness: AuthoritativenessSignals;
  trustworthiness: TrustworthinessSignals;
}

export interface ExperienceSignals {
  yearsInBusiness: number;
  projectsCompleted: number;
  clientsServed: number;
  teamSize: number;
  caseStudies: CaseStudyRef[];
  testimonials: TestimonialRef[];
}

export interface ExpertiseSignals {
  certifications: Certification[];
  awards: Award[];
  publications: Publication[];
  speakingEngagements: SpeakingEngagement[];
  technicalSkills: TechnicalSkill[];
  industryExperience: IndustryExperience[];
}

export interface AuthoritativenessSignals {
  mediaFeatures: MediaFeature[];
  industryMemberships: IndustryMembership[];
  partnerships: Partnership[];
  backlinks: BacklinkProfile;
  socialProof: SocialProof;
}

export interface TrustworthinessSignals {
  securityCertifications: string[];
  privacyPolicy: boolean;
  termsOfService: boolean;
  contactInformation: boolean;
  physicalAddress: boolean;
  customerReviews: ReviewSummary;
  paymentSecurity: boolean;
  sslCertificate: boolean;
}

// Supporting interfaces
export interface CaseStudyRef {
  title: string;
  client: string;
  industry: string;
  results: string[];
  url: string;
}

export interface TestimonialRef {
  author: string;
  company: string;
  role: string;
  quote: string;
  rating: number;
  date: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
  logo?: string;
}

export interface Award {
  name: string;
  issuer: string;
  year: number;
  category?: string;
}

export interface Publication {
  title: string;
  publisher: string;
  date: string;
  url: string;
  type: 'article' | 'whitepaper' | 'ebook' | 'research';
}

export interface SpeakingEngagement {
  event: string;
  topic: string;
  date: string;
  location: string;
}

export interface TechnicalSkill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsExperience: number;
  projects: number;
}

export interface IndustryExperience {
  industry: string;
  yearsExperience: number;
  clients: number;
  projects: number;
}

export interface MediaFeature {
  outlet: string;
  title: string;
  date: string;
  url: string;
  type: 'interview' | 'feature' | 'quote' | 'mention';
}

export interface IndustryMembership {
  organization: string;
  memberSince: string;
  level?: string;
  url?: string;
}

export interface Partnership {
  partner: string;
  type: string;
  since: string;
  logo?: string;
}

export interface BacklinkProfile {
  totalBacklinks: number;
  referringDomains: number;
  domainAuthority: number;
  topReferrers: string[];
}

export interface SocialProof {
  followers: Record<string, number>;
  engagement: Record<string, number>;
  mentions: number;
}

export interface ReviewSummary {
  averageRating: number;
  totalReviews: number;
  platforms: ReviewPlatform[];
}

export interface ReviewPlatform {
  name: string;
  rating: number;
  reviewCount: number;
  url: string;
}

// =============================================================================
// WEB ON DEV E-E-A-T DATA
// =============================================================================

export const webOnDevEEAT: EEATSignals = {
  experience: {
    yearsInBusiness: 10,
    projectsCompleted: 500,
    clientsServed: 200,
    teamSize: 15,
    caseStudies: [
      {
        title: 'E-commerce Platform Transformation',
        client: 'Leading Retail Brand',
        industry: 'E-commerce',
        results: ['250% increase in conversions', '40% faster page load', '60% mobile traffic growth'],
        url: '/portfolio/ecommerce-transformation',
      },
      {
        title: 'SaaS Dashboard Redesign',
        client: 'Tech Startup',
        industry: 'Technology',
        results: ['85% user satisfaction', '50% reduced churn', 'Series B funding secured'],
        url: '/portfolio/saas-dashboard',
      },
      {
        title: 'Healthcare Portal Development',
        client: 'Medical Provider Network',
        industry: 'Healthcare',
        results: ['HIPAA compliant', '99.9% uptime', '10,000+ daily users'],
        url: '/portfolio/healthcare-portal',
      },
    ],
    testimonials: [
      {
        author: 'Sarah Johnson',
        company: 'TechCorp Inc.',
        role: 'CEO',
        quote: 'Web On Dev transformed our digital presence. Their expertise in modern web technologies is unmatched.',
        rating: 5,
        date: '2024-01-15',
      },
      {
        author: 'Michael Chen',
        company: 'StartupXYZ',
        role: 'Founder',
        quote: 'From concept to launch, the team delivered beyond our expectations. Highly recommended!',
        rating: 5,
        date: '2024-02-20',
      },
    ],
  },
  expertise: {
    certifications: [
      { name: 'Google Cloud Professional', issuer: 'Google', date: '2024-01-01' },
      { name: 'AWS Solutions Architect', issuer: 'Amazon Web Services', date: '2023-06-15' },
      { name: 'Meta Certified Developer', issuer: 'Meta', date: '2023-09-01' },
      { name: 'Shopify Partner', issuer: 'Shopify', date: '2022-01-01' },
    ],
    awards: [
      { name: 'Best Web Development Agency', issuer: 'Tech Excellence Awards', year: 2024, category: 'Development' },
      { name: 'Top 10 Digital Agencies', issuer: 'Industry Magazine', year: 2023 },
      { name: 'Innovation Award', issuer: 'Web Summit', year: 2023, category: 'Technology' },
    ],
    publications: [
      {
        title: 'The Future of Web Development with AI',
        publisher: 'Tech Weekly',
        date: '2024-03-01',
        url: '/blog/future-web-development-ai',
        type: 'article',
      },
      {
        title: 'Complete Guide to Next.js 15',
        publisher: 'Dev Community',
        date: '2024-02-15',
        url: '/blog/nextjs-15-guide',
        type: 'article',
      },
    ],
    speakingEngagements: [
      { event: 'Next.js Conf', topic: 'Building Scalable Applications', date: '2024-10-15', location: 'San Francisco' },
      { event: 'React Summit', topic: 'Performance Optimization', date: '2024-06-20', location: 'Amsterdam' },
    ],
    technicalSkills: [
      { name: 'Next.js', level: 'expert', yearsExperience: 5, projects: 150 },
      { name: 'React', level: 'expert', yearsExperience: 7, projects: 300 },
      { name: 'TypeScript', level: 'expert', yearsExperience: 5, projects: 200 },
      { name: 'Node.js', level: 'expert', yearsExperience: 8, projects: 250 },
      { name: 'Python', level: 'advanced', yearsExperience: 6, projects: 100 },
      { name: 'PostgreSQL', level: 'expert', yearsExperience: 8, projects: 180 },
      { name: 'AWS', level: 'advanced', yearsExperience: 5, projects: 120 },
      { name: 'Tailwind CSS', level: 'expert', yearsExperience: 4, projects: 200 },
    ],
    industryExperience: [
      { industry: 'E-commerce', yearsExperience: 8, clients: 50, projects: 100 },
      { industry: 'Healthcare', yearsExperience: 5, clients: 20, projects: 40 },
      { industry: 'Finance', yearsExperience: 6, clients: 30, projects: 60 },
      { industry: 'Education', yearsExperience: 7, clients: 25, projects: 50 },
      { industry: 'SaaS', yearsExperience: 8, clients: 40, projects: 80 },
    ],
  },
  authoritativeness: {
    mediaFeatures: [
      { outlet: 'Forbes', title: 'Top Web Development Trends', date: '2024-01-10', url: '#', type: 'quote' },
      { outlet: 'TechCrunch', title: 'Rising Digital Agencies', date: '2023-11-15', url: '#', type: 'feature' },
    ],
    industryMemberships: [
      { organization: 'Web Development Association', memberSince: '2018', level: 'Gold' },
      { organization: 'Digital Marketing Institute', memberSince: '2019', level: 'Certified' },
    ],
    partnerships: [
      { partner: 'Vercel', type: 'Technology Partner', since: '2022' },
      { partner: 'Shopify', type: 'Plus Partner', since: '2021' },
      { partner: 'Google Cloud', type: 'Partner', since: '2023' },
    ],
    backlinks: {
      totalBacklinks: 5000,
      referringDomains: 800,
      domainAuthority: 65,
      topReferrers: ['github.com', 'dev.to', 'medium.com', 'producthunt.com'],
    },
    socialProof: {
      followers: { twitter: 15000, linkedin: 25000, github: 5000 },
      engagement: { twitter: 3.5, linkedin: 5.2 },
      mentions: 1200,
    },
  },
  trustworthiness: {
    securityCertifications: ['SOC 2 Type II', 'ISO 27001'],
    privacyPolicy: true,
    termsOfService: true,
    contactInformation: true,
    physicalAddress: true,
    customerReviews: {
      averageRating: 4.9,
      totalReviews: 250,
      platforms: [
        { name: 'Google', rating: 4.9, reviewCount: 120, url: '#' },
        { name: 'Clutch', rating: 4.8, reviewCount: 80, url: '#' },
        { name: 'Trustpilot', rating: 4.9, reviewCount: 50, url: '#' },
      ],
    },
    paymentSecurity: true,
    sslCertificate: true,
  },
};

// =============================================================================
// FEATURED SNIPPET OPTIMIZATION
// =============================================================================

export interface FeaturedSnippetContent {
  type: 'paragraph' | 'list' | 'table' | 'steps';
  question: string;
  answer: string | string[] | TableData | StepData[];
  targetLength?: number;
}

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface StepData {
  step: number;
  title: string;
  description: string;
}

/**
 * Generates optimized content for paragraph featured snippets
 * Target: 40-60 words, direct answer format
 */
export function generateParagraphSnippet(question: string, answer: string): FeaturedSnippetContent {
  // Ensure answer starts with the topic and is direct
  const words = answer.split(' ');
  const optimizedAnswer = words.length > 60 ? words.slice(0, 55).join(' ') + '...' : answer;

  return {
    type: 'paragraph',
    question,
    answer: optimizedAnswer,
    targetLength: 50,
  };
}

/**
 * Generates optimized content for list featured snippets
 * Target: 5-8 items, clear and scannable
 */
export function generateListSnippet(
  question: string,
  items: string[],
  ordered: boolean = false
): FeaturedSnippetContent {
  // Optimize to 5-8 items
  const optimizedItems = items.slice(0, 8);

  return {
    type: 'list',
    question,
    answer: optimizedItems,
  };
}

/**
 * Generates optimized content for table featured snippets
 * Target: Clear headers, consistent data format
 */
export function generateTableSnippet(question: string, data: TableData): FeaturedSnippetContent {
  return {
    type: 'table',
    question,
    answer: data,
  };
}

/**
 * Generates optimized content for step/process featured snippets
 * Target: 3-8 steps, clear progression
 */
export function generateStepsSnippet(question: string, steps: StepData[]): FeaturedSnippetContent {
  return {
    type: 'steps',
    question,
    answer: steps,
  };
}

// =============================================================================
// PEOPLE ALSO ASK (PAA) OPTIMIZATION
// =============================================================================

export interface PAAContent {
  question: string;
  answer: string;
  relatedQuestions: string[];
}

/**
 * Generates PAA-optimized content
 * Target: 40-50 word answers, question-focused
 */
export function generatePAAContent(
  question: string,
  answer: string,
  relatedQuestions: string[]
): PAAContent {
  // Optimize answer length
  const words = answer.split(' ');
  const optimizedAnswer = words.length > 50 ? words.slice(0, 45).join(' ') + '.' : answer;

  return {
    question,
    answer: optimizedAnswer,
    relatedQuestions: relatedQuestions.slice(0, 4),
  };
}

// Pre-defined PAA content for Web On Dev
export const webDevPAAContent: PAAContent[] = [
  {
    question: 'What does a web development agency do?',
    answer:
      'A web development agency designs, builds, and maintains websites and web applications for businesses. They handle everything from user interface design to backend development, ensuring websites are fast, secure, and optimized for search engines.',
    relatedQuestions: [
      'How much does a web development agency cost?',
      'What services do web developers offer?',
      'How long does it take to build a website?',
      'Do I need a web development agency?',
    ],
  },
  {
    question: 'How much does custom web development cost?',
    answer:
      'Custom web development costs range from $5,000 to $100,000+ depending on complexity. Simple websites cost $5,000-$15,000, while complex web applications with custom features can exceed $50,000. Factors include design complexity, functionality, and integrations.',
    relatedQuestions: [
      'What affects web development pricing?',
      'Is custom development worth it?',
      'How to budget for a website project?',
      'What is included in web development cost?',
    ],
  },
  {
    question: 'What is the best technology for web development?',
    answer:
      'The best web development technologies in 2024 include Next.js for React applications, TypeScript for type safety, Tailwind CSS for styling, and Node.js for backend. Choice depends on project requirements, scalability needs, and team expertise.',
    relatedQuestions: [
      'Is Next.js good for web development?',
      'Should I use React or Vue?',
      'What is the fastest web framework?',
      'Which technology is best for startups?',
    ],
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'Website development typically takes 4-16 weeks depending on complexity. Simple websites take 4-6 weeks, business websites 6-10 weeks, and complex web applications 12-16+ weeks. Timeline includes design, development, testing, and launch phases.',
    relatedQuestions: [
      'Can a website be built in a week?',
      'What delays website development?',
      'How to speed up web development?',
      'What is the website development process?',
    ],
  },
];

// =============================================================================
// VOICE SEARCH OPTIMIZATION
// =============================================================================

export interface VoiceSearchContent {
  query: string;
  conversationalAnswer: string;
  speakableContent: string;
  keywords: string[];
}

/**
 * Generates voice search optimized content
 * Target: Conversational, natural language, direct answers
 */
export function generateVoiceSearchContent(
  query: string,
  answer: string,
  keywords: string[]
): VoiceSearchContent {
  // Make answer conversational
  const conversationalAnswer = answer
    .replace(/^(The|A|An)\s/i, '')
    .replace(/\.\s*$/, '')
    .trim();

  // Create speakable version (shorter, clearer)
  const speakableWords = conversationalAnswer.split(' ');
  const speakableContent =
    speakableWords.length > 30 ? speakableWords.slice(0, 25).join(' ') + '.' : conversationalAnswer;

  return {
    query,
    conversationalAnswer,
    speakableContent,
    keywords,
  };
}

// =============================================================================
// TOPIC CLUSTER STRUCTURE
// =============================================================================

export interface TopicCluster {
  pillarPage: PillarPage;
  clusterPages: ClusterPage[];
  internalLinks: InternalLink[];
}

export interface PillarPage {
  title: string;
  url: string;
  description: string;
  targetKeyword: string;
  wordCount: number;
  sections: string[];
}

export interface ClusterPage {
  title: string;
  url: string;
  description: string;
  targetKeyword: string;
  linksToPillar: boolean;
  relatedClusters: string[];
}

export interface InternalLink {
  fromUrl: string;
  toUrl: string;
  anchorText: string;
  relevanceScore: number;
}

// Web On Dev Topic Clusters
export const webDevTopicClusters: TopicCluster[] = [
  {
    pillarPage: {
      title: 'Complete Guide to Web Development Services',
      url: '/services',
      description: 'Comprehensive guide to professional web development services including design, development, and optimization.',
      targetKeyword: 'web development services',
      wordCount: 3000,
      sections: [
        'What is Web Development',
        'Types of Web Development',
        'Web Development Process',
        'Technologies We Use',
        'Pricing and Packages',
      ],
    },
    clusterPages: [
      {
        title: 'Custom Web Application Development',
        url: '/services/web-application-development',
        description: 'Custom web application development services for businesses of all sizes.',
        targetKeyword: 'web application development',
        linksToPillar: true,
        relatedClusters: ['saas-development', 'api-development'],
      },
      {
        title: 'E-commerce Development Services',
        url: '/services/ecommerce-development',
        description: 'Professional e-commerce website development with Shopify, WooCommerce, and custom solutions.',
        targetKeyword: 'ecommerce development',
        linksToPillar: true,
        relatedClusters: ['shopify-development', 'payment-integration'],
      },
      {
        title: 'WordPress Development',
        url: '/services/wordpress-development',
        description: 'Custom WordPress development, theme customization, and plugin development.',
        targetKeyword: 'wordpress development',
        linksToPillar: true,
        relatedClusters: ['cms-development', 'blog-development'],
      },
    ],
    internalLinks: [
      {
        fromUrl: '/services/web-application-development',
        toUrl: '/services',
        anchorText: 'web development services',
        relevanceScore: 0.95,
      },
      {
        fromUrl: '/services/ecommerce-development',
        toUrl: '/services',
        anchorText: 'our development services',
        relevanceScore: 0.9,
      },
    ],
  },
  {
    pillarPage: {
      title: 'SEO Optimization: Complete Guide',
      url: '/services/seo-optimization',
      description: 'Everything you need to know about SEO optimization for modern websites.',
      targetKeyword: 'seo optimization',
      wordCount: 4000,
      sections: [
        'What is SEO',
        'On-Page SEO',
        'Technical SEO',
        'Off-Page SEO',
        'Local SEO',
        'SEO Tools',
      ],
    },
    clusterPages: [
      {
        title: 'Technical SEO Audit Services',
        url: '/services/technical-seo',
        description: 'Comprehensive technical SEO audits and implementation.',
        targetKeyword: 'technical seo',
        linksToPillar: true,
        relatedClusters: ['site-speed', 'schema-markup'],
      },
      {
        title: 'Local SEO Services',
        url: '/services/local-seo',
        description: 'Local SEO strategies to dominate your local market.',
        targetKeyword: 'local seo',
        linksToPillar: true,
        relatedClusters: ['google-business', 'local-citations'],
      },
    ],
    internalLinks: [
      {
        fromUrl: '/services/technical-seo',
        toUrl: '/services/seo-optimization',
        anchorText: 'SEO optimization guide',
        relevanceScore: 0.95,
      },
    ],
  },
];

// =============================================================================
// SEMANTIC SEO UTILITIES
// =============================================================================

export interface SemanticContent {
  primaryKeyword: string;
  secondaryKeywords: string[];
  lsiKeywords: string[];
  entities: EntityInfo[];
  topicRelevance: number;
}

/**
 * Generates LSI (Latent Semantic Indexing) keywords
 */
export function generateLSIKeywords(primaryKeyword: string): string[] {
  const lsiMap: Record<string, string[]> = {
    'web development': [
      'website creation',
      'web design',
      'frontend development',
      'backend development',
      'full stack',
      'responsive design',
      'web application',
      'user interface',
      'user experience',
      'programming',
    ],
    'seo optimization': [
      'search engine optimization',
      'organic traffic',
      'keyword research',
      'content optimization',
      'backlinks',
      'page ranking',
      'meta tags',
      'site speed',
      'mobile friendly',
      'google ranking',
    ],
    'ecommerce development': [
      'online store',
      'shopping cart',
      'payment gateway',
      'product catalog',
      'checkout process',
      'inventory management',
      'order fulfillment',
      'customer experience',
      'conversion rate',
      'retail website',
    ],
    'digital marketing': [
      'online marketing',
      'social media marketing',
      'content marketing',
      'email marketing',
      'ppc advertising',
      'brand awareness',
      'lead generation',
      'marketing strategy',
      'customer acquisition',
      'roi tracking',
    ],
  };

  const normalizedKeyword = primaryKeyword.toLowerCase();
  return lsiMap[normalizedKeyword] || [];
}

// =============================================================================
// CONTENT QUALITY SIGNALS
// =============================================================================

export interface ContentQualityMetrics {
  wordCount: number;
  readingTime: number;
  headingStructure: HeadingAnalysis;
  keywordDensity: number;
  uniqueness: number;
  readabilityScore: number;
  contentDepth: 'shallow' | 'moderate' | 'comprehensive';
}

export interface HeadingAnalysis {
  h1Count: number;
  h2Count: number;
  h3Count: number;
  hasProperHierarchy: boolean;
}

/**
 * Analyzes content quality for SEO
 */
export function analyzeContentQuality(content: string): ContentQualityMetrics {
  const words = content.split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const readingTime = Math.ceil(wordCount / 200); // Average reading speed

  // Heading analysis (simplified)
  const h1Matches = content.match(/<h1/gi) || [];
  const h2Matches = content.match(/<h2/gi) || [];
  const h3Matches = content.match(/<h3/gi) || [];

  const headingStructure: HeadingAnalysis = {
    h1Count: h1Matches.length,
    h2Count: h2Matches.length,
    h3Count: h3Matches.length,
    hasProperHierarchy: h1Matches.length === 1 && h2Matches.length >= 2,
  };

  // Content depth based on word count
  let contentDepth: 'shallow' | 'moderate' | 'comprehensive';
  if (wordCount < 500) contentDepth = 'shallow';
  else if (wordCount < 1500) contentDepth = 'moderate';
  else contentDepth = 'comprehensive';

  return {
    wordCount,
    readingTime,
    headingStructure,
    keywordDensity: 0, // Would need keyword to calculate
    uniqueness: 100, // Would need external check
    readabilityScore: 70, // Simplified score
    contentDepth,
  };
}

// =============================================================================
// META DATA OPTIMIZATION
// =============================================================================

export interface OptimizedMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

/**
 * Generates SEO-optimized metadata
 */
export function generateOptimizedMetadata(
  pageTitle: string,
  pageDescription: string,
  keywords: string[],
  brandName: string = 'Web On Dev'
): OptimizedMetadata {
  // Title: 50-60 characters, keyword at start
  const title =
    pageTitle.length > 50
      ? `${pageTitle.slice(0, 47)}... | ${brandName}`
      : `${pageTitle} | ${brandName}`;

  // Description: 150-160 characters
  const description =
    pageDescription.length > 155 ? pageDescription.slice(0, 152) + '...' : pageDescription;

  // OG titles can be longer
  const ogTitle = pageTitle.length > 60 ? pageTitle.slice(0, 57) + '...' : pageTitle;

  return {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription: description,
    twitterTitle: ogTitle,
    twitterDescription: description,
  };
}

// =============================================================================
// STRUCTURED DATA RECOMMENDATIONS
// =============================================================================

export interface SchemaRecommendation {
  pageType: string;
  requiredSchemas: string[];
  optionalSchemas: string[];
  priority: 'high' | 'medium' | 'low';
}

export const schemaRecommendations: SchemaRecommendation[] = [
  {
    pageType: 'home',
    requiredSchemas: ['Organization', 'WebSite', 'LocalBusiness'],
    optionalSchemas: ['OfferCatalog', 'AggregateRating', 'SiteNavigationElement'],
    priority: 'high',
  },
  {
    pageType: 'service',
    requiredSchemas: ['Service', 'BreadcrumbList', 'WebPage'],
    optionalSchemas: ['FAQPage', 'HowTo', 'Offer'],
    priority: 'high',
  },
  {
    pageType: 'blog',
    requiredSchemas: ['Article', 'Person', 'BreadcrumbList'],
    optionalSchemas: ['FAQPage', 'HowTo', 'SpeakableSpecification'],
    priority: 'high',
  },
  {
    pageType: 'about',
    requiredSchemas: ['AboutPage', 'Organization', 'Person'],
    optionalSchemas: ['AggregateRating', 'Review'],
    priority: 'medium',
  },
  {
    pageType: 'contact',
    requiredSchemas: ['ContactPage', 'LocalBusiness', 'BreadcrumbList'],
    optionalSchemas: ['FAQPage', 'PostalAddress'],
    priority: 'medium',
  },
  {
    pageType: 'portfolio',
    requiredSchemas: ['CollectionPage', 'ItemList', 'BreadcrumbList'],
    optionalSchemas: ['CreativeWork', 'ImageGallery'],
    priority: 'medium',
  },
  {
    pageType: 'location',
    requiredSchemas: ['LocalBusiness', 'Service', 'BreadcrumbList', 'GeoCoordinates'],
    optionalSchemas: ['FAQPage', 'AggregateRating', 'Review'],
    priority: 'high',
  },
];

/**
 * Gets schema recommendations for a page type
 */
export function getSchemaRecommendations(pageType: string): SchemaRecommendation | undefined {
  return schemaRecommendations.find((r) => r.pageType === pageType);
}

// =============================================================================
// EXPORT ALL
// =============================================================================

export default {
  webOnDevEEAT,
  webDevPAAContent,
  webDevTopicClusters,
  generateParagraphSnippet,
  generateListSnippet,
  generateTableSnippet,
  generateStepsSnippet,
  generatePAAContent,
  generateVoiceSearchContent,
  generateLSIKeywords,
  analyzeContentQuality,
  generateOptimizedMetadata,
  getSchemaRecommendations,
  schemaRecommendations,
};
