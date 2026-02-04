'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  ArrowRight,
  Star,
  Calendar,
  Users,
  Heart,
  Sparkles,
  Code2,
  Layers,
  ChevronRight,
  X,
  Award,
  Clock,
  CheckCircle
} from 'lucide-react';
import { projects, PortfolioProject } from '@/lib/portfolio-data';

// =============================================================================
// PROJECT CARD
// =============================================================================

interface ProjectCardProps {
  project: PortfolioProject;
  index: number;
  onSelect: (project: PortfolioProject) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <div
        className="relative h-full cursor-pointer bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl overflow-hidden hover:border-brand-500/20 transition-all duration-300"
        onClick={() => onSelect(project)}
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <div className="px-3 py-1.5 rounded-full bg-brand-500/90 text-white font-medium text-xs">
              {project.category}
            </div>
          </div>

          {/* Rating Badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-white text-xs">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            {project.rating}
          </div>

          {/* Hover Actions */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveUrl, '_blank');
                }}
                className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                title="View Live"
              >
                <ExternalLink className="w-4 h-4 text-white" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.githubUrl, '_blank');
                }}
                className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                title="View Code"
              >
                <Github className="w-4 h-4 text-white" />
              </button>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              title={isLiked ? "Unlike project" : "Like project"}
              aria-label={isLiked ? "Unlike project" : "Like project"}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                isLiked ? 'bg-red-500/80' : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-white text-white' : 'text-white'}`} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-slate-400 text-sm mb-3 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between mb-3 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 text-slate-500">
              <Users className="w-3.5 h-3.5 text-brand-400" />
              <span>{project.client}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500">
              <Calendar className="w-3.5 h-3.5 text-teal-400" />
              <span>{project.duration}</span>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[10px] sm:text-xs text-slate-400"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 rounded-md bg-brand-500/10 border border-brand-500/20 text-[10px] sm:text-xs text-brand-400">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
            <div className="flex items-center gap-1 text-brand-400 font-medium text-xs sm:text-sm">
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>

            <Link
              href={`/portfolio/${project.slug}`}
              onClick={(e) => e.stopPropagation()}
              className="text-xs sm:text-sm text-slate-500 hover:text-brand-400 transition-colors"
            >
              Full Case Study
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// =============================================================================
// PROJECT MODAL
// =============================================================================

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-[#0a0f1a] rounded-2xl border border-white/[0.08]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            title="Close modal"
            aria-label="Close modal"
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Hero Image */}
          <div className="relative aspect-video overflow-hidden rounded-t-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/30 to-transparent" />

            {/* Category */}
            <div className="absolute bottom-5 left-5">
              <span className="px-4 py-2 rounded-full bg-brand-500 text-white font-semibold text-sm">
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-5">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{project.title}</h2>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-slate-400 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    <span>{project.client}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{project.rating}/5</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 sm:gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-teal-500 text-white font-semibold flex items-center gap-2 hover:from-brand-600 hover:to-teal-600 transition-all text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-white/10 text-white font-semibold flex items-center gap-2 hover:bg-white/20 transition-colors text-sm"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            </div>

            <p className="text-slate-400 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-brand-400" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-slate-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-teal-400" />
                Key Results
              </h3>
              <div className="grid sm:grid-cols-3 gap-3">
                {project.results.map((result, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-brand-500/5 border border-brand-500/10"
                  >
                    <CheckCircle className="w-4 h-4 text-brand-400 shrink-0" />
                    <span className="text-white text-sm">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// =============================================================================
// MAIN COMPONENT
// =============================================================================

interface PortfolioGridSectionProps {
  selectedCategory?: string;
}

const PortfolioGridSection: React.FC<PortfolioGridSectionProps> = ({ selectedCategory = 'all' }) => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [displayCount, setDisplayCount] = useState(6);

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const displayedProjects = filteredProjects.slice(0, displayCount);
  const hasMore = displayCount < filteredProjects.length;

  return (
    <section className="relative py-16 sm:py-20 bg-[#030712] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 50% 100%, rgba(6,182,212,0.04), transparent 70%)',
        }}
      />
      <div className="grain absolute inset-0" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5"
            style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.08))' }}
          >
            <Layers className="w-6 h-6 sm:w-7 sm:h-7 text-brand-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Dive deep into our most successful projects and see how we&apos;ve helped businesses achieve their goals.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onSelect={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10 sm:mt-14"
          >
            <button
              type="button"
              onClick={() => setDisplayCount(prev => prev + 6)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-teal-500 text-white font-semibold hover:from-brand-600 hover:to-teal-600 transition-all text-sm"
            >
              <Sparkles className="w-4 h-4" />
              Load More Projects
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default PortfolioGridSection;
