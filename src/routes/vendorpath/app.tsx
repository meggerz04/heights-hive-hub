import { createFileRoute } from "@tanstack/react-router";
import OpenShopApp from "@/pages/OpenShopApp";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/vendorpath/app")({
  head: () =>
    seoHead({
      title: "VendorPath App — Jersey City Market Vendor Guide",
      description: "Your personalized VendorPath setup guide for becoming a Jersey City farmers market vendor.",
      path: "/vendorpath/app",
      image: "/og/vendorpath.jpg",
      noindex: true,
    }),
  component: OpenShopApp,
});
