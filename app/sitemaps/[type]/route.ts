import { NextRequest, NextResponse } from 'next/server';
import { blogData } from '@/lib/blog-data';
import { locationData } from '@/lib/location-data';
import { getAllCountriesAPI, getStatesByCountryAPI, getCitiesByStateAPI } from '@/lib/location-api';
import { toSlug } from '@/lib/slug';

const BASE_URL = 'https://www.webondev.com';
const MAX_URLS_PER_SITEMAP = 45000; // Keep under 50k limit with buffer

// Region mappings for countries
const REGION_COUNTRIES: Record<string, string[]> = {
  americas: [
    'United States', 'Canada', 'Mexico', 'Brazil', 'Argentina', 'Colombia',
    'Chile', 'Peru', 'Venezuela', 'Ecuador', 'Bolivia', 'Paraguay', 'Uruguay',
    'Costa Rica', 'Panama', 'Guatemala', 'Cuba', 'Dominican Republic', 'Honduras',
    'El Salvador', 'Nicaragua', 'Puerto Rico', 'Jamaica', 'Trinidad and Tobago',
    'Bahamas', 'Barbados', 'Belize', 'Guyana', 'Suriname', 'Haiti'
  ],
  europe: [
    'United Kingdom', 'Germany', 'France', 'Italy', 'Spain', 'Netherlands',
    'Belgium', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Switzerland', 'Austria',
    'Ireland', 'Portugal', 'Greece', 'Poland', 'Czech Republic', 'Romania',
    'Hungary', 'Ukraine', 'Russia', 'Turkey', 'Croatia', 'Serbia', 'Bulgaria',
    'Slovakia', 'Slovenia', 'Estonia', 'Latvia', 'Lithuania', 'Luxembourg',
    'Malta', 'Cyprus', 'Iceland', 'Albania', 'North Macedonia', 'Montenegro',
    'Bosnia and Herzegovina', 'Moldova', 'Belarus'
  ],
  asia: [
    'China', 'Japan', 'India', 'South Korea', 'Indonesia', 'Thailand', 'Vietnam',
    'Philippines', 'Malaysia', 'Singapore', 'Pakistan', 'Bangladesh', 'Sri Lanka',
    'Myanmar', 'Cambodia', 'Nepal', 'Afghanistan', 'Kazakhstan', 'Uzbekistan',
    'Taiwan', 'Hong Kong', 'Macau', 'Mongolia', 'North Korea', 'Laos', 'Brunei',
    'Timor-Leste', 'Bhutan', 'Maldives', 'Turkmenistan', 'Tajikistan', 'Kyrgyzstan',
    'Saudi Arabia', 'United Arab Emirates', 'Qatar', 'Kuwait', 'Bahrain', 'Oman',
    'Israel', 'Jordan', 'Lebanon', 'Iraq', 'Iran', 'Syria', 'Yemen', 'Armenia',
    'Azerbaijan', 'Georgia'
  ],
  africa: [
    'South Africa', 'Nigeria', 'Egypt', 'Kenya', 'Morocco', 'Ghana', 'Tanzania',
    'Ethiopia', 'Algeria', 'Tunisia', 'Uganda', 'Zimbabwe', 'Zambia', 'Botswana',
    'Namibia', 'Mozambique', 'Angola', 'Cameroon', 'Ivory Coast', 'Senegal',
    'Rwanda', 'Madagascar', 'Mauritius', 'Seychelles', 'Libya', 'Sudan',
    'Democratic Republic of the Congo', 'Republic of the Congo', 'Gabon',
    'Equatorial Guinea', 'Central African Republic', 'Chad', 'Niger', 'Mali',
    'Burkina Faso', 'Benin', 'Togo', 'Sierra Leone', 'Liberia', 'Guinea',
    'Guinea-Bissau', 'Gambia', 'Cape Verde', 'Mauritania', 'Western Sahara',
    'Eritrea', 'Djibouti', 'Somalia', 'Comoros', 'Malawi', 'Lesotho', 'Eswatini'
  ],
  oceania: [
    'Australia', 'New Zealand', 'Fiji', 'Papua New Guinea', 'Samoa', 'Tonga',
    'Vanuatu', 'Solomon Islands', 'Micronesia', 'Kiribati', 'Marshall Islands',
    'Palau', 'Nauru', 'Tuvalu', 'New Caledonia', 'French Polynesia', 'Guam'
  ]
};

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

// Get static pages
function getStaticUrls() {
  const now = new Date().toISOString();
  return [
    { url: `${BASE_URL}/`, lastmod: now, changefreq: 'weekly', priority: 1 },
    { url: `${BASE_URL}/about/`, lastmod: now, changefreq: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/`, lastmod: now, changefreq: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/portfolio/`, lastmod: now, changefreq: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/blog/`, lastmod: now, changefreq: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/contact/`, lastmod: now, changefreq: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/where-we-serve/`, lastmod: now, changefreq: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/privacy/`, lastmod: now, changefreq: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/terms/`, lastmod: now, changefreq: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/data-deletion/`, lastmod: now, changefreq: 'monthly', priority: 0.5 },
    // Blog posts
    ...blogData.map(post => ({
      url: `${BASE_URL}/blog/${post.slug}/`,
      lastmod: new Date(post.date).toISOString(),
      changefreq: 'monthly',
      priority: 0.6
    }))
  ];
}

// Get all countries
async function getAllCountries() {
  try {
    const countries = await getAllCountriesAPI();
    return countries || [];
  } catch {
    return locationData.map(c => ({ name: c.name }));
  }
}

// Get states for a region
async function getStatesForRegion(region: string) {
  const countries = REGION_COUNTRIES[region] || [];
  const urls: Array<{ url: string; lastmod: string; changefreq: string; priority: number }> = [];
  const now = new Date().toISOString();

  for (const countryName of countries) {
    try {
      const states = await getStatesByCountryAPI(countryName);
      const countrySlug = toSlug(countryName);

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

  return urls;
}

// Get cities chunk
async function getCitiesChunk(chunkNumber: number) {
  const urls: Array<{ url: string; lastmod: string; changefreq: string; priority: number }> = [];
  const now = new Date().toISOString();

  // Define priority countries for each chunk - expanded for 10M+ pages
  const chunkCountries: Record<number, string[]> = {
    1: ['United States'],
    2: ['Canada', 'United Kingdom'],
    3: ['Australia', 'Germany'],
    4: ['France', 'India'],
    5: ['China', 'Japan'],
    6: ['Brazil', 'Mexico'],
    7: ['Italy', 'Spain', 'Netherlands'],
    8: ['Sweden', 'Norway', 'Denmark', 'Finland'],
    9: ['South Korea', 'Singapore', 'Malaysia', 'Thailand'],
    10: ['Pakistan', 'Bangladesh', 'Indonesia', 'Vietnam', 'Philippines']
  };

  const countries = chunkCountries[chunkNumber] || [];

  for (const countryName of countries) {
    try {
      const states = await getStatesByCountryAPI(countryName);
      const countrySlug = toSlug(countryName);

      for (const state of states.slice(0, 15)) {
        try {
          const cities = await getCitiesByStateAPI(countryName, state.name);
          const stateSlug = toSlug(state.name);

          for (const city of cities.slice(0, 50)) {
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
    } catch {
      // Continue
    }

    if (urls.length >= MAX_URLS_PER_SITEMAP) break;
  }

  return urls;
}

// Get services chunk
async function getServicesChunk(chunkNumber: number) {
  const urls: Array<{ url: string; lastmod: string; changefreq: string; priority: number }> = [];
  const now = new Date().toISOString();

  // Import site structure
  const { enrichedSiteStructure } = await import('@/lib/site-structure');

  // Define priority countries for each chunk - expanded for 10M+ pages
  const chunkCountries: Record<number, string[]> = {
    1: ['United States'],
    2: ['Canada', 'United Kingdom'],
    3: ['Australia', 'Germany'],
    4: ['India', 'France'],
    5: ['Japan', 'China'],
    6: ['Brazil', 'Mexico', 'Italy'],
    7: ['Spain', 'Netherlands', 'Sweden'],
    8: ['South Korea', 'Singapore', 'Malaysia'],
    9: ['Thailand', 'Vietnam', 'Indonesia'],
    10: ['Pakistan', 'Bangladesh', 'Philippines', 'UAE', 'Saudi Arabia']
  };

  const countries = chunkCountries[chunkNumber] || [];

  for (const countryName of countries) {
    try {
      const states = await getStatesByCountryAPI(countryName);
      const countrySlug = toSlug(countryName);

      for (const state of states.slice(0, 10)) {
        try {
          const cities = await getCitiesByStateAPI(countryName, state.name);
          const stateSlug = toSlug(state.name);

          for (const city of cities.slice(0, 20)) {
            const citySlug = toSlug(city.name);
            const basePath = `${BASE_URL}/where-we-serve/${countrySlug}/${stateSlug}/${citySlug}`;

            // Add pillar pages (5-level)
            for (const pillar of enrichedSiteStructure.slice(0, 8)) {
              urls.push({
                url: `${basePath}/${pillar.slug}/`,
                lastmod: now,
                changefreq: 'monthly',
                priority: 0.4
              });

              // Add cluster pages (6-level)
              for (const cluster of pillar.clusters.slice(0, 5)) {
                urls.push({
                  url: `${basePath}/${pillar.slug}/${cluster.slug}/`,
                  lastmod: now,
                  changefreq: 'monthly',
                  priority: 0.35
                });
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
    } catch {
      // Continue
    }

    if (urls.length >= MAX_URLS_PER_SITEMAP) break;
  }

  return urls;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = await params;
  const sitemapType = type.replace('.xml', '');

  console.log(`Generating sitemap: ${sitemapType}`);

  let urls: Array<{ url: string; lastmod?: string; changefreq?: string; priority?: number }> = [];

  try {
    if (sitemapType === 'static') {
      urls = getStaticUrls();
    }
    else if (sitemapType === 'countries') {
      const countries = await getAllCountries();
      const now = new Date().toISOString();
      urls = countries.map(c => ({
        url: `${BASE_URL}/where-we-serve/${toSlug(c.name)}/`,
        lastmod: now,
        changefreq: 'monthly',
        priority: 0.7
      }));
    }
    else if (sitemapType.startsWith('states-')) {
      const region = sitemapType.replace('states-', '');
      urls = await getStatesForRegion(region);
    }
    else if (sitemapType.startsWith('cities-')) {
      const chunkNum = parseInt(sitemapType.replace('cities-', ''), 10);
      urls = await getCitiesChunk(chunkNum);
    }
    else if (sitemapType.startsWith('services-')) {
      const chunkNum = parseInt(sitemapType.replace('services-', ''), 10);
      urls = await getServicesChunk(chunkNum);
    }
    else {
      return NextResponse.json({ error: 'Invalid sitemap type' }, { status: 404 });
    }

    console.log(`Generated ${urls.length} URLs for sitemap: ${sitemapType}`);

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
      type: sitemapType
    }, { status: 500 });
  }
}
