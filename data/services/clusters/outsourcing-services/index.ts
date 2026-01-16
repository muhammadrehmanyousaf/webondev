// Outsourcing Services Cluster Exports
import { ServiceData } from '@/components/services/sections';

import { dedicatedDevelopmentTeamsData } from './dedicated-development-teams';
import { staffAugmentationData } from './staff-augmentation';
import { offshoreDevelopmentData } from './offshore-development';
import { nearshoreDevelopmentData } from './nearshore-development';
import { projectOutsourcingData } from './project-outsourcing';
import { qaTestingOutsourcingData } from './qa-testing-outsourcing';
import { devopsOutsourcingData } from './devops-outsourcing';
import { uiUxOutsourcingData } from './ui-ux-outsourcing';
import { itHelpdeskOutsourcingData } from './it-helpdesk-outsourcing';
import { managedItServicesData } from './managed-it-services';

export const outsourcingServicesClusters: Record<string, ServiceData> = {
  'dedicated-development-teams': dedicatedDevelopmentTeamsData,
  'staff-augmentation': staffAugmentationData,
  'offshore-development': offshoreDevelopmentData,
  'nearshore-development': nearshoreDevelopmentData,
  'project-outsourcing': projectOutsourcingData,
  'qa-testing-outsourcing': qaTestingOutsourcingData,
  'devops-outsourcing': devopsOutsourcingData,
  'ui-ux-outsourcing': uiUxOutsourcingData,
  'it-helpdesk-outsourcing': itHelpdeskOutsourcingData,
  'managed-it-services': managedItServicesData,
};

export {
  dedicatedDevelopmentTeamsData,
  staffAugmentationData,
  offshoreDevelopmentData,
  nearshoreDevelopmentData,
  projectOutsourcingData,
  qaTestingOutsourcingData,
  devopsOutsourcingData,
  uiUxOutsourcingData,
  itHelpdeskOutsourcingData,
  managedItServicesData,
};
