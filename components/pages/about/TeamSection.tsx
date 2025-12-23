'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail, Sparkles } from 'lucide-react';

const TeamSection = () => {
  const leadership = [
    {
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      bio: 'Visionary leader with 10+ years in software development and business strategy.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@webondev.com'
      }
    },
    {
      name: 'Michael Chen',
      position: 'CTO & Co-Founder',
      bio: 'Technical architect specializing in scalable systems and emerging technologies.',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      social: {
        linkedin: '#',
        github: '#',
        email: 'michael@webondev.com'
      }
    },
    {
      name: 'Emily Rodriguez',
      position: 'Head of Design',
      bio: 'Creative director with expertise in UX/UI design and brand development.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@webondev.com'
      }
    },
    {
      name: 'David Park',
      position: 'Head of Operations',
      bio: 'Operations expert ensuring smooth project delivery and client satisfaction.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      social: {
        linkedin: '#',
        email: 'david@webondev.com'
      }
    }
  ];

  const departments = [
    {
      name: 'Development Team',
      count: 25,
      description: 'Full-stack developers, mobile specialists, and DevOps engineers',
      gradient: 'from-brand-400 to-teal-400'
    },
    {
      name: 'Design Team',
      count: 8,
      description: 'UI/UX designers, graphic designers, and brand specialists',
      gradient: 'from-teal-400 to-cyan-400'
    },
    {
      name: 'Marketing Team',
      count: 6,
      description: 'Digital marketers, content creators, and SEO specialists',
      gradient: 'from-cyan-400 to-brand-400'
    },
    {
      name: 'Quality Assurance',
      count: 5,
      description: 'QA engineers, test automation specialists, and security experts',
      gradient: 'from-brand-400 to-emerald-400'
    },
    {
      name: 'Project Management',
      count: 4,
      description: 'Project managers, scrum masters, and business analysts',
      gradient: 'from-emerald-400 to-teal-400'
    },
    {
      name: 'Support Team',
      count: 2,
      description: 'Technical support specialists and client success managers',
      gradient: 'from-teal-400 to-brand-400'
    }
  ];

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span className="text-brand-400 text-sm font-medium">Our People</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"> Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of experts brings together decades of experience in software development, design, and digital strategy to deliver exceptional results.
          </p>
        </motion.div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-400 to-teal-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-brand-500/30 transition-all duration-500">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="relative w-24 h-24 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-white/10 group-hover:border-brand-500/30 transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-brand-400 font-semibold mb-3 text-sm">{member.position}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          title={`${member.name} on LinkedIn`}
                          aria-label={`${member.name} on LinkedIn`}
                          className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-500/20 hover:text-brand-400 transition-colors border border-white/10 text-gray-400"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          title={`${member.name} on Twitter`}
                          aria-label={`${member.name} on Twitter`}
                          className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-500/20 hover:text-brand-400 transition-colors border border-white/10 text-gray-400"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          title={`${member.name} on Github`}
                          aria-label={`${member.name} on Github`}
                          className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors border border-white/10 text-gray-400"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.email && (
                        <a
                          href={`mailto:${member.social.email}`}
                          title={`Email ${member.name}`}
                          aria-label={`Email ${member.name}`}
                          className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-500/20 hover:text-brand-400 transition-colors border border-white/10 text-gray-400"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-12">Our Departments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${dept.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-brand-500/30 transition-all duration-500">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${dept.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-lg">{dept.count}</span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                    {dept.name}
                  </h4>

                  <p className="text-gray-400 leading-relaxed text-sm">
                    {dept.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50" />
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: '50+', label: 'Team Members', gradient: 'from-brand-400 to-teal-400' },
                  { value: '15+', label: 'Nationalities', gradient: 'from-teal-400 to-cyan-400' },
                  { value: '8+', label: 'Time Zones', gradient: 'from-cyan-400 to-brand-400' },
                  { value: '24/7', label: 'Support Coverage', gradient: 'from-brand-400 to-emerald-400' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
