import { Hero } from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";

export default function Page() {
  return (
    <main className="min-h-screen bg-black ">
      <Navbar />
      <Hero />
      <Hero />
    </main>
  );
}
