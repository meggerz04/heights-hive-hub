import { lazy, Suspense, useEffect, useState } from "react";
import type { BingoBusiness } from "@/components/BingoMap";

// The map library only works in the browser, so load it after the page appears.
const BingoMap = lazy(() => import("@/components/BingoMap"));

const placeholder = <div className="h-[420px] w-full rounded-2xl bg-muted" aria-hidden="true" />;

const BingoMapClient = ({ businesses }: { businesses: BingoBusiness[] }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return placeholder;
  return (
    <Suspense fallback={placeholder}>
      <BingoMap businesses={businesses} />
    </Suspense>
  );
};

export default BingoMapClient;
