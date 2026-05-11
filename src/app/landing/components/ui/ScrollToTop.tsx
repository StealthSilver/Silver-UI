"use client";

import { ArrowUpIcon } from "lucide-react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState, type ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { useImmersiveMode } from "@/contexts/ImmersiveModeContext";

export function ScrollToTop({
  className,
  ...props
}: ComponentProps<"button">) {
  const { isImmersive } = useImmersiveMode();
  const { scrollY } = useScroll();
  const prevScrollRef = useRef(0);

  const [visible, setVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= 400);

    const prev = prevScrollRef.current;
    const diff = latestValue - prev;
    if (diff !== 0) {
      setScrollDirection(diff > 0 ? "down" : "up");
    }
    prevScrollRef.current = latestValue;
  });

  if (isImmersive) {
    return null;
  }

  return (
    <button
      type="button"
      data-visible={visible}
      data-scroll-direction={scrollDirection}
      className={cn(
        "[--bottom:0.5rem] lg:[--bottom:2rem]",
        "fixed right-4 bottom-[calc(var(--bottom,0.5rem)+env(safe-area-inset-bottom,0px))] z-50 lg:right-8",
        "transition-[background-color,border-color,color,opacity] duration-300 ease-out data-[scroll-direction=down]:opacity-30 data-[scroll-direction=up]:opacity-100 data-[visible=false]:pointer-events-none data-[visible=false]:opacity-0",
        "data-[scroll-direction=down]:hover:opacity-100",
        "inline-flex h-10 w-10 items-center justify-center rounded-none border border-white/15 bg-black text-white/80",
        "hover:border-white/35 hover:bg-white/[0.04] hover:text-white",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        "disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      {...props}
    >
      <ArrowUpIcon className="h-4 w-4" />
    </button>
  );
}
