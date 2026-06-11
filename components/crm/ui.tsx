import type { ActivityDirection, ActivityType } from "@/lib/crm/database.types";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-8">
      <p className="eyebrow mb-2">{eyebrow}</p>
      <h1 className="font-display text-3xl text-ivory">{title}</h1>
      {description ? (
        <p className="mt-2 text-sm text-muted">{description}</p>
      ) : null}
    </header>
  );
}

export function Panel({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details className="panel card" open={defaultOpen}>
      <summary className="flex items-center justify-between px-5 py-4">
        <span className="eyebrow">{title}</span>
        <span className="chevron text-sm" aria-hidden />
      </summary>
      <div className="border-t border-hairline p-5">{children}</div>
    </details>
  );
}

export function EmptyState({ children }: { children: React.ReactNode }) {
  return <p className="px-1 py-6 text-sm text-muted">{children}</p>;
}

const ACTIVITY_LABELS: Record<ActivityType, string> = {
  email: "Email",
  text: "Text",
  call: "Call",
  meeting: "Meeting",
  note: "Note",
};

const ACTIVITY_GLYPHS: Record<ActivityType, string> = {
  email: "@",
  text: "#",
  call: "✆",
  meeting: "◷",
  note: "✎",
};

export function ActivityBadge({
  type,
  direction,
}: {
  type: ActivityType;
  direction: ActivityDirection | null;
}) {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        aria-hidden
        className="flex h-7 w-7 items-center justify-center rounded-[2px] border border-hairline text-[13px] text-gold"
      >
        {ACTIVITY_GLYPHS[type]}
      </span>
      <span className="eyebrow !text-ivory">
        {ACTIVITY_LABELS[type]}
        {direction ? (
          <span className="ml-1 text-muted">
            · {direction === "inbound" ? "Inbound" : "Outbound"}
          </span>
        ) : null}
      </span>
    </span>
  );
}

export function SourceBadge({ source }: { source: string }) {
  const automated = source === "automation";
  return (
    <span
      className={`inline-block rounded-[2px] border px-2 py-0.5 text-[10px] uppercase tracking-[0.15em] ${
        automated
          ? "border-gold/40 text-gold"
          : "border-hairline text-muted"
      }`}
    >
      {automated ? "Automation" : "Manual"}
    </span>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    confirmed: "border-gold/40 text-gold",
    cancelled: "border-hairline text-muted line-through",
    completed: "border-hairline text-ivory",
  };
  return (
    <span
      className={`inline-block rounded-[2px] border px-2 py-0.5 text-[10px] uppercase tracking-[0.15em] ${
        styles[status] ?? "border-hairline text-muted"
      }`}
    >
      {status}
    </span>
  );
}
