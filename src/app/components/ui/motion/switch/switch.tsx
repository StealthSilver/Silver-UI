"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface MotionSwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const MotionSwitch = React.forwardRef<
  HTMLInputElement,
  MotionSwitchProps
>(({ className, label, ...props }, ref) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <motion.div
      className={cn(
        "flex items-center gap-4 group cursor-pointer",
        className
      )}
      onClick={() => setIsOn(!isOn)}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Switch Container */}
      <motion.div
        className={cn(
          "relative w-14 h-7 rounded-xl overflow-hidden transition-all duration-500",
          "border border-neutral-700/50",
          isOn
            ? "bg-gradient-to-r from-blue-500/30 to-purple-600/30 border-blue-500/50"
            : "bg-gradient-to-r from-neutral-800/50 to-neutral-700/50 border-neutral-600/50"
        )}
        animate={{
          boxShadow: isOn
            ? "0 0 20px rgba(59, 130, 246, 0.3), inset 0 0 10px rgba(59, 130, 246, 0.1)"
            : "0 0 10px rgba(0, 0, 0, 0.2)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-neutral-800/50" />

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600 pointer-events-none"
          animate={{
            opacity: isOn ? 1 : 0.5,
          }}
        />

        {/* Glow effect on toggle */}
        {isOn && (
          <motion.div
            className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}

        {/* Toggle thumb */}
        <motion.div
          className={cn(
            "absolute top-1 w-5 h-5 rounded-lg",
            "bg-gradient-to-br from-white to-gray-100 shadow-lg",
            "flex items-center justify-center"
          )}
          animate={{
            x: isOn ? 24 : 2,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
        >
          {/* Inner dot animation */}
          <motion.div
            className="w-1.5 h-1.5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"
            animate={{
              scale: isOn ? [1, 1.3, 1] : 0,
              opacity: isOn ? 1 : 0,
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />
        </motion.div>

        {/* Pulse effect when on */}
        {isOn && (
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-blue-400/50"
            initial={{ scale: 0.9, opacity: 1 }}
            animate={{ scale: 1.2, opacity: 0 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        )}
      </motion.div>

      {/* Label */}
      {label && (
        <motion.label
          className="text-sm font-medium text-gray-300 group-hover:text-blue-300 transition-colors duration-300 select-none"
          animate={{
            color: isOn ? "rgb(96, 165, 250)" : "rgb(209, 213, 219)",
          }}
          transition={{ duration: 0.3 }}
        >
          {label}
        </motion.label>
      )}
    </motion.div>
  );
});
MotionSwitch.displayName = "MotionSwitch";

export function MotionSwitchPreview() {
  return (
    <div className="flex justify-center">
      <MotionSwitch />
    </div>
  );
}
