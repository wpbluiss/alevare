import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { completeTask, createTask, reopenTask } from "@/lib/actions/tasks";
import { ActionForm } from "@/components/action-form";
import {
  EmptyState,
  PageHeader,
  Panel,
  SourceBadge,
} from "@/components/ui";
import { formatEtDateTime } from "@/lib/et";
import {
  refName,
  type ContactRef,
  type TaskWithContact,
} from "@/lib/joined";

export const metadata = { title: "Tasks" };

function TaskRowItem({
  task,
  done,
}: {
  task: TaskWithContact;
  done: boolean;
}) {
  return (
    <li className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
      <div className="flex items-start gap-3">
        <form action={done ? reopenTask : completeTask}>
          <input type="hidden" name="id" value={task.id} />
          <button
            type="submit"
            title={done ? "Reopen task" : "Mark done"}
            aria-label={done ? "Reopen task" : "Mark done"}
            className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-[2px] border text-[11px] transition-colors ${
              done
                ? "border-gold bg-gold text-surface"
                : "border-hairline text-transparent hover:border-gold hover:text-gold"
            }`}
          >
            ✓
          </button>
        </form>
        <div>
          <p
            className={`text-sm ${
              done ? "text-muted line-through" : "text-ivory"
            }`}
          >
            {task.title}
          </p>
          <p className="mt-1 text-xs text-muted">
            {task.contacts ? (
              <Link
                href={`/contacts/${task.contacts.id}`}
                className="text-gold hover:text-gold-hover"
              >
                {refName(task.contacts)}
              </Link>
            ) : (
              "No contact"
            )}
            {task.due_at ? (
              <span> · due {formatEtDateTime(new Date(task.due_at))} ET</span>
            ) : null}
            {done && task.completed_at ? (
              <span>
                {" "}
                · completed {formatEtDateTime(new Date(task.completed_at))} ET
              </span>
            ) : null}
          </p>
        </div>
      </div>
      <SourceBadge source={task.source} />
    </li>
  );
}

export default async function TasksPage() {
  const supabase = await createClient();

  const [openRes, doneRes, contactsRes] = await Promise.all([
    supabase
      .from("tasks")
      .select("*, contacts(id, first_name, last_name)")
      .eq("status", "open")
      .order("due_at", { ascending: true, nullsFirst: false }),
    supabase
      .from("tasks")
      .select("*, contacts(id, first_name, last_name)")
      .eq("status", "done")
      .order("completed_at", { ascending: false })
      .limit(20),
    supabase
      .from("contacts")
      .select("id, first_name, last_name")
      .order("first_name"),
  ]);

  const openTasks = (openRes.data ?? []) as unknown as TaskWithContact[];
  const doneTasks = (doneRes.data ?? []) as unknown as TaskWithContact[];
  const contacts = (contactsRes.data ?? []) as ContactRef[];

  return (
    <>
      <PageHeader
        eyebrow="Follow-through"
        title="Tasks"
        description="Open follow-ups first, completed work tucked below."
      />

      <div className="mb-6">
        <Panel title="New task">
          <ActionForm action={createTask} submitLabel="Create task">
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="field-label" htmlFor="t-title">
                  Title *
                </label>
                <input id="t-title" name="title" required className="input" />
              </div>
              <div>
                <label className="field-label" htmlFor="t-contact">
                  Contact
                </label>
                <select id="t-contact" name="contact_id" className="input">
                  <option value="">No contact</option>
                  {contacts.map((contact) => (
                    <option key={contact.id} value={contact.id}>
                      {refName(contact)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="field-label" htmlFor="t-due">
                  Due date (ET)
                </label>
                <input id="t-due" name="due_date" type="date" className="input" />
              </div>
            </div>
          </ActionForm>
        </Panel>
      </div>

      <section className="card p-5">
        <h2 className="eyebrow mb-4">Open ({openTasks.length})</h2>
        {openTasks.length === 0 ? (
          <EmptyState>No open tasks. Add one above.</EmptyState>
        ) : (
          <ol className="divide-y divide-hairline">
            {openTasks.map((task) => (
              <TaskRowItem key={task.id} task={task} done={false} />
            ))}
          </ol>
        )}
      </section>

      <div className="mt-6">
        <Panel title={`Completed — last ${doneTasks.length}`}>
          {doneTasks.length === 0 ? (
            <EmptyState>Nothing completed yet.</EmptyState>
          ) : (
            <ol className="divide-y divide-hairline">
              {doneTasks.map((task) => (
                <TaskRowItem key={task.id} task={task} done />
              ))}
            </ol>
          )}
        </Panel>
      </div>
    </>
  );
}
