import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seoHead({
      title: "Shop The Heights — Shop Local in Jersey City Heights",
      description:
        "Discover, support, and shop local in Jersey City Heights. Find events, explore independent businesses, and be part of what's happening in your neighborhood.",
      path: "/",
    }),
  component: Index,
});
