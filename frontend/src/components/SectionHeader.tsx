import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}

/**
 * Standard section header used across the site for consistent typography.
 * - Eyebrow: Plus Jakarta Sans, semibold, uppercase, tracked
 * - Title:   Playfair Display, bold, 3xl → 5xl
 * - Desc:    Plus Jakarta Sans, base, muted, max-w-2xl
 */
const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
  className,
}: SectionHeaderProps) => {
  const isCenter = align === "center";
  return (
    <div
      className={cn(
        "max-w-2xl",
        isCenter ? "text-center mx-auto" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.2em]",
            invert ? "text-secondary" : "text-primary"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display font-bold mt-3 leading-[1.15] text-3xl md:text-4xl lg:text-5xl",
          invert ? "text-primary-foreground" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "font-sans mt-4 text-base md:text-lg leading-relaxed",
            invert ? "text-primary-foreground/80" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
