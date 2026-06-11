"use server";

import { revalidatePath } from "next/cache";
import { requireUser } from "@/lib/supabase/server";

export async function toggleAutomationRule(formData: FormData): Promise<void> {
  const { supabase } = await requireUser();

  const id = String(formData.get("id") ?? "");
  const enabled = String(formData.get("enabled") ?? "") === "true";
  if (!id) return;

  await supabase
    .from("automation_rules")
    .update({ enabled })
    .eq("id", id);

  revalidatePath("/automations");
}
