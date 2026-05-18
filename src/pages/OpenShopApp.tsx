import { useEffect, useRef } from "react";
import srcDoc from "./openshop-app.html?raw";

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
  );
};

export default OpenShopApp;
