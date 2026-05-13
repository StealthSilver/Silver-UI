"use client";

import type { MouseEvent } from "react";

export const PRICING_HREF = "/#pricing" as const;

function isHomePath() {
  if (typeof window === "undefined") return false;
  const p = window.location.pathname;
  return p === "/" || p === "";
}

/** When already on `/`, smooth-scroll to `#pricing` instead of relying on hash-only navigation. */
export function navigateToPricingSection(e: MouseEvent<HTMLAnchorElement>) {
  if (!isHomePath()) return;
  e.preventDefault();
  document.getElementById("pricing")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  window.history.replaceState(null, "", PRICING_HREF);
}
