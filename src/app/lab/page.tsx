import type { Metadata } from "next";
import MarketingShell from "@/app/landing/components/sections/MarketingShell";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Experiments and previews from the Silver UI lab—try new patterns before they land in the library.",
};

export default function LabPage() {
  return (
    <MarketingShell
      title="Lab"
      description="A playground for ideas in progress. Explore experimental components and visual directions here first."
    />
  );
}
