import { createFileRoute } from "@tanstack/react-router";
import OpenShop from "@/pages/OpenShop";
import vendorPathLogoAsset from "@/assets/vendorpath-logo-black.png.asset.json";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/vendorpath/")({
  head: () =>
    seoHead({
      title: "VendorPath — Become a Jersey City Farmers Market Vendor",
      description:
        "VendorPath, powered by OpenShop, gives you a step-by-step plan to become a Jersey City farmers market vendor: market matches, permits, and applications.",
      path: "/vendorpath",
      image: vendorPathLogoAsset.url,
    }),
  component: OpenShop,
});
