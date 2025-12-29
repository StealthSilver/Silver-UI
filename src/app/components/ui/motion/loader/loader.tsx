"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const MotionLoader: React.FC<LoaderProps> = ({
  size = "md",
  className,
}) => {
  return (
    <div className="flex items-center gap-12">
      {/* Morphing shape */}
      <motion.div
        className="w-14 h-14"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div
          className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg"
          animate={{
            borderRadius: ["30%", "50%", "30%", "10%", "30%"],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Wave bars */}
      <div className="flex gap-1.5 items-end h-12">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="w-2 bg-gradient-to-t from-blue-500 to-purple-600 rounded-full"
            animate={{
              height: ["16px", "48px", "16px"],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Breathing line */}
      <motion.div
        className="h-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-full shadow-lg"
        animate={{
          width: ["60px", "120px", "60px"],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orbit dots */}
      <div className="relative w-12 h-12">
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-lg" />
        </motion.div>
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-600 rounded-full shadow-lg" />
        </motion.div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-pink-500 rounded-full shadow-lg" />
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
