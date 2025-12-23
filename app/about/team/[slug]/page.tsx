/**
 * AUTHOR PAGE - E-E-A-T Optimization
 * Individual team member pages for authoritativeness signals
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { authors, getAuthorBySlug, generateAuthorSchema } from '@/lib/seo/author-data';
import { getBaseUrl } from '@/lib/site-config';

interface AuthorPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return authors.map((author) => ({
    slug: author.slug,
  }));
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  const siteUrl = getBaseUrl();

  if (!author) {
    return {
      title: 'Author Not Found',
    };
  }

  return {
    title: `${author.name} - ${author.role} | Web On Dev Team`,
    description: author.shortBio,
    keywords: [...author.expertise, 'Web On Dev', 'software development', author.name],
    authors: [{ name: author.name }],
    openGraph: {
      title: `${author.name} - ${author.role}`,
      description: author.shortBio,
      url: `${siteUrl}/about/team/${author.slug}/`,
      siteName: 'Web On Dev',
      images: [
        {
          url: `${siteUrl}${author.image}`,
          width: 400,
          height: 400,
          alt: author.name,
        },
      ],
      locale: 'en_US',
      type: 'profile',
    },
    twitter: {
      card: 'summary',
      title: `${author.name} - ${author.role}`,
      description: author.shortBio,
    },
    alternates: {
      canonical: `${siteUrl}/about/team/${author.slug}/`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  const siteUrl = getBaseUrl();

  if (!author) {
    notFound();
  }

  const authorSchema = generateAuthorSchema(author);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: `${siteUrl}/about/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Team',
        item: `${siteUrl}/about/team/`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: author.name,
        item: `${siteUrl}/about/team/${author.slug}/`,
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black pt-24">
        {/* Schema Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-emerald-400 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/about/" className="hover:text-emerald-400 transition-colors">
                About
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/about/" className="hover:text-emerald-400 transition-colors">
                Team
              </Link>
            </li>
            <li>/</li>
            <li className="text-emerald-400">{author.name}</li>
          </ol>
        </nav>

        {/* Author Profile */}
        <article className="max-w-4xl mx-auto px-4 pb-16">
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
            {/* Header */}
            <header className="flex flex-col md:flex-row items-start gap-8 mb-8">
              <div className="w-32 h-32 rounded-full bg-emerald-500/20 flex items-center justify-center text-4xl font-bold text-emerald-400">
                {author.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {author.name}
                </h1>
                <p className="text-xl text-emerald-400 mb-4">{author.role}</p>
                <p className="text-gray-300 leading-relaxed">{author.bio}</p>
              </div>
            </header>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-black/30 rounded-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">
                  {author.experience.years}+
                </div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center border-x border-gray-800">
                <div className="text-3xl font-bold text-emerald-400">
                  {author.experience.projects}+
                </div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">
                  {author.expertise.length}
                </div>
                <div className="text-sm text-gray-400">Specializations</div>
              </div>
            </div>

            {/* Expertise */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Areas of Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {author.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-sm border border-emerald-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Certifications */}
            {author.certifications && author.certifications.length > 0 && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">Certifications</h2>
                <ul className="space-y-2">
                  {author.certifications.map((cert) => (
                    <li key={cert} className="flex items-center gap-2 text-gray-300">
                      <svg
                        className="w-5 h-5 text-emerald-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {cert}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Industries */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Industry Experience</h2>
              <div className="flex flex-wrap gap-2">
                {author.experience.industries.map((industry) => (
                  <span
                    key={industry}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-sm"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </section>

            {/* Social Links */}
            {Object.values(author.socialLinks).some(Boolean) && (
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Connect</h2>
                <div className="flex gap-4">
                  {author.socialLinks.linkedin && (
                    <a
                      href={author.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800 hover:bg-emerald-500/20 rounded-lg transition-colors"
                      aria-label={`${author.name}'s LinkedIn profile`}
                    >
                      <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                  {author.socialLinks.twitter && (
                    <a
                      href={author.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800 hover:bg-emerald-500/20 rounded-lg transition-colors"
                      aria-label={`${author.name}'s Twitter profile`}
                    >
                      <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  )}
                  {author.socialLinks.github && (
                    <a
                      href={author.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800 hover:bg-emerald-500/20 rounded-lg transition-colors"
                      aria-label={`${author.name}'s GitHub profile`}
                    >
                      <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
              </section>
            )}
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors"
            >
              Work with {author.name.split(' ')[0]}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
