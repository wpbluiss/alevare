import Nav from "@/components/Nav";
import SpotlightEffect from "@/components/SpotlightEffect";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import CommandCenter from "@/components/CommandCenter";
import VideoSection from "@/components/VideoSection";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Credentials from "@/components/Credentials";
import Properties from "@/components/Properties";
import Discovery from "@/components/Discovery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { siteUrl, siteName, siteDescription } from "@/lib/site";

const services = [
  "HVAC & Controls Commissioning",
  "Refrigeration & Commercial Kitchens",
  "Pools & Water Features",
  "MEP Systems (Mechanical & Plumbing)",
  "Electrical (High & Low Voltage)",
  "Data & Network Structured Cabling",
  "FF&E Restoration",
  "Finishes (Paint, Wall & Millwork)",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      legalName: "Alevare Group, Inc.",
      url: siteUrl,
      description: siteDescription,
      logo: `${siteUrl}/alevare-logo-mark.jpg`,
      image: `${siteUrl}/og-image.jpg`,
      email: "info@alevaregroup.com",
      slogan: "Elevating maintenance to white-glove standards.",
      areaServed: ["Miami", "New York"],
      knowsAbout: services,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Full-property restoration and preventive maintenance",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: service },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Nav />
      <SpotlightEffect />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <CommandCenter />
        <VideoSection />
        <Process />
        <Team />
        <Credentials />
        <Properties />
        <Discovery />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
