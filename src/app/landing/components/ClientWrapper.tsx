"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  PageLoader,
  PAGE_LOADER_EXIT_DURATION_MS,
} from "./PageLoader";
import { ImmersiveModeProvider } from "@/contexts/ImmersiveModeContext";
import { ScrollToTop } from "./ui/ScrollToTop";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLoader, setShowLoader] = useState(true);
  const [phase, setPhase] = useState<"running" | "exiting">("running");
  const [progress, setProgress] = useState(0);
  const loadDoneRef = useRef(
    typeof document !== "undefined" &&
      document.readyState === "complete",
  );
  const progressRef = useRef(0);
  const startedExitRef = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onLoad = () => {
      loadDoneRef.current = true;
    };
    if (document.readyState === "complete") loadDoneRef.current = true;
    else window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  useEffect(() => {
    if (!showLoader) return;

    const tick = () => {
      if (startedExitRef.current) return;

      const preCompleteCap = 88;
      const target = loadDoneRef.current ? 100 : preCompleteCap;
      let p = progressRef.current;
      p += (target - p) * 0.072;
      if (loadDoneRef.current && p > 99.35) p = 100;
      progressRef.current = p;
      setProgress(p);

      if (loadDoneRef.current && p >= 99.98) {
        startedExitRef.current = true;
        setPhase("exiting");
        return;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [showLoader]);

  const onExitComplete = useCallback(() => {
    setShowLoader(false);
  }, []);

  return (
    <ImmersiveModeProvider>
      {showLoader ? (
        <PageLoader
          phase={phase}
          progress={progress}
          onExitComplete={onExitComplete}
          exitDurationMs={PAGE_LOADER_EXIT_DURATION_MS}
        />
      ) : null}
      {!showLoader ? (
        <>
          {children}
          <ScrollToTop />
        </>
      ) : null}
    </ImmersiveModeProvider>
  );
}
