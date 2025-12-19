"use client";

import { Button, Card, CardBody } from "@heroui/react";
import Link from "next/link";
import {
  ArrowRightIcon,
  DatabaseIcon,
  ServerIcon,
  ShieldIcon,
} from "@/components/icons";
import { SectionHeading } from "@/components/ui";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const INTEGRATIONS = [
  {
    title: "Municipal Systems",
    description:
      "Seamless integration with existing traffic management and citation systems through our REST API.",
    icon: ServerIcon,
  },
  {
    title: "Safe City Platforms",
    description:
      "Compatible with major ITS (Intelligent Transportation System) and Safe City platforms.",
    icon: DatabaseIcon,
  },
  {
    title: "Secure Data Handling",
    description:
      "End-to-end encryption and compliance with data privacy regulations including CCPA.",
    icon: ShieldIcon,
  },
];

export function Integration() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Integration"
          title="Works With Your Systems"
          subtitle="Falcon is designed to integrate seamlessly with your existing infrastructure."
        />

        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12">
          {INTEGRATIONS.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <Card className="bg-surface/30 border border-border hover:border-primary/30 transition-colors h-full">
                  <CardBody className="p-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground-secondary">
                      {item.description}
                    </p>
                  </CardBody>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn className="text-center">
          <p className="text-foreground-secondary mb-6">
            Ready to see Falcon in action? Schedule a demo with our team.
          </p>
          <Button
            as={Link}
            href="/contact"
            color="primary"
            variant="shadow"
            size="lg"
            endContent={<ArrowRightIcon className="w-5 h-5" />}
            className="font-semibold"
          >
            Request a Demo
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
