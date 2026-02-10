import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
  description: string;
  canonicalUrl?: string;
  image?: string;
}

export const SEOHead = ({ 
  title, 
  description, 
  canonicalUrl, 
  image = '/og-image-default.jpg' 
}: Props) => {
  const siteTitle = 'Aquarium Guide';
  const fullTitle = `${title} | ${siteTitle}`;
  const currentUrl = canonicalUrl || window.location.href;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={currentUrl} />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
