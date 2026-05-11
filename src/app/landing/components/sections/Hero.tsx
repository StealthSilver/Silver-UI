"use client";

import Link from "next/link";
import GradientBlinds from "../ui/GradientBlinds";
import TechStackSection from "../ui/TechStackSection";
import { GetFullAccessButton } from "../ui/GetFullAccessButton";
import { motion } from "motion/react";

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

      <div className="pointer-events-none relative z-10 flex min-h-0 w-full flex-1 flex-col items-center justify-center">
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
          className="pointer-events-auto relative z-10 flex flex-col sm:flex-row items-center gap-4 py-3 mb-16 md:mb-20"
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

        <motion.div
          initial={{ y: 10, filter: "blur(10px)", opacity: 0 }}
          animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7, ease: "easeInOut" }}
          className="pointer-events-auto relative z-10 w-full"
        >
          <TechStackSection />
        </motion.div>
      </div>

      <div
        id="hero-separator"
        className="pointer-events-none relative left-1/2 z-20 h-px w-screen max-w-none shrink-0 -translate-x-1/2 bg-line"
        aria-hidden
      />
    </section>
  );
};
