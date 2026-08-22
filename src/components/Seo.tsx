import { Helmet } from "react-helmet-async";

const SITE_URL = "https://shoptheheightsjc.com";
const DEFAULT_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/HRpkZ7dYoJbd6YgaO69GRx2EqkP2/social-images/social-1778162654750-Logo_on_Purple.webp";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  image?: string;
  jsonLd?: Record<string, unknown>;
}

const Seo = ({ title, description, path, noindex, image, jsonLd }: SeoProps) => {
  const url = `${SITE_URL}${path}`;
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default Seo;
