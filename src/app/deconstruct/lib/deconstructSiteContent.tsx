import type { ComponentType } from "react";
import type { DeconstructSiteId } from "@/app/deconstruct/lib/deconstructSites";
import { LinearNavbarPreview } from "@/app/deconstruct/components/linear/LinearNavbarPreview";
import { linearNavbarSource } from "@/app/deconstruct/components/linear/linearNavbar.source";

export type DeconstructCodePanelConfig = {
  explorerFolder: string;
  explorerFileName: string;
  editorPath: string;
  language?: string;
};

export type DeconstructSiteContent = {
  Preview: ComponentType;
  source: string;
  codePanel?: DeconstructCodePanelConfig;
};

export const deconstructSiteContent: Partial<
  Record<DeconstructSiteId, DeconstructSiteContent>
> = {
  linear: {
    Preview: LinearNavbarPreview,
    source: linearNavbarSource,
    codePanel: {
      explorerFolder: "Components",
      explorerFileName: "navbar.tsx",
      editorPath: "components/team-01.tsx",
      language: "tsx",
    },
  },
};

export function getDeconstructSiteContent(
  siteId: DeconstructSiteId,
): DeconstructSiteContent | undefined {
  return deconstructSiteContent[siteId];
}
