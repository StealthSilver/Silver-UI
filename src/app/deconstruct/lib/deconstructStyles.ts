import { pageContentFrameInnerClass } from "@/app/landing/lib/pageContentWidth";
import { cn } from "@/lib/utils";

/** Shared fixed height for Sites (left) and Preview/Code (right) panel headers. */
export const deconstructPanelHeaderClass = cn(
  "flex h-12 shrink-0 items-center border-b border-line",
  pageContentFrameInnerClass,
);

/** Preview / code panel inner surface (matches landing Deconstruct section). */
export const deconstructSurfaceGradientClass =
  "bg-gradient-to-r from-[#0a0a0c] via-[#040404] to-[#0a0a0c]";
