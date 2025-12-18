import { Metadata } from "next";
import { GradientBackground } from "@/components/ui";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
	title: "Terms of Service",
	description: "Terms of Service for Traffic Owl and the Falcon traffic enforcement system.",
};

export default function TermsPage() {
	return (
		<>
			<GradientBackground variant="hero" className="pt-32 pb-16">
				<div className="container mx-auto">
					<FadeIn>
						<h1 className="text-4xl sm:text-5xl font-bold text-foreground text-center mb-4">
							Terms of Service
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
									<h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
									<p className="leading-relaxed">
										By accessing or using the Traffic Owl website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
									</p>
								</div>

								<div>
									<h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Services</h2>
									<p className="leading-relaxed">
										Traffic Owl provides AI-powered traffic enforcement systems, including the Falcon violation detection system, to municipal clients. Our website provides information about our products and services and allows visitors to request demonstrations and contact our team.
									</p>
								</div>

								<div>
									<h2 className="text-2xl font-semibold text-foreground mb-4">3. Use of Website</h2>
									<p className="leading-relaxed mb-4">You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
									<ul className="list-disc pl-6 space-y-2">
										<li>Use the website in any way that violates applicable laws or regulations</li>
										<li>Attempt to gain unauthorized access to our systems or networks</li>
										<li>Interfere with or disrupt the website or servers</li>
										<li>Transmit any malicious code or harmful content</li>
										<li>Collect or harvest any information from our website without permission</li>
									</ul>
								</div>

								<div>
									<h2 className="text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
									<p className="leading-relaxed">
										All content on this website, including text, graphics, logos, images, and software, is the property of Traffic Owl or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
									</p>
								</div>

								<div>
									<h2 className="text-2xl font-semibold text-foreground mb-4">5. Municipal Client Services</h2>
									<p className="leading-relaxed">
										Traffic enforcement services provided to municipal clients are governed by separate service agreements. These Terms of Service apply to website visitors and do not supersede any agreements between Traffic Owl and its municipal clients.
									</p>
								</div>

								<div>
									<h2 className="text-2xl font-semibold text-foreground mb-4">6. Disclaimer of Warranties</h2>
									<p className="leading-relaxed">
										This website and its content are provided "as is" without warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
									</p>
								</div>

								<div>
									<h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
									<p className="leading-relaxed">
										To the fullest extent permitted by law, Traffic Owl shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the website or services.
									</p>
								</div>

								<div>
									<h2 className="text-2xl font-semibold text-foreground mb-4">8. Indemnification</h2>
									<p className="leading-relaxed">
										You agree to indemnify and hold harmless Traffic Owl, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the website or violation of these Terms.
									</p>
								</div>

								<div>
									<h2 className="text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
									<p className="leading-relaxed">
										These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts located in Los Angeles County, California.
									</p>
								</div>

								<div>
									<h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to Terms</h2>
									<p className="leading-relaxed">
										We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes acceptance of the new Terms.
									</p>
								</div>

								<div>
									<h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Information</h2>
									<p className="leading-relaxed">
										If you have any questions about these Terms of Service, please contact us at:
									</p>
									<p className="mt-4">
										<strong className="text-foreground">Email:</strong> legal@trafficowl.com<br />
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
