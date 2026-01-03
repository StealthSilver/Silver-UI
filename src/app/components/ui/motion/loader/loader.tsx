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
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const dotSizeClasses = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-3 h-3",
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        {/* Outer rotating gradient ring */}
        <motion.div
          className={cn(
            "absolute inset-0 rounded-full border-2 border-transparent",
            "bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-border",
            "shadow-lg shadow-blue-500/50"
          )}
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Border mask effect */}
          <div className="absolute inset-0.5 bg-neutral-900 rounded-full" />
          <div className="absolute inset-1 rounded-full border border-gradient-to-r from-blue-400/50 to-purple-400/50" />
        </motion.div>

        {/* Inner pulsing circle */}
        <motion.div
          className={cn(
            "absolute inset-3 rounded-full",
            "bg-gradient-to-br from-blue-500/80 to-purple-600/80",
            "shadow-lg shadow-blue-500/40 backdrop-blur-sm"
          )}
          animate={{
            scale: [0.9, 1.1, 0.9],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Shimmer effect overlay */}
        <motion.div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r from-transparent via-white/20 to-transparent"
          )}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Orbiting dots */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div
              className={cn(
                dotSizeClasses[size],
                "absolute top-0 left-1/2 -translate-x-1/2",
                "bg-gradient-to-b from-blue-400 to-purple-500 rounded-full",
                "shadow-lg shadow-blue-400/60"
              )}
            />
          </motion.div>
        ))}
      </div>
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
