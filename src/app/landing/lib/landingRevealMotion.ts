import type { Transition } from "motion/react";

/** Matches Hero headline blocks: blur lift-in, easeInOut. */
export const landingRevealInitial = {
  y: 10,
  filter: "blur(10px)",
  opacity: 0,
} as const;

export const landingRevealAnimate = {
  y: 0,
  filter: "blur(0px)",
  opacity: 1,
} as const;

export const landingRevealViewport = {
  once: true,
  margin: "0px 0px -12% 0px",
} as const;

export function landingRevealTransition(
  options?: Partial<Pick<Transition, "delay" | "duration">>,
): Transition {
  return {
    duration: options?.duration ?? 0.5,
    delay: options?.delay ?? 0,
    ease: "easeInOut",
  };
}
