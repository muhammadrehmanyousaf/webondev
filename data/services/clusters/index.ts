// Cluster Service Data Index
// Aggregates all cluster service data from all pillars

import { ServiceData } from '@/components/services/sections';

// Import cluster data from each pillar
import { webDevelopmentClusters } from './web-development';
import { mobileDevelopmentClusters } from './mobile-development';
import { softwareDevelopmentClusters } from './software-development';
import { uiUxDesignClusters } from './ui-ux-design';
import { digitalMarketingClusters } from './digital-marketing';
import { ecommerceSolutionsClusters } from './ecommerce-solutions';
import { cloudDevopsClusters } from './cloud-devops';
import { consultingStrategyClusters } from './consulting-strategy';
import { outsourcingServicesClusters } from './outsourcing-services';
import { maintenanceSupportClusters } from './maintenance-support';

// Aggregate all cluster data
export const clusterServiceData: Record<string, ServiceData> = {
  ...webDevelopmentClusters,
  ...mobileDevelopmentClusters,
  ...softwareDevelopmentClusters,
  ...uiUxDesignClusters,
  ...digitalMarketingClusters,
  ...ecommerceSolutionsClusters,
  ...cloudDevopsClusters,
  ...consultingStrategyClusters,
  ...outsourcingServicesClusters,
  ...maintenanceSupportClusters,
  // All 10 pillars complete (100 clusters)
};

// Get cluster service data by slug
export function getClusterServiceData(slug: string): ServiceData | null {
  return clusterServiceData[slug] || null;
}

// Get all cluster service slugs
export function getAllClusterServiceSlugs(): string[] {
  return Object.keys(clusterServiceData);
}

// Check if cluster service data exists
export function hasClusterServiceData(slug: string): boolean {
  return slug in clusterServiceData;
}

// Export individual pillar clusters
export { webDevelopmentClusters, mobileDevelopmentClusters, softwareDevelopmentClusters, uiUxDesignClusters, digitalMarketingClusters, ecommerceSolutionsClusters, cloudDevopsClusters, consultingStrategyClusters, outsourcingServicesClusters, maintenanceSupportClusters };
