// Web Development Cluster Service Data Index
import { ServiceData } from '@/components/services/sections';

// Import cluster service data
import { customWebDevelopmentData } from './custom-web-development';
import { reactDevelopmentData } from './react-development';
import { nextjsDevelopmentData } from './nextjs-development';
import { wordpressDevelopmentData } from './wordpress-development';
import { ecommerceDevelopmentData } from './ecommerce-development';
import { progressiveWebAppsData } from './progressive-web-apps';
import { apiDevelopmentData } from './api-development';
import { frontendDevelopmentData } from './frontend-development';
import { backendDevelopmentData } from './backend-development';
import { fullstackDevelopmentData } from './fullstack-development';

// Export cluster data map for dynamic imports
export const webDevelopmentClusters: Record<string, ServiceData> = {
  'custom-web-development': customWebDevelopmentData,
  'react-development': reactDevelopmentData,
  'nextjs-development': nextjsDevelopmentData,
  'wordpress-development': wordpressDevelopmentData,
  'ecommerce-development': ecommerceDevelopmentData,
  'progressive-web-apps': progressiveWebAppsData,
  'api-development': apiDevelopmentData,
  'frontend-development': frontendDevelopmentData,
  'backend-development': backendDevelopmentData,
  'fullstack-development': fullstackDevelopmentData,
};

// Export individual service data
export {
  customWebDevelopmentData,
  reactDevelopmentData,
  nextjsDevelopmentData,
  wordpressDevelopmentData,
  ecommerceDevelopmentData,
  progressiveWebAppsData,
  apiDevelopmentData,
  frontendDevelopmentData,
  backendDevelopmentData,
  fullstackDevelopmentData,
};
