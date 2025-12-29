"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const MinimalistSwitch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, ...props }, ref) => {
    const [isOn, setIsOn] = useState(false);
    const [isOn2, setIsOn2] = useState(true);

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
);
MinimalistSwitch.displayName = "MinimalistSwitch";

export function MinimalistSwitchPreview() {
  return (
    <div className="flex justify-center">
      <MinimalistSwitch />
    </div>
  );
}
