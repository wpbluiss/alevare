"use server";

import { revalidatePath } from "next/cache";
import { requireUser } from "@/lib/supabase/server";

export async function cancelMeeting(formData: FormData): Promise<void> {
  const { supabase } = await requireUser();

  const id = String(formData.get("id") ?? "");
  if (!id) return;

  await supabase
    .from("meetings")
    .update({ status: "cancelled" })
    .eq("id", id);

  revalidatePath("/", "layout");
}
