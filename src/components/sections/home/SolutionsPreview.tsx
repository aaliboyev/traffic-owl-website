"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { SectionHeading, SolutionCard } from "@/components/ui";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { ArrowRightIcon } from "@/components/icons";
import type { IconName } from "@/components/icons";

const PREVIEW_SOLUTIONS = [
	{
		title: "Speed Enforcement",
		description: "Automated speed monitoring invisible to radar detectors with high accuracy license plate recognition.",
		icon: "speed" as IconName,
		benefits: ["High-speed capture", "Night vision"],
	},
	{
		title: "Red-Light Cameras",
		description: "24/7 intersection monitoring to prevent dangerous violations and reduce accidents.",
		icon: "traffic-light" as IconName,
		benefits: ["Multi-lane coverage", "Auto evidence"],
	},
	{
		title: "Pedestrian Safety",
		description: "Crosswalk protection ensuring drivers yield to pedestrians for safer streets.",
		icon: "pedestrian" as IconName,
		benefits: ["High clarity imaging", "Compliance ready"],
	},
	{
		title: "AI Detection",
		description: "Advanced neural networks detect seatbelt, phone use, and headlight violations.",
		icon: "ai" as IconName,
		benefits: ["Real-time AI", "Continuous learning"],
	},
];

export function SolutionsPreview() {
	return (
		<section className="py-24 bg-background-secondary">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeading
					badge="Solutions"
					title="Comprehensive Traffic Enforcement"
					subtitle="From speed monitoring to AI-powered behavior detection, Traffic Owl covers all your enforcement needs."
				/>

				{/* Solutions Grid */}
				<StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
					{PREVIEW_SOLUTIONS.map((solution) => (
						<StaggerItem key={solution.title}>
							<SolutionCard
								title={solution.title}
								description={solution.description}
								icon={solution.icon}
								benefits={solution.benefits}
							/>
						</StaggerItem>
					))}
				</StaggerContainer>

				{/* CTA */}
				<FadeIn className="text-center">
					<Button
						as={Link}
						href="/solutions"
						color="primary"
						variant="flat"
						size="lg"
						endContent={<ArrowRightIcon className="w-5 h-5" />}
						className="font-semibold"
					>
						Explore All Solutions
					</Button>
				</FadeIn>
			</div>
		</section>
	);
}
