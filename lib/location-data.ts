export interface LocationService {
  slug: string;
  title: string;
  description: string;
  features: string[];
  pricing: {
    basic: string;
    standard: string;
    premium: string;
  };
  localBenefits: string[];
}

export interface City {
  slug: string;
  name: string;
  description: string;
  population: string;
  timezone: string;
  localBusinessHours: string;
  services: LocationService[];
  testimonials: {
    name: string;
    company: string;
    content: string;
    rating: number;
  }[];
  stats: {
    projectsCompleted: number;
    clientsServed: number;
    satisfactionRate: number;
    responseTime: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface State {
  slug: string;
  name: string;
  description: string;
  cities: City[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface Country {
  slug: string;
  name: string;
  description: string;
  flag: string;
  currency: string;
  timezone: string;
  states: State[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// Comprehensive location data structure
export const locationData: Country[] = [
  {
    slug: 'pakistan',
    name: 'Pakistan',
    description: 'Leading software development services across Pakistan with local expertise and global standards.',
    flag: '🇵🇰',
    currency: 'PKR',
    timezone: 'PKT (UTC+5)',
    seo: {
      title: 'Software Development Services in Pakistan - Web On Dev',
      description: 'Professional software development, web development, and digital solutions across Pakistan. Local expertise with global standards.',
      keywords: ['software development pakistan', 'web development pakistan', 'IT services pakistan', 'digital solutions pakistan']
    },
    states: [
      {
        slug: 'punjab',
        name: 'Punjab',
        description: 'Comprehensive software solutions across Punjab with local market expertise.',
        seo: {
          title: 'Software Development Services in Punjab - Web On Dev',
          description: 'Professional software development and IT services across Punjab. Local expertise with proven results.',
          keywords: ['software development punjab', 'IT services punjab', 'web development punjab']
        },
        cities: [
          {
            slug: 'lahore',
            name: 'Lahore',
            description: 'Premier software development services in Lahore, the heart of Pakistan\'s technology sector.',
            population: '11.1M+',
            timezone: 'PKT (UTC+5)',
            localBusinessHours: '9:00 AM - 6:00 PM (PKT)',
            stats: {
              projectsCompleted: 150,
              clientsServed: 89,
              satisfactionRate: 98,
              responseTime: '< 2 hours'
            },
            seo: {
              title: 'Software Development Services in Lahore - Web On Dev',
              description: 'Professional software development, web development, and digital solutions in Lahore. Local expertise with global standards.',
              keywords: ['software development lahore', 'web development lahore', 'IT services lahore', 'digital solutions lahore']
            },
            services: [
              {
                slug: 'web-development',
                title: 'Web Development',
                description: 'Custom web development solutions tailored for Lahore businesses with local market expertise.',
                features: [
                  'Responsive Design',
                  'SEO Optimization',
                  'Local Market Integration',
                  '24/7 Support',
                  'Fast Loading Times',
                  'Mobile-First Approach'
                ],
                pricing: {
                  basic: 'PKR 50,000',
                  standard: 'PKR 150,000',
                  premium: 'PKR 500,000+'
                },
                localBenefits: [
                  'Local market understanding',
                  'Faster communication',
                  'Cultural alignment',
                  'Local hosting options'
                ]
              },
              {
                slug: 'mobile-app-development',
                title: 'Mobile App Development',
                description: 'Native and cross-platform mobile applications designed for Lahore\'s growing digital market.',
                features: [
                  'iOS & Android Development',
                  'Cross-Platform Solutions',
                  'App Store Optimization',
                  'Push Notifications',
                  'Offline Functionality',
                  'Local Payment Integration'
                ],
                pricing: {
                  basic: 'PKR 100,000',
                  standard: 'PKR 300,000',
                  premium: 'PKR 800,000+'
                },
                localBenefits: [
                  'Local payment gateway integration',
                  'Regional app store optimization',
                  'Local language support',
                  'Cultural UI/UX design'
                ]
              }
            ],
            testimonials: [
              {
                name: 'Ahmed Khan',
                company: 'TechStart Lahore',
                content: 'Web On Dev delivered an exceptional e-commerce platform that perfectly suited our local market needs. Their understanding of Lahore\'s business landscape was invaluable.',
                rating: 5
              },
              {
                name: 'Fatima Ali',
                company: 'Digital Solutions PK',
                content: 'The mobile app they developed for us exceeded all expectations. Their local expertise and attention to detail made all the difference.',
                rating: 5
              }
            ]
          },
          {
            slug: 'islamabad',
            name: 'Islamabad',
            description: 'Advanced software solutions in Pakistan\'s capital, serving government and private sector needs.',
            population: '1.1M+',
            timezone: 'PKT (UTC+5)',
            localBusinessHours: '9:00 AM - 6:00 PM (PKT)',
            stats: {
              projectsCompleted: 85,
              clientsServed: 52,
              satisfactionRate: 97,
              responseTime: '< 3 hours'
            },
            seo: {
              title: 'Software Development Services in Islamabad - Web On Dev',
              description: 'Professional software development and IT services in Islamabad. Government and private sector solutions.',
              keywords: ['software development islamabad', 'IT services islamabad', 'government software islamabad']
            },
            services: [
              {
                slug: 'web-development',
                title: 'Web Development',
                description: 'Government-grade web solutions and private sector applications in Islamabad.',
                features: [
                  'Government Compliance',
                  'Security Standards',
                  'Scalable Architecture',
                  'Multi-User Systems',
                  'Data Protection',
                  'Audit Trails'
                ],
                pricing: {
                  basic: 'PKR 75,000',
                  standard: 'PKR 200,000',
                  premium: 'PKR 600,000+'
                },
                localBenefits: [
                  'Government sector experience',
                  'Security compliance expertise',
                  'Local regulatory knowledge',
                  'Bilingual support'
                ]
              }
            ],
            testimonials: [
              {
                name: 'Muhammad Hassan',
                company: 'GovTech Solutions',
                content: 'Their expertise in government software requirements and security standards was exceptional. Highly recommended for public sector projects.',
                rating: 5
              }
            ]
          },
          {
            slug: 'faisalabad',
            name: 'Faisalabad',
            description: 'Industrial software solutions for Pakistan\'s textile and manufacturing hub.',
            population: '3.2M+',
            timezone: 'PKT (UTC+5)',
            localBusinessHours: '9:00 AM - 6:00 PM (PKT)',
            stats: {
              projectsCompleted: 65,
              clientsServed: 38,
              satisfactionRate: 96,
              responseTime: '< 4 hours'
            },
            seo: {
              title: 'Software Development Services in Faisalabad - Web On Dev',
              description: 'Professional software development and IT services in Faisalabad. Industrial and manufacturing solutions.',
              keywords: ['software development faisalabad', 'IT services faisalabad', 'industrial software faisalabad']
            },
            services: [
              {
                slug: 'web-development',
                title: 'Web Development',
                description: 'Industrial-grade web solutions for Faisalabad\'s manufacturing sector.',
                features: [
                  'Industrial Integration',
                  'Manufacturing Solutions',
                  'Supply Chain Management',
                  'Inventory Systems',
                  'Quality Control',
                  'Reporting Tools'
                ],
                pricing: {
                  basic: 'PKR 60,000',
                  standard: 'PKR 180,000',
                  premium: 'PKR 500,000+'
                },
                localBenefits: [
                  'Industrial sector expertise',
                  'Manufacturing process knowledge',
                  'Local supply chain integration',
                  'Regional market understanding'
                ]
              }
            ],
            testimonials: [
              {
                name: 'Ali Raza',
                company: 'Textile Solutions',
                content: 'Their manufacturing software transformed our production efficiency. The local understanding of our industry was crucial.',
                rating: 5
              }
            ]
          }
        ]
      },
      {
        slug: 'sindh',
        name: 'Sindh',
        description: 'Innovative software solutions across Sindh with focus on Karachi\'s dynamic business environment.',
        seo: {
          title: 'Software Development Services in Sindh - Web On Dev',
          description: 'Professional software development and IT services across Sindh. Karachi-focused solutions with regional expertise.',
          keywords: ['software development sindh', 'IT services sindh', 'web development sindh']
        },
        cities: [
          {
            slug: 'karachi',
            name: 'Karachi',
            description: 'Comprehensive software solutions in Pakistan\'s economic hub, serving diverse business needs.',
            population: '16.1M+',
            timezone: 'PKT (UTC+5)',
            localBusinessHours: '9:00 AM - 6:00 PM (PKT)',
            stats: {
              projectsCompleted: 200,
              clientsServed: 120,
              satisfactionRate: 99,
              responseTime: '< 1 hour'
            },
            seo: {
              title: 'Software Development Services in Karachi - Web On Dev',
              description: 'Professional software development, web development, and digital solutions in Karachi. Economic hub expertise.',
              keywords: ['software development karachi', 'web development karachi', 'IT services karachi', 'digital solutions karachi']
            },
            services: [
              {
                slug: 'web-development',
                title: 'Web Development',
                description: 'Enterprise-grade web solutions for Karachi\'s diverse business landscape.',
                features: [
                  'Enterprise Solutions',
                  'E-commerce Platforms',
                  'Financial Integration',
                  'Multi-Currency Support',
                  'High Availability',
                  'Disaster Recovery'
                ],
                pricing: {
                  basic: 'PKR 60,000',
                  standard: 'PKR 180,000',
                  premium: 'PKR 600,000+'
                },
                localBenefits: [
                  'Financial sector expertise',
                  'Multi-cultural team',
                  '24/7 availability',
                  'Local business networks'
                ]
              }
            ],
            testimonials: [
              {
                name: 'Sara Ahmed',
                company: 'Karachi Commerce',
                content: 'Their e-commerce solution transformed our business. The local market integration and payment gateway setup was flawless.',
                rating: 5
              }
            ]
          },
          {
            slug: 'hyderabad',
            name: 'Hyderabad',
            description: 'Educational and research-focused software solutions in Sindh\'s cultural capital.',
            population: '1.7M+',
            timezone: 'PKT (UTC+5)',
            localBusinessHours: '9:00 AM - 6:00 PM (PKT)',
            stats: {
              projectsCompleted: 45,
              clientsServed: 28,
              satisfactionRate: 95,
              responseTime: '< 3 hours'
            },
            seo: {
              title: 'Software Development Services in Hyderabad - Web On Dev',
              description: 'Professional software development and IT services in Hyderabad. Educational and research solutions.',
              keywords: ['software development hyderabad', 'IT services hyderabad', 'educational software hyderabad']
            },
            services: [
              {
                slug: 'web-development',
                title: 'Web Development',
                description: 'Educational and research-focused web solutions for Hyderabad.',
                features: [
                  'Learning Management Systems',
                  'Research Platforms',
                  'Student Portals',
                  'Academic Integration',
                  'Content Management',
                  'Analytics Dashboard'
                ],
                pricing: {
                  basic: 'PKR 50,000',
                  standard: 'PKR 150,000',
                  premium: 'PKR 400,000+'
                },
                localBenefits: [
                  'Educational sector expertise',
                  'Research institution knowledge',
                  'Academic compliance understanding',
                  'Local educational networks'
                ]
              }
            ],
            testimonials: [
              {
                name: 'Dr. Zainab Khan',
                company: 'University of Sindh',
                content: 'Their educational software platform enhanced our research capabilities significantly. Highly recommended for academic institutions.',
                rating: 5
              }
            ]
          }
        ]
      },
      {
        slug: 'khyber-pakhtunkhwa',
        name: 'Khyber Pakhtunkhwa',
        description: 'Technology solutions for Pakistan\'s northwestern frontier with focus on security and tourism.',
        seo: {
          title: 'Software Development Services in Khyber Pakhtunkhwa - Web On Dev',
          description: 'Professional software development and IT services across Khyber Pakhtunkhwa. Security and tourism solutions.',
          keywords: ['software development kpk', 'IT services kpk', 'web development kpk']
        },
        cities: [
          {
            slug: 'peshawar',
            name: 'Peshawar',
            description: 'Security-focused software solutions in the historic city of Peshawar.',
            population: '2.3M+',
            timezone: 'PKT (UTC+5)',
            localBusinessHours: '9:00 AM - 6:00 PM (PKT)',
            stats: {
              projectsCompleted: 35,
              clientsServed: 22,
              satisfactionRate: 94,
              responseTime: '< 4 hours'
            },
            seo: {
              title: 'Software Development Services in Peshawar - Web On Dev',
              description: 'Professional software development and IT services in Peshawar. Security and defense solutions.',
              keywords: ['software development peshawar', 'IT services peshawar', 'security software peshawar']
            },
            services: [
              {
                slug: 'web-development',
                title: 'Web Development',
                description: 'Security-focused web solutions for Peshawar\'s unique requirements.',
                features: [
                  'Security Systems',
                  'Defense Applications',
                  'Surveillance Integration',
                  'Access Control',
                  'Encryption Services',
                  'Compliance Tools'
                ],
                pricing: {
                  basic: 'PKR 70,000',
                  standard: 'PKR 200,000',
                  premium: 'PKR 600,000+'
                },
                localBenefits: [
                  'Security sector expertise',
                  'Defense industry knowledge',
                  'Local security protocols',
                  'Government compliance'
                ]
              }
            ],
            testimonials: [
              {
                name: 'Colonel Ahmed',
                company: 'Defense Solutions',
                content: 'Their security software exceeded our expectations. The local understanding of our requirements was exceptional.',
                rating: 5
              }
            ]
          }
        ]
      },
      {
        slug: 'gilgit-baltistan',
        name: 'Gilgit-Baltistan',
        description: 'Technology solutions for Pakistan\'s northern region with focus on tourism and development.',
        seo: {
          title: 'Software Development Services in Gilgit-Baltistan - Web On Dev',
          description: 'Professional software development and IT services across Gilgit-Baltistan. Tourism and development solutions.',
          keywords: ['software development gilgit-baltistan', 'IT services gilgit-baltistan', 'web development gilgit-baltistan']
        },
        cities: [
          {
            slug: 'gilgit',
            name: 'Gilgit',
            description: 'Innovative software solutions in the capital of Gilgit-Baltistan.',
            population: '200K+',
            timezone: 'PKT (UTC+5)',
            localBusinessHours: '9:00 AM - 6:00 PM (PKT)',
            stats: {
              projectsCompleted: 45,
              clientsServed: 28,
              satisfactionRate: 96,
              responseTime: '< 3 hours'
            },
            seo: {
              title: 'Software Development Services in Gilgit - Web On Dev',
              description: 'Professional software development and IT services in Gilgit. Tourism and development solutions.',
              keywords: ['software development gilgit', 'IT services gilgit', 'tourism software gilgit']
            },
            services: [
              {
                slug: 'progressive-web-apps',
                title: 'Progressive Web Apps',
                description: 'Modern PWA solutions for Gilgit\'s growing digital market.',
                features: [
                  'Offline Functionality',
                  'Push Notifications',
                  'App-like Experience',
                  'Cross-platform Compatibility',
                  'Fast Loading',
                  'Mobile-First Design'
                ],
                pricing: {
                  basic: 'PKR 80,000',
                  standard: 'PKR 200,000',
                  premium: 'PKR 500,000+'
                },
                localBenefits: [
                  'Tourism industry focus',
                  'Local market understanding',
                  'Regional connectivity',
                  'Cultural integration'
                ]
              },
              {
                slug: 'shopify-development',
                title: 'Shopify Development',
                description: 'E-commerce solutions for Gilgit\'s business community.',
                features: [
                  'Custom Shopify Themes',
                  'Payment Gateway Integration',
                  'Inventory Management',
                  'Order Processing',
                  'Mobile Commerce',
                  'Analytics & Reporting'
                ],
                pricing: {
                  basic: 'PKR 60,000',
                  standard: 'PKR 150,000',
                  premium: 'PKR 400,000+'
                },
                localBenefits: [
                  'Local payment methods',
                  'Regional shipping options',
                  'Cultural product integration',
                  'Tourism-focused features'
                ]
              },
              {
                slug: 'e-commerce-development',
                title: 'E-commerce Development',
                description: 'Complete e-commerce solutions for Gilgit businesses.',
                features: [
                  'Shopping Cart Systems',
                  'Payment Processing',
                  'Inventory Management',
                  'Order Tracking',
                  'Customer Management',
                  'Analytics Dashboard'
                ],
                pricing: {
                  basic: 'PKR 70,000',
                  standard: 'PKR 180,000',
                  premium: 'PKR 450,000+'
                },
                localBenefits: [
                  'Local business integration',
                  'Regional market focus',
                  'Tourism product support',
                  'Cultural customization'
                ]
              },
              {
                slug: 'social-media-marketing',
                title: 'Social Media Marketing',
                description: 'Digital marketing solutions for Gilgit\'s tourism and business sectors.',
                features: [
                  'Social Media Strategy',
                  'Content Creation',
                  'Paid Advertising',
                  'Community Management',
                  'Analytics & Reporting',
                  'Influencer Marketing'
                ],
                pricing: {
                  basic: 'PKR 30,000',
                  standard: 'PKR 80,000',
                  premium: 'PKR 200,000+'
                },
                localBenefits: [
                  'Tourism promotion',
                  'Local audience targeting',
                  'Cultural content creation',
                  'Regional influencer network'
                ]
              }
            ],
            testimonials: [
              {
                name: 'Ali Hassan',
                company: 'Gilgit Tourism',
                content: 'Their e-commerce platform helped us reach tourists worldwide. The local understanding was invaluable.',
                rating: 5
              }
            ]
          },
          {
            slug: 'barishal',
            name: 'Barishal',
            description: 'Technology solutions for Barishal\'s growing business community.',
            population: '150K+',
            timezone: 'PKT (UTC+5)',
            localBusinessHours: '9:00 AM - 6:00 PM (PKT)',
            stats: {
              projectsCompleted: 35,
              clientsServed: 22,
              satisfactionRate: 95,
              responseTime: '< 4 hours'
            },
            seo: {
              title: 'Software Development Services in Barishal - Web On Dev',
              description: 'Professional software development and IT services in Barishal. Business and development solutions.',
              keywords: ['software development barishal', 'IT services barishal', 'web development barishal']
            },
            services: [
              {
                slug: 'uiux-design',
                title: 'UI/UX Design',
                description: 'User-centered design solutions for Barishal businesses.',
                features: [
                  'User Research',
                  'Wireframing & Prototyping',
                  'Visual Design',
                  'User Testing',
                  'Responsive Design',
                  'Accessibility Compliance'
                ],
                pricing: {
                  basic: 'PKR 40,000',
                  standard: 'PKR 100,000',
                  premium: 'PKR 250,000+'
                },
                localBenefits: [
                  'Local user research',
                  'Cultural design elements',
                  'Regional market focus',
                  'Business community integration'
                ]
              }
            ],
            testimonials: [
              {
                name: 'Fatima Khan',
                company: 'Barishal Business Solutions',
                content: 'The UI/UX design they created perfectly captured our local business needs and user preferences.',
                rating: 5
              }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'united-states',
    name: 'United States',
    description: 'Premium software development services across the United States with local market expertise.',
    flag: '🇺🇸',
    currency: 'USD',
    timezone: 'Multiple',
    seo: {
      title: 'Software Development Services in United States - Web On Dev',
      description: 'Professional software development and IT services across the United States. Local expertise with global standards.',
      keywords: ['software development USA', 'web development USA', 'IT services USA', 'digital solutions USA']
    },
    states: [
      {
        slug: 'california',
        name: 'California',
        description: 'Innovative software solutions in the heart of Silicon Valley and beyond.',
        seo: {
          title: 'Software Development Services in California - Web On Dev',
          description: 'Professional software development and IT services across California. Silicon Valley expertise.',
          keywords: ['software development california', 'IT services california', 'silicon valley development']
        },
        cities: [
          {
            slug: 'san-francisco',
            name: 'San Francisco',
            description: 'Cutting-edge software solutions in the tech capital of the world.',
            population: '873K+',
            timezone: 'PST (UTC-8)',
            localBusinessHours: '9:00 AM - 6:00 PM (PST)',
            stats: {
              projectsCompleted: 300,
              clientsServed: 180,
              satisfactionRate: 99,
              responseTime: '< 1 hour'
            },
            seo: {
              title: 'Software Development Services in San Francisco - Web On Dev',
              description: 'Professional software development and IT services in San Francisco. Silicon Valley expertise.',
              keywords: ['software development san francisco', 'IT services san francisco', 'silicon valley development']
            },
            services: [
              {
                slug: 'web-development',
                title: 'Web Development',
                description: 'Next-generation web solutions for San Francisco\'s innovative tech ecosystem.',
                features: [
                  'AI Integration',
                  'Cloud-Native Architecture',
                  'Progressive Web Apps',
                  'Real-time Analytics',
                  'Scalable Infrastructure',
                  'API-First Design'
                ],
                pricing: {
                  basic: '$5,000',
                  standard: '$15,000',
                  premium: '$50,000+'
                },
                localBenefits: [
                  'Silicon Valley expertise',
                  'Latest tech stack',
                  'Startup ecosystem knowledge',
                  'Venture capital connections'
                ]
              }
            ],
            testimonials: [
              {
                name: 'John Smith',
                company: 'TechStart SF',
                content: 'Their understanding of the San Francisco tech ecosystem and ability to deliver cutting-edge solutions was impressive.',
                rating: 5
              }
            ]
          },
          {
            slug: 'los-angeles',
            name: 'Los Angeles',
            description: 'Entertainment and media-focused software solutions in the City of Angels.',
            population: '4M+',
            timezone: 'PST (UTC-8)',
            localBusinessHours: '9:00 AM - 6:00 PM (PST)',
            stats: {
              projectsCompleted: 250,
              clientsServed: 150,
              satisfactionRate: 98,
              responseTime: '< 2 hours'
            },
            seo: {
              title: 'Software Development Services in Los Angeles - Web On Dev',
              description: 'Professional software development and IT services in Los Angeles. Entertainment and media solutions.',
              keywords: ['software development los angeles', 'IT services los angeles', 'entertainment software LA']
            },
            services: [
              {
                slug: 'web-development',
                title: 'Web Development',
                description: 'Entertainment and media-focused web solutions for Los Angeles.',
                features: [
                  'Content Management Systems',
                  'Streaming Platforms',
                  'Media Integration',
                  'Entertainment APIs',
                  'Social Media Integration',
                  'Analytics Dashboard'
                ],
                pricing: {
                  basic: '$4,000',
                  standard: '$12,000',
                  premium: '$40,000+'
                },
                localBenefits: [
                  'Entertainment industry expertise',
                  'Media sector knowledge',
                  'Hollywood connections',
                  'Content creation tools'
                ]
              }
            ],
            testimonials: [
              {
                name: 'Sarah Johnson',
                company: 'Media Productions LA',
                content: 'Their entertainment software platform revolutionized our content management. The LA market understanding was invaluable.',
                rating: 5
              }
            ]
          }
        ]
      },
      {
        slug: 'new-york',
        name: 'New York',
        description: 'Financial and fintech software solutions in the world\'s financial capital.',
        seo: {
          title: 'Software Development Services in New York - Web On Dev',
          description: 'Professional software development and IT services across New York. Financial and fintech solutions.',
          keywords: ['software development new york', 'IT services new york', 'fintech development NYC']
        },
        cities: [
          {
            slug: 'new-york-city',
            name: 'New York City',
            description: 'Financial technology solutions in the heart of Wall Street.',
            population: '8.8M+',
            timezone: 'EST (UTC-5)',
            localBusinessHours: '9:00 AM - 6:00 PM (EST)',
            stats: {
              projectsCompleted: 400,
              clientsServed: 250,
              satisfactionRate: 99,
              responseTime: '< 1 hour'
            },
            seo: {
              title: 'Software Development Services in New York City - Web On Dev',
              description: 'Professional software development and IT services in New York City. Financial technology expertise.',
              keywords: ['software development NYC', 'IT services NYC', 'fintech development new york']
            },
            services: [
              {
                slug: 'web-development',
                title: 'Web Development',
                description: 'Financial technology web solutions for New York\'s banking sector.',
                features: [
                  'Fintech Platforms',
                  'Trading Systems',
                  'Risk Management',
                  'Compliance Tools',
                  'Real-time Data',
                  'Security Protocols'
                ],
                pricing: {
                  basic: '$8,000',
                  standard: '$25,000',
                  premium: '$80,000+'
                },
                localBenefits: [
                  'Financial sector expertise',
                  'Wall Street knowledge',
                  'Regulatory compliance',
                  'Banking industry connections'
                ]
              }
            ],
            testimonials: [
              {
                name: 'Michael Chen',
                company: 'Wall Street Tech',
                content: 'Their fintech solutions are world-class. The understanding of financial regulations and market requirements was exceptional.',
                rating: 5
              }
            ]
          }
        ]
      },
      {
        slug: 'texas',
        name: 'Texas',
        description: 'Energy and oil industry software solutions in the Lone Star State.',
        seo: {
          title: 'Software Development Services in Texas - Web On Dev',
          description: 'Professional software development and IT services across Texas. Energy and oil industry solutions.',
          keywords: ['software development texas', 'IT services texas', 'energy software texas']
        },
        cities: [
          {
            slug: 'houston',
            name: 'Houston',
            description: 'Energy industry software solutions in the energy capital of the world.',
            population: '2.3M+',
            timezone: 'CST (UTC-6)',
            localBusinessHours: '9:00 AM - 6:00 PM (CST)',
            stats: {
              projectsCompleted: 180,
              clientsServed: 110,
              satisfactionRate: 97,
              responseTime: '< 2 hours'
            },
            seo: {
              title: 'Software Development Services in Houston - Web On Dev',
              description: 'Professional software development and IT services in Houston. Energy industry expertise.',
              keywords: ['software development houston', 'IT services houston', 'energy software houston']
            },
            services: [
              {
                slug: 'web-development',
                title: 'Web Development',
                description: 'Energy industry web solutions for Houston\'s oil and gas sector.',
                features: [
                  'Energy Management Systems',
                  'Oil & Gas Platforms',
                  'Pipeline Monitoring',
                  'Safety Compliance',
                  'Environmental Tracking',
                  'Asset Management'
                ],
                pricing: {
                  basic: '$6,000',
                  standard: '$18,000',
                  premium: '$60,000+'
                },
                localBenefits: [
                  'Energy sector expertise',
                  'Oil & gas knowledge',
                  'Industry compliance',
                  'Energy market connections'
                ]
              }
            ],
            testimonials: [
              {
                name: 'David Rodriguez',
                company: 'Energy Solutions TX',
                content: 'Their energy management software transformed our operations. The industry expertise was crucial for our success.',
                rating: 5
              }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'united-kingdom',
    name: 'United Kingdom',
    description: 'Premium software development services across the United Kingdom with European market expertise.',
    flag: '🇬🇧',
    currency: 'GBP',
    timezone: 'GMT/BST',
    seo: {
      title: 'Software Development Services in United Kingdom - Web On Dev',
      description: 'Professional software development and IT services across the United Kingdom. European expertise with global standards.',
      keywords: ['software development UK', 'web development UK', 'IT services UK', 'digital solutions UK']
    },
    states: [
      {
        slug: 'england',
        name: 'England',
        description: 'Innovative software solutions across England with focus on London\'s financial district.',
        seo: {
          title: 'Software Development Services in England - Web On Dev',
          description: 'Professional software development and IT services across England. London-focused solutions with European expertise.',
          keywords: ['software development england', 'IT services england', 'web development england']
        },
        cities: [
          {
            slug: 'london',
            name: 'London',
            description: 'Financial technology solutions in the heart of Europe\'s financial capital.',
            population: '8.9M+',
            timezone: 'GMT/BST',
            localBusinessHours: '9:00 AM - 6:00 PM (GMT)',
            stats: {
              projectsCompleted: 350,
              clientsServed: 200,
              satisfactionRate: 99,
              responseTime: '< 1 hour'
            },
            seo: {
              title: 'Software Development Services in London - Web On Dev',
              description: 'Professional software development and IT services in London. Financial technology expertise.',
              keywords: ['software development london', 'IT services london', 'fintech development UK']
            },
            services: [
              {
                slug: 'web-development',
                title: 'Web Development',
                description: 'Financial technology web solutions for London\'s banking sector.',
                features: [
                  'Fintech Platforms',
                  'Trading Systems',
                  'Risk Management',
                  'Compliance Tools',
                  'Real-time Data',
                  'Security Protocols'
                ],
                pricing: {
                  basic: '£4,000',
                  standard: '£12,000',
                  premium: '£40,000+'
                },
                localBenefits: [
                  'Financial sector expertise',
                  'City of London knowledge',
                  'European regulations',
                  'Banking industry connections'
                ]
              }
            ],
            testimonials: [
              {
                name: 'Emma Thompson',
                company: 'London Fintech',
                content: 'Their fintech solutions are exceptional. The understanding of European financial regulations was crucial.',
                rating: 5
              }
            ]
          },
          {
            slug: 'manchester',
            name: 'Manchester',
            description: 'Industrial and manufacturing software solutions in England\'s industrial heartland.',
            population: '2.7M+',
            timezone: 'GMT/BST',
            localBusinessHours: '9:00 AM - 6:00 PM (GMT)',
            stats: {
              projectsCompleted: 120,
              clientsServed: 75,
              satisfactionRate: 96,
              responseTime: '< 3 hours'
            },
            seo: {
              title: 'Software Development Services in Manchester - Web On Dev',
              description: 'Professional software development and IT services in Manchester. Industrial and manufacturing solutions.',
              keywords: ['software development manchester', 'IT services manchester', 'industrial software manchester']
            },
            services: [
              {
                slug: 'web-development',
                title: 'Web Development',
                description: 'Industrial web solutions for Manchester\'s manufacturing sector.',
                features: [
                  'Manufacturing Systems',
                  'Supply Chain Management',
                  'Quality Control',
                  'Inventory Management',
                  'Production Planning',
                  'Analytics Dashboard'
                ],
                pricing: {
                  basic: '£3,000',
                  standard: '£9,000',
                  premium: '£30,000+'
                },
                localBenefits: [
                  'Industrial sector expertise',
                  'Manufacturing knowledge',
                  'UK regulations',
                  'Local industry networks'
                ]
              }
            ],
            testimonials: [
              {
                name: 'James Wilson',
                company: 'Manchester Manufacturing',
                content: 'Their manufacturing software improved our efficiency significantly. The local industry knowledge was invaluable.',
                rating: 5
              }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'canada',
    name: 'Canada',
    description: 'Innovative software development services across Canada with North American market expertise.',
    flag: '🇨🇦',
    currency: 'CAD',
    timezone: 'Multiple',
    seo: {
      title: 'Software Development Services in Canada - Web On Dev',
      description: 'Professional software development and IT services across Canada. North American expertise with global standards.',
      keywords: ['software development canada', 'web development canada', 'IT services canada', 'digital solutions canada']
    },
    states: [
      {
        slug: 'ontario',
        name: 'Ontario',
        description: 'Technology solutions across Ontario with focus on Toronto\'s financial district.',
        seo: {
          title: 'Software Development Services in Ontario - Web On Dev',
          description: 'Professional software development and IT services across Ontario. Toronto-focused solutions with Canadian expertise.',
          keywords: ['software development ontario', 'IT services ontario', 'web development ontario']
        },
        cities: [
          {
            slug: 'toronto',
            name: 'Toronto',
            description: 'Financial technology solutions in Canada\'s financial capital.',
            population: '2.9M+',
            timezone: 'EST (UTC-5)',
            localBusinessHours: '9:00 AM - 6:00 PM (EST)',
            stats: {
              projectsCompleted: 280,
              clientsServed: 170,
              satisfactionRate: 98,
              responseTime: '< 2 hours'
            },
            seo: {
              title: 'Software Development Services in Toronto - Web On Dev',
              description: 'Professional software development and IT services in Toronto. Financial technology expertise.',
              keywords: ['software development toronto', 'IT services toronto', 'fintech development canada']
            },
            services: [
              {
                slug: 'web-development',
                title: 'Web Development',
                description: 'Financial technology web solutions for Toronto\'s banking sector.',
                features: [
                  'Fintech Platforms',
                  'Trading Systems',
                  'Risk Management',
                  'Compliance Tools',
                  'Real-time Data',
                  'Security Protocols'
                ],
                pricing: {
                  basic: 'CAD 6,000',
                  standard: 'CAD 18,000',
                  premium: 'CAD 60,000+'
                },
                localBenefits: [
                  'Financial sector expertise',
                  'Bay Street knowledge',
                  'Canadian regulations',
                  'Banking industry connections'
                ]
              }
            ],
            testimonials: [
              {
                name: 'Alexandra Brown',
                company: 'Toronto Fintech',
                content: 'Their fintech solutions are world-class. The understanding of Canadian financial regulations was exceptional.',
                rating: 5
              }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'australia',
    name: 'Australia',
    description: 'Innovative software development services across Australia with Asia-Pacific market expertise.',
    flag: '🇦🇺',
    currency: 'AUD',
    timezone: 'Multiple',
    seo: {
      title: 'Software Development Services in Australia - Web On Dev',
      description: 'Professional software development and IT services across Australia. Asia-Pacific expertise with global standards.',
      keywords: ['software development australia', 'web development australia', 'IT services australia', 'digital solutions australia']
    },
    states: [
      {
        slug: 'new-south-wales',
        name: 'New South Wales',
        description: 'Technology solutions across NSW with focus on Sydney\'s business district.',
        seo: {
          title: 'Software Development Services in New South Wales - Web On Dev',
          description: 'Professional software development and IT services across NSW. Sydney-focused solutions with Australian expertise.',
          keywords: ['software development nsw', 'IT services nsw', 'web development nsw']
        },
        cities: [
          {
            slug: 'sydney',
            name: 'Sydney',
            description: 'Business technology solutions in Australia\'s business capital.',
            population: '5.3M+',
            timezone: 'AEST/AEDT',
            localBusinessHours: '9:00 AM - 6:00 PM (AEST)',
            stats: {
              projectsCompleted: 220,
              clientsServed: 130,
              satisfactionRate: 97,
              responseTime: '< 3 hours'
            },
            seo: {
              title: 'Software Development Services in Sydney - Web On Dev',
              description: 'Professional software development and IT services in Sydney. Business technology expertise.',
              keywords: ['software development sydney', 'IT services sydney', 'business software australia']
            },
            services: [
              {
                slug: 'web-development',
                title: 'Web Development',
                description: 'Business technology web solutions for Sydney\'s corporate sector.',
                features: [
                  'Business Platforms',
                  'Corporate Systems',
                  'E-commerce Solutions',
                  'CRM Integration',
                  'Analytics Tools',
                  'Cloud Services'
                ],
                pricing: {
                  basic: 'AUD 8,000',
                  standard: 'AUD 24,000',
                  premium: 'AUD 80,000+'
                },
                localBenefits: [
                  'Business sector expertise',
                  'Australian market knowledge',
                  'Asia-Pacific connections',
                  'Corporate compliance'
                ]
              }
            ],
            testimonials: [
              {
                name: 'Michael Johnson',
                company: 'Sydney Business Solutions',
                content: 'Their business software transformed our operations. The understanding of the Australian market was crucial.',
                rating: 5
              }
            ]
          }
        ]
      }
    ]
  }
];

// Helper functions for data access
export const getCountryBySlug = (slug: string): Country | undefined => {
  return locationData.find(country => country.slug === slug);
};

export const getStateBySlug = (countrySlug: string, stateSlug: string): State | undefined => {
  const country = getCountryBySlug(countrySlug);
  return country?.states.find(state => state.slug === stateSlug);
};

export const getCityBySlug = (countrySlug: string, stateSlug: string, citySlug: string): City | undefined => {
  const state = getStateBySlug(countrySlug, stateSlug);
  return state?.cities.find(city => city.slug === citySlug);
};

export const getServiceBySlug = (countrySlug: string, stateSlug: string, citySlug: string, serviceSlug: string): LocationService | undefined => {
  const city = getCityBySlug(countrySlug, stateSlug, citySlug);
  return city?.services.find(service => service.slug === serviceSlug);
};

export const getAllCountries = (): Country[] => {
  return locationData;
};

export const getAllStates = (countrySlug: string): State[] => {
  const country = getCountryBySlug(countrySlug);
  return country?.states || [];
};

export const getAllCities = (countrySlug: string, stateSlug: string): City[] => {
  const state = getStateBySlug(countrySlug, stateSlug);
  return state?.cities || [];
};

export const getAllServices = (countrySlug: string, stateSlug: string, citySlug: string): LocationService[] => {
  const city = getCityBySlug(countrySlug, stateSlug, citySlug);
  return city?.services || [];
};
