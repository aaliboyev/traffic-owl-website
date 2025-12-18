import type { Metadata } from "next";
import {
	ContactHero,
	ContactForm,
	ContactInfo,
} from "@/components/sections/contact";

export const metadata: Metadata = {
	title: "Contact - Get in Touch",
	description:
		"Contact Traffic Owl to request a demo, discuss a pilot program, or learn more about our AI-powered traffic enforcement solutions.",
};

export default function ContactPage() {
	return (
		<>
			<ContactHero />
			<section className="py-24 bg-background">
				<div className="container mx-auto">
					<div className="grid lg:grid-cols-3 gap-8">
						{/* Form - 2 columns */}
						<div className="lg:col-span-2">
							<ContactForm />
						</div>
						{/* Info - 1 column */}
						<div>
							<ContactInfo />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
