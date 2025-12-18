"use client";

import { SectionHeading, Timeline } from "@/components/ui";
import { FadeIn } from "@/components/ui/FadeIn";
import type { IconName } from "@/components/icons";

const STEPS = [
	{
		title: "Violation Detection",
		description: "High-resolution cameras continuously monitor traffic. AI-powered video analytics detect violations in real-time, including speeding, red-light running, and more.",
		icon: "camera" as IconName,
	},
	{
		title: "AI Processing",
		description: "On-device tensor processors analyze footage using neural networks trained on millions of traffic scenarios. License plates are recognized with 95%+ accuracy.",
		icon: "chip" as IconName,
	},
	{
		title: "Evidence Capture",
		description: "Complete violation evidence packages are automatically generated, including timestamped images, video clips, and vehicle identification data.",
		icon: "database" as IconName,
	},
	{
		title: "Data Transmission",
		description: "Encrypted data is transmitted via 3G/4G or fiber optic networks to the central monitoring system for review and citation processing.",
		icon: "server" as IconName,
	},
];

export function HowItWorks() {
	return (
		<section className="py-24 bg-background-secondary">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeading
					badge="How It Works"
					title="From Detection to Enforcement"
					subtitle="A seamless automated workflow that ensures accurate and efficient traffic enforcement."
				/>

				<FadeIn className="max-w-3xl mx-auto">
					<Timeline steps={STEPS} />
				</FadeIn>
			</div>
		</section>
	);
}
