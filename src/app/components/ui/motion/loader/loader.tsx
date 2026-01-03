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

  const innerSizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <motion.div
        className={cn(
          "relative rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/50",
          sizeClasses[size]
        )}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8],
          boxShadow: [
            "0 0 20px 0 rgba(59, 130, 246, 0.5)",
            "0 0 40px 0 rgba(59, 130, 246, 0.8)",
            "0 0 20px 0 rgba(59, 130, 246, 0.5)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className={cn(
            "absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-500",
            innerSizeClasses[size]
          )}
          style={{
            top: "50%",
            left: "50%",
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            scale: [0.6, 0.8, 0.6],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export function MotionLoaderPreview() {
  return (
    <div className="flex items-center justify-center gap-12 py-12">
      <div className="flex flex-col items-center gap-2">
        <MotionLoader size="sm" />
        <span className="text-xs text-gray-500">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <MotionLoader size="md" />
        <span className="text-xs text-gray-500">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <MotionLoader size="lg" />
        <span className="text-xs text-gray-500">Large</span>
      </div>
    </div>
  );
}
