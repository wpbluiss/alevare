import type { Metadata } from "next";
import "./crm.css";

export const metadata: Metadata = {
  title: {
    default: "Alevare CRM",
    template: "Alevare CRM — %s",
  },
  description:
    "Relationship management for Alevare Group — companies, contacts, activities, tasks, and meetings.",
};

// The marketing root layout (app/layout.tsx) renders <html>/<body> with the
// Fraunces/Inter font variables and the shared palette. This segment layout
// only adds the CRM wrapper that scopes CRM-specific styling.
export default function CrmSegmentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="crm min-h-screen w-full bg-surface text-ivory">
      {children}
    </div>
  );
}
