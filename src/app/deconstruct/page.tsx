import type { Metadata } from "next";
import MarketingShell from "@/app/landing/components/sections/MarketingShell";

export const metadata: Metadata = {
  title: "Deconstruct",
  description:
    "Break down how other sites are built—components, layout, and patterns—on Silver UI’s Deconstruct.",
};

export default function DeconstructPage() {
  return (
    <MarketingShell
      title="Deconstruct"
      description="A dedicated space to take apart interfaces from around the web: structure, components, and craft—so you can learn from real products, not screenshots alone."
    />
  );
}
