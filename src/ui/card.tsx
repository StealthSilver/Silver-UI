import { cn } from "./utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = ({ className, children, ...props }: CardProps) => (
  <div
    className={cn("rounded-xl border bg-white p-4 shadow-sm", className)}
    {...props}
  >
    {children}
  </div>
);
