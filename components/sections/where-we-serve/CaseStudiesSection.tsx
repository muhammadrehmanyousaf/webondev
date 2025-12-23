'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, Briefcase, Sparkles } from 'lucide-react';
import CaseStudyModal from '@/components/ui/CaseStudyModal';

// =============================================================================
// CASE STUDIES SECTION - Premium Emerald Green Design
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
  countryName: string;
}

const CaseStudiesSection = ({ countryName }: CaseStudiesSectionProps) => {
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

  const gradients = [
    'from-brand-500 to-teal-500',
    'from-teal-500 to-cyan-500',
    'from-cyan-500 to-blue-500'
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
      <section className="relative py-20 lg:py-32 bg-slate-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-brand-500/15 rounded-full blur-[120px]"
            animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-teal-500/15 rounded-full blur-[120px]"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-semibold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Briefcase className="w-4 h-4" />
              <span>Case Studies</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Case Studies in </span>
              <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                {countryName}
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Explore successful projects that demonstrate our expertise in delivering measurable outcomes for businesses across {countryName}.
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradients[index]} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                <motion.div
                  className="relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-brand-500/50 transition-all duration-500"
                  whileHover={{ y: -5 }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-52">
                    <motion.img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${gradients[index]} text-white text-xs font-semibold shadow-lg`}>
                        {caseStudy.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Clock className="w-4 h-4" />
                        {caseStudy.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Users className="w-4 h-4" />
                        {caseStudy.teamSize}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors line-clamp-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                      {caseStudy.subtitle}
                    </p>

                    <div className="flex items-center text-brand-400 font-semibold text-sm group-hover:gap-2 transition-all">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
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
