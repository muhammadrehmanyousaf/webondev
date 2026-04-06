'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/portfolio-data';

// =============================================================================
// CATEGORIES
// =============================================================================

const categories = ['All', 'Web Development', 'Mobile Apps', 'E-commerce', 'SaaS', 'UI/UX Design'];

// =============================================================================
// PORTFOLIO SCHEMA (SEO)
// =============================================================================

const portfolioSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Web On Dev Portfolio - Software Development Projects',
  description: 'Featured software development projects by Web On Dev including web applications, mobile apps, e-commerce platforms, and SaaS products.',
  numberOfItems: projects.length,
  itemListElement: projects.map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'CreativeWork',
      name: project.title,
      description: project.description,
      url: `https://www.webondev.com/portfolio/${project.slug}`,
      image: project.image,
      creator: {
        '@type': 'Organization',
        name: 'Web On Dev',
        url: 'https://www.webondev.com',
      },
      genre: project.category,
      keywords: project.technologies.join(', '),
    },
  })),
};

// =============================================================================
// PROJECT CARD - BENTO STYLE
// =============================================================================

const ProjectCard = ({ project, index, tall = false }: { project: typeof projects[0]; index: number; tall?: boolean }) => {
  return (
    <motion.div
      className={`group ${tall ? 'row-span-2' : ''}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
    >
      <Link href={`/portfolio/${project.slug}`} className="block h-full">
        <div className={`relative ${tall ? 'h-full min-h-[260px] sm:min-h-[320px]' : 'h-[220px] sm:h-[250px]'} rounded-xl sm:rounded-2xl overflow-hidden`}>
          {/* Image */}
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            loading="lazy"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/5 group-hover:via-black/50 transition-all duration-300" />

          {/* Top: Category + Arrow */}
          <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-start justify-between">
            <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider border border-white/[0.1]">
              {project.category}
            </span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/[0.1] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
            </div>
          </div>

          {/* Bottom: Content */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-5">
            {/* Tech pills */}
            <div className={`flex flex-wrap gap-1 mb-1.5 sm:mb-2 ${tall ? '' : 'hidden sm:flex'}`}>
              {project.technologies.slice(0, tall ? 4 : 3).map((tech) => (
                <span
                  key={tech}
                  className="px-1.5 sm:px-2 py-0.5 bg-white/[0.08] backdrop-blur-sm text-[9px] sm:text-[10px] font-medium text-white/70 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className={`${tall ? 'text-base sm:text-lg lg:text-xl' : 'text-sm sm:text-base lg:text-lg'} font-bold text-white mb-0.5 sm:mb-1 leading-tight`}>
              {project.title}
            </h3>

            {/* Result stat */}
            <span className="text-brand-400 text-[10px] sm:text-[11px] font-semibold">
              {project.results[0]}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

// =============================================================================
// MAIN COMPONENT
// =============================================================================

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const firstProject = filteredProjects[0];
  const restProjects = filteredProjects.slice(1, 5);

  return (
    <>
      {/* Portfolio Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />

      <section className="relative py-12 sm:py-14 lg:py-20 overflow-hidden bg-[#030712]">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 50% 30% at 20% 50%, rgba(16,185,129,0.04), transparent 70%)',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-end justify-between gap-4 mb-5 sm:mb-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full gradient-border-subtle text-brand-400 text-xs font-medium mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                Portfolio
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1.5 leading-[1.1]">
                Work that speaks <span className="gradient-text">for itself</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Real projects. Real results.
              </p>
            </motion.div>

            <Link
              href="/portfolio"
              className="hidden sm:inline-flex items-center gap-2 text-brand-400 font-semibold text-sm hover:gap-3 transition-all duration-200 shrink-0"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-sm font-medium transition-all duration-200 ${
                  activeFilter === category
                    ? 'text-white'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.06] hover:border-white/[0.1]'
                }`}
              >
                {activeFilter === category && (
                  <motion.div
                    layoutId="activePortfolioFilter"
                    className="absolute inset-0 bg-brand-500 rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </motion.div>

          {/* Bento Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-2.5 sm:gap-3 lg:gap-4 mb-6 sm:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {firstProject && <ProjectCard project={firstProject} index={0} tall />}
              {restProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index + 1} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Mobile "View All" link + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2.5"
          >
            <Button asChild size="lg" className="rounded-full px-6 sm:px-8 text-xs sm:text-sm shadow-[0_0_30px_rgba(16,185,129,0.15)]">
              <Link href="/portfolio" className="flex items-center gap-2">
                View Full Portfolio
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-6 sm:px-8 text-xs sm:text-sm border-white/10 hover:border-white/20 hover:bg-white/[0.03]">
              <Link href="/contact">Start a Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
