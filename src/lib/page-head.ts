import type { Lang } from "./i18n";
import { SITE_URL, OG_IMAGE } from "./site-url";

interface BuildHeadInput {
  path: string;          // "/services/ecran-iphone"
  title: string;         // <= 60 chars
  description: string;   // 150-160 chars
  lang: Lang;
  jsonLd?: object;
}

export function buildPageHead({ path, title, description, lang, jsonLd }: BuildHeadInput) {
  const url = `${SITE_URL}${path}`;
  const locale = lang === "fr" ? "fr_CA" : "en_CA";

  const meta = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: locale },
    { property: "og:image", content: OG_IMAGE },
    { property: "og:image:width", content: "1216" },
    { property: "og:image:height", content: "640" },
  ];

  const links = [{ rel: "canonical", href: url }];

  const scripts = jsonLd
    ? [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }]
    : undefined;

  return { meta, links, ...(scripts ? { scripts } : {}) };
}

export function serviceJsonLd(opts: { name: string; description: string; url: string; lang: Lang }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    areaServed: { "@type": "City", name: "Sherbrooke" },
    inLanguage: opts.lang === "fr" ? "fr-CA" : "en-CA",
    provider: {
      "@type": "MobilePhoneStore",
      name: "DigitalExpert.ca",
      telephone: "+1-819-300-1718",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1394 rue Denault",
        addressLocality: "Sherbrooke",
        addressRegion: "QC",
        postalCode: "J1H 2P8",
        addressCountry: "CA",
      },
    },
  };
}
