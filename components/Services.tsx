const KeyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="10" cy="16" r="5" />
    <path d="M15 16h14" />
    <path d="M23 16v5" />
    <path d="M27 16v3" />
    <circle cx="10" cy="16" r="1.2" fill="currentColor" />
  </svg>
);

const ToolIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 4a6 6 0 00-5.66 7.93L4 23.27 7.73 27l11.34-11.34A6 6 0 1021 4z" />
    <circle cx="21" cy="10" r="1.2" fill="currentColor" />
  </svg>
);

const services = [
  {
    icon: <KeyIcon />,
    title: "Room Restoration & Detailing",
    body:
      "Bring rooms back to guest-ready condition within 24–48 hours. Paint touch-ups, surface repairs, deep cleaning, linen reset, staging, and full detailing — all executed to Forbes and AAA presentation standards.",
  },
  {
    icon: <ToolIcon />,
    title: "Engineering Support",
    body:
      "Relieve overworked engineering departments by offloading repetitive and time-consuming tasks — freeing your internal team to focus on priority repairs and guest-facing issues.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <div className="eyebrow mb-5">What we do</div>
          <h2
            className="font-display font-medium text-[color:var(--text-primary)] text-[36px] md:text-[48px] lg:text-[56px] leading-[1.08]"
            style={{ letterSpacing: "-0.02em" }}
          >
            Operational support where it matters most.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((s) => (
            <article
              key={s.title}
              className="border border-[color:var(--border-hairline)] bg-[color:var(--surface-elevated)] p-8 md:p-10 transition-colors hover:border-[color:var(--accent-primary)]/50"
              style={{ borderRadius: "2px" }}
            >
              <div className="text-[color:var(--accent-primary)] mb-6">{s.icon}</div>
              <h3
                className="font-display text-[24px] md:text-[28px] text-[color:var(--text-primary)] font-medium leading-tight"
                style={{ letterSpacing: "-0.01em" }}
              >
                {s.title}
              </h3>
              <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[color:var(--text-muted)]">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
