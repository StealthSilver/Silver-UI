"use client";

import { cn } from "@/lib/utils";
import { TEMPLATE_SCROLL_ITEMS } from "./templatesScrollConfig";

const GRADIENT_BARS = ["a", "b", "c"] as const;

export function TemplatesScrollShowcase() {
  return (
    <section
      className="templates-scroll-showcase relative w-full overflow-hidden border border-line bg-gradient-to-r from-[#0a0a0c] via-[#040404] to-[#0a0a0c]"
      aria-label="Template themes scroll showcase"
    >
      <div className="templates-scroll-showcase__content">
        {TEMPLATE_SCROLL_ITEMS.map(
          ({ text, themeClass, fontClass, colorClass, extraClass }) => (
            <div
              key={text}
              className={cn("templates-scroll__slide", themeClass)}
            >
              <div className="templates-scroll__gradients" aria-hidden>
                {GRADIENT_BARS.map((bar) => (
                  <div
                    key={bar}
                    className={cn(
                      "templates-scroll__gradient",
                      `templates-scroll__gradient--${bar}`,
                    )}
                  />
                ))}
              </div>
              <h3
                className={cn(
                  "templates-scroll__word",
                  fontClass,
                  colorClass,
                  extraClass,
                )}
              >
                {text}
              </h3>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
