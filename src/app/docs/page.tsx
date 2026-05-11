import type { Metadata } from "next";
import MarketingShell from "@/app/landing/components/sections/MarketingShell";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Silver UI documentation—installation, usage, theming, and API notes for components and patterns.",
};

export default function DocsPage() {
  return (
    <MarketingShell
      title="Docs"
      description="Guides and reference for using Silver UI in your stack. Installation, theming, and component usage in one place."
    />
  );
}
