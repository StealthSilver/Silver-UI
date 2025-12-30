import React from "react";
import { Heart } from "lucide-react";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "icon";
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const NeumorphicButton: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  className = "",
}) => {
  const baseStyles = "transition-all duration-300 font-medium";

  const variantStyles = {
    primary:
      "px-10 py-4 bg-gradient-to-br from-gray-200 to-gray-300 text-gray-700 rounded-3xl shadow-[10px_10px_20px_rgba(0,0,0,0.1),-10px_-10px_20px_rgba(255,255,255,0.8)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] active:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.15),inset_-8px_-8px_16px_rgba(255,255,255,0.8)] dark:from-neutral-700 dark:to-neutral-800 dark:text-gray-200 dark:shadow-[10px_10px_20px_rgba(0,0,0,0.3),-10px_-10px_20px_rgba(255,255,255,0.05)] dark:hover:shadow-[6px_6px_12px_rgba(0,0,0,0.3),-6px_-6px_12px_rgba(255,255,255,0.05)] dark:active:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.5),inset_-8px_-8px_16px_rgba(255,255,255,0.05)]",
    secondary:
      "px-10 py-4 bg-gray-200 text-gray-600 rounded-3xl shadow-[6px_6px_12px_rgba(0,0,0,0.08),-6px_-6px_12px_rgba(255,255,255,0.8)] hover:shadow-[3px_3px_6px_rgba(0,0,0,0.08),-3px_-3px_6px_rgba(255,255,255,0.8)] active:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.1),inset_-6px_-6px_12px_rgba(255,255,255,0.8)] dark:bg-neutral-800 dark:text-gray-300 dark:shadow-[6px_6px_12px_rgba(0,0,0,0.3),-6px_-6px_12px_rgba(255,255,255,0.05)] dark:hover:shadow-[3px_3px_6px_rgba(0,0,0,0.3),-3px_-3px_6px_rgba(255,255,255,0.05)] dark:active:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.5),inset_-6px_-6px_12px_rgba(255,255,255,0.05)]",
    icon: "px-4 py-4 bg-gray-200 text-gray-600 rounded-2xl shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] active:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.15),inset_-6px_-6px_12px_rgba(255,255,255,0.8)] dark:bg-neutral-800 dark:text-gray-300 dark:shadow-[6px_6px_12px_rgba(0,0,0,0.3),-6px_-6px_12px_rgba(255,255,255,0.05)] dark:hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.3),inset_-3px_-3px_6px_rgba(255,255,255,0.05)] dark:active:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.5),inset_-6px_-6px_12px_rgba(255,255,255,0.05)]",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

// Example usage component for preview
export function NeumorphicButtonPreview() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <NeumorphicButton variant="primary">Soft Press</NeumorphicButton>
      <NeumorphicButton variant="secondary">Secondary</NeumorphicButton>
      <NeumorphicButton variant="icon">
        <Heart className="w-5 h-5" />
      </NeumorphicButton>
    </div>
  );
}
