"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface MinimalistSwitchProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    | "type"
    | "onDrag"
    | "onDragStart"
    | "onDragEnd"
    | "onAnimationStart"
    | "onAnimationEnd"
    | "onAnimationIteration"
    | "size"
  > {
  disabled?: boolean;
}

export const MinimalistSwitch = React.forwardRef<
  HTMLInputElement,
  MinimalistSwitchProps
>(({ className, disabled = false, ...props }, ref) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <motion.div
      onClick={() => !disabled && setIsOn(!isOn)}
      className={cn(
        "relative w-14 h-7 rounded-full cursor-pointer transition-all duration-300",
        isOn ? "bg-neutral-700" : "bg-neutral-800",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      role="switch"
      aria-checked={isOn}
      tabIndex={disabled ? -1 : 0}
      onKeyDown={(e) => {
        if (!disabled && (e.key === "Enter" || e.key === " ")) {
          setIsOn(!isOn);
        }
      }}
    >
      <motion.div
        animate={{ x: isOn ? 28 : 4 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-1 w-5 h-5 rounded-full bg-white transition-all duration-300"
      />
    </motion.div>
  );
});

MinimalistSwitch.displayName = "MinimalistSwitch";

export function MinimalistSwitchPreview() {
  return (
    <div className="flex items-center justify-center py-12">
      <MinimalistSwitch />
    </div>
  );
}
