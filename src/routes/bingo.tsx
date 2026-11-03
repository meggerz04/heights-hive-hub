import { createFileRoute } from "@tanstack/react-router";
import Bingo from "@/pages/Bingo";
import { seoHead } from "@/lib/seo";

const description =
  "Shop local in Jersey City Heights from November 27–29, collect stickers from 20 participating businesses, and turn your bingo card into raffle entries to win prizes.";

export const Route = createFileRoute("/bingo")({
  head: () =>
    seoHead({
      title: "Shop The Heights Bingo — Nov 27–29 | Shop The Heights",
      description,
      path: "/bingo",
      image: "/og-bingo.png",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Event",
        name: "Shop The Heights Bingo",
        description,
        startDate: "2026-11-27",
        endDate: "2026-11-29",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: "Jersey City Heights",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jersey City",
            addressRegion: "NJ",
            addressCountry: "US",
          },
        },
        organizer: {
          "@type": "Organization",
          name: "Heights Entrepreneurial Women's Society (HEWS)",
          url: "https://www.hewsofjc.com",
        },
        image: "https://shoptheheightsjc.com/og-bingo.png",
        url: "https://shoptheheightsjc.com/bingo",
      },
    }),
  component: Bingo,
});
