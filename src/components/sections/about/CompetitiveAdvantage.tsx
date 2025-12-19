"use client";

import { Card, CardBody, Chip } from "@heroui/react";
import { SectionHeading } from "@/components/ui";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { CheckCircleIcon, XIcon } from "@/components/icons";

const ADVANTAGES = [
	{
		category: "Speed Verification",
		falcon: "Dual (radar + video)",
		others: "Single method only",
		highlight: true,
	},
	{
		category: "Violation Coverage",
		falcon: "10+ types",
		others: "1-2 types typically",
		highlight: true,
	},
	{
		category: "Deployment Options",
		falcon: "Stationary, mobile, portable",
		others: "Fixed installations only",
		highlight: true,
	},
	{
		category: "Smart City Features",
		falcon: "Full integration",
		others: "Enforcement only",
		highlight: true,
	},
];

export function CompetitiveAdvantage() {
	return (
		<section className="py-24 bg-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeading
					badge="Why Falcon"
					title="Built Different from Competitors"
					subtitle="See how Traffic Owl's Falcon system compares to traditional enforcement providers like Verra Mobility, RedSpeed, and Sensys Gatso."
				/>

				<FadeIn className="max-w-4xl mx-auto mb-12">
					<Card className="bg-surface/30 border border-border overflow-hidden">
						<CardBody className="p-0">
							<div className="grid grid-cols-3 bg-surface/50 border-b border-border">
								<div className="p-4 font-semibold text-foreground-secondary text-sm">
									Capability
								</div>
								<div className="p-4 font-semibold text-center">
									<span className="gradient-text">Traffic Owl Falcon</span>
								</div>
								<div className="p-4 font-semibold text-center text-foreground-secondary text-sm">
									Traditional Systems
								</div>
							</div>
							{ADVANTAGES.map((row, index) => (
								<div
									key={row.category}
									className={`grid grid-cols-3 ${index !== ADVANTAGES.length - 1 ? "border-b border-border/50" : ""}`}
								>
									<div className="p-4 text-sm font-medium text-foreground">
										{row.category}
									</div>
									<div className="p-4 text-center">
										<Chip
											color="primary"
											variant="flat"
											size="sm"
											startContent={<CheckCircleIcon className="w-3 h-3" />}
										>
											{row.falcon}
										</Chip>
									</div>
									<div className="p-4 text-center text-sm text-foreground-muted">
										{row.others}
									</div>
								</div>
							))}
						</CardBody>
					</Card>
				</FadeIn>

				<StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
					<StaggerItem>
						<Card className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 h-full">
							<CardBody className="p-6">
								<h3 className="font-semibold text-foreground mb-2">
									Our Advantage
								</h3>
								<p className="text-sm text-foreground-secondary">
									Accuracy via dual detection, wide violation coverage, modular deployment,
									smart-city extensibility, and unified Owl Grid platform.
								</p>
							</CardBody>
						</Card>
					</StaggerItem>
					<StaggerItem>
						<Card className="bg-surface/30 border border-border h-full">
							<CardBody className="p-6">
								<h3 className="font-semibold text-foreground mb-2">
									Competitors' Strength
								</h3>
								<p className="text-sm text-foreground-secondary">
									Longer U.S. operating history and existing certifications.
									We're the innovative newcomer with superior technology.
								</p>
							</CardBody>
						</Card>
					</StaggerItem>
				</StaggerContainer>
			</div>
		</section>
	);
}
