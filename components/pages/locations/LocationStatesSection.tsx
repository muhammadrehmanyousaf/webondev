'use client';

import React, { useRef, useEffect, useState } from 'react';
import { MapPin, ArrowRight, Users, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Country } from '@/lib/location-data';

interface LocationStatesSectionProps {
  country: Country;
}

const LocationStatesSection = ({ country }: LocationStatesSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      const cards = document.querySelectorAll('.state-card');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('animate-fade-in-up');
        }, index * 200);
      });
    }
  }, [isInView]);

  const getTotalCities = (state: any) => {
    return state.cities.length;
  };

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Explore </span>
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">{country.name}</span>
            <span className="text-gray-900"> States</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
            Discover our services across different states in {country.name}. Each state offers unique 
            local expertise and specialized solutions for your business needs.
          </p>
        </div>

        {/* States Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {country.states.map((state, index) => (
            <div
              key={state.slug}
              className="state-card group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 opacity-0 transform translate-y-10"
            >
              {/* State Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {state.name}
                    </h3>
                    <p className="text-sm text-gray-500">{getTotalCities(state)} Cities</p>
                  </div>
                </div>
              </div>

              {/* State Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {state.description}
              </p>

              {/* Cities Preview */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Major Cities:</h4>
                <div className="flex flex-wrap gap-2">
                  {state.cities.slice(0, 3).map((city, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-orange-600 text-xs rounded-full font-medium"
                    >
                      {city.name}
                    </span>
                  ))}
                  {state.cities.length > 3 && (
                    <span className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full font-medium">
                      +{state.cities.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Services Preview */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Available Services:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Web Development', 'Mobile Apps', 'UI/UX Design'].map((service, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-orange-50 text-orange-600 text-xs rounded-full font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Button asChild className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 text-white">
                <Link href={`/where-we-serve/${country.slug}/${state.slug}`} className="flex items-center justify-center gap-2">
                  Explore {state.name}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Need Services in a Specific State?
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Contact us to discuss how we can provide specialized software development services 
              tailored to your state's unique business environment and requirements.
            </p>
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <Link href="/contact" className="flex items-center gap-2">
                Get State-Specific Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationStatesSection;


