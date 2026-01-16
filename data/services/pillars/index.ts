// Pillar Service Data Index
// Export all pillar service data files

import { ServiceData } from '@/components/services/sections';

// Import all pillar service data
import { webDevelopmentData } from './web-development';
import { mobileDevelopmentData } from './mobile-development';
import { softwareDevelopmentData } from './software-development';
import { uiUxDesignData } from './ui-ux-design';
import { digitalMarketingData } from './digital-marketing';
import { ecommerceSolutionsData } from './ecommerce-solutions';
import { cloudDevopsData } from './cloud-devops';
import { consultingStrategyData } from './consulting-strategy';
import { outsourcingServicesData } from './outsourcing-services';
import { maintenanceSupportData } from './maintenance-support';

// Service data map for dynamic imports
export const pillarServiceData: Record<string, ServiceData> = {
  'web-development': webDevelopmentData,
  'mobile-development': mobileDevelopmentData,
  'software-development': softwareDevelopmentData,
  'ui-ux-design': uiUxDesignData,
  'digital-marketing': digitalMarketingData,
  'ecommerce-solutions': ecommerceSolutionsData,
  'cloud-devops': cloudDevopsData,
  'consulting-strategy': consultingStrategyData,
  'outsourcing-services': outsourcingServicesData,
  'maintenance-support': maintenanceSupportData,
};

// Get service data by slug
export function getPillarServiceData(slug: string): ServiceData | null {
  return pillarServiceData[slug] || null;
}

// Get all pillar service slugs
export function getAllPillarServiceSlugs(): string[] {
  return Object.keys(pillarServiceData);
}

// Check if pillar service data exists
export function hasPillarServiceData(slug: string): boolean {
  return slug in pillarServiceData;
}

// Export individual service data
export {
  webDevelopmentData,
  mobileDevelopmentData,
  softwareDevelopmentData,
  uiUxDesignData,
  digitalMarketingData,
  ecommerceSolutionsData,
  cloudDevopsData,
  consultingStrategyData,
  outsourcingServicesData,
  maintenanceSupportData,
};
