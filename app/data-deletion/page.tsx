import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Trash2, Mail, Clock, CheckCircle, AlertCircle, Shield, Phone, Globe } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Data Deletion Instructions - Web On Dev | Delete Your Data',
  description: 'Learn how to request deletion of your personal data from Web On Dev. Complete instructions for deleting your account and Facebook/Meta data.',
  keywords: 'data deletion, delete account, remove data, Facebook data deletion, Meta data deletion, GDPR, privacy rights',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/data-deletion/`,
  },
  openGraph: {
    title: 'Data Deletion Instructions - Web On Dev | Delete Your Data',
    description: 'Learn how to request deletion of your personal data from Web On Dev. Complete instructions for deleting your account and Facebook/Meta data.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/data-deletion`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Deletion Instructions - Web On Dev | Delete Your Data',
    description: 'Learn how to request deletion of your personal data from Web On Dev. Complete instructions for deleting your account and Facebook/Meta data.',
  },
};

export default function DataDeletionPage() {
  const lastUpdated = "January 3, 2026";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-6">
              <Trash2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Data Deletion Instructions
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Learn how to request deletion of your personal data from our services, including data obtained through Facebook/Meta login.
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
                  <Shield className="w-6 h-6 text-blue-600" />
                  Your Right to Data Deletion
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Web On Dev, we respect your privacy and your right to control your personal data. You can request deletion of your data at any time, and we will process your request in accordance with applicable data protection laws including GDPR and CCPA.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This page provides instructions for requesting deletion of your data, including any information obtained through Facebook/Meta login integration.
                </p>
              </div>

              {/* What Data We Delete */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Data Will Be Deleted</h2>
                <p className="text-gray-700 mb-4">When you request data deletion, we will remove the following information:</p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Information</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Name and profile information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Email address</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Phone number</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Account preferences</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Facebook/Meta Data</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Facebook User ID</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Profile picture URL</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Public profile information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Access tokens</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Additional Data</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Communication history and support tickets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Usage data and analytics associated with your account</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Any files or content you uploaded</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* How to Request Deletion */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Mail className="w-6 h-6 text-purple-600" />
                  How to Request Data Deletion
                </h2>
                <p className="text-gray-700 mb-6">
                  You can request deletion of your data using any of the following methods:
                </p>

                {/* Method 1: Email */}
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Option 1: Email Request</h3>
                  <p className="text-gray-700 mb-4">
                    Send an email to our privacy team with the subject line &quot;Data Deletion Request&quot;:
                  </p>
                  <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-purple-100">
                    <Mail className="w-6 h-6 text-purple-600" />
                    <a href="mailto:privacy@webondev.com?subject=Data%20Deletion%20Request" className="text-purple-600 hover:text-purple-700 font-medium text-lg">
                      privacy@webondev.com
                    </a>
                  </div>
                  <p className="text-gray-600 mt-4 text-sm">
                    Please include the email address associated with your account in your request.
                  </p>
                </div>

                {/* Method 2: Contact Form */}
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-200 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Option 2: Contact Form</h3>
                  <p className="text-gray-700 mb-4">
                    Use our contact form and select &quot;Data Deletion&quot; as the subject:
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    Go to Contact Form
                  </Link>
                </div>

                {/* Method 3: For Facebook Users */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Option 3: Facebook Users</h3>
                  <p className="text-gray-700 mb-4">
                    If you signed up using Facebook Login, you can also revoke our app&apos;s access directly from your Facebook settings:
                  </p>
                  <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
                    <li>Go to your Facebook Settings</li>
                    <li>Navigate to &quot;Security and Login&quot; → &quot;Apps and Websites&quot;</li>
                    <li>Find &quot;Web On Dev&quot; in the list of connected apps</li>
                    <li>Click &quot;Remove&quot; to revoke access</li>
                  </ol>
                  <p className="text-gray-600 text-sm">
                    Note: Revoking access from Facebook will prevent future data sharing but will not automatically delete data already stored. Please also submit a deletion request using Option 1 or 2 above for complete removal.
                  </p>
                </div>
              </div>

              {/* Processing Time */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-orange-600" />
                  Processing Time
                </h2>
                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-semibold">1</span>
                      </div>
                      <div>
                        <strong className="text-gray-900">Acknowledgment:</strong> We will acknowledge your request within 48 hours of receipt.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-semibold">2</span>
                      </div>
                      <div>
                        <strong className="text-gray-900">Verification:</strong> We may contact you to verify your identity before processing the deletion.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-semibold">3</span>
                      </div>
                      <div>
                        <strong className="text-gray-900">Deletion:</strong> Your data will be permanently deleted within 30 days of verification.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-semibold">4</span>
                      </div>
                      <div>
                        <strong className="text-gray-900">Confirmation:</strong> You will receive an email confirmation once your data has been deleted.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Important Notes */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600" />
                  Important Notes
                </h2>
                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Irreversible Action:</strong> Data deletion is permanent and cannot be undone. Once deleted, your data cannot be recovered.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Active Projects:</strong> If you have active projects with us, please ensure all deliverables are received before requesting deletion.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Legal Requirements:</strong> We may retain certain data if required by law (e.g., financial records for tax purposes) even after a deletion request.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Backup Systems:</strong> Data in backup systems will be deleted according to our backup rotation policy (typically within 90 days).</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data Retention Exceptions */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data We May Retain</h2>
                <p className="text-gray-700 mb-4">
                  Even after deletion, we may retain certain information as required by law or legitimate business purposes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Financial transaction records (for tax and accounting purposes)</li>
                  <li>Data required to comply with legal obligations</li>
                  <li>Anonymized or aggregated data that cannot identify you</li>
                  <li>Records of your deletion request itself</li>
                </ul>
              </div>

              {/* Related Links */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link
                    href="/privacy"
                    className="block bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy Policy</h3>
                    <p className="text-gray-600 text-sm">Learn more about how we collect and use your data.</p>
                  </Link>
                  <Link
                    href="/terms"
                    className="block bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Terms of Service</h3>
                    <p className="text-gray-600 text-sm">Review our terms and conditions for using our services.</p>
                  </Link>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions?</h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions about data deletion or need assistance with your request, please contact our privacy team:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a href="mailto:privacy@webondev.com" className="text-blue-600 hover:text-blue-700">privacy@webondev.com</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-purple-600 mt-0.5" />
                    <div className="text-gray-700">
                      <div>Web On Dev - Privacy Team</div>
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
