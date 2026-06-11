"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireUser } from "@/lib/supabase/server";
import type { ActionState } from "@/lib/actions/types";

function optional(formData: FormData, key: string): string | null {
  const value = String(formData.get(key) ?? "").trim();
  return value === "" ? null : value;
}

export async function createCompany(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const { supabase } = await requireUser();

  const name = String(formData.get("name") ?? "").trim();
  if (!name) {
    return { error: "Company name is required." };
  }

  const { error } = await supabase.from("companies").insert({
    name,
    industry: optional(formData, "industry"),
    website: optional(formData, "website"),
    email: optional(formData, "email"),
    phone: optional(formData, "phone"),
    address_line: optional(formData, "address_line"),
    city: optional(formData, "city"),
    state: optional(formData, "state"),
    postal_code: optional(formData, "postal_code"),
    notes: optional(formData, "notes"),
  });

  if (error) {
    return { error: `Could not create company: ${error.message}` };
  }

  revalidatePath("/", "layout");
  return { error: null };
}

export async function updateCompany(
  id: string,
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const { supabase } = await requireUser();

  const name = String(formData.get("name") ?? "").trim();
  if (!name) {
    return { error: "Company name is required." };
  }

  const { error } = await supabase
    .from("companies")
    .update({
      name,
      industry: optional(formData, "industry"),
      website: optional(formData, "website"),
      email: optional(formData, "email"),
      phone: optional(formData, "phone"),
      address_line: optional(formData, "address_line"),
      city: optional(formData, "city"),
      state: optional(formData, "state"),
      postal_code: optional(formData, "postal_code"),
      notes: optional(formData, "notes"),
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    return { error: `Could not save changes: ${error.message}` };
  }

  revalidatePath("/", "layout");
  return { error: null };
}

export async function deleteCompany(
  id: string,
  _prevState: ActionState,
  _formData: FormData
): Promise<ActionState> {
  const { supabase } = await requireUser();

  // Detach dependents first so the delete cannot trip FK constraints.
  await supabase
    .from("contacts")
    .update({ company_id: null })
    .eq("company_id", id);
  await supabase
    .from("activities")
    .update({ company_id: null })
    .eq("company_id", id);
  await supabase
    .from("tasks")
    .update({ company_id: null })
    .eq("company_id", id);

  const { error } = await supabase.from("companies").delete().eq("id", id);

  if (error) {
    return { error: `Could not delete company: ${error.message}` };
  }

  revalidatePath("/", "layout");
  redirect("/companies");
}
