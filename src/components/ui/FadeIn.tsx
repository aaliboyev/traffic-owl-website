"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
	children: ReactNode;
	className?: string;
	delay?: number;
	duration?: number;
	direction?: "up" | "down" | "left" | "right" | "none";
	distance?: number;
	once?: boolean;
}

export function FadeIn({
	children,
	className,
	delay = 0,
	duration = 0.5,
	direction = "up",
	distance = 24,
	once = true,
}: FadeInProps) {
	const directions = {
		up: { y: distance },
		down: { y: -distance },
		left: { x: distance },
		right: { x: -distance },
		none: {},
	};

	const variants: Variants = {
		hidden: {
			opacity: 0,
			...directions[direction],
		},
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				duration,
				delay,
				ease: [0.25, 0.1, 0.25, 1],
			},
		},
	};

	return (
		<motion.div
			className={className}
			initial="hidden"
			whileInView="visible"
			viewport={{ once, margin: "-50px" }}
			variants={variants}
		>
			{children}
		</motion.div>
	);
}

interface StaggerContainerProps {
	children: ReactNode;
	className?: string;
	staggerDelay?: number;
	once?: boolean;
}

export function StaggerContainer({
	children,
	className,
	staggerDelay = 0.1,
	once = true,
}: StaggerContainerProps) {
	return (
		<motion.div
			className={className}
			initial="hidden"
			whileInView="visible"
			viewport={{ once, margin: "-50px" }}
			variants={{
				hidden: {},
				visible: {
					transition: {
						staggerChildren: staggerDelay,
					},
				},
			}}
		>
			{children}
		</motion.div>
	);
}

interface StaggerItemProps {
	children: ReactNode;
	className?: string;
	direction?: "up" | "down" | "left" | "right" | "none";
	distance?: number;
}

export function StaggerItem({
	children,
	className,
	direction = "up",
	distance = 24,
}: StaggerItemProps) {
	const directions = {
		up: { y: distance },
		down: { y: -distance },
		left: { x: distance },
		right: { x: -distance },
		none: {},
	};

	return (
		<motion.div
			className={className}
			variants={{
				hidden: {
					opacity: 0,
					...directions[direction],
				},
				visible: {
					opacity: 1,
					x: 0,
					y: 0,
					transition: {
						duration: 0.5,
						ease: [0.25, 0.1, 0.25, 1],
					},
				},
			}}
		>
			{children}
		</motion.div>
	);
}
