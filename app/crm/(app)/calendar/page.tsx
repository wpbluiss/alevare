import { headers } from "next/headers";
import { createClient } from "@/lib/crm/supabase/server";
import { cancelMeeting } from "@/lib/crm/actions/meetings";
import { CopyField } from "@/components/crm/copy-field";
import {
  EmptyState,
  PageHeader,
  Panel,
  StatusBadge,
} from "@/components/crm/ui";
import {
  addDaysToKey,
  etDateKey,
  etDayStart,
  formatDateKeyLong,
  formatEtTime,
} from "@/lib/crm/et";
import type { MeetingRow } from "@/lib/crm/database.types";

export const metadata = { title: "Calendar" };

function MeetingItem({ meeting }: { meeting: MeetingRow }) {
  const starts = new Date(meeting.starts_at);
  const ends = new Date(meeting.ends_at);
  const cancelled = meeting.status === "cancelled";

  return (
    <li className="flex items-start justify-between gap-4 py-4 first:pt-0 last:pb-0">
      <div className="flex items-start gap-4">
        <div className="w-36 shrink-0">
          <p className={`text-sm ${cancelled ? "text-muted" : "text-gold"}`}>
            {formatEtTime(starts)} – {formatEtTime(ends)}
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-muted">
            Eastern
          </p>
        </div>
        <div>
          <p
            className={`text-sm ${
              cancelled ? "text-muted line-through" : "text-ivory"
            }`}
          >
            {meeting.contact_name}
            {meeting.company_name ? (
              <span className="text-muted"> · {meeting.company_name}</span>
            ) : null}
          </p>
          <p className="mt-1 text-xs text-muted">
            {[meeting.contact_email, meeting.contact_phone]
              .filter(Boolean)
              .join(" · ")}
          </p>
          {meeting.notes ? (
            <p className="mt-1 whitespace-pre-line text-xs text-muted">
              {meeting.notes}
            </p>
          ) : null}
          <div className="mt-2">
            <StatusBadge status={meeting.status} />
          </div>
        </div>
      </div>
      {meeting.status === "confirmed" ? (
        <form action={cancelMeeting}>
          <input type="hidden" name="id" value={meeting.id} />
          <button type="submit" className="btn-ghost !px-3 !py-1.5">
            Cancel
          </button>
        </form>
      ) : null}
    </li>
  );
}

function groupByEtDay(meetings: MeetingRow[]): Map<string, MeetingRow[]> {
  const groups = new Map<string, MeetingRow[]>();
  for (const meeting of meetings) {
    const key = etDateKey(new Date(meeting.starts_at));
    const list = groups.get(key) ?? [];
    list.push(meeting);
    groups.set(key, list);
  }
  return groups;
}

export default async function CalendarPage() {
  const supabase = await createClient();
  const headerList = await headers();

  const host = headerList.get("host") ?? "localhost:3000";
  const proto = headerList.get("x-forwarded-proto") ?? "http";
  const bookingUrl = `${proto}://${host}/crm/book`;

  const now = new Date();
  const todayKey = etDateKey(now);
  const rangeStart = etDayStart(addDaysToKey(todayKey, -7));
  const rangeEnd = etDayStart(addDaysToKey(todayKey, 14));
  const todayStart = etDayStart(todayKey);

  const { data } = await supabase
    .from("meetings")
    .select("*")
    .gte("starts_at", rangeStart.toISOString())
    .lt("starts_at", rangeEnd.toISOString())
    .order("starts_at", { ascending: true });

  const meetings = (data ?? []) as MeetingRow[];
  const upcoming = meetings.filter(
    (m) => new Date(m.starts_at) >= todayStart
  );
  const past = meetings
    .filter((m) => new Date(m.starts_at) < todayStart)
    .reverse();

  const upcomingGroups = groupByEtDay(upcoming);
  const upcomingKeys = Array.from({ length: 14 }, (_, i) =>
    addDaysToKey(todayKey, i)
  ).filter((key) => upcomingGroups.has(key));

  const pastGroups = groupByEtDay(past);

  return (
    <>
      <PageHeader
        eyebrow="Schedule"
        title="Calendar"
        description="The next 14 days of meetings, shown in Eastern Time."
      />

      <section className="card mb-6 p-5">
        <h2 className="eyebrow mb-3">Public booking link</h2>
        <p className="mb-3 text-sm text-muted">
          Share this link — clients pick any open 30-minute slot between 9 AM
          and 5 PM ET.
        </p>
        <CopyField value={bookingUrl} />
      </section>

      {upcomingKeys.length === 0 ? (
        <div className="card p-5">
          <EmptyState>
            No meetings in the next 14 days. Share the booking link above.
          </EmptyState>
        </div>
      ) : (
        <div className="space-y-6">
          {upcomingKeys.map((key) => (
            <section key={key} className="card p-5">
              <h2 className="eyebrow mb-4">
                {formatDateKeyLong(key)}
                {key === todayKey ? (
                  <span className="ml-2 text-gold">· Today</span>
                ) : null}
              </h2>
              <ol className="divide-y divide-hairline">
                {(upcomingGroups.get(key) ?? []).map((meeting) => (
                  <MeetingItem key={meeting.id} meeting={meeting} />
                ))}
              </ol>
            </section>
          ))}
        </div>
      )}

      <div className="mt-6">
        <Panel title="Past 7 days">
          {past.length === 0 ? (
            <EmptyState>No meetings in the past 7 days.</EmptyState>
          ) : (
            <div className="space-y-6">
              {Array.from(pastGroups.keys()).map((key) => (
                <section key={key}>
                  <h3 className="eyebrow mb-3">{formatDateKeyLong(key)}</h3>
                  <ol className="divide-y divide-hairline">
                    {(pastGroups.get(key) ?? []).map((meeting) => (
                      <MeetingItem key={meeting.id} meeting={meeting} />
                    ))}
                  </ol>
                </section>
              ))}
            </div>
          )}
        </Panel>
      </div>
    </>
  );
}
