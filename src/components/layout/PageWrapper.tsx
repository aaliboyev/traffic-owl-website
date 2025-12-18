"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeIn, defaultTransition } from "@/lib/animations";

interface PageWrapperProps {
	children: ReactNode;
	className?: string;
}

export function PageWrapper({ children, className = "" }: PageWrapperProps) {
	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit="exit"
			variants={fadeIn}
			transition={defaultTransition}
			className={className}
		>
			{children}
		</motion.div>
	);
}
