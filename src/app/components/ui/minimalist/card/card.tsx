"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Zap, Sparkles } from "lucide-react";
import { MinimalistButton } from "../button/button";

export interface MinimalistCardProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    | "onDrag"
    | "onDragStart"
    | "onDragEnd"
    | "onAnimationStart"
    | "onAnimationEnd"
    | "onAnimationIteration"
  > {}

export const MinimalistCard = React.forwardRef<
  HTMLDivElement,
  MinimalistCardProps
>(({ className, children, ...props }, ref) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className={cn(
        "relative p-6 rounded-lg border border-neutral-800 bg-neutral-900 transition-all duration-300",
        "hover:border-neutral-700",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div className="space-y-4">
        {/* Icon and Title */}
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <motion.div
              animate={isHovered ? { x: 2 } : { x: 0 }}
              className="flex items-center gap-2"
            >
              <Zap className="w-5 h-5 text-neutral-400" />
              <h3 className="text-lg font-semibold text-white">
                Modern Design
              </h3>
            </motion.div>
          </div>
          <motion.div
            animate={isHovered ? { rotate: 12 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sparkles className="w-5 h-5 text-neutral-500" />
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-sm text-neutral-400 leading-relaxed">
          Clean, minimal design with subtle interactions and modern aesthetics.
        </p>

        {/* Divider */}
        <div className="h-px bg-neutral-800" />

        {/* Button */}
        <div className="pt-2">
          <MinimalistButton className="w-full text-center justify-center">
            Explore
          </MinimalistButton>
        </div>
      </div>
    </motion.div>
  );
});

MinimalistCard.displayName = "MinimalistCard";

export function MinimalistCardPreview() {
  return (
    <div className="flex items-center justify-center py-12 w-full max-w-sm">
      <MinimalistCard />
    </div>
  );
}
