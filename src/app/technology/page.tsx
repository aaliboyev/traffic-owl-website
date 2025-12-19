import type { Metadata } from "next";
import {
  AICapabilities,
  Compliance,
  HardwareInnovation,
  SoftwarePlatform,
  TechHero,
} from "@/components/sections/technology";

export const metadata: Metadata = {
  title: "Technology - AI & Hardware Innovation",
  description:
    "Discover the cutting-edge technology behind Traffic Owl. Advanced neural networks, industrial-grade hardware, and comprehensive software platform.",
};

export default function TechnologyPage() {
  return (
    <>
      <TechHero />
      <AICapabilities />
      <HardwareInnovation />
      <SoftwarePlatform />
      <Compliance />
    </>
  );
}
