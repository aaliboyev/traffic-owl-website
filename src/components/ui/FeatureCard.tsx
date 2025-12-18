"use client";

import { Card, CardBody } from "@heroui/react";
import { iconMap, type IconName } from "@/components/icons";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
	title: string;
	description: string;
	icon: IconName;
	className?: string;
	variant?: "default" | "compact";
}

export function FeatureCard({
	title,
	description,
	icon,
	className,
	variant = "default",
}: FeatureCardProps) {
	const Icon = iconMap[icon];

	return (
		<Card
			className={cn(
				"bg-surface/50 border border-border hover:border-primary/50 transition-all duration-300 group",
				"hover:shadow-lg hover:shadow-primary/5",
				className
			)}
		>
			<CardBody className={cn(variant === "default" ? "p-6" : "p-4")}>
				<div
					className={cn(
						"flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors",
						variant === "default" ? "w-14 h-14" : "w-10 h-10"
					)}
				>
					<Icon className={cn(variant === "default" ? "w-7 h-7" : "w-5 h-5")} />
				</div>
				<h3
					className={cn(
						"font-semibold text-foreground mb-2",
						variant === "default" ? "text-xl" : "text-lg"
					)}
				>
					{title}
				</h3>
				<p
					className={cn(
						"text-foreground-secondary leading-relaxed",
						variant === "default" ? "text-base" : "text-sm"
					)}
				>
					{description}
				</p>
			</CardBody>
		</Card>
	);
}
