'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Star, Users, Award } from 'lucide-react';
import Link from 'next/link';

interface BlogConclusionProps {
  title?: string;
  summary?: string;
  keyTakeaways?: string[];
  nextSteps?: string[];
}

const BlogConclusion: React.FC<BlogConclusionProps> = ({
  title = "Conclusion: The Future of Web Development",
  summary = "Web development in 2024 represents an exciting intersection of technology, creativity, and user experience. The tools and techniques available today enable developers to create applications that were unimaginable just a few years ago.",
  keyTakeaways = [
    "Modern web development requires mastery of multiple technologies and frameworks",
    "Performance optimization is crucial for user experience and SEO success",
    "Security and accessibility are no longer optional but essential requirements",
    "Continuous learning and adaptation are key to staying competitive",
    "User-centered design and business goals must work together"
  ],
  nextSteps = [
    "Start with the fundamentals: HTML5, CSS3, and modern JavaScript",
    "Choose a framework that aligns with your project requirements",
    "Implement performance optimization from day one",
    "Focus on security best practices and accessibility standards",
    "Stay updated with industry trends and emerging technologies"
  ]
}) => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 px-4 py-2 text-sm font-medium mb-4">
              Conclusion
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {summary}
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-8 h-8 text-yellow-500" />
              <h3 className="text-2xl font-bold text-gray-900">Key Takeaways</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyTakeaways.map((takeaway, index) => (
                <div key={index} className="flex items-start gap-3">
                   <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">{takeaway}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white mb-12">
            <div className="flex items-center gap-3 mb-6">
              <ArrowRight className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold">Next Steps</h3>
            </div>
            <div className="space-y-4">
              {nextSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-blue-100 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">User Experience</h4>
              <p className="text-gray-600 text-sm">
                Focus on creating intuitive, accessible, and engaging user experiences
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Performance</h4>
              <p className="text-gray-600 text-sm">
                Optimize for speed, Core Web Vitals, and search engine rankings
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Quality</h4>
              <p className="text-gray-600 text-sm">
                Maintain high standards in code quality, security, and maintainability
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Web Development Journey?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're a beginner looking to learn or a business seeking professional web development services, we're here to help you succeed in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold">
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <Link href="/services">
                  Explore Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              Join hundreds of satisfied clients who have transformed their digital presence with our expertise
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogConclusion;


