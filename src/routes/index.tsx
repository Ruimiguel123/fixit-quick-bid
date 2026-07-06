import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { buildPageHead } from "@/lib/page-head";

export const Route = createFileRoute("/")({
  head: () =>
    buildPageHead({
      path: "/",
      title: "DigitalExpert.ca | Réparation cellulaire Sherbrooke",
      description:
        "Réparation cellulaire à Sherbrooke depuis 2016. Écrans iPhone dès 109 $, batteries dès 79 $. Garantie 90 jours. Soumission gratuite : 819-300-1718.",
      lang: "fr",
      alternatePath: "/en",
    }),
  component: () => <HomePage lang="fr" />,
});
