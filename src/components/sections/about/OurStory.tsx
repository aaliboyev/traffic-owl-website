"use client";

import { Card, CardBody } from "@heroui/react";
import { SectionHeading } from "@/components/ui";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function OurStory() {
	return (
		<section className="py-24 bg-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Content */}
					<FadeIn direction="right">
						<div>
							<SectionHeading
								badge="Our Story"
								title="Built for the Future"
								align="left"
							/>

							<div className="space-y-4 text-foreground-secondary leading-relaxed">
								<p>
									Traffic Owl emerged from a recognition that traditional traffic
									enforcement technology hadn't kept pace with advances in AI and
									computer vision. We set out to build something better.
								</p>
								<p>
									Our team combines expertise in machine learning, industrial hardware
									design, and municipal technology deployment. We've worked with cities
									across the country to understand their unique challenges and needs.
								</p>
								<p>
									When Glendale announced its preparations for the 2028 Los Angeles
									Olympics, we saw an opportunity to partner with a forward-thinking
									city to showcase what modern traffic enforcement can achieve.
								</p>
								<p>
									Today, Traffic Owl represents the cutting edge of traffic enforcement
									technology: AI-powered, solar-ready, and built for the demands of
									modern cities.
								</p>
							</div>
						</div>
					</FadeIn>

					{/* Visual */}
					<FadeIn delay={0.2} direction="left">
						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl" />
							<Card className="relative bg-surface/50 border border-border">
								<CardBody className="p-8">
									<StaggerContainer className="space-y-6">
										{/* Timeline items */}
										{[
											{ year: "2022", event: "Traffic Owl founded" },
											{ year: "2023", event: "Falcon system development begins" },
											{ year: "2024", event: "Glendale partnership announced" },
											{ year: "2028", event: "LA Olympics deployment target" },
										].map((item) => (
											<StaggerItem
												key={item.year}
												className="flex items-center gap-4"
											>
												<div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
													<span className="text-lg font-bold gradient-text">
														{item.year}
													</span>
												</div>
												<div>
													<p className="font-medium text-foreground">{item.event}</p>
												</div>
											</StaggerItem>
										))}
									</StaggerContainer>
								</CardBody>
							</Card>
						</div>
					</FadeIn>
				</div>
			</div>
		</section>
	);
}
