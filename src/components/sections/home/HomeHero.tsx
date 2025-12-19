"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { ArrowRightIcon, ChevronDownIcon } from "@/components/icons";
import { GradientBackground } from "@/components/ui";
import { FadeIn } from "@/components/ui/FadeIn";

export function HomeHero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <GradientBackground
      variant="hero"
      className="min-h-screen flex items-center"
    >
      <div className="container mx-auto py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20 mb-8">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              Preparing Glendale for 2028 Olympics
            </span>
          </FadeIn>

          {/* Main Heading */}
          <FadeIn delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
              AI-Powered Traffic{" "}
              <span className="gradient-text">Enforcement</span> for Safer
              Streets
            </h1>
          </FadeIn>

          {/* Subtitle */}
          <FadeIn delay={0.2}>
            <p className="text-lg sm:text-xl text-foreground-secondary max-w-2xl mx-auto mb-10">
              Advanced violation detection technology that makes roads safer for
              everyone. Introducing Falcon - the next generation of intelligent
              traffic monitoring systems.
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/product"
                color="primary"
                variant="shadow"
                size="lg"
                endContent={<ArrowRightIcon className="w-5 h-5" />}
                className="font-semibold text-base px-8"
              >
                Explore Falcon
              </Button>
              <Button
                as={Link}
                href="/contact"
                variant="bordered"
                size="lg"
                className="font-semibold text-base px-8 border-border hover:border-primary"
              >
                Request Demo
              </Button>
            </div>
          </FadeIn>

          {/* Video Showcase */}
          <FadeIn delay={0.4}>
            <div className="mt-16">
              <div className="relative max-w-3xl mx-auto">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-3xl opacity-50" />

                {/* Video container with animated border */}
                <div className="relative">
                  {/* Outer glow layer */}
                  <div className="absolute -inset-[1px] rounded-2xl overflow-hidden">
                    <div className="absolute -inset-[100%] bg-gradient-conic animate-spin-slow origin-center opacity-70 blur-sm" />
                  </div>

                  {/* Main border container */}
                  <div className="relative rounded-2xl p-[1px] overflow-hidden">
                    {/* Animated border */}
                    <div className="absolute -inset-[100%] bg-gradient-conic animate-spin-slow origin-center" />

                    {/* Video with background */}
                    <div className="relative rounded-2xl overflow-hidden bg-background">
                      <video
                        src="https://frrygwgnwimju6id.public.blob.vercel-storage.com/traffic-watch-home-compressed.mp4"
                        className="w-full aspect-video object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            type="button"
            onClick={scrollToContent}
            className="p-2 text-foreground-muted hover:text-primary transition-colors"
            aria-label="Scroll to content"
          >
            <ChevronDownIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </GradientBackground>
  );
}
