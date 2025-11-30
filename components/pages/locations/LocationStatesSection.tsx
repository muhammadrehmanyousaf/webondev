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
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {country.name}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> States</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our services across different states in {country.name}. Each state offers unique 
            local expertise and specialized solutions for your business needs.
          </p>
        </div>

        {/* States Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {country.states.map((state, index) => (
            <div
              key={state.slug}
              className="state-card group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 opacity-0 transform translate-y-10"
            >
              {/* State Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
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
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium"
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
                      className="px-3 py-1 bg-green-50 text-green-600 text-xs rounded-full font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group-hover:scale-105 transition-all duration-300">
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
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need Services in a Specific State?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Contact us to discuss how we can provide specialized software development services 
              tailored to your state's unique business environment and requirements.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
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
