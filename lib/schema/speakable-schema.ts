/**
 * SPEAKABLE SCHEMA FOR VOICE SEARCH
 * Optimize content for Google Assistant, Alexa, Siri
 */

import { getBaseUrl } from '@/lib/site-config';

export interface SpeakableContent {
  pageUrl: string;
  headline: string;
  speakableSections: string[];
  cssSelectors?: string[];
  xpaths?: string[];
}

/**
 * Generate SpeakableSpecification schema
 */
export function generateSpeakableSchema(content: SpeakableContent) {
  const siteUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteUrl}${content.pageUrl}#webpage`,
    url: `${siteUrl}${content.pageUrl}`,
    name: content.headline,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: content.cssSelectors || [
        'h1',
        '.article-intro',
        '.summary',
        '.key-points',
        'h2',
      ],
      ...(content.xpaths && { xpath: content.xpaths }),
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
    },
  };
}

/**
 * Generate NewsArticle with Speakable for blog posts
 */
export function generateSpeakableArticleSchema(article: {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  image?: string;
}) {
  const siteUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': `${siteUrl}${article.url}#article`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}${article.url}`,
    },
    headline: article.headline,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Web On Dev',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/branding/logo.png`,
      },
    },
    ...(article.image && {
      image: {
        '@type': 'ImageObject',
        url: article.image.startsWith('http') ? article.image : `${siteUrl}${article.image}`,
      },
    }),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.article-intro', '.summary', '.key-takeaways', 'h2'],
    },
    isAccessibleForFree: true,
  };
}

/**
 * Voice search optimized content templates
 */
export const voiceSearchTemplates = {
  // Question patterns that trigger voice search
  questionPatterns: [
    'What is {topic}?',
    'How much does {service} cost?',
    'How long does {process} take?',
    'Who is the best {provider} near me?',
    'What are the benefits of {service}?',
    'How do I {action}?',
    'Why should I choose {option}?',
    'When is the best time to {action}?',
    'Where can I find {service}?',
  ],

  // Answer templates optimized for voice
  answerTemplates: {
    definition: '{Topic} is {definition}. It is commonly used for {use cases}.',
    pricing: '{Service} costs between {min} and {max} dollars, depending on {factors}.',
    timeline: '{Process} typically takes {duration}, including {phases}.',
    benefits: 'The main benefits of {service} include {benefit1}, {benefit2}, and {benefit3}.',
    howTo: 'To {action}, first {step1}, then {step2}, and finally {step3}.',
  },

  // Featured snippet optimized content
  snippetFormats: {
    paragraph: 'Ideal for "What is" and "Why" questions - 40-60 words',
    list: 'Ideal for "How to" and "Steps" - 5-8 bullet points',
    table: 'Ideal for comparisons and pricing - 3-4 columns, 4-6 rows',
    definition: 'Ideal for definitions - 15-30 words',
  },
};

/**
 * Generate HowTo schema with speakable
 */
export function generateSpeakableHowToSchema(howTo: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
  totalTime?: string;
  image?: string;
}) {
  const siteUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    description: howTo.description,
    step: howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
    ...(howTo.totalTime && { totalTime: howTo.totalTime }),
    ...(howTo.image && {
      image: {
        '@type': 'ImageObject',
        url: howTo.image.startsWith('http') ? howTo.image : `${siteUrl}${howTo.image}`,
      },
    }),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.how-to-intro', '.step-title', '.step-description'],
    },
  };
}

export default {
  generateSpeakableSchema,
  generateSpeakableArticleSchema,
  generateSpeakableHowToSchema,
  voiceSearchTemplates,
};
