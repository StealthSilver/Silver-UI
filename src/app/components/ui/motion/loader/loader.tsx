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
      className={cn("relative", className)}
      style={{
        width: containerWidth,
        height: containerHeight,
        perspective: "1000px",
      }}
    >
      {/* Juggling balls */}
      {Array.from({ length: ballCount }).map((_, i) => {
        const animationDelay = (i / ballCount) * 0.6;
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
              x: [startX, 0, endX],
              y: [0, -containerHeight + 20, 0],
              opacity: [1, 1, 1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1], // Parabolic easing
              delay: animationDelay,
            }}
            initial={{
              x: startX,
              y: 0,
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
