import type { Metadata } from "next";
import MarketingShell from "@/app/landing/components/sections/MarketingShell";

export const metadata: Metadata = {
  title: "Templates",
  description:
    "Full-page templates built with Silver UI—starting points for dashboards, marketing sites, and apps.",
};

export default function TemplatesPage() {
  return (
    <MarketingShell
      title="Templates"
      description="Opinionated page templates to ship sooner. Customize themes and content while keeping the Silver UI aesthetic."
    />
  );
}
