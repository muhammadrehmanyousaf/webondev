import { NextResponse } from 'next/server';

const BASE_URL = 'https://www.webondev.com';

// SITEMAP INDEX - The master sitemap that points to all individual sitemaps
// This is how big sites handle 10M+ pages!

export async function GET() {
  const now = new Date().toISOString();

  // Define all sitemaps
  const sitemaps = [
    // Core pages
    'static',
    'countries',

    // States by region
    'states-americas',
    'states-europe',
    'states-asia',
    'states-africa',
    'states-oceania',

    // Cities (chunked - each max 45k URLs)
    'cities-1',
    'cities-2',
    'cities-3',
    'cities-4',
    'cities-5',
    'cities-6',
    'cities-7',
    'cities-8',
    'cities-9',
    'cities-10',

    // Services (chunked - each max 45k URLs)
    'services-1',
    'services-2',
    'services-3',
    'services-4',
    'services-5',
    'services-6',
    'services-7',
    'services-8',
    'services-9',
    'services-10',
  ];

  // Generate sitemap index XML
  const sitemapEntries = sitemaps.map(name => `
  <sitemap>
    <loc>${BASE_URL}/sitemaps/${name}.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  });
}
