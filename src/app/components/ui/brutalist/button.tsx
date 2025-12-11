import React from "react";
import { Heart } from "lucide-react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "icon";
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const BrutalistButton: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  className = "",
}) => {
  const baseStyles =
    "border-4 border-black dark:border-white uppercase tracking-widest transition-all duration-75 font-black";

  const variantStyles = {
    primary:
      "px-8 py-4 bg-red-500 text-black hover:bg-black hover:text-red-500 hover:border-red-500 dark:bg-red-500 dark:text-white dark:hover:bg-white dark:hover:text-red-500 dark:hover:border-red-500 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[3px] hover:translate-y-[3px]",
    secondary:
      "px-8 py-4 bg-white text-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[3px] hover:translate-y-[3px]",
    icon: "px-4 py-4 bg-lime-400 text-black hover:bg-black hover:text-lime-400 hover:border-lime-400 dark:bg-lime-400 dark:text-black dark:hover:bg-white dark:hover:text-lime-400 dark:hover:border-lime-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px]",
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
export function BrutalistButtonPreview() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <BrutalistButton variant="primary">
        <span className="flex items-center gap-3">
          <div className="w-2 h-2 bg-black group-hover:bg-red-500 dark:bg-white" />
          CLICK HERE
          <div className="w-2 h-2 bg-black group-hover:bg-red-500 dark:bg-white" />
        </span>
      </BrutalistButton>
      <BrutalistButton variant="secondary">SECONDARY</BrutalistButton>
      <BrutalistButton variant="icon">
        <Heart className="w-6 h-6" />
      </BrutalistButton>
    </div>
  );
}
