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
  // Apply toSlug() to the incoming URL slug to handle special characters
  // This ensures URLs with accents (são-paulo) match the same as clean slugs (so-paulo)
  const normalized = toSlug(slug);
  const map = new Map<string, string>();
  for (const c of candidates) {
    map.set(toSlug(c), c);
  }
  return map.get(normalized);
};

// Country code to name mapping for URL matching
// Comprehensive list of ISO 3166-1 alpha-2 country codes
const COUNTRY_CODE_MAP: Record<string, string> = {
  // North America
  'us': 'United States',
  'usa': 'United States',
  'ca': 'Canada',
  'mx': 'Mexico',

  // Europe
  'gb': 'United Kingdom',
  'uk': 'United Kingdom',
  'de': 'Germany',
  'fr': 'France',
  'es': 'Spain',
  'it': 'Italy',
  'nl': 'Netherlands',
  'be': 'Belgium',
  'at': 'Austria',
  'ch': 'Switzerland',
  'se': 'Sweden',
  'no': 'Norway',
  'dk': 'Denmark',
  'fi': 'Finland',
  'ie': 'Ireland',
  'pt': 'Portugal',
  'pl': 'Poland',
  'cz': 'Czech Republic',
  'hu': 'Hungary',
  'ro': 'Romania',
  'bg': 'Bulgaria',
  'gr': 'Greece',
  'hr': 'Croatia',
  'sk': 'Slovakia',
  'si': 'Slovenia',
  'rs': 'Serbia',
  'ua': 'Ukraine',
  'ru': 'Russia',
  'lt': 'Lithuania',
  'lv': 'Latvia',
  'ee': 'Estonia',
  'lu': 'Luxembourg',
  'mt': 'Malta',
  'cy': 'Cyprus',
  'is': 'Iceland',

  // Asia Pacific
  'au': 'Australia',
  'nz': 'New Zealand',
  'jp': 'Japan',
  'cn': 'China',
  'in': 'India',
  'kr': 'South Korea',
  'sg': 'Singapore',
  'my': 'Malaysia',
  'th': 'Thailand',
  'vn': 'Vietnam',
  'ph': 'Philippines',
  'id': 'Indonesia',
  'pk': 'Pakistan',
  'bd': 'Bangladesh',
  'lk': 'Sri Lanka',
  'np': 'Nepal',
  'mm': 'Myanmar',
  'kh': 'Cambodia',
  'la': 'Laos',
  'tw': 'Taiwan',
  'hk': 'Hong Kong',
  'mo': 'Macau',

  // Middle East
  'ae': 'United Arab Emirates',
  'uae': 'United Arab Emirates',
  'sa': 'Saudi Arabia',
  'il': 'Israel',
  'tr': 'Turkey',
  'qa': 'Qatar',
  'kw': 'Kuwait',
  'bh': 'Bahrain',
  'om': 'Oman',
  'jo': 'Jordan',
  'lb': 'Lebanon',
  'iq': 'Iraq',
  'ir': 'Iran',

  // Africa
  'za': 'South Africa',
  'eg': 'Egypt',
  'ng': 'Nigeria',
  'ke': 'Kenya',
  'gh': 'Ghana',
  'tz': 'Tanzania',
  'ug': 'Uganda',
  'et': 'Ethiopia',
  'ma': 'Morocco',
  'dz': 'Algeria',
  'tn': 'Tunisia',
  'sn': 'Senegal',
  'ci': 'Ivory Coast',
  'cm': 'Cameroon',
  'zw': 'Zimbabwe',
  'zm': 'Zambia',
  'rw': 'Rwanda',
  'ao': 'Angola',
  'mz': 'Mozambique',

  // South America
  'br': 'Brazil',
  'ar': 'Argentina',
  'cl': 'Chile',
  'co': 'Colombia',
  'pe': 'Peru',
  've': 'Venezuela',
  'ec': 'Ecuador',
  'bo': 'Bolivia',
  'py': 'Paraguay',
  'uy': 'Uruguay',
  'sr': 'Suriname',
  'gy': 'Guyana',

  // Central America & Caribbean
  'pa': 'Panama',
  'cr': 'Costa Rica',
  'gt': 'Guatemala',
  'hn': 'Honduras',
  'sv': 'El Salvador',
  'ni': 'Nicaragua',
  'bz': 'Belize',
  'jm': 'Jamaica',
  'tt': 'Trinidad and Tobago',
  'do': 'Dominican Republic',
  'pr': 'Puerto Rico',
  'cu': 'Cuba',
  'ht': 'Haiti',
  'bs': 'Bahamas',
  'bb': 'Barbados',
};

// Enhanced matching for countries that also checks country codes
export const fromCountrySlugMatch = (slug: string, candidates: string[]): string | undefined => {
  const lowercased = slug.toLowerCase();

  // First check if it's a country code (like 'it', 'pk', 'mx')
  const countryFromCode = COUNTRY_CODE_MAP[lowercased];
  if (countryFromCode && candidates.includes(countryFromCode)) {
    return countryFromCode;
  }

  // Fall back to slug matching - apply toSlug() to handle special characters
  const normalized = toSlug(slug);
  const map = new Map<string, string>();
  for (const c of candidates) {
    map.set(toSlug(c), c);
  }
  return map.get(normalized);
};


