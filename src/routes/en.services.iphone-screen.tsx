import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SERVICES } from "@/lib/services-data";
import { buildPageHead, serviceJsonLd } from "@/lib/page-head";
import { SITE_URL } from "@/lib/site-url";

const S = SERVICES["iphone-screen"].en;
const path = `/en/services/${S.slug}`;

export const Route = createFileRoute("/en/services/iphone-screen")({
  head: () =>
    buildPageHead({
      path,
      title: S.metaTitle,
      description: S.metaDescription,
      lang: "en",
      jsonLd: serviceJsonLd({ name: S.title, description: S.intro, url: `${SITE_URL}${path}`, lang: "en" }),
    }),
  component: () => <ServicePage lang="en" service={S} />,
});
