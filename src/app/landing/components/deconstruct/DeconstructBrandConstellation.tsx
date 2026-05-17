"use client";

import type { ComponentType } from "react";
import { ScanSearch } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  landingRevealAnimate,
  landingRevealInitial,
  landingRevealTransition,
  landingRevealViewport,
} from "@/app/landing/lib/landingRevealMotion";
import {
  CalBrandLogo,
  ClerkBrandLogo,
  CursorBrandLogo,
  HeyGenBrandLogo,
  LinearBrandLogo,
  StripeBrandLogo,
  VercelBrandLogo,
} from "./deconstructBrandLogos";

type BrandNode = {
  id: string;
  label: string;
  Logo: ComponentType<{ className?: string }>;
  x: number;
  y: number;
  floatOffset: number;
};

const BRAND_NODES: BrandNode[] = [
  { id: "stripe", label: "Stripe", Logo: StripeBrandLogo, x: 50, y: 7, floatOffset: -4 },
  { id: "linear", label: "Linear", Logo: LinearBrandLogo, x: 86, y: 20, floatOffset: 4 },
  { id: "vercel", label: "Vercel", Logo: VercelBrandLogo, x: 93, y: 50, floatOffset: -3 },
  { id: "cal", label: "Cal.com", Logo: CalBrandLogo, x: 74, y: 88, floatOffset: 4 },
  { id: "cursor", label: "Cursor", Logo: CursorBrandLogo, x: 26, y: 88, floatOffset: -4 },
  { id: "heygen", label: "HeyGen", Logo: HeyGenBrandLogo, x: 7, y: 50, floatOffset: 3 },
  { id: "clerk", label: "Clerk", Logo: ClerkBrandLogo, x: 14, y: 20, floatOffset: -3 },
];

const cardClass = cn(
  "flex flex-col items-center justify-center gap-1.5 border border-line bg-white/[0.02] px-3 py-2.5 sm:px-3.5 sm:py-3",
  "shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_0_28px_rgba(255,255,255,0.04)]",
  "transition-[border-color,background-color,box-shadow] duration-200",
  "hover:border-white/22 hover:bg-white/[0.05] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_36px_rgba(255,255,255,0.08)]",
);

export function DeconstructBrandConstellation() {
  return (
    <motion.div
      initial={landingRevealInitial}
      whileInView={landingRevealAnimate}
      transition={landingRevealTransition({ duration: 0.55, delay: 0.12 })}
      viewport={landingRevealViewport}
      className="relative mx-auto w-full max-w-[440px] px-2 sm:max-w-[480px]"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-[12%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07)_0%,transparent_68%)]"
        animate={{ opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative aspect-square w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={landingRevealTransition({ duration: 0.5, delay: 0.1 })}
        viewport={landingRevealViewport}
      >
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full text-white/10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          {BRAND_NODES.map((node) => (
            <line
              key={node.id}
              x1="50"
              y1="50"
              x2={node.x}
              y2={node.y}
              stroke="currentColor"
              strokeWidth="0.35"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          <circle
            cx="50"
            cy="50"
            r="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.25"
            strokeDasharray="1.5 2"
            opacity="0.65"
          />
        </svg>

        <motion.div
          className="absolute left-1/2 top-1/2 z-10 flex h-[4.75rem] w-[4.75rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/80 shadow-[0_0_40px_rgba(255,255,255,0.06)] backdrop-blur-sm sm:h-[5.25rem] sm:w-[5.25rem]"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute inset-0 rounded-full border border-white/10" />
            <span className="absolute h-3 w-3 border border-white/25" />
            <ScanSearch
              className="relative size-7 text-white/80 sm:size-8"
              strokeWidth={1.25}
            />
          </div>
        </motion.div>

        {BRAND_NODES.map((node, index) => (
          <motion.div
            key={node.id}
            className="absolute z-20 w-[5.5rem] -translate-x-1/2 -translate-y-1/2 sm:w-[6rem]"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            initial={landingRevealInitial}
            whileInView={landingRevealAnimate}
            transition={landingRevealTransition({
              duration: 0.45,
              delay: 0.08 + index * 0.05,
            })}
            viewport={landingRevealViewport}
          >
            <motion.div
              className={cardClass}
              animate={{ y: [0, node.floatOffset, 0] }}
              transition={{
                duration: 4.5 + index * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
              whileHover={{ scale: 1.04 }}
            >
              <node.Logo />
              <span className="font-roboto text-[7px] font-light uppercase tracking-[0.1em] text-white/40 sm:text-[8px]">
                {node.label}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
