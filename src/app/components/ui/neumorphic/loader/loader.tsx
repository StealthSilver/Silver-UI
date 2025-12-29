"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const NeumorphicLoader: React.FC<LoaderProps> = ({
  size = "md",
  className,
}) => {
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
};

export function NeumorphicLoaderPreview() {
  return (
    <div className="flex justify-center">
      <NeumorphicLoader />
    </div>
  );
}
