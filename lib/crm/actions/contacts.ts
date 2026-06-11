"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireUser } from "@/lib/crm/supabase/server";
import { contactFullName, runTaskAutomations } from "@/lib/crm/automations";
import type { ActionState } from "@/lib/crm/actions/types";

function optional(formData: FormData, key: string): string | null {
  const value = String(formData.get(key) ?? "").trim();
  return value === "" ? null : value;
}

export async function createContact(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const { supabase } = await requireUser();

  const firstName = String(formData.get("first_name") ?? "").trim();
  if (!firstName) {
    return { error: "First name is required." };
  }

  const { data: contact, error } = await supabase
    .from("contacts")
    .insert({
      first_name: firstName,
      last_name: optional(formData, "last_name"),
      title: optional(formData, "title"),
      company_id: optional(formData, "company_id"),
      email: optional(formData, "email"),
      phone: optional(formData, "phone"),
      mobile: optional(formData, "mobile"),
      notes: optional(formData, "notes"),
    })
    .select("id, first_name, last_name")
    .single();

  if (error || !contact) {
    return {
      error: `Could not create contact: ${error?.message ?? "unknown error"}`,
    };
  }

  await runTaskAutomations(supabase, "contact_created", {
    id: contact.id,
    name: contactFullName(contact),
  });

  revalidatePath("/crm", "layout");
  return { error: null };
}

export async function updateContact(
  id: string,
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const { supabase } = await requireUser();

  const firstName = String(formData.get("first_name") ?? "").trim();
  if (!firstName) {
    return { error: "First name is required." };
  }

  const { error } = await supabase
    .from("contacts")
    .update({
      first_name: firstName,
      last_name: optional(formData, "last_name"),
      title: optional(formData, "title"),
      company_id: optional(formData, "company_id"),
      email: optional(formData, "email"),
      phone: optional(formData, "phone"),
      mobile: optional(formData, "mobile"),
      notes: optional(formData, "notes"),
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    return { error: `Could not save changes: ${error.message}` };
  }

  revalidatePath("/crm", "layout");
  return { error: null };
}

export async function deleteContact(
  id: string,
  _prevState: ActionState,
  _formData: FormData
): Promise<ActionState> {
  const { supabase } = await requireUser();

  // Detach dependents first so the delete cannot trip FK constraints.
  await supabase
    .from("activities")
    .update({ contact_id: null })
    .eq("contact_id", id);
  await supabase
    .from("tasks")
    .update({ contact_id: null })
    .eq("contact_id", id);
  await supabase
    .from("meetings")
    .update({ contact_id: null })
    .eq("contact_id", id);

  const { error } = await supabase.from("contacts").delete().eq("id", id);

  if (error) {
    return { error: `Could not delete contact: ${error.message}` };
  }

  revalidatePath("/crm", "layout");
  redirect("/crm/contacts");
}
