export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-[color:var(--surface-elevated)] border-y border-[color:var(--border-hairline)] py-24 md:py-32 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 800px 400px at 50% 0%, rgba(201, 169, 97, 0.10), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 md:px-10 text-center">
        <div className="eyebrow mb-5">Begin your program</div>
        <h2
          className="font-display font-medium text-[color:var(--text-primary)] text-[38px] md:text-[52px] lg:text-[56px] leading-[1.08]"
          style={{ letterSpacing: "-0.02em" }}
        >
          Ready to elevate{" "}
          <span className="italic">your rooms?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-[16px] md:text-[18px] leading-relaxed text-[color:var(--text-muted)]">
          Schedule a property walkthrough. We&rsquo;ll assess, quote, and
          deliver a restoration plan tailored to your standards.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="mailto:info@alevaregroup.com?subject=Property%20Walkthrough%20Request"
            className="btn-gold inline-flex items-center justify-center px-9 py-4 text-[14px] font-semibold tracking-wide"
            style={{ borderRadius: "2px" }}
          >
            Schedule a Walkthrough <span className="ml-2">→</span>
          </a>
          <p className="text-[13px] text-[color:var(--text-muted)]">
            Or email{" "}
            <a
              href="mailto:info@alevaregroup.com"
              className="text-[color:var(--accent-primary)] hover:text-[color:var(--accent-hover)] transition-colors"
            >
              info@alevaregroup.com
            </a>{" "}
            directly.
          </p>
        </div>
      </div>
    </section>
  );
}
