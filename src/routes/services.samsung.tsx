import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SERVICES } from "@/lib/services-data";
import { buildPageHead, serviceJsonLd } from "@/lib/page-head";
import { SITE_URL } from "@/lib/site-url";

const S = SERVICES.samsung.fr;
const path = `/services/${S.slug}`;

export const Route = createFileRoute("/services/samsung")({
  head: () =>
    buildPageHead({
      path,
      title: S.metaTitle,
      description: S.metaDescription,
      lang: "fr",
      jsonLd: serviceJsonLd({ name: S.title, description: S.intro, url: `${SITE_URL}${path}`, lang: "fr" }),
    }),
  component: () => <ServicePage lang="fr" service={S} />,
});
