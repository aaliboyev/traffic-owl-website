import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components/layout";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Traffic Owl | AI-Powered Traffic Enforcement",
    template: "%s | Traffic Owl",
  },
  description:
    "AI-Powered Traffic Enforcement for Safer Streets. Advanced violation detection technology preparing Glendale for the 2028 Olympics.",
  keywords: [
    "traffic enforcement",
    "AI cameras",
    "speed cameras",
    "red light cameras",
    "traffic safety",
    "Glendale",
    "2028 Olympics",
  ],
  authors: [{ name: "Traffic Owl" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Traffic Owl",
    title: "Traffic Owl | AI-Powered Traffic Enforcement",
    description:
      "AI-Powered Traffic Enforcement for Safer Streets. Advanced violation detection technology preparing Glendale for the 2028 Olympics.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Traffic Owl | AI-Powered Traffic Enforcement",
    description:
      "AI-Powered Traffic Enforcement for Safer Streets. Advanced violation detection technology preparing Glendale for the 2028 Olympics.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen`}
      >
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
