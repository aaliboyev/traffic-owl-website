import { type ClassValue, clsx } from "clsx";

// Utility for combining class names
export function cn(...inputs: ClassValue[]) {
	return clsx(inputs);
}
