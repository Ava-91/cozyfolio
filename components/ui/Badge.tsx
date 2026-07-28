import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "danger";
  className?: string;
}

const Badge = ({ children, variant = "default", className }: BadgeProps) => {
  const variants = {
    default: "bg-surface text-muted border border-border",
    success: "bg-success/10 text-success border border-success/20",
    danger: "bg-danger/10 text-danger border border-danger/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-xl transition-colors",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;