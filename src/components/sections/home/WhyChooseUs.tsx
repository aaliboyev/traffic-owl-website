"use client";

import { Card, CardBody } from "@heroui/react";
import { SectionHeading } from "@/components/ui";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SunIcon, BoltIcon, TargetIcon, ClockIcon, ShieldIcon, ChipIcon } from "@/components/icons";

const DIFFERENTIATORS = [
	{
		title: "Dual Verification",
		description: "Industry-first radar + video frame-by-frame analysis for superior speed enforcement accuracy.",
		icon: TargetIcon,
	},
	{
		title: "10+ Violation Types",
		description: "Broadest coverage: speeding, red-light, illegal turns, failure to yield, and more from one system.",
		icon: ShieldIcon,
	},
	{
		title: "Flexible Deployment",
		description: "Modular design supports stationary, mobile, and portable configurations for any scenario.",
		icon: BoltIcon,
	},
	{
		title: "24/7 Unattended",
		description: "Designed for continuous autonomous operation with 15W low-power consumption.",
		icon: ClockIcon,
	},
	{
		title: "Made in California",
		description: "Locally manufactured and serviced for reliable procurement and faster support.",
		icon: SunIcon,
	},
	{
		title: "Owl Grid Platform",
		description: "Unified central monitoring with traffic analytics and scalable citywide deployment.",
		icon: ChipIcon,
	},
];

export function WhyChooseUs() {
	return (
		<section className="py-24 bg-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeading
					badge="Why Traffic Owl"
					title="Built Different. Built Better."
					subtitle="Our technology sets new standards for traffic enforcement systems."
				/>

				{/* Differentiators Grid */}
				<StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{DIFFERENTIATORS.map((item) => {
						const Icon = item.icon;
						return (
							<StaggerItem key={item.title}>
								<Card
									className="bg-surface/30 border border-border hover:border-primary/30 transition-all duration-300 group"
								>
									<CardBody className="p-6">
										<div className="flex items-start gap-4">
											<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary group-hover:scale-110 transition-transform">
												<Icon className="w-6 h-6" />
											</div>
											<div className="flex-1">
												<h3 className="text-lg font-semibold text-foreground mb-1">
													{item.title}
												</h3>
												<p className="text-sm text-foreground-secondary leading-relaxed">
													{item.description}
												</p>
											</div>
										</div>
									</CardBody>
								</Card>
							</StaggerItem>
						);
					})}
				</StaggerContainer>
			</div>
		</section>
	);
}
