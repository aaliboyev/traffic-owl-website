"use client";

import { cn } from "@/lib/utils";

interface GradientBackgroundProps {
	variant?: "hero" | "section" | "subtle";
	className?: string;
	children?: React.ReactNode;
}

export function GradientBackground({
	variant = "hero",
	className,
	children,
}: GradientBackgroundProps) {
	return (
		<div
			className={cn(
				"relative overflow-hidden w-full",
				variant === "hero" && "hero-gradient",
				variant === "section" && "bg-gradient-to-b from-surface to-background",
				variant === "subtle" && "bg-background-secondary",
				className
			)}
		>
			{/* Animated gradient orbs */}
			{variant === "hero" && (
				<>
					<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
					<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float delay-200" />
				</>
			)}

			{/* Grid pattern overlay */}
			<div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

			{/* Content */}
			<div className="relative z-10 w-full">{children}</div>
		</div>
	);
}
