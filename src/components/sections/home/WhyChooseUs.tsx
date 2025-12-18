"use client";

import { Card, CardBody } from "@heroui/react";
import { SectionHeading } from "@/components/ui";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SunIcon, BoltIcon, TargetIcon, ClockIcon, ShieldIcon, ChipIcon } from "@/components/icons";

const DIFFERENTIATORS = [
	{
		title: "Solar Powered",
		description: "Ultra-low 15W consumption enables deployment anywhere without grid permits or infrastructure.",
		icon: SunIcon,
	},
	{
		title: "Rapid Installation",
		description: "Under 6kg lightweight design allows quick mounting by a single person, no reinforcement needed.",
		icon: BoltIcon,
	},
	{
		title: "95%+ Accuracy",
		description: "Advanced neural networks ensure high detection rates with minimal false positives.",
		icon: TargetIcon,
	},
	{
		title: "24/7 Operation",
		description: "Industrial-grade components rated for -40°C to +60°C with 50,000 hour MTBF.",
		icon: ClockIcon,
	},
	{
		title: "Secure by Design",
		description: "Linux-based system with end-to-end encryption protects against cyber threats.",
		icon: ShieldIcon,
	},
	{
		title: "Edge AI Processing",
		description: "On-device tensor processing eliminates latency and reduces bandwidth requirements.",
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
