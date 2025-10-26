"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { DottedGlowBackground } from "../ui/DottedGlow";

export const Cta = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center max-w-7xl mx-auto px-6 py-20 bg-black text-white overflow-hidden">
      <DottedGlowBackground
        className="absolute inset-0 pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-10 sm:opacity-20 dark:opacity-80"
        opacity={1}
        gap={4}
        radius={1.2}
        colorLightVar="--color-neutral-600"
        glowColorLightVar="--color-neutral-300"
        colorDarkVar="--color-neutral-400"
        glowColorDarkVar="--color-neutral-100"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={0.9}
        speedScale={1}
      />
      <motion.h1
        initial={{ y: 10, filter: "blur(10px)", opacity: 0 }}
        animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
        className="text-5xl py-2 mb-10 font-medium font-public-sans shiny-text"
      >
        Design Seamlessly
        <br />
        Build Faster.
      </motion.h1>

      <motion.p
        initial={{ y: 10, filter: "blur(10px)", opacity: 0 }}
        animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
        className="max-w-2xl text-gray-400 text-m mb-10 font-roboto"
      >
        Elevate your projects with Silver UI - the ultimate React component
        library designed for modern developers who value both aesthetics and
        functionality.
      </motion.p>

      <motion.div
        initial={{ y: 5, filter: "blur(5px)", opacity: 0 }}
        animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5, ease: "easeInOut" }}
        className="flex justify-center"
      >
        <Link
          href="/components"
          className="px-6 py-3 bg-[#0070a8] text-white rounded-xl transition-all duration-300 hover:bg-[#008fd7] relative overflow-hidden group"
        >
          <span className="relative z-10">Browse Components</span>
          <div className="absolute inset-0 bg-[#0298e3] rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-md scale-110 -z-10"></div>
        </Link>
      </motion.div>
    </section>
  );
};
