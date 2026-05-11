"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const LOGO_DARK = "/Logos/silverui-d.svg";
const LOGO_LIGHT = "/Logos/silverui-l.svg";

export const PAGE_LOADER_EXIT_DURATION_MS = 760;

type PageLoaderProps = {
  phase: "running" | "exiting";
  /** 0–100; may be fractional for smooth lerp to match the fill. */
  progress: number;
  onExitComplete: () => void;
  exitDurationMs?: number;
};

export function PageLoader({
  phase,
  progress,
  onExitComplete,
  exitDurationMs = PAGE_LOADER_EXIT_DURATION_MS,
}: PageLoaderProps) {
  const reduceMotion = useReducedMotion();
  const didReportExit = useRef(false);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prev = {
      htmlOverflow: html.style.overflow,
      htmlScrollbarGutter: html.style.scrollbarGutter,
      bodyOverflow: body.style.overflow,
    };
    html.style.overflow = "hidden";
    html.style.scrollbarGutter = "auto";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prev.htmlOverflow;
      html.style.scrollbarGutter = prev.htmlScrollbarGutter;
      body.style.overflow = prev.bodyOverflow;
    };
  }, []);

  const pctRounded = Math.min(100, Math.round(progress));
  const fillUnit = Math.min(1, Math.max(0, progress / 100));

  return (
    <motion.div
      className={cn(
        "fixed inset-0 z-[240] flex w-full max-w-none flex-col overflow-hidden bg-black",
        /** Full dynamic viewport — avoids resting too high/low when mobile chrome shows/hides. */
        "min-h-screen min-h-[100dvh]",
        /** Safe-area aware padding then center bundle (horizontal balance keeps true screen center). */
        "justify-center pb-[calc(env(safe-area-inset-bottom,0px)+0.5rem)] pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pt-[calc(env(safe-area-inset-top,0px)+0.5rem)]",
        "items-center",
      )}
      role="progressbar"
      aria-label="Loading Silver Studios"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={pctRounded}
      aria-valuetext={`${pctRounded} percent`}
      aria-busy={phase === "running"}
      initial={false}
      animate={phase === "exiting" ? { y: "-100%" } : { y: 0 }}
      transition={{
        duration: exitDurationMs / 1000,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={() => {
        if (phase !== "exiting" || didReportExit.current) return;
        didReportExit.current = true;
        onExitComplete();
      }}
      style={{ willChange: "transform" }}
    >
      {/* Silver top spotlight — matches hero chrome / shiny-text energy */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 z-[1]",
          "bg-[radial-gradient(ellipse_95%_52%_at_50%_-12%,rgb(220_220_225_/_0.38)_0%,rgb(200_200_206_/_0.22)_28%,rgb(190_190_195_/_0.08)_48%,transparent_62%)]",
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 z-[1]",
          "bg-[radial-gradient(ellipse_70%_38%_at_50%_0%,rgb(240_240_243_/_0.12)_0%,transparent_52%)]",
          "mix-blend-screen opacity-80",
        )}
      />

      {/* Soft floor falloff — hero-adjacent neutrals */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_120%_85%_at_50%_100%,rgb(26_26_28_/_0.55)_0%,transparent_55%)] opacity-90"
      />

      <div className="relative z-10 flex w-full max-w-[min(20rem,calc(100vw-2rem))] flex-col items-center gap-9 max-[380px]:gap-8 sm:w-auto sm:max-w-none sm:gap-12">
        <motion.div
          className={cn(
            "relative size-[clamp(5rem,38vw,5.75rem)] sm:size-[6.75rem] md:size-[7.5rem]",
          )}
          initial={false}
          animate={
            phase === "running" && reduceMotion !== true
              ? { scale: [1, 1.04, 1], opacity: [0.92, 1, 0.92] }
              : { scale: 1, opacity: 1 }
          }
          transition={{
            duration: 2.8,
            repeat: phase === "running" && reduceMotion !== true ? Infinity : 0,
            ease: "easeInOut",
          }}
        >
          <Image
            src={LOGO_LIGHT}
            alt=""
            width={216}
            height={216}
            priority
            className="size-full object-contain dark:hidden"
          />
          <Image
            src={LOGO_DARK}
            alt=""
            width={216}
            height={216}
            priority
            className="hidden size-full object-contain dark:block"
          />
        </motion.div>

        <div className="flex w-full max-w-[min(18.5rem,calc(100vw-2.75rem))] flex-col gap-3.5 max-[380px]:max-w-[min(17rem,calc(100vw-2.25rem))] sm:w-[min(18.5rem,82vw)] sm:gap-4">
          <div
            className={cn(
              "relative h-[4px] w-full overflow-hidden rounded-full sm:h-[5px]",
              "bg-muted/55 shadow-inner ring-1 ring-border/55",
              "dark:bg-muted/35 dark:ring-border/40",
            )}
            aria-hidden
          >
            <div
              className={cn(
                "pointer-events-none absolute inset-y-0 left-0 w-full origin-left rounded-full",
                "bg-gradient-to-r from-primary via-primary to-primary/80",
                "shadow-[0_0_20px_color-mix(in_oklch,var(--primary)_30%,transparent)]",
                "dark:from-white dark:via-white dark:to-white/75",
                "dark:shadow-[0_0_22px_rgb(255_255_255_/_0.16)]",
              )}
              style={{ transform: `scaleX(${fillUnit})` }}
            />
          </div>
          <p className="text-center text-[0.6875rem] font-semibold tabular-nums tracking-[0.28em] text-muted-foreground uppercase max-[380px]:text-[0.625rem] max-[380px]:tracking-[0.24em] sm:text-xs sm:tracking-[0.32em]">
            <span className="text-foreground">{pctRounded}</span>
            <span className="opacity-70">%</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
