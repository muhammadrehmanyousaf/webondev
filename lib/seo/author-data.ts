/**
 * AUTHOR DATA FOR E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
 * Critical for Google's quality rankings
 */

import { getBaseUrl } from '@/lib/site-config';

export interface Author {
  id: string;
  name: string;
  slug: string;
  role: string;
  bio: string;
  shortBio: string;
  image: string;
  email?: string;
  expertise: string[];
  credentials: string[];
  experience: {
    years: number;
    projects: number;
    industries: string[];
  };
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  publications?: string[];
  certifications?: string[];
}

export const authors: Author[] = [
  {
    id: 'ahmad-raza',
    name: 'Ahmad Raza',
    slug: 'ahmad-raza',
    role: 'Founder & Lead Developer',
    bio: 'Ahmad Raza is the founder of Web On Dev with over 10 years of experience in software development. He specializes in full-stack web development, mobile app development, and cloud architecture. Ahmad has led 500+ successful projects for clients worldwide and is passionate about building scalable, performant applications using modern technologies like Next.js, React, and Node.js.',
    shortBio: 'Founder of Web On Dev with 10+ years in software development.',
    image: '/images/team/ahmad-raza.jpg',
    email: 'ahmad@webondev.com',
    expertise: [
      'Full-Stack Web Development',
      'Mobile App Development',
      'Cloud Architecture',
      'System Design',
      'Technical Leadership',
    ],
    credentials: [
      'B.S. in Computer Science',
      'AWS Certified Solutions Architect',
      'Google Cloud Professional',
    ],
    experience: {
      years: 10,
      projects: 500,
      industries: ['E-commerce', 'Healthcare', 'Fintech', 'SaaS', 'Education'],
    },
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/ahmadrazawebondev',
      twitter: 'https://twitter.com/webondev',
      github: 'https://github.com/webondev',
    },
    certifications: [
      'AWS Solutions Architect - Professional',
      'Google Cloud Professional Cloud Architect',
      'Meta Certified Developer',
    ],
  },
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    slug: 'sarah-johnson',
    role: 'Senior UI/UX Designer',
    bio: 'Sarah Johnson is a senior UI/UX designer at Web On Dev with 8 years of experience creating user-centered designs. She has designed interfaces for 200+ projects, including mobile apps, web applications, and e-commerce platforms. Sarah specializes in design systems, accessibility, and creating delightful user experiences that drive conversions.',
    shortBio: 'Senior UI/UX Designer with 8+ years of design experience.',
    image: '/images/team/sarah-johnson.jpg',
    expertise: [
      'UI/UX Design',
      'Design Systems',
      'User Research',
      'Accessibility',
      'Prototyping',
    ],
    credentials: [
      'B.A. in Visual Design',
      'Google UX Design Certificate',
      'Accessibility Specialist Certification',
    ],
    experience: {
      years: 8,
      projects: 200,
      industries: ['E-commerce', 'Healthcare', 'Education', 'Finance'],
    },
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/sarahjohnsondesign',
    },
    certifications: [
      'Google UX Design Professional Certificate',
      'Nielsen Norman UX Certification',
    ],
  },
  {
    id: 'michael-chen',
    name: 'Michael Chen',
    slug: 'michael-chen',
    role: 'Technical Lead - Mobile Development',
    bio: 'Michael Chen leads the mobile development team at Web On Dev with 7 years of experience in iOS and Android development. He specializes in React Native and Flutter for cross-platform development, and has built apps with millions of downloads. Michael is passionate about performance optimization and creating seamless mobile experiences.',
    shortBio: 'Mobile Development Lead with 7+ years of app development experience.',
    image: '/images/team/michael-chen.jpg',
    expertise: [
      'React Native',
      'Flutter',
      'iOS Development',
      'Android Development',
      'Mobile Architecture',
    ],
    credentials: [
      'B.S. in Software Engineering',
      'Apple Developer Certification',
      'Google Associate Android Developer',
    ],
    experience: {
      years: 7,
      projects: 150,
      industries: ['Healthcare', 'E-commerce', 'Social', 'Fintech'],
    },
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/michaelchenmobile',
      github: 'https://github.com/michaelchendev',
    },
  },
  {
    id: 'emma-wilson',
    name: 'Emma Wilson',
    slug: 'emma-wilson',
    role: 'Digital Marketing Manager',
    bio: 'Emma Wilson manages digital marketing strategies at Web On Dev with 6 years of experience in SEO, PPC, and content marketing. She has helped clients achieve over 1000% increase in organic traffic and specializes in technical SEO, local SEO, and marketing automation. Emma is data-driven and passionate about measurable marketing results.',
    shortBio: 'Digital Marketing Manager specializing in SEO and growth marketing.',
    image: '/images/team/emma-wilson.jpg',
    expertise: [
      'SEO',
      'PPC Advertising',
      'Content Marketing',
      'Marketing Automation',
      'Analytics',
    ],
    credentials: [
      'B.A. in Marketing',
      'Google Analytics Certified',
      'HubSpot Inbound Marketing',
    ],
    experience: {
      years: 6,
      projects: 100,
      industries: ['E-commerce', 'SaaS', 'Local Business', 'B2B'],
    },
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/emmawilsonmarketing',
      twitter: 'https://twitter.com/emmawilsonseo',
    },
    certifications: [
      'Google Analytics Individual Qualification',
      'Google Ads Certification',
      'HubSpot Inbound Marketing Certification',
      'SEMrush SEO Toolkit Certification',
    ],
  },
];

/**
 * Generate Person schema for an author
 */
export function generateAuthorSchema(author: Author) {
  const siteUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/about/team/${author.slug}/#person`,
    name: author.name,
    url: `${siteUrl}/about/team/${author.slug}/`,
    image: `${siteUrl}${author.image}`,
    jobTitle: author.role,
    description: author.bio,
    worksFor: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Web On Dev',
    },
    knowsAbout: author.expertise,
    hasCredential: author.credentials?.map((cred) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: cred,
    })),
    sameAs: Object.values(author.socialLinks).filter(Boolean),
    alumniOf: author.credentials
      ?.filter((c) => c.includes('B.S.') || c.includes('B.A.'))
      .map((edu) => ({
        '@type': 'EducationalOrganization',
        name: edu,
      })),
  };
}

/**
 * Get author by ID
 */
export function getAuthorById(id: string): Author | undefined {
  return authors.find((a) => a.id === id);
}

/**
 * Get author by slug
 */
export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

/**
 * Get all author slugs for static generation
 */
export function getAllAuthorSlugs(): string[] {
  return authors.map((a) => a.slug);
}

export default authors;
