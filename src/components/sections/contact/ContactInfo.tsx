"use client";

import { Card, CardBody } from "@heroui/react";
import { FadeIn } from "@/components/ui/FadeIn";
import { CONTACT_INFO } from "@/lib/constants";
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon } from "@/components/icons";

const INFO_ITEMS = [
	{
		icon: MailIcon,
		label: "Email",
		value: CONTACT_INFO.email,
		href: `mailto:${CONTACT_INFO.email}`,
	},
	{
		icon: PhoneIcon,
		label: "Phone",
		value: CONTACT_INFO.phone,
		href: `tel:${CONTACT_INFO.phone}`,
	},
	{
		icon: MapPinIcon,
		label: "Location",
		value: CONTACT_INFO.address,
	},
	{
		icon: ClockIcon,
		label: "Office Hours",
		value: "Mon-Fri, 9am-6pm PST",
	},
];

export function ContactInfo() {
	return (
		<FadeIn delay={0.1}>
			<div className="space-y-6">
				<Card className="bg-surface/50 border border-border">
					<CardBody className="p-8">
						<h2 className="text-2xl font-bold text-foreground mb-6">
							Get in Touch
						</h2>

						<div className="space-y-6">
							{INFO_ITEMS.map((item) => {
								const Icon = item.icon;
								const content = (
									<div className="flex items-start gap-4 group">
										<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
											<Icon className="w-6 h-6" />
										</div>
										<div>
											<p className="text-sm text-foreground-muted uppercase tracking-wider mb-1">
												{item.label}
											</p>
											<p className="text-foreground font-medium">{item.value}</p>
										</div>
									</div>
								);

								if (item.href) {
									return (
										<a
											key={item.label}
											href={item.href}
											className="block hover:opacity-80 transition-opacity"
										>
											{content}
										</a>
									);
								}

								return <div key={item.label}>{content}</div>;
							})}
						</div>
					</CardBody>
				</Card>

				{/* Quick Response Promise */}
				<Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
					<CardBody className="p-6 text-center">
						<h3 className="font-semibold text-foreground mb-2">
							Quick Response Guaranteed
						</h3>
						<p className="text-sm text-foreground-secondary">
							We respond to all inquiries within 1-2 business days. For urgent
							matters, please call us directly.
						</p>
					</CardBody>
				</Card>
			</div>
		</FadeIn>
	);
}
