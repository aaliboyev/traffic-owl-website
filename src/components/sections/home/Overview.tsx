"use client";

import { AnimatedCounter } from "@/components/ui";
import { STATS } from "@/lib/constants";

export function Overview() {
	return (
		<section className="py-20 bg-background-secondary border-y border-border">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Stats Grid */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
					{STATS.map((stat) => (
						<AnimatedCounter
							key={stat.label}
							value={stat.value}
							suffix={stat.suffix}
							label={stat.label}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
