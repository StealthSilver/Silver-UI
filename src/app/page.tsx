import { Hero } from "./landing/components/sections/Hero";
import { LandingRailSeparator } from "./landing/components/sections/LandingRailSeparator";
import Navbar from "./landing/components/sections/Navbar";
import { Cta } from "./landing/components/sections/Cta";
import { Footer } from "./landing/components/sections/Footer";
import { Themes } from "./landing/components/sections/Themes";
import { Templates } from "./landing/components/sections/Templates";
import { Lab } from "./landing/components/sections/Lab";
import { Construct } from "./landing/components/sections/Construct";
import { Deconstruct } from "./landing/components/sections/Deconstruct";
import { Pricing } from "./landing/components/sections/Pricing";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-x-clip bg-black">
        <Hero />
        <Themes />
        <LandingRailSeparator id="themes-separator" />
        <Templates />
        <LandingRailSeparator id="templates-lab-separator" />
        <Lab />
        <LandingRailSeparator id="lab-separator" />
        <Construct />
        <Deconstruct />
        <Pricing />
        <Cta />
        <Footer />
        {/* Rails in main only; z below sticky nav (z-50) */}
        <div
          id="landing-page-rails"
          className="pointer-events-none absolute left-1/2 top-0 bottom-0 z-30 w-full max-w-7xl -translate-x-1/2"
          aria-hidden
        >
          <div className="absolute bottom-0 left-0 top-0 w-[0.5px] bg-neutral-400/28" />
          <div className="absolute bottom-0 right-0 top-0 w-[0.5px] bg-neutral-400/28" />
        </div>
      </main>
    </>
  );
}
