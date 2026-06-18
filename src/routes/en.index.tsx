import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { buildPageHead } from "@/lib/page-head";

export const Route = createFileRoute("/en/")({
  head: () =>
    buildPageHead({
      path: "/en",
      title: "DigitalExpert.ca | Cell Phone Repair Sherbrooke",
      description:
        "Independent cell phone repair shop in Sherbrooke since 2016. iPhone screens from $109, batteries from $79. 90-day warranty. Free estimate: 819-300-1718.",
      lang: "en",
    }),
  component: () => <HomePage lang="en" />,
});
