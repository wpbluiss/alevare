import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export type LegalBlock =
  | { type: "paragraph"; text: ReactNode }
  | { type: "h3"; text: string }
  | { type: "label"; text: string }
  | { type: "bullets"; items: ReactNode[] }
  | { type: "callout"; text: ReactNode }
  | { type: "address"; lines: string[] };

type Section = { title: string; blocks: LegalBlock[] };

type Props = {
  title: string;
  subhead: string;
  intro: ReactNode;
  sections: Section[];
  footerNotice?: ReactNode;
};

function renderBlock(block: LegalBlock, key: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          key={key}
          className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[color:var(--text-primary)]"
        >
          {block.text}
        </p>
      );
    case "h3":
      return (
        <h3
          key={key}
          className="font-display font-medium text-[20px] text-[color:var(--text-primary)] mt-10 mb-4 leading-tight"
          style={{ letterSpacing: "-0.01em" }}
        >
          {block.text}
        </h3>
      );
    case "label":
      return (
        <p
          key={key}
          className="mt-6 mb-2 text-[15px] md:text-[16px] font-semibold text-[color:var(--text-primary)]"
        >
          {block.text}
        </p>
      );
    case "bullets":
      return (
        <ul
          key={key}
          className="list-disc pl-6 space-y-2 my-4 text-[15px] md:text-[16px] leading-relaxed text-[color:var(--text-primary)]"
        >
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div
          key={key}
          className="border-l-2 border-[color:var(--accent-primary)] bg-[color:var(--accent-primary)]/5 px-5 py-3 my-6 text-[15px] md:text-[16px] leading-relaxed font-semibold text-[color:var(--text-primary)]"
        >
          {block.text}
        </div>
      );
    case "address":
      return (
        <address
          key={key}
          className="not-italic text-[15px] md:text-[16px] leading-relaxed text-[color:var(--text-primary)] my-6"
        >
          {block.lines.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </address>
      );
  }
}

export default function LegalPage({
  title,
  subhead,
  intro,
  sections,
  footerNotice,
}: Props) {
  return (
    <>
      <Nav />
      <main className="flex-1 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <header className="mb-14">
            <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-[color:var(--accent-primary)]">
              {subhead}
            </div>
            <h1
              className="mt-5 font-display font-medium text-[color:var(--text-primary)] text-[44px] md:text-[60px] lg:text-[72px] leading-[1.02]"
              style={{ letterSpacing: "-0.02em" }}
            >
              {title}
            </h1>
          </header>

          <div className="text-[16px] md:text-[17px] leading-relaxed text-[color:var(--text-primary)] space-y-4">
            {intro}
          </div>

          <ol className="mt-14 space-y-12">
            {sections.map((s, i) => (
              <li
                key={i}
                className="grid grid-cols-[auto_1fr] gap-6 md:gap-8 items-start"
              >
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
                  {s.blocks.map((b, j) => renderBlock(b, j))}
                </div>
              </li>
            ))}
          </ol>

          {footerNotice && (
            <>
              <hr className="border-[color:var(--border-hairline)] my-12" />
              {footerNotice}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
