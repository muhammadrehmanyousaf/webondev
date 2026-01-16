import { ServiceData } from '@/components/services/sections';

import { webDesignData } from './web-design';
import { mobileAppDesignData } from './mobile-app-design';
import { logoDesignBrandingData } from './logo-design-branding';
import { userExperienceDesignData } from './user-experience-design';
import { userInterfaceDesignData } from './user-interface-design';
import { prototypingWireframingData } from './prototyping-wireframing';
import { designSystemsData } from './design-systems';
import { graphicDesignData } from './graphic-design';
import { ecommerceDesignData } from './ecommerce-design';
import { accessibilityDesignData } from './accessibility-design';

export const uiUxDesignClusters: Record<string, ServiceData> = {
  'ui-ux-design/web-design': webDesignData,
  'ui-ux-design/mobile-app-design': mobileAppDesignData,
  'ui-ux-design/logo-design-branding': logoDesignBrandingData,
  'ui-ux-design/user-experience-design': userExperienceDesignData,
  'ui-ux-design/user-interface-design': userInterfaceDesignData,
  'ui-ux-design/prototyping-wireframing': prototypingWireframingData,
  'ui-ux-design/design-systems': designSystemsData,
  'ui-ux-design/graphic-design': graphicDesignData,
  'ui-ux-design/ecommerce-design': ecommerceDesignData,
  'ui-ux-design/accessibility-design': accessibilityDesignData,
};

export {
  webDesignData,
  mobileAppDesignData,
  logoDesignBrandingData,
  userExperienceDesignData,
  userInterfaceDesignData,
  prototypingWireframingData,
  designSystemsData,
  graphicDesignData,
  ecommerceDesignData,
  accessibilityDesignData,
};
