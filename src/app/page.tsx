import {
	HomeHero,
	Overview,
	ProductHighlight,
	SolutionsPreview,
	WhyChooseUs,
	CTABanner,
} from "@/components/sections/home";

export default function HomePage() {
	return (
		<>
			<HomeHero />
			<Overview />
			<ProductHighlight />
			<SolutionsPreview />
			<WhyChooseUs />
			<CTABanner />
		</>
	);
}
