"use server";

import { revalidatePath } from "next/cache";
import { requireUser } from "@/lib/supabase/server";
import { contactFullName, runTaskAutomations } from "@/lib/automations";
import type { ActionState } from "@/lib/actions/types";
import type { ActivityDirection, ActivityType } from "@/lib/database.types";

const ACTIVITY_TYPES: ActivityType[] = [
  "email",
  "text",
  "call",
  "meeting",
  "note",
];
const DIRECTIONS: ActivityDirection[] = ["inbound", "outbound"];

function optional(formData: FormData, key: string): string | null {
  const value = String(formData.get(key) ?? "").trim();
  return value === "" ? null : value;
}

export async function logActivity(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const { supabase } = await requireUser();

  const rawType = String(formData.get("type") ?? "");
  if (!ACTIVITY_TYPES.includes(rawType as ActivityType)) {
    return { error: "Please choose a valid activity type." };
  }
  const type = rawType as ActivityType;

  const rawDirection = String(formData.get("direction") ?? "");
  const direction = DIRECTIONS.includes(rawDirection as ActivityDirection)
    ? (rawDirection as ActivityDirection)
    : null;

  const contactId = optional(formData, "contact_id");
  if (!contactId) {
    return { error: "Please choose a contact." };
  }

  const subject = optional(formData, "subject");
  const body = optional(formData, "body");
  if (!subject && !body) {
    return { error: "Add a subject or some notes for this activity." };
  }

  const { data: contact, error: contactError } = await supabase
    .from("contacts")
    .select("id, first_name, last_name, company_id")
    .eq("id", contactId)
    .single();

  if (contactError || !contact) {
    return { error: "That contact no longer exists." };
  }

  const { error } = await supabase.from("activities").insert({
    contact_id: contact.id,
    company_id: contact.company_id,
    type,
    direction,
    subject,
    body,
  });

  if (error) {
    return { error: `Could not log activity: ${error.message}` };
  }

  await runTaskAutomations(supabase, "activity_logged", {
    id: contact.id,
    name: contactFullName(contact),
  });

  revalidatePath("/", "layout");
  return { error: null };
}
