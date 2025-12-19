import type { Metadata } from "next";
import {
  CaseStudy,
  ComparisonTable,
  SolutionCards,
  SolutionsHero,
} from "@/components/sections/solutions";

export const metadata: Metadata = {
  title: "Solutions - Traffic Enforcement Applications",
  description:
    "Comprehensive traffic enforcement solutions including speed monitoring, red-light cameras, pedestrian safety, and AI-powered behavior detection.",
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <SolutionCards />
      <CaseStudy />
      <ComparisonTable />
    </>
  );
}
