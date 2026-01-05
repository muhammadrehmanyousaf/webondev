import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Shield, Eye, Lock, Database, Users, Globe, Mail, Phone, Smartphone, Share2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Web On Dev | Data Protection & Privacy',
  description: 'Learn how Web On Dev protects your privacy and handles your personal data. Our comprehensive privacy policy explains our data practices.',
  keywords: 'privacy policy, data protection, GDPR, personal data, privacy rights, Facebook login, Google login, social media login',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/privacy/`,
  },
  openGraph: {
    title: 'Privacy Policy - Web On Dev | Data Protection & Privacy',
    description: 'Learn how Web On Dev protects your privacy and handles your personal data. Our comprehensive privacy policy explains our data practices.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/privacy`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Web On Dev | Data Protection & Privacy',
    description: 'Learn how Web On Dev protects your privacy and handles your personal data. Our comprehensive privacy policy explains our data practices.',
  },
};

export default function PrivacyPage() {
  const lastUpdated = "January 3, 2026";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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

              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Eye className="w-6 h-6 text-blue-600" />
                  Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Web On Dev (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, mobile applications, or interact with us through third-party platforms including social media networks.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Database className="w-6 h-6 text-green-600" />
                  Information We Collect
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                <p className="text-gray-700 mb-4">We may collect personal information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Company information and job title</li>
                  <li>Project requirements and business needs</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                <p className="text-gray-700 mb-4">We automatically collect certain information when you visit our website:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referral sources and search terms</li>
                </ul>
              </div>

              {/* Social Media Login & Data Collection */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                  Social Media Login & Data Collection
                </h2>
                <p className="text-gray-700 mb-4">
                  When you use social login or connect through third-party platforms to access our services, we may collect information from your social media accounts. Below are the platforms we support and the data we collect:
                </p>

                {/* Facebook/Meta */}
                <div className="bg-blue-50 rounded-xl p-5 border border-blue-200 mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Facebook / Meta (Instagram)</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                    <li>Public profile (name, profile picture)</li>
                    <li>Email address</li>
                    <li>User ID</li>
                  </ul>
                </div>

                {/* Google */}
                <div className="bg-red-50 rounded-xl p-5 border border-red-200 mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Google</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                    <li>Name and profile picture</li>
                    <li>Email address</li>
                    <li>Google User ID</li>
                  </ul>
                </div>

                {/* Twitter/X */}
                <div className="bg-gray-100 rounded-xl p-5 border border-gray-300 mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Twitter / X</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                    <li>Username and display name</li>
                    <li>Profile picture</li>
                    <li>Email address (if available)</li>
                    <li>Twitter User ID</li>
                  </ul>
                </div>

                {/* LinkedIn */}
                <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">LinkedIn</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                    <li>Name and profile picture</li>
                    <li>Email address</li>
                    <li>LinkedIn User ID</li>
                    <li>Professional headline (if authorized)</li>
                  </ul>
                </div>

                {/* Apple */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Apple</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                    <li>Name (as shared by you)</li>
                    <li>Email address (or private relay email)</li>
                    <li>Apple User ID</li>
                  </ul>
                </div>

                {/* TikTok */}
                <div className="bg-pink-50 rounded-xl p-5 border border-pink-200 mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">TikTok</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                    <li>Display name and username</li>
                    <li>Profile picture</li>
                    <li>TikTok User ID</li>
                  </ul>
                </div>

                {/* GitHub */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-1 text-sm">
                    <li>Username and display name</li>
                    <li>Profile picture</li>
                    <li>Email address</li>
                    <li>GitHub User ID</li>
                  </ul>
                </div>

                <p className="text-gray-700 mt-6 mb-4">
                  We use this information to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Create and authenticate your account</li>
                  <li>Personalize your experience on our platform</li>
                  <li>Communicate with you about our services</li>
                  <li>Provide customer support</li>
                </ul>
                <p className="text-gray-700">
                  You can revoke our access to your social media data at any time through the respective platform&apos;s settings or by contacting us directly.
                </p>
              </div>

              {/* How We Use Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Users className="w-6 h-6 text-purple-600" />
                  How We Use Your Information
                </h2>
                <p className="text-gray-700 mb-4">We use the information we collect for various purposes:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Provide and maintain our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send administrative information and updates</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Send marketing and promotional communications (with consent)</li>
                  <li>Monitor and analyze usage and trends</li>
                  <li>Detect, prevent, and address technical issues</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Share2 className="w-6 h-6 text-orange-600" />
                  Information Sharing and Disclosure
                </h2>
                <p className="text-gray-700 mb-4">We may share your information in the following situations:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
                </ul>
                <p className="text-gray-700">
                  We do not sell, trade, or rent your personal information to third parties for marketing purposes.
                </p>
              </div>

              {/* Third-Party Platforms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-indigo-600" />
                  Third-Party Platforms & Social Networks
                </h2>
                <p className="text-gray-700 mb-4">
                  Our services may integrate with various third-party platforms and social networks. When you use these integrations:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Your use is subject to each platform&apos;s Privacy Policy and Terms of Service</li>
                  <li>We only request permissions necessary for our services to function</li>
                  <li>We do not store your social media passwords</li>
                  <li>You can disconnect your accounts at any time</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  For information about each platform&apos;s privacy practices, please visit:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Meta (Facebook/Instagram) Privacy Policy</a></li>
                  <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Google Privacy Policy</a></li>
                  <li><a href="https://twitter.com/en/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Twitter/X Privacy Policy</a></li>
                  <li><a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">LinkedIn Privacy Policy</a></li>
                  <li><a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Apple Privacy Policy</a></li>
                  <li><a href="https://www.tiktok.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">TikTok Privacy Policy</a></li>
                  <li><a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">GitHub Privacy Statement</a></li>
                </ul>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Lock className="w-6 h-6 text-red-600" />
                  Data Security
                </h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers and databases</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Employee training on data protection</li>
                </ul>
              </div>

              {/* Data Retention and Deletion */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention and Deletion</h2>
                <p className="text-gray-700 mb-4">
                  We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. You have the right to request deletion of your data at any time.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Request Data Deletion</h3>
                  <p className="text-gray-700 mb-3">
                    To request deletion of your data, including data obtained through social media login (Facebook, Google, Twitter, LinkedIn, Apple, TikTok, GitHub, etc.), please visit our dedicated data deletion page:
                  </p>
                  <Link
                    href="/data-deletion"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Data Deletion Instructions
                  </Link>
                </div>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
                <p className="text-gray-700 mb-4">Depending on your location, you may have the following rights:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Restriction:</strong> Request restriction of processing</li>
                </ul>
              </div>

              {/* Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar tracking technologies to enhance your experience. For detailed information about our cookie practices, please see our <Link href="/cookies" className="text-blue-600 hover:text-blue-700 underline">Cookie Policy</Link>.
                </p>
              </div>

              {/* International Transfers */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
                <p className="text-gray-700">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Children&apos;s Privacy</h2>
                <p className="text-gray-700">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.
                </p>
              </div>

              {/* Changes to Policy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this policy periodically.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions about this Privacy Policy, our data practices, or wish to exercise your privacy rights, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">privacy@webondev.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-purple-600 mt-0.5" />
                    <div className="text-gray-700">
                      <div>Web On Dev</div>
                      <div>123 Tech Street, Suite 100</div>
                      <div>San Francisco, CA 94107</div>
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
