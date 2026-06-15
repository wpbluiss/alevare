import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { siteUrl, siteName, siteDescription } from "@/lib/site";

const pageTitle =
  "Alevare Group — Luxury Restoration & Preventive Maintenance, Full-Property Scope";

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
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: pageTitle,
    description: siteDescription,
    type: "website",
    url: siteUrl,
    siteName,
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
    title: pageTitle,
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
