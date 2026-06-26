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
    return [
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
