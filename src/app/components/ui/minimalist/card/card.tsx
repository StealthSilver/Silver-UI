"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Clock, Users } from "lucide-react";

export interface MinimalistCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export const MinimalistCard: React.FC<MinimalistCardProps> = ({
  className,
  hoverable = false,
  children,
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={cn(
        "bg-white p-10 max-w-md transition-all duration-300 hover:shadow-[0_1px_3px_rgba(0,0,0,0.05)]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div className="space-y-8">
        <div>
          <div className="text-gray-400 text-sm mb-3">Featured Project</div>
          <h3 className="text-gray-900 mb-4 tracking-tight text-2xl font-medium">
            Minimalist Design Philosophy
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Less is more. Clean lines, ample whitespace, and purposeful
            typography create a serene and focused experience.
          </p>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 min</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>2.4k</span>
              </div>
            </div>
            <button className="flex items-center gap-2 text-gray-900 hover:gap-3 transition-all duration-300">
              <span className="text-sm">Read more</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export function MinimalistCardPreview() {
  return (
    <div className="flex justify-center">
      <MinimalistCard />
    </div>
  );
}
