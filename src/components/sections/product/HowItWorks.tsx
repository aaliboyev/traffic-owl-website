"use client";

import type { IconName } from "@/components/icons";
import { SectionHeading, Timeline } from "@/components/ui";
import { FadeIn } from "@/components/ui/FadeIn";

const STEPS = [
  {
    title: "Dual Verification Detection",
    description:
      "Radar measurement and video frame-by-frame analysis work simultaneously to detect 10+ violation types with industry-leading accuracy.",
    icon: "camera" as IconName,
  },
  {
    title: "AI Processing",
    description:
      "On-device tensor processors analyze footage using neural networks. License plates are recognized with 98% accuracy even in challenging conditions.",
    icon: "chip" as IconName,
  },
  {
    title: "Evidence Capture",
    description:
      "Complete violation evidence packages are automatically generated with dual-verified data, timestamped images, video clips, and vehicle identification.",
    icon: "database" as IconName,
  },
  {
    title: "Owl Grid Transmission",
    description:
      "Encrypted data syncs to the Owl Grid central platform via 3G/4G or fiber for citywide monitoring, analytics, and citation processing.",
    icon: "server" as IconName,
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How It Works"
          title="From Detection to Enforcement"
          subtitle="A seamless automated workflow that ensures accurate and efficient traffic enforcement."
        />

        <FadeIn className="max-w-3xl mx-auto">
          <Timeline steps={STEPS} />
        </FadeIn>
      </div>
    </section>
  );
}
