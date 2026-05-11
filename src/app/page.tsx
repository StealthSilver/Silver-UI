import { Hero } from "./landing/components/sections/Hero";
import { HeroRailIntersectionSquares } from "./landing/components/sections/HeroRailIntersectionSquares";
import Navbar from "./landing/components/sections/Navbar";
import { Cta } from "./landing/components/sections/Cta";
import { Footer } from "./landing/components/sections/Footer";
import { Features } from "./landing/components/sections/Features";
import { About } from "./landing/components/sections/About";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-x-clip bg-black">
        <Hero />
        <About />
        <Features />
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
          <HeroRailIntersectionSquares />
        </div>
      </main>
    </>
  );
}
