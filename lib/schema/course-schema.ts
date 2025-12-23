/**
 * COURSE SCHEMA
 * For tutorials, courses, and educational content
 */

import { getBaseUrl } from '@/lib/site-config';

export interface Course {
  id: string;
  name: string;
  description: string;
  provider: string;
  instructor: {
    name: string;
    description: string;
  };
  duration: string; // ISO 8601 duration
  educationalLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  teaches: string[];
  coursePrerequisites?: string[];
  hasCourseInstance?: {
    courseMode: 'Online' | 'Onsite' | 'Blended';
    startDate?: string;
    endDate?: string;
  };
  offers?: {
    price: number;
    priceCurrency: string;
  };
  aggregateRating?: {
    ratingValue: number;
    ratingCount: number;
  };
  image?: string;
}

export const courses: Course[] = [
  {
    id: 'nextjs-masterclass',
    name: 'Next.js 15 Masterclass: Build Production Apps',
    description: 'Comprehensive course on building production-ready applications with Next.js 15. Learn App Router, Server Components, Server Actions, authentication, database integration, and deployment.',
    provider: 'Web On Dev',
    instructor: {
      name: 'Ahmad Raza',
      description: 'Founder of Web On Dev with 10+ years of development experience',
    },
    duration: 'PT20H', // 20 hours
    educationalLevel: 'Intermediate',
    teaches: [
      'Next.js 15 App Router',
      'React Server Components',
      'Server Actions',
      'Authentication with NextAuth',
      'Database Integration',
      'Deployment to Vercel',
      'SEO Optimization',
      'Performance Optimization',
    ],
    coursePrerequisites: [
      'Basic React knowledge',
      'JavaScript/TypeScript fundamentals',
      'HTML and CSS',
    ],
    hasCourseInstance: {
      courseMode: 'Online',
    },
    offers: {
      price: 0,
      priceCurrency: 'USD',
    },
    aggregateRating: {
      ratingValue: 4.9,
      ratingCount: 450,
    },
  },
  {
    id: 'react-native-bootcamp',
    name: 'React Native Bootcamp: iOS & Android Apps',
    description: 'Learn to build cross-platform mobile apps with React Native. From basics to advanced topics including navigation, state management, native modules, and app store deployment.',
    provider: 'Web On Dev',
    instructor: {
      name: 'Michael Chen',
      description: 'Mobile Development Lead at Web On Dev',
    },
    duration: 'PT30H',
    educationalLevel: 'Intermediate',
    teaches: [
      'React Native Fundamentals',
      'Navigation with React Navigation',
      'State Management',
      'Native Modules',
      'Push Notifications',
      'App Store Deployment',
      'Performance Optimization',
    ],
    coursePrerequisites: [
      'React knowledge',
      'JavaScript fundamentals',
    ],
    hasCourseInstance: {
      courseMode: 'Online',
    },
    offers: {
      price: 49,
      priceCurrency: 'USD',
    },
    aggregateRating: {
      ratingValue: 4.8,
      ratingCount: 280,
    },
  },
  {
    id: 'seo-fundamentals',
    name: 'SEO Fundamentals: Rank Higher in Search',
    description: 'Learn the fundamentals of Search Engine Optimization. Master on-page SEO, technical SEO, content optimization, and link building strategies to improve your search rankings.',
    provider: 'Web On Dev',
    instructor: {
      name: 'Emma Wilson',
      description: 'Digital Marketing Manager at Web On Dev',
    },
    duration: 'PT10H',
    educationalLevel: 'Beginner',
    teaches: [
      'On-Page SEO',
      'Technical SEO',
      'Keyword Research',
      'Content Optimization',
      'Link Building',
      'Local SEO',
      'SEO Tools',
      'Analytics & Reporting',
    ],
    hasCourseInstance: {
      courseMode: 'Online',
    },
    offers: {
      price: 0,
      priceCurrency: 'USD',
    },
    aggregateRating: {
      ratingValue: 4.7,
      ratingCount: 620,
    },
  },
  {
    id: 'ui-ux-design-principles',
    name: 'UI/UX Design Principles for Developers',
    description: 'Essential UI/UX design principles every developer should know. Learn user research, wireframing, prototyping, and creating user-centered designs without a design background.',
    provider: 'Web On Dev',
    instructor: {
      name: 'Sarah Johnson',
      description: 'Senior UI/UX Designer at Web On Dev',
    },
    duration: 'PT15H',
    educationalLevel: 'Beginner',
    teaches: [
      'Design Thinking',
      'User Research',
      'Wireframing',
      'Prototyping in Figma',
      'Color Theory',
      'Typography',
      'Accessibility',
      'Design Systems',
    ],
    hasCourseInstance: {
      courseMode: 'Online',
    },
    offers: {
      price: 29,
      priceCurrency: 'USD',
    },
    aggregateRating: {
      ratingValue: 4.8,
      ratingCount: 340,
    },
  },
];

/**
 * Generate Course schema
 */
export function generateCourseSchema(course: Course) {
  const siteUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${siteUrl}/courses/${course.id}/#course`,
    name: course.name,
    description: course.description,
    provider: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: course.provider,
    },
    instructor: {
      '@type': 'Person',
      name: course.instructor.name,
      description: course.instructor.description,
    },
    timeRequired: course.duration,
    educationalLevel: course.educationalLevel,
    teaches: course.teaches,
    ...(course.coursePrerequisites && {
      coursePrerequisites: course.coursePrerequisites.join(', '),
    }),
    ...(course.hasCourseInstance && {
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: course.hasCourseInstance.courseMode,
        ...(course.hasCourseInstance.startDate && {
          startDate: course.hasCourseInstance.startDate,
        }),
        ...(course.hasCourseInstance.endDate && {
          endDate: course.hasCourseInstance.endDate,
        }),
      },
    }),
    ...(course.offers && {
      offers: {
        '@type': 'Offer',
        price: course.offers.price,
        priceCurrency: course.offers.priceCurrency,
        availability: 'https://schema.org/InStock',
        category: 'Online Course',
      },
    }),
    ...(course.aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: course.aggregateRating.ratingValue,
        ratingCount: course.aggregateRating.ratingCount,
        bestRating: 5,
        worstRating: 1,
      },
    }),
    ...(course.image && { image: `${siteUrl}${course.image}` }),
    inLanguage: 'en',
    isAccessibleForFree: course.offers?.price === 0,
  };
}

/**
 * Generate ItemList schema for all courses
 */
export function generateCoursesListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: courses.map((course, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: generateCourseSchema(course),
    })),
  };
}

export default courses;
