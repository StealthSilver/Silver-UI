import React from "react";
import { Heart } from "lucide-react";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "icon";
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const MinimalistButton: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  className = "",
}) => {
  const baseStyles = "transition-all duration-300 tracking-tight";

  const variantStyles = {
    primary:
      "px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100",
    secondary:
      "px-8 py-3 border border-gray-300 text-gray-700 hover:border-gray-900 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-400 dark:hover:bg-gray-800",
    icon: "px-4 py-4 border border-gray-200 rounded-md hover:border-gray-900 hover:bg-gray-50 text-gray-700 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-400 dark:hover:bg-gray-800",
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
export function MinimalistButtonPreview() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <MinimalistButton variant="primary">Primary Action</MinimalistButton>
      <MinimalistButton variant="secondary">Secondary</MinimalistButton>
      <MinimalistButton variant="icon">
        <Heart className="w-5 h-5" />
      </MinimalistButton>
    </div>
  );
}
