"use client";

import { useLayoutEffect, useState } from "react";

/** Matches Navbar corner squares; mounted inside page rails so squares paint above the vertical lines. */
export function HeroRailIntersectionSquares() {
  const [topPx, setTopPx] = useState<number | null>(null);

  useLayoutEffect(() => {
    const rails = document.getElementById("landing-page-rails");
    const sep = document.getElementById("hero-separator");
    if (!rails || !sep) return;

    const update = () => {
      const sr = sep.getBoundingClientRect();
      const rr = rails.getBoundingClientRect();
      const y = sr.top + sr.height / 2 - rr.top;
      setTopPx(y);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(sep);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  if (topPx == null) return null;

  const squareClass =
    "pointer-events-none absolute z-[31] flex size-2 -translate-y-1/2 border bg-background";

  return (
    <>
      <div
        className={`${squareClass} left-[-4.5px]`}
        style={{ borderColor: "var(--line)", top: topPx }}
        aria-hidden
      />
      <div
        className={`${squareClass} right-[-4.5px]`}
        style={{ borderColor: "var(--line)", top: topPx }}
        aria-hidden
      />
    </>
  );
}
