"use client";

import { Button, Chip } from "@heroui/react";
import Link from "next/link";
import { GradientBackground, VideoPlayer } from "@/components/ui";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRightIcon } from "@/components/icons";

const SPEC_BADGES = [
	{ label: "Dual Verification", color: "primary" as const },
	{ label: "10+ Violation Types", color: "secondary" as const },
	{ label: "24/7 Unattended", color: "primary" as const },
	{ label: "Made in California", color: "secondary" as const },
];

const VIDEO_URL = "https://frrygwgnwimju6id.public.blob.vercel-storage.com/traffic_owl_compressed.mp4";

export function ProductHero() {
	return (
		<GradientBackground variant="hero" className="pt-32 pb-24">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Content */}
					<div>
						<FadeIn>
							<span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20 mb-6">
								<span className="w-2 h-2 bg-secondary rounded-full" />
								Falcon System
							</span>
						</FadeIn>

						<FadeIn delay={0.1}>
							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
								The Future of{" "}
								<span className="gradient-text">Traffic Enforcement</span>
							</h1>
						</FadeIn>

						<FadeIn delay={0.2}>
							<p className="text-lg text-foreground-secondary mb-8">
								Falcon is a multi-violation automated enforcement unit designed for 24/7 unattended operation.
								Featuring industry-first dual verification—radar and video frame-by-frame analysis—it delivers
								superior accuracy and evidentiary robustness. Available in stationary, mobile, and portable configurations.
							</p>
						</FadeIn>

						{/* Spec Badges */}
						<FadeIn delay={0.3}>
							<div className="flex flex-wrap gap-2 mb-8">
								{SPEC_BADGES.map((badge) => (
									<Chip
										key={badge.label}
										color={badge.color}
										variant="flat"
										size="lg"
										className="font-semibold"
									>
										{badge.label}
									</Chip>
								))}
							</div>
						</FadeIn>

						{/* CTA */}
						<FadeIn delay={0.4}>
							<div className="flex flex-col sm:flex-row gap-4">
								<Button
									as={Link}
									href="/contact"
									color="primary"
									variant="shadow"
									size="lg"
									endContent={<ArrowRightIcon className="w-5 h-5" />}
									className="font-semibold"
								>
									Request Demo
								</Button>
								<Button
									as={Link}
									href="#specs"
									variant="bordered"
									size="lg"
									className="font-semibold border-border hover:border-primary"
								>
									View Specifications
								</Button>
							</div>
						</FadeIn>
					</div>

					{/* Product Video */}
					<FadeIn delay={0.2} direction="left">
						<div className="relative">
							{/* Glow */}
							<div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl opacity-50" />

							{/* Video Card */}
							<div className="relative glass rounded-2xl p-4 border border-border">
								<VideoPlayer
									src={VIDEO_URL}
									className="aspect-video"
									showFullscreen
								/>
							</div>
						</div>
					</FadeIn>
				</div>
			</div>
		</GradientBackground>
	);
}
