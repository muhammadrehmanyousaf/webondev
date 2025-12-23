'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Sparkles, Layers, Eye, Code2, Star, TrendingUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/portfolio-data';

// =============================================================================
// WORLD-CLASS PORTFOLIO SECTION - Premium Emerald Design
// =============================================================================

const categories = ['All', 'Web Development', 'Mobile Apps', 'E-commerce', 'SaaS', 'UI/UX Design'];

const categoryGradients: Record<string, string> = {
  'All': 'from-brand-500 to-teal-500',
  'Web Development': 'from-brand-500 to-cyan-500',
  'Mobile Apps': 'from-teal-500 to-blue-500',
  'E-commerce': 'from-brand-500 to-lime-500',
  'SaaS': 'from-cyan-500 to-indigo-500',
  'UI/UX Design': 'from-pink-500 to-rose-500',
};

// =============================================================================
// FEATURED PROJECT CARD - Hero card for the first project
// =============================================================================

const FeaturedProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      className="group relative md:col-span-2 lg:col-span-2 lg:row-span-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Link href={`/portfolio/${project.slug}`} className="block h-full">
        <motion.div
          className="relative h-full min-h-[450px] lg:min-h-[550px] rounded-3xl overflow-hidden cursor-pointer"
          onMouseMove={handleMouseMove}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background Image */}
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

          {/* Spotlight Effect */}
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(16,185,129,0.15), transparent 80%)`,
            }}
          />

          {/* Top Badges */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
            <motion.div
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-500 to-teal-500 rounded-full text-white text-sm font-bold shadow-lg shadow-brand-500/30"
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-4 h-4" />
              Featured Project
            </motion.div>
            <motion.div
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-white font-semibold text-sm">4.9</span>
            </motion.div>
          </div>

          {/* Quick Action Buttons */}
          <motion.div
            className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
            initial={{ y: -10 }}
            whileHover={{ y: 0 }}
          >
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(project.liveUrl, '_blank');
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-white/90 backdrop-blur-xl rounded-xl flex items-center justify-center shadow-xl hover:bg-white transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-brand-600" />
            </motion.button>
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(project.githubUrl, '_blank');
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-white/90 backdrop-blur-xl rounded-xl flex items-center justify-center shadow-xl hover:bg-white transition-colors"
            >
              <Github className="w-5 h-5 text-brand-600" />
            </motion.button>
          </motion.div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
            {/* Category */}
            <motion.span
              className="inline-block px-3 py-1 bg-white/10 backdrop-blur-xl rounded-lg text-brand-400 text-sm font-semibold mb-4 border border-white/10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {project.category}
            </motion.span>

            {/* Title */}
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors leading-tight">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-xl line-clamp-2">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.slice(0, 5).map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 bg-white/10 backdrop-blur-xl text-white text-sm rounded-lg border border-white/10 font-medium"
                >
                  {tech}
                </motion.span>
              ))}
              {project.technologies.length > 5 && (
                <span className="px-3 py-1.5 bg-brand-500/20 text-brand-400 text-sm rounded-lg border border-brand-500/30 font-medium">
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>

            {/* CTA */}
            <motion.div
              className="inline-flex items-center gap-3 text-white font-bold text-lg group-hover:gap-4 transition-all"
              whileHover={{ x: 5 }}
            >
              View Case Study
              <div className="w-10 h-10 bg-brand-500/20 backdrop-blur-xl rounded-full flex items-center justify-center group-hover:bg-brand-500/30 transition-colors border border-brand-500/30">
                <ArrowRight className="w-5 h-5" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

// =============================================================================
// PROJECT CARD - Standard card design
// =============================================================================

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <motion.div
        className={`absolute -inset-0.5 bg-gradient-to-r ${categoryGradients[project.category] || 'from-brand-500 to-teal-500'} rounded-2xl blur`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <Link href={`/portfolio/${project.slug}`} className="block">
        <motion.div
          className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-brand-500/50 transition-all duration-500"
          whileHover={{ y: -8 }}
        >
          {/* Image Container */}
          <div className="relative overflow-hidden h-56">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${categoryGradients[project.category] || 'from-brand-500 to-teal-500'} text-white text-xs font-bold shadow-lg`}>
                {project.category}
              </span>
            </div>

            {/* Hover Action Buttons */}
            <motion.div
              className="absolute top-4 right-4 flex gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
              transition={{ duration: 0.2 }}
            >
              <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(project.liveUrl, '_blank');
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-white/90 backdrop-blur-xl rounded-xl flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-brand-600" />
              </motion.button>
              <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(project.githubUrl, '_blank');
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-white/90 backdrop-blur-xl rounded-xl flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <Github className="w-4 h-4 text-brand-600" />
              </motion.button>
            </motion.div>

            {/* View Project Overlay */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-xl rounded-full text-brand-600 font-bold shadow-xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: isHovered ? 1 : 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Eye className="w-4 h-4" />
                View Project
              </motion.div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors line-clamp-1">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-2.5 py-1 bg-brand-500/10 text-brand-400 text-xs rounded-lg border border-brand-500/20 font-medium"
                >
                  {tech}
                </motion.span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2.5 py-1 bg-white/5 text-slate-400 text-xs rounded-lg border border-white/10">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                <TrendingUp className="w-4 h-4 text-brand-500" />
                <span>High Impact</span>
              </div>
              <div className="flex items-center gap-2 text-brand-400 font-semibold text-sm group-hover:gap-3 transition-all">
                Details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </motion.div>
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

  const featuredProject = filteredProjects[0];
  const otherProjects = filteredProjects.slice(1, 7);

  return (
    <section className="relative py-24 lg:py-36 overflow-hidden bg-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-brand-500/15 rounded-full blur-[150px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-teal-500/15 rounded-full blur-[150px]"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[200px]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        {/* Dot Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(rgba(16, 185, 129, 0.25) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-semibold mb-6"
          >
            <Layers className="w-4 h-4" />
            <span>Our Work</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Projects that</span>
            <br />
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Make an Impact
            </span>
          </h2>

          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Explore our portfolio of transformative digital solutions that have helped businesses
            achieve remarkable growth and success.
          </p>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeFilter === category
                    ? 'text-white'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10 hover:border-brand-500/30'
                }`}
              >
                {activeFilter === category && (
                  <motion.div
                    layoutId="activeFilter"
                    className={`absolute inset-0 bg-gradient-to-r ${categoryGradients[category]} rounded-full shadow-lg shadow-brand-500/25`}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Featured Project */}
            {featuredProject && <FeaturedProjectCard project={featuredProject} />}

            {/* Other Projects */}
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative inline-block">
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-500 to-teal-500 rounded-full blur-xl opacity-20" />

            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 lg:p-10 border border-white/10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-teal-400 border-2 border-slate-950 flex items-center justify-center">
                      <Code2 className="w-4 h-4 text-white" />
                    </div>
                  ))}
                </div>
                <span className="text-slate-300 font-medium">+50 Projects Delivered</span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-slate-300 mb-8 max-w-lg mx-auto">
                Let&apos;s discuss how we can help bring your vision to life with cutting-edge technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="glow" size="lg" className="rounded-full px-10">
                  <Link href="/portfolio" className="flex items-center gap-2">
                    View Full Portfolio
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-10 border-white/20 text-white hover:bg-white/10">
                  <Link href="/contact">
                    Start a Project
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
