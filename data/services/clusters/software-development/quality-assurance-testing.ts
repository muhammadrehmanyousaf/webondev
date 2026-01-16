// Quality Assurance Testing - Software Development Cluster
// Comprehensive service data for quality assurance and testing services

import { ServiceData } from '@/components/services/sections';

export const qualityAssuranceTestingData: ServiceData = {
  slug: 'quality-assurance-testing',
  name: 'Quality Assurance Testing',
  tagline: 'Ship confidently with comprehensive testing coverage',
  description: 'Deliver flawless software with comprehensive QA services. From automated testing strategies to manual exploratory testing, we ensure your applications meet the highest quality standards while accelerating your release cycles.',
  category: 'Software Development',

  hero: {
    headline: 'Quality Assurance Testing',
    subheadline: 'Zero Defects, Maximum Confidence',
    description: 'Stop shipping bugs to production. Our comprehensive QA services combine intelligent test automation with expert manual testing to catch defects before your users do—accelerating releases while improving quality.',
    keyFeatures: [
      'Test Automation Strategy',
      'End-to-End Testing',
      'Performance & Load Testing',
      'Security Testing'
    ],
    badges: ['Selenium', 'Cypress', 'Playwright', 'JMeter']
  },

  painPoints: [
    {
      icon: 'Bug',
      title: 'Bugs Reach Production',
      description: 'Critical bugs slip through testing, damaging customer trust and requiring expensive hotfixes.',
      stat: '40%',
      statLabel: 'bugs found in prod'
    },
    {
      icon: 'Clock',
      title: 'Testing Bottleneck',
      description: 'Manual testing can\'t keep up with development velocity, becoming a release bottleneck.',
      stat: '60%',
      statLabel: 'time on manual testing'
    },
    {
      icon: 'AlertTriangle',
      title: 'Flaky Tests',
      description: 'Unreliable automated tests that randomly fail, eroding team confidence and wasting time.',
      stat: '30%',
      statLabel: 'tests are flaky'
    },
    {
      icon: 'Layers',
      title: 'Inadequate Coverage',
      description: 'Critical paths untested while low-value areas over-tested, missing the bugs that matter.',
      stat: '25%',
      statLabel: 'critical path coverage'
    },
    {
      icon: 'TrendingDown',
      title: 'Regression Failures',
      description: 'New features break existing functionality because regression testing is incomplete.',
      stat: '35%',
      statLabel: 'releases have regressions'
    },
    {
      icon: 'DollarSign',
      title: 'High Testing Costs',
      description: 'Large QA teams running slow manual processes without proportional quality improvement.',
      stat: '3x',
      statLabel: 'cost vs. automation'
    }
  ],

  solutions: [
    {
      icon: 'Cpu',
      title: 'Test Automation',
      description: 'Implement robust automated testing that runs with every commit and scales with your codebase.',
      highlights: [
        'Unit test frameworks',
        'Integration testing',
        'E2E test automation',
        'API testing'
      ]
    },
    {
      icon: 'Search',
      title: 'Manual & Exploratory Testing',
      description: 'Expert testers find edge cases and usability issues that automation misses.',
      highlights: [
        'Exploratory testing',
        'Usability testing',
        'Accessibility testing',
        'User acceptance testing'
      ]
    },
    {
      icon: 'Gauge',
      title: 'Performance Testing',
      description: 'Ensure your application performs under load with comprehensive performance testing.',
      highlights: [
        'Load testing',
        'Stress testing',
        'Scalability testing',
        'Performance profiling'
      ]
    },
    {
      icon: 'Shield',
      title: 'Security Testing',
      description: 'Identify vulnerabilities before attackers do with thorough security testing.',
      highlights: [
        'Penetration testing',
        'OWASP compliance',
        'Vulnerability scanning',
        'Security code review'
      ]
    },
    {
      icon: 'Smartphone',
      title: 'Mobile Testing',
      description: 'Comprehensive testing across devices, OS versions, and network conditions.',
      highlights: [
        'Cross-device testing',
        'OS version compatibility',
        'Network condition testing',
        'App store compliance'
      ]
    },
    {
      icon: 'GitBranch',
      title: 'CI/CD Integration',
      description: 'Integrate testing into your development pipeline for continuous quality feedback.',
      highlights: [
        'Pipeline integration',
        'Parallel test execution',
        'Test result reporting',
        'Quality gates'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Quality Assessment',
        description: 'Evaluate current testing practices, coverage gaps, and quality metrics.',
        duration: '1-2 weeks',
        deliverables: ['Testing assessment', 'Coverage analysis', 'Risk identification', 'Recommendations']
      },
      {
        icon: 'Target',
        title: 'Test Strategy',
        description: 'Define comprehensive test strategy aligned with project goals and risk profile.',
        duration: '1-2 weeks',
        deliverables: ['Test strategy', 'Tool selection', 'Coverage targets', 'Testing pyramid']
      },
      {
        icon: 'Layout',
        title: 'Framework Setup',
        description: 'Establish test frameworks, environments, and CI/CD integration.',
        duration: '2-3 weeks',
        deliverables: ['Test framework', 'Test environments', 'CI/CD integration', 'Reporting setup']
      },
      {
        icon: 'Code',
        title: 'Test Development',
        description: 'Develop comprehensive automated and manual test suites.',
        duration: '4-8 weeks',
        deliverables: ['Automated tests', 'Test cases', 'Test data', 'Documentation']
      },
      {
        icon: 'Play',
        title: 'Execution & Reporting',
        description: 'Execute tests, analyze results, and provide actionable quality insights.',
        duration: 'Ongoing',
        deliverables: ['Test results', 'Defect reports', 'Quality metrics', 'Trend analysis']
      },
      {
        icon: 'RefreshCw',
        title: 'Continuous Improvement',
        description: 'Optimize test suite, reduce flakiness, and improve coverage continuously.',
        duration: 'Ongoing',
        deliverables: ['Coverage improvement', 'Test optimization', 'Process refinement', 'Knowledge transfer']
      }
    ],
    totalDuration: '8-15 weeks initial, ongoing'
  },

  benefits: [
    {
      icon: 'Bug',
      title: 'Fewer Production Bugs',
      description: 'Catch 95% of defects before they reach production and impact users.',
      stat: '95',
      statSuffix: '%',
      statLabel: 'bugs caught'
    },
    {
      icon: 'Rocket',
      title: 'Faster Releases',
      description: 'Automated testing enables continuous delivery without quality compromise.',
      stat: '10',
      statSuffix: 'x',
      statLabel: 'faster releases'
    },
    {
      icon: 'DollarSign',
      title: 'Reduced Costs',
      description: 'Automation reduces testing costs while improving coverage and speed.',
      stat: '60',
      statSuffix: '%',
      statLabel: 'cost reduction'
    },
    {
      icon: 'CheckCircle',
      title: 'Comprehensive Coverage',
      description: 'Test critical paths thoroughly with appropriate coverage targets.',
      stat: '90',
      statSuffix: '%',
      statLabel: 'coverage achieved'
    },
    {
      icon: 'Shield',
      title: 'Security Assurance',
      description: 'Identify and fix vulnerabilities before they become breaches.',
      stat: '100',
      statSuffix: '%',
      statLabel: 'OWASP coverage'
    },
    {
      icon: 'Users',
      title: 'User Satisfaction',
      description: 'Higher quality software leads to happier users and better reviews.',
      stat: '4.8',
      statSuffix: '★',
      statLabel: 'avg app rating'
    }
  ],

  techStack: [
    {
      name: 'Web Testing',
      description: 'Browser automation tools',
      technologies: [
        { name: 'Playwright', category: 'E2E', proficiency: 'expert' },
        { name: 'Cypress', category: 'E2E', proficiency: 'expert' },
        { name: 'Selenium', category: 'E2E', proficiency: 'expert' },
        { name: 'Puppeteer', category: 'E2E', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Unit Testing',
      description: 'Unit test frameworks',
      technologies: [
        { name: 'Jest', category: 'Unit Testing', proficiency: 'expert' },
        { name: 'Vitest', category: 'Unit Testing', proficiency: 'expert' },
        { name: 'JUnit', category: 'Unit Testing', proficiency: 'expert' },
        { name: 'pytest', category: 'Unit Testing', proficiency: 'expert' }
      ]
    },
    {
      name: 'API Testing',
      description: 'API test automation',
      technologies: [
        { name: 'Postman', category: 'API Testing', proficiency: 'expert' },
        { name: 'REST Assured', category: 'API Testing', proficiency: 'expert' },
        { name: 'Supertest', category: 'API Testing', proficiency: 'expert' },
        { name: 'GraphQL Testing', category: 'API Testing', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Performance Testing',
      description: 'Load and performance tools',
      technologies: [
        { name: 'k6', category: 'Performance', proficiency: 'expert' },
        { name: 'JMeter', category: 'Performance', proficiency: 'expert' },
        { name: 'Gatling', category: 'Performance', proficiency: 'advanced' },
        { name: 'Lighthouse', category: 'Web Perf', proficiency: 'expert' }
      ]
    },
    {
      name: 'Mobile Testing',
      description: 'Mobile app testing tools',
      technologies: [
        { name: 'Appium', category: 'Mobile', proficiency: 'expert' },
        { name: 'Detox', category: 'React Native', proficiency: 'advanced' },
        { name: 'XCTest', category: 'iOS', proficiency: 'advanced' },
        { name: 'Espresso', category: 'Android', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Security Testing',
      description: 'Security testing tools',
      technologies: [
        { name: 'OWASP ZAP', category: 'Security', proficiency: 'expert' },
        { name: 'Burp Suite', category: 'Security', proficiency: 'advanced' },
        { name: 'Snyk', category: 'Security', proficiency: 'expert' },
        { name: 'SonarQube', category: 'Code Quality', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Test Automation Setup',
        description: 'Establish testing framework and initial automation',
        price: "$15,000",
        priceNote: 'Starting price',
        features: [
          { name: 'Test Framework Setup', included: true },
          { name: 'Initial Test Suite', included: true },
          { name: 'CI/CD Integration', included: true },
          { name: 'Documentation', included: true },
          { name: 'Team Training', included: true },
          { name: 'Ongoing Test Development', included: false },
          { name: 'Performance Testing', included: false },
          { name: 'Security Testing', included: false }
        ],
        ctaText: 'Get Started'
      },
      {
        name: 'Full QA Services',
        description: 'Comprehensive testing services and automation',
        price: "$8,000",
        priceNote: 'Per month',
        features: [
          { name: 'Automated Test Development', included: true },
          { name: 'Manual Testing', included: true },
          { name: 'Regression Testing', included: true },
          { name: 'Performance Testing', included: true },
          { name: 'Bug Reporting & Tracking', included: true },
          { name: 'Quality Metrics & Reporting', included: true },
          { name: 'Security Testing', included: false },
          { name: 'Dedicated QA Team', included: false }
        ],
        highlighted: true,
        badge: 'Most Popular',
        ctaText: 'Start Testing'
      },
      {
        name: 'Enterprise QA',
        description: 'Dedicated QA team and comprehensive coverage',
        price: "$25,000",
        priceNote: 'Per month',
        features: [
          { name: 'Dedicated QA Team', included: true },
          { name: 'Complete Test Automation', included: true },
          { name: 'Performance & Load Testing', included: true },
          { name: 'Security Testing', included: true },
          { name: 'Accessibility Testing', included: true },
          { name: 'QA Strategy & Consulting', included: true },
          { name: 'Custom Tool Development', included: true },
          { name: '24/7 Testing Coverage', included: true }
        ],
        ctaText: 'Contact Us'
      }
    ],
    customNote: 'Need specific testing services? Contact us for a customized QA solution.'
  },

  portfolio: [
    {
      title: 'E-commerce Test Automation',
      client: 'ShopFast Commerce',
      industry: 'E-commerce',
      description: 'Built comprehensive test automation covering 500+ user journeys across web and mobile.',
      challenge: 'Manual testing took 2 weeks per release, blocking frequent deployments and missing critical bugs.',
      solution: 'Implemented Playwright E2E tests, API tests with Postman, and mobile tests with Appium, integrated into CI/CD.',
      results: [
        '90% test automation',
        '2 weeks → 2 hours testing',
        '85% fewer production bugs',
        'Daily deployments enabled'
      ],
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop',
      tags: ['Playwright', 'Postman', 'Appium', 'GitHub Actions'],
      testimonial: {
        quote: 'We went from dreading releases to shipping multiple times per day with confidence.',
        author: 'Lisa Chen',
        role: 'VP Engineering'
      }
    },
    {
      title: 'Banking App Security Testing',
      client: 'SecureFinance Bank',
      industry: 'Financial Services',
      description: 'Comprehensive security and compliance testing for mobile banking application.',
      challenge: 'Banking app needed to pass stringent security audits and comply with financial regulations.',
      solution: 'Implemented penetration testing, OWASP compliance testing, and continuous security scanning in pipeline.',
      results: [
        'Zero critical vulnerabilities',
        'Passed all security audits',
        'PCI-DSS compliance achieved',
        '100% OWASP coverage'
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      tags: ['OWASP ZAP', 'Burp Suite', 'Snyk', 'Mobile Security'],
      testimonial: {
        quote: 'They found vulnerabilities our previous auditors missed. Security is now our strength.',
        author: 'James Morrison',
        role: 'CISO'
      }
    },
    {
      title: 'SaaS Performance Testing',
      client: 'CloudScale Platform',
      industry: 'Technology',
      description: 'Performance testing ensuring platform handles 1M concurrent users.',
      challenge: 'Platform crashed during viral marketing campaign. Needed assurance it could handle massive scale.',
      solution: 'Built comprehensive load testing with k6, identified bottlenecks, and validated fixes with continuous performance testing.',
      results: [
        '1M concurrent users tested',
        '95th percentile < 200ms',
        'Identified 15 bottlenecks',
        'Zero crashes post-fix'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['k6', 'Grafana', 'Performance', 'Load Testing'],
      testimonial: {
        quote: 'We confidently ran our biggest campaign ever. The platform didn\'t even flinch.',
        author: 'Michael Park',
        role: 'CTO'
      }
    },
    {
      title: 'Healthcare App Compliance Testing',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      description: 'Comprehensive QA program for FDA-regulated medical device software with full traceability.',
      challenge: 'Medical device software required rigorous testing documentation and regulatory compliance for FDA submission.',
      solution: 'Implemented risk-based testing with full requirements traceability, automated regression suites, and compliance documentation.',
      results: [
        'FDA 510(k) clearance',
        '100% requirement coverage',
        'Full audit traceability',
        'Zero defect escapes'
      ],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      tags: ['FDA', 'Medical Device', 'Compliance', 'Traceability'],
      testimonial: {
        quote: 'Their testing documentation was praised by FDA reviewers. Critical to our approval.',
        author: 'Dr. Rachel Kim',
        role: 'VP Quality'
      }
    }
  ],

  testimonials: [
    {
      quote: 'Test automation transformed our release process. We ship weekly instead of monthly, with fewer bugs.',
      author: 'Sarah Williams',
      role: 'Engineering Director',
      company: 'TechStart Inc',
      rating: 5,
      location: 'San Francisco, CA'
    },
    {
      quote: 'Their security testing found critical vulnerabilities before launch. They probably saved us from a breach.',
      author: 'Robert Kim',
      role: 'CTO',
      company: 'DataSecure Systems',
      rating: 5,
      location: 'Seattle, WA'
    },
    {
      quote: 'Finally, a QA team that understands our codebase. Test coverage went from 30% to 90% in 3 months.',
      author: 'Amanda Torres',
      role: 'VP Product',
      company: 'InnovateLabs',
      rating: 5,
      location: 'Austin, TX'
    }
  ],

  faqs: [
    {
      question: 'What\'s the right testing pyramid for our project?',
      answer: 'A typical pyramid has 70% unit tests (fast, isolated), 20% integration tests (component interactions), and 10% E2E tests (critical user journeys). We adjust based on your application type—APIs may need more integration tests, while consumer apps may need more E2E coverage.'
    },
    {
      question: 'How do you handle flaky tests?',
      answer: 'We implement strict practices: proper test isolation, deterministic test data, explicit waits over implicit, and automatic retry with root cause analysis. Flaky tests are quarantined and fixed before they erode team confidence. We aim for <1% flake rate.'
    },
    {
      question: 'Can you test our existing codebase?',
      answer: 'Absolutely. We start with a test assessment to understand current coverage, then prioritize testing critical paths and highest-risk areas. We add tests incrementally—you don\'t need to stop development for testing to begin.'
    },
    {
      question: 'What about manual testing?',
      answer: 'Manual testing remains valuable for exploratory testing, usability assessment, and scenarios difficult to automate. We combine automated regression testing with targeted manual testing for new features and edge cases.'
    },
    {
      question: 'How do you integrate with our CI/CD pipeline?',
      answer: 'Tests run automatically on every pull request with fast unit tests, and more comprehensive tests on merge to main. We set up quality gates that block deployment if tests fail, with detailed reporting and test result trends.'
    },
    {
      question: 'Do you provide ongoing testing services?',
      answer: 'Yes, we offer both project-based setup and ongoing QA services. Many clients start with automation setup and transition to ongoing testing as their application evolves. We scale testing effort to match your release cadence.'
    }
  ],

  relatedServices: [
    {
      name: 'Custom Software Development',
      slug: 'custom-software-development',
      description: 'Development with built-in quality practices',
      icon: 'Code'
    },
    {
      name: 'DevOps Integration',
      slug: 'devops-integration',
      description: 'CI/CD pipeline integration for automated testing',
      icon: 'GitBranch'
    },
    {
      name: 'Mobile App Development',
      slug: '/mobile-development',
      description: 'Mobile app development with comprehensive testing',
      icon: 'Smartphone'
    },
    {
      name: 'Enterprise Software Solutions',
      slug: 'enterprise-software-solutions',
      description: 'Enterprise software with rigorous QA',
      icon: 'Building2'
    }
  ],

  seo: {
    title: 'Quality Assurance Testing Services | Test Automation, QA Consulting',
    description: 'Comprehensive QA and testing services including test automation, performance testing, security testing, and manual testing. Playwright, Cypress, Selenium experts. Ship quality software faster.',
    keywords: [
      'quality assurance testing',
      'test automation',
      'qa services',
      'software testing',
      'playwright testing',
      'cypress testing',
      'selenium automation',
      'performance testing',
      'security testing',
      'qa consulting'
    ]
  }
};
