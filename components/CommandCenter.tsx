import Reveal from "@/components/Reveal";

const ChatIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const PhotoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="1" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="M21 15l-5-5L5 21" />
  </svg>
);

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const FileIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M16 13H8M16 17H8" />
  </svg>
);

const PulseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const ArchiveIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="1" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);

const features = [
  {
    icon: <ChatIcon />,
    title: "Live Chat with the On-Site Team",
    body:
      "Chat directly with whoever is on site — not a dispatcher, not a scheduler. The person doing the work. Real answers, real time.",
  },
  {
    icon: <PhotoIcon />,
    title: "Live Photo Uploads",
    body:
      "Your team uploads before-and-after photos as work happens. You see them immediately — not next week in a report.",
  },
  {
    icon: <ClockIcon />,
    title: "Real-Time Status Updates",
    body:
      "Live cycle completion, room-by-room progress, and estimated dates updated the moment anything changes in the field.",
  },
  {
    icon: <FileIcon />,
    title: "Past Reports & Full Project History",
    body:
      "Every completed project, every past cycle, every report — permanently accessible. Pull up work from six months ago in seconds. Built for audits, boards, and insurance.",
  },
  {
    icon: <PulseIcon />,
    title: "Preventive Maintenance Tracking",
    body:
      "PM programs tracked live. Nothing is missed, nothing is deferred without your knowledge.",
  },
  {
    icon: <ArchiveIcon />,
    title: "Asset & Repair Documentation",
    body:
      "Complete audit trail of every decision, every repair, every cost — built for facility directors and ownership groups who need proof, not promises.",
  },
];

const panels = [
  {
    label: "Field Overview · Operations Dashboard",
    title: "Your team. Live on site.",
    body:
      "See cycle completion, rooms in restoration, queued work, and estimated completion dates — updated in real time as your Alevare team works. No calls. No status emails. Just live data.",
  },
  {
    label: "Restoration at a Glance · Cycle View",
    title: "Every cycle. Fully tracked.",
    body:
      "Cycle-by-cycle completion percentages, estimated finish dates, and room-by-room status — all visible the moment you open the app. Live across the field. Updates in real time.",
  },
];

const builtFor = [
  "Luxury Hotels",
  "HOA Boards",
  "Property Managers",
  "Facility Directors",
  "Luxury Residences",
];

export default function CommandCenter() {
  return (
    <section id="command-center" className="section-divider py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <div className="eyebrow mb-5 text-[color:var(--accent-primary)]">
              The Alevare Command Center · Live &amp; Deployed
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2
              className="font-display font-medium text-[color:var(--text-primary)] text-[36px] md:text-[48px] lg:text-[56px] leading-[1.08]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Your property.{" "}
              <span className="italic">In your hands. In real time.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-[color:var(--text-muted)]">
              Most contractors send you an email when the job is done.{" "}
              <span className="text-[color:var(--text-primary)] font-medium">
                Alevare clients are already watching their properties get
                restored in real time.
              </span>{" "}
              Our dedicated client app — live today at properties across South
              Florida — gives you complete visibility, instant decision-making,
              and a permanent audit trail. From the moment work begins to the
              final documentation, you are never in the dark.
            </p>
          </Reveal>
        </div>

        <Reveal delay={240}>
          <div
            className="mt-14 border border-[color:var(--border-hairline)]"
            style={{ borderRadius: "2px" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {panels.map((p, idx) => (
                <div
                  key={p.title}
                  className={`spotlight-card p-7 md:p-9 border-b border-[color:var(--border-hairline)] ${
                    idx === 0
                      ? "md:border-r"
                      : ""
                  }`}
                >
                  <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-[color:var(--text-muted)] mb-4">
                    {p.label}
                  </div>
                  <h3
                    className="font-display text-[22px] md:text-[24px] text-[color:var(--text-primary)] font-medium leading-snug"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--text-muted)]">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              {features.map((f, idx) => (
                <div
                  key={f.title}
                  className={`spotlight-card p-6 md:p-7 flex items-start gap-4 border-b border-[color:var(--border-hairline)] ${
                    idx % 2 === 0 ? "sm:border-r" : ""
                  }`}
                >
                  <div className="text-[color:var(--accent-primary)] flex-shrink-0 mt-0.5">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[color:var(--text-primary)] leading-snug">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-[color:var(--text-muted)]">
                      {f.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-7 md:p-10 bg-[color:var(--surface-elevated)] border-b border-[color:var(--border-hairline)]">
              <div>
                <div className="eyebrow mb-5 text-[color:var(--accent-primary)]">
                  Out-of-Scope · Instant Approval
                </div>
                <h3
                  className="font-display text-[26px] md:text-[32px] text-[color:var(--text-primary)] font-medium leading-[1.15]"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  Unexpected findings. Instant decisions.{" "}
                  <span className="italic">Zero project delays.</span>
                </h3>
                <p className="mt-5 text-[14px] md:text-[15px] leading-relaxed text-[color:var(--text-muted)]">
                  During restoration, we find things. It happens at every luxury
                  property. Instead of stalling the project with back-and-forth
                  emails,{" "}
                  <span className="text-[color:var(--text-primary)] font-medium">
                    Alevare sends you an in-app notification the moment
                    something is discovered
                  </span>{" "}
                  — with photos, a clear explanation, the impact if left
                  unaddressed, and{" "}
                  <span className="text-[color:var(--text-primary)] font-medium">
                    instant pricing.
                  </span>{" "}
                  You approve, defer, or decline right from your phone. The
                  project keeps moving.
                </p>
              </div>

              <div
                aria-hidden="true"
                className="shine-border border border-[color:var(--border-hairline)] bg-[color:var(--surface-base)] p-5 md:p-6"
                style={{ borderRadius: "2px" }}
              >
                <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--accent-primary)] mb-4">
                  Out-of-Scope Item · Pending Your Approval
                </div>
                <div
                  className="border border-[color:var(--border-hairline)] p-4 md:p-5"
                  style={{ borderRadius: "2px" }}
                >
                  <div className="text-[14px] font-semibold text-[color:var(--text-primary)]">
                    Subfloor moisture damage — Room 412
                  </div>
                  <div className="mt-1.5 flex justify-between text-[12px]">
                    <span className="text-[color:var(--text-muted)]">
                      Discovered during flooring restoration
                    </span>
                    <span className="text-[color:var(--accent-primary)] font-medium">
                      $1,850
                    </span>
                  </div>
                  <p className="mt-3 text-[12px] leading-relaxed text-[color:var(--text-muted)]">
                    Moisture intrusion detected beneath existing flooring.
                    Recommend remediation before new finish to prevent
                    long-term structural damage. 3 photos attached.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-[0.1em]">
                    <span
                      className="bg-[color:var(--accent-primary)] text-[color:var(--surface-base)] px-3 py-1.5"
                      style={{ borderRadius: "2px" }}
                    >
                      Approve
                    </span>
                    <span
                      className="border border-[color:var(--border-hairline)] text-[color:var(--text-muted)] px-3 py-1.5"
                      style={{ borderRadius: "2px" }}
                    >
                      Maybe Later
                    </span>
                    <span
                      className="border border-[color:var(--border-hairline)] text-[color:var(--text-muted)] px-3 py-1.5"
                      style={{ borderRadius: "2px" }}
                    >
                      Decline
                    </span>
                  </div>
                </div>
                <div className="mt-3 text-center text-[11px] tracking-[0.06em] text-[color:var(--text-muted)]">
                  Instant pricing · Photo documentation · No project delays
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-7 md:p-9">
              <div className="font-display text-[18px] md:text-[20px] leading-relaxed">
                <div className="italic text-[color:var(--text-muted)]">
                  No chasing contractors. No unanswered emails. No uncertainty.
                </div>
                <div className="text-shimmer font-medium">
                  Complete transparency. Every time.
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-[color:var(--text-muted)]">
                <span className="uppercase tracking-[0.18em] text-[11px] text-[color:var(--accent-primary)] mr-1">
                  Built for
                </span>
                {builtFor.map((b, idx) => (
                  <span key={b}>
                    {b}
                    {idx < builtFor.length - 1 && (
                      <span className="ml-2 text-[color:var(--accent-primary)]/40">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
