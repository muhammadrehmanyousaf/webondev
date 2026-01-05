import { MetadataRoute } from 'next';
import { blogData } from '@/lib/blog-data';
import { locationData } from '@/lib/location-data';
import { getAllCountriesAPI, getStatesByCountryAPI, getCitiesByStateAPI } from '@/lib/location-api';
import { toSlug } from '@/lib/slug';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.webondev.com';

  // Static pages
  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/where-we-serve/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/data-deletion/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];

  // Blog posts
  const blogPosts = blogData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Fetch ALL countries from API (250+ countries!)
  let allCountries: any[] = [];
  try {
    const countriesResponse = await getAllCountriesAPI();
    allCountries = countriesResponse || [];
    console.log(`Fetched ${allCountries.length} countries from API`);
  } catch (error) {
    console.error('Failed to fetch countries from API, using fallback data');
    allCountries = locationData.map(country => ({
      name: country.name,
      code: country.slug
    }));
  }

  // Tier 1: Major countries - get more states and cities
  const tier1Countries = [
    'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany',
    'France', 'India', 'China', 'Japan', 'Brazil', 'Mexico', 'Italy',
    'Spain', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland',
    'Switzerland', 'Austria', 'Belgium', 'Ireland', 'New Zealand',
    'South Korea', 'Singapore', 'Malaysia', 'Thailand', 'Vietnam',
    'Philippines', 'Indonesia', 'Pakistan', 'Bangladesh', 'Sri Lanka',
    'Russia', 'Poland', 'Turkey', 'Saudi Arabia', 'United Arab Emirates',
    'South Africa', 'Nigeria', 'Egypt', 'Kenya', 'Argentina', 'Colombia',
    'Chile', 'Peru', 'Venezuela', 'Portugal', 'Greece', 'Czech Republic',
    'Romania', 'Hungary', 'Ukraine', 'Israel', 'Qatar', 'Kuwait', 'Bahrain',
    'Oman', 'Morocco', 'Tunisia', 'Algeria', 'Ghana', 'Tanzania', 'Ethiopia'
  ];

  // Tier 2: All other countries
  const tier1CountrySet = new Set(tier1Countries);
  const tier1List = allCountries.filter(c => tier1CountrySet.has(c.name));
  const tier2List = allCountries.filter(c => !tier1CountrySet.has(c.name));

  // ALL Country pages (250+ countries!)
  const countryPages = allCountries.map((country) => ({
    url: `${baseUrl}/where-we-serve/${toSlug(country.name)}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  let allStatePages: any[] = [];
  let allCityPages: any[] = [];
  let allCityServicePages: any[] = [];

  // Process Tier 1 countries (major countries - more depth)
  console.log(`Processing ${tier1List.length} Tier 1 countries...`);
  const batchSize = 5;
  for (let i = 0; i < tier1List.length; i += batchSize) {
    const batch = tier1List.slice(i, i + batchSize);

    await Promise.all(batch.map(async (country) => {
      try {
        const states = await getStatesByCountryAPI(country.name);
        const countrySlug = toSlug(country.name);

        // Add ALL state pages for tier 1 countries
        const statePages = states.map((state) => ({
          url: `${baseUrl}/where-we-serve/${countrySlug}/${toSlug(state.name)}/`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        }));
        allStatePages.push(...statePages);

        // Fetch cities for top 10 states per tier 1 country
        const statesToProcess = states.slice(0, 10);
        await Promise.all(statesToProcess.map(async (state) => {
          try {
            const cities = await getCitiesByStateAPI(country.name, state.name);
            const stateSlug = toSlug(state.name);

            // Add top 20 cities per state for tier 1 countries
            const cityPages = cities.slice(0, 20).map((city) => ({
              url: `${baseUrl}/where-we-serve/${countrySlug}/${stateSlug}/${toSlug(city.name)}/`,
              lastModified: new Date(),
              changeFrequency: 'monthly' as const,
              priority: 0.5,
            }));
            allCityPages.push(...cityPages);

            // Add service pages for top 8 cities
            const topCities = cities.slice(0, 8);
            const { enrichedSiteStructure } = await import('@/lib/site-structure');

            const cityServicePages = topCities.flatMap((city) => {
              const citySlug = toSlug(city.name);
              const basePath = `${baseUrl}/where-we-serve/${countrySlug}/${stateSlug}/${citySlug}`;

              // Get top 6 pillars for 5-level URLs
              const pillarPages = enrichedSiteStructure.slice(0, 6).map((pillar) => ({
                url: `${basePath}/${pillar.slug}/`,
                lastModified: new Date(),
                changeFrequency: 'monthly' as const,
                priority: 0.4,
              }));

              // Get top 3 pillars with their top 4 clusters for 6-level URLs
              const clusterPages = enrichedSiteStructure.slice(0, 3).flatMap((pillar) =>
                pillar.clusters.slice(0, 4).map((cluster) => ({
                  url: `${basePath}/${pillar.slug}/${cluster.slug}/`,
                  lastModified: new Date(),
                  changeFrequency: 'monthly' as const,
                  priority: 0.35,
                }))
              );

              return [...pillarPages, ...clusterPages];
            });
            allCityServicePages.push(...cityServicePages);
          } catch (error) {
            // Silently continue
          }
        }));
      } catch (error) {
        // Silently continue
      }
    }));
  }

  // Process Tier 2 countries (all other countries - less depth but still included!)
  console.log(`Processing ${tier2List.length} Tier 2 countries...`);
  for (let i = 0; i < tier2List.length; i += batchSize) {
    const batch = tier2List.slice(i, i + batchSize);

    await Promise.all(batch.map(async (country) => {
      try {
        const states = await getStatesByCountryAPI(country.name);
        const countrySlug = toSlug(country.name);

        // Add ALL state pages for tier 2 countries too
        const statePages = states.map((state) => ({
          url: `${baseUrl}/where-we-serve/${countrySlug}/${toSlug(state.name)}/`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.55,
        }));
        allStatePages.push(...statePages);

        // Fetch cities for top 5 states per tier 2 country
        const statesToProcess = states.slice(0, 5);
        await Promise.all(statesToProcess.map(async (state) => {
          try {
            const cities = await getCitiesByStateAPI(country.name, state.name);
            const stateSlug = toSlug(state.name);

            // Add top 10 cities per state for tier 2 countries
            const cityPages = cities.slice(0, 10).map((city) => ({
              url: `${baseUrl}/where-we-serve/${countrySlug}/${stateSlug}/${toSlug(city.name)}/`,
              lastModified: new Date(),
              changeFrequency: 'monthly' as const,
              priority: 0.45,
            }));
            allCityPages.push(...cityPages);

            // Add service pages for top 3 cities only for tier 2
            const topCities = cities.slice(0, 3);
            const { enrichedSiteStructure } = await import('@/lib/site-structure');

            const cityServicePages = topCities.flatMap((city) => {
              const citySlug = toSlug(city.name);
              const basePath = `${baseUrl}/where-we-serve/${countrySlug}/${stateSlug}/${citySlug}`;

              // Get top 4 pillars
              const pillarPages = enrichedSiteStructure.slice(0, 4).map((pillar) => ({
                url: `${basePath}/${pillar.slug}/`,
                lastModified: new Date(),
                changeFrequency: 'monthly' as const,
                priority: 0.35,
              }));

              return pillarPages;
            });
            allCityServicePages.push(...cityServicePages);
          } catch (error) {
            // Silently continue
          }
        }));
      } catch (error) {
        // Silently continue
      }
    }));
  }

  // Location pages from existing location data as fallback
  const statePages = locationData.flatMap((country) =>
    country.states.map((state) => ({
      url: `${baseUrl}/where-we-serve/${country.slug}/${state.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  const cityPages = locationData.flatMap((country) =>
    country.states.flatMap((state) =>
      state.cities.map((city) => ({
        url: `${baseUrl}/where-we-serve/${country.slug}/${state.slug}/${city.slug}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
      }))
    )
  );

  const servicePages = locationData.flatMap((country) =>
    country.states.flatMap((state) =>
      state.cities.flatMap((city) =>
        city.services.map((service) => ({
          url: `${baseUrl}/where-we-serve/${country.slug}/${state.slug}/${city.slug}/${service.slug}/`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.4,
        }))
      )
    )
  );

  // Service pages from site structure
  const { getAllSlugs } = await import('@/lib/site-structure');
  const serviceSlugs = getAllSlugs();

  const generalServicePages = serviceSlugs.map((service) => ({
    url: `${baseUrl}/${service}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Additional location-based service pages for top countries
  const topCountrySlugs = tier1Countries.slice(0, 20).map(c => toSlug(c));
  const additionalServicePages = topCountrySlugs.flatMap((country) =>
    serviceSlugs.slice(0, 15).map((service) => ({
      url: `${baseUrl}/where-we-serve/${country}/${service}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  // Combine all sitemap entries
  const allEntries = [
    ...staticPages,
    ...blogPosts,
    ...countryPages,
    ...allStatePages,
    ...allCityPages,
    ...allCityServicePages,
    ...statePages,
    ...cityPages,
    ...servicePages,
    ...generalServicePages,
    ...additionalServicePages
  ];

  // Remove duplicates and filter out invalid URLs
  const uniqueEntries = allEntries
    .filter((entry, index, self) =>
      index === self.findIndex(e => e.url === entry.url)
    )
    .filter(entry => {
      const invalidPatterns = [
        /\$/,
        /\/careers$/,
        /\/5$/,
        /\/[0-9]+$/,
        /\/undefined/,
        /\/null/,
      ];
      return !invalidPatterns.some(pattern => pattern.test(entry.url));
    });

  console.log('='.repeat(50));
  console.log(`🌍 SITEMAP GENERATED WITH ${uniqueEntries.length} URLS!`);
  console.log('='.repeat(50));
  console.log(`📄 Static pages: ${staticPages.length}`);
  console.log(`📝 Blog posts: ${blogPosts.length}`);
  console.log(`🌎 Country pages: ${countryPages.length}`);
  console.log(`🏛️ State pages: ${allStatePages.length + statePages.length}`);
  console.log(`🏙️ City pages: ${allCityPages.length + cityPages.length}`);
  console.log(`💼 City service pages: ${allCityServicePages.length}`);
  console.log(`🔧 Service pages: ${servicePages.length + generalServicePages.length + additionalServicePages.length}`);
  console.log('='.repeat(50));

  return uniqueEntries;
}
