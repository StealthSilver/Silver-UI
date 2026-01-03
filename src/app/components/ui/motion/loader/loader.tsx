"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface MotionLoaderProps {
  size?: "sm" | "md" | "lg";
  variant?: "spinner" | "pulse" | "gradient";
  className?: string;
}

export const MotionLoader: React.FC<MotionLoaderProps> = ({
  size = "md",
  variant = "spinner",
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

  if (variant === "pulse") {
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
  }

  if (variant === "gradient") {
    return (
      <div className={cn("flex items-center justify-center", className)}>
        <motion.div
          className={cn(
            "relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-full p-1",
            sizeClasses[size]
          )}
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className={cn(
              "absolute inset-0 rounded-full bg-neutral-900 shadow-inner",
              "m-1"
            )}
          />
          <motion.div
            className="absolute inset-1 rounded-full bg-gradient-to-r from-blue-500/20 to-transparent"
            animate={{
              rotateZ: [-180, 180],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <motion.div
        className={cn("relative", sizeClasses[size])}
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Outer ring with gradient */}
        <svg
          className="w-full h-full"
          viewBox="0 0 48 48"
          style={{ filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))" }}
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
          </defs>
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="3"
            strokeDasharray="80"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>

        {/* Inner pulsing element */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="rounded-full bg-gradient-to-br from-blue-500 to-blue-600"
            style={{
              width: size === "sm" ? "8px" : size === "lg" ? "16px" : "12px",
              height: size === "sm" ? "8px" : size === "lg" ? "16px" : "12px",
              boxShadow: "0 0 12px rgba(59, 130, 246, 0.6)",
            }}
          />
        </motion.div>

        {/* Orbiting dot */}
        <motion.div
          className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full"
          style={{
            left: "50%",
            top: "2px",
            translateX: "-50%",
            boxShadow: "0 0 8px rgba(96, 165, 250, 0.8)",
          }}
          animate={{ rotate: -360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  );
};

export function MotionLoaderPreview() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 py-12">
      <div className="flex gap-8">
        <div className="flex flex-col items-center gap-2">
          <MotionLoader size="sm" variant="spinner" />
          <span className="text-xs text-gray-500">Small</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <MotionLoader size="md" variant="spinner" />
          <span className="text-xs text-gray-500">Medium</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <MotionLoader size="lg" variant="spinner" />
          <span className="text-xs text-gray-500">Large</span>
        </div>
      </div>

      <div className="flex gap-8">
        <div className="flex flex-col items-center gap-2">
          <MotionLoader size="md" variant="pulse" />
          <span className="text-xs text-gray-500">Pulse</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <MotionLoader size="md" variant="gradient" />
          <span className="text-xs text-gray-500">Gradient</span>
        </div>
      </div>
    </div>
  );
}
