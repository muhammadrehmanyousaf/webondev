import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Trash2, Mail, Clock, CheckCircle, AlertCircle, Shield, Phone, Globe, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Data Deletion Instructions - Web On Dev | Delete Your Data',
  description: 'Learn how to request deletion of your personal data from Web On Dev. Complete instructions for deleting your account and social media data.',
  keywords: 'data deletion, delete account, remove data, Facebook data deletion, Google data deletion, social media deletion, GDPR, privacy rights',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/data-deletion/`,
  },
  openGraph: {
    title: 'Data Deletion Instructions - Web On Dev | Delete Your Data',
    description: 'Learn how to request deletion of your personal data from Web On Dev. Complete instructions for deleting your account and social media data.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/data-deletion`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Deletion Instructions - Web On Dev | Delete Your Data',
    description: 'Learn how to request deletion of your personal data from Web On Dev. Complete instructions for deleting your account and social media data.',
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
              Learn how to request deletion of your personal data from our services, including data obtained through social media login.
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
                  This page provides instructions for requesting deletion of your data, including any information obtained through social media login integrations.
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

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Additional Data</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Communication history</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Support tickets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Usage analytics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Uploaded files/content</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Social Media Data */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Social Media Login Data</h3>
                <p className="text-gray-700 mb-4">If you logged in using any of the following platforms, we will also delete the data obtained from them:</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {/* Facebook */}
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">Facebook</h4>
                    <p className="text-xs text-gray-600">Meta / Instagram</p>
                  </div>

                  {/* Google */}
                  <div className="bg-red-50 rounded-xl p-4 border border-red-200 text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">Google</h4>
                    <p className="text-xs text-gray-600">YouTube included</p>
                  </div>

                  {/* Twitter/X */}
                  <div className="bg-gray-100 rounded-xl p-4 border border-gray-300 text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">Twitter / X</h4>
                    <p className="text-xs text-gray-600">Profile data</p>
                  </div>

                  {/* LinkedIn */}
                  <div className="bg-sky-50 rounded-xl p-4 border border-sky-200 text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">LinkedIn</h4>
                    <p className="text-xs text-gray-600">Professional data</p>
                  </div>

                  {/* Apple */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">Apple</h4>
                    <p className="text-xs text-gray-600">Sign in data</p>
                  </div>

                  {/* TikTok */}
                  <div className="bg-pink-50 rounded-xl p-4 border border-pink-200 text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">TikTok</h4>
                    <p className="text-xs text-gray-600">Profile data</p>
                  </div>

                  {/* GitHub */}
                  <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 text-center">
                    <h4 className="font-semibold text-white mb-1">GitHub</h4>
                    <p className="text-xs text-gray-400">Developer data</p>
                  </div>

                  {/* Discord */}
                  <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200 text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">Discord</h4>
                    <p className="text-xs text-gray-600">User data</p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                  <p className="text-gray-700 text-sm">
                    <strong>Data we delete from social logins includes:</strong> User ID, name, email address, profile picture URL, username/display name, and any access tokens stored.
                  </p>
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

                {/* Method 3: Social Media Settings */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Option 3: Revoke Access via Social Media Settings</h3>
                  <p className="text-gray-700 mb-4">
                    You can also revoke our app&apos;s access directly from your social media account settings. Click on any platform below for instructions:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/settings?tab=applications"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-white rounded-lg p-4 border border-blue-200 hover:border-blue-400 transition-colors"
                    >
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">f</div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">Facebook / Meta</div>
                        <div className="text-xs text-gray-500">Apps and Websites settings</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </a>

                    {/* Google */}
                    <a
                      href="https://myaccount.google.com/permissions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-white rounded-lg p-4 border border-red-200 hover:border-red-400 transition-colors"
                    >
                      <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">G</div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">Google</div>
                        <div className="text-xs text-gray-500">Third-party access settings</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </a>

                    {/* Twitter/X */}
                    <a
                      href="https://twitter.com/settings/connected_apps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-300 hover:border-gray-500 transition-colors"
                    >
                      <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white font-bold">X</div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">Twitter / X</div>
                        <div className="text-xs text-gray-500">Connected apps settings</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/psettings/permitted-services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-white rounded-lg p-4 border border-sky-200 hover:border-sky-400 transition-colors"
                    >
                      <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center text-white font-bold">in</div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">LinkedIn</div>
                        <div className="text-xs text-gray-500">Permitted services settings</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </a>

                    {/* Apple */}
                    <a
                      href="https://appleid.apple.com/account/manage"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200 hover:border-gray-400 transition-colors"
                    >
                      <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold"></div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">Apple</div>
                        <div className="text-xs text-gray-500">Sign in with Apple settings</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </a>

                    {/* TikTok */}
                    <a
                      href="https://www.tiktok.com/setting"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-white rounded-lg p-4 border border-pink-200 hover:border-pink-400 transition-colors"
                    >
                      <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white font-bold text-xs">TT</div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">TikTok</div>
                        <div className="text-xs text-gray-500">Privacy settings</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </a>

                    {/* GitHub */}
                    <a
                      href="https://github.com/settings/applications"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-300 hover:border-gray-500 transition-colors"
                    >
                      <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold">GH</div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">GitHub</div>
                        <div className="text-xs text-gray-500">Authorized OAuth Apps</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </a>

                    {/* Discord */}
                    <a
                      href="https://discord.com/settings/authorized-apps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-white rounded-lg p-4 border border-indigo-200 hover:border-indigo-400 transition-colors"
                    >
                      <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">D</div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">Discord</div>
                        <div className="text-xs text-gray-500">Authorized Apps settings</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </a>
                  </div>

                  <div className="mt-4 p-4 bg-orange-100 rounded-lg">
                    <p className="text-gray-700 text-sm">
                      <strong>Note:</strong> Revoking access from social media platforms will prevent future data sharing but will not automatically delete data already stored. Please also submit a deletion request using Option 1 or 2 above for complete removal from our systems.
                    </p>
                  </div>
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
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Third-Party Data:</strong> Revoking access on social media platforms is separate from our deletion process. Do both for complete removal.</span>
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
