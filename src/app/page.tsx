import { Hero } from "./landing/components/sections/Hero";
import Navbar from "./landing/components/sections/Navbar";
import { Cta } from "./landing/components/sections/Cta";
import { Footer } from "./landing/components/sections/Footer";
import { Features } from "./landing/components/sections/Features";
import { About } from "./landing/components/sections/About";

export default function Page() {
  return (
    <main className="min-h-screen bg-black ">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Cta />
      <Footer />
    </main>
  );
}
