import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, ArrowRight, BookOpen, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { blogData, getBlogPostBySlug, getRelatedPosts } from '@/lib/blog-data';
import BlogImage from '@/components/ui/BlogImage';
import ReadingProgress from '@/components/ui/ReadingProgress';
import ShareButtons from '@/components/ui/ShareButtons';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getBaseUrl } from '@/lib/site-config';

// Import new blog components
import BlogIntroduction from '@/components/pages/blog/BlogIntroduction';
import BlogSection1 from '@/components/pages/blog/BlogSection1';
import BlogSection2 from '@/components/pages/blog/BlogSection2';
import BlogSection3 from '@/components/pages/blog/BlogSection3';
import BlogSection4 from '@/components/pages/blog/BlogSection4';
import BlogSection5 from '@/components/pages/blog/BlogSection5';
import BlogSection6 from '@/components/pages/blog/BlogSection6';
import BlogSection7 from '@/components/pages/blog/BlogSection7';
import BlogSection8 from '@/components/pages/blog/BlogSection8';
import BlogSection9 from '@/components/pages/blog/BlogSection9';
import BlogSection10 from '@/components/pages/blog/BlogSection10';
import BlogCTA from '@/components/pages/blog/BlogCTA';
import BlogFAQ from '@/components/pages/blog/BlogFAQ';
import BlogImportantLinks from '@/components/pages/blog/BlogImportantLinks';
import BlogConclusion from '@/components/pages/blog/BlogConclusion';

const siteUrl = getBaseUrl();

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | Web On Dev',
    };
  }

  const canonicalUrl = `${siteUrl}/blog/${post.slug}/`;
  const imageUrl = post.featuredImage || post.image || `${siteUrl}/images/og-image.png`;

  return {
    title: `${post.seoTitle || post.title} | Web On Dev Blog`,
    description: post.seoDescription || post.excerpt,
    keywords: post.keywords?.join(', '),
    authors: [{ name: post.author, url: `${siteUrl}/about` }],
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      type: 'article',
      url: canonicalUrl,
      siteName: 'Web On Dev',
      locale: 'en_US',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      creator: '@webondev',
      site: '@webondev',
      images: [imageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
  };
}

export async function generateStaticParams() {
  return Promise.resolve(blogData.map((post) => ({
    slug: post.slug,
  })));
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);
  const canonicalUrl = `${siteUrl}/blog/${post.slug}/`;
  const imageUrl = post.featuredImage || post.image || `${siteUrl}/images/og-image.png`;

  // Article Schema for SEO
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${canonicalUrl}#article`,
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      url: `${siteUrl}/about`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Web On Dev',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/branding/logo.png`,
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    keywords: post.keywords?.join(', '),
    articleSection: post.category,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.article-intro', 'h2'],
    },
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog/` },
      { '@type': 'ListItem', position: 3, name: post.title, item: canonicalUrl },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <Header />
      <ReadingProgress />
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 w-full border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Home</Link>
            </li>
            <li aria-hidden> / </li>
            <li>
              <Link href="/blog" className="hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Blog</Link>
            </li>
            <li aria-hidden> / </li>
            <li aria-current="page" className="text-gray-900 font-medium line-clamp-1">{post.title}</li>
          </ol>
        </div>
      </nav>
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-24 lg:py-32 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Blog Introduction */}
      <BlogIntroduction 
        title={post.title}
        excerpt={post.excerpt}
        author={post.author}
        date={post.date}
        readTime={post.readTime}
        category={post.category}
        tags={post.tags}
      />

      {/* Blog Section 1 - Introduction */}
      <BlogSection1 />

      {/* Blog Section 2 - HTML5 & Semantic Markup */}
      <BlogSection2 />

      {/* CTA after 3 sections */}
      <BlogCTA 
        title="Ready to Build Your Next Web Project?"
        description="Let's discuss how we can help you create a modern, high-performance website that drives results."
        variant="primary"
      />

             {/* Blog Section 3 - CSS3 & Modern Layouts */}
       <BlogSection3 />

       {/* Blog Section 4 - JavaScript ES2024 */}
       <BlogSection4 />

       {/* Blog Section 5 - React & Frontend Frameworks */}
       <BlogSection5 />

      {/* CTA after 6 sections */}
      <BlogCTA 
        title="Need Expert Web Development Services?"
        description="Our team of experienced developers can help you build modern, scalable web applications."
        variant="secondary"
      />

             {/* Blog Section 6 - Performance Optimization */}
       <BlogSection6 />

               {/* Blog Section 7 - SEO Best Practices */}
        <BlogSection7 />
        
        {/* Blog Section 8 - Security */}
        <BlogSection8 />
        
        {/* CTA after 9 sections */}
        <BlogCTA 
          title="Secure Your Web Application Today"
          description="Implement comprehensive security measures to protect your users and maintain trust."
          variant="primary"
        />
        
        {/* Blog Section 9 - Testing */}
        <BlogSection9 />
        
        {/* Blog Section 10 - Deployment */}
        <BlogSection10 />

      {/* FAQ Section */}
      <BlogFAQ />

      {/* Important Links Section */}
      <BlogImportantLinks />

      {/* Conclusion */}
      <BlogConclusion />

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 lg:py-28 bg-white w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Related Articles
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Continue reading with these related articles that you might find interesting.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 lg:gap-10">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.slug} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative">
                    <BlogImage src={relatedPost.featuredImage || relatedPost.image || '/images/blog/placeholder.svg'} alt={relatedPost.title} className="w-full h-48 object-cover" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {relatedPost.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {relatedPost.readTime}
                      </div>
                    </div>
                    
                    <Badge variant="outline" className="mb-3">
                      {relatedPost.category}
                    </Badge>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      <Link href={`/blog/${relatedPost.slug}`} className="hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-emerald-600 to-teal-600 text-white w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl lg:text-2xl text-emerald-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can help you achieve your digital goals with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Link href="/contact">
                Get Free Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold">
              <Link href="/portfolio">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Footer />
    </div>
  );
};

export default BlogPostPage;
