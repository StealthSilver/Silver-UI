"use client";

import { useState } from "react";
import type { DeconstructBlock } from "@/app/deconstruct/lib/deconstructSiteContent";
import { deconstructPanelHeaderClass } from "@/app/deconstruct/lib/deconstructStyles";
import { cn } from "@/lib/utils";
import { DeconstructIdePanel } from "./DeconstructIdePanel";
import {
  DeconstructViewToggle,
  type DeconstructViewMode,
} from "./DeconstructViewToggle";

type DeconstructBlockSectionProps = {
  block: DeconstructBlock;
};

const previewBodyMinHeight = "min-h-[calc(80vh-3rem)]";

export function DeconstructBlockSection({ block }: DeconstructBlockSectionProps) {
  const [mode, setMode] = useState<DeconstructViewMode>("preview");
  const Preview = block.Preview;
  const panelId = `deconstruct-${block.id}`;
  const isCode = mode === "code";

  return (
    <section
      className={cn(
        "flex w-full flex-col border-b border-line last:border-b-0",
        isCode ? "h-[80vh] min-h-[80vh]" : "min-h-[80vh]",
      )}
      aria-label={block.label}
    >
      <div className={deconstructPanelHeaderClass}>
        <div className="flex items-center gap-5 md:gap-7">
          <DeconstructViewToggle
            mode={mode}
            onChange={setMode}
            tabIdPrefix={panelId}
          />
          {block.label ? (
            <>
              <span
                className="shrink-0 text-sm font-light text-white/30"
                aria-hidden
              >
                |
              </span>
              <span className="shrink-0 text-sm font-light text-white">
                {block.label}
              </span>
            </>
          ) : null}
        </div>
      </div>

      {mode === "preview" ? (
        <div
          className={cn("flex w-full flex-col", previewBodyMinHeight)}
          role="tabpanel"
          id={`${panelId}-panel-preview`}
          aria-labelledby={`${panelId}-tab-preview`}
        >
          <Preview />
        </div>
      ) : (
        <div
          className="flex min-h-0 flex-1 flex-col overflow-hidden"
          role="tabpanel"
          id={`${panelId}-panel-code`}
          aria-labelledby={`${panelId}-tab-code`}
        >
          <DeconstructIdePanel
            source={block.source}
            language={block.codePanel?.language ?? "tsx"}
            explorerFolder={block.codePanel?.explorerFolder}
            explorerFileName={block.codePanel?.explorerFileName}
            editorPath={block.codePanel?.editorPath}
          />
        </div>
      )}
    </section>
  );
}
