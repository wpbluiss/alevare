import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Alevare Group",
  description: "Privacy policy for Alevare Group Inc.",
};

const sections = [
  {
    title: "Information We Collect",
    body: "We may collect information such as name, email address, phone number, company or property details, service inquiries, and basic website analytics.",
  },
  {
    title: "How We Use Your Information",
    body: "We use the information you provide to respond to inquiries, prepare proposals, coordinate services, improve website performance, and maintain internal records. We do not sell or trade your information.",
  },
  {
    title: "Cookies",
    body: "Our website may use cookies or analytics tools to improve performance. You may disable cookies in your browser settings.",
  },
  {
    title: "Sharing of Information",
    body: "We may share your information only with service providers who assist us, vendors supporting your request, or legal authorities if required.",
  },
  {
    title: "Data Protection",
    body: "We use reasonable safeguards to protect your information and reduce risks of unauthorized access.",
  },
  {
    title: "Data Retention",
    body: "We retain information only as long as needed for business operations, service coordination, or legal compliance.",
  },
  {
    title: "Your Rights",
    body: "You may request access to your information, request corrections, deletion, or update communication preferences by emailing info@alevaregroup.com.",
  },
  {
    title: "No Contractual Reliance",
    body: "Information on the website does not create any contractual obligation. Only written signed agreements define the relationship between you and Alevare Group Inc.",
  },
  {
    title: "Updates to This Policy",
    body: "Updates take effect once posted on this page.",
  },
  {
    title: "Contact",
    body: "info@alevaregroup.com",
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Your privacy is important to us. This Privacy Policy explains how Alevare Group Inc collects, uses, stores, and protects your information when you visit AlevareGroup or submit information to us."
      sections={sections}
    />
  );
}
