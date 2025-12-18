"use client";

import { SectionHeading, SpecTable } from "@/components/ui";
import { FadeIn } from "@/components/ui/FadeIn";
import { TECH_SPECS } from "@/lib/constants";

export function TechSpecs() {
	return (
		<section id="specs" className="py-24 bg-background-secondary scroll-mt-20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeading
					badge="Specifications"
					title="Technical Details"
					subtitle="Comprehensive specifications for procurement and technical evaluation."
				/>

				<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					<FadeIn direction="right">
						<SpecTable title="Hardware Specifications" specs={TECH_SPECS.hardware} />
					</FadeIn>
					<FadeIn delay={0.1} direction="left">
						<SpecTable title="Software Specifications" specs={TECH_SPECS.software} />
					</FadeIn>
				</div>
			</div>
		</section>
	);
}
