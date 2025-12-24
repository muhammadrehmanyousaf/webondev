'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink, ArrowRight, Star, Calendar, Users, Sparkles,
  ChevronDown, CheckCircle2
} from 'lucide-react';
import { projects } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';

interface PortfolioGridSectionProps {
  selectedCategory?: string;
}

const gradients = [
  'from-brand-500 to-teal-500',
  'from-teal-500 to-cyan-500',
  'from-cyan-500 to-blue-500',
  'from-blue-500 to-purple-500',
  'from-purple-500 to-pink-500',
  'from-pink-500 to-rose-500',
];

const PortfolioGridSection = ({ selectedCategory = 'All' }: PortfolioGridSectionProps) => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const toggleExpand = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px]"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(16, 185, 129, 0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
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
            <Sparkles className="w-4 h-4" />
            <span>Featured Projects</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Our Featured</span>
            <br />
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Dive deep into our most successful projects and see how we&apos;ve helped
            businesses achieve their goals.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradients[index % gradients.length]} rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                <motion.div
                  className="relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-brand-500/50 transition-all duration-500"
                  whileHover={{ y: -5 }}
                  onClick={() => toggleExpand(project.id)}
                >
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-sm font-semibold text-white border border-white/20">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-semibold text-white">{project.rating}</span>
                    </div>

                    {/* Action Button */}
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank');
                      }}
                      className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-r from-brand-500 to-teal-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-brand-500/25"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 mb-4 leading-relaxed text-sm line-clamp-2">
                      {project.description}
                    </p>

                    {/* Client & Duration */}
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <div className="flex items-center gap-2 text-slate-500">
                        <Users className="w-4 h-4" />
                        <span className="text-slate-400">{project.client}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <Calendar className="w-4 h-4" />
                        <span className="text-slate-400">{project.duration}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/5 text-slate-400 text-xs rounded-lg border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-brand-500/10 text-brand-400 text-xs rounded-lg border border-brand-500/20">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Expandable Results */}
                    <AnimatePresence>
                      {expandedProject === project.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10">
                            <h4 className="font-semibold text-white mb-3 text-sm">Key Results:</h4>
                            <ul className="space-y-2">
                              {project.results.map((result, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="flex items-center gap-2 text-sm text-slate-300"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-brand-400 flex-shrink-0" />
                                  {result}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* CTA */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                      <button className="flex items-center gap-1 text-brand-400 font-semibold text-sm hover:gap-2 transition-all duration-300">
                        {expandedProject === project.id ? 'Hide Details' : 'View Details'}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedProject === project.id ? 'rotate-180' : ''}`} />
                      </button>
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="flex items-center gap-1 text-sm text-slate-400 hover:text-brand-400 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Full Case Study
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More */}
        {hasMore && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button
              variant="glow"
              size="lg"
              className="rounded-full px-10 group"
              onClick={() => setVisibleCount(prev => prev + 3)}
            >
              <Sparkles className="w-5 h-5" />
              Load More Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGridSection;
