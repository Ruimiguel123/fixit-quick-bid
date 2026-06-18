import { createFileRoute } from "@tanstack/react-router";
import { RepairRequestPage } from "@/components/site/RepairRequestPage";
import { buildPageHead } from "@/lib/page-head";

export const Route = createFileRoute("/demande-reparation")({
  head: () =>
    buildPageHead({
      path: "/demande-reparation",
      title: "Demande de réparation cellulaire | DigitalExpert.ca",
      description:
        "Faites une demande de réparation en ligne à Sherbrooke. On vous rappelle dans la journée avec un prix ferme. Soumission gratuite — appelez 819-300-1718.",
      lang: "fr",
    }),
  component: () => <RepairRequestPage lang="fr" />,
});
