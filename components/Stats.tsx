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
      segments: [{ kind: "count", to: 5 }],
      suffix: "+",
    },
    label: "Years working together",
  },
  {
    counter: {
      segments: [{ kind: "count", to: 8 }],
    },
    label: "Trades mastered in-house",
  },
  {
    counter: {
      segments: [{ kind: "count", to: 4 }],
    },
    label: "Active industry certifications",
  },
];

export default function Stats() {
  return (
    <section
      aria-label="The team behind the work"
      className="border-y border-[color:var(--border-hairline)] py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal className="text-center">
          <div className="eyebrow mb-12">The team behind the work</div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-12 gap-x-6 md:gap-x-10">
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

        <Reveal delay={240}>
          <p className="mx-auto mt-14 max-w-3xl text-center text-[15px] md:text-[16px] leading-relaxed text-[color:var(--text-muted)]">
            What makes Alevare different isn&rsquo;t just where we&rsquo;ve
            worked — it&rsquo;s{" "}
            <span className="text-[color:var(--text-primary)] font-medium">
              how we work together
            </span>
            . Our founders and core team have operated as a unit across South
            Florida&rsquo;s most prestigious properties, building a shared
            standard of execution that no assembled crew can replicate.{" "}
            <span className="text-[color:var(--text-primary)] font-medium">
              One team owns the outcome, start to finish.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
