import React from 'react';
import { toSlug } from '@/lib/slug';

interface WhereWeServeSchemaProps {
  countries: any[];
  siteUrl: string;
}

export default function WhereWeServeSchema({ countries, siteUrl }: WhereWeServeSchemaProps) {
  // Breadcrumb for the main where-we-serve index page
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${siteUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Where We Serve',
        item: `${siteUrl}/where-we-serve/`,
      },
    ],
  };

  // Filter out countries with empty/invalid names before building schema
  const validCountries = countries.filter((c: any) => c.name && c.name.trim().length > 0);

  // ItemList of countries served (valid for list/directory pages)
  const countryListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Countries Served by Web On Dev',
    description: 'Web On Dev provides software development services across 50+ countries worldwide.',
    numberOfItems: validCountries.length,
    itemListElement: validCountries.slice(0, 50).map((c: any, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: c.name,
      url: `${siteUrl}/where-we-serve/${toSlug(c.name)}/`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(countryListSchema) }}
      />
    </>
  );
}
