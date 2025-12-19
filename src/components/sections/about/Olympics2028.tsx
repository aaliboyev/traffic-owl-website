"use client";

import { Card, CardBody } from "@heroui/react";
import { SectionHeading } from "@/components/ui";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { UsersIcon, ShieldIcon, SpeedIcon } from "@/components/icons";

const OLYMPICS_BENEFITS = [
	{
		title: "Millions of Visitors",
		description: "Olympic-scale traffic demands infrastructure that can handle unprecedented volume without compromising safety.",
		icon: UsersIcon,
	},
	{
		title: "Global Scrutiny",
		description: "The world will be watching. Modern enforcement technology projects a positive international image.",
		icon: ShieldIcon,
	},
	{
		title: "Predictable Flow",
		description: "Real-time traffic analytics ensure smooth operations near venues and key corridors.",
		icon: SpeedIcon,
	},
];

export function Olympics2028() {
	return (
		<section className="py-24 bg-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeading
					badge="2028 Olympics"
					title="Preparing for the World Stage"
					subtitle="The 2028 Los Angeles Olympics will bring unprecedented traffic demands to the region. Traffic Owl positions cities like Glendale to be ready."
				/>

				<StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12">
					{OLYMPICS_BENEFITS.map((benefit) => {
						const Icon = benefit.icon;
						return (
							<StaggerItem key={benefit.title}>
								<Card className="bg-surface/30 border border-border h-full hover:border-primary/30 transition-colors">
									<CardBody className="p-6 text-center">
										<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary flex items-center justify-center mx-auto mb-4">
											<Icon className="w-7 h-7" />
										</div>
										<h3 className="text-lg font-semibold text-foreground mb-2">
											{benefit.title}
										</h3>
										<p className="text-sm text-foreground-secondary">
											{benefit.description}
										</p>
									</CardBody>
								</Card>
							</StaggerItem>
						);
					})}
				</StaggerContainer>

				<FadeIn>
					<Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20">
						<CardBody className="p-8 text-center">
							<p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
								Falcon + Owl Grid ensure safer intersections, predictable traffic flow,
								and a positive international image for Los Angeles and surrounding cities
								hosting Olympic events and visitors.
							</p>
						</CardBody>
					</Card>
				</FadeIn>
			</div>
		</section>
	);
}
