import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SERVICES } from "@/lib/services-data";
import { buildPageHead, serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/page-head";
import { SITE_URL } from "@/lib/site-url";

const S = SERVICES["pixel"].fr;
const path = `/services/${S.slug}`;
const alternatePath = `/en/services/${SERVICES["pixel"].en.slug}`;

export const Route = createFileRoute("/services/pixel")({
  head: () =>
    buildPageHead({
      path,
      title: S.metaTitle,
      description: S.metaDescription,
      lang: "fr",
      alternatePath,
      jsonLd: [
        serviceJsonLd({ name: S.title, description: S.intro, url: `${SITE_URL}${path}`, lang: "fr" }),
        faqJsonLd(S.faq),
        breadcrumbJsonLd([
          { name: "Accueil", url: `${SITE_URL}/` },
          { name: S.navLabel, url: `${SITE_URL}${path}` },
        ]),
      ],
    }),
  component: () => <ServicePage lang="fr" service={S} />,
});
