"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowRight, Zap, Sparkles } from "lucide-react";

export interface MinimalistCardProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    | "onDrag"
    | "onDragStart"
    | "onDragEnd"
    | "onAnimationStart"
    | "onAnimationEnd"
    | "onAnimationIteration"
  > {
  hover?: boolean;
  accent?: boolean;
}

export const MinimalistCard = React.forwardRef<
  HTMLDivElement,
  MinimalistCardProps
>(({ className, hover = true, accent = false, children, ...props }, ref) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -4 } : {}}
      className={cn(
        "relative p-8 rounded-lg border border-gray-200 bg-white transition-all duration-300",
        "dark:border-gray-800 dark:bg-gray-900",
        hover && "hover:border-gray-400 dark:hover:border-gray-700",
        accent &&
          "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div className="space-y-6">
        {/* Header Section */}
        <div className="space-y-4">
          <motion.div
            animate={isHovered ? { x: 4 } : { x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300" />
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
              Featured
            </span>
          </motion.div>

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight leading-tight">
            Minimalist Design Essence
          </h3>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            Elegant simplicity meets functional design. Clean surfaces,
            deliberate spacing, and refined typography create an interface that
            speaks through restraint.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-transparent dark:from-gray-700 dark:via-gray-600 dark:to-transparent" />

        {/* Footer Section */}
        <motion.div
          animate={isHovered ? { x: 4 } : { x: 0 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs font-medium">
              <Zap className="w-4 h-4" />
              <span>Zero Clutter</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Pure Focus</span>
            </div>
          </div>

          <motion.button
            whileHover={{ x: 6 }}
            className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-sm font-medium"
          >
            <span>Explore</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>

      {/* Subtle Border Animation on Hover */}
      {hover && (
        <motion.div
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            boxShadow:
              "inset 0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        />
      )}
    </motion.div>
  );
});

MinimalistCard.displayName = "MinimalistCard";

export function MinimalistCardPreview() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
          Standard Card
        </h3>
        <MinimalistCard />
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
          Accent Card
        </h3>
        <MinimalistCard accent />
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
          Card Grid
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MinimalistCard />
          <MinimalistCard accent />
        </div>
      </div>
    </div>
  );
}
