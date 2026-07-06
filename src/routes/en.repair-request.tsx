import { createFileRoute } from "@tanstack/react-router";
import { RepairRequestPage } from "@/components/site/RepairRequestPage";
import { buildPageHead } from "@/lib/page-head";

export const Route = createFileRoute("/en/repair-request")({
  head: () =>
    buildPageHead({
      path: "/en/repair-request",
      title: "Cell Phone Repair Request | DigitalExpert.ca",
      description:
        "Submit an online repair request in Sherbrooke. We'll call you back the same day with a firm price. Free estimate — call 819-300-1718 anytime.",
      lang: "en",
      alternatePath: "/demande-reparation",
    }),
  component: () => <RepairRequestPage lang="en" />,
});
