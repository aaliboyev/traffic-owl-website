"use client";

import { Card, CardBody, CardHeader, Chip, Divider } from "@heroui/react";
import { SectionHeading } from "@/components/ui";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SOLUTIONS } from "@/lib/constants";
import {
	SpeedIcon,
	TrafficLightIcon,
	PedestrianIcon,
	RailroadIcon,
	AIIcon,
	TruckIcon,
} from "@/components/icons";

const iconMap = {
	"speed-enforcement": SpeedIcon,
	"red-light": TrafficLightIcon,
	pedestrian: PedestrianIcon,
	"lane-violations": TrafficLightIcon,
	railroad: RailroadIcon,
	"driver-behavior": AIIcon,
	"vehicle-compliance": TruckIcon,
	"traffic-analytics": SpeedIcon,
};

export function SolutionCards() {
	return (
		<section className="py-24 bg-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeading
					title="Enforcement Solutions"
					subtitle="Each solution is optimized for specific enforcement scenarios while sharing a common, reliable platform."
				/>

				<StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{SOLUTIONS.map((solution) => {
						const Icon = iconMap[solution.id as keyof typeof iconMap];
						return (
							<StaggerItem key={solution.id}>
								<Card
									className="bg-surface/30 border border-border hover:border-primary/30 transition-all duration-300 h-full"
								>
									<CardHeader className="flex gap-4 pb-2">
										<div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
											{Icon && <Icon className="w-7 h-7" />}
										</div>
										<div className="flex flex-col">
											<h3 className="text-lg font-semibold text-foreground">
												{solution.title}
											</h3>
										</div>
									</CardHeader>
									<Divider />
									<CardBody>
										<p className="text-sm text-foreground-secondary mb-4 leading-relaxed">
											{solution.description}
										</p>

										{/* Sub-features for AI detection */}
										{solution.subFeatures && (
											<div className="mb-4 space-y-2">
												{solution.subFeatures.map((sub) => (
													<div
														key={sub.name}
														className="flex items-start gap-2 text-sm"
													>
														<span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
														<div>
															<span className="font-medium text-foreground">
																{sub.name}:
															</span>{" "}
															<span className="text-foreground-secondary">
																{sub.description}
															</span>
														</div>
													</div>
												))}
											</div>
										)}

										{/* Benefits */}
										<div className="flex flex-wrap gap-2">
											{solution.benefits.map((benefit) => (
												<Chip
													key={benefit}
													size="sm"
													variant="flat"
													className="bg-primary/10 text-primary text-xs"
												>
													{benefit}
												</Chip>
											))}
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
