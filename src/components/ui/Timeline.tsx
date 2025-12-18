"use client";

import { cn } from "@/lib/utils";
import { iconMap, type IconName } from "@/components/icons";

interface TimelineStep {
	title: string;
	description: string;
	icon: IconName;
}

interface TimelineProps {
	steps: TimelineStep[];
	className?: string;
}

export function Timeline({ steps, className }: TimelineProps) {
	return (
		<div className={cn("relative", className)}>
			{/* Connecting line */}
			<div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-secondary hidden md:block" />

			<div className="space-y-8 md:space-y-12">
				{steps.map((step, index) => {
					const Icon = iconMap[step.icon];
					return (
						<div
							key={step.title}
							className="relative flex flex-col md:flex-row gap-4 md:gap-8 group"
						>
							{/* Step number / icon */}
							<div className="flex items-center gap-4 md:block">
								<div
									className={cn(
										"relative z-10 flex items-center justify-center w-12 h-12 rounded-full",
										"bg-surface border-2 border-primary text-primary",
										"group-hover:bg-primary group-hover:text-background transition-colors"
									)}
								>
									<Icon className="w-5 h-5" />
								</div>
								<span className="md:hidden text-sm font-medium text-foreground-muted">
									Step {index + 1}
								</span>
							</div>

							{/* Content */}
							<div
								className={cn(
									"flex-1 p-6 rounded-xl bg-surface/50 border border-border",
									"group-hover:border-primary/50 transition-colors"
								)}
							>
								<div className="flex items-center gap-2 mb-2">
									<span className="hidden md:inline-block text-xs font-semibold text-primary uppercase tracking-wider">
										Step {index + 1}
									</span>
								</div>
								<h3 className="text-xl font-semibold text-foreground mb-2">
									{step.title}
								</h3>
								<p className="text-foreground-secondary leading-relaxed">
									{step.description}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
