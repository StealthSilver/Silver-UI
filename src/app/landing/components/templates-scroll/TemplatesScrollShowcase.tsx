"use client";

import { cn } from "@/lib/utils";
import { TEMPLATE_SCROLL_ITEMS } from "./templatesScrollConfig";
import { HaloTemplatePreview } from "./HaloTemplatePreview";
import { PulseTemplatePreview } from "./PulseTemplatePreview";

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
              {text === "Pulse" ? (
                <>
                  <h3
                    className={cn(
                      "templates-scroll__word templates-scroll__word--pulse",
                      fontClass,
                      colorClass,
                      extraClass,
                    )}
                  >
                    {text}
                  </h3>
                  <div className="templates-scroll__template-stage">
                    <div
                      className="templates-scroll__template-surface"
                      aria-hidden
                    />
                    <div className="templates-scroll__template-card">
                      <PulseTemplatePreview />
                    </div>
                  </div>
                </>
              ) : text === "Halo" ? (
                <>
                  <h3
                    className={cn(
                      "templates-scroll__word templates-scroll__word--halo",
                      fontClass,
                      colorClass,
                      extraClass,
                    )}
                  >
                    {text}
                  </h3>
                  <div className="templates-scroll__template-stage">
                    <div
                      className="templates-scroll__template-surface"
                      aria-hidden
                    />
                    <div className="templates-scroll__template-card">
                      <HaloTemplatePreview />
                    </div>
                  </div>
                </>
              ) : (
                <div className="templates-scroll__foreground">
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
              )}
            </div>
          ),
        )}
      </div>
    </section>
  );
}
