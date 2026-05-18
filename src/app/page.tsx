import { Hero } from "./landing/components/sections/Hero";
import { LandingRailSeparator } from "./landing/components/sections/LandingRailSeparator";
import Navbar from "./landing/components/sections/Navbar";
import { Cta } from "./landing/components/sections/Cta";
import {
  FooterBranding,
  FooterLegal,
} from "./landing/components/sections/Footer";
import ThemeShowcase from "@/components/ThemeShowcase";
import { Templates } from "./landing/components/sections/Templates";
import { Lab } from "./landing/components/sections/Lab";
import { Construct } from "./landing/components/sections/Construct";
import { Deconstruct } from "./landing/components/sections/Deconstruct";
import { Pricing } from "./landing/components/sections/Pricing";
export default function Page() {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-screen flex-col overflow-x-clip bg-black">
        <div className="relative">
          <Hero />
          <ThemeShowcase />
          <LandingRailSeparator id="themes-separator" />
          <Templates />
          <LandingRailSeparator id="templates-lab-separator" />
          <Lab />
          <LandingRailSeparator id="lab-separator" />
          <Construct />
          <Deconstruct />
          <Pricing />
          <Cta />
          <FooterBranding />
          {/* Rails fill this host; bottom hairline + squares render after so junction sits above the rails. */}
          <div
            id="landing-page-rails"
            className="pointer-events-none absolute top-0 bottom-0 left-1/2 z-30 w-full max-w-7xl -translate-x-1/2"
            aria-hidden
          >
            <div className="absolute inset-y-0 left-0 w-[0.5px] bg-neutral-400/28" />
            <div className="absolute inset-y-0 right-0 w-[0.5px] bg-neutral-400/28" />
          </div>
          <div className="relative z-40">
            <LandingRailSeparator id="footer-copy-rule" />
          </div>
        </div>
        <FooterLegal />
      </main>
    </>
  );
}
