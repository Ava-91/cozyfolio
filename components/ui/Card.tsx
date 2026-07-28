import { ElementType,ReactNode } from "react";
import { cn } from "@/lib/utils";
export interface CardProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

const Card = ({ children, className, as: Component = "div" }: CardProps) => {
  return (
    <Component
      className={cn(
        "bg-surface border border-border rounded-2xl p-6 transition-all duration-200",
        "hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)]",
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Card;