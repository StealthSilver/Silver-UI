"use client";

import { cn } from "@/lib/utils";
import GradientBlinds from "../ui/GradientBlinds";
import { motion } from "motion/react";
type MarketingSubpageHeroProps = {
  title: string;
  description: string;
  /** When true, hero fills the shell content column (no extra horizontal padding). */
  insetContent?: boolean;
};

export function MarketingSubpageHero({
  title,
  description,
  insetContent = false,
}: MarketingSubpageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100dvh-4.5rem)] flex-col items-center justify-center overflow-hidden bg-black py-16 text-center text-white md:py-20",
        !insetContent && "px-6",
      )}
    >
      <div className="absolute inset-0 z-0 w-full opacity-55" aria-hidden>
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

      <motion.h1
        initial={{ y: 10, filter: "blur(10px)", opacity: 0 }}
        animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
        className="relative z-10 max-w-4xl px-2 py-2 text-5xl font-light font-public-sans shiny-text sm:text-6xl"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ y: 10, filter: "blur(10px)", opacity: 0 }}
        animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
        className="relative z-10 mt-8 max-w-2xl text-lg font-roboto text-white/60"
      >
        {description}
      </motion.p>
    </section>
  );
}
