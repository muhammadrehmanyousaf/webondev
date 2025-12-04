import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, ArrowRight, Mail, Linkedin, Twitter, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BlogImage from '@/components/ui/BlogImage';
import { blogData } from '@/lib/blog-data';

interface AuthorPageProps {
  params: Promise<{
    author: string;
  }>;
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { author: authorSlug } = await params;
  const author = decodeURIComponent(authorSlug).replace(/-/g, ' ');
  const posts = blogData.filter(post => 
    post.author.toLowerCase() === author.toLowerCase()
  );
  
  if (posts.length === 0) {
    return {
      title: 'Author Not Found | Web On Dev',
    };
  }

  return {
    title: `${author} - Expert Articles & Insights | Web On Dev`,
    description: `Read expert articles and insights by ${author} on web development, digital marketing, and technology. Discover valuable content from our industry expert.`,
    keywords: `${author.toLowerCase()}, web development, digital marketing, technology, expert insights, articles`,
    openGraph: {
      title: `${author} - Expert Articles & Insights | Web On Dev`,
      description: `Read expert articles and insights by ${author} on web development, digital marketing, and technology.`,
      type: 'profile',
      url: `https://webondev.com/blog/author/${authorSlug}`,
    },
    alternates: {
      canonical: `https://webondev.com/blog/author/${authorSlug}`,
    },
  };
}

export async function generateStaticParams() {
  const authors = Array.from(new Set(blogData.map(post => post.author)));
  
  return Promise.resolve(authors.map((author) => ({
    author: author.toLowerCase().replace(/\s+/g, '-'),
  })));
}

const AuthorPage = async ({ params }: AuthorPageProps) => {
  const { author: authorSlug } = await params;
  const author = decodeURIComponent(authorSlug).replace(/-/g, ' ');
  const posts = blogData.filter(post => 
    post.author.toLowerCase() === author.toLowerCase()
  );
  
  if (posts.length === 0) {
    notFound();
  }

  const authorInfo = {
    name: author,
    title: 'Lead Developer & SEO Expert',
    bio: 'Muhammad Rehman Yousaf is a passionate web developer and digital marketing expert with over 5 years of experience in creating successful online businesses. He specializes in modern web technologies, SEO optimization, and digital marketing strategies.',
    avatar: '/images/team/muhammad-rehman.jpg',
    email: 'muhammadrehmanyousaf786@gmail.com',
    linkedin: 'https://linkedin.com/in/muhammadrehmanyousaf',
    twitter: 'https://twitter.com/muhammadrehman',
    github: 'https://github.com/muhammadrehman',
    totalPosts: posts.length,
    totalReadTime: posts.reduce((total, post) => {
      const minutes = parseInt(post.readTime.split(' ')[0]);
      return total + minutes;
    }, 0),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <User className="w-6 h-6" />
              <Badge className="bg-white/20 text-white border-white/30">
                Author
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {authorInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {authorInfo.title}
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span>{authorInfo.totalPosts} Articles</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{authorInfo.totalReadTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">
                {authorInfo.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              About {authorInfo.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {authorInfo.bio}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <a
                href={`mailto:${authorInfo.email}`}
                className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5 text-gray-600" />
              </a>
              <a
                href={authorInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-600" />
              </a>
              <a
                href={authorInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors"
                title="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-600" />
              </a>
              <a
                href={authorInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5 text-gray-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Articles by {authorInfo.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover valuable insights and expert knowledge from our industry expert.
            </p>
          </div>
          
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
                  
                  <Link
                    href={`/blog/${post.slug}`}
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

export default AuthorPage;
