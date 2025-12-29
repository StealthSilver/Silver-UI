"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Search, Mail } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  validation?: boolean;
  label?: string;
}

export const NeumorphicInput: React.FC<InputProps> = ({
  className,
  type = "text",
  ...props
}) => {
  return (
    <div className="space-y-6 max-w-md">
      <div className="relative">
        <div className="absolute left-6 top-1/2 -translate-y-1/2">
          <Search className="w-5 h-5 transition-colors duration-300 text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Soft search input..."
          className="w-full px-6 py-4 bg-gray-200 text-gray-700 placeholder-gray-500 rounded-3xl shadow-[inset_6px_6px_12px_rgba(0,0,0,0.1),inset_-6px_-6px_12px_rgba(255,255,255,0.8)] focus:outline-none focus:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.12),inset_-8px_-8px_16px_rgba(255,255,255,0.8),0_0_0_4px_rgba(147,197,253,0.3)] transition-all duration-300 pl-14"
        />
      </div>

      <div className="relative">
        <div className="absolute left-6 top-1/2 -translate-y-1/2">
          <Mail className="w-5 h-5 transition-colors duration-300 text-gray-500" />
        </div>
        <input
          type="email"
          placeholder="Your email address..."
          className="w-full px-6 py-4 bg-gray-200 text-gray-700 placeholder-gray-500 rounded-3xl shadow-[inset_6px_6px_12px_rgba(0,0,0,0.1),inset_-6px_-6px_12px_rgba(255,255,255,0.8)] focus:outline-none focus:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.12),inset_-8px_-8px_16px_rgba(255,255,255,0.8),0_0_0_4px_rgba(147,197,253,0.3)] transition-all duration-300 pl-14"
        />
      </div>
    </div>
  );
};

export function NeumorphicInputPreview() {
  return (
    <div className="flex justify-center">
      <NeumorphicInput />
    </div>
  );
}
