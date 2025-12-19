"use client";

import { Button, Card, CardBody } from "@heroui/react";
import Link from "next/link";
import {
  ArrowRightIcon,
  ClockIcon,
  MapPinIcon,
  ShieldIcon,
  TargetIcon,
} from "@/components/icons";
import { FadeIn } from "@/components/ui/FadeIn";

const CASE_STUDY_STATS = [
  { icon: MapPinIcon, label: "Location", value: "Glendale, CA" },
  { icon: TargetIcon, label: "Target", value: "2028 Olympics" },
  { icon: ShieldIcon, label: "Focus", value: "Road Safety" },
  { icon: ClockIcon, label: "Timeline", value: "2024-2028" },
];

export function CaseStudy() {
  return (
    <section className="py-24 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-surface via-surface to-surface/50 border border-border overflow-hidden">
            <CardBody className="p-0">
              <div className="grid md:grid-cols-2">
                {/* Content */}
                <div className="p-8 md:p-10">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-secondary bg-secondary/10 rounded-full mb-4">
                    Pilot Program
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Glendale 2028 Initiative
                  </h2>
                  <p className="text-foreground-secondary mb-6 leading-relaxed">
                    Traffic Owl is partnering with the City of Glendale to
                    prepare for the 2028 Olympics. Our comprehensive traffic
                    enforcement system will help ensure safe roads for residents
                    and visitors during this historic event.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {CASE_STUDY_STATS.map((stat) => {
                      const Icon = stat.icon;
                      return (
                        <div
                          key={stat.label}
                          className="flex items-center gap-2"
                        >
                          <Icon className="w-4 h-4 text-primary" />
                          <div>
                            <p className="text-xs text-foreground-muted uppercase">
                              {stat.label}
                            </p>
                            <p className="text-sm font-semibold text-foreground">
                              {stat.value}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <Button
                    as={Link}
                    href="/contact"
                    color="primary"
                    variant="flat"
                    endContent={<ArrowRightIcon className="w-4 h-4" />}
                  >
                    Learn More
                  </Button>
                </div>

                {/* Visual */}
                <div className="relative bg-surface p-8 flex items-center justify-center min-h-[300px] overflow-hidden">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

                  {/* Grid pattern */}
                  <div className="absolute inset-0 grid-pattern opacity-10" />

                  {/* Animated rings - Olympic inspired */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-48 h-48 rounded-full border border-primary/20 animate-pulse" />
                    <div
                      className="absolute w-64 h-64 rounded-full border border-secondary/10 animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    />
                    <div
                      className="absolute w-80 h-80 rounded-full border border-primary/5 animate-pulse"
                      style={{ animationDelay: "1s" }}
                    />
                  </div>

                  {/* Floating particles */}
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-float" />
                  <div
                    className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-secondary/40 rounded-full animate-float"
                    style={{ animationDelay: "1s" }}
                  />
                  <div
                    className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-primary/30 rounded-full animate-float"
                    style={{ animationDelay: "2s" }}
                  />
                  <div
                    className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-secondary/30 rounded-full animate-float"
                    style={{ animationDelay: "0.5s" }}
                  />

                  {/* Main content */}
                  <div className="relative text-center z-10">
                    <div className="text-7xl md:text-8xl font-bold gradient-text mb-2 tracking-tight">
                      2028
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-primary" />
                      <p className="text-lg font-semibold text-foreground">
                        LA Olympics
                      </p>
                      <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-secondary" />
                    </div>
                    <p className="text-sm text-foreground-secondary">
                      Preparing Glendale for the world stage
                    </p>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
