"use client";

import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { SectionHeading } from "@/components/ui";
import { FadeIn } from "@/components/ui/FadeIn";
import {
	CameraIcon,
	ShieldIcon,
	SunIcon,
	ChipIcon,
	DatabaseIcon,
	ServerIcon,
} from "@/components/icons";

const HARDWARE_FEATURES = [
	{
		title: "5MP Machine Vision Camera",
		description: "Industrial-grade Basler camera with exceptional low-light performance and high-speed capture.",
		icon: CameraIcon,
	},
	{
		title: "Sealed IP67 Housing",
		description: "Fanless, dustproof, and waterproof design for maintenance-free outdoor operation.",
		icon: ShieldIcon,
	},
	{
		title: "Solar Power Ready",
		description: "15W consumption enables deployment with solar panels or wind generators anywhere.",
		icon: SunIcon,
	},
];

const SOFTWARE_FEATURES = [
	{
		title: "Neural Network AI",
		description: "Tensor architecture processor for real-time AI inference and computer vision processing.",
		icon: ChipIcon,
	},
	{
		title: "On-Device Storage",
		description: "180+ days of violation data storage with automatic management and backup.",
		icon: DatabaseIcon,
	},
	{
		title: "Cloud Integration",
		description: "REST API for seamless integration with municipal systems and Safe City platforms.",
		icon: ServerIcon,
	},
];

export function FeaturesGrid() {
	return (
		<section className="py-24 bg-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeading
					badge="Features"
					title="Built for Excellence"
					subtitle="Every component is engineered for reliability, accuracy, and ease of deployment."
				/>

				<div className="grid lg:grid-cols-2 gap-8">
					{/* Hardware Features */}
					<FadeIn direction="right">
						<Card className="bg-surface/30 border border-border h-full">
							<CardHeader className="pb-0">
								<h3 className="text-xl font-semibold text-foreground">
									Hardware Features
								</h3>
							</CardHeader>
							<Divider className="my-4" />
							<CardBody className="pt-0">
								<div className="space-y-6">
									{HARDWARE_FEATURES.map((feature) => {
										const Icon = feature.icon;
										return (
											<div key={feature.title} className="flex gap-4">
												<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
													<Icon className="w-6 h-6" />
												</div>
												<div>
													<h4 className="font-semibold text-foreground mb-1">
														{feature.title}
													</h4>
													<p className="text-sm text-foreground-secondary">
														{feature.description}
													</p>
												</div>
											</div>
										);
									})}
								</div>
							</CardBody>
						</Card>
					</FadeIn>

					{/* Software Features */}
					<FadeIn delay={0.1} direction="left">
						<Card className="bg-surface/30 border border-border h-full">
							<CardHeader className="pb-0">
								<h3 className="text-xl font-semibold text-foreground">
									Software Features
								</h3>
							</CardHeader>
							<Divider className="my-4" />
							<CardBody className="pt-0">
								<div className="space-y-6">
									{SOFTWARE_FEATURES.map((feature) => {
										const Icon = feature.icon;
										return (
											<div key={feature.title} className="flex gap-4">
												<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
													<Icon className="w-6 h-6" />
												</div>
												<div>
													<h4 className="font-semibold text-foreground mb-1">
														{feature.title}
													</h4>
													<p className="text-sm text-foreground-secondary">
														{feature.description}
													</p>
												</div>
											</div>
										);
									})}
								</div>
							</CardBody>
						</Card>
					</FadeIn>
				</div>
			</div>
		</section>
	);
}
