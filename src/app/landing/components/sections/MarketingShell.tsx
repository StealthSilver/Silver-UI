import Navbar from "./Navbar";
import { MarketingSubpageHero } from "./MarketingSubpageHero";

type MarketingShellProps = {
  title: string;
  description: string;
};

export default function MarketingShell({
  title,
  description,
}: MarketingShellProps) {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black">
      <Navbar />
      <MarketingSubpageHero title={title} description={description} />
      <div
        className="pointer-events-none absolute top-14 bottom-0 left-1/2 z-30 w-full max-w-7xl -translate-x-1/2"
        aria-hidden
      >
        <div className="absolute bottom-0 left-0 top-0 w-[0.5px] bg-neutral-400/28" />
        <div className="absolute bottom-0 right-0 top-0 w-[0.5px] bg-neutral-400/28" />
      </div>
    </main>
  );
}
