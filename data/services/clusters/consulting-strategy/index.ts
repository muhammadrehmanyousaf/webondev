// Consulting & Strategy Cluster Service Data Index
import { ServiceData } from '@/components/services/sections';

// Import cluster service data
import { technologyConsultingData } from './technology-consulting';
import { digitalTransformationData } from './digital-transformation';
import { itStrategyData } from './it-strategy';
import { businessAnalysisData } from './business-analysis';
import { projectManagementData } from './project-management';
import { agileConsultingData } from './agile-consulting';
import { productStrategyData } from './product-strategy';
import { technologyRoadmappingData } from './technology-roadmapping';
import { vendorSelectionData } from './vendor-selection';
import { processOptimizationData } from './process-optimization';

// Export cluster data map for dynamic imports
export const consultingStrategyClusters: Record<string, ServiceData> = {
  'technology-consulting': technologyConsultingData,
  'digital-transformation': digitalTransformationData,
  'it-strategy': itStrategyData,
  'business-analysis': businessAnalysisData,
  'project-management': projectManagementData,
  'agile-consulting': agileConsultingData,
  'product-strategy': productStrategyData,
  'technology-roadmapping': technologyRoadmappingData,
  'vendor-selection': vendorSelectionData,
  'process-optimization': processOptimizationData,
};

// Export individual service data
export {
  technologyConsultingData,
  digitalTransformationData,
  itStrategyData,
  businessAnalysisData,
  projectManagementData,
  agileConsultingData,
  productStrategyData,
  technologyRoadmappingData,
  vendorSelectionData,
  processOptimizationData,
};
