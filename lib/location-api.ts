// Location API - Full coverage with AGGRESSIVE caching
// Uses external APIs for COMPLETE data (205 countries, all states, all cities)
// But with smart caching to minimize costs

type CountryAPI = {
  name: { common: string };
  cca2?: string;
  cca3?: string;
  currencies?: Record<string, { name: string; symbol: string }>;
  timezones?: string[];
  flag?: string;
};

export type Country = {
  name: string;
  code: string;
  flag: string;
  currencies: string[];
  timezones: string[];
};

export type State = {
  name: string;
};

export type City = {
  name: string;
};

// In-memory cache with LONG TTL (survives during build)
const memoryCache = new Map<string, { timestamp: number; data: unknown }>();
const HOUR = 1000 * 60 * 60;
const DAY = HOUR * 24;

async function cachedFetch<T>(key: string, fetcher: () => Promise<T>, ttlMs = DAY * 7): Promise<T> {
  const now = Date.now();
  const cached = memoryCache.get(key);
  if (cached && now - cached.timestamp < ttlMs) return cached.data as T;
  const data = await fetcher();
  memoryCache.set(key, { timestamp: now, data });
  return data as T;
}

/**
 * Get ALL countries (205+) - cached for 7 days
 */
export async function getAllCountriesAPI(): Promise<Country[]> {
  return cachedFetch('countries', async () => {
    try {
      // Use Next.js fetch cache - revalidate every 30 days (2592000 seconds)
      const res = await fetch('https://restcountries.com/v3.1/all', {
        next: { revalidate: 2592000 } // 30 days cache!
      });
      if (!res.ok) throw new Error('restcountries not ok');
      const json = (await res.json()) as CountryAPI[];
      const out = json
        .map((c) => ({
          name: c.name?.common ?? 'Unknown',
          code: c.cca2 || c.cca3 || c.name?.common || 'XX',
          flag: (c as Record<string, unknown>).flag as string || '',
          currencies: c.currencies ? Object.keys(c.currencies) : [],
          timezones: c.timezones || [],
        }))
        .filter((c) => !!c.name)
        .sort((a, b) => a.name.localeCompare(b.name));
      if (out.length) return out;
    } catch {
      // fallthrough to secondary source
    }

    // Secondary source: countriesnow
    try {
      const res2 = await fetch('https://countriesnow.space/api/v0.1/countries', {
        next: { revalidate: 2592000 } // 30 days cache!
      });
      const json2 = await res2.json();
      const list = (json2?.data as Record<string, unknown>[]) || [];
      const out2: Country[] = list
        .map((x) => ({
          name: x.country as string,
          code: (x.iso2 || x.iso3 || x.country) as string,
          flag: '',
          currencies: [],
          timezones: [],
        }))
        .filter((c) => !!c.name)
        .sort((a, b) => a.name.localeCompare(b.name));
      if (out2.length) return out2;
    } catch {
      // give up
    }

    return [];
  }, DAY * 30); // 30 days memory cache
}

/**
 * Get ALL states for a country - cached for 30 days
 */
export async function getStatesByCountryAPI(countryName: string): Promise<State[]> {
  return cachedFetch(`states:${countryName}`, async () => {
    try {
      const res = await fetch('https://countriesnow.space/api/v0.1/countries/states', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ country: countryName }),
        next: { revalidate: 2592000 }, // 30 days cache!
      });
      const json = await res.json();
      if (!json?.data?.states) return [];
      return (json.data.states as { name: string }[])
        .map((s) => ({ name: s.name }))
        .sort((a, b) => a.name.localeCompare(b.name));
    } catch {
      return [];
    }
  }, DAY * 30); // 30 days memory cache
}

/**
 * Get ALL cities for a state - cached for 30 days
 */
export async function getCitiesByStateAPI(countryName: string, stateName: string): Promise<City[]> {
  return cachedFetch(`cities:${countryName}:${stateName}`, async () => {
    try {
      const res = await fetch('https://countriesnow.space/api/v0.1/countries/state/cities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ country: countryName, state: stateName }),
        next: { revalidate: 2592000 }, // 30 days cache!
      });
      const json = await res.json();
      if (!json?.data) return [];
      return (json.data as string[])
        .map((name) => ({ name }))
        .sort((a, b) => a.name.localeCompare(b.name));
    } catch {
      return [];
    }
  }, DAY * 30); // 30 days memory cache
}
