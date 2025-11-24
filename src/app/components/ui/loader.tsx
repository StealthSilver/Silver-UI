import React from "react";
import { cn } from "./utils";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-4",
  lg: "h-12 w-12 border-8",
};

export const Loader: React.FC<LoaderProps> = ({ size = "md", className }) => (
  <span
    className={cn(
      "inline-block animate-spin rounded-full border-t-[--primary] border-r-transparent border-b-[--primary] border-l-transparent",
      sizeMap[size],
      className
    )}
    aria-label="Loading"
    role="status"
  />
);
