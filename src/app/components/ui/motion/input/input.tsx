"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface MotionInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  label?: string;
  error?: boolean;
  helperText?: string;
}

export const MotionInput: React.FC<MotionInputProps> = ({
  className,
  type = "text",
  label,
  error = false,
  helperText,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value.length > 0);
    props.onChange?.(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    props.onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    props.onBlur?.(e);
  };

  return (
    <motion.div
      className="relative w-full group"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Label with motion */}
      {label && (
        <motion.label
          className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-blue-400 transition-colors duration-200"
          initial={false}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.2 }}
        >
          {label}
        </motion.label>
      )}

      {/* Main input container with gradient background */}
      <motion.div
        className={cn(
          "relative rounded-xl p-0.5 overflow-hidden transition-all duration-300",
          error && "ring-2 ring-red-500/50"
        )}
        animate={{
          background: isFocused
            ? "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.3))"
            : error
            ? "linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.1))"
            : "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.1))",
        }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={cn(
            "relative bg-gradient-to-br from-neutral-900 via-neutral-800/50 to-neutral-900 rounded-lg overflow-hidden",
            "border border-neutral-700/50 transition-all duration-300",
            isFocused && "border-blue-500/50",
            error && "border-red-500/50"
          )}
        >
          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

          {/* Glow effect on focus */}
          <motion.div
            className="absolute -inset-1 bg-blue-500 rounded-lg blur-xl opacity-0 -z-10"
            animate={{
              opacity: isFocused ? 0.2 : 0,
              scale: isFocused ? 1 : 0.95,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Input field */}
          <input
            type={type}
            className={cn(
              "relative w-full px-4 py-3 bg-transparent text-white placeholder-gray-500",
              "focus:outline-none transition-all duration-300",
              "font-medium text-sm",
              error && "text-red-400"
            )}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />

          {/* Animated underline */}
          <motion.div
            className={cn(
              "absolute bottom-0 left-0 h-[2px]",
              error ? "bg-red-500" : "bg-blue-500"
            )}
            initial={{ width: "0%", left: "50%" }}
            animate={{
              width: isFocused ? "100%" : "0%",
              left: isFocused ? "0%" : "50%",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
      </motion.div>

      {/* Helper text with motion */}
      {helperText && (
        <motion.p
          className={cn(
            "mt-2 text-xs transition-colors duration-200",
            error ? "text-red-400" : "text-gray-400"
          )}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.05 }}
        >
          {helperText}
        </motion.p>
      )}
    </motion.div>
  );
};

export function MotionInputPreview() {
  return (
    <div className="flex justify-center">
      <MotionInput placeholder="Enter your search query" />
    </div>
  );
}
