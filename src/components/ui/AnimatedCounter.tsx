"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current).toString(),
  );

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, spring, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-baseline justify-center gap-1">
        {prefix && (
          <span className="text-2xl md:text-3xl font-bold text-primary">
            {prefix}
          </span>
        )}
        <motion.span className="text-4xl md:text-5xl font-bold gradient-text">
          {display}
        </motion.span>
        {suffix && (
          <span className="text-2xl md:text-3xl font-bold text-primary">
            {suffix}
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-foreground-secondary uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}
