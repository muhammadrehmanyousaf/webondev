import { NextResponse } from 'next/server';
import { getAllCountriesAPI } from '@/lib/location-api';
import { toSlug } from '@/lib/slug';

const BASE_URL = 'https://www.webondev.com';

// Priority countries that get full sitemap coverage (cities, services, subservices)
const PRIORITY_COUNTRIES = [
  'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany',
  'France', 'India', 'China', 'Japan', 'Brazil', 'Mexico', 'Italy',
  'Spain', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland',
  'Switzerland', 'Austria', 'Belgium', 'Ireland', 'New Zealand',
  'South Korea', 'Singapore', 'Malaysia', 'Thailand', 'Vietnam',
  'Philippines', 'Indonesia', 'Pakistan', 'Bangladesh', 'Sri Lanka',
  'Russia', 'Poland', 'Turkey', 'Saudi Arabia', 'United Arab Emirates',
  'South Africa', 'Nigeria', 'Egypt', 'Kenya', 'Argentina', 'Colombia',
  'Chile', 'Peru', 'Portugal', 'Greece', 'Czech Republic', 'Romania',
  'Hungary', 'Ukraine', 'Israel', 'Qatar', 'Kuwait', 'Morocco'
];

// SITEMAP INDEX - Dynamically generates list of all sitemaps
export async function GET() {
  const now = new Date().toISOString();
  const sitemaps: string[] = [];

  // 1. Static pages sitemap
  sitemaps.push('static');

  // 2. Countries sitemap (all 250+ countries)
  sitemaps.push('countries');

  // 3. States sitemaps (paginated - ~260 countries / 10 per page = 26 pages)
  for (let i = 1; i <= 26; i++) {
    sitemaps.push(`states-${i}`);
  }

  // 4. For priority countries: Cities, Services, Subservices sitemaps
  // Each country gets multiple pages based on their size
  for (const countryName of PRIORITY_COUNTRIES) {
    const countrySlug = toSlug(countryName);

    // Cities sitemaps (paginated by states - estimate 10-20 pages per country)
    // Major countries like US, India, China get more pages
    const isLargeCountry = ['United States', 'India', 'China', 'Brazil', 'Russia', 'Canada', 'Australia'].includes(countryName);
    const cityPages = isLargeCountry ? 20 : 10;

    for (let i = 1; i <= cityPages; i++) {
      sitemaps.push(`cities-${countrySlug}-${i}`);
    }

    // Services sitemaps (city + service combinations)
    const servicePages = isLargeCountry ? 30 : 15;
    for (let i = 1; i <= servicePages; i++) {
      sitemaps.push(`services-${countrySlug}-${i}`);
    }

    // Subservices sitemaps (city + service + subservice combinations)
    const subservicePages = isLargeCountry ? 60 : 30;
    for (let i = 1; i <= subservicePages; i++) {
      sitemaps.push(`subservices-${countrySlug}-${i}`);
    }
  }

  // Generate sitemap index XML
  const sitemapEntries = sitemaps.map(name => `
  <sitemap>
    <loc>${BASE_URL}/api/sitemaps/${name}.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</sitemapindex>`;

  console.log(`Sitemap Index: Generated ${sitemaps.length} sitemaps`);

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  });
}
