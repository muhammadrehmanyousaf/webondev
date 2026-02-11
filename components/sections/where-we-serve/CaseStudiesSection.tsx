'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, Briefcase } from 'lucide-react';
import CaseStudyModal from '@/components/ui/CaseStudyModal';
import InlineCTA from '@/components/ui/inline-cta';

// =============================================================================
// CASE STUDIES SECTION - Updated Design Language
// =============================================================================

interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  teamSize: string;
  results: string[];
  technologies: string[];
  challenges: string[];
  solutions: string[];
  client: string;
  industry: string;
  location: string;
}

interface CaseStudiesSectionProps {
  cityName?: string;
  stateName?: string;
  countryName: string;
}

const CaseStudiesSection = ({ cityName, stateName, countryName }: CaseStudiesSectionProps) => {
  const locationLabel = cityName ? `${cityName}` : stateName ? `${stateName}` : countryName ? `${countryName}` : '';
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "E-commerce Platform Transformation",
      subtitle: "Modernizing retail operations with scalable technology",
      description: "We helped a leading retail chain in the United States transform their legacy e-commerce platform into a modern, scalable solution that increased online sales by 300% and improved customer experience significantly.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1600&auto=format&fit=crop",
      category: "E-commerce",
      duration: "6 months",
      teamSize: "8 developers",
      results: [
        "300% increase in online sales",
        "50% improvement in page load speed",
        "40% reduction in cart abandonment",
        "99.9% uptime achieved"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe", "Redis"],
      challenges: [
        "Legacy system integration complexity",
        "High traffic handling requirements",
        "Real-time inventory management",
        "Multi-payment gateway support"
      ],
      solutions: [
        "Microservices architecture implementation",
        "Cloud-native deployment strategy",
        "Real-time data synchronization",
        "Comprehensive payment integration"
      ],
      client: "RetailCorp Inc.",
      industry: "Retail & E-commerce",
      location: "New York, United States"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      subtitle: "Streamlining patient care with intelligent automation",
      description: "Developed a comprehensive healthcare management system that streamlined patient care processes, reduced administrative overhead by 60%, and improved patient satisfaction scores across multiple facilities.",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1600&auto=format&fit=crop",
      category: "Healthcare",
      duration: "8 months",
      teamSize: "12 developers",
      results: [
        "60% reduction in administrative tasks",
        "45% faster patient check-in process",
        "95% accuracy in medical records",
        "HIPAA compliance achieved"
      ],
      technologies: ["Angular", "Python", "PostgreSQL", "Docker", "Kubernetes", "HL7"],
      challenges: [
        "HIPAA compliance requirements",
        "Integration with existing medical systems",
        "Real-time data synchronization",
        "Multi-location deployment"
      ],
      solutions: [
        "End-to-end encryption implementation",
        "API-first architecture design",
        "Event-driven data synchronization",
        "Containerized deployment strategy"
      ],
      client: "HealthCare Solutions",
      industry: "Healthcare",
      location: "California, United States"
    },
    {
      id: 3,
      title: "Financial Analytics Dashboard",
      subtitle: "Real-time insights for investment decisions",
      description: "Built a sophisticated financial analytics platform that provides real-time market insights, portfolio tracking, and predictive analytics to help investment firms make data-driven decisions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
      category: "FinTech",
      duration: "10 months",
      teamSize: "15 developers",
      results: [
        "Real-time data processing capability",
        "25% improvement in investment decisions",
        "99.99% system reliability",
        "50% faster report generation"
      ],
      technologies: ["Vue.js", "Python", "Apache Kafka", "Elasticsearch", "Redis", "AWS"],
      challenges: [
        "High-frequency data processing",
        "Real-time market data integration",
        "Complex financial calculations",
        "Regulatory compliance requirements"
      ],
      solutions: [
        "Stream processing architecture",
        "Microservices-based data pipeline",
        "Advanced caching strategies",
        "Comprehensive audit trails"
      ],
      client: "InvestTech Capital",
      industry: "Financial Services",
      location: "Texas, United States"
    }
  ];

  const handleCaseStudyClick = (caseStudy: CaseStudy) => {
    setSelectedCaseStudy(caseStudy);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCaseStudy(null);
  };

  return (
    <>
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#030712] overflow-hidden">
        {/* Section Divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 50% 30% at 50% 50%, rgba(6,182,212,0.06), transparent 70%)',
          }}
        />
        <div className="grain absolute inset-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-brand-400 text-sm font-medium mb-4 sm:mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              <span>Case Studies</span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 leading-tight">
              <span className="text-white">{locationLabel} success </span>
              <span className="gradient-text">
                stories
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Real results from real projects. See how we help businesses{locationLabel ? ` like yours in ${locationLabel}` : ''} achieve measurable growth through expert software development.
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                className="group relative cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => handleCaseStudyClick(caseStudy)}
              >
                <motion.div
                  className="relative bg-white/[0.02] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-brand-500/20 transition-all duration-500"
                  whileHover={{ y: -5 }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-40 sm:h-48 lg:h-52">
                    <motion.img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-brand-400 text-[10px] sm:text-xs font-medium">
                        {caseStudy.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 lg:p-6">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm">
                      <div className="flex items-center gap-1 sm:gap-1.5 text-slate-400">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{caseStudy.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-1.5 text-slate-400">
                        <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{caseStudy.teamSize}</span>
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-brand-400 transition-colors line-clamp-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                      {caseStudy.subtitle}
                    </p>

                    <div className="flex items-center text-brand-400 font-semibold text-xs sm:text-sm group-hover:gap-2 transition-all">
                      View Details
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <InlineCTA
            title={locationLabel ? `Want Similar Results in ${locationLabel}?` : 'Want Similar Results?'}
            description={locationLabel ? `Let's discuss how we can deliver the same outcomes for your ${locationLabel} business.` : "Let's discuss how we can transform your business."}
            buttonText="Start Your Project"
          />
        </div>
      </section>

      <CaseStudyModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        caseStudy={selectedCaseStudy}
      />
    </>
  );
};

export default CaseStudiesSection;
