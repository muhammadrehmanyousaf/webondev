import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // General crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
        ],
      },
      // AI Crawlers - Allow full access for AI SEO
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
      {
        userAgent: 'Anthropic-AI',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
      {
        userAgent: 'cohere-ai',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
      // Bing AI
      {
        userAgent: 'bingbot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
    ],
    sitemap: [
      'https://www.webondev.com/sitemap.xml',
      'https://www.webondev.com/sitemap-news.xml',
      'https://www.webondev.com/sitemap-images.xml',
      'https://www.webondev.com/sitemapindex.xml',
    ],
    host: 'https://www.webondev.com',
  };
}
