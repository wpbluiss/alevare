import Link from "next/link";
import { createClient } from "@/lib/crm/supabase/server";
import { ActivityTimeline } from "@/components/crm/activity-timeline";
import { EmptyState, PageHeader, SourceBadge } from "@/components/crm/ui";
import {
  etToUtc,
  formatEtDate,
  formatEtDateTime,
  formatEtTime,
  getEtParts,
} from "@/lib/crm/et";
import {
  refName,
  type ActivityWithRefs,
  type TaskWithContact,
} from "@/lib/crm/joined";
import type { MeetingRow } from "@/lib/crm/database.types";

export const metadata = { title: "Dashboard" };

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="card px-5 py-4">
      <p className="eyebrow">{label}</p>
      <p className="font-display mt-2 text-4xl text-ivory">{value}</p>
    </div>
  );
}

export default async function DashboardPage() {
  const supabase = await createClient();

  const now = new Date();
  const nowIso = now.toISOString();
  const today = getEtParts(now);
  const endOfTodayEtIso = etToUtc(
    today.year,
    today.month,
    today.day,
    23,
    59
  ).toISOString();

  const [
    companiesRes,
    contactsRes,
    openTasksRes,
    upcomingCountRes,
    nextMeetingsRes,
    recentActivitiesRes,
    dueTasksRes,
  ] = await Promise.all([
    supabase.from("companies").select("id", { count: "exact", head: true }),
    supabase.from("contacts").select("id", { count: "exact", head: true }),
    supabase
      .from("tasks")
      .select("id", { count: "exact", head: true })
      .eq("status", "open"),
    supabase
      .from("meetings")
      .select("id", { count: "exact", head: true })
      .eq("status", "confirmed")
      .gte("starts_at", nowIso),
    supabase
      .from("meetings")
      .select("*")
      .eq("status", "confirmed")
      .gte("starts_at", nowIso)
      .order("starts_at", { ascending: true })
      .limit(5),
    supabase
      .from("activities")
      .select(
        "*, contacts(id, first_name, last_name), companies(id, name)"
      )
      .order("occurred_at", { ascending: false })
      .limit(5),
    supabase
      .from("tasks")
      .select("*, contacts(id, first_name, last_name)")
      .eq("status", "open")
      .not("due_at", "is", null)
      .lte("due_at", endOfTodayEtIso)
      .order("due_at", { ascending: true }),
  ]);

  const nextMeetings = (nextMeetingsRes.data ?? []) as MeetingRow[];
  const recentActivities = (recentActivitiesRes.data ??
    []) as unknown as ActivityWithRefs[];
  const dueTasks = (dueTasksRes.data ?? []) as unknown as TaskWithContact[];

  return (
    <>
      <PageHeader
        eyebrow="Overview"
        title="Dashboard"
        description="Pipeline, follow-ups, and what needs attention today."
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Companies" value={companiesRes.count ?? 0} />
        <StatCard label="Contacts" value={contactsRes.count ?? 0} />
        <StatCard label="Open tasks" value={openTasksRes.count ?? 0} />
        <StatCard
          label="Upcoming meetings"
          value={upcomingCountRes.count ?? 0}
        />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="eyebrow">Next meetings</h2>
            <Link href="/crm/calendar" className="text-xs text-gold hover:text-gold-hover">
              Calendar →
            </Link>
          </div>
          {nextMeetings.length === 0 ? (
            <EmptyState>No upcoming confirmed meetings.</EmptyState>
          ) : (
            <ol className="divide-y divide-hairline">
              {nextMeetings.map((m) => (
                <li key={m.id} className="py-3 first:pt-0 last:pb-0">
                  <p className="text-sm text-ivory">
                    {m.contact_name}
                    {m.company_name ? (
                      <span className="text-muted"> · {m.company_name}</span>
                    ) : null}
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    {formatEtDate(new Date(m.starts_at))} ·{" "}
                    {formatEtTime(new Date(m.starts_at))} –{" "}
                    {formatEtTime(new Date(m.ends_at))} ET
                  </p>
                </li>
              ))}
            </ol>
          )}
        </section>

        <section className="card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="eyebrow">Recent activity</h2>
            <Link href="/crm/activities" className="text-xs text-gold hover:text-gold-hover">
              All activity →
            </Link>
          </div>
          <ActivityTimeline activities={recentActivities} />
        </section>
      </div>

      <section className="card mt-6 p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="eyebrow">Due — overdue &amp; today</h2>
          <Link href="/crm/tasks" className="text-xs text-gold hover:text-gold-hover">
            All tasks →
          </Link>
        </div>
        {dueTasks.length === 0 ? (
          <EmptyState>Nothing overdue. Clear runway.</EmptyState>
        ) : (
          <ol className="divide-y divide-hairline">
            {dueTasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
              >
                <div>
                  <p className="text-sm text-ivory">{task.title}</p>
                  <p className="mt-1 text-xs text-muted">
                    {task.contacts ? (
                      <Link
                        href={`/crm/contacts/${task.contacts.id}`}
                        className="text-gold hover:text-gold-hover"
                      >
                        {refName(task.contacts)}
                      </Link>
                    ) : (
                      "No contact"
                    )}
                    {task.due_at ? (
                      <span>
                        {" "}
                        · due {formatEtDateTime(new Date(task.due_at))} ET
                      </span>
                    ) : null}
                  </p>
                </div>
                <SourceBadge source={task.source} />
              </li>
            ))}
          </ol>
        )}
      </section>
    </>
  );
}
