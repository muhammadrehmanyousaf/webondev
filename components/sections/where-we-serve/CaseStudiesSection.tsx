'use client';

import React, { useState } from 'react';
import CaseStudyModal from '@/components/ui/CaseStudyModal';

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
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",
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
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1600&auto=format&fit=crop",
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
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
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
      <section className="py-20 bg-white animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Case studies in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{countryName}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore successful projects that demonstrate our expertise in delivering measurable outcomes for businesses across {countryName}.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <div 
                key={caseStudy.id} 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 hover:-translate-y-2 cursor-pointer"
                onClick={() => handleCaseStudyClick(caseStudy)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {caseStudy.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-sm text-blue-600 font-medium mb-2">Case Study</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {caseStudy.subtitle}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all duration-300">
                      View Details
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="text-sm text-gray-500">
                      {caseStudy.duration}
                    </div>
                  </div>
                </div>
              </div>
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
