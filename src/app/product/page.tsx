import type { Metadata } from "next";
import {
	ProductHero,
	HowItWorks,
	FeaturesGrid,
	TechSpecs,
	Integration,
} from "@/components/sections/product";

export const metadata: Metadata = {
	title: "Falcon - AI Traffic Enforcement System",
	description:
		"Discover Falcon, our flagship AI-powered traffic violation detection system. Combining cutting-edge neural networks with industrial-grade hardware for unmatched accuracy.",
};

export default function ProductPage() {
	return (
		<>
			<ProductHero />
			<HowItWorks />
			<FeaturesGrid />
			<TechSpecs />
			<Integration />
		</>
	);
}
