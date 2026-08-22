import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OpenShopSection from "@/components/OpenShopSection";
import OpenShopFrontDoorSection from "@/components/OpenShopFrontDoorSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Shop The Heights — Shop Local in Jersey City Heights"
        description="Discover, support, and shop local in Jersey City Heights. Find events, explore independent businesses, and be part of what's happening in your neighborhood."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Shop The Heights",
          url: "https://shoptheheightsjc.com",
          description:
            "A local business activation platform driving foot traffic, visibility, and collaboration among independent businesses in Jersey City Heights, NJ.",
          areaServed: "Jersey City Heights, NJ",
          sameAs: ["https://www.instagram.com/shoptheheightsjc"],
        }}
      />
      <Navbar />
      <HeroSection />
      <OpenShopSection />
      <OpenShopFrontDoorSection />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
