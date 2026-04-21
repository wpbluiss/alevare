import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type Section = { title: string; body: string };

type Props = {
  title: string;
  intro: string;
  sections: Section[];
};

export default function LegalPage({ title, intro, sections }: Props) {
  return (
    <>
      <Nav />
      <main className="flex-1 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <header className="mb-14">
            <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-[color:var(--accent-primary)]">
              Alevare Group Inc · Last updated December 2025
            </div>
            <h1
              className="mt-5 font-display font-medium text-[color:var(--text-primary)] text-[44px] md:text-[60px] lg:text-[72px] leading-[1.02]"
              style={{ letterSpacing: "-0.02em" }}
            >
              {title}
            </h1>
          </header>

          <p className="text-[16px] md:text-[17px] leading-relaxed text-[color:var(--text-primary)]">
            {intro}
          </p>

          <ol className="mt-14 space-y-12">
            {sections.map((s, i) => (
              <li key={i} className="grid grid-cols-[auto_1fr] gap-6 md:gap-8 items-start">
                <div
                  className="font-display font-medium text-[color:var(--accent-primary)] text-[22px] md:text-[28px] leading-none pt-1 tabular-nums"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h2
                    className="font-display text-[22px] md:text-[28px] text-[color:var(--text-primary)] font-medium leading-tight"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {s.title}
                  </h2>
                  <p className="mt-3 text-[15px] md:text-[16px] leading-relaxed text-[color:var(--text-muted)]">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-20 pt-8 border-t border-[color:var(--border-hairline)] text-[14px] text-[color:var(--text-muted)]">
            Questions? Email{" "}
            <a
              href="mailto:info@alevaregroup.com"
              className="text-[color:var(--accent-primary)] hover:text-[color:var(--accent-hover)] transition-colors"
            >
              info@alevaregroup.com
            </a>
            .
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
