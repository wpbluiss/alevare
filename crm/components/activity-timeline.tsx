import Link from "next/link";
import { ActivityBadge, EmptyState } from "@/components/ui";
import { formatEtDateTime } from "@/lib/et";
import { refName, type ActivityWithRefs } from "@/lib/joined";

export function ActivityTimeline({
  activities,
  showRefs = true,
}: {
  activities: ActivityWithRefs[];
  showRefs?: boolean;
}) {
  if (activities.length === 0) {
    return <EmptyState>No activity yet.</EmptyState>;
  }

  return (
    <ol className="divide-y divide-hairline">
      {activities.map((activity) => (
        <li key={activity.id} className="py-4 first:pt-0 last:pb-0">
          <div className="flex items-start justify-between gap-4">
            <ActivityBadge
              type={activity.type}
              direction={activity.direction}
            />
            <time className="shrink-0 text-xs text-muted">
              {formatEtDateTime(new Date(activity.occurred_at))} ET
            </time>
          </div>

          {showRefs && (activity.contacts || activity.companies) ? (
            <p className="mt-2 text-xs text-muted">
              {activity.contacts ? (
                <Link
                  href={`/contacts/${activity.contacts.id}`}
                  className="text-gold transition-colors hover:text-gold-hover"
                >
                  {refName(activity.contacts)}
                </Link>
              ) : null}
              {activity.contacts && activity.companies ? " · " : null}
              {activity.companies ? (
                <Link
                  href={`/companies/${activity.companies.id}`}
                  className="text-gold transition-colors hover:text-gold-hover"
                >
                  {activity.companies.name}
                </Link>
              ) : null}
            </p>
          ) : null}

          {activity.subject ? (
            <p className="mt-2 text-sm text-ivory">{activity.subject}</p>
          ) : null}
          {activity.body ? (
            <p className="mt-1 whitespace-pre-line text-sm text-muted">
              {activity.body}
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
