"use client";

import { useState } from "react";
import {
	Button,
	Card,
	CardBody,
	Input,
	Textarea,
	Select,
	SelectItem,
	Checkbox,
} from "@heroui/react";
import { FadeIn } from "@/components/ui/FadeIn";
import { submitContactForm } from "@/app/actions/contact";

const PROJECT_TYPES = [
	{ key: "demo", label: "Request a Demo" },
	{ key: "pilot", label: "Pilot Program Inquiry" },
	{ key: "partnership", label: "Partnership Discussion" },
	{ key: "technical", label: "Technical Questions" },
	{ key: "other", label: "Other" },
];

export function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [wantsDemo, setWantsDemo] = useState(false);
	const [projectType, setProjectType] = useState<string>("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError(null);

		const formData = new FormData(e.currentTarget);

		const result = await submitContactForm({
			name: formData.get("name") as string,
			email: formData.get("email") as string,
			organization: formData.get("organization") as string || undefined,
			phone: formData.get("phone") as string || undefined,
			projectType: projectType || undefined,
			message: formData.get("message") as string,
			wantsDemo,
		});

		setIsSubmitting(false);

		if (result.success) {
			setIsSubmitted(true);
		} else {
			setError(result.error || "Something went wrong");
		}
	};

	if (isSubmitted) {
		return (
			<FadeIn>
				<Card className="bg-surface/50 border border-border">
					<CardBody className="p-8 text-center">
						<div className="w-16 h-16 rounded-full bg-secondary/20 text-secondary flex items-center justify-center mx-auto mb-4">
							<svg
								className="w-8 h-8"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M5 13l4 4L19 7"
								/>
							</svg>
						</div>
						<h3 className="text-2xl font-bold text-foreground mb-2">
							Thank You!
						</h3>
						<p className="text-foreground-secondary">
							Your message has been received. Our team will get back to you within
							1-2 business days.
						</p>
					</CardBody>
				</Card>
			</FadeIn>
		);
	}

	return (
		<FadeIn>
			<Card className="bg-surface/50 border border-border">
				<CardBody className="p-8">
					<h2 className="text-2xl font-bold text-foreground mb-6">
						Send Us a Message
					</h2>

					<form onSubmit={handleSubmit} className="space-y-6">
						{error && (
							<div className="p-4 bg-danger/10 border border-danger/20 rounded-lg text-danger text-sm">
								{error}
							</div>
						)}

						<div className="grid md:grid-cols-2 gap-6">
							<Input
								name="name"
								label="Name"
								placeholder="Your name"
								variant="bordered"
								isRequired
								classNames={{
									input: "text-foreground",
									inputWrapper: "border-border hover:border-primary",
								}}
							/>
							<Input
								name="email"
								type="email"
								label="Email"
								placeholder="you@example.com"
								variant="bordered"
								isRequired
								classNames={{
									input: "text-foreground",
									inputWrapper: "border-border hover:border-primary",
								}}
							/>
						</div>

						<div className="grid md:grid-cols-2 gap-6">
							<Input
								name="organization"
								label="Organization"
								placeholder="City, department, or company"
								variant="bordered"
								classNames={{
									input: "text-foreground",
									inputWrapper: "border-border hover:border-primary",
								}}
							/>
							<Input
								name="phone"
								type="tel"
								label="Phone"
								placeholder="+1 (555) 000-0000"
								variant="bordered"
								classNames={{
									input: "text-foreground",
									inputWrapper: "border-border hover:border-primary",
								}}
							/>
						</div>

						<Select
							label="Project Type"
							placeholder="Select an option"
							variant="bordered"
							selectedKeys={projectType ? [projectType] : []}
							onSelectionChange={(keys) => setProjectType(Array.from(keys)[0] as string)}
							classNames={{
								trigger: "border-border hover:border-primary",
							}}
						>
							{PROJECT_TYPES.map((type) => (
								<SelectItem key={type.key}>{type.label}</SelectItem>
							))}
						</Select>

						<Textarea
							name="message"
							label="Message"
							placeholder="Tell us about your project or question..."
							variant="bordered"
							minRows={4}
							isRequired
							classNames={{
								input: "text-foreground",
								inputWrapper: "border-border hover:border-primary",
							}}
						/>

						<Checkbox
							isSelected={wantsDemo}
							onValueChange={setWantsDemo}
							classNames={{
								label: "text-foreground-secondary text-sm",
							}}
						>
							I'd like to schedule a demo of the Falcon system
						</Checkbox>

						<div className="pt-2">
							<Button
								type="submit"
								color="primary"
								variant="shadow"
								size="lg"
								className="w-full font-semibold"
								isLoading={isSubmitting}
							>
								{isSubmitting ? "Sending..." : "Send Message"}
							</Button>
						</div>

						<p className="text-xs text-foreground-muted text-center">
							By submitting this form, you agree to our Privacy Policy.
						</p>
					</form>
				</CardBody>
			</Card>
		</FadeIn>
	);
}
