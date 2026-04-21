import Reveal from "@/components/Reveal";

const steps = [
  {
    number: "01",
    title: "Pre-Walk Assessment",
    body:
      "Our Supervisor and QA Inspector conduct a detailed room assessment. Items tagged, finishes evaluated, staging needs confirmed. Complete transparency before work begins.",
  },
  {
    number: "02",
    title: "Documentation & Planning",
    body:
      "A clear task plan is created: required repairs, finish corrections, paint enhancements, HVAC/drain needs, and deep-cleaning requirements. All findings timestamped and logged.",
  },
  {
    number: "03",
    title: "White-Glove Restoration",
    body:
      "Our specialized team — Mechanics, HVAC Technician, Painters, Housekeeping, Houseman — executes the full PRP sequence. Five-star detail work, no shortcuts.",
  },
  {
    number: "04",
    title: "QA Verification & Turnover",
    body:
      "Final walkthrough with photographic evidence. Rooms officially cleared for service within 24 hours (48 hours only under special conditions), meeting Forbes and AAA standards.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="section-divider py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <div className="eyebrow mb-5">The Perfect Room Program</div>
          </Reveal>
          <Reveal delay={80}>
            <h2
              className="font-display font-medium text-[color:var(--text-primary)] text-[36px] md:text-[48px] lg:text-[56px] leading-[1.08]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Four stages. Fully documented.{" "}
              <span className="italic text-[color:var(--accent-primary)]">
                Every time.
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 relative">
          <div
            className="absolute left-5 md:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[color:var(--accent-primary)]/40 to-transparent"
            aria-hidden="true"
          />

          <ol className="space-y-14 md:space-y-20">
            {steps.map((step, idx) => (
              <Reveal as="li" delay={idx * 80} key={step.number}>
                <div className="relative grid grid-cols-[40px_1fr] md:grid-cols-[120px_1fr] gap-6 md:gap-12 items-start">
                  <div className="relative">
                    <div
                      className="absolute left-5 md:left-8 top-4 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-[color:var(--accent-primary)] ring-4 ring-[color:var(--surface-base)]"
                      aria-hidden="true"
                    />
                    <div
                      className="hidden md:block font-display font-medium text-[color:var(--accent-primary)] text-[56px] leading-none pl-16"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <div className="md:hidden font-display font-medium text-[color:var(--accent-primary)] text-[28px] leading-none mb-3">
                      {step.number}
                    </div>
                    <h3
                      className="font-display text-[22px] md:text-[28px] text-[color:var(--text-primary)] font-medium leading-tight"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-[15px] md:text-[16px] leading-relaxed text-[color:var(--text-muted)]">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
