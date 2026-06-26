/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
  trailingSlash: true,

  async redirects() {
    // Duplicate "flat" pillar slugs that re-cover a topic already owned by a
    // canonical nested pillar. Each 301-redirects (slug + all children) to its
    // canonical parent to kill keyword cannibalization. (10 more are listed
    // explicitly below; these are the remaining 22.)
    const duplicatePillars = {
      'cloud-solutions': '/cloud-devops/',
      'brand-identity-design': '/ui-ux-design/',
      'inventory-management': '/ecommerce-solutions/',
      'mobile-app-design': '/ui-ux-design/',
      'social-media-marketing': '/digital-marketing/',
      'android-app-development': '/mobile-development/',
      'woocommerce-development': '/ecommerce-solutions/',
      'search-engine-optimization': '/digital-marketing/',
      'web-design': '/ui-ux-design/',
      'mobile-app-maintenance': '/maintenance-support/',
      'database-design': '/software-development/',
      'e-commerce-development': '/ecommerce-solutions/',
      'ios-app-development': '/mobile-development/',
      'content-marketing': '/digital-marketing/',
      'it-consulting': '/consulting-strategy/',
      'custom-e-commerce-platforms': '/ecommerce-solutions/',
      'pay-per-click-advertising': '/digital-marketing/',
      'local-seo': '/digital-marketing/',
      'email-marketing': '/digital-marketing/',
      'uiux-design': '/ui-ux-design/',
      'react-native-development': '/mobile-development/',
      'devops-services': '/cloud-devops/',
    };
    const duplicatePillarRedirects = Object.entries(duplicatePillars).flatMap(
      ([from, to]) => [
        { source: `/${from}`, destination: to, statusCode: 301 },
        { source: `/${from}/:slug*`, destination: to, statusCode: 301 },
      ]
    );

    return [
      ...duplicatePillarRedirects,
      // Ensure non-trailing-slash blog URLs redirect permanently (not 307)
      {
        source: '/blog/complete-guide-web-development-2024',
        destination: '/blog/complete-guide-web-development-2024/',
        statusCode: 301,
      },

      // Reclaim backlinks: old blog URLs that no longer exist → redirect to blog
      {
        source: '/blog/seo-best-practices-2024',
        destination: '/blog/',
        statusCode: 301,
      },
      {
        source: '/blog/digital-marketing-strategies-2024',
        destination: '/blog/',
        statusCode: 301,
      },
      {
        source: '/blog/mobile-app-development-trends-2024',
        destination: '/blog/',
        statusCode: 301,
      },
      {
        source: '/blog/ui-ux-design-principles-2024',
        destination: '/blog/',
        statusCode: 301,
      },

      // Fix keyword cannibalization: standalone pillars → primary pillar paths
      { source: '/react-development', destination: '/web-development/', statusCode: 301 },
      { source: '/react-development/:slug*', destination: '/web-development/', statusCode: 301 },
      { source: '/nextjs-development', destination: '/web-development/', statusCode: 301 },
      { source: '/nextjs-development/:slug*', destination: '/web-development/', statusCode: 301 },
      { source: '/custom-software-development', destination: '/software-development/', statusCode: 301 },
      { source: '/custom-software-development/:slug*', destination: '/software-development/', statusCode: 301 },
      { source: '/custom-web-development', destination: '/web-development/', statusCode: 301 },
      { source: '/custom-web-development/:slug*', destination: '/web-development/', statusCode: 301 },
      { source: '/payment-gateway-integration', destination: '/ecommerce-solutions/', statusCode: 301 },
      { source: '/payment-gateway-integration/:slug*', destination: '/ecommerce-solutions/', statusCode: 301 },
      { source: '/prototyping', destination: '/ui-ux-design/', statusCode: 301 },
      { source: '/prototyping/:slug*', destination: '/ui-ux-design/', statusCode: 301 },
      { source: '/shopify-development', destination: '/ecommerce-solutions/', statusCode: 301 },
      { source: '/shopify-development/:slug*', destination: '/ecommerce-solutions/', statusCode: 301 },
      { source: '/api-development', destination: '/web-development/', statusCode: 301 },
      { source: '/api-development/:slug*', destination: '/web-development/', statusCode: 301 },
      { source: '/wordpress-development', destination: '/web-development/', statusCode: 301 },
      { source: '/wordpress-development/:slug*', destination: '/web-development/', statusCode: 301 },
      { source: '/progressive-web-apps', destination: '/web-development/', statusCode: 301 },
      { source: '/progressive-web-apps/:slug*', destination: '/web-development/', statusCode: 301 },

      // Reclaim backlinks: old cloud-devops cluster slugs → renamed equivalents
      {
        source: '/cloud-devops/aws-cloud-services',
        destination: '/cloud-devops/aws-services/',
        statusCode: 301,
      },
      {
        source: '/cloud-devops/aws-cloud-services/:slug*',
        destination: '/cloud-devops/aws-services/',
        statusCode: 301,
      },
      {
        source: '/cloud-devops/azure-cloud-solutions',
        destination: '/cloud-devops/azure-services/',
        statusCode: 301,
      },
      {
        source: '/cloud-devops/azure-cloud-solutions/:slug*',
        destination: '/cloud-devops/azure-services/',
        statusCode: 301,
      },
      {
        source: '/cloud-devops/google-cloud-platform',
        destination: '/cloud-devops/google-cloud-services/',
        statusCode: 301,
      },
      {
        source: '/cloud-devops/google-cloud-platform/:slug*',
        destination: '/cloud-devops/google-cloud-services/',
        statusCode: 301,
      },
      {
        source: '/cloud-devops/cicd-pipeline-setup',
        destination: '/cloud-devops/ci-cd-pipelines/',
        statusCode: 301,
      },
      {
        source: '/cloud-devops/cicd-pipeline-setup/:slug*',
        destination: '/cloud-devops/ci-cd-pipelines/',
        statusCode: 301,
      },
      {
        source: '/cloud-devops/container-orchestration',
        destination: '/cloud-devops/kubernetes-services/',
        statusCode: 301,
      },
      {
        source: '/cloud-devops/container-orchestration/:slug*',
        destination: '/cloud-devops/kubernetes-services/',
        statusCode: 301,
      },
      {
        source: '/cloud-devops/security-compliance',
        destination: '/cloud-devops/cloud-security/',
        statusCode: 301,
      },
      {
        source: '/cloud-devops/security-compliance/:slug*',
        destination: '/cloud-devops/cloud-security/',
        statusCode: 301,
      },
      {
        source: '/cloud-devops/backup-disaster-recovery',
        destination: '/cloud-devops/',
        statusCode: 301,
      },
      {
        source: '/cloud-devops/monitoring-logging',
        destination: '/cloud-devops/',
        statusCode: 301,
      },
    ];
  },

  // Headers that were previously in vercel.json - now work on ANY host (Railway, etc.)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          // Content-Security-Policy: allowlists the third parties the site actually uses
          // (Google Analytics/Tag Manager, Microsoft Clarity, Google Fonts, Pexels/Unsplash
          // images). 'unsafe-inline'/'unsafe-eval' are required by Next.js hydration + GA/Clarity
          // inline snippets. Tighten to nonces later if the inline scripts are refactored.
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.clarity.ms",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: blob: https://images.pexels.com https://images.unsplash.com https://www.google-analytics.com https://www.clarity.ms https://c.clarity.ms",
              "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://*.clarity.ms",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
      {
        source: '/api/sitemaps/:type*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
