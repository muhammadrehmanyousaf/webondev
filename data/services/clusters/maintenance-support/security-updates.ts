// Security Updates Service Data
import { ServiceData } from '@/components/services/sections';

export const securityUpdatesData: ServiceData = {
  name: 'Security Updates',
  slug: 'security-updates',
  tagline: 'Keep your software secure and protected',
  category: 'Maintenance & Support',
  description: 'Professional security update services to protect your websites and applications from vulnerabilities. We handle patches, updates, and security hardening to keep your systems safe.',

  hero: {
    headline: 'Security Update Services',
    subheadline: 'Protection Against Modern Threats',
    description: 'Don\'t let outdated software put your business at risk. Our security update services ensure your websites and applications stay protected with the latest patches, security hardening, and proactive vulnerability management.',
    keyFeatures: [
      'Security patching',
      'Vulnerability scanning',
      'Malware removal',
      'Security hardening',
      'SSL management',
      'Compliance support'
    ],
    badges: ['24/7 Monitoring', 'Zero Day Response', 'PCI Compliant', '1000+ Sites Protected']
  },

  painPoints: [
    {
      icon: 'Shield',
      title: 'Vulnerable Software',
      description: 'Outdated software with known vulnerabilities',
      stat: '60%',
      statLabel: 'Sites have vulnerabilities'
    },
    {
      icon: 'AlertTriangle',
      title: 'Breach Risk',
      description: 'Increasing cyber attacks targeting businesses',
      stat: '43%',
      statLabel: 'SMBs attacked yearly'
    },
    {
      icon: 'DollarSign',
      title: 'Breach Costs',
      description: 'High cost of security incidents',
      stat: '$4.45M',
      statLabel: 'Avg breach cost'
    },
    {
      icon: 'Clock',
      title: 'No Time for Updates',
      description: 'Security updates delayed or forgotten',
      stat: '75%',
      statLabel: 'Sites need updates'
    }
  ],

  solutions: [
    {
      icon: 'RefreshCw',
      title: 'Patch Management',
      description: 'Timely application of security patches',
      highlights: [
        'CMS patches',
        'Plugin updates',
        'Framework updates',
        'Dependency updates'
      ]
    },
    {
      icon: 'Search',
      title: 'Vulnerability Management',
      description: 'Proactive identification and remediation',
      highlights: [
        'Regular scanning',
        'Risk assessment',
        'Prioritized fixes',
        'Penetration testing'
      ]
    },
    {
      icon: 'Shield',
      title: 'Security Hardening',
      description: 'Strengthen defenses against attacks',
      highlights: [
        'Configuration review',
        'Access controls',
        'Firewall rules',
        'Best practices'
      ]
    },
    {
      icon: 'Activity',
      title: 'Monitoring & Response',
      description: 'Continuous security monitoring',
      highlights: [
        '24/7 monitoring',
        'Threat detection',
        'Incident response',
        'Malware removal'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Security Audit',
        description: 'Comprehensive security assessment',
        duration: 'Week 1',
        deliverables: [
          'Vulnerability scan',
          'Configuration review',
          'Risk assessment',
          'Priority list'
        ]
      },
      {
        icon: 'Shield',
        title: 'Immediate Fixes',
        description: 'Address critical vulnerabilities first',
        duration: 'Week 1-2',
        deliverables: [
          'Critical patches',
          'Malware removal',
          'Access review',
          'Emergency hardening'
        ]
      },
      {
        icon: 'Settings',
        title: 'Hardening',
        description: 'Implement security best practices',
        duration: 'Week 2-3',
        deliverables: [
          'Security configuration',
          'Firewall setup',
          'SSL configuration',
          'Monitoring setup'
        ]
      },
      {
        icon: 'Activity',
        title: 'Ongoing Protection',
        description: 'Continuous security management',
        duration: 'Ongoing',
        deliverables: [
          'Regular updates',
          'Continuous monitoring',
          'Monthly reports',
          'Incident response'
        ]
      }
    ],
    totalDuration: '2-3 weeks initial, ongoing thereafter'
  },

  benefits: [
    {
      icon: 'Shield',
      title: 'Protected',
      description: 'Systems fully secured',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Vulnerability coverage'
    },
    {
      icon: 'Clock',
      title: 'Fast Updates',
      description: 'Critical patches applied quickly',
      stat: '24',
      statSuffix: 'hrs',
      statLabel: 'Critical patch SLA'
    },
    {
      icon: 'Activity',
      title: 'Monitored',
      description: 'Continuous security monitoring',
      stat: '24/7',
      statSuffix: '',
      statLabel: 'Monitoring'
    },
    {
      icon: 'CheckCircle',
      title: 'Compliant',
      description: 'Meet security requirements',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Compliance support'
    }
  ],

  techStack: [
    {
      name: 'Security Scanning',
      description: 'Vulnerability detection',
      technologies: [
        { name: 'Nessus', icon: '/icons/tech/nessus.svg', category: 'Scanner', proficiency: 'expert' },
        { name: 'Qualys', icon: '/icons/tech/qualys.svg', category: 'Scanner', proficiency: 'expert' },
        { name: 'OWASP ZAP', icon: '/icons/tech/owasp.svg', category: 'Testing', proficiency: 'expert' },
        { name: 'Sucuri', icon: '/icons/tech/sucuri.svg', category: 'Scanner', proficiency: 'expert' }
      ]
    },
    {
      name: 'Web Security',
      description: 'Web application security',
      technologies: [
        { name: 'Cloudflare', icon: '/icons/tech/cloudflare.svg', category: 'WAF', proficiency: 'expert' },
        { name: 'Wordfence', icon: '/icons/tech/wordfence.svg', category: 'WordPress', proficiency: 'expert' },
        { name: 'ModSecurity', icon: '/icons/tech/modsecurity.svg', category: 'WAF', proficiency: 'advanced' },
        { name: 'Let\'s Encrypt', icon: '/icons/tech/letsencrypt.svg', category: 'SSL', proficiency: 'expert' }
      ]
    },
    {
      name: 'Monitoring',
      description: 'Security monitoring',
      technologies: [
        { name: 'SIEM', icon: '/icons/tech/siem.svg', category: 'Monitoring', proficiency: 'advanced' },
        { name: 'Datadog', icon: '/icons/tech/datadog.svg', category: 'Monitoring', proficiency: 'expert' },
        { name: 'Splunk', icon: '/icons/tech/splunk.svg', category: 'SIEM', proficiency: 'advanced' },
        { name: 'AWS GuardDuty', icon: '/icons/tech/aws.svg', category: 'Cloud Security', proficiency: 'expert' }
      ]
    },
    {
      name: 'Compliance',
      description: 'Compliance tools',
      technologies: [
        { name: 'PCI-DSS', icon: '/icons/tech/pci.svg', category: 'Compliance', proficiency: 'expert' },
        { name: 'SOC 2', icon: '/icons/tech/soc2.svg', category: 'Compliance', proficiency: 'advanced' },
        { name: 'HIPAA', icon: '/icons/tech/hipaa.svg', category: 'Compliance', proficiency: 'advanced' },
        { name: 'GDPR', icon: '/icons/tech/gdpr.svg', category: 'Compliance', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Essential',
        description: 'Basic security updates',
        price: '$299',
        priceNote: 'per month',
        features: [
          { name: 'Monthly security scans', included: true },
          { name: 'CMS/plugin updates', included: true },
          { name: 'SSL monitoring', included: true },
          { name: 'Basic WAF', included: true },
          { name: 'Email alerts', included: true },
          { name: '24/7 monitoring', included: false },
          { name: 'Malware removal', included: false },
          { name: 'Priority response', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Professional',
        description: 'Comprehensive security',
        price: '$599',
        priceNote: 'per month',
        badge: 'Most Popular',
        features: [
          { name: 'Weekly security scans', included: true },
          { name: 'All updates managed', included: true },
          { name: 'Advanced WAF', included: true },
          { name: '24/7 monitoring', included: true },
          { name: 'Malware removal', included: true },
          { name: 'Security hardening', included: true },
          { name: 'Priority response', included: true },
          { name: 'Penetration testing', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'Full security management',
        price: 'Custom',
        priceNote: 'based on requirements',
        features: [
          { name: 'Daily security scans', included: true },
          { name: 'All Professional features', included: true },
          { name: 'Annual penetration test', included: true },
          { name: 'Compliance support', included: true },
          { name: 'Dedicated security analyst', included: true },
          { name: 'Custom security policies', included: true },
          { name: '1-hour incident response', included: true },
          { name: 'Executive reporting', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'All plans include incident response. Emergency malware removal available separately.'
  },

  portfolio: [
    {
      title: 'E-commerce Security Overhaul',
      client: 'LuxuryWatch Online',
      industry: 'E-commerce',
      description: 'Security hardening and ongoing protection for high-value e-commerce site',
      challenge: 'Multiple hacking attempts and customer data security concerns',
      solution: 'Comprehensive security assessment, hardening, and monitoring',
      results: [
        'Zero security incidents since engagement',
        'PCI-DSS compliance achieved',
        'All vulnerabilities patched within 24 hours',
        'Customer trust and sales improved'
      ],
      metrics: [
        { label: 'Security Incidents', value: '0' },
        { label: 'Patch Time', value: '<24hrs' },
        { label: 'Compliance', value: 'PCI-DSS' }
      ],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'PCI-DSS', 'Security', 'Protection']
    },
    {
      title: 'Healthcare Website Security',
      client: 'Regional Medical Center',
      industry: 'Healthcare',
      description: 'HIPAA-compliant security for healthcare organization websites',
      challenge: 'Needed to secure patient portal and meet HIPAA requirements',
      solution: 'Security hardening with HIPAA compliance focus',
      results: [
        'HIPAA compliance achieved',
        'Zero data breaches',
        'Passed security audit',
        'Patient trust improved'
      ],
      metrics: [
        { label: 'Compliance', value: 'HIPAA' },
        { label: 'Breaches', value: '0' },
        { label: 'Audit', value: 'Passed' }
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'HIPAA', 'Compliance', 'Security']
    },
    {
      title: 'Financial Services Security Program',
      client: 'WealthGuard Advisors',
      industry: 'Financial Services',
      description: 'Comprehensive security program for wealth management firm',
      challenge: 'Regulatory pressure and client concerns about data protection',
      solution: 'Multi-layered security with continuous monitoring and compliance reporting',
      results: [
        'SOC 2 Type II certification achieved',
        'Zero security breaches in 3 years',
        'Client confidence significantly improved',
        'Regulatory audit passed with no findings'
      ],
      metrics: [
        { label: 'Certification', value: 'SOC 2' },
        { label: 'Breaches', value: '0' },
        { label: 'Audit Findings', value: '0' }
      ],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      tags: ['Financial', 'SOC 2', 'Compliance', 'Enterprise']
    },
    {
      title: 'Education Platform Security',
      client: 'GlobalLearn University',
      industry: 'Education',
      description: 'Security updates and protection for online learning platform',
      challenge: 'Student data protection and preventing unauthorized access to materials',
      solution: 'Comprehensive security updates with access control improvements',
      results: [
        'FERPA compliance maintained',
        'Unauthorized access attempts blocked 100%',
        'Student data fully encrypted',
        'Platform security rating: A+'
      ],
      metrics: [
        { label: 'Compliance', value: 'FERPA' },
        { label: 'Threats Blocked', value: '100%' },
        { label: 'Security Rating', value: 'A+' }
      ],
      image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&h=600&fit=crop',
      tags: ['Education', 'FERPA', 'Data Protection', 'Compliance']
    }
  ],

  testimonials: [
    {
      quote: 'After being hacked twice, we needed serious security. Since engaging this team, we\'ve had zero incidents.',
      author: 'Christopher Lee',
      role: 'IT Director',
      company: 'LuxuryWatch Online',
      rating: 5,
      location: 'Miami, FL'
    },
    {
      quote: 'HIPAA compliance seemed impossible until they helped. Now our security is airtight and auditors are impressed.',
      author: 'Dr. Patricia Nguyen',
      role: 'CIO',
      company: 'Regional Medical Center',
      rating: 5,
      location: 'Phoenix, AZ'
    }
  ],

  faqs: [
    {
      question: 'How quickly do you apply critical security patches?',
      answer: 'Critical security patches (those affecting actively exploited vulnerabilities) are applied within 24 hours of release. High-severity patches are applied within 48-72 hours. All patches are tested in staging first to prevent issues.'
    },
    {
      question: 'What if my site gets hacked?',
      answer: 'Our Professional and Enterprise plans include malware removal and incident response. We identify the breach, remove malicious code, patch the vulnerability, and restore from clean backups if needed. We also provide a post-incident report and recommendations.'
    },
    {
      question: 'Do you support compliance requirements?',
      answer: 'Yes, we support PCI-DSS, HIPAA, SOC 2, GDPR, and other compliance frameworks. We implement required security controls, maintain documentation, and help prepare for audits. Our Enterprise plan includes dedicated compliance support.'
    },
    {
      question: 'What platforms do you secure?',
      answer: 'We secure all major platforms including WordPress, Drupal, Magento, Shopify, custom applications, and cloud infrastructure (AWS, Azure, GCP). Our approach adapts to your specific technology stack.'
    },
    {
      question: 'How do you handle zero-day vulnerabilities?',
      answer: 'We monitor security bulletins and threat intelligence sources for emerging threats. For zero-day vulnerabilities, we implement compensating controls (WAF rules, access restrictions) immediately while patches are developed, then apply official patches as soon as available.'
    }
  ],

  relatedServices: [
    {
      name: 'Website Maintenance',
      slug: 'website-maintenance',
      description: 'Full site care',
      icon: 'Globe'
    },
    {
      name: 'Application Maintenance',
      slug: 'application-maintenance',
      description: 'App maintenance',
      icon: 'Settings'
    },
    {
      name: 'Emergency Support',
      slug: 'emergency-support',
      description: 'Critical response',
      icon: 'AlertTriangle'
    },
    {
      name: 'Cloud Security',
      slug: 'cloud-security',
      description: 'Cloud protection',
      icon: 'Cloud'
    }
  ],

  seo: {
    title: 'Security Update Services | Website Security | Patch Management',
    description: 'Professional security update services. Patch management, vulnerability scanning, malware removal, security hardening. 24/7 monitoring. From $299/month.',
    keywords: [
      'security updates',
      'security patch management',
      'website security',
      'vulnerability management',
      'malware removal',
      'security hardening',
      'wordpress security',
      'website protection',
      'cyber security services',
      'security monitoring'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Security Update Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Website Security Services'
      }
    }
  }
};
