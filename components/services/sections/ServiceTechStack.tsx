'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, CheckCircle } from 'lucide-react';

interface Technology {
  name: string;
  icon?: string; // URL or emoji
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
}

// Tech emoji mapping for fallback icons
const techEmojis: Record<string, string> = {
  // Frontend
  'React': '⚛️', 'Next.js': '▲', 'Vue': '💚', 'Angular': '🅰️', 'Svelte': '🔶',
  'TypeScript': '📘', 'JavaScript': '💛', 'HTML': '🌐', 'CSS': '🎨', 'Tailwind': '💨',
  'Bootstrap': '🅱️', 'Sass': '💅', 'Webpack': '📦', 'Vite': '⚡',
  // Backend
  'Node.js': '💚', 'Python': '🐍', 'Django': '🎸', 'FastAPI': '⚡', 'Flask': '🍶',
  'Java': '☕', 'Spring': '🌱', 'PHP': '🐘', 'Laravel': '🔴', 'Ruby': '💎',
  'Rails': '🛤️', 'Go': '🐹', 'Rust': '🦀', 'C#': '💜', '.NET': '🔵',
  // Databases
  'PostgreSQL': '🐘', 'MySQL': '🐬', 'MongoDB': '🍃', 'Redis': '🔴', 'SQLite': '📁',
  'Oracle': '🔶', 'SQL Server': '🗄️', 'Elasticsearch': '🔍', 'Firebase': '🔥',
  // Cloud
  'AWS': '☁️', 'Azure': '☁️', 'Google Cloud': '☁️', 'GCP': '☁️', 'Heroku': '💜',
  'Vercel': '▲', 'Netlify': '🌊', 'DigitalOcean': '🌊', 'Cloudflare': '🔶',
  // DevOps
  'Docker': '🐳', 'Kubernetes': '☸️', 'Jenkins': '🔧', 'GitHub Actions': '🔄',
  'GitLab CI': '🦊', 'Terraform': '🏗️', 'Ansible': '🅰️', 'CircleCI': '⭕',
  // Tools
  'Git': '📝', 'Jira': '📋', 'Figma': '🎨', 'Sketch': '💎', 'Postman': '📮',
  'VS Code': '💙', 'Slack': '💬', 'Notion': '📓', 'Trello': '📌',
  // Mobile
  'React Native': '📱', 'Flutter': '🦋', 'Swift': '🍎', 'Kotlin': '🤖',
  'Xcode': '🔨', 'Android Studio': '🤖', 'Expo': '📱',
  // Testing
  'Jest': '🃏', 'Cypress': '🌲', 'Playwright': '🎭', 'Selenium': '🔬',
  // Security
  'OAuth': '🔐', 'JWT': '🎟️', 'SSL': '🔒', 'HTTPS': '🔒',
  // Default by category
  'Frontend': '🖥️', 'Backend': '⚙️', 'Database': '🗄️', 'Cloud': '☁️',
  'DevOps': '🔧', 'Mobile': '📱', 'Testing': '🧪', 'Security': '🔐',
  'AI': '🤖', 'ML': '🧠', 'Analytics': '📊', 'Design': '🎨',
};

// Get emoji for tech name
const getTechEmoji = (name: string): string => {
  // Direct match
  if (techEmojis[name]) return techEmojis[name];
  // Partial match
  for (const [key, emoji] of Object.entries(techEmojis)) {
    if (name.toLowerCase().includes(key.toLowerCase())) return emoji;
  }
  // Default tech emoji
  return '💻';
};

const ServiceTechStack: React.FC<ServiceTechStackProps> = (props) => {
  const {
    data,
    sectionTitle: propTitle = 'Technologies We Master',
    sectionSubtitle: propSubtitle = 'Industry-leading tools and frameworks powering your success',
    categories: propCategories,
    layout = 'grid',
    showProficiency = false,
  } = props;

  // Use data from ServiceData object if provided
  const sectionTitle = propTitle;
  const sectionSubtitle = propSubtitle;
  const categories = data?.techStack || propCategories || [];

  const [activeCategory, setActiveCategory] = React.useState(0);

  // Proficiency badge colors
  const proficiencyColors = {
    expert: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    advanced: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    proficient: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  };

  return (
    <section className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Subtle gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-800/50 via-slate-900 to-slate-950" />

        {/* Code-like pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(16,185,129,0.1) 50px, rgba(16,185,129,0.1) 51px)',
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Tech Stack
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {sectionTitle}
          </h2>

          <p className="text-lg md:text-xl text-gray-400">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Grid Layout */}
        {layout === 'grid' && (
          <div className="space-y-12">
            {categories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-xl font-bold text-white">
                    {category.name}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/30 to-transparent" />
                  <span className="text-sm text-gray-500">
                    {category.technologies.length} technologies
                  </span>
                </div>

                {/* Technologies Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      className="group relative"
                    >
                      {/* Hover glow */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300" />

                      <div className="relative flex flex-col items-center p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 group-hover:border-emerald-500/30 transition-all duration-300">
                        {/* Icon - Always show either custom icon or emoji fallback */}
                        <div className="w-12 h-12 flex items-center justify-center mb-3">
                          {tech.icon && !tech.icon.startsWith('/icons/') ? (
                            tech.icon.startsWith('http') ? (
                              <Image
                                src={tech.icon}
                                alt={tech.name}
                                width={48}
                                height={48}
                                className="object-contain"
                              />
                            ) : (
                              <span className="text-3xl">{tech.icon}</span>
                            )
                          ) : (
                            <span className="text-3xl">{getTechEmoji(tech.name)}</span>
                          )}
                        </div>

                        {/* Name */}
                        <span className="text-sm font-medium text-gray-300 text-center group-hover:text-white transition-colors">
                          {tech.name}
                        </span>

                        {/* Proficiency badge */}
                        {showProficiency && tech.proficiency && (
                          <span className={`mt-2 px-2 py-0.5 rounded-full text-xs font-medium border ${proficiencyColors[tech.proficiency]}`}>
                            {tech.proficiency}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tabs Layout */}
        {layout === 'tabs' && (
          <div>
            {/* Tab Headers */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === index
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                      : 'bg-slate-800/50 text-gray-400 hover:bg-slate-700/50 hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {categories[activeCategory]?.description && (
                <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
                  {categories[activeCategory].description}
                </p>
              )}

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {categories[activeCategory]?.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                    className="group relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300" />

                    <div className="relative flex flex-col items-center p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 group-hover:border-emerald-500/30 transition-all duration-300">
                      <div className="w-12 h-12 flex items-center justify-center mb-3">
                        {tech.icon && !tech.icon.startsWith('/icons/') ? (
                          tech.icon.startsWith('http') ? (
                            <Image
                              src={tech.icon}
                              alt={tech.name}
                              width={48}
                              height={48}
                              className="object-contain"
                            />
                          ) : (
                            <span className="text-3xl">{tech.icon}</span>
                          )
                        ) : (
                          <span className="text-3xl">{getTechEmoji(tech.name)}</span>
                        )}
                      </div>
                      <span className="text-sm font-medium text-gray-300 text-center group-hover:text-white transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {/* Showcase Layout - Marquee style */}
        {layout === 'showcase' && (
          <div className="space-y-8">
            {categories.map((category, catIndex) => (
              <div key={catIndex} className="relative overflow-hidden">
                {/* Category label */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium text-emerald-400">
                    {category.name}
                  </span>
                  <div className="flex-1 h-px bg-slate-700/50" />
                </div>

                {/* Scrolling logos */}
                <div className="relative">
                  {/* Fade edges */}
                  <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10" />
                  <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10" />

                  <div className="flex animate-marquee">
                    {/* Duplicate for seamless loop */}
                    {[...category.technologies, ...category.technologies].map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex-shrink-0 flex items-center gap-3 mx-6 px-4 py-3 rounded-lg bg-slate-800/30 border border-slate-700/30"
                      >
                        <span className="text-2xl">
                          {tech.icon && !tech.icon.startsWith('/icons/') ? (
                            tech.icon.startsWith('http') ? (
                              <Image
                                src={tech.icon}
                                alt={tech.name}
                                width={32}
                                height={32}
                                className="object-contain"
                              />
                            ) : (
                              tech.icon
                            )
                          ) : (
                            getTechEmoji(tech.name)
                          )}
                        </span>
                        <span className="text-sm font-medium text-gray-300 whitespace-nowrap">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Trust Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>Always up-to-date with latest versions</span>
          </div>
          <div className="w-px h-4 bg-gray-700 hidden sm:block" />
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>Best practices & security standards</span>
          </div>
          <div className="w-px h-4 bg-gray-700 hidden sm:block" />
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>Expert-level implementation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceTechStack;
