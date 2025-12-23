/**
 * AI SEO ENTITIES - Knowledge Graph & Entity Optimization
 * Optimized for AI systems like ChatGPT, Claude, Perplexity, Google SGE
 */

// =============================================================================
// COMPANY ENTITY - Core Knowledge Graph Entry
// =============================================================================

export const companyEntity = {
  // Primary identifiers
  name: 'Web On Dev',
  alternateName: ['WebOnDev', 'Web-On-Dev', 'WOD'],
  legalName: 'Web On Dev',

  // Classification
  type: 'SoftwareDevelopmentCompany',
  industry: ['Software Development', 'Web Development', 'Digital Marketing', 'IT Services'],

  // Location data
  headquarters: {
    city: 'Lahore',
    state: 'Punjab',
    country: 'Pakistan',
    coordinates: { lat: 31.440541, lng: 74.444666 },
  },

  // Service areas (for local SEO)
  serviceAreas: [
    'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany',
    'United Arab Emirates', 'India', 'Pakistan', 'Singapore', 'Netherlands',
  ],

  // Key metrics (for authority signals)
  metrics: {
    foundedYear: 2015,
    employeeCount: '50+',
    projectsCompleted: '500+',
    clientsServed: '200+',
    averageRating: 4.9,
    reviewCount: 250,
  },

  // Contact info
  contact: {
    email: 'webondev@gmail.com',
    phone: '+92-310-6803687',
    website: 'https://www.webondev.com',
  },

  // Social presence
  socialProfiles: {
    youtube: 'https://www.youtube.com/@webondev',
    twitter: 'https://x.com/webon_dev',
    facebook: 'https://www.facebook.com/people/Web-On-Dev/61584774954945/',
    instagram: 'https://www.instagram.com/webondev/',
    linkedin: 'https://www.linkedin.com/company/webondev',
    github: 'https://github.com/webondev',
  },

  // Authority signals
  certifications: [
    'Google Cloud Partner',
    'AWS Partner',
    'Shopify Partner',
    'Meta Certified Developer',
    'Vercel Partner',
  ],

  // Industry recognition
  awards: [
    { name: 'Top Web Development Agency 2024', issuer: 'Clutch' },
    { name: 'Best Software Development Company', issuer: 'GoodFirms' },
  ],
};

// =============================================================================
// SERVICE ENTITIES - Detailed Service Definitions for AI
// =============================================================================

export const serviceEntities = [
  {
    id: 'web-development',
    name: 'Web Development',
    shortDescription: 'Custom website and web application development',
    longDescription: 'Professional web development services including custom websites, web applications, e-commerce platforms, and progressive web apps. We use modern technologies like Next.js, React, and TypeScript to build fast, scalable, and SEO-friendly websites.',
    technologies: ['Next.js', 'React', 'Vue.js', 'Angular', 'TypeScript', 'Node.js', 'WordPress', 'Shopify'],
    priceRange: { min: 3000, max: 100000, currency: 'USD' },
    deliveryTime: { min: 2, max: 16, unit: 'weeks' },
    relatedServices: ['ui-ux-design', 'ecommerce-development', 'seo-optimization'],
    useCases: [
      'Corporate websites',
      'E-commerce platforms',
      'SaaS applications',
      'Portfolio websites',
      'Landing pages',
      'Web portals',
    ],
    benefits: [
      'Increased online visibility',
      'Better user experience',
      'Higher conversion rates',
      'Mobile-responsive design',
      'SEO optimization included',
    ],
  },
  {
    id: 'mobile-development',
    name: 'Mobile App Development',
    shortDescription: 'iOS and Android mobile application development',
    longDescription: 'Native and cross-platform mobile app development for iOS and Android. We build high-performance mobile applications using React Native, Flutter, and native technologies that provide seamless user experiences.',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS', 'Android'],
    priceRange: { min: 10000, max: 150000, currency: 'USD' },
    deliveryTime: { min: 8, max: 24, unit: 'weeks' },
    relatedServices: ['ui-ux-design', 'web-development', 'cloud-devops'],
    useCases: [
      'E-commerce apps',
      'Social media apps',
      'Healthcare apps',
      'Fintech apps',
      'On-demand service apps',
      'Enterprise apps',
    ],
    benefits: [
      'Cross-platform development',
      'Native performance',
      'App Store optimization',
      'Push notifications',
      'Offline functionality',
    ],
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design',
    shortDescription: 'User interface and experience design services',
    longDescription: 'Comprehensive UI/UX design services including user research, wireframing, prototyping, and visual design. We create intuitive, accessible, and visually appealing designs that enhance user engagement and conversion.',
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Framer'],
    priceRange: { min: 2000, max: 30000, currency: 'USD' },
    deliveryTime: { min: 1, max: 8, unit: 'weeks' },
    relatedServices: ['web-development', 'mobile-development', 'branding'],
    useCases: [
      'Website redesign',
      'App interface design',
      'Design systems',
      'Usability testing',
      'Accessibility audits',
    ],
    benefits: [
      'Improved user satisfaction',
      'Higher conversion rates',
      'Reduced development costs',
      'Consistent branding',
      'Better accessibility',
    ],
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    shortDescription: 'SEO, PPC, and social media marketing services',
    longDescription: 'Full-service digital marketing including SEO, PPC advertising, social media marketing, content marketing, and email campaigns. We help businesses grow their online presence and generate qualified leads.',
    technologies: ['Google Ads', 'Meta Ads', 'Google Analytics', 'SEMrush', 'Ahrefs', 'Mailchimp'],
    priceRange: { min: 1000, max: 10000, currency: 'USD', period: 'monthly' },
    deliveryTime: { min: 3, max: 12, unit: 'months' },
    relatedServices: ['seo-optimization', 'content-marketing', 'web-development'],
    useCases: [
      'Lead generation',
      'Brand awareness',
      'E-commerce marketing',
      'Local business marketing',
      'B2B marketing',
    ],
    benefits: [
      'Increased traffic',
      'Higher ROI',
      'Brand visibility',
      'Targeted audience reach',
      'Measurable results',
    ],
  },
  {
    id: 'ecommerce-development',
    name: 'E-commerce Development',
    shortDescription: 'Online store and e-commerce platform development',
    longDescription: 'End-to-end e-commerce development including Shopify, WooCommerce, Magento, and custom solutions. We build secure, scalable online stores with payment integration, inventory management, and marketing tools.',
    technologies: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'Stripe', 'PayPal'],
    priceRange: { min: 5000, max: 80000, currency: 'USD' },
    deliveryTime: { min: 4, max: 16, unit: 'weeks' },
    relatedServices: ['web-development', 'digital-marketing', 'payment-integration'],
    useCases: [
      'Retail online stores',
      'B2B e-commerce',
      'Marketplace platforms',
      'Subscription services',
      'Dropshipping stores',
    ],
    benefits: [
      '24/7 sales capability',
      'Global market reach',
      'Automated inventory',
      'Secure payments',
      'Customer analytics',
    ],
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    shortDescription: 'Cloud infrastructure and DevOps automation',
    longDescription: 'Cloud migration, infrastructure management, and DevOps services. We help businesses leverage AWS, Azure, and GCP for scalable, reliable, and cost-effective cloud solutions with CI/CD automation.',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    priceRange: { min: 3000, max: 50000, currency: 'USD' },
    deliveryTime: { min: 2, max: 12, unit: 'weeks' },
    relatedServices: ['web-development', 'mobile-development', 'security'],
    useCases: [
      'Cloud migration',
      'Infrastructure automation',
      'CI/CD pipelines',
      'Container orchestration',
      'Monitoring and logging',
    ],
    benefits: [
      'Improved scalability',
      'Cost optimization',
      'Faster deployments',
      'Better reliability',
      'Enhanced security',
    ],
  },
];

// =============================================================================
// FAQ ENTITIES - Common Questions for Featured Snippets
// =============================================================================

export const faqEntities = [
  {
    category: 'general',
    questions: [
      {
        question: 'What is Web On Dev?',
        answer: 'Web On Dev is a professional software development company founded in 2015, specializing in web development, mobile app development, UI/UX design, digital marketing, and custom software solutions. With 500+ completed projects and clients in 50+ countries, we deliver high-quality digital solutions for businesses of all sizes.',
        keywords: ['web on dev', 'software development company', 'web development agency'],
      },
      {
        question: 'Where is Web On Dev located?',
        answer: 'Web On Dev is headquartered in Lahore, Pakistan, but serves clients worldwide. We have delivered projects in the United States, United Kingdom, Canada, Australia, Germany, UAE, India, and 50+ other countries. Our remote-first approach allows us to work seamlessly across time zones.',
        keywords: ['web on dev location', 'software company lahore', 'global software development'],
      },
    ],
  },
  {
    category: 'pricing',
    questions: [
      {
        question: 'How much does website development cost?',
        answer: 'Website development costs vary based on complexity: Simple websites start from $3,000, business websites range from $5,000-$15,000, and complex web applications can cost $20,000-$100,000+. Factors affecting price include design complexity, features, integrations, and timeline. Contact us for a free, detailed quote.',
        keywords: ['website cost', 'web development pricing', 'how much website'],
      },
      {
        question: 'How much does mobile app development cost?',
        answer: 'Mobile app development costs typically range from $10,000 for simple apps to $150,000+ for complex enterprise applications. Cross-platform apps (React Native, Flutter) are generally 30-40% cheaper than developing separate native iOS and Android apps. Get a free consultation for accurate pricing.',
        keywords: ['mobile app cost', 'app development pricing', 'how much mobile app'],
      },
    ],
  },
  {
    category: 'process',
    questions: [
      {
        question: 'How long does it take to build a website?',
        answer: 'Website development timelines depend on complexity: Simple websites take 2-4 weeks, business websites 4-8 weeks, e-commerce sites 6-12 weeks, and complex web applications 8-16+ weeks. These timelines include design, development, testing, and launch phases.',
        keywords: ['website timeline', 'how long website', 'web development time'],
      },
      {
        question: 'What is the development process at Web On Dev?',
        answer: 'Our development process follows Agile methodology with 6 phases: 1) Discovery & Planning - understanding requirements, 2) Design - UI/UX and wireframes, 3) Development - coding and integration, 4) Testing - QA and bug fixes, 5) Deployment - launch and optimization, 6) Support - ongoing maintenance and updates.',
        keywords: ['development process', 'agile development', 'software development methodology'],
      },
    ],
  },
  {
    category: 'technology',
    questions: [
      {
        question: 'What technologies does Web On Dev use?',
        answer: 'We use modern technologies including: Frontend - React, Next.js, Vue.js, TypeScript, Tailwind CSS; Backend - Node.js, Python, PHP, Go; Databases - PostgreSQL, MongoDB, MySQL; Cloud - AWS, Vercel, Google Cloud, Azure; Mobile - React Native, Flutter. Technology stack is chosen based on project requirements.',
        keywords: ['technology stack', 'programming languages', 'web technologies'],
      },
      {
        question: 'Do you use Next.js for web development?',
        answer: 'Yes, Next.js is our primary framework for web development. We are experts in Next.js 14+ with features like App Router, Server Components, and Static/Dynamic rendering. Next.js provides excellent SEO, performance, and developer experience for building modern web applications.',
        keywords: ['next.js development', 'react framework', 'next.js agency'],
      },
    ],
  },
];

// =============================================================================
// INDUSTRY ENTITIES - For targeting specific industries
// =============================================================================

export const industryEntities = [
  {
    id: 'ecommerce',
    name: 'E-commerce & Retail',
    description: 'Software solutions for online stores, retail businesses, and marketplaces',
    solutions: ['Custom e-commerce platforms', 'Shopify development', 'Inventory management', 'Payment integration'],
    caseStudyCount: 50,
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Medical',
    description: 'HIPAA-compliant healthcare software, patient portals, and telemedicine solutions',
    solutions: ['Patient portals', 'Telemedicine apps', 'EHR integration', 'Medical scheduling'],
    caseStudyCount: 20,
  },
  {
    id: 'fintech',
    name: 'Finance & Banking',
    description: 'Secure financial applications, payment processing, and fintech solutions',
    solutions: ['Payment gateways', 'Banking apps', 'Investment platforms', 'Cryptocurrency solutions'],
    caseStudyCount: 30,
  },
  {
    id: 'education',
    name: 'Education & E-learning',
    description: 'Learning management systems, educational apps, and online course platforms',
    solutions: ['LMS development', 'E-learning platforms', 'Virtual classrooms', 'Student portals'],
    caseStudyCount: 25,
  },
  {
    id: 'saas',
    name: 'SaaS & Technology',
    description: 'Custom SaaS applications, API development, and technology products',
    solutions: ['SaaS development', 'API development', 'Microservices', 'Cloud architecture'],
    caseStudyCount: 40,
  },
];

// =============================================================================
// EXPORT ALL ENTITIES
// =============================================================================

export default {
  companyEntity,
  serviceEntities,
  faqEntities,
  industryEntities,
};
