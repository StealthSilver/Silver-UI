"use client";

import Link from "next/link";
import GradientBlinds from "../ui/GradientBlinds";
import { GetFullAccessButton } from "../ui/GetFullAccessButton";
import { LandingRailSeparator } from "./LandingRailSeparator";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const heroStats = [
  { href: "/deconstruct", count: "10+", label: "Deconstructions" },
  { href: "/templates", count: "3+", label: "Templates" },
  { href: "/blocks", count: "22+", label: "Blocks" },
  { href: "/#themes", count: "2", label: "Themes" },
] as const;

export const Hero = () => {
  return (
    <section className="relative flex min-h-[76vh] flex-col items-stretch bg-black px-6 pt-8 pb-0 text-center text-white md:pt-10">
      <div className="pointer-events-auto absolute inset-0 z-0 mx-auto w-full max-w-7xl overflow-hidden opacity-55">
        <GradientBlinds
          gradientColors={[
            "#050505",
            "#1a1a1c",
            "#2a2a2a",
            "#bebec3",
            "#c8c8cc",
            "#dcdce1",
          ]}
          angle={45}
          noise={0.05}
          blindCount={14}
          blindMinWidth={50}
          spotlightRadius={0.45}
          spotlightSoftness={1.4}
          spotlightOpacity={0.35}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>

      <div className="pointer-events-none relative z-10 flex min-h-0 w-full flex-1 flex-col">
        <motion.div className="flex min-h-0 flex-1 flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ y: 10, filter: "blur(10px)", opacity: 0 }}
            animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
            className="pointer-events-auto relative z-10 text-6xl py-1 mb-5 font-light font-public-sans shiny-text md:mb-6"
          >
            Not Your Average UI Library
          </motion.h1>

          <motion.p
            initial={{ y: 10, filter: "blur(10px)", opacity: 0 }}
            animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
            className="pointer-events-auto relative z-10 max-w-2xl text-white/60 text-lg mb-10 font-roboto md:mb-12"
          >
            Where all designs looks similar make something different. Use Silver UI
            to build stunning, unique interfaces with ease.
          </motion.p>

          <motion.div
            initial={{ y: 5, filter: "blur(5px)", opacity: 0 }}
            animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5, ease: "easeInOut" }}
            className="pointer-events-auto relative z-10 flex flex-col items-center gap-4 py-3 sm:flex-row"
          >
            <GetFullAccessButton variant="inline" />
            <Link
              href="/components"
              className="group inline-flex w-[220px] items-center justify-center gap-1.5 whitespace-nowrap rounded-none border border-white/15 px-6 py-[11px] text-base font-light leading-6 text-white/80 transition-[background-color,border-color,color] duration-200 hover:border-white/35 hover:bg-white/[0.04] hover:text-white sm:w-[230px] sm:py-[13px] sm:text-[1.0625rem]"
            >
              Browse Components
              <span
                aria-hidden
                className="inline-block transition-transform duration-200 group-hover:translate-x-1"
              >
                &gt;
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 5, filter: "blur(5px)", opacity: 0 }}
          animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.65, ease: "easeInOut" }}
          className="pointer-events-auto relative z-10 mt-auto flex justify-center overflow-x-auto px-4 pb-10 pt-20 sm:px-6 sm:pb-12 sm:pt-24 md:pb-14 md:pt-28"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 py-2 sm:gap-4">
            {heroStats.map(({ href, count, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "group/pill border-dotted-tight relative inline-flex w-[12.5rem] shrink-0 items-center justify-center rounded-none bg-black/90 px-4 py-2.5 text-sm font-light backdrop-blur-[2px] transition-[background-color,color,box-shadow,transform] duration-200",
                  "hover:-translate-y-px hover:bg-white/[0.06] hover:shadow-[0_0_24px_-12px_rgba(255,255,255,0.2)]",
                  "sm:w-[14.5rem] sm:px-5 sm:py-3",
                )}
              >
                <span className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap sm:gap-3">
                  <span
                    aria-hidden
                    className="rounded-none border border-white/25 bg-white/[0.07] px-1 py-px text-[8px] font-light uppercase leading-none tracking-[0.22em] text-white/75 transition-[border-color,color,background-color] duration-200 group-hover/pill:border-white/45 group-hover/pill:bg-white/[0.12] group-hover/pill:text-white sm:text-[9px] sm:px-1.5 sm:py-0.5"
                  >
                    New
                  </span>
                  <span>
                    <span className="text-white/85 transition-colors duration-200 group-hover/pill:text-white">
                      {count}
                    </span>
                    <span className="text-white/55 transition-colors duration-200 group-hover/pill:text-white/75">
                      {" "}
                      {label}
                    </span>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      <LandingRailSeparator id="hero-separator" />
    </section>
  );
};
