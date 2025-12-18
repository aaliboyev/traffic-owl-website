"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { SectionHeading, FeatureCard } from "@/components/ui";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { ArrowRightIcon } from "@/components/icons";

const HIGHLIGHT_FEATURES = [
	{
		title: "AI-Powered Vision",
		description: "Neural networks trained to detect multiple violation types with 95%+ accuracy.",
		icon: "ai" as const,
	},
	{
		title: "Solar Powered",
		description: "15W consumption allows deployment anywhere without grid connection.",
		icon: "sun" as const,
	},
	{
		title: "Instant Processing",
		description: "On-device edge computing for real-time violation detection and evidence capture.",
		icon: "bolt" as const,
	},
	{
		title: "24/7 Operation",
		description: "High-clarity night vision ensures round-the-clock enforcement capability.",
		icon: "clock" as const,
	},
];

export function ProductHighlight() {
	return (
		<section className="py-24 bg-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeading
					badge="Introducing Falcon"
					title="Next-Generation Traffic Enforcement"
					subtitle="The Falcon system combines cutting-edge AI with industrial-grade hardware for unmatched detection capabilities."
				/>

				{/* Features Grid */}
				<StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
					{HIGHLIGHT_FEATURES.map((feature) => (
						<StaggerItem key={feature.title}>
							<FeatureCard
								title={feature.title}
								description={feature.description}
								icon={feature.icon}
								variant="compact"
							/>
						</StaggerItem>
					))}
				</StaggerContainer>

				{/* CTA */}
				<FadeIn className="text-center">
					<Button
						as={Link}
						href="/product"
						color="primary"
						variant="flat"
						size="lg"
						endContent={<ArrowRightIcon className="w-5 h-5" />}
						className="font-semibold"
					>
						Learn More About Falcon
					</Button>
				</FadeIn>
			</div>
		</section>
	);
}
