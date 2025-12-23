/**
 * BREADCRUMB SCHEMA SYSTEM
 * Comprehensive breadcrumb generation for all pages
 */

import { getBaseUrl } from '@/lib/site-config';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

// =============================================================================
// BREADCRUMB CONFIGURATIONS
// =============================================================================

const pageTitles: Record<string, string> = {
  '': 'Home',
  services: 'Services',
  portfolio: 'Portfolio',
  blog: 'Blog',
  about: 'About',
  contact: 'Contact',
  careers: 'Careers',
  'where-we-serve': 'Where We Serve',
  'web-development': 'Web Development',
  'mobile-app-development': 'Mobile App Development',
  'ui-ux-design': 'UI/UX Design',
  'digital-marketing': 'Digital Marketing',
  'ecommerce-development': 'E-commerce Development',
  'cloud-devops': 'Cloud & DevOps',
  'seo-optimization': 'SEO Optimization',
  'nextjs-development': 'Next.js Development',
  'react-development': 'React Development',
  'shopify-development': 'Shopify Development',
  'wordpress-development': 'WordPress Development',
  'flutter-development': 'Flutter Development',
  'react-native-development': 'React Native Development',
  team: 'Team',
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
  cookies: 'Cookie Policy',
  // Countries
  'united-states': 'United States',
  'united-kingdom': 'United Kingdom',
  canada: 'Canada',
  australia: 'Australia',
  germany: 'Germany',
  india: 'India',
  'united-arab-emirates': 'UAE',
  singapore: 'Singapore',
  pakistan: 'Pakistan',
};

/**
 * Generate breadcrumb items from URL path
 */
export function generateBreadcrumbs(path: string): BreadcrumbItem[] {
  const siteUrl = getBaseUrl();
  const segments = path.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [{ name: 'Home', url: siteUrl }];

  let currentPath = '';

  for (const segment of segments) {
    currentPath += `/${segment}`;
    const name =
      pageTitles[segment] ||
      segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    breadcrumbs.push({
      name,
      url: `${siteUrl}${currentPath}/`,
    });
  }

  return breadcrumbs;
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate breadcrumb schema from path
 */
export function generateBreadcrumbSchemaFromPath(path: string) {
  const breadcrumbs = generateBreadcrumbs(path);
  return generateBreadcrumbSchema(breadcrumbs);
}

// =============================================================================
// SERVICE-SPECIFIC BREADCRUMBS
// =============================================================================

export function getServiceBreadcrumbs(serviceSlug: string): BreadcrumbItem[] {
  const siteUrl = getBaseUrl();
  const serviceName =
    pageTitles[serviceSlug] ||
    serviceSlug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  return [
    { name: 'Home', url: siteUrl },
    { name: 'Services', url: `${siteUrl}/services/` },
    { name: serviceName, url: `${siteUrl}/services/${serviceSlug}/` },
  ];
}

// =============================================================================
// LOCATION-SPECIFIC BREADCRUMBS
// =============================================================================

export function getLocationBreadcrumbs(
  country: string,
  state?: string,
  city?: string,
  service?: string
): BreadcrumbItem[] {
  const siteUrl = getBaseUrl();
  const formatName = (slug: string) =>
    pageTitles[slug] ||
    slug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: siteUrl },
    { name: 'Where We Serve', url: `${siteUrl}/where-we-serve/` },
    { name: formatName(country), url: `${siteUrl}/where-we-serve/${country}/` },
  ];

  if (state) {
    breadcrumbs.push({
      name: formatName(state),
      url: `${siteUrl}/where-we-serve/${country}/${state}/`,
    });
  }

  if (city) {
    breadcrumbs.push({
      name: formatName(city),
      url: `${siteUrl}/where-we-serve/${country}/${state}/${city}/`,
    });
  }

  if (service) {
    breadcrumbs.push({
      name: formatName(service),
      url: `${siteUrl}/where-we-serve/${country}/${state}/${city}/${service}/`,
    });
  }

  return breadcrumbs;
}

// =============================================================================
// BLOG BREADCRUMBS
// =============================================================================

export function getBlogBreadcrumbs(
  slug: string,
  title: string,
  category?: string
): BreadcrumbItem[] {
  const siteUrl = getBaseUrl();
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: siteUrl },
    { name: 'Blog', url: `${siteUrl}/blog/` },
  ];

  if (category) {
    const categoryName = category
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    breadcrumbs.push({
      name: categoryName,
      url: `${siteUrl}/blog/category/${category}/`,
    });
  }

  breadcrumbs.push({
    name: title,
    url: `${siteUrl}/blog/${slug}/`,
  });

  return breadcrumbs;
}

export default {
  generateBreadcrumbs,
  generateBreadcrumbSchema,
  generateBreadcrumbSchemaFromPath,
  getServiceBreadcrumbs,
  getLocationBreadcrumbs,
  getBlogBreadcrumbs,
};
