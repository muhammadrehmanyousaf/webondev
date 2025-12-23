/**
 * CAREERS PAGE WITH JOB POSTING SCHEMA
 * Optimized for Google Jobs rich results
 */

import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getBaseUrl } from '@/lib/site-config';
import { jobPostings, generateJobSchema, generateAllJobsSchema } from '@/lib/schema/job-schema';

const siteUrl = getBaseUrl();

export const metadata: Metadata = {
  title: 'Careers at Web On Dev - Join Our Team',
  description: 'Join Web On Dev and work on exciting projects with a talented team. We offer remote positions in web development, mobile development, UI/UX design, and digital marketing.',
  keywords: ['careers', 'jobs', 'web developer jobs', 'remote work', 'software jobs', 'Web On Dev careers'],
  openGraph: {
    title: 'Careers at Web On Dev - Join Our Team',
    description: 'Join Web On Dev and work on exciting projects with a talented team. Remote positions available.',
    url: `${siteUrl}/careers/`,
    siteName: 'Web On Dev',
    type: 'website',
  },
  alternates: {
    canonical: `${siteUrl}/careers/`,
  },
};

export default function CareersPage() {
  const allJobsSchema = generateAllJobsSchema();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black pt-24">
        {/* Schema Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(allJobsSchema) }}
        />

        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6">
              We&apos;re Hiring!
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-emerald-400">Amazing Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Work on exciting projects, collaborate with talented people, and grow your career
              with Web On Dev. We offer competitive salaries, remote work flexibility, and
              continuous learning opportunities.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 border-y border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-12">Why Join Web On Dev?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🌍', title: 'Remote First', desc: 'Work from anywhere in the world' },
                { icon: '💰', title: 'Competitive Pay', desc: 'Market-rate salaries with bonuses' },
                { icon: '📚', title: 'Learning Budget', desc: 'Annual budget for courses & conferences' },
                { icon: '⚡', title: 'Flexible Hours', desc: 'Work when you are most productive' },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-colors"
                >
                  <span className="text-4xl mb-4 block">{benefit.icon}</span>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-4">Open Positions</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Find your perfect role and help us build amazing digital products for clients worldwide.
            </p>

            <div className="space-y-6">
              {jobPostings.map((job) => (
                <article
                  key={job.id}
                  className="group p-6 lg:p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-emerald-500/50 transition-all duration-300"
                  itemScope
                  itemType="https://schema.org/JobPosting"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors" itemProp="title">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-sm">
                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full">
                          {job.employmentType.replace('_', ' ')}
                        </span>
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full">
                          {job.workLocationType}
                        </span>
                        <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full">
                          {job.department}
                        </span>
                      </div>
                    </div>
                    {job.salary && (
                      <div className="text-right" itemProp="baseSalary" itemScope itemType="https://schema.org/MonetaryAmount">
                        <div className="text-2xl font-bold text-emerald-400">
                          <span itemProp="value">${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()}</span>
                        </div>
                        <div className="text-sm text-gray-400">
                          <span itemProp="currency">{job.salary.currency}</span> / year
                        </div>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-300 mb-6" itemProp="description">
                    {job.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Required Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-sm"
                          itemProp="skills"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {job.benefits && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Benefits</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {job.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2 text-gray-300 text-sm" itemProp="jobBenefits">
                            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <span className="text-sm text-gray-500">
                      Posted: {new Date(job.datePosted).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                    <Link
                      href={`/contact/?position=${encodeURIComponent(job.title)}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors"
                    >
                      Apply Now
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>

                  {/* Hidden schema data */}
                  <meta itemProp="datePosted" content={job.datePosted} />
                  <meta itemProp="validThrough" content={job.validThrough} />
                  <div itemProp="hiringOrganization" itemScope itemType="https://schema.org/Organization" hidden>
                    <meta itemProp="name" content="Web On Dev" />
                    <meta itemProp="sameAs" content={siteUrl} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-gray-900/50 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Don&apos;t See Your Role?</h2>
            <p className="text-gray-300 mb-8">
              We&apos;re always looking for talented individuals. Send us your resume and let us know
              how you can contribute to our team.
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors"
            >
              Send Your Resume
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
