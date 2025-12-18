import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function LogoIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
			<circle cx="20" cy="14" r="6" fill="currentColor" />
			<path
				d="M12 28C12 23.5817 15.5817 20 20 20C24.4183 20 28 23.5817 28 28"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<circle cx="20" cy="14" r="2" fill="var(--primary)" />
		</svg>
	);
}

export function SpeedIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<path d="M12 12m-9 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
			<path d="M12 12l4 -4" />
			<path d="M12 7v-1" />
			<path d="M12 17v1" />
			<path d="M7 12h-1" />
			<path d="M17 12h1" />
		</svg>
	);
}

export function TrafficLightIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<rect x="6" y="2" width="12" height="20" rx="2" />
			<circle cx="12" cy="7" r="2" />
			<circle cx="12" cy="12" r="2" />
			<circle cx="12" cy="17" r="2" />
		</svg>
	);
}

export function PedestrianIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<circle cx="12" cy="4" r="2" />
			<path d="M12 6v6" />
			<path d="M12 12l-4 8" />
			<path d="M12 12l4 8" />
			<path d="M8 10l4 2 4-2" />
		</svg>
	);
}

export function AIIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
			<path d="M12 12v4" />
			<circle cx="12" cy="20" r="2" />
			<path d="M4 12h2" />
			<path d="M18 12h2" />
			<path d="M6 6l1.5 1.5" />
			<path d="M16.5 7.5L18 6" />
		</svg>
	);
}

export function ShieldIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<path d="M12 2l8 4v6c0 4.418-3.582 8-8 10-4.418-2-8-5.582-8-10V6l8-4z" />
			<path d="M9 12l2 2 4-4" />
		</svg>
	);
}

export function LightbulbIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<path d="M9 21h6" />
			<path d="M10 17h4" />
			<path d="M12 3a6 6 0 0 0-6 6c0 2.22 1.21 4.16 3 5.2V17a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2.8c1.79-1.04 3-2.98 3-5.2a6 6 0 0 0-6-6z" />
		</svg>
	);
}

export function CheckCircleIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<circle cx="12" cy="12" r="10" />
			<path d="M9 12l2 2 4-4" />
		</svg>
	);
}

export function UsersIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
			<circle cx="9" cy="7" r="4" />
			<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
			<path d="M16 3.13a4 4 0 0 1 0 7.75" />
		</svg>
	);
}

export function SunIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<circle cx="12" cy="12" r="5" />
			<path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
		</svg>
	);
}

export function BoltIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
		</svg>
	);
}

export function ClockIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<circle cx="12" cy="12" r="10" />
			<path d="M12 6v6l4 2" />
		</svg>
	);
}

export function TargetIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<circle cx="12" cy="12" r="10" />
			<circle cx="12" cy="12" r="6" />
			<circle cx="12" cy="12" r="2" />
		</svg>
	);
}

export function ChipIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<rect x="4" y="4" width="16" height="16" rx="2" />
			<rect x="9" y="9" width="6" height="6" />
			<path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
		</svg>
	);
}

export function CameraIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2v11z" />
			<circle cx="12" cy="13" r="4" />
		</svg>
	);
}

export function ServerIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
			<rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
			<circle cx="6" cy="6" r="1" />
			<circle cx="6" cy="18" r="1" />
		</svg>
	);
}

export function DatabaseIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<ellipse cx="12" cy="5" rx="9" ry="3" />
			<path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
			<path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
		</svg>
	);
}

export function MailIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<rect x="2" y="4" width="20" height="16" rx="2" />
			<path d="M22 7l-10 6L2 7" />
		</svg>
	);
}

export function PhoneIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
		</svg>
	);
}

export function MapPinIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
			<circle cx="12" cy="10" r="3" />
		</svg>
	);
}

export function ArrowRightIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<path d="M5 12h14M12 5l7 7-7 7" />
		</svg>
	);
}

export function ChevronDownIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<path d="M6 9l6 6 6-6" />
		</svg>
	);
}

export function MenuIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<path d="M3 12h18M3 6h18M3 18h18" />
		</svg>
	);
}

export function XIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<path d="M18 6L6 18M6 6l12 12" />
		</svg>
	);
}

export function TwitterIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" {...props}>
			<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
		</svg>
	);
}

export function LinkedInIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" {...props}>
			<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
		</svg>
	);
}

export function RailroadIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<path d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
			<path d="M9 21v-6a3 3 0 0 1 6 0v6" />
			<rect x="4" y="3" width="16" height="8" rx="2" />
			<circle cx="8" cy="7" r="1" fill="currentColor" />
			<circle cx="16" cy="7" r="1" fill="currentColor" />
		</svg>
	);
}

export function TruckIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<path d="M1 3h15v13H1z" />
			<path d="M16 8h4l3 3v5h-7V8z" />
			<circle cx="5.5" cy="18.5" r="2.5" />
			<circle cx="18.5" cy="18.5" r="2.5" />
		</svg>
	);
}

// Export icon map for dynamic usage
export const iconMap = {
	speed: SpeedIcon,
	"traffic-light": TrafficLightIcon,
	pedestrian: PedestrianIcon,
	ai: AIIcon,
	shield: ShieldIcon,
	lightbulb: LightbulbIcon,
	"check-circle": CheckCircleIcon,
	users: UsersIcon,
	sun: SunIcon,
	bolt: BoltIcon,
	clock: ClockIcon,
	target: TargetIcon,
	chip: ChipIcon,
	camera: CameraIcon,
	server: ServerIcon,
	database: DatabaseIcon,
	mail: MailIcon,
	phone: PhoneIcon,
	"map-pin": MapPinIcon,
	"arrow-right": ArrowRightIcon,
	"chevron-down": ChevronDownIcon,
	menu: MenuIcon,
	x: XIcon,
	twitter: TwitterIcon,
	linkedin: LinkedInIcon,
	railroad: RailroadIcon,
	truck: TruckIcon,
} as const;

export type IconName = keyof typeof iconMap;
