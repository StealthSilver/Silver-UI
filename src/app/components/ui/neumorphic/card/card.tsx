"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Sparkles, TrendingUp, Users } from "lucide-react";

export interface NeumorphicCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export const NeumorphicCard: React.FC<NeumorphicCardProps> = ({
  className,
  hoverable = false,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "bg-gray-200 p-10 rounded-[32px] max-w-md shadow-[16px_16px_32px_rgba(0,0,0,0.12),-16px_-16px_32px_rgba(255,255,255,0.8)] hover:shadow-[12px_12px_24px_rgba(0,0,0,0.12),-12px_-12px_24px_rgba(255,255,255,0.8)] transition-all duration-500",
        className
      )}
      {...props}
    >
      <div className="space-y-8">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-gray-200 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.1),inset_-6px_-6px_12px_rgba(255,255,255,0.8)] flex items-center justify-center">
            <Sparkles className="w-7 h-7 text-gray-600" />
          </div>
          <div>
            <h3 className="text-gray-700 mb-1 text-2xl font-semibold">
              Soft UI Design
            </h3>
            <p className="text-gray-500 text-sm">Tactile & Organic</p>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed">
          Neumorphic design creates depth through subtle shadows and highlights,
          mimicking physical materials with a soft, touchable aesthetic.
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Completion</span>
            <span>75%</span>
          </div>
          <div className="h-4 bg-gray-200 rounded-full shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]">
            <div className="h-full w-3/4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-[2px_2px_4px_rgba(0,0,0,0.1)] relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.7)]" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-5 bg-gray-200 rounded-2xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] text-center">
            <TrendingUp className="w-6 h-6 text-gray-600 mx-auto mb-2" />
            <div className="text-gray-700 font-semibold">3.2k</div>
            <div className="text-xs text-gray-500 mt-1">Growth</div>
          </div>
          <div className="p-5 bg-gray-200 rounded-2xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] text-center">
            <Users className="w-6 h-6 text-gray-600 mx-auto mb-2" />
            <div className="text-gray-700 font-semibold">12k</div>
            <div className="text-xs text-gray-500 mt-1">Members</div>
          </div>
        </div>

        <button className="w-full py-4 bg-gray-200 text-gray-700 rounded-2xl shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] active:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.15),inset_-8px_-8px_16px_rgba(255,255,255,0.8)] transition-all duration-300 font-medium">
          Explore Softly
        </button>
      </div>
    </div>
  );
};

export function NeumorphicCardPreview() {
  return (
    <div className="flex justify-center">
      <NeumorphicCard />
    </div>
  );
}
