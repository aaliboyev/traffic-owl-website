"use client";

import { Card, CardBody, Chip } from "@heroui/react";
import { CheckCircleIcon, ShieldIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui";
import { FadeIn } from "@/components/ui/FadeIn";

export function Compliance() {
  return (
    <section className="py-24 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Compliance"
          title="Built for California Standards"
          subtitle="Traffic Owl is designed to meet California's rigorous safety and enforcement requirements."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeIn direction="right">
            <Card className="bg-surface/50 border border-border h-full">
              <CardBody className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary flex items-center justify-center">
                    <ShieldIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <Chip
                      color="primary"
                      variant="flat"
                      size="sm"
                      className="mb-1"
                    >
                      State Law
                    </Chip>
                    <h3 className="text-xl font-semibold text-foreground">
                      AB 645 Compliant
                    </h3>
                  </div>
                </div>
                <p className="text-foreground-secondary mb-4">
                  California's AB 645 authorizes automated speed enforcement
                  pilot programs in select cities. Traffic Owl's Falcon system
                  is designed to meet all requirements of this groundbreaking
                  legislation.
                </p>
                <ul className="space-y-2">
                  {[
                    "Automated speed enforcement",
                    "Evidence-grade documentation",
                    "Privacy protections built-in",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-foreground-secondary"
                    >
                      <CheckCircleIcon className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </FadeIn>

          <FadeIn delay={0.1} direction="left">
            <Card className="bg-surface/50 border border-border h-full">
              <CardBody className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-secondary flex items-center justify-center">
                    <CheckCircleIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <Chip
                      color="secondary"
                      variant="flat"
                      size="sm"
                      className="mb-1"
                    >
                      Safety Initiative
                    </Chip>
                    <h3 className="text-xl font-semibold text-foreground">
                      Vision Zero Aligned
                    </h3>
                  </div>
                </div>
                <p className="text-foreground-secondary mb-4">
                  Vision Zero is California's commitment to eliminating traffic
                  fatalities and serious injuries. Traffic Owl directly supports
                  these objectives through comprehensive enforcement.
                </p>
                <ul className="space-y-2">
                  {[
                    "Reduce serious crashes",
                    "Protect vulnerable road users",
                    "Data-driven enforcement",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-foreground-secondary"
                    >
                      <CheckCircleIcon className="w-4 h-4 text-secondary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
