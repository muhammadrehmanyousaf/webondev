'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';

// =============================================================================
// LOCATION BREADCRUMB - Premium Emerald Green Design
// =============================================================================

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
    <nav className="bg-slate-900/80 backdrop-blur-xl border-b border-white/10 py-4 sticky top-20 z-30 hidden sm:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.ol
          className="flex items-center flex-wrap gap-2 text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {items.map((item, index) => (
            <motion.li
              key={item.href}
              className="flex items-center"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-slate-600 mx-2 flex-shrink-0" />
              )}

              {item.current ? (
                <span className="font-semibold bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent flex items-center gap-1.5">
                  {item.name === 'Home' ? (
                    <Home className="w-4 h-4 text-brand-400" />
                  ) : (
                    item.name
                  )}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-slate-400 hover:text-brand-400 transition-colors duration-200 flex items-center gap-1.5 font-medium group"
                >
                  {item.name === 'Home' ? (
                    <>
                      <Home className="w-4 h-4 group-hover:text-brand-400 transition-colors" />
                      <span className="sr-only">Home</span>
                    </>
                  ) : (
                    <span className="group-hover:underline underline-offset-4">{item.name}</span>
                  )}
                </Link>
              )}
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </nav>
  );
};

export default LocationBreadcrumb;
