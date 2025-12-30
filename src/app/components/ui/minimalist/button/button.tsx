"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    | "onDrag"
    | "onDragStart"
    | "onDragEnd"
    | "onAnimationStart"
    | "onAnimationEnd"
    | "onAnimationIteration"
  > {
  children?: React.ReactNode;
}

export const MinimalistButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ children, className, disabled, ...props }, ref) => {
  const baseStyles =
    "relative inline-flex items-center justify-center font-medium transition-colors duration-200 px-6 py-3 text-base rounded-lg bg-neutral-950 text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:ring-offset-1 focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <motion.button
      ref={ref}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.01 }}
      whileTap={{ scale: disabled ? 1 : 0.99 }}
      className={cn(baseStyles, className)}
      {...props}
    >
      {children}
    </motion.button>
  );
});

MinimalistButton.displayName = "MinimalistButton";

export function MinimalistButtonPreview() {
  return (
    <div className="flex items-center justify-center py-12">
      <MinimalistButton>Get Started</MinimalistButton>
    </div>
  );
}
