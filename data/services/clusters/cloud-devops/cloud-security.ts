// Cloud Security Service Data
import { ServiceData } from '@/components/services/sections';

export const cloudSecurityData: ServiceData = {
  name: 'Cloud Security',
  slug: 'cloud-security',
  tagline: 'Protect your cloud infrastructure with comprehensive security',
  category: 'Cloud & DevOps',
  description: 'Secure your cloud environments with defense-in-depth security strategies. We implement comprehensive cloud security covering identity, network, data, and application layers while enabling compliance with industry regulations.',

  hero: {
    headline: 'Cloud Security Services',
    subheadline: 'Comprehensive Protection for Your Cloud',
    description: 'Defend your cloud infrastructure against evolving threats. Our security experts implement zero-trust architectures, continuous monitoring, and compliance controls that protect your assets without slowing innovation.',
    keyFeatures: [
      'Zero-trust architecture',
      'Cloud security posture management',
      'Identity & access management',
      'Data encryption & protection',
      'Compliance automation',
      'Security monitoring & SIEM'
    ],
    badges: ['CISSP Certified', 'AWS Security Specialty', 'Cloud Security Alliance', 'SOC 2 Experts']
  },

  painPoints: [
    {
      icon: 'AlertTriangle',
      title: 'Misconfigurations',
      description: 'Cloud misconfigurations creating vulnerabilities and exposing data',
      stat: '68%',
      statLabel: 'Breaches from misconfig'
    },
    {
      icon: 'Lock',
      title: 'Identity Sprawl',
      description: 'Uncontrolled access permissions and orphaned accounts creating risk',
      stat: '95%',
      statLabel: 'Have excess permissions'
    },
    {
      icon: 'FileText',
      title: 'Compliance Gaps',
      description: 'Struggling to meet regulatory requirements in cloud environments',
      stat: '50%',
      statLabel: 'Fail compliance audits'
    },
    {
      icon: 'Eye',
      title: 'Limited Visibility',
      description: 'Inability to detect threats and anomalies across cloud resources',
      stat: '280 days',
      statLabel: 'Average breach detection'
    }
  ],

  solutions: [
    {
      icon: 'Shield',
      title: 'Cloud Security Posture',
      description: 'Continuous assessment and remediation of cloud misconfigurations',
      highlights: [
        'CSPM implementation',
        'Misconfiguration detection',
        'Automated remediation',
        'Risk prioritization'
      ]
    },
    {
      icon: 'Key',
      title: 'Identity Security',
      description: 'Zero-trust identity and access management for cloud resources',
      highlights: [
        'IAM audit & cleanup',
        'Least privilege enforcement',
        'MFA everywhere',
        'Privileged access management'
      ]
    },
    {
      icon: 'Lock',
      title: 'Data Protection',
      description: 'Encrypt and protect sensitive data at rest and in transit',
      highlights: [
        'Encryption implementation',
        'Key management',
        'Data classification',
        'DLP controls'
      ]
    },
    {
      icon: 'Activity',
      title: 'Security Monitoring',
      description: 'Real-time threat detection and incident response capabilities',
      highlights: [
        'SIEM implementation',
        'Threat detection rules',
        'Incident response',
        'Security automation'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Security Assessment',
        description: 'Comprehensive assessment of current cloud security posture',
        duration: 'Week 1-2',
        deliverables: [
          'Security assessment report',
          'Vulnerability findings',
          'Risk prioritization',
          'Remediation roadmap'
        ]
      },
      {
        icon: 'Layout',
        title: 'Architecture Design',
        description: 'Design zero-trust security architecture for your cloud',
        duration: 'Week 2-3',
        deliverables: [
          'Security architecture',
          'Network design',
          'IAM strategy',
          'Compliance mapping'
        ]
      },
      {
        icon: 'Shield',
        title: 'Security Implementation',
        description: 'Deploy security controls, monitoring, and compliance automation',
        duration: 'Week 3-6',
        deliverables: [
          'Security controls',
          'CSPM deployment',
          'SIEM setup',
          'Compliance automation'
        ]
      },
      {
        icon: 'CheckCircle',
        title: 'Validation & Operations',
        description: 'Validate security posture and establish operational procedures',
        duration: 'Week 6-8',
        deliverables: [
          'Penetration testing',
          'Security runbooks',
          'Incident response plan',
          'Team training'
        ]
      }
    ],
    totalDuration: '6-8 weeks'
  },

  benefits: [
    {
      icon: 'Shield',
      title: 'Reduced Risk',
      description: 'Significantly lower risk of breaches and data exposure',
      stat: '85',
      statSuffix: '%',
      statLabel: 'Risk reduction'
    },
    {
      icon: 'CheckCircle',
      title: 'Compliance Ready',
      description: 'Meet regulatory requirements with automated controls',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Compliance coverage'
    },
    {
      icon: 'Eye',
      title: 'Full Visibility',
      description: 'Complete visibility into security posture and threats',
      stat: '24/7',
      statSuffix: '',
      statLabel: 'Security monitoring'
    },
    {
      icon: 'Zap',
      title: 'Faster Response',
      description: 'Rapid detection and response to security incidents',
      stat: '<1',
      statSuffix: 'hr',
      statLabel: 'Mean time to detect'
    }
  ],

  techStack: [
    {
      name: 'Cloud Security Posture',
      description: 'CSPM and security assessment tools',
      technologies: [
        { name: 'AWS Security Hub', icon: '/icons/tech/security-hub.svg', category: 'CSPM', proficiency: 'expert' },
        { name: 'Azure Defender', icon: '/icons/tech/defender.svg', category: 'CSPM', proficiency: 'expert' },
        { name: 'Prisma Cloud', icon: '/icons/tech/prisma.svg', category: 'CSPM', proficiency: 'expert' },
        { name: 'Wiz', icon: '/icons/tech/wiz.svg', category: 'CSPM', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Identity & Access',
      description: 'IAM and identity security tools',
      technologies: [
        { name: 'AWS IAM', icon: '/icons/tech/iam.svg', category: 'Identity', proficiency: 'expert' },
        { name: 'Entra ID', icon: '/icons/tech/entra.svg', category: 'Identity', proficiency: 'expert' },
        { name: 'Okta', icon: '/icons/tech/okta.svg', category: 'Identity', proficiency: 'expert' },
        { name: 'CyberArk', icon: '/icons/tech/cyberark.svg', category: 'PAM', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Security Monitoring',
      description: 'SIEM and monitoring tools',
      technologies: [
        { name: 'Splunk', icon: '/icons/tech/splunk.svg', category: 'SIEM', proficiency: 'expert' },
        { name: 'Azure Sentinel', icon: '/icons/tech/sentinel.svg', category: 'SIEM', proficiency: 'expert' },
        { name: 'Datadog Security', icon: '/icons/tech/datadog.svg', category: 'SIEM', proficiency: 'advanced' },
        { name: 'Elastic Security', icon: '/icons/tech/elastic.svg', category: 'SIEM', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Compliance & Scanning',
      description: 'Compliance and vulnerability tools',
      technologies: [
        { name: 'Checkov', icon: '/icons/tech/checkov.svg', category: 'IaC Security', proficiency: 'expert' },
        { name: 'Trivy', icon: '/icons/tech/trivy.svg', category: 'Scanning', proficiency: 'expert' },
        { name: 'Snyk', icon: '/icons/tech/snyk.svg', category: 'Scanning', proficiency: 'expert' },
        { name: 'Qualys', icon: '/icons/tech/qualys.svg', category: 'Scanning', proficiency: 'advanced' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Starter',
        description: 'Essential cloud security',
        price: '$10,000',
        priceNote: 'one-time setup',
        features: [
          { name: 'Security assessment', included: true },
          { name: 'IAM audit & cleanup', included: true },
          { name: 'Basic CSPM setup', included: true },
          { name: 'Security hardening', included: true },
          { name: 'Documentation', included: true },
          { name: 'SIEM implementation', included: false },
          { name: 'Compliance automation', included: false },
          { name: 'Ongoing monitoring', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Professional',
        description: 'Comprehensive cloud security',
        price: '$25,000',
        priceNote: 'one-time setup',
        badge: 'Most Popular',
        features: [
          { name: 'Full security assessment', included: true },
          { name: 'Zero-trust IAM', included: true },
          { name: 'Advanced CSPM', included: true },
          { name: 'Full security hardening', included: true },
          { name: 'SIEM implementation', included: true },
          { name: 'Basic compliance', included: true },
          { name: 'Incident response plan', included: true },
          { name: '3-month support', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'Enterprise security platform',
        price: '$60,000+',
        priceNote: 'custom solution',
        features: [
          { name: 'Enterprise assessment', included: true },
          { name: 'Enterprise IAM/PAM', included: true },
          { name: 'Enterprise CSPM', included: true },
          { name: 'Global hardening', included: true },
          { name: 'Enterprise SIEM', included: true },
          { name: 'Full compliance suite', included: true },
          { name: 'SOC integration', included: true },
          { name: '24/7 managed security', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Need ongoing security management? Ask about our managed security services starting at $8,000/month.'
  },

  portfolio: [
    {
      title: 'Financial Services Security Transformation',
      client: 'SecureBank Holdings',
      industry: 'Financial Services',
      description: 'Implemented comprehensive cloud security for multi-cloud banking infrastructure',
      challenge: 'Failed security audits with misconfigured cloud resources and excessive permissions',
      solution: 'Deployed zero-trust architecture, CSPM, SIEM, and automated compliance controls',
      results: [
        'Passed PCI-DSS and SOC 2 audits',
        'Reduced security findings by 95%',
        'Achieved real-time threat detection',
        'Zero security incidents in 18 months'
      ],
      metrics: [
        { label: 'Compliance', value: '100%' },
        { label: 'Findings', value: '-95%' },
        { label: 'Incidents', value: '0' }
      ],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      tags: ['PCI-DSS', 'Zero Trust', 'SIEM', 'Financial Services']
    },
    {
      title: 'Healthcare HIPAA Security',
      client: 'HealthCloud Systems',
      industry: 'Healthcare',
      description: 'Secured healthcare cloud infrastructure for HIPAA compliance',
      challenge: 'Aging security controls and lack of visibility into PHI access patterns',
      solution: 'Implemented comprehensive security monitoring, encryption, and access controls',
      results: [
        'Achieved HIPAA compliance',
        'PHI access fully auditable',
        'Encryption for all patient data',
        'Incident response time reduced by 80%'
      ],
      metrics: [
        { label: 'Compliance', value: 'HIPAA' },
        { label: 'Encryption', value: '100%' },
        { label: 'Response Time', value: '-80%' }
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      tags: ['HIPAA', 'Healthcare', 'Data Protection', 'Compliance']
    },
    {
      title: 'E-commerce Security Hardening',
      client: 'ShopSecure Online',
      industry: 'E-commerce',
      description: 'Complete security overhaul for high-traffic e-commerce platform',
      challenge: 'Multiple security incidents and customer data exposure affecting brand trust',
      solution: 'Implemented WAF, DDoS protection, data encryption, and continuous vulnerability management',
      results: [
        'Zero security incidents in 18 months',
        'DDoS attacks mitigated automatically',
        'Customer trust scores improved 40%',
        'PCI-DSS compliance achieved'
      ],
      metrics: [
        { label: 'Incidents', value: '0' },
        { label: 'DDoS Blocked', value: '100%' },
        { label: 'Trust Score', value: '+40%' }
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'WAF', 'DDoS Protection', 'PCI-DSS']
    },
    {
      title: 'Startup Security Foundation',
      client: 'SecureStart Ventures',
      industry: 'Technology',
      description: 'Built security-first cloud architecture for venture-backed startup',
      challenge: 'Needed enterprise-grade security to win enterprise customers without enterprise budget',
      solution: 'Implemented cost-effective security stack with CSPM, automated remediation, and SOC 2 controls',
      results: [
        'SOC 2 Type II certified in 6 months',
        'Won first enterprise contract',
        'Security posture maintained with 0.5 FTE',
        'Investor confidence increased significantly'
      ],
      metrics: [
        { label: 'SOC 2', value: '6 months' },
        { label: 'Enterprise Deals', value: '5' },
        { label: 'FTE Required', value: '0.5' }
      ],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      tags: ['SOC 2', 'Startup', 'CSPM', 'Cost-Effective']
    }
  ],

  testimonials: [
    {
      quote: 'They transformed our security posture from a liability to a competitive advantage. We now pass audits with confidence.',
      author: 'Richard Thompson',
      role: 'CISO',
      company: 'SecureBank Holdings',
      rating: 5,
      location: 'Charlotte, NC'
    },
    {
      quote: 'HIPAA compliance seemed overwhelming. Their systematic approach made it manageable and we now have world-class security.',
      author: 'Dr. Michelle Adams',
      role: 'Chief Medical Information Officer',
      company: 'HealthCloud Systems',
      rating: 5,
      location: 'Nashville, TN'
    }
  ],

  faqs: [
    {
      question: 'What is Cloud Security Posture Management (CSPM)?',
      answer: 'CSPM continuously monitors your cloud environments for misconfigurations, compliance violations, and security risks. It provides visibility across all cloud resources, identifies issues like public S3 buckets or overly permissive security groups, and can automate remediation.'
    },
    {
      question: 'How do you implement zero-trust in the cloud?',
      answer: 'Zero-trust assumes no implicit trust - every access request is verified. We implement this through strong identity verification (MFA, SSO), least-privilege access, network segmentation, micro-segmentation, continuous monitoring, and device trust verification.'
    },
    {
      question: 'Which compliance frameworks do you support?',
      answer: 'We help achieve compliance with SOC 2, HIPAA, PCI-DSS, GDPR, ISO 27001, FedRAMP, NIST, CIS Benchmarks, and industry-specific regulations. We map controls to your specific compliance requirements and implement automated evidence collection.'
    },
    {
      question: 'What is the shared responsibility model?',
      answer: 'Cloud providers secure the infrastructure (physical security, hypervisors), while customers secure their data, identities, applications, and configurations. We help you understand and fulfill your responsibilities in this model across AWS, Azure, and GCP.'
    },
    {
      question: 'Do you provide ongoing security monitoring?',
      answer: 'Yes, we offer managed security services including 24/7 monitoring, threat detection, incident response, vulnerability management, and continuous compliance monitoring. We can operate as your virtual security team or augment your existing capabilities.'
    }
  ],

  relatedServices: [
    {
      name: 'Cloud Infrastructure',
      slug: 'cloud-infrastructure',
      description: 'Secure cloud architecture',
      icon: 'Cloud'
    },
    {
      name: 'DevOps Automation',
      slug: 'devops-automation',
      description: 'DevSecOps implementation',
      icon: 'Settings'
    },
    {
      name: 'AWS Services',
      slug: 'aws-services',
      description: 'AWS security services',
      icon: 'Cloud'
    },
    {
      name: 'Kubernetes Services',
      slug: 'kubernetes-services',
      description: 'Container security',
      icon: 'Box'
    }
  ],

  seo: {
    title: 'Cloud Security Services | Cloud Security Consulting & CSPM',
    description: 'Expert cloud security services. Zero-trust architecture, CSPM, compliance automation, and security monitoring for AWS, Azure, and GCP environments.',
    keywords: [
      'cloud security services',
      'cloud security consulting',
      'cspm',
      'cloud security posture management',
      'zero trust cloud',
      'aws security',
      'azure security',
      'cloud compliance',
      'cloud security monitoring',
      'devsecops'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Cloud Security Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Cloud Security Consulting'
      }
    }
  }
};
