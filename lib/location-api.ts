// Free APIs used:
// - Countries: https://restcountries.com/v3.1/all
// - States/Cities: https://countriesnow.space/api/v0.1/countries/states and /state/cities
// Note: We cache results in-memory on the server to avoid rate limits.

type CountryAPI = {
  name: { common: string };
  cca2?: string;
  cca3?: string;
  currencies?: Record<string, { name: string; symbol: string }>;
  timezones?: string[];
  flag?: string;
};

const memoryCache = new Map<string, { timestamp: number; data: any }>();
const HOUR = 1000 * 60 * 60;

async function cachedFetch<T>(key: string, fetcher: () => Promise<T>, ttlMs = HOUR): Promise<T> {
  const now = Date.now();
  const cached = memoryCache.get(key);
  if (cached && now - cached.timestamp < ttlMs) return cached.data as T;
  const data = await fetcher();
  memoryCache.set(key, { timestamp: now, data });
  return data as T;
}

export type Country = {
  name: string;
  code: string; // cca2 or cca3
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

export async function getAllCountriesAPI(): Promise<Country[]> {
  return cachedFetch('countries', async () => {
    // Primary source: restcountries
    try {
      const res = await fetch('https://restcountries.com/v3.1/all', { next: { revalidate: 86400 } });
      if (!res.ok) throw new Error('restcountries not ok');
      const json = (await res.json()) as CountryAPI[];
      const out = json
        .map((c) => ({
          name: c.name?.common ?? 'Unknown',
          code: c.cca2 || c.cca3 || c.name?.common || 'XX',
          flag: (c as any).flag || '',
          currencies: c.currencies ? Object.keys(c.currencies) : [],
          timezones: c.timezones || [],
        }))
        .filter((c) => !!c.name)
        .sort((a, b) => a.name.localeCompare(b.name));
      if (out.length) return out;
    } catch (e) {
      // fallthrough to secondary source
    }

    // Secondary source: countriesnow
    try {
      const res2 = await fetch('https://countriesnow.space/api/v0.1/countries', { next: { revalidate: 86400 } });
      const json2 = await res2.json();
      const list = (json2?.data as any[]) || [];
      const out2: Country[] = list
        .map((x) => ({
          name: x.country as string,
          code: x.iso2 || x.iso3 || x.country,
          flag: '',
          currencies: [],
          timezones: [],
        }))
        .filter((c) => !!c.name)
        .sort((a, b) => a.name.localeCompare(b.name));
      if (out2.length) return out2;
    } catch (e) {
      // give up
    }

    return [];
  }, 12 * HOUR);
}

export async function getStatesByCountryAPI(countryName: string): Promise<State[]> {
  return cachedFetch(`states:${countryName}`, async () => {
    const res = await fetch('https://countriesnow.space/api/v0.1/countries/states', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ country: countryName }),
      next: { revalidate: 86400 },
    });
    const json = await res.json();
    if (!json?.data?.states) return [];
    return (json.data.states as any[])
      .map((s) => ({ name: s.name as string }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, 12 * HOUR);
}

export async function getCitiesByStateAPI(countryName: string, stateName: string): Promise<City[]> {
  return cachedFetch(`cities:${countryName}:${stateName}`, async () => {
    const res = await fetch('https://countriesnow.space/api/v0.1/countries/state/cities', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ country: countryName, state: stateName }),
      next: { revalidate: 86400 },
    });
    const json = await res.json();
    if (!json?.data) return [];
    return (json.data as string[])
      .map((name) => ({ name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, 12 * HOUR);
}


