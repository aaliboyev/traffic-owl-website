import { Metadata } from "next";
import { GradientBackground } from "@/components/ui";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description: "Privacy Policy for Traffic Owl and the Falcon traffic enforcement system.",
};

export default function PrivacyPage() {
	return (
		<>
			<GradientBackground variant="hero" className="pt-32 pb-16">
				<div className="container mx-auto">
					<FadeIn>
						<h1 className="text-4xl sm:text-5xl font-bold text-foreground text-center mb-4">
							Privacy Policy
						</h1>
					</FadeIn>
					<FadeIn delay={0.1}>
						<p className="text-foreground-secondary text-center">
							Last updated: December 2024
						</p>
					</FadeIn>
				</div>
			</GradientBackground>

			<section className="py-16 bg-background">
				<div className="container mx-auto">
					<FadeIn>
						<div className="max-w-3xl mx-auto prose prose-invert">
							<div className="space-y-8 text-foreground-secondary">
								<div>
									<h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
									<p className="leading-relaxed">
										Traffic Owl ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our traffic enforcement systems.
									</p>
								</div>

								<div>
									<h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
									<p className="leading-relaxed mb-4">We may collect information about you in various ways, including:</p>
									<ul className="list-disc pl-6 space-y-2">
										<li><strong className="text-foreground">Personal Data:</strong> Name, email address, phone number, and organization when you contact us or request a demo.</li>
										<li><strong className="text-foreground">Traffic Data:</strong> Vehicle images, license plate information, and violation data collected by our enforcement systems for municipal clients.</li>
										<li><strong className="text-foreground">Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, and pages visited.</li>
									</ul>
								</div>

								<div>
									<h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
									<p className="leading-relaxed mb-4">We use the information we collect to:</p>
									<ul className="list-disc pl-6 space-y-2">
										<li>Respond to your inquiries and provide customer support</li>
										<li>Process traffic violation data on behalf of municipal clients</li>
										<li>Improve our website and services</li>
										<li>Comply with legal obligations and law enforcement requests</li>
										<li>Send you information about our products and services (with your consent)</li>
									</ul>
								</div>

								<div>
									<h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Sharing and Disclosure</h2>
									<p className="leading-relaxed">
										We do not sell your personal information. We may share data with municipal clients for traffic enforcement purposes, service providers who assist our operations, and law enforcement when required by law. All third parties are contractually obligated to protect your information.
									</p>
								</div>

								<div>
									<h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
									<p className="leading-relaxed">
										We implement industry-standard security measures including AES-256 encryption for data at rest, TLS 1.3 for data in transit, and regular security audits. However, no method of transmission over the Internet is 100% secure.
									</p>
								</div>

								<div>
									<h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Retention</h2>
									<p className="leading-relaxed">
										We retain personal data only as long as necessary for the purposes outlined in this policy or as required by law. Traffic violation data is retained according to municipal client requirements and applicable regulations.
									</p>
								</div>

								<div>
									<h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights (CCPA)</h2>
									<p className="leading-relaxed mb-4">If you are a California resident, you have the right to:</p>
									<ul className="list-disc pl-6 space-y-2">
										<li>Know what personal information we collect about you</li>
										<li>Request deletion of your personal information</li>
										<li>Opt-out of the sale of your personal information (we do not sell personal data)</li>
										<li>Non-discrimination for exercising your privacy rights</li>
									</ul>
								</div>

								<div>
									<h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Us</h2>
									<p className="leading-relaxed">
										If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
									</p>
									<p className="mt-4">
										<strong className="text-foreground">Email:</strong> privacy@trafficowl.com<br />
										<strong className="text-foreground">Address:</strong> Glendale, California
									</p>
								</div>
							</div>
						</div>
					</FadeIn>
				</div>
			</section>
		</>
	);
}
