"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import { cn } from "@/lib/utils";
import {
  TEMPLATE_SCROLL_ITEMS,
  templateThemeHref,
} from "./templatesScrollConfig";
import { DriftTemplatePreview } from "./DriftTemplatePreview";
import { ObsidianTemplatePreview } from "./ObsidianTemplatePreview";
import { HaloTemplatePreview } from "./HaloTemplatePreview";
import { PulseTemplatePreview } from "./PulseTemplatePreview";

const GRADIENT_BARS = ["a", "b", "c"] as const;

const TEMPLATE_PREVIEWS: Record<string, ComponentType> = {
  pulse: PulseTemplatePreview,
  halo: HaloTemplatePreview,
  drift: DriftTemplatePreview,
  obsidian: ObsidianTemplatePreview,
};

export function TemplatesScrollShowcase() {
  return (
    <section
      className="templates-scroll-showcase relative w-full overflow-hidden border border-line bg-gradient-to-r from-[#0a0a0c] via-[#040404] to-[#0a0a0c]"
      aria-label="Template themes scroll showcase"
    >
      <div className="templates-scroll-showcase__content">
        {TEMPLATE_SCROLL_ITEMS.map(
          ({ text, slug, themeClass, fontClass, colorClass, extraClass }) => {
            const Preview = TEMPLATE_PREVIEWS[slug];

            return (
              <div
                key={slug}
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

                {Preview ? (
                  <>
                    <h3
                      className={cn(
                        "templates-scroll__word",
                        `templates-scroll__word--${slug}`,
                        fontClass,
                        colorClass,
                        extraClass,
                      )}
                    >
                      {text}
                    </h3>
                    <div className="templates-scroll__template-stage">
                      <Link
                        href={templateThemeHref(slug)}
                        className="templates-scroll__template-card"
                        aria-label={`Open ${text} template`}
                      >
                        <Preview />
                      </Link>
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
            );
          },
        )}
      </div>
    </section>
  );
}
