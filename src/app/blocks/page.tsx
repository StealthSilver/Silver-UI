import type { Metadata } from "next";
import MarketingShell from "@/app/landing/components/sections/MarketingShell";

export const metadata: Metadata = {
  title: "Blocks",
  description:
    "Pre-built layout blocks for Silver UI—compose pages faster with consistent structure and polish.",
};

export default function BlocksPage() {
  return (
    <MarketingShell
      title="Blocks"
      description="Ready-made layout blocks you can drop into your product. Same Silver UI look, less assembly time."
    />
  );
}
