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
    <nav className="bg-white border-b border-gray-200 py-4 mt-16 sticky top-16 z-30 hidden sm:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              
              {item.current ? (
                <span className="text-gray-900 font-medium">
                  {item.name === 'Home' ? (
                    <Home className="w-4 h-4" />
                  ) : (
                    item.name
                  )}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200 flex items-center gap-1"
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
