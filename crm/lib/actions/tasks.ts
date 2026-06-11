"use server";

import { revalidatePath } from "next/cache";
import { requireUser } from "@/lib/supabase/server";
import { etToUtc, parseDateKey } from "@/lib/et";
import type { ActionState } from "@/lib/actions/types";

function optional(formData: FormData, key: string): string | null {
  const value = String(formData.get(key) ?? "").trim();
  return value === "" ? null : value;
}

export async function createTask(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const { supabase } = await requireUser();

  const title = String(formData.get("title") ?? "").trim();
  if (!title) {
    return { error: "Task title is required." };
  }

  // Due date arrives as "YYYY-MM-DD"; store as 5:00 PM Eastern that day.
  const dueDate = optional(formData, "due_date");
  let dueAt: string | null = null;
  if (dueDate) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dueDate)) {
      return { error: "Due date is invalid." };
    }
    const { year, month, day } = parseDateKey(dueDate);
    dueAt = etToUtc(year, month, day, 17, 0).toISOString();
  }

  const { error } = await supabase.from("tasks").insert({
    title,
    details: optional(formData, "details"),
    contact_id: optional(formData, "contact_id"),
    due_at: dueAt,
    status: "open",
    source: "manual",
  });

  if (error) {
    return { error: `Could not create task: ${error.message}` };
  }

  revalidatePath("/", "layout");
  return { error: null };
}

export async function completeTask(formData: FormData): Promise<void> {
  const { supabase } = await requireUser();

  const id = String(formData.get("id") ?? "");
  if (!id) return;

  await supabase
    .from("tasks")
    .update({ status: "done", completed_at: new Date().toISOString() })
    .eq("id", id);

  revalidatePath("/", "layout");
}

export async function reopenTask(formData: FormData): Promise<void> {
  const { supabase } = await requireUser();

  const id = String(formData.get("id") ?? "");
  if (!id) return;

  await supabase
    .from("tasks")
    .update({ status: "open", completed_at: null })
    .eq("id", id);

  revalidatePath("/", "layout");
}
