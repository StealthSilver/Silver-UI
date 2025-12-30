"use client";

import React from "react";
import { Heart, Send, ArrowRight } from "lucide-react";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "icon";
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const MotionButton: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  className = "",
}) => {
  const baseStyles =
    "transition-all duration-300 font-medium relative overflow-hidden group";

  const variantStyles = {
    primary:
      "px-8 py-3 bg-blue-500 text-white rounded-xl hover:shadow-xl hover:scale-105 hover:-translate-y-0.5",
    secondary:
      "px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-blue-500 hover:text-blue-500 hover:shadow-lg hover:scale-105 dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400",
    icon: "px-4 py-4 bg-blue-500 text-white rounded-xl hover:shadow-xl hover:scale-110",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 scale-0 group-hover:scale-150" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600" />
      <span className="relative">{children}</span>
    </button>
  );
};

// Example usage component for preview
export function MotionButtonPreview() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <MotionButton variant="primary">
        <span className="flex items-center gap-2">
          Launch Action
          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>
      </MotionButton>
      <MotionButton variant="secondary">
        <span className="flex items-center gap-2">
          Learn More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </MotionButton>
      <MotionButton variant="icon">
        <Heart className="w-5 h-5 group-hover:rotate-12 group-hover:scale-110 transition-transform" />
      </MotionButton>
    </div>
  );
}
