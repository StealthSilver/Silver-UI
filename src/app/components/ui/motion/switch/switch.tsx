"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const MotionSwitch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, ...props }, ref) => {
    const [isOn, setIsOn] = useState(false);
    const [isOn2, setIsOn2] = useState(true);

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-6">
          <motion.div
            onClick={() => setIsOn(!isOn)}
            className={cn(
              "relative w-16 h-8 rounded-full cursor-pointer transition-all duration-300",
              isOn ? "bg-blue-500 shadow-lg" : "bg-gray-300",
              className
            )}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
              animate={{
                x: isOn ? 32 : 4,
              }}
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 30,
              }}
            />
            {isOn && (
              <>
                <motion.div
                  className="absolute inset-0 rounded-full"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blue-300/40 blur-sm"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <motion.div
                  className="absolute top-1/2 left-2 w-1.5 h-1.5 bg-white rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 500 }}
                />
              </>
            )}
          </motion.div>
          <span className="text-sm text-gray-600 transition-colors duration-300">
            {isOn ? "Enabled" : "Disabled"}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <motion.div
            onClick={() => setIsOn2(!isOn2)}
            className={cn(
              "relative w-16 h-8 rounded-full cursor-pointer transition-all duration-300",
              isOn2 ? "bg-blue-500 shadow-lg" : "bg-gray-300"
            )}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
              animate={{
                x: isOn2 ? 32 : 4,
              }}
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 30,
              }}
            />
            {isOn2 && (
              <>
                <motion.div
                  className="absolute inset-0 rounded-full"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blue-300/40 blur-sm"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <motion.div
                  className="absolute top-1/2 left-2 w-1.5 h-1.5 bg-white rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 500 }}
                />
              </>
            )}
          </motion.div>
          <span className="text-sm text-gray-600 transition-colors duration-300">
            {isOn2 ? "Active" : "Inactive"}
          </span>
        </div>
      </div>
    );
  }
);
MotionSwitch.displayName = "MotionSwitch";

export function MotionSwitchPreview() {
  return (
    <div className="flex justify-center">
      <MotionSwitch />
    </div>
  );
}
