'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube, ArrowRight, Globe, Shield, Award, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { SiTiktok, SiPinterest, SiReddit } from 'react-icons/si';
import { siteStructure } from '@/lib/site-structure';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleEmailClick = () => {
    window.open('mailto:muhammadrehmanyousaf786@gmail.com');
  };

  const handlePhoneClick = () => {
    window.open('tel:+923106803687');
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Try primary API first, then fallback to Formspree
      let response;
      try {
        response = await fetch('/api/leads', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: 'Newsletter Subscriber',
            email: email,
            formType: 'newsletter',
            message: `Newsletter subscription from: ${email}`
          }),
        });
      } catch (error) {
        // Fallback to Formspree
        response = await fetch('https://formspree.io/f/xpwzgkqr', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            _replyto: email,
            _subject: 'Newsletter Subscription',
            message: `Newsletter subscription from: ${email}`
          }),
        });
      }

      if (response.ok) {
        toast({
          title: "Successfully Subscribed!",
          description: "Thank you for subscribing to our newsletter.",
        });
        setEmail('');
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const companyInfo = {
    name: "Web On Dev",
    tagline: "Transforming businesses through innovative software solutions",
    description: "We are a leading software development company specializing in custom web applications, mobile apps, and digital transformation services for businesses worldwide."
  };

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" }
  ];

  const services = [
    { name: "Web Development", href: "/web-development" },
    { name: "Mobile Apps", href: "/mobile-development" },
    { name: "UI/UX Design", href: "/ui-ux-design" },
    { name: "Digital Marketing", href: "/digital-marketing" },
    { name: "Cloud Services", href: "/cloud-devops" },
    { name: "Consulting", href: "/consulting-strategy" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Sitemap", href: "/sitemap" }
  ];

  const socialLinks = [
    { icon: Youtube, href: "https://www.youtube.com/@webondev", label: "YouTube" },
    { icon: Twitter, href: "https://x.com/webon_dev", label: "X (Twitter)" },
    { icon: Facebook, href: "https://www.facebook.com/people/Web-On-Dev/61584774954945/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/webondev/", label: "Instagram" },
    // { icon: Linkedin, href: "https://www.linkedin.com/company/solutions-indicator/", label: "LinkedIn" },
    // { icon: SiTiktok, href: "https://www.tiktok.com/@webondev.com", label: "TikTok" },
    // { icon: SiPinterest, href: "https://www.pinterest.com/webondev/", label: "Pinterest" },
    // { icon: SiReddit, href: "https://www.reddit.com/u/webondev/s/myNp9ZusS9", label: "Reddit" }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3Ccircle cx='53' cy='7' r='7'/%3E%3Ccircle cx='7' cy='53' r='7'/%3E%3Ccircle cx='53' cy='53' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Stay Updated with Our Latest Insights
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Subscribe to our newsletter for the latest trends in software development and exclusive updates.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input type="hidden" name="_subject" value="Newsletter Subscription" />
                <input type="hidden" name="_next" value="/" />
                <div className="flex-1">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-gray-800 border border-orange-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Subscribe
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Information */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/50">
                  <span className="text-white font-bold text-lg">WD</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{companyInfo.name}</h3>
                  <p className="text-orange-400 text-sm font-medium">{companyInfo.tagline}</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                {companyInfo.description}
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <button 
                  onClick={handleEmailClick}
                  className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-all duration-200 group w-full text-left hover:translate-x-1"
                >
                  <Mail className="w-4 h-4 text-orange-400" />
                  <span className="text-sm break-all">muhammadrehmanyousaf786@gmail.com</span>
                </button>

                <button 
                  onClick={handlePhoneClick}
                  className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-all duration-200 group w-full text-left hover:translate-x-1"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span className="text-sm">+92 310 6803687</span>
                </button>

                <div className="flex items-center space-x-3 text-gray-300 group hover:text-orange-400 transition-all duration-200">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span className="text-sm">Pakistan, Dubai, US & Canada</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-orange-400 transition-all duration-200 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:text-orange-400 transition-all duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      href={service.href}
                      className="text-gray-300 hover:text-orange-400 transition-all duration-200 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:text-orange-400 transition-all duration-200" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Social */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Legal</h4>
              <ul className="space-y-3 mb-8">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-orange-400 transition-all duration-200 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:text-orange-400 transition-all duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div>
                <h5 className="text-sm font-semibold text-white mb-4">Follow Us</h5>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-lg flex items-center justify-center hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-110 group shadow-lg hover:shadow-orange-500/50"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4 text-orange-400 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4"> */}
              
              {/* Copyright */}
              {/* <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © {currentYear} {companyInfo.name}. All rights reserved.
                </p>
              </div> */}

              {/* Trust Indicators */}
              {/* <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-orange-400" />
                  <span>Global Presence</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-orange-400" />
                  <span>Secure & Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-orange-400" />
                  <span>Award Winning</span>
                </div>
              </div>
            </div>
          </div> */}

          {/* Agency Partnerships */}
          <div className="border-t border-gray-800 pt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h5 className="text-sm font-semibold text-white mb-6">Trusted By Industry Leaders</h5>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-8">
                <a href="https://clutch.co/profile/solutions-indicator" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-4 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 group hover:shadow-lg hover:shadow-orange-500/30">
                   <span className="text-gray-400 group-hover:text-white font-medium">Clutch</span>
                </a>
                <a href="https://www.goodfirms.co/company/solutions-indicator" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-4 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 group hover:shadow-lg hover:shadow-orange-500/30">
                   <span className="text-gray-400 group-hover:text-white font-medium">GoodFirms</span>
                </a>
                <a href="https://www.designrush.com/agency/profile/solutions-indicator" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-4 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 group hover:shadow-lg hover:shadow-orange-500/30">
                   <span className="text-gray-400 group-hover:text-white font-medium">DesignRush</span>
                </a>
                <a href="https://www.upwork.com/agency-profile/solutions-indicator" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-4 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 group hover:shadow-lg hover:shadow-orange-500/30">
                   <span className="text-gray-400 group-hover:text-white font-medium">Upwork</span>
                </a>
                <a href="https://www.themanifest.com/profile/solutions-indicator" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-4 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 group hover:shadow-lg hover:shadow-orange-500/30">
                   <span className="text-gray-400 group-hover:text-white font-medium">The Manifest</span>
                </a>
                <a href="https://www.g2.com/products/solutions-indicator" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-4 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 group hover:shadow-lg hover:shadow-orange-500/30">
                   <span className="text-gray-400 group-hover:text-white font-medium">G2</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar with Copyright */}
          <div className="border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                  <p className="text-gray-400 text-sm">
                    © {currentYear} {companyInfo.name}. All rights reserved.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-400" />
                    <span>Global Presence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-orange-400" />
                    <span>Secure & Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-purple-400" />
                    <span>Award Winning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;