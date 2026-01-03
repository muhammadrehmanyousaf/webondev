import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FileText, Scale, Shield, AlertTriangle, Users, Globe, Mail, Phone, Smartphone, Trash2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - Web On Dev | Legal Terms & Conditions',
  description: 'Read our Terms of Service to understand the legal terms and conditions for using Web On Dev services.',
  keywords: 'terms of service, legal terms, conditions, user agreement, service agreement, Meta app, Facebook',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/terms/`,
  },
  openGraph: {
    title: 'Terms of Service - Web On Dev | Legal Terms & Conditions',
    description: 'Read our Terms of Service to understand the legal terms and conditions for using Web On Dev services.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/terms`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service - Web On Dev | Legal Terms & Conditions',
    description: 'Read our Terms of Service to understand the legal terms and conditions for using Web On Dev services.',
  },
};

export default function TermsPage() {
  const lastUpdated = "January 3, 2026";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Please read these terms carefully before using our services. By using our services, you agree to these terms.
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

              {/* Agreement */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Scale className="w-6 h-6 text-blue-600" />
                  Agreement to Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and Web On Dev (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) regarding your use of our website, services, mobile applications, and products. By accessing or using our services, including through third-party platforms like Meta (Facebook/Instagram), you agree to be bound by these Terms.
                </p>
              </div>

              {/* Services Description */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Users className="w-6 h-6 text-green-600" />
                  Our Services
                </h2>
                <p className="text-gray-700 mb-4">Web On Dev provides comprehensive software development services including:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Web development and design</li>
                  <li>Mobile application development</li>
                  <li>Custom software solutions</li>
                  <li>UI/UX design services</li>
                  <li>Digital marketing and SEO</li>
                  <li>E-commerce development</li>
                  <li>Cloud services and DevOps</li>
                  <li>Consulting and strategy services</li>
                </ul>
              </div>

              {/* Meta Platform Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                  Meta Platform Integration
                </h2>
                <p className="text-gray-700 mb-4">
                  When you access our services through Meta platforms (Facebook, Instagram), the following additional terms apply:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>You must comply with Meta&apos;s Terms of Service and Community Standards</li>
                  <li>We may access certain information from your Meta profile as described in our <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</Link></li>
                  <li>You grant us permission to use the data you authorize through Meta login</li>
                  <li>You can revoke our access at any time through your Meta account settings</li>
                  <li>Meta is not responsible for our services or any content provided through our platform</li>
                </ul>
                <p className="text-gray-700">
                  Our use of information received from Meta APIs will adhere to Meta&apos;s Platform Terms and Developer Policies.
                </p>
              </div>

              {/* User Responsibilities */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-purple-600" />
                  User Responsibilities
                </h2>
                <p className="text-gray-700 mb-4">By using our services, you agree to:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not interfere with or disrupt our services</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Pay all fees and charges in a timely manner</li>
                </ul>
              </div>

              {/* Prohibited Uses */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  Prohibited Uses
                </h2>
                <p className="text-gray-700 mb-4">You may not use our services to:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Violate any laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit harmful or malicious code</li>
                  <li>Engage in fraudulent activities</li>
                  <li>Harass, abuse, or harm others</li>
                  <li>Spam or send unsolicited communications</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Reverse engineer or copy our services</li>
                  <li>Scrape or collect data in violation of Meta&apos;s Platform Terms</li>
                  <li>Use automated systems to access our services without permission</li>
                </ul>
              </div>

              {/* Account and Data Deletion */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Trash2 className="w-6 h-6 text-gray-600" />
                  Account and Data Deletion
                </h2>
                <p className="text-gray-700 mb-4">
                  You have the right to request deletion of your account and associated data at any time. This includes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>All personal information provided to us</li>
                  <li>Data obtained through Meta/Facebook login</li>
                  <li>Account preferences and settings</li>
                  <li>Communication history with our team</li>
                </ul>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-4">
                  <p className="text-gray-700 mb-3">
                    To request account or data deletion, please visit:
                  </p>
                  <Link
                    href="/data-deletion"
                    className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    Data Deletion Instructions
                  </Link>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Intellectual Property</h3>
                <p className="text-gray-700 mb-4">
                  All content, features, and functionality of our services, including but not limited to text, graphics, logos, images, and software, are owned by Web On Dev and are protected by copyright, trademark, and other intellectual property laws.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Client Intellectual Property</h3>
                <p className="text-gray-700 mb-6">
                  Upon full payment for custom development work, clients retain ownership of their custom code, designs, and content created specifically for their project. We retain the right to use general methodologies, techniques, and know-how developed during the project.
                </p>
              </div>

              {/* Payment Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Payment terms are specified in individual service agreements</li>
                  <li>Typical payment structure: 30% upfront, 40% at milestone, 30% on completion</li>
                  <li>Late payments may incur additional fees</li>
                  <li>All prices are in USD unless otherwise specified</li>
                  <li>Refunds are subject to our refund policy</li>
                  <li>Clients are responsible for any applicable taxes</li>
                </ul>
              </div>

              {/* Service Level Agreement */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Level Agreement</h2>
                <p className="text-gray-700 mb-4">We strive to provide high-quality services and commit to:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>99% uptime for hosted services</li>
                  <li>Response to support requests within 24 hours</li>
                  <li>Regular project updates and communication</li>
                  <li>Quality assurance and testing procedures</li>
                  <li>Professional project management</li>
                </ul>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  To the maximum extent permitted by law, Web On Dev shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
                </p>
                <p className="text-gray-700">
                  Our total liability for any claims arising from or related to our services shall not exceed the amount paid by you for the specific service giving rise to the claim.
                </p>
              </div>

              {/* Warranties and Disclaimers */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Warranties and Disclaimers</h2>
                <p className="text-gray-700 mb-4">
                  We provide our services &quot;as is&quot; and &quot;as available.&quot; While we strive for excellence, we make no warranties regarding:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Uninterrupted or error-free service</li>
                  <li>Complete security of data transmission</li>
                  <li>Compatibility with all systems or browsers</li>
                  <li>Achievement of specific business results</li>
                </ul>
              </div>

              {/* Third-Party Services Disclaimer */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
                <p className="text-gray-700 mb-4">
                  Our services may integrate with third-party platforms including Meta (Facebook, Instagram). Please note:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>We are not responsible for third-party platform availability or performance</li>
                  <li>Third-party services are governed by their own terms and policies</li>
                  <li>Changes to third-party APIs may affect our service functionality</li>
                  <li>We are not affiliated with or endorsed by Meta Platforms, Inc.</li>
                </ul>
              </div>

              {/* Indemnification */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
                <p className="text-gray-700">
                  You agree to indemnify and hold harmless Web On Dev from any claims, damages, losses, or expenses arising from your use of our services, violation of these Terms, or infringement of any third-party rights.
                </p>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                <p className="text-gray-700 mb-4">
                  Either party may terminate services with written notice. Upon termination:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>All outstanding payments become due immediately</li>
                  <li>Access to our services will be discontinued</li>
                  <li>Confidentiality obligations remain in effect</li>
                  <li>Client retains ownership of completed deliverables</li>
                  <li>You may request deletion of your data per our <Link href="/data-deletion" className="text-blue-600 hover:text-blue-700 underline">Data Deletion Instructions</Link></li>
                </ul>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-700">
                  These Terms are governed by the laws of the State of California, United States, without regard to conflict of law principles. Any disputes shall be resolved in the courts of San Francisco County, California.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <p className="text-gray-700">
                  We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or website notice. Continued use of our services after changes constitutes acceptance of the new Terms.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">legal@webondev.com</span>
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
