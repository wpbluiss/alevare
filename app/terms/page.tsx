import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — Alevare Group",
  description: "Terms of service for Alevare Group Inc.",
};

const sections = [
  {
    title: "Website Purpose",
    body: "Alevare Group provides general information about the services offered by Alevare Group Inc, including preventive maintenance programs, cosmetic restoration, room detailing, and support services for hotels, resorts, and residential properties. All information on this website is for general reference only and does not represent a formal offer, guarantee, or binding commitment.",
  },
  {
    title: "Use of the Website",
    body: "You agree to use the website for lawful and appropriate purposes. You may not interfere with the functionality, security, or accessibility of the site.",
  },
  {
    title: "Service Information and Website Content",
    body: "Descriptions of services, pricing, timelines, or capabilities listed on the website are general and may not reflect the exact terms that apply to any specific property. Only written proposals and signed agreements establish the actual scope of work, pricing, and responsibilities of Alevare Group Inc. Website content does not override or replace contractual terms.",
  },
  {
    title: "Quotes and Agreements",
    body: "Any quote, proposal, or estimate provided by Alevare Group Inc becomes binding only after written acceptance by both parties. Alevare Group Inc reserves the right to revise or withdraw any quote prior to formal acceptance.",
  },
  {
    title: "No Guarantee of Service Availability",
    body: "Service delivery depends on site access, client coordination, staffing, safety conditions, and property readiness. Alevare Group Inc does not guarantee uninterrupted or continuous service availability and is not responsible for delays or inability to perform work caused by factors outside our control.",
  },
  {
    title: "Intellectual Property",
    body: "All content on AlevareGroup, including text, graphics, branding, images, documents, and service descriptions, is owned exclusively by Alevare Group Inc and may not be copied, distributed, or reproduced without written permission.",
  },
  {
    title: "Third Party Links",
    body: "AlevareGroup may contain links to third party websites. Alevare Group Inc is not responsible for the content, practices, or policies of external sites.",
  },
  {
    title: "Limitation of Liability",
    body: "To the fullest extent permitted by Florida law, Alevare Group Inc is not liable for loss of revenue, loss of bookings, guest compensation costs, operational delays, reputational impact, or any indirect or consequential damages. Alevare Group Inc is not responsible for reliance on any website content. All claims or disputes must follow the terms of the executed service agreement.",
  },
  {
    title: "No Warranty",
    body: "The website and its content are provided as is. Alevare Group Inc makes no representations or warranties regarding accuracy, completeness, or suitability of any information presented online.",
  },
  {
    title: "Updates to Terms",
    body: "Alevare Group Inc may update these Terms at any time. Updated Terms take effect once posted on this page.",
  },
  {
    title: "Governing Law",
    body: "These Terms are governed by the laws of the State of Florida.",
  },
  {
    title: "Contact",
    body: "info@alevaregroup.com",
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="Welcome to Alevare Group Inc. These Terms govern your use of the AlevareGroup website and all information shared through it. By using our site, you agree to these Terms."
      sections={sections}
    />
  );
}
