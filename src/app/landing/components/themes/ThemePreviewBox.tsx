import React from "react";
import { cn } from "@/lib/utils";

export function ThemePreviewBox({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex min-h-[148px] flex-col border border-line bg-white/[0.02] p-5 sm:min-h-[160px]",
        className,
      )}
    >
      <p className="mb-4 text-[10px] font-light uppercase tracking-[0.14em] text-white/45">
        {title}
      </p>
      <div className="flex min-h-0 flex-1 items-center justify-center">
        {children}
      </div>
    </div>
  );
}
