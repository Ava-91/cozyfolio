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
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-4 mb-14",
        alignClasses[align],
        className
      )}
    >
      {/* Accent */}

      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-primary" />
        <span className="text-xs uppercase tracking-[0.25em] text-muted">
          Section
        </span>
      </div>

      {/* Title */}

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-text leading-none">
        {children}
      </h2>

      {/* Subtitle */}

      {subtitle && (
        <p className="max-w-2xl text-base md:text-lg leading-8 text-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;