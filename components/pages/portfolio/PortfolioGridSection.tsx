'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import {
  ExternalLink,
  Github,
  ArrowRight,
  Star,
  Calendar,
  Users,
  Eye,
  Heart,
  Sparkles,
  Code2,
  Layers,
  ChevronRight,
  X,
  Play,
  Award,
  Clock,
  CheckCircle
} from 'lucide-react';
import { projects, PortfolioProject } from '@/lib/portfolio-data';

// =============================================================================
// 3D TILT CARD
// =============================================================================

const TiltCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// =============================================================================
// GRADIENT TEXT
// =============================================================================

const GradientText = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="absolute inset-0 bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent blur-xl opacity-50">
        {children}
      </span>
      <span className="relative bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
        {children}
      </span>
    </span>
  );
};

// =============================================================================
// MAGNETIC BUTTON
// =============================================================================

const MagneticButton = ({ children, className = '', onClick }: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.2;
    const deltaY = (e.clientY - centerY) * 0.2;
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const springConfig = { stiffness: 150, damping: 15 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  return (
    <motion.button
      ref={ref}
      type="button"
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

// =============================================================================
// PROJECT CARD
// =============================================================================

interface ProjectCardProps {
  project: PortfolioProject;
  index: number;
  onSelect: (project: PortfolioProject) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <TiltCard className="h-full">
        <div
          className="group relative h-full cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => onSelect(project)}
        >
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/50 via-teal-500/50 to-cyan-500/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500" />

          {/* Card */}
          <div className="relative h-full bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 group-hover:border-brand-500/30 transition-all duration-500">
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.7 }}
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="px-4 py-2 rounded-full bg-brand-500/90 backdrop-blur-sm text-white font-semibold text-sm"
                >
                  {project.category}
                </motion.div>
              </div>

              {/* Rating Badge */}
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {project.rating}
                </div>
              </div>

              {/* Hover Actions */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute bottom-4 left-4 right-4 flex items-center justify-between"
                  >
                    <div className="flex gap-2">
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveUrl, '_blank');
                        }}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                        title="View Live"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.button>
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank');
                        }}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                        title="View Code"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </motion.button>
                    </div>

                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsLiked(!isLiked);
                      }}
                      className={`w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-colors ${
                        isLiked ? 'bg-red-500/80' : 'bg-white/20 hover:bg-white/30'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${isLiked ? 'fill-white text-white' : 'text-white'}`} />
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                {project.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between mb-4 text-sm">
                <div className="flex items-center gap-2 text-slate-500">
                  <Users className="w-4 h-4 text-brand-400" />
                  <span>{project.client}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Calendar className="w-4 h-4 text-teal-400" />
                  <span>{project.duration}</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs text-brand-400">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <motion.div
                  className="flex items-center gap-1 text-brand-400 font-medium text-sm"
                  animate={{ x: isHovered ? 5 : 0 }}
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>

                <Link
                  href={`/portfolio/${project.slug}`}
                  onClick={(e) => e.stopPropagation()}
                  className="text-sm text-slate-500 hover:text-brand-400 transition-colors"
                >
                  Full Case Study
                </Link>
              </div>
            </div>
          </div>
        </div>
      </TiltCard>
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
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-slate-900 rounded-3xl border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </motion.button>

          {/* Hero Image */}
          <div className="relative aspect-video overflow-hidden rounded-t-3xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

            {/* Play Button */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </motion.button>

            {/* Category */}
            <div className="absolute bottom-6 left-6">
              <span className="px-4 py-2 rounded-full bg-brand-500 text-white font-semibold text-sm">
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                <div className="flex items-center gap-4 text-slate-400">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{project.client}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{project.rating}/5</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-xl bg-brand-500 text-white font-semibold flex items-center gap-2 hover:bg-brand-600 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-xl bg-white/10 text-white font-semibold flex items-center gap-2 hover:bg-white/20 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </motion.a>
              </div>
            </div>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-brand-400" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-teal-400" />
                Key Results
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {project.results.map((result, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-brand-500/10 to-teal-500/10 border border-brand-500/20"
                  >
                    <CheckCircle className="w-5 h-5 text-brand-400 shrink-0" />
                    <span className="text-white font-medium">{result}</span>
                  </motion.div>
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
    <section className="relative py-20 bg-[#030712] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 mb-6"
          >
            <Layers className="w-4 h-4 text-brand-400" />
            <span className="text-brand-400 font-semibold text-sm">Featured Work</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <GradientText>Projects</GradientText>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Dive deep into our most successful projects and see how we&apos;ve helped businesses achieve their goals.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            className="text-center mt-16"
          >
            <MagneticButton
              onClick={() => setDisplayCount(prev => prev + 6)}
              className="group relative px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-500 via-teal-500 to-cyan-500 bg-[length:200%_auto] animate-gradient-x" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600 via-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Load More Projects
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </MagneticButton>
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

      {/* CSS for gradient animation */}
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default PortfolioGridSection;
