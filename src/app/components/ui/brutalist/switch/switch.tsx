"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface BrutalistSwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const BrutalistSwitch = React.forwardRef<
  HTMLInputElement,
  BrutalistSwitchProps
>(({ className, label, ...props }, ref) => {
  const [isOn, setIsOn] = useState(false);
  const [isOn2, setIsOn2] = useState(true);

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
});
BrutalistSwitch.displayName = "BrutalistSwitch";

export function BrutalistSwitchPreview() {
  return (
    <div className="flex justify-center">
      <BrutalistSwitch />
    </div>
  );
}
