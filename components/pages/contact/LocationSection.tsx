'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Globe, Users, Navigation } from 'lucide-react';

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

  const getOfficeTypeGradient = (type: Office['type']) => {
    switch (type) {
      case 'headquarters':
        return 'from-brand-400 to-teal-400';
      case 'regional':
        return 'from-teal-400 to-cyan-400';
      case 'international':
        return 'from-cyan-400 to-brand-400';
      default:
        return 'from-brand-400 to-teal-400';
    }
  };

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
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px]" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Global
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"> Presence</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            With offices across the globe, we're always close to our clients. Find the office nearest to you for in-person meetings and consultations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Interactive World Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50" />
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Interactive Office Map</h3>
                <p className="text-gray-400 text-sm">Click on any office pin to view details</p>
              </div>

              {/* World Map Container */}
              <div className="relative bg-slate-900/50 rounded-2xl p-8 h-80 overflow-hidden border border-white/5">
                {/* Grid Pattern */}
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.5) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                  }}
                />

                {/* Office Pins */}
                {offices.map((office) => (
                  <button
                    key={office.id}
                    onClick={() => setSelectedOffice(office.id)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-125 ${
                      selectedOffice === office.id ? 'scale-125 z-10' : 'hover:z-10'
                    }`}
                    style={{ left: `${office.coordinates.x}%`, top: `${office.coordinates.y}%` }}
                  >
                    <div className={`relative w-8 h-8 bg-gradient-to-r ${getOfficeTypeGradient(office.type)} rounded-full border-2 border-white/20 shadow-lg flex items-center justify-center`}>
                      <MapPin className="w-4 h-4 text-white" />
                      {selectedOffice === office.id && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-white/20"
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </div>

                    {/* Office Label */}
                    <div className={`absolute top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 px-3 py-1.5 rounded-lg shadow-lg text-xs font-medium whitespace-nowrap transition-opacity duration-300 border border-white/10 ${
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
                      opacity="0.3"
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
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-brand-400 to-teal-400 rounded-full"></div>
                  <span className="text-gray-400">Headquarters</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></div>
                  <span className="text-gray-400">Regional Office</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-brand-400 rounded-full"></div>
                  <span className="text-gray-400">International</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Office Details Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Office Selector Buttons */}
            <div className="grid grid-cols-2 gap-3">
              {offices.map((office) => {
                const badge = getOfficeTypeBadge(office.type);
                return (
                  <motion.button
                    key={office.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedOffice(office.id)}
                    className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                      selectedOffice === office.id
                        ? 'border-brand-500/50 bg-brand-500/10'
                        : 'border-white/10 bg-white/5 hover:border-brand-500/30 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white text-sm">{office.city}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${badge.color}`}>
                        {badge.label}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{office.country}</p>
                  </motion.button>
                );
              })}
            </div>

            {/* Selected Office Details */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500/20 via-teal-500/20 to-cyan-500/20 rounded-2xl blur opacity-50" />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={selectedOfficeData.image}
                    alt={selectedOfficeData.name}
                    className="w-16 h-16 rounded-xl object-cover border border-white/10"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white">{selectedOfficeData.name}</h3>
                      {selectedOfficeData.type === 'headquarters' && (
                        <span className="px-2 py-1 bg-brand-500/20 text-brand-400 text-xs font-medium rounded-full border border-brand-500/30">
                          HQ
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{selectedOfficeData.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-brand-400" />
                        <span>{selectedOfficeData.teamSize} team members</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-brand-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-white text-sm">Address</p>
                        <p className="text-gray-400 text-sm">{selectedOfficeData.address}</p>
                        <p className="text-gray-400 text-sm">{selectedOfficeData.city}, {selectedOfficeData.country}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-teal-400 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-white text-sm">Business Hours</p>
                        <p className="text-gray-400 text-sm">{selectedOfficeData.hours}</p>
                        <p className="text-gray-500 text-xs">{selectedOfficeData.timezone}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => window.open(`tel:${selectedOfficeData.phone}`)}
                      className="flex items-center gap-3 w-full p-3 bg-brand-500/10 hover:bg-brand-500/20 rounded-xl transition-colors group border border-brand-500/20"
                    >
                      <Phone className="w-5 h-5 text-brand-400 group-hover:scale-110 transition-transform" />
                      <div className="text-left">
                        <p className="font-medium text-white text-sm">Phone</p>
                        <p className="text-brand-400 text-sm">{selectedOfficeData.phone}</p>
                      </div>
                    </button>

                    <button
                      onClick={() => window.open(`mailto:${selectedOfficeData.email}`)}
                      className="flex items-center gap-3 w-full p-3 bg-teal-500/10 hover:bg-teal-500/20 rounded-xl transition-colors group border border-teal-500/20"
                    >
                      <Mail className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform" />
                      <div className="text-left">
                        <p className="font-medium text-white text-sm">Email</p>
                        <p className="text-teal-400 text-sm truncate">{selectedOfficeData.email}</p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(selectedOfficeData.address + ', ' + selectedOfficeData.city)}`)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-brand-500 to-teal-500 text-white font-semibold rounded-xl hover:from-brand-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-brand-500/25"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </button>
                  <button
                    onClick={() => window.open(`tel:${selectedOfficeData.phone}`)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/5 hover:border-brand-500/30 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    Call Office
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Global Stats */}
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
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Global Reach</h3>
                <p className="text-gray-400">Our worldwide presence ensures we're always available when you need us</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: offices.length, label: 'Office Locations', gradient: 'from-brand-400 to-teal-400' },
                  { value: `${offices.reduce((sum, office) => sum + office.teamSize, 0)}+`, label: 'Team Members', gradient: 'from-teal-400 to-cyan-400' },
                  { value: '24/7', label: 'Global Support', gradient: 'from-cyan-400 to-brand-400' },
                  { value: '15+', label: 'Time Zones', gradient: 'from-brand-400 to-emerald-400' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-400 font-medium">{stat.label}</div>
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

export default LocationSection;
