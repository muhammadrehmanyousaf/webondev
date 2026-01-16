// Software Development Cluster Services
// Aggregates all cluster service data for the Software Development pillar

import { ServiceData } from '@/components/services/sections';

// Import all cluster data
import { customSoftwareDevelopmentData } from './custom-software-development';
import { enterpriseSoftwareSolutionsData } from './enterprise-software-solutions';
import { saasDevelopmentData } from './saas-development';
import { desktopApplicationDevelopmentData } from './desktop-application-development';
import { databaseDevelopmentData } from './database-development';
import { legacySystemModernizationData } from './legacy-system-modernization';
import { microservicesArchitectureData } from './microservices-architecture';
import { devopsIntegrationData } from './devops-integration';
import { qualityAssuranceTestingData } from './quality-assurance-testing';
import { softwareConsultingData } from './software-consulting';

// Export all cluster data as a record
export const softwareDevelopmentClusters: Record<string, ServiceData> = {
  'custom-software-development': customSoftwareDevelopmentData,
  'enterprise-software-solutions': enterpriseSoftwareSolutionsData,
  'saas-development': saasDevelopmentData,
  'desktop-application-development': desktopApplicationDevelopmentData,
  'database-development': databaseDevelopmentData,
  'legacy-system-modernization': legacySystemModernizationData,
  'microservices-architecture': microservicesArchitectureData,
  'devops-integration': devopsIntegrationData,
  'quality-assurance-testing': qualityAssuranceTestingData,
  'software-consulting': softwareConsultingData,
};

// Export individual data for direct imports
export {
  customSoftwareDevelopmentData,
  enterpriseSoftwareSolutionsData,
  saasDevelopmentData,
  desktopApplicationDevelopmentData,
  databaseDevelopmentData,
  legacySystemModernizationData,
  microservicesArchitectureData,
  devopsIntegrationData,
  qualityAssuranceTestingData,
  softwareConsultingData,
};
