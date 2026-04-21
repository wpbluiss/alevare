import StatCounter from "@/components/StatCounter";
import Reveal from "@/components/Reveal";

type Stat = {
  counter: React.ComponentProps<typeof StatCounter> | null;
  display?: string;
  label: string;
};

const stats: Stat[] = [
  {
    counter: {
      segments: [
        { kind: "count", to: 24 },
        { kind: "text", value: "–" },
        { kind: "count", to: 48 },
      ],
      suffix: " HR",
    },
    label: "Standard turnaround",
  },
  {
    counter: null,
    display: "Forbes & AAA",
    label: "Inspection standards",
  },
  {
    counter: {
      segments: [{ kind: "count", to: 100 }],
      suffix: "%",
    },
    label: "Documented restoration cycles",
  },
  {
    counter: null,
    display: "Zero",
    label: "Disruption to your guests",
  },
];

export default function Stats() {
  return (
    <section
      aria-label="Alevare by the numbers"
      className="border-y border-[color:var(--border-hairline)] py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 md:gap-x-10">
          {stats.map((s, idx) => (
            <Reveal key={s.label} delay={idx * 80} className="flex flex-col items-center text-center">
              {s.counter ? (
                <StatCounter {...s.counter} />
              ) : (
                <div
                  className="font-display font-medium text-[color:var(--accent-primary)] text-[28px] md:text-[38px] leading-tight"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {s.display}
                </div>
              )}
              <div className="mt-3 text-[12px] md:text-[13px] uppercase tracking-[0.15em] text-[color:var(--text-muted)]">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
