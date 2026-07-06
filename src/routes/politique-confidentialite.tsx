import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/site/PrivacyPage";
import { buildPageHead } from "@/lib/page-head";

export const Route = createFileRoute("/politique-confidentialite")({
  head: () =>
    buildPageHead({
      path: "/politique-confidentialite",
      title: "Politique de confidentialité | DigitalExpert.ca",
      description:
        "Comment DigitalExpert.ca recueille, utilise et protège vos renseignements personnels, conformément à la Loi 25 du Québec. Contact : info@digitalexpert.ca.",
      lang: "fr",
      alternatePath: "/en/privacy",
    }),
  component: () => <PrivacyPage lang="fr" />,
});
