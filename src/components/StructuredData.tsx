import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LocalBusinessData {
  name: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  phone: string;
  email: string;
  website: string;
  openingHours: string[];
  geo: {
    latitude: number;
    longitude: number;
  };
  services: string[];
  areaServed: string[];
}

interface StructuredDataProps {
  businessData: LocalBusinessData;
  pageType?: 'home' | 'services' | 'blog' | 'contact';
  pageTitle?: string;
  pageDescription?: string;
}

const StructuredData: React.FC<StructuredDataProps> = ({ 
  businessData, 
  pageType = 'home',
  pageTitle,
  pageDescription 
}) => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": businessData.name,
    "image": "https://pgk-hiszpaniia-podatki.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessData.address.streetAddress,
      "addressLocality": businessData.address.addressLocality,
      "addressRegion": businessData.address.addressRegion,
      "postalCode": businessData.address.postalCode,
      "addressCountry": businessData.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": businessData.geo.latitude,
      "longitude": businessData.geo.longitude
    },
    "telephone": businessData.phone,
    "email": businessData.email,
    "url": businessData.website,
    "openingHoursSpecification": businessData.openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.split(': ')[0],
      "opens": hours.split(': ')[1].split('-')[0],
      "closes": hours.split(': ')[1].split('-')[1]
    })),
    "serviceArea": businessData.areaServed.map(area => ({
      "@type": "City",
      "name": area
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios Inmobiliarios",
      "itemListElement": businessData.services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service
        }
      }))
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    },
    "priceRange": "€€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": businessData.name,
    "url": businessData.website,
    "logo": "https://pgk-hiszpaniia-podatki.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": businessData.phone,
      "contactType": "customer service",
      "availableLanguage": ["Spanish", "Polish", "English"]
    },
    "sameAs": [
      "https://www.facebook.com/pgk.inmobiliario",
      "https://www.instagram.com/pgk.inmobiliario",
      "https://www.linkedin.com/company/pgk-hiszpaniia-podatki"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": businessData.name,
    "url": businessData.website,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${businessData.website}/buscar?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = pageType !== 'home' ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": businessData.website
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pageTitle || "Página",
        "item": `${businessData.website}/${pageType}`
      }
    ]
  } : null;

  return (
    <Helmet>
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      
      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {/* Website Schema */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      
      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      
      {/* Local SEO Meta Tags */}
      <meta name="geo.region" content="ES-MD" />
      <meta name="geo.placename" content="Madrid, España" />
      <meta name="geo.position" content={`${businessData.geo.latitude};${businessData.geo.longitude}`} />
      <meta name="ICBM" content={`${businessData.geo.latitude}, ${businessData.geo.longitude}`} />
      
      {/* Open Graph Local Business */}
      <meta property="og:type" content="business.business" />
      <meta property="business:contact_data:street_address" content={businessData.address.streetAddress} />
      <meta property="business:contact_data:locality" content={businessData.address.addressLocality} />
      <meta property="business:contact_data:region" content={businessData.address.addressRegion} />
      <meta property="business:contact_data:postal_code" content={businessData.address.postalCode} />
      <meta property="business:contact_data:country_name" content="España" />
      
      {/* Twitter Cards for Local Business */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@pgk_inmobiliario" />
    </Helmet>
  );
};

export default StructuredData;