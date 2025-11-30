'use client';

import React from 'react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

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
        email: 'sarah@softwareagency.com'
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
        email: 'michael@softwareagency.com'
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
        email: 'emily@softwareagency.com'
      }
    },
    {
      name: 'David Park',
      position: 'Head of Operations',
      bio: 'Operations expert ensuring smooth project delivery and client satisfaction.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      social: {
        linkedin: '#',
        email: 'david@softwareagency.com'
      }
    }
  ];

  const departments = [
    {
      name: 'Development Team',
      count: 25,
      description: 'Full-stack developers, mobile specialists, and DevOps engineers',
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Design Team',
      count: 8,
      description: 'UI/UX designers, graphic designers, and brand specialists',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Marketing Team',
      count: 6,
      description: 'Digital marketers, content creators, and SEO specialists',
      color: 'from-green-500 to-blue-500'
    },
    {
      name: 'Quality Assurance',
      count: 5,
      description: 'QA engineers, test automation specialists, and security experts',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Project Management',
      count: 4,
      description: 'Project managers, scrum masters, and business analysts',
      color: 'from-teal-500 to-green-500'
    },
    {
      name: 'Support Team',
      count: 2,
      description: 'Technical support specialists and client success managers',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of experts brings together decades of experience in software development, design, and digital strategy to deliver exceptional results.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100"
              >
                {/* Profile Image */}
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-gray-100 group-hover:border-blue-200 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.email && (
                      <a href={`mailto:${member.social.email}`} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-100 hover:text-green-600 transition-colors">
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Departments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 group"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${dept.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-lg">{dept.count}</span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {dept.name}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {dept.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Nationalities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">8+</div>
              <div className="text-gray-600">Time Zones</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;