import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TOOL_URL = "https://open-shop-dun.vercel.app/";

const OpenShopApp = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("unlocked") !== "true") return;
    const iframe = iframeRef.current;
    if (!iframe) return;
    const handleLoad = () => {
      iframe.contentWindow?.postMessage("OPENSHOP_UNLOCK", "*");
    };
    iframe.addEventListener("load", handleLoad);
    return () => iframe.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 bg-background">
        <iframe
          ref={iframeRef}
          src={TOOL_URL}
          title="VendorPath App"
          scrolling="no"
          className="w-full block border-none overflow-hidden"
          style={{ height: "740px" }}
          allow="clipboard-write"
        />
      </main>
      <Footer />
    </div>
  );
};

export default OpenShopApp;
