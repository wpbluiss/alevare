import Reveal from "@/components/Reveal";

const certifications = [
  { abbr: "CPO", name: "Certified Pool Operator" },
  { abbr: "EPA", name: "Environmental Protection" },
  { abbr: "OSHA 30", name: "Construction Safety" },
  { abbr: "FMP", name: "Facility Management Professional" },
];

const standards = [
  {
    badge: "★★★★★",
    title: "Forbes Travel Guide · 5-Star",
    body:
      "900+ service and physical condition criteria. We know what inspectors see — and what they don't forgive.",
  },
  {
    badge: "◆◆◆◆◆",
    title: "AAA · Five Diamond",
    body:
      "Exceptional facility condition is non-negotiable. Our PM programs are built to sustain that rating year-round.",
  },
];

export default function Credentials() {
  return (
    <section id="standards" className="section-divider py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal className="text-center">
          <div className="eyebrow mb-12">Certifications</div>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {certifications.map((c, idx) => (
            <Reveal key={c.abbr} delay={idx * 80}>
              <div
                className="spotlight-card h-full border border-[color:var(--border-hairline)] bg-[color:var(--surface-elevated)] p-5 md:p-6 text-center"
                style={{ borderRadius: "2px" }}
              >
                <div
                  className="font-display text-[22px] md:text-[26px] font-medium text-[color:var(--accent-primary)]"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {c.abbr}
                </div>
                <div className="mt-2 text-[12px] uppercase tracking-[0.12em] text-[color:var(--text-muted)]">
                  {c.name}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center">
          <div className="eyebrow mt-20 mb-12">
            Standards we&rsquo;re fluent in
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {standards.map((s, idx) => (
            <Reveal key={s.title} delay={idx * 100}>
              <div
                className="spotlight-card h-full border border-[color:var(--border-hairline)] bg-[color:var(--surface-elevated)] p-6 md:p-8 flex items-start gap-5"
                style={{ borderRadius: "2px" }}
              >
                <div
                  className="text-[color:var(--accent-primary)] text-[18px] md:text-[20px] flex-shrink-0 leading-none mt-1"
                  aria-hidden="true"
                >
                  {s.badge}
                </div>
                <div>
                  <h3 className="text-[15px] md:text-[16px] font-semibold text-[color:var(--text-primary)]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] md:text-[14px] leading-relaxed text-[color:var(--text-muted)]">
                    {s.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
