import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

/**
 * TEMPORARY end-to-end test trigger for inquiry email notifications.
 * Fires the same FormSubmit notification a real visitor would trigger,
 * plus (for type=inquiry) the CRM capture RPC.
 * Remove this route once notifications are confirmed working.
 */

const KEY = "86b591bd17c430396851ce15";
const NOTIFY_ENDPOINT = "https://formsubmit.co/ajax/info@alevaregroup.com";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  if (params.get("key") !== KEY) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }
  const type = params.get("type") ?? "inquiry";

  const payload =
    type === "booking"
      ? {
          _subject: "[TEST] Consultation Booked · James Whitfield — Jun 16, 2026, 10:00 AM ET",
          _template: "table",
          _captcha: "false",
          _replyto: "info@alevaregroup.com",
          "Booking type": "30-minute consultation (booked online)",
          "Scheduled for": "Mon, Jun 16, 2026, 10:00 AM ET",
          "Name": "James Whitfield",
          "Email": "j.whitfield@example.com",
          "Phone": "(305) 555-0142",
          "Company / Property": "The Meridian Grand, Miami Beach",
          "Notes": "Interested in a full-property PM program ahead of our Forbes inspection window.",
          "Next step": "This is confirmed on the Alevare CRM calendar. Reply to this email to reach the client.",
        }
      : {
          _subject: "[TEST] New Inquiry · James Whitfield — The Meridian Grand",
          _template: "table",
          _captcha: "false",
          _replyto: "info@alevaregroup.com",
          "Inquiry type": "Consultation request (website contact form)",
          "Name": "James Whitfield",
          "Email": "j.whitfield@example.com",
          "Phone": "(305) 555-0142",
          "Property": "The Meridian Grand",
          "Location": "Miami Beach, FL",
          "Preferred date": "Week of June 23",
          "Message":
            "We manage a 280-key property and are evaluating restoration partners for our guestroom refresh cycle. Would like to discuss scope and scheduling.",
          "Next step": "Reply to this email to respond directly to the client.",
        };

  const res = await fetch(NOTIFY_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: "https://www.alevaregroup.com",
      Referer: "https://www.alevaregroup.com/",
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0 Safari/537.36",
    },
    body: JSON.stringify(payload),
  });
  const rawBody = await res.text().catch(() => "");
  let emailResult: unknown = rawBody;
  try {
    emailResult = JSON.parse(rawBody);
  } catch {}

  let crm: string = "skipped";
  if (type === "inquiry") {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const { error } = await supabase.rpc("submit_inquiry", {
      p_name: "James Whitfield",
      p_email: "j.whitfield@example.com",
      p_phone: "(305) 555-0142",
      p_property: "The Meridian Grand",
      p_location: "Miami Beach, FL",
      p_consult_date: "Week of June 23",
      p_message: "[TEST SUBMISSION] Full-property PM program evaluation.",
    });
    crm = error ? `error: ${error.message}` : "captured";
  }

  return NextResponse.json({
    type,
    emailStatus: res.status,
    emailResult,
    crm,
  });
}
