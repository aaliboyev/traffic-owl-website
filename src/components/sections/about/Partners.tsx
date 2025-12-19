"use client";

import { Button, Card, CardBody } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const PARTNERS = [
  {
    name: "City of Glendale",
    type: "Municipal Partner",
    logo: "/partners/glendale.png",
    size: "h-14 w-14",
  },
  {
    name: "California DOT",
    type: "Regulatory",
    logo: "/partners/caltrans.svg",
    size: "h-14 w-auto",
  },
  {
    name: "Basler AG",
    type: "Hardware Partner",
    logo: "/partners/basler.svg",
    size: "h-8 w-auto",
  },
  {
    name: "NVIDIA",
    type: "AI Technology",
    logo: "/partners/nvidia.svg",
    size: "h-10 w-auto",
  },
];

export function Partners() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Partners"
          title="Working Together"
          subtitle="We're proud to partner with leading organizations in government and technology."
        />

        {/* Partner logos */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {PARTNERS.map((partner) => (
            <StaggerItem key={partner.name}>
              <Card className="bg-surface/30 border border-border h-full hover:border-primary/30 transition-colors">
                <CardBody className="p-6 text-center">
                  <div className="h-16 flex items-center justify-center mx-auto mb-4">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={56}
                      className={`${partner.size} grayscale brightness-200 opacity-60 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-300 object-contain`}
                    />
                  </div>
                  <p className="font-medium text-foreground text-sm">
                    {partner.name}
                  </p>
                  <p className="text-xs text-foreground-muted">
                    {partner.type}
                  </p>
                </CardBody>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-surface via-surface to-surface/50 border border-border">
            <CardBody className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Interested in Partnering?
              </h3>
              <p className="text-foreground-secondary mb-6">
                We're always looking for partners who share our vision of safer
                roads. Whether you're a city, technology company, or research
                institution, we'd love to hear from you.
              </p>
              <Button
                as={Link}
                href="/contact"
                color="primary"
                variant="shadow"
                endContent={<ArrowRightIcon className="w-5 h-5" />}
                className="font-semibold"
              >
                Get in Touch
              </Button>
            </CardBody>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
