import * as React from "react";
import { cn } from "@/lib/utils";

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <label className="inline-flex items-center gap-3 cursor-pointer group">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only peer"
            ref={ref}
            {...props}
          />
          <div
            className={cn(
              "w-14 h-8 rounded-full transition-all duration-300",
              "bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800",
              "shadow-inner",
              "peer-checked:bg-gradient-to-br peer-checked:from-[var(--primary)] peer-checked:to-[var(--primary-hover)]",
              "peer-checked:shadow-lg peer-checked:shadow-[var(--primary)]/30",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--primary)]/50 peer-focus-visible:ring-offset-2",
              "peer-disabled:opacity-50 peer-disabled:cursor-not-allowed",
              className
            )}
          />
          <div
            className={cn(
              "absolute left-1 top-1 w-6 h-6 rounded-full transition-all duration-300",
              "bg-white dark:bg-neutral-100",
              "shadow-lg",
              "peer-checked:translate-x-6",
              "peer-checked:shadow-xl",
              "group-hover:scale-105"
            )}
          />
        </div>
        {label && (
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            {label}
          </span>
        )}
      </label>
    );
  }
);
Switch.displayName = "Switch";

export { Switch };
