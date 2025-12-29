"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const MaximalistLoader: React.FC<LoaderProps> = ({
  size = "md",
  className,
}) => {
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
          animation: gradient-fill 2s ease-in-out infinite;
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
          }}
        />
      </div>
    </div>
  );
};

export function MaximalistLoaderPreview() {
  return (
    <div className="flex justify-center">
      <MaximalistLoader />
    </div>
  );
}
