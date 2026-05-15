import type { Metadata } from "next";
import LegalPage, { type LegalBlock } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Alevare Group",
  description:
    "Privacy policy for Alevare Group Inc. — luxury hotel room restoration and the Perfect Room Program platform.",
};

const sections: { title: string; blocks: LegalBlock[] }[] = [
  {
    title: "Who We Are",
    blocks: [
      {
        type: "paragraph",
        text: "Alevare Group Inc. is a luxury hotel room restoration and preventative maintenance company headquartered at:",
      },
      {
        type: "address",
        lines: [
          "Alevare Group Inc.",
          "210 172nd Street, Apt. 244",
          "Sunny Isles Beach, FL 33160",
          "United States",
          "Email: info@alevaregroup.com",
        ],
      },
    ],
  },
  {
    title: "Information We Collect",
    blocks: [
      { type: "h3", text: "2.1 Information You Provide Directly" },
      { type: "paragraph", text: "When you use our Services, you may provide:" },
      {
        type: "bullets",
        items: [
          <>
            <strong className="font-semibold">Account registration information</strong>: name, email address, job title, and password
          </>,
          <>
            <strong className="font-semibold">Business information</strong>: hotel property name, location, and contact details
          </>,
          <>
            <strong className="font-semibold">Communications</strong>: messages sent through the in-app messaging system
          </>,
          "Service inquiries and proposal requests submitted through our website",
        ],
      },
      { type: "h3", text: "2.2 Information Collected Automatically Through the Mobile Apps" },
      {
        type: "paragraph",
        text: "When you use the Alevare PRP mobile applications, we automatically collect:",
      },
      {
        type: "bullets",
        items: [
          <>
            <strong className="font-semibold">Device information</strong>: device type, operating system, unique device identifiers
          </>,
          <>
            <strong className="font-semibold">App usage data</strong>: screens visited, features used, session duration, and interaction logs
          </>,
          <>
            <strong className="font-semibold">Push notification tokens</strong>: device tokens used to deliver push notifications
          </>,
          <>
            <strong className="font-semibold">Authentication data</strong>: login timestamps and session tokens (via Firebase Authentication)
          </>,
          "IP address and general geographic location",
        ],
      },
      { type: "h3", text: "2.3 Photos and Media" },
      { type: "paragraph", text: "With your permission, our mobile apps access:" },
      {
        type: "bullets",
        items: [
          <>
            <strong className="font-semibold">Camera</strong>: to capture photos of hotel rooms and restoration work
          </>,
          <>
            <strong className="font-semibold">Photo library</strong>: to select and upload existing images
          </>,
        ],
      },
      {
        type: "paragraph",
        text: "Photos are uploaded to and stored in Google Firebase Storage. They are used exclusively for documenting hotel room restoration work within the Perfect Room Program (PRP). You may revoke camera and photo library permissions at any time in your device settings.",
      },
      { type: "h3", text: "2.4 Information Collected Through Our Web Portals" },
      { type: "paragraph", text: "When you use our web portals, we collect:" },
      {
        type: "bullets",
        items: [
          "Login credentials and session information",
          "Browser type, operating system, and IP address",
          "Pages visited and actions taken within the portal",
          "Cookies and similar tracking technologies (see Section 6)",
        ],
      },
      { type: "h3", text: "2.5 Business Operations Data" },
      {
        type: "paragraph",
        text: "As part of providing the Perfect Room Program service, we collect and process:",
      },
      {
        type: "bullets",
        items: [
          "Hotel room status information, restoration stage data, and cycle records",
          "Inspection reports, quality control records, and housekeeping handoff documentation",
          "Out-of-scope approval requests, cost estimates, and approval decisions",
          "Audit logs of all actions taken within the platform (immutable records)",
          "Stage history, photo documentation, and escalation records",
        ],
      },
      { type: "h3", text: "2.6 Employee and Contractor Data" },
      {
        type: "paragraph",
        text: "The Alevare PRP Internal application collects data about Alevare Group employees and contractors including field supervisors, QA inspectors, and management personnel. This data includes name, email address, role, login activity, and actions performed within the platform. This data is collected solely for operational purposes — to track work performed, maintain accountability, and generate audit trails. Alevare employees consent to this collection as a condition of using the Internal App in their professional capacity.",
      },
    ],
  },
  {
    title: "How We Use Your Information",
    blocks: [
      { type: "paragraph", text: "We use the information we collect to:" },
      { type: "label", text: "Service Delivery" },
      {
        type: "bullets",
        items: [
          "Provide, operate, and maintain the Perfect Room Program platform",
          "Enable real-time communication between Alevare staff and hotel clients",
          "Process and track room restoration workflows across all six stages",
          "Send push notifications for approvals, escalations, and room status updates",
          "Generate reports, analytics, and documentation for hotel properties",
        ],
      },
      { type: "label", text: "Account Management" },
      {
        type: "bullets",
        items: [
          "Create and manage user accounts with appropriate role-based access",
          "Authenticate users and maintain secure sessions",
          "Route users to the correct application based on their assigned role",
        ],
      },
      { type: "label", text: "Business Operations" },
      {
        type: "bullets",
        items: [
          "Maintain immutable audit trails of all platform actions for legal and compliance purposes",
          "Process out-of-scope approval workflows between Alevare staff and hotel directors",
          "Schedule and manage PRP cycles, follow-up reminders, and property lifecycles",
        ],
      },
      { type: "label", text: "Communications" },
      {
        type: "bullets",
        items: [
          "Respond to inquiries, proposals, and service requests",
          "Send operational notifications related to your account and active restoration projects",
          "Provide customer support",
        ],
      },
      { type: "label", text: "Improvement and Analytics" },
      {
        type: "bullets",
        items: [
          "Monitor platform performance and fix technical issues",
          "Analyze usage patterns to improve our Services",
          "Conduct internal research and development",
        ],
      },
    ],
  },
  {
    title: "How We Share Your Information",
    blocks: [
      {
        type: "paragraph",
        text: "We do not sell, rent, or trade your personal information. We may share your information only in the following circumstances:",
      },
      { type: "h3", text: "4.1 Service Providers" },
      {
        type: "paragraph",
        text: "We share information with trusted third-party providers who help us operate our Services, including:",
      },
      {
        type: "bullets",
        items: [
          <>
            <strong className="font-semibold">Google Firebase</strong> (Authentication, Firestore database, Cloud Storage, Cloud Messaging) — for data storage, authentication, and push notifications. Firebase is governed by Google&rsquo;s Privacy Policy at firebase.google.com/support/privacy.
          </>,
          <>
            <strong className="font-semibold">Expo</strong> (EAS Build and push notification delivery service) — for mobile app distribution and push notification routing. Governed by expo.dev/privacy.
          </>,
          <>
            <strong className="font-semibold">Apple Inc.</strong> — for iOS app distribution through TestFlight and the App Store. Governed by apple.com/legal/privacy.
          </>,
          <>
            <strong className="font-semibold">Google LLC</strong> — for Android app distribution through Google Play. Governed by policies.google.com/privacy.
          </>,
        ],
      },
      { type: "h3", text: "4.2 Hotel Clients" },
      {
        type: "paragraph",
        text: "Information shared within the platform (room status, photos, inspection reports, approvals) is visible to authorized personnel at the hotel property associated with your account. This sharing is core to the service and is governed by the separate service agreement between Alevare Group and the hotel property.",
      },
      { type: "h3", text: "4.3 Legal Requirements" },
      {
        type: "paragraph",
        text: "We may disclose your information if required to do so by law, court order, or government authority, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.",
      },
      { type: "h3", text: "4.4 Business Transfers" },
      {
        type: "paragraph",
        text: "In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify affected users prior to any such transfer.",
      },
    ],
  },
  {
    title: "Data Ownership",
    blocks: [
      { type: "h3", text: "5.1 Hotel Client Data" },
      {
        type: "paragraph",
        text: "Hotel properties enrolled in the Perfect Room Program retain ownership of their property-specific data, including room records, inspection reports, approval decisions, and related documentation (“Client Data”). Alevare Group acts as a data processor for Client Data on behalf of the hotel property. We do not use Client Data for any purpose other than providing the Perfect Room Program service to that property. Upon termination of the service agreement, hotel clients may request an export of their Client Data within 90 days of termination.",
      },
      { type: "h3", text: "5.2 Photo Ownership" },
      {
        type: "paragraph",
        text: "Photos uploaded by Alevare Group personnel during the course of restoration work are owned by Alevare Group and are used to document work performed for the hotel client. By uploading photos through the platform, Alevare staff grant Alevare Group a perpetual license to use those photos for service delivery, documentation, and quality assurance purposes. Hotel clients receive a non-exclusive license to use photos documenting their property’s restoration work for their internal property management purposes.",
      },
      { type: "h3", text: "5.3 Platform Data" },
      {
        type: "paragraph",
        text: "All platform infrastructure, software, algorithms, analytics models, and aggregate data (data that does not identify any individual property or person) are owned exclusively by Alevare Group Inc. Hotel clients and individual users do not acquire any ownership interest in the platform.",
      },
    ],
  },
  {
    title: "Data Storage and Security",
    blocks: [
      { type: "h3", text: "6.1 Where Your Data Is Stored" },
      {
        type: "paragraph",
        text: "Your data is stored on Google Firebase infrastructure, located primarily in the United States (us-east1 region). By using our Services, you consent to the transfer of your information to the United States.",
      },
      { type: "h3", text: "6.2 Security Measures" },
      {
        type: "paragraph",
        text: "We implement industry-standard security measures including:",
      },
      {
        type: "bullets",
        items: [
          "Firebase Authentication for secure login and session management",
          "Role-based access control — each user can only access data appropriate for their role",
          "Firestore security rules that enforce write and read restrictions at the database level",
          "Firebase Storage security rules that restrict photo access to authenticated users",
          "HTTPS encryption for all data transmitted between devices and our servers",
          "Immutable audit logs that cannot be altered or deleted",
        ],
      },
      {
        type: "paragraph",
        text: "No method of transmission or storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your information using commercially reasonable means.",
      },
    ],
  },
  {
    title: "Cookies and Tracking Technologies",
    blocks: [
      {
        type: "paragraph",
        text: "Our website (www.alevaregroup.com) and web portals may use cookies and similar technologies to:",
      },
      {
        type: "bullets",
        items: [
          "Maintain your login session",
          "Remember your preferences",
          "Analyze website traffic and usage patterns",
        ],
      },
      {
        type: "paragraph",
        text: "You can control cookies through your browser settings. Disabling cookies may affect the functionality of our web portals. Our mobile applications do not use cookies but use equivalent device-level identifiers for authentication and session management.",
      },
    ],
  },
  {
    title: "Push Notifications",
    blocks: [
      {
        type: "paragraph",
        text: "Our mobile applications use push notifications to alert you about:",
      },
      {
        type: "bullets",
        items: [
          "New out-of-scope approval requests requiring your response",
          "Approval decisions made by hotel directors",
          "Escalation alerts when approvals exceed response time thresholds",
          "Room status updates including housekeeping handoffs and guest-ready confirmations",
          "Cycle scheduling reminders",
        ],
      },
      {
        type: "paragraph",
        text: "Push notifications are delivered through Expo’s push notification service, which routes through Apple Push Notification Service (APNs) for iOS and Firebase Cloud Messaging (FCM) for Android. You can disable push notifications at any time in your device’s notification settings.",
      },
    ],
  },
  {
    title: "Data Retention",
    blocks: [
      { type: "paragraph", text: "We retain your information as follows:" },
      {
        type: "bullets",
        items: [
          <>
            <strong className="font-semibold">Account data</strong>: retained for the duration of your account and for up to 7 years after account closure for legal and compliance purposes
          </>,
          <>
            <strong className="font-semibold">Room restoration records and audit logs</strong>: retained indefinitely as permanent operational records. Audit logs are immutable by design and cannot be deleted.
          </>,
          <>
            <strong className="font-semibold">Photos and media</strong>: retained for the duration of the associated property&rsquo;s relationship with Alevare Group
          </>,
          <>
            <strong className="font-semibold">Archived properties and rooms</strong>: data is never permanently deleted — archived records are retained indefinitely for historical reference
          </>,
          <>
            <strong className="font-semibold">Push notification tokens</strong>: retained until refreshed at next login or revoked by the user
          </>,
        ],
      },
      {
        type: "paragraph",
        text: "You may request deletion of your personal account data by contacting us at info@alevaregroup.com. Note that audit logs and operational records may be retained for legal and business continuity purposes even after account deletion.",
      },
    ],
  },
  {
    title: "Your Rights and Choices",
    blocks: [
      { type: "h3", text: "10.1 Access and Portability" },
      {
        type: "paragraph",
        text: "You may request a copy of the personal information we hold about you by contacting info@alevaregroup.com.",
      },
      { type: "h3", text: "10.2 Correction" },
      {
        type: "paragraph",
        text: "You may request that we correct inaccurate personal information. Account administrators can update user information directly within the platform.",
      },
      { type: "h3", text: "10.3 Deletion" },
      {
        type: "paragraph",
        text: "You may request deletion of your personal account information. Note that certain operational records (audit logs, restoration records) are retained for legal and business purposes as described in Section 9.",
      },
      { type: "h3", text: "10.4 Opt-Out of Push Notifications" },
      {
        type: "paragraph",
        text: "You may disable push notifications at any time through your device settings without affecting your ability to use the core platform features.",
      },
      { type: "h3", text: "10.5 California Residents (CCPA)" },
      {
        type: "paragraph",
        text: "If you are a California resident, you have additional rights under the California Consumer Privacy Act, including the right to know what personal information we collect, the right to delete personal information, and the right to opt out of the sale of personal information. We do not sell personal information. To exercise your rights, contact us at info@alevaregroup.com.",
      },
      { type: "h3", text: "10.6 European Residents (GDPR)" },
      {
        type: "paragraph",
        text: "If you are located in the European Economic Area, you have rights under the General Data Protection Regulation including the right to access, rectify, erase, restrict processing, and data portability. Our legal basis for processing is legitimate interests (providing our contracted services) and contract performance. To exercise your rights, contact info@alevaregroup.com.",
      },
    ],
  },
  {
    title: "Disclaimer of Warranties",
    blocks: [
      {
        type: "paragraph",
        text: "THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND.",
      },
      {
        type: "paragraph",
        text: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALEVARE GROUP INC. EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. ALEVARE GROUP DOES NOT WARRANT THAT: (A) THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE; (B) ANY DATA WILL BE ACCURATE OR RELIABLE; (C) THE QUALITY OF ANY INFORMATION OR SERVICES OBTAINED THROUGH THE PLATFORM WILL MEET YOUR EXPECTATIONS; OR (D) ANY ERRORS IN THE SERVICES WILL BE CORRECTED.",
      },
      {
        type: "paragraph",
        text: "Alevare Group is not responsible for any disruptions, delays, or failures resulting from causes outside our reasonable control, including failures of third-party services such as Google Firebase, Apple, or internet service providers.",
      },
    ],
  },
  {
    title: "Limitation of Liability",
    blocks: [
      {
        type: "paragraph",
        text: "ALEVARE GROUP’S TOTAL LIABILITY IS LIMITED. PLEASE READ THIS SECTION CAREFULLY.",
      },
      {
        type: "paragraph",
        text: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ALEVARE GROUP INC., ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, CONTRACTORS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, REVENUE, DATA, BUSINESS, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICES, EVEN IF ALEVARE GROUP HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
      },
      {
        type: "paragraph",
        text: "IN NO EVENT SHALL ALEVARE GROUP’S TOTAL CUMULATIVE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES EXCEED THE GREATER OF: (A) THE TOTAL AMOUNT PAID BY YOU TO ALEVARE GROUP IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM; OR (B) ONE HUNDRED DOLLARS ($100.00).",
      },
      {
        type: "paragraph",
        text: "Some jurisdictions do not allow the exclusion or limitation of certain warranties or liability. In such jurisdictions, our liability shall be limited to the greatest extent permitted by applicable law.",
      },
    ],
  },
  {
    title: "Force Majeure",
    blocks: [
      {
        type: "paragraph",
        text: "Alevare Group shall not be liable for any failure or delay in performance of its obligations under this Privacy Policy or the Services to the extent such failure or delay is caused by circumstances beyond our reasonable control, including but not limited to: acts of God, natural disasters, pandemics, epidemics, war, terrorism, riots, government actions, power outages, internet or telecommunications failures, third-party service outages (including Google Firebase, Apple, or Expo), cyberattacks, or other similar events (“Force Majeure Events”).",
      },
      {
        type: "paragraph",
        text: "In the event of a Force Majeure Event affecting our ability to protect or maintain your data, we will notify affected users as soon as reasonably practicable and take commercially reasonable steps to restore services and data security.",
      },
    ],
  },
  {
    title: "Dispute Resolution and Governing Law",
    blocks: [
      { type: "h3", text: "14.1 Governing Law" },
      {
        type: "paragraph",
        text: "This Privacy Policy and any disputes arising from it shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions.",
      },
      { type: "h3", text: "14.2 Mandatory Arbitration" },
      {
        type: "callout",
        text: "IMPORTANT: THIS SECTION REQUIRES YOU TO RESOLVE DISPUTES THROUGH BINDING ARBITRATION RATHER THAN COURT.",
      },
      {
        type: "paragraph",
        text: "Any dispute, claim, or controversy arising out of or relating to this Privacy Policy, the Services, or the breach, termination, enforcement, interpretation, or validity thereof (collectively, “Disputes”) shall be resolved exclusively through final and binding arbitration, rather than in court.",
      },
      {
        type: "paragraph",
        text: "Arbitration shall be conducted by a single arbitrator under the Commercial Arbitration Rules of the American Arbitration Association (AAA), as modified by this section. The arbitration shall take place in Miami-Dade County, Florida. The arbitrator’s decision shall be final and binding and may be entered as a judgment in any court of competent jurisdiction.",
      },
      {
        type: "paragraph",
        text: "YOU AND ALEVARE GROUP EACH WAIVE ANY RIGHT TO A JURY TRIAL AND WAIVE THE RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.",
      },
      {
        type: "paragraph",
        text: "Notwithstanding the above, either party may seek emergency injunctive relief from a court of competent jurisdiction in Miami-Dade County, Florida to prevent irreparable harm pending arbitration.",
      },
      { type: "h3", text: "14.3 Time Limitation on Claims" },
      {
        type: "paragraph",
        text: "Any claim arising out of or related to this Privacy Policy or the Services must be filed within one (1) year after the claim arose, or it will be permanently barred. This limitation applies regardless of any statute of limitations to the contrary.",
      },
      { type: "h3", text: "14.4 Venue" },
      {
        type: "paragraph",
        text: "For any matters not subject to arbitration, you consent to the exclusive jurisdiction and venue of the state and federal courts located in Miami-Dade County, Florida.",
      },
    ],
  },
  {
    title: "Children’s Privacy",
    blocks: [
      {
        type: "paragraph",
        text: "Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately at info@alevaregroup.com and we will take steps to delete such information.",
      },
    ],
  },
  {
    title: "Third-Party Services and Links",
    blocks: [
      {
        type: "paragraph",
        text: "Our Services may contain links to third-party websites or integrate with third-party services. This Privacy Policy does not apply to those third parties. Key third-party services we use include:",
      },
      {
        type: "bullets",
        items: [
          "Google Firebase — firebase.google.com/support/privacy",
          "Apple App Store / TestFlight — apple.com/legal/privacy",
          "Google Play Store — policies.google.com/privacy",
          "Expo — expo.dev/privacy",
        ],
      },
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    blocks: [
      {
        type: "paragraph",
        text: "We may update this Privacy Policy from time to time. We will post the updated policy on this page with a revised “Last Updated” date. For material changes, we will provide notice through the app or by email at least 30 days before the changes take effect. Your continued use of our Services after the effective date constitutes acceptance of the updated policy.",
      },
    ],
  },
  {
    title: "Contact Us",
    blocks: [
      {
        type: "paragraph",
        text: "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:",
      },
      {
        type: "address",
        lines: [
          "Alevare Group Inc.",
          "210 172nd Street, Apt. 244",
          "Sunny Isles Beach, FL 33160",
          "United States",
          "Email: info@alevaregroup.com",
          "Website: www.alevaregroup.com",
        ],
      },
      {
        type: "paragraph",
        text: "We will respond to all privacy-related inquiries within 30 days.",
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subhead="ALEVARE GROUP INC · EFFECTIVE MAY 1, 2026 · LAST UPDATED MAY 15, 2026"
      intro={
        <>
          <p>
            Alevare Group Inc. (&ldquo;Alevare,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website at www.alevaregroup.com, our mobile applications (Alevare PRP Client and Alevare PRP Internal), and our web portals at app.alevaregroup.com and internal.alevaregroup.com (collectively, the &ldquo;Services&rdquo;).
          </p>
          <p>
            Please read this policy carefully. By using our Services, you agree to the practices described here. If you do not agree, please discontinue use of our Services.
          </p>
        </>
      }
      sections={sections}
      footerNotice={
        <>
          <p className="text-sm italic text-[color:var(--text-muted)] leading-relaxed">
            IMPORTANT NOTICE: This document has been prepared for informational purposes. Alevare Group recommends having this policy reviewed by a licensed Florida attorney before publishing, particularly the arbitration and limitation of liability clauses. Laws vary by jurisdiction and this document does not constitute legal advice.
          </p>
          <p className="mt-8 text-xs uppercase tracking-wider text-[color:var(--text-muted)] text-center">
            © 2026 Alevare Group Inc. All rights reserved. &nbsp;|&nbsp; Version 2.0 — May 15, 2026
          </p>
        </>
      }
    />
  );
}
