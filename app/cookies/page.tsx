import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Cookie, Settings, Shield, Globe, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookie Policy - Solutions Indicator | Cookie Usage & Management',
  description: 'Learn about how Solutions Indicator uses cookies and similar technologies to improve your browsing experience.',
  keywords: 'cookie policy, cookies, tracking, web analytics, privacy, data collection',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/cookies/`,
  },
  openGraph: {
    title: 'Cookie Policy - Solutions Indicator | Cookie Usage & Management',
    description: 'Learn about how Solutions Indicator uses cookies and similar technologies to improve your browsing experience.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/cookies`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy - Solutions Indicator | Cookie Usage & Management',
    description: 'Learn about how Solutions Indicator uses cookies and similar technologies to improve your browsing experience.',
  },
};

export default function CookiePage() {
  const lastUpdated = "January 15, 2025";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
              <Cookie className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              This policy explains how we use cookies and similar technologies on our website.
            </p>
            <p className="text-sm text-gray-500">
              Last updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              {/* What Are Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Cookie className="w-6 h-6 text-blue-600" />
                  What Are Cookies?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cookies are small text files that are stored on your device when you visit a website. They help websites remember information about your visit, such as your preferred language and other settings, which can make your next visit easier and the site more useful to you.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar technologies (such as web beacons, pixels, and local storage) to enhance your experience on our website, analyze usage patterns, and provide personalized content and advertisements.
                </p>
              </div>

              {/* Types of Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Settings className="w-6 h-6 text-green-600" />
                  Types of Cookies We Use
                </h2>
                
                <div className="space-y-8">
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                    <p className="text-gray-700 mb-3">
                      These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Examples:</strong> Session management, security tokens, load balancing
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Cookies</h3>
                    <p className="text-gray-700 mb-3">
                      These cookies collect information about how visitors use our website, such as which pages are visited most often and if users get error messages.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Examples:</strong> Google Analytics, page load times, error tracking
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Functionality Cookies</h3>
                    <p className="text-gray-700 mb-3">
                      These cookies allow the website to remember choices you make and provide enhanced, more personal features.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Examples:</strong> Language preferences, theme settings, form data
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
                    <p className="text-gray-700 mb-3">
                      These cookies are used to deliver advertisements more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Examples:</strong> Google Ads, Facebook Pixel, retargeting pixels
                    </p>
                  </div>
                </div>
              </div>

              {/* Third-Party Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-purple-600" />
                  Third-Party Cookies
                </h2>
                <p className="text-gray-700 mb-4">
                  We may use third-party services that set cookies on our website. These services include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                  <li><strong>Google Ads:</strong> For advertising and conversion tracking</li>
                  <li><strong>Facebook Pixel:</strong> For social media advertising and analytics</li>
                  <li><strong>LinkedIn Insight Tag:</strong> For professional network advertising</li>
                  <li><strong>Hotjar:</strong> For user behavior analysis and heatmaps</li>
                  <li><strong>Intercom:</strong> For customer support and live chat</li>
                </ul>
                <p className="text-gray-700">
                  These third parties have their own privacy policies and cookie practices. We recommend reviewing their policies to understand how they use your information.
                </p>
              </div>

              {/* Cookie Management */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Settings className="w-6 h-6 text-orange-600" />
                  Managing Your Cookie Preferences
                </h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser Settings</h3>
                <p className="text-gray-700 mb-4">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>View what cookies are stored on your device</li>
                  <li>Delete cookies individually or all at once</li>
                  <li>Block cookies from specific sites</li>
                  <li>Block all cookies</li>
                  <li>Set preferences for third-party cookies</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser-Specific Instructions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Chrome</h4>
                    <p className="text-sm text-gray-700">Settings → Privacy and Security → Cookies and other site data</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Firefox</h4>
                    <p className="text-sm text-gray-700">Options → Privacy & Security → Cookies and Site Data</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Safari</h4>
                    <p className="text-sm text-gray-700">Preferences → Privacy → Manage Website Data</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Edge</h4>
                    <p className="text-sm text-gray-700">Settings → Cookies and site permissions → Cookies and site data</p>
                  </div>
                </div>
              </div>

              {/* Opt-Out Options */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Opt-Out Options</h2>
                <p className="text-gray-700 mb-4">
                  You can opt out of specific tracking services:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:text-blue-700 underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
                  <li><strong>Google Ads:</strong> <a href="https://adssettings.google.com/" className="text-blue-600 hover:text-blue-700 underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a></li>
                  <li><strong>Facebook:</strong> <a href="https://www.facebook.com/settings?tab=ads" className="text-blue-600 hover:text-blue-700 underline" target="_blank" rel="noopener noreferrer">Facebook Ad Preferences</a></li>
                  <li><strong>Network Advertising Initiative:</strong> <a href="http://optout.networkadvertising.org/" className="text-blue-600 hover:text-blue-700 underline" target="_blank" rel="noopener noreferrer">NAI Opt-out Tool</a></li>
                </ul>
              </div>

              {/* Impact of Disabling Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-red-600" />
                  Impact of Disabling Cookies
                </h2>
                <p className="text-gray-700 mb-4">
                  Please note that disabling cookies may affect your experience on our website:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Some features may not work properly</li>
                  <li>You may need to re-enter information repeatedly</li>
                  <li>Personalized content may not be available</li>
                  <li>Website performance may be impacted</li>
                  <li>Some forms may not function correctly</li>
                </ul>
              </div>

              {/* Data Retention */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Data Retention</h2>
                <p className="text-gray-700 mb-4">
                  Different types of cookies have different retention periods:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain for a set period (typically 30 days to 2 years)</li>
                  <li><strong>Analytics Cookies:</strong> Usually retained for 26 months</li>
                  <li><strong>Marketing Cookies:</strong> Typically retained for 30-90 days</li>
                </ul>
              </div>

              {/* Updates to Policy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
                <p className="text-gray-700">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">muhammadrehmanyousaf786@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">+92 310 6803687</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-purple-600 mt-0.5" />
                    <div className="text-gray-700">
                      <div>Solutions Indicator</div>
                      <div>Lahore Tech Hub, Suite 100</div>
                      <div>Lahore, Pakistan</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}