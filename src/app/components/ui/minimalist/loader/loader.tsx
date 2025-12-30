"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface MinimalistLoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-4",
  lg: "h-12 w-12 border-8",
};

export const MinimalistLoader: React.FC<MinimalistLoaderProps> = ({
  size = "md",
  className,
}) => {
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
};

export function MinimalistLoaderPreview() {
  return (
    <div className="flex justify-center">
      <MinimalistLoader />
    </div>
  );
}
