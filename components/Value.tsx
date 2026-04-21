const ClockIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="14" cy="14" r="10.5" />
    <path d="M14 8v6l4 2.5" />
  </svg>
);

const SparkleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 3l2.5 7L24 12.5 16.5 15 14 22l-2.5-7L4 12.5 11.5 10z" />
    <path d="M22 3v4M24 5h-4" />
  </svg>
);

const TeamIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="10" cy="10" r="3.5" />
    <circle cx="19.5" cy="11.5" r="2.75" />
    <path d="M3 22c0-3.5 3-6.5 7-6.5s7 3 7 6.5" />
    <path d="M17 22c0-2.6 2-4.75 4.5-4.75S26 19.4 26 22" />
  </svg>
);

const items = [
  {
    icon: <ClockIcon />,
    title: "Timely Upkeep & Revenue Recovery",
    body:
      "Fewer out-of-order rooms. More revenue per available room. Rooms return to service faster with verified readiness.",
  },
  {
    icon: <SparkleIcon />,
    title: "Consistent Guest-Perfect Quality",
    body:
      "Rooms stay polished, pristine, and aligned with Forbes/AAA expectations — creating a reliably elevated experience for every guest.",
  },
  {
    icon: <TeamIcon />,
    title: "Reduced Internal Staff Workload",
    body:
      "By absorbing painting, deep cleans, and fixture resets, we ease the strain on engineering teams and improve operational efficiency.",
  },
];

export default function Value() {
  return (
    <section
      id="value"
      className="py-24 md:py-32 border-t border-[color:var(--border-hairline)]"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <div className="eyebrow mb-5">What your property gains</div>
          <h2
            className="font-display font-medium text-[color:var(--text-primary)] text-[36px] md:text-[48px] lg:text-[56px] leading-[1.08]"
            style={{ letterSpacing: "-0.02em" }}
          >
            Your rooms. Protected. Polished.{" "}
            <span className="italic">Inspection-ready.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-10">
          {items.map((it) => (
            <div key={it.title} className="flex flex-col">
              <div className="text-[color:var(--accent-primary)] mb-5">
                {it.icon}
              </div>
              <h3
                className="font-display text-[20px] md:text-[22px] text-[color:var(--text-primary)] font-medium leading-tight"
                style={{ letterSpacing: "-0.01em" }}
              >
                {it.title}
              </h3>
              <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed text-[color:var(--text-muted)] max-w-sm">
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
