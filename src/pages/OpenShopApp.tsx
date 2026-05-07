import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OpenShopApp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <iframe
            src="https://jc-market-vendors.vercel.app/index.html"
            title="OpenShop App"
            width="100%"
            height="720"
            style={{ border: 'none', borderRadius: '12px', display: 'block' }}
            allow="clipboard-write"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OpenShopApp;
