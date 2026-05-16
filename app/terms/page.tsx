import type { Metadata } from "next";
import LegalPage, { type LegalBlock } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — Alevare Group",
  description:
    "Terms of service for Alevare Group Inc. and the Perfect Room Program platform.",
};

const sections: { title: string; blocks: LegalBlock[] }[] = [
  {
    title: "About Alevare Group",
    blocks: [
      {
        type: "paragraph",
        text: "Alevare Group Inc. is a luxury hotel room restoration and preventative maintenance company providing the Perfect Room Program (PRP) service to hotel properties. Our Services include physical restoration work performed on-site at hotel properties, digital platform tools for managing and documenting that work, and reporting and analytics services.",
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
    title: "Eligibility and Account Registration",
    blocks: [
      { type: "h3", text: "2.1 Eligibility" },
      {
        type: "paragraph",
        text: "You must be at least 18 years of age and have the legal authority to enter into binding agreements on behalf of yourself or your organization to use our Services. By using our Services, you represent and warrant that you meet these requirements.",
      },
      { type: "h3", text: "2.2 Account Registration" },
      {
        type: "paragraph",
        text: "Access to the Alevare PRP platform requires an account. Accounts are created and managed by Alevare Group administrators. You are responsible for:",
      },
      {
        type: "bullets",
        items: [
          "Maintaining the confidentiality of your login credentials",
          "All activities that occur under your account",
          "Notifying Alevare Group immediately of any unauthorized use of your account at info@alevaregroup.com",
        ],
      },
      {
        type: "paragraph",
        text: "You may not share your credentials with any other person. Alevare Group is not liable for any loss resulting from unauthorized use of your account.",
      },
      { type: "h3", text: "2.3 Account Termination" },
      {
        type: "paragraph",
        text: "Alevare Group reserves the right to suspend or terminate any account at any time for violation of these Terms, termination of the service relationship, or any other reason at our sole discretion. Upon termination, your right to access the Services immediately ceases.",
      },
    ],
  },
  {
    title: "The Perfect Room Program Services",
    blocks: [
      { type: "h3", text: "3.1 Service Description" },
      {
        type: "paragraph",
        text: "The Perfect Room Program (PRP) is a contracted hotel room restoration and preventative maintenance service. The digital platform (the “App”) facilitates communication, documentation, workflow management, and reporting between Alevare Group and enrolled hotel properties. The App is a tool — it does not by itself constitute the complete PRP service.",
      },
      { type: "h3", text: "3.2 Service Agreement Required" },
      {
        type: "paragraph",
        text: "Use of the Alevare PRP Client App and web portal by hotel properties requires a separate executed service agreement between Alevare Group and the hotel property. These Terms govern your use of the digital platform only. The scope of physical restoration work, pricing, timelines, and service standards are governed exclusively by the written service agreement.",
      },
      { type: "h3", text: "3.3 No Guarantee of Specific Outcomes" },
      {
        type: "paragraph",
        text: "While Alevare Group strives to deliver Forbes- and AAA-standard results, we do not guarantee specific outcomes, ratings, revenue increases, guest satisfaction scores, or other business results. Results depend on property conditions, scope of work, client cooperation, and other factors outside our control.",
      },
      { type: "h3", text: "3.4 Service Availability" },
      {
        type: "paragraph",
        text: "Service delivery depends on site access, client coordination, staffing availability, safety conditions, and property readiness. Alevare Group does not guarantee uninterrupted or continuous service availability and is not responsible for delays caused by factors outside our reasonable control.",
      },
    ],
  },
  {
    title: "Platform Access and Acceptable Use",
    blocks: [
      { type: "h3", text: "4.1 License Grant" },
      {
        type: "paragraph",
        text: "Subject to these Terms, Alevare Group grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Services solely for their intended purpose — managing and documenting hotel room restoration work within the Perfect Room Program.",
      },
      { type: "h3", text: "4.2 Prohibited Uses" },
      { type: "paragraph", text: "You agree not to:" },
      {
        type: "bullets",
        items: [
          "Use the Services for any unlawful purpose or in violation of any applicable laws or regulations",
          "Attempt to gain unauthorized access to any part of the Services or any connected systems",
          "Share your account credentials with any unauthorized person",
          "Upload or transmit any malicious code, viruses, or harmful content",
          "Reverse engineer, decompile, or attempt to extract the source code of the platform",
          "Use the Services to compete with Alevare Group or to develop competing products",
          "Scrape, harvest, or collect data from the platform through automated means",
          "Interfere with or disrupt the integrity or performance of the Services",
          "Impersonate any person or entity or misrepresent your affiliation",
          "Use the platform to transmit unsolicited commercial communications",
        ],
      },
      { type: "h3", text: "4.3 Role-Based Access" },
      {
        type: "paragraph",
        text: "The platform uses role-based access control. Each user is assigned a role (hotel-director, alevare-supervisor, alevare-qa, alevare-coo, alevare-ceo, or alevare-cgo) that determines what data they can view and what actions they can perform. You agree to use only the features and access levels assigned to your role. Attempting to circumvent role restrictions is a material violation of these Terms.",
      },
    ],
  },
  {
    title: "Content and Data",
    blocks: [
      { type: "h3", text: "5.1 Your Content" },
      {
        type: "paragraph",
        text: "You retain ownership of content you submit to the platform (“Your Content”), including messages, notes, and information you provide. By submitting content, you grant Alevare Group a worldwide, non-exclusive, royalty-free license to use, store, display, and process Your Content solely for the purpose of providing the Services.",
      },
      { type: "h3", text: "5.2 Photo Content" },
      {
        type: "paragraph",
        text: "Photos uploaded by Alevare Group personnel during restoration work are owned by Alevare Group and licensed to hotel clients for property management purposes as described in our Privacy Policy. Hotel clients may not use such photos for marketing, advertising, or public-facing purposes without express written consent from Alevare Group.",
      },
      { type: "h3", text: "5.3 Accuracy of Information" },
      {
        type: "paragraph",
        text: "You are responsible for the accuracy of information you provide through the platform. Alevare Group is not responsible for errors, omissions, or inaccuracies in user-submitted content. Inspection reports, approval decisions, and other records created through the platform reflect information provided by users and do not constitute independent verification by Alevare Group.",
      },
      { type: "h3", text: "5.4 Audit Logs" },
      {
        type: "paragraph",
        text: "The platform maintains immutable audit logs of all significant actions. By using the platform, you acknowledge and consent to this logging. Audit logs may be used for dispute resolution, legal proceedings, compliance purposes, and quality assurance. Audit logs cannot be modified or deleted by any user, including Alevare Group administrators.",
      },
      { type: "h3", text: "5.5 Data Backup" },
      {
        type: "paragraph",
        text: "While Alevare Group uses Google Firebase infrastructure with built-in redundancy, we do not guarantee that data will never be lost. We recommend that hotel clients periodically export and retain copies of important records using the PDF export features built into the platform.",
      },
    ],
  },
  {
    title: "Intellectual Property",
    blocks: [
      { type: "h3", text: "6.1 Alevare Group Intellectual Property" },
      {
        type: "paragraph",
        text: "All content, software, algorithms, designs, trademarks, service marks, logos, and other intellectual property associated with the Services (collectively, “Alevare IP”) are owned exclusively by Alevare Group Inc. These Terms do not grant you any right, title, or interest in Alevare IP except the limited license described in Section 4.1.",
      },
      { type: "h3", text: "6.2 Feedback" },
      {
        type: "paragraph",
        text: "If you provide suggestions, ideas, or feedback about the Services (“Feedback”), you grant Alevare Group an irrevocable, perpetual, royalty-free license to use that Feedback for any purpose without compensation or attribution to you.",
      },
      { type: "h3", text: "6.3 Website and Platform Content" },
      {
        type: "paragraph",
        text: "All content on www.alevaregroup.com and the Alevare PRP platform, including text, graphics, branding, images, documents, service descriptions, and other materials, is owned by or licensed to Alevare Group Inc. (“Alevare Content”). Alevare Content is protected by applicable intellectual property laws. You may not copy, distribute, reproduce, modify, create derivative works from, publicly display, or otherwise use any Alevare Content without the prior written permission of Alevare Group or the applicable rights holder. Nothing in these Terms grants you any right, title, or interest in any Alevare Content beyond the limited license described in Section 4.1.",
      },
    ],
  },
  {
    title: "Payment Terms",
    blocks: [
      { type: "h3", text: "7.1 Service Fees" },
      {
        type: "paragraph",
        text: "Fees for the Perfect Room Program are established in the executed service agreement between Alevare Group and the hotel property. Use of the digital platform (the App) is included as part of the PRP service agreement and is not separately priced.",
      },
      { type: "h3", text: "7.2 Payment Obligations" },
      {
        type: "paragraph",
        text: "All invoices are due and payable per the terms in the executed service agreement. Late payments may incur interest at the maximum rate permitted by Florida law. Alevare Group reserves the right to suspend platform access for accounts with past-due balances.",
      },
      { type: "h3", text: "7.3 Out-of-Scope Work" },
      {
        type: "paragraph",
        text: "Work identified as out-of-scope during the PRP process requires separate written approval through the platform and additional payment. No out-of-scope work will be performed without an approved cost estimate and explicit approval from an authorized hotel representative through the platform. The digital approval record constitutes the written authorization for out-of-scope work.",
      },
    ],
  },
  {
    title: "Confidentiality",
    blocks: [
      {
        type: "paragraph",
        text: "Each party agrees to keep confidential all non-public information received from the other party in connection with the Services (“Confidential Information”). Confidential Information includes pricing, business processes, property conditions, client lists, and technical platform details. This obligation does not apply to information that: (a) is or becomes publicly known through no breach of this agreement; (b) was independently developed; (c) is required to be disclosed by law or court order; or (d) is approved for disclosure in writing by the disclosing party.",
      },
    ],
  },
  {
    title: "Disclaimer of Warranties",
    blocks: [
      {
        type: "paragraph",
        text: "THE SERVICES ARE PROVIDED “AS IS” WITHOUT WARRANTIES OF ANY KIND.",
      },
      {
        type: "paragraph",
        text: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALEVARE GROUP EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WITHOUT LIMITATION IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.",
      },
      {
        type: "paragraph",
        text: "ALEVARE GROUP DOES NOT WARRANT THAT: (A) THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE; (B) ANY DATA WILL BE ACCURATE, RELIABLE, OR COMPLETE; (C) THE PLATFORM WILL MEET YOUR SPECIFIC REQUIREMENTS; (D) DEFECTS WILL BE CORRECTED; OR (E) THE PLATFORM IS FREE OF VIRUSES OR HARMFUL COMPONENTS.",
      },
      {
        type: "paragraph",
        text: "ALEVARE GROUP IS NOT RESPONSIBLE FOR ANY DISRUPTIONS, DELAYS, OR FAILURES RESULTING FROM CAUSES OUTSIDE OUR REASONABLE CONTROL, INCLUDING FAILURES OF THIRD-PARTY SERVICES SUCH AS GOOGLE FIREBASE, APPLE, OR INTERNET SERVICE PROVIDERS.",
      },
    ],
  },
  {
    title: "Limitation of Liability",
    blocks: [
      {
        type: "paragraph",
        text: "THIS SECTION LIMITS ALEVARE GROUP’S FINANCIAL LIABILITY. PLEASE READ CAREFULLY.",
      },
      {
        type: "paragraph",
        text: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ALEVARE GROUP INC., ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, CONTRACTORS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION:",
      },
      {
        type: "bullets",
        items: [
          "Loss of revenue, profits, or business opportunities",
          "Loss of bookings, reservations, or hotel occupancy",
          "Guest compensation costs or complaints",
          "Reputational damage or brand impact",
          "Loss of data or cost of data recovery",
          "Cost of substitute services",
          "Operational delays or business interruption",
        ],
      },
      {
        type: "paragraph",
        text: "EVEN IF ALEVARE GROUP HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
      },
      {
        type: "paragraph",
        text: "IN NO EVENT SHALL ALEVARE GROUP’S TOTAL CUMULATIVE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES EXCEED THE GREATER OF: (A) THE TOTAL AMOUNT PAID BY YOU TO ALEVARE GROUP IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM; OR (B) ONE THOUSAND DOLLARS ($1,000.00).",
      },
      {
        type: "paragraph",
        text: "Some jurisdictions do not allow the exclusion or limitation of certain warranties or liability. In such jurisdictions, our liability shall be limited to the greatest extent permitted by applicable law.",
      },
    ],
  },
  {
    title: "Indemnification",
    blocks: [
      {
        type: "paragraph",
        text: "You agree to indemnify, defend, and hold harmless Alevare Group Inc. and its officers, directors, employees, agents, and contractors from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys’ fees) arising out of or related to:",
      },
      {
        type: "bullets",
        items: [
          "Your use of or inability to use the Services",
          "Your violation of these Terms",
          "Your violation of any applicable law or regulation",
          "Your Content or any content you submit through the platform",
          "Any misrepresentation made by you",
          "Any dispute between you and a third party",
        ],
      },
      {
        type: "paragraph",
        text: "Alevare Group reserves the right to assume exclusive control of any matter subject to indemnification, at your expense.",
      },
    ],
  },
  {
    title: "Force Majeure",
    blocks: [
      {
        type: "paragraph",
        text: "Alevare Group shall not be liable for any failure or delay in performing its obligations under these Terms to the extent caused by circumstances beyond our reasonable control, including but not limited to: acts of God, natural disasters, pandemics, epidemics, war, terrorism, riots, civil disturbances, government actions or restrictions, labor disputes, power outages, internet or telecommunications failures, third-party service outages (including Google Firebase, Apple, or Expo), cyberattacks, or other Force Majeure Events.",
      },
      {
        type: "paragraph",
        text: "In the event of a Force Majeure Event, Alevare Group will provide notice as soon as reasonably practicable and will use commercially reasonable efforts to resume performance as quickly as possible. Hotel clients shall not be charged for services not performed during a Force Majeure Event.",
      },
    ],
  },
  {
    title: "Third-Party Services",
    blocks: [
      {
        type: "paragraph",
        text: "The Services integrate with or rely upon third-party services including Google Firebase, Apple, Expo, and others. These third-party services are governed by their own terms and privacy policies. Alevare Group is not responsible for the availability, accuracy, or practices of third-party services. Outages, changes, or discontinuation of third-party services may affect the availability or functionality of our platform, and Alevare Group shall not be liable for such impacts.",
      },
    ],
  },
  {
    title: "Dispute Resolution and Governing Law",
    blocks: [
      { type: "h3", text: "14.1 Governing Law" },
      {
        type: "paragraph",
        text: "These Terms and any disputes arising from them shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions.",
      },
      { type: "h3", text: "14.2 Informal Resolution" },
      {
        type: "paragraph",
        text: "Before initiating formal dispute resolution, the parties agree to attempt to resolve any dispute informally by contacting info@alevaregroup.com with a written description of the dispute. The parties will negotiate in good faith for at least 30 days before proceeding to arbitration.",
      },
      { type: "h3", text: "14.3 Binding Arbitration" },
      {
        type: "callout",
        text: "IMPORTANT: DISPUTES ARE RESOLVED THROUGH BINDING ARBITRATION, NOT COURT.",
      },
      {
        type: "paragraph",
        text: "Any dispute, claim, or controversy arising out of or relating to these Terms or the Services that cannot be resolved informally shall be resolved exclusively through final and binding arbitration. You waive your right to a jury trial and your right to participate in a class action lawsuit.",
      },
      {
        type: "paragraph",
        text: "Arbitration shall be conducted by a single arbitrator under the Commercial Arbitration Rules of the American Arbitration Association (AAA), as modified herein. The arbitration shall take place in Miami-Dade County, Florida. The arbitrator’s award shall be final and binding and may be entered as a judgment in any court of competent jurisdiction.",
      },
      {
        type: "paragraph",
        text: "YOU AND ALEVARE GROUP EACH WAIVE: (A) THE RIGHT TO A JURY TRIAL; (B) THE RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION; AND (C) THE RIGHT TO BRING OR PARTICIPATE IN ANY REPRESENTATIVE ACTION.",
      },
      {
        type: "paragraph",
        text: "Each party shall bear its own costs and fees in arbitration unless the arbitrator determines that a party’s claim or defense was frivolous, in which case the arbitrator may award attorneys’ fees to the prevailing party.",
      },
      { type: "h3", text: "14.4 Exceptions to Arbitration" },
      {
        type: "paragraph",
        text: "Notwithstanding the above, either party may seek emergency injunctive or other equitable relief from a court of competent jurisdiction in Miami-Dade County, Florida, to prevent irreparable harm pending the outcome of arbitration, including to protect intellectual property rights or confidential information.",
      },
      { type: "h3", text: "14.5 Time Limitation on Claims" },
      {
        type: "paragraph",
        text: "Any claim arising out of or related to these Terms or the Services must be filed within one (1) year after the claim arose. Claims not filed within this period are permanently barred, regardless of any statute of limitations to the contrary.",
      },
      { type: "h3", text: "14.6 Venue for Non-Arbitrable Matters" },
      {
        type: "paragraph",
        text: "For any matters not subject to arbitration, you consent to the exclusive jurisdiction and venue of the state and federal courts located in Miami-Dade County, Florida.",
      },
    ],
  },
  {
    title: "Termination",
    blocks: [
      { type: "h3", text: "15.1 Termination by Alevare Group" },
      {
        type: "paragraph",
        text: "Alevare Group may suspend or terminate your access to the Services at any time, with or without notice, for:",
      },
      {
        type: "bullets",
        items: [
          "Violation of these Terms",
          "Termination or expiration of the service agreement",
          "Non-payment of fees",
          "Conduct that Alevare Group reasonably believes is harmful to other users, the platform, or Alevare Group",
          "Any other reason at Alevare Group’s sole discretion",
        ],
      },
      { type: "h3", text: "15.2 Termination by You" },
      {
        type: "paragraph",
        text: "Hotel clients may terminate their use of the platform by providing written notice per the terms of their service agreement. Alevare Group employees and contractors may terminate platform access by notifying their supervisor or HR representative.",
      },
      { type: "h3", text: "15.3 Effect of Termination" },
      {
        type: "paragraph",
        text: "Upon termination: (a) your license to use the Services immediately ceases; (b) you must stop all use of the platform; (c) Alevare Group may delete your account and data per our data retention policy; (d) hotel clients may request data export within 90 days of termination; (e) all provisions of these Terms that by their nature should survive termination shall survive, including Sections 6, 8, 9, 10, 11, 14, and 15.3.",
      },
    ],
  },
  {
    title: "Modifications to Terms and Services",
    blocks: [
      {
        type: "paragraph",
        text: "Alevare Group reserves the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on our website with a revised effective date and, where practical, notifying users through the platform or by email at least 30 days before the changes take effect.",
      },
      {
        type: "paragraph",
        text: "Your continued use of the Services after the effective date of any modification constitutes your acceptance of the updated Terms. If you do not agree to the modified Terms, you must stop using the Services.",
      },
      {
        type: "paragraph",
        text: "Alevare Group also reserves the right to modify, suspend, or discontinue any part of the Services at any time with reasonable notice. Alevare Group shall not be liable for any modification, suspension, or discontinuation of the Services.",
      },
    ],
  },
  {
    title: "General Provisions",
    blocks: [
      { type: "h3", text: "17.1 Entire Agreement" },
      {
        type: "paragraph",
        text: "These Terms, together with our Privacy Policy and any executed service agreement, constitute the entire agreement between you and Alevare Group regarding the Services and supersede all prior agreements, understandings, and representations.",
      },
      { type: "h3", text: "17.2 Severability" },
      {
        type: "paragraph",
        text: "If any provision of these Terms is found to be unenforceable or invalid by a court of competent jurisdiction, that provision shall be limited or eliminated to the minimum extent necessary so that the Terms otherwise remain in full force and effect.",
      },
      { type: "h3", text: "17.3 Waiver" },
      {
        type: "paragraph",
        text: "Alevare Group’s failure to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision. Any waiver must be in writing and signed by an authorized representative of Alevare Group.",
      },
      { type: "h3", text: "17.4 Assignment" },
      {
        type: "paragraph",
        text: "You may not assign or transfer these Terms or your rights under them without Alevare Group’s prior written consent. Alevare Group may freely assign these Terms in connection with a merger, acquisition, or sale of assets. These Terms shall be binding upon and inure to the benefit of the parties’ successors and permitted assigns.",
      },
      { type: "h3", text: "17.5 Notices" },
      {
        type: "paragraph",
        text: "All legal notices to Alevare Group must be in writing and sent to info@alevaregroup.com or by certified mail to Alevare Group Inc., 210 172nd Street, Apt. 244, Sunny Isles Beach, FL 33160. Notices are effective upon receipt.",
      },
      { type: "h3", text: "17.6 No Third-Party Beneficiaries" },
      {
        type: "paragraph",
        text: "These Terms do not create any third-party beneficiary rights. No person or entity other than you and Alevare Group has any rights under these Terms.",
      },
      { type: "h3", text: "17.7 Relationship of the Parties" },
      {
        type: "paragraph",
        text: "These Terms do not create a partnership, joint venture, employment, or agency relationship between you and Alevare Group. You are an independent user of the Services.",
      },
    ],
  },
  {
    title: "Contact Information",
    blocks: [
      {
        type: "paragraph",
        text: "For questions about these Terms or the Services, please contact:",
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
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      subhead="ALEVARE GROUP INC · EFFECTIVE MAY 1, 2026 · LAST UPDATED MAY 15, 2026"
      intro={
        <>
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you and Alevare Group Inc. (&ldquo;Alevare,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) governing your use of our website at www.alevaregroup.com, mobile applications (Alevare PRP Client and Alevare PRP Internal), web portals at app.alevaregroup.com and internal.alevaregroup.com, and all related services (collectively, the &ldquo;Services&rdquo;).
          </p>
          <div className="border-l-2 border-[color:var(--accent-primary)] bg-[color:var(--accent-primary)]/5 px-5 py-3 text-[16px] md:text-[17px] leading-relaxed font-semibold text-[color:var(--text-primary)]">
            BY ACCESSING OR USING OUR SERVICES, YOU AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE, DO NOT USE OUR SERVICES.
          </div>
          <p>
            These Terms apply to all users including hotel clients, Alevare Group employees, contractors, and any other individuals accessing the platform.
          </p>
        </>
      }
      sections={sections}
      footerNotice={
        <p className="text-xs uppercase tracking-wider text-[color:var(--text-muted)] text-center">
          © 2026 Alevare Group Inc. All rights reserved. &nbsp;|&nbsp; Version 2.1 — May 15, 2026
        </p>
      }
    />
  );
}
