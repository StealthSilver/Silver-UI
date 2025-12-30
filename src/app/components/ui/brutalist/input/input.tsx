"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Search, Mail } from "lucide-react";

export interface BrutalistInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  validation?: boolean;
  label?: string;
}

export const BrutalistInput: React.FC<BrutalistInputProps> = ({
  className,
  type = "text",
  ...props
}) => {
  return (
    <div className="space-y-6 max-w-md">
      <div className="relative">
        <div className="absolute -top-2 -left-2 bg-cyan-400 text-black px-2 py-1 border-2 border-black text-xs uppercase tracking-wide font-bold z-10">
          INPUT 01
        </div>
        <input
          type="text"
          placeholder="TYPE HERE..."
          className="w-full px-6 py-4 border-4 border-black bg-white text-black placeholder-black/40 focus:outline-none focus:border-[6px] focus:bg-yellow-50 transition-all duration-100 uppercase tracking-wider font-bold"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <Search className="w-6 h-6 text-black" />
        </div>
      </div>

      <div className="relative">
        <div className="absolute -top-2 -left-2 bg-red-500 text-black px-2 py-1 border-2 border-black text-xs uppercase tracking-wide font-bold z-10">
          EMAIL
        </div>
        <input
          type="text"
          placeholder="YOUR@EMAIL.COM"
          className="w-full px-6 py-4 border-4 border-black bg-white text-black placeholder-black/40 focus:outline-none focus:border-[6px] focus:bg-yellow-50 transition-all duration-100 uppercase tracking-wider font-bold"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <Mail className="w-6 h-6 text-black" />
        </div>
      </div>
    </div>
  );
};

export function BrutalistInputPreview() {
  return (
    <div className="flex justify-center">
      <BrutalistInput />
    </div>
  );
}
