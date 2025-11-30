'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles, Target, Users, Zap, Globe, Award, TrendingUp, Heart, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CompanyStorySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate story cards on scroll
      gsap.utils.toArray<HTMLElement>('.story-card').forEach((card, index) => {
        gsap.fromTo(card, 
          { 
            opacity: 0, 
            y: 100,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.2
          }
        );
      });

      // Animate timeline items
      gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((item, index) => {
        gsap.fromTo(item,
          {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.1
          }
        );
      });

      // Animate floating elements
      gsap.to('.floating-element', {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const storyHighlights = [
    {
      icon: Sparkles,
      title: "Innovation First",
      description: "We started with a simple belief: technology should empower, not complicate. This philosophy drives every solution we create.",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      bgGradient: "from-blue-50 to-purple-50"
    },
    {
      icon: Users,
      title: "People-Centered",
      description: "Behind every line of code is a human story. We build technology that connects people and transforms lives.",
      gradient: "from-green-500 via-teal-500 to-blue-500",
      bgGradient: "from-green-50 to-teal-50"
    },
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Every project we take on has a clear mission: to solve real problems and create meaningful impact for businesses and their customers.",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "The Spark",
      description: "Founded by passionate developers who saw the gap between complex technology and business needs.",
      icon: Zap,
      stats: "5 Founders",
      color: "blue"
    },
    {
      year: "2020",
      title: "First Breakthrough",
      description: "Delivered our first major e-commerce platform, setting the standard for user-centric design.",
      icon: TrendingUp,
      stats: "50+ Projects",
      color: "green"
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Opened our doors to international clients, bringing our expertise to businesses worldwide.",
      icon: Globe,
      stats: "5 Countries",
      color: "purple"
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Received multiple awards for innovation and excellence in software development.",
      icon: Award,
      stats: "10+ Awards",
      color: "orange"
    },
    {
      year: "2023",
      title: "Community Impact",
      description: "Launched our mentorship program, giving back to the next generation of developers.",
      icon: Heart,
      stats: "100+ Mentees",
      color: "pink"
    },
    {
      year: "2024",
      title: "Future Forward",
      description: "Leading the charge in AI integration and sustainable technology solutions.",
      icon: Shield,
      stats: "150+ Clients",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: "bg-blue-500", text: "text-blue-600", border: "border-blue-200", gradient: "from-blue-500 to-blue-600" },
      green: { bg: "bg-green-500", text: "text-green-600", border: "border-green-200", gradient: "from-green-500 to-green-600" },
      purple: { bg: "bg-purple-500", text: "text-purple-600", border: "border-purple-200", gradient: "from-purple-500 to-purple-600" },
      orange: { bg: "bg-orange-500", text: "text-orange-600", border: "border-orange-200", gradient: "from-orange-500 to-orange-600" },
      pink: { bg: "bg-pink-500", text: "text-pink-600", border: "border-pink-200", gradient: "from-pink-500 to-pink-600" },
      indigo: { bg: "bg-indigo-500", text: "text-indigo-600", border: "border-indigo-200", gradient: "from-indigo-500 to-indigo-600" }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-200/30 to-orange-200/30 rounded-full blur-xl"></div>
        <div className="floating-element absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-green-200/30 to-teal-200/30 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">Our Story</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Crafting Digital
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Excellence </span>
            Since Day One
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            What started as a vision to bridge the gap between complex technology and human needs 
            has evolved into a mission to transform businesses through innovative digital solutions.
          </p>
        </div>

        {/* Story Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {storyHighlights.map((highlight, index) => (
            <div
              key={index}
              className={`story-card group relative bg-gradient-to-br ${highlight.bgGradient} rounded-3xl p-8 border border-white/50 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl`}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${highlight.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${highlight.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {highlight.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Timeline */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Our Journey of
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Innovation</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every milestone tells a story of growth, learning, and our unwavering commitment to excellence.
            </p>
          </div>

          <div ref={timelineRef} className="relative py-10 lg:py-20">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 top-[200px] bottom-[200px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full hidden lg:block"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => {
                const colors = getColorClasses(milestone.color);
                return (
                  <div key={index} className={`timeline-item flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-0 gap-8`}>
                    {/* Content */}
                    <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'} text-center lg:text-inherit`}>
                      <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:scale-105">
                        <div className="flex items-center justify-between mb-6">
                          <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${colors.gradient} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                            <span>{milestone.year}</span>
                          </div>
                          <div className={`text-sm font-semibold ${colors.text} bg-gray-50 px-3 py-1 rounded-full`}>
                            {milestone.stats}
                          </div>
                        </div>
                        
                        <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                          {milestone.title}
                        </h4>
                        
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Timeline Node */}
                    <div className="relative z-10 flex items-center justify-center w-20 h-20 bg-white rounded-full border-4 border-gray-100 shadow-xl group">
                      <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${colors.gradient} rounded-full group-hover:scale-110 transition-transform duration-300`}>
                        <milestone.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Mobile Icon */}
                    <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${colors.gradient} rounded-full lg:hidden mb-4`}>
                      <milestone.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="w-full lg:w-1/2 lg:block hidden"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3Ccircle cx='53' cy='7' r='7'/%3E%3Ccircle cx='7' cy='53' r='7'/%3E%3Ccircle cx='53' cy='53' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses who have transformed their digital presence with our innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStorySection;