"use client";

import { useEffect, useState } from "react";
import type { DeconstructSiteId } from "@/app/deconstruct/lib/deconstructSites";
import { deconstructSites } from "@/app/deconstruct/lib/deconstructSites";
import { getDeconstructSiteContent } from "@/app/deconstruct/lib/deconstructSiteContent";
import { deconstructPanelHeaderClass } from "@/app/deconstruct/lib/deconstructStyles";
import {
  DeconstructViewToggle,
  type DeconstructViewMode,
} from "./DeconstructViewToggle";
import { DeconstructIdePanel } from "./DeconstructIdePanel";

type DeconstructViewProps = {
  activeId: DeconstructSiteId;
};

export function DeconstructView({ activeId }: DeconstructViewProps) {
  const [mode, setMode] = useState<DeconstructViewMode>("preview");
  const activeSite = deconstructSites.find((site) => site.id === activeId);
  const siteContent = getDeconstructSiteContent(activeId);
  const Preview = siteContent?.Preview;

  useEffect(() => {
    setMode("preview");
  }, [activeId]);

  return (
    <section
      className="flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-black"
      aria-label="Deconstruct preview and code"
    >
      <div className={deconstructPanelHeaderClass}>
        <DeconstructViewToggle mode={mode} onChange={setMode} />
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        {mode === "preview" ? (
          <div
            className="flex min-h-0 flex-1 flex-col overflow-auto"
            role="tabpanel"
            id="deconstruct-panel-preview"
            aria-labelledby="deconstruct-tab-preview"
          >
            {Preview ? (
              <Preview />
            ) : (
              <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
                <div
                  className="flex h-full min-h-[280px] w-full max-w-2xl flex-col items-center justify-center border border-line bg-gradient-to-r from-[#0a0a0c] via-[#040404] to-[#0a0a0c] px-6 sm:min-h-[360px] sm:px-10"
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
          </div>
        ) : (
          <div
            className="flex min-h-0 flex-1 flex-col overflow-hidden"
            role="tabpanel"
            id="deconstruct-panel-code"
            aria-labelledby="deconstruct-tab-code"
          >
            <DeconstructIdePanel
              source={
                siteContent?.source ??
                (activeSite
                  ? `// ${activeSite.label} component source\n// Code view coming soon.`
                  : "// Select a site from the sidebar to view code.")
              }
              language={siteContent?.codePanel?.language ?? "tsx"}
              explorerFolder={siteContent?.codePanel?.explorerFolder}
              explorerFileName={siteContent?.codePanel?.explorerFileName}
              editorPath={siteContent?.codePanel?.editorPath}
            />
          </div>
        )}
      </div>
    </section>
  );
}
