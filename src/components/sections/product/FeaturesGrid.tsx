"use client";

import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import {
  CameraIcon,
  ChipIcon,
  DatabaseIcon,
  ServerIcon,
  ShieldIcon,
  SunIcon,
} from "@/components/icons";
import { SectionHeading } from "@/components/ui";
import { FadeIn } from "@/components/ui/FadeIn";

const HARDWARE_FEATURES = [
  {
    title: "Dual Verification System",
    description:
      "Industry-first radar measurement combined with video frame-by-frame analysis for superior speed enforcement accuracy.",
    icon: CameraIcon,
  },
  {
    title: "Modular Configuration",
    description:
      "Multiple measuring modules (Types 1-4), video modules (Types 1-3), and radar modules for tailored deployment.",
    icon: ShieldIcon,
  },
  {
    title: "Flexible Deployment",
    description:
      "Supports stationary, mobile, and portable configurations. 15W consumption enables solar-powered operation.",
    icon: SunIcon,
  },
];

const SOFTWARE_FEATURES = [
  {
    title: "Owl Grid Platform",
    description:
      "Unified central monitoring connecting all Falcon units with traffic flow analytics and citywide scalability.",
    icon: ServerIcon,
  },
  {
    title: "Neural Network AI",
    description:
      "Tensor architecture processor for real-time AI inference detecting 10+ violation types simultaneously.",
    icon: ChipIcon,
  },
  {
    title: "Smart City Integration",
    description:
      "REST API and cloud-based analytics with infrared, thermal imaging, RFID, and environmental sensor support.",
    icon: DatabaseIcon,
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Features"
          title="Built for Excellence"
          subtitle="Every component is engineered for reliability, accuracy, and ease of deployment."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Hardware Features */}
          <FadeIn direction="right">
            <Card className="bg-surface/30 border border-border h-full">
              <CardHeader className="pb-0">
                <h3 className="text-xl font-semibold text-foreground">
                  Hardware Features
                </h3>
              </CardHeader>
              <Divider className="my-4" />
              <CardBody className="pt-0">
                <div className="space-y-6">
                  {HARDWARE_FEATURES.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <div key={feature.title} className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-foreground-secondary">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardBody>
            </Card>
          </FadeIn>

          {/* Software Features */}
          <FadeIn delay={0.1} direction="left">
            <Card className="bg-surface/30 border border-border h-full">
              <CardHeader className="pb-0">
                <h3 className="text-xl font-semibold text-foreground">
                  Software Features
                </h3>
              </CardHeader>
              <Divider className="my-4" />
              <CardBody className="pt-0">
                <div className="space-y-6">
                  {SOFTWARE_FEATURES.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <div key={feature.title} className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-foreground-secondary">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardBody>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
