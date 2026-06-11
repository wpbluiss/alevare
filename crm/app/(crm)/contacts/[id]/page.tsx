import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { deleteContact, updateContact } from "@/lib/actions/contacts";
import { logActivity } from "@/lib/actions/activities";
import { completeTask, createTask } from "@/lib/actions/tasks";
import { ActionForm } from "@/components/action-form";
import { ActivityTimeline } from "@/components/activity-timeline";
import { EmptyState, PageHeader, Panel, SourceBadge } from "@/components/ui";
import { formatEtDateTime } from "@/lib/et";
import {
  refName,
  type ActivityWithRefs,
  type CompanyRef,
} from "@/lib/joined";
import type { TaskRow } from "@/lib/database.types";

export const metadata = { title: "Contact" };

export default async function ContactDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const [{ data: contact }, companiesRes, activitiesRes, tasksRes] =
    await Promise.all([
      supabase
        .from("contacts")
        .select("*, companies(id, name)")
        .eq("id", id)
        .single(),
      supabase.from("companies").select("id, name").order("name"),
      supabase
        .from("activities")
        .select("*, contacts(id, first_name, last_name), companies(id, name)")
        .eq("contact_id", id)
        .order("occurred_at", { ascending: false }),
      supabase
        .from("tasks")
        .select("*")
        .eq("contact_id", id)
        .eq("status", "open")
        .order("due_at", { ascending: true, nullsFirst: false }),
    ]);

  if (!contact) {
    notFound();
  }

  const company = (contact.companies ?? null) as CompanyRef | null;
  const companies = (companiesRes.data ?? []) as CompanyRef[];
  const activities = (activitiesRes.data ??
    []) as unknown as ActivityWithRefs[];
  const openTasks = (tasksRes.data ?? []) as TaskRow[];

  const fullName = refName(contact);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={fullName}
        description={[
          contact.title,
          company ? company.name : null,
        ]
          .filter(Boolean)
          .join(" · ")}
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-3">
          <section className="card p-5">
            <h2 className="eyebrow mb-4">Details</h2>
            <ActionForm
              action={updateContact.bind(null, contact.id)}
              submitLabel="Save changes"
              pendingLabel="Saving…"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="field-label" htmlFor="cd-first">
                    First name *
                  </label>
                  <input
                    id="cd-first"
                    name="first_name"
                    required
                    defaultValue={contact.first_name}
                    className="input"
                  />
                </div>
                <div>
                  <label className="field-label" htmlFor="cd-last">
                    Last name
                  </label>
                  <input
                    id="cd-last"
                    name="last_name"
                    defaultValue={contact.last_name ?? ""}
                    className="input"
                  />
                </div>
                <div>
                  <label className="field-label" htmlFor="cd-title">
                    Title
                  </label>
                  <input
                    id="cd-title"
                    name="title"
                    defaultValue={contact.title ?? ""}
                    className="input"
                  />
                </div>
                <div>
                  <label className="field-label" htmlFor="cd-company">
                    Company
                  </label>
                  <select
                    id="cd-company"
                    name="company_id"
                    defaultValue={contact.company_id ?? ""}
                    className="input"
                  >
                    <option value="">No company</option>
                    {companies.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="field-label" htmlFor="cd-email">
                    Email
                  </label>
                  <input
                    id="cd-email"
                    name="email"
                    type="email"
                    defaultValue={contact.email ?? ""}
                    className="input"
                  />
                </div>
                <div>
                  <label className="field-label" htmlFor="cd-phone">
                    Phone
                  </label>
                  <input
                    id="cd-phone"
                    name="phone"
                    defaultValue={contact.phone ?? ""}
                    className="input"
                  />
                </div>
                <div>
                  <label className="field-label" htmlFor="cd-mobile">
                    Mobile
                  </label>
                  <input
                    id="cd-mobile"
                    name="mobile"
                    defaultValue={contact.mobile ?? ""}
                    className="input"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="field-label" htmlFor="cd-notes">
                    Notes
                  </label>
                  <textarea
                    id="cd-notes"
                    name="notes"
                    rows={3}
                    defaultValue={contact.notes ?? ""}
                    className="input"
                  />
                </div>
              </div>
            </ActionForm>
          </section>

          <section className="card p-5">
            <h2 className="eyebrow mb-4">Log activity</h2>
            <ActionForm action={logActivity} submitLabel="Log activity">
              <input type="hidden" name="contact_id" value={contact.id} />
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="field-label" htmlFor="la-type">
                    Type *
                  </label>
                  <select id="la-type" name="type" className="input" required>
                    <option value="email">Email</option>
                    <option value="text">Text</option>
                    <option value="call">Call</option>
                    <option value="note">Note</option>
                  </select>
                </div>
                <div>
                  <label className="field-label" htmlFor="la-direction">
                    Direction
                  </label>
                  <select id="la-direction" name="direction" className="input">
                    <option value="">—</option>
                    <option value="outbound">Outbound</option>
                    <option value="inbound">Inbound</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="field-label" htmlFor="la-subject">
                    Subject
                  </label>
                  <input id="la-subject" name="subject" className="input" />
                </div>
                <div className="sm:col-span-2">
                  <label className="field-label" htmlFor="la-body">
                    Body
                  </label>
                  <textarea
                    id="la-body"
                    name="body"
                    rows={3}
                    className="input"
                  />
                </div>
              </div>
            </ActionForm>
          </section>

          <section className="card p-5">
            <h2 className="eyebrow mb-4">Activity timeline</h2>
            <ActivityTimeline activities={activities} showRefs={false} />
          </section>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <section className="card p-5">
            <h2 className="eyebrow mb-4">Open tasks</h2>
            {openTasks.length === 0 ? (
              <EmptyState>No open tasks for {fullName}.</EmptyState>
            ) : (
              <ol className="divide-y divide-hairline">
                {openTasks.map((task) => (
                  <li
                    key={task.id}
                    className="flex items-start justify-between gap-3 py-3 first:pt-0 last:pb-0"
                  >
                    <div>
                      <p className="text-sm text-ivory">{task.title}</p>
                      <p className="mt-1 text-xs text-muted">
                        {task.due_at
                          ? `Due ${formatEtDateTime(new Date(task.due_at))} ET`
                          : "No due date"}
                      </p>
                      <div className="mt-1.5">
                        <SourceBadge source={task.source} />
                      </div>
                    </div>
                    <form action={completeTask}>
                      <input type="hidden" name="id" value={task.id} />
                      <button
                        type="submit"
                        className="btn-ghost !px-3 !py-1.5"
                        title="Mark done"
                      >
                        Done
                      </button>
                    </form>
                  </li>
                ))}
              </ol>
            )}

            <div className="mt-5 border-t border-hairline pt-5">
              <h3 className="eyebrow mb-3">Add task</h3>
              <ActionForm action={createTask} submitLabel="Add task" ghost>
                <input type="hidden" name="contact_id" value={contact.id} />
                <div className="space-y-3">
                  <div>
                    <label className="field-label" htmlFor="nt-title">
                      Title *
                    </label>
                    <input
                      id="nt-title"
                      name="title"
                      required
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="nt-due">
                      Due date (ET)
                    </label>
                    <input
                      id="nt-due"
                      name="due_date"
                      type="date"
                      className="input"
                    />
                  </div>
                </div>
              </ActionForm>
            </div>
          </section>

          {company ? (
            <section className="card p-5">
              <h2 className="eyebrow mb-3">Company</h2>
              <Link
                href={`/companies/${company.id}`}
                className="text-sm text-gold hover:text-gold-hover"
              >
                {company.name} →
              </Link>
            </section>
          ) : null}

          <Panel title="Danger zone">
            <p className="mb-2 text-sm text-muted">
              Deleting a contact detaches their activities, tasks, and
              meetings, then removes the record permanently.
            </p>
            <ActionForm
              action={deleteContact.bind(null, contact.id)}
              submitLabel="Confirm delete"
              pendingLabel="Deleting…"
              ghost
            >
              <p className="text-sm text-ivory">
                Delete <span className="text-gold">{fullName}</span>? This
                cannot be undone.
              </p>
            </ActionForm>
          </Panel>
        </div>
      </div>
    </>
  );
}
