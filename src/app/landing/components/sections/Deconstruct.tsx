"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { LandingRailSeparator } from "./LandingRailSeparator";
import { LandingSectionReveal } from "../ui/LandingSectionReveal";
import { DeconstructBrandConstellation } from "../deconstruct/DeconstructBrandConstellation";
import {
  landingRevealAnimate,
  landingRevealInitial,
  landingRevealTransition,
  landingRevealViewport,
} from "@/app/landing/lib/landingRevealMotion";

const ctaClass =
  "group inline-flex w-[220px] items-center justify-center gap-1.5 whitespace-nowrap rounded-none border border-white/15 px-6 py-[11px] text-base font-light leading-6 text-white/80 transition-[background-color,border-color,color] duration-200 hover:border-white/35 hover:bg-white/[0.04] hover:text-white sm:w-[230px] sm:py-[13px] sm:text-[1.0625rem]";

export function Deconstruct() {
  return (
    <section
      id="deconstruct"
      aria-labelledby="deconstruct-heading"
      className="relative bg-black px-6 pt-10 text-white"
    >
      <LandingSectionReveal className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center pb-10">
        <h2
          id="deconstruct-heading"
          className="text-center text-xs uppercase tracking-widest text-white/50 md:text-sm"
        >
          DECONSTRUCT
        </h2>

        <motion.h3
          initial={landingRevealInitial}
          whileInView={landingRevealAnimate}
          transition={landingRevealTransition({ duration: 0.5, delay: 0.06 })}
          viewport={landingRevealViewport}
          className="mt-8 max-w-3xl px-2 text-center font-public-sans text-3xl font-light leading-tight tracking-tight shiny-text sm:text-4xl md:text-[2.35rem]"
        >
          We break down the best-designed pages on the internet—component by
          component.
        </motion.h3>

        <motion.p
          initial={landingRevealInitial}
          whileInView={landingRevealAnimate}
          transition={landingRevealTransition({ duration: 0.45, delay: 0.12 })}
          viewport={landingRevealViewport}
          className="mt-5 max-w-2xl px-2 text-center font-roboto text-base font-light leading-relaxed text-white/55 md:text-lg"
        >
          Reverse-engineer navbars, tickers, and UI patterns from the teams
          behind Stripe, Linear, Vercel, and more. Study structure, tokens, and
          production Tailwind implementations—not just screenshots.
        </motion.p>

        <motion.div
          initial={landingRevealInitial}
          whileInView={landingRevealAnimate}
          transition={landingRevealTransition({ duration: 0.5, delay: 0.08 })}
          viewport={landingRevealViewport}
          className="mt-8 w-full px-3 sm:mt-10 sm:px-6 md:px-10"
        >
          <motion.div
            className="relative flex min-h-[min(80vh,52rem)] w-full flex-col items-center justify-center overflow-hidden border border-line bg-gradient-to-r from-[#0a0a0c] via-[#040404] to-[#0a0a0c] px-4 py-12 text-center sm:px-8 sm:py-14 md:px-10 md:py-16"
            role="region"
            aria-label="Silver UI Deconstruct"
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(255,255,255,0.04)_0%,transparent_55%)]"
              aria-hidden
            />

            <div className="relative z-10 flex w-full flex-col items-center gap-10 lg:gap-12">
              <DeconstructBrandConstellation />

              <motion.div
                initial={landingRevealInitial}
                whileInView={landingRevealAnimate}
                transition={landingRevealTransition({ duration: 0.4, delay: 0.2 })}
                viewport={landingRevealViewport}
              >
                <Link href="/deconstruct" className={ctaClass}>
                  Explore Deconstructions
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                  >
                    &gt;
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </LandingSectionReveal>

      <LandingRailSeparator id="deconstruct-separator" />
    </section>
  );
}
