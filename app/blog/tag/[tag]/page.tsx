import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BlogImage from '@/components/ui/BlogImage';
import { blogData } from '@/lib/blog-data';

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag: tagSlug } = await params;
  const tag = decodeURIComponent(tagSlug).replace(/-/g, ' ');
  const posts = blogData.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  );
  
  if (posts.length === 0) {
    return {
      title: 'Tag Not Found | Web On Dev',
    };
  }

  return {
    title: `${tag} Articles - Expert Insights & Tutorials | Web On Dev`,
    description: `Discover our collection of ${tag.toLowerCase()} articles, tutorials, and expert insights. Learn from industry experts and stay updated with the latest trends.`,
    keywords: `${tag.toLowerCase()}, web development, digital marketing, technology, expert insights, tutorials`,
    openGraph: {
      title: `${tag} Articles - Expert Insights & Tutorials | Web On Dev`,
      description: `Discover our collection of ${tag.toLowerCase()} articles, tutorials, and expert insights.`,
      type: 'website',
      url: `https://webondev.com/blog/tag/${tagSlug}`,
    },
    alternates: {
      canonical: `https://webondev.com/blog/tag/${tagSlug}`,
    },
  };
}

export async function generateStaticParams() {
  const allTags = Array.from(new Set(blogData.flatMap(post => post.tags)));
  
  return Promise.resolve(allTags.map((tag) => ({
    tag: tag.toLowerCase().replace(/\s+/g, '-'),
  })));
}

const TagPage = async ({ params }: TagPageProps) => {
  const { tag: tagSlug } = await params;
  const tag = decodeURIComponent(tagSlug).replace(/-/g, ' ');
  const posts = blogData.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  );
  
  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Tag className="w-6 h-6" />
              <Badge className="bg-white/20 text-white border-white/30">
                #{tag}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {tag} Articles
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover our collection of {tag.toLowerCase()} articles, tutorials, and expert insights.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span>{posts.length} Articles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <BlogImage
                    src={post.featuredImage || post.image || '/images/blog/placeholder.svg'}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  {post.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Badge variant="outline" className="mb-3">
                    {post.category}
                  </Badge>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group">
                    <Link href={`/blog/${post.slug}`} className="group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tags */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Related Topics
            </h2>
            <p className="text-lg text-gray-600">
              Discover more articles on related topics and technologies.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {Array.from(new Set(blogData.flatMap(post => post.tags)))
              .filter(t => t.toLowerCase() !== tag.toLowerCase())
              .slice(0, 12)
              .map((relatedTag) => (
                <Link
                  key={relatedTag}
                  href={`/blog/tag/${relatedTag.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Badge variant="outline" className="cursor-pointer hover:bg-blue-100 transition-colors">
                    #{relatedTag}
                  </Badge>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help you achieve your digital goals with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">
                Get Free Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/blog">
                View All Articles
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TagPage;
