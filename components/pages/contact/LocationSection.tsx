'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Globe, Users, Building, Navigation } from 'lucide-react';

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
      email: 'muhammadrehmanyousaf786 \n   @gmail.com',
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
      email: 'muhammadrehmanyousaf786 \n@gmail.com',
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
      email: 'muhammadrehmanyousaf786 \n   @gmail.com',
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
      email: 'muhammadrehmanyousaf786 \n   @gmail.com',
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

  const getOfficeTypeColor = (type: Office['type']) => {
    switch (type) {
      case 'headquarters':
        return 'from-red-500 to-red-600';
      case 'regional':
        return 'from-orange-500 to-orange-600';
      case 'international':
        return 'from-purple-500 to-purple-600';
      default:
        return 'from-blue-500 to-blue-600';
    }
  };

  const getOfficeTypeBadge = (type: Office['type']) => {
    switch (type) {
      case 'headquarters':
        return { label: 'HQ', color: 'bg-red-100 text-red-700 border-red-200' };
      case 'regional':
        return { label: 'Regional', color: 'bg-orange-100 text-orange-700 border-orange-200' };
      case 'international':
        return { label: 'International', color: 'bg-purple-100 text-purple-700 border-purple-200' };
      default:
        return { label: 'Office', color: 'bg-blue-100 text-blue-700 border-orange-200' };
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Global
            <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent"> Presence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            With offices across the globe, we're always close to our clients. Find the office nearest to you for in-person meetings and consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Interactive World Map */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Office Map</h3>
              <p className="text-gray-600 text-sm">Click on any office pin to view details</p>
            </div>

            {/* World Map Container */}
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 h-80 overflow-hidden">
              {/* Simplified World Map Background */}
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 100 60" className="w-full h-full">
                  {/* Simplified continent shapes */}
                  <path d="M10,20 Q15,15 25,18 L35,25 Q30,35 20,32 Z" fill="#3B82F6" opacity="0.3" />
                  <path d="M40,15 Q50,10 65,15 L75,20 Q70,30 55,28 L45,25 Z" fill="#3B82F6" opacity="0.3" />
                  <path d="M70,35 Q80,30 90,35 L85,50 Q75,45 70,40 Z" fill="#3B82F6" opacity="0.3" />
                </svg>
              </div>

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
                  <div className={`w-6 h-6 bg-gradient-to-r ${getOfficeTypeColor(office.type)} rounded-full border-2 border-white shadow-lg flex items-center justify-center`}>
                    <MapPin className="w-3 h-3 text-white" />
                  </div>
                  
                  {/* Office Label */}
                  <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded-md shadow-md text-xs font-medium whitespace-nowrap transition-opacity duration-300 ${
                    selectedOffice === office.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    {office.city}
                  </div>
                </button>
              ))}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {offices.slice(1).map((office, index) => (
                  <line
                    key={office.id}
                    x1={`${offices[0].coordinates.x}%`}
                    y1={`${offices[0].coordinates.y}%`}
                    x2={`${office.coordinates.x}%`}
                    y2={`${office.coordinates.y}%`}
                    stroke="#3B82F6"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                    opacity="0.3"
                    className="animate-pulse"
                  />
                ))}
              </svg>
            </div>

            {/* Map Legend */}
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
                <span className="text-gray-600">Headquarters</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                <span className="text-gray-600">Regional Office</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                <span className="text-gray-600">International</span>
              </div>
            </div>
          </div>

          {/* Office Details Panel */}
          <div className="space-y-6">
            {/* Office Selector Buttons */}
            <div className="grid grid-cols-2 gap-3">
              {offices.map((office) => {
                const badge = getOfficeTypeBadge(office.type);
                return (
                  <button
                    key={office.id}
                    onClick={() => setSelectedOffice(office.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      selectedOffice === office.id
                        ? 'border-blue-500 bg-blue-50 shadow-lg'
                        : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 text-sm">{office.city}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${badge.color}`}>
                        {badge.label}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">{office.country}</p>
                  </button>
                );
              })}
            </div>

            {/* Selected Office Details */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={selectedOfficeData.image}
                  alt={selectedOfficeData.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{selectedOfficeData.name}</h3>
                    {selectedOfficeData.type === 'headquarters' && (
                      <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full border border-red-200">
                        HQ
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{selectedOfficeData.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{selectedOfficeData.teamSize} team members</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Address</p>
                      <p className="text-gray-600 text-sm">{selectedOfficeData.address}</p>
                      <p className="text-gray-600 text-sm">{selectedOfficeData.city}, {selectedOfficeData.country}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Business Hours</p>
                      <p className="text-gray-600 text-sm">{selectedOfficeData.hours}</p>
                      <p className="text-gray-500 text-xs">{selectedOfficeData.timezone}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => window.open(`tel:${selectedOfficeData.phone}`)}
                    className="flex items-center gap-3 w-full p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors group"
                  >
                    <Phone className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <p className="font-medium text-gray-900 text-sm">Phone</p>
                      <p className="text-orange-600 text-sm">{selectedOfficeData.phone}</p>
                    </div>
                  </button>
                  
                  <button
                    onClick={() => window.open(`mailto:${selectedOfficeData.email}`)}
                    className="flex items-center gap-3 w-full p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
                  >
                    <Mail className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <p className="font-medium text-gray-900 text-sm">Email</p>
                      <p className="text-orange-600 text-sm">{selectedOfficeData.email}</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Services */}
              {/* <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Services Available</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedOfficeData.services.map((service, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div> */}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(selectedOfficeData.address + ', ' + selectedOfficeData.city)}`)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </button>
                <button
                  onClick={() => window.open(`tel:${selectedOfficeData.phone}`)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-orange-600 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call Office
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Global Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Global Reach</h3>
            <p className="text-gray-600">Our worldwide presence ensures we're always available when you need us</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">{offices.length}</div>
              <div className="text-gray-600 font-medium">Office Locations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {offices.reduce((sum, office) => sum + office.teamSize, 0)}+
              </div>
              <div className="text-gray-600 font-medium">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Global Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Time Zones</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
