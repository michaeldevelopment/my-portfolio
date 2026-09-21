import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Michael Sanabria — Full Stack AI JS/TS Developer" },
      {
        name: "description",
        content:
          "AI-native full stack developer building web apps with React, Next.js, Node.js and agent workflows. Medellín, Colombia.",
      },
      { property: "og:title", content: "Michael Sanabria — Full Stack AI JS/TS Developer" },
      {
        property: "og:description",
        content:
          "AI-native full stack development: React, Next.js, Node.js, and agentic workflows.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <PortfolioPage />;
}
