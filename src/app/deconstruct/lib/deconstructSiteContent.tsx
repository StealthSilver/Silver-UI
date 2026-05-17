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
import { HeyGenLogoTickerPreview } from "@/app/deconstruct/components/heygen/HeyGenLogoTickerPreview";
import { HeyGenNavbarPreview } from "@/app/deconstruct/components/heygen/HeyGenNavbarPreview";
import { heygenLogoTickerSource } from "@/app/deconstruct/components/heygen/heygenLogoTicker.source";
import { heygenNavbarSource } from "@/app/deconstruct/components/heygen/heygenNavbar.source";
import { ClerkNavbarPreview } from "@/app/deconstruct/components/clerk/ClerkNavbarPreview";
import { clerkNavbarSource } from "@/app/deconstruct/components/clerk/clerkNavbar.source";

export type DeconstructCodePanelConfig = {
  explorerFolder: string;
  explorerFileName: string;
  editorPath: string;
  language?: string;
};

export type DeconstructBlock = {
  id: string;
  label: string;
  Preview: ComponentType;
  source: string;
  codePanel?: DeconstructCodePanelConfig;
};

export type DeconstructSiteContent = {
  blocks: DeconstructBlock[];
};

const navbarCodePanel = {
  explorerFolder: "Components",
  explorerFileName: "navbar.tsx",
  editorPath: "components/navbar.tsx",
  language: "tsx",
} as const;

export const deconstructSiteContent: Partial<
  Record<DeconstructSiteId, DeconstructSiteContent>
> = {
  stripe: {
    blocks: [
      {
        id: "navbar",
        label: "Navbar",
        Preview: StripeNavbarPreview,
        source: stripeNavbarSource,
        codePanel: navbarCodePanel,
      },
    ],
  },
  linear: {
    blocks: [
      {
        id: "navbar",
        label: "Navbar",
        Preview: LinearNavbarPreview,
        source: linearNavbarSource,
        codePanel: {
          ...navbarCodePanel,
          editorPath: "components/team-01.tsx",
        },
      },
    ],
  },
  vercel: {
    blocks: [
      {
        id: "navbar",
        label: "Navbar",
        Preview: VercelNavbarPreview,
        source: vercelNavbarSource,
        codePanel: navbarCodePanel,
      },
    ],
  },
  cal: {
    blocks: [
      {
        id: "navbar",
        label: "Navbar",
        Preview: CalNavbarPreview,
        source: calNavbarSource,
        codePanel: navbarCodePanel,
      },
    ],
  },
  cursor: {
    blocks: [
      {
        id: "navbar",
        label: "Navbar",
        Preview: CursorNavbarPreview,
        source: cursorNavbarSource,
        codePanel: navbarCodePanel,
      },
    ],
  },
  heygen: {
    blocks: [
      {
        id: "navbar",
        label: "Navbar",
        Preview: HeyGenNavbarPreview,
        source: heygenNavbarSource,
        codePanel: navbarCodePanel,
      },
      {
        id: "logo-ticker",
        label: "Logo ticker",
        Preview: HeyGenLogoTickerPreview,
        source: heygenLogoTickerSource,
        codePanel: {
          explorerFolder: "Components",
          explorerFileName: "logo-ticker.tsx",
          editorPath: "components/logo-ticker.tsx",
          language: "tsx",
        },
      },
    ],
  },
  clerk: {
    blocks: [
      {
        id: "navbar",
        label: "Navbar",
        Preview: ClerkNavbarPreview,
        source: clerkNavbarSource,
        codePanel: navbarCodePanel,
      },
    ],
  },
};

export function getDeconstructSiteContent(
  siteId: DeconstructSiteId,
): DeconstructSiteContent | undefined {
  return deconstructSiteContent[siteId];
}

export function getDeconstructSiteBlocks(
  siteId: DeconstructSiteId,
): DeconstructBlock[] {
  return getDeconstructSiteContent(siteId)?.blocks ?? [];
}
