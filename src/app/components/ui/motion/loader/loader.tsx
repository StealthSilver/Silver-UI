"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface MotionLoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const MotionLoader: React.FC<MotionLoaderProps> = ({
  size = "md",
  className,
}) => {
  const ballCount = 5;
  const containerWidth = size === "sm" ? 120 : size === "lg" ? 200 : 160;
  const containerHeight = size === "sm" ? 80 : size === "lg" ? 140 : 110;
  const ballSize = size === "sm" ? 6 : size === "lg" ? 12 : 10;

  const colors = [
    "from-blue-500 to-blue-600",
    "from-blue-400 to-blue-500",
    "from-blue-500 to-blue-600",
    "from-blue-400 to-blue-500",
    "from-blue-500 to-blue-600",
  ];

  return (
    <div
      className={cn("relative flex items-center justify-center", className)}
      style={{
        width: containerWidth,
        height: containerHeight,
        perspective: "1000px",
      }}
    >
      {/* Bouncing balls */}
      {Array.from({ length: ballCount }).map((_, i) => {
        const animationDelay = (i / ballCount) * 0.4;
        const startX = -containerWidth / 2;
        const endX = containerWidth / 2;

        return (
          <motion.div
            key={i}
            className={cn("absolute rounded-full bg-gradient-to-br", colors[i])}
            style={{
              width: ballSize,
              height: ballSize,
              boxShadow: `0 0 12px rgba(59, 130, 246, 0.6), inset -1px -1px 3px rgba(0, 0, 0, 0.3)`,
            }}
            animate={{
              x: [startX, endX, startX],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: animationDelay,
              times: [0, 0.5, 1],
            }}
            initial={{
              x: startX,
            }}
          />
        );
      })}
    </div>
  );
};

export function MotionLoaderPreview() {
  return (
    <div className="flex items-center justify-center py-12">
      <MotionLoader size="md" />
    </div>
  );
}
