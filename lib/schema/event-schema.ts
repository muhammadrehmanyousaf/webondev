/**
 * EVENT SCHEMA FOR WEBINARS & EVENTS
 * Rich results for company events, webinars, workshops
 */

import { getBaseUrl } from '@/lib/site-config';

export interface CompanyEvent {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: {
    type: 'VirtualLocation' | 'Place';
    name?: string;
    address?: string;
    url?: string;
  };
  image?: string;
  organizer: string;
  eventStatus: 'EventScheduled' | 'EventRescheduled' | 'EventCancelled' | 'EventPostponed';
  eventAttendanceMode: 'OnlineEventAttendanceMode' | 'OfflineEventAttendanceMode' | 'MixedEventAttendanceMode';
  offers?: {
    price: number;
    priceCurrency: string;
    availability: string;
    validFrom: string;
    url: string;
  };
  performer?: string[];
  keywords?: string[];
}

// Upcoming events and webinars
export const events: CompanyEvent[] = [
  {
    id: 'nextjs-masterclass-2025',
    name: 'Next.js 15 Masterclass: Building Enterprise Applications',
    description: 'Join Web On Dev for an in-depth masterclass on Next.js 15. Learn about App Router, Server Components, Streaming, and best practices for building enterprise-grade applications. Perfect for developers looking to level up their Next.js skills.',
    startDate: '2025-01-15T18:00:00Z',
    endDate: '2025-01-15T20:00:00Z',
    location: {
      type: 'VirtualLocation',
      url: 'https://www.webondev.com/events/nextjs-masterclass/',
    },
    image: '/images/events/nextjs-masterclass.jpg',
    organizer: 'Web On Dev',
    eventStatus: 'EventScheduled',
    eventAttendanceMode: 'OnlineEventAttendanceMode',
    offers: {
      price: 0,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: '2024-12-01',
      url: 'https://www.webondev.com/events/nextjs-masterclass/',
    },
    performer: ['Ahmad Raza'],
    keywords: ['Next.js', 'React', 'web development', 'masterclass'],
  },
  {
    id: 'ecommerce-webinar-2025',
    name: 'E-commerce Success: Building Scalable Online Stores',
    description: 'Learn how to build high-converting e-commerce platforms. This webinar covers Shopify, WooCommerce, custom solutions, payment integration, and strategies to increase conversions.',
    startDate: '2025-01-22T17:00:00Z',
    endDate: '2025-01-22T18:30:00Z',
    location: {
      type: 'VirtualLocation',
      url: 'https://www.webondev.com/events/ecommerce-webinar/',
    },
    image: '/images/events/ecommerce-webinar.jpg',
    organizer: 'Web On Dev',
    eventStatus: 'EventScheduled',
    eventAttendanceMode: 'OnlineEventAttendanceMode',
    offers: {
      price: 0,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: '2024-12-01',
      url: 'https://www.webondev.com/events/ecommerce-webinar/',
    },
    keywords: ['e-commerce', 'Shopify', 'online store', 'webinar'],
  },
  {
    id: 'mobile-dev-workshop-2025',
    name: 'React Native vs Flutter: Choosing the Right Framework',
    description: 'A comprehensive comparison of React Native and Flutter for mobile app development. We will build sample apps in both frameworks and discuss when to use each.',
    startDate: '2025-02-05T18:00:00Z',
    endDate: '2025-02-05T20:30:00Z',
    location: {
      type: 'VirtualLocation',
      url: 'https://www.webondev.com/events/mobile-workshop/',
    },
    image: '/images/events/mobile-workshop.jpg',
    organizer: 'Web On Dev',
    eventStatus: 'EventScheduled',
    eventAttendanceMode: 'OnlineEventAttendanceMode',
    offers: {
      price: 29,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: '2024-12-15',
      url: 'https://www.webondev.com/events/mobile-workshop/',
    },
    performer: ['Michael Chen'],
    keywords: ['React Native', 'Flutter', 'mobile development', 'workshop'],
  },
  {
    id: 'seo-strategies-2025',
    name: 'AI-First SEO: Ranking in the Age of ChatGPT & Google SGE',
    description: 'Discover cutting-edge SEO strategies for 2025. Learn how to optimize your content for AI search engines, featured snippets, and voice search. Practical tips from our SEO experts.',
    startDate: '2025-02-12T17:00:00Z',
    endDate: '2025-02-12T18:30:00Z',
    location: {
      type: 'VirtualLocation',
      url: 'https://www.webondev.com/events/seo-webinar/',
    },
    image: '/images/events/seo-webinar.jpg',
    organizer: 'Web On Dev',
    eventStatus: 'EventScheduled',
    eventAttendanceMode: 'OnlineEventAttendanceMode',
    offers: {
      price: 0,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: '2024-12-20',
      url: 'https://www.webondev.com/events/seo-webinar/',
    },
    performer: ['Emma Wilson'],
    keywords: ['SEO', 'AI SEO', 'Google SGE', 'digital marketing'],
  },
];

/**
 * Generate Event schema
 */
export function generateEventSchema(event: CompanyEvent) {
  const siteUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': `${siteUrl}/events/${event.id}/#event`,
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: `https://schema.org/${event.eventStatus}`,
    eventAttendanceMode: `https://schema.org/${event.eventAttendanceMode}`,
    location:
      event.location.type === 'VirtualLocation'
        ? {
            '@type': 'VirtualLocation',
            url: event.location.url,
          }
        : {
            '@type': 'Place',
            name: event.location.name,
            address: event.location.address,
          },
    ...(event.image && {
      image: event.image.startsWith('http') ? event.image : `${siteUrl}${event.image}`,
    }),
    organizer: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: event.organizer,
      url: siteUrl,
    },
    ...(event.offers && {
      offers: {
        '@type': 'Offer',
        price: event.offers.price,
        priceCurrency: event.offers.priceCurrency,
        availability: event.offers.availability,
        validFrom: event.offers.validFrom,
        url: event.offers.url,
      },
    }),
    ...(event.performer && {
      performer: event.performer.map((name) => ({
        '@type': 'Person',
        name,
      })),
    }),
  };
}

/**
 * Generate ItemList schema for events list
 */
export function generateEventsListSchema(eventList: CompanyEvent[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: eventList.map((event, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: generateEventSchema(event),
    })),
  };
}

/**
 * Get upcoming events
 */
export function getUpcomingEvents(): CompanyEvent[] {
  const now = new Date();
  return events.filter((event) => new Date(event.startDate) > now);
}

/**
 * Get event by ID
 */
export function getEventById(id: string): CompanyEvent | undefined {
  return events.find((e) => e.id === id);
}

export default events;
