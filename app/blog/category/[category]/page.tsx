import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BlogImage from '@/components/ui/BlogImage';
import { blogData, getPostsByCategory } from '@/lib/blog-data';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = decodeURIComponent(categorySlug).replace(/-/g, ' ');
  const posts = getPostsByCategory(category);
  
  if (posts.length === 0) {
    return {
      title: 'Category Not Found | Solutions Indicator',
    };
  }

  return {
    title: `${category} Articles - Expert Insights & Guides | Solutions Indicator`,
    description: `Explore our comprehensive collection of ${category.toLowerCase()} articles, tutorials, and expert insights. Stay updated with the latest trends and best practices.`,
    keywords: `${category.toLowerCase()}, web development, digital marketing, technology, expert insights, tutorials`,
    openGraph: {
      title: `${category} Articles - Expert Insights & Guides | Solutions Indicator`,
      description: `Explore our comprehensive collection of ${category.toLowerCase()} articles, tutorials, and expert insights.`,
      type: 'website',
      url: `https://solutionsindicator.com/blog/category/${categorySlug}`,
    },
    alternates: {
      canonical: `https://solutionsindicator.com/blog/category/${categorySlug}`,
    },
  };
}

export async function generateStaticParams() {
  const categories = ['web-development', 'digital-marketing', 'mobile-apps', 'ui-ux-design', 'seo', 'e-commerce'];
  
  return Promise.resolve(categories.map((category) => ({
    category: category,
  })));
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { category: categorySlug } = await params;
  const category = decodeURIComponent(categorySlug).replace(/-/g, ' ');
  const posts = getPostsByCategory(category);
  
  if (posts.length === 0) {
    notFound();
  }

  const categoryDescription = {
    'Web Development': 'Comprehensive guides and tutorials on modern web development technologies, frameworks, and best practices.',
    'Digital Marketing': 'Expert strategies and insights on digital marketing, SEO, social media, and growth hacking.',
    'Mobile Apps': 'Latest trends and techniques in mobile app development, including React Native, Flutter, and native development.',
    'UI/UX Design': 'Design principles, user experience strategies, and modern UI/UX trends for digital products.',
    'SEO': 'Search engine optimization strategies, technical SEO, content optimization, and ranking techniques.',
    'E-commerce': 'E-commerce development, platform selection, payment integration, and conversion optimization.',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="w-6 h-6" />
              <Badge className="bg-white/20 text-white border-white/30">
                {category}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {category} Articles
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {categoryDescription[category as keyof typeof categoryDescription] || 
               `Expert insights and comprehensive guides on ${category.toLowerCase()}.`}
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your {category} Project?
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

export default CategoryPage;
