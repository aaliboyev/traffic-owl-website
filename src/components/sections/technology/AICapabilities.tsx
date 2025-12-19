"use client";

import { Card, CardBody, Progress } from "@heroui/react";
import { BoltIcon, CameraIcon, ChipIcon, TargetIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const AI_FEATURES = [
  {
    title: "Neural Network Architecture",
    description:
      "Custom-designed deep learning models trained on millions of traffic scenarios for accurate violation detection.",
    icon: ChipIcon,
    stats: [
      { label: "Training Data", value: "10M+ images" },
      { label: "Model Updates", value: "Continuous" },
    ],
  },
  {
    title: "License Plate Recognition",
    description:
      "Advanced OCR with 95%+ accuracy even in challenging conditions like rain, fog, or low light.",
    icon: TargetIcon,
    stats: [
      { label: "Accuracy", value: "95%+" },
      { label: "Recognition Speed", value: "<100ms" },
    ],
  },
  {
    title: "Night Vision Processing",
    description:
      "Proprietary algorithms enhance low-light imagery, producing evidence-quality captures 24/7.",
    icon: CameraIcon,
    stats: [
      { label: "Low Light", value: "0.01 lux" },
      { label: "Night Quality", value: "Excellent" },
    ],
  },
  {
    title: "Real-time Analysis",
    description:
      "On-device tensor processing eliminates latency and enables instant violation detection.",
    icon: BoltIcon,
    stats: [
      { label: "Processing", value: "30 FPS" },
      { label: "Latency", value: "<50ms" },
    ],
  },
];

const DETECTION_CAPABILITIES = [
  { label: "Speed Violations (Dual Verification)", accuracy: 98 },
  { label: "Red Light Running", accuracy: 98 },
  { label: "License Plate Recognition", accuracy: 98 },
  { label: "Failure to Yield", accuracy: 96 },
  { label: "Lane & Turn Violations", accuracy: 95 },
  { label: "Phone Use Detection", accuracy: 94 },
];

export function AICapabilities() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="AI Technology"
          title="Intelligent Detection"
          subtitle="Our AI system combines multiple detection models for comprehensive traffic enforcement."
        />

        {/* AI Features Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-16">
          {AI_FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={feature.title}>
                <Card className="bg-surface/30 border border-border hover:border-primary/30 transition-colors h-full">
                  <CardBody className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary flex items-center justify-center">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-foreground-secondary mb-4">
                          {feature.description}
                        </p>
                        <div className="flex gap-4">
                          {feature.stats.map((stat) => (
                            <div key={stat.label}>
                              <p className="text-xs text-foreground-muted uppercase">
                                {stat.label}
                              </p>
                              <p className="text-sm font-semibold text-primary">
                                {stat.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Detection Accuracy */}
        <FadeIn className="max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Detection Accuracy Rates
          </h3>
          <div className="space-y-4">
            {DETECTION_CAPABILITIES.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-foreground">{item.label}</span>
                  <span className="text-sm font-semibold text-primary">
                    {item.accuracy}%
                  </span>
                </div>
                <Progress
                  value={item.accuracy}
                  color="primary"
                  className="h-2"
                  classNames={{
                    track: "bg-surface",
                    indicator: "bg-gradient-to-r from-primary to-secondary",
                  }}
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
