// frontend/src/components/SEO.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl?: string;
  ogImage?: string;
  schema?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  ogImage,
  schema
}) => {
  const baseUrl = 'https://techwave-learning.com';
  const fullUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;
  const defaultOgImage = ogImage || `${baseUrl}/og-image.jpg`;

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{title} | TechWave Learning</title>
        <meta name="title" content={`${title} | TechWave Learning`} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={fullUrl} />
        
        {/* Robots */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:title" content={`${title} | TechWave Learning`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={defaultOgImage} />
        <meta property="og:image:alt" content={`${title} | TechWave Learning`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="TechWave Learning" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={fullUrl} />
        <meta property="twitter:title" content={`${title} | TechWave Learning`} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={defaultOgImage} />
        <meta property="twitter:image:alt" content={`${title} | TechWave Learning`} />
        <meta name="twitter:site" content="@techwavelearn" />
        
        {/* Additional SEO */}
        <meta name="author" content="TechWave Learning" />
        <meta name="language" content="English" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="San Francisco" />
        
        {/* Verification */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
      </Helmet>
      
      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </>
  );
};

export default SEO;