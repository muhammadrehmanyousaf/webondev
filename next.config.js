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
        permanent: true,
      },

      // Reclaim backlinks: old blog URLs that no longer exist → redirect to blog
      {
        source: '/blog/seo-best-practices-2024',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/blog/digital-marketing-strategies-2024',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/blog/mobile-app-development-trends-2024',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/blog/ui-ux-design-principles-2024',
        destination: '/blog/',
        permanent: true,
      },

      // Fix keyword cannibalization: standalone pillars → primary pillar paths
      { source: '/react-development', destination: '/web-development/', permanent: true },
      { source: '/react-development/:slug*', destination: '/web-development/', permanent: true },
      { source: '/nextjs-development', destination: '/web-development/', permanent: true },
      { source: '/nextjs-development/:slug*', destination: '/web-development/', permanent: true },
      { source: '/custom-software-development', destination: '/software-development/', permanent: true },
      { source: '/custom-software-development/:slug*', destination: '/software-development/', permanent: true },
      { source: '/custom-web-development', destination: '/web-development/', permanent: true },
      { source: '/custom-web-development/:slug*', destination: '/web-development/', permanent: true },
      { source: '/payment-gateway-integration', destination: '/ecommerce-solutions/', permanent: true },
      { source: '/payment-gateway-integration/:slug*', destination: '/ecommerce-solutions/', permanent: true },
      { source: '/prototyping', destination: '/ui-ux-design/', permanent: true },
      { source: '/prototyping/:slug*', destination: '/ui-ux-design/', permanent: true },
      { source: '/shopify-development', destination: '/ecommerce-solutions/', permanent: true },
      { source: '/shopify-development/:slug*', destination: '/ecommerce-solutions/', permanent: true },
      { source: '/api-development', destination: '/web-development/', permanent: true },
      { source: '/api-development/:slug*', destination: '/web-development/', permanent: true },
      { source: '/wordpress-development', destination: '/web-development/', permanent: true },
      { source: '/wordpress-development/:slug*', destination: '/web-development/', permanent: true },
      { source: '/progressive-web-apps', destination: '/web-development/', permanent: true },
      { source: '/progressive-web-apps/:slug*', destination: '/web-development/', permanent: true },

      // Reclaim backlinks: old cloud-devops cluster slugs → renamed equivalents
      {
        source: '/cloud-devops/aws-cloud-services',
        destination: '/cloud-devops/aws-services/',
        permanent: true,
      },
      {
        source: '/cloud-devops/aws-cloud-services/:slug*',
        destination: '/cloud-devops/aws-services/',
        permanent: true,
      },
      {
        source: '/cloud-devops/azure-cloud-solutions',
        destination: '/cloud-devops/azure-services/',
        permanent: true,
      },
      {
        source: '/cloud-devops/azure-cloud-solutions/:slug*',
        destination: '/cloud-devops/azure-services/',
        permanent: true,
      },
      {
        source: '/cloud-devops/google-cloud-platform',
        destination: '/cloud-devops/google-cloud-services/',
        permanent: true,
      },
      {
        source: '/cloud-devops/google-cloud-platform/:slug*',
        destination: '/cloud-devops/google-cloud-services/',
        permanent: true,
      },
      {
        source: '/cloud-devops/cicd-pipeline-setup',
        destination: '/cloud-devops/ci-cd-pipelines/',
        permanent: true,
      },
      {
        source: '/cloud-devops/cicd-pipeline-setup/:slug*',
        destination: '/cloud-devops/ci-cd-pipelines/',
        permanent: true,
      },
      {
        source: '/cloud-devops/container-orchestration',
        destination: '/cloud-devops/kubernetes-services/',
        permanent: true,
      },
      {
        source: '/cloud-devops/container-orchestration/:slug*',
        destination: '/cloud-devops/kubernetes-services/',
        permanent: true,
      },
      {
        source: '/cloud-devops/security-compliance',
        destination: '/cloud-devops/cloud-security/',
        permanent: true,
      },
      {
        source: '/cloud-devops/security-compliance/:slug*',
        destination: '/cloud-devops/cloud-security/',
        permanent: true,
      },
      {
        source: '/cloud-devops/backup-disaster-recovery',
        destination: '/cloud-devops/',
        permanent: true,
      },
      {
        source: '/cloud-devops/monitoring-logging',
        destination: '/cloud-devops/',
        permanent: true,
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
