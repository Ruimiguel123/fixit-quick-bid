import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SERVICES } from "@/lib/services-data";
import { buildPageHead, serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/page-head";
import { SITE_URL } from "@/lib/site-url";

const S = SERVICES["water-damage"].en;
const path = `/en/services/${S.slug}`;
const alternatePath = `/services/${SERVICES["water-damage"].fr.slug}`;

export const Route = createFileRoute("/en/services/water-damage")({
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
        breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/en` },
          { name: S.navLabel, url: `${SITE_URL}${path}` },
        ]),
      ],
    }),
  component: () => <ServicePage lang="en" service={S} />,
});
