import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const SectionTitle = ({
  children,
  subtitle,
  align = "center",
  className,
}: SectionTitleProps) => {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const subtitleAlign = {
    left: "",
    center: "mx-auto",
    right: "ml-auto",
  };

  return (
    <div className={cn("space-y-3", alignClasses[align], className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text tracking-tight">
        <span className="inline-flex items-center gap-3">
          <span className="text-primary text-2xl md:text-3xl lg:text-4xl">●</span>
          {children}
        </span>
      </h2>
      {subtitle && (
        <p className={cn(
          "text-muted text-base md:text-lg max-w-2xl",
          subtitleAlign[align]
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;