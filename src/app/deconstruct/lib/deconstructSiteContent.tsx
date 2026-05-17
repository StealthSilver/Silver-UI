import type { ComponentType } from "react";
import type { DeconstructSiteId } from "@/app/deconstruct/lib/deconstructSites";
import { LinearNavbarPreview } from "@/app/deconstruct/components/linear/LinearNavbarPreview";
import { linearNavbarSource } from "@/app/deconstruct/components/linear/linearNavbar.source";
import { CalNavbarPreview } from "@/app/deconstruct/components/cal/CalNavbarPreview";
import { calNavbarSource } from "@/app/deconstruct/components/cal/calNavbar.source";
import { StripeNavbarPreview } from "@/app/deconstruct/components/stripe/StripeNavbarPreview";
import { stripeNavbarSource } from "@/app/deconstruct/components/stripe/stripeNavbar.source";
import { VercelNavbarPreview } from "@/app/deconstruct/components/vercel/VercelNavbarPreview";
import { vercelNavbarSource } from "@/app/deconstruct/components/vercel/vercelNavbar.source";
import { CursorNavbarPreview } from "@/app/deconstruct/components/cursor/CursorNavbarPreview";
import { cursorNavbarSource } from "@/app/deconstruct/components/cursor/cursorNavbar.source";

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
  stripe: {
    Preview: StripeNavbarPreview,
    source: stripeNavbarSource,
    codePanel: {
      explorerFolder: "Components",
      explorerFileName: "navbar.tsx",
      editorPath: "components/navbar.tsx",
      language: "tsx",
    },
  },
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
  vercel: {
    Preview: VercelNavbarPreview,
    source: vercelNavbarSource,
    codePanel: {
      explorerFolder: "Components",
      explorerFileName: "navbar.tsx",
      editorPath: "components/navbar.tsx",
      language: "tsx",
    },
  },
  cal: {
    Preview: CalNavbarPreview,
    source: calNavbarSource,
    codePanel: {
      explorerFolder: "Components",
      explorerFileName: "navbar.tsx",
      editorPath: "components/navbar.tsx",
      language: "tsx",
    },
  },
  cursor: {
    Preview: CursorNavbarPreview,
    source: cursorNavbarSource,
    codePanel: {
      explorerFolder: "Components",
      explorerFileName: "navbar.tsx",
      editorPath: "components/navbar.tsx",
      language: "tsx",
    },
  },
};

export function getDeconstructSiteContent(
  siteId: DeconstructSiteId,
): DeconstructSiteContent | undefined {
  return deconstructSiteContent[siteId];
}
