// Backup & Recovery Service Data
import { ServiceData } from '@/components/services/sections';

export const backupRecoveryData: ServiceData = {
  name: 'Backup & Recovery',
  slug: 'backup-recovery',
  tagline: 'Protect your data, ensure business continuity',
  category: 'Maintenance & Support',
  description: 'Comprehensive backup and disaster recovery services to protect your critical data. We implement reliable backup solutions and ensure rapid recovery when you need it most.',

  hero: {
    headline: 'Backup & Recovery Services',
    subheadline: 'Your Data, Always Protected',
    description: 'Don\'t risk losing everything. Our backup and recovery services protect your websites, applications, and data with automated backups, secure storage, and rapid recovery capabilities.',
    keyFeatures: [
      'Automated backups',
      'Off-site storage',
      'Point-in-time recovery',
      'Disaster recovery',
      'Testing & verification',
      'Compliance support'
    ],
    badges: ['99.99% Recovery Rate', 'Encrypted Storage', 'Global Redundancy', '15min RTO Possible']
  },

  painPoints: [
    {
      icon: 'AlertTriangle',
      title: 'No Reliable Backups',
      description: 'Backups outdated, incomplete, or non-existent',
      stat: '30%',
      statLabel: 'Have no backups'
    },
    {
      icon: 'Database',
      title: 'Data Loss Risk',
      description: 'Risk of losing critical business data',
      stat: '60%',
      statLabel: 'Close after data loss'
    },
    {
      icon: 'Clock',
      title: 'Slow Recovery',
      description: 'Days to recover after an incident',
      stat: '24hrs+',
      statLabel: 'Avg recovery time'
    },
    {
      icon: 'CheckCircle',
      title: 'Untested Backups',
      description: 'Backups that have never been tested',
      stat: '50%',
      statLabel: 'Never test backups'
    }
  ],

  solutions: [
    {
      icon: 'Database',
      title: 'Automated Backups',
      description: 'Reliable, scheduled backups without manual effort',
      highlights: [
        'Scheduled automation',
        'Incremental backups',
        'Full site backups',
        'Database snapshots'
      ]
    },
    {
      icon: 'Cloud',
      title: 'Secure Storage',
      description: 'Encrypted, redundant off-site storage',
      highlights: [
        'AES-256 encryption',
        'Multiple locations',
        'Geographic redundancy',
        'Compliance support'
      ]
    },
    {
      icon: 'RefreshCw',
      title: 'Rapid Recovery',
      description: 'Fast restoration when you need it',
      highlights: [
        'Point-in-time restore',
        'Partial recovery',
        'Full site restore',
        '15-min RTO available'
      ]
    },
    {
      icon: 'CheckCircle',
      title: 'Verification',
      description: 'Regular testing ensures recovery works',
      highlights: [
        'Automated testing',
        'Recovery drills',
        'Integrity checks',
        'Compliance reports'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Search',
        title: 'Assessment',
        description: 'Understand your backup and recovery needs',
        duration: 'Week 1',
        deliverables: [
          'Data inventory',
          'RTO/RPO requirements',
          'Current state review',
          'Backup strategy'
        ]
      },
      {
        icon: 'Settings',
        title: 'Implementation',
        description: 'Deploy backup infrastructure',
        duration: 'Week 1-2',
        deliverables: [
          'Backup configuration',
          'Storage setup',
          'Automation deployment',
          'Monitoring setup'
        ]
      },
      {
        icon: 'CheckCircle',
        title: 'Testing',
        description: 'Verify backup and recovery works',
        duration: 'Week 2-3',
        deliverables: [
          'Recovery testing',
          'Performance validation',
          'Documentation',
          'Training'
        ]
      },
      {
        icon: 'Activity',
        title: 'Ongoing Management',
        description: 'Continuous backup monitoring and maintenance',
        duration: 'Ongoing',
        deliverables: [
          'Backup monitoring',
          'Regular testing',
          'Retention management',
          'Monthly reports'
        ]
      }
    ],
    totalDuration: '2-3 weeks to full protection'
  },

  benefits: [
    {
      icon: 'Shield',
      title: 'Data Protection',
      description: 'Your data always protected',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Data protected'
    },
    {
      icon: 'Clock',
      title: 'Fast Recovery',
      description: 'Rapid restoration capability',
      stat: '15',
      statSuffix: 'min',
      statLabel: 'Fastest RTO'
    },
    {
      icon: 'CheckCircle',
      title: 'Reliability',
      description: 'Tested and verified backups',
      stat: '99.99',
      statSuffix: '%',
      statLabel: 'Recovery success'
    },
    {
      icon: 'Lock',
      title: 'Compliance',
      description: 'Meet regulatory requirements',
      stat: '100',
      statSuffix: '%',
      statLabel: 'Compliance ready'
    }
  ],

  techStack: [
    {
      name: 'Backup Solutions',
      description: 'Backup platforms',
      technologies: [
        { name: 'Veeam', icon: '/icons/tech/veeam.svg', category: 'Enterprise', proficiency: 'expert' },
        { name: 'AWS Backup', icon: '/icons/tech/aws.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'Azure Backup', icon: '/icons/tech/azure.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'Datto', icon: '/icons/tech/datto.svg', category: 'BCDR', proficiency: 'expert' }
      ]
    },
    {
      name: 'Storage Platforms',
      description: 'Backup storage',
      technologies: [
        { name: 'AWS S3', icon: '/icons/tech/aws.svg', category: 'Storage', proficiency: 'expert' },
        { name: 'Azure Blob', icon: '/icons/tech/azure.svg', category: 'Storage', proficiency: 'expert' },
        { name: 'Google Cloud Storage', icon: '/icons/tech/gcp.svg', category: 'Storage', proficiency: 'advanced' },
        { name: 'Backblaze', icon: '/icons/tech/backblaze.svg', category: 'Storage', proficiency: 'expert' }
      ]
    },
    {
      name: 'Database Backup',
      description: 'Database protection',
      technologies: [
        { name: 'PostgreSQL', icon: '/icons/tech/postgresql.svg', category: 'Database', proficiency: 'expert' },
        { name: 'MySQL', icon: '/icons/tech/mysql.svg', category: 'Database', proficiency: 'expert' },
        { name: 'MongoDB', icon: '/icons/tech/mongodb.svg', category: 'Database', proficiency: 'expert' },
        { name: 'SQL Server', icon: '/icons/tech/sqlserver.svg', category: 'Database', proficiency: 'advanced' }
      ]
    },
    {
      name: 'Website Backup',
      description: 'Website/CMS backup',
      technologies: [
        { name: 'UpdraftPlus', icon: '/icons/tech/wordpress.svg', category: 'WordPress', proficiency: 'expert' },
        { name: 'BlogVault', icon: '/icons/tech/blogvault.svg', category: 'WordPress', proficiency: 'expert' },
        { name: 'Rewind', icon: '/icons/tech/rewind.svg', category: 'SaaS Backup', proficiency: 'advanced' },
        { name: 'BackupBuddy', icon: '/icons/tech/backupbuddy.svg', category: 'WordPress', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Basic',
        description: 'Essential backup protection',
        price: '$99',
        priceNote: 'per month',
        features: [
          { name: 'Daily backups', included: true },
          { name: '30-day retention', included: true },
          { name: 'Off-site storage', included: true },
          { name: 'Encrypted storage', included: true },
          { name: 'Manual recovery', included: true },
          { name: 'Point-in-time recovery', included: false },
          { name: 'Recovery testing', included: false },
          { name: 'Disaster recovery', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: false
      },
      {
        name: 'Professional',
        description: 'Complete backup solution',
        price: '$299',
        priceNote: 'per month',
        badge: 'Most Popular',
        features: [
          { name: 'Hourly backups', included: true },
          { name: '90-day retention', included: true },
          { name: 'Multi-region storage', included: true },
          { name: 'Point-in-time recovery', included: true },
          { name: 'One-click restore', included: true },
          { name: 'Quarterly recovery testing', included: true },
          { name: '1-hour RTO', included: true },
          { name: 'Disaster recovery plan', included: false }
        ],
        ctaText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        description: 'Full BCDR solution',
        price: 'Custom',
        priceNote: 'based on requirements',
        features: [
          { name: 'Real-time replication', included: true },
          { name: '1-year+ retention', included: true },
          { name: 'Global redundancy', included: true },
          { name: 'Instant recovery', included: true },
          { name: '15-min RTO', included: true },
          { name: 'Monthly testing', included: true },
          { name: 'Full DR plan', included: true },
          { name: 'Compliance support', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Pricing based on data volume. Free recovery during incidents. Compliance add-ons available.'
  },

  portfolio: [
    {
      title: 'SaaS Platform Backup',
      client: 'DataManage Pro',
      industry: 'SaaS',
      description: 'Enterprise backup solution for multi-tenant SaaS platform',
      challenge: 'Customer data protection requirements with fast recovery needs',
      solution: 'Implemented real-time backup with 15-minute RTO',
      results: [
        'Zero data loss incidents',
        'Recovery time reduced from 24hrs to 15min',
        'SOC 2 compliance achieved',
        'Customer confidence improved'
      ],
      metrics: [
        { label: 'Data Loss', value: '0' },
        { label: 'RTO', value: '15 min' },
        { label: 'Compliance', value: 'SOC 2' }
      ],
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop',
      tags: ['SaaS', 'Enterprise', 'SOC 2', 'Real-time']
    },
    {
      title: 'E-commerce Disaster Recovery',
      client: 'ShopElite Stores',
      industry: 'E-commerce',
      description: 'Disaster recovery solution for high-volume e-commerce',
      challenge: 'Needed guaranteed recovery during critical sales periods',
      solution: 'Full BCDR with geographic redundancy',
      results: [
        'Successfully recovered from ransomware attack',
        '2-hour full recovery achieved',
        'No orders or customer data lost',
        'Business continuity maintained'
      ],
      metrics: [
        { label: 'Recovery Time', value: '2 hours' },
        { label: 'Data Loss', value: '0' },
        { label: 'Orders Lost', value: '0' }
      ],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Disaster Recovery', 'Ransomware', 'BCDR']
    },
    {
      title: 'Healthcare Data Protection',
      client: 'MedRecord Systems',
      industry: 'Healthcare',
      description: 'HIPAA-compliant backup for electronic health records',
      challenge: 'Protecting sensitive patient data with strict compliance requirements',
      solution: 'Encrypted, redundant backup with point-in-time recovery',
      results: [
        'HIPAA compliance fully maintained',
        'Recovery testing successful every quarter',
        'Zero data breaches or losses',
        'Audit passed with flying colors'
      ],
      metrics: [
        { label: 'Compliance', value: 'HIPAA' },
        { label: 'Data Breaches', value: '0' },
        { label: 'Audit Result', value: 'Passed' }
      ],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'HIPAA', 'Compliance', 'Data Protection']
    },
    {
      title: 'Financial Services Backup',
      client: 'TrustBank Digital',
      industry: 'Banking',
      description: 'Real-time backup for digital banking platform',
      challenge: 'Zero tolerance for data loss in financial transactions',
      solution: 'Continuous data protection with instant failover capability',
      results: [
        'RPO reduced to near-zero',
        'Failover tested and proven in 5 minutes',
        'Regulatory requirements exceeded',
        'Customer data 100% protected'
      ],
      metrics: [
        { label: 'RPO', value: 'Near-zero' },
        { label: 'Failover', value: '5 min' },
        { label: 'Data Protected', value: '100%' }
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      tags: ['Banking', 'Financial', 'Real-time', 'Compliance']
    }
  ],

  testimonials: [
    {
      quote: 'When we got hit by ransomware, we were back online in 2 hours with no data loss. The backup investment paid off a hundred times over.',
      author: 'Steven Wright',
      role: 'CTO',
      company: 'ShopElite Stores',
      rating: 5,
      location: 'Dallas, TX'
    },
    {
      quote: 'Our SOC 2 auditors were impressed with our backup solution. It gave us and our customers confidence in our data protection.',
      author: 'Angela Martinez',
      role: 'VP Engineering',
      company: 'DataManage Pro',
      rating: 5,
      location: 'San Jose, CA'
    }
  ],

  faqs: [
    {
      question: 'What\'s the difference between RTO and RPO?',
      answer: 'RTO (Recovery Time Objective) is how quickly you can recover - how long until systems are back online. RPO (Recovery Point Objective) is how much data you can afford to lose - how old the backup can be. We help you determine appropriate RTO/RPO for your business and implement solutions to meet them.'
    },
    {
      question: 'Are backups encrypted?',
      answer: 'Yes, all backups are encrypted both in transit (TLS 1.3) and at rest (AES-256). Encryption keys are managed securely and separately from backup data. This protects against unauthorized access even if storage is compromised.'
    },
    {
      question: 'How often are backups tested?',
      answer: 'Testing frequency depends on your plan. Professional plans include quarterly recovery testing. Enterprise plans include monthly testing. We recommend testing after any significant system changes regardless of schedule. You receive detailed test reports.'
    },
    {
      question: 'Can you back up cloud services like Office 365?',
      answer: 'Yes, we back up cloud services including Microsoft 365, Google Workspace, Salesforce, and other SaaS applications. Native cloud provider backup often isn\'t sufficient for compliance or rapid recovery needs - we provide comprehensive protection.'
    },
    {
      question: 'What happens during a recovery?',
      answer: 'During recovery, we restore from the most recent clean backup to your production environment or a standby environment. We verify data integrity, test functionality, and coordinate with you throughout. For planned recoveries, we schedule during low-traffic periods.'
    }
  ],

  relatedServices: [
    {
      name: 'Emergency Support',
      slug: 'emergency-support',
      description: 'Crisis response',
      icon: 'AlertTriangle'
    },
    {
      name: 'Security Updates',
      slug: 'security-updates',
      description: 'Security management',
      icon: 'Shield'
    },
    {
      name: 'Application Maintenance',
      slug: 'application-maintenance',
      description: 'App maintenance',
      icon: 'Settings'
    },
    {
      name: 'Cloud Infrastructure',
      slug: 'cloud-infrastructure',
      description: 'Cloud services',
      icon: 'Cloud'
    }
  ],

  seo: {
    title: 'Backup & Recovery Services | Disaster Recovery | Data Protection',
    description: 'Professional backup and disaster recovery services. Automated backups, encrypted storage, rapid recovery. 15-minute RTO available. From $99/month.',
    keywords: [
      'backup services',
      'disaster recovery',
      'data backup',
      'backup and recovery',
      'business continuity',
      'cloud backup',
      'website backup',
      'database backup',
      'disaster recovery services',
      'data protection services'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Backup & Recovery Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'Disaster Recovery Services'
      }
    }
  }
};
