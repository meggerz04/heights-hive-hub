export const SITE_URL = "https://shoptheheightsjc.com";
export const DEFAULT_SOCIAL_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/HRpkZ7dYoJbd6YgaO69GRx2EqkP2/social-images/social-1778162654750-Logo_on_Purple.webp";

interface SeoOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>;
}

/** Builds the per-page head tags (title, description, canonical, social preview, structured data). */
export function seoHead({ title, description, path, image, noindex, jsonLd }: SeoOptions) {
  const url = `${SITE_URL}${path}`;
  const imageUrl = image ? (image.startsWith("http") ? image : `${SITE_URL}${image}`) : DEFAULT_SOCIAL_IMAGE;

  const meta = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: "website" },
    { property: "og:image", content: imageUrl },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: title },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
    ...(noindex ? [{ name: "robots", content: "noindex, nofollow" }] : []),
  ];

  return {
    meta,
    links: [{ rel: "canonical", href: url }],
    scripts: jsonLd ? [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }] : [],
  };
}
