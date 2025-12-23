/**
 * VIDEO SCHEMA FOR RICH RESULTS
 * VideoObject structured data for video content
 */

import { getBaseUrl } from '@/lib/site-config';

export interface Video {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string; // ISO 8601 duration format
  contentUrl?: string;
  embedUrl?: string;
  transcript?: string;
  category?: string;
  keywords?: string[];
  interactionStatistic?: {
    views: number;
    likes?: number;
  };
}

// Sample videos for the website
export const videos: Video[] = [
  {
    id: 'intro-web-on-dev',
    name: 'Introduction to Web On Dev - Professional Software Development',
    description: 'Learn about Web On Dev, a leading software development company specializing in web development, mobile apps, and digital solutions. Discover how we help businesses grow with custom software solutions.',
    thumbnailUrl: '/images/videos/intro-thumbnail.jpg',
    uploadDate: '2024-10-01',
    duration: 'PT3M45S', // 3 minutes 45 seconds
    embedUrl: 'https://www.youtube.com/embed/webondev-intro',
    category: 'Company',
    keywords: ['software development', 'web development', 'mobile apps', 'Web On Dev'],
    interactionStatistic: {
      views: 15000,
      likes: 850,
    },
  },
  {
    id: 'web-development-process',
    name: 'Our Web Development Process Explained',
    description: 'A detailed walkthrough of Web On Dev agile web development process. From discovery to deployment, learn how we build high-quality websites and web applications.',
    thumbnailUrl: '/images/videos/process-thumbnail.jpg',
    uploadDate: '2024-11-15',
    duration: 'PT8M30S',
    embedUrl: 'https://www.youtube.com/embed/webondev-process',
    category: 'Education',
    keywords: ['web development process', 'agile development', 'software development methodology'],
    interactionStatistic: {
      views: 8500,
      likes: 420,
    },
  },
  {
    id: 'nextjs-tutorial',
    name: 'Next.js Development Tutorial - Building Modern Web Apps',
    description: 'Learn how to build modern, SEO-optimized web applications with Next.js. This tutorial covers App Router, Server Components, and best practices for performance.',
    thumbnailUrl: '/images/videos/nextjs-thumbnail.jpg',
    uploadDate: '2024-12-01',
    duration: 'PT15M20S',
    embedUrl: 'https://www.youtube.com/embed/webondev-nextjs',
    category: 'Tutorial',
    keywords: ['Next.js tutorial', 'React development', 'web app development', 'JavaScript'],
    interactionStatistic: {
      views: 25000,
      likes: 1200,
    },
  },
  {
    id: 'client-testimonial',
    name: 'Client Success Story - E-commerce Platform 250% Sales Increase',
    description: 'Hear from our client about how Web On Dev helped them build an e-commerce platform that increased their online sales by 250%. A real success story.',
    thumbnailUrl: '/images/videos/testimonial-thumbnail.jpg',
    uploadDate: '2024-09-20',
    duration: 'PT4M15S',
    embedUrl: 'https://www.youtube.com/embed/webondev-testimonial',
    category: 'Testimonial',
    keywords: ['client testimonial', 'e-commerce success', 'case study'],
    interactionStatistic: {
      views: 5000,
      likes: 280,
    },
  },
];

/**
 * Generate VideoObject schema
 */
export function generateVideoSchema(video: Video) {
  const siteUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${siteUrl}/videos/${video.id}/#video`,
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl.startsWith('http')
      ? video.thumbnailUrl
      : `${siteUrl}${video.thumbnailUrl}`,
    uploadDate: video.uploadDate,
    duration: video.duration,
    ...(video.contentUrl && { contentUrl: video.contentUrl }),
    ...(video.embedUrl && { embedUrl: video.embedUrl }),
    ...(video.transcript && { transcript: video.transcript }),
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Web On Dev',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/branding/logo.png`,
      },
    },
    ...(video.interactionStatistic && {
      interactionStatistic: {
        '@type': 'InteractionCounter',
        interactionType: { '@type': 'WatchAction' },
        userInteractionCount: video.interactionStatistic.views,
      },
    }),
    potentialAction: {
      '@type': 'WatchAction',
      target: video.embedUrl || `${siteUrl}/videos/${video.id}/`,
    },
  };
}

/**
 * Generate VideoObject schema for YouTube embeds
 */
export function generateYouTubeVideoSchema(
  videoId: string,
  title: string,
  description: string,
  uploadDate: string,
  duration: string
) {
  const siteUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: title,
    description: description,
    thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    uploadDate: uploadDate,
    duration: duration,
    embedUrl: `https://www.youtube.com/embed/${videoId}`,
    contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Web On Dev',
    },
  };
}

/**
 * Generate ItemList schema for video gallery
 */
export function generateVideoListSchema(videoList: Video[]) {
  const siteUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: videoList.map((video, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: generateVideoSchema(video),
    })),
  };
}

export default videos;
