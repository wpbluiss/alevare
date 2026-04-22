import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Alevare Group — Luxury Hotel Room Restoration & Preventative Maintenance",
  description:
    "Forbes- and AAA-standard room restoration for luxury hotels. 24-48 hour turnaround. White-glove execution. Full documentation. Founded by hospitality professionals from NYC and Miami.",
  openGraph: {
    title:
      "Alevare Group — Luxury Hotel Room Restoration & Preventative Maintenance",
    description:
      "Forbes- and AAA-standard room restoration for luxury hotels. 24-48 hour turnaround. White-glove execution. Full documentation. Founded by hospitality professionals from NYC and Miami.",
    type: "website",
    siteName: "Alevare Group",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1600,
        height: 900,
        alt: "Alevare Group — Luxury hotel room restoration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Alevare Group — Luxury Hotel Room Restoration & Preventative Maintenance",
    description:
      "Forbes- and AAA-standard room restoration for luxury hotels. 24-48 hour turnaround. White-glove execution.",
    images: ["/hero-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
