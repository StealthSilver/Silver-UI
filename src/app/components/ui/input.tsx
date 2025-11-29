import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full rounded-xl border bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm px-4 text-base transition-all duration-300 file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/50 focus-visible:border-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-50 shadow-sm hover:shadow-md focus-visible:shadow-lg focus-visible:shadow-[var(--primary)]/10",
  {
    variants: {
      variant: {
        default:
          "border-neutral-300/60 dark:border-neutral-700/60 focus-visible:ring-[var(--primary)]/50 focus-visible:border-[var(--primary)] hover:border-neutral-400 dark:hover:border-neutral-600",
        error:
          "border-red-400/60 focus-visible:ring-red-500/50 focus-visible:border-red-500 shadow-red-500/10 focus-visible:shadow-red-500/20",
      },
      inputSize: {
        sm: "h-9 px-3 text-sm",
        default: "h-11 px-4 text-base",
        lg: "h-14 px-5 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, inputSize, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, inputSize }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
