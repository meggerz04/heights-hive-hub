import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OpenShopSection from "@/components/OpenShopSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <OpenShopSection />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
