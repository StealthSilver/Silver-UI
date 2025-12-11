"use client";

import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  theme?: "minimalist" | "brutalist" | "maximalist" | "neumorphic" | "motion";
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, theme = "minimalist", ...props }, ref) => {
    const [isOn, setIsOn] = useState(false);
    const [isOn2, setIsOn2] = useState(true);

    if (theme === "minimalist") {
      return (
        <div className="space-y-6">
          <div className="flex items-center gap-6">
            <div
              onClick={() => setIsOn(!isOn)}
              className={cn(
                "relative w-14 h-7 rounded-full cursor-pointer transition-all duration-300",
                isOn ? "bg-gray-900" : "bg-gray-300",
                className
              )}
            >
              <div
                className={cn(
                  "absolute top-1 w-5 h-5 bg-white rounded-full transition-all duration-300 shadow-sm",
                  isOn ? "right-1" : "left-1"
                )}
              />
            </div>
            <span className="text-sm text-gray-600 transition-colors duration-300">
              {isOn ? "Enabled" : "Disabled"}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div
              onClick={() => setIsOn2(!isOn2)}
              className={cn(
                "relative w-14 h-7 rounded-full cursor-pointer transition-all duration-300",
                isOn2 ? "bg-gray-900" : "bg-gray-300"
              )}
            >
              <div
                className={cn(
                  "absolute top-1 w-5 h-5 bg-white rounded-full transition-all duration-300 shadow-sm",
                  isOn2 ? "right-1" : "left-1"
                )}
              />
            </div>
            <span className="text-sm text-gray-600 transition-colors duration-300">
              {isOn2 ? "Active" : "Inactive"}
            </span>
          </div>
        </div>
      );
    }

    if (theme === "brutalist") {
      return (
        <div className="space-y-6">
          <div className="flex items-center gap-6">
            <div
              onClick={() => setIsOn(!isOn)}
              className={cn(
                "relative w-24 h-12 border-4 border-black cursor-pointer transition-all duration-75",
                isOn ? "bg-red-500" : "bg-white",
                className
              )}
            >
              <div
                className={cn(
                  "absolute top-1 w-10 h-10 border-3 border-black transition-all duration-75 flex items-center justify-center text-xs font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
                  isOn
                    ? "right-1 bg-black text-red-500"
                    : "left-1 bg-white text-black"
                )}
              >
                {isOn ? "ON" : "OFF"}
              </div>
            </div>
            <span className="text-sm text-black uppercase tracking-wider font-bold transition-colors duration-300">
              {isOn ? "Enabled" : "Disabled"}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div
              onClick={() => setIsOn2(!isOn2)}
              className={cn(
                "relative w-24 h-12 border-4 border-black cursor-pointer transition-all duration-75",
                isOn2 ? "bg-red-500" : "bg-white"
              )}
            >
              <div
                className={cn(
                  "absolute top-1 w-10 h-10 border-3 border-black transition-all duration-75 flex items-center justify-center text-xs font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
                  isOn2
                    ? "right-1 bg-black text-red-500"
                    : "left-1 bg-white text-black"
                )}
              >
                {isOn2 ? "ON" : "OFF"}
              </div>
            </div>
            <span className="text-sm text-black uppercase tracking-wider font-bold transition-colors duration-300">
              {isOn2 ? "ACTIVE" : "INACTIVE"}
            </span>
          </div>
        </div>
      );
    }

    if (theme === "maximalist") {
      return (
        <div className="space-y-6">
          <style jsx>{`
            @keyframes ripple-expand {
              0% {
                transform: scale(0.8);
                opacity: 0.8;
              }
              100% {
                transform: scale(2);
                opacity: 0;
              }
            }
            @keyframes glow-pulse {
              0%,
              100% {
                opacity: 0.6;
              }
              50% {
                opacity: 1;
              }
            }
            .ripple-effect {
              animation: ripple-expand 0.6s ease-out;
            }
          `}</style>

          <div className="flex items-center gap-6">
            <div
              onClick={() => setIsOn(!isOn)}
              className={cn(
                "relative w-20 h-10 rounded-full cursor-pointer transition-all duration-300",
                isOn
                  ? "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 shadow-[0_0_30px_rgba(219,39,119,0.8),0_0_60px_rgba(147,51,234,0.4)]"
                  : "bg-gradient-to-r from-gray-300 to-gray-400",
                className
              )}
            >
              <div
                className={cn(
                  "absolute top-1 w-8 h-8 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-300",
                  isOn ? "right-1" : "left-1"
                )}
              >
                {isOn && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 ripple-effect" />
                )}
              </div>
              {isOn && (
                <>
                  <div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/40 to-pink-400/40 blur-md"
                    style={{ animation: "glow-pulse 2s ease-in-out infinite" }}
                  />
                  <div className="absolute top-1/2 left-2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                </>
              )}
            </div>
            <span
              className={cn(
                "text-sm transition-colors duration-300",
                isOn ? "text-purple-900" : "text-gray-600"
              )}
            >
              {isOn ? "Enabled" : "Disabled"}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div
              onClick={() => setIsOn2(!isOn2)}
              className={cn(
                "relative w-20 h-10 rounded-full cursor-pointer transition-all duration-300",
                isOn2
                  ? "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 shadow-[0_0_30px_rgba(219,39,119,0.8),0_0_60px_rgba(147,51,234,0.4)]"
                  : "bg-gradient-to-r from-gray-300 to-gray-400"
              )}
            >
              <div
                className={cn(
                  "absolute top-1 w-8 h-8 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-300",
                  isOn2 ? "right-1" : "left-1"
                )}
              >
                {isOn2 && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 ripple-effect" />
                )}
              </div>
              {isOn2 && (
                <>
                  <div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/40 to-pink-400/40 blur-md"
                    style={{ animation: "glow-pulse 2s ease-in-out infinite" }}
                  />
                  <div className="absolute top-1/2 left-2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                </>
              )}
            </div>
            <span
              className={cn(
                "text-sm transition-colors duration-300",
                isOn2 ? "text-purple-900" : "text-gray-600"
              )}
            >
              {isOn2 ? "Active" : "Inactive"}
            </span>
          </div>
        </div>
      );
    }

    if (theme === "neumorphic") {
      return (
        <div className="space-y-6">
          <div className="flex items-center gap-6">
            <div
              onClick={() => setIsOn(!isOn)}
              className={cn(
                "relative w-20 h-10 rounded-full cursor-pointer transition-all duration-300",
                isOn
                  ? "bg-gray-200 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.15),inset_-6px_-6px_12px_rgba(255,255,255,0.8)]"
                  : "bg-gray-200 shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)]",
                className
              )}
            >
              <div
                className={cn(
                  "absolute top-1 w-8 h-8 rounded-full transition-all duration-300",
                  isOn
                    ? "right-1 bg-gradient-to-br from-blue-300 to-purple-400 shadow-[3px_3px_6px_rgba(0,0,0,0.15),-2px_-2px_4px_rgba(255,255,255,0.6)]"
                    : "left-1 bg-gray-200 shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)]"
                )}
              />
              {isOn && (
                <div className="absolute top-1/2 left-3 -translate-y-1/2 w-1.5 h-1.5 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full shadow-[0_0_4px_rgba(147,197,253,0.8)]" />
              )}
            </div>
            <span className="text-sm text-gray-600 transition-colors duration-300">
              {isOn ? "Enabled" : "Disabled"}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div
              onClick={() => setIsOn2(!isOn2)}
              className={cn(
                "relative w-20 h-10 rounded-full cursor-pointer transition-all duration-300",
                isOn2
                  ? "bg-gray-200 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.15),inset_-6px_-6px_12px_rgba(255,255,255,0.8)]"
                  : "bg-gray-200 shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)]"
              )}
            >
              <div
                className={cn(
                  "absolute top-1 w-8 h-8 rounded-full transition-all duration-300",
                  isOn2
                    ? "right-1 bg-gradient-to-br from-blue-300 to-purple-400 shadow-[3px_3px_6px_rgba(0,0,0,0.15),-2px_-2px_4px_rgba(255,255,255,0.6)]"
                    : "left-1 bg-gray-200 shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)]"
                )}
              />
              {isOn2 && (
                <div className="absolute top-1/2 left-3 -translate-y-1/2 w-1.5 h-1.5 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full shadow-[0_0_4px_rgba(147,197,253,0.8)]" />
              )}
            </div>
            <span className="text-sm text-gray-600 transition-colors duration-300">
              {isOn2 ? "Active mode" : "Inactive mode"}
            </span>
          </div>
        </div>
      );
    }

    if (theme === "motion") {
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

    // Default switch
    return (
      <label className="inline-flex items-center gap-3 cursor-pointer group">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only peer"
            ref={ref}
            {...props}
          />
          <div
            className={cn(
              "w-14 h-8 rounded-full transition-all duration-300",
              "bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800",
              "shadow-inner",
              "peer-checked:bg-gradient-to-br peer-checked:from-[var(--primary)] peer-checked:to-[var(--primary-hover)]",
              "peer-checked:shadow-lg peer-checked:shadow-[var(--primary)]/30",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--primary)]/50 peer-focus-visible:ring-offset-2",
              "peer-disabled:opacity-50 peer-disabled:cursor-not-allowed",
              className
            )}
          />
          <div
            className={cn(
              "absolute left-1 top-1 w-6 h-6 rounded-full transition-all duration-300",
              "bg-white dark:bg-neutral-100",
              "shadow-lg",
              "peer-checked:translate-x-6",
              "peer-checked:shadow-xl",
              "group-hover:scale-105"
            )}
          />
        </div>
        {label && (
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            {label}
          </span>
        )}
      </label>
    );
  }
);
Switch.displayName = "Switch";

export { Switch };
