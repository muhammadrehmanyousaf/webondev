// Static location data to eliminate external API calls
// This data is used at BUILD TIME to generate static pages
// No more runtime API calls = MASSIVE cost savings

export interface StaticCountry {
  name: string;
  code: string;
  flag: string;
  currencies: string[];
  timezones: string[];
}

export interface StaticState {
  name: string;
  countryName: string;
}

export interface StaticCity {
  name: string;
  stateName: string;
  countryName: string;
}

// Top countries for SEO (these will have static pages generated)
export const staticCountries: StaticCountry[] = [
  // North America
  { name: 'United States', code: 'US', flag: '🇺🇸', currencies: ['USD'], timezones: ['America/New_York', 'America/Los_Angeles', 'America/Chicago'] },
  { name: 'Canada', code: 'CA', flag: '🇨🇦', currencies: ['CAD'], timezones: ['America/Toronto', 'America/Vancouver'] },
  { name: 'Mexico', code: 'MX', flag: '🇲🇽', currencies: ['MXN'], timezones: ['America/Mexico_City'] },

  // Europe
  { name: 'United Kingdom', code: 'GB', flag: '🇬🇧', currencies: ['GBP'], timezones: ['Europe/London'] },
  { name: 'Germany', code: 'DE', flag: '🇩🇪', currencies: ['EUR'], timezones: ['Europe/Berlin'] },
  { name: 'France', code: 'FR', flag: '🇫🇷', currencies: ['EUR'], timezones: ['Europe/Paris'] },
  { name: 'Netherlands', code: 'NL', flag: '🇳🇱', currencies: ['EUR'], timezones: ['Europe/Amsterdam'] },
  { name: 'Spain', code: 'ES', flag: '🇪🇸', currencies: ['EUR'], timezones: ['Europe/Madrid'] },
  { name: 'Italy', code: 'IT', flag: '🇮🇹', currencies: ['EUR'], timezones: ['Europe/Rome'] },
  { name: 'Sweden', code: 'SE', flag: '🇸🇪', currencies: ['SEK'], timezones: ['Europe/Stockholm'] },
  { name: 'Switzerland', code: 'CH', flag: '🇨🇭', currencies: ['CHF'], timezones: ['Europe/Zurich'] },
  { name: 'Ireland', code: 'IE', flag: '🇮🇪', currencies: ['EUR'], timezones: ['Europe/Dublin'] },
  { name: 'Poland', code: 'PL', flag: '🇵🇱', currencies: ['PLN'], timezones: ['Europe/Warsaw'] },
  { name: 'Belgium', code: 'BE', flag: '🇧🇪', currencies: ['EUR'], timezones: ['Europe/Brussels'] },
  { name: 'Austria', code: 'AT', flag: '🇦🇹', currencies: ['EUR'], timezones: ['Europe/Vienna'] },
  { name: 'Denmark', code: 'DK', flag: '🇩🇰', currencies: ['DKK'], timezones: ['Europe/Copenhagen'] },
  { name: 'Norway', code: 'NO', flag: '🇳🇴', currencies: ['NOK'], timezones: ['Europe/Oslo'] },
  { name: 'Finland', code: 'FI', flag: '🇫🇮', currencies: ['EUR'], timezones: ['Europe/Helsinki'] },
  { name: 'Portugal', code: 'PT', flag: '🇵🇹', currencies: ['EUR'], timezones: ['Europe/Lisbon'] },

  // Asia Pacific
  { name: 'Australia', code: 'AU', flag: '🇦🇺', currencies: ['AUD'], timezones: ['Australia/Sydney', 'Australia/Melbourne'] },
  { name: 'New Zealand', code: 'NZ', flag: '🇳🇿', currencies: ['NZD'], timezones: ['Pacific/Auckland'] },
  { name: 'Singapore', code: 'SG', flag: '🇸🇬', currencies: ['SGD'], timezones: ['Asia/Singapore'] },
  { name: 'Japan', code: 'JP', flag: '🇯🇵', currencies: ['JPY'], timezones: ['Asia/Tokyo'] },
  { name: 'South Korea', code: 'KR', flag: '🇰🇷', currencies: ['KRW'], timezones: ['Asia/Seoul'] },
  { name: 'India', code: 'IN', flag: '🇮🇳', currencies: ['INR'], timezones: ['Asia/Kolkata'] },
  { name: 'Pakistan', code: 'PK', flag: '🇵🇰', currencies: ['PKR'], timezones: ['Asia/Karachi'] },
  { name: 'Bangladesh', code: 'BD', flag: '🇧🇩', currencies: ['BDT'], timezones: ['Asia/Dhaka'] },
  { name: 'Philippines', code: 'PH', flag: '🇵🇭', currencies: ['PHP'], timezones: ['Asia/Manila'] },
  { name: 'Malaysia', code: 'MY', flag: '🇲🇾', currencies: ['MYR'], timezones: ['Asia/Kuala_Lumpur'] },
  { name: 'Indonesia', code: 'ID', flag: '🇮🇩', currencies: ['IDR'], timezones: ['Asia/Jakarta'] },
  { name: 'Thailand', code: 'TH', flag: '🇹🇭', currencies: ['THB'], timezones: ['Asia/Bangkok'] },
  { name: 'Vietnam', code: 'VN', flag: '🇻🇳', currencies: ['VND'], timezones: ['Asia/Ho_Chi_Minh'] },

  // Middle East
  { name: 'United Arab Emirates', code: 'AE', flag: '🇦🇪', currencies: ['AED'], timezones: ['Asia/Dubai'] },
  { name: 'Saudi Arabia', code: 'SA', flag: '🇸🇦', currencies: ['SAR'], timezones: ['Asia/Riyadh'] },
  { name: 'Qatar', code: 'QA', flag: '🇶🇦', currencies: ['QAR'], timezones: ['Asia/Qatar'] },
  { name: 'Kuwait', code: 'KW', flag: '🇰🇼', currencies: ['KWD'], timezones: ['Asia/Kuwait'] },
  { name: 'Israel', code: 'IL', flag: '🇮🇱', currencies: ['ILS'], timezones: ['Asia/Jerusalem'] },
  { name: 'Turkey', code: 'TR', flag: '🇹🇷', currencies: ['TRY'], timezones: ['Europe/Istanbul'] },

  // Africa
  { name: 'South Africa', code: 'ZA', flag: '🇿🇦', currencies: ['ZAR'], timezones: ['Africa/Johannesburg'] },
  { name: 'Nigeria', code: 'NG', flag: '🇳🇬', currencies: ['NGN'], timezones: ['Africa/Lagos'] },
  { name: 'Egypt', code: 'EG', flag: '🇪🇬', currencies: ['EGP'], timezones: ['Africa/Cairo'] },
  { name: 'Kenya', code: 'KE', flag: '🇰🇪', currencies: ['KES'], timezones: ['Africa/Nairobi'] },

  // South America
  { name: 'Brazil', code: 'BR', flag: '🇧🇷', currencies: ['BRL'], timezones: ['America/Sao_Paulo'] },
  { name: 'Argentina', code: 'AR', flag: '🇦🇷', currencies: ['ARS'], timezones: ['America/Buenos_Aires'] },
  { name: 'Chile', code: 'CL', flag: '🇨🇱', currencies: ['CLP'], timezones: ['America/Santiago'] },
  { name: 'Colombia', code: 'CO', flag: '🇨🇴', currencies: ['COP'], timezones: ['America/Bogota'] },
];

// States/Provinces for top countries
export const staticStates: StaticState[] = [
  // United States
  { name: 'California', countryName: 'United States' },
  { name: 'New York', countryName: 'United States' },
  { name: 'Texas', countryName: 'United States' },
  { name: 'Florida', countryName: 'United States' },
  { name: 'Illinois', countryName: 'United States' },
  { name: 'Pennsylvania', countryName: 'United States' },
  { name: 'Ohio', countryName: 'United States' },
  { name: 'Georgia', countryName: 'United States' },
  { name: 'North Carolina', countryName: 'United States' },
  { name: 'Michigan', countryName: 'United States' },
  { name: 'New Jersey', countryName: 'United States' },
  { name: 'Virginia', countryName: 'United States' },
  { name: 'Washington', countryName: 'United States' },
  { name: 'Arizona', countryName: 'United States' },
  { name: 'Massachusetts', countryName: 'United States' },
  { name: 'Tennessee', countryName: 'United States' },
  { name: 'Indiana', countryName: 'United States' },
  { name: 'Missouri', countryName: 'United States' },
  { name: 'Maryland', countryName: 'United States' },
  { name: 'Wisconsin', countryName: 'United States' },
  { name: 'Colorado', countryName: 'United States' },
  { name: 'Minnesota', countryName: 'United States' },
  { name: 'South Carolina', countryName: 'United States' },
  { name: 'Alabama', countryName: 'United States' },
  { name: 'Louisiana', countryName: 'United States' },
  { name: 'Kentucky', countryName: 'United States' },
  { name: 'Oregon', countryName: 'United States' },
  { name: 'Oklahoma', countryName: 'United States' },
  { name: 'Connecticut', countryName: 'United States' },
  { name: 'Utah', countryName: 'United States' },
  { name: 'Nevada', countryName: 'United States' },
  { name: 'Iowa', countryName: 'United States' },
  { name: 'Arkansas', countryName: 'United States' },
  { name: 'Mississippi', countryName: 'United States' },
  { name: 'Kansas', countryName: 'United States' },

  // Canada
  { name: 'Ontario', countryName: 'Canada' },
  { name: 'Quebec', countryName: 'Canada' },
  { name: 'British Columbia', countryName: 'Canada' },
  { name: 'Alberta', countryName: 'Canada' },
  { name: 'Manitoba', countryName: 'Canada' },
  { name: 'Saskatchewan', countryName: 'Canada' },
  { name: 'Nova Scotia', countryName: 'Canada' },

  // United Kingdom
  { name: 'England', countryName: 'United Kingdom' },
  { name: 'Scotland', countryName: 'United Kingdom' },
  { name: 'Wales', countryName: 'United Kingdom' },
  { name: 'Northern Ireland', countryName: 'United Kingdom' },

  // Australia
  { name: 'New South Wales', countryName: 'Australia' },
  { name: 'Victoria', countryName: 'Australia' },
  { name: 'Queensland', countryName: 'Australia' },
  { name: 'Western Australia', countryName: 'Australia' },
  { name: 'South Australia', countryName: 'Australia' },

  // Germany
  { name: 'Bavaria', countryName: 'Germany' },
  { name: 'North Rhine-Westphalia', countryName: 'Germany' },
  { name: 'Baden-Wurttemberg', countryName: 'Germany' },
  { name: 'Berlin', countryName: 'Germany' },
  { name: 'Hamburg', countryName: 'Germany' },

  // India
  { name: 'Maharashtra', countryName: 'India' },
  { name: 'Karnataka', countryName: 'India' },
  { name: 'Tamil Nadu', countryName: 'India' },
  { name: 'Delhi', countryName: 'India' },
  { name: 'Telangana', countryName: 'India' },
  { name: 'Gujarat', countryName: 'India' },
  { name: 'West Bengal', countryName: 'India' },
  { name: 'Uttar Pradesh', countryName: 'India' },

  // Pakistan
  { name: 'Punjab', countryName: 'Pakistan' },
  { name: 'Sindh', countryName: 'Pakistan' },
  { name: 'Khyber Pakhtunkhwa', countryName: 'Pakistan' },
  { name: 'Balochistan', countryName: 'Pakistan' },
  { name: 'Islamabad Capital Territory', countryName: 'Pakistan' },
  { name: 'Gilgit-Baltistan', countryName: 'Pakistan' },

  // UAE
  { name: 'Dubai', countryName: 'United Arab Emirates' },
  { name: 'Abu Dhabi', countryName: 'United Arab Emirates' },
  { name: 'Sharjah', countryName: 'United Arab Emirates' },

  // Singapore (city-state)
  { name: 'Singapore', countryName: 'Singapore' },

  // France
  { name: 'Ile-de-France', countryName: 'France' },
  { name: 'Provence-Alpes-Cote d Azur', countryName: 'France' },
  { name: 'Auvergne-Rhone-Alpes', countryName: 'France' },

  // Netherlands
  { name: 'North Holland', countryName: 'Netherlands' },
  { name: 'South Holland', countryName: 'Netherlands' },

  // Spain
  { name: 'Catalonia', countryName: 'Spain' },
  { name: 'Madrid', countryName: 'Spain' },
  { name: 'Andalusia', countryName: 'Spain' },

  // Italy
  { name: 'Lombardy', countryName: 'Italy' },
  { name: 'Lazio', countryName: 'Italy' },
  { name: 'Veneto', countryName: 'Italy' },

  // Brazil
  { name: 'Sao Paulo', countryName: 'Brazil' },
  { name: 'Rio de Janeiro', countryName: 'Brazil' },
  { name: 'Minas Gerais', countryName: 'Brazil' },

  // Mexico
  { name: 'Mexico City', countryName: 'Mexico' },
  { name: 'Jalisco', countryName: 'Mexico' },
  { name: 'Nuevo Leon', countryName: 'Mexico' },

  // South Africa
  { name: 'Gauteng', countryName: 'South Africa' },
  { name: 'Western Cape', countryName: 'South Africa' },
  { name: 'KwaZulu-Natal', countryName: 'South Africa' },

  // Japan
  { name: 'Tokyo', countryName: 'Japan' },
  { name: 'Osaka', countryName: 'Japan' },
  { name: 'Kanagawa', countryName: 'Japan' },

  // South Korea
  { name: 'Seoul', countryName: 'South Korea' },
  { name: 'Busan', countryName: 'South Korea' },
  { name: 'Gyeonggi', countryName: 'South Korea' },

  // New Zealand
  { name: 'Auckland', countryName: 'New Zealand' },
  { name: 'Wellington', countryName: 'New Zealand' },
  { name: 'Canterbury', countryName: 'New Zealand' },

  // Ireland
  { name: 'Dublin', countryName: 'Ireland' },
  { name: 'Cork', countryName: 'Ireland' },

  // Switzerland
  { name: 'Zurich', countryName: 'Switzerland' },
  { name: 'Geneva', countryName: 'Switzerland' },

  // Sweden
  { name: 'Stockholm', countryName: 'Sweden' },
  { name: 'Vastra Gotaland', countryName: 'Sweden' },

  // Belgium
  { name: 'Brussels', countryName: 'Belgium' },
  { name: 'Flanders', countryName: 'Belgium' },

  // Austria
  { name: 'Vienna', countryName: 'Austria' },

  // Denmark
  { name: 'Capital Region', countryName: 'Denmark' },

  // Norway
  { name: 'Oslo', countryName: 'Norway' },

  // Finland
  { name: 'Uusimaa', countryName: 'Finland' },

  // Poland
  { name: 'Masovian', countryName: 'Poland' },
  { name: 'Lesser Poland', countryName: 'Poland' },

  // Portugal
  { name: 'Lisbon', countryName: 'Portugal' },
  { name: 'Porto', countryName: 'Portugal' },

  // Turkey
  { name: 'Istanbul', countryName: 'Turkey' },
  { name: 'Ankara', countryName: 'Turkey' },

  // Israel
  { name: 'Tel Aviv', countryName: 'Israel' },
  { name: 'Central District', countryName: 'Israel' },

  // Saudi Arabia
  { name: 'Riyadh', countryName: 'Saudi Arabia' },
  { name: 'Makkah', countryName: 'Saudi Arabia' },
  { name: 'Eastern Province', countryName: 'Saudi Arabia' },

  // Qatar
  { name: 'Doha', countryName: 'Qatar' },

  // Kuwait
  { name: 'Kuwait City', countryName: 'Kuwait' },

  // Egypt
  { name: 'Cairo', countryName: 'Egypt' },
  { name: 'Alexandria', countryName: 'Egypt' },

  // Nigeria
  { name: 'Lagos', countryName: 'Nigeria' },
  { name: 'Abuja', countryName: 'Nigeria' },

  // Kenya
  { name: 'Nairobi', countryName: 'Kenya' },

  // Malaysia
  { name: 'Kuala Lumpur', countryName: 'Malaysia' },
  { name: 'Selangor', countryName: 'Malaysia' },

  // Philippines
  { name: 'Metro Manila', countryName: 'Philippines' },
  { name: 'Cebu', countryName: 'Philippines' },

  // Indonesia
  { name: 'Jakarta', countryName: 'Indonesia' },
  { name: 'West Java', countryName: 'Indonesia' },

  // Thailand
  { name: 'Bangkok', countryName: 'Thailand' },

  // Vietnam
  { name: 'Ho Chi Minh City', countryName: 'Vietnam' },
  { name: 'Hanoi', countryName: 'Vietnam' },

  // Bangladesh
  { name: 'Dhaka', countryName: 'Bangladesh' },
  { name: 'Chittagong', countryName: 'Bangladesh' },

  // Argentina
  { name: 'Buenos Aires', countryName: 'Argentina' },

  // Chile
  { name: 'Santiago', countryName: 'Chile' },

  // Colombia
  { name: 'Bogota', countryName: 'Colombia' },
  { name: 'Antioquia', countryName: 'Colombia' },
];

// Top cities for SEO
export const staticCities: StaticCity[] = [
  // United States - California
  { name: 'Los Angeles', stateName: 'California', countryName: 'United States' },
  { name: 'San Francisco', stateName: 'California', countryName: 'United States' },
  { name: 'San Diego', stateName: 'California', countryName: 'United States' },
  { name: 'San Jose', stateName: 'California', countryName: 'United States' },
  { name: 'Sacramento', stateName: 'California', countryName: 'United States' },
  { name: 'Oakland', stateName: 'California', countryName: 'United States' },
  { name: 'Irvine', stateName: 'California', countryName: 'United States' },
  { name: 'Palo Alto', stateName: 'California', countryName: 'United States' },

  // United States - New York
  { name: 'New York City', stateName: 'New York', countryName: 'United States' },
  { name: 'Buffalo', stateName: 'New York', countryName: 'United States' },
  { name: 'Rochester', stateName: 'New York', countryName: 'United States' },
  { name: 'Albany', stateName: 'New York', countryName: 'United States' },

  // United States - Texas
  { name: 'Houston', stateName: 'Texas', countryName: 'United States' },
  { name: 'Dallas', stateName: 'Texas', countryName: 'United States' },
  { name: 'Austin', stateName: 'Texas', countryName: 'United States' },
  { name: 'San Antonio', stateName: 'Texas', countryName: 'United States' },
  { name: 'Fort Worth', stateName: 'Texas', countryName: 'United States' },

  // United States - Florida
  { name: 'Miami', stateName: 'Florida', countryName: 'United States' },
  { name: 'Orlando', stateName: 'Florida', countryName: 'United States' },
  { name: 'Tampa', stateName: 'Florida', countryName: 'United States' },
  { name: 'Jacksonville', stateName: 'Florida', countryName: 'United States' },

  // United States - Other major cities
  { name: 'Chicago', stateName: 'Illinois', countryName: 'United States' },
  { name: 'Phoenix', stateName: 'Arizona', countryName: 'United States' },
  { name: 'Philadelphia', stateName: 'Pennsylvania', countryName: 'United States' },
  { name: 'Seattle', stateName: 'Washington', countryName: 'United States' },
  { name: 'Denver', stateName: 'Colorado', countryName: 'United States' },
  { name: 'Boston', stateName: 'Massachusetts', countryName: 'United States' },
  { name: 'Atlanta', stateName: 'Georgia', countryName: 'United States' },
  { name: 'Detroit', stateName: 'Michigan', countryName: 'United States' },
  { name: 'Minneapolis', stateName: 'Minnesota', countryName: 'United States' },
  { name: 'Las Vegas', stateName: 'Nevada', countryName: 'United States' },
  { name: 'Portland', stateName: 'Oregon', countryName: 'United States' },
  { name: 'Charlotte', stateName: 'North Carolina', countryName: 'United States' },
  { name: 'Nashville', stateName: 'Tennessee', countryName: 'United States' },
  { name: 'Indianapolis', stateName: 'Indiana', countryName: 'United States' },
  { name: 'Columbus', stateName: 'Ohio', countryName: 'United States' },
  { name: 'Baltimore', stateName: 'Maryland', countryName: 'United States' },
  { name: 'Salt Lake City', stateName: 'Utah', countryName: 'United States' },
  { name: 'Kansas City', stateName: 'Missouri', countryName: 'United States' },
  { name: 'St Louis', stateName: 'Missouri', countryName: 'United States' },
  { name: 'Milwaukee', stateName: 'Wisconsin', countryName: 'United States' },
  { name: 'Raleigh', stateName: 'North Carolina', countryName: 'United States' },
  { name: 'Pittsburgh', stateName: 'Pennsylvania', countryName: 'United States' },

  // Canada
  { name: 'Toronto', stateName: 'Ontario', countryName: 'Canada' },
  { name: 'Vancouver', stateName: 'British Columbia', countryName: 'Canada' },
  { name: 'Montreal', stateName: 'Quebec', countryName: 'Canada' },
  { name: 'Calgary', stateName: 'Alberta', countryName: 'Canada' },
  { name: 'Edmonton', stateName: 'Alberta', countryName: 'Canada' },
  { name: 'Ottawa', stateName: 'Ontario', countryName: 'Canada' },
  { name: 'Winnipeg', stateName: 'Manitoba', countryName: 'Canada' },
  { name: 'Halifax', stateName: 'Nova Scotia', countryName: 'Canada' },

  // United Kingdom
  { name: 'London', stateName: 'England', countryName: 'United Kingdom' },
  { name: 'Manchester', stateName: 'England', countryName: 'United Kingdom' },
  { name: 'Birmingham', stateName: 'England', countryName: 'United Kingdom' },
  { name: 'Leeds', stateName: 'England', countryName: 'United Kingdom' },
  { name: 'Bristol', stateName: 'England', countryName: 'United Kingdom' },
  { name: 'Liverpool', stateName: 'England', countryName: 'United Kingdom' },
  { name: 'Edinburgh', stateName: 'Scotland', countryName: 'United Kingdom' },
  { name: 'Glasgow', stateName: 'Scotland', countryName: 'United Kingdom' },
  { name: 'Cardiff', stateName: 'Wales', countryName: 'United Kingdom' },
  { name: 'Belfast', stateName: 'Northern Ireland', countryName: 'United Kingdom' },
  { name: 'Cambridge', stateName: 'England', countryName: 'United Kingdom' },
  { name: 'Oxford', stateName: 'England', countryName: 'United Kingdom' },

  // Australia
  { name: 'Sydney', stateName: 'New South Wales', countryName: 'Australia' },
  { name: 'Melbourne', stateName: 'Victoria', countryName: 'Australia' },
  { name: 'Brisbane', stateName: 'Queensland', countryName: 'Australia' },
  { name: 'Perth', stateName: 'Western Australia', countryName: 'Australia' },
  { name: 'Adelaide', stateName: 'South Australia', countryName: 'Australia' },
  { name: 'Gold Coast', stateName: 'Queensland', countryName: 'Australia' },

  // Germany
  { name: 'Berlin', stateName: 'Berlin', countryName: 'Germany' },
  { name: 'Munich', stateName: 'Bavaria', countryName: 'Germany' },
  { name: 'Hamburg', stateName: 'Hamburg', countryName: 'Germany' },
  { name: 'Frankfurt', stateName: 'North Rhine-Westphalia', countryName: 'Germany' },
  { name: 'Cologne', stateName: 'North Rhine-Westphalia', countryName: 'Germany' },
  { name: 'Stuttgart', stateName: 'Baden-Wurttemberg', countryName: 'Germany' },

  // India
  { name: 'Mumbai', stateName: 'Maharashtra', countryName: 'India' },
  { name: 'Delhi', stateName: 'Delhi', countryName: 'India' },
  { name: 'Bangalore', stateName: 'Karnataka', countryName: 'India' },
  { name: 'Hyderabad', stateName: 'Telangana', countryName: 'India' },
  { name: 'Chennai', stateName: 'Tamil Nadu', countryName: 'India' },
  { name: 'Kolkata', stateName: 'West Bengal', countryName: 'India' },
  { name: 'Pune', stateName: 'Maharashtra', countryName: 'India' },
  { name: 'Ahmedabad', stateName: 'Gujarat', countryName: 'India' },
  { name: 'Noida', stateName: 'Uttar Pradesh', countryName: 'India' },
  { name: 'Gurugram', stateName: 'Delhi', countryName: 'India' },

  // Pakistan
  { name: 'Lahore', stateName: 'Punjab', countryName: 'Pakistan' },
  { name: 'Karachi', stateName: 'Sindh', countryName: 'Pakistan' },
  { name: 'Islamabad', stateName: 'Islamabad Capital Territory', countryName: 'Pakistan' },
  { name: 'Rawalpindi', stateName: 'Punjab', countryName: 'Pakistan' },
  { name: 'Faisalabad', stateName: 'Punjab', countryName: 'Pakistan' },
  { name: 'Multan', stateName: 'Punjab', countryName: 'Pakistan' },
  { name: 'Peshawar', stateName: 'Khyber Pakhtunkhwa', countryName: 'Pakistan' },
  { name: 'Quetta', stateName: 'Balochistan', countryName: 'Pakistan' },
  { name: 'Sialkot', stateName: 'Punjab', countryName: 'Pakistan' },
  { name: 'Gujranwala', stateName: 'Punjab', countryName: 'Pakistan' },

  // UAE
  { name: 'Dubai', stateName: 'Dubai', countryName: 'United Arab Emirates' },
  { name: 'Abu Dhabi', stateName: 'Abu Dhabi', countryName: 'United Arab Emirates' },
  { name: 'Sharjah', stateName: 'Sharjah', countryName: 'United Arab Emirates' },

  // Singapore
  { name: 'Singapore', stateName: 'Singapore', countryName: 'Singapore' },

  // France
  { name: 'Paris', stateName: 'Ile-de-France', countryName: 'France' },
  { name: 'Lyon', stateName: 'Auvergne-Rhone-Alpes', countryName: 'France' },
  { name: 'Marseille', stateName: 'Provence-Alpes-Cote d Azur', countryName: 'France' },

  // Netherlands
  { name: 'Amsterdam', stateName: 'North Holland', countryName: 'Netherlands' },
  { name: 'Rotterdam', stateName: 'South Holland', countryName: 'Netherlands' },
  { name: 'The Hague', stateName: 'South Holland', countryName: 'Netherlands' },

  // Spain
  { name: 'Madrid', stateName: 'Madrid', countryName: 'Spain' },
  { name: 'Barcelona', stateName: 'Catalonia', countryName: 'Spain' },
  { name: 'Valencia', stateName: 'Andalusia', countryName: 'Spain' },

  // Italy
  { name: 'Milan', stateName: 'Lombardy', countryName: 'Italy' },
  { name: 'Rome', stateName: 'Lazio', countryName: 'Italy' },
  { name: 'Turin', stateName: 'Lombardy', countryName: 'Italy' },

  // Brazil
  { name: 'Sao Paulo', stateName: 'Sao Paulo', countryName: 'Brazil' },
  { name: 'Rio de Janeiro', stateName: 'Rio de Janeiro', countryName: 'Brazil' },
  { name: 'Belo Horizonte', stateName: 'Minas Gerais', countryName: 'Brazil' },

  // Mexico
  { name: 'Mexico City', stateName: 'Mexico City', countryName: 'Mexico' },
  { name: 'Guadalajara', stateName: 'Jalisco', countryName: 'Mexico' },
  { name: 'Monterrey', stateName: 'Nuevo Leon', countryName: 'Mexico' },

  // South Africa
  { name: 'Johannesburg', stateName: 'Gauteng', countryName: 'South Africa' },
  { name: 'Cape Town', stateName: 'Western Cape', countryName: 'South Africa' },
  { name: 'Durban', stateName: 'KwaZulu-Natal', countryName: 'South Africa' },
  { name: 'Pretoria', stateName: 'Gauteng', countryName: 'South Africa' },

  // Japan
  { name: 'Tokyo', stateName: 'Tokyo', countryName: 'Japan' },
  { name: 'Osaka', stateName: 'Osaka', countryName: 'Japan' },
  { name: 'Yokohama', stateName: 'Kanagawa', countryName: 'Japan' },

  // South Korea
  { name: 'Seoul', stateName: 'Seoul', countryName: 'South Korea' },
  { name: 'Busan', stateName: 'Busan', countryName: 'South Korea' },
  { name: 'Incheon', stateName: 'Gyeonggi', countryName: 'South Korea' },

  // New Zealand
  { name: 'Auckland', stateName: 'Auckland', countryName: 'New Zealand' },
  { name: 'Wellington', stateName: 'Wellington', countryName: 'New Zealand' },
  { name: 'Christchurch', stateName: 'Canterbury', countryName: 'New Zealand' },

  // Ireland
  { name: 'Dublin', stateName: 'Dublin', countryName: 'Ireland' },
  { name: 'Cork', stateName: 'Cork', countryName: 'Ireland' },

  // Switzerland
  { name: 'Zurich', stateName: 'Zurich', countryName: 'Switzerland' },
  { name: 'Geneva', stateName: 'Geneva', countryName: 'Switzerland' },

  // Sweden
  { name: 'Stockholm', stateName: 'Stockholm', countryName: 'Sweden' },
  { name: 'Gothenburg', stateName: 'Vastra Gotaland', countryName: 'Sweden' },

  // Belgium
  { name: 'Brussels', stateName: 'Brussels', countryName: 'Belgium' },
  { name: 'Antwerp', stateName: 'Flanders', countryName: 'Belgium' },

  // Austria
  { name: 'Vienna', stateName: 'Vienna', countryName: 'Austria' },

  // Denmark
  { name: 'Copenhagen', stateName: 'Capital Region', countryName: 'Denmark' },

  // Norway
  { name: 'Oslo', stateName: 'Oslo', countryName: 'Norway' },

  // Finland
  { name: 'Helsinki', stateName: 'Uusimaa', countryName: 'Finland' },

  // Poland
  { name: 'Warsaw', stateName: 'Masovian', countryName: 'Poland' },
  { name: 'Krakow', stateName: 'Lesser Poland', countryName: 'Poland' },

  // Portugal
  { name: 'Lisbon', stateName: 'Lisbon', countryName: 'Portugal' },
  { name: 'Porto', stateName: 'Porto', countryName: 'Portugal' },

  // Turkey
  { name: 'Istanbul', stateName: 'Istanbul', countryName: 'Turkey' },
  { name: 'Ankara', stateName: 'Ankara', countryName: 'Turkey' },

  // Israel
  { name: 'Tel Aviv', stateName: 'Tel Aviv', countryName: 'Israel' },
  { name: 'Jerusalem', stateName: 'Central District', countryName: 'Israel' },

  // Saudi Arabia
  { name: 'Riyadh', stateName: 'Riyadh', countryName: 'Saudi Arabia' },
  { name: 'Jeddah', stateName: 'Makkah', countryName: 'Saudi Arabia' },
  { name: 'Dammam', stateName: 'Eastern Province', countryName: 'Saudi Arabia' },

  // Qatar
  { name: 'Doha', stateName: 'Doha', countryName: 'Qatar' },

  // Kuwait
  { name: 'Kuwait City', stateName: 'Kuwait City', countryName: 'Kuwait' },

  // Egypt
  { name: 'Cairo', stateName: 'Cairo', countryName: 'Egypt' },
  { name: 'Alexandria', stateName: 'Alexandria', countryName: 'Egypt' },

  // Nigeria
  { name: 'Lagos', stateName: 'Lagos', countryName: 'Nigeria' },
  { name: 'Abuja', stateName: 'Abuja', countryName: 'Nigeria' },

  // Kenya
  { name: 'Nairobi', stateName: 'Nairobi', countryName: 'Kenya' },

  // Malaysia
  { name: 'Kuala Lumpur', stateName: 'Kuala Lumpur', countryName: 'Malaysia' },
  { name: 'Petaling Jaya', stateName: 'Selangor', countryName: 'Malaysia' },

  // Philippines
  { name: 'Manila', stateName: 'Metro Manila', countryName: 'Philippines' },
  { name: 'Cebu City', stateName: 'Cebu', countryName: 'Philippines' },

  // Indonesia
  { name: 'Jakarta', stateName: 'Jakarta', countryName: 'Indonesia' },
  { name: 'Bandung', stateName: 'West Java', countryName: 'Indonesia' },

  // Thailand
  { name: 'Bangkok', stateName: 'Bangkok', countryName: 'Thailand' },

  // Vietnam
  { name: 'Ho Chi Minh City', stateName: 'Ho Chi Minh City', countryName: 'Vietnam' },
  { name: 'Hanoi', stateName: 'Hanoi', countryName: 'Vietnam' },

  // Bangladesh
  { name: 'Dhaka', stateName: 'Dhaka', countryName: 'Bangladesh' },
  { name: 'Chittagong', stateName: 'Chittagong', countryName: 'Bangladesh' },

  // Argentina
  { name: 'Buenos Aires', stateName: 'Buenos Aires', countryName: 'Argentina' },

  // Chile
  { name: 'Santiago', stateName: 'Santiago', countryName: 'Chile' },

  // Colombia
  { name: 'Bogota', stateName: 'Bogota', countryName: 'Colombia' },
  { name: 'Medellin', stateName: 'Antioquia', countryName: 'Colombia' },
];

// Helper functions
export function getStaticCountries(): StaticCountry[] {
  return staticCountries;
}

export function getStaticCountryByName(name: string): StaticCountry | undefined {
  return staticCountries.find(c => c.name.toLowerCase() === name.toLowerCase());
}

export function getStaticStatesByCountry(countryName: string): StaticState[] {
  return staticStates.filter(s => s.countryName.toLowerCase() === countryName.toLowerCase());
}

export function getStaticCitiesByState(countryName: string, stateName: string): StaticCity[] {
  return staticCities.filter(
    c => c.countryName.toLowerCase() === countryName.toLowerCase() &&
         c.stateName.toLowerCase() === stateName.toLowerCase()
  );
}

export function getStaticCityByName(countryName: string, stateName: string, cityName: string): StaticCity | undefined {
  return staticCities.find(
    c => c.countryName.toLowerCase() === countryName.toLowerCase() &&
         c.stateName.toLowerCase() === stateName.toLowerCase() &&
         c.name.toLowerCase() === cityName.toLowerCase()
  );
}

// Generate all static params for build time
export function generateAllLocationParams() {
  const params: { country: string; state?: string; city?: string }[] = [];

  // Add country-level params
  for (const country of staticCountries) {
    params.push({ country: country.name });

    // Add state-level params
    const states = getStaticStatesByCountry(country.name);
    for (const state of states) {
      params.push({ country: country.name, state: state.name });

      // Add city-level params
      const cities = getStaticCitiesByState(country.name, state.name);
      for (const city of cities) {
        params.push({ country: country.name, state: state.name, city: city.name });
      }
    }
  }

  return params;
}
