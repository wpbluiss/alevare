import Reveal from "@/components/Reveal";

const properties = [
  { name: "Ritz-Carlton", type: "Luxury Hotel · South Florida" },
  { name: "Acqualina Resort & Residences", type: "Ultra-Luxury · Sunny Isles" },
  { name: "Pier Sixty-Six", type: "Luxury Resort · Fort Lauderdale" },
  { name: "Four Seasons", type: "Luxury Hotel · South Florida" },
  { name: "Trump International", type: "Luxury Resort · South Florida" },
  { name: "Boca Raton Resort", type: "Historic Luxury · Boca Raton" },
];

export default function Properties() {
  return (
    <section id="properties" className="section-divider py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal className="text-center">
          <div className="eyebrow mb-12">
            Properties our team knows from the inside
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {properties.map((p, idx) => (
            <Reveal key={p.name} delay={idx * 60}>
              <div
                className="spotlight-card h-full border border-[color:var(--border-hairline)] bg-[color:var(--surface-elevated)] p-5 md:p-6 transition-colors hover:border-[color:var(--accent-primary)]/60"
                style={{ borderRadius: "2px" }}
              >
                <div
                  className="font-display text-[18px] md:text-[20px] font-medium text-[color:var(--text-primary)] leading-snug"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {p.name}
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.12em] text-[color:var(--accent-primary)]">
                  {p.type}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
