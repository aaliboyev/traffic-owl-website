"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  badge,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className,
      )}
    >
      {badge && (
        <FadeIn>
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
            {badge}
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2
          className={cn(
            "text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight",
            align === "center" && "max-w-3xl mx-auto",
          )}
        >
          {title}
        </h2>
      </FadeIn>
      {subtitle && (
        <FadeIn delay={0.2}>
          <p
            className={cn(
              "mt-4 text-lg text-foreground-secondary",
              align === "center" && "max-w-2xl mx-auto",
            )}
          >
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
