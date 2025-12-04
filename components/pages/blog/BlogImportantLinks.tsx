'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ArrowRight, Globe, FileText, Users, Briefcase } from 'lucide-react';
import Link from 'next/link';

interface BlogImportantLinksProps {
  title?: string;
  description?: string;
}

const BlogImportantLinks: React.FC<BlogImportantLinksProps> = ({
  title = "Important Links & Resources",
  description = "Explore our comprehensive resources, services, and insights to help you succeed in your digital journey."
}) => {
  const linkCategories = [
    {
      title: "Our Services",
      icon: <Briefcase className="w-6 h-6" />,
      links: [
        { name: "Web Development", href: "/services", description: "Custom websites and web applications" },
        { name: "Mobile App Development", href: "/services", description: "iOS and Android applications" },
        { name: "Digital Marketing", href: "/services", description: "SEO, PPC, and social media marketing" },
        { name: "UI/UX Design", href: "/services", description: "User-centered design solutions" },
        { name: "E-commerce Development", href: "/services", description: "Online store solutions" },
        { name: "SEO Services", href: "/services", description: "Search engine optimization" }
      ]
    },
    {
      title: "Company Information",
      icon: <Users className="w-6 h-6" />,
      links: [
        { name: "About Us", href: "/about", description: "Learn about our team and mission" },
        { name: "Our Portfolio", href: "/portfolio", description: "View our latest projects" },
        { name: "Contact Us", href: "/contact", description: "Get in touch with our team" },
        { name: "Where We Serve", href: "/where-we-serve", description: "Our service locations" },
        { name: "Blog", href: "/blog", description: "Latest insights and updates" },
        { name: "Privacy Policy", href: "/privacy", description: "Our privacy practices" }
      ]
    },
    {
      title: "Resources & Insights",
      icon: <FileText className="w-6 h-6" />,
      links: [
        { name: "Blog Archive", href: "/blog/archive", description: "Browse all our articles" },
        { name: "Web Development Guide", href: "/blog/complete-guide-web-development-2024", description: "Comprehensive development guide" },
        { name: "SEO Best Practices", href: "/blog/seo-best-practices-2024", description: "SEO optimization tips" },
        { name: "Digital Marketing Strategies", href: "/blog/digital-marketing-strategies-2024", description: "Marketing insights" },
        { name: "Mobile App Trends", href: "/blog/mobile-app-development-trends-2024", description: "Latest mobile trends" },
        { name: "UI/UX Design Principles", href: "/blog/ui-ux-design-principles-2024", description: "Design best practices" }
      ]
    },
    {
      title: "Location-Based Services",
      icon: <Globe className="w-6 h-6" />,
      links: [
        { name: "Web Development in New York", href: "/where-we-serve/new-york", description: "NY web development services" },
        { name: "Web Development in California", href: "/where-we-serve/california", description: "CA web development services" },
        { name: "Web Development in Texas", href: "/where-we-serve/texas", description: "TX web development services" },
        { name: "Web Development in Florida", href: "/where-we-serve/florida", description: "FL web development services" },
        { name: "Web Development in Illinois", href: "/where-we-serve/illinois", description: "IL web development services" },
        { name: "Web Development in Pennsylvania", href: "/where-we-serve/pennsylvania", description: "PA web development services" }
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 px-4 py-2 text-sm font-medium mb-4">
              Resources
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          {/* Link Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {linkCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.links.map((link, linkIndex) => (
                    <Link 
                      key={linkIndex}
                      href={link.href}
                      className="block group"
                    >
                      <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 group-hover:bg-blue-50">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-1">
                              {link.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {link.description}
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Resources */}
          <div className="mt-16 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Explore our comprehensive services and resources to find the perfect solution for your digital needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Our Services</h4>
                <p className="text-blue-100 text-sm mb-4">
                  Comprehensive web development and digital marketing solutions
                </p>
                <Link 
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-blue-200 transition-colors"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">About Our Team</h4>
                <p className="text-blue-100 text-sm mb-4">
                  Meet our experienced developers and digital experts
                </p>
                <Link 
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-blue-200 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Latest Insights</h4>
                <p className="text-blue-100 text-sm mb-4">
                  Stay updated with industry trends and best practices
                </p>
                <Link 
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-blue-200 transition-colors"
                >
                  Read Blog
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogImportantLinks;


