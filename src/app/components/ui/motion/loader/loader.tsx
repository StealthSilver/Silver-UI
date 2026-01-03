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
  const dotCount = 12;
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const dotSizeClasses = {
    sm: "w-1 h-1",
    md: "w-1.5 h-1.5",
    lg: "w-2 h-2",
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <motion.div
        className={cn("relative", sizeClasses[size])}
        animate={{ rotate: 360 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {Array.from({ length: dotCount }).map((_, i) => {
          const angle = (i / dotCount) * 360;
          const baseRadius = size === "sm" ? 12 : size === "lg" ? 24 : 18;

          return (
            <motion.div
              key={i}
              className={cn(
                "absolute rounded-full",
                "bg-blue-500 shadow-lg shadow-blue-400/50",
                dotSizeClasses[size]
              )}
              style={{
                left: "50%",
                top: "50%",
                translateX: "-50%",
                translateY: "-50%",
              }}
              animate={{
                x: Math.cos((angle * Math.PI) / 180) * baseRadius,
                y: Math.sin((angle * Math.PI) / 180) * baseRadius,
                opacity: [0.2, 1, 0.2],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                x: {
                  duration: 0,
                },
                y: {
                  duration: 0,
                },
                opacity: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (i / dotCount) * 0.5,
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (i / dotCount) * 0.5,
                },
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export function MotionLoaderPreview() {
  return (
    <div className="flex justify-center">
      <MotionLoader />
    </div>
  );
}
