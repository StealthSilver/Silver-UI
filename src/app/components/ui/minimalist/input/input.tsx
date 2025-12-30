"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface MinimalistInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    | "onDrag"
    | "onDragStart"
    | "onDragEnd"
    | "onAnimationStart"
    | "onAnimationEnd"
    | "onAnimationIteration"
    | "size"
  > {
  icon?: React.ReactNode;
}

export const MinimalistInput = React.forwardRef<
  HTMLInputElement,
  MinimalistInputProps
>(({ className, type = "text", icon, disabled = false, ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div className="w-full">
      <div className="relative group">
        <motion.input
          ref={ref}
          type={type}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          className={cn(
            "w-full bg-neutral-900 text-white placeholder-neutral-500",
            "transition-all duration-200 rounded-lg border border-neutral-800",
            "px-4 py-3 text-base font-medium",
            "focus:outline-none focus:border-neutral-700 focus:ring-1 focus:ring-neutral-700",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            className
          )}
          {...props}
        />
      </div>
    </motion.div>
  );
});

MinimalistInput.displayName = "MinimalistInput";

export function MinimalistInputPreview() {
  return (
    <div className="flex items-center justify-center py-12 w-full max-w-md">
      <MinimalistInput placeholder="Enter text..." />
    </div>
  );
}
