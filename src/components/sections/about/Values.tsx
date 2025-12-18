"use client";

import { Card, CardBody } from "@heroui/react";
import { SectionHeading } from "@/components/ui";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { VALUES } from "@/lib/constants";
import { iconMap, type IconName } from "@/components/icons";

export function Values() {
	return (
		<section className="py-24 bg-background-secondary">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeading
					badge="Our Values"
					title="What Drives Us"
					subtitle="Our core values guide everything we do, from product development to customer relationships."
				/>

				<StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{VALUES.map((value) => {
						const Icon = iconMap[value.icon as IconName];
						return (
							<StaggerItem key={value.title}>
								<Card
									className="bg-surface/50 border border-border hover:border-primary/30 transition-colors text-center h-full"
								>
									<CardBody className="p-6">
										<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary flex items-center justify-center mx-auto mb-4">
											{Icon && <Icon className="w-8 h-8" />}
										</div>
										<h3 className="text-lg font-semibold text-foreground mb-2">
											{value.title}
										</h3>
										<p className="text-sm text-foreground-secondary">
											{value.description}
										</p>
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
