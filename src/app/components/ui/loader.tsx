"use client";

import React from "react";
import { cn } from "./utils";
import { motion } from "framer-motion";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  theme?: "minimalist" | "brutalist" | "maximalist" | "neumorphic" | "motion";
}

const sizeMap = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-4",
  lg: "h-12 w-12 border-8",
};

export const Loader: React.FC<LoaderProps> = ({
  size = "md",
  className,
  theme = "minimalist",
}) => {
  if (theme === "minimalist") {
    return (
      <div className="flex items-center gap-8">
        <style jsx>{`
          @keyframes spin-minimal {
            to {
              transform: rotate(360deg);
            }
          }
          @keyframes fade-dot {
            0%,
            100% {
              opacity: 0.2;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.1);
            }
          }
          @keyframes line-slide {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(400%);
            }
          }
          .spinner-minimal {
            animation: spin-minimal 1s linear infinite;
          }
          .dot-1 {
            animation: fade-dot 1.4s ease-in-out infinite;
          }
          .dot-2 {
            animation: fade-dot 1.4s ease-in-out 0.2s infinite;
          }
          .dot-3 {
            animation: fade-dot 1.4s ease-in-out 0.4s infinite;
          }
          .line-loader {
            animation: line-slide 1.5s ease-in-out infinite;
          }
        `}</style>

        {/* Spinner */}
        <div className="relative w-10 h-10">
          <div className="spinner-minimal w-full h-full border-[1.5px] border-gray-200 border-t-gray-900 rounded-full" />
        </div>

        {/* Dots */}
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-gray-700 rounded-full dot-1" />
          <div className="w-2 h-2 bg-gray-700 rounded-full dot-2" />
          <div className="w-2 h-2 bg-gray-700 rounded-full dot-3" />
        </div>

        {/* Line loader */}
        <div className="w-32 h-[2px] bg-gray-200 rounded-full overflow-hidden">
          <div className="line-loader w-1/4 h-full bg-gray-900" />
        </div>
      </div>
    );
  }

  if (theme === "brutalist") {
    return (
      <div className="flex items-center gap-8">
        <style jsx>{`
          @keyframes jitter {
            0%,
            100% {
              transform: translate(0, 0) rotate(0deg);
            }
            10% {
              transform: translate(-3px, 3px) rotate(-3deg);
            }
            20% {
              transform: translate(3px, -3px) rotate(3deg);
            }
            30% {
              transform: translate(-3px, -3px) rotate(-2deg);
            }
            40% {
              transform: translate(3px, 3px) rotate(2deg);
            }
            50% {
              transform: translate(-3px, 3px) rotate(-3deg);
            }
            60% {
              transform: translate(3px, -3px) rotate(3deg);
            }
            70% {
              transform: translate(-3px, -3px) rotate(-2deg);
            }
            80% {
              transform: translate(3px, 3px) rotate(2deg);
            }
            90% {
              transform: translate(-3px, 3px) rotate(-1deg);
            }
          }
          @keyframes fill-bar {
            0% {
              width: 0%;
            }
            45% {
              width: 0%;
            }
            55% {
              width: 100%;
            }
            100% {
              width: 100%;
            }
          }
          @keyframes pixel-spin {
            0% {
              transform: rotate(0deg);
            }
            25% {
              transform: rotate(90deg);
            }
            50% {
              transform: rotate(180deg);
            }
            75% {
              transform: rotate(270deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .jitter-loader {
            animation: jitter 0.4s infinite;
          }
          .fill-loader {
            animation: fill-bar 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          .pixel-spinner {
            animation: pixel-spin 1.2s steps(4) infinite;
          }
        `}</style>

        {/* Jittery square */}
        <div className="relative w-16 h-16">
          <div className="jitter-loader w-full h-full border-4 border-black bg-lime-400" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black uppercase tracking-widest text-xs font-black">
            LOAD
          </div>
        </div>

        {/* Abrupt fill bar */}
        <div className="relative w-40 h-10 border-4 border-black bg-white overflow-hidden">
          <div className="fill-loader h-full bg-red-500 border-r-4 border-black" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black uppercase tracking-widest text-xs mix-blend-difference font-black">
            LOADING
          </div>
        </div>

        {/* Pixelated spinner */}
        <div className="relative w-12 h-12">
          <div className="pixel-spinner w-full h-full border-4 border-black border-t-cyan-400 border-r-red-500" />
        </div>
      </div>
    );
  }

  if (theme === "maximalist") {
    return (
      <div className="flex items-center gap-10">
        <style jsx>{`
          @keyframes rotate-gradient {
            to {
              transform: rotate(360deg);
            }
          }
          @keyframes pulse-glow {
            0%,
            100% {
              filter: drop-shadow(0 0 12px rgba(147, 51, 234, 0.8))
                drop-shadow(0 0 24px rgba(236, 72, 153, 0.6));
            }
            50% {
              filter: drop-shadow(0 0 20px rgba(147, 51, 234, 1))
                drop-shadow(0 0 40px rgba(236, 72, 153, 0.8));
            }
          }
          @keyframes rainbow-rotate {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 200% 50%;
            }
          }
          @keyframes sparkle {
            0%,
            100% {
              transform: scale(0.4) rotate(0deg);
              opacity: 0.3;
            }
            50% {
              transform: scale(1.3) rotate(180deg);
              opacity: 1;
            }
          }
          @keyframes float-up {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
            100% {
              transform: translateY(0px);
            }
          }
          @keyframes gradient-fill {
            0% {
              width: 0%;
              left: 0%;
            }
            50% {
              width: 60%;
              left: 0%;
            }
            100% {
              width: 0%;
              left: 100%;
            }
          }
          .gradient-spinner {
            animation: rotate-gradient 1.2s linear infinite,
              pulse-glow 2s ease-in-out infinite;
          }
          .sparkle-1 {
            animation: sparkle 1.5s ease-in-out infinite,
              float-up 2s ease-in-out infinite;
          }
          .sparkle-2 {
            animation: sparkle 1.5s ease-in-out 0.3s infinite,
              float-up 2s ease-in-out 0.3s infinite;
          }
          .sparkle-3 {
            animation: sparkle 1.5s ease-in-out 0.6s infinite,
              float-up 2s ease-in-out 0.6s infinite;
          }
          .sparkle-4 {
            animation: sparkle 1.5s ease-in-out 0.9s infinite,
              float-up 2s ease-in-out 0.9s infinite;
          }
          .gradient-bar {
            animation: gradient-fill 2s ease-in-out infinite,
              rainbow-rotate 3s linear infinite;
          }
        `}</style>

        {/* Gradient spinner with glow */}
        <div className="relative w-16 h-16">
          <div
            className="gradient-spinner w-full h-full rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, #9333ea, #ec4899, #f97316, #3b82f6, #9333ea)",
              clipPath:
                "polygon(50% 50%, 100% 50%, 100% 0%, 75% 0%, 75% 25%, 50% 25%)",
            }}
          />
          <div className="absolute inset-3 rounded-full bg-white" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl" />
        </div>

        {/* Multi-color sparkles */}
        <div className="flex gap-3">
          <div className="sparkle-1 w-4 h-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-[0_0_12px_rgba(147,51,234,0.6)]" />
          <div className="sparkle-2 w-4 h-4 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg shadow-[0_0_12px_rgba(236,72,153,0.6)]" />
          <div className="sparkle-3 w-4 h-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-[0_0_12px_rgba(249,115,22,0.6)]" />
          <div className="sparkle-4 w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
        </div>

        {/* Animated gradient bar */}
        <div className="relative w-48 h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full overflow-hidden shadow-inner">
          <div
            className="gradient-bar absolute h-full rounded-full shadow-[0_0_8px_rgba(147,51,234,0.6)]"
            style={{
              background:
                "linear-gradient(90deg, #9333ea, #ec4899, #f97316, #3b82f6)",
              backgroundSize: "200% 100%",
            }}
          />
        </div>
      </div>
    );
  }

  if (theme === "neumorphic") {
    return (
      <div className="flex items-center gap-10">
        <style jsx>{`
          @keyframes rotate-soft {
            to {
              transform: rotate(360deg);
            }
          }
          @keyframes glow-pulse {
            0%,
            100% {
              filter: drop-shadow(0 0 6px rgba(147, 197, 253, 0.4));
            }
            50% {
              filter: drop-shadow(0 0 12px rgba(147, 197, 253, 0.7));
            }
          }
          @keyframes soft-bounce {
            0%,
            100% {
              transform: translateY(0px);
              box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1),
                -4px -4px 8px rgba(255, 255, 255, 0.8);
            }
            50% {
              transform: translateY(-8px);
              box-shadow: 6px 10px 12px rgba(0, 0, 0, 0.15),
                -4px -4px 8px rgba(255, 255, 255, 0.8);
            }
          }
          @keyframes slide-bubble {
            0%,
            100% {
              left: 2px;
            }
            50% {
              left: calc(100% - 26px);
            }
          }
          .soft-spinner {
            animation: rotate-soft 2s linear infinite,
              glow-pulse 2s ease-in-out infinite;
          }
          .soft-dot-1 {
            animation: soft-bounce 1s ease-in-out infinite;
          }
          .soft-dot-2 {
            animation: soft-bounce 1s ease-in-out 0.2s infinite;
          }
          .soft-dot-3 {
            animation: soft-bounce 1s ease-in-out 0.4s infinite;
          }
          .bubble-slider {
            animation: slide-bubble 2s ease-in-out infinite;
          }
        `}</style>

        {/* Soft embossed spinner */}
        <div className="relative w-16 h-16 bg-gray-200 rounded-full shadow-[inset_8px_8px_16px_rgba(0,0,0,0.1),inset_-8px_-8px_16px_rgba(255,255,255,0.8)]">
          <div
            className="soft-spinner absolute inset-3 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)]"
            style={{ clipPath: "polygon(50% 50%, 100% 50%, 100% 0%, 50% 0%)" }}
          />
        </div>

        {/* Soft bouncing dots */}
        <div className="flex gap-3">
          <div className="soft-dot-1 w-4 h-4 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full" />
          <div className="soft-dot-2 w-4 h-4 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full" />
          <div className="soft-dot-3 w-4 h-4 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full" />
        </div>

        {/* Sliding bubble in track */}
        <div className="relative w-40 h-4 bg-gray-200 rounded-full shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]">
          <div className="bubble-slider absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full shadow-[4px_4px_8px_rgba(0,0,0,0.15),-2px_-2px_6px_rgba(255,255,255,0.8)]" />
        </div>
      </div>
    );
  }

  if (theme === "motion") {
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
  }

  // Default loader
  return (
    <span
      className={cn(
        "inline-block animate-spin rounded-full border-r-transparent border-l-transparent",
        "border-t-[var(--primary)] border-b-[var(--primary-hover)]",
        "shadow-lg shadow-[var(--primary)]/20",
        sizeMap[size],
        className
      )}
      aria-label="Loading"
      role="status"
    />
  );
};
