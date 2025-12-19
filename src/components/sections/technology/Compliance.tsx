"use client";

import { Button, Card, CardBody } from "@heroui/react";
import Link from "next/link";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldIcon,
} from "@/components/icons";
import { SectionHeading } from "@/components/ui";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const COMPLIANCE_ITEMS = [
  {
    title: "California AB 645",
    description:
      "Fully compliant with California's automated speed enforcement pilot program requirements.",
  },
  {
    title: "CCPA Compliance",
    description:
      "Data handling practices meet California Consumer Privacy Act standards for citizen data protection.",
  },
  {
    title: "Evidence Standards",
    description:
      "All captured evidence meets legal standards for traffic violation prosecution.",
  },
  {
    title: "Data Retention",
    description:
      "Configurable data retention policies to meet local regulatory requirements.",
  },
  {
    title: "Audit Logging",
    description:
      "Complete audit trails for all system access and data modifications.",
  },
  {
    title: "Encryption Standards",
    description:
      "AES-256 encryption for data at rest and TLS 1.3 for data in transit.",
  },
];

export function Compliance() {
  return (
    <section className="py-24 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Compliance"
          title="Standards & Regulations"
          subtitle="Built with compliance in mind, meeting all relevant California and federal regulations."
        />

        <FadeIn className="max-w-4xl mx-auto">
          <Card className="bg-surface/30 border border-border">
            <CardBody className="p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary flex items-center justify-center">
                  <ShieldIcon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Regulatory Compliance
                  </h3>
                  <p className="text-foreground-secondary">
                    Traffic Owl is designed to meet all applicable regulations
                  </p>
                </div>
              </div>

              <StaggerContainer className="grid md:grid-cols-2 gap-4 mb-8">
                {COMPLIANCE_ITEMS.map((item) => (
                  <StaggerItem
                    key={item.title}
                    className="flex items-start gap-3 p-4 rounded-lg bg-background/50"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-foreground-secondary">
                        {item.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="text-center">
                <p className="text-foreground-secondary mb-4">
                  Have questions about compliance? Our team can provide detailed
                  documentation.
                </p>
                <Button
                  as={Link}
                  href="/contact"
                  color="primary"
                  variant="flat"
                  endContent={<ArrowRightIcon className="w-4 h-4" />}
                >
                  Contact Us
                </Button>
              </div>
            </CardBody>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
