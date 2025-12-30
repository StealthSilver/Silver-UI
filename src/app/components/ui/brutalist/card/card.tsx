"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface BrutalistCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export const BrutalistCard: React.FC<BrutalistCardProps> = ({
  className,
  hoverable = false,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "bg-white p-8 border-6 border-black max-w-md relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-100",
        className
      )}
      {...props}
    >
      <div className="absolute -top-4 -left-4 bg-red-500 text-black px-4 py-2 border-3 border-black uppercase tracking-widest text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        CARD
      </div>
      <div className="absolute -bottom-4 -right-4 bg-lime-400 text-black px-4 py-2 border-3 border-black uppercase tracking-widest text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        2024
      </div>

      <div className="space-y-6 mt-4">
        <div className="border-l-6 border-black pl-6 bg-cyan-400 -ml-8 pl-8 py-4 -mr-8 pr-8">
          <h3 className="text-black uppercase tracking-wide mb-2 text-xl font-black">
            BRUTALIST MANIFESTO
          </h3>
        </div>

        <div className="space-y-3">
          <p className="text-black/90 uppercase tracking-wide text-sm font-bold">
            RAW. BOLD. UNCOMPROMISING. NO DECORATION. ONLY STRUCTURE.
          </p>

          <div className="flex gap-2 mt-6">
            <div className="flex-1 h-16 bg-black border-2 border-black" />
            <div className="flex-1 h-16 bg-cyan-400 border-2 border-black" />
            <div className="flex-1 h-16 bg-red-500 border-2 border-black" />
          </div>
        </div>

        <button className="w-full py-4 bg-black text-white border-3 border-black hover:bg-white hover:text-black transition-all duration-75 uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] font-black">
          TAKE ACTION →
        </button>
      </div>
    </div>
  );
};

export function BrutalistCardPreview() {
  return (
    <div className="flex justify-center">
      <BrutalistCard />
    </div>
  );
}
