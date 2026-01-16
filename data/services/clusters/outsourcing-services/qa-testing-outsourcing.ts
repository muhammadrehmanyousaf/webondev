// QA Testing Outsourcing Service Data
import { ServiceData } from '@/components/services/sections';

export const qaTestingOutsourcingData: ServiceData = {
  name: 'QA Testing Outsourcing',
  slug: 'qa-testing-outsourcing',
  tagline: 'Ensure quality with dedicated testing experts',
  category: 'Outsourcing Services',
  description: 'Outsource your QA testing to dedicated professionals who ensure your software meets the highest quality standards. Our testing teams provide comprehensive coverage across manual and automated testing.',

  hero: {
    headline: 'QA Testing Outsourcing',
    subheadline: 'Quality Assurance Without Compromise',
    description: 'Partner with experienced QA professionals who catch bugs before your users do. Our testing outsourcing services provide comprehensive quality coverage, from manual testing to advanced automation.',
    keyFeatures: [
      'Dedicated QA teams',
      'Manual & automated testing',
      'Full test coverage',
      'CI/CD integration',
      'Multiple testing types',
      'Detailed reporting'
    ],
    badges: ['1000+ Projects Tested', 'ISTQB Certified', '99.5% Bug Detection', 'Automation Experts']
  },

  painPoints: [
    {
      icon: 'Bug',
      title: 'Bugs in Production',
      description: 'Software releases with critical bugs damaging user trust',
      stat: '40%',
      statLabel: 'Release with bugs'
    },
    {
      icon: 'Users',
      title: 'QA Hiring Challenges',
      description: 'Difficulty finding and retaining qualified QA engineers',
      stat: '65%',
      statLabel: 'Face QA hiring issues'
    },
    {
      icon: 'Clock',
      title: 'Testing Bottlenecks',
      description: 'Testing delays slowing down release cycles',
      stat: '30%',
      statLabel: 'Releases delayed'
    },
    {
      icon: 'DollarSign',
      title: 'High Testing Costs',
      description: 'Internal QA teams expensive to maintain',
      stat: '$90K+',
      statLabel: 'Avg QA engineer cost'
    }
  ],

  solutions: [
    {
      icon: 'Users',
      title: 'Dedicated QA Teams',
      description: 'Full-time QA professionals dedicated to your projects',
      highlights: [
        'ISTQB certified testers',
        'Domain expertise',
        'Full-time dedication',
        'Team continuity'
      ]
    },
    {
      icon: 'Code',
      title: 'Test Automation',
      description: 'Automated testing frameworks for faster, reliable testing',
      highlights: [
        'Selenium, Cypress, Playwright',
        'API testing automation',
        'Mobile automation',
        'CI/CD integration'
      ]
    },
    {
      icon: 'Shield',
      title: 'Comprehensive Coverage',
      description: 'All testing types covered by specialists',
      highlights: [
        'Functional testing',
        'Performance testing',
        'Security testing',
        'Usability testing'
      ]
    },
    {
      icon: 'FileText',
      title: 'Detailed Reporting',
      description: 'Clear, actionable test reports and metrics',
      highlights: [
        'Bug tracking',
        'Test metrics',
        'Coverage reports',
        'Executive dashboards'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'FileText',
        title: 'Assessment',
        description: 'Understand your testing needs and current state',
        duration: 'Week 1',
        deliverables: [
          'Testing requirements',
          'Current state analysis',
          'Test strategy',
          'Team structure'
        ]
      },
      {
        icon: 'Users',
        title: 'Team Setup',
        description: 'Build your dedicated QA team',
        duration: 'Week 2',
        deliverables: [
          'Tester selection',
          'Tool setup',
          'Process alignment',
          'Test environment'
        ]
      },
      {
        icon: 'Play',
        title: 'Test Execution',
        description: 'Execute tests and report findings',
        duration: 'Week 3+',
        deliverables: [
          'Test cases',
          'Bug reports',
          'Automation scripts',
          'Daily updates'
        ]
      },
      {
        icon: 'TrendingUp',
        title: 'Optimization',
        description: 'Continuously improve testing efficiency',
        duration: 'Ongoing',
        deliverables: [
          'Process improvements',
          'Automation expansion',
          'Coverage optimization',
          'Quality metrics'
        ]
      }
    ],
    totalDuration: '2-3 weeks to full testing'
  },

  benefits: [
    {
      icon: 'Bug',
      title: 'Bug Detection',
      description: 'Catch bugs before production',
      stat: '99.5',
      statSuffix: '%',
      statLabel: 'Bug detection rate'
    },
    {
      icon: 'DollarSign',
      title: 'Cost Savings',
      description: 'Reduce QA costs significantly',
      stat: '50',
      statSuffix: '%',
      statLabel: 'Cost reduction'
    },
    {
      icon: 'Zap',
      title: 'Faster Releases',
      description: 'Accelerate release cycles',
      stat: '40',
      statSuffix: '%',
      statLabel: 'Faster releases'
    },
    {
      icon: 'Shield',
      title: 'Quality Assurance',
      description: 'Comprehensive test coverage',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Test coverage'
    }
  ],

  techStack: [
    {
      name: 'Test Automation',
      description: 'Web and mobile automation',
      technologies: [
        { name: 'Selenium', icon: '/icons/tech/selenium.svg', category: 'Web', proficiency: 'expert' },
        { name: 'Cypress', icon: '/icons/tech/cypress.svg', category: 'Web', proficiency: 'expert' },
        { name: 'Playwright', icon: '/icons/tech/playwright.svg', category: 'Web', proficiency: 'expert' },
        { name: 'Appium', icon: '/icons/tech/appium.svg', category: 'Mobile', proficiency: 'expert' }
      ]
    },
    {
      name: 'API Testing',
      description: 'API and service testing',
      technologies: [
        { name: 'Postman', icon: '/icons/tech/postman.svg', category: 'API', proficiency: 'expert' },
        { name: 'REST Assured', icon: '/icons/tech/java.svg', category: 'API', proficiency: 'expert' },
        { name: 'SoapUI', icon: '/icons/tech/soapui.svg', category: 'API', proficiency: 'advanced' },
        { name: 'K6', icon: '/icons/tech/k6.svg', category: 'Load', proficiency: 'expert' }
      ]
    },
    {
      name: 'Performance Testing',
      description: 'Load and performance testing',
      technologies: [
        { name: 'JMeter', icon: '/icons/tech/jmeter.svg', category: 'Performance', proficiency: 'expert' },
        { name: 'Gatling', icon: '/icons/tech/gatling.svg', category: 'Performance', proficiency: 'advanced' },
        { name: 'LoadRunner', icon: '/icons/tech/loadrunner.svg', category: 'Performance', proficiency: 'advanced' },
        { name: 'Locust', icon: '/icons/tech/python.svg', category: 'Performance', proficiency: 'expert' }
      ]
    },
    {
      name: 'Test Management',
      description: 'Test management and reporting',
      technologies: [
        { name: 'Jira', icon: '/icons/tech/jira.svg', category: 'Management', proficiency: 'expert' },
        { name: 'TestRail', icon: '/icons/tech/testrail.svg', category: 'Management', proficiency: 'expert' },
        { name: 'Allure', icon: '/icons/tech/allure.svg', category: 'Reporting', proficiency: 'expert' },
        { name: 'Zephyr', icon: '/icons/tech/zephyr.svg', category: 'Management', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Manual Testing',
        description: '2-3 manual testers',
        price: '$6,000',
        priceNote: 'per month',
        features: [
          { name: '2-3 manual testers', included: true },
          { name: 'Functional testing', included: true },
          { name: 'Regression testing', included: true },
          { name: 'Bug tracking', included: true },
          { name: 'Test documentation', included: true },
          { name: 'Automation', included: false },
          { name: 'Performance testing', included: false },
          { name: 'Security testing', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Full QA Team',
        description: 'Manual + automation',
        price: '$12,000',
        priceNote: 'per month',
        badge: 'Most Popular',
        features: [
          { name: '4-5 QA engineers', included: true },
          { name: 'Manual testing', included: true },
          { name: 'Test automation', included: true },
          { name: 'API testing', included: true },
          { name: 'CI/CD integration', included: true },
          { name: 'Performance testing', included: true },
          { name: 'QA lead', included: true },
          { name: 'Security testing', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise QA',
        description: 'Complete QA coverage',
        price: 'Custom',
        priceNote: 'based on requirements',
        features: [
          { name: '8+ QA engineers', included: true },
          { name: 'Full manual testing', included: true },
          { name: 'Advanced automation', included: true },
          { name: 'Performance testing', included: true },
          { name: 'Security testing', included: true },
          { name: 'Accessibility testing', included: true },
          { name: 'Test architecture', included: true },
          { name: 'Executive reporting', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'All plans include ISTQB certified testers and detailed reporting. Scale up or down as needed.'
  },

  portfolio: [
    {
      title: 'E-commerce Platform Testing',
      client: 'ShopMax Retail',
      industry: 'E-commerce',
      description: 'Comprehensive QA outsourcing for large e-commerce platform',
      challenge: 'High bug rate and slow releases due to inadequate testing',
      solution: 'Deployed dedicated QA team with automation framework',
      results: [
        'Bug rate reduced by 85%',
        'Release cycle cut from 4 weeks to 1 week',
        '95% test automation coverage',
        'Zero critical bugs in 12 months'
      ],
      metrics: [
        { label: 'Bug Reduction', value: '85%' },
        { label: 'Release Speed', value: '4x faster' },
        { label: 'Automation', value: '95%' }
      ],
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Automation', 'Selenium', 'CI/CD']
    },
    {
      title: 'Banking App Quality Assurance',
      client: 'SecureBank Corp',
      industry: 'Banking',
      description: 'QA outsourcing for mobile banking application',
      challenge: 'Needed rigorous testing for financial transactions and security',
      solution: 'Provided specialized banking QA team with security focus',
      results: [
        'App store rating improved to 4.8/5',
        'Security vulnerabilities reduced by 100%',
        'Transaction testing 100% automated',
        'Regulatory compliance achieved'
      ],
      metrics: [
        { label: 'App Rating', value: '4.8/5' },
        { label: 'Security Issues', value: '0' },
        { label: 'Compliance', value: '100%' }
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      tags: ['Banking', 'Security Testing', 'Mobile', 'Compliance']
    },
    {
      title: 'SaaS Performance Testing',
      client: 'CloudMetrics Pro',
      industry: 'SaaS',
      description: 'Comprehensive performance and load testing for SaaS platform',
      challenge: 'Platform couldn\'t handle traffic spikes causing customer churn',
      solution: 'Implemented load testing framework and performance optimization QA',
      results: [
        'Platform handles 10x traffic load',
        'Response time improved 70%',
        'Zero downtime during peak periods',
        'Customer churn reduced 30%'
      ],
      metrics: [
        { label: 'Load Capacity', value: '10x' },
        { label: 'Response Time', value: '-70%' },
        { label: 'Churn', value: '-30%' }
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      tags: ['SaaS', 'Performance Testing', 'Load Testing', 'JMeter']
    },
    {
      title: 'Healthcare App Testing',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      description: 'HIPAA-compliant testing for patient management application',
      challenge: 'Required rigorous testing with strict compliance requirements',
      solution: 'Deployed QA team with healthcare domain and compliance expertise',
      results: [
        'HIPAA compliance validated',
        'Zero PHI exposure incidents',
        'Test coverage increased to 98%',
        'FDA submission supported'
      ],
      metrics: [
        { label: 'Compliance', value: 'HIPAA' },
        { label: 'Coverage', value: '98%' },
        { label: 'Incidents', value: '0' }
      ],
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'HIPAA', 'Compliance Testing', 'Medical']
    }
  ],

  testimonials: [
    {
      quote: 'Our release quality improved dramatically. The QA team catches bugs we never would have found internally.',
      author: 'Richard Park',
      role: 'CTO',
      company: 'ShopMax Retail',
      rating: 5,
      location: 'Seattle, WA'
    },
    {
      quote: 'For a banking app, quality is non-negotiable. This team gave us confidence in every release.',
      author: 'Amanda Foster',
      role: 'VP Engineering',
      company: 'SecureBank Corp',
      rating: 5,
      location: 'New York, NY'
    }
  ],

  faqs: [
    {
      question: 'What types of testing do you provide?',
      answer: 'We provide comprehensive testing services including functional testing, regression testing, automation testing, performance testing, security testing, usability testing, API testing, mobile testing, and compatibility testing. Our teams are experienced in all testing methodologies.'
    },
    {
      question: 'How do you integrate with our development process?',
      answer: 'Our QA teams integrate directly with your development workflow. We participate in sprint planning, work within your ticket system (Jira, Azure DevOps, etc.), integrate tests into your CI/CD pipeline, and provide real-time bug reporting and test results.'
    },
    {
      question: 'Do you provide test automation?',
      answer: 'Yes, test automation is a core service. We build and maintain automation frameworks using tools like Selenium, Cypress, Playwright, and Appium. We can automate web, mobile, and API testing, integrating with your CI/CD pipeline for continuous testing.'
    },
    {
      question: 'What certifications do your testers have?',
      answer: 'Our testers hold ISTQB certifications (Foundation, Advanced, Expert levels). Many also have specialized certifications in automation tools, security testing (OWASP), performance testing, and domain-specific certifications for industries like healthcare and finance.'
    },
    {
      question: 'How quickly can you start testing?',
      answer: 'We can typically start testing within 1-2 weeks. For urgent needs, we can have testers start within days using our bench of available certified testers. The exact timeline depends on your testing requirements and domain complexity.'
    }
  ],

  relatedServices: [
    {
      name: 'Staff Augmentation',
      slug: 'staff-augmentation',
      description: 'Individual QA placement',
      icon: 'UserPlus'
    },
    {
      name: 'DevOps Outsourcing',
      slug: 'devops-outsourcing',
      description: 'CI/CD and automation',
      icon: 'Settings'
    },
    {
      name: 'Dedicated Development Teams',
      slug: 'dedicated-development-teams',
      description: 'Full development teams',
      icon: 'Users'
    },
    {
      name: 'Mobile App Development',
      slug: 'mobile-app-development',
      description: 'Mobile development services',
      icon: 'Smartphone'
    }
  ],

  seo: {
    title: 'QA Testing Outsourcing Services | Software Testing Outsourcing',
    description: 'Outsource QA testing to certified professionals. Manual and automated testing, performance testing, security testing. 99.5% bug detection rate.',
    keywords: [
      'qa testing outsourcing',
      'software testing outsourcing',
      'qa outsourcing',
      'test automation outsourcing',
      'outsource qa testing',
      'testing services',
      'qa as a service',
      'software quality assurance',
      'automated testing services',
      'manual testing services'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'QA Testing Outsourcing Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Software Testing Outsourcing'
      }
    }
  }
};
