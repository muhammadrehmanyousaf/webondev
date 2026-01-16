// Digital Marketing Cluster Service Data Index
import { ServiceData } from '@/components/services/sections';

// Import cluster service data
import { seoServicesData } from './seo-services';
import { contentMarketingData } from './content-marketing';
import { socialMediaMarketingData } from './social-media-marketing';
import { ppcAdvertisingData } from './ppc-advertising';
import { emailMarketingData } from './email-marketing';
import { marketingAutomationData } from './marketing-automation';
import { analyticsReportingData } from './analytics-reporting';
import { conversionOptimizationData } from './conversion-optimization';
import { brandStrategyData } from './brand-strategy';
import { influencerMarketingData } from './influencer-marketing';

// Export cluster data map for dynamic imports
export const digitalMarketingClusters: Record<string, ServiceData> = {
  'seo-services': seoServicesData,
  'content-marketing': contentMarketingData,
  'social-media-marketing': socialMediaMarketingData,
  'ppc-advertising': ppcAdvertisingData,
  'email-marketing': emailMarketingData,
  'marketing-automation': marketingAutomationData,
  'analytics-reporting': analyticsReportingData,
  'conversion-optimization': conversionOptimizationData,
  'brand-strategy': brandStrategyData,
  'influencer-marketing': influencerMarketingData,
};

// Export individual service data
export {
  seoServicesData,
  contentMarketingData,
  socialMediaMarketingData,
  ppcAdvertisingData,
  emailMarketingData,
  marketingAutomationData,
  analyticsReportingData,
  conversionOptimizationData,
  brandStrategyData,
  influencerMarketingData,
};
