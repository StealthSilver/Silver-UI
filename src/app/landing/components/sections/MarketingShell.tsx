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
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-x-clip bg-black">
        <MarketingSubpageHero title={title} description={description} />
        <div
          className="pointer-events-none absolute top-0 bottom-0 left-1/2 z-30 w-full max-w-7xl -translate-x-1/2"
          aria-hidden
        >
          <div className="absolute bottom-0 left-0 top-0 w-[0.5px] bg-neutral-400/28" />
          <div className="absolute bottom-0 right-0 top-0 w-[0.5px] bg-neutral-400/28" />
        </div>
      </main>
    </>
  );
}
