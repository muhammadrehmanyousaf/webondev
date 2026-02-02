'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail, Users, Code2, Palette, Megaphone, ShieldCheck, FolderKanban, HeadsetIcon } from 'lucide-react';

// =============================================================================
// DATA
// =============================================================================

const leadership = [
  {
    name: 'Sarah Johnson',
    position: 'CEO & Founder',
    bio: 'Visionary leader with 10+ years in software development and business strategy.',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'sarah@webondev.com',
    },
  },
  {
    name: 'Michael Chen',
    position: 'CTO & Co-Founder',
    bio: 'Technical architect specializing in scalable systems and emerging technologies.',
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    social: {
      linkedin: '#',
      github: '#',
      email: 'michael@webondev.com',
    },
  },
  {
    name: 'Emily Rodriguez',
    position: 'Head of Design',
    bio: 'Creative director with expertise in UX/UI design and brand development.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'emily@webondev.com',
    },
  },
  {
    name: 'David Park',
    position: 'Head of Operations',
    bio: 'Operations expert ensuring smooth project delivery and client satisfaction.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    social: {
      linkedin: '#',
      email: 'david@webondev.com',
    },
  },
];

const departments = [
  {
    name: 'Development Team',
    count: 25,
    description: 'Full-stack developers, mobile specialists, and DevOps engineers',
    icon: Code2,
  },
  {
    name: 'Design Team',
    count: 8,
    description: 'UI/UX designers, graphic designers, and brand specialists',
    icon: Palette,
  },
  {
    name: 'Marketing Team',
    count: 6,
    description: 'Digital marketers, content creators, and SEO specialists',
    icon: Megaphone,
  },
  {
    name: 'Quality Assurance',
    count: 5,
    description: 'QA engineers, test automation specialists, and security experts',
    icon: ShieldCheck,
  },
  {
    name: 'Project Management',
    count: 4,
    description: 'Project managers, scrum masters, and business analysts',
    icon: FolderKanban,
  },
  {
    name: 'Support Team',
    count: 2,
    description: 'Technical support specialists and client success managers',
    icon: HeadsetIcon,
  },
];

const teamStats = [
  { value: '50+', label: 'Team Members', accent: 'text-brand-400' },
  { value: '15+', label: 'Nationalities', accent: 'text-teal-400' },
  { value: '8+', label: 'Time Zones', accent: 'text-cyan-400' },
  { value: '24/7', label: 'Support Coverage', accent: 'text-brand-400' },
];

// =============================================================================
// SOCIAL LINK COMPONENT
// =============================================================================

const SocialLink = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a
    href={href}
    title={label}
    aria-label={label}
    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-500 hover:text-brand-400 hover:border-brand-500/20 transition-colors duration-200"
  >
    {children}
  </a>
);

// =============================================================================
// MAIN COMPONENT
// =============================================================================

const TeamSection = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-[#030712] overflow-hidden">
      {/* Subtle radial background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 30%, rgba(16,185,129,0.03), transparent 70%)',
        }}
      />
      <div className="grain absolute inset-0" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ----------------------------------------------------------------- */}
        {/* Section Header                                                    */}
        {/* ----------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full gradient-border-subtle text-brand-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            Our People
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-[1.1]">
            Meet Our <span className="gradient-text">Team</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Our diverse team of experts brings together decades of experience in
            software development, design, and digital strategy to deliver
            exceptional results.
          </p>
        </motion.div>

        {/* ----------------------------------------------------------------- */}
        {/* Leadership Team                                                   */}
        {/* ----------------------------------------------------------------- */}
        <div className="mb-16 sm:mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl font-bold text-white text-center mb-8 sm:mb-12"
          >
            Leadership Team
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group"
              >
                <div className="bg-white/[0.02] border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300 rounded-xl sm:rounded-2xl p-5 sm:p-6">
                  {/* Profile Image */}
                  <div className="mb-5">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-white/[0.08]"
                      />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-brand-400 transition-colors duration-200">
                      {member.name}
                    </h4>
                    <p className="text-brand-400 font-medium mb-2 text-xs sm:text-sm">
                      {member.position}
                    </p>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-2">
                      {member.social.linkedin && (
                        <SocialLink
                          href={member.social.linkedin}
                          label={`${member.name} on LinkedIn`}
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </SocialLink>
                      )}
                      {member.social.twitter && (
                        <SocialLink
                          href={member.social.twitter}
                          label={`${member.name} on Twitter`}
                        >
                          <Twitter className="w-3.5 h-3.5" />
                        </SocialLink>
                      )}
                      {member.social.github && (
                        <SocialLink
                          href={member.social.github}
                          label={`${member.name} on GitHub`}
                        >
                          <Github className="w-3.5 h-3.5" />
                        </SocialLink>
                      )}
                      {member.social.email && (
                        <SocialLink
                          href={`mailto:${member.social.email}`}
                          label={`Email ${member.name}`}
                        >
                          <Mail className="w-3.5 h-3.5" />
                        </SocialLink>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* Departments                                                       */}
        {/* ----------------------------------------------------------------- */}
        <div className="mb-16 sm:mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl font-bold text-white text-center mb-8 sm:mb-12"
          >
            Our Departments
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group"
                >
                  <div className="bg-white/[0.02] border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300 rounded-xl sm:rounded-2xl p-5 sm:p-6">
                    {/* Icon + Count */}
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <div
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center"
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))',
                        }}
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400" />
                      </div>
                      <span className="text-xl sm:text-2xl font-bold text-white">
                        {dept.count}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-semibold text-white mb-1.5 group-hover:text-brand-400 transition-colors duration-200">
                      {dept.name}
                    </h4>

                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {dept.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* Team Stats (divider pattern like StatsSection)                    */}
        {/* ----------------------------------------------------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {teamStats.map((stat, index) => (
            <motion.div
              key={index}
              className={`relative text-center py-6 px-4 sm:py-8 sm:px-5 lg:py-12 lg:px-6 ${
                index < teamStats.length - 1
                  ? 'lg:border-r lg:border-white/[0.06]'
                  : ''
              } ${
                index < 2 ? 'sm:border-b lg:border-b-0 border-white/[0.06]' : ''
              } ${
                index === 0
                  ? 'sm:border-r border-white/[0.06] lg:border-r'
                  : ''
              } ${
                index === 2
                  ? 'sm:border-r border-white/[0.06] lg:border-r'
                  : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <div
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${stat.accent} mb-1 sm:mb-2`}
              >
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
