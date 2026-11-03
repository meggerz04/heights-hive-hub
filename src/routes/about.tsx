import { createFileRoute } from "@tanstack/react-router";
import About from "@/pages/About";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    seoHead({
      title: "About Shop The Heights — Our Story & Mission",
      description:
        "Why we started Shop The Heights, our connection to Jersey City Heights, and our mission to help independent local businesses get seen and thrive.",
      path: "/about",
    }),
  component: About,
});
