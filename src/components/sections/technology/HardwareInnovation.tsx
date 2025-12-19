"use client";

import { Card, CardBody } from "@heroui/react";
import { BoltIcon, ShieldIcon, SunIcon, TargetIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const HARDWARE_INNOVATIONS = [
  {
    title: "Industrial-Grade Components",
    description:
      "Premium components from leading European, American, and Japanese manufacturers ensure long-term reliability and performance.",
    icon: ShieldIcon,
    details: [
      "Basler machine-vision cameras",
      "Industrial-grade processors",
      "Military-spec connectors",
    ],
  },
  {
    title: "Solar-Powered Operation",
    description:
      "Ultra-low 15W power consumption enables deployment with solar panels or wind generators, eliminating the need for grid connection.",
    icon: SunIcon,
    details: [
      "15W average consumption",
      "No grid permits required",
      "Reduced deployment costs",
    ],
  },
  {
    title: "Fanless, Sealed Design",
    description:
      "IP67-rated housing with no ventilation holes or filters ensures maintenance-free operation in all weather conditions.",
    icon: BoltIcon,
    details: [
      "No moving parts",
      "Dust and water resistant",
      "50,000 hour MTBF",
    ],
  },
  {
    title: "Quick Installation",
    description:
      "Under 6kg lightweight design allows single-person installation in under an hour without structural reinforcement.",
    icon: TargetIcon,
    details: [
      "< 6kg total weight",
      "< 1 hour installation",
      "No heavy equipment needed",
    ],
  },
];

export function HardwareInnovation() {
  return (
    <section className="py-24 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Hardware"
          title="Built to Last"
          subtitle="Industrial-grade hardware engineered for 24/7 outdoor operation in any environment."
        />

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {HARDWARE_INNOVATIONS.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <Card className="bg-surface/50 border border-border h-full">
                  <CardBody className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-foreground-secondary mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-2 text-sm text-foreground-secondary"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
