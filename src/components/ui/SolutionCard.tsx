"use client";

import { Card, CardBody, CardHeader, Chip } from "@heroui/react";
import { iconMap, type IconName, ArrowRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface SolutionCardProps {
	title: string;
	description: string;
	icon: IconName;
	benefits?: string[];
	href?: string;
	className?: string;
}

export function SolutionCard({
	title,
	description,
	icon,
	benefits,
	href,
	className,
}: SolutionCardProps) {
	const Icon = iconMap[icon];

	const cardContent = (
		<Card
			className={cn(
				"bg-surface/50 border border-border hover:border-primary/50 transition-all duration-300 group h-full",
				"hover:shadow-lg hover:shadow-primary/5",
				href && "cursor-pointer",
				className
			)}
		>
			<CardHeader className="flex gap-4 pb-2">
				<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
					<Icon className="w-6 h-6" />
				</div>
				<div className="flex flex-col flex-1">
					<h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
						{title}
						{href && (
							<ArrowRightIcon className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
						)}
					</h3>
				</div>
			</CardHeader>
			<CardBody className="pt-0">
				<p className="text-foreground-secondary text-sm leading-relaxed mb-4">
					{description}
				</p>
				{benefits && benefits.length > 0 && (
					<div className="flex flex-wrap gap-2">
						{benefits.map((benefit) => (
							<Chip
								key={benefit}
								size="sm"
								variant="flat"
								className="bg-surface text-foreground-secondary text-xs"
							>
								{benefit}
							</Chip>
						))}
					</div>
				)}
			</CardBody>
		</Card>
	);

	if (href) {
		return <Link href={href}>{cardContent}</Link>;
	}

	return cardContent;
}
