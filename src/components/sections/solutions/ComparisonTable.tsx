"use client";

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";
import { SectionHeading } from "@/components/ui";
import { FadeIn } from "@/components/ui/FadeIn";

const COMPARISON_DATA = [
	{
		feature: "Detection Accuracy",
		trafficOwl: "93-97%",
		traditional: "75-85%",
		highlight: true,
	},
	{
		feature: "Violation Types Detected",
		trafficOwl: "6+ types",
		traditional: "1-2 types",
		highlight: true,
	},
	{
		feature: "Processing Speed",
		trafficOwl: "2-5 seconds on-device",
		traditional: "Manual review (24-48 hrs)",
		highlight: false,
	},
	{
		feature: "Installation Time",
		trafficOwl: "2-4 hours",
		traditional: "1-2 weeks",
		highlight: true,
	},
	{
		feature: "Power Consumption",
		trafficOwl: "15W average (solar option)",
		traditional: "150-300W (grid required)",
		highlight: false,
	},
	{
		feature: "Low-Light Performance",
		trafficOwl: "AI-enhanced imaging",
		traditional: "Basic infrared",
		highlight: false,
	},
	{
		feature: "Behavior Detection",
		trafficOwl: "Phone use, seatbelt",
		traditional: "Not available",
		highlight: true,
	},
	{
		feature: "System Weight",
		trafficOwl: "~6 kg",
		traditional: "30-80 kg",
		highlight: false,
	},
	{
		feature: "Maintenance",
		trafficOwl: "Remote diagnostics, OTA updates",
		traditional: "Scheduled on-site service",
		highlight: false,
	},
	{
		feature: "Data Export",
		trafficOwl: "Cloud sync & API access",
		traditional: "Manual USB/network transfer",
		highlight: false,
	},
];

export function ComparisonTable() {
	return (
		<section className="py-24 bg-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeading
					badge="Comparison"
					title="Traffic Owl vs Traditional Systems"
					subtitle="See how our next-generation technology compares to conventional traffic enforcement."
				/>

				<FadeIn className="max-w-4xl mx-auto">
					<Table
						aria-label="Comparison table"
						classNames={{
							wrapper: "bg-surface/50 border border-border rounded-xl",
							th: "bg-surface text-foreground-secondary text-xs uppercase tracking-wider",
							td: "text-foreground py-5",
							tr: "border-b border-border/50 last:border-b-0",
						}}
					>
						<TableHeader>
							<TableColumn>Specification</TableColumn>
							<TableColumn align="center">
								<span className="gradient-text font-bold">Traffic Owl Falcon</span>
							</TableColumn>
							<TableColumn align="center">Traditional Systems</TableColumn>
						</TableHeader>
						<TableBody>
							{COMPARISON_DATA.map((row) => (
								<TableRow key={row.feature}>
									<TableCell className="font-medium">{row.feature}</TableCell>
									<TableCell>
										<div className={`text-center font-semibold ${row.highlight ? "text-primary" : "text-foreground"}`}>
											{row.trafficOwl}
										</div>
									</TableCell>
									<TableCell>
										<div className="text-center text-foreground-secondary">
											{row.traditional}
										</div>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</FadeIn>
			</div>
		</section>
	);
}
