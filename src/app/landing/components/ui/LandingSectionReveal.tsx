"use client";

import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import {
  landingRevealAnimate,
  landingRevealInitial,
  landingRevealTransition,
  landingRevealViewport,
} from "@/app/landing/lib/landingRevealMotion";

type LandingSectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
} & Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport">;

export function LandingSectionReveal({
  children,
  className,
  delay = 0,
  duration = 0.5,
  ...rest
}: LandingSectionRevealProps) {
  return (
    <motion.div
      className={className}
      initial={landingRevealInitial}
      whileInView={landingRevealAnimate}
      transition={landingRevealTransition({ delay, duration })}
      viewport={landingRevealViewport}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
