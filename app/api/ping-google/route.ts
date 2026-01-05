import { NextResponse } from 'next/server';

// Ping Google to re-crawl sitemap
// Call this after deploying new pages

const SITE_URL = 'https://www.webondev.com';

export async function GET() {
  const sitemapUrl = encodeURIComponent(`${SITE_URL}/sitemap.xml`);

  const pingUrls = [
    `https://www.google.com/ping?sitemap=${sitemapUrl}`,
    `https://www.bing.com/ping?sitemap=${sitemapUrl}`,
  ];

  const results = await Promise.allSettled(
    pingUrls.map(async (url) => {
      const response = await fetch(url);
      return { url, status: response.status };
    })
  );

  return NextResponse.json({
    success: true,
    message: 'Pinged search engines to re-crawl sitemap',
    results: results.map((r) =>
      r.status === 'fulfilled' ? r.value : { error: 'failed' }
    ),
  });
}
