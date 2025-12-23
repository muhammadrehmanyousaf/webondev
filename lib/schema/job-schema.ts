/**
 * JOB POSTING SCHEMA
 * For careers page - helps appear in Google Jobs
 */

import { getBaseUrl } from '@/lib/site-config';

export interface JobPosting {
  id: string;
  title: string;
  description: string;
  employmentType: 'FULL_TIME' | 'PART_TIME' | 'CONTRACTOR' | 'INTERN';
  workLocationType: 'REMOTE' | 'HYBRID' | 'ONSITE';
  experienceLevel: 'ENTRY' | 'MID' | 'SENIOR' | 'LEAD';
  salary?: {
    min: number;
    max: number;
    currency: string;
    period: 'YEAR' | 'MONTH' | 'HOUR';
  };
  skills: string[];
  responsibilities: string[];
  qualifications: string[];
  benefits?: string[];
  datePosted: string;
  validThrough: string;
  department: string;
}

export const jobPostings: JobPosting[] = [
  {
    id: 'senior-nextjs-developer',
    title: 'Senior Next.js Developer',
    description: 'We are looking for an experienced Next.js developer to join our team and build high-performance web applications for clients worldwide. You will work with cutting-edge technologies including Next.js 15, React Server Components, and TypeScript.',
    employmentType: 'FULL_TIME',
    workLocationType: 'REMOTE',
    experienceLevel: 'SENIOR',
    salary: {
      min: 60000,
      max: 100000,
      currency: 'USD',
      period: 'YEAR',
    },
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Vercel'],
    responsibilities: [
      'Build and maintain Next.js web applications',
      'Implement responsive and accessible UI components',
      'Optimize application performance and SEO',
      'Collaborate with design and backend teams',
      'Code review and mentoring junior developers',
      'Participate in technical architecture decisions',
    ],
    qualifications: [
      '5+ years of React development experience',
      '2+ years of Next.js experience',
      'Strong TypeScript skills',
      'Experience with server-side rendering and static generation',
      'Knowledge of SEO best practices',
      'Excellent communication skills',
    ],
    benefits: [
      'Competitive salary',
      'Remote work flexibility',
      'Health insurance',
      'Professional development budget',
      'Flexible working hours',
      'Annual team retreats',
    ],
    datePosted: '2024-12-01',
    validThrough: '2025-03-01',
    department: 'Engineering',
  },
  {
    id: 'react-native-developer',
    title: 'React Native Developer',
    description: 'Join our mobile development team to build cross-platform mobile applications. You will work on exciting projects for startups and enterprises across various industries.',
    employmentType: 'FULL_TIME',
    workLocationType: 'REMOTE',
    experienceLevel: 'MID',
    salary: {
      min: 45000,
      max: 75000,
      currency: 'USD',
      period: 'YEAR',
    },
    skills: ['React Native', 'TypeScript', 'iOS', 'Android', 'Redux', 'REST APIs'],
    responsibilities: [
      'Develop cross-platform mobile applications',
      'Integrate with backend APIs and services',
      'Implement native modules when needed',
      'Ensure app performance and quality',
      'Publish apps to App Store and Google Play',
      'Collaborate with UI/UX designers',
    ],
    qualifications: [
      '3+ years of mobile development experience',
      '2+ years of React Native experience',
      'Experience publishing apps to stores',
      'Knowledge of mobile UI/UX best practices',
      'Understanding of CI/CD for mobile',
    ],
    benefits: [
      'Competitive salary',
      'Remote work',
      'Learning & development',
      'Flexible hours',
    ],
    datePosted: '2024-12-10',
    validThrough: '2025-03-10',
    department: 'Mobile Development',
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    description: 'We are seeking a creative UI/UX designer to create beautiful, user-centered designs for web and mobile applications. You will work directly with clients and development teams.',
    employmentType: 'FULL_TIME',
    workLocationType: 'HYBRID',
    experienceLevel: 'MID',
    salary: {
      min: 40000,
      max: 65000,
      currency: 'USD',
      period: 'YEAR',
    },
    skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'Design Systems', 'Accessibility'],
    responsibilities: [
      'Create wireframes, prototypes, and high-fidelity designs',
      'Conduct user research and usability testing',
      'Develop and maintain design systems',
      'Collaborate with developers on implementation',
      'Present designs to clients and stakeholders',
      'Stay updated with design trends',
    ],
    qualifications: [
      '3+ years of UI/UX design experience',
      'Strong portfolio of web and mobile designs',
      'Proficiency in Figma',
      'Understanding of accessibility standards',
      'Experience with user research methods',
    ],
    benefits: [
      'Competitive salary',
      'Hybrid work option',
      'Creative freedom',
      'Design tool subscriptions',
    ],
    datePosted: '2024-12-15',
    validThrough: '2025-03-15',
    department: 'Design',
  },
  {
    id: 'digital-marketing-specialist',
    title: 'Digital Marketing Specialist',
    description: 'Looking for a data-driven digital marketing specialist to help our clients grow their online presence through SEO, PPC, and content marketing strategies.',
    employmentType: 'FULL_TIME',
    workLocationType: 'REMOTE',
    experienceLevel: 'MID',
    salary: {
      min: 35000,
      max: 55000,
      currency: 'USD',
      period: 'YEAR',
    },
    skills: ['SEO', 'Google Ads', 'Google Analytics', 'Content Marketing', 'Social Media', 'Email Marketing'],
    responsibilities: [
      'Develop and execute SEO strategies',
      'Manage PPC campaigns',
      'Analyze marketing performance data',
      'Create content marketing plans',
      'Report on KPIs and ROI',
      'Stay updated with marketing trends',
    ],
    qualifications: [
      '3+ years of digital marketing experience',
      'Google Analytics certification',
      'Experience with SEO tools (Ahrefs, SEMrush)',
      'Strong analytical skills',
      'Excellent written communication',
    ],
    benefits: [
      'Remote work',
      'Performance bonuses',
      'Training budget',
    ],
    datePosted: '2024-12-20',
    validThrough: '2025-03-20',
    department: 'Marketing',
  },
];

/**
 * Generate JobPosting schema
 */
export function generateJobSchema(job: JobPosting) {
  const siteUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    '@id': `${siteUrl}/careers/${job.id}/#job`,
    title: job.title,
    description: job.description,
    datePosted: job.datePosted,
    validThrough: job.validThrough,
    employmentType: job.employmentType,
    hiringOrganization: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Web On Dev',
      sameAs: siteUrl,
      logo: `${siteUrl}/images/branding/logo.png`,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'G8JX+CMF, Main Gulberg, Mota Singh Wala',
        addressLocality: 'Lahore',
        addressRegion: 'Punjab',
        postalCode: '54660',
        addressCountry: 'PK',
      },
    },
    jobLocationType: job.workLocationType === 'REMOTE' ? 'TELECOMMUTE' : undefined,
    applicantLocationRequirements:
      job.workLocationType === 'REMOTE'
        ? {
            '@type': 'Country',
            name: 'Worldwide',
          }
        : undefined,
    ...(job.salary && {
      baseSalary: {
        '@type': 'MonetaryAmount',
        currency: job.salary.currency,
        value: {
          '@type': 'QuantitativeValue',
          minValue: job.salary.min,
          maxValue: job.salary.max,
          unitText: job.salary.period,
        },
      },
    }),
    skills: job.skills.join(', '),
    qualifications: job.qualifications.join('. '),
    responsibilities: job.responsibilities.join('. '),
    ...(job.benefits && { jobBenefits: job.benefits.join(', ') }),
    industry: 'Software Development',
    occupationalCategory: '15-1252.00',
  };
}

/**
 * Generate all job postings schema
 */
export function generateAllJobsSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: jobPostings.map((job, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: generateJobSchema(job),
    })),
  };
}

/**
 * Get active job postings
 */
export function getActiveJobs(): JobPosting[] {
  const now = new Date();
  return jobPostings.filter((job) => new Date(job.validThrough) > now);
}

export default jobPostings;
