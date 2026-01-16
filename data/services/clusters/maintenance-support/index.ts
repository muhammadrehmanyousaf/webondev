// Maintenance & Support Cluster Exports
import { ServiceData } from '@/components/services/sections';

import { websiteMaintenanceData } from './website-maintenance';
import { applicationMaintenanceData } from './application-maintenance';
import { bugFixingServicesData } from './bug-fixing-services';
import { performanceOptimizationData } from './performance-optimization';
import { securityUpdatesData } from './security-updates';
import { technicalSupportData } from './technical-support';
import { emergencySupportData } from './emergency-support';
import { backupRecoveryData } from './backup-recovery';
import { slaSupportServicesData } from './sla-support-services';
import { legacySystemSupportData } from './legacy-system-support';

export const maintenanceSupportClusters: Record<string, ServiceData> = {
  'website-maintenance': websiteMaintenanceData,
  'application-maintenance': applicationMaintenanceData,
  'bug-fixing-services': bugFixingServicesData,
  'performance-optimization': performanceOptimizationData,
  'security-updates': securityUpdatesData,
  'technical-support': technicalSupportData,
  'emergency-support': emergencySupportData,
  'backup-recovery': backupRecoveryData,
  'sla-support-services': slaSupportServicesData,
  'legacy-system-support': legacySystemSupportData,
};

export {
  websiteMaintenanceData,
  applicationMaintenanceData,
  bugFixingServicesData,
  performanceOptimizationData,
  securityUpdatesData,
  technicalSupportData,
  emergencySupportData,
  backupRecoveryData,
  slaSupportServicesData,
  legacySystemSupportData,
};
