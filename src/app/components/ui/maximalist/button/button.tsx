import React from "react";
import { Heart, Sparkles, Zap, Star } from "lucide-react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "icon";
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const MaximalistButton: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  className = "",
}) => {
  const baseStyles = "transition-all duration-300 font-bold";

  const variantStyles = {
    primary:
      "px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-2xl shadow-[0_0_30px_rgba(147,51,234,0.5),0_10px_25px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(147,51,234,0.8),0_15px_35px_rgba(0,0,0,0.3)] hover:scale-105 relative overflow-hidden group border-2 border-white/30",
    secondary:
      "px-10 py-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.5),0_10px_25px_rgba(0,0,0,0.2)] hover:shadow-[0_0_50px_rgba(59,130,246,0.8),0_15px_35px_rgba(0,0,0,0.3)] hover:scale-105 border-2 border-white/30",
    icon: "px-4 py-4 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 text-white rounded-2xl shadow-[0_0_30px_rgba(219,39,119,0.6),0_8px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_0_40px_rgba(219,39,119,0.9),0_12px_24px_rgba(0,0,0,0.3)] hover:scale-110 relative overflow-hidden before:absolute before:inset-0 before:bg-white/20 before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-300",
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
export function MaximalistButtonPreview() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <MaximalistButton variant="primary">
        <span className="relative flex items-center gap-3">
          <Sparkles className="w-5 h-5" />
          Spectacular Action
          <Zap className="w-5 h-5" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      </MaximalistButton>
      <MaximalistButton variant="secondary">
        <span className="flex items-center gap-2">
          Explore More
          <Star className="w-5 h-5" />
        </span>
      </MaximalistButton>
      <MaximalistButton variant="icon">
        <Heart className="w-6 h-6" />
      </MaximalistButton>
    </div>
  );
}
