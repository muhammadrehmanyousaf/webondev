// CI/CD Pipelines Service Data
import { ServiceData } from '@/components/services/sections';

export const ciCdPipelinesData: ServiceData = {
  name: 'CI/CD Pipelines',
  slug: 'ci-cd-pipelines',
  tagline: 'Automated pipelines for continuous delivery excellence',
  category: 'Cloud & DevOps',
  description: 'Build robust CI/CD pipelines that automate your entire software delivery process. From code commit to production deployment, we create pipelines that ensure fast, reliable, and secure releases.',

  hero: {
    headline: 'CI/CD Pipeline Engineering',
    subheadline: 'Ship Code Faster with Automated Pipelines',
    description: 'Transform your software delivery with enterprise-grade CI/CD pipelines. Our pipeline experts design and implement automated workflows that reduce deployment time from weeks to minutes while improving quality.',
    keyFeatures: [
      'Multi-stage build pipelines',
      'Automated testing integration',
      'Security scanning built-in',
      'Progressive deployment',
      'Multi-environment support',
      'Rollback automation'
    ],
    badges: ['Pipeline Experts', '1000+ Pipelines', 'All Major Platforms', 'Enterprise Ready']
  },

  painPoints: [
    {
      icon: 'Clock',
      title: 'Manual Build & Deploy',
      description: 'Hours spent on manual builds, tests, and deployments for each release',
      stat: '8hrs',
      statLabel: 'Per deployment average'
    },
    {
      icon: 'AlertTriangle',
      title: 'Inconsistent Releases',
      description: '"Works on my machine" problems causing production failures',
      stat: '35%',
      statLabel: 'Deployments have issues'
    },
    {
      icon: 'XCircle',
      title: 'Late Bug Discovery',
      description: 'Bugs found in production instead of during development',
      stat: '100x',
      statLabel: 'More costly to fix'
    },
    {
      icon: 'GitBranch',
      title: 'Integration Nightmares',
      description: 'Painful merge conflicts and integration issues from infrequent releases',
      stat: '3 days',
      statLabel: 'Average merge conflict resolution'
    }
  ],

  solutions: [
    {
      icon: 'GitMerge',
      title: 'Build Automation',
      description: 'Automated builds triggered on every commit with dependency caching',
      highlights: [
        'Automatic triggers',
        'Parallel builds',
        'Build caching',
        'Artifact management'
      ]
    },
    {
      icon: 'CheckCircle',
      title: 'Test Automation',
      description: 'Comprehensive test suites running automatically in every pipeline',
      highlights: [
        'Unit test integration',
        'Integration testing',
        'E2E test automation',
        'Performance testing'
      ]
    },
    {
      icon: 'Shield',
      title: 'Security Scanning',
      description: 'Built-in security checks at every stage of the pipeline',
      highlights: [
        'SAST code scanning',
        'Dependency scanning',
        'Container scanning',
        'Compliance checks'
      ]
    },
    {
      icon: 'Layers',
      title: 'Deployment Strategies',
      description: 'Safe deployment patterns for zero-downtime releases',
      highlights: [
        'Blue-green deployments',
        'Canary releases',
        'Feature flags',
        'Automatic rollback'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Pipeline Assessment',
        description: 'Analyze current workflows and define optimal pipeline architecture',
        duration: 'Week 1',
        deliverables: [
          'Workflow analysis',
          'Pipeline requirements',
          'Tool evaluation',
          'Architecture design'
        ]
      },
      {
        icon: 'Layout',
        title: 'Pipeline Design',
        description: 'Design multi-stage pipelines with testing and security integration',
        duration: 'Week 1-2',
        deliverables: [
          'Pipeline blueprints',
          'Stage definitions',
          'Test strategy',
          'Security integration plan'
        ]
      },
      {
        icon: 'Code',
        title: 'Pipeline Implementation',
        description: 'Build and configure pipelines with all stages and integrations',
        duration: 'Week 2-4',
        deliverables: [
          'CI pipeline code',
          'CD configurations',
          'Test automation',
          'Security scanning'
        ]
      },
      {
        icon: 'TrendingUp',
        title: 'Optimization & Training',
        description: 'Optimize pipeline performance and train your team',
        duration: 'Week 4-5',
        deliverables: [
          'Performance tuning',
          'Documentation',
          'Team training',
          'Best practices guide'
        ]
      }
    ],
    totalDuration: '4-6 weeks'
  },

  benefits: [
    {
      icon: 'Zap',
      title: 'Faster Delivery',
      description: 'Reduce deployment time from days to minutes',
      stat: '50x',
      statSuffix: '',
      statLabel: 'Faster releases'
    },
    {
      icon: 'CheckCircle',
      title: 'Higher Quality',
      description: 'Catch bugs early with automated testing',
      stat: '95',
      statSuffix: '%',
      statLabel: 'Bug detection rate'
    },
    {
      icon: 'RefreshCw',
      title: 'Frequent Releases',
      description: 'Enable multiple deployments per day',
      stat: '10+',
      statSuffix: '',
      statLabel: 'Deploys per day'
    },
    {
      icon: 'Shield',
      title: 'Secure Releases',
      description: 'Security scanning in every pipeline',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Releases scanned'
    }
  ],

  techStack: [
    {
      name: 'CI/CD Platforms',
      description: 'Leading continuous integration platforms',
      technologies: [
        { name: 'GitHub Actions', icon: '/icons/tech/github-actions.svg', category: 'CI/CD', proficiency: 'expert' },
        { name: 'GitLab CI', icon: '/icons/tech/gitlab.svg', category: 'CI/CD', proficiency: 'expert' },
        { name: 'Jenkins', icon: '/icons/tech/jenkins.svg', category: 'CI/CD', proficiency: 'expert' },
        { name: 'Azure DevOps', icon: '/icons/tech/azure-devops.svg', category: 'CI/CD', proficiency: 'expert' }
      ]
    },
    {
      name: 'Cloud CI Services',
      description: 'Cloud-native CI/CD services',
      technologies: [
        { name: 'AWS CodePipeline', icon: '/icons/tech/codepipeline.svg', category: 'CI/CD', proficiency: 'expert' },
        { name: 'Cloud Build', icon: '/icons/tech/cloud-build.svg', category: 'CI/CD', proficiency: 'advanced' },
        { name: 'CircleCI', icon: '/icons/tech/circleci.svg', category: 'CI/CD', proficiency: 'advanced' },
        { name: 'Travis CI', icon: '/icons/tech/travis.svg', category: 'CI/CD', proficiency: 'proficient' }
      ]
    },
    {
      name: 'Testing Tools',
      description: 'Automated testing frameworks',
      technologies: [
        { name: 'Jest', icon: '/icons/tech/jest.svg', category: 'Testing', proficiency: 'expert' },
        { name: 'Cypress', icon: '/icons/tech/cypress.svg', category: 'E2E', proficiency: 'expert' },
        { name: 'Playwright', icon: '/icons/tech/playwright.svg', category: 'E2E', proficiency: 'expert' },
        { name: 'Selenium', icon: '/icons/tech/selenium.svg', category: 'E2E', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Security Scanning',
      description: 'Security and quality tools',
      technologies: [
        { name: 'SonarQube', icon: '/icons/tech/sonarqube.svg', category: 'Quality', proficiency: 'expert' },
        { name: 'Snyk', icon: '/icons/tech/snyk.svg', category: 'Security', proficiency: 'expert' },
        { name: 'Trivy', icon: '/icons/tech/trivy.svg', category: 'Security', proficiency: 'expert' },
        { name: 'OWASP ZAP', icon: '/icons/tech/owasp.svg', category: 'Security', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Starter',
        description: 'Basic CI/CD for small teams',
        price: '$3,000',
        priceNote: 'one-time setup',
        features: [
          { name: 'Single repository pipeline', included: true },
          { name: 'Build automation', included: true },
          { name: 'Unit test integration', included: true },
          { name: 'Single environment deploy', included: true },
          { name: 'Basic documentation', included: true },
          { name: 'Multi-environment', included: false },
          { name: 'Security scanning', included: false },
          { name: 'Advanced deployment', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Professional',
        description: 'Complete CI/CD for growing teams',
        price: '$8,000',
        priceNote: 'one-time setup',
        badge: 'Most Popular',
        features: [
          { name: 'Multi-repo pipelines', included: true },
          { name: 'Full build automation', included: true },
          { name: 'Complete test suite', included: true },
          { name: 'Multi-environment deploys', included: true },
          { name: 'Security scanning', included: true },
          { name: 'Blue-green/Canary', included: true },
          { name: 'Notification integration', included: true },
          { name: 'Team training', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'Enterprise CI/CD platform',
        price: '$20,000+',
        priceNote: 'custom solution',
        features: [
          { name: 'Organization-wide CI/CD', included: true },
          { name: 'Enterprise build farm', included: true },
          { name: 'Advanced test automation', included: true },
          { name: 'Multi-cloud deployment', included: true },
          { name: 'Full security suite', included: true },
          { name: 'Advanced strategies', included: true },
          { name: 'ChatOps integration', included: true },
          { name: 'Dedicated support', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Need pipeline maintenance? Ask about our managed CI/CD services starting at $1,500/month.'
  },

  portfolio: [
    {
      title: 'Microservices CI/CD Platform',
      client: 'TechScale Solutions',
      industry: 'Technology',
      description: 'Built unified CI/CD for 50+ microservices with standardized pipelines',
      challenge: 'Each team had different CI/CD setups causing inconsistency and maintenance overhead',
      solution: 'Created reusable pipeline templates in GitHub Actions with shared testing and deployment',
      results: [
        'Standardized pipelines for 50+ services',
        'Build time reduced by 60%',
        'Deployment frequency increased 10x',
        'Maintenance overhead reduced by 80%'
      ],
      metrics: [
        { label: 'Services', value: '50+' },
        { label: 'Build Time', value: '-60%' },
        { label: 'Deploy Freq', value: '10x' }
      ],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      tags: ['GitHub Actions', 'Microservices', 'Standardization', 'Templates']
    },
    {
      title: 'Mobile App CI/CD Pipeline',
      client: 'AppFirst Mobile',
      industry: 'Mobile Apps',
      description: 'Automated iOS and Android build, test, and release pipelines',
      challenge: 'Manual app store releases taking 2 days with frequent submission rejections',
      solution: 'Implemented Fastlane with GitHub Actions for automated builds, testing, and releases',
      results: [
        'Release time reduced from 2 days to 2 hours',
        'App store rejections reduced by 90%',
        'Test coverage increased to 85%',
        'Beta releases now daily instead of weekly'
      ],
      metrics: [
        { label: 'Release Time', value: '2 hours' },
        { label: 'Rejections', value: '-90%' },
        { label: 'Test Coverage', value: '85%' }
      ],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      tags: ['Fastlane', 'iOS', 'Android', 'App Store']
    },
    {
      title: 'Enterprise DevOps Transformation',
      client: 'GlobalBank Corp',
      industry: 'Finance',
      description: 'Complete CI/CD transformation for a Fortune 500 financial institution',
      challenge: 'Legacy Jenkins pipelines were slow, unreliable, and lacked security compliance',
      solution: 'Migrated to GitLab CI with enterprise security scanning, compliance gates, and audit trails',
      results: [
        'Pipeline execution time reduced by 75%',
        'Achieved SOC2 compliance automation',
        '100% deployment audit trail',
        'Zero security incidents post-migration'
      ],
      metrics: [
        { label: 'Speed Gain', value: '75%' },
        { label: 'Compliance', value: '100%' },
        { label: 'Incidents', value: '0' }
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['GitLab CI', 'Enterprise', 'Security', 'Compliance']
    },
    {
      title: 'E-commerce Release Pipeline',
      client: 'ShopMax Retail',
      industry: 'E-commerce',
      description: 'High-availability deployment pipeline for 24/7 e-commerce platform',
      challenge: 'Deployments caused downtime during peak shopping hours affecting revenue',
      solution: 'Implemented blue-green deployments with automated rollback and canary releases',
      results: [
        'Zero-downtime deployments achieved',
        'Deployment frequency increased to 20/day',
        'Rollback time reduced to under 2 minutes',
        'Revenue loss from outages eliminated'
      ],
      metrics: [
        { label: 'Downtime', value: '0' },
        { label: 'Deploys/Day', value: '20' },
        { label: 'Rollback', value: '<2min' }
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['Blue-Green', 'Canary', 'E-commerce', 'High Availability']
    }
  ],

  testimonials: [
    {
      quote: 'The pipeline templates they created allow our teams to get new services into production in hours instead of weeks. Incredible productivity boost.',
      author: 'Sarah Chen',
      role: 'Director of Engineering',
      company: 'TechScale Solutions',
      rating: 5,
      location: 'San Jose, CA'
    },
    {
      quote: 'Our mobile releases used to be a nightmare. Now it\'s push a button and the app is in the store. They saved us countless hours.',
      author: 'Marcus Johnson',
      role: 'Mobile Lead',
      company: 'AppFirst Mobile',
      rating: 5,
      location: 'Austin, TX'
    }
  ],

  faqs: [
    {
      question: 'Which CI/CD platform should we use?',
      answer: 'The best platform depends on your ecosystem. GitHub Actions works great for GitHub-hosted repos. GitLab CI is excellent for GitLab users. Jenkins offers maximum flexibility. Azure DevOps integrates well with Microsoft tools. We\'ll recommend based on your specific needs and existing tooling.'
    },
    {
      question: 'How do you handle pipeline secrets?',
      answer: 'We never store secrets in pipeline code. We use the native secrets management of each platform (GitHub Secrets, GitLab CI Variables) combined with external secret stores like HashiCorp Vault or cloud provider secret managers for production credentials.'
    },
    {
      question: 'What testing should be in CI/CD pipelines?',
      answer: 'We recommend a testing pyramid: many fast unit tests, fewer integration tests, and minimal E2E tests. We also include security scanning (SAST, dependency scanning), code quality checks, and sometimes performance tests. The goal is fast feedback without sacrificing quality.'
    },
    {
      question: 'How long do pipelines typically take to run?',
      answer: 'A well-optimized pipeline should complete in 10-15 minutes. We achieve this through parallel test execution, build caching, and incremental builds. Long-running tests can be moved to separate pipelines that run less frequently.'
    },
    {
      question: 'Can you migrate our existing CI/CD pipelines?',
      answer: 'Yes, we regularly migrate pipelines between platforms (e.g., Jenkins to GitHub Actions, CircleCI to GitLab CI). We analyze existing configurations, redesign for the new platform, and implement improvements along the way.'
    }
  ],

  relatedServices: [
    {
      name: 'DevOps Automation',
      slug: 'devops-automation',
      description: 'Comprehensive DevOps solutions',
      icon: 'Settings'
    },
    {
      name: 'Infrastructure as Code',
      slug: 'infrastructure-as-code',
      description: 'Automated infrastructure provisioning',
      icon: 'Code'
    },
    {
      name: 'Kubernetes Services',
      slug: 'kubernetes-services',
      description: 'Container deployment automation',
      icon: 'Box'
    },
    {
      name: 'Cloud Security',
      slug: 'cloud-security',
      description: 'DevSecOps pipeline integration',
      icon: 'Shield'
    }
  ],

  seo: {
    title: 'CI/CD Pipeline Services | Continuous Integration & Delivery',
    description: 'Expert CI/CD pipeline engineering services. GitHub Actions, GitLab CI, Jenkins pipelines with automated testing, security scanning, and deployment automation.',
    keywords: [
      'ci cd pipeline',
      'continuous integration',
      'continuous delivery',
      'ci cd services',
      'github actions',
      'gitlab ci',
      'jenkins pipeline',
      'automated deployment',
      'pipeline automation',
      'devops pipeline'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'CI/CD Pipeline Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'CI/CD Consulting'
      }
    }
  }
};
