"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";
import { ImmersiveModeProvider } from "@/contexts/ImmersiveModeContext";
import { ScrollToTop } from "./ui/ScrollToTop";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <ImmersiveModeProvider>
      {loading ? (
        <Loader />
      ) : (
        <>
          {children}
          <ScrollToTop />
        </>
      )}
    </ImmersiveModeProvider>
  );
}
