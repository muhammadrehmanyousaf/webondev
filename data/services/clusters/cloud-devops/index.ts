// Cloud & DevOps Cluster Service Data Index
import { ServiceData } from '@/components/services/sections';

// Import cluster service data
import { cloudInfrastructureData } from './cloud-infrastructure';
import { awsServicesData } from './aws-services';
import { azureServicesData } from './azure-services';
import { googleCloudServicesData } from './google-cloud-services';
import { devopsAutomationData } from './devops-automation';
import { ciCdPipelinesData } from './ci-cd-pipelines';
import { kubernetesServicesData } from './kubernetes-services';
import { dockerContainerizationData } from './docker-containerization';
import { infrastructureAsCodeData } from './infrastructure-as-code';
import { cloudSecurityData } from './cloud-security';

// Export cluster data map for dynamic imports
export const cloudDevopsClusters: Record<string, ServiceData> = {
  'cloud-infrastructure': cloudInfrastructureData,
  'aws-services': awsServicesData,
  'azure-services': azureServicesData,
  'google-cloud-services': googleCloudServicesData,
  'devops-automation': devopsAutomationData,
  'ci-cd-pipelines': ciCdPipelinesData,
  'kubernetes-services': kubernetesServicesData,
  'docker-containerization': dockerContainerizationData,
  'infrastructure-as-code': infrastructureAsCodeData,
  'cloud-security': cloudSecurityData,
};

// Export individual service data
export {
  cloudInfrastructureData,
  awsServicesData,
  azureServicesData,
  googleCloudServicesData,
  devopsAutomationData,
  ciCdPipelinesData,
  kubernetesServicesData,
  dockerContainerizationData,
  infrastructureAsCodeData,
  cloudSecurityData,
};
