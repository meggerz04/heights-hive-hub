import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BingoPromoSection from "@/components/BingoPromoSection";
import OpenShopSection from "@/components/OpenShopSection";
import OpenShopFrontDoorSection from "@/components/OpenShopFrontDoorSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BingoPromoSection />
      <OpenShopSection />
      <OpenShopFrontDoorSection />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
