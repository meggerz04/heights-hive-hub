import { useEffect, useRef } from "react";
import srcDoc from "./openshop-app.html?raw";
import Seo from "@/components/Seo";

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
    <>
      <Seo
        title="VendorPath App — Jersey City Market Vendor Guide"
        description="Your personalized VendorPath setup guide for becoming a Jersey City farmers market vendor."
        path="/vendorpath/app"
        image="/og/vendorpath.jpg"

        noindex
      />
      <iframe
      ref={iframeRef}
      srcDoc={srcDoc}
      title="OpenShop App"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
        margin: 0,
        padding: 0,
      }}
        allow="clipboard-write"
      />
    </>
  );
};

export default OpenShopApp;
