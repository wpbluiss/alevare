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
  metadataBase: new URL("https://alevare.vercel.app"),
  title:
    "Alevare Group — Luxury Restoration & Preventive Maintenance, Full-Property Scope",
  description:
    "One team, every trade — HVAC, refrigeration, MEP, pools & water features, FF&E, finishes, and electrical — calibrated to Forbes 5-Star and AAA Five Diamond standards. Full-property restoration and preventive maintenance with real-time client visibility.",
  openGraph: {
    title:
      "Alevare Group — Luxury Restoration & Preventive Maintenance, Full-Property Scope",
    description:
      "One team, every trade — HVAC, refrigeration, MEP, pools & water features, FF&E, finishes, and electrical — calibrated to Forbes 5-Star and AAA Five Diamond standards. Full-property restoration and preventive maintenance with real-time client visibility.",
    type: "website",
    siteName: "Alevare Group",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alevare Group — Elevating maintenance to white-glove standards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Alevare Group — Luxury Restoration & Preventive Maintenance, Full-Property Scope",
    description:
      "One team, every trade — full-property luxury restoration and preventive maintenance calibrated to Forbes 5-Star and AAA Five Diamond standards.",
    images: ["/og-image.jpg"],
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
