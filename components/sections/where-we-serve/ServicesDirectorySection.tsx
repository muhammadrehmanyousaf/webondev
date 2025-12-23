'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { enrichedSiteStructure as siteStructure } from '@/lib/site-structure';
import { ArrowRight, ChevronLeft, ChevronRight, Layers, Sparkles, Search, Grid3X3 } from 'lucide-react';

// =============================================================================
// SERVICES DIRECTORY SECTION - Premium Emerald Green Design
// =============================================================================

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
  const [searchQuery, setSearchQuery] = useState('');

  const items: Array<{ label: string; href: string; isPillar: boolean }> = [];

  siteStructure.forEach((pillar) => {
    items.push({ label: pillar.title, href: `/${pillar.slug}`, isPillar: true });
    pillar.clusters.forEach((cluster) => {
      items.push({ label: `${cluster.title}`, href: `/${pillar.slug}/${cluster.slug}`, isPillar: false });
    });
  });

  // Filter items based on search query
  const filteredItems = searchQuery
    ? items.filter(item =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.href.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : items;

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  // Reset to page 1 when search changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const renderPageNumbers = () => {
    const pages: (number | string)[] = [];
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
    <section className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px]"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px]"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-semibold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Grid3X3 className="w-4 h-4" />
            <span>Services Directory</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">{title.split(' ').slice(0, -2).join(' ')} </span>
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {title.split(' ').slice(-2).join(' ')}
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
            {subtitle}
          </p>

          {/* Search Bar */}
          <motion.div
            className="max-w-xl mx-auto mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-teal-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-white placeholder:text-slate-400 transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.p
            className="text-sm text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Showing{' '}
            <span className="text-brand-400 font-semibold">{startIndex + 1}-{Math.min(endIndex, filteredItems.length)}</span>
            {' '}of{' '}
            <span className="text-brand-400 font-semibold">{filteredItems.length}</span>
            {' '}service routes
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {currentItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.02, duration: 0.3 }}
              >
                <Link href={item.href} className="group relative block h-full">
                  {/* Glow Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.isPillar ? 'from-brand-500 to-teal-500' : 'from-teal-500 to-cyan-500'} rounded-xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-500`} />

                  <motion.div
                    className="relative h-full p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:border-brand-500/50 transition-all duration-300"
                    whileHover={{ y: -3, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-start gap-2">
                        {item.isPillar && (
                          <motion.div
                            className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-brand-500 to-teal-500 rounded-lg flex items-center justify-center"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <Layers className="w-3.5 h-3.5 text-white" />
                          </motion.div>
                        )}
                        <span className={`font-medium leading-snug transition-colors ${item.isPillar ? 'text-white group-hover:text-brand-400' : 'text-slate-300 group-hover:text-brand-400'}`}>
                          {item.label}
                        </span>
                      </div>
                      <motion.div
                        className="flex-shrink-0 text-brand-400"
                        initial={{ x: 0 }}
                        whileHover={{ x: 3 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                    <span className="text-xs text-slate-500 break-all block">{item.href}</span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-brand-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <p className="text-slate-400 text-lg">No services found matching your search.</p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="mt-4 text-brand-400 hover:text-brand-300 font-medium transition-colors"
            >
              Clear search
            </button>
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && filteredItems.length > 0 && (
          <motion.div
            className="flex items-center justify-center gap-2 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="group relative px-4 py-2 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              whileHover={{ scale: currentPage === 1 ? 1 : 1.05 }}
              whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
              aria-label="Previous page"
            >
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl group-hover:border-brand-500/50 transition-all" />
              <span className="relative flex items-center gap-2 text-slate-300 group-hover:text-white transition-colors">
                <ChevronLeft className="w-4 h-4" />
                Previous
              </span>
            </motion.button>

            <div className="flex gap-1.5">
              {renderPageNumbers().map((page, index) => (
                <React.Fragment key={index}>
                  {page === '...' ? (
                    <span className="px-3 py-2 text-slate-500">...</span>
                  ) : (
                    <motion.button
                      onClick={() => goToPage(page as number)}
                      className={`relative px-4 py-2 rounded-xl transition-all ${
                        currentPage === page
                          ? ''
                          : 'hover:bg-white/5'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Go to page ${page}`}
                      aria-current={currentPage === page ? 'page' : undefined}
                    >
                      {currentPage === page && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-brand-500 to-teal-500 rounded-xl"
                          layoutId="activePage"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span className={`relative font-semibold ${
                        currentPage === page ? 'text-white' : 'text-slate-400 hover:text-white'
                      }`}>
                        {page}
                      </span>
                    </motion.button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <motion.button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="group relative px-4 py-2 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              whileHover={{ scale: currentPage === totalPages ? 1 : 1.05 }}
              whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
              aria-label="Next page"
            >
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl group-hover:border-brand-500/50 transition-all" />
              <span className="relative flex items-center gap-2 text-slate-300 group-hover:text-white transition-colors">
                Next
                <ChevronRight className="w-4 h-4" />
              </span>
            </motion.button>
          </motion.div>
        )}

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {[
            { value: `${items.length}+`, label: 'Total Services' },
            { value: `${siteStructure.length}`, label: 'Service Categories' },
            { value: '100+', label: 'Technologies' },
            { value: '24/7', label: 'Global Delivery' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-teal-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <motion.div
                className="relative text-center bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-brand-500/50 transition-all duration-300"
                whileHover={{ y: -3 }}
              >
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesDirectorySection;
