/**
 * ADVANCED INTERNAL LINKING SYSTEM
 * Intelligent contextual linking for SEO optimization
 */

export interface InternalLink {
  keyword: string;
  url: string;
  title: string;
  priority: number; // 1-10, higher = more important
}

// =============================================================================
// INTERNAL LINK DATABASE - Keyword to URL mappings
// =============================================================================

export const internalLinks: InternalLink[] = [
  // Service Links
  { keyword: 'web development', url: '/services/web-development/', title: 'Web Development Services', priority: 10 },
  { keyword: 'website development', url: '/services/web-development/', title: 'Website Development', priority: 9 },
  { keyword: 'mobile app development', url: '/services/mobile-app-development/', title: 'Mobile App Development', priority: 10 },
  { keyword: 'mobile apps', url: '/services/mobile-app-development/', title: 'Mobile App Services', priority: 8 },
  { keyword: 'UI/UX design', url: '/services/ui-ux-design/', title: 'UI/UX Design Services', priority: 10 },
  { keyword: 'user experience', url: '/services/ui-ux-design/', title: 'UX Design', priority: 7 },
  { keyword: 'digital marketing', url: '/services/digital-marketing/', title: 'Digital Marketing Services', priority: 10 },
  { keyword: 'SEO services', url: '/services/seo-optimization/', title: 'SEO Services', priority: 9 },
  { keyword: 'ecommerce development', url: '/services/ecommerce-development/', title: 'E-commerce Development', priority: 9 },
  { keyword: 'shopify development', url: '/services/shopify-development/', title: 'Shopify Development', priority: 8 },
  { keyword: 'wordpress development', url: '/services/wordpress-development/', title: 'WordPress Development', priority: 8 },
  { keyword: 'cloud services', url: '/services/cloud-devops/', title: 'Cloud & DevOps', priority: 8 },
  { keyword: 'custom software', url: '/services/custom-software-development/', title: 'Custom Software Development', priority: 9 },

  // Technology Links
  { keyword: 'Next.js', url: '/services/nextjs-development/', title: 'Next.js Development', priority: 9 },
  { keyword: 'React', url: '/services/react-development/', title: 'React Development', priority: 9 },
  { keyword: 'React Native', url: '/services/react-native-development/', title: 'React Native Development', priority: 8 },
  { keyword: 'Flutter', url: '/services/flutter-development/', title: 'Flutter Development', priority: 8 },
  { keyword: 'Node.js', url: '/services/nodejs-development/', title: 'Node.js Development', priority: 8 },
  { keyword: 'TypeScript', url: '/services/typescript-development/', title: 'TypeScript Development', priority: 7 },

  // Location Links
  { keyword: 'software company USA', url: '/where-we-serve/united-states/', title: 'Services in USA', priority: 8 },
  { keyword: 'software company UK', url: '/where-we-serve/united-kingdom/', title: 'Services in UK', priority: 8 },
  { keyword: 'web development Canada', url: '/where-we-serve/canada/', title: 'Services in Canada', priority: 7 },
  { keyword: 'web development Australia', url: '/where-we-serve/australia/', title: 'Services in Australia', priority: 7 },

  // Core Pages
  { keyword: 'contact us', url: '/contact/', title: 'Contact Web On Dev', priority: 10 },
  { keyword: 'get a quote', url: '/contact/', title: 'Get a Free Quote', priority: 10 },
  { keyword: 'free consultation', url: '/contact/', title: 'Free Consultation', priority: 9 },
  { keyword: 'our portfolio', url: '/portfolio/', title: 'View Our Portfolio', priority: 9 },
  { keyword: 'case studies', url: '/portfolio/', title: 'Case Studies', priority: 8 },
  { keyword: 'about us', url: '/about/', title: 'About Web On Dev', priority: 8 },
  { keyword: 'our team', url: '/about/', title: 'Our Team', priority: 7 },
  { keyword: 'blog', url: '/blog/', title: 'Web On Dev Blog', priority: 7 },
];

// =============================================================================
// RELATED CONTENT SYSTEM - Contextual recommendations
// =============================================================================

export interface RelatedContent {
  pageUrl: string;
  relatedPages: { url: string; title: string; relevance: number }[];
}

export const relatedContentMap: Record<string, { url: string; title: string; relevance: number }[]> = {
  '/services/web-development/': [
    { url: '/services/ui-ux-design/', title: 'UI/UX Design Services', relevance: 0.9 },
    { url: '/services/ecommerce-development/', title: 'E-commerce Development', relevance: 0.85 },
    { url: '/services/nextjs-development/', title: 'Next.js Development', relevance: 0.8 },
    { url: '/portfolio/', title: 'View Our Web Projects', relevance: 0.75 },
  ],
  '/services/mobile-app-development/': [
    { url: '/services/ui-ux-design/', title: 'Mobile UI/UX Design', relevance: 0.9 },
    { url: '/services/react-native-development/', title: 'React Native Apps', relevance: 0.85 },
    { url: '/services/flutter-development/', title: 'Flutter Development', relevance: 0.85 },
    { url: '/portfolio/', title: 'View Our App Portfolio', relevance: 0.75 },
  ],
  '/services/digital-marketing/': [
    { url: '/services/seo-optimization/', title: 'SEO Services', relevance: 0.95 },
    { url: '/services/web-development/', title: 'Website Development', relevance: 0.8 },
    { url: '/blog/', title: 'Marketing Insights Blog', relevance: 0.7 },
  ],
  '/services/ecommerce-development/': [
    { url: '/services/shopify-development/', title: 'Shopify Development', relevance: 0.9 },
    { url: '/services/digital-marketing/', title: 'E-commerce Marketing', relevance: 0.85 },
    { url: '/services/web-development/', title: 'Custom Web Development', relevance: 0.8 },
  ],
};

// =============================================================================
// BREADCRUMB GENERATOR
// =============================================================================

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbs(path: string): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: '/' },
  ];

  const segments = path.split('/').filter(Boolean);

  let currentPath = '';
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    breadcrumbs.push({ name, url: `${currentPath}/` });
  }

  return breadcrumbs;
}

// =============================================================================
// SMART LINKING UTILITIES
// =============================================================================

/**
 * Auto-link keywords in content
 */
export function autoLinkContent(content: string, maxLinks: number = 5): string {
  let linkedContent = content;
  let linkCount = 0;

  // Sort by priority (highest first) and keyword length (longest first)
  const sortedLinks = [...internalLinks].sort((a, b) => {
    if (b.priority !== a.priority) return b.priority - a.priority;
    return b.keyword.length - a.keyword.length;
  });

  for (const link of sortedLinks) {
    if (linkCount >= maxLinks) break;

    const regex = new RegExp(`\\b(${link.keyword})\\b(?![^<]*>)`, 'gi');
    if (regex.test(linkedContent)) {
      linkedContent = linkedContent.replace(
        regex,
        `<a href="${link.url}" title="${link.title}">$1</a>`
      );
      linkCount++;
    }
  }

  return linkedContent;
}

/**
 * Get related pages for a given URL
 */
export function getRelatedPages(currentUrl: string, limit: number = 4): { url: string; title: string }[] {
  const related = relatedContentMap[currentUrl];
  if (related) {
    return related.slice(0, limit).map(({ url, title }) => ({ url, title }));
  }

  // Fallback: return popular pages
  return [
    { url: '/services/', title: 'Our Services' },
    { url: '/portfolio/', title: 'Portfolio' },
    { url: '/contact/', title: 'Contact Us' },
    { url: '/blog/', title: 'Blog' },
  ].slice(0, limit);
}

/**
 * Generate sitemap links section for footer
 */
export function getSitemapLinks() {
  return {
    services: [
      { name: 'Web Development', url: '/services/web-development/' },
      { name: 'Mobile App Development', url: '/services/mobile-app-development/' },
      { name: 'UI/UX Design', url: '/services/ui-ux-design/' },
      { name: 'Digital Marketing', url: '/services/digital-marketing/' },
      { name: 'E-commerce Development', url: '/services/ecommerce-development/' },
      { name: 'Cloud & DevOps', url: '/services/cloud-devops/' },
    ],
    company: [
      { name: 'About Us', url: '/about/' },
      { name: 'Portfolio', url: '/portfolio/' },
      { name: 'Blog', url: '/blog/' },
      { name: 'Contact', url: '/contact/' },
      { name: 'Careers', url: '/careers/' },
    ],
    locations: [
      { name: 'United States', url: '/where-we-serve/united-states/' },
      { name: 'United Kingdom', url: '/where-we-serve/united-kingdom/' },
      { name: 'Canada', url: '/where-we-serve/canada/' },
      { name: 'Australia', url: '/where-we-serve/australia/' },
      { name: 'Germany', url: '/where-we-serve/germany/' },
    ],
    legal: [
      { name: 'Privacy Policy', url: '/privacy-policy/' },
      { name: 'Terms of Service', url: '/terms/' },
      { name: 'Cookie Policy', url: '/cookie-policy/' },
    ],
  };
}
