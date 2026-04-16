import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InitiativesSection from "@/components/InitiativesSection";
import OpenShopSection from "@/components/OpenShopSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <InitiativesSection />
      <OpenShopSection />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
