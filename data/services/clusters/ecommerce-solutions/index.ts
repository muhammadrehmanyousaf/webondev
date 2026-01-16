// E-commerce Solutions Cluster Service Data Index
import { ServiceData } from '@/components/services/sections';

// Import cluster service data
import { ecommerceWebsiteDevelopmentData } from './ecommerce-website-development';
import { shopifyDevelopmentData } from './shopify-development';
import { woocommerceDevelopmentData } from './woocommerce-development';
import { magentoDevelopmentData } from './magento-development';
import { paymentGatewayIntegrationData } from './payment-gateway-integration';
import { shoppingCartDevelopmentData } from './shopping-cart-development';
import { inventoryManagementSystemsData } from './inventory-management-systems';
import { orderFulfillmentSystemsData } from './order-fulfillment-systems';
import { marketplaceIntegrationData } from './marketplace-integration';
import { ecommerceAnalyticsData } from './ecommerce-analytics';

// Export cluster data map for dynamic imports
export const ecommerceSolutionsClusters: Record<string, ServiceData> = {
  'ecommerce-website-development': ecommerceWebsiteDevelopmentData,
  'shopify-development': shopifyDevelopmentData,
  'woocommerce-development': woocommerceDevelopmentData,
  'magento-development': magentoDevelopmentData,
  'payment-gateway-integration': paymentGatewayIntegrationData,
  'shopping-cart-development': shoppingCartDevelopmentData,
  'inventory-management-systems': inventoryManagementSystemsData,
  'order-fulfillment-systems': orderFulfillmentSystemsData,
  'marketplace-integration': marketplaceIntegrationData,
  'ecommerce-analytics': ecommerceAnalyticsData,
};

// Export individual service data
export {
  ecommerceWebsiteDevelopmentData,
  shopifyDevelopmentData,
  woocommerceDevelopmentData,
  magentoDevelopmentData,
  paymentGatewayIntegrationData,
  shoppingCartDevelopmentData,
  inventoryManagementSystemsData,
  orderFulfillmentSystemsData,
  marketplaceIntegrationData,
  ecommerceAnalyticsData,
};
