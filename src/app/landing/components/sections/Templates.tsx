"use client";

import Link from "next/link";
import { LandingSectionReveal } from "../ui/LandingSectionReveal";
import { TemplatesScrollShowcase } from "../templates-scroll/TemplatesScrollShowcase";

export function Templates() {
  return (
    <section
      id="templates"
      aria-labelledby="templates-heading"
      className="relative bg-black px-6 py-14 text-white md:py-16"
    >
      <LandingSectionReveal className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center">
        <h2
          id="templates-heading"
          className="text-center text-xs uppercase tracking-widest text-white/50 md:text-sm"
        >
          TEMPLATES
        </h2>

        <div className="mt-10 w-full px-3 sm:mt-12 sm:px-6 md:px-10">
          <TemplatesScrollShowcase />

          <div className="mt-12 flex justify-center sm:mt-14">
            <Link
              href="/templates"
              className="group inline-flex w-[220px] items-center justify-center gap-1.5 whitespace-nowrap rounded-none border border-white/15 px-6 py-[11px] text-base font-light leading-6 text-white/80 transition-[background-color,border-color,color] duration-200 hover:border-white/35 hover:bg-white/[0.04] hover:text-white sm:w-[230px] sm:py-[13px] sm:text-[1.0625rem]"
            >
              Browse templates
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
    </section>
  );
}
