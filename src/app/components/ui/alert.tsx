import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-2xl border-2 p-5 transition-all duration-300 backdrop-blur-sm shadow-lg",
  {
    variants: {
      variant: {
        default:
          "border-[var(--primary)]/30 bg-gradient-to-br from-[var(--primary)]/5 via-[var(--primary)]/10 to-transparent text-neutral-900 dark:text-white shadow-[var(--primary)]/10",
        success:
          "border-green-500/30 bg-gradient-to-br from-green-500/5 via-green-500/10 to-transparent text-green-900 dark:text-green-100 shadow-green-500/10",
        warning:
          "border-amber-500/30 bg-gradient-to-br from-amber-500/5 via-amber-500/10 to-transparent text-amber-900 dark:text-amber-100 shadow-amber-500/10",
        danger:
          "border-red-500/30 bg-gradient-to-br from-red-500/5 via-red-500/10 to-transparent text-red-900 dark:text-red-100 shadow-red-500/10",
        info: "border-blue-500/30 bg-gradient-to-br from-blue-500/5 via-blue-500/10 to-transparent text-blue-900 dark:text-blue-100 shadow-blue-500/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), "group", className)}
        {...props}
      >
        <div className="relative z-10">{children}</div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    );
  }
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-2 font-bold text-lg tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm leading-relaxed opacity-90", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription, alertVariants };
