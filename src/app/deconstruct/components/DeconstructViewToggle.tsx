"use client";

import { cn } from "@/lib/utils";

export type DeconstructViewMode = "preview" | "code";

const options: { id: DeconstructViewMode; label: string }[] = [
  { id: "preview", label: "Preview" },
  { id: "code", label: "Code" },
];

type DeconstructViewToggleProps = {
  mode: DeconstructViewMode;
  onChange: (mode: DeconstructViewMode) => void;
};

export function DeconstructViewToggle({
  mode,
  onChange,
}: DeconstructViewToggleProps) {
  return (
    <div
      className="inline-flex h-6 border border-line"
      role="tablist"
      aria-label="Switch between preview and code"
    >
      {options.map(({ id, label }, index) => {
        const isActive = mode === id;
        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={isActive}
            id={`deconstruct-tab-${id}`}
            aria-controls={`deconstruct-panel-${id}`}
            onClick={() => onChange(id)}
            className={cn(
              "flex h-full items-center px-3 text-xs font-normal uppercase leading-none tracking-widest transition-[background-color,color] duration-200",
              index > 0 && "border-l border-line",
              isActive
                ? "bg-white/[0.04] text-white"
                : "text-white/50 hover:bg-white/[0.02] hover:text-white/80",
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
