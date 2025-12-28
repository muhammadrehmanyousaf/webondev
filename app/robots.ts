import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default rule for all crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },

      // Google crawlers
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },

      // Bing crawlers
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },

      // ============================================
      // AI / LLM CRAWLERS - EXPLICITLY ALLOWED
      // This helps AI search engines index our content
      // ============================================

      // OpenAI / ChatGPT
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

      // Anthropic / Claude
      {
        userAgent: 'anthropic-ai',
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

      // Perplexity AI
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },

      // Google AI / Bard / Gemini
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },

      // Common Crawl (used for AI training)
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },

      // Cohere AI
      {
        userAgent: 'cohere-ai',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },

      // Meta / Facebook AI
      {
        userAgent: 'FacebookBot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
      {
        userAgent: 'meta-externalagent',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },

      // Apple AI / Siri
      {
        userAgent: 'Applebot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },

      // You.com AI
      {
        userAgent: 'YouBot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },

      // Brave Search AI
      {
        userAgent: 'Bytespider',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },

      // Amazon / Alexa
      {
        userAgent: 'Amazonbot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },

      // Microsoft Bing AI / Copilot
      {
        userAgent: 'bingbot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },

      // DuckDuckGo
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },

      // Diffbot (data extraction for AI)
      {
        userAgent: 'Diffbot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },

      // Omgili (AI data)
      {
        userAgent: 'omgili',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },

      // Webz.io (AI data)
      {
        userAgent: 'Webzio-Extended',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
    ],
    sitemap: 'https://www.webondev.com/sitemap.xml',
    host: 'https://www.webondev.com',
  };
}
