import type { Metadata } from "next";
import MarketingShell from "@/app/landing/components/sections/MarketingShell";

export const metadata: Metadata = {
  title: "Construct",
  description:
    "Construct with Silver UI—plan and assemble interfaces from primitives, blocks, and templates.",
};

export default function ConstructPage() {
  return (
    <MarketingShell
      title="Construct"
      description="Your build surface for Silver UI: combine pieces, tune themes, and shape layouts without losing cohesion."
    />
  );
}
