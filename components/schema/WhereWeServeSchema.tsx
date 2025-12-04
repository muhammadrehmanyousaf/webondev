import React from 'react';

interface WhereWeServeSchemaProps {
  countries: any[];
  siteUrl: string;
}

export default function WhereWeServeSchema({ countries, siteUrl }: WhereWeServeSchemaProps) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Web On Dev',
    alternateName: ['Web On Dev LLC', 'webondev'],
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    description: 'Global software development company specializing in web development, mobile apps, and digital solutions with local teams across multiple countries.',
    foundingDate: '2020',
    numberOfEmployees: '50-100',
    industry: 'Software Development',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Business Ave',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-555-123-4567',
        contactType: 'customer service',
        availableLanguage: ['English', 'Spanish', 'French', 'German', 'Portuguese'],
        areaServed: countries.map((c: any) => c.name)
      },
      {
        '@type': 'ContactPoint',
        email: 'hello@webondev.com',
        contactType: 'sales',
        availableLanguage: ['English']
      }
    ],
    sameAs: [
      'https://linkedin.com/company/solutions-indicator',
      'https://twitter.com/solutionsind',
      'https://github.com/solutions-indicator',
      'https://facebook.com/webondev'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Development',
            description: 'Custom web applications built with modern frameworks'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce Development',
            description: 'Online stores and marketplace solutions'
          }
        }
      ]
    }
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#business`,
    name: 'Web On Dev',
    image: `${siteUrl}/images/office.jpg`,
    telephone: '+1-555-123-4567',
    email: 'hello@webondev.com',
    url: siteUrl,
    priceRange: '$$',
    currenciesAccepted: ['USD', 'EUR', 'GBP', 'CAD', 'AUD'],
    paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
    openingHours: 'Mo-Fr 09:00-18:00',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.7128',
      longitude: '-74.0060'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Business Ave',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US'
    },
    areaServed: countries.map((c: any) => ({
      '@type': 'Country',
      name: c.name
    })),
    hasMap: 'https://maps.google.com/?q=123+Business+Ave,+New+York,+NY+10001',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '247',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Sarah Johnson'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: 'Excellent software development services. The team delivered exactly what we needed on time and within budget.',
        datePublished: '2024-01-15'
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Michael Chen'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: 'Professional team with great communication. Our mobile app exceeded expectations.',
        datePublished: '2024-02-03'
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Where We Serve',
        item: `${siteUrl}/where-we-serve`
      }
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Global Software Development Services',
    description: 'Comprehensive software development services delivered across multiple countries with local expertise and global standards.',
    provider: {
      '@type': 'Organization',
      name: 'Web On Dev'
    },
    areaServed: countries.map((c: any) => ({
      '@type': 'Country',
      name: c.name
    })),
    serviceType: 'Software Development',
    category: 'Technology Services',
    offers: {
      '@type': 'Offer',
      description: 'Custom software development solutions',
      priceCurrency: 'USD',
      price: '5000',
      priceValidUntil: '2025-12-31',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Web On Dev'
      }
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Development',
            description: 'Custom web applications and websites'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile Development',
            description: 'iOS and Android mobile applications'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce Solutions',
            description: 'Online stores and marketplace platforms'
          }
        }
      ]
    }
  };

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Web On Dev',
    url: siteUrl,
    description: 'Global software development company delivering web development, mobile apps, and digital solutions.',
    publisher: {
      '@type': 'Organization',
      name: 'Web On Dev'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    },
    mainEntity: {
      '@type': 'Organization',
      name: 'Web On Dev'
    }
  };

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Web On Dev Development Platform',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web-based',
    description: 'Custom software development platform for web and mobile applications',
    url: siteUrl,
    author: {
      '@type': 'Organization',
      name: 'Web On Dev'
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '156',
      bestRating: '5',
      worstRating: '1'
    },
    screenshot: `${siteUrl}/images/app-screenshot.png`
  };

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Software Development Best Practices',
    description: 'Learn modern software development practices and methodologies',
    provider: {
      '@type': 'Organization',
      name: 'Web On Dev'
    },
    // courseMode: 'online',
    educationalLevel: 'beginner',
    teaches: [
      'Web Development',
      'Mobile App Development',
      'Software Architecture',
      'Project Management'
    ],
    offers: {
      '@type': 'Offer',
      price: '299',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      reviewCount: '89'
    }
  };

  const jobPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Senior Software Developer',
    description: 'Join our global team as a Senior Software Developer working on cutting-edge web and mobile applications.',
    identifier: {
      '@type': 'PropertyValue',
      name: 'Web On Dev',
      value: 'SENIOR-DEV-2024'
    },
    datePosted: '2024-01-15',
    validThrough: '2024-12-31',
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Web On Dev',
      sameAs: siteUrl
    },
    jobLocation: [
      {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'US'
        }
      },
      {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'GB'
        }
      }
    ],
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: {
        '@type': 'QuantitativeValue',
        minValue: '80000',
        maxValue: '120000',
        unitText: 'YEAR'
      }
    },
    qualifications: 'Bachelor\'s degree in Computer Science or related field, 5+ years experience',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'Mobile Development']
  };

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Global Software Development Summit 2024',
    description: 'Join us for insights on global software development trends and best practices.',
    startDate: '2024-06-15T09:00:00-05:00',
    endDate: '2024-06-15T17:00:00-05:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    location: {
      '@type': 'VirtualLocation',
      url: `${siteUrl}/events/global-summit-2024`
    },
    organizer: {
      '@type': 'Organization',
      name: 'Web On Dev',
      url: siteUrl
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    },
    performer: {
      '@type': 'Person',
      name: 'Tech Industry Leaders'
    }
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Global Software Development: Best Practices for Distributed Teams',
    description: 'Learn how to build and manage effective software development teams across multiple countries and time zones.',
    author: {
      '@type': 'Organization',
      name: 'Web On Dev'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Web On Dev',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.png`
      }
    },
    datePublished: '2024-01-15',
    dateModified: '2024-01-15',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/where-we-serve`
    },
    image: `${siteUrl}/images/global-teams.jpg`,
    articleSection: 'Technology',
    wordCount: '2500',
    keywords: 'global software development, distributed teams, remote development'
  };

  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Web On Dev: Global Software Development Services',
    description: 'Discover how Web On Dev delivers software development services across multiple countries.',
    thumbnailUrl: `${siteUrl}/images/video-thumbnail.jpg`,
    uploadDate: '2024-01-15',
    duration: 'PT3M30S',
    contentUrl: `${siteUrl}/videos/global-services.mp4`,
    embedUrl: `${siteUrl}/videos/embed/global-services`,
    publisher: {
      '@type': 'Organization',
      name: 'Web On Dev'
    },
    creator: {
      '@type': 'Organization',
      name: 'Web On Dev'
    }
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Custom Software Development Package',
    description: 'Comprehensive software development solution including web and mobile applications.',
    image: `${siteUrl}/images/software-package.jpg`,
    brand: {
      '@type': 'Brand',
      name: 'Web On Dev'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Web On Dev'
    },
    offers: {
      '@type': 'Offer',
      price: '15000',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Web On Dev'
      },
      validFrom: '2024-01-01',
      priceValidUntil: '2024-12-31'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '203',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Alex Rodriguez'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: 'Outstanding software development service. The team delivered beyond our expectations.',
        datePublished: '2024-01-20'
      }
    ]
  };

  const contactPointSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'customer service',
    availableLanguage: ['English', 'Spanish', 'French', 'German', 'Portuguese'],
    areaServed: countries.map((c: any) => c.name),
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    },
    serviceType: ['SoftwareDevelopment', 'WebDevelopment', 'ApplicationDevelopment', 'ConsultingService']
  };

  const socialMediaSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Web On Dev',
    url: siteUrl,
    sameAs: [
      'https://linkedin.com/company/solutions-indicator',
      'https://twitter.com/solutionsind',
      'https://facebook.com/webondev',
      'https://instagram.com/webondev',
      'https://youtube.com/webondev',
      'https://github.com/solutions-indicator'
    ]
  };

  const ratingAggregateSchema = {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'Organization',
      name: 'Web On Dev'
    },
    ratingValue: '4.8',
    reviewCount: '247',
    bestRating: '5',
    worstRating: '1',
    ratingExplanation: 'Based on client reviews and project outcomes'
  };

  const geoCoordinatesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Web On Dev Headquarters',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.7128',
      longitude: '-74.0060'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Business Ave',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US'
    }
  };

  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      
      {/* Software Application Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      
      {/* Course Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      
      {/* Job Posting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      
      {/* Event Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      {/* Video Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      
      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      
      {/* Contact Point Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointSchema) }}
      />
      
      {/* Social Media Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(socialMediaSchema) }}
      />
      
      {/* Rating Aggregate Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingAggregateSchema) }}
      />
      
      {/* Geo Coordinates Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(geoCoordinatesSchema) }}
      />
    </>
  );
}
