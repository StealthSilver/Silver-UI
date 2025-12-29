"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const BrutalistLoader: React.FC<LoaderProps> = ({
  size = "md",
  className,
}) => {
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
};

export function BrutalistLoaderPreview() {
  return (
    <div className="flex justify-center">
      <BrutalistLoader />
    </div>
  );
}
