import type { ComponentType } from "react";
import type { DeconstructSiteId } from "@/app/deconstruct/lib/deconstructSites";
import { LinearNavbarPreview } from "@/app/deconstruct/components/linear/LinearNavbarPreview";
import { linearNavbarSource } from "@/app/deconstruct/components/linear/linearNavbar.source";

export type DeconstructSiteContent = {
  Preview: ComponentType;
  source: string;
};

export const deconstructSiteContent: Partial<
  Record<DeconstructSiteId, DeconstructSiteContent>
> = {
  linear: {
    Preview: LinearNavbarPreview,
    source: linearNavbarSource,
  },
};

export function getDeconstructSiteContent(
  siteId: DeconstructSiteId,
): DeconstructSiteContent | undefined {
  return deconstructSiteContent[siteId];
}
