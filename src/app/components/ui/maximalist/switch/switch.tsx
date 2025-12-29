"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const MaximalistSwitch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, ...props }, ref) => {
    const [isOn, setIsOn] = useState(false);
    const [isOn2, setIsOn2] = useState(true);

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
);
MaximalistSwitch.displayName = "MaximalistSwitch";

export function MaximalistSwitchPreview() {
  return (
    <div className="flex justify-center">
      <MaximalistSwitch />
    </div>
  );
}
