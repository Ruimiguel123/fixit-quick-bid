import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/site/PrivacyPage";
import { buildPageHead } from "@/lib/page-head";

export const Route = createFileRoute("/en/privacy")({
  head: () =>
    buildPageHead({
      path: "/en/privacy",
      title: "Privacy Policy | DigitalExpert.ca",
      description:
        "How DigitalExpert.ca collects, uses and protects your personal information, in line with Quebec's Law 25. Contact us anytime at info@digitalexpert.ca.",
      lang: "en",
      alternatePath: "/politique-confidentialite",
    }),
  component: () => <PrivacyPage lang="en" />,
});
