"use client";

import Link from "next/link";
import { LandingRailSeparator } from "./LandingRailSeparator";
import { LandingSectionReveal } from "../ui/LandingSectionReveal";

export function Construct() {
  return (
    <section
      id="construct"
      aria-labelledby="construct-heading"
      className="relative bg-black px-6 pt-10 text-white"
    >
      <LandingSectionReveal className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center pb-10">
        <h2
          id="construct-heading"
          className="text-center text-xs uppercase tracking-widest text-white/50 md:text-sm"
        >
          CONSTRUCT
        </h2>

        <div className="mt-8 w-full px-3 sm:px-6 md:px-10">
          <div
            className="flex h-[80vh] w-full flex-col items-center justify-center border border-line bg-gradient-to-r from-[#0a0a0c] via-[#040404] to-[#0a0a0c] px-6 text-center sm:px-10"
            role="region"
            aria-label="Silver UI Construct"
          >
            <p className="max-w-xl font-roboto text-base font-light leading-relaxed text-white/55 md:text-lg">
              Construct is where you assemble production layouts from Silver UI
              blocks and patterns—compose screens faster with a consistent system
              and fewer one-off styles.
            </p>
            <Link
              href="/construct"
              className="group mt-10 inline-flex w-[220px] items-center justify-center gap-1.5 whitespace-nowrap rounded-none border border-white/15 px-6 py-[11px] text-base font-light leading-6 text-white/80 transition-[background-color,border-color,color] duration-200 hover:border-white/35 hover:bg-white/[0.04] hover:text-white sm:mt-12 sm:w-[230px] sm:py-[13px] sm:text-[1.0625rem]"
            >
              Open Construct
              <span
                aria-hidden
                className="inline-block transition-transform duration-200 group-hover:translate-x-1"
              >
                &gt;
              </span>
            </Link>
          </div>
        </div>
      </LandingSectionReveal>

      <LandingRailSeparator id="construct-separator" />
    </section>
  );
}
