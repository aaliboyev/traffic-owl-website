import {
  CTABanner,
  HomeHero,
  Overview,
  ProductHighlight,
  SolutionsPreview,
  WhyChooseUs,
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
