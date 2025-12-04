'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href: string;
  current?: boolean;
}

interface LocationBreadcrumbProps {
  items: BreadcrumbItem[];
}

const LocationBreadcrumb = ({ items }: LocationBreadcrumbProps) => {
  return (
    <nav className="bg-gradient-to-r from-white to-orange-50/50 border-b border-orange-200 py-3 sticky top-20 z-30 hidden sm:block shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-orange-300 mx-2" />
              )}
              
              {item.current ? (
                <span className="text-gray-900 font-semibold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  {item.name === 'Home' ? (
                    <Home className="w-4 h-4 text-orange-600" />
                  ) : (
                    item.name
                  )}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-orange-600 transition-colors duration-200 flex items-center gap-1 font-medium"
                >
                  {item.name === 'Home' ? (
                    <>
                      <Home className="w-4 h-4" />
                      <span className="sr-only">Home</span>
                    </>
                  ) : (
                    item.name
                  )}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default LocationBreadcrumb;

