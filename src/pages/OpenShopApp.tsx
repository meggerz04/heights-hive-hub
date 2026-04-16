import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OpenShopApp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <iframe
            src=""
            title="OpenShop App"
            className="w-full min-h-[80vh] rounded-xl border border-border"
            allow="clipboard-write"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OpenShopApp;
