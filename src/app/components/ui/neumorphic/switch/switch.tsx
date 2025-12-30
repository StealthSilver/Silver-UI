"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface NeumorphicSwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const NeumorphicSwitch = React.forwardRef<
  HTMLInputElement,
  NeumorphicSwitchProps
>(({ className, label, ...props }, ref) => {
  const [isOn, setIsOn] = useState(false);
  const [isOn2, setIsOn2] = useState(true);

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
});
NeumorphicSwitch.displayName = "NeumorphicSwitch";

export function NeumorphicSwitchPreview() {
  return (
    <div className="flex justify-center">
      <NeumorphicSwitch />
    </div>
  );
}
