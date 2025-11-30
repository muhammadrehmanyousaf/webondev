import { MetadataRoute } from 'next';
import { blogData } from '@/lib/blog-data';
import { locationData } from '@/lib/location-data';
import { getAllCountriesAPI, getStatesByCountryAPI, getCitiesByStateAPI } from '@/lib/location-api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://solutionsindicator.com';
  
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
    // Exclude admin pages from sitemap; do not add /admin/publish
  ];

  // Blog posts
  const blogPosts = blogData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Fetch all countries from API
  let allCountries: any[] = [];
  try {
    const countriesResponse = await getAllCountriesAPI();
    allCountries = countriesResponse || [];
  } catch (error) {
    console.error('Failed to fetch countries from API, using fallback data');
    // Fallback to existing location data
    allCountries = locationData.map(country => ({
      name: country.name,
      code: country.slug
    }));
  }

  // Focus on major countries for better performance
  const majorCountryNames = [
    'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 
    'France', 'India', 'China', 'Japan', 'Brazil', 'Mexico', 'Italy', 
    'Spain', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland',
    'Switzerland', 'Austria', 'Belgium', 'Ireland', 'New Zealand',
    'South Korea', 'Singapore', 'Malaysia', 'Thailand', 'Vietnam',
    'Philippines', 'Indonesia', 'Pakistan', 'Bangladesh', 'Sri Lanka'
  ];

  const filteredCountries = allCountries.filter(country => 
    majorCountryNames.includes(country.name)
  );

  // Location pages - Countries (from API)
  const countryPages = filteredCountries.map((country) => ({
    url: `${baseUrl}/where-we-serve/${country.code?.toLowerCase() || country.name?.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Fetch states for each country
  let allStatePages: any[] = [];
  let allCityPages: any[] = [];
  let allCityServicePages: any[] = [];
  
  // Process countries in smaller batches for better performance
  const batchSize = 8;
  for (let i = 0; i < filteredCountries.length; i += batchSize) {
    const batch = filteredCountries.slice(i, i + batchSize);
    
    await Promise.all(batch.map(async (country) => {
      try {
        // Fetch states for this country
        const states = await getStatesByCountryAPI(country.name);
        
        // Add state pages
        const statePages = states.map((state) => ({
          url: `${baseUrl}/where-we-serve/${country.code?.toLowerCase() || country.name?.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}/${state.name?.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}/`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        }));
        allStatePages.push(...statePages);

        // Fetch cities for each state (limit to 8 states per country)
        const statesToProcess = states.slice(0, 8);
        await Promise.all(statesToProcess.map(async (state) => {
          try {
            const cities = await getCitiesByStateAPI(country.name, state.name);
            
            // Add city pages (limit to 15 cities per state)
            const cityPages = cities.slice(0, 15).map((city) => ({
              url: `${baseUrl}/where-we-serve/${country.code?.toLowerCase() || country.name?.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}/${state.name?.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}/${city.name?.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}/`,
              lastModified: new Date(),
              changeFrequency: 'monthly' as const,
              priority: 0.5,
            }));
            allCityPages.push(...cityPages);

            // Add city service pages for top 5 cities per state
            const topCities = cities.slice(0, 5);
            const { getAllSlugs } = await import('@/lib/site-structure');
            const serviceSlugs = getAllSlugs().slice(0, 6); // Limit to 6 services for performance
            
            const cityServicePages = topCities.flatMap((city) =>
              serviceSlugs.map((service) => ({
                url: `${baseUrl}/where-we-serve/${country.code?.toLowerCase() || country.name?.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}/${state.name?.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}/${city.name?.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}/${service}/`,
                lastModified: new Date(),
                changeFrequency: 'monthly' as const,
                priority: 0.4,
              }))
            );
            allCityServicePages.push(...cityServicePages);
          } catch (error) {
            console.error(`Failed to fetch cities for ${state.name}, ${country.name}`);
          }
        }));
      } catch (error) {
        console.error(`Failed to fetch states for ${country.name}`);
      }
    }));
  }

  // Location pages - States and Cities (from existing location data as fallback)
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

  // Location pages - Services (from existing location data)
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

  // Service pages (from site structure)
  const { getAllSlugs } = await import('@/lib/site-structure');
  const serviceSlugs = getAllSlugs();
  
  const generalServicePages = serviceSlugs.map((service) => ({
    url: `${baseUrl}/${service}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Additional location-based service pages for major countries
  const majorCountries = ['united-states', 'canada', 'united-kingdom', 'australia', 'germany', 'france', 'india', 'china', 'japan', 'brazil'];
  const additionalServicePages = majorCountries.flatMap((country) =>
    serviceSlugs.slice(0, 10).map((service) => ({
      url: `${baseUrl}/${country}/${service}/`,
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

  // Remove duplicates based on URL and filter out invalid URLs
  const uniqueEntries = allEntries
    .filter((entry, index, self) => 
      index === self.findIndex(e => e.url === entry.url)
    )
    .filter(entry => {
      // Filter out invalid URLs
      const invalidPatterns = [
        /\$/, // URLs with $ symbol
        /\/careers$/, // careers page
        /\/5$/, // URLs ending with /5
        /\/[0-9]+$/, // URLs ending with numbers
        /\/undefined/, // URLs with undefined
        /\/null/, // URLs with null
      ];
      
      return !invalidPatterns.some(pattern => pattern.test(entry.url));
    });

  console.log(`Generated sitemap with ${uniqueEntries.length} entries`);
  console.log(`- Static pages: ${staticPages.length}`);
  console.log(`- Blog posts: ${blogPosts.length}`);
  console.log(`- Country pages: ${countryPages.length}`);
  console.log(`- State pages: ${allStatePages.length + statePages.length}`);
  console.log(`- City pages: ${allCityPages.length + cityPages.length}`);
  console.log(`- City service pages: ${allCityServicePages.length}`);
  console.log(`- Service pages: ${servicePages.length + generalServicePages.length + additionalServicePages.length}`);

  return uniqueEntries;
}
