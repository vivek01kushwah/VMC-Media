import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

const SEO = ({
  title = "VMC Media Pvt. Ltd. - Digital Marketing & SEO Agency",
  description = "VMC Media Pvt. Ltd. helps brands unlock their full online potential through strategic digital marketing, advanced SEO, and performance-driven campaigns. Scale faster. Reach further. Grow smarter.",
  keywords = "digital marketing, SEO, social media marketing, Google Ads, PPC, website development, lead generation, VMC Media",
  ogImage = "/og-image.jpg",
  ogType = "website",
  canonical,
}: SEOProps) => {
  const siteUrl = "https://vmcmedia.com"; // Update with your actual domain

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="VMC Media Pvt. Ltd." />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="VMC Media Pvt. Ltd." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Helmet>
  );
};

export default SEO;
