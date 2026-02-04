// =============================================================================
// SHARED CONSTANTS - Services, Budget Ranges, Timelines, etc.
// =============================================================================

export const SOFTWARE_SERVICES = [
  // Development
  'Custom Web Development',
  'Mobile App Development (iOS & Android)',
  'E-commerce Development',
  'SaaS / Web Application Development',
  'WordPress / CMS Development',
  'Shopify / WooCommerce Development',
  'Progressive Web App (PWA)',
  'API Development & Integration',
  'Custom Software Development',
  'MVP / Prototype Development',
  // Design
  'UI/UX Design',
  'Brand Identity & Graphic Design',
  // Cloud & DevOps
  'Cloud Solutions & DevOps',
  'Database Design & Management',
  // Emerging Tech
  'AI & Machine Learning Solutions',
  'Blockchain Development',
  // Business Solutions
  'CRM / ERP Solutions',
  'Digital Marketing & SEO',
  // Quality & Support
  'QA & Software Testing',
  'Maintenance & Support',
  'IT Consulting & Strategy',
  // Other
  'Other',
] as const;

export const BUDGET_RANGES = [
  'Under $1,000',
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000+',
  'Not Sure Yet',
] as const;

export const PROJECT_TIMELINES = [
  'ASAP / Urgent',
  'Within 1 Month',
  '1 - 3 Months',
  '3 - 6 Months',
  '6+ Months',
  'Flexible / No Rush',
] as const;

export const REFERRAL_SOURCES = [
  'Google Search',
  'Social Media',
  'Referral / Word of Mouth',
  'LinkedIn',
  'Clutch / GoodFirms',
  'Blog / Article',
  'Other',
] as const;

export type SoftwareService = typeof SOFTWARE_SERVICES[number];
export type BudgetRange = typeof BUDGET_RANGES[number];
export type ProjectTimeline = typeof PROJECT_TIMELINES[number];
export type ReferralSource = typeof REFERRAL_SOURCES[number];
