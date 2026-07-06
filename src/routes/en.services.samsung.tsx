import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SERVICES } from "@/lib/services-data";
import { buildPageHead, serviceJsonLd, faqJsonLd } from "@/lib/page-head";
import { SITE_URL } from "@/lib/site-url";

const S = SERVICES["samsung"].en;
const path = `/en/services/${S.slug}`;
const alternatePath = `/services/${SERVICES["samsung"].fr.slug}`;

export const Route = createFileRoute("/en/services/samsung")({
  head: () =>
    buildPageHead({
      path,
      title: S.metaTitle,
      description: S.metaDescription,
      lang: "en",
      alternatePath,
      jsonLd: [
        serviceJsonLd({ name: S.title, description: S.intro, url: `${SITE_URL}${path}`, lang: "en" }),
        faqJsonLd(S.faq),
      ],
    }),
  component: () => <ServicePage lang="en" service={S} />,
});
