import { createClient } from "@/lib/crm/supabase/server";
import { toggleAutomationRule } from "@/lib/crm/actions/automations";
import { EmptyState, PageHeader } from "@/components/crm/ui";
import type {
  AutomationRuleRow,
  AutomationTrigger,
} from "@/lib/crm/database.types";

export const metadata = { title: "Automations" };

const TRIGGER_LABELS: Record<AutomationTrigger, string> = {
  contact_created: "Contact created",
  meeting_booked: "Meeting booked",
  activity_logged: "Activity logged",
};

const TRIGGER_EXPLAINERS: Record<AutomationTrigger, string> = {
  contact_created:
    "Fires when a new contact is added — creates a follow-up task for them.",
  meeting_booked:
    "Fires when a meeting is booked through the public /crm/book page — handled by the database.",
  activity_logged:
    "Fires after an email, text, call, or note is logged — creates a follow-up task.",
};

export default async function AutomationsPage() {
  const supabase = await createClient();

  const { data } = await supabase
    .from("automation_rules")
    .select("*")
    .order("created_at", { ascending: true });

  const rules = (data ?? []) as AutomationRuleRow[];

  return (
    <>
      <PageHeader
        eyebrow="Workflows"
        title="Automations"
        description="Rules that create follow-up tasks automatically. {name} in a template becomes the contact's full name."
      />

      {rules.length === 0 ? (
        <div className="card p-5">
          <EmptyState>No automation rules configured.</EmptyState>
        </div>
      ) : (
        <div className="space-y-4">
          {rules.map((rule) => (
            <section
              key={rule.id}
              className={`card flex items-start justify-between gap-6 p-5 ${
                rule.enabled ? "" : "opacity-60"
              }`}
            >
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-sm font-medium text-ivory">
                    {rule.name}
                  </h2>
                  <span className="inline-block rounded-[2px] border border-gold/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.15em] text-gold">
                    {TRIGGER_LABELS[rule.trigger]}
                  </span>
                </div>
                <p className="mt-2 text-xs text-muted">
                  {TRIGGER_EXPLAINERS[rule.trigger]}
                </p>
                <p className="mt-3 text-sm text-ivory">
                  <span className="eyebrow mr-2">Task</span>
                  “{rule.task_title_template}”
                </p>
                <p className="mt-1 text-xs text-muted">
                  Due {rule.delay_days}{" "}
                  {rule.delay_days === 1 ? "day" : "days"} after the trigger.
                </p>
              </div>

              <form action={toggleAutomationRule} className="shrink-0">
                <input type="hidden" name="id" value={rule.id} />
                <input
                  type="hidden"
                  name="enabled"
                  value={rule.enabled ? "false" : "true"}
                />
                <button
                  type="submit"
                  className={rule.enabled ? "btn-gold" : "btn-ghost"}
                  title={rule.enabled ? "Disable rule" : "Enable rule"}
                >
                  {rule.enabled ? "Enabled" : "Disabled"}
                </button>
              </form>
            </section>
          ))}
        </div>
      )}
    </>
  );
}
