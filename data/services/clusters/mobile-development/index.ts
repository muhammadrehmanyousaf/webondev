// Mobile Development Cluster Services
// Aggregates all cluster service data for the Mobile Development pillar

import { ServiceData } from '@/components/services/sections';

// Import all cluster data
import { iosDevelopmentData } from './ios-development';
import { androidDevelopmentData } from './android-development';
import { reactNativeDevelopmentData } from './react-native-development';
import { flutterDevelopmentData } from './flutter-development';
import { hybridAppDevelopmentData } from './hybrid-app-development';
import { nativeAppDevelopmentData } from './native-app-development';
import { crossPlatformDevelopmentData } from './cross-platform-development';
import { appStoreOptimizationData } from './app-store-optimization';
import { mobileUiUxDesignData } from './mobile-ui-ux-design';
import { appMaintenanceSupportData } from './app-maintenance-support';

// Export all cluster data as a record
export const mobileDevelopmentClusters: Record<string, ServiceData> = {
  'ios-development': iosDevelopmentData,
  'android-development': androidDevelopmentData,
  'react-native-development': reactNativeDevelopmentData,
  'flutter-development': flutterDevelopmentData,
  'hybrid-app-development': hybridAppDevelopmentData,
  'native-app-development': nativeAppDevelopmentData,
  'cross-platform-development': crossPlatformDevelopmentData,
  'app-store-optimization': appStoreOptimizationData,
  'mobile-ui-ux-design': mobileUiUxDesignData,
  'app-maintenance-support': appMaintenanceSupportData,
};

// Export individual data for direct imports
export {
  iosDevelopmentData,
  androidDevelopmentData,
  reactNativeDevelopmentData,
  flutterDevelopmentData,
  hybridAppDevelopmentData,
  nativeAppDevelopmentData,
  crossPlatformDevelopmentData,
  appStoreOptimizationData,
  mobileUiUxDesignData,
  appMaintenanceSupportData,
};
