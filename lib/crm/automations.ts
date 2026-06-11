import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/crm/database.types";

/**
 * App-side automation engine: when a contact is created or an activity is
 * logged, enabled automation rules for that trigger create follow-up tasks.
 * (The "meeting_booked" trigger is handled inside the book_meeting RPC.)
 */
export async function runTaskAutomations(
  supabase: SupabaseClient<Database>,
  trigger: "contact_created" | "activity_logged",
  contact: { id: string; name: string }
): Promise<void> {
  const { data: rules } = await supabase
    .from("automation_rules")
    .select("*")
    .eq("trigger", trigger)
    .eq("enabled", true);

  if (!rules || rules.length === 0) return;

  const inserts = rules.map((rule) => ({
    title: rule.task_title_template.replaceAll("{name}", contact.name),
    due_at: new Date(
      Date.now() + rule.delay_days * 24 * 60 * 60 * 1000
    ).toISOString(),
    status: "open" as const,
    source: "automation",
    contact_id: contact.id,
  }));

  await supabase.from("tasks").insert(inserts);
}

export function contactFullName(contact: {
  first_name: string;
  last_name: string | null;
}): string {
  return [contact.first_name, contact.last_name].filter(Boolean).join(" ");
}
