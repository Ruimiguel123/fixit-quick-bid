import type { Lang } from "./i18n";
import { SITE_URL, OG_IMAGE } from "./site-url";

interface BuildHeadInput {
  path: string;            // "/services/ecran-iphone"
  title: string;           // <= 60 chars
  description: string;     // 150-160 chars
  lang: Lang;
  /** Path of the same page in the other language, e.g. "/en/services/iphone-screen" */
  alternatePath?: string;
  jsonLd?: object | object[];
}

export function buildPageHead({ path, title, description, lang, alternatePath, jsonLd }: BuildHeadInput) {
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

  const links: { rel: string; href: string; hrefLang?: string }[] = [
    { rel: "canonical", href: url },
  ];

  // hreflang pairs — French is the default language of the site (x-default).
  if (alternatePath) {
    const frPath = lang === "fr" ? path : alternatePath;
    const enPath = lang === "en" ? path : alternatePath;
    links.push(
      { rel: "alternate", hrefLang: "fr-CA", href: `${SITE_URL}${frPath}` },
      { rel: "alternate", hrefLang: "en-CA", href: `${SITE_URL}${enPath}` },
      { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}${frPath}` },
    );
  }

  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  const scripts = jsonLdArray.length
    ? jsonLdArray.map((obj) => ({ type: "application/ld+json", children: JSON.stringify(obj) }))
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

/** FAQPage rich-result markup. Feed it the same FAQ shown on the page. */
export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}
