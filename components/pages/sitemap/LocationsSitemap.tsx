'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Flag, Building2, MapPin, ChevronDown } from 'lucide-react';
import { toSlug } from '@/lib/slug';

interface Country {
  name: string;
  flag?: string;
}

interface StateItem { name: string }
interface CityItem { name: string }

interface LocationsSitemapProps {
  countries: Country[];
  servicePillars: string[];
}

const LocationsSitemap: React.FC<LocationsSitemapProps> = ({ countries, servicePillars }) => {
  const [openCountry, setOpenCountry] = useState<string | null>(null);
  const [openStateKey, setOpenStateKey] = useState<string | null>(null);
  const [statesByCountry, setStatesByCountry] = useState<Record<string, StateItem[]>>({});
  const [citiesByStateKey, setCitiesByStateKey] = useState<Record<string, CityItem[]>>({});
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
  const [loadingCities, setLoadingCities] = useState<Record<string, boolean>>({});

  const toggleCountry = async (countryName: string) => {
    const key = countryName;
    const willOpen = openCountry !== countryName ? countryName : null;
    setOpenCountry(willOpen);
    if (willOpen && !statesByCountry[key] && !loadingStates[key]) {
      setLoadingStates((s) => ({ ...s, [key]: true }));
      try {
        const res = await fetch(`/api/locations/states?country=${encodeURIComponent(countryName)}`);
        const json = await res.json();
        setStatesByCountry((m) => ({ ...m, [key]: json?.data || [] }));
      } catch {
        setStatesByCountry((m) => ({ ...m, [key]: [] }));
      } finally {
        setLoadingStates((s) => ({ ...s, [key]: false }));
      }
    }
  };

  const toggleState = async (countryName: string, stateName: string) => {
    const key = `${countryName}|||${stateName}`;
    const willOpen = openStateKey !== key ? key : null;
    setOpenStateKey(willOpen);
    if (willOpen && !citiesByStateKey[key] && !loadingCities[key]) {
      setLoadingCities((s) => ({ ...s, [key]: true }));
      try {
        const res = await fetch(`/api/locations/cities?country=${encodeURIComponent(countryName)}&state=${encodeURIComponent(stateName)}`);
        const json = await res.json();
        setCitiesByStateKey((m) => ({ ...m, [key]: json?.data || [] }));
      } catch {
        setCitiesByStateKey((m) => ({ ...m, [key]: [] }));
      } finally {
        setLoadingCities((s) => ({ ...s, [key]: false }));
      }
    }
  };

  return (
    <div className="space-y-4">
      {countries.map((country) => (
        <div key={country.name} className="group border border-gray-100 rounded-2xl p-6">
          <button
            type="button"
            onClick={() => toggleCountry(country.name)}
            className="w-full flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{country.flag}</span>
              <Link href={`/where-we-serve/${toSlug(country.name)}`} className="font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                {country.name}
              </Link>
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${openCountry === country.name ? 'rotate-180' : ''}`} />
          </button>

          {openCountry === country.name && (
            <div className="mt-4 space-y-3">
              {loadingStates[country.name] && (
                <div className="text-sm text-gray-500">Loading states...</div>
              )}
              {!loadingStates[country.name] && (statesByCountry[country.name] || []).map((state) => {
                const stateKey = `${country.name}|||${state.name}`;
                const cities = citiesByStateKey[stateKey] || [];
                return (
                  <div key={state.name} className="group border border-gray-100 rounded-xl p-4 bg-white">
                    <button
                      type="button"
                      onClick={() => toggleState(country.name, state.name)}
                      className="w-full flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-gray-500" />
                        <Link href={`/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}`} className="font-medium text-gray-900 hover:text-blue-600 transition-colors">
                          {state.name}
                        </Link>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${openStateKey === stateKey ? 'rotate-180' : ''}`} />
                    </button>

                    {openStateKey === stateKey && (
                      <div className="mt-3 space-y-2">
                        {loadingCities[stateKey] && (
                          <div className="text-sm text-gray-500 pl-6">Loading cities...</div>
                        )}
                        {!loadingCities[stateKey] && cities.length === 0 && (
                          <div className="text-sm text-gray-500 pl-6">No cities available</div>
                        )}
                        {!loadingCities[stateKey] && cities.map((city) => (
                          <div key={city.name} className="border border-gray-100 rounded-lg p-3">
                            <div className="flex items-center gap-2 mb-2">
                              <MapPin className="w-4 h-4 text-gray-500" />
                              <Link href={`/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}`} className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
                                {city.name}
                              </Link>
                            </div>
                            <div className="flex flex-wrap gap-2 pl-6">
                              {servicePillars.map((pillar) => (
                                <Link
                                  key={`${city.name}-${pillar}`}
                                  href={`/where-we-serve/${toSlug(country.name)}/${toSlug(state.name)}/${toSlug(city.name)}/${toSlug(pillar)}`}
                                  className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full hover:bg-blue-100 transition-colors"
                                >
                                  {pillar.replace(/-/g, ' ')}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              {!loadingStates[country.name] && (statesByCountry[country.name]?.length || 0) === 0 && (
                <div className="text-sm text-gray-500">No states available</div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LocationsSitemap;
