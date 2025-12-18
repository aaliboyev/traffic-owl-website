"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRightIcon } from "@/components/icons";

export function CTABanner() {
	return (
		<section className="py-24 bg-gradient-to-br from-surface via-background to-surface relative overflow-hidden">
			{/* Background decoration */}
			<div className="absolute inset-0">
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="max-w-3xl mx-auto text-center">
					<FadeIn>
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
							Ready to Make Your Streets{" "}
							<span className="gradient-text">Safer</span>?
						</h2>
					</FadeIn>
					<FadeIn delay={0.1}>
						<p className="text-lg text-foreground-secondary mb-10 max-w-xl mx-auto">
							Join Glendale in preparing for the 2028 Olympics with next-generation traffic enforcement technology.
						</p>
					</FadeIn>
					<FadeIn delay={0.2}>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								as={Link}
								href="/contact"
								color="primary"
								variant="shadow"
								size="lg"
								endContent={<ArrowRightIcon className="w-5 h-5" />}
								className="font-semibold text-base px-8"
							>
								Request a Demo
							</Button>
							<Button
								as={Link}
								href="/technology"
								variant="bordered"
								size="lg"
								className="font-semibold text-base px-8 border-border hover:border-primary"
							>
								Learn About Our Technology
							</Button>
						</div>
					</FadeIn>
				</div>
			</div>
		</section>
	);
}
