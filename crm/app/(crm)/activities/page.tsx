import { createClient } from "@/lib/supabase/server";
import { logActivity } from "@/lib/actions/activities";
import { ActionForm } from "@/components/action-form";
import { ActivityTimeline } from "@/components/activity-timeline";
import { PageHeader, Panel } from "@/components/ui";
import {
  refName,
  type ActivityWithRefs,
  type ContactRef,
} from "@/lib/joined";

export const metadata = { title: "Activities" };

export default async function ActivitiesPage() {
  const supabase = await createClient();

  const [activitiesRes, contactsRes] = await Promise.all([
    supabase
      .from("activities")
      .select("*, contacts(id, first_name, last_name), companies(id, name)")
      .order("occurred_at", { ascending: false })
      .limit(50),
    supabase
      .from("contacts")
      .select("id, first_name, last_name")
      .order("first_name"),
  ]);

  const activities = (activitiesRes.data ??
    []) as unknown as ActivityWithRefs[];
  const contacts = (contactsRes.data ?? []) as ContactRef[];

  return (
    <>
      <PageHeader
        eyebrow="Timeline"
        title="Activities"
        description="The 50 most recent touchpoints across every relationship."
      />

      <div className="mb-6">
        <Panel title="Log activity">
          <ActionForm action={logActivity} submitLabel="Log activity">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="field-label" htmlFor="ga-contact">
                  Contact *
                </label>
                <select
                  id="ga-contact"
                  name="contact_id"
                  required
                  className="input"
                >
                  <option value="">Choose a contact…</option>
                  {contacts.map((contact) => (
                    <option key={contact.id} value={contact.id}>
                      {refName(contact)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="field-label" htmlFor="ga-type">
                    Type *
                  </label>
                  <select id="ga-type" name="type" required className="input">
                    <option value="email">Email</option>
                    <option value="text">Text</option>
                    <option value="call">Call</option>
                    <option value="meeting">Meeting</option>
                    <option value="note">Note</option>
                  </select>
                </div>
                <div>
                  <label className="field-label" htmlFor="ga-direction">
                    Direction
                  </label>
                  <select id="ga-direction" name="direction" className="input">
                    <option value="">—</option>
                    <option value="outbound">Outbound</option>
                    <option value="inbound">Inbound</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="field-label" htmlFor="ga-subject">
                  Subject
                </label>
                <input id="ga-subject" name="subject" className="input" />
              </div>
              <div className="sm:col-span-2">
                <label className="field-label" htmlFor="ga-body">
                  Body
                </label>
                <textarea id="ga-body" name="body" rows={3} className="input" />
              </div>
            </div>
          </ActionForm>
        </Panel>
      </div>

      <div className="card p-5">
        <ActivityTimeline activities={activities} />
      </div>
    </>
  );
}
