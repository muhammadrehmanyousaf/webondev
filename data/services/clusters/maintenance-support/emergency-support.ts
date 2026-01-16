// Emergency Support Service Data
import { ServiceData } from '@/components/services/sections';

export const emergencySupportData: ServiceData = {
  name: 'Emergency Support',
  slug: 'emergency-support',
  tagline: 'Rapid response when disaster strikes',
  category: 'Maintenance & Support',
  description: 'Critical emergency support services for when your website or application goes down. Our emergency response team provides immediate assistance to get you back online fast.',

  hero: {
    headline: 'Emergency Support Services',
    subheadline: 'When Every Minute Counts',
    description: 'Site down? Application crashed? Data breach? Our emergency response team is available 24/7 to handle critical issues. We respond immediately and work non-stop until your systems are restored.',
    keyFeatures: [
      '24/7/365 availability',
      '15-minute response',
      'Immediate escalation',
      'All platforms supported',
      'Crisis management',
      'Post-incident review'
    ],
    badges: ['24/7 Available', '15min Response', 'Critical Priority', 'War Room Ready']
  },

  painPoints: [
    {
      icon: 'AlertTriangle',
      title: 'Site Down',
      description: 'Website or application completely unavailable',
      stat: '$5,600',
      statLabel: 'Cost per hour downtime'
    },
    {
      icon: 'Shield',
      title: 'Security Breach',
      description: 'Hacked, malware, or data breach',
      stat: '$4.45M',
      statLabel: 'Avg breach cost'
    },
    {
      icon: 'Database',
      title: 'Data Loss',
      description: 'Critical data corrupted or lost',
      stat: '60%',
      statLabel: 'Close after data loss'
    },
    {
      icon: 'Clock',
      title: 'No Response',
      description: 'Current support too slow during emergencies',
      stat: '4hrs',
      statLabel: 'Avg emergency response'
    }
  ],

  solutions: [
    {
      icon: 'Zap',
      title: 'Immediate Response',
      description: 'Expert on your issue within 15 minutes',
      highlights: [
        '15-minute response SLA',
        '24/7/365 availability',
        'Direct engineer access',
        'Immediate escalation'
      ]
    },
    {
      icon: 'Activity',
      title: 'Crisis Management',
      description: 'Structured approach to emergency resolution',
      highlights: [
        'War room activation',
        'Continuous updates',
        'Parallel workstreams',
        'Executive communication'
      ]
    },
    {
      icon: 'Shield',
      title: 'Security Response',
      description: 'Rapid response to security incidents',
      highlights: [
        'Breach containment',
        'Malware removal',
        'Forensic analysis',
        'Recovery support'
      ]
    },
    {
      icon: 'RefreshCw',
      title: 'Full Recovery',
      description: 'Complete restoration of services',
      highlights: [
        'Service restoration',
        'Data recovery',
        'Root cause analysis',
        'Prevention measures'
      ]
    }
  ],

  process: {
    steps: [
      {
        icon: 'Phone',
        title: 'Emergency Contact',
        description: 'Reach our emergency line immediately',
        duration: '0-5 min',
        deliverables: [
          'Emergency logged',
          'Priority assigned',
          'Engineer paged',
          'War room activated'
        ]
      },
      {
        icon: 'Zap',
        title: 'Rapid Assessment',
        description: 'Quick diagnosis of the situation',
        duration: '5-30 min',
        deliverables: [
          'Impact assessment',
          'Root cause theory',
          'Recovery plan',
          'Timeline estimate'
        ]
      },
      {
        icon: 'Wrench',
        title: 'Emergency Resolution',
        description: 'All-hands effort to restore service',
        duration: 'Until resolved',
        deliverables: [
          'Service restoration',
          'Continuous updates',
          'Documentation',
          'Workarounds if needed'
        ]
      },
      {
        icon: 'FileText',
        title: 'Post-Incident',
        description: 'Analysis and prevention',
        duration: '24-72 hrs post',
        deliverables: [
          'Incident report',
          'Root cause analysis',
          'Prevention plan',
          'Lessons learned'
        ]
      }
    ],
    totalDuration: 'Response in 15 minutes, resolution ASAP'
  },

  benefits: [
    {
      icon: 'Zap',
      title: 'Fast Response',
      description: 'Engineer engaged immediately',
      stat: '15',
      statSuffix: 'min',
      statLabel: 'Response SLA'
    },
    {
      icon: 'Clock',
      title: 'Always Available',
      description: 'Round-the-clock coverage',
      stat: '24/7',
      statSuffix: '',
      statLabel: 'Availability'
    },
    {
      icon: 'TrendingUp',
      title: 'Quick Recovery',
      description: 'Fast service restoration',
      stat: '4',
      statSuffix: 'hrs',
      statLabel: 'Avg restoration'
    },
    {
      icon: 'Shield',
      title: 'Expert Team',
      description: 'Senior crisis engineers',
      stat: '10+',
      statSuffix: 'yrs',
      statLabel: 'Avg experience'
    }
  ],

  techStack: [
    {
      name: 'Web Platforms',
      description: 'Web emergency support',
      technologies: [
        { name: 'WordPress', icon: '/icons/tech/wordpress.svg', category: 'CMS', proficiency: 'expert' },
        { name: 'React', icon: '/icons/tech/react.svg', category: 'Frontend', proficiency: 'expert' },
        { name: 'Node.js', icon: '/icons/tech/nodejs.svg', category: 'Backend', proficiency: 'expert' },
        { name: 'PHP', icon: '/icons/tech/php.svg', category: 'Backend', proficiency: 'expert' }
      ]
    },
    {
      name: 'Cloud Infrastructure',
      description: 'Cloud emergency support',
      technologies: [
        { name: 'AWS', icon: '/icons/tech/aws.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'Azure', icon: '/icons/tech/azure.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'GCP', icon: '/icons/tech/gcp.svg', category: 'Cloud', proficiency: 'expert' },
        { name: 'Kubernetes', icon: '/icons/tech/kubernetes.svg', category: 'DevOps', proficiency: 'expert' }
      ]
    },
    {
      name: 'Security Tools',
      description: 'Security incident response',
      technologies: [
        { name: 'Sucuri', icon: '/icons/tech/sucuri.svg', category: 'Security', proficiency: 'expert' },
        { name: 'Cloudflare', icon: '/icons/tech/cloudflare.svg', category: 'Security', proficiency: 'expert' },
        { name: 'Wordfence', icon: '/icons/tech/wordfence.svg', category: 'WordPress', proficiency: 'expert' },
        { name: 'Malwarebytes', icon: '/icons/tech/malwarebytes.svg', category: 'Security', proficiency: 'expert' }
      ]
    },
    {
      name: 'Databases',
      description: 'Database recovery',
      technologies: [
        { name: 'MySQL', icon: '/icons/tech/mysql.svg', category: 'Database', proficiency: 'expert' },
        { name: 'PostgreSQL', icon: '/icons/tech/postgresql.svg', category: 'Database', proficiency: 'expert' },
        { name: 'MongoDB', icon: '/icons/tech/mongodb.svg', category: 'Database', proficiency: 'expert' },
        { name: 'Redis', icon: '/icons/tech/redis.svg', category: 'Cache', proficiency: 'expert' }
      ]
    }
  ],

  pricing: {
    plans: [
      {
        name: 'Emergency Call',
        description: 'Single incident response',
        price: '$500',
        priceNote: 'first hour',
        features: [
          { name: '15-minute response', included: true },
          { name: 'Expert engineer', included: true },
          { name: 'First hour included', included: true },
          { name: 'Continuous until resolved', included: true },
          { name: '$200/additional hour', included: true },
          { name: 'Post-incident report', included: true },
          { name: 'SLA guarantee', included: false },
          { name: 'Retainer discount', included: false }
        ],
        ctaText: 'Call Now',
        highlighted: false
      },
      {
        name: 'Emergency Retainer',
        description: 'Priority emergency access',
        price: '$999',
        priceNote: 'per month',
        badge: 'Recommended',
        features: [
          { name: '10-minute response SLA', included: true },
          { name: 'Priority escalation', included: true },
          { name: '2 emergency calls included', included: true },
          { name: 'Discounted hourly ($150/hr)', included: true },
          { name: 'Dedicated emergency line', included: true },
          { name: 'Proactive monitoring', included: true },
          { name: 'Post-incident reports', included: true },
          { name: 'Quarterly review', included: false }
        ],
        ctaText: 'Get Retainer',
        highlighted: true
      },
      {
        name: 'Enterprise Emergency',
        description: 'Maximum coverage',
        price: 'Custom',
        priceNote: 'based on requirements',
        features: [
          { name: '5-minute response SLA', included: true },
          { name: 'Dedicated response team', included: true },
          { name: 'Unlimited emergencies', included: true },
          { name: 'Fixed hourly rate', included: true },
          { name: 'War room capability', included: true },
          { name: '24/7 proactive monitoring', included: true },
          { name: 'Executive communication', included: true },
          { name: 'Quarterly planning', included: true }
        ],
        ctaText: 'Contact Us',
        highlighted: false
      }
    ],
    customNote: 'Emergency response available immediately. Billing after resolution. No prepayment required for first call.'
  },

  portfolio: [
    {
      title: 'E-commerce Black Friday Recovery',
      client: 'Major Online Retailer',
      industry: 'E-commerce',
      description: 'Site went down during peak Black Friday traffic',
      challenge: 'Complete site outage during most critical sales day of year',
      solution: 'Immediate response, traffic rerouting, emergency scaling',
      results: [
        'Site restored in 45 minutes',
        'Revenue loss minimized',
        'Handled 3x expected traffic',
        'Zero data loss'
      ],
      metrics: [
        { label: 'Recovery Time', value: '45 min' },
        { label: 'Revenue Saved', value: '$500K+' },
        { label: 'Data Loss', value: '0' }
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'High Traffic', 'Critical Recovery', 'Black Friday']
    },
    {
      title: 'Ransomware Recovery',
      client: 'Healthcare Provider',
      industry: 'Healthcare',
      description: 'Ransomware attack encrypted critical systems',
      challenge: 'Ransomware encrypted patient portal and internal systems',
      solution: 'Immediate isolation, clean recovery, security hardening',
      results: [
        'Systems restored from clean backups in 6 hours',
        'No ransom paid',
        'Zero patient data exposed',
        'Security posture dramatically improved'
      ],
      metrics: [
        { label: 'Recovery Time', value: '6 hours' },
        { label: 'Data Exposed', value: '0' },
        { label: 'Ransom Paid', value: '$0' }
      ],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      tags: ['Healthcare', 'Ransomware', 'Security', 'Recovery']
    },
    {
      title: 'Database Corruption Emergency',
      client: 'FinanceCore Systems',
      industry: 'Financial Services',
      description: 'Critical database corruption during month-end processing',
      challenge: 'Corrupted transactions threatening financial reporting deadline',
      solution: 'Emergency database recovery with transaction log analysis',
      results: [
        'Database fully recovered in 3 hours',
        'All transactions verified and intact',
        'Month-end deadline met',
        'Implemented automated corruption detection'
      ],
      metrics: [
        { label: 'Recovery Time', value: '3 hours' },
        { label: 'Data Integrity', value: '100%' },
        { label: 'Deadline', value: 'Met' }
      ],
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop',
      tags: ['Financial', 'Database', 'Critical', 'Recovery']
    },
    {
      title: 'DDoS Attack Mitigation',
      client: 'MediaStream Network',
      industry: 'Media & Entertainment',
      description: 'Massive DDoS attack during live streaming event',
      challenge: 'Coordinated attack threatening major live-streamed concert',
      solution: 'Rapid traffic analysis, CDN optimization, and attack mitigation',
      results: [
        'Attack mitigated within 20 minutes',
        'Stream continued uninterrupted for 500K viewers',
        'Zero revenue impact',
        'Long-term DDoS protection implemented'
      ],
      metrics: [
        { label: 'Mitigation Time', value: '20 min' },
        { label: 'Viewers Protected', value: '500K' },
        { label: 'Downtime', value: '0' }
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      tags: ['Media', 'DDoS', 'Security', 'Live Event']
    }
  ],

  testimonials: [
    {
      quote: 'Our site crashed on Black Friday. They had us back up in 45 minutes. They literally saved our entire holiday season.',
      author: 'Mark Stevens',
      role: 'CTO',
      company: 'Major Online Retailer',
      rating: 5,
      location: 'New York, NY'
    },
    {
      quote: 'Ransomware hit us and we thought we were done. They recovered everything without paying the ransom. Heroes.',
      author: 'Dr. Linda Thompson',
      role: 'CIO',
      company: 'Healthcare Provider',
      rating: 5,
      location: 'Atlanta, GA'
    }
  ],

  faqs: [
    {
      question: 'What qualifies as an emergency?',
      answer: 'Emergencies include: complete site/app outage, security breaches, data loss or corruption, payment processing failures, and any issue causing significant business impact. If you\'re unsure, call us - we\'ll assess quickly and advise.'
    },
    {
      question: 'How quickly can you respond?',
      answer: 'We respond within 15 minutes for emergency calls, 10 minutes for retainer clients, and 5 minutes for enterprise plans. Response means an engineer is actively working on your issue, not just acknowledging the ticket.'
    },
    {
      question: 'What if you can\'t fix it?',
      answer: 'We\'ve resolved every emergency we\'ve taken on. If we determine we\'re not the right fit for your specific issue, we\'ll refer you immediately and won\'t charge. Our success rate on accepted emergencies is 100%.'
    },
    {
      question: 'Do you require a contract for emergency calls?',
      answer: 'No contract required for emergency calls. You can call our emergency line, we\'ll help you, and bill after resolution. No prepayment needed. For retainer plans, there\'s a monthly commitment but you can cancel anytime.'
    },
    {
      question: 'What information do you need when I call?',
      answer: 'Be ready with: what happened, when it started, what you\'ve tried, and admin access credentials. But don\'t delay calling to gather info - call immediately and we\'ll work through details together while investigating.'
    }
  ],

  relatedServices: [
    {
      name: 'Technical Support',
      slug: 'technical-support',
      description: 'Ongoing support',
      icon: 'HeadPhones'
    },
    {
      name: 'Security Updates',
      slug: 'security-updates',
      description: 'Security management',
      icon: 'Shield'
    },
    {
      name: 'Backup & Recovery',
      slug: 'backup-recovery',
      description: 'Data protection',
      icon: 'Database'
    },
    {
      name: 'Application Maintenance',
      slug: 'application-maintenance',
      description: 'Ongoing maintenance',
      icon: 'Settings'
    }
  ],

  seo: {
    title: 'Emergency Support Services | 24/7 Website Emergency Response',
    description: '24/7 emergency support for website and application crises. 15-minute response, expert engineers, complete recovery. Site down? Call us now.',
    keywords: [
      'emergency support',
      'website emergency',
      'site down help',
      '24/7 support',
      'emergency website repair',
      'hacked website help',
      'emergency developer',
      'critical support',
      'website recovery',
      'disaster recovery'
    ],
    schema: {
      '@type': 'Service',
      serviceType: 'Emergency Support Services',
      provider: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: '24/7 Emergency Response'
      }
    }
  }
};
