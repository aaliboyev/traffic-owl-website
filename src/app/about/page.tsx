import type { Metadata } from "next";
import {
	AboutHero,
	OurStory,
	Values,
	Partners,
} from "@/components/sections/about";

export const metadata: Metadata = {
	title: "About Us - Our Mission & Values",
	description:
		"Learn about Traffic Owl's mission to make roads safer through advanced AI technology. Our story, values, and partnerships.",
};

export default function AboutPage() {
	return (
		<>
			<AboutHero />
			<OurStory />
			<Values />
			<Partners />
		</>
	);
}
