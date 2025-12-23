export const toSlug = (value: string): string => {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

export const fromSlugMatch = (slug: string, candidates: string[]): string | undefined => {
  const normalized = slug.toLowerCase();
  const map = new Map<string, string>();
  for (const c of candidates) {
    map.set(toSlug(c), c);
  }
  return map.get(normalized);
};

// Country code to name mapping for URL matching
const COUNTRY_CODE_MAP: Record<string, string> = {
  'gb': 'United Kingdom',
  'uk': 'United Kingdom',
  'us': 'United States',
  'usa': 'United States',
  'ae': 'United Arab Emirates',
  'uae': 'United Arab Emirates',
  'ca': 'Canada',
  'au': 'Australia',
  'de': 'Germany',
  'fr': 'France',
  'in': 'India',
  'jp': 'Japan',
  'cn': 'China',
  'br': 'Brazil',
  'mx': 'Mexico',
  'es': 'Spain',
  'it': 'Italy',
  'nl': 'Netherlands',
  'se': 'Sweden',
  'no': 'Norway',
  'dk': 'Denmark',
  'fi': 'Finland',
  'ch': 'Switzerland',
  'at': 'Austria',
  'be': 'Belgium',
  'ie': 'Ireland',
  'nz': 'New Zealand',
  'za': 'South Africa',
  'sg': 'Singapore',
  'kr': 'South Korea',
  'my': 'Malaysia',
  'th': 'Thailand',
  'vn': 'Vietnam',
  'ph': 'Philippines',
  'id': 'Indonesia',
  'pk': 'Pakistan',
  'bd': 'Bangladesh',
  'sa': 'Saudi Arabia',
  'il': 'Israel',
  'pl': 'Poland',
  'pt': 'Portugal',
  'ru': 'Russia',
  'ua': 'Ukraine',
  'tr': 'Turkey',
  'eg': 'Egypt',
  'ng': 'Nigeria',
  'ke': 'Kenya',
  'ar': 'Argentina',
  'cl': 'Chile',
  'co': 'Colombia',
  'pe': 'Peru',
  've': 'Venezuela',
};

// Enhanced matching for countries that also checks country codes
export const fromCountrySlugMatch = (slug: string, candidates: string[]): string | undefined => {
  const normalized = slug.toLowerCase();

  // First check if it's a country code
  const countryFromCode = COUNTRY_CODE_MAP[normalized];
  if (countryFromCode && candidates.includes(countryFromCode)) {
    return countryFromCode;
  }

  // Fall back to regular slug matching
  const map = new Map<string, string>();
  for (const c of candidates) {
    map.set(toSlug(c), c);
  }
  return map.get(normalized);
};


