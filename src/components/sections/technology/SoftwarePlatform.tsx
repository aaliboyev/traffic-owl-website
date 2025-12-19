"use client";

import { Card, CardBody } from "@heroui/react";
import {
  ChipIcon,
  DatabaseIcon,
  ServerIcon,
  ShieldIcon,
} from "@/components/icons";
import { SectionHeading } from "@/components/ui";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const PLATFORM_FEATURES = [
  {
    title: "Central Monitoring System",
    description:
      "Comprehensive dashboard for managing all enforcement units, viewing real-time status, and analyzing violation data.",
    icon: ServerIcon,
  },
  {
    title: "Analytics & Reporting",
    description:
      "Advanced analytics with customizable reports, traffic flow statistics, and violation trend analysis.",
    icon: DatabaseIcon,
  },
  {
    title: "Data Security",
    description:
      "End-to-end encryption, secure data transmission, and compliance with privacy regulations including CCPA.",
    icon: ShieldIcon,
  },
  {
    title: "Linux-Based OS",
    description:
      "Stable, secure operating system resistant to viruses and hacker attacks, with no licensing fees.",
    icon: ChipIcon,
  },
];

export function SoftwarePlatform() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Software"
          title="Powerful Platform"
          subtitle="A comprehensive software platform for managing, monitoring, and analyzing your traffic enforcement network."
        />

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Features */}
          <StaggerContainer className="space-y-4">
            {PLATFORM_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <StaggerItem key={feature.title}>
                  <Card className="bg-surface/30 border border-border hover:border-primary/30 transition-colors">
                    <CardBody className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-foreground-secondary">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Dashboard Preview */}
          <FadeIn delay={0.3} direction="left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl" />
              <div className="relative glass rounded-2xl p-6 border border-border">
                <div className="aspect-video bg-surface rounded-lg overflow-hidden">
                  {/* Mock Dashboard UI */}
                  <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-border">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-secondary" />
                        <span className="text-sm font-mono text-foreground">
                          Traffic Owl Dashboard
                        </span>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full bg-foreground-muted" />
                        <div className="w-3 h-3 rounded-full bg-foreground-muted" />
                        <div className="w-3 h-3 rounded-full bg-foreground-muted" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-4 grid grid-cols-3 gap-3">
                      {/* Stats Cards */}
                      <div className="col-span-2 space-y-3">
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { label: "Active Units", value: "24" },
                            { label: "Today", value: "156" },
                            { label: "Accuracy", value: "97%" },
                          ].map((stat) => (
                            <div
                              key={stat.label}
                              className="bg-background-secondary rounded-lg p-3"
                            >
                              <p className="text-xs text-foreground-muted">
                                {stat.label}
                              </p>
                              <p className="text-lg font-bold text-primary">
                                {stat.value}
                              </p>
                            </div>
                          ))}
                        </div>
                        {/* Chart placeholder */}
                        <div className="bg-background-secondary rounded-lg p-3 h-24 flex items-end gap-1">
                          {[40, 65, 45, 80, 55, 70, 60, 90, 75, 85].map(
                            (height, i) => (
                              <div
                                key={`bar-${height}-${i}`}
                                className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-t"
                                style={{ height: `${height}%` }}
                              />
                            ),
                          )}
                        </div>
                      </div>

                      {/* Map placeholder */}
                      <div className="bg-background-secondary rounded-lg p-3">
                        <div className="h-full grid-pattern opacity-30 relative">
                          {/* Dots representing cameras */}
                          <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-secondary animate-pulse" />
                          <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-primary animate-pulse delay-100" />
                          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-secondary animate-pulse delay-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
