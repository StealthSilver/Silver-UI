"use client";

import React, { useState } from "react";
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
  const baseStyles = "transition-all duration-300 font-medium relative group";

  const variantStyles = {
    primary:
      "px-8 py-3 bg-blue-500 text-white rounded-xl hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 overflow-hidden",
    secondary:
      "px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-blue-500 hover:text-blue-500 hover:shadow-lg hover:scale-105 dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400 overflow-hidden",
    icon: "px-4 py-4 bg-blue-500 text-white rounded-xl hover:shadow-xl hover:scale-110 overflow-hidden",
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

// Like button component with bounce and ripple effect
interface LikeButtonProps {
  className?: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({ className = "" }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [ripples, setRipples] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Toggle liked state
    setIsLiked(!isLiked);

    // Create ripple effect
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples([...ripples, { id, x, y }]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-4 bg-blue-500 text-white rounded-xl hover:shadow-xl hover:scale-110 relative overflow-hidden group transition-all duration-300 ${className}`}
    >
      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/40 rounded-full animate-ripple pointer-events-none"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: "10px",
            height: "10px",
            transform: "translate(-50%, -50%)",
            animation: "ripple 0.6s ease-out",
          }}
        />
      ))}

      <Heart
        className={`w-5 h-5 relative z-10 transition-all duration-300 ${
          isLiked ? "animate-bounce fill-white" : ""
        }`}
        fill={isLiked ? "white" : "none"}
      />
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
      <LikeButton />
    </div>
  );
}
