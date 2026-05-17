"use client";

import type { DeconstructSiteId } from "@/app/deconstruct/lib/deconstructSites";
import { deconstructSites } from "@/app/deconstruct/lib/deconstructSites";
import { getDeconstructSiteBlocks } from "@/app/deconstruct/lib/deconstructSiteContent";
import { deconstructSurfaceGradientClass } from "@/app/deconstruct/lib/deconstructStyles";
import { DeconstructBlockSection } from "./DeconstructBlockSection";

type DeconstructViewProps = {
  activeId: DeconstructSiteId;
};

export function DeconstructView({ activeId }: DeconstructViewProps) {
  const activeSite = deconstructSites.find((site) => site.id === activeId);
  const blocks = getDeconstructSiteBlocks(activeId);

  return (
    <section
      className="flex w-full flex-col bg-black"
      aria-label="Deconstruct preview and code"
    >
      {blocks.length > 0 ? (
        blocks.map((block) => (
          <DeconstructBlockSection key={block.id} block={block} />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
          <div
            className={`flex min-h-[280px] w-full max-w-2xl flex-col items-center justify-center border border-line px-6 sm:min-h-[360px] sm:px-10 ${deconstructSurfaceGradientClass}`}
            role="region"
            aria-label={
              activeSite
                ? `${activeSite.label} deconstruction preview`
                : "Deconstruction preview"
            }
          >
            <p className="max-w-md font-roboto text-sm font-light leading-relaxed text-white/45 md:text-base">
              {activeSite
                ? `Component breakdown for ${activeSite.label} will appear here.`
                : "Select a site from the sidebar to begin."}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
