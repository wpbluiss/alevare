const stats = [
  { value: "24–48 HR", label: "Standard turnaround" },
  { value: "Forbes & AAA", label: "Inspection standards" },
  { value: "100%", label: "Documented restoration cycles" },
  { value: "Zero", label: "Disruption to your guests" },
];

export default function Stats() {
  return (
    <section
      aria-label="Alevare by the numbers"
      className="border-y border-[color:var(--border-hairline)] py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 md:gap-x-10">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <div
                className="font-display font-medium text-[color:var(--accent-primary)] text-[28px] md:text-[38px] leading-tight"
                style={{ letterSpacing: "-0.01em" }}
              >
                {s.value}
              </div>
              <div className="mt-3 text-[12px] md:text-[13px] uppercase tracking-[0.15em] text-[color:var(--text-muted)]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
