import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
