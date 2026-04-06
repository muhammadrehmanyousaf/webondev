'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, ChevronRight, Layers } from 'lucide-react';

// =============================================================================
// SERVICE TECH STACK - World-class interactive technology showcase
// =============================================================================

interface Technology {
  name: string;
  icon?: string;
  category: string;
  proficiency?: 'expert' | 'advanced' | 'proficient';
}

interface TechCategory {
  name: string;
  description?: string;
  technologies: Technology[];
}

interface ServiceTechStackProps {
  data?: import('./index').ServiceData;
  sectionTitle?: string;
  sectionSubtitle?: string;
  categories?: TechCategory[];
  layout?: 'grid' | 'tabs' | 'showcase';
  showProficiency?: boolean;
  city?: string;
  state?: string;
  country?: string;
}

// Category gradient accents
const categoryAccents = [
  { pill: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20', line: 'from-emerald-500/40', dot: 'bg-emerald-400', hover: 'group-hover:border-emerald-500/30 group-hover:shadow-emerald-500/10' },
  { pill: 'bg-blue-500/15 text-blue-400 border-blue-500/20', line: 'from-blue-500/40', dot: 'bg-blue-400', hover: 'group-hover:border-blue-500/30 group-hover:shadow-blue-500/10' },
  { pill: 'bg-violet-500/15 text-violet-400 border-violet-500/20', line: 'from-violet-500/40', dot: 'bg-violet-400', hover: 'group-hover:border-violet-500/30 group-hover:shadow-violet-500/10' },
  { pill: 'bg-amber-500/15 text-amber-400 border-amber-500/20', line: 'from-amber-500/40', dot: 'bg-amber-400', hover: 'group-hover:border-amber-500/30 group-hover:shadow-amber-500/10' },
  { pill: 'bg-rose-500/15 text-rose-400 border-rose-500/20', line: 'from-rose-500/40', dot: 'bg-rose-400', hover: 'group-hover:border-rose-500/30 group-hover:shadow-rose-500/10' },
];

// Professional tech emoji mapping
const techEmojis: Record<string, string> = {
  'React': '⚛️', 'Next.js': '▲', 'Vue': '💚', 'Angular': '🅰️', 'Svelte': '🔶',
  'TypeScript': '📘', 'JavaScript': '💛', 'HTML': '🌐', 'CSS': '🎨', 'Tailwind': '💨',
  'Bootstrap': '🅱️', 'Sass': '💅', 'Webpack': '📦', 'Vite': '⚡',
  'Node.js': '💚', 'Python': '🐍', 'Django': '🎸', 'FastAPI': '⚡', 'Flask': '🍶',
  'Java': '☕', 'Spring': '🌱', 'PHP': '🐘', 'Laravel': '🔴', 'Ruby': '💎',
  'Rails': '🛤️', 'Go': '🐹', 'Rust': '🦀', 'C#': '💜', '.NET': '🔵',
  'PostgreSQL': '🐘', 'MySQL': '🐬', 'MongoDB': '🍃', 'Redis': '🔴', 'SQLite': '📁',
  'Oracle': '🔶', 'SQL Server': '🗄️', 'Elasticsearch': '🔍', 'Firebase': '🔥',
  'AWS': '☁️', 'Azure': '☁️', 'Google Cloud': '☁️', 'GCP': '☁️', 'Heroku': '💜',
  'Vercel': '▲', 'Netlify': '🌊', 'DigitalOcean': '🌊', 'Cloudflare': '🔶',
  'Docker': '🐳', 'Kubernetes': '☸️', 'Jenkins': '🔧', 'GitHub Actions': '🔄',
  'GitLab CI': '🦊', 'Terraform': '🏗️', 'Ansible': '🅰️', 'CircleCI': '⭕',
  'Git': '📝', 'Jira': '📋', 'Figma': '🎨', 'Sketch': '💎', 'Postman': '📮',
  'VS Code': '💙', 'Slack': '💬', 'Notion': '📓', 'Trello': '📌',
  'React Native': '📱', 'Flutter': '🦋', 'Swift': '🍎', 'Kotlin': '🤖',
  'Xcode': '🔨', 'Android Studio': '🤖', 'Expo': '📱',
  'Jest': '🃏', 'Cypress': '🌲', 'Playwright': '🎭', 'Selenium': '🔬',
  'OAuth': '🔐', 'JWT': '🎟️', 'SSL': '🔒', 'HTTPS': '🔒',
  'Frontend': '🖥️', 'Backend': '⚙️', 'Database': '🗄️', 'Cloud': '☁️',
  'DevOps': '🔧', 'Mobile': '📱', 'Testing': '🧪', 'Security': '🔐',
  'AI': '🤖', 'ML': '🧠', 'Analytics': '📊', 'Design': '🎨',
};

const getTechEmoji = (name: string): string => {
  if (techEmojis[name]) return techEmojis[name];
  for (const [key, emoji] of Object.entries(techEmojis)) {
    if (name.toLowerCase().includes(key.toLowerCase())) return emoji;
  }
  return '💻';
};

const TechIcon: React.FC<{ tech: Technology; size?: number }> = ({ tech, size = 40 }) => {
  if (tech.icon && !tech.icon.startsWith('/icons/') && tech.icon.startsWith('http')) {
    return <Image src={tech.icon} alt={tech.name} width={size} height={size} className="object-contain" />;
  }
  if (tech.icon && !tech.icon.startsWith('/icons/')) {
    return <span className="text-2xl leading-none">{tech.icon}</span>;
  }
  return <span className="text-2xl leading-none">{getTechEmoji(tech.name)}</span>;
};

const ServiceTechStack: React.FC<ServiceTechStackProps> = (props) => {
  const {
    data, sectionTitle: propTitle, sectionSubtitle: propSubtitle,
    categories: propCategories, city, state, country,
  } = props;

  const locationLabel = city || state || country || '';
  const sectionTitle = propTitle || (locationLabel ? `Technologies Powering ${locationLabel} Projects` : 'Technologies We Master');
  const sectionSubtitle = propSubtitle || (locationLabel ? `Industry-leading tools and frameworks we use to deliver results for ${locationLabel} businesses` : 'Industry-leading tools and frameworks powering your success');
  const categories = data?.techStack || propCategories || [];

  const [activeTab, setActiveTab] = useState(0);
  const totalTech = categories.reduce((sum, cat) => sum + cat.technologies.length, 0);

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-[#030712] relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 20% 50%, rgba(16,185,129,0.04), transparent 70%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 40% 40% at 80% 20%, rgba(99,102,241,0.03), transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-brand-400 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            <span>Tech Stack</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-bold mb-6 leading-[1.15] tracking-tight">
            <span className="text-white">{sectionTitle.split(' ').slice(0, -1).join(' ')} </span>
            <span className="gradient-text">{sectionTitle.split(' ').slice(-1)}</span>
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {sectionSubtitle}
          </p>

          {/* Total tech count */}
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-slate-500">
            <Layers className="w-4 h-4" />
            <span>{totalTech}+ tools across {categories.length} categories</span>
          </div>
        </motion.div>

        {/* Interactive Tabs Navigation */}
        {categories.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => {
                const accent = categoryAccents[index % categoryAccents.length];
                const isActive = activeTab === index;

                return (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? `${accent.pill} border shadow-lg`
                        : 'text-slate-400 hover:text-white bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12]'
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isActive && <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />}
                      {category.name}
                      <span className={`text-xs tabular-nums ${isActive ? 'opacity-80' : 'text-slate-600'}`}>
                        {category.technologies.length}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Tech Grid - Animated content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Category description */}
            {categories[activeTab]?.description && (
              <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto text-sm">
                {categories[activeTab].description}
              </p>
            )}

            {/* Technologies grid - centered */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {categories[activeTab]?.technologies.map((tech, techIndex) => {
                const accent = categoryAccents[activeTab % categoryAccents.length];

                return (
                  <motion.div
                    key={`${activeTab}-${techIndex}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: techIndex * 0.04 }}
                    className="group relative cursor-default w-[calc(50%-6px)] sm:w-[calc(33.333%-8px)] md:w-[calc(25%-9px)] lg:w-[calc(16.666%-10px)]"
                  >
                    {/* Outer glow on hover */}
                    <div className={`absolute -inset-px rounded-xl bg-gradient-to-b ${accent.line} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500`} />

                    <div className={`relative flex flex-col items-center p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] ${accent.hover} group-hover:shadow-lg backdrop-blur-sm transition-all duration-300`}>
                      {/* Icon container */}
                      <div className="w-14 h-14 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-white/[0.06] transition-all duration-300">
                        <TechIcon tech={tech} />
                      </div>

                      {/* Name */}
                      <span className="text-sm font-medium text-slate-300 text-center group-hover:text-white transition-colors leading-tight">
                        {tech.name}
                      </span>

                      {/* Proficiency dot */}
                      {tech.proficiency && (
                        <div className="mt-2 flex items-center gap-1">
                          <span className={`w-1 h-1 rounded-full ${
                            tech.proficiency === 'expert' ? 'bg-emerald-400' :
                            tech.proficiency === 'advanced' ? 'bg-blue-400' : 'bg-purple-400'
                          }`} />
                          <span className="text-[10px] text-slate-600 uppercase tracking-wider">
                            {tech.proficiency}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Category navigation hint */}
            {categories.length > 1 && (
              <div className="flex justify-center mt-8">
                <button
                  type="button"
                  onClick={() => setActiveTab((activeTab + 1) % categories.length)}
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors"
                >
                  <span>Next: {categories[(activeTab + 1) % categories.length]?.name}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/[0.04] via-transparent to-blue-500/[0.04]" />
            <div className="relative flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-6 px-8">
              {[
                'Always up-to-date with latest versions',
                'Best practices & security standards',
                'Expert-level implementation',
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-slate-400">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceTechStack;
