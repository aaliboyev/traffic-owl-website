"use client";

import { GradientBackground } from "@/components/ui";
import { FadeIn } from "@/components/ui/FadeIn";

export function SolutionsHero() {
	return (
		<GradientBackground variant="hero" className="pt-32 pb-20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto text-center">
					<FadeIn>
						<span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20 mb-6">
							Solutions
						</span>
					</FadeIn>

					<FadeIn delay={0.1}>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
							Comprehensive{" "}
							<span className="gradient-text">Traffic Enforcement</span>
						</h1>
					</FadeIn>

					<FadeIn delay={0.2}>
						<p className="text-lg text-foreground-secondary">
							From speed monitoring to AI-powered behavior detection, Traffic Owl provides
							a complete suite of enforcement solutions for modern cities.
						</p>
					</FadeIn>
				</div>
			</div>
		</GradientBackground>
	);
}
