'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Globe, FileText, Users, Briefcase, LinkIcon } from 'lucide-react';
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
      icon: <Briefcase className="w-5 h-5" />,
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
      icon: <Users className="w-5 h-5" />,
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
      icon: <FileText className="w-5 h-5" />,
      links: [
        { name: "Blog Archive", href: "/blog/archive", description: "Browse all our articles" },
        { name: "Web Development Guide", href: "/blog/complete-guide-web-development-2024", description: "Comprehensive development guide" },
        { name: "React Performance Guide", href: "/blog/react-performance-optimization-guide", description: "React optimization tips" },
        { name: "Next.js 14 Features", href: "/blog/nextjs-14-features-complete-guide", description: "Next.js deep dive" },
        { name: "TypeScript Best Practices", href: "/blog/typescript-best-practices-2024", description: "TypeScript patterns" },
        { name: "Web Security Guide", href: "/blog/web-security-best-practices-2024", description: "Security best practices" }
      ]
    },
    {
      title: "Location-Based Services",
      icon: <Globe className="w-5 h-5" />,
      links: [
        { name: "Web Development in New York", href: "/where-we-serve/united-states/new-york", description: "NY web development services" },
        { name: "Web Development in California", href: "/where-we-serve/united-states/california", description: "CA web development services" },
        { name: "Web Development in Texas", href: "/where-we-serve/united-states/texas", description: "TX web development services" },
        { name: "Web Development in Florida", href: "/where-we-serve/united-states/florida", description: "FL web development services" },
        { name: "Web Development in Illinois", href: "/where-we-serve/united-states/illinois", description: "IL web development services" },
        { name: "Web Development in Pennsylvania", href: "/where-we-serve/united-states/pennsylvania", description: "PA web development services" }
      ]
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#030712] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 50% 0%, rgba(6,182,212,0.04), transparent 70%)',
        }}
      />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5"
            style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.08))' }}
          >
            <LinkIcon className="w-6 h-6 sm:w-7 sm:h-7 text-brand-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Link Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {linkCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:border-brand-500/20 transition-colors">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.08))' }}
                >
                  <span className="text-brand-400">{category.icon}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-2.5">
                {category.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="block group"
                  >
                    <div className="bg-white/[0.02] rounded-lg p-3 border border-white/[0.04] hover:border-brand-500/20 hover:bg-white/[0.04] transition-all duration-300">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-white group-hover:text-brand-400 transition-colors text-sm mb-0.5">
                            {link.name}
                          </h4>
                          <p className="text-xs text-slate-500">
                            {link.description}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-brand-400 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-0.5" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-10 sm:mt-14">
          <div
            className="rounded-xl sm:rounded-2xl p-6 sm:p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(6,182,212,0.04) 100%)',
            }}
          >
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-slate-400 max-w-xl mx-auto text-sm">
                Explore our comprehensive services and resources to find the perfect solution for your digital needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {[
                { icon: Briefcase, title: 'Our Services', desc: 'Comprehensive web development and digital marketing solutions', href: '/services', label: 'Explore Services' },
                { icon: Users, title: 'About Our Team', desc: 'Meet our experienced developers and digital experts', href: '/about', label: 'Meet Our Team' },
                { icon: FileText, title: 'Latest Insights', desc: 'Stay updated with industry trends and best practices', href: '/blog', label: 'Read Blog' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                  >
                    <item.icon className="w-6 h-6 text-brand-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-1.5 text-sm">{item.title}</h4>
                  <p className="text-slate-400 text-xs mb-3">
                    {item.desc}
                  </p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-400 hover:text-brand-300 transition-colors"
                  >
                    {item.label}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogImportantLinks;
