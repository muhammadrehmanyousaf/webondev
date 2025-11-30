'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { enrichedSiteStructure as siteStructure } from '@/lib/site-structure';

interface ServicesDirectorySectionProps {
  title?: string;
  subtitle?: string;
  itemsPerPage?: number;
}

const ServicesDirectorySection: React.FC<ServicesDirectorySectionProps> = ({
  title = 'Explore our full services directory',
  subtitle = 'Web, mobile, AI/ML, data engineering, CRO, technical SEO, programmatic SEO, internationalization (i18n), accessibility (WCAG), PWAs, cloud & DevOps, performance, security, CRM, CDP, analytics, ecommerce, and 100+ more services',
  itemsPerPage = 40,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const items: Array<{ label: string; href: string }> = [];

  siteStructure.forEach((pillar) => {
    items.push({ label: pillar.title, href: `/${pillar.slug}` });
    pillar.clusters.forEach((cluster) => {
      items.push({ label: `${cluster.title}`, href: `/${pillar.slug}/${cluster.slug}` });
    });
  });

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    
    return pages;
  };

  return (
    <section className="py-20 bg-white animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h3>
          <p className="text-lg text-gray-600">{subtitle}</p>
          <p className="text-sm text-gray-500 mt-2">
            Showing {startIndex + 1}-{Math.min(endIndex, items.length)} of {items.length} service routes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {currentItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="group p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-200 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors leading-snug">
                  {item.label}
                </span>
                <span className="text-blue-500 group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
              <span className="text-xs text-gray-500 break-all">{item.href}</span>
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              aria-label="Previous page"
            >
              ← Previous
            </button>

            <div className="flex gap-1">
              {renderPageNumbers().map((page, index) => (
                <React.Fragment key={index}>
                  {page === '...' ? (
                    <span className="px-3 py-2 text-gray-400">...</span>
                  ) : (
                    <button
                      onClick={() => goToPage(page as number)}
                      className={`px-4 py-2 rounded-lg transition-all ${
                        currentPage === page
                          ? 'bg-blue-600 text-white font-semibold'
                          : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                      aria-label={`Go to page ${page}`}
                      aria-current={currentPage === page ? 'page' : undefined}
                    >
                      {page}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              aria-label="Next page"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesDirectorySection;