import { getBaseUrl } from '@/lib/site-config';

/**
 * Sitemap Index - Points to all individual sitemaps
 * Helps search engines discover all sitemap files
 */
export async function GET() {
  const siteUrl = getBaseUrl();

  const sitemaps = [
    { loc: `${siteUrl}/sitemap.xml`, lastmod: new Date().toISOString() },
    { loc: `${siteUrl}/sitemap-images.xml`, lastmod: new Date().toISOString() },
    { loc: `${siteUrl}/sitemap-news.xml`, lastmod: new Date().toISOString() },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (sitemap) => `
  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`
  )
  .join('')}
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
