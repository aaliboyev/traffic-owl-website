import type { Metadata } from "next";
import {
  AboutHero,
  Compliance,
  Olympics2028,
  OurStory,
  Partners,
  Values,
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
      <Compliance />
      <Values />
      <Olympics2028 />
      <Partners />
    </>
  );
}
