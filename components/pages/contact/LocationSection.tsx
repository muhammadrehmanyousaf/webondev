'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Users, Navigation } from 'lucide-react';

interface Office {
  id: string;
  name: string;
  type: 'headquarters' | 'regional' | 'international';
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  timezone: string;
  hours: string;
  image: string;
  coordinates: { x: number; y: number };
  description: string;
  teamSize: number;
  services: string[];
}

const LocationSection = () => {
  const [selectedOffice, setSelectedOffice] = useState<string>('pakistan');

  const offices: Office[] = [
    {
      id: 'pakistan',
      name: 'Pakistan Office',
      type: 'headquarters',
      address: 'Lahore Tech Hub, Suite 100',
      city: 'Lahore',
      country: 'Pakistan',
      phone: '+92 310 6803687',
      email: 'muhammadrehmanyousaf786@gmail.com',
      timezone: 'PKT (UTC+5)',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600',
      coordinates: { x: 60, y: 55 },
      description: 'Our main development center and headquarters',
      teamSize: 25,
      services: ['Web Development', 'Mobile Apps', 'Consulting']
    },
    {
      id: 'dubai',
      name: 'Dubai Office',
      type: 'regional',
      address: 'Dubai Internet City, Tower 1',
      city: 'Dubai',
      country: 'UAE',
      phone: '+92 310 6803687',
      email: 'muhammadrehmanyousaf786@gmail.com',
      timezone: 'GST (UTC+4)',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600',
      coordinates: { x: 55, y: 50 },
      description: 'Middle East operations and client services',
      teamSize: 15,
      services: ['Digital Marketing', 'E-commerce', 'Support']
    },
    {
      id: 'us',
      name: 'US Office',
      type: 'international',
      address: 'Silicon Valley Tech Park',
      city: 'San Francisco',
      country: 'United States',
      phone: '+92 310 6803687',
      email: 'muhammadrehmanyousaf786@gmail.com',
      timezone: 'PST (UTC-8)',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      coordinates: { x: 15, y: 45 },
      description: 'North American operations and client services',
      teamSize: 12,
      services: ['UI/UX Design', 'Cloud Services', 'Consulting']
    },
    {
      id: 'canada',
      name: 'Canada Office',
      type: 'international',
      address: 'Toronto Innovation Center',
      city: 'Toronto',
      country: 'Canada',
      phone: '+92 310 6803687',
      email: 'muhammadrehmanyousaf786@gmail.com',
      timezone: 'EST (UTC-5)',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      coordinates: { x: 20, y: 40 },
      description: 'Canadian operations and regional services',
      teamSize: 10,
      services: ['Mobile Development', 'Software Development', 'Support']
    }
  ];

  const selectedOfficeData = offices.find(office => office.id === selectedOffice) || offices[0];

  const getOfficeTypeBadge = (type: Office['type']) => {
    switch (type) {
      case 'headquarters':
        return { label: 'HQ', color: 'bg-brand-500/20 text-brand-400 border-brand-500/30' };
      case 'regional':
        return { label: 'Regional', color: 'bg-teal-500/20 text-teal-400 border-teal-500/30' };
      case 'international':
        return { label: 'International', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' };
      default:
        return { label: 'Office', color: 'bg-brand-500/20 text-brand-400 border-brand-500/30' };
    }
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-[#030712] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 30% 50%, rgba(6,182,212,0.04), transparent 70%)',
        }}
      />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full gradient-border-subtle text-brand-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            Our Offices
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-[1.1]">
            Our Global <span className="gradient-text">Presence</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            With offices across the globe, we&apos;re always close to our clients. Find the office nearest to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          {/* Interactive World Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl p-5 sm:p-6">
              <div className="mb-4 sm:mb-5">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1">Interactive Office Map</h3>
                <p className="text-slate-500 text-xs sm:text-sm">Click on any office pin to view details</p>
              </div>

              {/* World Map Container */}
              <div className="relative bg-white/[0.02] rounded-xl p-6 sm:p-8 h-64 sm:h-72 overflow-hidden border border-white/[0.04]">
                {/* Grid Pattern */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                  }}
                />

                {/* Office Pins */}
                {offices.map((office) => (
                  <button
                    key={office.id}
                    type="button"
                    onClick={() => setSelectedOffice(office.id)}
                    title={`${office.city}, ${office.country}`}
                    aria-label={`Select ${office.name}`}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                      selectedOffice === office.id ? 'scale-125 z-10' : 'hover:scale-110 hover:z-10'
                    }`}
                    style={{ left: `${office.coordinates.x}%`, top: `${office.coordinates.y}%` }}
                  >
                    <div
                      className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 ${
                        selectedOffice === office.id
                          ? 'border-brand-400 bg-brand-500/30'
                          : 'border-white/20 bg-white/10'
                      }`}
                      style={{ background: selectedOffice === office.id ? 'linear-gradient(135deg, rgba(16,185,129,0.3), rgba(6,182,212,0.2))' : 'rgba(255,255,255,0.05)' }}
                    >
                      <MapPin className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${selectedOffice === office.id ? 'text-brand-400' : 'text-white/60'}`} />
                      {selectedOffice === office.id && (
                        <motion.div
                          className="absolute inset-0 rounded-full border border-brand-400/50"
                          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </div>

                    {/* Office Label */}
                    <div className={`absolute top-9 left-1/2 transform -translate-x-1/2 bg-[#0a0f1a] px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-medium whitespace-nowrap transition-opacity duration-300 border border-white/[0.08] ${
                      selectedOffice === office.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <span className="text-white">{office.city}</span>
                    </div>
                  </button>
                ))}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {offices.slice(1).map((office) => (
                    <line
                      key={office.id}
                      x1={`${offices[0].coordinates.x}%`}
                      y1={`${offices[0].coordinates.y}%`}
                      x2={`${office.coordinates.x}%`}
                      y2={`${office.coordinates.y}%`}
                      stroke="url(#lineGradient)"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      opacity="0.2"
                    />
                  ))}
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Map Legend */}
              <div className="mt-4 sm:mt-5 flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 bg-brand-400 rounded-full"></div>
                  <span className="text-slate-400">Headquarters</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 bg-teal-400 rounded-full"></div>
                  <span className="text-slate-400">Regional Office</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-400">International</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Office Details Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 sm:space-y-5"
          >
            {/* Office Selector Buttons */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {offices.map((office) => {
                const badge = getOfficeTypeBadge(office.type);
                return (
                  <button
                    key={office.id}
                    type="button"
                    onClick={() => setSelectedOffice(office.id)}
                    className={`p-3 sm:p-4 rounded-xl border transition-all duration-300 text-left ${
                      selectedOffice === office.id
                        ? 'border-brand-500/30 bg-brand-500/10'
                        : 'border-white/[0.06] bg-white/[0.02] hover:border-brand-500/20 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="font-semibold text-white text-xs sm:text-sm">{office.city}</h4>
                      <span className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium border ${badge.color}`}>
                        {badge.label}
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-slate-500">{office.country}</p>
                  </button>
                );
              })}
            </div>

            {/* Selected Office Details */}
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl p-4 sm:p-5">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
                <img
                  src={selectedOfficeData.image}
                  alt={selectedOfficeData.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover border border-white/[0.08]"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base sm:text-lg font-bold text-white truncate">{selectedOfficeData.name}</h3>
                    {selectedOfficeData.type === 'headquarters' && (
                      <span className="px-1.5 py-0.5 bg-brand-500/20 text-brand-400 text-[10px] font-medium rounded-full border border-brand-500/30 flex-shrink-0">
                        HQ
                      </span>
                    )}
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm mb-1.5">{selectedOfficeData.description}</p>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500">
                    <Users className="w-3.5 h-3.5 text-brand-400" />
                    <span>{selectedOfficeData.teamSize} team members</span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-white text-xs sm:text-sm">Address</p>
                      <p className="text-slate-400 text-xs">{selectedOfficeData.address}</p>
                      <p className="text-slate-400 text-xs">{selectedOfficeData.city}, {selectedOfficeData.country}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-white text-xs sm:text-sm">Business Hours</p>
                      <p className="text-slate-400 text-xs">{selectedOfficeData.hours}</p>
                      <p className="text-slate-500 text-[10px]">{selectedOfficeData.timezone}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 sm:space-y-3">
                  <button
                    type="button"
                    onClick={() => window.open(`tel:${selectedOfficeData.phone}`)}
                    className="flex items-center gap-2.5 w-full p-2.5 sm:p-3 bg-brand-500/10 hover:bg-brand-500/20 rounded-xl transition-colors group border border-brand-500/20"
                  >
                    <Phone className="w-4 h-4 text-brand-400" />
                    <div className="text-left">
                      <p className="font-medium text-white text-xs">Phone</p>
                      <p className="text-brand-400 text-xs">{selectedOfficeData.phone}</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => window.open(`mailto:${selectedOfficeData.email}`)}
                    className="flex items-center gap-2.5 w-full p-2.5 sm:p-3 bg-teal-500/10 hover:bg-teal-500/20 rounded-xl transition-colors group border border-teal-500/20"
                  >
                    <Mail className="w-4 h-4 text-teal-400" />
                    <div className="text-left min-w-0">
                      <p className="font-medium text-white text-xs">Email</p>
                      <p className="text-teal-400 text-xs truncate">{selectedOfficeData.email}</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(selectedOfficeData.address + ', ' + selectedOfficeData.city)}`)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 bg-gradient-to-r from-brand-500 to-teal-500 text-white font-semibold rounded-xl hover:from-brand-600 hover:to-teal-600 transition-all duration-300 text-sm"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </button>
                <button
                  type="button"
                  onClick={() => window.open(`tel:${selectedOfficeData.phone}`)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 border border-white/[0.1] text-white font-semibold rounded-xl hover:bg-white/[0.05] hover:border-brand-500/30 transition-all duration-300 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call Office
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Global Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 sm:mt-14"
        >
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 sm:p-6 lg:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">Global Reach</h3>
              <p className="text-slate-400 text-sm sm:text-base">Our worldwide presence ensures we&apos;re always available when you need us</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { value: offices.length, label: 'Office Locations' },
                { value: `${offices.reduce((sum, office) => sum + office.teamSize, 0)}+`, label: 'Team Members' },
                { value: '24/7', label: 'Global Support' },
                { value: '15+', label: 'Time Zones' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 font-medium text-xs sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
