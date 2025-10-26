import { Hero } from "./landing/components/sections/Hero";
import Navbar from "./landing/components/sections/Navbar";
import { Cta } from "./landing/components/sections/Cta";
import { Footer } from "./landing/components/sections/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-black ">
      <Navbar />
      <Hero />
      <Cta />
      <Footer />
    </main>
  );
}
