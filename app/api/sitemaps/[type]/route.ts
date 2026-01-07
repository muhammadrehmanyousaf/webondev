import { NextRequest, NextResponse } from 'next/server';
import { blogData } from '@/lib/blog-data';
import { getAllCountriesAPI, getStatesByCountryAPI, getCitiesByStateAPI } from '@/lib/location-api';
import { toSlug } from '@/lib/slug';
import { siteStructure } from '@/lib/site-structure';

const BASE_URL = 'https://www.webondev.com';
const MAX_URLS_PER_SITEMAP = 45000;

// Get all service pillars and clusters
const SERVICE_PILLARS = siteStructure.map(p => ({
  slug: p.slug,
  clusters: p.clusters.map(c => c.slug)
}));

// Generate XML sitemap
function generateSitemapXml(urls: Array<{ url: string; lastmod?: string; changefreq?: string; priority?: number }>) {
  const urlEntries = urls.map(entry => `
  <url>
    <loc>${entry.url}</loc>
    ${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ''}
    ${entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>` : ''}
    ${entry.priority !== undefined ? `<priority>${entry.priority}</priority>` : ''}
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

// ============================================
// STATIC PAGES SITEMAP
// ============================================
function getStaticUrls() {
  const now = new Date().toISOString();
  const urls = [
    { url: `${BASE_URL}/`, lastmod: now, changefreq: 'weekly', priority: 1 },
    { url: `${BASE_URL}/about/`, lastmod: now, changefreq: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/`, lastmod: now, changefreq: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/portfolio/`, lastmod: now, changefreq: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/blog/`, lastmod: now, changefreq: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/contact/`, lastmod: now, changefreq: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/where-we-serve/`, lastmod: now, changefreq: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/privacy/`, lastmod: now, changefreq: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/terms/`, lastmod: now, changefreq: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/data-deletion/`, lastmod: now, changefreq: 'monthly', priority: 0.5 },
  ];

  // Add blog posts
  for (const post of blogData) {
    urls.push({
      url: `${BASE_URL}/blog/${post.slug}/`,
      lastmod: new Date(post.date).toISOString(),
      changefreq: 'monthly',
      priority: 0.6
    });
  }

  // Add service pillar pages (top-level services)
  for (const pillar of SERVICE_PILLARS) {
    urls.push({
      url: `${BASE_URL}/${pillar.slug}/`,
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.8
    });
    // Add cluster pages (subservices)
    for (const cluster of pillar.clusters) {
      urls.push({
        url: `${BASE_URL}/${pillar.slug}/${cluster}/`,
        lastmod: now,
        changefreq: 'monthly',
        priority: 0.7
      });
    }
  }

  return urls;
}

// ============================================
// COUNTRIES SITEMAP - All 250+ countries
// ============================================
async function getCountriesUrls() {
  const now = new Date().toISOString();
  const urls: Array<{ url: string; lastmod: string; changefreq: string; priority: number }> = [];

  try {
    const countries = await getAllCountriesAPI();
    for (const country of countries) {
      urls.push({
        url: `${BASE_URL}/where-we-serve/${toSlug(country.name)}/`,
        lastmod: now,
        changefreq: 'monthly',
        priority: 0.7
      });
    }
  } catch (error) {
    console.error('Error fetching countries:', error);
  }

  return urls;
}

// ============================================
// STATES SITEMAP - Paginated by country chunks
// Format: states-[page].xml where page is 1-based
// ============================================
async function getStatesUrls(page: number) {
  const now = new Date().toISOString();
  const urls: Array<{ url: string; lastmod: string; changefreq: string; priority: number }> = [];

  try {
    const allCountries = await getAllCountriesAPI();
    const countriesPerPage = 10; // Process 10 countries per sitemap page
    const startIdx = (page - 1) * countriesPerPage;
    const endIdx = startIdx + countriesPerPage;
    const countriesToProcess = allCountries.slice(startIdx, endIdx);

    for (const country of countriesToProcess) {
      try {
        const states = await getStatesByCountryAPI(country.name);
        const countrySlug = toSlug(country.name);

        for (const state of states) {
          urls.push({
            url: `${BASE_URL}/where-we-serve/${countrySlug}/${toSlug(state.name)}/`,
            lastmod: now,
            changefreq: 'monthly',
            priority: 0.6
          });

          if (urls.length >= MAX_URLS_PER_SITEMAP) break;
        }
      } catch {
        // Continue with next country
      }

      if (urls.length >= MAX_URLS_PER_SITEMAP) break;
    }
  } catch (error) {
    console.error('Error fetching states:', error);
  }

  return urls;
}

// ============================================
// CITIES SITEMAP - Paginated
// Format: cities-[country-slug]-[page].xml
// ============================================
async function getCitiesUrlsByCountry(countryName: string, page: number) {
  const now = new Date().toISOString();
  const urls: Array<{ url: string; lastmod: string; changefreq: string; priority: number }> = [];

  try {
    const states = await getStatesByCountryAPI(countryName);
    const countrySlug = toSlug(countryName);
    const statesPerPage = 5;
    const startIdx = (page - 1) * statesPerPage;
    const endIdx = startIdx + statesPerPage;
    const statesToProcess = states.slice(startIdx, endIdx);

    for (const state of statesToProcess) {
      try {
        const cities = await getCitiesByStateAPI(countryName, state.name);
        const stateSlug = toSlug(state.name);

        for (const city of cities) {
          urls.push({
            url: `${BASE_URL}/where-we-serve/${countrySlug}/${stateSlug}/${toSlug(city.name)}/`,
            lastmod: now,
            changefreq: 'monthly',
            priority: 0.5
          });

          if (urls.length >= MAX_URLS_PER_SITEMAP) break;
        }
      } catch {
        // Continue
      }

      if (urls.length >= MAX_URLS_PER_SITEMAP) break;
    }
  } catch (error) {
    console.error('Error fetching cities:', error);
  }

  return urls;
}

// ============================================
// SERVICES SITEMAP - City + Service URLs (5-level)
// Format: services-[country-slug]-[page].xml
// ============================================
async function getServicesUrlsByCountry(countryName: string, page: number) {
  const now = new Date().toISOString();
  const urls: Array<{ url: string; lastmod: string; changefreq: string; priority: number }> = [];

  try {
    const states = await getStatesByCountryAPI(countryName);
    const countrySlug = toSlug(countryName);
    const statesPerPage = 2; // Less states because more URLs per state
    const startIdx = (page - 1) * statesPerPage;
    const endIdx = startIdx + statesPerPage;
    const statesToProcess = states.slice(startIdx, endIdx);

    for (const state of statesToProcess) {
      try {
        const cities = await getCitiesByStateAPI(countryName, state.name);
        const stateSlug = toSlug(state.name);

        // Limit cities for services to avoid explosion
        const citiesToProcess = cities.slice(0, 50);

        for (const city of citiesToProcess) {
          const citySlug = toSlug(city.name);
          const basePath = `${BASE_URL}/where-we-serve/${countrySlug}/${stateSlug}/${citySlug}`;

          // Add all service pillar pages for this city
          for (const pillar of SERVICE_PILLARS) {
            urls.push({
              url: `${basePath}/${pillar.slug}/`,
              lastmod: now,
              changefreq: 'monthly',
              priority: 0.4
            });

            if (urls.length >= MAX_URLS_PER_SITEMAP) break;
          }

          if (urls.length >= MAX_URLS_PER_SITEMAP) break;
        }
      } catch {
        // Continue
      }

      if (urls.length >= MAX_URLS_PER_SITEMAP) break;
    }
  } catch (error) {
    console.error('Error fetching services:', error);
  }

  return urls;
}

// ============================================
// SUBSERVICES SITEMAP - City + Service + Subservice URLs (6-level)
// Format: subservices-[country-slug]-[page].xml
// ============================================
async function getSubservicesUrlsByCountry(countryName: string, page: number) {
  const now = new Date().toISOString();
  const urls: Array<{ url: string; lastmod: string; changefreq: string; priority: number }> = [];

  try {
    const states = await getStatesByCountryAPI(countryName);
    const countrySlug = toSlug(countryName);
    const statesPerPage = 1; // Even less because of URL explosion
    const startIdx = (page - 1) * statesPerPage;
    const endIdx = startIdx + statesPerPage;
    const statesToProcess = states.slice(startIdx, endIdx);

    for (const state of statesToProcess) {
      try {
        const cities = await getCitiesByStateAPI(countryName, state.name);
        const stateSlug = toSlug(state.name);

        // Limit cities
        const citiesToProcess = cities.slice(0, 30);

        for (const city of citiesToProcess) {
          const citySlug = toSlug(city.name);
          const basePath = `${BASE_URL}/where-we-serve/${countrySlug}/${stateSlug}/${citySlug}`;

          // Add all service + subservice combinations
          for (const pillar of SERVICE_PILLARS) {
            for (const cluster of pillar.clusters) {
              urls.push({
                url: `${basePath}/${pillar.slug}/${cluster}/`,
                lastmod: now,
                changefreq: 'monthly',
                priority: 0.35
              });

              if (urls.length >= MAX_URLS_PER_SITEMAP) break;
            }
            if (urls.length >= MAX_URLS_PER_SITEMAP) break;
          }

          if (urls.length >= MAX_URLS_PER_SITEMAP) break;
        }
      } catch {
        // Continue
      }

      if (urls.length >= MAX_URLS_PER_SITEMAP) break;
    }
  } catch (error) {
    console.error('Error fetching subservices:', error);
  }

  return urls;
}

// ============================================
// MAIN ROUTE HANDLER
// ============================================
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = await params;
  const sitemapType = type.replace('.xml', '');

  console.log(`Generating sitemap: ${sitemapType}`);

  let urls: Array<{ url: string; lastmod?: string; changefreq?: string; priority?: number }> = [];

  try {
    // Static pages
    if (sitemapType === 'static') {
      urls = getStaticUrls();
    }
    // All countries
    else if (sitemapType === 'countries') {
      urls = await getCountriesUrls();
    }
    // States - paginated: states-1, states-2, etc.
    else if (sitemapType.startsWith('states-')) {
      const page = parseInt(sitemapType.replace('states-', ''), 10);
      if (!isNaN(page)) {
        urls = await getStatesUrls(page);
      }
    }
    // Cities by country: cities-united-states-1, cities-india-1, etc.
    else if (sitemapType.startsWith('cities-')) {
      const match = sitemapType.match(/^cities-(.+)-(\d+)$/);
      if (match) {
        const countrySlug = match[1];
        const page = parseInt(match[2], 10);
        // Convert slug back to country name
        const countries = await getAllCountriesAPI();
        const country = countries.find(c => toSlug(c.name) === countrySlug);
        if (country) {
          urls = await getCitiesUrlsByCountry(country.name, page);
        }
      }
    }
    // Services by country: services-united-states-1, etc.
    else if (sitemapType.startsWith('services-')) {
      const match = sitemapType.match(/^services-(.+)-(\d+)$/);
      if (match) {
        const countrySlug = match[1];
        const page = parseInt(match[2], 10);
        const countries = await getAllCountriesAPI();
        const country = countries.find(c => toSlug(c.name) === countrySlug);
        if (country) {
          urls = await getServicesUrlsByCountry(country.name, page);
        }
      }
    }
    // Subservices by country: subservices-united-states-1, etc.
    else if (sitemapType.startsWith('subservices-')) {
      const match = sitemapType.match(/^subservices-(.+)-(\d+)$/);
      if (match) {
        const countrySlug = match[1];
        const page = parseInt(match[2], 10);
        const countries = await getAllCountriesAPI();
        const country = countries.find(c => toSlug(c.name) === countrySlug);
        if (country) {
          urls = await getSubservicesUrlsByCountry(country.name, page);
        }
      }
    }
    else {
      return NextResponse.json({ error: 'Invalid sitemap type', type: sitemapType }, { status: 404 });
    }

    console.log(`Generated ${urls.length} URLs for sitemap: ${sitemapType}`);

    if (urls.length === 0) {
      return NextResponse.json({ error: 'No URLs found', type: sitemapType }, { status: 404 });
    }

    const xml = generateSitemapXml(urls);

    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400'
      }
    });

  } catch (error) {
    console.error(`Error generating sitemap ${sitemapType}:`, error);
    return NextResponse.json({
      error: 'Failed to generate sitemap',
      type: sitemapType,
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
